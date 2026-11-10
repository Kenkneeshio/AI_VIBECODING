import assert from 'node:assert/strict';
import test from 'node:test';
import { compileStorybookPlan } from '../ha-local/storybook-scene.mjs';

function sample() {
  return {
    version: 2,
    rooms: [{
      id: 'synthetic-room', surface: 'oak',
      points: [{ x: 110, y: 210 }, { x: 760, y: 210 }, { x: 760, y: 700 }, { x: 110, y: 700 }],
    }],
    walls: [{ id: 'synthetic-wall', x1: 110, y1: 210, x2: 760, y2: 210 }],
    items: [
      { id: 'glass', type: 'window', x: 400, y: 219, w: 100, h: 34, rotation: 0 },
      { id: 'shade', type: 'controlZone', entityId: 'cover.example', x: 409, y: 222, w: 112, h: 53, rotation: 0 },
      { id: 'switch', type: 'presenceSwitch', x: 570, y: 225, w: 26, h: 34, rotation: 0 },
      { id: 'camera', type: 'cameraThumbnail', x: 92, y: 719, w: 70, h: 42, rotation: 0 },
    ],
  };
}

test('v2 projection is deterministic and preserves the authored scene', () => {
  const source = sample();
  const snapshot = structuredClone(source);
  const one = compileStorybookPlan(source);
  assert.deepEqual(one, compileStorybookPlan(structuredClone(source)));
  assert.deepEqual(source, snapshot);
  assert.equal(one.reference, null);
  assert.equal(one.bounds.minX, 57);
  assert.equal(one.bounds.maxZ, 740);
});

test('the wall opening, glass, and live shade share the same geometry', () => {
  const plan = compileStorybookPlan(sample());
  assert.deepEqual(plan.walls[0].openings, [{ start: 241, end: 339 }]);
  const [glass, shade, switchPlacement] = plan.placements;
  assert.equal(glass.x, 400);
  assert.equal(glass.z, 210);
  assert.equal(shade.x, glass.x);
  assert.equal(shade.z, glass.z);
  assert.equal(shade.angle, glass.angle);
  assert.equal(shade.window.w, glass.window.w);
  assert.equal(switchPlacement.x, 570);
  assert.equal(switchPlacement.z, 221);
  assert.equal(switchPlacement.mountY, 39);
});

test('invalid rooms and incompatible versions fail before allocating WebGL resources', () => {
  const source = sample();
  assert.throws(() => compileStorybookPlan({ ...source, version: 3 }), /Roomcraft v2/);
  assert.throws(() => compileStorybookPlan({ ...source, rooms: [{ points: [{ x: 1, y: NaN }] }] }), /room polygon/);
});
