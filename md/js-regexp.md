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
    - [1. Символ](#1-символ)
    - [2. Символьные классы](#2-символьные-классы)
    - [3. Позиция внутри строки](#3-позиция-внутри-строки)
    - [4. Альтернатива](#4-альтернатива)
    - [5. Квантификация](#5-квантификация)
    - [6. Жадность](#6-жадность)
    - [7. Группировка. Обратная связь](#7-группировка-обратная-связь)
    - [8. Модификаторы](#8-модификаторы)
    - [9. Просмотр вперед/назад](#9-просмотр-впередназад)
    - [10. Поиск по условию](#10-поиск-по-условию)
    - [11. Флаги](#11-флаги)

---

## RegExp : примеры

### 1. Символ

---

```js
/java/; // ==> java
```

`java` \ python ruby1.9 `java`script c#

---

```js
/javab/; // ==> javab
```

java \ python ruby1.9 javascript c#

---

```js
/./; // ==> [любой символ]
```

`java \ python ruby1.9 javascript c#`

---

```js
/.y/; // ==> [любой символ]y
```

java \ `py`thon ru`by`1.9 javascript c#

---

```js
/1.9/; // ==> 1[любой символ]9
```

java \ python ruby`1.9` javascript c#  
java \ python ruby`189` javascript c#  
java \ python ruby`1k9` javascript c#

---

```js
/1\.9/; // ==> 1.9
```

java \ python ruby`1.9` javascript c#  
java \ python ruby189 javascript c#  
java \ python ruby1k9 javascript c#

---

```js
/\\/; // ==> \
```

java `\` python ruby1d9 javascript c#

---

### 2. Символьные классы

---

```js
/[a-z]/; // ==> [латиница](нижний регистр)
```

`java` 11_34-1938 `tab`  
`new` `line`

---

```js
/[0-9]/; // ==> [цифры]
```

java `11`\_`34`-`1938` tab  
new line

---

```js
/[aj]/; // ==> ((a),(j))
```

`ja`v`a` 11_34-1938 t`a`b  
new line

---

```js
/[^aj]/; // ==> [всё, кроме]((a),(j))
```

ja`v`a` 11_34-1938 t`a`b`  
`new line`

---

```js
/[aj-]/; // ==> ((a),(j),(-))
```

`ja`v`a` 11_34`-`1938 t`a`b  
new line

---

```js
/\d/; // ==> [цифры]
```

java `11`\_`34`-`1938` tab  
new line

---

```js
/\D/; // ==> [всё, кроме](цифры)
```

`java `11`_`34`-`1938` tab`  
`new line`

---

```js
/\w/; // ==> ((цифры),(латиница),(_))
// равносильно /[0-9a-zA-Z_]/
```

`java` `11_34`-`1938` `tab`  
`new` `line`

---

```js
/\W/; // ==> [всё, кроме]((цифры),(латиница),(_))
```

java` `11_34`-`1938` `tab  
new` `line

---

### 3. Позиция внутри строки

---

```js
/^java/; // ==> [начало строки]java
```

`java` ruby clojurescript javascript

---

```js
/script$/; // ==> script[конец строки]
```

java ruby clojurescript java`script`

---

```js
/a\b/; // ==> a[конец слова]
```

jav`a` jav`a`-script java_script

---

```js
/a\B/; // ==> a[не конец слова]
```

j`a`va j`a`va-script j`a`v`a`\_script

---

```js
/\bj/; // ==> [начало слова]j
```

`j`ava ruby clojurescript `j`avascript

---

```js
/\Bj/; // ==> [не начало слова]j
```

java ruby clo`j`urescript`j` javascript

---

```js
/\Bj\B/; // ==> [не начало слова]j[не конец слова]
```

java ruby clo`j`urescriptj javascript

---

### 4. Альтернатива

---

```js
/gray|grow/; // ==> ((gray),(grow))
```

`gray` `grow` grey

---

```js
/gr(ay|ow)/; // ==> gr((ay),(ow))
```

`gray` `grow` grey

---

```js
/gr(a|e)y/; // ==> gr((a),(e))y
```

`gray` grow `grey`

---

```js
/gr[ae]y/; // ==> gr((a),(e))y
```

`gray` grow `grey`

---

### 5. Квантификация

---

```js
/colou?/; // ==> colo(u)[0-1 раз]
```

colr, `colo`r, `colou`r, `colou`ur, `colou`uur

---

```js
/colou?r/; // ==> colo(u)[0-1 раз]r
```

colr, `color`, `colour`, colouur, colouuur

---

```js
/col(ou)?r/; // ==> col(ou)[0-1 раз]r
```

`colr`, color, `colour`, colouur, colouuur

---

```js
/col[ou]?r/; // ==> col((o),(u))[0-1 раз]r
```

`colr`, `color`, colour, colouur, colouuur

---

```js
/colou+r/; // ==> colo(u)[1+ раз]r
```

colr, color, `colour`, `colouur`, `colouuur`

---

```js
/colou*r/; // ==> colo(u)[0+ раз]r
```

colr, `color`, `colour`, `colouur`, `colouuur`

---

```js
/colou{2}r/; // ==> colo(u)[2 раза]r
```

colr, color, colour, `colouur`, colouuur

---

```js
/colou{2,3}r/; // ==> colo(u)[2-3 раза]r
```

colr, color, colour, `colouur`, `colouuur`, colouuuur

---

```js
/colou{1,}r/; // ==> colo(u)[1+ раз]r
```

colr, color, `colour`, `colouur`, `colouuur`, `colouuuur`

---

### 6. Жадность

---

ЖАДНАЯ квантификация:

```js
/<.*>/; // ==> <([любой символ])[0+ раз][до последнего](>)>
```

`<a href="https://www.yandex.ru">google</a>`

---

ЛЕНИВАЯ квантификация:

```js
/<.*?>/; // ==> <([любой символ])[0+ раз][до ближайшего](>)>
```

`<a href="https://www.yandex.ru">`google`</a>`

---

КОСТЫЛЬ:

```js
/<[^>]*>/; // ==> <([всё, кроме](>))[0+ раз]>
```

`<a href="https://www.yandex.ru">`google`</a>`

---

```js
/<.?>/; // ==> <([любой символ])[0+ раз]>
```

`<p>`\<div class="url">google\</div>\</p>

---

### 7. Группировка. Обратная связь

---

```js
// ==>
```

asdasdasdasdasd

---

### 8. Модификаторы

---

```js
// ==>
```

asdasdasdasdasd

---

### 9. Просмотр вперед/назад

---

```js
// ==>
```

asdasdasdasdasd

---

### 10. Поиск по условию

---

```js
// ==>
```

asdasdasdasdasd

---

### 11. Флаги

---

```js
// ==>
```

asdasdasdasdasd

---
