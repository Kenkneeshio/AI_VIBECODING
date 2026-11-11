import assert from 'node:assert/strict';
import vm from 'node:vm';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
import {buildSync} from 'esbuild';

const {outputFiles: [{text: code}]} = buildSync({
  entryPoints: [fileURLToPath(new URL('./roomcraft-card.js', import.meta.url))],
  bundle: true, format: 'iife', write: false,
});
let Card;
let Camera;
let ObjectControl;
let EntityMenu;
let StatusPopup;
const registered = new Map();
class FakeNode {
  constructor(tag = 'node') { this.tag = tag; this.children = []; this.style = {}; this.hidden = false; this.attributes = {}; this.listeners = {}; this.value = ''; }
  append(...nodes) { for (const node of nodes) { node.parentNode = this; this.children.push(node); } }
  replaceChildren(...nodes) { this.children = []; this.append(...nodes); }
  remove() { if (this.parentNode) this.parentNode.children = this.parentNode.children.filter(node => node !== this); this.parentNode = null; }
  attachShadow() { this.shadowRoot = new FakeNode('shadow'); return this.shadowRoot; }
  focus() { this.focused = true; }
  setAttribute(name, value) { this.attributes[name] = value; }
  removeAttribute(name) { delete this.attributes[name]; }
  addEventListener(name, listener) { this.listeners[name] = listener; }
  dispatchEvent(event) { this.lastEvent = event; return true; }
}
const windowListeners = new Map();
const localStorageValues = new Map();
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
      if (name === 'roomcraft-status-popup') StatusPopup = value;
    },
  },
  window: {
    customCards: [],
    localStorage: {
      getItem: key => localStorageValues.get(key) ?? null,
      setItem: (key, value) => localStorageValues.set(key, value),
    },
    addEventListener(name, listener) {
      const listeners = windowListeners.get(name) || new Set();
      listeners.add(listener);
      windowListeners.set(name, listeners);
    },
    removeEventListener(name, listener) { windowListeners.get(name)?.delete(listener); },
    dispatchEvent(event) {
      for (const listener of windowListeners.get(event.type) || []) listener(event);
      return true;
    },
  },
  location: { origin: 'http://ha.example.test', pathname: '/roomcraft-home/studio', search: '', hash: '' },
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
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
};
vm.runInNewContext(code, context);

test('resource registration is safe when Home Assistant imports another version', () => {
  assert.doesNotThrow(() => vm.runInNewContext(code, { ...context }));
  assert.equal(registered.get('roomcraft-editor-card'), Card);
  assert.equal(registered.get('roomcraft-camera-thumbnail'), Camera);
  assert.equal(registered.get('roomcraft-object-control'), ObjectControl);
  assert.equal(registered.get('roomcraft-entity-menu'), EntityMenu);
  assert.equal(registered.get('roomcraft-status-popup'), StatusPopup);
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

test('consolidated Studio imports and publishes the projection in Roomcraft Home', async () => {
  const legacy = dashboard();
  let saved = {
    roomcraft_layout: {version: 2, rooms: [], walls: [], hotspots: [], items: []},
    roomcraft_plan: {...legacy.views[0].cards[0], image: '/api/image/serve/' + 'a'.repeat(32) + '/original'},
    roomcraft_health: {cards: [{type: 'entities', entities: ['sensor.example_health']}]},
    views: [{path: 'home'}, {path: 'studio'}],
  };
  const card = new Card();
  card.setConfig({dashboard: 'roomcraft-home'});
  card.hass = {
    connected: true, user: {is_admin: true},
    callWS: async request => {
      assert.equal(request.url_path, 'roomcraft-home');
      if (request.type === 'lovelace/config') return structuredClone(saved);
      if (request.type === 'lovelace/config/save') { saved = structuredClone(request.config); return null; }
      throw new Error('Unexpected HA command');
    },
    fetchWithAuth: async () => ({ok: true, json: async () => ({id: 'b'.repeat(32)})}),
  };
  const imported = await card._readDashboard();
  assert.equal(imported.source, 'http://ha.example.test/roomcraft-home/home');
  const previous = structuredClone(saved);
  await card._writeDashboard({project: {...imported.project, items: [{id: 'example-lamp', type: 'lamp'}]},
    revision: imported.revision, pngDataUrl: pngDataUrl()});
  assert.deepEqual(saved.views, [{path: 'home'}, {path: 'studio'}]);
  assert.equal(saved.roomcraft_health.cards[0].entities[0], 'sensor.example_health');
  assert.equal(saved.roomcraft_plan.image, '/api/image/serve/' + 'b'.repeat(32) + '/original');
  assert.equal(saved.roomcraft_snapshots.length, 1);
  assert.deepEqual(saved.roomcraft_snapshots[0].layout, previous.roomcraft_layout);
  assert.deepEqual(saved.roomcraft_snapshots[0].plan, previous.roomcraft_plan);
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

test('LAN bridge exports event triggers and validates camera modes and sensor IDs', async () => {
  const saved = dashboard();
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
  const item = { id: 'entry', type: 'cameraThumbnail', name: 'Entry', x: 260, y: 390,
    w: 170, h: 110, rotation: 0, entityId: 'camera.entry', imageEntityId: 'image.entry_event',
    previewMode: 'event_live', eventEntityIds: ['binary_sensor.entry_ring', 'binary_sensor.entry_person'] };
  await card._writeDashboard({ project: { version: 2, rooms: [], walls: [], hotspots: [], items: [item] },
    revision: imported.revision, pngDataUrl: pngDataUrl() });
  const element = saved.views[0].cards[0].elements.find(value => value.roomcraft_item_id === 'entry');
  assert.equal(element.preview_mode, 'event_live');
  assert.deepEqual(Array.from(element.event_entities), item.eventEntityIds);
  const current = await card._readDashboard();
  for (const eventEntityIds of [['https://outside.example'], ['light.entry'],
    ['binary_sensor.entry_ring', 'binary_sensor.entry_ring'], Array(7).fill('binary_sensor.x')]) {
    const invalid = { ...item, eventEntityIds };
    await assert.rejects(card._writeDashboard({ project: { version: 2, rooms: [], walls: [],
      hotspots: [], items: [invalid] }, revision: current.revision, pngDataUrl: pngDataUrl() }),
    /invalid camera thumbnail/i);
  }
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
  assert.equal(camera._still.hidden, true);
  camera._still.naturalWidth = 640;
  camera._still.naturalHeight = 360;
  camera._still.listeners.load();
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

test('camera element rejects malformed event sensor configuration', () => {
  const camera = new Camera();
  assert.throws(() => camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail',
    camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event_live',
    event_entities: ['light.outside'] }), /invalid entity/i);
  assert.throws(() => camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail',
    camera_entity: 'camera.entry', image_entity: '', preview_mode: 'live_auto',
    event_entities: ['binary_sensor.entry', 'binary_sensor.entry'] }), /invalid entity/i);
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
  class NativeImage extends FakeNode {
    constructor(tag) {
      super(tag);
      const video = new FakeNode('video');
      Object.assign(video, { readyState: 3, videoWidth: 640, videoHeight: 360, paused: false, ended: false });
      this.attachShadow().append(video);
    }
    setConfig(value) { this.config = value; }
  }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  let camera;
  try {
    camera = new Camera();
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
    camera?.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('a decoded same-camera HA MJPEG stream is LIVE, but snapshots and other URLs are not', () => {
  let image;
  class NativeImage extends FakeNode {
    constructor(tag) {
      super(tag);
      image = new FakeNode('img');
      Object.assign(image, { complete: true, naturalWidth: 3840, naturalHeight: 2160,
        currentSrc: 'http://ha.example.test/api/camera_proxy_stream/camera.garage?cache=1' });
      this.attachShadow().append(image);
    }
    setConfig(value) { this.config = value; }
  }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  const camera = new Camera();
  try {
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Garage',
      camera_entity: 'camera.garage', image_entity: '', preview_mode: 'live' });
    camera.hass = { states: { 'camera.garage': { state: 'streaming' } } };
    assert.equal(camera._foot.textContent, 'LIVE');
    for (const url of [
      'http://ha.example.test/api/camera_proxy/camera.garage',
      'http://ha.example.test/api/camera_proxy_stream/camera.other',
      'https://outside.example/api/camera_proxy_stream/camera.garage',
    ]) {
      image.currentSrc = url;
      camera._pollLive();
      assert.notEqual(camera._foot.textContent, 'LIVE');
    }
    image.currentSrc = 'http://ha.example.test/api/camera_proxy_stream/camera.garage';
    camera._pollLive();
    assert.equal(camera._foot.textContent, 'LIVE');
  } finally {
    camera.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('idle live mode requests camera turn-on only after a tap, then waits for playback', () => {
  let nativeElements = 0;
  class NativeImage extends FakeNode {
    constructor(tag) {
      super(tag);
      nativeElements++;
      const video = new FakeNode('video');
      Object.assign(video, { readyState: 3, videoWidth: 640, videoHeight: 360, paused: false, ended: false });
      this.attachShadow().append(video);
    }
    setConfig(value) { this.config = value; }
  }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  let camera;
  try {
    camera = new Camera();
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Porch',
      camera_entity: 'camera.entry', image_entity: '', preview_mode: 'live' });
    const calls = [];
    camera.hass = { states: { 'camera.entry': { state: 'idle' } },
      callService: (...args) => { calls.push(args); return Promise.resolve(); } };
    assert.equal(camera._foot.textContent, 'READY');
    assert.equal(camera._message.textContent, 'Tap to start camera');
    assert.equal(nativeElements, 0);
    camera._frame.listeners.click();
    assert.equal(camera._foot.textContent, 'CONNECTING');
    assert.deepEqual(JSON.parse(JSON.stringify(calls)),
      [['camera', 'turn_on', { entity_id: 'camera.entry' }]]);
    camera.hass = { states: { 'camera.entry': { state: 'streaming' } } };
    assert.equal(camera._foot.textContent, 'LIVE');
    assert.equal(nativeElements, 1);
    assert.equal(camera._liveElement.config.camera_view, 'live');
    assert.equal(camera._liveElement.config.camera_image, 'camera.entry');
  } finally {
    camera?.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('a blank native stream never receives a LIVE badge', () => {
  class NativeImage extends FakeNode { setConfig(value) { this.config = value; } }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  const camera = new Camera();
  try {
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Garage',
      camera_entity: 'camera.garage', image_entity: '', preview_mode: 'live' });
    camera.hass = { states: { 'camera.garage': { state: 'streaming' } } };
    assert.equal(camera._foot.textContent, 'CONNECTING');
    camera._liveStartedAt = Date.now() - 16000;
    camera._pollLive();
    assert.equal(camera._foot.textContent, 'UNAVAILABLE');
    assert.equal(camera._message.textContent, 'Camera unavailable');
  } finally {
    camera.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('a failed stream retains a decoded event still as PREVIEW', async () => {
  class NativeImage extends FakeNode { setConfig(value) { this.config = value; } }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  const camera = new Camera();
  try {
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
      camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'live' });
    camera.hass = {
      states: { 'camera.entry': { state: 'streaming' },
        'image.entry_event': { state: '2026-10-31T15:54:00Z',
          attributes: { entity_picture: '/api/image_proxy/image.entry_event' } } },
      fetchWithAuth: async () => ({ ok: true, blob: async () => new Blob(['jpeg'], { type: 'image/jpeg' }) }),
    };
    await new Promise(resolve => setTimeout(resolve, 0));
    camera._still.naturalWidth = 640;
    camera._still.naturalHeight = 360;
    camera._still.listeners.load();
    assert.equal(camera._still.hidden, false);
    assert.match(camera._foot.textContent, /^PREVIEW · /);
    camera._liveStartedAt = Date.now() - 16000;
    camera._pollLive();
    assert.equal(camera._still.hidden, false);
    assert.equal(camera._foot.textContent, 'PREVIEW · LIVE UNAVAILABLE');
  } finally {
    camera.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('a downloaded but undecodable event image remains unavailable', async () => {
  const camera = new Camera();
  camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
    camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event' });
  camera.hass = {
    states: { 'camera.entry': { state: 'idle' },
      'image.entry_event': { state: '2026-10-31T15:54:00Z',
        attributes: { entity_picture: '/api/image_proxy/image.entry_event' } } },
    fetchWithAuth: async () => ({ ok: true, blob: async () => new Blob(['bad'], { type: 'image/jpeg' }) }),
  };
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(camera._still.hidden, true);
  camera._still.listeners.error();
  assert.equal(camera._still.hidden, true);
  assert.equal(camera._message.textContent, 'Latest event unavailable');
  assert.notEqual(camera._foot.textContent, 'LIVE');
  camera.disconnectedCallback();
});

test('event live camera is gated by ring or person, then returns to dated still and stops its own stream', async () => {
  let nativeElements = 0;
  class NativeImage extends FakeNode {
    constructor(tag) {
      super(tag);
      nativeElements++;
      const image = new FakeNode('img');
      Object.assign(image, { complete: true, naturalWidth: 640, naturalHeight: 360,
        currentSrc: 'http://ha.example.test/api/camera_proxy_stream/camera.entry' });
      this.attachShadow().append(image);
    }
    setConfig(value) { this.config = value; }
  }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  const camera = new Camera();
  try {
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
      camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event_live',
      event_entities: ['binary_sensor.entry_ring', 'binary_sensor.entry_person'] });
    const calls = [];
    const hass = { states: {
      'camera.entry': { state: 'streaming' },
      'binary_sensor.entry_ring': { state: 'off' },
      'binary_sensor.entry_person': { state: 'off' },
      'image.entry_event': { state: '2026-10-31T15:54:00Z',
        attributes: { entity_picture: '/api/image_proxy/image.entry_event' } },
    },
    callService: (...args) => { calls.push(args); return Promise.resolve(); },
    fetchWithAuth: async () => ({ ok: true, blob: async () => new Blob(['jpeg'], { type: 'image/jpeg' }) }) };
    camera.hass = hass;
    await new Promise(resolve => setTimeout(resolve, 0));
    camera._still.naturalWidth = 640;
    camera._still.naturalHeight = 360;
    camera._still.listeners.load();
    assert.equal(nativeElements, 0);
    assert.match(camera._foot.textContent, /^LATEST EVENT · /);
    assert.deepEqual(calls, []);
    camera._frame.listeners.click();
    assert.deepEqual(calls, []);
    assert.equal(camera.lastEvent?.type, 'hass-more-info');

    hass.states['camera.entry'].state = 'idle';
    hass.states['binary_sensor.entry_ring'].state = 'on';
    camera.hass = hass;
    assert.deepEqual(JSON.parse(JSON.stringify(calls)),
      [['camera', 'turn_on', { entity_id: 'camera.entry' }]]);
    assert.equal(nativeElements, 1);
    assert.equal(camera._foot.textContent, 'LIVE');
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.equal(camera._eventOwnsStream, true);
    const firstDeadline = camera._eventLiveUntil;
    hass.states['binary_sensor.entry_ring'].state = 'off';
    camera.hass = hass;
    hass.states['binary_sensor.entry_person'].state = 'on';
    camera.hass = hass;
    assert.ok(camera._eventLiveUntil >= firstDeadline);
    hass.states['binary_sensor.entry_person'].state = 'off';
    hass.states['camera.entry'].state = 'streaming';
    camera.hass = hass;
    camera._eventLiveUntil = Date.now() - 1;
    camera._refresh();
    assert.deepEqual(JSON.parse(JSON.stringify(calls)), [
      ['camera', 'turn_on', { entity_id: 'camera.entry' }],
      ['camera', 'turn_off', { entity_id: 'camera.entry' }],
    ]);
    assert.equal(camera._liveElement, null);
    assert.match(camera._foot.textContent, /^LATEST EVENT · /);
    assert.notEqual(camera._foot.textContent, 'LIVE');
  } finally {
    camera.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('event live camera never stops another viewer stream and failed start falls back to still', async () => {
  class NativeImage extends FakeNode { setConfig(value) { this.config = value; } }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  const camera = new Camera();
  try {
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Entry',
      camera_entity: 'camera.entry', image_entity: 'image.entry_event', preview_mode: 'event_live',
      event_entities: ['binary_sensor.entry_ring', 'binary_sensor.entry_person'] });
    const calls = [];
    const hass = { states: {
      'camera.entry': { state: 'streaming' },
      'binary_sensor.entry_ring': { state: 'on' },
      'binary_sensor.entry_person': { state: 'off' },
      'image.entry_event': { state: '2026-10-31T15:54:00Z',
        attributes: { entity_picture: '/api/image_proxy/image.entry_event' } },
    },
    callService: (...args) => { calls.push(args); return Promise.reject(new Error('offline')); },
    fetchWithAuth: async () => ({ ok: true, blob: async () => new Blob(['jpeg'], { type: 'image/jpeg' }) }) };
    camera.hass = hass;
    await new Promise(resolve => setTimeout(resolve, 0));
    camera._still.naturalWidth = 640;
    camera._still.naturalHeight = 360;
    camera._still.listeners.load();
    hass.states['binary_sensor.entry_ring'].state = 'off';
    camera.hass = hass;
    camera._eventLiveUntil = Date.now() - 1;
    camera._refresh();
    assert.deepEqual(calls, []);

    hass.states['camera.entry'].state = 'idle';
    hass.states['binary_sensor.entry_person'].state = 'on';
    camera.hass = hass;
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.deepEqual(JSON.parse(JSON.stringify(calls)),
      [['camera', 'turn_on', { entity_id: 'camera.entry' }]]);
    assert.equal(camera._still.hidden, false);
    assert.equal(camera._foot.textContent, 'PREVIEW · LIVE UNAVAILABLE');
    camera.hass = hass;
    assert.equal(calls.length, 1);
  } finally {
    camera.disconnectedCallback();
    registered.delete('hui-image-element');
    context.document.createElement = createElement;
  }
});

test('auto live ONVIF camera mounts while idle but claims LIVE only after video advances', () => {
  let video;
  class NativeImage extends FakeNode {
    constructor(tag) {
      super(tag);
      video = new FakeNode('video');
      Object.assign(video, { readyState: 3, videoWidth: 640, videoHeight: 360,
        paused: false, ended: false, currentTime: 0 });
      this.attachShadow().append(video);
    }
    setConfig(value) { this.config = value; }
  }
  const createElement = context.document.createElement;
  context.document.createElement = tag => tag === 'hui-image-element' ? new NativeImage(tag) : createElement(tag);
  registered.set('hui-image-element', NativeImage);
  const camera = new Camera();
  try {
    camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Porch',
      camera_entity: 'camera.porch', image_entity: '', preview_mode: 'live_auto' });
    const calls = [];
    camera.hass = { states: { 'camera.porch': { state: 'idle' } },
      callService: (...args) => { calls.push(args); return Promise.resolve(); } };
    assert.ok(camera._liveElement);
    assert.notEqual(camera._foot.textContent, 'LIVE');
    camera._frame.listeners.click();
    assert.deepEqual(calls, []);
    assert.equal(camera.lastEvent?.type, 'hass-more-info');
    video.currentTime = 0.5;
    camera._pollLive();
    assert.equal(camera._foot.textContent, 'LIVE');
    camera._lastVideoAdvanceAt = Date.now() - 2100;
    camera._pollLive();
    assert.notEqual(camera._foot.textContent, 'LIVE');
  } finally {
    camera.disconnectedCallback();
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
  assert.equal(object._icon, null);
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
  object.disconnectedCallback();
});

test('vacuum artwork opens map controls and calls safe vacuum and room services', async () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'vacuum',
    entity: 'vacuum.l10s_ultra', title: 'L10s Ultra', roomcraft_visual_kind: 'vacuum',
    roomcraft_vacuum_map_entity: 'camera.l10s_ultra_map',
    roomcraft_vacuum_position_transform: [-0.1, -0.006, 560, -0.001, 0.093, 716] });
  const calls = [];
  object.hass = {
    states: {
      'vacuum.l10s_ultra': { state: 'docked', attributes: { friendly_name: 'L10s Ultra' } },
      'camera.l10s_ultra_map': { state: 'map-v1', last_updated: new Date().toISOString(),
        attributes: { entity_picture: '/api/camera_proxy/camera.l10s_ultra_map?token=x',
          vacuum_position: { x: 32, y: 509, a: 270 }, rooms: {
          7: { room_id: 7, name: 'Living Room', order: 1 },
          3: { room_id: 3, name: 'Kitchen', order: 2 },
        } } },
    },
    hassUrl: path => `http://ha.test${path}`,
    callService: (...args) => { calls.push(args); return Promise.resolve(); },
  };
  assert.equal(object._button.attributes['data-visual'], 'vacuum');
  assert.match(object._button.attributes['aria-label'], /Tap for vacuum controls/);
  object._activate('tap');
  assert.equal(object._vacuumPanel.hidden, false);
  assert.match(object._vacuumMapImage.src, /camera\.l10s_ultra_map/);
  assert.equal(object._vacuumRooms.children.length, 2);
  assert.equal(object._button.attributes['data-tracking'], 'parked');
  assert.match(object.style.left, /%$/);
  assert.match(object.style.top, /%$/);
  assert.equal(object._button.style['--vacuum-heading'], '270deg');
  object._runVacuumService('start');
  object._runVacuumService('pause');
  object._runVacuumService('return_to_base');
  object._runVacuumService('locate');
  object._cleanVacuumRoom(7);
  await Promise.resolve();
  assert.deepEqual(JSON.parse(JSON.stringify(calls)), [
    ['vacuum', 'start', { entity_id: 'vacuum.l10s_ultra' }],
    ['vacuum', 'pause', { entity_id: 'vacuum.l10s_ultra' }],
    ['vacuum', 'return_to_base', { entity_id: 'vacuum.l10s_ultra' }],
    ['vacuum', 'locate', { entity_id: 'vacuum.l10s_ultra' }],
    ['dreame_vacuum', 'vacuum_clean_segment', { segments: [7] }, { entity_id: 'vacuum.l10s_ultra' }],
  ]);
  assert.equal(object._vacuumPanel.hidden, true);
  assert.match(object.shadowRoot.children[0].textContent, /roomcraft-vacuum-pulse/);
  object.disconnectedCallback();
});

test('tracked vacuum moves only from a calibrated fresh position and animates only while active', () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'vacuum',
    entity: 'vacuum.example', roomcraft_visual_kind: 'vacuum',
    roomcraft_vacuum_map_entity: 'camera.example_map',
    roomcraft_vacuum_position_transform: [-0.1, 0, 560, 0, 0.09, 716] });
  const map = { state: 'map', last_updated: new Date().toISOString(),
    attributes: { vacuum_position: { x: 100, y: 200, a: 90 }, rooms: {} } };
  object.hass = { states: {
    'vacuum.example': { state: 'cleaning', attributes: {} },
    'camera.example_map': map,
  } };
  assert.equal(object._button.attributes['data-tracking'], 'live');
  assert.match(object.style.left, /%$/);
  assert.equal(object._button.style['--vacuum-heading'], '90deg');

  const parkedLeft = object.style.left;
  map.last_updated = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  map.attributes.vacuum_position = { x: 5000, y: 5000, a: 180 };
  object.hass = { states: {
    'vacuum.example': { state: 'cleaning', attributes: {} },
    'camera.example_map': map,
  } };
  assert.equal(object._button.attributes['data-tracking'], 'stale');
  assert.equal(object.style.left, parkedLeft);
});

test('action-only ceiling fan never spins without a verified motor state', () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'ceiling-fan',
    entity: 'scene.fan_on', title: 'Ceiling fan · state unavailable', roomcraft_visual_kind: 'fan',
    roomcraft_tap_action: 'activate', roomcraft_tap_entity: 'scene.fan_on',
    roomcraft_hold_action: 'activate', roomcraft_hold_entity: 'scene.fan_off' });
  object.hass = { states: {
    'scene.fan_on': { state: '2026-11-01T00:00:00Z', attributes: {} },
    'scene.fan_off': { state: '2026-11-02T00:00:00Z', attributes: {} },
  } };
  assert.equal(object._button.attributes['data-state'], 'ready');
  assert.equal(object._button.attributes['data-visual'], 'fan');
  assert.match(object._button.attributes['aria-label'], /state unavailable: ready/i);
});

test('electrical and indoor-air markers reveal live status without operating devices', () => {
  const electrical = new StatusPopup();
  electrical.setConfig({ type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'electrical',
    title: 'Electrical', roomcraft_popup_direction: 'up',
    entities: [{ entity: 'sensor.main_power', name: 'Home power' }] });
  assert.equal(electrical._panel.attributes['data-direction'], 'up');
  electrical.hass = { states: {
    'sensor.main_power': { state: '3412', attributes: { unit_of_measurement: 'W', friendly_name: 'Main power' } },
  } };
  assert.equal(electrical._button.attributes['data-severity'], 'warn');
  assert.match(electrical._rows.children[0].children[2].textContent, /3,412 W/);
  electrical._button.listeners.click();
  assert.equal(electrical._panel.hidden, false);
  electrical.setConfig({ type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'electrical',
    title: 'Electrical', roomcraft_popup_direction: 'down',
    entities: [{ entity: 'sensor.main_power', name: 'Home power' }] });
  assert.equal(electrical._panel.attributes['data-direction'], 'down');

  const air = new StatusPopup();
  air.setConfig({ type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'air', title: 'Indoor air',
    entities: [
      { entity: 'sensor.room_carbon_dioxide', name: 'CO₂' },
      { entity: 'sensor.room_humidity', name: 'Humidity' },
    ] });
  air.hass = { states: {
    'sensor.room_carbon_dioxide': { state: '1550', attributes: { unit_of_measurement: 'ppm' } },
    'sensor.room_humidity': { state: '46', attributes: { unit_of_measurement: '%' } },
  } };
  assert.equal(air._button.attributes['data-severity'], 'alert');
  assert.equal(air.lastEvent, undefined);
});

test('the dashboard menu toggles live object and camera details without changing controls', () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'light.study', title: 'Study lamp' });
  object.hass = { states: { 'light.study': { state: 'on' } } };
  object.connectedCallback();
  const camera = new Camera();
  camera.setConfig({ type: 'custom:roomcraft-camera-thumbnail', title: 'Garage',
    camera_entity: 'camera.garage', image_entity: '', preview_mode: 'offline' });
  camera.connectedCallback();
  const menu = new EntityMenu();
  menu.setConfig({ type: 'custom:roomcraft-entity-menu', roomcraft_menu: true, sections: [] });
  menu.connectedCallback();
  menu._open();

  assert.equal(menu._detailToggle.attributes['aria-pressed'], 'false');
  assert.equal(object.attributes['data-show-details'], 'false');
  assert.equal(camera.attributes['data-show-details'], 'false');
  menu._detailToggle.listeners.click();
  assert.equal(menu._detailToggle.attributes['aria-pressed'], 'true');
  assert.equal(menu._detailSwitch.textContent, 'ON');
  assert.equal(object.attributes['data-show-details'], 'true');
  assert.equal(object._detailName.textContent, 'Study lamp');
  assert.equal(object._detailState.textContent, 'on');
  assert.equal(object._detailEntity.textContent, 'light.study');
  assert.equal(camera.attributes['data-show-details'], 'true');
  assert.equal(camera._detailEntity.textContent, 'camera.garage');

  menu._detailToggle.listeners.click();
  assert.equal(object.attributes['data-show-details'], 'false');
  assert.equal(camera.attributes['data-show-details'], 'false');
  ObjectControl.detailVisibility = true;
  assert.equal(menu._detailToggle.attributes['aria-pressed'], 'true');
  assert.equal(object.attributes['data-show-details'], 'true');
  assert.equal(camera.attributes['data-show-details'], 'true');
  assert.equal(localStorageValues.get('roomcraft.show-object-details.v1'), 'true');
  ObjectControl.detailVisibility = false;
  menu.disconnectedCallback();
  camera.disconnectedCallback();
  object.disconnectedCallback();
});

test('detail cards are positioned beside objects and move inward near the right edge', () => {
  const object = new ObjectControl();
  object.getBoundingClientRect = () => ({ left: 900, right: 980, top: 200, bottom: 280 });
  context.window.innerWidth = 1024;
  context.window.innerHeight = 600;
  object.setConfig({ entity: 'switch.air_filter', title: 'Air filter' });
  object.connectedCallback();
  const menu = new EntityMenu();
  menu.setConfig({ type: 'custom:roomcraft-entity-menu', roomcraft_menu: true, sections: [] });
  menu.connectedCallback();
  menu._open();
  menu._detailToggle.listeners.click();
  assert.equal(object.attributes['data-detail-side'], 'left');
  assert.match(object.shadowRoot.children[0].textContent, /left:calc\(100% \+ 7px\)/);
  assert.match(object.shadowRoot.children[0].textContent, /right:calc\(100% \+ 7px\)/);
  menu._detailToggle.listeners.click();
  menu.disconnectedCallback();
  object.disconnectedCallback();
  delete context.window.innerWidth;
  delete context.window.innerHeight;
});

test('a bound table lamp keeps the crafted pleated-shade silhouette and follows the light switch', () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'office-desk-lamp',
    entity: 'light.office', title: 'Office desk lamp', roomcraft_visual_kind: 'light',
    roomcraft_light_form: 'table_lamp' });
  const css = object.shadowRoot.children[0].textContent;
  assert.match(css, /\.target\{[^}]*background:transparent[^}]*appearance:none[^}]*-webkit-appearance:none/);
  assert.doesNotMatch(css, /\.hint\{/);
  assert.match(css, /\[data-form="table_lamp"\] \.art,\s*\.target\[data-visual="light"\]\[data-form="bud_lamp"\] \.art\{[^}]*inset:6% 13% 3%[^}]*background:none!important/);
  assert.match(css, /\[data-form="table_lamp"\] \.art::before,\s*\.target\[data-visual="light"\]\[data-form="bud_lamp"\] \.art::before\{[^}]*width:72%[^}]*height:43%[^}]*clip-path:polygon[^}]*repeating-linear-gradient/);
  assert.match(css, /\[data-form="table_lamp"\] \.art::after,\s*\.target\[data-visual="light"\]\[data-form="bud_lamp"\] \.art::after\{[^}]*radial-gradient\(ellipse at 50% 90%/);
  assert.match(css, /\[data-form="table_lamp"\]\[data-state="off"\] \.art::before,[^}]*saturate\(\.5\) brightness\(\.65\)/s);
  assert.match(css, /\[data-form="table_lamp"\]\[data-state="on"\] \.art::before,[^}]*drop-shadow\(0 0 8px #ffd66f99\)/s);
  object.hass = { states: { 'light.office': { state: 'off' } } };
  assert.equal(object._button.attributes['data-form'], 'table_lamp');
  assert.equal(object._button.attributes['data-state'], 'off');
  assert.equal(object._button.attributes['data-toggleable'], 'true');
  assert.match(css, /\[data-toggleable="true"\]::before\{[^}]*width:4px[^}]*height:4px/);
  object.hass = { states: { 'light.office': { state: 'on' } } };
  assert.equal(object._button.attributes['data-form'], 'table_lamp');
  assert.equal(object._button.attributes['data-state'], 'on');
  object.hass = { states: { 'light.office': { state: 'unavailable' } } };
  assert.equal(object._button.attributes['data-state'], 'unavailable');
  assert.throws(() => object.setConfig({ entity: 'light.office',
    roomcraft_light_form: 'giant_glow' }), /invalid device binding/i);
  object.disconnectedCallback();
});

test('crafted light forms keep transparent controls and truthful state-only glow', () => {
  const forms = ['bud_lamp', 'cloud_floor_lamp', 'bloom_ceiling', 'star_pendant', 'acorn_sconce'];
  for (const form of forms) {
    const object = new ObjectControl();
    object.setConfig({ type: 'custom:roomcraft-object-control', entity: `light.${form}`,
      title: form, roomcraft_visual_kind: 'light', roomcraft_light_form: form });
    object.hass = { states: { [`light.${form}`]: { state: 'off' } } };
    assert.equal(object._button.attributes['data-form'], form);
    assert.equal(object._button.attributes['data-state'], 'off');
    const css = object.shadowRoot.children[0].textContent;
    assert.match(css, new RegExp(`data-form="${form}"`));
    assert.match(css, new RegExp(`data-form="${form}"\\]\\[data-state="on"`));
    object.hass = { states: { [`light.${form}`]: { state: 'on' } } };
    assert.equal(object._button.attributes['data-state'], 'on');
    object.disconnectedCallback();
  }
});

test('a tap acknowledges the object itself without a visible state label or a drag action', async () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'light.study', title: 'Study lamp' });
  const calls = [];
  object.hass = { states: { 'light.study': { state: 'off' } },
    callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  const css = object.shadowRoot.children[0].textContent;
  assert.match(css, /\.target\[data-feedback\]::after/);
  assert.doesNotMatch(css, /\.state-mark/);
  object._button.listeners.click();
  assert.equal(object._button.attributes['data-feedback'], 'tap');
  assert.equal(calls.length, 1);
  await new Promise(resolve => setTimeout(resolve, 680));
  assert.equal(object._button.attributes['data-feedback'], undefined);
  object._button.listeners.pointerdown({ button: 0, clientX: 10, clientY: 10 });
  object._button.listeners.pointermove({ clientX: 25, clientY: 10 });
  object._button.listeners.pointerup();
  object._button.listeners.click();
  assert.equal(calls.length, 1);
  object.disconnectedCallback();
});

test('a scene bound to the fan light runs from its artwork without pretending to show light state', () => {
  const object = new ObjectControl();
  object.setConfig({ type: 'custom:roomcraft-object-control', roomcraft_item_id: 'fan-light',
    entity: 'scene.ceiling_fan_light_toggle', title: 'Ceiling fan light',
    roomcraft_tap_action: 'auto', roomcraft_hold_action: 'auto' });
  const calls = [];
  object.hass = { states: {
    'scene.ceiling_fan_light_toggle': { state: '2026-10-31T18:00:00Z' },
    'switch.ceiling_fan': { state: 'on' },
    'sensor.ceiling_fan_light': { state: 'on' },
  },
    callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  assert.equal(object._button.attributes['data-state'], 'ready');
  assert.match(object.shadowRoot.children[0].textContent, /\.target\[data-state="ready"\] \.art/);
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
  assert.equal(object._button.attributes['data-visual'], 'fan');
  assert.equal(object._button.attributes['data-state'], 'off');
  assert.equal(object._button.children.some(child => child.className === 'state-mark'), false);
  assert.match(object._button.attributes['aria-label'], /Ceiling fan: off\. Tap to run; hold to run/);
  object._activate('tap');
  assert.equal(object._button.attributes['data-feedback'], 'tap');
  object._activate('hold');
  assert.equal(object._button.attributes['data-feedback'], 'hold');
  assert.deepEqual(JSON.parse(JSON.stringify(calls)), [
    ['scene', 'turn_on', { entity_id: 'scene.ceiling_fan_on_scene' }],
    ['scene', 'turn_on', { entity_id: 'scene.ceiling_fan_off' }],
  ]);
  assert.throws(() => object.setConfig({ entity: 'switch.ceiling_fan',
    roomcraft_tap_entity: 'javascript:alert(1)' }), /invalid device binding/i);
  object.disconnectedCallback();
});

test('fan rotation follows the fan switch, not a fan sensor or scene timestamp', () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'switch.ceiling_fan', title: 'Ceiling fan', roomcraft_visual_kind: 'fan' });
  const css = object.shadowRoot.children[0].textContent;
  assert.match(css, /steps\(8,end\)/);
  assert.match(css, /\[data-visual="fan"\]\[data-state="on"\] \.rotor\{[^}]*#9bc9d6/);
  assert.doesNotMatch(css, /\[data-visual="fan"\]\[data-state="on"\] \.rotor\{[^}]*#ffd166/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /\[data-visual="fan"\] \.art\{[^}]*border-radius:0;[^}]*box-shadow:none/);
  assert.doesNotMatch(css, /\[data-visual="fan"\] \.art\{[^}]*inset 0 0 0/);
  const rotor = object._button.children[0].children[0];
  assert.equal(rotor.children.filter(child => child.className === 'blade').length, 5);
  object.hass = { states: {
    'switch.ceiling_fan': { state: 'off' },
    'switch.fan_light': { state: 'on' },
    'sensor.ceiling_fan_speed': { state: 'high' },
  } };
  assert.equal(object._button.attributes['data-state'], 'off');
  object.hass = { states: {
    'switch.ceiling_fan': { state: 'on' },
    'switch.fan_light': { state: 'off' },
    'sensor.ceiling_fan_speed': { state: '0' },
  } };
  assert.equal(object._button.attributes['data-state'], 'on');
  assert.match(object._button.attributes['aria-label'], /Ceiling fan: on\./);
});

test('a scene action can control a fan light while only its switch determines the glow', () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'switch.fan_light', title: 'Ceiling fan light',
    roomcraft_visual_kind: 'light', roomcraft_tap_action: 'activate',
    roomcraft_tap_entity: 'scene.fan_light_toggle' });
  const calls = [];
  const states = {
    'switch.fan_light': { state: 'off' },
    'scene.fan_light_toggle': { state: '2026-10-31T18:00:00Z' },
  };
  object.hass = { states, callService: (...args) => { calls.push(args); return Promise.resolve(); } };
  assert.equal(object._button.attributes['data-state'], 'off');
  object._activate('tap');
  assert.deepEqual(JSON.parse(JSON.stringify(calls[0])),
    ['scene', 'turn_on', { entity_id: 'scene.fan_light_toggle' }]);
  assert.equal(object._button.attributes['data-state'], 'off', 'a scene call is not an on state');
  states['switch.fan_light'] = { state: 'on' };
  object.hass = { states, callService: () => Promise.resolve() };
  assert.equal(object._button.attributes['data-state'], 'on');
  states['switch.fan_light'] = { state: 'heat' };
  object.hass = { states };
  assert.equal(object._button.attributes['data-state'], 'unavailable', 'a switch needs on/off, not a borrowed climate mode');
  object.disconnectedCallback();
});

test('light, window, door, and climate overlays use their own live states', () => {
  const cases = [
    { entity: 'light.study', title: 'Study desk lamp', visual: 'light', on: 'on', off: 'off' },
    { entity: 'cover.blinds', title: 'Study blinds', visual: 'window', on: 'open', off: 'closed' },
    { entity: 'lock.front_door', title: 'Front door', visual: 'door', on: 'unlocked', off: 'locked' },
    { entity: 'climate.office', title: 'Office AC', visual: 'climate', on: 'cool', off: 'off' },
  ];
  for (const entry of cases) {
    const object = new ObjectControl();
    object.setConfig({ entity: entry.entity, title: entry.title });
    object.hass = { states: { [entry.entity]: { state: entry.on } } };
    assert.equal(object._button.attributes['data-visual'], entry.visual);
    assert.equal(object._button.attributes['data-state'], 'on');
    assert.match(object._button.attributes['aria-label'], new RegExp(`${entry.title}: ${entry.on}\\.`));
    assert.equal(object._button.children.some(child => child.className === 'state-mark'), false);
    object.hass = { states: { [entry.entity]: { state: entry.off } } };
    assert.equal(object._button.attributes['data-state'], 'off');
    object.hass = { states: { [entry.entity]: { state: 'unavailable' } } };
    assert.equal(object._button.attributes['data-state'], 'unavailable');
    object.hass = { states: { [entry.entity]: { state: 'unexpected_state' } } };
    assert.equal(object._button.attributes['data-state'], 'unavailable');
  }
});

test('garage door art follows closed, open, opening, closing, and unavailable cover states', () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'cover.garage_door', title: 'Garage door',
    roomcraft_visual_kind: 'door' });
  const css = object.shadowRoot.children[0].textContent;
  assert.match(css, /\[data-visual="door"\]\[data-door-form="garage"\] \.art::before\{[^}]*clip-path:polygon/);
  assert.match(css, /\[data-entity-state="open"\] \.art::after\{[^}]*scaleY\(\.22\)/);
  assert.match(css, /\[data-entity-state="opening"\] \.art::after\{[^}]*scaleY\(\.48\)/);
  assert.match(css, /\[data-entity-state="closing"\] \.art::after\{[^}]*scaleY\(\.76\)/);
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(css, /\[data-visual="door"\] \.art\{animation:none/);
  for (const [value, visual] of [
    ['closed', 'off'], ['open', 'on'], ['opening', 'on'], ['closing', 'off'],
    ['unavailable', 'unavailable'],
  ]) {
    object.hass = { states: { 'cover.garage_door': { state: value } } };
    assert.equal(object._button.attributes['data-visual'], 'door');
    assert.equal(object._button.attributes['data-door-form'], 'garage');
    assert.equal(object._button.attributes['data-state'], visual);
    assert.equal(object._button.attributes['data-entity-state'], value);
  }
  assert.equal(object._button.attributes['data-toggleable'], 'true');
  assert.match(css, /\[data-toggleable="true"\]::before\{[^}]*width:4px[^}]*height:4px/);
  object.disconnectedCallback();
});

test('humidifier and purifier forms animate only from their own on state', () => {
  for (const entry of [
    { entity: 'humidifier.master', form: 'humidifier' },
    { entity: 'fan.air_filter', form: 'air_purifier' },
  ]) {
    const object = new ObjectControl();
    object.setConfig({ entity: entry.entity, title: entry.form,
      roomcraft_visual_kind: 'device', roomcraft_device_form: entry.form });
    const css = object.shadowRoot.children[0].textContent;
    if (entry.form === 'humidifier') {
      assert.match(css, /\[data-form="humidifier"\] \.art\{[^}]*border-radius:38% 38% 18% 18%[^}]*radial-gradient/);
      assert.match(css, /\[data-form="humidifier"\]\[data-state="off"\] \.art\{[^}]*brightness\(\.7\)/);
      assert.match(css, /\[data-form="humidifier"\]\[data-state="on"\] \.art\{[^}]*0 0 11px 4px/);
    }
    object.hass = { states: { [entry.entity]: { state: 'off' } } };
    assert.equal(object._button.attributes['data-form'], entry.form);
    assert.equal(object._button.attributes['data-state'], 'off');
    object.hass = { states: { [entry.entity]: { state: 'on' } } };
    assert.equal(object._button.attributes['data-state'], 'on');
    object.disconnectedCallback();
  }
});

test('presence switch dots follow only the bound occupancy entity', () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'light.inovelli_vzm32_sn', title: 'Living presence dimmer',
    roomcraft_visual_kind: 'device', roomcraft_device_form: 'presence_switch',
    roomcraft_presence_entity: 'binary_sensor.inovelli_vzm32_sn_occupancy' });
  const css = object.shadowRoot.children[0].textContent;
  assert.match(css, /\[data-form="presence_switch"\] \.art::after\{[^}]*radial-gradient/);
  assert.match(css, /\[data-form="presence_switch"\]\[data-presence="on"\] \.art::after\{[^}]*roomcraft-presence-dots/);
  object.hass = { states: {
    'light.inovelli_vzm32_sn': { state: 'off' },
    'binary_sensor.inovelli_vzm32_sn_occupancy': { state: 'off' },
  } };
  assert.equal(object._button.attributes['data-state'], 'off');
  assert.equal(object._button.attributes['data-presence'], 'off');
  object.hass = { states: {
    'light.inovelli_vzm32_sn': { state: 'off' },
    'binary_sensor.inovelli_vzm32_sn_occupancy': { state: 'on' },
  } };
  assert.equal(object._button.attributes['data-state'], 'off', 'presence cannot invent the dimmer state');
  assert.equal(object._button.attributes['data-presence'], 'on');
  assert.match(object._button.attributes['aria-label'], /Presence detected/);
  object.setAttribute('data-renderer', 'storybook');
  object.radarStatus = 'tracking';
  object.hass = { states: { 'light.inovelli_vzm32_sn': { state: 'off' } } };
  assert.equal(object._button.attributes['data-state'], 'off');
  assert.equal(object._button.attributes['data-radar'], 'tracking');
  assert.match(object._button.attributes['aria-label'], /Live radar tracking/);
  object.radarStatus = 'clear';
  object.hass = { states: { 'light.inovelli_vzm32_sn': { state: 'on' } } };
  assert.equal(object._button.attributes['data-state'], 'on');
  assert.equal(object._button.attributes['data-radar'], 'clear');
  assert.throws(() => object.setConfig({ entity: 'light.inovelli_vzm32_sn',
    roomcraft_presence_entity: 'light.wrong_domain' }), /invalid device binding/i);
  object.disconnectedCallback();
});

test('window artwork is a narrow pane inside its full touch target', () => {
  const object = new ObjectControl();
  object.setConfig({ entity: 'cover.study_blind', title: 'Study blind',
    roomcraft_visual_kind: 'window', roomcraft_window_axis: 'vertical' });
  object.hass = { states: { 'cover.study_blind': { state: 'open' } } };
  const css = object.shadowRoot.children[0].textContent;
  assert.equal(object._button.attributes['data-axis'], 'vertical');
  assert.equal(object._button.attributes['data-state'], 'on');
  assert.match(css, /\.target\[data-visual="window"\]\[data-axis="vertical"\] \.art\{[^}]*width:clamp\(8px,22%,18px\)/);
  assert.match(css, /\.target\[data-visual="window"\]\[data-axis="horizontal"\] \.art\{[^}]*height:clamp\(8px,22%,18px\)/);
  assert.match(css, /repeating-linear-gradient\(to right/);
  assert.throws(() => object.setConfig({ entity: 'cover.study_blind',
    roomcraft_window_axis: 'diagonal' }), /invalid device binding/i);
  object.disconnectedCallback();
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

test('the entity menu exposes only verified official web portals', () => {
  const menu = new EntityMenu();
  menu.setConfig({ type: 'custom:roomcraft-entity-menu', roomcraft_menu: true,
    bound_objects: [], sections: [] });
  menu.hass = { states: {} };
  menu._open();
  const head = menu._portal.shadowRoot.children[2].children[0];
  const portals = head.children.find(child => child.className === 'links portal-links');
  assert.ok(portals);
  assert.deepEqual(portals.children.map(link => [link.textContent, link.href]), [
    ['Dreame', 'https://smarthome.dreame.tech/'],
    ['Deco', 'http://tplinkdeco.net/'],
  ]);
  assert.equal(portals.children.every(link => link.target === '_blank'), true);
  assert.equal(portals.children.every(link => link.rel === 'noopener noreferrer'), true);
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
  bytes.writeUInt32BE(1536, 16);
  bytes.writeUInt32BE(864, 20);
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
  assert.equal(saved.views[0].cards[0].roomcraft_scene, 'full-width-v1');
  assert.equal(saved.views[0].cards[0].elements.length, 3);
  assert.equal(saved.views[0].cards[0].elements[0].style.left, '42%');
  assert.equal(saved.views[0].cards[0].elements[0].style.top, '39.33%');
  assert.equal(saved.views[0].cards[0].elements[1].type, 'custom:roomcraft-entity-menu');
  assert.equal(saved.views[0].cards[0].elements[2].entity, 'sensor.time');
  assert.equal(saved.views[0].cards[0].elements[2].style.top, '5.3%');
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

test('LAN bridge exports blind axes and validated light forms without shrinking touch targets', async () => {
  let saved = dashboard();
  const card = new Card();
  card.hass = { connected: true, user: { is_admin: true },
    callWS: async request => {
      if (request.type === 'lovelace/config') return structuredClone(saved);
      if (request.type === 'lovelace/config/save') { saved = structuredClone(request.config); return null; }
      throw new Error('Unexpected HA command');
    },
    fetchWithAuth: async () => ({ ok: true, json: async () => ({ id: 'c'.repeat(32) }) }),
  };
  const imported = await card._readDashboard();
  const project = { version: 2, rooms: [], walls: [], hotspots: [], items: [
    { id: 'top-blind', type: 'controlZone', name: 'Top blind', entityId: 'cover.top_blind',
      x: 500, y: 250, w: 120, h: 72, rotation: 0 },
    { id: 'side-blind', type: 'controlZone', name: 'Side blind', entityId: 'cover.side_blind',
      x: 600, y: 250, w: 72, h: 120, rotation: 0 },
    { id: 'office-desk-lamp', type: 'lamp', name: 'Office desk lamp', entityId: 'light.office',
      x: 900, y: 250, w: 48, h: 60, rotation: 0 },
    { id: 'cute-bloom', type: 'lighting-bloom-ceiling-light-mint', name: 'Bloom ceiling light',
      entityId: 'light.bloom', visualKind: 'light', lightForm: 'bloom_ceiling',
      x: 1000, y: 250, w: 60, h: 60, rotation: 0 },
  ] };
  await card._writeDashboard({ project, revision: imported.revision, pngDataUrl: pngDataUrl() });
  const elements = saved.views[0].cards[0].elements;
  const horizontal = elements.find(element => element.roomcraft_item_id === 'top-blind');
  const vertical = elements.find(element => element.roomcraft_item_id === 'side-blind');
  const lamp = elements.find(element => element.roomcraft_item_id === 'office-desk-lamp');
  const bloom = elements.find(element => element.roomcraft_item_id === 'cute-bloom');
  assert.equal(horizontal.roomcraft_window_axis, 'horizontal');
  assert.equal(vertical.roomcraft_window_axis, 'vertical');
  assert.equal(horizontal.style.width, '7.81%');
  assert.equal(horizontal.style.height, '8.33%');
  assert.equal(vertical.style.width, '4.69%');
  assert.equal(vertical.style.height, '13.89%');
  assert.equal(lamp.roomcraft_visual_kind, 'light');
  assert.equal(lamp.roomcraft_light_form, 'table_lamp');
  assert.equal(bloom.roomcraft_light_form, 'bloom_ceiling');
});

test('LAN bridge removes Weather and Time words even on an already-current scene', async () => {
  let saved = dashboard();
  const plan = saved.views[0].cards[0];
  plan.roomcraft_scene = 'full-width-v1';
  plan.elements = [
    { type: 'state-label', entity: 'weather.home', prefix: 'Weather · ',
      style: { left: '68%', top: '5.3%', background: 'rgba(24, 29, 35, 0.8)', padding: '8px 12px' } },
    { type: 'state-label', entity: 'sensor.time', prefix: 'Time · ',
      style: { left: '83%', top: '5.3%', background: 'rgba(24, 29, 35, 0.8)', padding: '8px 12px' } },
  ];
  const card = new Card();
  card.hass = { connected: true, user: { is_admin: true },
    callWS: async request => {
      if (request.type === 'lovelace/config') return structuredClone(saved);
      if (request.type === 'lovelace/config/save') { saved = structuredClone(request.config); return null; }
      throw new Error('Unexpected HA command');
    },
    fetchWithAuth: async () => ({ ok: true, json: async () => ({ id: 'a'.repeat(32) }) }),
  };
  const imported = await card._readDashboard();
  await card._writeDashboard({ project: imported.project, revision: imported.revision,
    pngDataUrl: pngDataUrl() });
  const labels = saved.views[0].cards[0].elements.filter(element => element.type === 'state-label');
  assert.deepEqual(labels.map(element => element.entity), ['weather.home', 'sensor.time']);
  for (const label of labels) {
    assert.equal(label.prefix, undefined);
    assert.equal(label.style.background, 'rgba(17, 33, 35, 0.42)');
    assert.equal(label.style.padding, '4px 7px');
    assert.equal(label.style.top, '5.3%');
  }
});

test('LAN bridge imports controls from the previous 1472 by 828 scene', async () => {
  const saved = dashboard();
  const plan = saved.views[0].cards[0];
  plan.roomcraft_scene = 'wall-to-wall-v1';
  plan.elements[0].style = { left: '42.47%', top: '39.11%' };
  plan.elements[1].style.top = '3.6%';
  const card = new Card();
  card.hass = {
    connected: true,
    user: { is_admin: true },
    callWS: async () => structuredClone(saved),
  };
  const imported = await card._readDashboard();
  assert.equal(imported.hotspots[0].style.left, '42%');
  assert.equal(imported.hotspots[0].style.top, '41%');
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

test('Studio and live view share the signed-in camera preference without touching layout storage', async () => {
  const requests = [];
  const replies = [];
  let stored = null;
  const session = {
    connected: true,
    user: { is_admin: false },
    callWS: async request => {
      requests.push(request);
      assert.equal(request.key, 'roomcraft_default_camera_v1:second-floor');
      if (request.type === 'frontend/set_user_data') stored = request.value;
      else if (request.type === 'frontend/get_user_data') return { value: stored };
      else assert.fail('Camera preferences must only use user data');
    },
  };
  const iframe = { postMessage: reply => replies.push(reply) };
  const card = new Card();
  card.hass = session;
  card._iframe = { contentWindow: iframe };
  const send = async (method, payload, origin = context.location.origin) => card._onMessage({
    source: iframe, origin, data: { channel: 'roomcraft-ha', kind: 'request', id: 1, method, payload },
  });
  const view = { preset: 'free', azimuth: 148, tilt: 39.5, zoom: 1.25 };
  await send('CAMERA_SET', view, 'https://outside.example');
  assert.equal(requests.length, 0);
  await send('CAMERA_SET', { ...view, zoom: 999 });
  assert.equal(replies.at(-1).ok, false);
  assert.equal(requests.length, 0);
  await send('CAMERA_SET', { ...view, unrelated: 'discard' });
  assert.equal(replies.at(-1).ok, true);
  assert.deepEqual({ ...await Card.readStartupView(session, 'second-floor') }, view);
  await Card.writeStartupView(session, 'second-floor', null);
  await send('CAMERA_GET');
  assert.equal(replies.at(-1).data, null);
});

test('embedded editor returns to the dashboard through the signed-in Home Assistant router', async () => {
  const navigations = [];
  const onLocationChanged = event => navigations.push(['location-changed', event.detail?.replace]);
  context.window.history = {
    pushState: (state, title, path) => navigations.push(['pushState', state && {...state}, title, path]),
  };
  context.window.addEventListener('location-changed', onLocationChanged);
  const card = new Card();
  const embedded = {};
  card._iframe = { contentWindow: embedded };
  card.hass = { connected: true, panels: { 'roomcraft-home': {} } };
  const message = {
    origin: context.location.origin,
    source: embedded,
    data: { channel: 'roomcraft-ha', kind: 'navigate', path: 'https://outside.example/' },
  };

  try {
    await card._onMessage({ ...message, origin: 'https://outside.example' });
    await card._onMessage({ ...message, source: {} });
    await card._onMessage({ ...message, data: { ...message.data, channel: 'another-channel' } });
    assert.deepEqual(navigations, []);

    await card._onMessage(message);
    card.hass = { connected: true, panels: {} };
    await card._onMessage(message);
    card._config = {dashboard: 'roomcraft-home'};
    await card._onMessage(message);
    assert.deepEqual(navigations, [
      ['pushState', null, '', '/roomcraft-home/home'], ['location-changed', false],
      ['pushState', null, '', '/second-floor/plan'], ['location-changed', false],
      ['pushState', {from: '/roomcraft-home/studio'}, '', '/roomcraft-home/home'], ['location-changed', false],
    ]);
  } finally {
    context.window.removeEventListener('location-changed', onLocationChanged);
    delete context.window.history;
  }
});
