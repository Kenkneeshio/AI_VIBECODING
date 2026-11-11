import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {CAMERA_PRESETS, enterFreeView, fitStorybookCamera, normalizeCameraView, populateCameraOptions, readSavedFreeView, resolveDefaultCameraView, studioCameraPreferences} from '../ha-local/storybook-camera.mjs';
import {bindFreeViewGestures} from '../ha-local/storybook-orbit.mjs';

const bounds = {minX: 20, maxX: 1510, minZ: 110, maxZ: 850};
const topView = {preset: 'top', azimuth: 0, tilt: 0, zoom: 1};
const makeCamera = () => new THREE.OrthographicCamera(-800, 800, 450, -450, 1, 4400);
const near = (actual, expected, tolerance = 1e-7) => assert.ok(Math.abs(actual - expected) < tolerance,
  `Expected ${actual} to be close to ${expected}`);

test('the default camera is directly overhead with authored north at the top', () => {
  const camera = makeCamera();
  assert.deepEqual(fitStorybookCamera(camera, bounds, 1440, 810), topView);
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
  assert.deepEqual(normalizeCameraView({preset: 'bad', tilt: NaN, zoom: -1}), {...topView, zoom: 0.6});
  assert.equal(normalizeCameraView('dollhouse').tilt, 30);
  assert.deepEqual(normalizeCameraView('top'), topView);
});

test('the shared Default option displays the saved angle without entering Free view', () => {
  const select = {
    ownerDocument: {createElement: () => ({})},
    replaceChildren(...children) { this.options = children; },
  };
  for (const includePlan of [false, true]) {
    populateCameraOptions(select, includePlan);
    assert.equal(select.value, 'default');
    assert.deepEqual(select.options[0], {value: 'default', textContent: 'Default'});
    assert.ok(select.options.some(option => option.value === 'top'));
    assert.ok(select.options.some(option => option.value === 'free'));
    assert.equal(select.options.some(option => option.value === 'plan'), includePlan);
  }

  const saved = {preset: 'free', azimuth: 193.25, tilt: 0, zoom: 1.625};
  assert.deepEqual(resolveDefaultCameraView(saved), {...saved, preset: 'default'});
  assert.deepEqual(resolveDefaultCameraView(null), {...topView, preset: 'default'});
  assert.deepEqual(resolveDefaultCameraView({preset: 'free'}), {...topView, preset: 'default'});
  const camera = makeCamera();
  const fromDefault = fitStorybookCamera(camera, bounds, 1440, 810, resolveDefaultCameraView(saved));
  assert.equal(fromDefault.preset, 'default');
  near(fromDefault.azimuth, saved.azimuth);
  near(fromDefault.tilt, saved.tilt);
  near(fromDefault.zoom, saved.zoom);
});

test('browser Studio saves the exact Free view pose across reload and clears it to Top down', async () => {
  const storage = new Map();
  const host = {localStorage: {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    removeItem: key => storage.delete(key),
  }};
  const view = {preset: 'free', azimuth: 143.125, tilt: 0, zoom: 1.37};
  assert.equal(await studioCameraPreferences(host).read(), null);
  await studioCameraPreferences(host).write(view);
  assert.deepEqual(await studioCameraPreferences(host).read(), view);
  await studioCameraPreferences(host).write(null);
  assert.equal(await studioCameraPreferences(host).read(), null);
  assert.equal(readSavedFreeView({preset: 'free', tilt: 31, zoom: 1}), null);
  assert.equal(readSavedFreeView(topView), null);
});

test('signed-in Studio uses only its Home Assistant bridge for camera preferences', async () => {
  const calls = [];
  const view = {preset: 'free', azimuth: 230, tilt: 42, zoom: 1};
  const store = studioCameraPreferences({
    get localStorage() { throw new Error('Signed-in Studio must not persist this preference locally'); },
    RoomcraftDashboardBridge: {request: async (method, payload) => {
      calls.push([method, payload]);
      if (method === 'CAMERA_GET') return view;
    }},
  });
  assert.deepEqual(await store.read(), view);
  await store.write(view);
  await store.write(null);
  assert.deepEqual(calls, [['CAMERA_GET', undefined], ['CAMERA_SET', view], ['CAMERA_SET', null]]);
});

test('side presets view the cutaway from the corresponding plan edge', () => {
  const camera = makeCamera();
  const direction = new THREE.Vector3();
  for (const [preset, x, z] of [['north', 0, 1], ['east', -1, 0], ['south', 0, -1], ['west', 1, 0]]) {
    fitStorybookCamera(camera, bounds, 1440, 810, preset);
    camera.getWorldDirection(direction);
    const horizontal = Math.hypot(direction.x, direction.z);
    assert.ok(horizontal > 0 && direction.y < 0, preset);
    near(direction.x / horizontal, x);
    near(direction.z / horizontal, z);
  }
  const high = normalizeCameraView('high').tilt;
  assert.ok(high > 0 && high < normalizeCameraView('dollhouse').tilt);
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

test('an authored tall model extends the camera framing', () => {
  const camera = makeCamera();
  const view = 'corner';
  const tall = {...bounds, maxY: 455};
  fitStorybookCamera(camera, tall, 1440, 810, view);
  for (const x of [tall.minX, tall.maxX]) for (const z of [tall.minZ, tall.maxZ]) {
    const point = new THREE.Vector3(x, tall.maxY, z).project(camera);
    assert.ok(Math.abs(point.x) <= 1 && Math.abs(point.y) <= 1);
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

test('Free view owns its drag and pinch gestures and releases them on exit', () => {
  const canvas = new EventTarget();
  const captured = new Set();
  canvas.setPointerCapture = id => captured.add(id);
  canvas.hasPointerCapture = id => captured.has(id);
  canvas.releasePointerCapture = id => captured.delete(id);
  canvas.focus = () => {};
  let view = topView;
  const gesture = bindFreeViewGestures(canvas, {getView: () => view, onChange: next => { view = next; }});
  const pointer = (type, id, x, y) => canvas.dispatchEvent(Object.assign(
    new Event(type, {cancelable: true}), {pointerId: id, pointerType: 'touch', button: 0, clientX: x, clientY: y}));

  assert.equal(pointer('pointerdown', 1, 100, 100), true);
  assert.equal(captured.size, 0);
  view = enterFreeView({...normalizeCameraView('corner'), zoom: 1.2});
  const start = view;
  assert.equal(pointer('pointerdown', 1, 100, 100), false);
  pointer('pointermove', 1, 140, 130);
  assert.notEqual(view.azimuth, start.azimuth);
  assert.notEqual(view.tilt, start.tilt);
  assert.equal(view.zoom, start.zoom);

  pointer('pointerdown', 2, 240, 130);
  const beforePinch = view;
  pointer('pointermove', 2, 290, 130);
  near(view.zoom, beforePinch.zoom * 1.5);
  assert.equal(view.azimuth, beforePinch.azimuth);
  assert.equal(view.tilt, beforePinch.tilt);
  gesture.cancel();
  assert.equal(captured.size, 0);
  const canceled = view;
  pointer('pointermove', 1, 300, 300);
  assert.equal(view, canceled);
  gesture.dispose();
  assert.equal(pointer('pointerdown', 3, 100, 100), true);
});
