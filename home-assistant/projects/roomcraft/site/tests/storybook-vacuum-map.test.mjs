import assert from 'node:assert/strict';
import test from 'node:test';
import {loadVacuumMap} from '../ha-local/storybook-vacuum-map.mjs';
import {storybookFrame} from '../ha-local/storybook-state.mjs';

const camera = 'camera.test_lidar';
const mapState = mapId => ({state:'2026-11-11T00:00:00.000Z', last_updated:'2026-11-11T00:00:00.000Z',
  attributes:{map_id:9, saved_map_id:mapId, vacuum_position:{x:250,y:400},
    calibration_points:[
      {map:{x:20,y:140},vacuum:{x:0,y:0}}, {map:{x:120,y:140},vacuum:{x:1000,y:0}},
      {map:{x:20,y:40},vacuum:{x:0,y:1000}},
    ]}});

test('the vacuum position is suppressed when the selected map is a different floor', () => {
  const element = {type:'custom:roomcraft-object-control', roomcraft_item_id:'v', entity:'vacuum.test',
    roomcraft_visual_kind:'vacuum', roomcraft_vacuum_map_entity:camera, roomcraft_vacuum_map_id:13,
    roomcraft_vacuum_position_transform:[.1,0,400,0,.1,400]};
  const model = {weather:{},controls:[element]};
  const now = Date.parse('2026-11-11T00:01:00Z');
  const frame = mapId => storybookFrame(model, {'vacuum.test':{state:'cleaning'},[camera]:mapState(mapId)}, now).states.v;
  assert.deepEqual(frame(13).position, {x:425,y:440});
  assert.equal(frame(14).position, undefined);
  assert.equal(frame(14).wrongMap, true);
});

test('the map adapter requests only the authenticated camera snapshot and retries a changed crop or floor', async () => {
  const calls = [];
  const states = {[camera]:mapState(13)};
  const session = {states, async fetchWithAuth(url, options) {
    calls.push({url, options});
    if (calls.length === 1) states[camera] = mapState(14);
    return new Response(new Uint8Array([137,80,78,71]), {headers:{'content-type':'image/png'}});
  }};
  const originalReader = globalThis.FileReader;
  globalThis.FileReader = class extends EventTarget {
    async readAsDataURL(blob) {
      this.result = 'data:' + blob.type + ';base64,' + Buffer.from(await blob.arrayBuffer()).toString('base64');
      this.dispatchEvent(new Event('load'));
    }
  };
  try {
    const result = await loadVacuumMap(session, camera);
    assert.equal(result.mapId, 14);
    assert.equal(result.imageDataUrl, 'data:image/png;base64,iVBORw==');
    assert.equal(result.mapUnitsPerMetre, 1000);
    assert.equal(calls.length, 2);
    assert.ok(calls.every(({url, options}) => url === '/api/camera_proxy/camera.test_lidar' &&
      options.cache === 'no-store' && options.method === undefined));
    await assert.rejects(loadVacuumMap(session, 'camera.unrelated'), /no calibrated/);
    await assert.rejects(loadVacuumMap(session, 'https://invalid.example/'), /available LiDAR/);
    assert.equal(calls.length, 2);
  } finally {
    if (originalReader === undefined) delete globalThis.FileReader;
    else globalThis.FileReader = originalReader;
  }
});
