<< [На главную](../README.md)

# ESLint - линтер кода

---

Навигация:

- [ESLint - линтер кода](#eslint---линтер-кода)
  - [ESLint : Установка](#eslint--установка)
  - [ESLint : Настройка](#eslint--настройка)
  - [ESLint : Использование](#eslint--использование)

---

## ESLint : Установка

[Официальный сайт](https://eslint.org/)

```bash
npm install eslint --save-dev
```

## ESLint : Настройка

Настройка производится с помощью файла `.eslintrc.yml`.

```bash
npx eslint --init   # инициализация (пошаговое создание файла .eslintrc.yml)
```

<details>
<summary>Пример вопросов / ответов</summary>

```txt
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm (JS Modules)
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · Node
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · YAML
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.21.2
✔ Would you like to install them now with npm? · Yes
```

</details><br>

Либо можно создать вручную в директории с файлом `package.json`.

```yml
extends:          # расширение доступных правил сторонними
plugins:          # добавление сторонних плагинов
env:              # настройка синтаксиса поддерживаемых сред
parserOptions:    # настройка параметов, которые нужно поддерживать
ignorePatterns:   # игнорируемые файлы и директории (или создайте файл .eslintignore)
rules:            # правила оформления кода
                  # | 0 / "off"     – выключено
                  # | 1 / "warn"    – предупреждение
                  # | 2 / "error"   – ошибка
}
```

<details>
<summary>Пример файла</summary>

```yml
env:
  browser: true
  es2021: true
extends:
  - airbnb-base
parserOptions:
  ecmaVersion: 13
  sourceType: module
rules: {}
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

npx eslint --fix        # проверить и исправить (по возможности)
```

</details><br>
