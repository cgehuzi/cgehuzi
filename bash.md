<< [На главную](./README.md)

# BASH : Командная строка

## Навигация

- [BASH : Горячие клавиши](#bash--горячие-клавиши)
- [BASH : Навигация](#bash--навигация)
- [BASH : Файловая структура](#bash--файловая-структура)
- [BASH : Вывод информации](#bash--вывод-информации)
- [BASH : Управление информацией](#bash--управление-информацией)
- [BASH : Управление файлами / директориями](#bash--управление-файлами--директориями)
- [BASH : Потоки данных](#bash--потоки-данных)
- [BASH : Переменные окружения](#bash--переменные-окружения)
- [BASH : Пользователи и группы](#bash--пользователи-и-группы)
- [BASH : Права доступа](#bash--права-доступа)
- [BASH : Управление утилитами](#bash--управление-утилитами)
- [BASH : Makefile - шаблонизация команд](#bash--makefile---шаблонизация-команд)

---

## BASH : Горячие клавиши

- `↑` - предыдущая исполненная команда
- `↓` - следующая исполненная команда
- `^ + R` – поиск по истории исполненных ранее команд
  - `повторное ^ + R` – переход к следующему соответствию
  - `Enter` – выполнить найденную команду
  - `Esc` – выход (найденная команда останется введённой)

## BASH : Навигация

<a id="pwd"></a>

```bash
pwd     # текущая директория
```

<a id="ls"></a>

```bash
ls      # список файлов / дирекорий
```

<details>
<summary>Примеры</summary>

```bash
ls          # показать список в текущей директории
ls <dir>    # показать список в директории
ls -a       # показывать скрытые
ls -l       # показывать доп. информацию
```

</details><br>

<a id="cd"></a>

```bash
cd      # переход между директориями
```

<details>
<summary>Примеры</summary>

```bash
cd <dir>    # к дочерней директории
cd /        # к корню системы
cd .        # к текущей директории
cd ..       # к директории-родителю
cd ../..    # к директории-дедушке
cd ~        # к директории пользователя
```

</details><br>

## BASH : Файловая структура

```bash
/                   # Корневой каталог
/bin                # Основные утилиты (например: cat, ls, cp)
/boot               # Загрузочные файлы
/dev                # Основные файлы устройств
/etc                # Общесистемные конфигурационные файлы
/etc/opt            # Файлы конфигурации для /opt
/etc/sgml           # Конфигурационные файлы SGML
/etc/xml            # Конфигурационные файлы XML
/home               # Домашние каталоги пользователей
/lib                # Основные библиотеки
/media              # Точки монтирования для сменных носителей
/mnt                # Временно монтируемые файловые системы
/opt                # Дополнительное программное обеспечение
/proc               # Состояние ядра операционной системы и запущенных процессов
/root               # Домашний каталог пользователя root
/run                # Информация о системе с момента её загрузки
/sbin               # Основные системные программы для администрирования (например: init, iptables, ifconfig)
/srv                # Данные для сервисов, предоставляемых системой (например, www или ftp)
/sys                # Информация об устройствах и драйверах
/tmp                # Временные файлы
/usr                # Вторичная иерархия для данных пользователя
/usr/bin            # Дополнительные программы
/usr/include        # Стандартные заголовочные файлы
/usr/lib            # Библиотеки для программ, находящихся в /usr/bin и /usr/sbin
/usr/local          # Третичная иерархия для данных
/usr/sbin           # Дополнительные системные программы
/usr/share          # Архитектурно-независимые общие данные
/usr/src            # Исходные коды
/var                # Изменяемые файлы
/var/cache          # Кэш приложений
/var/lib            # Информация о состоянии
/var/lock           # Файлы блокировки
/var/log            # Различные файлы регистрации
/var/mail           # Почтовые ящики пользователей
/var/spool          # Задачи, ожидающие обработки
/var/tmp            # Временные файлы, которые должны быть сохранены между перезагрузками
```

[Полный список](https://ru.wikipedia.org/wiki/FHS)

## BASH : Вывод информации

<a id="man"></a>

```bash
man     # документация команды
```

<details>
<summary>Примеры</summary>

```bash
man <command>   # документация команды <command>
```

</details>

<details>
<summary>Управление</summary>

см. [less](#less)

</details><br>

<a id="stat"></a>

```bash
stat    # информация о файлах и директориях
```

<details>
<summary>Примеры</summary>

```bash
stat <file>     # информация о файле
stat <dir>      # информация о директории
```

</details><br>

<a id="cat"></a>

```bash
cat     # чтение файлов
```

<details>
<summary>Примеры</summary>

```bash
cat <file>      # всё содержимое <file>
```

</details><br>

<a id="head"></a>

```bash
head    # чтение первых строк файла
```

<details>
<summary>Примеры</summary>

```bash
head <file>         # первые 10 строк
head -n 13 <file>   # первые 13 строк
head -13 <file>     # первые 13 строк
```

</details><br>

<a id="tail"></a>

```bash
tail    # чтение последних строк файла
```

<details>
<summary>Примеры</summary>

```bash
tail <file>         # последние 10 строк
tail -n 13 <file>   # последние 13 строк
tail -13 <file>     # последние 13 строк
tail -f <file>      # отслеживать изменения в файле
                    # | при каждом изменении файла на экран выводятся новые добавленные строки
                    # | macOS   : [Command] + [C] -- остановить отслеживание
                    # | Windows : [Ctrl] + [C] -- остановить отслеживание
```

</details><br>

<a id="less"></a>

```bash
less    # пейджер для чтения файлов
```

<details>
<summary>Примеры</summary>

```bash
less <file>     # прочесть <file>
```

</details>

<details>
<summary>Управление</summary>

- `Q` - выход
- `F` - следующая страница
- `B` - предыдущая страница
- `/ + some_text + Enter` - поиск 'some_text'
  - `n` - переход к следующему совпадению
  - `N` - переход к предыдущему совпадению

</details><br>

<a id="grep"></a>

```bash
grep    # поиск по файлу
```

<details>
<summary>Примеры</summary>

```bash
grep <string> <file>                        # вывести строки, содержащие <string>, в <file>
grep -B 13 <string> <file>                  # + вывести 13 строк ДО
grep --before-context 13 <string> <file>    # + вывести 13 строк ДО
grep -A 13 <string> <file>                  # + вывести 13 строк ПОСЛЕ
grep --after-context 13 <string> <file>     # + вывести 13 строк ПОСЛЕ
grep -C 13 <string> <file>                  # + вывести 13 строк ДО и 13 ПОСЛЕ
grep --context 13 <string> <file>           # + вывести 13 строк ДО и 13 ПОСЛЕ
grep -R <string> <dir>                      # вывести строки во всех файлах директории
grep -R -n <string> <dir>                   # + вывести номер строки
```

</details><br>

<a id="find"></a>

```bash
find    # поиск файла / директории
```

<details>
<summary>Примеры</summary>

```bash
find <string>                       # файлы и директории, содержащие в пути или имени <string>
find <dir> -name <string>           # файлы и директории c именем <string>
find <dir> -type f  -name <string>  # файлы c именем <string>
find <dir> -type d  -name <string>  # директории c именем <string>
```

</details><br>

<a id="wc"></a>

```bash
wc      # количество слов, строк или символов в файле
```

<details>
<summary>Примеры</summary>

```bash
wc -w <file>        # количество слов в <file>
wc --words <file>   # количество слов в <file>
wc -l <file>        # количество строк в <file>
wc --lines <file>   # количество строк в <file>
wc -m <file>        # количество символов в <file>
wc --chars <file>   # количество символов в <file>
```

</details><br>

<a id="history"></a>

```bash
history # история вводимых команд
```

История хранится в файле `$HOME/.bash_history`

<details>
<summary>Примеры</summary>

```bash
history                     # вся история
history 13                  # последние 13 команд
!21                         # выполнить команду под номером 21 в истории
history | grep some_text    # поиск some_text по истории
```

</details><br>

<a id="diff"></a>

```bash
diff    # различия между файлами
```

<details>
<summary>Примеры</summary>

```bash
diff <file_1> <file_2>              # что нового в <file_2> по сравнению с <file_1>
diff <file_1> <file_2> > <file_3>   # с записью изменений в <file_3>
```

Внесение полученных изменений производится командой [patch](#patch)

</details><br>

## BASH : Управление информацией

<a id="nano"></a>

```bash
nano    # текстовый редактор файлов
```

<details>
<summary>Управление</summary>

После запуска редактора внизу открывается панель с подсказками, какие горячие клавиши доступны для использования.

- `^ + X` - выход

</details><br>

<a id="vim"></a>

```bash
vim     # текстовый редактор файлов
```

<details>
<summary>Управление</summary>

- `I` - переход в режим ввода
- `Esc` - возврат в режим команд
- `^ + [` - возврат в режим команд
- `:` - переход в режим командной строки
  - `w` - сохранение изменений
  - `wq` - выход из редактора (с сохранением изменений)
  - `q!` - выход из редактора (без сохранения изменений)

</details><br>

[Гайд по использованию](https://guides.hexlet.io/vim/)

## BASH : Управление файлами / директориями

<a id="touch"></a>

```bash
touch   # создать файл (побочный эффект)
        # поменять время последнего доступа к файлу (основной эффект)
```

<details>
<summary>Примеры</summary>

```bash
touch <file>        # создать пустой <file>
```

</details><br>

<a id="mkdir"></a>

```bash
mkdir   # создать директорию
```

<details>
<summary>Примеры</summary>

```bash
mkdir new_name              # создание одной директории
mkdir -p <dir_1>/<dir_2>    # создание вложенных директории
```

</details><br>

<a id="rm"></a>

```bash
rm      # удалить файл / директорию
```

<details>
<summary>Примеры</summary>

```bash
rm <file>       # удалить файл <file>
rm -r <dir>     # удалить директорию <dir> (с вопросом по каждому внутреннему файлу)
rm -r -f <dir>  # удалить директорию <dir> (без вопросов)
```

</details><br>

<a id="mv"></a>

```bash
mv      # перемещение файла / директории
        # переименование файла / директории
```

<details>
<summary>Примеры</summary>

```bash
mv <file> new_name      # переименование файла
mv <file> <dir>         # перемещение файла
mv <dir> new_name       # переименование директории
mv <dir> <dir>          # перемещение директории
```

</details><br>

<a id="cp"></a>

```bash
cp      # копирование файла / директории
```

<details>
<summary>Примеры</summary>

```bash
mv <file> new_name      # создание копии файла
mv <file> <dir>         # копирование файла в директорию
mv -r <dir> new_name    # создание копии директории
mv -r <dir> <dir>       # копирование директории в директорию
```

</details><br>

<a id="patch"></a>

```bash
patch   # внесение изменений в файл
```

<details>
<summary>Примеры</summary>

```bash
diff <file_1> <file_2> > <file_3>   # получение изменений и запись в <file_3>
patch <file_1> -i <file_3>          # внесение полученных изменений в <file_1>
```

Получение изменений производится командой [diff](#diff)

</details><br>

## BASH : Потоки данных

- `Поток 0` — файл **STDIN** (Standard Input)  
  по умолчанию "связан" с клавиатурой - все что вы печатаете на клавиатуре, попадает туда

- `Поток 1` — файл **STDOUT** (Standard Output)  
  по умолчанию "связан" с монитором - все, что вы запишите в него, вы увидите на экране

- `Поток 2` — файл **STDERR** (Standard Error)  
  по умолчанию "связан" с монитором - используется для вывода сообщений об ошибках

### Управление потоками

<a id="pipeline"></a>

```bash
____ | ____     # pipeline (конвейер) - последовательный вызов команд
                # | STDOUT одного процесса cоединяется с STDIN другого
```

<details>
<summary>Примеры</summary>

```bash
<command_1> | <command_2>           # STDOUT 1 --> STDIN 1 --> STDOUT 2
cat <file> | grep some_text | sort  # - ИТОГО:
                                    # | читаем <file>
                                    # | ищем там some_text
                                    # | сортируем найденное
```

</details><br>

<a id="stdout-stdin"></a>

```bash
____ > ____     # STDOUT --> STDIN : запись данных в файл
```

<details>
<summary>Примеры</summary>

```bash
<command> > <file>          # с полной заменой содержимого <file>
<command> >> <file>         # с добавлением в конец <file>
echo some_text > <file>     # вывод some_text на экран и запись результата в <file>
echo some_text >> <file>    # вывод some_text на экран и запись результата в конец <file>
```

</details><br>

<a id="stdin-stdout"></a>

```bash
____ < ____     # STDIN --> STDOUT : вывод данных о файле на экран
```

<details>
<summary>Примеры</summary>

```bash
<command> < <file>                  # вывод результата <command> для <file>
<command> < <file_1> > <file_2>     # запись результата <command> для <file_1> в <file_2>
```

</details><br>

<a id="stderr-stdout"></a>

```bash
____ 2>&1       # STDERR --> STDOUT : перенаправление патока (2) в поток (1)
```

<details>
<summary>Примеры</summary>

```bash
<wrong_command> 2>&1            # просто перенаправление STDERR --> STDOUT
<wrong_command> > <file> 2>&1   # перенаправление STDERR --> STDOUT --> STDIN
```

</details><br>

<a id="stderr-stdin"></a>

```bash
____ &> ____    # и STDERR --> STDIN
                # и STDOUT --> STDIN
```

<details>
<summary>Примеры</summary>

```bash
<command> &> <file>         # STDOUT --> STDIN : с полной заменой содержимого <file>
echo some_text &> <file>    # STDOUT --> STDIN : вывод some_text на экран и запись результата в <file>
<wrong_command> &> <file>   # STDERR --> STDIN : прямое перенаправление
```

</details><br>

## BASH : Переменные окружения

<a id="env"></a>

```bash
env     # список установленных переменных
```

### Основные переменные

- **HOME** - путь к корневой директории пользователя
- **PATH** - список директорий, в которых расположены исполняемые файлы (утилиты)

<details>
<summary>Управление</summary>

```bash
echo $HOME              # вывод значения переменной
export HOME=<dir>       # изменение переменной (для всей сессии)
HOME=<dir>              # изменение переменной (для всей сессии)
HOME=<dir> <command>    # изменение переменной (для запускаемой команды)
```

</details><br>

## BASH : Пользователи и группы

<a id="whoami"></a>

```bash
whoami  # имя текущего (активного) пользователя
```

<a id="sudo"></a>

```bash
sudo    # повысить привилегии до root
```

<details>
<summary>Примеры</summary>

```bash
sudo <command>                  # выполнить от имени пользователя root
sudo -u user_name <command>     # выполнить от имени пользователя user_name
sudo -i                         # запустить root-сессию
exit                            # выйти из root-сесии
sudoedit <file>                 # редактировать файл от имени пользователя root
                                # | если файл лежит в директории, принадлежащей root
```

</details><br>

<a id="id"></a>

```bash
id      # список идентификаторов пользователей
```

```bash
cat /etc/passwd     # информация о пользователях
```

<details>
<summary>Формат вывода</summary>

![информация о пользователях](https://github.com/cgehuzi/notes/raw/master/images/bash-cat-passwd.jpg)

</details><br>

<a id="ps"></a>

```bash
ps      # отчёт о работающих процессах
```

<details>
<summary>Примеры</summary>

```bash
ps          # отчёт о работающих процессах
ps aux      # какой процесс и под каким пользователем запущен
            # | a - процессы всех пользователей
            # | u - отображать пользователя процесса
            # | x - процессы, не привязанные к терминалу
```

</details><br>

## BASH : Права доступа

```bash
ls -l   # получение информации о правах
ls -la  # + скрытые файлы / директории
```

<details>
<summary>Формат вывода</summary>

![информация о правах доступа](https://github.com/cgehuzi/notes/raw/master/images/bash-permissions.jpg)

**`r — read`** : право на чтение  
**`w — write`** : право на запись (редактирование)  
**`x — execute`** : право на исполнение

- `Type` - тип элемента
  - `-` — файл
  - `d` - директория
  - `l` - символическая ссылка
- `User` - права доступа для владельца
- `Group` - права доступа для ползователей из группы владельца
- `Other` - права доступа для всех остальных

</details>

<details>
<summary>Таблица числовых значений</summary>

Например:

- `rwxr-xr-x` — 755
- `rw-r--r--` — 644

| num | Permission              | rwx | Binary |
| :-: | :---------------------- | :-: | :----: |
|  7  | read, write and execute | rwx |  111   |
|  6  | read and write          | rw- |  110   |
|  5  | read and execute        | r-x |  101   |
|  4  | read only               | r-- |  100   |
|  3  | write and execute       | -wx |  011   |
|  2  | write only              | -w- |  010   |
|  1  | execute only            | --x |  001   |

</details><br>

<a id="chown"></a>

```bash
chown   # изменение владельца / группы у файла / директории
```

<details>
<summary>Примеры</summary>

```bash
chown user_name <file>              # изменение владельца у файла
chown user_name <dir>               # изменение владельца у директории
chown :group_name <file>            # изменение группы у файла
chown :group_name <dir>             # изменение группы у директории
chown user_name:group_name <file>   # изменение владельца и группы у файла
chown user_name:group_name <dir>    # изменение владельца и группы у директории
chown -R ____ <dir>                 # изменение владельца / группы у директории и всех дочерних элементов
```

</details><br>

<a id="chmod"></a>

```bash
chmod   # изменение прав доступа у файла / директории
```

<details>
<summary>Примеры</summary>

```bash
chmod u=rwx <file>              # изменение для владельца (User) у файла
chmod g=rwx <file>              # изменение для группы (Group) у файла
chmod o=rwx <file>              # изменение для остальных (Other) у файла
chmod u=rwx,g=rwx,o=rwx <file>  # изменение для всех у файла
chmod _+___ <file>              # добавление права у файла
chmod _-___ <file>              # удаление права у файла
chmod _=___,_+___,_-___ <file>  # возможны любые комбинации

chmod u=rwx <dir>               # изменение для владельца (User) у директории
chmod g=rwx <dir>               # изменение для группы (Group) у директории
chmod o=rwx <dir>               # изменение для остальных (Other) у директории
chmod u=rwx,g=rwx,o=rwx <dir>   # изменение для всех у директории
chmod _+___ <dir>               # добавление права у директории
chmod _-___ <dir>               # удаление права у директории
chmod _=___,_+___,_-___ <dir>   # возможны любые комбинации

chmod -R ____ <dir>             # изменение у директории и всех дочерних элементов
```

</details><br>

## BASH : Управление утилитами

```bash
type <command>      # тип команды и путь к исполняющему файлу
which <command>     # путь к исполняющему файлу
whereis <command>   # путь к файлам (исполняющему, исходному и мануалу)
```

| Пакетный менеджер       | ОС      | Установка                                   | Вызов          |
| :---------------------- | :------ | :------------------------------------------ | :------------- |
| Advanced Packaging Tool | Ubuntu  | не требуется                                | `$ apt ____`   |
| Homebrew                | macOS   | [Официальный сайт](https://brew.sh/)        | `$ brew ____`  |
| Chocolatey              | Windows | [Официальный сайт](https://chocolatey.org/) | `$ choco ____` |

### macOS

<a id="brew"></a>

```bash
brew install ____   # установка утилиты
brew remove ____    # удаление утилиты
brew update ____    # обновить пакетный менеджер
```

[Полный список команд](https://docs.brew.sh/Manpage#commands)

## BASH : Makefile - шаблонизация команд

<a id="make"></a>

```bash
make <alias>    # запуск команд из Makefile
```

### Makefile

```bash
test:                               # alias для вызова
    npm run test                    # вызываемая команда

logs:                               # alias для вызова
    sudo tail -n $(N) <log_file>    # вызываемая команда с параметром N

build: test                         # alias для вызова : зависимость
    npm run build                   # вызываемая команда

.PHONY: test logs build             # сброс стандартных инструкций для указанных alias
                                    # | указывается последней строчкой в Makefile
                                    # | если в директории будет файл test,
                                    # | то без .PHONY сработает его обработка
```

Перед вызываемыми командами обязательно нужна табуляция.

```bash
make test       # === $ npm run test
make logs N=13  # === $ sudo tail -n 13 <log_file>
make build      # === $ npm run test; npm run build
```
