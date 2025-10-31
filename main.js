//Importing necessary modules from Electron
const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

//Importing the path module to handle file paths
const path = require('node:path')

//Function to create a new browser window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}


//Event listener for when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


//Event listener for when the application is ready
app.whenReady().then(() => {
  createWindow()

  app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')  
  createWindow()

  //On macOS, re-create a window when the dock icon is clicked and there are no other windows open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
})

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};