import test from 'node:test';
import assert from 'node:assert/strict';
import {placeStorybookDetails, placeStorybookTargets, readStorybookConfig, storybookFrame, storybookPreview} from '../ha-local/storybook-state.mjs';

const items = [
  {id: 'motor', type: 'fan', entityId: 'switch.example_motor'},
  {id: 'hub', type: 'ceilingLight', entityId: 'switch.example_lamp'},
  {id: 'rocker', type: 'presenceSwitch', entityId: 'light.example_dimmer',
    presenceTrackEntityId: 'sensor.example_radar'},
  {id: 'camera', type: 'cameraThumbnail', entityId: 'camera.example'},
  {id: 'robot', type: 'robotVacuum', entityId: 'vacuum.example'},
];
const object = (i, kind, extra = {}) => ({
  type: 'custom:roomcraft-object-control',
  roomcraft_item_id: items[i].id,
  entity: items[i].entityId,
  roomcraft_visual_kind: kind,
  ...extra
});
const config = {
  roomcraft_layout: {version: 2, rooms: [], walls: [], items},
  views: [{path: 'plan', cards: [{type: 'picture-elements', elements: [
    object(0, 'fan'),
    object(1, 'light'),
    object(2, 'device', {roomcraft_presence_entity: 'binary_sensor.example_presence'}),
    object(4, 'vacuum', {roomcraft_vacuum_map_entity: 'camera.example_map',
      roomcraft_vacuum_position_transform: [1, 0, 12, 0, 1, 80]}),
    {...object(2, 'device'), entity: 'light.wrong_binding'},
    {type: 'custom:roomcraft-camera-thumbnail', roomcraft_item_id: 'camera',
      camera_entity: 'camera.example', image_entity: 'image.example',
      preview_mode: 'event_live', event_entities: ['binary_sensor.example_ring']},
    {type: 'custom:roomcraft-weather-outdoor', weather_entity: 'weather.example',
      sun_entity: 'sun.sun', moon_entity: 'sensor.example_moon'}
  ]}]}]
};
const model = readStorybookConfig(config);

test('storybook selects only layout-owned plan controls and keeps camera event mode', () => {
  assert.equal(model.layout, config.roomcraft_layout);
  assert.equal(model.controls.length, 5);
  assert.equal(model.controls.at(-1).preview_mode, 'event_live');
  assert.ok(model.watch.has('binary_sensor.example_ring'));
  assert.ok(model.watch.has('binary_sensor.example_presence'));
  assert.ok(!model.watch.has('light.wrong_binding'));
});

test('live refresh watches radar-only updates independently from ordinary switch and occupancy updates', () => {
  const initial = {'sensor.example_radar': {state: '0'}};
  const changed = {...initial, 'sensor.example_radar': {state: '1'}};
  assert.deepEqual([...model.watch].filter(id => changed[id] !== initial[id]), ['sensor.example_radar']);
});

test('physical fan, hub and presence animations read independent state', () => {
  const snapshot = {
    'switch.example_motor': {state: 'off'}, 'switch.example_lamp': {state: 'on'},
    'light.example_dimmer': {state: 'off'}, 'binary_sensor.example_presence': {state: 'on'},
    'weather.example': {state: 'rainy'}, 'sun.sun': {state: 'below_horizon'},
  };
  const before = JSON.stringify(config);
  const frame = storybookFrame(model, snapshot);
  assert.equal(frame.states.motor.active, false);
  assert.equal(frame.states.hub.active, true);
  assert.equal(frame.states.rocker.active, false);
  assert.equal(frame.states.rocker.presence, 'on');
  assert.equal(frame.environment.night, true);
  assert.equal(frame.environment.condition, 'rainy');
  assert.equal(frame.moving, true);
  assert.deepEqual(frame, storybookFrame(model, snapshot));
  assert.equal(JSON.stringify(config), before);
  assert.equal(storybookFrame(model, {}).moving, false);
  assert.equal(storybookFrame(model, {}).states.motor.state, 'unavailable');
});

test('storybook vacuum coordinates require real, fresh, in-bounds data', () => {
  const snapshot = {
    'vacuum.example': {state: 'cleaning'},
    'camera.example_map': {last_updated: '2025-01-01T12:00:00Z', attributes: {vacuum_position: {x: 10, y: 20}}},
  };
  assert.deepEqual(storybookFrame(model, snapshot, Date.parse('2025-01-01T12:01:00Z')).states.robot.position, {x: 22, y: 100});
  assert.equal(storybookFrame(model, snapshot, Date.parse('2025-01-01T12:25:00Z')).states.robot.position, undefined);
});

test('Studio receives matching lighting and only attributes used by the miniature', () => {
  const snapshot = {
    'switch.example_lamp': {state: 'on', attributes: {brightness: 185, rgb_color: [210, 160, 90],
      picture: 'fixture-url'}},
    'sun.sun': {state: 'below_horizon'},
    'vacuum.example': {state: 'cleaning'},
    'camera.example_map': {last_updated: '2025-01-01T12:00:00Z', attributes: {vacuum_position: {x: 10, y: 20}}},
  };
  const preview = storybookPreview(config, snapshot);
  assert.deepEqual(preview.environment, storybookFrame(model, snapshot).environment);
  assert.deepEqual(preview.states.hub, {entityId: 'switch.example_lamp', state: 'on',
    active: true, presence: 'unavailable', attributes: {brightness: 185, rgb_color: [210, 160, 90]}});
  assert.equal(preview.states.camera, undefined);
  assert.equal(preview.states.robot.position, undefined);
  assert.equal(storybookPreview({}, snapshot), null);
});

test('co-located fan and light stay individually tappable inside a tablet viewport', () => {
  const target = {x: 120, y: 120, w: 44, h: 44};
  const targets = [{id: 'fan', ...target, priority: 1}, {id: 'light', ...target, priority: 0}];
  const [light, fan] = placeStorybookTargets(targets, 360, 280);
  assert.equal(light.id, 'light');
  assert.equal(light.x, 120);
  assert.ok(Math.abs(fan.x - light.x) >= 46 || Math.abs(fan.y - light.y) >= 46);
  assert.deepEqual([light, fan], placeStorybookTargets(targets, 360, 280));
});

test('camera tiles keep a railing clear without covering an existing control', () => {
  const control = {id: 'light', x: 140, y: 198, w: 44, h: 44, priority: 0};
  const camera = {id: 'camera', x: 140, y: 130, w: 100, h: 60, priority: 2,
    keepClear: [{left: 80, top: 116, right: 220, bottom: 145}]};
  const targets = [camera, control];
  const [light, tile] = placeStorybookTargets(targets, 400, 300);
  assert.deepEqual(light, control);
  assert.deepEqual([tile.x, tile.y], [140, 62]);
  assert.deepEqual([light, tile], placeStorybookTargets(targets, 400, 300));
});

test('camera tiles search farther for clear space and keep ordinary placement as a fallback', () => {
  const target = {id: 'camera', x: 200, y: 150, w: 100, h: 70};
  const onlyBelow = {left: 0, top: 0, right: 400, bottom: 260};
  const [tile] = placeStorybookTargets([{...target, keepClear: [onlyBelow]}], 400, 380);
  assert.deepEqual([tile.x, tile.y], [200, 320]);

  const entirelyCovered = {left: 0, top: 0, right: 400, bottom: 380};
  const [fallback] = placeStorybookTargets([{...target, keepClear: [entirelyCovered]}], 400, 380);
  assert.deepEqual([fallback.x, fallback.y], [target.x, target.y]);
  assert.deepEqual(placeStorybookTargets([target], 400, 380), [target]);
});

test('details in a crowded phone viewport stay visible without covering controls, cameras or other labels', () => {
  const detail = {width: 108, height: 28};
  const targets = [
    {id:'left', x:24, y:28, w:44, h:44, detail},
    {id:'center', x:71, y:28, w:44, h:44, detail},
    {id:'lower', x:24, y:77, w:44, h:44, detail},
    {id:'camera', x:141, y:30, w:92, h:58},
  ];
  const bounds = targets.map(({x,y,w,h}) => [x-w/2,y-h/2,x+w/2,y+h/2]);
  const placed = placeStorybookDetails(targets, 220, 150);
  assert.deepEqual(placed.map(({id}) => id), ['left','center','lower']);
  assert.deepEqual(placeStorybookDetails(targets, 220, 150), placed);
  for (const {left,top} of placed) {
    const right = left + detail.width;
    const bottom = top + detail.height;
    assert.ok(left >= 0 && top >= 0 && right <= 220 && bottom <= 150);
    assert.ok(bounds.every(([x,y,r,b]) => right <= x || left >= r || bottom <= y || top >= b));
    bounds.push([left,top,right,bottom]);
  }
});

test('an unavoidable collision keeps the label in frame over the least occupied area', () => {
  const targets = [
    {id:'control', x:20, y:20, w:100, h:40, detail:{width:30,height:20}},
    {id:'camera', x:20, y:20, w:40, h:40},
  ];
  assert.deepEqual(placeStorybookDetails(targets, 60, 40), [{id:'control', left:30, top:10}]);
});
