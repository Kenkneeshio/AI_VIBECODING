'use strict';

// The release staging workflow must work offline from a clean source checkout.
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {verifySource} = require('../scripts/verify-source.cjs');
const {stageInstall, verifyBundle} = require('../scripts/stage-install.cjs');

const tests = [];
const test = (name, fn) => tests.push([name, fn]);
const tempRoot = fs.realpathSync(os.tmpdir());
const sandbox = fs.mkdtempSync(path.join(tempRoot, 'ishioho-bundle-tests-'));
const bundle = path.join(sandbox, 'install');
const secondBundle = path.join(sandbox, 'install-again');

test('all imports, four theme asset variants, standard art formats, and synthetic JSON validate offline', () => {
  const result = verifySource();
  assert.equal(result.views, 4);
  assert.equal(result.themes, 4);
  assert.ok(result.files >= 40);
});

test('staging produces relative /www files, separate examples, and a complete SHA-256 manifest', () => {
  const result = stageInstall(bundle);
  assert.equal(result.target, bundle);
  assert.ok(fs.existsSync(path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js')));
  for (const kind of ['map', 'still', 'night-map', 'night-still']) {
    assert.ok(fs.existsSync(path.join(bundle, 'www', 'ishioho', `stardew-${kind}-v2.png`)), `Active Stardew ${kind} v2 PNG`);
    assert.ok(fs.existsSync(path.join(bundle, 'www', 'ishioho', `stardew-${kind}-v1.png`)), `Historical Stardew ${kind} v1 PNG`);
    assert.ok(fs.existsSync(path.join(bundle, 'www', 'ishioho', `stardew-${kind}-v1.svg`)), `Historical Stardew ${kind} v1 SVG`);
  }
  assert.ok(fs.existsSync(path.join(bundle, 'www', 'pallet-house', 'font-OFL.txt')));
  assert.ok(fs.existsSync(path.join(bundle, 'examples', 'dashboard.json')));
  assert.ok(fs.existsSync(path.join(bundle, 'examples', 'catalog.json')));
  const quickstart = fs.readFileSync(path.join(bundle, 'START-HERE.txt'), 'utf8');
  assert.match(quickstart, /Back up your existing dashboard/);
  assert.match(quickstart, /without authentication/);
  const release = JSON.parse(fs.readFileSync(path.join(bundle, 'release.json'), 'utf8'));
  assert.match(release.package_revision, /^sha256:[0-9a-f]{64}$/);
  const panelHash = crypto.createHash('sha256').update(fs.readFileSync(path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js'))).digest('hex');
  assert.equal(release.recommended_resource_url, `/local/ishioho/ishioho-panel.js?v=${panelHash.slice(0, 12)}`);
  assert.ok(quickstart.includes(release.recommended_resource_url));
  assert.ok(release.panel_imports.some(item => item.specifier.startsWith('./ishioho-environment.js?v=')));
  assert.ok(release.panel_imports.every(item => /^[0-9a-f]{64}$/.test(item.sha256) && item.specifier.endsWith(`?v=${item.sha256.slice(0, 12)}`)));
  assert.ok(!fs.existsSync(path.join(bundle, 'www', 'ishioho', 'catalog.json')), 'Do not overwrite installed user-specific catalog metadata on upgrade');
  assert.ok(!fs.existsSync(path.join(bundle, 'www', 'ishioho', 'robot.json')), 'Do not overwrite installed user-specific robot metadata on upgrade');
  assert.equal(verifyBundle(bundle), result.files);
});

test('verification checks release import metadata after a manifest rehash', () => {
  const file = path.join(bundle, 'release.json');
  const original = fs.readFileSync(file, 'utf8');
  const release = JSON.parse(original);
  release.panel_imports[0].sha256 = '0'.repeat(64);
  fs.writeFileSync(file, `${JSON.stringify(release, null, 2)}\n`);
  const manifestFile = path.join(bundle, 'SHA256SUMS');
  const manifest = fs.readFileSync(manifestFile, 'utf8');
  const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  fs.writeFileSync(manifestFile, manifest.replace(/^[0-9a-f]{64}  release\.json$/m, `${hash}  release.json`));
  assert.throws(() => verifyBundle(bundle), /Release metadata does not match/);
  fs.writeFileSync(file, original);
  fs.writeFileSync(manifestFile, manifest);
  assert.doesNotThrow(() => verifyBundle(bundle));
});

test('repeat staging is byte-for-byte deterministic and does not rewrite GitHub source', () => {
  const sourcePanel = path.resolve(__dirname, '..', 'ishioho', 'ishioho-panel.js');
  const original = fs.readFileSync(sourcePanel);
  stageInstall(secondBundle);
  assert.equal(fs.readFileSync(path.join(bundle, 'SHA256SUMS'), 'utf8'), fs.readFileSync(path.join(secondBundle, 'SHA256SUMS'), 'utf8'));
  assert.equal(fs.readFileSync(path.join(bundle, 'release.json'), 'utf8'), fs.readFileSync(path.join(secondBundle, 'release.json'), 'utf8'));
  assert.ok(fs.readFileSync(sourcePanel).equals(original));
});

test('staging refuses to overwrite an existing output directory', () => {
  assert.throws(() => stageInstall(bundle), /refusing to overwrite/);
  assert.ok(fs.existsSync(path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js')));
});

test('verification detects both unlisted files and modified payload bytes', () => {
  const extra = path.join(bundle, 'www', 'ishioho', 'unexpected.txt');
  fs.writeFileSync(extra, 'not in manifest');
  assert.throws(() => verifyBundle(bundle), /missing or unlisted files/);
  fs.unlinkSync(extra);
  fs.appendFileSync(path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js'), '\n');
  assert.throws(() => verifyBundle(bundle), /Checksum mismatch/);
});

let failed = 0;
try {
  for (const [name, fn] of tests) {
    try {
      fn();
      console.log(`PASS ${name}`);
    } catch (error) {
      failed++;
      console.error(`FAIL ${name}\n  ${error.message}`);
    }
  }
} finally {
  const resolved = fs.realpathSync(sandbox);
  assert.ok(path.dirname(resolved) === tempRoot && path.basename(resolved).startsWith('ishioho-bundle-tests-'), 'Unsafe test cleanup target');
  fs.rmSync(resolved, {recursive: true});
}
console.log(`${tests.length - failed}/${tests.length} package tests passed. No network or Home Assistant connection used.`);
process.exitCode = failed ? 1 : 0;
