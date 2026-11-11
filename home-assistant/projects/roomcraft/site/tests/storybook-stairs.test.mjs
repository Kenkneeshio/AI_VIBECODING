import assert from 'node:assert/strict';
import test from 'node:test';
import { OrthographicCamera, Raycaster, Vector3 } from 'three';
import { compileStorybookPlan, makeStorybookStairs, projectExteriorClearance } from '../ha-local/storybook-scene.mjs';
import { fitStorybookCamera } from '../ha-local/storybook-camera.mjs';

const item = {id: 'stairs', type: 'stairs', x: 100, y: 250, w: 50, h: 180, rotation: 0, steps: 9};
const layout = {version: 2, editableReferenceVersion: 8, rooms: [], walls: [], items: [item]};

test('all stair edges stay visible from overhead and the upper end meets the second-floor landing', () => {
  const {stairs: [stair]} = compileStorybookPlan(layout);
  const {root} = makeStorybookStairs(stair);
  root.updateMatrixWorld(true);
  const ray = new Raycaster();
  function hitAt(z) {
    ray.set(new Vector3(0, 20, z), new Vector3(0, -1, 0));
    const [hit] = ray.intersectObject(root, true);
    assert.ok(hit, 'Missing stair geometry at ' + z);
    return hit;
  }

  const apron = hitAt(-item.h / 2 - stair.apronDepth / 2);
  assert.equal(apron.point.y, -108);
  const run = item.h / stair.steps;
  let previousY = apron.point.y;
  for (let i = 0; i < stair.steps; i++) {
    const front = -item.h / 2 + i * run;
    const nose = hitAt(front + .9);
    const tread = hitAt(front + run / 2);
    assert.ok(tread.point.y > previousY);
    assert.ok(nose.point.y > tread.point.y);
    assert.notEqual(nose.object.material.color.getHex(), tread.object.material.color.getHex());
    previousY = tread.point.y;
  }
  assert.equal(previousY, 0);
});

test('the ground apron rotates with an editable stair and stays in view', () => {
  const straight = compileStorybookPlan(layout);
  const rotated = compileStorybookPlan({...layout, items: [{...item, rotation: 90}]});
  const [{apronDepth}] = straight.stairs;
  assert.equal(straight.bounds.minZ, item.y - item.h / 2 - apronDepth);
  assert.equal(rotated.bounds.maxX, item.x + item.h / 2 + apronDepth);
});

test('camera tile clearance follows the projected stair and rail in each angle', () => {
  const plan = compileStorybookPlan({...layout, walls: [
    {id: 'rail', kind: 'fence', x1: 75, y1: 160, x2: 75, y2: 340},
  ]});
  const camera = new OrthographicCamera();
  const width = 1280;
  const height = 800;
  const projected = [];
  for (const view of ['top', 'west']) {
    fitStorybookCamera(camera, plan.bounds, width, height, view);
    const [rail, stair] = projectExteriorClearance(plan, camera, width, height);
    const contains = ({left, top, right, bottom}, x, y, z) => {
      const point = new Vector3(x, y, z).project(camera);
      const px = (point.x + 1) * width / 2;
      const py = (1 - point.y) * height / 2;
      return px > left && px < right && py > top && py < bottom;
    };
    assert.ok(contains(rail, 75, 28, 340), view);
    assert.ok(contains(stair, 100, -108, 160 - plan.stairs[0].apronDepth), view);
    assert.ok(contains(stair, 125, 0, 340), view);
    projected.push(stair);
  }
  assert.notDeepEqual(...projected);
  assert.deepEqual(projectExteriorClearance({fences: [], stairs: []}, camera, width, height), []);
});
