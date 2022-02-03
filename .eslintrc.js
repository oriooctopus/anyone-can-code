module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // disabling js files because I need to spend more time converting them first
  ignorePatterns: ['**/course/**', '**/generated/**', '*.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports': 'error',
    'max-len': [
      'warn',
      { code: 80, tabWidth: 2, ignoreUrls: true, ignoreStrings: true },
    ],
  },
};
