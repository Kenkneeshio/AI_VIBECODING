import assert from 'node:assert/strict';
import test from 'node:test';
import polygonClipping from 'polygon-clipping';
import {createFloorSupport} from '../ha-local/storybook-floor-support.mjs';

const rectangle = (x1, z1, x2, z2) => [[x1,z1], [x2,z1], [x2,z2], [x1,z2], [x1,z1]];
const main = rectangle(0, 0, 100, 100);
const hole = rectangle(49, 30, 51, 70);
const balcony = rectangle(0, 101, 100, 120);

test('whole routes stay on continuous floors and avoid even narrow holes', () => {
  const floor = createFloorSupport([[main, hole], [balcony]]);
  assert.equal(floor.supportsRoute(25, 25, 75, 25), true);
  assert.equal(floor.supportsRoute(25, 50, 75, 50), false);
  assert.equal(floor.supportsRoute(25, 30, 75, 30), false);
  assert.equal(floor.supportsRoute(20, 95, 20, 105), false);
  assert.equal(floor.supportsRoute(25, 25, 25, 25), true);
  assert.equal(floor.supportsRoute(0, 25, 25, 25), false);
});

test('clearance includes holes and supports a model radius without shifting telemetry', () => {
  const floor = createFloorSupport([[main, hole]]);
  assert.equal(floor.clearance(50, 50), 0);
  assert.equal(floor.clearance(45, 50), 4);
  assert.equal(floor.clearance(15, 80), 15);
  assert.equal(floor.clearance(50, 110), 0);
});

test('the union supports a crossing from the floor to stairs without an internal seam', () => {
  const stairs = rectangle(20, 100, 40, 140);
  const floors = createFloorSupport([[main]]);
  const walkable = createFloorSupport(polygonClipping.union([main], [stairs]));
  assert.equal(floors.clearance(30, 130), 0);
  assert.equal(walkable.clearance(30, 130), 10);
  assert.equal(walkable.supportsRoute(30, 90, 30, 130), true);
  assert.equal(walkable.supportsRoute(45, 99, 30, 130), false);
});
