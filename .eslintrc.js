module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'standard',
  ],
  // parser: "babel-eslint",
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  // plugins: [],
  'rules': {
    'semi': [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'quote-props': 'off',
    'import/order': 'error',
    'no-case-declarations': 'off',
  },
};
