import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {CAMERA_PRESETS, fitStorybookCamera, normalizeCameraView} from '../ha-local/storybook-camera.mjs';

const bounds = {minX: 20, maxX: 1510, minZ: 110, maxZ: 850};
const makeCamera = () => new THREE.OrthographicCamera(-800, 800, 450, -450, 1, 4400);
const near = (actual, expected, tolerance = 1e-7) => assert.ok(Math.abs(actual - expected) < tolerance,
  `Expected ${actual} to be close to ${expected}`);

test('the default camera is directly overhead with authored north at the top', () => {
  const camera = makeCamera();
  assert.deepEqual(fitStorybookCamera(camera, bounds, 1440, 810), CAMERA_PRESETS.top);
  const direction = camera.getWorldDirection(new THREE.Vector3());
  near(direction.x, 0);
  near(direction.y, -1);
  near(direction.z, 0);
  const left = new THREE.Vector3(100, 0, 400).project(camera);
  const right = new THREE.Vector3(1300, 0, 400).project(camera);
  const north = new THREE.Vector3(700, 0, 180).project(camera);
  const south = new THREE.Vector3(700, 0, 790).project(camera);
  assert.ok(left.x < right.x);
  assert.ok(north.y > south.y);
});

test('camera preferences normalize without modifying caller data or the presets', () => {
  const input = {preset: 'corner', azimuth: -15, tilt: 80, zoom: 9};
  assert.deepEqual(normalizeCameraView(input), {preset: 'corner', azimuth: 345, tilt: 65, zoom: 2.5});
  assert.deepEqual(input, {preset: 'corner', azimuth: -15, tilt: 80, zoom: 9});
  assert.deepEqual(normalizeCameraView({preset: 'bad', tilt: NaN, zoom: -1}), {...CAMERA_PRESETS.top, zoom: 0.6});
  assert.equal(normalizeCameraView('dollhouse').tilt, 30);
  assert.deepEqual(CAMERA_PRESETS.top, {preset: 'top', azimuth: 0, tilt: 0, zoom: 1});
});

test('every preset fits the full footprint and maps an edited floor point back to the same coordinates', () => {
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  for (const preset of Object.keys(CAMERA_PRESETS)) {
    for (const [width, height] of [[1440, 810], [360, 720]]) {
      const camera = makeCamera();
      fitStorybookCamera(camera, bounds, width, height, preset);
      for (const x of [bounds.minX, bounds.maxX]) for (const z of [bounds.minZ, bounds.maxZ]) {
        const point = new THREE.Vector3(x, 0, z).project(camera);
        assert.ok(Math.abs(point.x) <= 1 && Math.abs(point.y) <= 1, preset);
      }
      const expected = new THREE.Vector3(548, 0, 446);
      const screen = expected.clone().project(camera);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(screen.x, screen.y), camera);
      const hit = raycaster.ray.intersectPlane(plane, new THREE.Vector3());
      assert.ok(hit, preset);
      near(hit.x, expected.x);
      near(hit.z, expected.z);
    }
  }
});

test('camera fitting is repeatable and rejects invalid scene or viewport dimensions', () => {
  const first = makeCamera();
  const second = makeCamera();
  fitStorybookCamera(first, bounds, 1920, 1080, {preset: 'corner', azimuth: 135, zoom: 1.25});
  fitStorybookCamera(second, bounds, 1920, 1080, {preset: 'corner', azimuth: 135, zoom: 1.25});
  assert.deepEqual(first.matrixWorld.elements, second.matrixWorld.elements);
  assert.deepEqual(first.projectionMatrix.elements, second.projectionMatrix.elements);
  assert.throws(() => fitStorybookCamera(first, bounds, 0, 800), /finite scene/);
  assert.throws(() => fitStorybookCamera(first, {...bounds, maxX: NaN}, 1440, 810), /finite scene/);
});
