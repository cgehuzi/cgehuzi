<< [На главную](../README.md)

# SQL : Основные команды

[DB Fiddle](https://www.db-fiddle.com/)<br>
Онлайн-песочница для выполнения SQL-запросов.

---

Навигация:

- [SQL : Основные команды](#sql--основные-команды)
  - [Создание базы данных](#создание-базы-данных)
  - [Создание таблицы](#создание-таблицы)
  - [Добавление записи](#добавление-записи)
  - [Редактирование записи](#редактирование-записи)
  - [Получение данных](#получение-данных)
  - [Удаление записи](#удаление-записи)

---

### Создание базы данных

```sql
CREATE DATABASE db_name;
```

- [Documentation](https://www.postgresql.org/docs/current/sql-createtable.html)
- [Документация](https://postgrespro.ru/docs/postgresql/current/sql-createdatabase)

---

### Создание таблицы

```sql
CREATE TABLE users (
    id BIGINT,
    username VARCHAR(50),
    email VARCHAR(255),
    birthday DATE,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

- [Documentation](https://www.postgresql.org/docs/current/sql-createtable.html)
- [Документация](https://postgrespro.ru/docs/postgresql/current/sql-createtable)

> Хорошей практикой считается добавление и заполнение полей `created_at` и `updated_at` в каждую таблицу базы данных. С их помощью всегда можно узнать, когда запись создалась и обновилась.

- [Типы данных](./sql-types.md)

---

### Добавление записи

```sql
INSERT INTO users (id, username, email, birthday, created_at, updated_at)
VALUES (1, 'cgehuzi', 'mail.cgehuzi@gmail.com', '1991-01-01', '2021-01-01', '2021-01-01');
```

- [Documentation](https://www.postgresql.org/docs/current/sql-insert.html)
- [Документация](https://postgrespro.ru/docs/postgresql/current/sql-insert)

---

### Редактирование записи

```sql
UPDATE users
SET email = 'new.cgehuzi@gmail.com'
WHERE username = 'cgehuzi';
```

- [Documentation](https://www.postgresql.org/docs/current/sql-update.html)
- [Документация](https://postgrespro.ru/docs/postgresql/current/sql-update)

---

### Получение данных

```sql
-- Все колонки
SELECT * FROM users;
SELECT * FROM users WHERE username = 'cgehuzi';

-- Определенные колонки
SELECT id, email FROM users;
SELECT id, email FROM users WHERE username = 'cgehuzi';
```

- [Documentation](https://www.postgresql.org/docs/current/sql-select.html)
- [Документация](https://postgrespro.ru/docs/postgresql/current/sql-select)

---

### Удаление записи

```sql
DELETE FROM users
WHERE username = 'cgehuzi';
```

- [Documentation](https://www.postgresql.org/docs/current/sql-delete.html)
- [Документация](https://postgrespro.ru/docs/postgresql/current/sql-delete)
