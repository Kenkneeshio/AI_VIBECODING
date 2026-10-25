'use strict';

// Validate the public, portable Ishioho source without Home Assistant or npm.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const moduleFiles = [
  'ishioho/ishioho-panel.js',
  'ishioho/ishioho-directory.js',
  'ishioho/ishioho-environment.js',
  'ishioho/ishioho-style.js',
  'ishioho/ishioho-weather-visuals.js',
  'pallet-house/pallet-panel.js'
];
const baseFiles = [
  ...moduleFiles,
  'ishioho/room-positions.json',
  'pallet-house/house-map.svg',
  'pallet-house/press-start.ttf',
  'pallet-house/font-OFL.txt',
  'examples/dashboard.json',
  'examples/catalog.json',
  'examples/robot.json'
];
const artName = /^(?:pokemon|pokedex|crossing|stardew)(?:-night)?-(?:map|still)(?:-v\d+)?\.(?:png|svg)$/;
const activeArt = {
  pokemon: {extension: 'png', suffix: '-v8'},
  pokedex: {extension: 'svg', suffix: ''},
  crossing: {extension: 'svg', suffix: ''},
  stardew: {extension: 'png', suffix: '-v1'}
};

function sourceFiles() {
  const art = fs.readdirSync(path.join(root, 'ishioho')).filter(name => artName.test(name)).sort();
  return [...baseFiles, ...art.map(name => `ishioho/${name}`)];
}

function read(relative) {
  const file = path.join(root, relative);
  const info = fs.lstatSync(file);
  assert.ok(info.isFile(), `Missing or symlinked source file: ${relative}`);
  assert.ok(info.size > 0, `Empty source file: ${relative}`);
  return fs.readFileSync(file);
}

function verifyArtwork(relative) {
  const data = read(relative);
  if (relative.endsWith('.png')) {
    assert.ok(data.length > 24 && data.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex')), `Invalid PNG signature: ${relative}`);
    assert.equal(data.toString('ascii', 12, 16), 'IHDR', `Missing PNG IHDR: ${relative}`);
    const width = data.readUInt32BE(16), height = data.readUInt32BE(20);
    assert.ok(width > 0 && height > 0 && Math.abs(width / height - 2) < 0.01, `Unexpected PNG dimensions: ${relative} (${width}x${height})`);
  } else {
    const text = data.toString('utf8');
    assert.match(text, /<svg\b[^>]*\bviewBox="[^"]+"/, `Missing SVG viewBox: ${relative}`);
    assert.match(text, /<\/svg>\s*$/, `Incomplete SVG: ${relative}`);
  }
}

function verifySource() {
  for (const relative of sourceFiles()) read(relative);
  for (const relative of moduleFiles) {
    const source = read(relative).toString('utf8');
    // The entry module must import files included in the staged /config/www tree.
    for (const [, specifier] of source.matchAll(/\bimport\s+(?:[^'";]*?\s+from\s+)?['"]([^'"]+)['"]/g)) {
      if (specifier.startsWith('./')) {
        const local = path.posix.normalize(path.posix.join(path.posix.dirname(relative), specifier.split('?')[0]));
        assert.ok(sourceFiles().includes(local), `Unbundled import ${specifier} in ${relative}`);
      } else if (specifier.startsWith('/local/')) {
        const local = specifier.slice('/local/'.length).split('?')[0];
        assert.ok(sourceFiles().includes(local), `Unbundled Home Assistant import ${specifier} in ${relative}`);
      } else {
        assert.fail(`Unexpected external import ${specifier} in ${relative}`);
      }
    }
  }

  const dashboard = JSON.parse(read('examples/dashboard.json'));
  const catalog = JSON.parse(read('examples/catalog.json'));
  const robot = JSON.parse(read('examples/robot.json'));
  const positions = JSON.parse(read('ishioho/room-positions.json'));
  assert.ok(Array.isArray(dashboard.views) && dashboard.views.length > 0, 'Dashboard has no views');
  const paths = new Set(), themes = new Set();
  for (const view of dashboard.views) {
    assert.ok(typeof view.path === 'string' && !paths.has(view.path), `Duplicate or missing view path: ${view.path}`);
    paths.add(view.path);
    assert.equal(view.type, 'panel', `Expected panel view: ${view.path}`);
    assert.ok(Array.isArray(view.cards) && view.cards.length === 1, `Expected one card in ${view.path}`);
    const card = view.cards[0];
    assert.equal(card.type, 'custom:ishioho-panel', `Wrong card type in ${view.path}`);
    assert.ok(Object.hasOwn(activeArt, card.theme), `Unknown theme in ${view.path}`);
    themes.add(card.theme);
    assert.ok(Array.isArray(card.rooms) && card.rooms.length > 0, `Missing rooms in ${view.path}`);
    const rooms = new Set();
    for (const room of card.rooms) {
      assert.ok(typeof room.id === 'string' && !rooms.has(room.id), `Duplicate room in ${view.path}: ${room.id}`);
      rooms.add(room.id);
      assert.ok(Number.isFinite(room.x) && room.x >= 0 && room.x <= 100 && Number.isFinite(room.y) && room.y >= 0 && room.y <= 100, `Invalid room position ${room.id} in ${view.path}`);
    }
  }
  assert.deepEqual([...themes].sort(), Object.keys(activeArt).sort(), 'Each bundled theme needs a dashboard view');
  assert.equal(catalog.synthetic, true, 'Catalog example must remain labelled synthetic');
  assert.ok(Array.isArray(catalog.entities) && Array.isArray(catalog.areas), 'Invalid catalog example structure');
  assert.equal(robot.synthetic, true, 'Robot example must remain labelled synthetic');
  assert.ok(Array.isArray(robot.room_segments), 'Invalid robot example structure');
  assert.ok(positions.room_pin_percent && typeof positions.room_pin_percent === 'object', 'Missing room position metadata');

  for (const [theme, profile] of Object.entries(activeArt)) {
    for (const night of ['', '-night']) for (const kind of ['map', 'still']) {
      verifyArtwork(`ishioho/${theme}${night}-${kind}${profile.suffix}.${profile.extension}`);
    }
  }
  for (const relative of sourceFiles().filter(name => name.endsWith('.svg') || name.endsWith('.png'))) verifyArtwork(relative);
  const font = read('pallet-house/press-start.ttf');
  assert.equal(font.readUInt32BE(0), 0x00010000, 'Unexpected font format');
  assert.match(read('pallet-house/font-OFL.txt').toString('utf8'), /SIL OPEN FONT LICENSE/i, 'Missing font license');
  return {files: sourceFiles().length, views: dashboard.views.length, themes: themes.size};
}

if (require.main === module) {
  try {
    const result = verifySource();
    console.log(`Ishioho source verified: ${result.files} files, ${result.views} views, ${result.themes} themes.`);
  } catch (error) {
    console.error(`Ishioho source verification failed: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {root, sourceFiles, verifySource};
