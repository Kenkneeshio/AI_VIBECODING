import test from 'node:test';
import assert from 'node:assert/strict';
import {comparisonScale, environmentSeries} from '../ha-local/storybook-environment-panel.mjs';

test('history preserves unavailable intervals, initial carried readings, and actual zero values', () => {
  assert.deepEqual(environmentSeries([
    {lu:103,s:'0'}, {lu:100,s:'42'}, {lu:101,s:'unavailable'},
    {lu:106,s:'60'}, {lu:102,s:''}, {lu:'invalid',s:'4'},
  ], 100500, 105000), [
    {time:100500,value:42}, {time:101000,value:null}, {time:102000,value:null},
    {time:103000,value:0},
  ]);
});


test('comparison normalizes Celsius and mass concentrations and refuses unrelated units', () => {
  assert.equal(comparisonScale('°C',{unit:'°F'})(25),77);
  assert.equal(comparisonScale('μg/m³',{unit:'mg/m³'})(1000),1);
  assert.equal(comparisonScale('mg/m³',{unit:'µg/m³'})(1),1000);
  assert.equal(comparisonScale('ppm',{unit:'mg/m³'}),null);
});
