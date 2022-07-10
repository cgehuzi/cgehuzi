<< [На главную](../README.md)

# HTTP - запросы на сервер

---

## CURL

Утилита командной строки для создания и отправки запросов.

```bash
curl <url>  # GET-запрос к сайту
```

### Тезисно

```bash
curl <url>                      # GET-запрос к сайту
curl <url> > <file>             # сохранить результат в файл
curl --head <url>               # посмотреть только заголовки ответа (простой пример)
curl --head -X GET <url>        # посмотреть только заголовки ответа (более правильный пример)
curl -v <url>                   # посмотреть и запрос и ответ
curl -H "<header>" <url>        # указать заголовок запроса.    Например: Content-Type: application/json
curl -X POST <url> -d "<data>"  # указать тело запроса.         Например: { "firstName": "Ihar", "age": 21 }

curl -X POST <url> \            # указать \ ...
   -H "<header>" \              # и заголовок \ ...
   -d "<data>"                  # и тело
```

### С подробностями

В таком варианте `curl` распечатает на экран тело ответа. Например: HTML-код сайта.

```bash
# Можно сохранить в файл
curl <url> > <file>
```

Если мы хотим посмотреть заголовки ответа, то запрос станет таким:

```bash
# --head - запрос с методом HEAD
curl --head <url>

# HTTP/2 200
# date: Thu, 28 Apr 2022 22:19:39 GMT
# content-type: text/html; charset=utf-8
# cache-control: max-age=0, private, must-revalidate
```

> По спецификации, заголовки возвращаемые в случае HEAD запроса должны совпадать с заголовками GET-запроса, но реальный ответ зависит от настроек сервера

Поэтому для точности лучше выполнить GET-запрос:

```bash
# -X, --request - задает метод запроса
# --head в данном случае игнорирует тело при выводе
curl --head -X GET <url>

# HTTP/2 200
# date: Thu, 28 Apr 2022 22:19:39 GMT
# content-type: text/html; charset=utf-8
# cache-control: max-age=0, private, must-revalidate

```

Если нужно увидеть не только ответ но и запрос, то подойдет флаг --verbose, он покажет все включая тело ответа:

```bash
# Вывод сокращен
# -v, --verbose
curl -v <url>

# *   Trying 104.26.0.21:443...
# * Connected to code-basics.com (104.26.0.21) port 443 (#0)
# * SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384
# > GET / HTTP/2
# > Host: code-basics.com
# > user-agent: curl/7.79.1
# > accept: */*
# >
# * Connection state changed (MAX_CONCURRENT_STREAMS == 256)!
# < HTTP/2 200
# < date: Thu, 28 Apr 2022 22:24:06 GMT
# < content-type: text/html; charset=utf-8
# < referrer-policy: strict-origin-when-cross-origin
# < cache-control: max-age=0, private, must-revalidate
# <

# ... тут еще и тело
```

Указание заголовков:

```bash
# -H, --header
curl -H "Content-Type: application/json" <url>
```

И тела в запросе:

```bash
# \ - нужен для указания многострочного кода в терминале
curl -X POST <url> \
   -H "Content-Type: application/json" \
   -d '{ "firstName": "Ihar", "age": 21 }'
```
