import assert from 'node:assert/strict';
import test from 'node:test';
import {coverageHistorySources, readCoverageHistory} from '../ha-local/storybook-coverage-history.mjs';
import {readDetectionZones, readPersonTracks} from '../ha-local/storybook-tracking.mjs';

const east = {type: 'presenceSwitch', presenceTrackEntityId: 'sensor.east', presenceTrackTransform: [1, 0, 60, 0, 1, 60]};
const west = {type: 'presenceSwitch', presenceTrackEntityId: 'sensor.west', presenceTrackTransform: [-1, 0, 60, 0, 1, 60]};

test('coverage projects coarse bins with current calibration, merging overlapping map cells', () => {
  const items = [east, west, east, {...east, presenceTrackEntityId: 'light.invalid'}];
  assert.deepEqual(coverageHistorySources(items), ['sensor.east', 'sensor.west']);
  const result = readCoverageHistory(items, {from: 100, to: 1000, cellSize: 25, sources: {
    'sensor.east': {samples: 6, cells: [{x: 25, y: 25, hits: 4}, {x: -100, y: 75, hits: 1}, {x: 22, y: 25, hits: 4}]},
    'sensor.west': {samples: 4, cells: [{x: -25, y: 25, hits: 3}, {x: -25, y: 25, hits: 3}]},
    'sensor.unbound': {samples: 123, cells: []},
  }});
  assert.deepEqual(result, {from: 100, to: 1000, cellSize: 25, samples: 10, reportedCells: 3,
    outsidePlan: 1, outsideConfigured: 0, sourceCount: 2, furthestCm: 125,
    cells: [{x: 85, y: 85, hits: 7, corners: [[72.5,72.5],[97.5,72.5],[97.5,97.5],[72.5,97.5]]}]});
});

test('rotated and skewed bin edges, detection boundaries, and live positions use the same calibration', () => {
  const item = {...east, presenceTrackTransform: [.95, .48, 100, .25, 1.2, 200],
    presenceTrackZone: [12.5, 37.5, 37.5, 62.5]};
  const response = {from: 100, to: 1100, cellSize: 25, sources: {
    [item.presenceTrackEntityId]: {samples: 5, cells: [{x: 25, y: 50, hits: 4}, {x: 25, y: 75, hits: 1}]},
  }};
  const history = readCoverageHistory([item], response);
  assert.equal(history.outsideConfigured, 1);
  const [zone] = readDetectionZones([item]);
  const keys = points => points.map(([x, y]) => `${x.toFixed(6)},${y.toFixed(6)}`).sort();
  assert.deepEqual(keys(history.cells[0].corners), keys(zone.points.map(({x, y}) => [x, y])));
  const [person] = readPersonTracks([item], {[item.presenceTrackEntityId]: {state: '1', attributes: {
    tracking_schema: 'roomcraft-presence-v1', observed_at: 1000, tracks: [{id: 1, x: 25, y: 50}],
  }}}, 1100);
  assert.deepEqual([history.cells[0].x, history.cells[0].y], [person.x, person.y]);
});

test('unknown data format does not masquerade as an empty heat map', () => {
  assert.equal(readCoverageHistory([east], {from: 0, to: 10, cellSize: 80, sources: {}}), null);
  assert.equal(readCoverageHistory([east], {from: 10, to: 0, cellSize: 25, sources: {}}), null);
});
