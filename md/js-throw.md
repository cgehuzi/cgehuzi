<< [На главную](../README.md)

# Throw - исключения

- [Спецификация](https://tc39.es/ecma262/#sec-throw-statement)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw)

---

```js
const ident = (a) => a;

// если результат функции не равен ожидаемому значению
if (ident(1) !== 1) {
  // выбрасываем исключение и останавливаем выполнение кода
  throw new Error('Функция работает неверно!');
}

// Uncaught Error: Функция работает неверно!
```
