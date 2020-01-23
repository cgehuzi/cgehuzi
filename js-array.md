<< [На главную](./README.md)

# JS : Array - массив

- [Спецификация](https://tc39.es/ecma262/#sec-array-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Урок на Hexlet](https://ru.hexlet.io/courses/js_collections/lessons/array/theory_unit)

## Навигация

- [Array : Изменение (мутабельно)](#array--изменение-мутабельно)
- [Array : Изменение (иммутабельно)](#array--изменение-иммутабельно)
- [Array : Перебор](#array--перебор)
- [Array : Функции высшего порядка](#array--функции-высшего-порядка)
- [Array : Поиск](#array--поиск)
- [Array : Проверка](#array--проверка)
- [Array : Преобразование](#array--преобразование)
- [Array : Использование spread](#array--использование-spread)
- [Array : Деструктуризация](#array--деструктуризация)

---

## Array : Изменение (мутабельно)

<a id="push"></a>

```js
Array.push(); // добавляет элементы в конец
```

Добавляет один или несколько элементов в конец массива и возвращает длину изменённого (мутированного) массива (если точнее, то метод возвращает обновлённое свойство length массива, являющееся значением самого последнего индекса, увеличенным на единицу).

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.push)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.push('Юпитер'); // ===> 5
planets.push('Сатурн', 'Уран'); // ===> 7

console.log(planets);
// (7) ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Сатурн", "Уран"]
```

</details><br>

<a id="unshift"></a>

```js
Array.unshift(); // добавляет элементы в начало
```

Добавляет один или несколько элементов в начало массива и возвращает длину изменённого (мутированного) массива (если точнее, то метод возвращает обновлённое свойство length массива, являющееся значением самого последнего индекса, увеличенным на единицу).

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.unshift)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

<details>
<summary>Примеры</summary>

```js
const planets = ['Земля', 'Марс'];

planets.unshift('Венера'); // ===> 3
planets.unshift('Солнце', 'Меркурий'); // ===> 5

console.log(planets);
// (5) ["Солнце", "Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="shift"></a>

```js
Array.shift(); // удаляет первый элемент
```

Удаляет первый элемент массива и возвращает его значение.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.shift)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.shift(); // ===> "Меркурий"
planets.shift(); // ===> "Венера"

console.log(planets);
// (2) ["Земля", "Марс"]
```

</details><br>

<a id="pop"></a>

```js
Array.pop(); // удаляет последний элемент
```

Удаляет последний элемент массива и возвращает его значение.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.pop)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.pop(); // ===> "Марс"
planets.pop(); // ===> "Земля"

console.log(planets);
// (2) ["Меркурий", "Венера"]
```

</details><br>

<a id="reverse"></a>

```js
Array.reverse(); // переворачивает массив
```

Обращает порядок следования элементов массива.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.reverse)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.reverse(); // ===> (4) ["Марс", "Земля", "Венера", "Меркурий"]

console.log(planets);
// (4) ["Марс", "Земля", "Венера", "Меркурий"]
```

</details><br>

<a id="sort"></a>

```js
Array.sort(); // сортирует массив
```

Сортирует элементы массива и возвращает отсортированный массив.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.sort)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.sort(); // ===> (4) ["Венера", "Земля", "Марс", "Меркурий"]
planets.sort((a, b) => {
	if (a.length > b.length) {
		return 1;
	}
	if (a.length < b.length) {
		return -1;
	}
	if (a.length === b.length) {
		return 0;
	}
}); // ===> (4) ["Марс", "Земля", "Венера", "Меркурий"]

console.log(planets);
// (4) ["Марс", "Земля", "Венера", "Меркурий"]
```

</details><br>

## Array : Изменение (иммутабельно)

<a id="slice"></a>

```js
Array.slice(); // обрезает массив
```

Возвращает новый массив, в который копирует элементы, начиная с индекса `start` и до `end` (не включая end).

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.slice)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.slice(2); // ===> (2) ["Земля", "Марс"]
planets.slice(1, 3); // ===> (2) ["Венера", "Земля"]
planets.slice(1, 999); // ===> (3) ["Венера", "Земля", "Марс"]
planets.slice(-3, -1); // ===> (2) ["Венера", "Земля"]
// Примечание: -3 === (length - 3) === 1

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="concat"></a>

```js
Array.concat(); // склеивает массивы
```

Возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.concat)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

<details>
<summary>Примеры</summary>

```js
const planets1 = ['Меркурий', 'Венера', 'Земля'];
const planets2 = ['Марс', 'Юпитер', 'Сатурн'];

planets1.concat(planets2); // ===> (6) ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Сатурн"]
planets1.concat('Марс'); // ===> (4) ["Меркурий", "Венера", "Земля", "Марс"]

console.log(planets1);
// (3) ["Меркурий", "Венера", "Земля"]
console.log(planets2);
// (3) ["Марс", "Юпитер", "Сатурн"]
```

</details><br>

<a id="flat"></a>

```js
Array.flat(); // раскрывает вложенные массивы
```

Возвращает новый массив, в котором все элементы вложенных массивов были рекурсивно "подняты" на уровень исходного массива (в пределах заданной глубины).

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.flat)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

<details>
<summary>Примеры</summary>

```js
const secondPlanets = ['Меркурий', 'Венера', ['Земля', 'Луна']];
secondPlanets.flat(); // ===> (4) ["Меркурий", "Венера", "Земля", "Луна"]
console.log(secondPlanets);
// (3) ["Меркурий", "Венера", ["Земля", "Луна"]]

const peoplePlanets = ['Меркурий', 'Венера', [['Земля', 'земляне'], 'Луна']];
peoplePlanets.flat(); // ===> (4) ["Меркурий", "Венера", ["Земля", "земляне"], "Луна"]
peoplePlanets.flat(2); // ===> (5) ["Меркурий", "Венера", "Земля", "земляне", "Луна"]
console.log(peoplePlanets);
// (3) ["Меркурий", "Венера", [["Земля", "земляне"], "Луна"]]

const aliensPlanets = ['Меркурий', 'Венера', [['Земля', ['земляне', 'пришельцы']], 'Луна']];
aliensPlanets.flat(); // ===> (4) ["Меркурий", "Венера", ["Земля", ["земляне", "пришельцы"]], "Луна"]
aliensPlanets.flat(2); // ===> (5) ["Меркурий", "Венера", "Земля", ["земляне", "пришельцы"], "Луна"]
aliensPlanets.flat(Infinity); // ===> (6) ["Меркурий", "Венера", "Земля", "земляне", "пришельцы", "Луна"]
console.log(aliensPlanets);
// (3) ["Меркурий", "Венера", [["Земля", ["земляне", "пришельцы"]], "Луна"]]
```

</details><br>

## Array : Перебор

<a id="forEach"></a>

```js
Array.forEach(); // перебирает массив
```

Выполняет переданную функцию для каждого элемента в массиве.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.foreach)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля'];

planets.forEach((elem, index, array) => {
	console.log(`${index + 1}:${elem}`);
});
// "1:Меркурий"
// "2:Венера"
// "3:Земля"

console.log(planets);
// (3) ["Меркурий", "Венера", "Земля"]
```

</details><br>

<a id="for-off"></a>

```js
for...of // цикл перебора массива
```

Выполняет цикл обхода итерируемых объектов (Array, Map, Set, ...), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

- [Спецификация](https://tc39.es/ecma262/#sec-for-in-and-for-of-statements)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля'];

// Если нужно корректировать значение
// ------------------------------------------------------------
for (let elem of planets) {
	elem = `${planets.indexOf(elem) + 1}:${elem}`;
	console.log(elem);
}
// "1:Меркурий"
// "2:Венера"
// "3:Земля"

// Если не нужно корректировать значение
// ------------------------------------------------------------
for (const elem of planets) {
	console.log(elem);
}
// "1:Меркурий"
// "2:Венера"
// "3:Земля"

console.log(planets);
// (3) ["Меркурий", "Венера", "Земля"]
```

</details><br>

## Array : Функции высшего порядка

<a id="map"></a>

```js
Array.map(); // обрабатывает элементы
```

Cоздаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.map)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.map((elem, index) => `${index + 1}:${elem}`); // ===> (4) ["1:Меркурий", "2:Венера", "3:Земля", "4:Марс"]

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="filter"></a>

```js
Array.filter(); // проверяет элементы
```

Cоздаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.filter)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.filter((elem, index) => elem.length < 7 && index > 1); // ===> (2) ["Земля", "Марс"]

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="reduce"></a>

```js
Array.reduce(); // обрабатывает элементы и изменяет аккумулятор
```

Применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.reduce)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.reduce((acc, elem, index) => `${acc} --> ${index + 1}:${elem}`, 'От Солнца:'); // ===> "От Солнца: --> 1:Меркурий --> 2:Венера --> 3:Земля --> 4:Марс"

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="reduceRight"></a>

```js
Array.reduceRight(); // обрабатывает элементы и изменяет аккумулятор (в обратном порядке)
```

Применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.reduceright)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.reduceRight((acc, elem, index) => `${acc} --> ${index + 1}:${elem}`, 'К Солнцу:'); // ===> "К Солнцу: --> 4:Марс --> 3:Земля --> 2:Венера --> 1:Меркурий"

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

## Array : Поиск

<a id="find"></a>

```js
Array.find(); // возвращает первый подходящий элемент
```

Возвращает **значение** первого найденного в массиве элемента, которое удовлетворяет условию проверяющей функции.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.find)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.find((elem, index) => elem.length < 7 && index > 1); // ===> "Земля"
planets.find((elem, index) => elem.length < 3); // ===> undefined

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="findIndex"></a>

```js
Array.findIndex(); // возвращает индекс первого подходящего элемента
```

Возвращает **индекс** в массиве, если элемент удовлетворяет условию проверяющей функции.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.findindex)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.findIndex((elem, index) => elem.length < 7 && index > 1); // ===> 2
planets.findIndex((elem, index) => elem.length < 3); // ===> -1

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="indexOf"></a>

```js
Array.indexOf(); // возвращает индекс первого найденного элемента
```

Возвращает первый **индекс**, по которому данный элемент может быть найден в массиве.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.indexof)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс', 'Земля'];

planets.indexOf('Земля'); // ===> 2
planets.indexOf('Юпитер'); // ===> -1

console.log(planets);
// (5) ["Меркурий", "Венера", "Земля", "Марс", "Земля"]
```

</details><br>

<a id="lastIndexOf"></a>

```js
Array.lastIndexOf(); // возвращает индекс последнего найденного элемента
```

Возвращает последний **индекс**, по которому данный элемент может быть найден в массиве.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.lastindexof)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс', 'Земля'];

planets.lastIndexOf('Земля'); // ===> 4
planets.lastIndexOf('Юпитер'); // ===> -1

console.log(planets);
// (5) ["Меркурий", "Венера", "Земля", "Марс", "Земля"]
```

</details><br>

## Array : Проверка

<a id="isArray"></a>

```js
Array.isArray(); // проверяет, массив ли это
```

Проверяет, является ли элемент массивом (Array).

- [Спецификация](https://tc39.es/ecma262/#sec-array.isarray)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

<details>
<summary>Примеры</summary>

```js
const planets1 = ['Меркурий', 'Венера', 'Земля', 'Марс'];
const planets2 = { 1: 'Меркурий', 2: 'Венера', 3: 'Земля', 4: 'Марс' };
const planets3 = "['Меркурий', 'Венера', 'Земля', 'Марс']";

Array.isArray(planets1); // ===> true
Array.isArray(planets2); // ===> false
Array.isArray(planets3); // ===> false
```

</details><br>

<a id="some"></a>

```js
Array.some(); // проверяет, подходит ли хоть один элемент условию
```

Проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию проверяющей функции.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.some)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.some((elem, index) => elem.length < 7 && index > 1); // ===> true
planets.some((elem, index) => elem.length < 3); // ===> false

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="every"></a>

```js
Array.every(); // проверяет, подходят ли все элементы условию
```

Проверяет, удовлетворяют ли все элементы массива условию проверяющей функции.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.every)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.every((elem, index) => elem.length > 3 && index < 4); // ===> true
planets.every((elem, index) => elem.length < 6); // ===> false

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

<a id="includes"></a>

```js
Array.includes(); // проверяет, есть ли элемент
```

Проверяет, содержит ли массив определённый элемент.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.includes)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.includes('Меркурий'); // ===> true
planets.includes('Юпитер'); // ===> false

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

</details><br>

## Array : Преобразование

<a id="join"></a>

```js
Array.join(); // преобразует массив в строку
```

Объединяет все элементы массива (или массивоподобного объекта) в строку.

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.join)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

<details>
<summary>Примеры</summary>

```js
const planets = ['Меркурий', 'Венера', 'Земля', 'Марс'];

planets.join(); // ===> "Меркурий,Венера,Земля,Марс"
planets.join(' --> '); // ===> "Меркурий --> Венера --> Земля --> Марс"

console.log(planets);
// (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

Обратное действие: [String => Array](./js-string.md#split)

</details><br>

<a id="from"></a>

```js
Array.from(); // преобразует массивоподобный объект в массив
```

Создаёт новый Array из массивоподобного или [итерируемого объекта](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B).

- [Спецификация](https://tc39.es/ecma262/#sec-array.prototype.join)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

<details>
<summary>Примеры</summary>

```js
const planets = new Map([
	['Меркурий', 1],
	['Венера', 2],
	['Земля', 3],
	['Марс', 4]
]);

planets.keys(); // ===> MapIterator {"Меркурий", "Венера", "Земля", "Марс"}
Array.from(planets.keys()); // ===> (4) ["Меркурий", "Венера", "Земля", "Марс"]
```

Примеры использования:

- [Map.keys() => Array](./js-map.md#keys)
- [Map.values() => Array](./js-map.md#values)
- [Map.entries() => Array](./js-map.md#entries)
- [Set.values() => Array](./js-set.md#values)
- [Set.entries() => Array](./js-set.md#entries)

</details><br>

## Array : Использование spread

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
// Замена списка аргументов функции
// ------------------------------------------------------------
const planets = ['Венера', 'Земля'];
const func = (a, b, c) => `${a} : ${b} : ${c}`;
func(...planets); // ===> "Венера : Земля : undefined"
```

```js
// Создание копии массива (а не ссылки на массив)
// ------------------------------------------------------------
const planets = ['Венера', 'Земля'];
const newPlanets = [...planets];
console.log(newPlanets); // ===> (2) ["Венера", "Земля"]
```

```js
// Добавление значений в массив
// ------------------------------------------------------------
const planets = ['Венера', 'Земля'];
const prevPlanets = ['Меркурий', ...planets];
const nextPlanets = [...prevPlanets, 'Марс'];
const lastPlanets = ['Юпитер', 'Сатурн', 'Уран', 'Нептун'];
const allPlanets = ['Меркурий', ...planets, 'Марс', ...lastPlanets];
console.log(planets); // ===> (2) ["Венера", "Земля"]
console.log(prevPlanets); // ===> (3) ["Меркурий", "Венера", "Земля"]
console.log(nextPlanets); // ===> (4) ["Меркурий", "Венера", "Земля", "Марс"]
console.log(allPlanets); // ===> (8) ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун"]
```

</details><br>

## Array : Деструктуризация

<a id="destructuring"></a>

```js
[a, b, c] = planets; // извлечение данных из массива в переменные
```

Позволяет извлекать данные из массивов при помощи синтаксиса, подобного объявлению массива.

- [Спецификация](https://tc39.es/ecma262/#sec-destructuring-assignment)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

<details>
<summary>Примеры</summary>

```js
// обмен переменных местами
// ------------------------------------------------------------
let venus = 'Венера';
let earth = 'Земля';

[venus, earth] = [earth, venus]; // ===> (2) ["Земля", "Венера"]
console.log(venus); // ===> "Земля"
console.log(earth); // ===> "Венера"
```

```js
// объявление переменных со значениями
// ------------------------------------------------------------
const [venus, earth, mars] = ['Венера', 'Земля'];
console.log(venus); // ===> "Венера"
console.log(earth); // ===> "Земля"
console.log(mars); // ===> undefined
```

```js
// присвоение значений переменным
// ------------------------------------------------------------
let venus = null;
let earth = null;
let mars = null;
let jupiter = null;

[venus, earth, mars] = ['Венера', 'Земля'];
console.log(venus); // ===> "Венера"
console.log(earth); // ===> "Земля"
console.log(mars); // ===> undefined
console.log(jupiter); // ===> null

[venus, earth, mars = 'Марс'] = ['Венера', 'Земля'];
console.log(venus); // ===> "Венера"
console.log(earth); // ===> "Земля"
console.log(mars); // ===> "Марс"
console.log(jupiter); // ===> null

[, , , jupiter] = ['Не Венера', 'Не Земля', 'Не Марс', 'Юпитер'];
console.log(venus); // ===> "Венера"
console.log(earth); // ===> "Земля"
console.log(mars); // ===> "Марс"
console.log(jupiter); // ===> "Юпитер"
```

</details><br>
