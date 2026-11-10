import test from 'node:test';
import assert from 'node:assert/strict';
import {placeStorybookTargets, readStorybookConfig, storybookFrame} from '../ha-local/storybook-state.mjs';

const items = [
  {id: 'motor', type: 'fan', entityId: 'switch.example_motor'},
  {id: 'hub', type: 'ceilingLight', entityId: 'switch.example_lamp'},
  {id: 'rocker', type: 'presenceSwitch', entityId: 'light.example_dimmer'},
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

test('co-located fan and light stay individually tappable inside a tablet viewport', () => {
  const target = {x: 120, y: 120, w: 44, h: 44};
  const targets = [{id: 'fan', ...target, priority: 1}, {id: 'light', ...target, priority: 0}];
  const [light, fan] = placeStorybookTargets(targets, 360, 280);
  assert.equal(light.id, 'light');
  assert.equal(light.x, 120);
  assert.ok(Math.abs(fan.x - light.x) >= 46 || Math.abs(fan.y - light.y) >= 46);
  assert.deepEqual([light, fan], placeStorybookTargets(targets, 360, 280));
});
