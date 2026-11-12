import assert from 'node:assert/strict';
import test from 'node:test';
import {captureRadarPoint} from '../ha-local/storybook-calibration-panel.mjs';

const row = (time, ...tracks) => ({state: String(tracks.length), attributes: {observed_at: time, tracks}});
const radar = (x, y, id = 7) => ({id, x, y});

function capture(rows) {
  let time = 1000;
  return captureRadarPoint(() => rows.shift(), async delay => { time += delay; }, () => time);
}

test('calibration takes the median of three fresh and distinct single-target readings', async () => {
  assert.deepEqual(await capture([
    row(100, radar(99, 80)), row(1500, radar(12, 106)), row(1500, radar(55, 12)),
    row(2250, radar(15, 107)), row(3000, radar(10, 103)),
  ]), {point: {x: 12, y: 106}});
});

test('multiple targets, mixed tracks and unstable position are rejected', async () => {
  assert.match((await capture([row(1000, radar(10, 100), radar(40, 50, 2))])).error, /More than one/);
  assert.match((await capture([row(1000, radar(10, 100)), row(1600, radar(12, 90, 2))])).error, /switched/);
  assert.match((await capture([row(1000, radar(12, 100)), row(1600, radar(100, 100)), row(2200, radar(13, 100))])).error,
    /moved too far/);
  assert.match((await capture([row(1000, radar(12, 100))])).error, /Too few fresh/);
});
