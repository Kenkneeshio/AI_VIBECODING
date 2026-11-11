import assert from 'node:assert/strict';
import test from 'node:test';
import {readRoomcraftEnergy, roomcraftEnergyFrame} from '../ha-local/storybook-energy.mjs';

const cfg = {version: 1, home: {power: 'sensor.home_w', today: 'sensor.home_today',
  billing: 'sensor.home_bill', statistic: 'sensor.home_today'}, groups: [
  {id: 'branch-1', label: 'Kitchen', kind: 'circuit', shared: true, power: 'sensor.kitchen_w',
    today: 'sensor.kitchen_today', statistic: 'sensor.kitchen_today', billing: 'sensor.kitchen_bill'},
  {id: 'branch-2', label: 'Desk plug', kind: 'outlet', power: 'sensor.plug_w', billing: 'sensor.plug_bill'},
]};
const reading = (state, unit, lastReset) => ({state, attributes: {
  unit_of_measurement: unit, last_reset: lastReset,
}});

test('deduplicates metering sources between branches and requires a private home source', () => {
  const config = readRoomcraftEnergy({...cfg, groups: [...cfg.groups,
    {id: 'copy', label: 'Repeated', kind: 'other', power: 'sensor.kitchen_w'},
    {id: 'bad', label: 'Malformed', kind: 'other', power: 'switch.something'},
  ]});
  assert.equal(config.groups.length, 2);
  assert.equal(config.groups[0].today, config.groups[0].statistic);
  assert.equal(config.groups[0].shared, true);
  assert.equal(readRoomcraftEnergy({...cfg, home: {power: 'light.fake'}}), null);
});

test('keeps signed and zero readings, direct billing resets and Recorder totals separate', () => {
  const reset = '2026-11-10T08:00:00Z';
  const states = {
    'sensor.home_w': reading('0.5', 'kW'),
    'sensor.home_bill': reading('21', 'kWh', reset),
    'sensor.kitchen_w': reading('0', 'W'),
    'sensor.kitchen_bill': reading('3', 'kWh', reset),
    'sensor.plug_w': reading('-13', 'W'),
    'sensor.plug_bill': reading('9', 'kWh', '2026-11-01T07:00:00Z'),
  };
  const totals = {'sensor.home_today': {value: 102, through: '2026-11-11T12:00:00Z'}};
  const frame = roomcraftEnergyFrame(readRoomcraftEnergy(cfg), states, totals, 'America/Los_Angeles');
  assert.equal(frame.billingStart, '2026-11-10');
  assert.equal(frame.center.metrics.live.watts, 500);
  assert.equal(frame.center.metrics.billing.value, 21);
  assert.equal(frame.center.metrics.month.value, 102);
  assert.equal(frame.groups[0].metrics.live.watts, 0);
  assert.equal(frame.groups[0].metrics.billing.value, 3);
  assert.equal(frame.groups[1].metrics.live.watts, -13);
  assert.equal(frame.groups[1].metrics.billing.available, false);
  assert.equal(frame.groups[1].metrics.month.available, false);
});
