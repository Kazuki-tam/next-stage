module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'react', '@typescript-eslint', 'import', 'simple-import-sort'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'prettier'],
  rules: {
    // Notify as console remaining
    'no-console': ['warn', { allow: ['warn', 'info', 'error'] }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'no-restricted-imports': ['error', { paths: [{ name: 'react', importNames: ['default'] }] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'error',
    'react/no-unused-prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/newline-after-import': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['src/pages/**/*.tsx'],
      rules: { 'import/no-default-export': 'off' },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
