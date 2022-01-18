<< [На главную](../README.md)

# JS : Object - объект

- [Спецификация](https://tc39.es/ecma262/#sec-object-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

Навигация:

- [JS : Object - объект](#js--object---объект)
  - [Object : Проверка ключей](#object--проверка-ключей)
    - [1 вариант](#1-вариант)
    - [2 вариант](#2-вариант)
    - [3 вариант](#3-вариант)
  - [Object : Получение данных](#object--получение-данных)
  - [Object : Изменение](#object--изменение)
  - [Object : Клонирование (копирование)](#object--клонирование-копирование)
    - [Поверхностное (shallow)](#поверхностное-shallow)
    - [Глубокое (deep)](#глубокое-deep)
  - [Object : Spread-оператор](#object--spread-оператор)
  - [Object : Деструктуризация](#object--деструктуризация)
  - [Object : Rest-оператор](#object--rest-оператор)
  - [Object : Методы](#object--методы)

---

## Object : Проверка ключей

Проверка на присутствие ключей в объекте.  
**SPOILER** : лучше по возможности использовать [3 вариант](#3-вариант)

### 1 вариант

```js
{ ... }.key === undefined // проверяет, есть ли значение у такого ключа
```

<details>
<summary>Возможные проблемы</summary>

```js
const someFunction = () => {
  console.log('Hello, World!');
}; // ==> undefined

const user = { name: someFunction() };
user.name === undefined; // ==> true
```

</details><br>

### 2 вариант

<a id="hasOwnProperty"></a>

```js
Object.hasOwnProperty(); // проверяет, есть ли такой ключ
```

Проверяет, содержит ли объект определённый ключ при помощи стандартного свойства объекта.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.hasownproperty)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };
const prop = 'name';

user.hasOwnProperty('name'); // ==> true
user.hasOwnProperty(prop); // ==> true
user.hasOwnProperty('User'); // ==> false
user.hasOwnProperty('name.last'); // ==> false
```

</details>

<details>
<summary>Возможные проблемы</summary>

```js
const user = { name: 'Ihar Spurhiash', hasOwnProperty: 'Ooops!' };
user.hasOwnProperty('name'); // ==> TypeError: user.hasOwnProperty is not a function
```

</details><br>

### 3 вариант

<a id="lodash_has"></a>

```js
import _ from 'lodash';
_.has(); // проверяет наличие прямых и вложенных ключей
```

Возвращает true, если ключ или ключи найдены.

- [Документация](https://lodash.com/docs/#has)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

_.has(user, 'name'); // ==> true
_.has(user, 'name.first'); // ==> true
_.has(user, ['name', 'first']); // ==> true
_.has(user, 'Ihar'); // ==> false
```

</details><br>

## Object : Получение данных

<a id="keys"></a>

```js
Object.keys(); // возвращает массив ключей
```

Возвращает массив, содержащий ключи элементов в том порядке, в котором они были заведены.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.keys)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

Object.keys(user); // ==> ['name', 'height', 'married']
```

</details><br>

<a id="values"></a>

```js
Object.values(); // возвращает массив значений
```

Возвращает массив, содержащий значения элементов в том порядке, в котором они были заведены.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.values)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

Object.values(user); // ==> [{ first: 'Ihar', last: 'Spurhiash' }, 192, true]
```

</details><br>

<a id="entries"></a>

```js
Object.entries(); // возвращает массив значений
```

Возвращает массив, содержащий значения элементов в формате `[key, value]` в том порядке, в котором они были заведены.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.entries)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

Object.entries(user); // ==> [['name', { first: 'Ihar', last: 'Spurhiash' }], ['height', 192], ['married', true]]
```

</details><br>

## Object : Изменение

```js
Object.assign(); // сливает объекты
```

Копирует значения всех перечисляемых свойств из одного или более объектов в другой объект.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.assign)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

<details>
<summary>Примеры</summary>

```js
const user1 = { name: { first: 'Hanna', last: 'Chabaniuk' }, age: 29, married: false };

const user2 = { name: { first: 'Hanna', last: 'Spurhiash' }, married: true };

Object.assign(user1, user2); // ==> user1

// user1 === { name: { first: 'Hanna', last: 'Spurhiash' }, age: 29, married: true }
```

</details><br>

## Object : Клонирование (копирование)

### Поверхностное (shallow)

Не затрагивает вложенные объекты. Они оказываются в новом объекте по ссылке из старого.  
**SPOILER** : лучше по возможности использовать [spreed-оператор](#object--spread-оператор)

```js
Object.entries({}, obj); // нативное
_.clone(obj); // метод из Lodash
```

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

const copy1 = Object.assign({}, user);
copy1 === user; // ==> false
copy1.name === user.name; // ==> true

const copy2 = _.clone(user);
copy2 === user; // ==> false
copy2.name === user.name; // ==> true
```

</details><br>

### Глубокое (deep)

Полное клонирование, включая вложенные объекты.

```js
_.cloneDeep(obj); // метод из Lodash
```

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

const copy = _.cloneDeep(user);
copy === user; // ==> false
copy.name === user.name; // ==> false
```

</details><br>

## Object : Spread-оператор

<a id="spread"></a>

```js
...user // spread-оператор
```

Раскладывает массив на список элементов.

- [Спецификация](https://tc39.es/ecma262/#prod-SpreadElement)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
<summary>Примеры</summary>

```js
// Поверхностное копирование объекта (shallow)
// --------------------------------------------
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

const newUser = { ...user };

user === newUser; // ==> false
user.name === newUser.name; // ==> true
```

```js
// Добавление значений в объект
// --------------------------------------------
const userName = { name: 'Ihar' };
const userHeight = { height: 192 };
const married = true;
const property = 'sex';

const userChars = { ...userHeight, weight: 63, [property]: 'male', married };
// userChars === { height: 192, weight: 63, sex: 'male', married: true }

const user = { ...userName, ...userChars };
// user === { name: 'Ihar', height: 192, weight: 63, sex: 'male', married: true }
```

```js
// Замена значений в объекте
// --------------------------------------------
const user = { name: 'Ihar', height: 192, married: true };
const userName = { name: { first: 'Ihar', last: 'Spurhiash' } };
const userFix = { ...user, ...userName };
// userFix === { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true }
```

</details><br>

## Object : Деструктуризация

<a id="destructuring"></a>

```js
{ a: 'a', b: 'b', c: 'c' } = user; // извлечение данных из объекта в переменные
```

Позволяет извлекать данные из объектов при помощи синтаксиса, подобного объявлению объекта.<br>
Базовый синтаксис: `const/let { что_записывать: куда_записывать }`

- [Спецификация](https://tc39.es/ecma262/#sec-destructuring-assignment)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Разбор_объектов)

<details>
<summary>Примеры</summary>

```js
// объявление переменных со значениями
// --------------------------------------------
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };
const {
  height: userHeight,
  name: userName, // порядок переменных не обязан совпадать с порядком ключей
  married, // имя переменной совпадает с ключём
} = user;

// userName === { first: 'Ihar', last: 'Spurhiash' }
// userHeight === 192
// married === true
```

```js
// присвоение значений переменным
// --------------------------------------------
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192 };

const {
  name: { first: userFirstName },
  height: userHeight,
  weight: userWeight = null, // значения по умолчанию
  weight = null, // значения по умолчанию
  married, // несуществующий ключ
} = user;

// userFirstName === 'Ihar'
// userHeight === 192
// userWeight === null
// weight === null
// married === undefined
```

</details><br>

## Object : Rest-оператор

<a id="rest"></a>

```js
{ key: 'value', ...rest } // rest-оператор
```

Извлекает из объекта ПОСЛЕДНИЕ элементы, оставшиеся после деструктуризации.

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192 };

const { name, ...rest } = user;
// name === { first: 'Ihar', last: 'Spurhiash' }
// rest === { height: 192 }
user.name === name; // ==> true (ссылаются на один и тот же объект)

const { name, height, ...rest } = user;
// name === { first: 'Ihar', last: 'Spurhiash' }
// height === 192
// rest === { }
```

</details><br>

## Object : Методы

<a id="method"></a>

```js
{ ... }.method() // вызов метода для объекта
```

```js
const user = {
  name: 'Ihar',
  getName() {
    return this.name;
  },
};

user.getName(); // ==> 'Ihar'
```
