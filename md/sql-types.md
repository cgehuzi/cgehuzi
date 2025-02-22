<< [На главную](../README.md)

# SQL : Типы данных

- [All types](https://www.postgresql.org/docs/current/datatype.html) - postgresql.org
- [Все типы](https://postgrespro.ru/docs/postgresql/current/datatype.html) - postgrespro.ru

---

Навигация:

- [SQL : Типы данных](#sql--типы-данных)
  - [Строки](#строки)
  - [Числа](#числа)
  - [Дата и время](#дата-и-время)
  - [Логический тип](#логический-тип)
  - [NULL](#null)

---

### Строки

- `VARCHAR` : `'example'` - для строк с ограничением максимальной длины
- `TEXT` : `'example'` - для строк без ограничения длины

> - [Документация](https://www.postgresql.org/docs/current/datatype-character.html)

---

### Числа

- `INTEGER` : `123` - целое число
- `BIGINT` : `123456789` - большое целое число
- `REAL` : `123.45` - число с плавающей точкой

> - [Документация](https://www.postgresql.org/docs/current/datatype-numeric.html)

---

### Дата и время

- `TIMESTAMP` : `'2021-01-01 12:00:00'` - дата и время
- `DATE` : `'2021-01-01'` - только дата
- `TIME` : `'12:00:00'` - только время

> - [Документация](https://www.postgresql.org/docs/current/datatype-datetime.html)

---

### Логический тип

- `BOOLEAN` : `TRUE` - булево значение

Возможные значения:

> `TRUE` `'t'` `'true'` `'y'` `'yes'` `'on'` `'1'`  
> `FALSE` `'f'` `'false'` `'n'` `'no'` `'off'` `'0'`

> - [Документация](https://www.postgresql.org/docs/current/datatype-boolean.html)

---

### NULL

- `NULL` - отсутствие значения

> Оно используется, когда у конкретного поля нет значения. Тип поля при этом не важен
