import test from 'node:test';
import assert from 'node:assert/strict';
import {environmentSeries} from '../ha-local/storybook-environment-panel.mjs';

test('history preserves unavailable intervals, initial carried readings, and actual zero values', () => {
  assert.deepEqual(environmentSeries([
    {lu:103,s:'0'}, {lu:100,s:'42'}, {lu:101,s:'unavailable'},
    {lu:106,s:'60'}, {lu:102,s:''}, {lu:'invalid',s:'4'},
  ], 100500, 105000), [
    {time:100500,value:42}, {time:101000,value:null}, {time:102000,value:null},
    {time:103000,value:0},
  ]);
});
