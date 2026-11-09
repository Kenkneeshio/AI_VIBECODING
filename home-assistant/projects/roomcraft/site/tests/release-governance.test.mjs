import assert from 'node:assert/strict';
import { test } from 'node:test';
import { isAbsolute } from 'node:path';
import {
  PROJECT_ROOT,
  REQUIRED_ENGINE_SOURCES,
  SITE_ROOT,
  buildReleaseManifest,
  canonicalInputBytes,
  renderManifest,
  validateEditorScriptOrder
} from '../scripts/roomcraft-release.mjs';

function editorWithScripts(sources) {
  return sources.map(source => `<script src="${source}?v=test"></script>`).join('\n');
}

test('release evidence is byte-identical across consecutive builds', () => {
  const first = buildReleaseManifest(SITE_ROOT, PROJECT_ROOT);
  const second = buildReleaseManifest(SITE_ROOT, PROJECT_ROOT);
  assert.equal(renderManifest(first), renderManifest(second));
  assert.match(first.rootDigest, /^sha256:[a-f0-9]{64}$/);
  assert.equal(first.inputCount, first.inputs.length);
});

test('release evidence is sorted, portable, and free of time or machine fields', () => {
  const manifest = buildReleaseManifest(SITE_ROOT, PROJECT_ROOT);
  const paths = manifest.inputs.map(input => input.path);
  assert.deepEqual(paths, paths.slice().sort((left, right) => left < right ? -1 : left > right ? 1 : 0));
  assert.ok(paths.every(path => !isAbsolute(path) && !path.includes('\\')));
  assert.ok(manifest.inputs.every(input => Number.isSafeInteger(input.bytes) && input.bytes >= 0));
  const serialized = renderManifest(manifest);
  assert.doesNotMatch(serialized, /(?:generatedAt|timestamp|machine|hostname|[A-Z]:\\)/i);
});

test('release evidence follows the high-level to low-level proof order', () => {
  const manifest = buildReleaseManifest(SITE_ROOT, PROJECT_ROOT);
  assert.deepEqual(manifest.evidenceOrder, [
    'customer-outcome',
    'product-contract',
    'engine-and-data',
    'art-and-assets',
    'integrations-and-privacy',
    'automated-verification',
    'deployment-readback',
    'rollback'
  ]);
  assert.equal(manifest.releaseStandard, 'customer-outcome-to-deployment-v1');
});

test('source hashing is independent of Git line-ending checkout policy', () => {
  const path = 'synthetic.js';
  assert.deepEqual(
    canonicalInputBytes(path, Buffer.from('one\r\ntwo\r\n')),
    canonicalInputBytes(path, Buffer.from('one\ntwo\n'))
  );
  const binary = Buffer.from([0, 13, 10, 255]);
  assert.deepEqual(canonicalInputBytes('art.png', binary), binary);
});

test('release evidence covers implementation, verification, configuration, and documentation inputs', () => {
  const paths = new Set(buildReleaseManifest(SITE_ROOT, PROJECT_ROOT).inputs.map(input => input.path));
  const standalone = SITE_ROOT === PROJECT_ROOT;
  const sitePrefix = standalone ? '' : 'site/';
  const requiredPaths = [
    `${sitePrefix}README.md`,
    `${sitePrefix}next.config.ts`,
    `${sitePrefix}package.json`,
    `${sitePrefix}postcss.config.mjs`,
    `${sitePrefix}scripts/build-roomcraft.mjs`,
    `${sitePrefix}scripts/roomcraft-release.mjs`,
    `${sitePrefix}tests/release-governance.test.mjs`,
    `${sitePrefix}tsconfig.json`,
    `${sitePrefix}vendor/shadcn-tailwind-4.13.0.css`,
    `${sitePrefix}vite.config.ts`
  ];
  if (!standalone) requiredPaths.push('docs/release-standard.md');
  for (const requiredPath of requiredPaths) {
    assert.ok(paths.has(requiredPath), `release manifest must include ${requiredPath}`);
  }
});

test('editor engine modules must load in the exact dependency order before raster and app', () => {
  const correctOrder = [...REQUIRED_ENGINE_SOURCES, 'raster-renderer.js', 'app.js'];
  assert.deepEqual(validateEditorScriptOrder(editorWithScripts(correctOrder)), REQUIRED_ENGINE_SOURCES);

  const reordered = [...REQUIRED_ENGINE_SOURCES];
  [reordered[0], reordered[1]] = [reordered[1], reordered[0]];
  assert.throws(
    () => validateEditorScriptOrder(editorWithScripts([...reordered, 'raster-renderer.js', 'app.js'])),
    /editor engine order must be exactly/
  );

  assert.throws(
    () => validateEditorScriptOrder(editorWithScripts([
      ...REQUIRED_ENGINE_SOURCES.slice(0, -1),
      'raster-renderer.js',
      REQUIRED_ENGINE_SOURCES.at(-1),
      'app.js'
    ])),
    /engine modules must load before raster-renderer\.js/
  );
});
