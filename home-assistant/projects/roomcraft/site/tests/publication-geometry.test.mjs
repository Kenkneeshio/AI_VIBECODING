import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {dashboardProjectProblem} from '../ha-local/dashboard-project.mjs';

const item = {id:'test-table', type:'table', name:'Table', x:420, y:510, w:120, h:70, rotation:0};
const validators = {validCameraThumbnail:() => true, validObjectControl:() => true};
const project = items => ({version:2, rooms:[], walls:[], hotspots:[], items});
const problem = value => dashboardProjectProblem(value, validators);

test('publication rejects unusable decorative geometry without coercion', () => {
  for (const field of ['x', 'y', 'w', 'h', 'rotation']) {
    for (const invalid of [NaN, Infinity, -Infinity, null, '20', {}, []]) {
      assert.match(problem(project([{...item, [field]:invalid}])), /invalid object geometry/, `${field}=${invalid}`);
    }
  }
  for (const field of ['x', 'y', 'w', 'h']) {
    const missing = {...item};
    delete missing[field];
    assert.match(problem(project([missing])), /invalid object geometry/, `missing ${field}`);
  }
  for (const field of ['w', 'h']) {
    for (const value of [0, -1]) {
      assert.match(problem(project([{...item, [field]:value}])), /invalid object geometry/);
    }
  }
});

test('publication validates optional height and layer metadata for decorative objects', () => {
  for (const zIndex of [undefined, null, NaN, Infinity, '1']) {
    assert.match(problem(project([{...item, zIndex}])), /invalid object geometry/);
  }
  for (const modelHeight of [undefined, null, NaN, Infinity, '60', 5, 301]) {
    assert.match(problem(project([{...item, modelHeight}])), /invalid object geometry/);
  }
  for (const modelHeight of [6, 72, 300]) {
    assert.equal(problem(project([{...item, modelHeight, zIndex:-2}])), undefined);
  }
});

test('publication preserves legacy rotation, exterior furniture, fences, and custom catalog types', () => {
  const legacy = {...item};
  delete legacy.rotation;
  const value = project([legacy, {...item, id:'future', type:'future-catalog-model', x:-45, y:1100, rotation:450}]);
  value.walls.push(
    {id:'wall', x1:0, y1:0, x2:100, y2:0},
    {id:'fence', kind:'fence', x1:0, y1:0, x2:0, y2:100},
  );
  const before = structuredClone(value);
  assert.equal(problem(value), undefined);
  assert.deepEqual(value, before, 'validation must not rewrite authored geometry');
  assert.equal(problem({...value, terrain:{cells:[{col:1, row:2, prop:'pine'}]}}), undefined);
});

test('the documented version 2 layout remains publishable', () => {
  const value = JSON.parse(readFileSync(new URL('../../examples/layout-v2.json', import.meta.url), 'utf8'));
  const before = structuredClone(value);
  assert.equal(problem(value), undefined);
  assert.deepEqual(value, before);
});
