import test from 'node:test';
import assert from 'node:assert/strict';
import {createWorldClock} from '../ha-local/storybook-world-clock.mjs';

test('world time continues from explicit epoch across reloads and fresh snapshots', () => {
  const a=createWorldClock(), b=createWorldClock();
  assert.equal(a(50,{epochSeconds:1800000000}),1800000000);
  assert.equal(a(60,{epochSeconds:1800000000}),1800000010);
  assert.equal(b(2,{epochSeconds:1800000010}),1800000010);
  assert.equal(a(62,{epochSeconds:1800000012}),1800000012);
  assert.equal(a(64,{epochSeconds:1800000012}),1800000014);
});

test('live updates during a demo cannot anchor real time to the demo elapsed clock', () => {
  const clock=createWorldClock();
  assert.equal(clock(500,{epochSeconds:1000}),1000);
  assert.equal(clock(20,{epochSeconds:1020,transientTelemetry:true}),20);
  assert.equal(clock(521,{epochSeconds:1020}),1020);
  assert.equal(clock(522,{epochSeconds:1020}),1021);
});

test('preview resets and restores while reduced motion holds the complete story sample', () => {
  const clock=createWorldClock();
  clock(20,{epochSeconds:1000});
  assert.equal(clock(30,{preview:true}),0);
  assert.equal(clock(35,{preview:true}),5);
  assert.equal(clock(40,{}),1020);
  assert.equal(clock(45,{preview:true}),0);
  assert.equal(clock(46,{preview:true,reduceMotion:true}),1);
  assert.equal(clock(80,{preview:true,reduceMotion:true}),1);
  assert.equal(clock(81,{preview:true}),36);
  assert.equal(clock(2,{transientTelemetry:true}),2);
  assert.ok(Number.isFinite(clock(NaN)));
});
