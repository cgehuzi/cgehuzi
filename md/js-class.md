<< [На главную](../README.md)

# Class - класс

- [Спецификация](https://tc39.es/ecma262/#sec-class-definitions)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)

---

Навигация:

- [Class - класс](#class---класс)
  - [Class : Синтаксис](#class--синтаксис)
  - [Class : Прототипы](#class--прототипы)
  - [Class : toString()](#class--tostring)
  - [Class : static](#class--static)

---

## Class : Синтаксис

```js
// имя класса - это имя функции конструктора
class Person {
  // Метод с именем constructor соответствует функции-конструктору
  // Он вызывается, когда мы делаем new Person(name, email)
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Другие методы
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
}

const user = new Person('Ihar', 'mail.cgehuzi@gmail.com');
```

- Подробнее про `this` в разделе [Function](./js-function.md#function--this)

## Class : Прототипы

Прототипы — это механизм, который оказывает основное влияние на то, как работают объекты в JavaScript. Сами они напрямую в коде используются редко (и обычно только в библиотеках), но их знание важно для понимания поведения кода и отладки. Особенно при работе с классами

```js
class Person { ... }
const user = new Person('Ihar', 'mail.cgehuzi@gmail.com');
Object.getPrototypeOf(user); // ==> {}

user.getLastname(); // ==> TypeError: user.getLastname is not a function

Person.prototype.getLastname = function getLastname() {
  return this.lastname;
};

user.getLastname(); // ==> undefined

Person.prototype.setLastname = function setLastname(lastname) {
  this.lastname = lastname;
};

user.setLastname('Spurhiash');
user.getLastname(); // ==> 'Spurhiash'

Object.getPrototypeOf(user); // ==> { getLastname: [Function: getLastname], setLastname: [Function: setLastname] }
```

## Class : toString()

Метод, указывающий, как обрабатывать объект, при преобразовании его в строку.

```js
class Person { ... }
const user = new Person('Ihar', 'mail.cgehuzi@gmail.com');

// Стандартный вывод
user.toString(); // ==> '[object Object]'
`User is ${user}` // ==> 'User is [object Object]'

// Изменяем метод toString у класса Person
Person.prototype.toString = function toString() {
  return this.name;
};

// Изменённый вывод
user.toString(); // ==> 'Ihar'
`User is ${user}` // ==> 'User is Ihar'
```

## Class : static

`static` — cтатические свойства и методы, взаимодействующие непосредственно с контекстом Класса, точнее с контекстом функции `constructor`.

```js
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // статическое свойство
  static company = {
    name: 'Home',
    country: 'Belarus',
  };

  // статический метод
  static setCompany(key, value) {
    // обращение к статическому свойству
    this.company[key] = value;
  }

  // обычный метод
  getCompany() {
    // обращение к статическому свойству
    return this.constructor.company;
  }
}
```

```js
const user = new Person('Ihar', 'mail.cgehuzi@gmail.com');

user.getCompany(); // ==> { name: 'Home', country: 'Belarus' }
Person.getCompany(); // ==> TypeError: Person.getCompany is not a function

user.setCompany('country', 'Poland'); // ==> TypeError: user.setCompany is not a function
Person.setCompany('country', 'Poland');
user.getCompany(); // ==> { name: 'Home', country: 'Poland' }

Person.company; // === { name: 'Home', country: 'Poland' }
user.company; // === undefined
user.constructor.company; // === { name: 'Home', country: 'Poland' }
```
