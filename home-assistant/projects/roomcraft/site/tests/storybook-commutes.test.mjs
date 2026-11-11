import assert from 'node:assert/strict';
import test from 'node:test';
import {combineCommuteReadings, commuteReading, commuteSpeed, googleDirectionsUrl, readStorybookCommutes,
  saveCommuteRoutes, validateCommuteEdits} from '../ha-local/storybook-commutes.mjs';

test('Grok speed fixtures preserve free-flow, delay, capped speed and invalid input', () => {
  for (const [baseline, live, speed] of [[60, 60, 1], [60, 120, .5], [60, 30, 1], [null, null, null],
    [0, 60, null], [60, 0, null], [60, -30, null]]) assert.equal(commuteSpeed(baseline, live), speed);
});

test('only validated named HA sensors can become commute sources', () => {
  assert.deepEqual(readStorybookCommutes({version: 1, routes: [
    {name: 'Work', entity: 'sensor.test_commute', baselineMinutes: 20},
    {name: 'Duplicate', entity: 'sensor.test_commute'},
    {name: 'Bad', entity: 'https://example.test/private'},
  ]}), [{name: 'Work', entity: 'sensor.test_commute', baselineMinutes: 20, baselineEntity: undefined}]);
});

test('a route with fresh measured minutes and a baseline drives the art and expires', () => {
  const route = {entity: 'sensor.test_commute', baselineMinutes: 20};
  const now = Date.parse('2026-11-11T18:00:00Z');
  const states = {[route.entity]: {state: '2400', attributes: {unit_of_measurement: 's'},
    last_updated: new Date(now).toISOString()}};
  assert.deepEqual(commuteReading(route, states, now).profile, {severity: 'heavy', speedFactor: .5});
  assert.equal(commuteReading(route, states, now + 20 * 60 * 1000).reason, 'stale');
  assert.equal(commuteReading({...route, baselineMinutes: undefined}, states, now).reason, 'baseline');
  assert.equal(commuteReading(route, undefined, now).reason, 'unavailable');
  assert.equal(commuteReading(undefined, states, now).reason, 'setup');
});

test('pending routes retain their names without providing fake traffic data', () => {
  const routes = readStorybookCommutes({version: 1, routes: [
    {name: 'First', baselineMinutes: 25}, {name: 'Second', entity: ''}, {name: 'Third', entity: null},
  ]});
  assert.deepEqual(routes.map(({name}) => name), ['First', 'Second', 'Third']);
  assert.deepEqual(routes.map(route => commuteReading(route, {}, 0).reason), ['pending', 'pending', 'pending']);
  assert.deepEqual(combineCommuteReadings(routes.map(route => commuteReading(route, {}, 0))),
    {reporting: 0, total: 3, profile: undefined, expiresAt: undefined});
});

test('the all-route traffic mix weights fresh calibrated ratios equally and expires at the next boundary', () => {
  const now = Date.parse('2026-11-11T18:00:00Z');
  const minute = 60_000;
  const value = (reading, offset) => ({state: String(reading), attributes: {unit_of_measurement: 'min'},
    last_reported: new Date(now - offset * minute).toISOString()});
  const routes = [{name: 'Long', entity: 'sensor.long', baselineMinutes: 50},
    {name: 'Short', entity: 'sensor.short', baselineMinutes: 10}, {name: 'Pending'},
    {name: 'Stale', entity: 'sensor.old', baselineMinutes: 1}, {name: 'No baseline', entity: 'sensor.new'}];
  const states = {'sensor.long': value(100, 1), 'sensor.short': value(10, 2),
    'sensor.old': value(1000, 21), 'sensor.new': value(1, 4)};
  const mix = combineCommuteReadings(routes.map(route => commuteReading(route, states, now)));
  assert.deepEqual(mix, {reporting: 2, total: 5, expiresAt: now + 16 * minute,
    profile: {severity: 'slow', speedFactor: .75}});
});

test('route editing validates duplicates, input format and positive baselines', () => {
  const valid = {name: 'Work', entity: 'sensor.office_trip', baselineMinutes: '20'};
  assert.deepEqual(validateCommuteEdits([valid, {name: 'Pending'}]), {routes: [
    {name: 'Work', entity: 'sensor.office_trip', baselineMinutes: 20}, {name: 'Pending'},
  ]});
  assert.match(validateCommuteEdits([valid, {...valid, name: 'Second'}]).error, /unique/);
  assert.match(validateCommuteEdits([{...valid, baselineEntity: valid.entity}]).error, /different/);
  assert.match(validateCommuteEdits([{...valid, baselineMinutes: '0'}]).error, /positive/);
});

test('saving routes preserves latest dashboard fields and verifies the written mapping', async () => {
  const expected = {version: 1, routes: [{name: 'Pending'}]};
  const routes = [{name: 'Pending', entity: 'sensor.work', baselineMinutes: 25, destination: 'Example station'}];
  const design = {rooms: [], walls: [], items: []};
  let config = {roomcraft_commutes: expected, roomcraft_layout: design, views: [{path: 'home'}]};
  const calls = [];
  const session = {user: {is_admin: true}, async callWS(message) {
    calls.push(message.type);
    if (message.type === 'lovelace/config/save') config = message.config;
    return config;
  }};
  assert.equal((await saveCommuteRoutes(session, 'roomcraft-home', expected, routes, () => true)).status, 'saved');
  assert.deepEqual(calls, ['lovelace/config', 'lovelace/config/save', 'lovelace/config']);
  assert.equal(config.roomcraft_layout, design);
  assert.deepEqual(config.views, [{path: 'home'}]);
  assert.deepEqual(config.roomcraft_commutes.routes, routes);
  assert.equal(readStorybookCommutes(config.roomcraft_commutes)[0].destination, 'Example station');
  calls.length = 0;
  assert.equal((await saveCommuteRoutes(session, 'roomcraft-home', expected, [], () => true)).status, 'changed');
  assert.deepEqual(calls, ['lovelace/config']);
  assert.equal((await saveCommuteRoutes(session, 'roomcraft-home', expected, [], () => false)).status, 'closed');
  assert.deepEqual(calls, ['lovelace/config']);
  assert.equal((await saveCommuteRoutes({user: {is_admin: false}}, 'roomcraft-home', expected, [], () => true)).status, 'closed');
});

test('Google Maps directions only encode the configured destination on a fixed origin', () => {
  const destination = 'Station, North &origin=private#route';
  const edit = validateCommuteEdits([{name: 'Station', destination: `  ${destination}  `}]);
  assert.deepEqual(edit.routes, [{name: 'Station', destination}]);
  const url = new URL(googleDirectionsUrl(edit.routes[0].destination));
  assert.equal(url.origin + url.pathname, 'https://www.google.com/maps/dir/');
  assert.deepEqual(Object.fromEntries(url.searchParams), {api: '1', destination, travelmode: 'driving'});
  assert.equal(googleDirectionsUrl(''), undefined);
  assert.equal(googleDirectionsUrl('a'.repeat(201)), undefined);
});
