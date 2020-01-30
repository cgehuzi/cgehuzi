<< [На главную](./README.md)

# JS : Object - объект

- [Спецификация](https://tc39.es/ecma262/#sec-object-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Навигация

- [Object : Изменение (мутабельно)](#object--изменение-мутабельно)
- [Object : Изменение (иммутабельно)](#object--изменение-иммутабельно)
- [Object : Перебор](#object--перебор)
- [Object : Функции высшего порядка](#object--функции-высшего-порядка)
- [Object : Поиск](#object--поиск)
- [Object : Проверка](#object--проверка)
- [Object : Преобразование](#object--преобразование)
- [Object : Использование spread](#object--использование-spread)

---

## Object : Изменение (мутабельно)

## Object : Изменение (иммутабельно)

## Object : Перебор

## Object : Функции высшего порядка

## Object : Поиск

## Object : Проверка

<a id="hasOwnProperty"></a>

```js
Object.hasOwnProperty(); // проверяет, есть ли такой ключ
```

Проверяет, содержит ли объект определённый ключ.

- [Спецификация](https://tc39.es/ecma262/#sec-object.prototype.hasownproperty)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

<details>
<summary>Примеры</summary>

```js
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };
const prop = 'name';

user.hasOwnProperty('name'); //       ==> true
user.hasOwnProperty(prop); //         ==> true
user.hasOwnProperty('User'); //       ==> false
user.hasOwnProperty('name.last'); //  ==> false
```

</details><br>

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
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

Object.keys(user); // ==> [ 'name', 'height', 'married' ]
```

</details><br>

## Object : Использование spread

<a id="spread"></a>

```js
...planets // spread-оператор
```

Раскладывает массив на список элементов.

- [Спецификация](https://tc39.es/ecma262/#prod-SpreadElement)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<details>
<summary>Примеры</summary>

```js
// Создание копии объекта (а не ссылки на объеки)
// ------------------------------------------------------------
const user = { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true };

const newUser = { ...user };
// newUser === { name: { first: 'Ihar', last: 'Spurhiash' }, height: 192, married: true }
```

```js
// Добавление значений в объект
// ------------------------------------------------------------
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
// ------------------------------------------------------------
const user = { name: 'Ihar', height: 192, married: true };
const userName = { name: { fisrt: 'Ihar', last: 'Spurhiash' } };
const userFix = { ...user, ...userName };
// userFix === { name: { fisrt: 'Ihar', last: 'Spurhiash' }, height: 192, married: true }
```

</details><br>
```
