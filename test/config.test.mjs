import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(testDir, "..");

test("eslint config exports a non-empty flat config array", async () => {
  const { default: eslintConfig } = await import("../index.js");

  assert.ok(Array.isArray(eslintConfig), "Default export must be an array");
  assert.ok(eslintConfig.length > 0, "ESLint config array must not be empty");
});

test("oxlint config is valid json with expected top-level fields", async () => {
  const oxlintConfigRaw = await readFile(
    path.join(rootDir, ".oxlintrc.json"),
    "utf8",
  );
  const oxlintConfig = JSON.parse(oxlintConfigRaw);

  assert.equal(typeof oxlintConfig, "object");
  assert.equal(oxlintConfig.rules["no-console"], "error");
  assert.ok(Array.isArray(oxlintConfig.plugins));
});

test("package subpath @linkurious/eslint-config-ogma/oxlint resolves", () => {
  const packageJsonPath = path.join(rootDir, "package.json");
  const require = createRequire(packageJsonPath);
  const resolved = require.resolve("@linkurious/eslint-config-ogma/oxlint");

  assert.ok(
    resolved.replace(/\\/g, "/").endsWith("/.oxlintrc.json"),
    `Unexpected resolved path: ${resolved}`,
  );
});
