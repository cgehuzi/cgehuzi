<< [На главную](../README.md)

# Git : SSH

Добавления ssh-ключей на github.com<br>
Сначала нужно сгенерировать ssh-ключи, а затем один из них (публичный) добавить в настройки Github.

## SSH : Генерация SSH-ключей

[Документация GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Коротко:

1. Создание ssh-ключей

   ```bash
   ssh-keygen -t rsa -b 4096 -C "<your_github_email>"
   # Дальше будет несколько вопросов. На все вопросы нужно нажимать Enter.
   ```

2. Запуск агента ssh, который следит за ключами

   ```bash
   eval "$(ssh-agent -s)"
   ```

3. Добавления нового ssh-ключа в агент

   ```bash
   ssh-add ~/.ssh/id_rsa
   ```

## SSH : Интеграция с Github

[Документация GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Коротко:

1. Выведите содержимое файла `~/.ssh/id_rsa.pub` и скопируйте его

   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

2. [Добавьте](https://github.com/settings/keys) ssh-ключ в аккаунт Github.<br>
   При добавлении вас попросят назвать ключ. Напишите что-нибудь в стиле home.
