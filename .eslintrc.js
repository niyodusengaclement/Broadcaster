module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style":0,
    "no-unused-vars":0,
    "no-console":0,
    "require-await": true,
    "no-empty-pattern": true,
    "no-redeclare": true,
    "quotes": ["error", "single", { "allowTemplateLiterals": true } ],
  },
};
