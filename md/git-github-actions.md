<< [На главную](../README.md)

# Git : GitHub Actions

Автоматический запуск рабочих процессов при изменениях репозитория.

- [Курс на Hexlet](https://ru.hexlet.io/courses/github-actions)

## Actions : Конфигурация

[Документация GitHub](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#in-this-article)

```yml
name: Node CI # ............................................ название действия

on: # ...................................................... список отлавливаемых событий Git
  - push
  - pull_request

jobs: # .................................................... список выполняемых заданий
  build: # ................................................. название задания
    runs-on: # ............................................. список проверяемых ОС
      - windows-latest
      - ubuntu-latest
      - macos-latest

    strategy: # ............................................ создание стратегии работ
      matrix: # ............................................ создание матриц-переменных, например -->
        node-version: [13.x] # ............................. --> ${{ matrix.node-version }} === [13.x]

    steps: # ............................................... список выполняемых шагов
      - uses: actions/checkout@v1 # ........................ стандартный GitHub Action
      #..................................................... см. ниже "GitHub Actions для steps.uses"

      - name: setup Node.js ${{ matrix.node-version }} # ... название шага
        uses: actions/setup-node@v1 # ...................... стандартный GitHub Action
        with: # ............................................ список аргументов для вызова
          node-version: ${{ matrix.node-version }}

      - name: <step_name> # ................................ название шага
        run: <command> # ................................... вызываемая команда

      - name: <step_name> # ................................ название шага
        run: <command_1> | <command_2> # ................... список вызываемых команд

        env: # ............................................. список устанавливаемых переменных среды
          CI: true
```

[GitHub Actions для steps.uses](https://github.com/actions)

<details>
<summary>Пример файла</summary>

```yml
name: Node CI

on: push

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [13.x]

    steps:
      - uses: actions/checkout@v1

      - name: setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: install package
        run: make install

      - name: publish package
        run: make publish

      - name: test package
        run: make test

        env:
          CI: true
```

</details><br>
