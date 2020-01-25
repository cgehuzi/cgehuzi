<< [На главную](./README.md)

# node : NPM - менеджер пакетов

## Навигация

- [NPM : Конфигурация](#npm--конфигурация)
- [NPM : Пакеты](#npm--пакеты)

---

## NPM : Конфигурация

<a id="login"></a>

```bash
npm login       # аутентификация на npmjs.com
```

<br>

## NPM : Пакеты

<a id="install"></a>

```bash
npm install     # установка пакетов с npmjs.com
```

<details>
<summary>Примеры</summary>

```bash
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
