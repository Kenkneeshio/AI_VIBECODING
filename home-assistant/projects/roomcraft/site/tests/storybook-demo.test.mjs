import assert from 'node:assert/strict';
import test from 'node:test';
import {createStorybookDemo, DEMO_DURATION_MS} from '../ha-local/storybook-demo.mjs';

const original = Object.freeze({preset: 'free', azimuth: 355, tilt: 29.5, zoom: 1.03});
const cameraAnchors = {
  presence: {x: -180, y: 34, z: -30}, lamps: {x: 170, y: 39, z: -42},
  fan: {x: -180, y: 46, z: 85}, vacuum: {x: -110, y: 20, z: 16},
  garage: {x: -390, y: -9, z: -270}, habitat: {x: 240, y: 35, z: -39},
  beach: {x: -28, y: -22, z: -558},
  coast: {x: 45, y: -22, z: -610}, road: {x: 32, y: -19, z: -450},
};
const sample = createStorybookDemo(original, target => cameraAnchors[target]);

test('the demo starts in the current view and restores it at 45 seconds', () => {
  assert.equal(DEMO_DURATION_MS, 45_000);
  const start = sample(0);
  const end = sample(DEMO_DURATION_MS);
  for (const shot of [start, end]) {
    assert.deepEqual(shot.view, original);
    assert.equal(shot.focus, null);
  }
  assert.equal(start.progress, 0);
  assert.equal(start.done, false);
  assert.equal(end.progress, 1);
  assert.equal(end.done, true);
  assert.equal(sample(DEMO_DURATION_MS - 1).done, false);
  assert.deepEqual(sample(-100), start);
  assert.deepEqual(sample(NaN), start);
  assert.deepEqual(sample(DEMO_DURATION_MS + 5000), end);
});

test('short shots glide to each world focus and retain the original preference label', () => {
  const schedule = [['overview', 0], ['presence', 2300], ['lamps', 5800], ['fan', 8800], ['vacuum', 11800],
    ['garage', 14800], ['habitat', 17800], ['beach', 20800], ['weather', 23800], ['traffic', 39800], ['finale', 43000]];
  for (const [beat, at] of schedule) {
    assert.equal(sample(at).beat, beat);
    assert.equal(sample(at).view.preset, original.preset);
    if (at > 0) assert.deepEqual(sample(at).view, sample(at - 1).view);
    const key = beat === 'weather' ? 'coast' : beat === 'traffic' ? 'road' : beat;
    if (cameraAnchors[key]) assert.deepEqual(sample(at + 900).focus, {...cameraAnchors[key], weight: 1});
  }
  assert.equal(sample(450).view.azimuth, 357.5);
  assert.equal(sample(450).view.tilt, 25.25);
  assert.equal(sample(9700).zoom, 3.25);
  assert.equal(sample(9700).view.zoom, 2.5);
  const saved = sample(6000);
  sample(26500);
  assert.deepEqual(sample(6000), saved);
});

test('missing authored objects redistribute their shot time and reduced motion keeps the starting view', () => {
  const compact = createStorybookDemo(original, target => target === 'road' ? cameraAnchors.road : null);
  assert.equal(compact(2300).beat, 'traffic');
  assert.equal(compact(42000).beat, 'traffic');
  assert.equal(compact(43000).beat, 'finale');
  for (const at of [0, 450, 6000, 18300, 24500, 29000, 45000]) {
    const moving = sample(at);
    assert.deepEqual(sample(at, {reducedMotion: true}), {...moving, view: original, focus: null, zoom: original.zoom});
  }
});

test('scripted captions and spoken cues align to the weather and moon windows', () => {
  const overview = sample(0);
  assert.match(overview.caption, /simulated preview/i);
  assert.match(overview.narration, /live home/i);
  const weatherStart = 23_800;
  for (const [offset, cueId, keyword] of [
    [0, 'weather-sky', /live weather/i], [3999, 'weather-sky', /reflection/i],
    [4000, 'weather-effects', /wind, rain and snow/i], [11199, 'weather-effects', /clouds/i],
    [11200, 'weather-moon', /moon phase/i], [15999, 'weather-moon', /sky and water/i],
  ]) {
    const shot = sample(weatherStart + offset);
    assert.equal(shot.beat, 'weather');
    assert.equal(shot.cueId, cueId);
    assert.match(shot.narration, keyword);
    assert.equal(shot.caption, shot.narration);
  }
  assert.equal(sample(39_800).cueId, 'traffic');
  const noDevices = createStorybookDemo(original, target => target === 'coast' ? cameraAnchors.coast : null);
  assert.equal(noDevices(27_000).beat, 'weather');
  assert.equal(noDevices(42_999).beat, 'weather');
  assert.equal(noDevices(43_000).beat, 'finale');
  assert.equal(noDevices(42_999).beatTimeMs, 15_999);
});
