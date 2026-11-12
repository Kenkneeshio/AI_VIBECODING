import assert from 'node:assert/strict';
import {test} from 'node:test';
import {Box3, Vector3} from 'three';
import '../public/inventory.js';
import '../public/model-library.js';
import {makeStorybookDevice} from '../ha-local/storybook-devices.mjs';
import {makeStorybookFurniture} from '../ha-local/storybook-furniture.mjs';
import {makeStorybookParkedVehicle} from '../ha-local/storybook-parked-vehicles.mjs';

const {templates} = globalThis.RoomcraftModels.catalog();
const catalog = new Map(templates.map(entry => [entry.type, entry]));
const sceneOwned = new Set([
  'cameraThumbnail', 'controlZone', 'stairs',
  'uiWeatherOrb', 'uiMenu', 'uiTime', 'uiEdit', 'uiStatusAir', 'uiStatusElectrical',
]);

function model(item) {
  const {type, w, h} = catalog.get(item);
  const layoutItem = {type, w, h};
  return makeStorybookParkedVehicle(layoutItem) ?? makeStorybookDevice(layoutItem) ?? makeStorybookFurniture(layoutItem);
}

function meshes(root) {
  const result = [];
  root.traverseVisible(node => { if (node.isMesh) result.push(node); });
  return result;
}

test('every physical model in the inventory renders from saved layout fields alone', () => {
  for (const entry of templates) {
    if (sceneOwned.has(entry.type)) continue;
    const art = model(entry.type);
    assert.ok(art, entry.type);
    assert.ok(Number.isFinite(art.anchorY), entry.type);
    art.root.updateMatrixWorld(true);
    const bounds = new Box3();
    const visible = meshes(art.root);
    assert.ok(visible.length > 0, entry.type);
    for (const mesh of visible) {
      mesh.geometry.computeBoundingBox();
      bounds.union(mesh.geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld));
    }
    const {x, y, z} = bounds.getSize(new Vector3());
    assert.ok([x, y, z].every(n => Number.isFinite(n) && n > 0), entry.type);
    assert.ok(bounds.min.y >= -.7 && x <= entry.w * 1.08 && z <= entry.h * 1.08, entry.type);
  }
});

test('the shape and finish choices affect the visible model', () => {
  const describe = type => meshes(model(type).root).map(mesh => [
    mesh.material.color.getHexString(), mesh.geometry.attributes.position.count,
  ]);
  for (const [first, second] of [
    ['baby-toys-soft-ball-sage', 'baby-toys-cloth-book-sage'],
    ['baby-activities-play-gym-sage', 'baby-activities-floor-mirror-sage'],
    ['baby-mats-round-mat-cream', 'baby-mats-foam-mat-cream'],
    ['balcony-vertical-garden-forest', 'balcony-rail-planters-forest'],
    ['toy-storage-toy-basket-sage', 'toy-storage-soft-toy-bin-sage'],
    ['fans-four-blade-fan-white', 'fans-palm-fan-forest'],
    ['cleaning-round-robot-vac-white', 'cleaning-round-robot-vac-charcoal'],
    ['cleaning-round-robot-vac-white', 'cleaning-robot-mop-white'],
    ['lighting-bud-table-lamp-mint', 'lighting-bud-table-lamp-blush'],
  ]) assert.notDeepEqual(describe(first), describe(second));
});

test('a docked vacuum has stationary dock artwork and an independent mobile model', () => {
  const vacuum = model('cleaning-docked-robot-vac-white');
  assert.ok(vacuum.dock && meshes(vacuum.dock).length > 0);
  assert.equal(vacuum.dock.parent, null);
  assert.ok(vacuum.floorRadius > 0);
  assert.ok(!model('cleaning-round-robot-vac-white').dock);
});
