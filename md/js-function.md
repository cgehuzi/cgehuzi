<< [На главную](../README.md)

# JS : Function - функция

- [Спецификация](https://tc39.es/ecma262/#sec-function-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)

---

Навигация:

- [JS : Function - функция](#js--function---функция)
  - [Function : Rest-оператор](#function--rest-оператор)

---

## Function : Rest-оператор

<a id="rest"></a>

```js
(...rest) => {}; // rest-оператор
```

Извлекает из параметров функции массив с ПОСЛЕДНИМИ переданными элементами (необязательные параметры).

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
func(9, 4); // ==> [13, [ ]]
func(9, 4, -1, 3); // ==> [13, [-1, 3]]
func(9); // ==> [NaN, []]
```

</details><br>
