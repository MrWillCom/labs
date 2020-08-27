const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false
  })

  // and load the index.html of the app.
  // win.loadFile('index.html')
  win.loadURL('https://mrwillcom.github.io/css-and-js-windows-uwp-xaml-controls/src/basic-input/button/reveal-style-applied-to-button/')
}

app.whenReady().then(createWindow)
