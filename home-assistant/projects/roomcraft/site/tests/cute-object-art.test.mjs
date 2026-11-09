import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
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

function traceCanvas() {
  const trace = [];
  let gradientId = 0;
  const normalize = value => {
    if (typeof value === 'number') return Number(value.toFixed(6));
    if (Array.isArray(value)) return value.map(normalize);
    if (value?.__gradient) return `gradient:${value.__gradient}`;
    return value;
  };
  const target = {};
  const canvas = new Proxy(target, {
    get(object, key) {
      if (key === 'trace') return trace;
      if (key === 'summary') {
        return () => ({
          operations: trace.length,
          gradients: trace.filter(row => row[0] === 'gradient').length,
          fills: trace.filter(row => row[0] === 'call' && ['fill', 'fillRect'].includes(row[1])).length,
          strokes: trace.filter(row => row[0] === 'call' && ['stroke', 'strokeRect'].includes(row[1])).length,
          saves: trace.filter(row => row[0] === 'call' && row[1] === 'save').length,
          restores: trace.filter(row => row[0] === 'call' && row[1] === 'restore').length
        });
      }
      if (key === 'createLinearGradient' || key === 'createRadialGradient') {
        return (...args) => {
          const id = ++gradientId;
          trace.push(['gradient', key, id, ...args.map(normalize)]);
          return { __gradient: id, addColorStop(stop, color) { trace.push(['stop', id, normalize(stop), color]); } };
        };
      }
      if (!(key in object)) object[key] = (...args) => { trace.push(['call', String(key), ...args.map(normalize)]); };
      return object[key];
    },
    set(object, key, value) {
      trace.push(['set', String(key), normalize(value)]);
      object[key] = value;
      return true;
    }
  });
  return canvas;
}

function render(window, descriptor, scale = 1, rotation = 0) {
  const canvas = traceCanvas();
  const object = {
    id: `test-${descriptor.type}`,
    type: descriptor.type,
    name: descriptor.label,
    x: 500,
    y: 400,
    w: descriptor.w * scale,
    h: descriptor.h * scale,
    rotation
  };
  assert.equal(window.RoomcraftObjectArt.draw(canvas, object), true,
    `${descriptor.type} must have a vector render path`);
  const summary = canvas.summary();
  assert.equal(summary.saves, summary.restores, `${descriptor.type} must balance canvas state`);
  assert.ok(summary.operations < 6000, `${descriptor.type} must stay within the Android-safe operation budget (${summary.operations})`);
  return { trace: canvas.trace, summary };
}

function geometryDigest(trace) {
  const geometry = trace.filter(row => row[0] === 'call' && !['fill', 'stroke', 'save', 'restore', 'clip'].includes(row[1]));
  return createHash('sha256').update(JSON.stringify(geometry)).digest('hex');
}

test('crafted miniature catalog is stable, data driven, and uses realistic material metadata', () => {
  const window = loadRuntime();
  const catalog = window.RoomcraftInventory.templates;
  const crafted = catalog.filter(entry => entry.collectionId === 'crafted-miniature-v1');

  assert.equal(crafted.length, 88);
  assert.equal(new Set(catalog.map(entry => entry.type)).size, catalog.length, 'all inventory type IDs must be unique');
  for (const entry of crafted) {
    assert.ok(['cuteFurniture', 'cuteLight'].includes(entry.artFamily), entry.type);
    for (const key of ['seriesId', 'designId', 'designLabel', 'sizeId', 'sizeLabel', 'finishId', 'finishLabel', 'material']) {
      assert.equal(typeof entry[key], 'string', `${entry.type} ${key}`);
      assert.ok(entry[key].length > 0, `${entry.type} ${key}`);
    }
    for (const color of ['base', 'accent', 'detail', 'dark']) assert.match(entry.palette[color], /^#[0-9a-f]{6}$/i, `${entry.type} ${color}`);
    for (const tag of ['detailed', 'realistic', 'crafted', 'miniature', 'dollhouse', 'original']) {
      assert.match(entry.tags, new RegExp(`\\b${tag}\\b`, 'i'), `${entry.type} tag ${tag}`);
    }
    assert.doesNotMatch(entry.tags, /toy-like|creature-world|pokemon|pokepia/i, `${entry.type} must not encode the rejected or branded direction`);
  }

  for (const legacyType of [
    'living-cloud-sofa-blush', 'living-petal-dining-set-oak', 'bedroom-moon-bed-lavender',
    'bedroom-sprout-desk-sage', 'lighting-bud-table-lamp-mint'
  ]) assert.ok(catalog.some(entry => entry.type === legacyType), `legacy stable type ${legacyType}`);
});

test('every crafted recipe has deterministic material-rich geometry at four transforms', () => {
  const window = loadRuntime();
  const crafted = window.RoomcraftInventory.templates.filter(entry => entry.collectionId === 'crafted-miniature-v1');
  for (const descriptor of crafted) {
    const baseline = render(window, descriptor);
    const repeated = render(window, descriptor);
    assert.deepEqual(repeated.trace, baseline.trace, `${descriptor.type} exact repeated trace`);

    const minimum = descriptor.seriesId === 'bed' ? 120 : descriptor.artFamily === 'cuteLight' ? 45 : 65;
    assert.ok(baseline.summary.operations >= minimum,
      `${descriptor.type} must exceed the detailed construction threshold (${baseline.summary.operations}/${minimum})`);
    assert.ok(baseline.summary.gradients >= 1, `${descriptor.type} must include material lighting`);
    assert.ok(baseline.summary.fills >= 4, `${descriptor.type} must contain layered solid construction`);
    assert.ok(baseline.summary.strokes >= 2, `${descriptor.type} must include seams, grain, joinery, or highlights`);

    for (const [scale, rotation] of [[.55, 27], [1.5, 90], [1, 180]]) {
      const transformed = render(window, descriptor, scale, rotation);
      assert.ok(transformed.summary.operations >= minimum, `${descriptor.type} ${scale}x ${rotation}deg richness`);
    }
  }
});

test('bed catalog exposes real sizes, distinct constructions, and monotonic authored footprints', () => {
  const window = loadRuntime();
  const beds = window.RoomcraftInventory.templates.filter(entry => entry.seriesId === 'bed');
  assert.equal(beds.length, 42);
  assert.deepEqual([...new Set(beds.map(entry => entry.sizeId))].sort(), ['crib', 'full', 'king', 'queen', 'toddler', 'twin']);
  assert.deepEqual([...new Set(beds.map(entry => entry.form))].sort(), [
    'bunkBed', 'canopyBed', 'cribBed', 'daybed', 'moonBed', 'platformBed', 'storageBed', 'toddlerBed', 'upholsteredBed'
  ]);

  const platform = beds.filter(entry => entry.designId === 'platform' && entry.finishId === 'oak');
  const order = ['twin', 'full', 'queen', 'king'];
  assert.deepEqual(Array.from(platform, entry => entry.sizeId), order);
  for (let index = 1; index < platform.length; index++) {
    assert.ok(platform[index].w * platform[index].h > platform[index - 1].w * platform[index - 1].h,
      `${platform[index].sizeLabel} footprint must exceed ${platform[index - 1].sizeLabel}`);
  }

  const queen = beds.filter(entry => entry.sizeId === 'queen' && ['platform', 'upholstered', 'storage', 'canopy', 'moon-quilt'].includes(entry.designId));
  const finishRepresentative = [...new Map(queen.map(entry => [entry.designId, entry])).values()];
  const digests = finishRepresentative.map(entry => geometryDigest(render(window, entry).trace));
  assert.equal(new Set(digests).size, finishRepresentative.length, 'queen constructions must not be renamed recolors');
});

test('the default movable furniture and light set uses the detailed authored renderer', () => {
  const window = loadRuntime();
  const sizes = {
    sofa: [165, 238], table: [165, 108], chair: [48, 48], bed: [210, 185], desk: [245, 156],
    armchair: [86, 88], coffeeTable: [105, 66], sideTable: [55, 55], dresser: [122, 58],
    nightstand: [56, 54], bookcase: [58, 156], stool: [42, 42], lamp: [48, 52],
    ceilingLight: [58, 58], pendantLight: [70, 70], floorLamp: [54, 92], tableLamp: [48, 52],
    wallSconce: [38, 50]
  };
  for (const [type, [w, h]] of Object.entries(sizes)) {
    const descriptor = { type, label: type, w, h };
    const { summary } = render(window, descriptor);
    assert.ok(summary.operations >= 42, `${type} must not fall back to flat placeholder art`);
    assert.ok(summary.gradients >= 1, `${type} material lighting`);
  }
});

test('layout v2 documents every supported live light silhouette', () => {
  if (!layoutSchema) return;
  assert.deepEqual(layoutSchema.$defs.item.properties.lightForm.enum, [
    'table_lamp',
    'bud_lamp',
    'cloud_floor_lamp',
    'bloom_ceiling',
    'star_pendant',
    'acorn_sconce'
  ]);
});
