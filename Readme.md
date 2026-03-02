# @linkurious/eslint-config-ogma

A shareable ESLint 9 flat config for TypeScript projects with opinionated rules for code quality and consistency.

## Features

- ✨ ESLint 9 flat config format
- 🔧 TypeScript support with typescript-eslint
- 📦 Import/export linting with eslint-plugin-import
- 🤝 Promise best practices with eslint-plugin-promise
- 💅 Prettier integration for code formatting
- 📋 Organized import ordering rules

## Installation

```bash
npm install --save-dev @linkurious/eslint-config-ogma eslint typescript
```

## Usage

### Basic Setup

Create an `eslint.config.js` file in your project root:

```javascript
import ogmaConfig from "@linkurious/eslint-config-ogma";

export default ogmaConfig;
```

### With Custom Overrides

```javascript
import ogmaConfig from "@linkurious/eslint-config-ogma";

export default [
  ...ogmaConfig,
  {
    // Your custom rules
    rules: {
      "no-console": "warn", // Override the default 'error'
      // Add your project-specific rules here
    },
  },
];
```

### File-Specific Configuration

```javascript
import ogmaConfig from "@linkurious/eslint-config-ogma";

export default [
  ...ogmaConfig,
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    rules: {
      "no-console": "off", // Allow console in tests
    },
  },
];
```

### Ignoring Files

```javascript
import ogmaConfig from "@linkurious/eslint-config-ogma";

export default [
  ...ogmaConfig,
  {
    ignores: ["dist/**", "build/**", "node_modules/**", "**/*.d.ts"],
  },
];
```

## Oxlint Config

This package also publishes an Oxlint config as the `@linkurious/eslint-config-ogma/oxlint` subpath.

### Option 1: Extend by package name

If your Oxlint version supports package `extends`, add this to your project `.oxlintrc.json`:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxlint"]
}
```

### Option 2: Use the published file path

Use the file from `node_modules` directly:

```bash
oxlint --config node_modules/@linkurious/eslint-config-ogma/.oxlintrc.json .
```

## What's Included

This config includes:

- **Base configs**: ESLint recommended + TypeScript recommended
- **Import linting**: Organized imports with alphabetical sorting
- **Promise linting**: Best practices for Promise usage
- **TypeScript support**: Full TypeScript parsing and linting
- **Prettier integration**: Automatic formatting conflict resolution

## Key Rules

- `no-console`: Error (use proper logging instead)
- `@typescript-eslint/ban-ts-comment`: Warning
- `@typescript-eslint/no-non-null-assertion`: Off (allows `!` assertions)
- `import/order`: Enforces organized import grouping and alphabetical sorting

## Requirements

- ESLint 9.x
- TypeScript 4.x or 5.x
- Node.js 16+ (required by ESLint 9)

## Migration from v1.x

If you're upgrading from v1.x (ESLint 8), you'll need to:

1. Update to ESLint 9: `npm install --save-dev eslint@^9.0.0`
2. Convert your `.eslintrc.*` to `eslint.config.js` (flat config format)
3. Update your config import as shown in the usage examples above

## Contributing

The following scripts are used to develop and test this package:

```json
{
  "scripts": {
    "validate:exports": "node scripts/validate-exports.mjs",
    "test:unit": "node --test",
    "test:ci": "mkdir -p reports/unit && node --test --test-reporter=junit --test-reporter-destination=reports/unit/junit-test-results.xml",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "npm run validate:exports && npm run test:unit && npm run lint"
  }
}
```

The `validate:exports` script ensures `@linkurious/eslint-config-ogma/oxlint` remains correctly exported before publishing.

## License

Apache-2.0 © Linkurious SAS
