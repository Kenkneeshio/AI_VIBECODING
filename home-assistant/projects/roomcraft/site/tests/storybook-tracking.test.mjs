import assert from 'node:assert/strict';
import test from 'node:test';
import {createPersonPresence, readDetectionZones, readPersonTracks, trackingSnapshots, validTrackTransform} from '../ha-local/storybook-tracking.mjs';

const source = {type:'presenceSwitch', presenceTrackEntityId:'sensor.radar_a',
  presenceTrackTransform:[0,-1.1,600,1.1,0,400]};
const snapshot = (id = 1, x = 20, y = 100, at = 8000) => ({state:'1', attributes:{
  tracking_schema:'roomcraft-presence-v1', observed_at:at, tracks:[{id,x,y,z:5,speed:0}],
  zones:[true,false], internal:'ignored',
}});

test('detection zone uses the radar calibration and clips to the editable map', () => {
  const zone = {id:'radar', ...source, presenceTrackZone:[-600,600,0,600]};
  assert.deepEqual(readDetectionZones([zone]), [{
    id:'radar', kind:'configured', points:[{x:0,y:0},{x:600,y:0},{x:600,y:1024},{x:0,y:1024}],
    origin:{x:600,y:400}, forward:{x:-1,y:0},
  }]);
  assert.deepEqual(readDetectionZones([{...zone,presenceTrackZone:[10,-10,0,600]}, source]), []);
});

test('project the Inovelli forward lobe independently of the configured rectangle', () => {
  const switchItem = {id:'radar', ...source, presenceTrackTransform:[0,-1,800,1,0,500],
    presenceTrackZone:[-50,50,0,100], presenceTrackProfile:'inovelli-vzm32-sn'};
  const [configured, nominal] = readDetectionZones([switchItem]);
  assert.equal(configured.kind, 'configured');
  assert.equal(nominal.kind, 'nominal');
  assert.equal(configured.rangeMeters, undefined);
  assert.equal(nominal.rangeMeters, 6);
  assert.deepEqual(nominal.points.find(point => point.x === 200), {x:200,y:500});
  assert.deepEqual(nominal.points.find(point => point.x === 800), {x:800,y:500});
  assert.ok(nominal.points.length > 20);
  assert.deepEqual(readDetectionZones([{...switchItem,presenceTrackProfile:'other'}]), [configured]);
  assert.deepEqual(readDetectionZones([{...switchItem,presenceTrackZone:undefined}]), [nominal]);
  const clipped = readDetectionZones([{...switchItem,presenceTrackTransform:[0,-1,300,1,0,100]}]);
  assert.ok(clipped.some(zone => zone.kind === 'nominal' && zone.points.some(point => point.x === 0)));
  assert.ok(clipped.every(zone => zone.points.every(({x,y}) => x >= 0 && y >= 0)));
  for (const zone of clipped) {
    assert.deepEqual(zone.origin, {x:300,y:100});
    assert.deepEqual(zone.forward, {x:-1,y:0});
  }
  assert.equal(clipped.find(zone => zone.kind === 'nominal').rangeMeters, 6);
});

test('coverage markers follow affine radar +Y and are omitted when their origin is clipped', () => {
  const item = {id:'radar', ...source, presenceTrackZone:[-50,50,0,100]};
  const [normal] = readDetectionZones([{...item,presenceTrackTransform:[1,3,400,-1,4,500]}]);
  const [mirrored] = readDetectionZones([{...item,presenceTrackTransform:[-1,3,400,1,4,500]}]);
  assert.deepEqual(normal.origin, {x:400,y:500});
  assert.deepEqual(mirrored.origin, normal.origin);
  assert.deepEqual(normal.forward, {x:.6,y:.8});
  assert.deepEqual(mirrored.forward, normal.forward);
  const clipped = readDetectionZones([{...item,presenceTrackProfile:'inovelli-vzm32-sn',
    presenceTrackTransform:[1,1,-25,0,1,100]}]);
  assert.deepEqual(clipped.map(zone => zone.kind), ['configured', 'nominal']);
  assert.ok(clipped.every(zone => zone.points.some(point => point.x === 0)));
  assert.ok(clipped.every(zone => !Object.hasOwn(zone, 'origin') && !Object.hasOwn(zone, 'forward')));
  assert.equal(clipped[1].rangeMeters, 6);
});

test('map coordinates from multiple radars and keep source-scoped track identities', () => {
  const states = {'sensor.radar_a':snapshot(), 'sensor.radar_b':snapshot()};
  const second = {...source, presenceTrackEntityId:'sensor.radar_b', presenceTrackTransform:[1,0,800,0,1,500]};
  assert.deepEqual(readPersonTracks([source, {...source}, second], states, 9000), [
    {id:'sensor.radar_a:1',x:490,y:422,expiresAt:12500},
    {id:'sensor.radar_b:1',x:820,y:600,expiresAt:12500},
  ]);
});

test('drop stale, unknown, out of range and malformed data without inferring people', () => {
  const states = {'sensor.radar_a':snapshot()};
  assert.deepEqual(readPersonTracks([source], states, 12500), []);
  assert.deepEqual(readPersonTracks([source], states, 6500), []);
  assert.deepEqual(readPersonTracks([source], {'sensor.radar_a':snapshot(2,20,680)}, 9000), []);
  assert.deepEqual(readPersonTracks([source], {'sensor.radar_a':{...snapshot(),state:'unavailable'}}, 9000), []);
  assert.equal(validTrackTransform([1,2,3,2,4,6]), false);
  assert.equal(validTrackTransform(source.presenceTrackTransform), true);
});

test('only authorized tracker schema fields are passed to Studio', () => {
  const states = {
    'sensor.radar_a':snapshot(),
    'sensor.other':{state:'21',attributes:{friendly_name:'Temperature'}},
  };
  const result = trackingSnapshots(states, ['sensor.radar_a','sensor.other','light.example']);
  assert.deepEqual(Object.keys(result), ['sensor.radar_a']);
  assert.deepEqual(result['sensor.radar_a'].attributes.tracks, [{id:1,x:20,y:100,z:5,speed:0}]);
  assert.equal(result['sensor.radar_a'].attributes.internal, undefined);
});

test('an occupied source survives empty radar frames and coordinate expiry, then clears on vacancy', () => {
  const model = createPersonPresence();
  const item = {...source, presenceEntityId:'binary_sensor.occupied', presenceTrackZone:[-20,20,0,80]};
  const supports = {
    contains: (x, y) => x >= 400 && x <= 650 && y >= 350 && y <= 550,
    nearest: (x, y) => x >= 400 && x <= 650 && y >= 350 && y <= 550 ? {x, y} : null,
  };
  const read = (at, radar, state = 'on') => model.read([item], {
    'sensor.radar_a': radar, 'binary_sensor.occupied': {state},
  }, at, supports);
  assert.deepEqual(read(9000, undefined).map(({x,y,quality}) => [x,y,quality]), [[556,400,'area']]);
  const [measured] = read(9000, snapshot());
  assert.equal(measured.quality, undefined);
  assert.equal(measured.keepVisible, true);
  const zero = {state:'0', attributes:{...snapshot().attributes, tracks:[], observed_at:10500}};
  const [held] = read(14000, zero);
  assert.deepEqual([held.id, held.x, held.y, held.quality, held.expiresAt],
    [measured.id, measured.x, measured.y, 'last-known', undefined]);
  const invalid = snapshot(1, -700, 150, 15000);
  assert.deepEqual(read(15001, invalid), [held]);
  assert.deepEqual(read(15002, zero, 'off'), []);
  assert.equal(read(15003, zero)[0].quality, 'area');
  assert.deepEqual(read(15004, undefined, 'unavailable'), []);
});

test('a new viewer can recover the last occupied coordinate, but stale zone flags cannot imply occupancy', () => {
  const item = {...source, presenceEntityId:'binary_sensor.occupied'};
  const attributes = {...snapshot().attributes, tracks:[], observed_at:null,
    last_observed_at:8000, last_tracks:snapshot().attributes.tracks, zones_observed_at:12000};
  const states = {'sensor.radar_a':{state:'unknown', attributes}, 'binary_sensor.occupied':{state:'on'}};
  const supports = {contains: () => true, nearest: (x, y) => ({x, y})};
  const bridge = trackingSnapshots(states, ['sensor.radar_a', 'binary_sensor.occupied']);
  assert.deepEqual(bridge['binary_sensor.occupied'], {state:'on'});
  const [restored] = createPersonPresence().read([item], bridge, 23000, supports);
  assert.deepEqual([restored.id, restored.x, restored.y, restored.quality], ['sensor.radar_a:1',490,422,'last-known']);
  delete bridge['binary_sensor.occupied'];
  const model = createPersonPresence();
  assert.equal(model.read([item], bridge, 12500, supports)[0].expiresAt, 16500);
  assert.deepEqual(model.read([item], bridge, 16500, supports), []);
});

test('an occupancy-only switch can mark its area without inventing radar coordinates', () => {
  const item = {type:'presenceSwitch', x:400, y:375, presenceEntityId:'binary_sensor.occupied'};
  const model = createPersonPresence();
  const supports = {contains: () => true, nearest: (x, y) => ({x, y})};
  assert.deepEqual(model.read([item], {'binary_sensor.occupied':{state:'on'}}, 20000, supports), [{
    id:'binary_sensor.occupied:area', x:400, y:375, quality:'area', keepVisible:true, expiresAt:undefined,
  }]);
  assert.deepEqual(model.read([item], {'binary_sensor.occupied':{state:'off'}}, 20001, supports), []);
});
