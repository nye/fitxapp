/**
 * @module preload
 */

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
	setWhiteIcon: () => ipcRenderer.send('set-white-icon'),
	setRedIcon: () => ipcRenderer.send('set-red-icon'),
	clockIn: () => ipcRenderer.invoke('clock-in'),
});

export { sha256sum } from './nodeCrypto';
export { versions } from './versions';
