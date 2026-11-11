import assert from 'node:assert/strict';
import test from 'node:test';
import {Box3, Vector3} from 'three';
import {makeStorybookFurniture} from '../ha-local/storybook-furniture.mjs';
import {createStorybookPlacement} from '../ha-local/storybook-placement.mjs';

const near = (actual, expected, reason) => assert.ok(Math.abs(actual - expected) < .01, reason);

test('independent dining tables use their real footprint and legacy sets still contain chairs', () => {
  for (const [type, w, h, height] of [
    ['diningTable', 136, 62, 46.4],
    ['living-petal-dining-table-oak', 132.72, 62.72, 42.3],
    ['living-round-dining-table-walnut', 82.36, 82.36, 41],
    ['living-rectangular-dining-table-white', 161.95, 68.32, 42.3],
  ]) {
    const item = {type, w, h, id: type};
    const model = makeStorybookFurniture(item);
    const {min, max} = new Box3().setFromObject(model.root);
    near(max.x - min.x, w, type);
    near(max.z - min.z, h, type);
    near(min.y, 0, type);
    near(max.y, height, type);
    near(model.anchorY, height, type);
  }
  const legacy = makeStorybookFurniture({type:'table', w:172, h:108});
  const {max} = new Box3().setFromObject(legacy.root);
  near(max.y, 59, 'Legacy dining set still includes its 59-unit chair backs');
});

test('an independent dining chair faces its rotation and its seat fits below the table', () => {
  const {root, anchorY} = makeStorybookFurniture({type:'diningChair', w:34, h:26});
  const highPoints = [];
  const frontPoints = [];
  root.rotation.y = -Math.PI / 2;
  root.updateMatrixWorld(true);
  for (const mesh of root.children) {
    const vertices = mesh.geometry.attributes.position;
    for (let index = 0; index < vertices.count; index++) {
      const point = new Vector3().fromBufferAttribute(vertices, index).applyMatrix4(mesh.matrixWorld);
      if (point.y > 50) highPoints.push(point);
      if (point.x < 5) frontPoints.push(point);
    }
  }
  assert.equal(anchorY, 59);
  assert.ok(highPoints.length > 0 && highPoints.every(point => point.x > 7));
  near(Math.max(...frontPoints.map(point => point.y)), 30, 'Seat must clear the 32-unit apron');
});

test('flowers still settle on the cloth on a standalone table', () => {
  const items = [
    {id:'table', type:'diningTable', w:136, h:62},
    {id:'flowers', type:'plant', w:32, h:32},
  ];
  const roots = new Map(items.map(item => [item.id, makeStorybookFurniture(item)]));
  const placement = createStorybookPlacement(items.map(item => ({item, x:0, z:0, baseY:0})), roots);
  const flowers = placement.resolve().get('flowers');
  assert.equal(flowers.supportId, 'table');
  near(flowers.y, 46.4, 'Standalone tabletop height comes from its physical surface');
});
