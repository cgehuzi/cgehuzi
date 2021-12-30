<< [На главную](../README.md)

# node : Prettier - форматирование кода

---

Навигация:

- [node : Prettier - форматирование кода](#node--prettier---форматирование-кода)
  - [Prettier : Установка](#prettier--установка)
  - [Prettier : Настройка](#prettier--настройка)
  - [Prettier : Использование](#prettier--использование)

---

## Prettier : Установка

[Официальный сайт](https://prettier.io/)

```bash
npm install --save-dev --save-exact prettier
```

## Prettier : Настройка

Настройка производится с помощью файла `.prettierrc.yml`.<br>
Его необходимо создать вручную в директории с файлом `package.json`.

<details>
<summary>Пример файла</summary>

```yml
trailingComma: 'es5'
tabWidth: 4
semi: false
singleQuote: true
```

</details><br>

## Prettier : Использование

```bash
npx prettier    # запуск форматирования
```

<details>
<summary>Примеры</summary>

```bash
npx prettier --write .        # отформатировать все файлы
npx prettier --write <file>   # отформатировать файл
npx prettier --write <dir>    # отформатировать все файлы в директории

npx prettier --check .        # проверить форматирование всех файлов
npx prettier --check <file>   # проверить форматирование файлы
npx prettier --check <dir>    # проверить форматирование всех файлов в директории
```

</details><br>
