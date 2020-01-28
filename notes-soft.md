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
- ESLint
- Live Sass Compiler
- Markdown Preview Github Styling
- markdownlint
- Prettier - Code formatter

### Конфигурация

#### Gear > Параметры > {}

```jsonc
{
  "explorer.confirmDelete": false, // подтверждение удаления файлов
  "editor.fontFamily": "JetBrains Mono, Consolas, 'Courier New', monospace",
  "editor.tabSize": 2,
  "editor.renderWhitespace": "all", // идентификация пробелов (серыми точками)
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // автофикс линтинга при сохранении
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.printWidth": 1000, // длина строки до переноса
  "prettier.singleQuote": true, // замена двойных кавычек на одинарные
  "prettier.arrowParens": "always", // скобки в функциях с одним аргументом
  "prettier.useTabs": false, // табы вместо пробелов
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify",
    "editor.tabSize": 4
  },
  "beautify.config": {
    "end_with_newline": false, // пустая строка в конце файла
    "indent_char": " ", // символ отступа
    "indent_with_tabs": false, // перевод отступов в табы
    "preserve_newlines": true, // сохранять переносы строк
    "extra_liners": ["head", "body", "/html"], // разрыв перед этими тегами
    "indent_inner_html": true // отступы для тегов head и body
  },
  "[markdown]": {
    "editor.renderWhitespace": "all"
  },
  "markdownlint.config": {
    "MD033": {
      "allowed_elements": ["details", "summary", "small", "a", "br"] // исключения для линтера
    },
    "MD010": true, // подчёркивание табов в блоках с кодом
    "MD041": false // первым в документе должен быть h1 (#)
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
