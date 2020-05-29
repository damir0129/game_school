  const { app, BrowserWindow } = require('electron')

  function createWindow () {
            // Создаем окно браузера.
            let win = new BrowserWindow({
              width: 1920,
              height: 1080,
              webPreferences: {
                nodeIntegration: true
              }
            })
            win.removeMenu();
            win.loadFile('index.html')

  }

  app.whenReady().then(createWindow)