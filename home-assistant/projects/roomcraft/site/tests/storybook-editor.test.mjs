import test from 'node:test';
import assert from 'node:assert/strict';
import {pickEditorItem, placeEditorMarkers} from '../ha-local/storybook-editor.mjs';

const item = (id, x, y, w, h, rotation = 0) => ({id, x, y, w, h, rotation});

test('3D selection prioritizes a raised fixture anchor over its support footprint', () => {
  const items = [item('rug', 100, 100, 180, 180), item('table', 100, 100, 80, 50),
    item('lamp', 100, 100, 20, 20)];
  const anchors = new Map([['rug', {x: .5, y: .5}], ['table', {x: .5, y: .43}],
    ['lamp', {x: .5, y: .25}]]);
  assert.equal(pickEditorItem(items, {x: 200, y: 101}, {x: 100, y: 70}, anchors, 400, 400).id, 'lamp');
});

test('3D footprint selection handles rotation and picks furniture above a larger rug', () => {
  const items = [item('rug', 100, 100, 250, 250), item('bed', 100, 100, 140, 60, 90)];
  const anchors = new Map([['rug', {x: .5, y: .5}], ['bed', {x: .5, y: .4}]]);
  assert.equal(pickEditorItem(items, {x: 80, y: 80}, {x: 105, y: 165}, anchors, 400, 400).id, 'bed');
  assert.equal(pickEditorItem(items, {x: 80, y: 80}, {x: 175, y: 100}, anchors, 400, 400).id, 'rug');
});

test('unprojected and distant objects cannot steal an empty-canvas click', () => {
  const items = [item('visible', 100, 100, 20, 20), item('missing', 400, 400, 100, 100)];
  assert.equal(pickEditorItem(items, {x: 20, y: 20}, {x: 400, y: 400},
    new Map([['visible', {x: .5, y: .5}]]), 400, 400), null);
});

test('bottom interface placeholders keep full touch targets without label overlap', () => {
  const anchors = [250, 278, 306].map((x, index) => ({id: String(index), x, y: 310, w: 96, h: 44}));
  const before = structuredClone(anchors);
  const placed = placeEditorMarkers(anchors, 360, 340);
  assert.equal(placed.length, 3);
  assert.deepEqual(anchors, before);
  for (let i = 0; i < placed.length; i++) {
    assert.ok(placed[i].w >= 44 && placed[i].h >= 44);
    for (const other of placed.slice(i + 1)) {
      assert.ok(Math.abs(placed[i].x - other.x) >= (placed[i].w + other.w) / 2 + 2 ||
        Math.abs(placed[i].y - other.y) >= (placed[i].h + other.h) / 2 + 2);
    }
  }
});
