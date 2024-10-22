/**
 * @module preload
 */

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
	// FACTORIAL API
	shifts: () => ipcRenderer.invoke('shifts'),
	clockIn: () => ipcRenderer.invoke('clock-in'),
	clockOut: () => ipcRenderer.invoke('clock-out'),

	// UI
	setWhiteIcon: () => ipcRenderer.send('set-white-icon'),
	setRedIcon: () => ipcRenderer.send('set-red-icon'),
	openExternalUrl: (url) => ipcRenderer.invoke('open-external-url', url),

	// Main > Renderer
	onUpdateHours: (callback) => ipcRenderer.on('update-hours', (_event, value) => callback(value)),
});

export { sha256sum } from './nodeCrypto';
export { versions } from './versions';
