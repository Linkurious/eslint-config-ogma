import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(testDir, "..");

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

test("oxfmt config is valid json", async () => {
  const oxfmtConfigRaw = await readFile(
    path.join(rootDir, ".oxfmtrc.json"),
    "utf8",
  );
  const oxfmtConfig = JSON.parse(oxfmtConfigRaw);

  assert.equal(typeof oxfmtConfig, "object");
  assert.equal(typeof oxfmtConfig.printWidth, "number");
});

test("package subpath @linkurious/eslint-config-ogma/oxfmt resolves", () => {
  const packageJsonPath = path.join(rootDir, "package.json");
  const require = createRequire(packageJsonPath);
  const resolved = require.resolve("@linkurious/eslint-config-ogma/oxfmt");

  assert.ok(
    resolved.replace(/\\/g, "/").endsWith("/.oxfmtrc.json"),
    `Unexpected resolved path: ${resolved}`,
  );
});
