const path = require("path");
const { app, BrowserWindow } = require('electron')

const isDev = ((""+process.env.NODE_ENV).trim() === 'development')

async function createWindow(){
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'payload.js'),
    }
  })

  if(isDev){
   await mainWindow.loadURL('http://localhost:3000')
   if(!process.env.IS_TEST) mainWindow.webContents.openDevTools()
  }else {
   mainWindow.loadURL('file://'+__dirname+'/index.html')   
  }
}

app.on('ready', async () => {
  if(isDev && !process.env.IS_TEST) {
    const installExtension = (await import('electron-devtools-installer')).default
    const VUEJS3_DEVTOOLS = (await import('electron-devtools-installer')).VUEJS3_DEVTOOLS

    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (error) {
     console.error(('Vue Devtools failed to install:', err.toString()))     
    }
  }
  createWindow()
})

app.on('window-all-clsoed', function(){
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

if(isDev) {
 if(process.platform === 'win32') {
   process.on('message', (data) => {
     if(data === 'gracefull-exit') {
       app.quit()
     }
   })
 }else {
   process.on('SIGTERM', () => {
     qpp.quit()
   })
 }
}
