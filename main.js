//Importing necessary modules from Electron
const { app, BrowserWindow } = require('electron')

//
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
  createWindow()

  //On macOS, re-create a window when the dock icon is clicked and there are no other windows open
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
})