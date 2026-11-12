import assert from 'node:assert/strict';
import test from 'node:test';
import {coverageHistorySources, readCoverageHistory} from '../ha-local/storybook-coverage-history.mjs';

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
  assert.deepEqual(result, {from: 100, to: 1000, cellSize: 24, samples: 10, reportedCells: 3,
    outsidePlan: 1, sourceCount: 2, furthestCm: 125, cells: [{x: 84, y: 84, hits: 7}]});
});

test('unknown data format does not masquerade as an empty heat map', () => {
  assert.equal(readCoverageHistory([east], {from: 0, to: 10, cellSize: 80, sources: {}}), null);
  assert.equal(readCoverageHistory([east], {from: 10, to: 0, cellSize: 25, sources: {}}), null);
});
