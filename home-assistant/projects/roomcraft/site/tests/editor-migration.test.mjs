import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const source = readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
const controlsSource = readFileSync(new URL('../public/object-controls.js', import.meta.url), 'utf8');
const storageKey = 'roomcraft.second-floor.v2';
const crop = { x: 0, y: 80, width: 1536, height: 864 };

function boot(savedProject, dashboardRequest, options = {}) {
  const data = new Map([[storageKey, JSON.stringify(savedProject)]]);
  const listeners = new Map();
  const navigation = [];
  const location = {
    pathname: options.pathname || '/local/roomcraft/editor.html',
    origin: options.origin || 'http://ha.test',
    assign(url) { navigation.push(url); }
  };
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
      removeEventListener(name, fn) { if (listeners.get(`${id}:${name}`) === fn) listeners.delete(`${id}:${name}`); },
      getContext() { return drawing; },
      getBoundingClientRect() { return { left: 0, top: 0, width: crop.width + 28, height: crop.height + 28 }; },
      querySelectorAll() { return []; },
      setPointerCapture() {}, setAttribute() {},
      appendChild() {}, remove() {}, focus() {},
      showModal() { this.open = true; }, close() { this.open = false; }
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
  const window = { addEventListener() {}, location, RoomcraftInventory: { templates: [], groups: [] },
    ...(dashboardRequest ? { RoomcraftDashboardBridge: { request: dashboardRequest } } : {}) };
  window.top = window;
  runInNewContext(controlsSource, { window });
  const localStorage = {
    getItem(key) { return data.get(key) ?? null; },
    setItem(key, value) { data.set(key, value); },
    removeItem(key) { data.delete(key); }
  };
  runInNewContext(source, {
    document, window, location, URL, localStorage, Image: ImageStub,
    setTimeout(fn) { fn(); return 1; }, clearTimeout() {},
    requestAnimationFrame(fn) { fn(); },
    AbortSignal, console
  });
  // Input arrives in the 16:9 cropped viewport; the saved item coordinates
  // stay in the original 1536 × 1024 house project.
  const event = (x, y) => ({ clientX: x - crop.x + 14, clientY: y - crop.y + 14, button: 0, pointerId: 1, preventDefault() {} });
  const pointer = (kind, x, y) => listeners.get(`planCanvas:${kind}`)(event(x, y));
  const read = () => JSON.parse(data.get(storageKey));
  return { pointer, read, elements, storage: data, navigation,
    dispatch: (id, kind, event) => listeners.get(`${id}:${kind}`)(event) };
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
  assert.equal(migrated.items.filter(i => i.id.startsWith('fixture-')).length, 7);
  assert.equal(migrated.items.find(i => i.id === 'office-desk-lamp')?.type, 'lamp');
  assert.equal(migrated.items.some(i => i.id === 'fixture-study'), false);
  assert.equal(migrated.items.find(i => i.id === 'i14').x, 1393);

  const reopened = boot(migrated);
  reopened.pointer('pointerdown', 1393, 516);
  reopened.pointer('pointermove', 1373, 516);
  reopened.pointer('pointerup', 1373, 516);
  assert.equal(reopened.read().items.filter(i => i.id === 'i14').length, 1);
  assert.equal(reopened.read().items.filter(i => i.id.startsWith('fixture-')).length, 7);
  assert.equal(reopened.read().items.filter(i => i.id === 'office-desk-lamp').length, 1);
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

test('existing objects gain configurable dashboard button actions without a migration', () => {
  const editor = boot({
    version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair-control', type: 'chair', name: 'Reading chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }]
  });
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointerup', 500, 500);
  const inspector = editor.elements.get('inspectorContent');
  assert.match(inspector.innerHTML, /DASHBOARD BUTTON/);
  assert.match(inspector.innerHTML, /Device entity ID/);
  assert.match(inspector.innerHTML, /Automatic for device/);
  const change = (key, value) => editor.dispatch('inspectorContent', 'change', {
    target: { closest: selector => selector === '[data-prop]' ? { dataset: { prop: key }, value } : null }
  });
  change('entityId', 'light.example_chair');
  change('controlLabel', 'Reading light');
  change('controlIcon', 'mdi:floor-lamp');
  change('tapAction', 'more-info');
  change('holdAction', 'none');
  const chair = editor.read().items.find(i => i.id === 'chair-control');
  assert.equal(chair.entityId, 'light.example_chair');
  assert.equal(chair.controlLabel, 'Reading light');
  assert.equal(chair.controlIcon, 'mdi:floor-lamp');
  assert.equal(chair.tapAction, 'more-info');
  assert.equal(chair.holdAction, 'none');
  assert.match(editor.elements.get('hotspotList').innerHTML, /light.example_chair/);
  change('controlIcon', 'https://example.com/icon.svg');
  assert.equal(editor.read().items.find(i => i.id === 'chair-control').controlIcon, 'mdi:floor-lamp');
  change('tapAction', 'auto');
  assert.equal('tapAction' in editor.read().items.find(i => i.id === 'chair-control'), false);
});

test('invisible button areas can be placed over artwork and saved with a device action', () => {
  const editor = boot({ version: 2, editableReferenceVersion: 2, rooms: [], walls: [], items: [], hotspots: [] });
  editor.dispatch('objectsPanel', 'click', {
    target: { closest: () => ({ dataset: { template: 'controlZone' } }) }
  });
  editor.pointer('pointerdown', 450, 200);
  const zone = editor.read().items.find(i => i.type === 'controlZone');
  assert.ok(zone);
  assert.equal(zone.w, 120);
  assert.equal(zone.h, 72);
  assert.match(editor.elements.get('inspectorContent').innerHTML, /outline appears only while editing/);
  editor.dispatch('inspectorContent', 'change', {
    target: { closest: selector => selector === '[data-prop]' ? { dataset: { prop: 'entityId' }, value: 'cover.example_window' } : null }
  });
  assert.equal(editor.read().items.find(i => i.id === zone.id).entityId, 'cover.example_window');
});

test('linked objects stay within exportable canvas bounds while decorative items remain free', () => {
  const editor = boot({
    version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'movable-button', type: 'chair', name: 'Device button', x: 500, y: 500, w: 100, h: 100,
      rotation: 0, entityId: 'light.example_device' }]
  });
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', -100, -100);
  editor.pointer('pointerup', -100, -100);
  let item = editor.read().items.find(i => i.id === 'movable-button');
  assert.equal(item.x, 0);
  assert.equal(item.y, 0);
  const change = (key, value) => editor.dispatch('inspectorContent', 'change', {
    target: { closest: selector => selector === '[data-prop]' ? { dataset: { prop: key }, value } : null }
  });
  change('x', '3000');
  change('y', '-500');
  change('w', '3000');
  change('h', '3000');
  item = editor.read().items.find(i => i.id === 'movable-button');
  assert.deepEqual([item.x, item.y, item.w, item.h], [1536, 0, 1536, 1024]);
  change('entityId', '');
  change('x', '-300');
  change('w', '3000');
  item = editor.read().items.find(i => i.id === 'movable-button');
  assert.equal(item.x, -300);
  assert.equal(item.w, 3000);
  change('entityId', 'light.example_device');
  item = editor.read().items.find(i => i.id === 'movable-button');
  assert.equal(item.x, 0);
  assert.equal(item.w, 1536);
});

test('resizing a linked hit area cannot exceed dashboard geometry limits', () => {
  const editor = boot({
    version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'resize-button', type: 'controlZone', name: 'Window button', x: 500, y: 500, w: 100, h: 100,
      rotation: 0, entityId: 'cover.example_window' }]
  });
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointerup', 500, 500);
  editor.pointer('pointerdown', 557, 557);
  editor.pointer('pointermove', 3000, 3000);
  editor.pointer('pointerup', 3000, 3000);
  const zone = editor.read().items.find(i => i.id === 'resize-button');
  assert.ok(zone.w <= 1536);
  assert.ok(zone.h <= 1024);
  assert.ok(zone.x >= 0 && zone.x <= 1536);
  assert.ok(zone.y >= 0 && zone.y <= 1024);
});

test('startup loads the live dashboard over a stale v2 draft and keeps it recoverable', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const remote = { ...local, items: [{ ...local.items[0], x: 620 }] };
  const editor = boot(local, async () => ({ revision: 'dashboard-1', project: remote, hotspots: [] }));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 620);
  assert.equal(JSON.parse(editor.storage.get('roomcraft.second-floor.dashboard-replaced-draft.v2')).items[0].x, 500);
  assert.equal(editor.elements.get('recoverDraftButton').hidden, false);
  editor.dispatch('recoverDraftButton', 'click', {});
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 500);
  editor.dispatch('returnPreRecoveryButton', 'click', {});
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 620);
});

test('startup never replaces edits made while a dashboard read is in flight', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const editor = boot(local, () => pending);
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', 540, 500);
  editor.pointer('pointerup', 540, 500);
  finish({ revision: 'dashboard-2', project: { ...local, items: [{ ...local.items[0], x: 620 }] }, hotspots: [] });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 540);
  assert.equal(editor.storage.has('roomcraft.second-floor.dashboard-replaced-draft.v2'), false);
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /Browser edits kept/);
});

test('startup keeps an unfinished drag when the dashboard responds', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  let finish;
  const pending = new Promise(resolve => { finish = resolve; });
  const editor = boot(local, () => pending);
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', 540, 500);
  finish({ revision: 'dashboard-3', project: { ...local, items: [{ ...local.items[0], x: 620 }] }, hotspots: [] });
  await new Promise(resolve => setImmediate(resolve));
  editor.pointer('pointerup', 540, 500);
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 540);
  assert.equal(editor.storage.has('roomcraft.second-floor.dashboard-replaced-draft.v2'), false);
});

test('matching browser and dashboard layouts do not create a redundant recovery copy', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(local, async () => ({ revision: 'dashboard-4', project: local, hotspots: [] }));
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 500);
  assert.equal(editor.storage.has('roomcraft.second-floor.dashboard-replaced-draft.v2'), false);
});

test('startup keeps a browser draft if Home Assistant is unreachable', async () => {
  const local = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(local, async () => { throw new Error('Offline'); });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(editor.read().items.find(i => i.id === 'chair').x, 500);
  assert.match(editor.elements.get('dashboardTransferStatus').textContent, /browser layout kept: Offline/);
});

test('Dashboard header returns to the actual Home Assistant plan in both editor contexts', async () => {
  const project = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [], items: [] };
  const source = 'https://ha.example/second-floor/plan';
  const response = async () => ({ revision: 'current', project, hotspots: [], source });
  const hosted = boot(project, response);
  const cloud = boot(project, response, { pathname: '/editor', origin: 'https://studio.example' });
  await new Promise(resolve => setImmediate(resolve));
  await hosted.dispatch('backDashboardButton', 'click', {});
  await cloud.dispatch('backDashboardButton', 'click', {});
  assert.deepEqual(hosted.navigation, ['http://ha.test/second-floor/plan']);
  assert.deepEqual(cloud.navigation, [source]);
});

test('Dashboard return keeps unpublished edits in the browser and allows cancellation', async () => {
  const project = { version: 2, editableReferenceVersion: 2, rooms: [], walls: [], hotspots: [],
    items: [{ id: 'chair', type: 'chair', name: 'Chair', x: 500, y: 500, w: 48, h: 48, rotation: 0, entityId: '' }] };
  const editor = boot(project, async () => ({ revision: 'current', project, hotspots: [], source: 'http://ha.test/second-floor/plan' }));
  await new Promise(resolve => setImmediate(resolve));
  editor.pointer('pointerdown', 500, 500);
  editor.pointer('pointermove', 540, 500);
  editor.pointer('pointerup', 540, 500);
  const firstReturn = editor.dispatch('backDashboardButton', 'click', {});
  assert.equal(editor.elements.get('confirmationDialog').open, true);
  editor.dispatch('confirmationCancel', 'click', {});
  await firstReturn;
  assert.deepEqual(editor.navigation, []);
  const secondReturn = editor.dispatch('backDashboardButton', 'click', {});
  editor.dispatch('confirmationAccept', 'click', {});
  await secondReturn;
  assert.deepEqual(editor.navigation, ['http://ha.test/second-floor/plan']);
  assert.equal(editor.read().items.find(item => item.id === 'chair').x, 540);
});
