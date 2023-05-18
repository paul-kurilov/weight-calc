const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js', // Ваш главный файл, в котором происходит импорт и запуск кода
  output: {
    path: path.resolve(__dirname, 'dist'), // Путь к папке, в которую будет собран итоговый бандл
    filename: 'bundle.js', // Имя итогового файла бандла
  },
  mode: 'development', // или 'production' или 'none'
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      // Здесь вы можете добавить правила для обработки разных типов файлов (например, JavaScript, CSS, изображений и т. д.)
      // Пример правила для обработки JavaScript файлов с использованием Babel
      {
        test: /\.js$/,
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
  resolve: {
    // Дополнительные настройки разрешения модулей
    // Здесь вы можете добавить расширения файлов, которые должны автоматически разрешаться
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
    extensions: ['.js'],
  },
  // Дополнительные настройки и плагины для Webpack
  // Например, плагин для оптимизации и минификации кода
  optimization: {
    minimize: true,
  },
};
