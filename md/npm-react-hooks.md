<< [На главную](../README.md)

# React : Hooks (хуки)

Набор функций, позволяющие работать с состояниями и другими возможностями React в функциональных компонентах.

> Хуки **НЕ работают внутри классов**, а используются вместо них!

[Документация](https://ru.reactjs.org/docs/hooks-intro.html)

---

Навигация:

- [React : Hooks (хуки)](#react--hooks-хуки)
  - [useState()](#usestate)
  - [useEffect()](#useeffect)
  - [useContext()](#usecontext)
  - [useRef()](#useref)

---

## useState()

Работа с состоянием

- [Документация](https://ru.reactjs.org/docs/hooks-reference.html#usestate)

```jsx
const [item, setItem] = useState(defaultValue);
```

Хук принимает:

- `defaultValue` – значение по умолчанию при создании переменной состояния

Хук возвращает:

- `item` – ссылка на значение переменной состояния
- `setItem` – функция для изменения значения переменной состояния

---

Пример:

```jsx
const Example = () => {
  const [count, setCount] = useState(0); // инициализация переменной
  const onClick = () => setCount(count + 1); // изменение значения
  return <button onClick={onClick}>Кликов: {count}</button>; // получение значения
};
```

```jsx
<Example />

// Mount --> Кликов: 0
// Click --> Кликов: 1
// Click --> Кликов: 2
```

## useEffect()

Работа с побочными эффектами

- [Документация](https://ru.reactjs.org/docs/hooks-reference.html#useeffect)

```jsx
useEffect(callback, watchedItems);
```

Хук принимает:

- `callback` – функция, которую необходимо запустить в после отрисовки объекта в DOM
- ? `watchedItems` – массив переменных, изменение значений которых [ и только это ] приведёт к вызову `callback`

Хук возвращает:

- `undefined` – в обычном случае ничего возвращать не нужно
- ? `clearCallback` – функция с очисткой или сбросом побочных эффектов (таймеров и пр.). Она будет запускаться перед последующими "размонтированием" объекта (render или unmount)

---

Пример 1:

```jsx
const App = () => {
  const [isUnmount, setUnmount] = useState(false);
  return !isUnmount ? <Example unmountMe={() => setUnmount(true)} /> : null;
};
```

```jsx
const Example = (props) => {
  const [count, setCount] = useState(0);
  const onClick = () => setCount(count + 1);

  useEffect(() => {
    // Только componentDidMount()
    // : watchedItems === []
    // ——————————————————————————
    console.log(`Начали!`);

    return () => {
      // Только componentWillUnmount()
      // : watchedItems === []
      // : return () => { ... }
      // ——————————————————————————
      console.log('Закончили!');
    };
  }, []);

  // И componentDidMount()
  // И componentDidUpdate()
  // ——————————————————————————
  useEffect(() => {
    console.log(`Кликов: ${count}`);

    if (count === 3) {
      props.unmountMe();
    }
  });

  return <button onClick={onClick}>Клик</button>;
};
```

```jsx
<App />

// Mount ----> Начали!
// Mount ----> Кликов: 0
// Click ----> Кликов: 1
// Click ----> Кликов: 2
// Click ----> Кликов: 3
// Unmount --> Закончили!
```

---

Пример 2:

```jsx
const App = () => {
  const [isUnmount, setUnmount] = useState(false);
  return !isUnmount ? <Example unmountMe={() => setUnmount(true)} /> : null;
};
```

```jsx
const Example = (props) => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(null);

  const onClick = () => {
    setCount(count + 1);
    setSeconds(0);
  };

  useEffect(() => {
    // Только componentDidMount()
    // : watchedItems === []
    // ——————————————————————————
    console.log(`Начали!`);

    return () => {
      // Только componentWillUnmount()
      // : watchedItems === []
      // : return () => { ... }
      // ——————————————————————————
      console.log('Закончили!');
    };
  }, []);

  // И componentDidMount()
  // И componentDidUpdate()
  // Только при изменении seconds
  // : watchedItems === [seconds]
  // ——————————————————————————
  useEffect(() => {
    if (seconds > 0) {
      console.log(`После клика прошло ${seconds} сек.`);
    }
  }, [seconds]);

  // И componentDidMount()
  // И componentDidUpdate()
  // Только при изменении count
  // : watchedItems === [count]
  // ——————————————————————————
  useEffect(() => {
    if (count > 0) {
      console.log(`Кликов: ${count}`);
    }
  }, [count]);

  // И componentDidMount()
  // И componentDidUpdate()
  // ——————————————————————————
  useEffect(() => {
    if (count === 3) {
      props.unmountMe();
    }

    if (count > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);

      // И componentDidUpdate()
      // И componentWillUnmount()
      // : return () => { ... }
      // ——————————————————————————
      return () => {
        clearInterval(intervalId);
      };
    }
  });

  return <button onClick={onClick}>Клик</button>;
};
```

```jsx
<App />

// Mount ----> Начали!
// Click ----> Кликов: 1
// Wait -----> После клика прошло 1 сек.
// Wait -----> После клика прошло 2 сек.
// Wait -----> После клика прошло 3 сек.
// Click ----> Кликов: 2
// Wait -----> После клика прошло 1 сек.
// Click ----> Кликов: 3
// Unmount --> Закончили!
```

## useContext()

Работа с контекстом

- [Документация](https://ru.reactjs.org/docs/hooks-reference.html#usecontext)

```jsx
const contextValue = useContext(MyContext);
```

Хук принимает:

- `MyContext` – объект контекста, возвращённый из React.createContext()

Хук возвращает:

- `contextValue` – текущее значение объекта контекста

---

Пример 1:

> `Спойлер`: Пример 2 более продвинутый.

```jsx
const user = { id: 1, name: 'cgehuzi', role: 'publisher' };

// Создаём контекст
// ——————————————————————————
const MyContext = React.createContext({});

const App = () => {
  return (
    // Инициируем контекст
    // ——————————————————————————
    <MyContext.Provider value={user}>
      <Example />
    </MyContext.Provider>
  );
};
```

```jsx
const Example = () => {
  // Получаем данные из контекста
  // ——————————————————————————
  const user = useContext(MyContext);

  return <h1>{user.name}</h1>;
};
```

---

Пример 2:

> Рекомендуется к использованию

Позволяет грамотно организовать работу с динамически изменяемым контекстом.

1. `Контекст` – отдельный модуль с данными по умолчанию
2. `Провайдер` – отдельный компонент
3. `Данные контекста` – данные состояния этого компонента
4. `Методы изменения` – методы изменения данных состояния этого компонента
5. `Изменение данных` – гарантированный вызов перерисовки

```jsx
// ThemeContext.js

import { createContext } from 'react';

// 1. Контекст
// ——————————————————————————
export default createContext({
  themes: {},
  theme: {},
  setTheme: () => {},
});
```

```jsx
// ThemeProvider.js

import React, { useState } from 'react';
import ThemeContext from './ThemeContext.js';

// 3.1. Данные контекста
// ——————————————————————————
const themes = {
  light: {
    style: {
      color: '#000000',
      backgroundColor: '#eeeeee',
    },
  },
  dark: {
    style: {
      color: '#ffffff',
      backgroundColor: '#222222',
    },
  },
};

// 2. Провайдер
// ——————————————————————————
const ThemeProvider = ({ children }) => {
  // 3.2. Данные контекста
  // ——————————————————————————
  const [theme, setTheme] = useState(themes.light);

  // 4. Методы изменения
  // ——————————————————————————
  const setLightTheme = () => setTheme(themes.light);
  const setDarkTheme = () => setTheme(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

```jsx
// Example.js

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext.js';

const Example = () => {
  const { theme, setLightTheme, setDarkTheme } = useContext(ThemeContext);

  // 5. Изменение данных
  // ——————————————————————————
  return (
    <div style={theme.style}>
      <button onClick={setLightTheme}>Вкл. светлую тему</button>
      <button onClick={setDarkTheme}>Вкл. тёмную тему</button>
    </div>
  );
};

export default Example;
```

```jsx
// App.js

import React from 'react';
import ThemeProvider from './ThemeProvider.jsx';
import Example from './Example.jsx';

const App = () => {
  return (
    <ThemeProvider>
      <Example />
    </ThemeProvider>
  );
};

export default App;
```

## useRef()

Работа с изменяемыми данными (DOM, предыдущие состояния и т.п.)

- [Документация](https://ru.reactjs.org/docs/hooks-reference.html#useref)

```jsx
const item = useRef(defaultValue);
```

Хук принимает:

- `defaultValue` – значение по умолчанию для item.current

Хук возвращает:

- `item` – ссылка на изменяемый Ref-объект, где  
  в свойстве `item.current` содержится изменяемое значение

---

Пример 1:

> работа с элементами DOM

```jsx
const Example = () => {
  const inputNode = useRef(null);
  const onClick = () => inputNode.current.focus();

  return (
    <>
      <input ref={inputNode} type="text" />
      <button onClick={onClick}>Фокус</button>
    </>
  );
};
```

---

Пример 2:

> работа с изменяемым состоянием

```jsx
const Example = () => {
  // счётчик кликов
  const [now, setNow] = useState(0);

  // тут будем хранить предыдущие значения
  const prevRef = useRef(null);

  // componentDidMount()
  // componentDidUpdate()
  useEffect(() => {
    // сохраняем значение для следующего рендера
    prevRef.current = now;
  });

  // получаем значение для текущего рендера
  const prev = prevRef.current;
  // : первый рендер === null

  const onClick = () => setNow(now + 1);

  return (
    <div>
      <button onClick={onClick}>Клик</button>
      <div>Текущее: {now}</div>
      <div>Предыдущее: {prev}</div>
    </div>
  );
};
```

```jsx
<Example />

// Mount ----> Текущее: 0 | Предыдущее:
// Click ----> Текущее: 1 | Предыдущее: 0
// Click ----> Текущее: 2 | Предыдущее: 1
// Click ----> Текущее: 3 | Предыдущее: 2
```
