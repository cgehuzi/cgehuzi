<< [На главную](../README.md)

# JS : Map - ассациативный массив

- [Спецификация](https://tc39.es/ecma262/#sec-map-objects)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Урок на Hexlet](https://ru.hexlet.io/courses/js_collections/lessons/map/theory_unit)

---

Навигация:

- [JS : Map - ассациативный массив](#js--map---ассациативный-массив)
  - [Map : Изменение (мутабельно)](#map--изменение-мутабельно)
  - [Map : Перебор](#map--перебор)
  - [Map : Поиск](#map--поиск)
  - [Map : Проверка](#map--проверка)
  - [Map : Преобразование](#map--преобразование)

---

## Map : Изменение (мутабельно)

- ### Map.set()

  Добавляет новый элемент или обновляет существующий с указанными значениями key и value.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.set)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/set)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname']]);

  user.set('surname', 'Spurhiash');   // ===> Map(2) {"name" => "Ihar", "surname" => "Spurhiash"}
  user.set('birthday', '26.03.1991'); // ===> Map(3) {"name" => "Ihar", "surname" => "Spurhiash", "birthday" => "26.03.1991"}

  console.log(user);
  // Map(3) {"name" => "Ihar", "surname" => "Spurhiash", "birthday" => "26.03.1991"}
  ```

- ### Map.delete()

  Удаляет указанный элемент из объекта.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.delete)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname']]);

  user.delete('surname'); // ===> true
  user.delete('surname'); // ===> false

  console.log(user);
  // Map(1) {"name" => "Ihar"}
  ```

- ### Map.clear()

  Удаляет все элементы из объекта.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.clear)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/clear)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname']]);

  user.clear(); // ===> undefined

  console.log(user);
  // Map(0) {}
  ```

## Map : Перебор

- ### Map.forEach()

  Выполняет переданную функцию для каждой пары `[key, value]` в том порядке, в котором они были заведены.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.foreach)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  user.forEach((value, key, map) => {
    console.log(`${key} = ${value}`);
    console.log(map);
  });
  // "name = Ihar"
  // Map(3) {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}
  // "surname = undefined"
  // Map(3) {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}
  // "birthday = 26.03.1991"
  // Map(3) {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}

  user.forEach((value, key, map) => {
    key = value;
    console.log(`${key} = ${value}`);
    console.log(map);
  });
  // "Ihar = Ihar"
  // Map(3) {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}
  // "undefined = undefined"
  // Map(3) {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}
  // "26.03.1991 = 26.03.1991"
  // Map(3) {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}
  ```

## Map : Поиск

- ### Map.get()

  Возвращает указанный элемент объекта.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.get)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/get)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname']]);

  user.get('name');     // ===> "Ihar"
  user.get('surname');  // ===> undefined
  user.get('birthday'); // ===> undefined
  ```

## Map : Проверка

- ### Map.has()

  Проверяет наличие указанного ключа в объекте.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.has)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/has)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname']]);

  user.has('name');     // ===> true
  user.has('surname');  // ===> true
  user.has('birthday'); // ===> false
  ```

## Map : Преобразование

- ### Map.keys()

  <a id="keys"></a>

  Возвращает [итерируемый объект](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B), содержащий ключи элементов в том порядке, в котором они были заведены.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.keys)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/keys)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  user.keys(); // ===> MapIterator {"name", "surname", "birthday"}
  ```

  Преобразование в Array: [Map.keys() => Array](./js-array.md#from)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  Array.from(user.keys()); // ===> (3) ["name", "surname", "birthday"]
  ```

  Перебор: [Цикл for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);
  const keys = user.keys();
  console.log(keys);
  // MapIterator {"name", "surname", "birthday"}

  for (const key of keys) {
    console.log(key);
  }
  // "name"
  // "surname"
  // "birthday"

  console.log(keys);
  // MapIterator {}
  ```

- ### Map.values()

  <a id="values"></a>

  Возвращает [итерируемый объект](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B), содержащий значения элементов в том порядке, в котором они были заведены.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.values)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/values)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  user.values(); // ===> MapIterator {"Ihar", undefined, "26.03.1991"}
  ```

  Преобразование в Array: [Map.values() => Array](./js-array.md#from)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  Array.from(user.values()); // ===> (3) ["Ihar", undefined, "26.03.1991"]
  ```

  Перебор: [Цикл for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);
  const values = user.values();
  console.log(values);
  // MapIterator {"Ihar", undefined, "26.03.1991"}

  for (const value of values) {
    console.log(value);
  }
  // "Ihar"
  // undefined
  // "26.03.1991"

  console.log(values);
  // MapIterator {}
  ```

- ### Map.entries()

  <a id="entries"></a>

  Возвращает [итерируемый объект](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#%D0%98%D1%82%D0%B5%D1%80%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B5_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B), содержащий пары `[key, value]` элементов в том порядке, в котором они были заведены.

  [Спецификация](https://tc39.es/ecma262/#sec-map.prototype.entries)<br>
  [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Map/entries)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  user.entries(); // ===> MapIterator {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}
  ```

  Преобразование в Array: [Map.entries() => Array](./js-array.md#from)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);

  Array.from(user.entries()); // ===> (3) [["name", "Ihar"], ["surname", undefined], ["birthday", "26.03.1991"]]
  ```

  Перебор: [Цикл for...of](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of)

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);
  const entries = user.entries();
  console.log(entries);
  // MapIterator {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}

  for (const entry of entries) {
    console.log(entry);
  }
  // (2) ["name", "Ihar"]
  // (2) ["surname", undefined]
  // (2) ["birthday", "26.03.1991"]

  console.log(entries);
  // MapIterator {}
  ```

  ```javascript
  const user = new Map([['name', 'Ihar'], ['surname'], ['birthday', '26.03.1991']]);
  const entries = user.entries();
  console.log(entries);
  // MapIterator {"name" => "Ihar", "surname" => undefined, "birthday" => "26.03.1991"}

  for (const [key, value] of entries) {
    console.log(`${key} = ${value}`);
  }
  // "name = Ihar"
  // "surname = undefined"
  // "birthday = 26.03.1991"

  console.log(entries);
  // MapIterator {}
  ```
