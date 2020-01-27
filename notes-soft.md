<< [На главную](./README.md)

# Notes : Натройка ПО

## Навигация

- [Visual Studio Code](#visual-studio-code)
- [Axure 9](#axure-9)

---

## Visual Studio Code

### Расширения

- Autoprefixer
- Beautify
- Live Sass Compiler
- Markdown Preview Github Styling
- markdownlint
- PHP Intelephense
- Prettier - Code formatter

### Конфигурация

#### Gear > Параметры > {}

```jsonc
{
  // подтверждение удаления файлов
  "explorer.confirmDelete": false,
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify",
    "editor.tabSize": 4
  },
  "beautify.config": {
    "end_with_newline": false, // ALL : пустая строка в конце файла
    "indent_char": " ", // ALL : символ отступа
    "indent_with_tabs": false, // ALL : перевод отступов в табы
    "preserve_newlines": true, // ALL : сохранять переносы строк
    "extra_liners": ["head", "body", "/html"], // HTML : разрыв перед этими тегами
    "indent_inner_html": true // HTML : отступы для тегов head и body
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[javascript]": {
    // идентификация пробелов (серыми точками)
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all"
  },
  "[json]": {
    // идентификация пробелов (серыми точками)
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all"
  },
  "[jsonc]": {
    // идентификация пробелов (серыми точками)
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all"
  },
  // длина строки до переноса
  "prettier.printWidth": 1000,
  // замена двойных кавычек на одинарные
  "prettier.singleQuote": true,
  // скобки в функциях с одним аргументом
  "prettier.arrowParens": "always",
  // табы вместо пробелов
  "prettier.useTabs": false,
  "[markdown]": {
    // идентификация пробелов (серыми точками)
    "editor.renderWhitespace": "all"
  },
  "markdownlint.config": {
    // исключения для линтера
    "MD033": {
      "allowed_elements": ["details", "summary", "small", "a", "br"]
    },
    // подчёркивание табов в блоках с кодом
    "MD010": false,
    // первым в документе должен быть h1 (#)
    "MD041": false
  },
  "liveSassCompile.settings.formats": [
    {
      "format": "nested", // expanded, compact, compressed, nested
      "extensionName": ".css",
      "savePath": null
    }
  ],
  "liveSassCompile.settings.generateMap": false,
  "liveServer.settings.donotShowInfoMsg": true
}
```

#### Gear > Сочетание клавиш > {}

```jsonc
[
  {
    // выделить элемент
    "key": "ctrl+shift+a",
    "command": "editor.action.smartSelect.expand",
    "when": "editorTextFocus"
  },
  {
    // отменить выделение элемента
    "key": "ctrl+shift+alt+a",
    "command": "editor.action.smartSelect.shrink",
    "when": "editorTextFocus"
  },
  {
    // регистр : UPPERCASE
    "key": "ctrl+shift+u",
    "command": "editor.action.transformToUppercase"
  },
  {
    // регистр : lowercase
    "key": "ctrl+shift+l",
    "command": "editor.action.transformToLowercase"
  },
  {
    // форматировать весь документ
    "key": "shift+alt+f",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly"
  },
  {
    // форматировать выделенный элемент
    "key": "ctrl+shift+f",
    "command": "editor.action.formatSelection",
    "when": "editorHasDocumentSelectionFormattingProvider && editorHasDocumentSelectionFormattingProvider && editorTextFocus && !editorReadonly"
  }
]
```

## Axure 9

```txt
Licensee：macenjoy.co
Key：wXGD3sk + 3LXkB9xfSBIXcGTJBkB02rkeFSOtN24B3sd12q2 / KT1qiQ0tAr1dLFAJ
```
