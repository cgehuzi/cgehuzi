<< [На главную](../README.md)

# node : Node.js

## Обычная установка

```bash
brew install nodejs # установка последней версии Node.js (macOS)
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
nvm ls-remote                 # список доступных для установки версий

nvm install node              # установка последней версии Node.js
nvm install <version>         # установка указанной версии

nvm ls                        # список установленных версий
nvm use node                  # переключиться на версию по умолчанию
nvm use <version>             # переключиться на указанную версию

nvm alias default <version>   # смена версии по умолчанию

nvm uninstall <version>       # удаление указанной версии
```

</details><br>
