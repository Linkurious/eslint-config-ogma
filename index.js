module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2021
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 2,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/order': [
      1,
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index'
        ],
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal'
          },
          {
            pattern: 'common',
            group: 'internal'
          },
          {
            pattern: 'routes/**',
            group: 'internal'
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
