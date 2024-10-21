import {app, BrowserWindow, Tray, ipcMain, shell, nativeImage} from 'electron';
import {join} from 'node:path';
import serve from 'electron-serve';
import path from 'path';
import { DateTime } from 'luxon';
import {API} from './lib/api';

const loadURL = serve({ directory: join(app.getAppPath(), 'packages/renderer/dist') });

let tray;
let window;

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
}

export async function init(){
	ipc();
	setupTray();

	// TODO: Amagar la icona del dock
	// TODO: Al tancar l'app, demanar de parar si s'està fitxant o enviar un clock-out directament, sense demanar-ho.
}

function setupTray(){
	let icon_white = nativeImage.createFromPath(join(app.getAppPath(), 'resources/icon-white.png'));
	let icon_red = nativeImage.createFromPath(join(app.getAppPath(), 'resources/icon-red.png'));

	tray = new Tray(icon_white);
	tray.getIgnoreDoubleClickEvents();
	tray.setToolTip('Fitxa la teva jornada a Factorial HR');

	tray.on('click', restoreOrCreateWindow);

	ipcMain.on('set-white-icon', () => {
		tray.setImage(icon_white);
	});

	ipcMain.on('set-red-icon', () => {
		tray.setImage(icon_red);
	});
}

function ipc(){
	const api = new API();

	ipcMain.handle('open-external-url', async (event, url) => {
		await shell.openExternal(url);
	});

	ipcMain.handle('shifts', async() => {
		try{
			const response = await api.get('/attendance/shifts?employee_ids[]=' + api.employee_id + '&start_on=' + new Date().toISOString().split('T')[0]);

			return response.data;
		}catch(error){
			console.error('Error fetching data:', error.message);
			throw error;
		}
	});

	ipcMain.handle('clock-in', async() => {
		try{
			return await api.post('/attendance/shifts/clock_in', {
				employee_id: api.employee_id,
				now: DateTime.now().setZone('Europe/Madrid').toFormat('yyyy-MM-dd HH:mm:ss'),
			});
		}catch(error){
			console.error('Error fetching data:', error.message);
			throw error;
		}
	});

	ipcMain.handle('clock-out', async() => {
		try{
			return await api.post('/attendance/shifts/clock_out', {
				employee_id: api.employee_id,
				now: DateTime.now().setZone('Europe/Madrid').toFormat('yyyy-MM-dd HH:mm:ss'),
			});
		}catch(error){
			console.error('Error fetching data:', error.message);
			throw error;
		}
	});
}
