/**
 * chess game 
 * in electron, javascript
 * 
 */

const {
    app,
    BrowserWindow
} = require('electron');

let mainWindow;
const height = 988,
    width = 1600;

(function main() {
    app.on('ready', createWindow);
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
    app.on('activate', function () {
        if (mainWindow === null) {
            createWindow();
        }
    });
})();

function createWindow() {
    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        frame: false
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}