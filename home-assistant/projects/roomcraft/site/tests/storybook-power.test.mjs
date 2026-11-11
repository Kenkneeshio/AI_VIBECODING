import test from 'node:test';
import assert from 'node:assert/strict';
import {powerHistorySamples, powerPanelModel} from '../ha-local/storybook-power.mjs';

const entry = (id, name = '') => ({entity: `sensor.${id}`, name});
const meter = (state, unit, friendly_name) => ({state, attributes: {unit_of_measurement: unit, friendly_name}});

test('Power features configured live home power and energy periods without adding meter values', () => {
  const entries = [entry('total', 'Home power'), entry('daily', 'Today'), entry('monthly', 'This month')];
  const result = powerPanelModel(entries, {
    'sensor.total': meter('880', 'W'),
    'sensor.daily': meter('3.1', 'kWh'),
    'sensor.monthly': meter('51000', 'Wh'),
  });
  assert.equal(result.primary.name, 'Home power');
  assert.equal(result.primary.watts, 880);
  assert.equal(result.primary.wholeHome, true);
  assert.equal(result.today.kwh, 3.1);
  assert.equal(result.month.kwh, 51);
  assert.equal(result.availableCount, 3);
  assert.deepEqual(result.other, []);
});

test('Power keeps an unavailable known primary and includes zero without guessing cross-unit loads', () => {
  const result = powerPanelModel([
    entry('main', 'Mains power'), entry('daily', 'Today'), entry('circuit'), entry('heat'),
    entry('idle'), entry('voltage'), entry('export'), entry('broken'),
  ], {
    'sensor.main': meter('unavailable', 'W'),
    'sensor.daily': meter('unknown', 'kWh'),
    'sensor.circuit': meter('200', 'W'),
    'sensor.heat': meter('1', 'kW'),
    'sensor.idle': meter('0', 'W'),
    'sensor.voltage': meter('119', 'V'),
    'sensor.export': meter('-50', 'W'),
    'sensor.broken': meter('NaN', 'W'),
  });
  assert.equal(result.primary.reading, 'Unavailable');
  assert.equal(result.primary.watts, null);
  assert.equal(result.today.reading, 'Unknown');
  assert.deepEqual(result.loads.map(row => [row.entity, row.fraction]), [
    ['sensor.heat', 1], ['sensor.circuit', .2], ['sensor.idle', 0],
  ]);
  assert.deepEqual(result.other.map(row => row.entity), ['sensor.voltage', 'sensor.export']);
  assert.deepEqual(result.unavailable.map(row => row.entity), ['sensor.broken']);
  assert.equal(result.availableCount, 5);
});

test('A branch meter and nonperiod energy keep their actual meaning', () => {
  const result = powerPanelModel([entry('bed', 'Main bedroom power'), entry('accumulated', 'Energy'),
    entry('average', 'Monthly average energy')], {
    'sensor.bed': meter('50', 'W'), 'sensor.accumulated': meter('42', 'kWh'),
    'sensor.average': meter('25', 'kWh'),
  });
  assert.equal(result.primary.wholeHome, false);
  assert.equal(result.primary.name, 'Main bedroom power');
  assert.equal(result.today, null);
  assert.equal(result.month, null);
  assert.deepEqual(result.other.map(row => row.entity), ['sensor.accumulated', 'sensor.average']);
});

test('Recorder samples preserve gaps, valid zero, and the last update at a shared timestamp', () => {
  const start = Date.parse('2026-05-21T11:00:00Z');
  const end = start + 3_600_000;
  const rows = [
    {s: '500', lu: (start - 1_000) / 1000},
    {s: 'unknown', lu: (start + 120_000) / 1000},
    {s: '0.7', lu: start / 1000},
    {state: '0', last_updated: '2026-05-21T11:01:00Z'},
    {s: '0.9', lu: start / 1000},
    {s: '-0.4', lu: end / 1000},
    {state: '9', last_updated: 'invalid'},
    {s: '4', lu: (end + 1_000) / 1000},
  ];
  assert.deepEqual(powerHistorySamples(rows, {start, end, wattsPerUnit: 1_000}), [
    {time: start, watts: 900},
    {time: start + 60_000, watts: 0},
    {time: start + 120_000, watts: null},
    {time: end, watts: -400},
  ]);
  assert.deepEqual(powerHistorySamples(rows, {start, end, wattsPerUnit: null}), []);
});

test('Recorder samples respect historical units and show incompatible units as gaps', () => {
  const start = Date.parse('2026-05-21T11:00:00Z');
  const rows = [
    {s: '700', lu: start / 1000, a: {unit_of_measurement: 'W'}},
    {s: '0.8', lu: start / 1000 + 1, a: {unit_of_measurement: 'kW'}},
    {s: '20', lu: start / 1000 + 2, a: {unit_of_measurement: 'VA'}},
    {state: '-1.2', last_updated: '2026-05-21T11:00:03Z', attributes: {}},
  ];
  assert.deepEqual(powerHistorySamples(rows, {start, end: start + 3_000, wattsPerUnit: 1_000}), [
    {time: start, watts: 700},
    {time: start + 1_000, watts: 800},
    {time: start + 2_000, watts: null},
    {time: start + 3_000, watts: -1_200},
  ]);
});
