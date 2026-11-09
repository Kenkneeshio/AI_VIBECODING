import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const inventorySource = readFileSync(new URL('../public/inventory.js', import.meta.url), 'utf8');
const variantsSource = readFileSync(new URL('../public/catalog-variants.js', import.meta.url), 'utf8');

function runtime() {
  const window = {};
  runInNewContext(inventorySource, { window });
  runInNewContext(variantsSource, { window });
  return window;
}

test('bed selectors resolve style, size, and finish independently and deterministically', () => {
  const window = runtime();
  const templates = window.RoomcraftInventory.templates;
  const byType = window.RoomcraftInventory.byType;
  const variants = window.RoomcraftCatalogVariants;
  const current = byType['bedroom-platform-bed-queen-oak'];

  const sizes = variants.choices(templates, current, 'size');
  assert.deepEqual(Array.from(sizes, entry => entry.sizeId), ['queen', 'full', 'king', 'twin']);
  assert.ok(sizes.every(entry => entry.designId === 'platform' && entry.finishId === 'oak'));

  const finishes = variants.choices(templates, current, 'finish');
  assert.deepEqual(Array.from(finishes, entry => entry.finishId), ['oak', 'walnut', 'white']);
  assert.ok(finishes.every(entry => entry.designId === 'platform' && entry.sizeId === 'queen'));

  const styles = variants.choices(templates, current, 'style');
  assert.ok(styles.length >= 5);
  assert.ok(styles.every(entry => entry.seriesId === 'bed' && entry.sizeId === 'queen'));
  assert.ok(new Set(styles.map(entry => entry.designId)).has('canopy'));
  assert.ok(new Set(styles.map(entry => entry.designId)).has('upholstered'));
});

test('finish preserves custom geometry while size and style apply authored footprints', () => {
  const window = runtime();
  const byType = window.RoomcraftInventory.byType;
  const variants = window.RoomcraftCatalogVariants;
  const current = byType['bedroom-platform-bed-queen-oak'];
  const item = {
    id: 'bed-1', type: current.type, name: 'My custom bed', x: 444, y: 333,
    w: 199, h: 211, rotation: 27, entityId: 'switch.example', visualKind: 'device'
  };

  const finish = variants.apply(item, current, byType['bedroom-platform-bed-queen-walnut'], 'finish');
  assert.equal(finish.w, 199);
  assert.equal(finish.h, 211);
  assert.equal(finish.name, 'My custom bed');
  assert.equal(finish.rotation, 27);
  assert.equal(finish.entityId, 'switch.example');

  const king = variants.apply(item, current, byType['bedroom-platform-bed-king-oak'], 'size');
  assert.equal(king.w, 226);
  assert.equal(king.h, 205);
  assert.equal(king.x, 444);
  assert.equal(king.y, 333);
  assert.equal(king.rotation, 27);

  const canopy = variants.apply(item, current, byType['bedroom-canopy-bed-queen-white'], 'style');
  assert.equal(canopy.w, 188);
  assert.equal(canopy.h, 205);
  assert.equal(canopy.name, 'My custom bed');
});

test('legacy catalog entries keep their original finish-only grouping', () => {
  const window = runtime();
  const templates = window.RoomcraftInventory.templates;
  const variants = window.RoomcraftCatalogVariants;
  const legacy = templates.find(entry => entry.type === 'baby-toys-soft-ball-sage');
  const choices = variants.legacyFinishChoices(templates, legacy);
  assert.deepEqual(Array.from(choices, entry => entry.type), [
    'baby-toys-soft-ball-butter',
    'baby-toys-soft-ball-peach',
    'baby-toys-soft-ball-sage',
    'baby-toys-soft-ball-sky'
  ]);
  assert.equal(variants.apply({ type: legacy.type }, legacy, choices[0], 'finish'), null,
    'legacy entries continue through the existing editor path');
});
