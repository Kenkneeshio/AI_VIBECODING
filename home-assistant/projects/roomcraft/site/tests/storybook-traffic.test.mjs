import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {buildStorybookStreet} from '../ha-local/storybook-street.mjs';
import {createStorybookTraffic, createTrafficMotion} from '../ha-local/storybook-traffic.mjs';

const road = buildStorybookStreet({box() {}}, {nearZ: -80, farZ: -224}, -111, 6200, 768);
const profile = severity => ({severity});
const snapshot = slots => slots.map(({x, z, lane, index}) => ({x, z, lane, index}));

test('traffic uses opposite carriageways and slows as illustrated density grows', () => {
  const measurements = ['clear', 'slow', 'heavy'].map(severity => {
    const motion = createTrafficMotion(road);
    const initial = snapshot(motion.update(0, profile(severity)));
    const next = motion.update(.1, profile(severity));
    const outbound = next.find(({lane}) => lane === 0);
    const inbound = next.find(({lane}) => lane === 1);
    const movement = outbound.x - initial.find(({lane}) => lane === 0).x;
    assert.ok(movement > 0);
    assert.ok(inbound.x < initial.find(({lane}) => lane === 1).x);
    assert.ok(outbound.z > inbound.z);
    return {movement, count: next.length};
  });
  assert.ok(measurements[0].movement > measurements[1].movement);
  assert.ok(measurements[1].movement > measurements[2].movement);
  assert.ok(measurements[0].count < measurements[1].count);
  assert.ok(measurements[1].count < measurements[2].count);
});

test('traffic stays still under reduced motion and hides without live severity', () => {
  const motion = createTrafficMotion(road);
  motion.update(0, profile('clear'));
  const before = snapshot(motion.update(.2, profile('clear')));
  assert.deepEqual(snapshot(motion.update(8, profile('clear'), true)), before);
  assert.deepEqual(motion.update(9, null), []);
  assert.deepEqual(motion.update(10, profile('unknown')), []);
  assert.deepEqual(motion.update(11, profile('constructor')), []);
});

test('a measured speed factor varies speed smoothly within one density', () => {
  const motion = createTrafficMotion(road);
  const before = motion.update(0, profile('slow'))[0].x;
  const halfway = motion.update(.1, {severity: 'slow', speedFactor: .8})[0].x;
  const after = motion.update(.2, {severity: 'slow', speedFactor: .6})[0].x;
  assert.ok(halfway - before > after - halfway);
  assert.ok(after > halfway);
});

test('a lane preserves spacing through profile changes and wrapping', () => {
  const motion = createTrafficMotion(road);
  const initial = snapshot(motion.update(0, profile('clear')));
  const dense = motion.update(0, profile('heavy'));
  for (const slot of initial) assert.equal(dense.find(car => car.lane === slot.lane && car.index === slot.index).x, slot.x);
  for (let time = .25; time <= 300; time += .25) {
    const slots = motion.update(time, profile('heavy'));
    for (const lane of [0, 1]) {
      const positions = slots.filter(slot => slot.lane === lane).map(slot => slot.x).sort((a, b) => a - b);
      for (let i = 1; i < positions.length; i++) assert.ok(positions[i] - positions[i - 1] > 52);
      assert.ok(positions[0] + (road.width - 60) - positions.at(-1) > 52);
    }
  }
});

test('instanced cars sit on the rendered road and disappear when a feed is unavailable', () => {
  const traffic = createStorybookTraffic(road);
  assert.equal(traffic.root.visible, false);
  traffic.update(0, profile('slow'), {night: true});
  assert.equal(traffic.root.visible, true);
  const mesh = traffic.root.children[0];
  assert.ok(mesh.isInstancedMesh && mesh.count > 1);
  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  mesh.getMatrixAt(0, matrix);
  position.setFromMatrixPosition(matrix);
  assert.ok(Math.abs(position.y - road.surfaceY) < .001);
  assert.ok(road.lanes.some(z => Math.abs(z - position.z) < .001));
  traffic.update(1, undefined);
  assert.equal(traffic.root.visible, false);
  traffic.dispose();
});

test('demo cars replay at the same elapsed time and preserve live lane positions', () => {
  const traffic = createStorybookTraffic(road);
  const baseline = createStorybookTraffic(road);
  const matrix = new THREE.Matrix4();
  const currentCars = model => {
    const mesh = model.root.children[0];
    return Array.from({length: mesh.count}, (_, index) => {
      mesh.getMatrixAt(index, matrix);
      return matrix.toArray();
    });
  };
  traffic.update(200, profile('clear'));
  baseline.update(200, profile('clear'));
  const demo = {transientTelemetry: true};
  traffic.update(4, profile('heavy'), demo);
  const expected = currentCars(traffic);
  traffic.update(6, profile('heavy'), demo);
  assert.notDeepEqual(currentCars(traffic), expected);
  traffic.update(0, profile('heavy'), demo);
  traffic.update(4, profile('heavy'), demo);
  assert.deepEqual(currentCars(traffic), expected);
  traffic.update(201, profile('clear'));
  baseline.update(201, profile('clear'));
  assert.deepEqual(currentCars(traffic), currentCars(baseline));
  traffic.dispose();
  baseline.dispose();
});
