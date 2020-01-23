<< [На главную](./README.md)

# JS : Math - математика

- [Спецификация](https://tc39.es/ecma262/#sec-math-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Навигация

- [Math : Общие методы](#math--общие-методы)
- [Math : Сравнение](#math--сравнение)
- [Math : Округления](#math--округления)
- [Math : Степени](#math--степенm)
- [Math : Приведение](#math--приведение)

---

## Math : Общие методы

<a id="random"></a>

```js
Math.random(); // случайное число в диапазоне [0, 1)
```

Возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона.

- [Спецификация](https://tc39.es/ecma262/#sec-math.random)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

<details>
<summary>Примеры</summary>

```js
Math.random(); // ===> 0.13858511668104012
Math.random(); // ===> 0.4398712493212362
Math.random(); // ===> 0
Math.random(); // ===> 0.482987176406106
```

</details><br>

## Math : Приведение

<a id="abs"></a>

```js
Math.abs(); // модуль числа
```

Возвращает абсолютное значение числа (модуль).

- [Спецификация](https://tc39.es/ecma262/#sec-math.abs)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)

<details>
<summary>Примеры</summary>

```js
Math.abs('-1'); // ===> 1
Math.abs(-2); // ===> 2
Math.abs(null); // ===> 0
Math.abs(''); // ===> 0
Math.abs([]); // ===> 0
Math.abs([2]); // ===> 2
Math.abs([1, 2]); // ===> NaN
Math.abs({}); // ===> NaN
Math.abs('string'); // ===> NaN
Math.abs(); // ===> NaN
```

</details><br>

<a id="sign"></a>

```js
Math.sign(); // знак числа
```

Возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём.

- [Спецификация](https://tc39.es/ecma262/#sec-math.sign)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)

<details>
<summary>Примеры</summary>

```js
Math.sign('0'); // ===> 0
Math.sign(0); // ===> 0
Math.sign(-0); // ===> -0
Math.sign('1'); // ===> 1
Math.sign(2); // ===> 1
Math.sign('-1'); // ===> -1
Math.sign(-2); // ===> -1
Math.sign(null); // ===> 0
Math.sign(''); // ===> 0
Math.sign([]); // ===> 0
Math.sign([2]); // ===> 1
Math.sign([1, 2]); // ===> NaN
Math.sign({}); // ===> NaN
Math.sign('string'); // ===> NaN
Math.sign(); // ===> NaN
```

</details><br>

## Math : Сравнение

<a id="max"></a>

```js
Math.max(); // наибольшее из чисел
```

Возвращает наибольшее из нуля или более чисел.

- [Спецификация](https://tc39.es/ecma262/#sec-math.max)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

<details>
<summary>Примеры</summary>

```js
Math.max(-2, 3); // ===> 3
Math.max(-2, 0, 4); // ===> 4
Math.max(''); // ===> 0
Math.max([]); // ===> 0
Math.max([2]); // ===> 2
Math.max([1, 2]); // ===> NaN
Math.max({}); // ===> NaN
Math.max('string'); // ===> NaN
Math.max(); // ===> -Infinity
```

</details><br>

<a id="min"></a>

```js
Math.min(); // наименьшее из чисел
```

Возвращает наименьшее из нуля или более чисел.

- [Спецификация](https://tc39.es/ecma262/#sec-math.min)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

<details>
<summary>Примеры</summary>

```js
Math.min(-2, 3); // ===> -2
Math.min(-2, 0, 4); // ===> -2
Math.min(''); // ===> 0
Math.min([]); // ===> 0
Math.min([2]); // ===> 2
Math.min([1, 2]); // ===> NaN
Math.min({}); // ===> NaN
Math.min('string'); // ===> NaN
Math.min(); // ===> -Infinity
```

</details><br>

## Math : Округления

<a id="round"></a>

```js
Math.round(); // обычное округление
```

Возвращает число, округлённое к ближайшему целому.

- [Спецификация](https://tc39.es/ecma262/#sec-math.round)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

<details>
<summary>Примеры</summary>

```js
Math.round(20.49); // ===> 20
Math.round(20.5); // ===> 21
Math.round(-20.5); // ===> -20
Math.round(-20.51); // ===> -21
Math.round(1.005 * 100); // ===> 100
// Ошибка из-за неточности вычислений с плавающей запятой
// 1.005*100 ===> 100.49999999999999
```

</details><br>

<a id="floor"></a>

```js
Math.floor(); // округление вниз
```

Округляет аргумент до ближайшего меньшего целого.

- [Спецификация](https://tc39.es/ecma262/#sec-math.floor)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

<details>
<summary>Примеры</summary>

```js
Math.floor(20); // ===> 20
Math.floor(20.99); // ===> 20
Math.floor(-20.99); // ===> -21
```

</details><br>

<a id="ceil"></a>

```js
Math.ceil(); // округление вверх
```

Округляет аргумент до ближайшего большего целого.

- [Спецификация](https://tc39.es/ecma262/#sec-math.ceil)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

<details>
<summary>Примеры</summary>

```js
Math.ceil(20); // ===> 20
Math.ceil(20.99); // ===> 21
Math.ceil(-20.99); // ===> -20
```

</details><br>

<a id="trunc"></a>

```js
Math.trunc(); // число без дробной части
```

Возвращает целую часть числа путём удаления всех дробных знаков.

- [Спецификация](https://tc39.es/ecma262/#sec-math.trunc)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)

<details>
<summary>Примеры</summary>

```js
Math.trunc(20); // ===> 20
Math.trunc(20.99); // ===> 20
Math.trunc(0.99); // ===> 0
Math.trunc(-0.99); // ===> -0
Math.trunc(-20.99); // ===> -20
```

</details><br>

## Math : Степени

<a id="pow"></a>

```js
Math.pow(); // возведение в степень
```

Возвращает число, возведённое в указанную степень.

- [Спецификация](https://tc39.es/ecma262/#sec-math.pow)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

<details>
<summary>Примеры</summary>

```js
Math.pow(2, 3); // ===> 8
Math.pow(7, 2); // ===> 49
```

</details><br>

<a id="sqrt"></a>

```js
Math.sqrt(); // квадратный корень
```

Возвращает квадратный корень числа.

- [Спецификация](https://tc39.es/ecma262/#sec-math.sqrt)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)

<details>
<summary>Примеры</summary>

```js
Math.sqrt(9); // ===> 3
Math.sqrt(2); // ===> 1.414213562373095
Math.sqrt(1); // ===> 1
Math.sqrt(0); // ===> 0
Math.sqrt(-1); //===> NaN
Math.sqrt(-0); //===> -0
```

</details><br>
