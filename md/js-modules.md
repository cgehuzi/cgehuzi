<< [На главную](../README.md)

# JS : Modules - модули

---

Навигация:

- [JS : Modules - модули](#js--modules---модули)
  - [Modules : Экспорт](#modules--экспорт)
  - [Modules : Импорт](#modules--импорт)

---

## Modules : Экспорт

- [Спецификация](https://tc39.es/ecma262/#sec-exports)
- [Документация MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

<a id="export"></a>

```js
// export.js
const func1 = (arg) => arg * 1;
const wrong2 = (arg) => arg * 2;
const wrong3 = (arg) => arg * 3;
export const func4 = (arg) => arg * 4;
export { func1, wrong2 as func2, wrong3, a };

const a = true;
export const b = false;

const wrong5 = (arg) => arg * 5;
export default wrong5;
```

## Modules : Импорт

- [Спецификация](https://tc39.es/ecma262/#sec-imports)
- [Документация MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

<a id="import"></a>

```js
// Импорт всего модуля
import * as exportModule from './export';
```

<details>
<summary>Использование</summary>

```js
exportModule.func1(1); // ==> 1
exportModule.func2(1); // ==> 2
exportModule.wrong3(1); // ==> 3
exportModule.func4(1); // ==> 4
exportModule.default(1); // ==> 5
exportModule.a; // ==> true
exportModule.b; // ==> false
```

</details><br>

```js
// Импорт по частям
import func5, { func1, func2, wrong3 as func3, func4, a, b } from './export';
```

<details>
<summary>Использование</summary>

```js
func1(1); // ==> 1
func2(1); // ==> 2
func3(1); // ==> 3
func4(1); // ==> 4
func5(1); // ==> 5
a; // ==> true
b; // ==> false
```

</details><br>
