import assert from 'node:assert/strict';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
import {buildSync} from 'esbuild';

const {outputFiles: [bundle]} = buildSync({
  entryPoints: [fileURLToPath(new URL('../app/api/dashboard/route.ts', import.meta.url))],
  bundle: true, format: 'cjs', platform: 'node', write: false, external: ['cloudflare:workers'],
});
const startBridge = new Function('module', 'exports', 'require', 'WebSocket', 'fetch', bundle.text);
const project = {version: 2, rooms: [], walls: [], items: [], hotspots: []};
const plan = {type: 'picture-elements', image: '/local/old.png', elements: []};
const home = {
  roomcraft_layout: project,
  roomcraft_plan: plan,
  roomcraft_utilities: {health: []},
  views: [{path: 'home'}, {path: 'studio'}],
};
const legacy = {
  roomcraft_layout: project,
  views: [{path: 'plan', cards: [plan]}, {path: 'studio'}],
};
const shell = {views: [{path: 'home'}]};
const canonicalPath = 'roomcraft-home';
const legacyPath = 'second-floor';
const origin = 'https://studio.example.test';
const testEmail = 'owner@example.test';

function harness(records, {onUpload, readError, dropOn} = {}) {
  const dashboards = structuredClone(records);
  const calls = [];
  class Socket {
    listeners = new Map();
    constructor() { this.emit({type: 'auth_required'}); }
    addEventListener(name, listener) { this.listeners.set(name, listener); }
    emit(payload) {
      queueMicrotask(() => this.listeners.get('message')?.({data: JSON.stringify(payload)}));
    }
    send(payload) {
      const command = JSON.parse(payload);
      if (command.type === 'auth') {
        this.emit({type: 'auth_ok'});
        return;
      }
      const {id, type, url_path: path} = command;
      calls.push([type, path]);
      if (type === dropOn) {
        queueMicrotask(() => this.listeners.get('close')?.());
        return;
      }
      if (type === 'get_states') this.emit({id, success: true, result: []});
      if (type === 'get_config') this.emit({id, success: true, result: {time_zone: 'America/Los_Angeles'}});
      if (type === 'lovelace/config/save') {
        dashboards[path] = command.config;
        this.emit({id, success: true});
      }
      if (type === 'lovelace/config') {
        const error = readError?.(path) || (!dashboards[path] && 'config_not_found');
        if (error) this.emit({id, success: false, error: {code: error}});
        else this.emit({id, success: true, result: dashboards[path]});
      }
    }
    close() {}
  }
  const bridgeModule = {exports: {}};
  startBridge(bridgeModule, bridgeModule.exports, name => {
    assert.equal(name, 'cloudflare:workers');
    return {env: {HA_URL: 'https://ha.example.test', HA_TOKEN: 'test-token', OWNER_EMAIL: testEmail}};
  }, Socket, async () => {
    onUpload?.(dashboards);
    return Response.json({id: 'a'.repeat(32)});
  });
  return {route: bridgeModule.exports, calls, dashboards};
}

function request(body) {
  return new Request(`${origin}/api/dashboard`, {
    method: body ? 'POST' : 'GET',
    headers: {
      'oai-authenticated-user-id': 'test-user',
      'oai-authenticated-user-email': testEmail,
      ...(body && {'Content-Type': 'application/json', Origin: origin}),
    },
    body: body && JSON.stringify(body),
  });
}

function testPng() {
  const png = Buffer.alloc(24);
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(png);
  png.writeUInt32BE(1536, 16);
  png.writeUInt32BE(864, 20);
  return `data:image/png;base64,${png.toString('base64')}`;
}

test('hosted editor reads and saves the canonical dashboard without recreating the floor plan view', async () => {
  const {route, calls, dashboards} = harness({[canonicalPath]: home, [legacyPath]: legacy});
  const before = await route.GET(request());
  assert.equal(before.status, 200);
  const imported = await before.json();
  assert.equal(imported.source, 'https://ha.example.test/roomcraft-home/home');
  const nextProject = {...project, hotspots: [{type: 'state-icon', entity: 'light.example', style: {left: '33%', top: '43%'}}]};
  const after = await route.POST(request({revision: imported.revision, project: nextProject, pngDataUrl: testPng()}));
  assert.equal(after.status, 200);
  assert.deepEqual(dashboards[canonicalPath].roomcraft_layout, nextProject);
  assert.deepEqual(dashboards[canonicalPath].views, home.views);
  assert.deepEqual(dashboards[canonicalPath].roomcraft_utilities, home.roomcraft_utilities);
  assert.equal(dashboards[canonicalPath].roomcraft_plan.elements[0].entity, 'light.example');
  assert.deepEqual(dashboards[legacyPath], legacy);
  assert.equal(calls.some(([, path]) => path === legacyPath), false);
});

test('hosted publication validates scene settings and preserves approved booleans', async () => {
  const {route, dashboards, calls} = harness({[canonicalPath]:home});
  const imported = await (await route.GET(request())).json();
  assert.deepEqual(imported.storybookPreview.environment.traffic, {severity:'ambient'});
  const send = sceneSettings => route.POST(request({revision:imported.revision,
    project:{...project, sceneSettings}, pngDataUrl:testPng()}));
  for (const invalid of [{boats:'false'}, {unrecognized:false}, null]) {
    assert.equal((await send(invalid)).status, 400);
  }
  assert.equal(calls.filter(([type]) => type === 'lovelace/config/save').length, 0);
  const settings = {boats:false, precipitation:true, sidewalk:false};
  assert.equal((await send(settings)).status, 200);
  assert.deepEqual(dashboards[canonicalPath].roomcraft_layout.sceneSettings, settings);
});

test('hosted publication round-trips canonical terrain and blocks malformed cells before uploading', async () => {
  let uploads = 0;
  const {route, dashboards} = harness({[canonicalPath]:home}, {onUpload:() => uploads++});
  const before = await (await route.GET(request())).json();
  const send = terrain => route.POST(request({revision:before.revision,
    project:{...project, terrain}, pngDataUrl:testPng()}));
  assert.equal((await send({cells:[{col:0, row:1, height:4}, {col:0, row:1, cover:'stone'}]})).status, 400);
  assert.equal((await send({roadSetback:181})).status, 400);
  assert.equal((await send({cells:[{col:0, row:1, prop:null}]})).status, 400);
  assert.equal(uploads, 0);
  const terrain = {road:'winding', hillHeight:100, cells:[
    {col:4, row:2, height:10}, {col:1, row:-1, prop:'oak'}, {col:0, row:0, height:0},
  ]};
  const expected = {road:'winding', cells:[{col:1, row:-1, prop:'oak'}, {col:4, row:2, height:10}]};
  assert.equal((await send(terrain)).status, 200);
  assert.equal(uploads, 1);
  assert.deepEqual(dashboards[canonicalPath].roomcraft_layout.terrain, expected);
  const after = await (await route.GET(request())).json();
  assert.deepEqual(after.project.terrain, expected);
  assert.notEqual(after.revision, before.revision);
});

test('hosted and native project constraints reject malformed plan geometry before upload', async () => {
  let uploads = 0;
  const {route, calls} = harness({[canonicalPath]:home}, {onUpload: () => uploads++});
  const imported = await (await route.GET(request())).json();
  for (const invalid of [
    {...project, rooms:[{points:[{x:1,y:2}]}]},
    {...project, rooms:Array(201).fill({points:[{x:0,y:0},{x:1,y:0},{x:1,y:1}]})},
    {...project, items:[{id:'edit',type:'uiEdit',x:-3,y:850,w:40,h:40}]},
    {...project, walls:[{id:'wall',x1:1,y1:2,x2:null,y2:3}]},
  ]) {
    const response = await route.POST(request({revision:imported.revision, project:invalid, pngDataUrl:testPng()}));
    assert.equal(response.status, 400);
  }
  assert.equal(uploads, 0);
  assert.equal(calls.filter(([type]) => type === 'lovelace/config/save').length, 0);
});

test('hosted editor falls back only for an unmigrated or missing Roomcraft Home', async () => {
  for (const current of [undefined, shell]) {
    const {route} = harness({[canonicalPath]: current, [legacyPath]: legacy});
    const response = await route.GET(request());
    assert.equal(response.status, 200);
    assert.equal((await response.json()).source, 'https://ha.example.test/second-floor/plan');
  }
  for (const [current, options, status] of [
    [{...home, roomcraft_plan: null}, {}, 409],
    [{...shell, roomcraft_layout: project}, {}, 409],
    [shell, {readError: path => path === canonicalPath ? 'unauthorized' : undefined}, 502],
  ]) {
    const {route, calls} = harness({[canonicalPath]: current, [legacyPath]: legacy}, options);
    assert.equal((await route.GET(request())).status, status);
    assert.equal(calls.some(([, path]) => path === legacyPath), false);
  }
});

test('hosted editor rejects a dashboard migration that lands during image upload', async () => {
  const {route, calls} = harness({[canonicalPath]: shell, [legacyPath]: legacy}, {
    onUpload: dashboards => { dashboards[canonicalPath] = structuredClone(home); },
  });
  const imported = await (await route.GET(request())).json();
  const response = await route.POST(request({revision: imported.revision, project, pngDataUrl: testPng()}));
  assert.equal(response.status, 409);
  assert.equal(calls.some(([type]) => type === 'lovelace/config/save'), false);
});

test('hosted publish snapshots the previous layout and exact projection in the same save', async () => {
  const previous = {...home, roomcraft_plan: {...plan, image: `/api/image/serve/${'b'.repeat(32)}/original`}};
  const {route, dashboards} = harness({[canonicalPath]: previous});
  const imported = await (await route.GET(request())).json();
  const response = await route.POST(request({revision: imported.revision,
    project: {...project, items: [{id: 'example-lamp', type: 'lamp'}]}, pngDataUrl: testPng()}));
  assert.equal(response.status, 200);
  const saved = dashboards[canonicalPath];
  assert.equal(saved.roomcraft_snapshots.length, 1);
  assert.deepEqual(saved.roomcraft_snapshots[0].layout, previous.roomcraft_layout);
  assert.deepEqual(saved.roomcraft_snapshots[0].plan, previous.roomcraft_plan);
  assert.ok(Number.isFinite(Date.parse(saved.roomcraft_snapshots[0].savedAt)));
});

test('hosted transfer caps the actual request bytes without a Content-Length header', async () => {
  const {route, calls} = harness({[canonicalPath]: home});
  const incoming = request({padding: 'ä'.repeat(8 * 1024 * 1024)});
  assert.equal(incoming.headers.has('Content-Length'), false);
  const response = await route.POST(incoming);
  assert.equal(response.status, 413);
  assert.deepEqual(calls, []);
});

test('hosted bridge fails immediately when Home Assistant disconnects during a command', async () => {
  const {route} = harness({[canonicalPath]: home}, {dropOn: 'lovelace/config'});
  const response = await route.GET(request());
  assert.equal(response.status, 502);
  assert.equal((await response.json()).error, 'ha_unavailable');
});
