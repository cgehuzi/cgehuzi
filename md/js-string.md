<< [На главную](../README.md)

# JS : String - строка

- [Спецификация](https://tc39.es/ecma262/#sec-string-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

---

Навигация:

- [JS : String - строка](#js--string---строка)
  - [String : Изменение длины](#string--изменение-длины)
  - [String : Изменение символов](#string--изменение-символов)
  - [String : Преобразование](#string--преобразование)
  - [String : Проверка](#string--проверка)
  - [String : Деструктуризация](#string--деструктуризация)
  - [String : Rest-оператор](#string--rest-оператор)

---

## String : Изменение длины

<a id="slice"></a>

```js
String.slice(); // извлекает подстроку
```

Возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.slice)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

<details>
<summary>Примеры</summary>

```js
const str = '0123456';

str.slice(1); // ==> '123456'
str.slice(-1, 3); // ==> ''     (-1 < 0) ---> если start < 0, возвращается ''
str.slice(3, -1); // ==> '345'  (-1 < 0) ---> если end < 0, end = str.length + end ---> 6
str.slice(1, 3); // ==> '12'

// str === '0123456'
```

</details><br>

<a id="substring"></a>

```js
String.substring(); // извлекает подстроку
```

Возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.substring)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

<details>
<summary>Примеры</summary>

```js
const str = '0123456';

str.substring(1); // ==> '123456'
str.substring(-1, 3); // ==> '012'  (-1 < 0) ---> вместо него используется 0
str.substring(3, -1); // ==> '012'  (3 > -1) ---> они меняются местами
str.substring(1, 3); // ==> '12'

// str === '0123456'
```

</details><br>

<a id="trim"></a>

```js
String.trim(); // удаляет пробелы по краям
```

Удаляет пробельные символы с начала и конца строки.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.trim)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

<details>
<summary>Примеры</summary>

```js
const str1 = '   0123456 ';
const str2 = `
0123456 `;

str1.trim(); // ==> '0123456'
str2.trim(); // ==> '0123456'

// str1 === '   0123456 '
// str2 === '\n0123456 '
```

</details><br>

<a id="padStart"></a>

```js
String.padStart(); // заполняет строку слева
```

Заполняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.padStart)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

<details>
<summary>Примеры</summary>

```js
const str = '1';

str.padStart(4); // ==> '   1'
str.padStart(4, 0); // ==> '0001'
str.padStart(4, '_-'); // ==> '_-_1'

// str === '1'
```

</details><br>

<a id="padEnd"></a>

```js
String.padEnd(); // дополняет строку справа
```

Дополняет текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Дополнение осуществляется в конце (справа) текущей строки.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.padEnd)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

<details>
<summary>Примеры</summary>

```js
const str = '1';

str.padEnd(4); // ==> '1   '
str.padEnd(4, 0); // ==> '1000'
str.padEnd(4, '_-'); // ==> '1_-_'

// str === '1'
```

</details><br>

## String : Изменение символов

<a id="lodash_upperFirst"></a>

```js
_.upperFirst(); // первый символ в верхний регистр
```

Преобразует первый символ строки в верхний регистр.

- [Документация](https://lodash.com/docs/#upperFirst)

<details>
<summary>Примеры</summary>

```js
_.upperFirst('венера, земля'); // ==> 'Венера, земля'
_.upperFirst('ВЕНЕРА, земля'); // ==> 'ВЕНЕРА, земля'
```

</details><br>

## String : Преобразование

<a id="split"></a>

```js
String.split(); // преобразует строку в массив
```

Разбивает строку на массив путём разделения по указанной подстроке.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.split)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split)

<details>
<summary>Примеры</summary>

```js
const planets = 'Меркурий,Венера,Земля,Марс';

planets.split(','); // ==> ['Меркурий', 'Венера', 'Земля', 'Марс']

// planets === 'Меркурий,Венера,Земля,Марс'
```

Обратное действие: [Array => String](./js-array.md#join)

</details><br>

<a id="lodash_words"></a>

```js
_.words(); // извлекает массив слов
```

Извлекает из строки массив слов (без знаков препинания и спецсимволов).

- [Документация](https://lodash.com/docs/#words)

<details>
<summary>Примеры</summary>

```js
_.words('Земля и Луна, Марс & Фобос'); // ==> ['Земля', 'и', 'Луна', 'Марс', 'Фобос']
```

</details><br>

## String : Проверка

<a id="startsWith"></a>

```js
String.startsWith(); // начинается ли строка с указанной подстроки
```

Определяет, начинается ли строка с подстроки, указанной в скобках.

- [Спецификация](https://tc39.es/ecma262/#sec-string.prototype.startswith)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

<details>
<summary>Примеры</summary>

```js
const planets = 'Меркурий,Венера,Земля,Марс';

planets.startsWith('М'); // ==> true
planets.startsWith('Меркурий'); // ==> true
planets.startsWith(''); // ==> true
planets.startsWith('Венера'); // ==> false

planets.startsWith('М', 0); // ==> true
planets.startsWith('Венера', 9); // ==> true
planets.startsWith('Венера', 0); // ==> false

// planets === 'Меркурий,Венера,Земля,Марс'
```

</details><br>

## String : Деструктуризация

Аналог [деструктуризации массивов](./js-array.md#destructuring)

<a id="destructuring"></a>

```js
[a, b, c] = 'abc'; // извлечение символов из строки в переменные
```

Позволяет извлекать символы из строки при помощи синтаксиса, подобного объявлению массива.

<details>
<summary>Примеры</summary>

```js
const [a, b, , , c, d, e = '!'] = 'Земля';
// a === 'З'
// b === 'е'
// c === 'я'
// d === undefined
// e === '!'
```

</details><br>

## String : Rest-оператор

Аналог [rest-оператора массивов](./js-array.md#rest)

<a id="rest"></a>

```js
[a, ...rest] = 'abc'; // rest-оператор
```

Извлекает из строки массив ПОСЛЕДНИХ символов, оставшихся после деструктуризации.

<details>
<summary>Примеры</summary>

```js
const [a, b, , ...other] = 'Земля';
// a === 'З'
// b === 'е'
// other === ['л', 'я']
```

</details><br>
