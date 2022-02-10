<< [На главную](../README.md)

# JS : Promise - промис

Объект `Promise` используется для отложенных и асинхронных вычислений.

- [Спецификация](https://tc39.es/ecma262/#sec-promise-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

Навигация:

- [JS : Promise - промис](#js--promise---промис)
  - [Promise : Состояния](#promise--состояния)
  - [Promise : Цепочка](#promise--цепочка)
  - [Promise : Конструктор](#promise--конструктор)
  - [Promise : Методы](#promise--методы)

---

## Promise : Состояния

С технической точки зрения, Promise — это объект, имеющий три состояния: `pending`, `fulfilled` и `rejected`.  
Промис начинается в состоянии `pending`, а затем, с помощью функций resolve и reject переводится в одно из конечных (терминальных) состояний `fulfilled` или `rejected`.

## Promise : Цепочка

```js
promise.then((value) => { ... }); // обработка успешной асинхронной операции
```

**!!! ВСЕГДА** возвращай новый Promise после обработки операции

```js
promise.catch((err) => { ... }); // обработка проваленной асинхронной операции
```

**!!! ВСЕГДА** вызывай исключение `throw err` после обработки ошибки

## Promise : Конструктор

```js
import fs from 'fs';

const promise = new Promise((resolve, reject) => {
  fs.readFile('/dir/file', (err, data) => {
    if (err) {
      reject(err);
      return;
    }

    resolve(data);
  });
}); // ==> Promise { <pending> }
```

- `fs` – встроенная библиотека для работы с файловой системой  
  [Документация на GitHub](https://github.com/nodejs/node/blob/master/doc/api/fs.md)

## Promise : Методы

<a id="resolve"></a>

```js
Promise.resolve(value); // возвращает Promise, выполненный с переданным значением
```

<details>
<summary>Пример</summary>

```js
Promise.resolve([1, 2, 3])
  .catch((err) => {
    console.log('Ошибка!');
    return err;
  })
  .then((value) => {
    console.log(value);
    return value;
  });
// Console:
// [1, 2, 3]
```

</details><br>

<a id="reject"></a>

```js
Promise.reject(err); // возвращает Promise, который был отклонён
```

<details>
<summary>Пример</summary>

```js
Promise.reject([1, 2, 3])
  .catch((err) => {
    console.log('Ошибка!');
    return err;
  })
  .then((value) => {
    console.log(value);
    return value;
  });
// Console:
// Ошибка!
// [1, 2, 3]
```

</details><br>

<a id="all"></a>

```js
Promise.all(iterable); // возвращает Promise с массивом значений
```

<details>
<summary>Пример</summary>

```js
import fs from 'fs';

Promise.all(['/dir1/file', '/dir1', '/dir2', '/dir2/file'])
  .then((list) => {
    console.log(list);
    // преобразуем массив значений в массив промисов
    const promiseList = list.map((item) => fs.promises.stat(item));
    return Promise.all(promiseList); // !!! ВСЕГДА из then() возвращаем Promise
  })
  .then((list) => {
    console.log(list);
    // обрабатываем массив с результатами
    const statList = list.map((item) => (item.isFile() ? 'file' : 'directory'));
    return Promise.resolve(statList); // !!! ВСЕГДА из then() возвращаем Promise
  })
  .then(console.log);

// Console:
// [ '/dir1/file', '/dir1', '/dir2', '/dir2/file' ]
// [ { fs.Stats }, { fs.Stats }, { fs.Stats }, { fs.Stats } ]
// [ 'file', 'directory', 'directory', 'file' ]
```

- `fs.promises` – промисы, используемые в модуле fs  
  [Документация на GitHub](https://github.com/nodejs/node/blob/master/doc/api/fs.md)

</details><br>
