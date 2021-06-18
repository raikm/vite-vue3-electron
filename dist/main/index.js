"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var electron_1 = require("electron");
require("./menu");
var isDev = process.env.NODE_ENV === 'development';
var WinURL = isDev
    ? "http://localhost:3000"
    : 'file://' + path_1.join(__dirname, '../../dist/render/index.html');
var mainWindow = null;
var willQuitApp = false;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        minWidth: 1140,
        minHeight: 700,
        width: 1240,
        height: 700,
        titleBarStyle: 'hidden',
        webPreferences: {
            contextIsolation: false,
            enableRemoteModule: false,
            webSecurity: true,
            nodeIntegration: true
        }
    });
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.loadURL(WinURL);
    mainWindow.on('close', function (event) {
        if (!willQuitApp) {
            event.preventDefault();
            mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.hide();
        }
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.once('ready-to-show', function () {
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.show();
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    if (!mainWindow) {
        createWindow();
    }
    else {
        mainWindow.show();
    }
});
electron_1.app.on('before-quit', function () { return willQuitApp = true; });
