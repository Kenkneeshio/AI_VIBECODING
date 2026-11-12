import assert from 'node:assert/strict';
import test from 'node:test';
import { Box3, Raycaster, Vector3 } from 'three';
import { makeStorybookFurniture } from '../ha-local/storybook-furniture.mjs';
import { createStorybookFurnitureCollision } from '../ha-local/storybook-floor-support.mjs';

const inventory = globalThis.RoomcraftInventory.templates;
const specialties = inventory.filter(template =>
  ['paddedPanel', 'foamBlock', 'fireplace'].includes(template.artFamily) ||
  ['softPouf', 'photoBolster'].includes(template.form));
const wallDecor = [{ type: 'artwork', w: 94, h: 56 }, { type: 'mirror', w: 72, h: 52 }];

test('specialty models keep visible three-dimensional geometry inside the authored footprint', () => {
  for (const template of [...specialties, ...wallDecor]) {
    for (const [w, h] of [[template.w, template.h], [12, 12]]) {
      const label = `${template.type} (${w} × ${h})`;
      const model = makeStorybookFurniture({ ...template, w, h });
      assert.ok(model?.root.children.length > 1, label);
      assert.ok(Number.isFinite(model.anchorY), label);
      const { min, max } = new Box3().setFromObject(model.root);
      assert.ok(min.y >= -.15 && max.y - min.y > 3, label);
      assert.ok(Math.max(Math.abs(min.x), max.x) <= w * .54, label);
      assert.ok(Math.max(Math.abs(min.z), max.z) <= h * .54, label);
    }
  }
});

test('foam arches and tunnels leave an open passage beneath the padded crown', () => {
  for (const form of ['arch', 'tunnel']) {
    const template = specialties.find(item => item.form === form);
    const { root } = makeStorybookFurniture(template);
    root.updateMatrixWorld(true);
    const ray = new Raycaster(new Vector3(0, 10, template.h), new Vector3(0, 0, -1));
    assert.equal(ray.intersectObject(root).length, 0, form);
    ray.ray.origin.y = new Box3().setFromObject(root).max.y * .85;
    assert.ok(ray.intersectObject(root).length > 0, form);
  }
});

test('wall decor follows its mounted center and retains a detailed face', () => {
  for (const template of wallDecor) {
    const mounted = makeStorybookFurniture(template, { mountY: 36 });
    const { min, max } = new Box3().setFromObject(mounted.root);
    assert.ok(Math.abs((min.y + max.y) / 2 - 36) < .1, template.type);
    assert.ok(mounted.root.children.length >= 4, template.type);
  }
});

test('wide folding barriers retain their fold without extending beyond their depth', () => {
  const template = specialties.find(item => item.form === 'folding');
  const { root } = makeStorybookFurniture({ ...template, w: 600, h: 12 });
  const { min, max } = new Box3().setFromObject(root);
  assert.ok(min.z >= -6 && max.z <= 6);
});

test('a rotated play yard blocks its rails and leaves the interior available', () => {
  const template = specialties.find(item => item.form === 'photoPlayYard');
  const yard = {...template, id:'yard', x:200, y:240, rotation:90};
  const chair = {id:'chair', type:'diningChair', x:200, y:240, w:34, h:26};
  const models = globalThis.RoomcraftModels;
  assert.equal(models.blockingPlacement(chair, [yard]), undefined);
  const touchingRail = {...chair, x:306};
  assert.equal(models.blockingPlacement(touchingRail, [yard]), yard);
  assert.equal(models.blockingPlacement(touchingRail, [yard], touchingRail), undefined);
  const walking = createStorybookFurnitureCollision([{item:yard, x:yard.x, z:yard.y, angle:Math.PI / 2}]);
  assert.equal(walking.blocksPoint(200, 240, 6), false);
  assert.equal(walking.blocksRoute(200, 240, 350, 240, 6), true);
  assert.equal(walking.blocksRoute(200, 240, 200, 300, 6), false);
});

test('soft climbers and poufs use their footprint in placement and walking', () => {
  const models = globalThis.RoomcraftModels;
  const chair = {id:'chair', type:'diningChair', x:350, y:420, w:34, h:26};
  for (const form of ['wedge', 'softPouf', 'photoBolster']) {
    const template = specialties.find(item => item.form === form);
    const item = {...template, id:form, x:chair.x, y:chair.y, rotation:18};
    assert.equal(models.blockingPlacement(chair, [item]), item);
    const walking = createStorybookFurnitureCollision([{item, x:item.x, z:item.y, angle:Math.PI / 10}]);
    assert.equal(walking.blocksRoute(290, 420, 410, 420, 5), true, form);
  }
});
