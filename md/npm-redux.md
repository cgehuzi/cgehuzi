<< [На главную](../README.md)

# Redux - работа с данными состояния

[Официальный сайт](https://redux.js.org/)

---

Навигация:

- [Redux - работа с данными состояния](#redux---работа-с-данными-состояния)
  - [Базовый пример](#базовый-пример)
  - [Передача данных](#передача-данных)
  - [Начальное состояние](#начальное-состояние)
  - [Редьюсеры](#редьюсеры)
  - [Мидлвары](#мидлвары)
  - [Redux DevTools](#redux-devtools)

---

## Базовый пример

```js
import { createStore } from 'redux';

// Редьюсер – функция, которая описывает то, как изменяются данные внутри хранилища
// Она принимает на вход текущее состояние и должна вернуть новое
// Именно так работает функция reducer, отсюда и название
// Второй параметр описывает действие, с его помощью мы узнаем
// как конкретно надо обновить данные для конкретного вызова
// action — это объект, в котором обязательно есть поле type, содержащее имя действия
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
};

// Создание хранилища на основе редьюсера
// Именно в этом хранилище находится состояние, которое возвращает редьюсер
const store = createStore(reducer);

// Состояние можно извлечь с помощью функции getState()
store.getState(); // 0 – так как это начальное значение состояния

// Функция subscribe позволяет подписываться на изменение состояния внутри хранилища
// Она очень похожа на addEventListener, но без указания события
// Как только меняется любая часть состояния,
// хранилище по очереди вызывает всё, что было добавлено или изменено
// Здесь мы просто извлекаем состояние и печатаем его на экран
store.subscribe(() => console.log(store.getState()));

// dispatch – функция, которая вызывает редьюсер

// Редьюсер увеличивает состояние на единицу
store.dispatch({ type: 'INCREMENT' }); // 1
// Редьюсер увеличивает состояние на единицу
store.dispatch({ type: 'INCREMENT' }); // 2
// Редьюсер уменьшает состояние на единицу
store.dispatch({ type: 'DECREMENT' }); // 1

store.getState(); // 1

// Для избежания дублирования и повышения уровня абстракции, вынесем действия в функции
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

store.dispatch(increment()); // 2
store.dispatch(decrement()); // 1
```

## Передача данных

По общему соглавшению рекомендуется передавать данные в action при помощи объекта `payload`.

```js
const actionExample = ( ... ) => ({ type: '____', payload: { ... } });
```

Пример:

```js
const addUser = (user) => ({ type: 'USER_ADD', payload: { user } });

const reducer = (state = [], action) => { // инициализация состояния
  switch (action.type) {
    case 'USER_ADD': {
      const { user } = action.payload; // данные
      // так в редьюсере возвращаются новые данные без изменения старых
      return [...state, user];
    }
    case 'USER_REMOVE': {
      const { id } = action.payload; // данные
      return state.filter(u => u.id !== id); // данные не меняются
    }
    default:
      return state;
  }
};

const user = /* ... */;
const store = createStore(reducer);
store.dispatch(addUser(user));
```

## Начальное состояние

```js
// Второй параметр – начальное состоянии при создании хранилища
const store = createStore(reducer, initState);
// @@redux/INIT
```

В коде ниже, функция `createStore()` вызовет редьюсер так: `reducer(100, '@@redux/INIT')`.  
Затем выполнится ветка default и состоянием хранилища станет число 100.

```js
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer, 100);

store.getState(); // 100
```

## Редьюсеры

Redux имеет встроенный механизм, позволяющий создавать множественные редьюсеры и комбинировать их друг с другом. Работает это так: для каждого свойства верхнего уровня пишется свой собственный редьюсер, а затем они с помощью функции `combineReducers()` объединяются в корневой (root) редьюсер, который уже используется для создания хранилища.

```js
import { combineReducers, createStore } from 'redux';

const todosReducer = (state = [], action) => {
  // будет использован для управления данными `todos`
};

const commentsReducer = (state = [], action) => {
  // будет использован для управления данными `comments`
};

const rootReducer = combineReducers({
  todos: todosReducer,
  comments: commentsReducer,
});
const store = createStore(rootReducer);

// Если обозвать редьюсеры как свойства в состоянии, то код можно сократить:
// const todos = (state = [], action) => { ... };
// const comments = (state = [], action) => { ... };
// const rootReducer = combineReducers({ todos, comments });
```

> **Примечание**:  
> Совпадение имён методов в разных редьюсерах приведёт к выполнению обоих.

Этим нюансом стоит пользоваться грамотно:

```js
const todos = (state = {}, action) => {
  switch (action.type) {
    case 'TODO_REMOVE':
    // ...
  }
};

const comments = (state = {}, action) => {
  switch (action.type) {
    // При удалении какого-либо TODO
    // нужно удалить и все его комментарии
    case 'TODO_REMOVE':
    // ...
  }
};
```

То есть правильный подход состоит в том, чтобы повторять часть `case` в нужных редьюсерах, а не в том, чтобы пытаться получить недостающие части состояния.

## Мидлвары

Мидлвары — функции, которые последовательно вызываются в процессе обновления данных в хранилище.

Общий принцип работы таков:

1. Мидлвары встраиваются в хранилище при его создании
2. Во время диспатчинга (отправки действий) данные проходят через них и только затем попадают в редьюсер

```js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// если есть initialState:
const store = createStore(reducer, initialState, applyMiddleware(thunk));

// если нет initialState:
const store = createStore(reducer, applyMiddleware(thunk));

// если несколько мидлваров:
const store = createStore(
  reducer,
  // initialState,
  compose(applyMiddleware(thunk), applyMiddleware(logger))
);
```

Пример мидлвары:

```js
const logger = (store) => (next) => (action) => {
  console.group(action.type); // группа с именем обрабатываемого действия
  console.info('dispatching', action); // исходный объект действия

  // ... гипотетические изменения объекта `action`

  const result = next(action); // обработка изменений и запись результата
  console.log('next state', store.getState()); // состояние после изменения

  console.groupEnd(); // закрываем группу
  return result; // возвращаем результат
};
```

## Redux DevTools

Для Redux написано специальное браузерное расширение Redux DevTools.

- [Документация](https://github.com/reduxjs/redux-devtools)

Подключения расширения к хранилищу:

```js
createStore(
  reducer,
  // initialState,
  compose(
    // applyMiddleware( ... ),
    // applyMiddleware( ... ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
```

> Не требует использования функции `applyMiddleware`
