module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'off',
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['cypress/**/*.js'],
      globals: {
        // [!code ++]
        cy: 'readonly', // [!code ++]
        Cypress: 'readonly', // [!code ++]
        describe: 'readonly', // [!code ++]
        it: 'readonly', // [!code ++]
        beforeEach: 'readonly', // [!code ++]
        afterEach: 'readonly', // [!code ++]
        // ... 其他你在 Cypress 测试中使用的全局函数
      }, // [!code ++]
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
}
