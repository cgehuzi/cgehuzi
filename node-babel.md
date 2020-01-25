<< [На главную](./README.md)

# node : Babel - транспайлер кода

## Навигация

- [Babel : Установка](#babel--установка)
- [Babel : Настройка](#babel--настройка)
- [Babel : Использование](#babel--использование)

---

## Babel : Установка

[Официальный сайт](https://babeljs.io/)

```bash
npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
npm install @babel/polyfill
```

- **@babel/core** – ядро программы
- **@babel/cli** – утилита babel для терминала
- **@babel/node** – утилита babel-node для терминала
- **@babel/preset/env** – плагины с правилами транспайлинга
- **@babel/polyfill** – полифилы

## Babel : Настройка

Настройка производится с помощью файла `babel.config.json`.  
Его необходимо создать вручную в директории с файлом package.json.

<details>
<summary>Пример файла</summary>

```json
{
	"presets": [
		[
			"@babel/env",
			{
				"targets": {
					"node": "current",
					"edge": "17",
					"firefox": "60",
					"chrome": "67",
					"safari": "11.1"
				}
			}
		]
	]
}
```

</details>

### Основные секции

- [presets](https://babeljs.io/docs/en/presets) – группы подключаемых плагинов
  - [targets](https://babeljs.io/docs/en/babel-preset-env#targets) – среды, которые нужно поддерживать

## Babel : Использование

### Файловая структура

- **src** – исходный код (отправляется в GitHub)
- **dist** – транслированный код (отправляется в NPM)

### Запуск трасляции

```bash
npx babel		# запуск трансляции исходного кода
```

<details>
<summary>Примеры</summary>

```bash
npx babel src --out-dir dist	# транслировать все файлы из директории src в директорию dist
```

</details><br>

```bash
npx babel-node	# запуск исходного кода (с предварительной трансляцией)
```

<details>
<summary>Примеры</summary>

```bash
npx babel-node <file>	# запуск кода из
```

</details><br>

### Настройка NPM-пакета

Автозапуск трасляции при публикации пакета настраивается в `package.json`.

```jsonc
{
	"scripts": {
		"build": "NODE_ENV=production babel src --out-dir dist", // сборка проекта
		"prepublishOnly": "npm run build" // автозапуск сборки
	}
}
```
