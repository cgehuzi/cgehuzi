<< [На главную](../README.md)

# JS : Function - функция

- [Спецификация](https://tc39.es/ecma262/#sec-function-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)

---

Навигация:

- [JS : Function - функция](#js--function---функция)
  - [Function : this](#function--this)
    - [Обычная функция](#обычная-функция)
  - [Function : Методы](#function--методы)
  - [Function : Rest-оператор](#function--rest-оператор)
  - [Function : Spread-оператор](#function--spread-оператор)
  - [Function : Деструктуризация параметров](#function--деструктуризация-параметров)

---

## Function : this

<a id="this"></a>

`this` — это привязка, которая создается во время вызова функции, и ссылается на контекст вызова. Контекс зависит от того, где и при каких условиях функция была вызвана.

### Обычная функция

```js
const user = {
  name: 'Ihar',
  // присваиваем свойство-метод
  getName() {
    return this.name;
  },
};

user.getName(); // ==> 'Ihar'
// user — контекст вызова функции getName
```

<details>
<summary>Примеры</summary>

```js
const user1 = {
  name: 'Ihar',
  getName() {
    return this.name;
  },
};
const user2 = { name: 'Hanna' };

user1.getName(); // ==> 'Ihar'
user2.getName(); // ==> TypeError: user2.getName is not a function

user2.getName = user1.getName;
user2.getName(); // ==> 'Hanna'
```

</details><br>

## Function : Методы

<a id="call"></a>

```js
func.call(); // вызов функции с переданным контекстом
```

Вызывает функцию с указанным значением `this` и индивидуально предоставленными аргументами.

- [Спецификация](https://tc39.es/ecma262/#sec-function.prototype.call)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

<details>
<summary>Примеры</summary>

```js
const getName = function getName(start = 'Name is ', end = '.') {
  return `${start}${this.name}${end}`;
};

const user = { name: 'Ihar' };

getName.call(); // ==> 'Name is undefined.'
getName.call(user); // ==> 'Name is Ihar.'
getName.call(user, 'Hello, '); // ==> 'Hello, Ihar.'
getName.call(user, 'Hello, ', '!'); // ==> 'Hello, Ihar!'
```

</details><br>

<a id="call"></a>

```js
func.apply(); // вызов функции с переданным контекстом
```

Вызывает функцию с указанным значением `this` и аргументами, предоставленными в виде массива.

- [Спецификация](https://tc39.es/ecma262/#sec-function.prototype.apply)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

<details>
<summary>Примеры</summary>

```js
const getName = function getName(start = 'Name is ', end = '.') {
  return `${start}${this.name}${end}`;
};

const user = { name: 'Ihar' };

getName.apply(); // ==> 'Name is undefined.'
getName.apply(user); // ==> 'Name is Ihar.'
getName.apply(user, ['Hello, ']); // ==> 'Hello, Ihar.'
getName.apply(user, ['Hello, ', '!']); // ==> 'Hello, Ihar!'
```

</details><br>

<a id="bind"></a>

```js
func.bind(); // создание новой функции и связь её с переданным контекстом
```

Создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения `this` предоставленное значение.  
В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове.

**SPOILER** : лучше по возможности использовать анонимные стрелочные функции

- [Спецификация](https://tc39.es/ecma262/#sec-function.prototype.bind)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

<details>
<summary>Примеры</summary>

```js
const printName = function printName(start = 'Name is ', end = '.') {
  console.log(`${start}${this.name}${end}`);
};

const user = { name: 'Ihar', printName };

user.printName(); // ==> 'Name is Ihar.'
setTimeout(user.printName, 1000); // ==> 'Name is undefined.'

let printNameBinded;

printNameBinded = user.printName.bind(user);
printNameBinded(); // === user.printName() ==> 'Name is Ihar.'
setTimeout(printNameBinded, 1000); // ==> 'Name is Ihar.'

// !!! более приемлимое решение
setTimeout(() => user.printName(), 1000); // ==> 'Name is Ihar.'

printNameBinded = user.printName.bind(user, 'Hello, ');
printNameBinded(); // === user.printName('Hello, ') ==> 'Hello, Ihar.'
printNameBinded('!'); // === user.printName('Hello, ', '!') ==> 'Hello, Ihar!'
setTimeout(printNameBinded, 1000); // ==> 'Hello, Ihar.'

// !!! более приемлимое решение
setTimeout(() => user.printName('Hello, '), 1000); // ==> 'Hello, Ihar.'
```

</details><br>

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

- [Деструктуризация массива](./js-array.md#array--деструктуризация)
- [Деструктуризация объекта](./js-object.md#object--деструктуризация)

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

</details>

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
