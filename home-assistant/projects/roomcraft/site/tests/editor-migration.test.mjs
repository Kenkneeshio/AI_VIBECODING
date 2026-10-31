import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const source = readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
const storageKey = 'roomcraft.second-floor.v2';

function boot(savedProject) {
  const data = new Map([[storageKey, JSON.stringify(savedProject)]]);
  const listeners = new Map();
  const gradient = { addColorStop() {} };
  const drawing = new Proxy({}, {
    get(target, key) {
      if (key === 'createPattern') return () => ({});
      if (key === 'createLinearGradient') return () => gradient;
      if (key === 'measureText') return () => ({ width: 10 });
      return target[key] ?? (() => {});
    },
    set(target, key, value) { target[key] = value; return true; }
  });
  function element(id = '') {
    return {
      id, style: {}, dataset: {}, classList: { add() {}, remove() {}, toggle() {} },
      addEventListener(name, fn) { listeners.set(`${id}:${name}`, fn); },
      getContext() { return drawing; },
      getBoundingClientRect() { return { left: 0, top: 0, width: 1564, height: 1052 }; },
      querySelectorAll() { return []; },
      setPointerCapture() {}, setAttribute() {},
      appendChild() {}, remove() {}, focus() {}
    };
  }
  const elements = new Map();
  const getElement = id => {
    if (!elements.has(id)) elements.set(id, element(id));
    return elements.get(id);
  };
  const document = {
    getElementById: getElement, createElement: () => element(),
    querySelectorAll: () => [],
    querySelector: () => element(),
    addEventListener() {}, body: element('body')
  };
  class ImageStub {
    complete = false;
    naturalWidth = 0;
    addEventListener() {}
  }
  const window = { addEventListener() {}, RoomcraftInventory: { templates: [], groups: [] } };
  const localStorage = {
    getItem(key) { return data.get(key) ?? null; },
    setItem(key, value) { data.set(key, value); },
    removeItem(key) { data.delete(key); }
  };
  runInNewContext(source, {
    document, window, localStorage, Image: ImageStub,
    setTimeout(fn) { fn(); return 1; }, clearTimeout() {},
    requestAnimationFrame(fn) { fn(); },
    AbortSignal, console
  });
  const event = (x, y) => ({ clientX: x + 14, clientY: y + 14, button: 0, pointerId: 1, preventDefault() {} });
  const pointer = (kind, x, y) => listeners.get(`planCanvas:${kind}`)(event(x, y));
  const read = () => JSON.parse(data.get(storageKey));
  return { pointer, read, elements, dispatch: (id, kind, event) => listeners.get(`${id}:${kind}`)(event) };
}

test('migrates a saved plan into movable lamp and room fixtures without duplicating them', () => {
  const old = { version: 2, rooms: [], walls: [], items: [], hotspots: [] };
  const editor = boot(old);
  editor.pointer('pointerdown', 1443, 476);
  editor.pointer('pointermove', 1393, 516);
  editor.pointer('pointerup', 1393, 516);
  const migrated = editor.read();
  assert.equal(migrated.editableReferenceVersion, 2);
  assert.equal(migrated.items.filter(i => i.id === 'i14').length, 1);
  assert.equal(migrated.items.filter(i => i.id.startsWith('fixture-')).length, 8);
  assert.equal(migrated.items.find(i => i.id === 'i14').x, 1393);

  const reopened = boot(migrated);
  reopened.pointer('pointerdown', 1393, 516);
  reopened.pointer('pointermove', 1373, 516);
  reopened.pointer('pointerup', 1373, 516);
  assert.equal(reopened.read().items.filter(i => i.id === 'i14').length, 1);
  assert.equal(reopened.read().items.filter(i => i.id.startsWith('fixture-')).length, 8);
});

test('a deliberately removed migrated lamp is not respawned on a later load', () => {
  const old = { version: 2, rooms: [], walls: [], items: [], hotspots: [] };
  const editor = boot(old);
  editor.pointer('pointerdown', 1443, 476);
  editor.pointer('pointermove', 1393, 516);
  editor.pointer('pointerup', 1393, 516);
  const migrated = editor.read();
  migrated.items = migrated.items.filter(i => i.id !== 'i14');
  const reopened = boot(migrated);
  reopened.pointer('pointerdown', 660, 330);
  reopened.pointer('pointermove', 675, 345);
  reopened.pointer('pointerup', 675, 345);
  assert.equal(reopened.read().items.some(i => i.id === 'i14'), false);
});

test('the lamp corner handle resizes from the opposite anchored corner', () => {
  const editor = boot({ version: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.pointer('pointerdown', 1443, 476);
  editor.pointer('pointerup', 1443, 476);
  editor.pointer('pointerdown', 1474, 513);
  editor.pointer('pointermove', 1494, 523);
  editor.pointer('pointerup', 1494, 523);
  const lamp = editor.read().items.find(i => i.id === 'i14');
  assert.equal(lamp.w, 68);
  assert.equal(lamp.h, 70);
  assert.equal(lamp.x, 1453);
  assert.equal(lamp.y, 481);
});

test('camera palette places an editable latest-event thumbnail', () => {
  const editor = boot({ version: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.dispatch('objectsPanel', 'click', {
    target: { closest: () => ({ dataset: { template: 'cameraThumbnail' } }) }
  });
  editor.pointer('pointerdown', 260, 390);
  const camera = editor.read().items.find(i => i.type === 'cameraThumbnail');
  assert.ok(camera);
  assert.equal(camera.previewMode, 'event');
  assert.equal(camera.x, 260);
  assert.equal(camera.y, 390);
  assert.equal(camera.w, 170);
  assert.equal(camera.h, 110);
});
