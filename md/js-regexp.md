<< [На главную](../README.md)

# JS : RegExp - регулярные выражения

- [Таблица синтаксиса](https://cheatography.com/davechild/cheat-sheets/regular-expressions/)
- [Онлайн-редактор RegExp](https://regex101.com/)

Конструктор `RegExp` используется для создания объекта регулярного выражения.

- [Спецификация](https://tc39.es/ecma262/#sec-regexp-constructor)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---

Навигация:

- [JS : RegExp - регулярные выражения](#js--regexp---регулярные-выражения)
  - [RegExp : примеры](#regexp--примеры)
    - [Символы](#символы)

---

## RegExp : примеры

### Символы

```js
/java/;
```

`java` \ python ruby1.9 `java`script c#

---

```js
/javab/;
```

java \ python ruby1.9 javascript c#

---

```js
/./;
```

`java \ python ruby1.9 javascript c#`

---

```js
/.y/;
```

java \ `py`thon ru`by`1.9 javascript c#

---

```js
/1.9/;
```

java \ python ruby`1.9` javascript c#  
java \ python ruby`189` javascript c#  
java \ python ruby`1k9` javascript c#

---

```js
/1\.9/;
```

java \ python ruby`1.9` javascript c#  
java \ python ruby189 javascript c#  
java \ python ruby1k9 javascript c#

---

```js
/\\/;
```

java `\` python ruby1d9 javascript c#

---
