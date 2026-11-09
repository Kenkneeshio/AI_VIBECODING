import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const inventorySource = readFileSync(new URL('../public/inventory.js', import.meta.url), 'utf8');
const artSource = readFileSync(new URL('../public/object-art.js', import.meta.url), 'utf8');
const layoutSchemaUrl = new URL('../../layout.schema.json', import.meta.url);
const layoutSchema = existsSync(fileURLToPath(layoutSchemaUrl))
  ? JSON.parse(readFileSync(layoutSchemaUrl, 'utf8'))
  : null;

const palettes = {
  blush: { base: '#dbb2a9', accent: '#f1d6cc', detail: '#fff1e4', dark: '#a67b79' },
  mint: { base: '#95c8b5', accent: '#d6eee0', detail: '#f5f9e9', dark: '#4f8b7c' },
  oak: { base: '#bd8b62', accent: '#e2b786', detail: '#f5dfb7', dark: '#74523c' },
  cream: { base: '#e2d5bd', accent: '#f5eada', detail: '#fff9ec', dark: '#998972' },
  teddy: { base: '#a98263', accent: '#cfab84', detail: '#ead5ae', dark: '#654c3d' },
  sage: { base: '#9bb599', accent: '#dce8cc', detail: '#f5edcf', dark: '#5b755e' },
  white: { base: '#e8e9de', accent: '#f8f8ee', detail: '#ffffff', dark: '#929990' },
  butter: { base: '#e2c681', accent: '#f4e3af', detail: '#fff6dc', dark: '#a58a4e' },
  lavender: { base: '#b6a8cf', accent: '#e4ddf0', detail: '#f6eff6', dark: '#756b9b' },
  sky: { base: '#98c5d7', accent: '#d5ebf0', detail: '#f5f8f2', dark: '#557e91' },
  peach: { base: '#e4ac94', accent: '#f6d5ba', detail: '#fff2dc', dark: '#ad7569' }
};

const recipes = [
  ['living', 'cuteFurniture', 'cloudSofa', 'cloud-sofa', 175, 120, ['blush', 'mint'], 'sofa'],
  ['living', 'cuteFurniture', 'petalDining', 'petal-dining-set', 168, 112, ['oak', 'cream'], 'dining'],
  ['living', 'cuteFurniture', 'acornChair', 'acorn-armchair', 88, 88, ['teddy', 'sage', 'blush'], 'armchair'],
  ['living', 'cuteFurniture', 'lilyCoffee', 'lily-coffee-table', 110, 70, ['oak', 'white'], 'coffee table'],
  ['living', 'cuteFurniture', 'bubbleSide', 'bubble-side-table', 58, 58, ['mint', 'butter'], 'side table'],
  ['bedroom', 'cuteFurniture', 'moonBed', 'moon-bed', 210, 185, ['lavender', 'sky', 'cream'], 'bed'],
  ['bedroom', 'cuteFurniture', 'sproutDesk', 'sprout-desk', 180, 84, ['sage', 'oak'], 'desk'],
  ['bedroom', 'cuteFurniture', 'starNightstand', 'star-nightstand', 58, 56, ['butter', 'lavender'], 'nightstand'],
  ['bedroom', 'cuteFurniture', 'honeyDresser', 'honey-dresser', 125, 60, ['oak', 'peach'], 'dresser'],
  ['bedroom', 'cuteFurniture', 'storyBookcase', 'story-bookcase', 64, 156, ['oak', 'mint'], 'bookcase'],
  ['lighting', 'cuteLight', 'budLamp', 'bud-table-lamp', 48, 52, ['mint', 'blush', 'butter'], 'table lamp'],
  ['lighting', 'cuteLight', 'cloudFloorLamp', 'cloud-floor-lamp', 58, 94, ['cream', 'sky'], 'floor lamp'],
  ['lighting', 'cuteLight', 'bloomCeiling', 'bloom-ceiling-light', 60, 60, ['white', 'butter', 'mint'], 'ceiling light'],
  ['lighting', 'cuteLight', 'starPendant', 'star-pendant', 72, 72, ['lavender', 'butter'], 'pendant'],
  ['lighting', 'cuteLight', 'acornSconce', 'acorn-wall-sconce', 38, 50, ['oak', 'cream'], 'wall sconce']
];

const expected = recipes.flatMap(([group, artFamily, form, key, w, h, colors, semanticTag]) =>
  colors.map(color => ({
    type: `${group}-${key}-${color}`,
    group, artFamily, form, w, h, color, semanticTag
  })));

function loadRuntime() {
  const window = { dispatchEvent() {} };
  class Image {
    complete = true;
    naturalWidth = 0;
    addEventListener() {}
  }
  runInNewContext(inventorySource, { window });
  runInNewContext(artSource, { window, Image, Event: class Event {} });
  return window;
}

function makeCanvas() {
  let operations = 0;
  const gradient = { addColorStop() { operations++; } };
  const target = {};
  const canvas = new Proxy(target, {
    get(object, key) {
      if (key === 'operationCount') return operations;
      if (key === 'createLinearGradient' || key === 'createRadialGradient') {
        return () => { operations++; return gradient; };
      }
      if (!(key in object)) object[key] = () => { operations++; };
      return object[key];
    },
    set(object, key, value) {
      operations++;
      object[key] = value;
      return true;
    }
  });
  return canvas;
}

function renderPass(window, scale = 1, rotation = 0) {
  const counts = new Map();
  for (const descriptor of expected) {
    const canvas = makeCanvas();
    const object = {
      id: `test-${descriptor.type}`,
      type: descriptor.type,
      name: descriptor.type,
      x: 500,
      y: 400,
      w: descriptor.w * scale,
      h: descriptor.h * scale,
      rotation
    };
    assert.equal(window.RoomcraftObjectArt.draw(canvas, object), true,
      `${descriptor.type} must have a vector render path`);
    assert.ok(canvas.operationCount >= 20,
      `${descriptor.type} must render as authored art rather than a placeholder`);
    counts.set(descriptor.type, canvas.operationCount);
  }
  return counts;
}

test('cute furniture and light catalog is stable, complete, and original-data driven', () => {
  const window = loadRuntime();
  const catalog = window.RoomcraftInventory.templates;
  const catalogByType = new Map(catalog.map(entry => [entry.type, entry]));
  const cuteEntries = catalog.filter(entry => entry.artFamily === 'cuteFurniture' || entry.artFamily === 'cuteLight');

  assert.equal(expected.length, 34);
  assert.equal(cuteEntries.length, expected.length, 'the catalog must contain exactly the reviewed cute collection');
  assert.equal(new Set(catalog.map(entry => entry.type)).size, catalog.length, 'all inventory type IDs must be unique');

  for (const descriptor of expected) {
    const entry = catalogByType.get(descriptor.type);
    assert.ok(entry, `missing stable catalog type ${descriptor.type}`);
    assert.equal(entry.group, descriptor.group, `${descriptor.type} group`);
    assert.equal(entry.artFamily, descriptor.artFamily, `${descriptor.type} art family`);
    assert.equal(entry.form, descriptor.form, `${descriptor.type} art form`);
    assert.equal(entry.w, descriptor.w, `${descriptor.type} default width`);
    assert.equal(entry.h, descriptor.h, `${descriptor.type} default height`);
    assert.deepEqual(JSON.parse(JSON.stringify(entry.palette)), palettes[descriptor.color],
      `${descriptor.type} must use the named deterministic palette`);
    for (const tag of ['cute', 'rounded', 'toy-like', 'cozy', 'creature-world', 'dollhouse', 'original']) {
      assert.match(entry.tags, new RegExp(`\\b${tag.replace('-', '\\-')}\\b`, 'i'), `${descriptor.type} tag ${tag}`);
    }
    const searchableText = `${entry.type} ${entry.label} ${entry.tags}`;
    for (const token of descriptor.semanticTag.split(' ')) {
      assert.match(searchableText, new RegExp(`\\b${token}\\b`, 'i'), `${descriptor.type} searchable semantic ${token}`);
    }
  }
});

test('cute catalog art renders deterministically at default and compact rotated sizes', () => {
  const window = loadRuntime();
  const first = renderPass(window);
  const second = renderPass(window);
  assert.deepEqual([...second], [...first], 'repeated vector renders must issue the same operations in the same order');

  const compact = renderPass(window, 0.55, 27);
  assert.equal(compact.size, expected.length);
  for (const descriptor of expected) {
    assert.ok(compact.get(descriptor.type) >= 20, `${descriptor.type} must remain authored at compact rotated size`);
  }
});

test('the default movable furniture and light set uses the same authored vector language', () => {
  const window = loadRuntime();
  const sizes = {
    sofa: [165, 238], table: [165, 108], chair: [48, 48], bed: [210, 185], desk: [245, 156],
    armchair: [86, 88], coffeeTable: [105, 66], sideTable: [55, 55], dresser: [122, 58],
    nightstand: [56, 54], bookcase: [58, 156], stool: [42, 42], lamp: [48, 52],
    ceilingLight: [58, 58], pendantLight: [70, 70], floorLamp: [54, 92], tableLamp: [48, 52],
    wallSconce: [38, 50]
  };
  for (const [type, [w, h]] of Object.entries(sizes)) {
    const canvas = makeCanvas();
    assert.equal(window.RoomcraftObjectArt.draw(canvas,
      { id: `default-${type}`, type, name: type, x: 500, y: 400, w, h, rotation: 0 }), true, type);
    assert.ok(canvas.operationCount >= 18, `${type} must not fall back to flat placeholder art`);
  }
});

test('layout v2 documents every supported live light silhouette', () => {
  if (!layoutSchema) return; // Standalone hosted source intentionally excludes project-level docs/schema.
  assert.deepEqual(layoutSchema.$defs.item.properties.lightForm.enum, [
    'table_lamp',
    'bud_lamp',
    'cloud_floor_lamp',
    'bloom_ceiling',
    'star_pendant',
    'acorn_sconce'
  ]);
});
