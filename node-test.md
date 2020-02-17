<< [На главную](./README.md)

# node : Тесты

## Навигация

- [Throw : исключения](#throw--исключения)
- [Assert : встроенный модуль](#assert--встроенный-модуль)

---

## Throw : исключения

- [Спецификация](https://tc39.es/ecma262/#sec-throw-statement)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/throw)

<a id="throw"></a>

```js
const ident = (a) => a;

// если результат функции не равен ожидаемому значению
if (ident(1) !== 1) {
  // выбрасываем исключение и останавливаем выполнение кода
  throw new Error('Функция работает неверно!');
}

//  Uncaught Error: Функция работает неверно!
```

## Assert : встроенный модуль

<a id="assert"></a>

Node.js поставляется с модулем assert, в котором есть несколько функций, упрощающих написание утверждений (тестов).

- [Документация](https://nodejs.org/api/assert.html)

```js
assert(expression); // проверка истинности выражения
```

<details>
<summary>Примеры</summary>

```js
const ident = (a) => a;

assert(ident(1), 1); //   ==> всё ок
assert(ident(2), 1); //   ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: false == true
//    generatedMessage: true,
//    code: 'ERR_ASSERTION',
//    actual: false,
//    expected: true,
//    operator: '=='
```

</details><br>

```js
assert.equal(actual, expected); //      проверка равенства элементов (по ссылке)
assert.notEqual(actual, expected); //   проверка неравенства элементов (по ссылке)
```

<details>
<summary>Примеры</summary>

```js
const ident = (a) => a;

assert.equal(ident(1), 1); //         ==> всё ок
assert.equal(ident([1]), [1]); //     ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: [1] == [1]
//    generatedMessage: true,
//    code: 'ERR_ASSERTION',
//    actual: [1],
//    expected: [1],
//    operator: '=='

assert.notEqual(ident(2), 1); //      ==> всё ок
assert.notEqual(ident([1]), [1]); //  ==> всё ок
assert.notEqual(ident(1), 1); //      ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: 1 != 1
//    generatedMessage: true,
//    code: 'ERR_ASSERTION',
//    actual: 1,
//    expected: 1,
//    operator: '!='
```

</details><br>

```js
assert.deepEqual(actual, expected); //    проверка равенства элементов (по значению)
assert.notDeepEqual(actual, expected); // проверка неравенства элементов (по значению)
```

<details>
<summary>Примеры</summary>

```js
const ident = (a) => a;

assert.deepEqual(ident([1]), [1]); //   ==> всё ок
assert.deepEqual(ident([2]), [1]); //   ==> выдаст ошибку

// Uncaught AssertionError [ERR_ASSERTION]: Expected values to be loosely deep-equal: [2] should loosely deep-equal [1]
//    generatedMessage: true,
//    code: 'ERR_ASSERTION',
//    actual: [2],
//    expected: [1],
//    operator: 'deepEqual'

assert.notDeepEqual(ident([2]), [1]); //   ==> всё ок
assert.notDeepEqual(ident([1]), [1]); //   ==> выдаст ошибку

// Uncaught: AssertionError [ERR_ASSERTION]: Expected "actual" not to be loosely deep-equal to: [1]
//    generatedMessage: true,
//    code: 'ERR_ASSERTION',
//    actual: [1],
//    expected: [1],
//    operator: 'notDeepEqual'
```

</details><br>
