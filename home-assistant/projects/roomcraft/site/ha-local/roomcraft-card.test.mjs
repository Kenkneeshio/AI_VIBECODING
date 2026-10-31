import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const code = fs.readFileSync(new URL('./roomcraft-card.js', import.meta.url), 'utf8');
let Card;
const registered = new Map();
const context = {
  HTMLElement: class { attachShadow() { return {}; } },
  customElements: {
    get(name) { return registered.get(name); },
    define(name, value) {
      if (registered.has(name)) throw new Error(`Element already registered: ${name}`);
      registered.set(name, value);
      Card = value;
    },
  },
  window: { customCards: [] },
  location: { origin: 'http://ha.example.test' },
  document: {},
  structuredClone,
  JSON,
  Uint8Array,
  Blob,
  FormData,
  atob,
  URL,
  Date,
  Map,
};
vm.runInNewContext(code, context);

test('resource registration is safe when Home Assistant imports another version', () => {
  assert.doesNotThrow(() => vm.runInNewContext(code, { ...context }));
  assert.equal(registered.get('roomcraft-editor-card'), Card);
  assert.equal(context.window.customCards.filter(card => card.type === 'roomcraft-editor-card').length, 1);
});

function dashboard() {
  return {
    title: 'Second Floor',
    views: [
      { path: 'plan', cards: [{ type: 'picture-elements', image: '/api/image/serve/old/original', elements: [
        { type: 'state-icon', entity: 'light.study', style: { left: '30%', top: '40%' } },
        { type: 'state-label', entity: 'sensor.time', style: { left: '50%', top: '10%' } },
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
  bytes.writeUInt32BE(1024, 20);
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
  const project = { version: 2, rooms: [], walls: [], items: [], hotspots: [
    { id: 'control-1', type: 'state-icon', entity: 'light.study', style: { left: '42%', top: '41%' } },
  ] };
  const exported = await card._writeDashboard({ project, revision: imported.revision, pngDataUrl: pngDataUrl() });
  assert.equal(uploaded, true);
  assert.equal(exported.project.hotspots.length, 1);
  assert.equal(saved.views[0].cards[0].elements.length, 2);
  assert.equal(saved.views[0].cards[0].elements[0].style.left, '42%');
  assert.equal(saved.views[0].cards[0].elements[1].entity, 'sensor.time');
  assert.equal(saved.views[1].cards[0].title, 'Live');
  assert.match(saved.views[0].cards[0].image, /^\/api\/image\/serve\/a{32}\/original$/);
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
