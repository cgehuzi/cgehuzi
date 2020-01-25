<< [На главную](./README.md)

# node : NPM - менеджер пакетов

## Навигация

- [NPM : Пакеты](#npm--пакеты)
- [NPM : Конфигурация](#npm--конфигурация)
- [NPM : Публикация пакетов](#npm--публикация-пакетов)
- [NPM : Зависимости](#npm--зависимости)
- [NPX : Утилитарные пакеты](#npx--утилитарные-пакеты)

---

<a id="login"></a>

```bash
npm login       # аутентификация на npmjs.com
```

<br>

## NPM : Пакеты

<a id="init"></a>

```bash
npm init        # создание пакета
```

<a id="install"></a>

```bash
npm install     # установка пакетов с npmjs.com
```

<details>
<summary>Примеры</summary>

```bash
npm install                             # установка пакетов из package.json
npm install <package>                   # установка пакета в текущей директории
npm install -g <package>                # установка пакета глобально
npm install <package_1> <package_2>     # установка нескольких пакетов
```

</details><br>

<a id="link"></a>

```bash
npm link        # установка локальных пакетов (глобально)
```

<details>
<summary>Примеры</summary>

```bash
npm link        # установка пакета из текущей директории (глобально)
```

</details><br>

<a id="uninstall"></a>

```bash
npm uninstall   # удаление пакетов
```

<details>
<summary>Примеры</summary>

```bash
npm uninstall <package>                 # удаление пакета в текущей директории
npm uninstall -g <package>              # удаление пакета глобально
npm uninstall <package_1> <package_2>   # удаление нескольких пакетов
```

</details><br>

<a id="info"></a>

```bash
npm info        # информация о пакетах
```

<details>
<summary>Примеры</summary>

```bash
npm info <package>      # найти информацию по <package> на npmjs.com
```

</details><br>

## NPM : Конфигурация

Конфигурация пакета лежит в файле `package.json`.  
Основные секции для настройки:

- [main : точка входа](#main--точка-входа)
- [files : публикуемые файлы](#files--публикуемые-файлы)
- [scripts : произвольные команды](#scripts--произвольные-команды)
- [bin : исполняемые файлы](#bin--исполняемые-файлы)

<br>

### main : точка входа

Точка входа – главный исполняемы файл (index.js).

```jsonc
// package.json
{
	"main": "dist/index.js"
}
```

<br>

### files : публикуемые файлы

Файлы и директории из `.gitignore` по умолчанию не публикуются.  
Управление списком публикуемых файлов и директорий происходит через файл `.npmignore` или через секцию files.

```jsonc
// package.json
{
	"files": ["dist"]
}
```

<br>

### scripts : произвольные команды

```jsonc
// package.json
{
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"build": "NODE_ENV=production babel src --out-dir dist", // сборка проекта
		"prepublishOnly": "npm run build", // автозапуск сборки
		"<command>": "npm version" // произвольная команда
	}
}
```

```bash
npm run <command>       # вызов <command> из секции "scripts"
```

<br>

### bin : исполняемые файлы

Создание cli-утилит (символических ссылок на исполняемые файлы, запускаемые из командной строки).

```jsonc
{
	"bin": {
		"<command>": "<file>"
	}
}
```

#### Правила использования

1. Исполняемые файлы должны предоставлять права доступа на исполнение (см. [BASH : Права доступа](./bash.md#bash--права-доступа)).
2. Если исполняемый файл содержит код, необходимо указать интерпретатор при помощи шебанга:  
   `#!/usr/bin/env node` – указатель на Node.js

<br>

```bash
npm bin				# узнать директорию для хранения символических ссылок (локальных)
npm bin --global	# узнать директорию для хранения символических ссылок (глобальных)
npm bin -g			# | краткая запись
```

<br>

## NPM : Публикация пакетов

<a id="publish"></a>

```bash
npm publish     # публикация пакетов
```

<details>
<summary>Примеры</summary>

```bash
npm publish             # публикация пакета на npmjs.com
npm publish --dry-run   # публикация пакета локально
```

</details><br>

## NPM : Зависимости

Зависимости хранятся в файле `package.json` в специальных секциях:

- **dependencies** – основные
- **devDependencies** – не публикуемые

[Документация](https://docs.npmjs.com/files/package.json#dependencies)

```bash
npm install <package>               # ---> "dependencies" : { ... }
npm install --save-dev <package>    # ---> "devDependencies" : { ... }
```

### Обновление зависимостей

<a id="update"></a>

```bash
npm update              # обновление всех зависимостей
npm update <package>    # обновление зависимостей пакета
```

<details>
<summary>Правила для версий</summary>

- `*` – любая версия
- `1.2.3` - точная версия
- `>1.2.3` - больше
- `>=1.2.3` - больше либо равна
- `<1.2.3` - меньше
- `<=1.2.3` - меньше либо равна
- `^1.2.3` - больше либо равна (кроме мажора),  
  т.е. >= 1.2.3 и < 2.0.0
- `~1.2.3` – больше либо равна (кроме мажора и минора),  
  т.е. >= 1.2.3 и < 1.3.0
- `1.2.x` – вместо х любая цифра

</details><br>

### Отслеживание зависимостей

Отслеживание зависимостей ведётся через файл `package-lock.json`

<details>
<summary>Схема работы</summary>

![отслеживание зависимостей](https://github.com/cgehuzi/notes/raw/master/images/npm-package-lock.jpg)

</details><br>

## NPX : Утилитарные пакеты

<a id="npx"></a>

```bash
npx <package>       # запуск утилиты <package>
```
