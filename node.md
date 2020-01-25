<< [На главную](./README.md)

# node : Node.js

## Обычная установка

```bash
brew install nodejs     # установка последней версии Node.js (macOS)
```

<details>
<summary>Управление</summary>

```bash
node                    # запуск REPL
node -v                 # текущая версия
```

- `^ + C` - выход (двойное нажатие)
- `.exit` - выход

</details><br>

[Утилита для поддержки source-map](https://github.com/evanw/node-source-map-support)

## NVM : менеджер версий

[nvm : репозиторий](https://github.com/nvm-sh/nvm)

```bash
touch ~/.bash_profile                                                               # fix для macOS
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash     # установка nvm
```

<details>
<summary>Управление</summary>

```bash
nvm ls-remote           # список доступных для установки версий
nvm install node        # установка последней версии Node.js
nvm install __.__.__    # установка указанной версии
nvm ls                  # список установленных версий
nvm use node            # переключиться на версию по умолчанию
nvm use __.__.__        # переключиться на указанную версию
```

</details><br>
