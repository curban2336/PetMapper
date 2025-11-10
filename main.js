//Importing necessary modules from Electron
const { app, BrowserWindow, ipcMain } = require('electron/main')

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
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})

// var map = L.map('map');
// map.setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

app.whenReady().then(() => {
  createWindow()

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