# @bdov/eslint-config

My personal ESLint config.

```json
{
    "extends": [
      "@bdov/eslint-config", // If not using React
      "@bdov/eslint-config/react", // If using React
    ]
}
```

Rule entry points:
- `@bdov/eslint-config/rules/base`: Enables [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) rules
- `@bdov/eslint-config/rules/comments`: Enables [eslint-plugin-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments) rules
- `@bdov/eslint-config/rules/functional`: Enables [eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional) rules
- `@bdov/eslint-config/rules/react`: Enables [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks), and [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) rules
- `@bdov/eslint-config/rules/typescript`: Enables [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) rules
