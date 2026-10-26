'use strict';

// A portable, reviewable copy tree for /config/www. Never contacts or edits HA.
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const {root, sourceFiles, verifySource} = require('./verify-source.cjs');

function destination(relative) {
  return relative.startsWith('examples/') ? relative : `www/${relative}`;
}

function hash(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

const asciiSort = (a, b) => a.relative < b.relative ? -1 : a.relative > b.relative ? 1 : 0;
const panelImports = /\bimport\s+(?:[^'";]*?\s+from\s+)?['"]([^'"]+)['"]/g;

function importFile(specifier) {
  if (specifier.startsWith('./')) return path.posix.normalize(`www/ishioho/${specifier.split('?')[0].slice(2)}`);
  if (specifier.startsWith('/local/')) return `www/${specifier.slice('/local/'.length).split('?')[0]}`;
  assert.fail(`Unexpected panel import: ${specifier}`);
}

function safeBundlePath(bundle, portable) {
  assert.ok(['release.json', 'START-HERE.txt'].includes(portable) || /^(?:www|examples)\/[A-Za-z0-9._/-]+$/.test(portable), `Invalid manifest path: ${portable}`);
  const parts = portable.split('/');
  assert.ok(parts.every(part => part !== '.' && part !== '..' && part.length > 0), `Unsafe manifest path: ${portable}`);
  const full = path.join(bundle, ...parts);
  assert.ok(!path.relative(bundle, full).startsWith('..'), `Path escapes bundle: ${portable}`);
  return full;
}

function releaseMetadata(bundle, entries) {
  const payload = entries.filter(entry => entry.relative !== 'release.json').sort(asciiSort);
  const digest = crypto.createHash('sha256');
  for (const entry of payload) digest.update(`${entry.relative}\0${entry.sha256}\n`, 'utf8');
  const revision = digest.digest('hex');
  const panel = fs.readFileSync(path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js'), 'utf8');
  const panelHash = hash(path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js'));
  const imports = [];
  for (const [, specifier] of panel.matchAll(panelImports)) {
    const relative = importFile(specifier);
    const item = payload.find(entry => entry.relative === relative);
    assert.ok(item, `Import missing from bundle: ${specifier}`);
    assert.equal(specifier.split('?')[1], `v=${item.sha256.slice(0, 12)}`, `Import cache key does not match packaged file: ${specifier}`);
    imports.push({specifier, file: relative, sha256: item.sha256});
  }
  return {
    schema_version: 1,
    package_revision: `sha256:${revision}`,
    recommended_resource_url: `/local/ishioho/ishioho-panel.js?v=${panelHash.slice(0, 12)}`,
    panel_imports: imports
  };
}

function rewritePanelImports(bundle, entries) {
  const file = path.join(bundle, 'www', 'ishioho', 'ishioho-panel.js');
  let count = 0;
  const revised = fs.readFileSync(file, 'utf8').replace(/(\bimport\s+(?:[^'";]*?\s+from\s+)?['"])([^'"]+)(['"])/g, (_, before, specifier, after) => {
    const relative = importFile(specifier);
    const imported = entries.find(entry => entry.relative === relative);
    assert.ok(imported, `Import missing from bundle: ${specifier}`);
    count++;
    return `${before}${specifier.split('?')[0]}?v=${imported.sha256.slice(0, 12)}${after}`;
  });
  assert.ok(count >= 5, 'The entry module did not include all expected local imports');
  fs.writeFileSync(file, revised, 'utf8');
  const panel = entries.find(entry => entry.relative === 'www/ishioho/ishioho-panel.js');
  panel.sha256 = hash(file);
}

function bundleFiles(directory, prefix = '') {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap(entry => {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) return bundleFiles(path.join(directory, entry.name), relative);
    assert.ok(entry.isFile(), `Unexpected symlink or special file: ${relative}`);
    return [relative];
  });
}

function verifyBundle(bundle) {
  const base = path.resolve(bundle);
  const manifest = fs.readFileSync(path.join(base, 'SHA256SUMS'), 'utf8');
  const listed = new Set(), entries = [];
  for (const line of manifest.trimEnd().split(/\r?\n/)) {
    const match = /^([0-9a-f]{64})  (.+)$/.exec(line);
    assert.ok(match, `Malformed SHA256SUMS entry: ${line}`);
    const [, expected, relative] = match;
    assert.ok(!listed.has(relative), `Duplicate SHA256SUMS entry: ${relative}`);
    listed.add(relative);
    const file = safeBundlePath(base, relative);
    assert.ok(fs.lstatSync(file).isFile(), `Missing or unsafe bundle file: ${relative}`);
    assert.equal(hash(file), expected, `Checksum mismatch: ${relative}`);
    entries.push({relative, sha256: expected});
  }
  const actual = bundleFiles(base).filter(name => name !== 'SHA256SUMS').sort();
  assert.deepEqual(actual, [...listed].sort(), 'Bundle contains missing or unlisted files');
  const metadata = JSON.parse(fs.readFileSync(path.join(base, 'release.json'), 'utf8'));
  assert.deepEqual(metadata, releaseMetadata(base, entries), 'Release metadata does not match packaged source and imports');
  return listed.size;
}

function stageInstall(output) {
  verifySource();
  const target = path.resolve(output), parent = path.dirname(target);
  assert.ok(fs.existsSync(parent) && fs.statSync(parent).isDirectory(), `Output parent must exist: ${parent}`);
  assert.ok(!fs.existsSync(target), `Output already exists; refusing to overwrite: ${target}`);
  const temp = fs.mkdtempSync(path.join(parent, '.ishioho-stage-'));
  try {
    const entries = sourceFiles().map(relative => ({source: relative, target: destination(relative)})).sort((a, b) => a.target < b.target ? -1 : a.target > b.target ? 1 : 0);
    const payload = [];
    for (const entry of entries) {
      const source = path.join(root, entry.source), file = safeBundlePath(temp, entry.target);
      fs.mkdirSync(path.dirname(file), {recursive: true});
      fs.copyFileSync(source, file);
      payload.push({relative: entry.target, sha256: hash(file)});
    }
    rewritePanelImports(temp, payload);
    const panelHash = hash(path.join(temp, 'www', 'ishioho', 'ishioho-panel.js'));
    const resource = `/local/ishioho/ishioho-panel.js?v=${panelHash.slice(0, 12)}`;
    const quickstart = [
      'ISHIOHO HOME ASSISTANT INSTALL PACKAGE',
      '',
      '1. Back up your existing dashboard configuration and /config/www/ishioho files.',
      '2. Copy the contents of this package\'s www/ folder into /config/www/.',
      '3. On first install only, copy examples/catalog.json and examples/robot.json',
      '   to /config/www/ishioho/ and edit them with minimal non-sensitive metadata.',
      '   Do not overwrite those installed files during an upgrade.',
      '4. Create a dashboard from examples/dashboard.json, then replace example',
      '   entity IDs and physical room assignments with your own verified IDs.',
      '   The bundled floorplan.json is the default geometry for Stardew. Room',
      '   pins and named fixture anchors follow it after the model loads.',
      '5. Register this JavaScript module resource in Settings > Dashboards:',
      `   ${resource}`,
      '6. Reload the dashboard. Open each room, weather, garage, cameras, and robot',
      '   to verify its location and controls before using it as a daily panel.',
      '',
      'Files under /config/www are served without authentication to anyone who',
      'can reach your Home Assistant. Never put secrets or private registry exports',
      'in catalog.json, robot.json, or floorplan.json. See the GitHub project README.',
      'From the GitHub project source, verify this package with:',
      '   node scripts/stage-install.cjs --verify <this-directory>',
      ''
    ].join('\n');
    fs.writeFileSync(path.join(temp, 'START-HERE.txt'), quickstart, 'utf8');
    payload.push({relative: 'START-HERE.txt', sha256: hash(path.join(temp, 'START-HERE.txt'))});
    const metadata = releaseMetadata(temp, payload);
    fs.writeFileSync(path.join(temp, 'release.json'), `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
    const all = [...payload, {relative: 'release.json', sha256: hash(path.join(temp, 'release.json'))}];
    const lines = all.sort(asciiSort).map(entry => `${entry.sha256}  ${entry.relative}`);
    fs.writeFileSync(path.join(temp, 'SHA256SUMS'), `${lines.join('\n')}\n`, 'utf8');
    verifyBundle(temp);
    assert.ok(!fs.existsSync(target), `Output appeared while staging; refusing to overwrite: ${target}`);
    fs.renameSync(temp, target);
    return {target, files: all.length};
  } finally {
    // Only an owned, uniquely created sibling staging directory can be removed.
    if (fs.existsSync(temp) && path.dirname(temp) === parent && path.basename(temp).startsWith('.ishioho-stage-')) {
      fs.rmSync(temp, {recursive: true});
    }
  }
}

if (require.main === module) {
  try {
    const [action, value, ...extra] = process.argv.slice(2);
    assert.ok(extra.length === 0 && value && ['--output', '--verify'].includes(action), 'Usage: node scripts/stage-install.cjs --output <new-directory> | --verify <bundle-directory>');
    if (action === '--output') {
      const result = stageInstall(value);
      console.log(`Staged ${result.files} files at ${result.target}. Review the synthetic examples before installation.`);
    } else {
      console.log(`Bundle verified: ${verifyBundle(value)} files match SHA256SUMS.`);
    }
  } catch (error) {
    console.error(`Ishioho bundle error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {stageInstall, verifyBundle};
