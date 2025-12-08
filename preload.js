// const { contextBridge, ipcRenderer } = require('electron/renderer')

// const { remote } = require('electron');

// const { app, BrowserWindow, ipcMain } = require('electron/main');

// const path = require('node:path');

// let currWindow = remote.BrowserWindow.getFocusedWindow();

// window.closeCurrentWindow = function(){
//   currWindow.close();
// }

// // Expose protected methods that allow the renderer process to use
// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }
// })
// // Expose protected methods that allow the renderer process to use
// contextBridge.exposeInMainWorld('versions', {
//   node: () => process.versions.node,
//   chrome: () => process.versions.chrome,
//   electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('ping')
// })

// exports = {
//   path: path,
//   app: app,
//   ipcMain: ipcMain,
//   browser: BrowserWindow
// };