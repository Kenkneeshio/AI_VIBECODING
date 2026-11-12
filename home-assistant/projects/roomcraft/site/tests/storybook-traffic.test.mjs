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

test('scenic traffic has fewer vehicles at a calmer pace and alternates every 3.2 seconds', () => {
  for (const geometry of [road, {...road, width: 5110}]) {
    const motion = createTrafficMotion(geometry);
    const ambient = profile('ambient');
    let previous = snapshot(motion.update(0, ambient));
    const slow = createTrafficMotion(geometry).update(0, profile('slow'));
    assert.equal(previous.length, 12);
    assert.ok(previous.length < slow.length);
    const arrivals = [];
    const sample = .025;
    for (let tick = 1; tick <= 1280; tick++) {
      const current = motion.update(tick * sample, ambient);
      if (tick === 1) {
        const speed = (current[0].x - previous[0].x) / sample;
        assert.ok(speed > 120 && speed < 170);
      }
      for (const [index, {x, lane}] of current.entries()) {
        const old = previous[index].x;
        const crosses = lane ? old > geometry.centerX && x <= geometry.centerX : old < geometry.centerX && x >= geometry.centerX;
        if (crosses) arrivals.push({lane, time: (tick - 1 + (geometry.centerX - old) / (x - old)) * sample});
      }
      previous = snapshot(current);
    }
    assert.equal(arrivals.length, 10);
    for (const [index, arrival] of arrivals.slice(1).entries()) {
      assert.notEqual(arrival.lane, arrivals[index].lane);
      assert.ok(Math.abs(arrival.time - arrivals[index].time - 3.2) < 1e-6);
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
  assert.ok(afterSwap > 2 && afterSwap < beforeSwap);
  for (let tick = 3; tick < 30; tick++) motion.update(tick / 10, heavy);
  const settled = motion.update(3, heavy)[0].x;
  const afterSettle = motion.update(3.1, heavy)[0].x - settled;
  assert.ok(Math.abs(afterSettle - 2) < .03);
});

test('a measured speed factor varies speed smoothly within one density', () => {
  const motion = createTrafficMotion(road);
  const before = motion.update(0, profile('slow'))[0].x;
  const halfway = motion.update(.1, {severity: 'slow', speedFactor: .8})[0].x;
  const after = motion.update(.2, {severity: 'slow', speedFactor: .6})[0].x;
  assert.ok(Math.abs(halfway - before - 5.6) < 1e-8);
  assert.ok(Math.abs(after - halfway - 4.2) < 1e-8);
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

test('night beams start at modeled headlights and point forward in each lane', () => {
  const traffic = createStorybookTraffic(road);
  const beams = traffic.root.getObjectByName('road-headlight-beams');
  const halos = traffic.root.getObjectByName('road-lamp-halos');
  const night = {night:true, transientTelemetry:true};
  const sedan = {...profile('ambient'), vehicleStyle:'seafoam-sedan'};
  const slots = createTrafficMotion(road).update(3, sedan, false, true);
  traffic.update(3, sedan, night);
  assert.equal(beams.count, slots.length * 2);
  assert.equal(halos.count, slots.length * 4);
  assert.equal(beams.material.blending, THREE.AdditiveBlending);
  assert.equal(beams.material.depthWrite, false);
  const matrix = new THREE.Matrix4();
  for (const [index, slot] of slots.entries()) {
    for (const side of [0, 1]) {
      beams.getMatrixAt(index * 2 + side, matrix);
      const origin = new THREE.Vector3().applyMatrix4(matrix);
      const far = new THREE.Vector3(1, .16, 0).applyMatrix4(matrix);
      const laneDirection = slot.lane ? -1 : 1;
      assert.ok((origin.x - slot.x) * laneDirection > 23);
      assert.ok((far.x - origin.x) * laneDirection > 52);
      assert.ok(Math.abs(far.z - slot.z) < 11);
      assert.ok(Math.abs(far.y - road.surfaceY - .16) < 1e-5);
    }
  }
  const glow = new THREE.Color();
  halos.getColorAt(0, glow);
  assert.ok(glow.g > .8);
  halos.getColorAt(3, glow);
  assert.ok(glow.r > glow.g * 4);
  traffic.update(3, {...profile('ambient'), vehicleStyle:'ruby-motorcycle'}, night);
  assert.equal(beams.count, slots.length);
  assert.equal(halos.count, slots.length * 2);
  traffic.dispose();
});

test('night lights are disabled in daylight and follow replay and reduced-motion vehicle poses', () => {
  const traffic = createStorybookTraffic(road);
  const beams = traffic.root.getObjectByName('road-headlight-beams');
  const halos = traffic.root.getObjectByName('road-lamp-halos');
  const mix = profile('ambient');
  const options = {night:true, transientTelemetry:true};
  const state = () => [beams, halos].map(mesh => Array.from(mesh.instanceMatrix.array.slice(0, mesh.count * 16)));
  traffic.update(2, mix, options);
  const first = state();
  traffic.update(4, mix, options);
  assert.notDeepEqual(state(), first);
  traffic.update(2, mix, options);
  assert.deepEqual(state(), first);
  traffic.update(2, mix, {...options, reduceMotion:true});
  const frozen = state();
  traffic.update(40, mix, {...options, reduceMotion:true});
  assert.deepEqual(state(), frozen);
  traffic.update(40, mix, {transientTelemetry:true});
  for (const mesh of [beams, halos]) assert.ok(!mesh.visible && mesh.count === 0);
  traffic.update(41, undefined, options);
  for (const mesh of [beams, halos]) assert.ok(!mesh.visible && mesh.count === 0);
  traffic.dispose();
});

test('the everyday mix has predictable cars and occasional semis and motorcycles', () => {
  const traffic = createStorybookTraffic(road);
  const visibleModels = () => traffic.root.children.filter(child => child.isGroup && child.visible);
  const modelCounts = () => Object.fromEntries(visibleModels().map(({name, children}) => [name, children[0].count]));
  traffic.update(0, profile('ambient'));
  const initial = modelCounts();
  assert.deepEqual(initial, {
    'vehicle-seafoam-sedan': 1, 'vehicle-butter-compact': 2, 'vehicle-pine-suv': 2,
    'vehicle-sand-pickup': 1, 'vehicle-lavender-delivery': 1, 'vehicle-blue-wagon': 2,
    'vehicle-indigo-motorcycle': 1, 'vehicle-ruby-motorcycle': 1, 'vehicle-teal-semi': 1,
  });
  for (let time = .25; time <= 80; time += .25) traffic.update(time, profile('ambient'));
  assert.deepEqual(modelCounts(), initial);
  const vehiclePositions = () => {
    const positions = new Map();
    const matrix = new THREE.Matrix4();
    for (const model of visibleModels()) {
      const mesh = model.children[0];
      for (let index = 0; index < mesh.count; index++) {
        mesh.getMatrixAt(index, matrix);
        positions.set([matrix.elements[12], matrix.elements[14]].join(','), model.name);
      }
    }
    return positions;
  };
  const shared = vehiclePositions();
  traffic.update(80, profile('heavy'));
  const measured = vehiclePositions();
  for (const [position, model] of shared) {
    assert.equal(measured.get(position), model);
  }
  traffic.dispose();
});

test('the style filter can still select every regular and specialty model', () => {
  const traffic = createStorybookTraffic(road);
  const visibleModels = () => traffic.root.children.filter(child => child.isGroup && child.visible);
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
