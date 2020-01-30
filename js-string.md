<< [На главную](./README.md)

# JS : String - строка

- [Спецификация](https://tc39.es/ecma262/#sec-string-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String)

## Навигация

- [String : Изменение](#string--изменение)
- [String : Преобразование](#string--преобразование)

---

## String : Изменение

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

str.substring(1); //      ==> '123456'
str.substring(-1, 3); //  ==> '012'
str.substring(3, -1); //  ==> '012'
str.substring(1, 3); //   ==> '12'

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

planets.split(','); // ==> [ 'Меркурий', 'Венера', 'Земля', 'Марс' ]

// planets === 'Меркурий,Венера,Земля,Марс'
```

Обратное действие: [Array => String](./js-array.md#join)

</details><br>
