<< [На главную](./README.md)

# node : Lodash - библиотека

- [Официальный сайт](https://lodash.com/)

---

Навигация:

- [node : Lodash - библиотека](#node--lodash---библиотека)
  - [Array : Массив](#array--массив)
  - [Object : Объект](#object--объект)
  - [Math : Математические выражения](#math--математические-выражения)
  - [String : Строка](#string--строка)

---

## Array : Массив

<a id="intersection"></a>

```js
_.intersection(); // сравнивает массивы (возвращает одинаковые элементы)
```

Возвращает массив, в который входят элементы, встречающиеся во всех переданных массивах одновременно.

- [Документация](https://lodash.com/docs/#intersection)

<details>
<summary>Примеры</summary>

```js
const planets1 = ['Меркурий', 'Венера', 'Земля'];
const planets2 = ['Венера', 'Земля', 'Марс'];
const planets3 = ['Земля', 'Марс', 'Юпитер'];

_.intersection(planets1);                     // ==> [ 'Меркурий', 'Венера', 'Земля' ]
_.intersection(planets1, planets2);           // ==> [ 'Венера', 'Земля' ]
_.intersection(planets1, planets2, planets3); // ==> [ 'Земля' ]
```

</details><br>

<a id="union"></a>

```js
_.union(); // объединяет массивы (без повторяющихся элементов)
```

Возвращает массив, в который входят все элементы переданных массивов. Повторяющиеся элементы отсеиваются.

- [Документация](https://lodash.com/docs/#union)

<details>
<summary>Примеры</summary>

```js
const planets1 = ['Меркурий', 'Венера', 'Земля'];
const planets2 = ['Венера', 'Земля', 'Марс'];
const planets3 = ['Земля', 'Марс', 'Юпитер'];

_.union(planets1);                      // ==> [ 'Меркурий', 'Венера', 'Земля' ]
_.union(planets1, planets2);            // ==> [ 'Меркурий', 'Венера', 'Земля', 'Марс' ]
_.union(planets1, planets2, planets3);  // ==> [ 'Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер' ]
```

</details><br>

<a id="difference"></a>

```js
_.difference(); // вычисляет разницу массивов
```

Возвращает массив, в который входят элементы первого массива, которых нет во втором массиве.

- [Документация](https://lodash.com/docs/#difference)

<details>
<summary>Примеры</summary>

```js
const planets1 = ['Меркурий', 'Венера', 'Земля'];
const planets2 = ['Венера', 'Земля', 'Марс'];

_.difference(planets1);           // ==> [ 'Меркурий', 'Венера', 'Земля' ]
_.difference(planets1, planets2); // ==> [ 'Меркурий' ]
_.difference(planets2, planets1); // ==> [ 'Марс' ]
```

</details><br>

## Object : Объект

<a id="has"></a>

```js
_.has(); // проверяет наличие прямых и вложенных ключей
```

Возвращает true, если ключ или ключи найдены.

- [Документация](https://lodash.com/docs/#has)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

_.has(user, 'name');            // ==> true
_.has(user, 'name.first');      // ==> true
_.has(user, ['name', 'first']); // ==> true
_.has(user, 'Ihar');            // ==> false
```

</details><br>

## Math : Математические выражения

## String : Строка

<a id="upperFirst"></a>

```js
_.upperFirst(); // первый символ в верхний регистр
```

Преобразует первый символ строки в верхний регистр.

- [Документация](https://lodash.com/docs/#upperFirst)

<details>
<summary>Примеры</summary>

```js
_.upperFirst('string'); // ==> 'String'
_.upperFirst('STRING'); // ==> 'STRING'
```

</details><br>
