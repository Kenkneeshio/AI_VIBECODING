import assert from 'node:assert/strict';
import test from 'node:test';
import { Box3, OrthographicCamera, Vector3 } from 'three';
import { fitStorybookCamera } from '../ha-local/storybook-camera.mjs';
import { makeStorybookDevice } from '../ha-local/storybook-devices.mjs';
import { pickEditorItem } from '../ha-local/storybook-editor.mjs';
import { compileStorybookPlan } from '../ha-local/storybook-scene.mjs';

const garage = {
  id: 'garage', type: 'garageDoor', entityId: 'cover.example',
  x: 240, y: 150, w: 130, h: 90, rotation: 90,
};
const fixture = items => ({version: 2, editableReferenceVersion: 8, rooms: [], walls: [], items});

test('a detached garage and camera on its rotated pad project at ground level', () => {
  const source = fixture([
    garage,
    {id: 'apron-camera', type: 'cameraThumbnail', x: 192, y: 156, w: 85, h: 49},
    {id: 'other-camera', type: 'cameraThumbnail', x: 182, y: 156, w: 85, h: 49},
    {id: 'regular-door', type: 'door', x: 240, y: 600, w: 60, h: 22},
  ]);
  const snapshot = structuredClone(source);
  const placements = compileStorybookPlan(source).placements;
  assert.deepEqual(source, snapshot);
  assert.deepEqual(placements.map(({x, z}) => [x, z]), snapshot.items.map(item => [item.x, item.y]));
  const [garagePlacement, apron, other, door] = placements;
  assert.ok(garagePlacement.baseY < 0);
  assert.equal(apron.baseY, garagePlacement.baseY);
  assert.equal(other.baseY, 0);
  assert.equal(door.baseY, 0);
  assert.equal(garagePlacement.angle, Math.PI / 2);
});

test('the detached garage sits on the ground, fits the standard views, and preserves shutter states', () => {
  const plan = compileStorybookPlan(fixture([garage]));
  const [placement] = plan.placements;
  const model = makeStorybookDevice(garage);
  model.root.position.set(placement.x, placement.baseY, placement.z);
  model.root.rotation.y = -placement.angle;
  const box = new Box3().setFromObject(model.root);
  assert.equal(box.min.y, placement.baseY);
  assert.ok(box.max.y < 0);
  const camera = new OrthographicCamera(-800, 800, 450, -450, 1, 4400);
  for (const preset of ['top', 'dollhouse', 'east', 'west']) {
    fitStorybookCamera(camera, plan.bounds, 900, 600, preset);
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) {
      for (const z of [box.min.z, box.max.z]) {
        const point = new Vector3(x, y, z).project(camera);
        assert.ok(Math.abs(point.x) <= 1 && Math.abs(point.y) <= 1, preset);
      }
    }
  }
  const visibleMeshes = () => {
    let count = 0;
    model.root.traverseVisible(node => { if (node.isMesh) count++; });
    return count;
  };
  model.animate({state: 'closed'});
  const shut = visibleMeshes();
  model.animate({state: 'open'});
  assert.ok(visibleMeshes() < shut);
  model.animate({state: 'closed'});
  assert.equal(visibleMeshes(), shut);
  model.animate({state: 'open'}, 0, false, true);
  assert.ok(visibleMeshes() < shut);
  model.animate({state: 'unavailable'});
  assert.equal(visibleMeshes(), shut);
});

test('a garage footprint on the upstairs projection cannot steal an unrelated click', () => {
  const anchors = new Map([[garage.id, {x: 0.7, y: 0.7}]]);
  const pointAtUpperPlane = {x: garage.x, y: garage.y};
  assert.equal(pickEditorItem([garage], {x: 20, y: 20}, pointAtUpperPlane, anchors, 500, 500), null);
  assert.equal(pickEditorItem([garage], {x: 350, y: 350}, null, anchors, 500, 500)?.id, garage.id);
});
