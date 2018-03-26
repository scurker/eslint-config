module.exports = {

  extends: [
    './react.js',
  ],

  settings: {
    react: {
      pragma: 'h'
    }
  },

  rules: {
    'react/no-unknown-property': ['error', { ignore: ['class', 'for'] }]
  }

};