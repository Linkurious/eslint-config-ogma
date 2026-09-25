# Migration from v2.x (ESLint) to v3.x (oxlint + oxfmt)

v3.0.0 is a major version bump that replaces ESLint and Prettier with oxlint and oxfmt.

## Breaking Changes

- ESLint is no longer included. Remove `eslint` and related plugins from your dependencies.
- Prettier is no longer used. Use oxfmt instead.
- ESLint config exports (`.`, `./esm`, etc.) are removed. Only oxlint/oxfmt configs remain.

## Migration Steps

### 1. Update Package

```bash
npm install @linkurious/eslint-config-ogma@^3.0.0
```

This automatically installs oxlint and oxfmt.

### 2. Remove ESLint/Prettier Configs

Delete or archive:
- `eslint.config.js`
- `.eslintrc.json` / `.eslintrc.js`
- `.prettierrc` / `.prettierrc.json`

### 3. Create Oxlint Config

Create `.oxlintrc.json`:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxlint"]
}
```

### 4. Create Oxfmt Config

Create `.oxfmtrc.json`:

```json
{
  "extends": ["@linkurious/eslint-config-ogma/oxfmt"]
}
```

### 5. Update Scripts

In `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint",
    "format": "oxfmt --write .",
    "format:check": "oxfmt --check ."
  }
}
```

### 6. Update CI/CD

Replace ESLint and Prettier steps with oxlint and oxfmt. Example:

```bash
# Old
npm run lint
npm run format:check

# New
oxlint
oxfmt --check .
```

## Rule Mapping

Oxlint rules differ from ESLint. Review [oxlint documentation](https://oxc.rs/docs/guide/linter.html) for rule names and severity levels.

Common remappings:
- ESLint `no-console: error` → oxlint `no_console: error`
- ESLint `no-unused-vars` → oxlint `no_unused_variables`

## Performance

Oxlint and oxfmt are significantly faster than ESLint and Prettier:

- **Oxlint**: ~10x faster than ESLint
- **Oxfmt**: ~20x faster than Prettier

## Support

For issues or questions, refer to:
- [Oxlint docs](https://oxc.rs/docs/guide/linter.html)
- [Oxfmt docs](https://oxc.rs/docs/guide/formatter.html)
