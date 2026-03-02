import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");

const packageJsonPath = path.join(rootDir, "package.json");
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

assert.equal(
  packageJson.exports?.["./oxlint"],
  "./.oxlintrc.json",
  "Missing or invalid exports['./oxlint'] mapping in package.json",
);

assert.equal(
  packageJson.exports?.["./oxlint.json"],
  "./.oxlintrc.json",
  "Missing or invalid exports['./oxlint.json'] mapping in package.json",
);

assert.ok(
  packageJson.files?.includes(".oxlintrc.json"),
  "package.json files[] must include .oxlintrc.json",
);

const oxlintConfigPath = path.join(rootDir, ".oxlintrc.json");
assert.ok(
  existsSync(oxlintConfigPath),
  "Missing .oxlintrc.json in repository root",
);

const require = createRequire(packageJsonPath);
const resolvedSubpath =
  require.resolve("@linkurious/eslint-config-ogma/oxlint");
const normalizedResolvedSubpath = resolvedSubpath.replace(/\\/g, "/");

assert.ok(
  normalizedResolvedSubpath.endsWith("/.oxlintrc.json"),
  `Unexpected oxlint subpath resolution: ${resolvedSubpath}`,
);

process.stdout.write("Exports validation passed.\n");
