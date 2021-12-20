<< [На главную](../README.md)

# Git : Основные команды

[Шпаргалка от GitLab (на английском)](https://about.gitlab.com/images/press/git-cheat-sheet.pdf)

---

Навигация:

- [Git : Основные команды](#git--основные-команды)
  - [Git : Конфигурация](#git--конфигурация)
  - [Git : Работа с репозиториями](#git--работа-с-репозиториями)
  - [Git : Подготовка коммитов](#git--подготовка-коммитов)
    - [Игнорирование файлов](#игнорирование-файлов)
  - [Git : Создание коммитов](#git--создание-коммитов)
    - [Именование коммитов](#именование-коммитов)
  - [Git : Отправка коммитов](#git--отправка-коммитов)
  - [Git : Получение коммитов](#git--получение-коммитов)
  - [Git : История коммитов](#git--история-коммитов)
    - [Список коммитов](#список-коммитов)
    - [Поиск коммитов](#поиск-коммитов)
    - [Переключение между коммитами](#переключение-между-коммитами)
  - [Git : Метки у коммитов](#git--метки-у-коммитов)

---

## Git : Конфигурация

<a id="config"></a>

```bash
git config  # настройка системы Git
```

<details>
<summary>Примеры</summary>

```bash
git config --list                         # список текущей конфигурации
git config --l                            # | краткая запись

git config --global user.name "____"      # имя пользователя (будет привязываться к коммитам)
git config --global user.email "____"     # email пользователя (будет привязываться к коммитам)

git config --global credential.helper cache           # запоминать на несколько минут введённый пароль

git config --global alias.<co> <command>              # псевдоним (git <co> === git <command>)
git config --global alias.<co> '<command> <option>'   # псевдоним (git <co> === git <command> <option>)
```

</details><br>

## Git : Работа с репозиториями

<a id="init"></a>

```bash
git init    # инициализация нового локального репозитория
```

<a id="clone"></a>

```bash
git clone   # клонирование удалённого репозитория
```

<details>
<summary>Примеры</summary>

```bash
git clone <repo>          # с созданием новой директории
                          # | имя новой директории = название репозитория
git clone <repo> <dir>    # в указанную директорию
                          # | если директория <dir> не найдена, она будет создана
```

</details><br>

<a id="remote"></a>

```bash
git remote   # работа с удалёнными репозиториями
```

<details>
<summary>Примеры</summary>

```bash
git remote                              # узнать названия репозиториев
git remote -v                           # узнать адреса для чтения и записи
git remote add <remote> <url>           # добавить удалённый репозиторий и назвать его <remote>
git remote rename <remote> <remote_new> # переименовать репозиторий <remote>
git remote rm <remote>                  # удалить репозиторий <remote>

git remote show <remote>                # получение информации об удалённом репозитории
```

</details>

<details>
<summary>Форматы вывода</summary>

```bash
# git remote show <remote>
# ---------------------------------------------------
* remote origin                                     # <remote> репозитория
  Fetch URL: https://github.com/cgehuzi/cgehuzi.git # <url> для получения коммитов
  Push  URL: https://github.com/cgehuzi/cgehuzi.git # <url> для отправки коммитов
  HEAD branch: main                               # активная ветка <branch>
  Remote branches:                                  # | список отслеживаемых удалённых веток
    bash    tracked                                 # |
    english tracked                                 # |
    git     tracked                                 # |
    js      tracked                                 # |
    main  tracked                                 # |
    notes   tracked                                 # \
  Local branches configured for 'git pull':         # | список веток, из которыч будут получены изменения
    git    merges with remote git                   # |
    main merges with remote main                # \
  Local refs configured for 'git push':             # | список веток, в которые будут отправлены изменения
    git    pushes to git    (fast-forwardable)      # |
    main pushes to main (up to date)            # \
# ---------------------------------------------------
```

</details><br>

## Git : Подготовка коммитов

- [Состояния файлов](#состояния-файлов)
- [Игнорирование файлов](#игнорирование-файлов)

---

<a id="status"></a>

```bash
git status  # состояние файлов
```

<details>
<summary>Примеры</summary>

```bash
git status          # определение состояния файлов (подробно)
git status --short  # определение состояния файлов (коротко)
git status -s       # | краткая запись
```

</details>

<details>
<summary>Форматы вывода</summary>

```bash
# git status
# --------------------------------------------------
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   file_1
        new file:   file_2
        new file:   file_3
        modified:   file_4
        deleted:    file_5

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   file_1
        deleted:    file_4
        modified:   file_5
        deleted:    file_6

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        file_7
# --------------------------------------------------

# git status -s
# ------------------
AM file_1
A  file_2
AD file_3
D  file_4
MM file_5
 D file_6
?? file_7
# ------------------
```

- **Первая колонка (A,A,A,D,M)** - `Changes to be committed`<br>
  состояния файлов в момент подготовки их к коммиту

- **Вторая колонка (M,D,M,D)** - `Changes not staged for commit`<br>
  состояния файлов, не подготовленных к коммиту

- **??** - `Untracked files`<br>
  не отслеживаемые (новые) файлы

</details><br>

<a id="diff"></a>

```bash
git diff    # просмотреть список изменений в файлах
```

<details>
<summary>Примеры</summary>

```bash
git diff            # не подготовленные к коммиту (not staged)
git diff --staged   # подготовленные к коммиту (staged)
```

</details><br>

<a id="add"></a>

```bash
git add     # подготовка к коммиту
```

<details>
<summary>Примеры</summary>

```bash
git add .         # все файлы
git add <file>    # один файл
git add <dir>     # все файлы в директории (включая файлы поддиректориях)
git add -i        # подготовка к коммиту (интерактивный режим)
git add --patch   # подготовка к коммиту (с запросом по каждому изменению)
git add -p        # | краткая запись
```

</details>

<details>
<summary>Интерактивный режим</summary>

- `1` : status — посмотреть состояние файлов
- `2` : update — добавить файлы в индекс (подготовить к коммиту)
- `3` : revert - исключить файлы из индекса
- `4` : add untracked - добавить неотслеживаемые файлы
- `5` : patch - добавить в индекс часть изменений

  Запросит решение по каждому изменению

  - `y` — добавить это изменение
  - `n` — не добавлять это изменение
  - `q` — выход
  - `a` — добавить это и все последующие изменения
  - `d` — не добавлять это и все последующие изменения
  - `j` — отложить решение, перейти к следующему изменению (не обработанному)
  - `J` — отложить решение, перейти к следующему изменению
  - `k` — отложить решение, перейти к предыдущему изменению (не обработанному)
  - `K` — отложить решение, перейти к предыдущему изменению
  - `g` — перйти к другому изменению (покажется список)
  - `/` — найти изменение при помощи регулярного выражения
  - `e` — отредактировать изменение (редактор [vim](./bash#vim))
  - `s` — разбить изменение на части
  - `?` - вызов справки

- `6` : diff — посмотреть изменения, добавленные в индекс
- `7` : quit — выход
- `8` : help — вызов справки

[Подробнее](https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git-%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)

</details><br>

<a id="restore"></a>

```bash
git restore   # отмена изменений в файлах
```

<details>
<summary>Примеры</summary>

```bash
git restore <file>            # отмена неотслеживаемых изменений
git restore --staged <file>   # отмена подготовки файла к коммиту
```

</details><br>

<a id="reset"></a>

```bash
git reset   # отмена изменений в репозитории
```

<details>
<summary>Примеры</summary>

```bash
git reset <file>          # отмена подготовки файла к коммиту

# c сохранением изменений в файлах
git reset <commit>        # отмена всех коммитов, сделанных после указанного
git reset HEAD~1          # отмена последнего коммита
git reset HEAD~2          # отмена последних 2-ух коммитов

# без сохранения изменений в файлах
git reset --hard <commit>        # отмена всех коммитов, сделанных после указанного
git reset --hard HEAD~1          # отмена последнего коммита
git reset --hard HEAD~2          # отмена последних 2-ух коммитов
```

</details><br>

<a id="rm"></a>

```bash
git rm      # подготовить к коммиту удаление файлов / директорий
```

<details>
<summary>Примеры</summary>

```bash
git rm <file>           # один файл (также удалить из рабочего каталога)
git rm -r <dir>         # все файлы в директории (также удалить из рабочего каталога)
git rm --cached <file>  # один файл (но оставить в рабочем каталоге)
git rm --cached <dir>   # все файлы в директории (но оставить в рабочем каталоге)
git rm \*.jpg           # все файлы .jpg
```

</details><br>

```bash
git checkout -- <file>  # сбросить файл к состоянию последнего коммита
```

### Игнорирование файлов

<a id="gitignore"></a>

Задаётся через файл `.gitignore`.<br>
[Примеры файлов](https://github.com/github/gitignore) : для разных проектов и языков

<details>
<summary>Примеры</summary>

```bash
*.a           # исключить все файлы .a
!lib.a        # но не исключать файлы lib.a
/TODO         # исключить все файлы TODO в корневой директории
build/        # исключить все файлы в директориях build
doc/*.txt     # исключить doc/notes.txt (но не исключать doc/server/arch.txt)
lib/**/*.txt  # исключить все файлы .txt в директориях lib
```

</details><br>

## Git : Создание коммитов

<a id="commit"></a>

```bash
git commit  # создать коммит
```

<details>
<summary>Примеры</summary>

```bash
git commit                    # без указания подписи (откроется редактор vim)
git commit -m "____"          # с указанием подписи

git commit --amend            # отредактировать предыдущий коммит
git commit --amend            # без указания подписи (откроется редактор vim)
git commit --amend --no-edit  # с сохранением предыдущей подписи
git commit --amend -m "____"  # с указанием новой подписи
```

Управление редактором [vim](./bash#vim)

</details>

### Именование коммитов

[Соглашение по именованию коммитов](https://www.conventionalcommits.org/ru/)

## Git : Отправка коммитов

<a id="push"></a>

```bash
git push    # отправить данные в удалённый репозиторий
```

<details>
<summary>Примеры</summary>

```bash
git push                    # отправить данные в текущий репозиторий
git push <remote>           # в репозиторий <remote>
git push <remote> <branch>  # в ветку <branch> репозитория <remote>
```

</details><br>

## Git : Получение коммитов

<a id="fetch"></a>

```bash
git fetch   # получить данные из удалённого репозитория (без слияния)
```

<details>
<summary>Примеры</summary>

```bash
git fetch                       # из текущего репозитория
git fetch <remote>              # из репозитория <remote> (по умолчнию = origin)
git fetch <remote> <branch>     # из ветки <branch> репозитория <remote>
```

</details><br>

<a id="pull"></a>

```bash
git pull    # получить данные из удалённого репозитория и слить их с текущими
```

<details>
<summary>Примеры</summary>

```bash
git pull                    # получить данные из текущего репозитория
git pull <remote>           # из репозитория <remote> (по умолчнию = origin)
git pull <remote> <branch>  # из ветки <branch> репозитория <remote>

git pull --rebase           # локальные коммиты расположить после полученных
```

</details><br>

## Git : История коммитов

- [Список коммитов](#список-коммитов)
- [Поиск коммитов](#поиск-коммитов)
- [Переключение между коммитами](#переключение-между-коммитами)

---

### Список коммитов

<a id="log"></a>

```bash
git log             # история всех коммитов
git log --no-merges # история без коммитов слияния
```

<details>
<summary>Формат вывода</summary>

```bash
commit b36cc24d92bff500f7cf800b648ae50e73c5f169     # SHA-1 контрольная сума (хеш)
Author: cgehuzi <mail.cgehuzi@gmail.com>            # email, указанный при коммите
Date:   Sun Jan 19 13:30:09 2020 +0300              # дата создания коммита

    [ bash ] - add diff                             # подпись к коммиту

commit 3364c727dda26505e895caa805186414d7164595
Author: cgehuzi <mail.cgehuzi@gmail.com>
Date:   Sat Jan 18 17:49:56 2020 +0300

    [ math ] - add fix
```

Управление редактором [vim](./bash#vim)

</details><br>

```bash
git log -p      # с указанием внесённых в файлы изменений
```

<details>
<summary>Формат вывода</summary>

```bash
commit b36cc24d92bff500f7cf800b648ae50e73c5f169     # SHA-1 контрольная сума (хеш)
Author: cgehuzi <mail.cgehuzi@gmail.com>            # email, указанный при коммите
Date:   Sun Jan 19 13:30:09 2020 +0300              # дата создания коммита

    [ bash ] - add diff                             # подпись к коммиту

diff --git a/sources/guide--bash.md b/sources/guide--bash.md
index 25e78a9..8f21ae7 100644
--- a/sources/guide--bash.md
+++ b/sources/guide--bash.md
@@ -29,10 +29,14 @@
 ______                                             # | контекст
 ______                                             # | контекст
 ______                                             # | контекст
-________                                           # удалённая строка
+________                                           # добавленная строка
 ______                                             # | контекст
 ______                                             # | контекст
 ______                                             # | контекст
```

</details><br>

```bash
git log --stat  # с указанием информации об изменениях файлов
```

<details>
<summary>Формат вывода</summary>

```bash
commit 3fbcd8545fef31220e301b773b50b57dd9a759dc     # SHA-1 контрольная сума (хеш)
Author: cgehuzi <mail.cgehuzi@gmail.com>            # email, указанный при коммите
Date:   Fri Jan 17 15:12:25 2020 +0300              # дата создания коммита

    [ lodash ] - add some methods                   # подпись к коммиту

 README.md                   |   3 ++-              # количество изменённых строк
 sources/english--levels.md  |   4 +++-
 sources/english--sources.md |   4 +++-
 sources/guide--babel.md     |   4 +++-
 sources/guide--bash.md      |   4 +++-
 sources/guide--git.md       |   4 +++-
 sources/guide--node-js.md   |   4 +++-
 sources/js--array.md        |   4 +++-
 sources/js--map.md          |   4 +++-
 sources/js--math.md         |   4 +++-
 sources/js--set.md          |   4 +++-
 sources/js--string.md       |   4 +++-
 sources/js-lodash.md        | 113 ++++++ ... +++
 sources/note--dictionary.md |   4 +++-
 sources/note--podcasts.md   |   4 +++-
 sources/note--soft.md       |   4 +++-
 16 files changed, 157 insertions(+), 15 deletions(-)   # общая статистика изменений
```

</details><br>

```bash
git log --pretty=oneline    # с указанием контрольной суммы (хеша) и подписи
git log --oneline           # | краткая запись
git log --oneline --graph   # со схемой ветвления
```

<details>
<summary>Формат вывода</summary>

```bash
# git log --pretty=oneline
# -----------------------------------------
68cc805d693af489769e9c226d0cef0cad64d674 (HEAD -> git, origin/main, origin/git, origin/HEAD, main) fix merge
d0f2fe2ce4cf84ef60a38c47f37bf07b3a8072c2 add tag
a88a6ee9c4e2ece045c553062c8150aaba963da7 add tag
4e9abc1dfa5224dc2b267aab131828f9b3c457be add remote, fetch, pull and push commands
af8d77ee2a8d525e00d5d9332c7e7020a776a591 merge git
7f8d73a4841afc2b67e9d645d1fb4b766e20b7b5 add git-branch file
# -----------------------------------------

# git log --oneline
# -----------------------------------------
68cc805 (HEAD -> git, origin/main, origin/git, origin/HEAD, main) fix merge
d0f2fe2 add tag
a88a6ee add tag
4e9abc1 add remote, fetch, pull and push commands
af8d77e merge git
7f8d73a add git-branch file
# -----------------------------------------

# git log --oneline --graph
# -----------------------------------------
*   68cc805 (HEAD -> git, origin/main, origin/git, origin/HEAD, main) fix merge
|\
| * a88a6ee add tag
* | d0f2fe2 add tag
|/
* 4e9abc1 add remote, fetch, pull and push commands
*   af8d77e merge git
|\
| * 7f8d73a add git-branch file
# -----------------------------------------
```

</details><br>

```bash
git log --pretty=short      # с указанием контрольной суммы (хеша), автора и подписи
```

<details>
<summary>Формат вывода</summary>

```bash
commit f9e5cdfed4ec21915790310c4b229843fa3f5bc1
Author: cgehuzi <mail.cgehuzi@gmail.com>

    [ bash ] - add patch

commit b36cc24d92bff500f7cf800b648ae50e73c5f169
Author: cgehuzi <mail.cgehuzi@gmail.com>

    [ bash ] - add diff
```

</details><br>

```bash
git log --pretty=format:"______"    # в указанном формате
```

<details>
<summary>Опции формата</summary>

| Опция | Описание вывода               | Пример вывода                            |
| ----- | ----------------------------- | ---------------------------------------- |
| %H    | Хеш : коммита                 | b23cc73df5e3ebd01f1d088d5ef0d6e57b99b9bc |
| %h    | Хеш : коммита (сокращённый)   | b23cc73                                  |
| %T    | Хеш : дерева                  | 5f7239e6b94a39389d5d3e6066faab7cd655b835 |
| %t    | Хеш : дерева (сокращённый)    | 5f7239e                                  |
| %P    | Хеш : родителей               | f9e5cdfed4ec21915790310c4b229843fa3f5bc1 |
| %p    | Хеш : родителей (сокращённый) | f9e5cdf                                  |
| %an   | Автор : имя                   | cgehuzi                                  |
| %ae   | Автор : email                 | mail.cgehuzi@gmail.com                   |
| %ad   | Автор : дата                  | Sun Jan 19 15:11:54 2020 +0300           |
| %ar   | Автор : относительная дата    | 75 minutes ago                           |
| %cn   | Коммитер : имя                | cgehuzi                                  |
| %ce   | Коммитер : email              | mail.cgehuzi@gmail.com                   |
| %cd   | Коммитер : дата               | Sun Jan 19 15:11:54 2020 +0300           |
| %cr   | Коммитер : относительная дата | 75 minutes ago                           |
| %s    | Подпись                       | [ git ] - add log                        |

Формат даты задаётся аргументом `--date=______`

</details><br>

```bash
git log --date=______       # с датой в указанном формате
```

<details>
<summary>Опции формата</summary>

| Опция      | Пример вывода                   |
| ---------- | ------------------------------- |
| relative   | 2 hours ago                     |
| local      | Sun Jan 19 15:11:54 2020        |
| iso        | 2020-01-19 15:11:54 +0300       |
| iso-strict | 2020-01-19T15:11:54+03:00       |
| rfc        | Sun, 19 Jan 2020 15:11:54 +0300 |
| short      | 2020-01-19                      |
| raw        | 1579435914 +0300                |
| human      | 2 hours ago                     |
| unix       | 1579435914                      |

Формат даты задаётся аргументом `--date=______`

</details><br>

### Поиск коммитов

```bash
git log -13                 # последние 13 коммитов
git log --since=______      # после указанной даты
git log --after=______      # после указанной даты
git log --until=______      # после указанной даты
git log --before=______     # после указанной даты (дата в любом удобном формате)
git log --author=______     # имя автора содержит строку
git log --committer=______  # имя коммитера содержит строку
git log --grep=______       # подпись (сообщение) коммита содержит строку
git log -S______            # изменения в коде (добавление или удаление) содержит строку
git log <file>              # изменялся <file> (указывается последним параметром)
git log -- <file>           # изменялся <file>, который был удалён (указывается последним параметром)
git log <dir>               # изменялись файлы в <dir> (указывается последним параметром)
```
<br>

<a id="rev-list"></a>

```bash
git rev-list     # список коммитов (от последнего к первому)
```

<details>
<summary>Примеры</summary>

```bash
git rev-list --all    # hash-суммы всех коммитов
```

</details><br>

<a id="blame"></a>

```bash
git blame <file>    # построчная история последних изменений в файле
```

Эта команда выводит файл и рядом с каждой строкой показывает того, кто её менял и в каком коммите.

<details>
<summary>Формат вывода</summary>

```bash
# d8757b88 md/git.md (Ihar Spurhiash 2021-11-13 14:32:15 +0100   1) << [На главную](../README.md)
# 7f8d73a4 git.md    (cgehuzi        2020-01-21 14:17:11 +0300   2)
# 7f8d73a4 git.md    (cgehuzi        2020-01-21 14:17:11 +0300   3) # Git : Основные команды
# ------
# ------
# d0f2fe2c git.md    (cgehuzi        2020-01-22 17:40:28 +0300 697) ```
# d0f2fe2c git.md    (cgehuzi        2020-01-22 17:40:28 +0300 698)
# d0f2fe2c git.md    (cgehuzi        2020-01-22 17:40:28 +0300 699) </details><br>
```

</details><br>

<a id="grep"></a>

```bash
git grep     # поиск строки (в текущих файлах или в файлах истории коммитов)
```

<details>
<summary>Примеры</summary>

```bash
git grep <string>                         # в файлах текущего репозитория
git grep <string> <commit>                # в файлах конкретного коммита
git grep <string> $(git rev-list --all)   # в файлах всей истории коммитов

git grep -i ____      # - без учета регистра
```

</details><br>

### Переключение между коммитами

```bash
git checkout <commit>   # вернуть рабочую область к состоянию указанного коммита
```

<details>
<summary>Примеры</summary>

```bash
git checkout b23cc73df5e3ebd01f1d088d5ef0d6e57b99b9bc   # с указанием полного хеша
git checkout b23cc73                                    # с указанием сокращённого хеша
git checkout main                                       # вернуться к последнему коммиту
```

</details><br>

## Git : Метки у коммитов

```bash
git tag   # работа с метками
```

<details>
<summary>Примеры</summary>

```bash
git tag                               # показать теги в алфовитном порядке
git tag -l "____*"                    # поиск тегов по шаблону

git tag <tagname>                     # создать легковесный тег
git tag -a <tagname> -m "____"        # создать аннотированный тег (с комментом)
git tag -a <tagname> <commit>         # создать тег для коммита из истории

git push <remote> <tagname>           # отправить метку в удалённый репозиторий
git push <remote> --tags              # отправить все метки в удалённый репозиторий

git tag -d <tagname>                  # удалить тег локально
git push <remote> --delete <tagname>  # удалить тег из удалённого репозитория
```

</details><br>
