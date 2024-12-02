const vscode = require('vscode')
const fs = require('fs')
const path = require('path')

function activate(context) {
    let disposable = vscode.commands.registerCommand(
        'extension.pickTestFile',
        async () => {
            const testDir = path.join(vscode.workspace.rootPath, 'test')
            const files = fs
                .readdirSync(testDir)
                .filter((file) => file.endsWith('.test.js'))
            const selectedFile = await vscode.window.showQuickPick(files, {
                placeHolder: 'Select the test file',
            })
            if (selectedFile) {
                return path.join(testDir, selectedFile)
            }
            return null
        }
    )

    context.subscriptions.push(disposable)
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
}
