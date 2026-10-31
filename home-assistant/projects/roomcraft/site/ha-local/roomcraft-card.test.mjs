import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const code = fs.readFileSync(new URL('./roomcraft-card.js', import.meta.url), 'utf8');
let Card;
let Camera;
let ObjectControl;
let EntityMenu;
const registered = new Map();
class FakeNode {
  constructor(tag = 'node') { this.tag = tag; this.children = []; this.style = {}; this.hidden = false; this.attributes = {}; this.listeners = {}; this.value = ''; }
  append(...nodes) { for (const node of nodes) { node.parentNode = this; this.children.push(node); } }
  replaceChildren(...nodes) { this.children = []; this.append(...nodes); }
  remove() { if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(node => node !== this); this.parentNode = null; }
  attachShadow() { this.shadowRoot = new FakeNode('shadow'); return this.shadowRoot; }
  focus() { this.focused = true; }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(name, listener) { this.listeners[name] = listener; }
  dispatchEvent(event) { this.lastEvent = event; return true; }
}
const context = {
  HTMLElement: class extends FakeNode { attachShadow() { this.shadowRoot = new FakeNode('shadow'); return this.shadowRoot; } },
  customElements: {
    get(name) { return registered.get(name); },
    define(name, value) {
      if (registered.has(name)) throw new Error(`Element already registered: ${name}`);
      registered.set(name, value);
      if (name === 'roomcraft-editor-card') Card = value;
      if (name === 'roomcraft-camera-thumbnail') Camera = value;
      if (name === 'roomcraft-object-control') ObjectControl = value;
      if (name === 'roomcraft-entity-menu') EntityMenu = value;
    },
  },
  window: { customCards: [] },
  location: { origin: 'http://ha.example.test' },
  document: { createElement: tag => new FakeNode(tag), body: new FakeNode('body'),
    addEventListener() {}, removeEventListener() {} },
  structuredClone,
  JSON,
  Uint8Array,
  Blob,
  FormData,
  atob,
  URL,
  Date,
  Map,
  CustomEvent,
};
vm.runInNewContext(code, context);

test('resource registration is safe when Home Assistant imports another version', () => {
  assert.doesNotThrow(() => vm.runInNewContext(code, { ...context }));
  assert.equal(registered.get('roomcraft-editor-card'), Card);
  assert.equal(registered.get('roomcraft-camera-thumbnail'), Camera);
  assert.equal(registered.get('roomcraft-object-control'), ObjectControl);
  assert.equal(registered.get('roomcraft-entity-menu'), EntityMenu);
  assert.equal(context.window.customCards.filter(card => card.type === 'roomcraft-editor-card').length, 1);
});

test('LAN bridge replaces a marked camera thumbnail and retains manual overlays', async () => {
  const saved = dashboard();
  saved.views[0].cards[0].elements.push(
    { type: 'custom:roomcraft-camera-thumbnail', roomcraft_item_id: 'door', camera_entity: 'camera.old' },
    { type: 'image', image: '/local/manual.png', style: { left: '80%' } },
  );
  const card = new Card();
  card.hass = {
    connected: true, user: { is_admin: true },
    callWS: async request => {
      if (request.type === 'lovelace/config') return structuredClone(saved);
      if (request.type === 'lovelace/config/save') { Object.assign(saved, structuredClone(request.config)); return null; }
      throw new Error('Unexpected HA command');
    },
    fetchWithAuth: async () => ({ ok: true, json: async () => ({ id: 'b'.repeat(32) }) }),
  };
  const imported = await card._readDashboard();
  const project = { version: 2, rooms: [], walls: [], hotspots: [], items: [
    { id: 'door', type: 'cameraThumbnail', name: 'Entry', x: 260, y: 390, w: 170, h: 110,
      rotation: 0, entityId: 'camera.entry', imageEntityId: 'image.entry_event', previewMode: 'event' },
  ] };
  const exported = await card._writeDashboard({ project, revision: imported.revision, pngDataUrl: pngDataUrl() });
  assert.equal(exported.project.items[0].entityId, 'camera.entry');
  const elements = saved.views[0].cards[0].elements;
  assert.equal(elements.filter(element => element.roomcraft_item_id === 'door').length, 1);
  assert.equal(elements.find(element => element.roomcraft_item_id === 'door').camera_entity, 'camera.entry');
  assert.equal(elements.find(element => element.roomcraft_item_id === 'door').image_entity, 'image.entry_event');
  assert.equal(elements.find(element => element.image === '/local/manual.png').type, 'image');
  assert.equal(elements.find(element => element.entity === 'sensor.time').type, 'state-label');
  assert.equal(saved.views[1].cards[0].title, 'Live');
});

test('LAN bridge rejects invalid camera thumbnail before image upload', async () => {
  let uploads = 0;
  const card = new Card();
  card.hass = {
    connected: true, user: { is_admin: true },
    callWS: async () => dashboard(),
    fetchWithAuth: async () => { uploads++; throw new Error('Unexpected upload'); },
  };
  const imported = await card._readDashboard();
  const invalid = { version: 2, rooms: [], walls: [], hotspots: [], items: [
    { id: 'camera', type: 'cameraThumbnail', x: -5, y: 390, w: 170, h: 110,
      entityId: 'https://outside.example', imageEntityId: 'image.event' },
  ] };
  await assert.rejects(card._writeDashboard({ project: invalid, revision: imported.revision,
    pngDataUrl: pngDataUrl() }), /invalid camera thumbnail/i);
  assert.equal(uploads, 0);
});

test('camera element fetches latest event using HA auth and reports its timestamp', async () => {
  const camera = new Camera();
  camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Front door',
    camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event' });
  const calls = [];
  camera.hass = {
    states: {
      'camera.entry': { state: 'idle' },
      'image.entry_event': { state: '2026-10-31T15:54:00Z', attributes: {
        entity_picture: '/api/image_proxy/image.entry_event?token=private',
      } },
    },
    fetchWithAuth: async url => {
      calls.push(url);
      return { ok: true, blob: async () => new Blob(['jpeg'], { type: 'image/jpeg' }) };
    },
  };
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.deepEqual(calls, ['/api/image_proxy/image.entry_event?token=private']);
  assert.equal(camera._still.hidden, false);
  assert.match(camera._still.src, /^blob:/);
  assert.match(camera._foot.textContent, /^LATEST EVENT · /);
  assert.match(camera._foot.textContent, /Oct 31/);
  camera.disconnectedCallback();
});

test('camera element refuses an external picture URL and falls back without exposing HA auth', async () => {
  const camera = new Camera();
  camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
    camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event' });
  let fetches = 0;
  camera.hass = {
    states: {
      'camera.entry': { state: 'idle' },
      'image.entry_event': { state: '2026-10-31T15:54:00Z', attributes: {
        entity_picture: 'https://outside.example/snapshot.jpg',
      } },
    },
    fetchWithAuth: async () => { fetches++; throw new Error('Unexpected authenticated fetch'); },
  };
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(fetches, 0);
  assert.equal(camera._message.textContent, 'Latest event unavailable');
  assert.equal(camera._still.hidden, true);
});

test('camera element shows a clear fallback when HA image proxy fails', async () => {
  const camera = new Camera();
  camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
    camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event' });
  const hass = {
    states: {
      'camera.entry': { state: 'idle' },
      'image.entry_event': { state: '2026-10-31T15:54:00Z', attributes: {
        entity_picture: '/api/image_proxy/image.entry_event?token=private',
      } },
    },
    fetchWithAuth: async () => ({ ok: false, status: 500 }),
  };
  camera.hass = hass;
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(camera._message.textContent, 'Latest event unavailable');
  assert.match(camera._foot.textContent, /LATEST EVENT · /);
  assert.equal(camera._still.hidden, true);
});

test('camera element uses HA native live view only for a reported active stream', async () => {
  class NativeImage extends FakeNode { setConfig(value) { this.config = value; } }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  try {
    const camera = new Camera();
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
      camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event' });
    let fetches = 0;
    const hass = {
      states: {
        'camera.entry': { state: 'streaming' },
        'image.entry_event': { state: '2026-10-31T15:54:00Z', attributes: {
          entity_picture: '/api/image_proxy/image.entry_event?token=private',
        } },
      },
      fetchWithAuth: async () => { fetches++; throw new Error('Unexpected still image fetch'); },
    };
    camera.hass = hass;
    assert.equal(fetches, 0);
    assert.equal(camera._foot.textContent, 'LIVE');
    assert.equal(camera._liveElement.config.camera_view, 'live');
    assert.equal(camera._liveElement.config.camera_image, 'camera.entry');
  } finally {
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('camera element honors an explicitly selected live feed while HA reports idle', () => {
  class NativeImage extends FakeNode { setConfig(value) { this.config = value; } }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  try {
    const camera = new Camera();
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Porch',
      camera_entity: 'camera.porch_camera_profile_000', image_entity: '', preview_mode: 'live' });
    camera.hass = { states: { 'camera.porch_camera_profile_000': { state: 'idle' } } };
    assert.equal(camera._foot.textContent, 'LIVE');
    assert.equal(camera._liveElement.config.camera_view, 'live');
    assert.equal(camera._liveElement.config.camera_image, 'camera.porch_camera_profile_000');
  } finally {
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('the object artwork is the light control, with details on hold', async () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'lamp',
    entity: 'light.bedroom', title: 'Bedside lamp', roomcraft_tap_action: 'auto',
    roomcraft_hold_action: 'auto', control_icon: 'mdi:lamp' });
  const calls = [];
  object.hass = { states: { 'light.bedroom': { state: 'on' } },
    callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  assert.equal(object._button.attributes['data-state'], 'on');
  assert.equal(object._icon.icon, 'mdi:lamp');
  assert.equal(object._button.attributes['data-zone'], 'false');
  assert.match(object._button.attributes['aria-label'], /Tap to toggle; hold for details/);
  object._activate('tap');
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0])), ['homeassistant', 'toggle', { entity_id: 'light.bedroom' }]);
  object._activate('hold');
  assert.equal(object.lastEvent.detail.entityId, 'light.bedroom');
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'window',
    entity: 'cover.blind', title: 'Blind', control_zone: true,
    roomcraft_tap_action: 'none', roomcraft_hold_action: 'toggle' });
  assert.equal(object._button.attributes['data-zone'], 'true');
  assert.match(object._button.attributes['aria-label'], /Tap disabled; hold to toggle/);
});

test('a scene bound to the fan light runs from its artwork without pretending to show light state', () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'fan-light',
    entity: 'scene.ceiling_fan_light_toggle', title: 'Ceiling fan light',
    roomcraft_tap_action: 'auto', roomcraft_hold_action: 'auto' });
  const calls = [];
  object.hass = { states: { 'scene.ceiling_fan_light_toggle': { state: '2026-10-31T18:00:00Z' } },
    callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  assert.equal(object._button.attributes['data-state'], 'off');
  assert.match(object._button.attributes['aria-label'], /Ceiling fan light: ready\. Tap to run; hold for details/);
  assert.equal(object._button.title, 'Ceiling fan light · ready');
  object._activate('tap');
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0])),
    ['scene', 'turn_on', { entity_id: 'scene.ceiling_fan_light_toggle' }]);
});

test('fan artwork monitors its switch while tap and hold activate distinct motor scenes', () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'fan',
    entity: 'switch.ceiling_fan', title: 'Ceiling fan',
    roomcraft_tap_action: 'activate', roomcraft_tap_entity: 'scene.ceiling_fan_on_scene',
    roomcraft_hold_action: 'activate', roomcraft_hold_entity: 'scene.ceiling_fan_off' });
  const calls = [];
  object.hass = { states: {
    'switch.ceiling_fan': { state: 'off' },
    'scene.ceiling_fan_on_scene': { state: '2026-10-31T18:00:00Z' },
    'scene.ceiling_fan_off': { state: '2026-10-31T18:00:00Z' },
  }, callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  assert.match(object._button.attributes['aria-label'], /Ceiling fan: off\. Tap to run; hold to run/);
  object._activate('tap');
  object._activate('hold');
  assert.deepEqual(JSON.parse(JSON.stringify(calls)), [
    ['scene', 'turn_on', { entity_id: 'scene.ceiling_fan_on_scene' }],
    ['scene', 'turn_on', { entity_id: 'scene.ceiling_fan_off' }],
  ]);
  assert.throws(() => object.setConfig({ entity: 'switch.ceiling_fan',
    roomcraft_tap_entity: 'javascript:alert(1)' }), /invalid device binding/i);
});

test('the entity menu includes live and disabled registry entities', () => {
  const menu = new EntityMenu();
  menu.setConfig({ type: 'custom:roomcraft-entity-menu', roomcraft_menu: true,
    bound_objects: [{ entity_id: 'light.bedroom', label: 'Bedside lamp', icon: 'mdi:lamp' }],
    sections: [{ title: 'Security', entities: ['binary_sensor.door'] }] });
  menu.hass = { states: { 'light.bedroom': { state: 'on', attributes: { friendly_name: 'Bedroom light' } } } };
  menu._registry = [{ entity_id: 'binary_sensor.door', original_name: 'Door', disabled_by: 'integration' }];
  const catalog = menu._catalog();
  assert.equal(catalog.length, 2);
  assert.equal(catalog.find(item => item.entityId === 'light.bedroom').name, 'Bedside lamp');
  assert.equal(catalog.find(item => item.entityId === 'light.bedroom').onPlan, true);
  assert.equal(catalog.find(item => item.entityId === 'binary_sensor.door').disabled, true);
  menu._open();
  assert.equal(menu._rows.children.length, 1);
  assert.equal(menu._summary.textContent, '1 entities · including disabled registrations');
  menu._close();
});

test('the entity menu offers an accessible Run action for a live scene', () => {
  const menu = new EntityMenu();
  menu.setConfig({ type: 'custom:roomcraft-entity-menu', roomcraft_menu: true,
    bound_objects: [{ entity_id: 'scene.ceiling_fan_light_toggle', label: 'Ceiling fan light' }],
    sections: [] });
  const calls = [];
  menu.hass = { states: { 'scene.ceiling_fan_light_toggle':
    { state: '2026-10-31T18:00:00Z', attributes: { friendly_name: 'Ceiling fan light' } } },
    callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  menu._open();
  const row = menu._rows.children[0];
  assert.equal(row.children.find(child => child.className === 'state').textContent, 'Ready');
  const run = row.children.find(child => child.className === 'toggle');
  assert.equal(run.textContent, 'Run');
  assert.equal(run.attributes['aria-label'], 'Run Ceiling fan light');
  assert.equal(run.disabled, false);
  run.listeners.click();
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0])),
    ['scene', 'turn_on', { entity_id: 'scene.ceiling_fan_light_toggle' }]);
  menu._close();
});

function dashboard() {
  return {
    title: 'Second Floor',
    views: [
      { path: 'plan', cards: [{ type: 'picture-elements', image: '/api/image/serve/old/original', elements: [
        { type: 'state-icon', entity: 'light.study', style: { left: '30%', top: '40%' } },
        { type: 'state-label', entity: 'sensor.time', style: { left: '50%', top: '9%' } },
      ] }] },
      { path: 'live', cards: [{ type: 'entities', title: 'Live' }] },
    ],
    roomcraft_layout: { version: 2, rooms: [], walls: [], items: [], hotspots: [] },
  };
}

function pngDataUrl() {
  const bytes = Buffer.alloc(24);
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(bytes);
  bytes.writeUInt32BE(1472, 16);
  bytes.writeUInt32BE(828, 20);
  return `data:image/png;base64,${bytes.toString('base64')}`;
}

test('LAN bridge imports, exports, and retains unrelated HA elements/views', async () => {
  let saved = dashboard();
  let uploaded = false;
  const card = new Card();
  card.hass = {
    connected: true,
    user: { is_admin: true },
    callWS: async request => {
      if (request.type === 'lovelace/config') return structuredClone(saved);
      if (request.type === 'lovelace/config/save') {
        saved = structuredClone(request.config);
        return null;
      }
      throw new Error('Unexpected HA command');
    },
    fetchWithAuth: async (url, options) => {
      assert.equal(url, '/api/image/upload');
      assert.equal(options.method, 'POST');
      uploaded = true;
      return { ok: true, json: async () => ({ id: 'a'.repeat(32) }) };
    },
  };
  const imported = await card._readDashboard();
  assert.equal(imported.hotspots.length, 1);
  assert.equal(imported.hotspots[0].style.left, '30%');
  const project = { version: 2, rooms: [], walls: [], items: [], hotspots: [
    { id: 'control-1', type: 'state-icon', entity: 'light.study', style: { left: '42%', top: '41%' } },
  ] };
  const exported = await card._writeDashboard({ project, revision: imported.revision, pngDataUrl: pngDataUrl() });
  assert.equal(uploaded, true);
  assert.equal(exported.project.hotspots.length, 1);
  assert.equal(saved.views[0].cards[0].roomcraft_scene, 'wall-to-wall-v1');
  assert.equal(saved.views[0].cards[0].elements.length, 3);
  assert.equal(saved.views[0].cards[0].elements[0].style.left, '42.47%');
  assert.equal(saved.views[0].cards[0].elements[0].style.top, '39.11%');
  assert.equal(saved.views[0].cards[0].elements[1].type, 'custom:roomcraft-entity-menu');
  assert.equal(saved.views[0].cards[0].elements[2].entity, 'sensor.time');
  assert.equal(saved.views[0].cards[0].elements[2].style.top, '3.6%');
  assert.equal(saved.views[1].cards[0].title, 'Live');
  assert.match(saved.views[0].cards[0].image, /^\/api\/image\/serve\/a{32}\/original$/);
  const roundTrip = await card._readDashboard();
  assert.equal(roundTrip.hotspots[0].style.left, '42%');
  assert.equal(roundTrip.hotspots[0].style.top, '41%');
  saved.views[0].cards[0].elements[2].style.top = '7%';
  const changed = await card._readDashboard();
  await card._writeDashboard({ project, revision: changed.revision, pngDataUrl: pngDataUrl() });
  assert.equal(saved.views[0].cards[0].elements[2].style.top, '7%');
});

test('LAN bridge refuses a stale revision before upload', async () => {
  let saved = dashboard();
  let uploads = 0;
  const card = new Card();
  card.hass = {
    connected: true,
    user: { is_admin: true },
    callWS: async () => structuredClone(saved),
    fetchWithAuth: async () => { uploads++; throw new Error('unexpected'); },
  };
  const imported = await card._readDashboard();
  saved.views[1].cards[0].title = 'Changed by another editor';
  await assert.rejects(card._writeDashboard({ project: { version: 2, rooms: [], walls: [], items: [], hotspots: [] },
    revision: imported.revision, pngDataUrl: pngDataUrl() }), error => error.status === 409);
  assert.equal(uploads, 0);
});

test('popup editor receives only its own same-origin dashboard response', async () => {
  const replies = [];
  const popup = { closed: false, postMessage: (message, origin) => replies.push({ message, origin }) };
  const card = new Card();
  card._iframe = { contentWindow: {} };
  card._popup = popup;
  card.hass = {
    connected: true,
    user: { is_admin: true },
    callWS: async request => {
      assert.equal(request.type, 'lovelace/config');
      return dashboard();
    },
  };
  const request = { channel: 'roomcraft-ha', kind: 'request', id: 1, method: 'GET' };
  await card._onMessage({ origin: 'http://other.example.test', source: popup, data: request });
  await card._onMessage({ origin: 'http://ha.example.test', source: {}, data: request });
  assert.equal(replies.length, 0);
  await card._onMessage({ origin: 'http://ha.example.test', source: popup, data: request });
  assert.equal(replies.length, 1);
  assert.equal(replies[0].origin, 'http://ha.example.test');
  assert.equal(replies[0].message.ok, true);
  assert.equal(replies[0].message.data.project.version, 2);
});
