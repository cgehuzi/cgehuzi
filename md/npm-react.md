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
    - [Работа с HTML-классами](#работа-с-html-классами)
    - [React.Children](#reactchildren)
  - [JSX vs HTML – различия](#jsx-vs-html--различия)
    - [Атрибуты](#атрибуты)
    - [Обработчики событий](#обработчики-событий)
    - [Экранирование](#экранирование)
    - [Стили](#стили)

---

## React : Начало работы

### Создание нового проекта

```bash
npm install -g create-react-app   # глобальная установка (если ещё не)
create-react-app <directory>      # создание проекта
npm start                         # инициализация проекта
```

### Добавление в проект

```bash
npm install react react-dom                 # установка библиотек
npm install --save-dev @babel/preset-react  # для поддержки jsx-файлов
```

**babel.config.json**

```jsonc
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

Example.jsx

```jsx
import React from 'react';

export default class Example extends React.Component {
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
import Example from './Example.jsx';

const mountNode = document.querySelector('#react-root');
const root = ReactDOM.createRoot(mountNode);
root.render(<Example />);
```

### Props

```jsx
class Example extends React.Component {
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
Example.defaultProps = {
  lastName: 'Nobody',
};

<Example firstName="Ihar" lastName="Spurhiash" />; //   <div>Hello Ihar Spurhiash!</div>
<Example firstName="Ihar" />; //                        <div>Hello Ihar Nobody!</div>
<Example lastName="Spurhiash" />; //                    <div>Hello Spurhiash!</div>
<Example />; //                                         <div>Hello Nobody!</div>
```

### Collections – обработка коллекций

Каждый элемент коллекции должен иметь идентификатор, уникальный среди соседних элементов.  
Он передаётся в проп `key` для идентификации элемента в пределах React.

> Не обязательно `id`. Подойдёт любой ключ с уникальным значением. Главное – передать его в `key`

```jsx
class Example extends React.Component {
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

<Example data={items} />;
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
```

### React.Fragment – обёртка

```jsx
class Example extends React.Component {
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

<Example data={items} />;
// <dl>
//   <dt>React</dt>
//   <dd>JavaScript library for building user interfaces</dd>
//   <dt>Webpack</dt>
//   <dd>Static module bundler for modern JavaScript applications</dd>
// </dl>
```

### Работа с HTML-классами

Для манипулирования классами рекомендуется использовать пакет [`classnames`](https://github.com/JedWatson/classnames)

```bash
npm install classnames
```

```jsx
import classNames from 'classnames';

class Example extends React.Component {
  render() {
    const { isPressed, isHovered, label, type } = this.props;
    const classes = classNames(
      'example', // обязательный класс (статический)
      `example-${type}`, // обязательный класс (динамический)
      {
        'example-pressed': isPressed,
        'example-hovered': !isPressed && isHovered,
      }
    );
    return <button className={classes}>{label}</button>;
  }
}
```

### React.Children

Всё, что находится между открывающим и закрывающим тегом, попадает внутрь пропса `children`.

> Тип данных в `children` непредсказуем:  
> text – String  
> html – массив

**React.Children.count**

```jsx
class Example extends React.Component {
  render() {
    const { children } = this.props;
    return <p>Count: {React.Children.count(children)}</p>;
  }
}
```

**React.Children.map**

```jsx
class Example extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul>
        {React.Children.map(children, (child, index) => {
          // filtering
          if (index < 1) {
            return;
          }

          // mapping
          return <li>{child}</li>;
        })}
      </ul>
    );
  }
}
```

<details>
<summary>Примеры выводов</summary>

```jsx
<Example>
  Ihar <em>Spurhiash</em>
</Example>;
// <p>Count: 2</p>
// <ul>
//   <li><em>Spurhiash</em></li>
// </ul>

<Example>Ihar Spurhiash</Example>;
// <p>Count: 1</p>
// <ul></ul>

<Example>{'Ihar'} Spurhiash</Example>;
// <p>Count: 2</p>
// <ul>
//   <li>Spurhiash</li>
// </ul>

<Example>{() => 'Ihar'} Spurhiash</Example>;
// <p>Count: 1</p>
// <ul></ul>

<Example>{(() => 'Ihar')()} Spurhiash</Example>;
// <p>Count: 2</p>
// <ul>
//   <li>Spurhiash</li>
// </ul>
```

</details><br>

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
