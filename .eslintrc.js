module.exports = {
  env: {
    node: true, // disable error from node global functions
    jest: true, // disable error from jest global functions
  },
  parser: '@typescript-eslint/parser', // parse typescript
  extends: [
    'eslint:recommended', // eslint recommended rules
  ],
}
