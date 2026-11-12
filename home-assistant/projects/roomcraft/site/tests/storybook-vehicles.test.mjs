import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import test from 'node:test';
import {
  buildStorybookBicycle, buildStorybookVehicle, STORYBOOK_BICYCLES, STORYBOOK_VEHICLES,
} from '../ha-local/storybook-vehicles.mjs';

const geometryHash = ({geometry}) => createHash('sha256').update(
  Buffer.from(geometry.getAttribute('position').array.buffer)).digest('hex');
const triangleCount = layers => layers.reduce((count, {geometry}) => count + geometry.attributes.position.count / 3, 0);
const motorcycleIds = new Set(['apricot-scooter', 'ruby-motorcycle', 'moss-motorcycle', 'indigo-motorcycle']);
const semiIds = new Set(['teal-semi', 'coral-reefer']);

test('vehicle options have unique geometry, aligned front and rear lights, and a bounded draw budget', () => {
  const silhouettes = new Set();
  const ids = new Set();
  for (const {id, label, length, width} of STORYBOOK_VEHICLES) {
    const layers = buildStorybookVehicle(id);
    assert.ok(label.length);
    assert.ok(!ids.has(id));
    ids.add(id);
    assert.deepEqual(layers.map(({role}) => role), ['body', 'headlamp', 'taillamp']);
    const [body, headlights, taillights] = layers;
    const bounds = body.geometry.boundingBox;
    const motorcycle = motorcycleIds.has(id);
    const lightMount = length * (motorcycle ? .31 : .42);
    assert.ok(Math.abs(bounds.min.y) < .001, id);
    assert.ok(bounds.max.x - bounds.min.x <= length + .1, id);
    assert.ok(bounds.max.z - bounds.min.z <= width + .1, id);
    assert.ok(headlights.geometry.boundingBox.min.x > lightMount, id);
    assert.ok(taillights.geometry.boundingBox.max.x < -lightMount, id);
    assert.equal(body.material.vertexColors, true);
    assert.ok(headlights.material.emissiveIntensity > 0 && taillights.material.emissiveIntensity > 0);
    const triangleBudget = motorcycle ? 1150 : semiIds.has(id) ? 900 : 800;
    assert.ok(triangleCount(layers) <= triangleBudget, id);
    if (motorcycle) assert.ok(bounds.max.y >= 26 && bounds.max.y <= 32, id);
    silhouettes.add(geometryHash(body));
    for (const {geometry, material} of layers) {
      geometry.dispose();
      material.dispose();
    }
  }
  assert.equal(silhouettes.size, ids.size);
  assert.ok(ids.size >= 12);
  for (const id of motorcycleIds) assert.ok(ids.has(id));
  for (const id of semiIds) assert.ok(ids.has(id));
});

test('sidewalk bicycles fit their lane with a full rider silhouette and separate running lights', () => {
  const silhouettes = new Set();
  for (const {id, length, width} of STORYBOOK_BICYCLES) {
    const layers = buildStorybookBicycle(id);
    assert.deepEqual(layers.map(({role}) => role), ['body', 'headlamp', 'taillamp']);
    const [body, headlights, taillights] = layers;
    const {min, max} = body.geometry.boundingBox;
    assert.ok(Math.abs(min.y) < .001);
    assert.ok(max.y >= 18 && max.y <= 22, id);
    assert.ok(max.x - min.x <= length && length <= 30, id);
    assert.ok(max.z - min.z <= width && width <= 9, id);
    assert.ok(headlights.geometry.boundingBox.min.x > length * .30, id);
    assert.ok(taillights.geometry.boundingBox.max.x < -length * .30, id);
    assert.ok(triangleCount(layers) <= 1000, id);
    silhouettes.add(geometryHash(body));
    assert.equal(buildStorybookVehicle(id), null);
    for (const {geometry, material} of layers) {
      geometry.dispose();
      material.dispose();
    }
  }
  assert.ok(silhouettes.size >= 4);
  assert.equal(silhouettes.size, STORYBOOK_BICYCLES.length);
  assert.equal(buildStorybookBicycle('constructor'), null);
});

test('vehicle construction yields deterministic, independently disposable layers', () => {
  const [first, second] = Array.from({length: 2}, () => buildStorybookVehicle('peach-food-truck'));
  assert.deepEqual(first.map(geometryHash), second.map(geometryHash));
  for (const [index, layer] of first.entries()) {
    assert.notEqual(layer.geometry, second[index].geometry);
    assert.notEqual(layer.material, second[index].material);
  }
  assert.equal(buildStorybookVehicle('constructor'), null);
  for (const {geometry, material} of [...first, ...second]) {
    geometry.dispose();
    material.dispose();
  }
});
