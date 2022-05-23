export = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    complexity: ['error', 7],
    'import/prefer-default-export': 'off',
    indent: 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true,
      },
    ],
    'max-lines': ['error', { max: 256 }],
    'max-params': ['error', 3],
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
      },
    ],
    'no-plusplus': 'off',
  },
};
