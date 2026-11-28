import assert from 'node:assert/strict';
import test from 'node:test';
import {measuredBreakdown} from '../ha-local/storybook-energy-flow.mjs';

const row = (id, kind, watts, kwh) => ({id, label:id, kind,
  metrics:{live:{watts}, today:{value:kwh}}});

test('power flow reconciles circuits to the whole-home meter and keeps overlapping plugs independent', () => {
  const frame = {center:row('home',null,700,5),
    groups:[row('office','circuit',240,3),row('kitchen','circuit',160,1),row('computer','outlet',210,2)]};
  const live = measuredBreakdown(frame,'live');
  assert.equal(live.reconciled,true);
  assert.equal(live.measured,400);
  assert.equal(live.outlets[0].value,210);
  assert.equal(live.branches.at(-1).value,300);
  assert.equal(measuredBreakdown(frame,'today').branches.at(-1).value,1);
});

test('overlapping or inconsistent branch totals do not generate invented residual power', () => {
  const data = measuredBreakdown({center:row('home',null,100,1),
    groups:[row('office','circuit',140,1.4),row('export','other',500,5)]},'live');
  assert.equal(data.reconciled,false);
  assert.deepEqual(data.branches.map(item => item.label),['office']);
});
