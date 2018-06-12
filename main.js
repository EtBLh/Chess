/**
 * chess game 
 * in electron, javascript
 * 
 */

const { app, BrowserWindow } = require('electron');

let mainWindow;
const height = 618, width = 1000;

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
    mainWindow = new BrowserWindow({ width: width, height: height });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}
