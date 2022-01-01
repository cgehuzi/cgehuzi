<< [На главную](../README.md)

# JS : Function - функция

- [Спецификация](https://tc39.es/ecma262/#sec-function-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)

---

Навигация:

- [JS : Function - функция](#js--function---функция)
  - [Function : Rest-оператор](#function--rest-оператор)
  - [Function : Spread-оператор](#function--spread-оператор)
  - [Function : Деструктуризация параметров](#function--деструктуризация-параметров)

---

## Function : Rest-оператор

<a id="rest"></a>

```js
const func = (...rest) => {}; // rest-оператор
```

Извлекает из параметров функции массив с ПОСЛЕДНИМИ переданными аргументами (необязательные параметры).

<details>
<summary>Примеры</summary>

```js
const func = (...params) => params;
func(); // ==> []
func(9); // ==> [9]
func(9, 4); // ==> [9, 4]
```

```js
const func = (a, b, ...params) => [a + b, params];
func(9, 4); // ==> [13, []]
func(9, 4, -1, 3); // ==> [13, [-1, 3]]
func(9); // ==> [NaN, []]
```

</details><br>

## Function : Spread-оператор

<a id="spread"></a>

```js
func(...spread); // spread-оператор
```

Раскладывает массив на аргументы, передаваемые функции.

<details>
<summary>Примеры</summary>

```js
const sum = (...params) => {
  let result = 0;
  for (const param of params) {
    result += param;
  }
  return result;
};
```

```js
const numbers = [1, 7, 4];
sum(...numbers); // ==> 12
sum(8, 10, ...numbers); // ==> 30
sum(8, ...numbers, 10); // ==> 30
sum(...numbers, 8, 10); // ==> 30
```

```js
const numbers1 = [1, 7, 4];
const numbers2 = [8, 10];
sum(...numbers1, ...numbers2); // ==> 30
```

</details><br>

## Function : Деструктуризация параметров

<a id="destructuring"></a>

```js
const func = ([a, b]) => {}; // деструктуризация массива
const func = ({ a, b }) => {}; // деструктуризация объекта
```

Производит деструктуризацию параметров сразу в определении функции.

- [Деструктуризация массива](./js-array.md#destructuring)
- [Деструктуризация объекта](./js-object.md#destructuring)

<details>
<summary>Примеры</summary>

```js
const sum = ([a, b, c = 0]) => a + b;
sum([1, 7]); // ==> 8
sum([1, 7, 10]); // ==> 18
sum([1]); // ==> NaN
sum(1, 7); // ==> TypeError: аргументы – это не массив
```

```js
const getFullName = ({ name, surname = 'Ivanov' }) => `${name} ${surname}`;
getFullName({ name: 'Ihar' }); // ==> 'Ihar Ivanov'
getFullName({ name: 'Ihar', surname: 'Spurhiash' }); // ==> 'Ihar Spurhiash'
getFullName({ married: true }); // ==> 'undefined Ivanov'
getFullName(); // ==> TypeError ::: аргумент — undefined (у этого типа данных нет вызываемых свойств)
getFullName('Ihar'); // ==> 'undefined Ivanov' ::: аргумент — строка (у этого типа данных есть вызываемые свойства)
```

</details><br>

<details>
<summary>Возможные проблемы</summary>

```js
const getLength = ({ length }) => length;
getLength({ length: 123 }); // ==> 123 — ок
getLength(123); // ==> undefined — допустим
getLength('123'); // ==> 3 — что?
// Аргумент — строка, а у строк есть свойство .length
// '123'.length === 3
```

</details><br>
