<< [На главную](./README.md)

# node : NPM - менеджер пакетов

## Навигация

- [NPM : Пакеты](#npm--пакеты)
- [NPM : Конфигурация](#npm--конфигурация)
- [NPM : Публикация пакетов](#npm--публикация-пакетов)
- [NPM : Зависимости](#npm--зависимости)
- [NPX : Утилитарные пакеты](#npx--утилитарные-пакеты)
- [NPM : Произвольные команды](#npm--произвольные-команды)

---

## NPM : Пакеты

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
npm link        # установка локальных пакетов
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

<a id="init"></a>

```bash
npm init        # создание пакета
```

<br>

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

<a id="login"></a>

```bash
npm login       # аутентификация на npmjs.com
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

Файлы и директории из `.gitignore` по умолчанию не публикуются.  
Управление списком публикуемых файлов и директорий происходит через файл `.npmignore` или через секцию:

- **files** – публикуемые файлы

```jsonc
// package.json
{
	"files": ["dist"]
}
```

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

![отслеживание зависимостей](https://github.com/cgehuzi/notes/raw/master/sources/images/package-lock.jpg)

</details><br>

## NPX : Утилитарные пакеты

<a id="npx"></a>

```bash
npx <package>       # запуск утилиты <package>
```

## NPM : Произвольные команды

Произвольные команды настраиваются в файле `package.json` в специальныой секции:

- **scripts** – произвольные команды

```jsonc
// package.json
{
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"<command>": "npm version" // произвольная команда
	}
}
```

```bash
npm run <command>       # вызов <command> из секции "scripts"
```

### Предопределённые скрипты

- **prepublishOnly** – запускается перед публикацией
