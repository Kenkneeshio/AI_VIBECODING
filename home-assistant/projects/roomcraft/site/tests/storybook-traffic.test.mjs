import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {buildStorybookStreet} from '../ha-local/storybook-street.mjs';
import {createStorybookTraffic, createTrafficMotion} from '../ha-local/storybook-traffic.mjs';
import {STORYBOOK_VEHICLES} from '../ha-local/storybook-vehicles.mjs';

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

test('scenic traffic crosses the road midpoint once per second with alternating lanes', () => {
  for (const geometry of [road, {...road, width: 5110}]) {
    const motion = createTrafficMotion(geometry);
    const ambient = profile('ambient');
    let previous = snapshot(motion.update(0, ambient));
    const slow = createTrafficMotion(geometry).update(0, profile('slow'));
    assert.ok(previous.length < slow.length);
    const arrivals = [];
    const sample = .025;
    for (let tick = 1; tick <= 1200; tick++) {
      const current = motion.update(tick * sample, ambient);
      for (const [index, {x, lane}] of current.entries()) {
        const old = previous[index].x;
        const crosses = lane ? old > geometry.centerX && x <= geometry.centerX : old < geometry.centerX && x >= geometry.centerX;
        if (crosses) arrivals.push({lane, time: (tick - 1 + (geometry.centerX - old) / (x - old)) * sample});
      }
      previous = snapshot(current);
    }
    assert.equal(arrivals.length, 30);
    for (const [index, arrival] of arrivals.slice(1).entries()) {
      assert.notEqual(arrival.lane, arrivals[index].lane);
      assert.ok(Math.abs(arrival.time - arrivals[index].time - 1) < 1e-6);
    }
    assert.deepEqual(snapshot(motion.update(40, ambient, true)), previous);
  }
});

test('scenic and measured traffic keep shared positions and ease into the next speed', () => {
  const motion = createTrafficMotion(road);
  const ambient = profile('ambient');
  const heavy = profile('heavy');
  const first = motion.update(0, ambient)[0].x;
  const next = motion.update(.1, ambient)[0].x;
  const beforeSwap = next - first;
  assert.equal(motion.update(.1, heavy)[0].x, next);
  const afterSwap = motion.update(.2, heavy)[0].x - next;
  assert.ok(afterSwap > 2.4 && afterSwap < beforeSwap);
  for (let tick = 3; tick < 30; tick++) motion.update(tick / 10, heavy);
  const settled = motion.update(3, heavy)[0].x;
  const afterSettle = motion.update(3.1, heavy)[0].x - settled;
  assert.ok(Math.abs(afterSettle - 2.4) < .03);
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

test('the style filter reuses the road lanes with a single silhouette or the mixed catalog', () => {
  const traffic = createStorybookTraffic(road);
  const visibleModels = () => traffic.root.children.filter(child => child.isGroup && child.visible);
  traffic.update(0, profile('ambient'));
  const initial = new Set(visibleModels().map(model => model.name));
  assert.ok(initial.size >= 12);
  assert.ok(initial.has('vehicle-ruby-motorcycle') || initial.has('vehicle-indigo-motorcycle'));
  for (let time = .25; time <= 32; time += .25) {
    traffic.update(time, profile('ambient'));
    for (const {name} of visibleModels()) initial.add(name);
  }
  assert.equal(initial.size, STORYBOOK_VEHICLES.length);
  for (const {id} of STORYBOOK_VEHICLES) {
    traffic.update(32, {...profile('ambient'), vehicleStyle: id});
    const [model, ...others] = visibleModels();
    assert.equal(others.length, 0);
    assert.equal(model.name, `vehicle-${id}`);
    assert.ok(model.children.every(mesh => mesh.isInstancedMesh && mesh.count === traffic.root.children[0].count));
  }
  traffic.update(32, {...profile('ambient'), vehicleStyle: 'invalid'});
  assert.ok(visibleModels().length > 1);
  traffic.dispose();
  assert.equal(traffic.root.children.length, 0);
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
