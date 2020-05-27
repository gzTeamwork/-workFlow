'use strict';
var _this = this;
import * as tslib_1 from "tslib";
import { app, protocol, BrowserWindow } from 'electron';
import { createProtocol, installVueDevtools } from 'vue-cli-plugin-electron-builder/lib';
var isDevelopment = process.env.NODE_ENV !== 'production';
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win;
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
        scheme: 'app',
        privileges: {
            secure: true,
            standard: true
        }
    }]);
function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 480,
        height: 820,
        webPreferences: {
            nodeIntegration: true
        }
    });
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        if (!process.env.IS_TEST)
            win.webContents.openDevTools();
    }
    else {
        createProtocol('app');
        // Load the index.html when not in development
        win.loadURL('app://./index.html');
    }
    win.on('closed', function () {
        win = null;
    });
}
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var e_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(isDevelopment && !process.env.IS_TEST)) return [3 /*break*/, 4];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, installVueDevtools()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.error('Vue Devtools failed to install:', e_1.toString());
                return [3 /*break*/, 4];
            case 4:
                createWindow();
                return [2 /*return*/];
        }
    });
}); });
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', function (data) {
            if (data === 'graceful-exit') {
                app.quit();
            }
        });
    }
    else {
        process.on('SIGTERM', function () {
            app.quit();
        });
    }
}
//# sourceMappingURL=background.js.map