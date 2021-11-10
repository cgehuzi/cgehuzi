<< [На главную](./README.md)

# node : ESLint - линтер кода

## Навигация

- [ESLint : Установка](#eslint--установка)
- [ESLint : Настройка](#eslint--настройка)
- [ESLint : Использование](#eslint--использование)

---

## ESLint : Установка

[Официальный сайт](https://eslint.org/)

```bash
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-babel babel-eslint
```

## ESLint : Настройка

Настройка производится с помощью файла `.eslintrc.json`.<br>
Его необходимо создать вручную в директории с файлом package.json.

```jsonc
{
  "extends": [ ... ],         // расширение доступных правил сторонними
  "plugins": [ ... ],         // добавление сторонних плагинов
  "env": { ... },             // настройка синтаксиса поддерживаемых сред
  "parserOptions": { ... },   // настройка параметов, которые нужно поддерживать
  "ignorePatterns": [ ... ],  // игнорируемые файлы и директории (или создайте файл .eslintignore)
  "rules": { ... }            // правила оформления кода
                              // | 0 / "off"     – выключено
                              // | 1 / "warn"    – предупреждение
                              // | 2 / "error"   – ошибка
}
```

<details>
<summary>Пример файла</summary>

```jsonc
{
  "extends": ["eslint:recommended", "airbnb-base"],
  "plugins": ["import", "babel"],
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "ignorePatterns": ["node_modules", "dist"],
  "rules": {
    "no-console": 0
  }
}
```

</details><br>

## ESLint : Использование

```bash
npx eslint      # запуск линтера
```

<details>
<summary>Примеры</summary>

```bash
npx eslint .            # проверить все файлы
npx eslint <file>       # проверить файл
npx eslint <dir>        # проверить все файлы в директории
```

</details><br>
