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
    - [Обычный компонент](#обычный-компонент)
    - [Функциональный компонент](#функциональный-компонент)
    - [Использование](#использование)
    - [Props](#props)
    - [Collections - обработка коллекций](#collections---обработка-коллекций)
    - [React.Fragment - обёртка](#reactfragment---обёртка)
    - [Работа с HTML-классами](#работа-с-html-классами)
    - [React.Children](#reactchildren)
  - [JSX vs HTML - различия](#jsx-vs-html---различия)
    - [Атрибуты](#атрибуты)
    - [Обработчики событий](#обработчики-событий)
    - [Экранирование](#экранирование)
    - [Стили](#стили)
  - [Состояние (state)](#состояние-state)
  - [Формы](#формы)
  - [Вложенные компоненты](#вложенные-компоненты)
  - [Context API](#context-api)
  - [Жизненный цикл (Component Lifecycle)](#жизненный-цикл-component-lifecycle)
    - [Монтирование (Mounting)](#монтирование-mounting)
    - [Обновление (Updating)](#обновление-updating)
    - [Удаление или демонтирование (Unmount)](#удаление-или-демонтирование-unmount)
  - [Refs](#refs)

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

### Обычный компонент

Компонент с [состоянием](#состояние-state).

`Example.jsx`

```jsx
import React from 'react';

export default class Example extends React.Component {
  // состояние и его обработчики...

  render() {
    return <div>{this.props.chilren}</div>;
  }
}
```

### Функциональный компонент

Компонент без состояния.

`Example.jsx`

```jsx
import React from 'react';

export default Example = (props) => {
  return <div>{props.children}</div>;
};
```

### Использование

`index.jsx`

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

### Collections - обработка коллекций

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

### React.Fragment - обёртка

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
> html – Array  
> Components – Array

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

## JSX vs HTML - различия

### Атрибуты

HTML-атрибуты записываются с нотацией `camelCase`.  
**Исключения:** data- и aria- атрибуты.

```jsx
<button tabIndex="1">ok</button>
<button aria-label="ok">ok</button>
<button data-first-name="Ihar">ok</button>
```

**`<textarea>`**

```jsx
<textarea>value</textarea>
// ———————————————————————
<textarea value="value" />
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

## Состояние (state)

```jsx
class Example extends React.Component {
  // Инициализация состояния
  // ——————————————————————————
  constructor(props) {
    // вызов конструктора React.Component
    super(props); // всегда обязательно

    this.state = {
      count: 0, // задано напрямую
      max: this.props.max, // задаётся через пропс
    };
  }

  // Изменение состояния
  // ——————————————————————————
  // Обработчик — стрелочная функция!
  handleClick = () => {
    // 1 изменение объектом:
    this.setState({ count: this.state.count + 1 });
    // новое значение = текущее (0) + 1

    // 2 изменение объектом:
    this.setState({ count: this.state.count + 2 });
    // новое значение = текущее (0) + 2

    // 3 изменение функцией-колбеком:
    this.setState((state, props) => {
      const { count } = state;
      return { count: count + 3 };
    });
    // ждём (текущее (0) + 2) ...
    // новое значение = текущее (2) + 3

    // 4 изменение функцией-колбеком:
    this.setState(({ count }) => {
      return { count: count + 4 };
    });
    // ждём (текущее (2) + 3) ...
    // новое значение = текущее (5) + 4

    // ИТОГО: +9 к count
  };

  // Отрисовка состояния
  // ——————————————————————————
  render() {
    return <button onClick={this.handleClick}>Count:{this.state.count}</button>;
  }
}

Example.defaultProps = {
  max: 100, // значение пропса по умолчанию
};
```

## Формы

[Документация](https://ru.reactjs.org/docs/forms.html)

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      textarea: '',
      select: '',
      radio: [
        { value: 'one', checked: false },
        { value: 'two', checked: false },
      ],
      checkbox: [
        { value: 'one', checked: false },
        { value: 'two', checked: false },
      ],
    };
  }

  // INPUT
  // ——————————————————————————
  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  // TEXTAREA
  // ——————————————————————————
  handleTextarea = (e) => {
    this.setState({ textarea: e.target.value });
  };

  // SELECT
  // ——————————————————————————
  handleSelect = (e) => {
    this.setState({ select: e.target.value });
  };

  // RADIO
  // ——————————————————————————
  handleRadio = (e) => {
    const radio = this.state.radio.map((item) => {
      const checked = item.value === e.target.value;
      return { ...item, checked };
    });
    this.setState({ radio });
  };

  getRadioList() {
    return this.state.radio.map(({ value, checked }, key) => (
      <input
        key={key}
        name="radio"
        type="radio"
        value={value}
        checked={checked}
        onChange={this.handleRadio}
      />
    ));
  }

  // CHECKBOX
  // ——————————————————————————
  handleCheckbox = (e) => {
    const checkbox = this.state.checkbox.map((item) => {
      if (item.value === e.target.value) {
        return { ...item, checked: e.target.checked };
      }
      return item;
    });
    this.setState({ checkbox });
  };

  getCheckboxList() {
    return this.state.checkbox.map(({ value, checked }, key) => (
      <input
        key={key}
        name="checkbox"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={this.handleCheckbox}
      />
    ));
  }

  // SUBMIT
  // ——————————————————————————
  handleSubmit = (e) => {
    e.preventDefault();
    // валидация и отправка данных из this.state
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput} value={this.state.input} />

        <textarea name="textarea" onChange={this.handleTextarea} value={this.state.textarea} />

        <select name="select" onChange={this.handleSelect} value={this.state.select}>
          <option value="">Select something</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>

        {this.getRadioList()}

        {this.getCheckboxList()}

        <button type="submit">Submit</button>
      </form>
    );
  }
}
```

## Вложенные компоненты

При работе с вложенными компонентами придерживайся след. правил:

1. Создавай, только когда станет сложно (много переменных)
2. Отдавай предпочтение функциям рендеринга (типа `renderItems`)
3. Состояние `state` только в главном компоненте
4. Обработчики в главном компоненте (нужно пробросить через props)

```jsx
// Вложенные компоненты
// ——————————————————————————
const Label = ({ htmlFor, children }) => <label htmlFor={htmlFor}>{children}</label>;
const Input = ({ name, value, onEdit }) => (
  // 4. onEdit – обработчик из Example
  // ——————————————————————————
  <input id={name} name={name} type="text" value={value} onChange={onEdit} />
);

// Главный компонент
// ——————————————————————————
class Control extends React.Component {
  // <Control.Label> === <Title>
  // ——————————————————————————
  static Label = Label;

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

// <Control.Input> === <Input>
// ——————————————————————————
Control.Input = Input;

class Example extends React.Component {
  // 3. state только в Example
  // ——————————————————————————
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'one', value: '' },
        { id: 2, name: 'two', value: '' },
      ],
    };
  }

  // 4. Обработчик, который нужно пробросить
  // ——————————————————————————
  handleEdit = (itemId) => (e) => {
    const { items } = this.state;
    const newValue = e.target.value;
    const newItems = items.map(({ id, name, value }) => {
      if (id === itemId) {
        return { id, name, value: newValue };
      }
      return { id, name, value };
    });
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;

    // 4. Пробрасываем обработчик через onEdit
    // ——————————————————————————
    return (
      <form>
        {this.props.children}
        {items.map(({ id, name, value }) => (
          <Control key={id}>
            <Control.Label htmlFor={name}>{name}</Control.Label>
            <Control.Input name={name} value={value} onEdit={this.handleEdit(id)} />
          </Control>
        ))}
      </form>
    );
  }
}

<Example />;
/* ——————————————————————————
<form>

  <div>
    <label for="one">one</label>
    <input id="one" name="one" type="text">
  </div>

  <div>
    <label for="two">two</label>
    <input id="two" name="two" type="text">
  </div>

</form>
—————————————————————————— */
```

## Context API

> Context API - механизм, позволяющий сделать глобальные данные доступными из любого компонента напрямую, без прокидывания пропсов.

[Документация](https://ru.reactjs.org/docs/context.html)

Его использование сводится к трём шагам:

1. Создание контекста

```jsx
// Создаём контекст
// ——————————————————————————
const ThemeContext = React.createContext({
  themes: ['light', 'dark'], //   список тем оформления
  theme: '', //                   тема по умолчанию
  setTheme: () => {}, //          функция изменения темы
});
```

2. Инициализация (передача данных в контекст)

```jsx
import ThemeSwitcher from '...';
import ThemeContext from '...';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'light' };
  }

  handlerTheme = (theme) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;

    // Получаем часть данных из контекста по умолчанию
    // ——————————————————————————
    const { themes } = ThemeContext._currentValue;

    // Инициируем контекст
    // ——————————————————————————
    return (
      <ThemeContext.Provider value={{ themes, theme, setTheme: this.handlerTheme }}>
        <ThemeSwitcher />
        <div className={theme}>{`Hello from "${theme}" theme!`}</div>
      </ThemeContext.Provider>
    );
  }
}
```

3. Использование (получение данных из контекста)

```jsx
import ThemeContext from '...';

class ThemeSwitcher extends React.Component {
  // Определяем тип контекста
  // ——————————————————————————
  static contextType = ThemeContext;

  render() {
    // Получаем данные из контекста
    // ——————————————————————————
    const { themes, theme, setTheme } = this.context;

    return (
      <form>
        {themes.map((item, index) => (
          <input
            key={index}
            name="theme"
            type="radio"
            value={item}
            checked={item === theme}
            onChange={() => setTheme(item)}
          />
        ))}
      </form>
    );
  }
}
```

> **ВНИМАНИЕ!** Изменение данных в контексте не приводит к перерисовке.

Идеально, когда данные в контексте используются только для чтения.

## Жизненный цикл (Component Lifecycle)

- [Документация](https://ru.reactjs.org/docs/react-component.html#the-component-lifecycle)

Каждый компонент React проходит несколько стадий в процессе своей жизни: он создаётся, затем добавляется в DOM, получает пропсы, и, наконец, удаляется из дерева. Этот процесс называют жизненным циклом компонента (Component Lifecycle).

React предоставляет набор методов, которые позволяют встроиться в этот процесс. Они делятся на три независимые группы:

### Монтирование (Mounting)

> Эти методы вызываются при создании объекта и вставки его в DOM.

1. [**`constructor()`**](https://ru.reactjs.org/docs/react-component.html#constructor) – инициализация состояния объекта
2. [_`static getDerivedStateFromProps()`_](https://ru.reactjs.org/docs/react-component.html#static-getderivedstatefromprops) – обработка состояния объекта перед его отрисовкой в DOM
3. [**`render()`**](https://ru.reactjs.org/docs/react-component.html#render) – отрисовка объекта в DOM
4. [_`componentDidMount()`_](https://ru.reactjs.org/docs/react-component.html#componentdidmount) – обработка отрисованного объекта

### Обновление (Updating)

Обновление может происходить при изменении свойств или состояния.

> Эти методы вызываются при перерисовке объекта.

1. [_`static getDerivedStateFromProps()`_](https://ru.reactjs.org/docs/react-component.html#static-getderivedstatefromprops) – обработка состояния объекта перед отрисовкой
2. [_`shouldComponentUpdate()`_](https://ru.reactjs.org/docs/react-component.html#shouldcomponentupdate) – проверка обработанного состояния и решение, нужна ли перерисовка объекта в DOM
3. [**`render()`**](https://ru.reactjs.org/docs/react-component.html#render) – перерисовка объекта в DOM
4. [_`getSnapshotBeforeUpdate()`_](https://ru.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate) – работа с состоянием DOM (прокрутка и т.п.) непосредственно перед фиксацией нового объекта для передачи необходимых данных дальше
5. [_`componentDidUpdate()`_](https://ru.reactjs.org/docs/react-component.html#componentdidupdate) – обработка перерисованного объекта (таймеры, сетевые запросы и пр.)

### Удаление или демонтирование (Unmount)

> Эти методы вызываются при удаления объекта из DOM.

1. [_`componentWillUnmount()`_](https://ru.reactjs.org/docs/react-component.html#componentwillunmount) – обработка объекта перед удалением его из DOM (отмена таймеров, сетевых запросов и пр.)

## Refs

Механизм прямого доступа к создаваемым элементам DOM.

- [Документация](https://ru.reactjs.org/docs/refs-and-the-dom.html)

Работа механизма сводится к 3 шагам:

1. Создание объекта для хранения элемента DOM  
   **`constructor()`**

```jsx
this.myRef = React.createRef();
```

2. Передача элемента DOM в объект  
   **`render()`**

```jsx
<div ref={this.myRef} />
```

3. Получение элемента DOM из объекта  
   _`componentDidMount()`_ || _`componentDidUpdate()`_ || _`eventHandler`_

```jsx
const node = this.myRef.current;
```

---

Пример:

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleFocusInput = () => {
    this.textInput.current.focus();
  };
​
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button type="button" onClick={this.handleFocusInput}>focus</button>
      </div>
    );
  }
}
```
