<< [На главную](../README.md)

# JS : Function - функция

- [Спецификация](https://tc39.es/ecma262/#sec-function-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)

---

Навигация:

- [JS : Function - функция](#js--function---функция)
  - [Function : Rest-оператор](#function--rest-оператор)
  - [Function : Spread-оператор](#function--spread-оператор)

---

## Function : Rest-оператор

<a id="rest"></a>

```js
const func = (...rest) => {}; // rest-оператор
```

Извлекает из аргументов функции массив с ПОСЛЕДНИМИ переданными элементами (необязательные аргументы).

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

Раскладывает массив на аргументы функции.

<details>
<summary>Примеры</summary>

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
