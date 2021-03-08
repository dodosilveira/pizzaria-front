module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    loader: true,
    objSwal: true,
    Swal: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended'
  ],
  rules: {
    'space-infix-ops': ['error', { 'int32Hint': false }], //space around = , +, -, etc
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], //space after :
    'keyword-spacing': ['error', { 'before': true }], //
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': {
        'max': 4,
        'allowFirstLine': true
      }
    }],
    'vue/script-indent': ['error', 2],
    'no-undef': 'error',
    'no-unused-vars': ['error', { 'args': 'all' }],
    camelcase: [
      'error', {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'quotes': [2, 'single', { 'avoidEscape': true }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
