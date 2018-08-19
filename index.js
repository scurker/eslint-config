module.exports = {

  extends: [
    'eslint:recommended',
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js'
  ],

  parserOptions: {
    ecmaVersion: 2018
  },

  rules: {}

};