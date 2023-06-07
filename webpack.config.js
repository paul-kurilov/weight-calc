require('dotenv').config();

const Dotenv = require('dotenv-webpack');

module.exports = {
  // Ваши настройки Webpack
  plugins: [
    new Dotenv()
  ]
};
