<< [На главную](../README.md)

# Git : Ветвление

[Learn Git Branching](https://learngitbranching.js.org/)<br>
Обучение ветвлению через около-игровой процесс.

---

Навигация:

- [Git : Ветвление](#git--ветвление)
  - [Git : Создание веток](#git--создание-веток)
  - [Git : Переключение между ветками](#git--переключение-между-ветками)
  - [Git : Удалённые ветки](#git--удалённые-ветки)
    - [Отправка](#отправка)
    - [Отслеживание](#отслеживание)
    - [Получение изменений](#получение-изменений)
    - [Удаление](#удаление)
  - [Git : Слияние веток](#git--слияние-веток)
  - [Git : Перебазирование веток](#git--перебазирование-веток)

---

## Git : Создание веток

<a id="branch"></a>

```bash
git branch      # работа с ветками
```

<details>
<summary>Примеры</summary>

```bash
git branch                      # список отслеживаемых веток
git branch -v                   # | с указанием последнего коммита
git branch --merged             # | слитые с текущей (можно удалять)
git branch --merged <branch>    # | слитые с <branch> (можно удалять)
git branch --no-merged          # | не слитые с текущей
git branch --no-merged <branch> # | не слитые с <branch>

git branch <branch>             # создать новую ветку
git branch -d <branch>          # удалить ветку
```

</details><br>

## Git : Переключение между ветками

<a id="checkout"></a>

```bash
git checkout <branch>       # переключиться на ветку <branch>
git checkout -b <branch>    # создать новую ветку и переключиться на неё
```

## Git : Удалённые ветки

### Отправка

```bash
git push <remote> <branch>                      # отправить ветку в удалённый репозиторий
git push <remote> <branch>:some_name            # отправить <branch>, но под именем some_name
git merge <remote>/<branch>                     # слить текущую ветку с веткой слежения (<remote>/<branch>)
```

### Отслеживание

```bash
git branch -vv                                  # информация о настройках веток слежения (с кэшированным удалёнными данными)
git fetch --all; git branch -vv                 # информация о настройках веток слежения (с запросом актуальных удалённых данных)
git branch -u <remote>/<branch>                 # установить ветку слежения для текущей ветки
git checkout -b new_branch <remote>/<branch>    # создать локальную ветку на основе ветки слежения
git checkout --track <remote>/<branch>          # | краткая запись
```

### Получение изменений

```bash
git fetch --all                                 # получить изменения со всех удалённых репозиториев
git fetch <remote>                              # получить изменения с одного удалённого репозитория
```

### Удаление

```bash
git push <remote> --delete <branch>             # удалить ветку из удалённого репозитория
```

## Git : Слияние веток

<a id="merge"></a>

```bash
git merge       # слияние веток
```

<details>
<summary>Примеры</summary>

```bash
git merge <branch>          # слияние текущей ветки с веткой <branch>
```

</details>

<details>
<summary>Конфликты</summary>

```bash
 <<<<<<< HEAD:<file>
 # версия изменений в <file> из текущей ветки
 =======
 # версия изменений в <file> из ветки <branch>
 >>>>>>> iss53:<branch>
```

</details><br>

## Git : Перебазирование веток

<a id="rebase"></a>

```bash
git rebase      # перебазирование веток
```

<details>
<summary>Примеры</summary>

```bash
# Простое перебазирование
# ----------------------------------------
git checkout <branch>   # переключиться на ветку <branch>
git rebase main       # перебазировать ветку в main
git checkout main     # переключиться на ветку main
git merge <branch>      # объединить изменения
# ----------------------------------------
```

</details>
