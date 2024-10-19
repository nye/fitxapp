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
});

export { sha256sum } from './nodeCrypto';
export { versions } from './versions';
