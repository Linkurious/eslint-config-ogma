# `@linkurious/eslint-config-ogma`

This package provides Ogma' base JS ESLint configuration.

## Important note

⚠️ Don **not** install your own version of `eslint` if you are using this preset. You will regret it.

## Installed rules

- Eslint recommended rules
- Prettier rules
- Typescript parser

## Usage

1. Install the package:

```bash
npm install --save-dev @linkurious/eslint-config-ogma
```

2. Add the following to your `.eslintrc` file:

```json
{
  "extends": "@linkurious/eslint-config-ogma"
}
```

2.bis Alternatively, in your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@linkurious/eslint-config-ogma"
  }
}
```
