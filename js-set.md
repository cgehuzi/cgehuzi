<< [На главную](./README.md)

# Set : Множество

- [Спецификация](https://tc39.es/ecma262/#sec-set-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Урок на Hexlet](https://ru.hexlet.io/courses/js_collections/lessons/set/theory_unit)

## Навигация

- [Set : Изменение (мутабельно)](#set--изменение-мутабельно)
- [Set : Перебор](#set--перебор)
- [Set : Проверка](#set--проверка)
- [Set : Преобразование](#set--преобразование)

---

## Set : Изменение (мутабельно)

- ### Set.add()

  Добавляет новый элемент с указанным значением.

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.add)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.add(4); // ===> Set(4) {1, 2, 3, 4}
  numbers.add(0); // ===> Set(5) {1, 2, 3, 4, 0}

  console.log(numbers);
  // Set(5) {1, 2, 3, 4, 0}
  ```

- ### Set.delete()

  Удаляет указанный элемент из множества.

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.delete)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.delete(4); // ===> true
  numbers.delete(4); // ===> false

  console.log(numbers);
  // Set(3) {1, 2, 3}
  ```

- ### Set.clear()

  Удаляет все элементы из множества.

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.clear)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.clear(); // ===> undefined

  console.log(numbers);
  // Set(0) {}
  ```

## Set : Перебор

- ### Set.forEach()

  Выполняет переданную функцию для каждой пары `[key, value]` в том порядке, в котором они были заведены.

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.foreach)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.forEach((value, key, set) => {
  	console.log(`${key} = ${value} : ${key === value}`);
  	console.log(set);
  });
  // "1 = 1 : true"
  // Set(4) {1, 2, 3, 4}
  // "2 = 2 : true"
  // Set(4) {1, 2, 3, 4}
  // "3 = 3 : true"
  // Set(4) {1, 2, 3, 4}
  // "4 = 4 : true"
  // Set(4) {1, 2, 3, 4}
  ```

## Set : Проверка

- ### Set.has()

  Проверяет наличие указанного элемента в множестве.

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.has)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.has(4); // ===> true
  numbers.has('4'); // ===> false
  numbers.has(5); // ===> false
  ```

## Set : Преобразование

- ### Set.values()

  <a id="values"></a>

  Возвращает [итерируемый объект](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B), содержащий значения элементов в том порядке, в котором они были заведены.  
  Преобразование в массив типа Array: [Set.values() => Array](./js-array.md#from)

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.values)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.values(); // ===> SetIterator {1, 2, 3, 4}
  ```

  Преобразование в Array: [Set.values() => Array](./js-array.md#from)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  Array.from(numbers.values()); // ===> (4) [1, 2, 3, 4]
  ```

  Перебор: [Цикл for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);
  const values = numbers.values();
  console.log(values);
  // SetIterator {1, 2, 3, 4}

  for (const value of values) {
  	console.log(value);
  }
  // 1
  // 2
  // 3
  // 4

  console.log(values);
  // SetIterator {}
  ```

- ### Set.entries()

  <a id="entries"></a>

  Возвращает [итерируемый объект](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B), содержащий пары `[key, value]` элементов в том порядке, в котором они были заведены.

  [Спецификация](https://tc39.es/ecma262/#sec-set.prototype.entries)  
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  numbers.entries(); // ===> SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4}
  ```

  Преобразование в Array: [Set.entries() => Array](./js-array.md#from)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);

  Array.from(numbers.entries()); // ===> (4) [[1, 1], [2, 2], [3, 3], [4, 4]]
  ```

  Перебор: [Цикл for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

  ```javascript
  const numbers = new Set([1, 2, 3, 4]);
  const entries = numbers.entries();
  console.log(entries);
  // SetIterator {1 => 1, 2 => 2, 3 => 3, 4 => 4}

  for (const entry of entries) {
  	console.log(entry);
  }
  // (2) [1, 1]
  // (2) [2, 2]
  // (2) [3, 3]
  // (2) [4, 4]

  console.log(entries);
  // SetIterator {}
  ```
