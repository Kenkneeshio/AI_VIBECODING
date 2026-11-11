import assert from 'node:assert/strict';
import test from 'node:test';
import {Raycaster, Vector3} from 'three';
import {makeStorybookDevice} from '../ha-local/storybook-devices.mjs';
import {makeStorybookFurniture} from '../ha-local/storybook-furniture.mjs';
import {createStorybookPlacement} from '../ha-local/storybook-placement.mjs';
import {applyModelHeight} from '../ha-local/storybook-size.mjs';

function mount(items) {
  const roots = new Map();
  const placements = items.map(item => {
    const {x, y: z, baseY = 0, angle = 0, mountY} = item;
    const object = makeStorybookDevice(item) ?? makeStorybookFurniture(item);
    if (object) {
      const offset = applyModelHeight(item, object.root);
      object.root.position.set(x, baseY + offset, z);
      object.root.rotation.y = -angle;
      roots.set(item.id, object);
    }
    return {item, x, z, baseY, angle, mountY};
  });
  return {roots, supports: createStorybookPlacement(placements, roots)};
}

function near(actual, expected) {
  assert.ok(Math.abs(actual - expected) < .005, `${actual} vs. ${expected}`);
}

test('the actual lamp foot and humidifier base touch their authored scaled furniture tops', () => {
  const {supports, roots} = mount([
    {id: 'cabinet', type: 'storageCabinet', x: 100, y: 100, w: 75, h: 92, modelHeight: 68},
    {id: 'lamp', type: 'lamp', x: 97, y: 96, w: 42, h: 48},
    {id: 'nightstand', type: 'nightstand', x: 100, y: 220, w: 80, h: 58, angle: Math.PI / 2},
    {id: 'humidifier', type: 'humidifier', x: 98, y: 222, w: 46, h: 58},
  ]);
  const result = supports.resolve();
  assert.equal(result.get('lamp').supportId, 'cabinet');
  near(result.get('lamp').y + 14, 68);
  assert.equal(result.get('humidifier').supportId, 'nightstand');
  near(result.get('humidifier').y, 31);
  assert.equal(roots.get('lamp').root.position.y, 0);
  assert.equal(result.has('nightstand'), false);
});

test('a wraparound desk accepts its solid worktop and leaves the central opening on the floor', () => {
  const {supports} = mount([
    {id: 'desk', type: 'desk', x: 300, y: 200, w: 180, h: 120},
    {id: 'plant', type: 'plant', x: 338, y: 158, w: 24, h: 24},
    {id: 'lamp', type: 'lamp', x: 300, y: 200, w: 40, h: 40},
    {id: 'rug', type: 'rug', x: 300, y: 200, w: 150, h: 108},
  ]);
  const result = supports.resolve();
  assert.equal(result.get('plant').supportId, 'desk');
  near(result.get('plant').y, 44);
  assert.deepEqual(result.get('lamp'), {y: -14, supportId: null});
  assert.equal(result.has('rug'), false);
});

test('draft movement recalculates tabletop support without moving the real models', () => {
  const {supports, roots} = mount([
    {id: 'table', type: 'table', x: 100, y: 100, w: 172, h: 108},
    {id: 'flowers', type: 'plant', x: 102, y: 100, w: 32, h: 32},
    {id: 'other-floor', type: 'sideTable', x: 102, y: 100, w: 60, h: 60, baseY: 100},
    {id: 'sconce', type: 'wallSconce', x: 102, y: 100, w: 35, h: 35, mountY: 42},
    {id: 'floor-lamp', type: 'floorLamp', x: 102, y: 100, w: 45, h: 50},
  ]);
  const initial = supports.resolve();
  assert.equal(initial.get('flowers').supportId, 'table');
  near(initial.get('flowers').y, 46.4);
  assert.equal(initial.has('sconce'), false);
  assert.equal(initial.has('floor-lamp'), false);
  assert.deepEqual(supports.resolve({table: {position: {x: 310, y: 350}}}).get('flowers'), {y: 0, supportId: null});
  const bothMoved = supports.resolve({
    table: {position: {x: 310, y: 350}},
    flowers: {position: {x: 312, y: 350}},
  });
  assert.equal(bothMoved.get('flowers').supportId, 'table');
  near(bothMoved.get('flowers').y, 46.4);
  assert.equal(roots.get('table').root.position.x, 100);
});

test('a partly unsupported foot stays on the floor', () => {
  const {supports} = mount([
    {id: 'side-table', type: 'sideTable', x: 100, y: 100, w: 55, h: 55},
    {id: 'humidifier', type: 'humidifier', x: 124, y: 100, w: 46, h: 58},
  ]);
  assert.deepEqual(supports.resolve().get('humidifier'), {y: 0, supportId: null});
});

test('oblique placement uses the visible tabletop for small objects without changing the input ray', () => {
  const {supports} = mount([
    {id: 'nightstand', type: 'nightstand', x: 100, y: 100, w: 80, h: 58, angle: Math.PI / 2},
  ]);
  const eye = new Vector3(45, 125, 140);
  const target = new Vector3(103, 31, 105);
  const direction = target.clone().sub(eye).normalize();
  const ray = new Raycaster(eye, direction);
  const placement = supports.projectTabletop('lamp', ray);
  near(placement.x, target.x);
  near(placement.y, target.z);
  assert.equal(supports.projectTabletop('floorLamp', ray), null);
  assert.equal(supports.projectTabletop('sofa', ray), null);
  assert.deepEqual(ray.ray.origin.toArray(), eye.toArray());
  assert.deepEqual(ray.ray.direction.toArray(), direction.toArray());

  const side = new Raycaster(new Vector3(40, 16, 100), new Vector3(1, 0, 0));
  assert.equal(supports.projectTabletop('plant', side), null);
});
