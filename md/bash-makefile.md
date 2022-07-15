<< [На главную](../README.md)

# Makefile - шаблонизация команд

---

```bash
make <alias>    # запуск команд из Makefile
```

```bash
test:                               # alias для вызова
    npm run test                    # вызываемая команда

build: test                         # alias для вызова : зависимость
    npm run build                   # вызываемая команда

logs:                               # alias для вызова
    sudo tail -n $(N) <log_file>    # вызываемая команда с параметром N

.PHONY: test logs build             # сброс стандартных инструкций для указанных alias
                                    # | указывается последней строчкой в Makefile
                                    # | если в директории будет файл test,
                                    # | то без .PHONY сработает его обработка
```

Перед вызываемыми командами обязательно нужна табуляция.

```bash
make test               # === npm run test
make logs N=13          # === sudo tail -n 13 <log_file>
make build              # === npm run test | npm run build
make test & make build  # === npm run test | npm run test | npm run build
make -C <dir> build     # === cd <dir> | make build
```
