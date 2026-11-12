import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createStorybookBoatRoutes, createStorybookBoats, createStorybookNightSailing,
  sampleStorybookBoat} from '../ha-local/storybook-boats.mjs';

const water = {
  y: -104.95,
  farZ: -2210,
  focusX: 768,
  shoreline: Array.from({length: 125}, (_, index) => {
    const x = 768 - 3100 + index * 50;
    const offset = x - 768;
    return {x, z: -468 + 14 * Math.cos((offset + 110) * .006) + 7 * Math.sin((offset - 90) * .013)};
  }),
};

function shoreAt(x) {
  const position = (x - water.shoreline[0].x) / 50;
  const lower = Math.floor(position);
  return THREE.MathUtils.lerp(water.shoreline[lower].z, water.shoreline[lower + 1].z, position - lower);
}

function boatsIn(scene) {
  return scene.root.children.filter(child => child.isGroup);
}

function snapshot(scene) {
  return boatsIn(scene).map(boat => [...boat.position, ...boat.rotation.toArray().slice(0, 3)]);
}

test('the sailboat and cabin launch stay in the visible near-water band on opposite sides', () => {
  const routes = createStorybookBoatRoutes(water);
  assert.deepEqual(routes.map(({id}) => id), ['sailboat', 'cabin', 'fishing', 'jet-ski', 'cruise-ship']);
  for (const [index, route] of routes.entries()) {
    for (let frame = 0; frame < 100; frame++) {
      const sample = sampleStorybookBoat(route, frame * route.period / 100);
      const offshore = shoreAt(sample.x) - sample.z;
      if (index < 2) assert.ok(offshore >= 48 - 1e-9 && offshore <= 60 + 1e-9);
      if (route.id === 'jet-ski') {
        assert.ok(offshore >= 66 - 1e-9 && offshore <= 78 + 1e-9);
        assert.ok(sample.x > water.focusX + 450);
      }
      if (route.id === 'cruise-ship') assert.ok(offshore > 260 && offshore < 311);
      if (index === 0) assert.ok(sample.x < water.focusX - 150);
      if (index === 1) assert.ok(sample.x > water.focusX + 150);
      if (route.id === 'fishing') assert.ok(offshore > 90);
      for (const localX of [-route.length / 2, route.length / 2]) {
        for (const lateral of [-route.beam / 2, route.beam / 2]) {
          const hullX = sample.x + localX * Math.cos(sample.yaw) + lateral * Math.sin(sample.yaw);
          const hullZ = sample.z - localX * Math.sin(sample.yaw) + lateral * Math.cos(sample.yaw);
          assert.ok(hullZ < shoreAt(hullX) - 8, route.id);
          assert.ok(hullZ > water.farZ, route.id);
        }
      }
    }
  }
  assert.deepEqual(createStorybookBoatRoutes({shoreline: []}), []);
});

test('boat motion is deterministic, wave heave is gentle, and the live clock survives the demo', () => {
  const scene = createStorybookBoats(water);
  scene.update(100);
  const initial = snapshot(scene);
  scene.update(100.20);
  const saved = snapshot(scene);
  assert.notDeepEqual(saved, initial);
  scene.update(3, {transientTelemetry: true});
  const demo = snapshot(scene);
  scene.update(9, {transientTelemetry: true});
  assert.notDeepEqual(snapshot(scene), demo);
  scene.update(3, {transientTelemetry: true});
  assert.deepEqual(snapshot(scene), demo);
  scene.update(133);
  assert.deepEqual(snapshot(scene), saved);
  scene.update(133.20);
  const resumed = snapshot(scene);
  assert.notDeepEqual(resumed, saved);
  scene.update(134, {reduceMotion: true});
  scene.update(144, {reduceMotion: true});
  assert.deepEqual(snapshot(scene), resumed);
  scene.update(7, {transientTelemetry: true, reduceMotion: true});
  const reducedDemo = snapshot(scene);
  scene.update(13, {transientTelemetry: true, reduceMotion: true});
  assert.deepEqual(snapshot(scene), reducedDemo);
  const [route] = createStorybookBoatRoutes(water);
  const sunny = sampleStorybookBoat(route, 4);
  const rainy = sampleStorybookBoat(route, 4, {condition: 'rainy'});
  assert.equal(sunny.x, rainy.x);
  assert.equal(sunny.z, rainy.z);
  assert.ok(Math.abs(rainy.roll) > Math.abs(sunny.roll));
  scene.dispose();
});

test('models are geometrically distinct, wake foam stays offshore, and dispose releases GPU resources', () => {
  const scene = createStorybookBoats(water);
  const boats = boatsIn(scene);
  const wakes = scene.root.children.filter(child => child.isMesh);
  assert.equal(boats.length, 5);
  assert.equal(wakes.length, 5);
  assert.equal(new Set(boats.map(boat => boat.children[0].geometry.getAttribute('position').count)).size, 5);
  for (let frame = 0; frame < 210; frame++) {
    scene.update(frame * .43, {transientTelemetry: true});
    for (const wake of wakes) {
      const positions = wake.geometry.getAttribute('position');
      const colors = wake.geometry.getAttribute('color');
      assert.equal(colors.itemSize, 4);
      for (let index = 0; index < positions.count; index++) {
        const x = positions.getX(index);
        const y = positions.getY(index);
        const z = positions.getZ(index);
        assert.ok(z < shoreAt(x) - 4, wake.name);
        assert.ok(z > water.farZ);
        assert.ok(y > water.y && y < water.y + .2);
      }
    }
  }
  const resources = new Set();
  scene.root.traverse(child => {
    if (child.isMesh) {
      resources.add(child.geometry);
      resources.add(child.material);
    }
  });
  const disposed = new Set();
  for (const resource of resources) resource.addEventListener('dispose', () => disposed.add(resource));
  scene.dispose();
  scene.dispose();
  scene.update(400);
  assert.deepEqual(disposed, resources);
  assert.equal(scene.root.children.length, 0);
});

test('the personal watercraft has a seated rider and stays off the water after dark', () => {
  const scene = createStorybookBoats(water);
  const jet = scene.root.getObjectByName('Lagoon jet ski');
  const wake = scene.root.getObjectByName('Lagoon jet ski wake');
  const cruise = scene.root.getObjectByName('Pearl cruise ship');
  for (const hull of [jet, cruise]) hull.children[0].geometry.computeBoundingBox();
  const jetBounds = jet.children[0].geometry.boundingBox;
  const cruiseBounds = cruise.children[0].geometry.boundingBox;
  assert.ok(jetBounds.max.y > 16 && jetBounds.max.y < 19);
  assert.ok(cruiseBounds.max.y > 34);
  assert.ok(cruiseBounds.max.x - cruiseBounds.min.x > 4 * (jetBounds.max.x - jetBounds.min.x));
  scene.update(12, {activity:'overnight', night:true, transientTelemetry:true});
  assert.equal(jet.visible, false);
  assert.equal(wake.visible, false);
  assert.ok(boatsIn(scene).every(boat => !boat.visible));
  scene.update(42, {activity:'evening', night:true, transientTelemetry:true});
  assert.equal(jet.visible, false);
  assert.equal(wake.visible, false);
  scene.update(12, {activity:'morning', transientTelemetry:true});
  assert.equal(jet.visible, true);
  assert.equal(wake.visible, true);
  scene.dispose();
});

test('night boats enter offshore from the side and only one passing hull, wake and light group appears', () => {
  const passage = createStorybookNightSailing(water);
  const ship = (time, activity) => {
    const entry = passage(time, activity);
    return entry && {id:entry.route.id, ...sampleStorybookBoat(entry.route, entry.elapsed)};
  };
  assert.equal(ship(42, 'evening').id, 'cabin');
  assert.ok(Math.abs(ship(42, 'evening').x - water.focusX) < 1e-6);
  assert.equal(ship(160, 'evening'), null);
  assert.equal(ship(174, 'overnight'), null);
  assert.equal(ship(175, 'overnight').id, 'fishing');
  assert.ok(Math.abs(ship(175, 'overnight').x - water.focusX) > 2700);
  const centerFrames = activity => {
    let visible = 0;
    for (let time = 0; time < 1500; time++) {
      const frame = ship(time, activity);
      if (!frame) continue;
      assert.ok(['cabin', 'fishing'].includes(frame.id));
      assert.ok(frame.z < shoreAt(frame.x) - 42);
      if (Math.abs(frame.x - water.focusX) < 850) visible++;
    }
    return visible;
  };
  const evening = centerFrames('evening');
  const overnight = centerFrames('overnight');
  assert.ok(overnight > 0 && overnight < evening && evening < 300);

  const scene = createStorybookBoats(water);
  const visible = () => scene.root.children.filter(child => child.visible).map(child => child.name);
  const options = {activity:'evening', night:true, transientTelemetry:true};
  scene.update(42, options);
  assert.deepEqual(visible(), ['Coral cabin launch wake', 'Coral cabin launch']);
  const lights = scene.root.getObjectByName('Coral cabin launch running lights');
  assert.equal(lights.visible, true);
  assert.equal(lights.children.length, 3);
  const image = snapshot(scene);
  scene.update(160, options);
  assert.deepEqual(visible(), []);
  scene.update(42, options);
  assert.deepEqual(snapshot(scene), image);
  scene.update(42, {...options, reduceMotion:true});
  assert.deepEqual(visible(), []);
  scene.update(0, {activity:'morning', transientTelemetry:true});
  assert.equal(lights.visible, false);
  scene.dispose();
});
