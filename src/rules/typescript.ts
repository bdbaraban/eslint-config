export = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-readonly': 'off',
  },
};
