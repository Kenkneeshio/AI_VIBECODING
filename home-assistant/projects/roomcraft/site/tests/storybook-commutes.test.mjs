import assert from 'node:assert/strict';
import test from 'node:test';
import {commuteReading, commuteSpeed, readStorybookCommutes} from '../ha-local/storybook-commutes.mjs';

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
