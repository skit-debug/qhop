# My VSCode Extension

This is an extension for Visual Studio Code that allows you to navigate and delete parts of words based on uppercase letters.
It's usefull after copy-paste when you need to edit camel-case names.

## Features

- Delete part of the word before the uppercase letter.
- Delete part of the word after the uppercase letter.
- Move to the next uppercase letter.
- Move to the previous uppercase letter.

## Installation

1. Download the `.vsix` file.
2. Open Visual Studio Code.
3. Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
4. Click on the three dots in the upper right corner and select `Install from VSIX...`.
5. Select the downloaded `.vsix` file.
6. Add lines to your `keybindings.json`:
```json
    {
        "key": "alt+backspace",
        "command": "qhop.deletePartBeforeUppercase",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+delete",
        "command": "qhop.deletePartAfterUppercase",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+right",
        "command": "qhop.moveToNextUppercase",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+left",
        "command": "qhop.moveToPreviousUppercase",
        "when": "editorTextFocus && !editorReadonly"
    }
```

## Usage

- To delete part of the word before the uppercase letter, place the cursor in the word and press `Alt + Backspace`.
- To delete part of the word after the uppercase letter, place the cursor in the word and press `Alt + Del`.
- To move to the next uppercase letter, place the cursor in the word and press `Alt + Right`.
- To move to the previous uppercase letter, place the cursor in the word and press `Alt + Left`.

## Release Notes

### 1.0.0

- Initial release of the VSCode Extension.
