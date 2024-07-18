import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('qhop.deletePartBeforeUppercase', deletePartBeforeUppercase));
	context.subscriptions.push(vscode.commands.registerCommand('qhop.deletePartAfterUppercase', deletePartAfterUppercase));
	context.subscriptions.push(vscode.commands.registerCommand('qhop.moveToNextUppercase', moveToNextUppercase));
	context.subscriptions.push(vscode.commands.registerCommand('qhop.moveToPreviousUppercase', moveToPreviousUppercase));
}

export function deactivate() {}

function deletePartBeforeUppercase() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const position = selection.start;

    let line = document.lineAt(position.line);
    let text = line.text;

    let index = position.character - 1;
    while (index >= 0 && !/[A-Z]/.test(text.charAt(index))) {
        index--;
    }

    let rangeToDelete;
    if (index >= 0) {
        rangeToDelete = new vscode.Range(position.line, index, position.line, position.character);
    } else {
        rangeToDelete = new vscode.Range(position.line, 0, position.line, position.character);
    }

    editor.edit(editBuilder => {
        editBuilder.delete(rangeToDelete);
    });
}

function deletePartAfterUppercase() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const position = selection.start;

    let line = document.lineAt(position.line);
    let text = line.text;

    let index = position.character + 1;
    while (index < text.length && !/[A-Z]/.test(text.charAt(index))) {
        index++;
    }

    let rangeToDelete;
    if (index < text.length) {
        rangeToDelete = new vscode.Range(position.line, position.character, position.line, index);
    } else {
        rangeToDelete = new vscode.Range(position.line, position.character, position.line, text.length);
    }

    editor.edit(editBuilder => {
        editBuilder.delete(rangeToDelete);
    });
}

function moveToNextUppercase() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const position = selection.start;

    let line = document.lineAt(position.line);
    let text = line.text;

    let index = position.character + 1;
    while (index < text.length && !/[A-Z]/.test(text.charAt(index))) {
        index++;
    }

    const newPosition = new vscode.Position(position.line, Math.min(index, text.length));
    editor.selection = new vscode.Selection(newPosition, newPosition);
    editor.revealRange(new vscode.Range(newPosition, newPosition));
}

function moveToPreviousUppercase() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const position = selection.start;

    let line = document.lineAt(position.line);
    let text = line.text;

    let index = position.character - 1;
    while (index >= 0 && !/[A-Z]/.test(text.charAt(index))) {
        index--;
    }

    const newPosition = new vscode.Position(position.line, Math.max(index, 0));
    editor.selection = new vscode.Selection(newPosition, newPosition);
    editor.revealRange(new vscode.Range(newPosition, newPosition));
}