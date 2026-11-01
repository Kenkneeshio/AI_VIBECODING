import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const inventorySource = readFileSync(new URL('../public/inventory.js', import.meta.url), 'utf8');
const artSource = readFileSync(new URL('../public/object-art.js', import.meta.url), 'utf8');

test('photo-inspired catalog and home controls have working perspective render paths', () => {
  const window = { dispatchEvent() {} };
  class Image {
    complete = true;
    naturalWidth = 0;
    addEventListener() {}
  }
  runInNewContext(inventorySource, { window });
  runInNewContext(artSource, { window, Image, Event: class Event {} });

  let strokes = 0;
  const gradient = { addColorStop() {} };
  const canvas = new Proxy({}, {
    get(target, key) {
      if (key === 'createLinearGradient' || key === 'createRadialGradient') return () => gradient;
      if (key === 'stroke' || key === 'fill') return () => { strokes++; };
      return target[key] ?? (() => {});
    },
    set(target, key, value) { target[key] = value; return true; }
  });
  const templates = window.RoomcraftInventory.templates.filter(t => t.form.startsWith('photo'));
  assert.ok(templates.length >= 16);
  for (const form of ['photoLeafMat', 'photoCheckerMat']) {
    assert.equal(templates.find(t => t.form === form)?.artFamily, 'playMat');
  }
  for (const template of templates) {
    const object = { id: template.type, type: template.type, name: template.label,
      x: 500, y: 400, w: template.w, h: template.h, rotation: 0 };
    assert.equal(window.RoomcraftObjectArt.draw(canvas, object), true, template.type);
  }
  for (const [type, width, height] of [['thermostat', 48, 54], ['windowFan', 46, 46], ['garageDoor', 116, 52]]) {
    const object = { id: type, type, name: type, x: 500, y: 400, w: width, h: height, rotation: 0 };
    assert.equal(window.RoomcraftObjectArt.draw(canvas, object), true, type);
  }
  assert.ok(strokes > templates.length * 5);
});
