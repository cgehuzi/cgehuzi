<< [На главную](../README.md)

# node : Webpack - сборка проектов

---

Навигация:

- [node : Webpack - сборка проектов](#node--webpack---сборка-проектов)
  - [Webpack : Установка](#webpack--установка)
  - [Webpack : Настройка](#webpack--настройка)
  - [Webpack : HTML](#webpack--html)
  - [Webpack : DEV сервер](#webpack--dev-сервер)
  - [Webpack : Babel](#webpack--babel)
  - [Webpack : CSS](#webpack--css)
  - [Webpack : PostCSS](#webpack--postcss)
    - [cssnano](#cssnano)
    - [autoprefixer](#autoprefixer)

---

## Webpack : Установка

[Официальный сайт](https://webpack.js.org/)

```bash
npm install --save-dev webpack webpack-cli
```

## Webpack : Настройка

[Документация](https://webpack.js.org/configuration/)

Предварительно создаём папку `src` с базовым файлом `index.js`.

Настройка Webpack производится с помощью файла `webpack.config.js`.<br>
Его создаём вручную в директории с файлом `package.json`.

---

<details>
<summary>webpack.config.js</summary>

```js
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

</details><br>

## Webpack : HTML

Для работы с HTML нужно установить [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#options).

```bash
npm install --save-dev html-webpack-plugin
```

---

<details>
<summary>webpack.config.js</summary>

```js
const path = require('path');
// NEW ————————————————
const HtmlWebpackPlugin = require('html-webpack-plugin');
// ————————————————————

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // NEW ————————————————
  plugins: [
    new HtmlWebpackPlugin({
      // options for html-webpack-plugin
    }),
  ],
  // ————————————————————
};
```

</details><br>

## Webpack : DEV сервер

Для запуска сервера нужно установить [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server).

```bash
npm install --save-dev webpack-dev-server
```

---

<details>
<summary>webpack.config.js</summary>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // NEW ————————————————
  devServer: {
    static: './dist',
  },
  // ————————————————————
  plugins: [new HtmlWebpackPlugin({})],
};
```

</details><br>

## Webpack : Babel

[Документация](https://babeljs.io/setup)

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

Настройка Babel производится с помощью файла `babel.config.json`.<br>
Его создаём вручную в директории с файлом `package.json`.

---

**babel.config.json**

```json
{
  "presets": ["@babel/preset-env"]
}
```

---

<details>
<summary>webpack.config.js</summary>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  // NEW ————————————————
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // ————————————————————
  plugins: [new HtmlWebpackPlugin({})],
};
```

</details><br>

## Webpack : CSS

Для работы с CSS нужно установить [css-loader](https://webpack.js.org/loaders/css-loader/).

```bash
npm install --save-dev css-loader
```

Для работы с SCSS нужно установить [sass-loader](https://webpack.js.org/loaders/sass-loader/).

```bash
npm install --save-dev sass-loader sass
```

Для вставки CSS-кода в `<style>` нужно установить [style-loader](https://webpack.js.org/loaders/style-loader/).

```bash
npm install --save-dev style-loader
```

Для извлечения CSS-кода в `CSS-файлы` нужно установить [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/).

```bash
npm install --save-dev mini-css-extract-plugin
```

---

<details>
<summary>webpack.config.js</summary>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// NEW ————————————————
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// ————————————————————

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // NEW ————————————————
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // ————————————————————
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({}),
    // NEW ————————————————
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // options for mini-css-extract-plugin
    }),
    // ————————————————————
  ],
};
```

</details><br>

## Webpack : PostCSS

Для работы нужно установить [postcss-loader](https://webpack.js.org/loaders/postcss-loader/).

```bash
npm install --save-dev postcss-loader postcss
```

### cssnano

Минифицирует CSS-код.

[Документация](https://cssnano.co/)

```bash
npm install --save-dev cssnano
```

### autoprefixer

[Документация](https://github.com/postcss/autoprefixer)

```bash
npm install --save-dev autoprefixer
```

Настройка PostCSS производится с помощью файла `postcss.config.js`.<br>
Его создаём вручную в директории с файлом `package.json`.

---

**postcss.config.js**

```js
module.exports = {
  plugins: [
    ['autoprefixer', {}],
    ['cssnano', {}],
  ],
};
```

---

<details>
<summary>webpack.config.js</summary>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          // NEW ————————————————
          'postcss-loader',
          // ————————————————————
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
```

</details>
