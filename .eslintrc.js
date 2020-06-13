module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['jest'],
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier/@typescript-eslint'],
}
