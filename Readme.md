# @linkurious/eslint-config-ogma

Shareable oxlint and oxfmt configs for code linting and formatting.

## Features

- ⚡ Rust-based linter (oxlint) for speed
- 🎨 Rust-based formatter (oxfmt) for consistency
- 🔧 TypeScript support
- 📦 Zero configuration needed—install and use

## Installation

```bash
npm install --save-dev @linkurious/eslint-config-ogma
```

This installs oxlint and oxfmt automatically.

## Usage

### Oxlint

Create `.oxlintrc.json` in your project root:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxlint"]
}
```

Run linter:

```bash
npx oxlint
```

### Oxfmt

Create `.oxfmtrc.json` in your project root:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxfmt"]
}
```

Format code:

```bash
npx oxfmt --write .
```

## Configuration

### Oxlint Config

80 character print width, semicolons enabled, single-line if/else allowed.

Override in `.oxlintrc.json`:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxlint"],
  "rules": {
    "no-console": "off"
  }
}
```

### Oxfmt Config

80 character print width, semicolons enabled, single-line if/else allowed.

Override in `.oxfmtrc.json`:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxfmt"],
  "printWidth": 100
}
```

## Add to npm Scripts

```json
{
  "scripts": {
    "lint": "oxlint",
    "format": "oxfmt --write .",
    "format:check": "oxfmt --check ."
  }
}
```

## Requirements

- Node.js 16+

## Migration from v2.x

If upgrading from v2.x (ESLint config), see [MIGRATION.md](./MIGRATION.md).

## License

Apache-2.0 © Linkurious SAS

