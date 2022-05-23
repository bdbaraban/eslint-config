export = {
  extends: [
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
  ],
  plugins: ['functional'],
  rules: {
    'functional/functional-parameters': [
      'error',
      {
        allowRestParameter: true,
        allowArgumentsKeyword: false,
        enforceParameterCount: false,
      },
    ],
    'functional/immutable-data': [
      'error',
      {
        assumeTypes: true,
        ignoreClass: 'fieldsOnly',
        ignoreImmediateMutation: true,
      },
    ],
    'functional/no-class': 'off',
    'functional/no-conditional-statement': [
      'error',
      {
        allowReturningBranches: true,
      },
    ],
    'functional/no-expression-statement': 'off',
    'functional/no-let': [
      'error',
      {
        allowInForLoopInit: true,
      },
    ],
    'functional/no-mixed-type': 'off',
    'functional/no-return-void': 'off',
    'functional/no-throw-statement': 'off',
    'functional/no-try-statement': [
      'error',
      {
        allowCatch: true,
        allowFinally: true,
      },
    ],
    'functional/prefer-readonly-type': 'off',
  },
};
