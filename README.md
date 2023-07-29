# ESLint Config

The ESLint configuration for TypeScript.

## Installation and Usage

Install the library:

```shell
npm i -D @sylvanas-cry/eslint-config
```

Install peer dependencies:
```shell
npm i -D \
  eslint \
  eslint-plugin-import \
  eslint-plugin-simple-import-sort \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin
```

Create file named `.eslintrc` at the root of your project:

```json
{
  "extends": "@sylvanas-cry/eslint-config"
}
```

You can override rules this way:
```json
{
  "extends": "@sylvanas-cry/eslint-config",
  "rules": {
    "no-console": "off"
  }
}
```
