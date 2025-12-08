//Importing necessary modules from Electron
//import * as P from 'preload.js';
const { app, BrowserWindow, ipcMain } = require('electron/main');

//Importing the path module to handle file paths
//import path from 'node:path';

//import * as M from './map.js';
const electron = require('electron');
//const app = electron.app;
//const BrowserWindow = electron.BrowserWindow;
//const ipcMain = electron.ipcMain;

const path=require('path');

var latitude = 51.505;
var longitude = -0.09;

//Function to create a new browser window
const createWindow = () => {
  const win = new electron.BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
  AddMarker(latitude, longitude);
})

// var map = L.map('map');
// map.setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

app.whenReady().then(() => {
  //createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// document.getElementById('zoom-out').onclick = function () {
//   const view = map.getView();
//   const zoom = view.getZoom();
//   view.setZoom(zoom - 1);
// };

// document.getElementById('zoom-in').onclick = function () {
//   const view = map.getView();
//   const zoom = view.getZoom();
//   view.setZoom(zoom + 1);
// };