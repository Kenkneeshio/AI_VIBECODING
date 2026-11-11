import assert from 'node:assert/strict';
import test from 'node:test';
import {normalizeCameraView} from '../ha-local/storybook-camera.mjs';
import {DEMO_DURATION_MS, sampleStorybookDemo} from '../ha-local/storybook-demo.mjs';

const original = Object.freeze({preset: 'default', azimuth: 355, tilt: 29.5, zoom: 1.03});

test('the demo starts in the current view and completes at exactly 30 seconds', () => {
  assert.equal(DEMO_DURATION_MS, 30_000);
  const start = sampleStorybookDemo(0, original);
  const finish = sampleStorybookDemo(DEMO_DURATION_MS, original);
  assert.deepEqual(start.view, original);
  assert.equal(start.progress, 0);
  assert.equal(start.done, false);
  assert.deepEqual(finish.view, original);
  assert.equal(finish.progress, 1);
  assert.equal(finish.done, true);
  assert.equal(sampleStorybookDemo(DEMO_DURATION_MS - 1, original).done, false);
  assert.deepEqual(sampleStorybookDemo(-100, original), start);
  assert.deepEqual(sampleStorybookDemo(NaN, original), start);
  assert.deepEqual(sampleStorybookDemo(DEMO_DURATION_MS + 5000, original), finish);
});

test('chapters change on fixed boundaries without snapping the camera', () => {
  const captions = [
    'Your home, live',
    'Controls built into the scene',
    'Weather and activity',
    'The whole home',
  ];
  for (const [index, title] of captions.entries()) {
    const at = index * 7500;
    const current = sampleStorybookDemo(at, original);
    assert.equal(current.title, title);
    assert.ok(current.description);
    if (index > 0) {
      const previous = sampleStorybookDemo(at - 1, original);
      assert.equal(previous.title, captions[index - 1]);
      assert.deepEqual(current.view, previous.view);
    }
  }
});

test('elapsed time alone determines an eased view and rotation takes the short path', () => {
  const middle = sampleStorybookDemo(1625, original);
  assert.equal(middle.view.azimuth, 357.5);
  assert.equal(middle.view.tilt, 21.75);
  for (const at of [4000, 10_000, 25_000, 14_999, 1625]) sampleStorybookDemo(at, original);
  assert.deepEqual(sampleStorybookDemo(1625, original), middle);
});

test('reduced motion keeps the original camera while chapters and timing still advance', () => {
  const custom = {preset: 'free', azimuth: -12, tilt: 43, zoom: 1.8};
  for (const at of [0, 1625, 7500, 9750, 17_000, 27_000, 30_000]) {
    const moving = sampleStorybookDemo(at, custom);
    const still = sampleStorybookDemo(at, custom, {reducedMotion: true});
    assert.deepEqual(still, {...moving, view: normalizeCameraView(custom)});
  }
  assert.deepEqual(custom, {preset: 'free', azimuth: -12, tilt: 43, zoom: 1.8});
});
