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
  - [Object : Преобразование](#object--преобразование)
  - [Object : Использование spread](#object--использование-spread)
  - [Object : Деструктуризация](#object--деструктуризация)

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
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
  married: true,
};
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

Проверка с помощью метода [has](node-lodash.md#has) из библиотеки Lodash.

```js
import _ from 'lodash';
_.has(object, key); // проверяет, есть ли такой ключ
```

## Object : Преобразование

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
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
  married: true,
};

Object.keys(user); // ==> [ 'name', 'height', 'married' ]
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
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
  married: true,
};

Object.values(user); // ==> [ { first: 'Ihar', last: 'Spurhiash' }, 192, true ]
```

</details><br>

<a id="entries"></a>

```js
Object.entries(); // возвращает массив значений
```

Возвращает массив, содержащий значения элементов в формате `[ key, value ]` в том порядке, в котором они были заведены.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.entries)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

<details>
<summary>Примеры</summary>

```js
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
  married: true,
};

Object.entries(user); // ==> [ [ 'name', { first: 'Ihar', last: 'Spurhiash' } ], [ 'height', 192 ], [ 'married', true ] ]
```

</details><br>

## Object : Использование spread

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
// Создание копии объекта (а не ссылки на объеки)
// ------------------------------------------------------------
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
  married: true,
};

const newUser = {
  ...user,
};
// newUser === { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true }
```

```js
// Добавление значений в объект
// ------------------------------------------------------------
const userName = {
  name: 'Ihar',
};
const userHeight = {
  height: 192,
};
const married = true;
const property = 'sex';

const userChars = {
  ...userHeight,
  weight: 63,
  [property]: 'male',
  married,
};
// userChars === { height: 192, weight: 63, sex: 'male', married: true }

const user = {
  ...userName,
  ...userChars,
};
// user === { name: 'Ihar', height: 192, weight: 63, sex: 'male', married: true }
```

```js
// Замена значений в объекте
// ------------------------------------------------------------
const user = {
  name: 'Ihar',
  height: 192,
  married: true,
};
const userName = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
};
const userFix = {
  ...user,
  ...userName,
};
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
// ------------------------------------------------------------
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
  married: true,
};
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
// ------------------------------------------------------------
const user = {
  name: {
    first: 'Ihar',
    last: 'Spurhiash',
  },
  height: 192,
};

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
