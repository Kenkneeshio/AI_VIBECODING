import assert from 'node:assert/strict';
import {test} from 'node:test';
import {mkdtempSync, mkdirSync, writeFileSync, rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, join} from 'node:path';
import {
  architectureReportJson, buildArchitectureReport, inspectArchitectureSource,
} from '../scripts/architecture-check.mjs';

const contract = {
  version: 1,
  sourceRoots: ['engine', 'adapters'],
  exclude: ['adapters/generated.js'],
  excludeSuffixes: ['.test.mjs'],
  pureRoots: ['engine/'],
  owners: [{id: 'engine', prefixes: ['engine/']}, {id: 'adapter', prefixes: ['adapters/']}],
  entrypoints: ['engine/core.js', 'adapters/home.mjs', 'adapters/editor.mjs'],
  requiredImports: [
    {from: 'adapters/home.mjs', to: 'engine/core.js', reason: 'Shared model'},
    {from: 'adapters/editor.mjs', to: 'engine/core.js', reason: 'Shared model'},
  ],
};

function fixture(t, overrides = {}, newline = '\n') {
  const root = mkdtempSync(join(tmpdir(), 'roomcraft-architecture-'));
  t.after(() => rmSync(root, {recursive: true, force: true}));
  const files = {
    'engine/core.js': "export const normalize = value => ({...value});\n",
    'adapters/home.mjs': "import {normalize} from '../engine/core.js';\nexport const home = normalize;\n",
    'adapters/editor.mjs': "import {normalize} from '../engine/core.js';\nexport const editor = normalize;\n",
    'adapters/generated.js': "import './missing-bundle-input.js';\n",
    'adapters/example.test.mjs': "import './test-only.mjs';\n",
    ...overrides,
  };
  for (const [path, source] of Object.entries(files)) {
    if (source === null) continue;
    mkdirSync(dirname(join(root, path)), {recursive: true});
    writeFileSync(join(root, path), source.replaceAll('\n', newline));
  }
  return root;
}

test('current architecture satisfies explicit shared boundaries and engine capabilities', () => {
  const report = buildArchitectureReport();
  assert.deepEqual(report.violations, []);
  assert.ok(report.modules.some(module => module.path === 'public/engine/terrain.js' && module.owner === 'engine'));
  assert.ok(!report.modules.some(module => module.path === 'public/storybook-editor.js'));
});

test('inventory is sorted, portable and identical across root locations and line endings', t => {
  const first = buildArchitectureReport(fixture(t), contract);
  const second = buildArchitectureReport(fixture(t, {}, '\r\n'), contract);
  assert.equal(architectureReportJson(first), architectureReportJson(second));
  assert.equal(first.moduleCount, 3);
  assert.equal(first.totalLines, 5);
  assert.deepEqual(first.modules.map(module => module.path), ['adapters/editor.mjs', 'adapters/home.mjs', 'engine/core.js']);
  assert.deepEqual(first.violations, []);
  assert.doesNotMatch(architectureReportJson(first), /(?:generatedAt|timestamp|[A-Z]:\\|roomcraft-architecture-)/);
});

test('missing entrypoints and import targets fail the guard', t => {
  const report = buildArchitectureReport(fixture(t, {'engine/core.js': null}), contract);
  assert.ok(report.violations.some(issue => issue.code === 'MISSING_ENTRYPOINT' && issue.path === 'engine/core.js'));
  assert.equal(report.violations.filter(issue => issue.code === 'MISSING_IMPORT').length, 2);
});

test('removing the editor shared-model edge fails even when the replacement is valid JS', t => {
  const report = buildArchitectureReport(fixture(t, {'adapters/editor.mjs': 'export const duplicateModel = value => value;\n'}), contract);
  assert.equal(report.violations.length, 1);
  assert.equal(report.violations[0].code, 'SHARED_CONTRACT');
});

test('pure engine cannot import adapters, packages or computed module paths', t => {
  const report = buildArchitectureReport(fixture(t, {
    'engine/core.js': "import '../adapters/home.mjs';\nimport 'three';\nexport const normalize = value => import(value);\n",
  }), contract);
  assert.equal(report.violations.filter(issue => issue.code === 'ENGINE_BOUNDARY').length, 2);
  assert.ok(report.violations.some(issue => issue.code === 'DYNAMIC_ENGINE_IMPORT'));
});

test('engine API guard recognizes syntax while ignoring comment and string examples', () => {
  const clean = `// fetch(), Date.now(), document.querySelector('a')\nconst description = 'Math.random()';\n(function(root) { root.RoomcraftExample = Object.freeze({description}); })(typeof window === 'undefined' ? globalThis : window);`;
  assert.deepEqual(inspectArchitectureSource('engine/clean.js', clean, {pure: true}).violations, []);
  for (const source of [
    'const noise = Math.random;', 'const time = Date.now();', 'const date = new Date();',
    'const store = root.localStorage;', "const request = globalThis['fetch'];", 'const dom = document;',
    'const environment = process.env;', 'const timer = setTimeout;', 'const live = root.hass;',
    "const random = window.crypto['randomUUID'];",
  ]) {
    assert.ok(inspectArchitectureSource('engine/bad.js', source, {pure: true}).violations.some(issue => issue.code === 'ENGINE_CAPABILITY'), source);
    assert.deepEqual(inspectArchitectureSource('adapters/allowed.js', source).violations, []);
  }
});

test('relative source graph supports TypeScript emitted extension imports and re-exports', t => {
  const report = buildArchitectureReport(fixture(t, {
    'adapters/types.mts': 'export type Value = string;\n',
    'adapters/view.ts': "export type {Value} from './types.mjs';\n",
  }), contract);
  assert.deepEqual(report.violations, []);
  assert.equal(report.modules.find(module => module.path === 'adapters/view.ts').imports[0].target, 'adapters/types.mts');
});
