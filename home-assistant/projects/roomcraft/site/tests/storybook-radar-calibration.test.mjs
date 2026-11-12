import assert from 'node:assert/strict';
import test from 'node:test';
import {fitRadarCalibration} from '../ha-local/storybook-radar-calibration.mjs';

const points = [{x:-110,y:100},{x:100,y:90},{x:85,y:310},{x:-120,y:280},{x:15,y:190}];
const near = (value, expected, precision = 1e-7) => assert.ok(Math.abs(value - expected) < precision,
  `Expected ${value} near ${expected}`);
function pairs(transform, raw = points) {
  const [a,b,c,d,e,f] = transform;
  return raw.map(radar => ({radar, plan:{x:a * radar.x + b * radar.y + c,y:d * radar.x + e * radar.y + f}}));
}

test('fit recovers location, yaw and one physical scale from independent surveyed points', () => {
  for (const flipped of [false,true]) {
    const sign = flipped ? -1 : 1;
    const transform = [1.3 * sign,-.42,780,.42 * sign,1.3,115];
    const result = fitRadarCalibration(pairs(transform));
    assert.equal(result.flipped, flipped);
    for (const [index, coefficient] of result.transform.entries()) near(coefficient, transform[index]);
    near(result.origin.x, 780);
    near(result.origin.y, 115);
    near(result.pixelsPerMetre, Math.hypot(1.3,.42) * 100);
    near(result.rmsCm, 0);
    near(result.maxErrorCm, 0);
    near(result.validationCm, 0);
  }
});

test('the fit is deterministic and the withheld-point error exposes an inconsistent placement', () => {
  const samples = pairs([1.25,0,700,0,1.25,200]);
  samples[3].plan.x += 63;
  const original = structuredClone(samples);
  const result = fitRadarCalibration(samples);
  assert.deepEqual(samples, original);
  assert.deepEqual(result, fitRadarCalibration(samples));
  assert.ok(result.rmsCm > 12);
  assert.ok(result.maxErrorCm > result.rmsCm);
  assert.ok(result.validationCm > result.maxErrorCm);
});

test('a clustered or nearly collinear survey is rejected and three good points omit held-out error', () => {
  const pointsInLine = [{x:-100,y:120},{x:5,y:121},{x:100,y:121}];
  const transform = [1.25,0,700,0,1.25,200];
  assert.match(fitRadarCalibration(pairs(transform, pointsInLine)).error, /spread/i);
  assert.match(fitRadarCalibration(pairs(transform, [...pointsInLine, {x:20,y:280}])).error, /removed/i);
  assert.match(fitRadarCalibration(pairs([.04,0,700,0,.04,200])).error, /spread/i);
  assert.match(fitRadarCalibration([{radar:{x:0,y:0},plan:{x:0,y:0}}, null]).error, /valid pairs/i);
  const minimal = fitRadarCalibration(pairs(transform, points.slice(0,3)));
  assert.equal(minimal.error, undefined);
  assert.equal(minimal.validationCm, undefined);
});
