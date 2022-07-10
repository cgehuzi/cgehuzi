<< [На главную](../README.md)

# React : Redux Toolkit

Библиотека для интеграции Redux в React.

[Документация](https://redux-toolkit.js.org/)

---

Навигация:

- [React : Redux Toolkit](#react--redux-toolkit)
  - [Базовый пример](#базовый-пример)
  - [Slices (слайсы)](#slices-слайсы)
    - [Имя](#имя)
    - [Начальное состояние](#начальное-состояние)
    - [Редьюсеры](#редьюсеры)
  - [Batch](#batch)
  - [Нормализация данных](#нормализация-данных)
  - [Entity Adapter](#entity-adapter)
  - [Extra Reducers (Дополнительные редьюсеры)](#extra-reducers-дополнительные-редьюсеры)
  - [Thunk (асинхронные запросы)](#thunk-асинхронные-запросы)

---

## Базовый пример

```bash
npm install @reduxjs/toolkit react-redux
```

Примерная структура проекта:

```bash
components/
  | App.jsx
slices/
  | index.js
  | counterSlice.js
index.jsx
```

> Такая структура наиболее простая, но не единственная возможная.

---

```js
// index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
// Оборачиваем приложение в Provider
// и передаем в него хранилище
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

```js
// slices/index.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice.js';

export default configureStore({
  reducer: {
    // counter – имя внутри объекта состояния state.counter
    counter: counterReducer,
  },
});
```

---

```js
// slices/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // пример с данными
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default counterSlice.reducer;
```

---

```jsx
// components/App.jsx

import React from 'react';
// Хуки находятся в react-redux
import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment } from '../slices/counterSlice.js';

export default () => {
  // Вытаскиваем данные из хранилища. state – все состояние
  const count = useSelector((state) => state.counter.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Прибавить
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Отнять
        </button>
      </div>
    </div>
  );
};
```

---

## Slices (слайсы)

```js
const examplesSlice = createSlice({
  name: 'examples', // Имя
  initialState, // Начальное состояние
  reducers: {
    // Редьюсеры
    action1: (state) => {},
    action2: (state, action) => {
      // action.payload – переданные данные
    },
  },
});
```

### Имя

> Чисто техническая вещь.

Свойство в состоянии приложения, внутри которого хранятся данные текущего слайса.

Также используется как префикс в названии действия. Виден в Redux DevTools: `examples/____`

### Начальное состояние

Базовая структура данных и какие-то статические исходные данные.

> Данные, получаемые по API заполняются потом через действия.

### Редьюсеры

> Имеют несколько важных отличий от редьюсеров самого Redux

1. Каждый редьюсер соответствует конкретному действию, поэтому внутри нет конструкции `switch`
2. Внутри редьюсеров происходит прямое изменение состояния
3. Функция `createSlice()` генерирует редьюсер и экшены к нему. Всё это нужно экспортировать:  
    редьюсер – по умолчанию, действия – по именам
   ```js
   export const { action1, action2 } = examplesSlice.actions;
   const examplesReducer = examplesSlice.reducer;
   export default examplesReducer;
   ```
4. Каждый новый редьюсер нужно не забывать добавлять в хранилище
   ```js
   export default configureStore({
     reducer: {
       examples: examplesReducer,
       // и все остальные редьюсеры
     },
   });
   ```

## Batch

Функция для отсрочки перерисовки компонента. Суть в объединении нескольких экшенов в группу.

```js
batch(() => {
  dispatch(action1()); // изменяем состояние ...
  dispatch(action2()); // изменяем состояние ...
});
// ... теперь происходит рендер
```

## Нормализация данных

- [Официальные рекомендации](https://redux.js.org/usage/structuring-reducers/normalizing-state-shape)

Не нормализованные данные:

```jsonc
[
  {
    "id": "post1",
    "author": { "id": "user1" /* ... */ },
    "comments": [
      { "id": "comment1", "author": { "id": "user2" /* ... */ } /* ... */ },
      { "id": "comment2", "author": { "id": "user3" /* ... */ } /* ... */ }
    ]
    // ...
  },
  {
    "id": "post2",
    "author": { "id": "user2" /* ... */ },
    "comments": []
    // ...
  }
]
```

---

- [Normalizr](https://github.com/paularmstrong/normalizr/tree/master/docs) – библиотека для нормализации

Пример использования:

```js
const data = [
  // Не нормализированные данные
];

const user = new schema.Entity('users');

const comment = new schema.Entity('comments', {
  author: user,
});

const post = new schema.Entity('posts', {
  author: user,
  comments: [comment],
});

const normalized = normalize(data, [post]);
const { posts, users, comments } = normalized.entities;

const result = {
  users: {
    entities: users,
    ids: Object.keys(users),
  },
  comments: {
    entities: comments,
    ids: Object.keys(comments),
  },
  posts: {
    entities: posts,
    ids: Object.keys(posts),
  },
};
```

---

Нормализованные данные:

```jsonc
{
  "users": {
    "entities": {
      "user1": { "id": "user1" /* ... */ },
      "user2": { "id": "user2" /* ... */ },
      "user3": { "id": "user3" /* ... */ }
    },
    "ids": ["user1", "user2", "user3"]
  },

  "comments": {
    "entities": {
      "comment1": { "id": "comment1", "author": "user2" /* ... */ },
      "comment2": { "id": "comment2", "author": "user3" /* ... */ }
    },
    "ids": ["comment1", "comment2"]
  },

  "posts": {
    "entities": {
      "post1": { "id": "post1", "author": "user1", "comments": ["comment1", "comment2"] /* ... */ },
      "post2": { "id": "post2", "author": "user2", "comments": [] /* ... */ }
    },
    "ids": ["post1", "post2"]
  }
}
```

## Entity Adapter

Механизм для работы с данными. Предоставляет набор готовых редьюсеров и селкторов.

- [Документация](https://redux-toolkit.js.org/api/createEntityAdapter)

```js
// создание адаптера
// ——————————————————————————
const examplesAdapter = createEntityAdapter();
```

---

```js
// начальное состояние
// ——————————————————————————
examplesAdapter.getInitialState();
```

---

```js
// редьюсеры
// ——————————————————————————
examplesAdapter.addOne;
examplesAdapter.updateOne;
examplesAdapter.removeOne;
```

- [Полный список](https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions)

---

```js
// селекторы
// ——————————————————————————
const selectors = examplesAdapter.getSelectors((state) => state.examples);
useSelector(selectors.selectAll);
useSelector(selectors.selectIds);
```

- [Полный список](https://redux-toolkit.js.org/api/createEntityAdapter#selector-functions)
- [Создание своих селекторов](https://github.com/reduxjs/reselect) – что бы это не значило

---

Базовый пример:

```js
// usersSlice.js

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const e = createEntityAdapter();

// По умолчанию: { ids: [], entities: {} }
const initialState = usersAdapter.getInitialState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
    removeUser: usersAdapter.removeOne,
    updateUser: usersAdapter.updateOne,
  },
});

// Колбек определяет базовый селектор, извлекающий нужную часть состояния из Redux
// Для слайса users это state.usersReducer
const usersReducer = usersSlice.reducer;
export const selectors = usersAdapter.getSelectors((state) => state.usersReducer);
export default usersReducer;
```

```js
// Где-то в приложении

import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../slices/usersSlice.js';

const Example = (props) => {
  // Получение данных
  // ——————————————————————————
  // Извлекаем всех пользователей в виде массива
  // Внутри происходит выборка данных из state.users.entities
  // отсортированная по state.users.ids
  const users = useSelector(selectors.selectAll); // идентично (state) => selectors.selectAll(state)
  const user = useSelector((state) => selectors.selectById(state, id)); // id – какой-то идентификатор
  // ——————————————————————————

  // ...

  // Изменение данных
  // ——————————————————————————
  const dispatch = useDispatch();

  // По соглашению, в передаваемых данных должен быть id для правильной работы
  dispatch(addUser(user));
  // Данные передаются в формате: { id, changes }
  dispatch(updateUser({ id: user.id, changes: data }));
  // Достаточно передать идентификатор
  dispatch(removeUser(user.id));
  // ——————————————————————————

  // ...
};
```

## Extra Reducers (Дополнительные редьюсеры)

Механизм для реакции на действия, происходящие в других слайсах.

- [Документация](https://redux-toolkit.js.org/api/createslice#extrareducers)

```js
createSlice({
  // ...
  extraReducers: (builder) => {
    builder.addCase(otherSliceAction, (state, action) => {
      // otherSliceAction – действие, на которое реагируем          : импортируется из другого слайса
      // state – копия состояния текущего слайса                    : { entities, ids }
      // action – объект из otherSliceAction                        : для извлечения action.payload

      // state изменяется напрямую
      // через вызов редьюсеров текущего слайса
      thisAdapter.setAll(state, newItems);
    });

    // поддерживает цепочки вызовов
    builder.addCase().addCase();
  },
});
```

## Thunk (асинхронные запросы)

`redux-thunk`, представляет из себя мидлвару, которая добавляется в Redux и позволяет использовать асинхронный код внутри `dispatch()`. С её помощью выносят логику выполнения запросов и обновления хранилища в отдельные функции, называемые `thunks`.

- [Документация](https://redux.js.org/usage/writing-logic-thunks) – как работает Thunk
- [Документация](https://redux.js.org/usage/writing-logic-thunks#using-createasyncthunk) – createAsyncThunk

Базовый пример:

```js
// routes.js

const routes = {
  // Чтобы не хардкодить урлы, делаем модуль, в котором они создаются
  getData: () => '/api/data',
  getUser: (id) => `/api/data/users/${id}`,
  // ...
};

export default routes;
```

```js
// usersSlice.js

import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import routes from './routes.js';

// Создаем Thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById', // отображается в Dev Tools и должно быть уникально у каждого Thunk
  async (userId) => {
    // Здесь только логика запроса и возврата данных
    // Никакой обработки ошибок
    const response = await axios.get(routes.getUser(userId));
    return response.data;
  }
);

const usersAdapter = createEntityAdapter();

const usersSlice = createSlice({
  name: 'users',
  // Добавляем в состояние отслеживание процесса загрузки
  // { ids: [], entities: {}, loading: 'idle', error: null }
  initialState: usersAdapter.getInitialState({ loading: 'idle', error: null }),
  reducers: {
    // любые редьюсеры, которые нам нужны
  },
  extraReducers: (builder) => {
    builder
      // Вызывается прямо перед выполнением запроса
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      // Вызывается в том случае если запрос успешно выполнился
      .addCase(fetchUserById.fulfilled, (state, action) => {
        // Добавляем пользователя
        usersAdapter.addOne(state, action.payload);
        state.loading = 'idle';
        state.error = null;
      })
      // Вызывается в случае ошибки
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = 'failed';
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
        state.error = action.error;
      });
  },
});
```

```js
// Где-то в приложении

import { fetchUserById } from './slices/usersSlice.js';

// ...

dispatch(fetchUserById(id));
```
