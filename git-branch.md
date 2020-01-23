<< [На главную](./README.md)

# Git : Ветвление

## Навигация

- [Git : Управление ветками](#git--управление-ветками)
- [Git : Переключение между ветками](#git--переключение-между-ветками)
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
