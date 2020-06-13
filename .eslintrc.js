module.exports = {
  env: {
    node: true, // disable error from node global functions
    jest: true, // disable error from jest global functions
  },
  plugins: ['jest'],
  parser: '@typescript-eslint/parser', // parse typescript
  extends: [
    'eslint:recommended', // eslint recommended rules
    'prettier/@typescript-eslint', // disable formatting rules of prettier
  ],
}
