<< [На главную](../README.md)

# JS : Class - класс

- [Спецификация](https://tc39.es/ecma262/#sec-class-definitions)
- [Документация MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)

---

Навигация:

- [JS : Class - класс](#js--class---класс)
  - [Class : Синтаксис](#class--синтаксис)
  - [Class : Прототипы](#class--прототипы)

---

## Class : Синтаксис

```js
// имя класса - это имя функции конструктора
class User {
  // Метод с именем constructor соответствует функции-конструктору
  // Он вызывается, когда мы делаем new User(name, email)
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

const user = new User('Ihar', 'mail.cgehuzi@gmail.com');
```

- Подробнее про `this` в разделе [Function](./js-function.md#function--this)

## Class : Прототипы

Прототипы — это механизм, который оказывает основное влияние на то, как работают объекты в JavaScript. Сами они напрямую в коде используются редко (и обычно только в библиотеках), но их знание важно для понимания поведения кода и отладки. Особенно при работе с классами

```js
class User { ... }
const user = new User('Ihar', 'mail.cgehuzi@gmail.com');
Object.getPrototypeOf(user); // ==> {}

user.getLastname(); // ==> TypeError: user.getLastname is not a function

User.prototype.getLastname = function getLastname() {
  return this.lastname;
};

user.getLastname(); // ==> undefined

User.prototype.setLastname = function setLastname(lastname) {
  this.lastname = lastname;
};

user.setLastname('Spurhiash');
user.getLastname(); // ==> 'Spurhiash'

Object.getPrototypeOf(user); // ==> { getLastname: [Function: getLastname], setLastname: [Function: setLastname] }
```
