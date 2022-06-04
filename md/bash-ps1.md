<< [На главную](../README.md)

# PS1 - строка-приглашение в терминале

---

## zsh

```bash
user /directory [git-branch] $
```

Открыть в текстовом редакторе файл `~/.zshrc`  
Если файла нет — создать.

```bash
touch ~/.zshrc  # создаём, если нет
vim ~/.zshrc    # редактируем
```

Добавить в файл конструкцию:

```bash
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}

COLOR_DEF=$'\e[0m'
COLOR_USR=$'\e[38;5;243m'
COLOR_DIR=$'\e[38;5;197m'
COLOR_GIT=$'\e[38;5;39m'
setopt PROMPT_SUBST
export PROMPT='${COLOR_USR}%n ${COLOR_DEF}%~ ${COLOR_GIT}$(parse_git_branch)${COLOR_DEF} $ '
```
