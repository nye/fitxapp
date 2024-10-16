/**
 * @module preload
 */

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	setWhiteIcon: () => ipcRenderer.send('set-white-icon'),
	setRedIcon: () => ipcRenderer.send('set-red-icon'),
});

export { sha256sum } from './nodeCrypto';
export { versions } from './versions';
