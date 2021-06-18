"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var appName = 'vite-electron';
var template = [
    {
        label: '修改',
        submenu: [
            { label: '撤销', enabled: false, role: 'undo' },
            { label: '重做', role: 'redo' },
            { type: 'separator' },
            { label: '剪切', role: 'cut' },
            { label: '复制', role: 'copy' },
            { label: '粘贴', role: 'paste' },
            { label: '粘贴并匹配样式', role: 'pasteAndMatchStyle' },
            { label: '删除', role: 'delete' },
            { label: '全选', role: 'selectAll' }
        ]
    },
    {
        role: 'window',
        label: '窗口',
        submenu: [
            { label: '重新加载', role: 'reload' },
            { label: '最小化', role: 'minimize' }
        ]
    },
    {
        role: 'help',
        label: '帮助',
        submenu: [
            {
                label: '反馈建议',
                click: function () {
                    electron_1.shell.openExternal('https://github.com/cyytemplate/vite-electron-ts/issues');
                }
            },
            {
                label: 'GitHub',
                click: function () {
                    electron_1.shell.openExternal('https://github.com/cyytemplate/vite-electron-ts');
                }
            }
        ]
    }
];
if (process.platform === 'darwin') {
    template.unshift({
        label: electron_1.app.name,
        submenu: [
            { label: '关于' + appName, role: 'about' },
            { type: 'separator' },
            { label: '隐藏' + appName, role: 'hide' },
            { label: '隐藏其他', role: 'hideOthers' },
            { label: '显示全部', role: 'unhide' },
            { type: 'separator' },
            { label: '退出' + appName, role: 'quit' }
        ]
    });
}
var menu = electron_1.Menu.buildFromTemplate(template);
electron_1.app.on('ready', function () {
    electron_1.Menu.setApplicationMenu(menu);
});
