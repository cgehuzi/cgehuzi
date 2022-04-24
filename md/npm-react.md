<< [На главную](../README.md)

# React - разработка интерфейсов

[Официальный сайт](https://reactjs.org/)

---

Навигация:

- [React - разработка интерфейсов](#react---разработка-интерфейсов)
  - [React : Начало работы](#react--начало-работы)
    - [Создание нового проекта](#создание-нового-проекта)
    - [Добавление в проект](#добавление-в-проект)
  - [React : Компоненты](#react--компоненты)
    - [Создание](#создание)
    - [Использование](#использование)
    - [Props](#props)
    - [Collections – обработка коллекций](#collections--обработка-коллекций)
    - [React.Fragment – обёртка](#reactfragment--обёртка)
  - [JSX vs HTML – различия](#jsx-vs-html--различия)
    - [Атрибуты](#атрибуты)
    - [Обработчики событий](#обработчики-событий)
    - [Экранирование](#экранирование)
    - [Стили](#стили)

---

## React : Начало работы

### Создание нового проекта

```bash
$ npm install -g create-react-app   # глобальная установка (если ещё не)
$ create-react-app <directory>      # создание проекта
$ npm start                         # инициализация проекта
```

### Добавление в проект

```bash
$ npm install react react-dom                 # установка библиотек
$ npm install --save-dev @babel/preset-react  # для поддержки jsx-файлов
```

**babel.config.json**

```json
{
  "presets": [
    // NEW ————————————————
    "@babel/preset-react"
    // ————————————————————
  ]
}
```

## React : Компоненты

### Создание

Hello.jsx

```jsx
import React from 'react';

export default class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

### Использование

index.jsx

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello.jsx';

const mountNode = document.querySelector('#react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Hello />);
```

### Props

```jsx
class Hello extends React.Component {
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    return (
      <div>
        Hello {firstName} {lastName}!
      </div>
    );
  }
}

// Значения по умолчанию
// ———————————————————————
Hello.defaultProps = {
  lastName: 'Nobody',
};

<Hello firstName="Ihar" lastName="Spurhiash" />; //   <div>Hello Ihar Spurhiash!</div>
<Hello firstName="Ihar" />; //                        <div>Hello Ihar Nobody!</div>
<Hello lastName="Spurhiash" />; //                    <div>Hello Spurhiash!</div>
<Hello />; //                                         <div>Hello Nobody!</div>
```

### Collections – обработка коллекций

Каждый элемент коллекции должен иметь идентификатор, уникальный среди соседних элементов.  
Он передаётся в проп `key` для идентификации элемента в пределах React.

> Не обязательно `id`. Подойдёт любой ключ с уникальным значением. Главное – передать его в `key`

```jsx
class List extends React.Component {
  renderList() {
    const { data } = this.props;
    return data.map((item) => <li key={item.id}>{item.name}</li>);
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

// Список элементов
// ———————————————————————
const items = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
];

<List data={items} />;
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
```

### React.Fragment – обёртка

```jsx
class Glossary extends React.Component {
  renderList() {
    const { data } = this.props;
    return data.map((item) => (
      // —————————————————————————————
      <React.Fragment key={item.id}>
        <dt>{item.title}</dt>
        <dd>{item.description}</dd>
      </React.Fragment>
      // ИЛИ —————————————————————————
      <>
        <dt>{item.title}</dt>
        <dd>{item.description}</dd>
      </>
      // —————————————————————————————
      // но тут невозможно указать key
    ));
  }

  render() {
    return <dl>{this.renderList()}</dl>;
  }
}

// Список элементов
// ———————————————————————
const items = [
  { id: 1, title: 'React', description: 'JavaScript library for building user interfaces' },
  { id: 2, title: 'Webpack', description: 'Static module bundler for modern JavaScript applications' },
];

<Glossary data={items} />;
// <dl>
//   <dt>React</dt>
//   <dd>JavaScript library for building user interfaces</dd>
//   <dt>Webpack</dt>
//   <dd>Static module bundler for modern JavaScript applications</dd>
// </dl>
```

## JSX vs HTML – различия

### Атрибуты

HTML-атрибуты записываются с нотацией `camelCase`.  
**Исключения:** data- и aria- атрибуты.

```jsx
<button tabIndex="1">ok</button>
<button aria-label="ok">ok</button>
<button data-first-name="Ihar">ok</button>
```

**Различия имён:**

| HTML атрибут | JSX prop    |
| :----------- | :---------- |
| `class`      | `className` |
| `for`        | `htmlFor`   |

### Обработчики событий

В обработчики событий передаётся функция, а не её вызов.

```jsx
<input onFocus={focusFunction} />
```

### Экранирование

По умолчанию HTML в строках экранируется.

```jsx
const htmlString = 'My <em>name</em> is <strong>Ihar</strong>';

1: <p>{htmlString}</p>
2: <p dangerouslySetInnerHTML={{ __html: htmlString }}></p>
3: <p dangerouslySetInnerHTML={{ __html: htmlString }}>Boom!</p>
```

1: My \<em>name\</em> is \<strong>Ihar\</strong>  
2: My <em>name</em> is <strong>Ihar</strong>  
3: `Error!` – при использовании `dangerouslySetInnerHTML` у компонента не должно быть содержимого

### Стили

Стили в атрибут `style` передаются объектом с нотацией camelCase.

```jsx
const divStyle = {
  color: '#000000',
  fontSize: '16px',
};

<div style={divStyle}>Hello World!</div>;
```
