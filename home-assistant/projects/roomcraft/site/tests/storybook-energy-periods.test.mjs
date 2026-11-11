import assert from 'node:assert/strict';
import test from 'node:test';
import {energyPeriodRange, energyResetDate, energyStatisticTotal, energyStatisticsRequests}
  from '../ha-local/storybook-energy-periods.mjs';

const timeZone = 'America/Los_Angeles';

test('calendar month uses the Home Assistant local date around UTC month rollover', () => {
  assert.deepEqual(energyPeriodRange('month', {
    timeZone, now: Date.parse('2026-11-01T03:30:00Z'),
  }), {
    start: '2026-10-01T07:00:00.000Z', end: '2026-11-01T03:30:00.000Z',
    startDate: '2026-10-01', endDate: '2026-10-31',
  });
  assert.equal(energyPeriodRange('month', {timeZone: 'Unknown/Zone'}), null);
});

test('calendar month uses the boundary offset instead of the offset after a DST transition', () => {
  const spring = energyPeriodRange('month', {timeZone, now: Date.parse('2026-03-11T13:00:00Z')});
  assert.equal(spring.start, '2026-03-01T08:00:00.000Z');
  const fall = energyPeriodRange('month', {timeZone, now: Date.parse('2026-11-11T13:00:00Z')});
  assert.equal(fall.start, '2026-11-01T07:00:00.000Z');
  const repeatedMidnight = energyPeriodRange('month', {
    timeZone: 'America/Havana', now: Date.parse('2026-11-11T13:00:00Z'),
  });
  assert.equal(repeatedMidnight.start, '2026-11-01T04:00:00.000Z');
});

test('native billing reset is labeled in the configured Home Assistant timezone', () => {
  assert.equal(energyResetDate('2026-11-10T08:00:00Z', timeZone), '2026-11-10');
  assert.equal(energyResetDate('2026-11-10T00:00:00+00:00', timeZone), '2026-11-09');
  assert.equal(energyResetDate('2026-11-10', timeZone), null);
  assert.equal(energyResetDate('2026-11-10T08:00:00Z', undefined), null);
});

test('Recorder requests fetch the exact boundary and a bounded recent window', () => {
  const now = Date.parse('2026-11-11T17:12:00Z');
  const range = energyPeriodRange('month', {timeZone, now});
  const ids = ['sensor.energy_a', 'sensor.energy_b', 'sensor.energy_a'];
  const common = {type: 'recorder/statistics_during_period', statistic_ids: ids.slice(0, 2),
    types: ['sum'], units: {energy: 'kWh'}};
  assert.deepEqual(energyStatisticsRequests(range, ids), [
    {...common, start_time: '2026-11-01T06:00:00.000Z', end_time: range.start, period: 'hour'},
    {...common, start_time: '2026-11-11T11:12:00.000Z', end_time: range.end, period: '5minute'},
  ]);
  const fractional = energyPeriodRange('month', {timeZone: 'Asia/Kathmandu', now});
  assert.equal(fractional.start, '2026-10-31T18:15:00.000Z');
  assert.equal(energyStatisticsRequests(fractional, ids)[0].period, '5minute');
  assert.equal(energyStatisticsRequests(fractional, ids)[0].start_time, '2026-10-31T18:10:00.000Z');
  assert.deepEqual(energyStatisticsRequests(fractional, []), []);
});

const start = '2026-11-01T07:00:00.000Z';
const end = '2026-11-11T17:12:00.000Z';
const baseline = {start: Date.parse('2026-11-01T06:00:00Z'), end: Date.parse(start), sum: 350};

test('calendar total uses cumulative Recorder sums across daily counter resets', () => {
  const rows = [baseline, {start: '2026-11-11T17:00:00Z', end: '2026-11-11T17:05:00Z',
    sum: 380.5, state: 3.1},
  {start: '2026-11-11T17:05:00Z', end: '2026-11-11T17:10:00Z', sum: 381.25, state: .1},
  {start: '2026-11-11T17:10:00Z', end: '2026-11-11T17:15:00Z', sum: 999}];
  assert.deepEqual(energyStatisticTotal(rows.reverse(), {start, end}), {
    value: 31.25, unit: 'kWh', complete: false, through: '2026-11-11T17:10:00.000Z',
  });
});

test('zero is reported from two measured endpoints and incompatible units remain unavailable', () => {
  const latest = {start: '2026-11-11T17:05:00Z', end, sum: 350000, unit: 'Wh'};
  assert.deepEqual(energyStatisticTotal([baseline, latest], {start, end}), {
    value: 0, unit: 'kWh', complete: true, through: end,
  });
  assert.equal(energyStatisticTotal([baseline, {...latest, unit: 'W'}], {start, end}), null);
  assert.equal(energyStatisticTotal([baseline, {...latest, sum: null}], {start, end}), null);
  assert.equal(energyStatisticTotal([baseline, {...latest, sum: 349500}], {start, end})?.value, -.5);
});

test('missing the exact boundary never treats the current cumulative sum as period usage', () => {
  const latest = {start: '2026-11-11T17:05:00Z', end, sum: 381, change: 381};
  assert.equal(energyStatisticTotal([latest], {start, end}), null);
  assert.equal(energyStatisticTotal([{...baseline, end: '2026-11-01T06:55:00Z'}, latest], {start, end}), null);
  assert.equal(energyStatisticTotal([baseline], {start, end}), null);
});
