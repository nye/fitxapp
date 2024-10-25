import {app, BrowserWindow, Tray, ipcMain, shell, nativeImage} from 'electron';
import {join} from 'node:path';
import serve from 'electron-serve';
import path from 'path';
import {API} from './lib/api';

const loadURL = serve({ directory: join(app.getAppPath(), 'packages/renderer/dist') });

let icon_white;
let icon_red;

let tray;
let window;
let isWindowOpen;
let interval;

let clocking = false;
let minutes_past = 0;
let minutes = 0;
let last_start_time = 0;

if(import.meta.env.DEV){
	icon_white = nativeImage.createFromPath(join(__dirname, '../../../buildResources/icon-whiteTemplate.png'));
	icon_red = nativeImage.createFromPath(join(__dirname, '../../../buildResources/icon-red.png'));
}else{
	icon_white = nativeImage.createFromPath(join(app.getAppPath(), 'resources/icon-whiteTemplate.png'));
	icon_red = nativeImage.createFromPath(join(app.getAppPath(), 'resources/icon-red.png'));
}


async function createWindow() {
	const browserWindow = new BrowserWindow({
		width: 384,
		height: 460,
		show: false, // Use the 'ready-to-show' event to show the instantiated BrowserWindow.
		titleBarStyle: 'hidden',
		resizable: false,
		icon: path.join(__dirname, '../../../buildResources/icon.icns'),
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			sandbox: false, // Sandbox disabled because the demo of preload script depend on the Node.js api
			webviewTag: false, // The webview tag is not recommended. Consider alternatives like an iframe or Electron's BrowserView. @see https://www.electronjs.org/docs/latest/api/webview-tag#warning
			preload: join(app.getAppPath(), 'packages/preload/dist/index.cjs'),
		},
	});

	/**
	 * If the 'show' property of the BrowserWindow's constructor is omitted from the initialization options,
	 * it then defaults to 'true'. This can cause flickering as the window loads the html content,
	 * and it also has show problematic behaviour with the closing of the window.
	 * Use `show: false` and listen to the  `ready-to-show` event to show the window.
	 *
	 * @see https://github.com/electron/electron/issues/25012 for the afford mentioned issue.
	 */
	browserWindow.on('ready-to-show', () => {
		browserWindow.show();

		if(import.meta.env.DEV){
			browserWindow.webContents.openDevTools();
		}
	});

	// HGide dock icon when the window is closed
	browserWindow.on('closed', () => {
		isWindowOpen = false;
		app.dock.hide();
	});

	/**
	 * Load the main page of the main window.
	 */
	if(import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined){
		/**
		 * Load from the Vite dev server for development.
		 */
		await browserWindow.loadURL(import.meta.env.VITE_DEV_SERVER_URL);
	}else{
		/**
		 * Load from the local file system for production and test.
		 *
		 * Use BrowserWindow.loadFile() instead of BrowserWindow.loadURL() for WhatWG URL API limitations
		 * when path contains special characters like `#`.
		 * Let electron handle the path quirks.
		 * @see https://github.com/nodejs/node/issues/12682
		 * @see https://github.com/electron/electron/issues/6869
		 */
		// await browserWindow.loadFile(resolve(__dirname, '../../renderer/dist/index.html'));
		await loadURL(browserWindow);
	}

	return browserWindow;
}

/**
 * Restore an existing BrowserWindow or Create a new BrowserWindow.
 */
export async function restoreOrCreateWindow() {
	window = BrowserWindow.getAllWindows().find(w => !w.isDestroyed());

	if(window === undefined){
		window = await createWindow();
	}

	if(window.isMinimized()){
		window.restore();
	}

	window.focus();
	await app.dock.show();

	isWindowOpen = true;
	interval = setInterval(calculateTime, 1000);
}

export async function init(){
	const api = new API();

	tray = new Tray(icon_white);
	tray.getIgnoreDoubleClickEvents();
	tray.setToolTip('Fitxa la teva jornada a Factorial HR');
	tray.on('click', restoreOrCreateWindow);

	// UI
	ipcMain.handle('open-external-url', async (event, url) => await shell.openExternal(url));
	ipcMain.handle('set-tray-title', async (event, title) => tray.setTitle(title));
	ipcMain.on('set-white-icon', () => tray.setImage(icon_white));
	ipcMain.on('set-red-icon', () => tray.setImage(icon_red));

	// FACTORIAL API
	ipcMain.handle('shifts', async () => {
		const shifts = await api.shifts();

		clocking = shifts && shifts.some(shift => !shift.clock_out);
		minutes_past = shifts && shifts.reduce((acc, shift) => acc + shift.minutes, 0);

		if(clocking){
			const last_shift = shifts.find(shift => !shift.clock_out);

			tray.setImage(icon_red);
			last_start_time = new Date(last_shift.date + ' ' + last_shift.clock_in);
		}

		return shifts;
	});

	ipcMain.handle('clock-in', async (modifier) => {
		const response = await api.clockIn(modifier);

		tray.setImage(icon_red);
		last_start_time = new Date(response.date + ' ' + response.clock_in);
		clocking = true;

		return response;
	});

	ipcMain.handle('clock-out', async (modifier) => {
		const response = await api.clockOut(modifier);

		tray.setImage(icon_white);
		clocking = false;

		return response;
	});

	app.on('before-quit', async () => {
		clearInterval(interval);
		await api.clockOut(); // TODO: No està funcionant...
	});
}

function calculateTime(){
	let hh = 0;
	let mm = 0;

	if(clocking){
		const now = new Date();
		const diff = now - last_start_time;

		minutes = Math.floor(diff / 60000) + minutes_past;

		hh = Math.floor(minutes / 60);
		mm = minutes % 60;
	}else{
		minutes = minutes_past;
		hh = Math.floor(minutes / 60);
		mm = minutes % 60;
	}

	const ret = `${hh}:${mm < 10 ? '0' : ''}${mm}`;

	if(isWindowOpen) window.webContents.send('update-hours', ret);
	tray.setTitle(ret);
}
