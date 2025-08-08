import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
    },
  },
  {
    ignores: [
      'assets/.vite/*',
      'assets/*.css',
      'assets/*.js',
      'node_modules/*',
      'dist/*',
      '*.json',
    ],
  },
]
