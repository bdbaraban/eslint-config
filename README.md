# 🧹 @bdbaraban/eslint-config

My ESLint config. Configures:
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
- [eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)

## Installation

```bash
npm install --save-dev @bdbaraban/eslint-config
npx install-peerdeps @bdbaraban/eslint-config@latest
```


## Usage

Entry points:
```javascript
module.exports = {
  extends: [
    '@bdbaraban/eslint-config', // If not using React
    '@bdbaraban/eslint-config/react', // If using React
  ],
};
```

Rule sets:
```javascript
module.exports = {
  extends: [
    '@bdbaraban/eslint-config/rules/base', // eslint-config-airbnb-base + eslint-plugin-prettier
    '@bdbaraban/eslint-config/rules/comments', // eslint-plugin-comments
    '@bdbaraban/eslint-config/rules/functional', // eslint-plugin-functional
    '@bdbaraban/eslint-config/rules/react', // eslint-plugin-react + eslint-plugin-react-hooks + eslint-plugin-jsx-a11y
    '@bdbaraban/eslint-config/rules/typescript', // @typescript-eslint/eslint-plugin
  ],
};
```
