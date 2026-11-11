import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import test from 'node:test';
import {buildStorybookVehicle, STORYBOOK_VEHICLES} from '../ha-local/storybook-vehicles.mjs';

const geometryHash = ({geometry}) => createHash('sha256').update(
  Buffer.from(geometry.getAttribute('position').array.buffer)).digest('hex');

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
    assert.ok(Math.abs(bounds.min.y) < .001, id);
    assert.ok(bounds.max.x - bounds.min.x <= length + .1, id);
    assert.ok(bounds.max.z - bounds.min.z <= width + .1, id);
    assert.ok(headlights.geometry.boundingBox.min.x > length * .42, id);
    assert.ok(taillights.geometry.boundingBox.max.x < -length * .42, id);
    assert.equal(body.material.vertexColors, true);
    assert.ok(headlights.material.emissiveIntensity > 0 && taillights.material.emissiveIntensity > 0);
    assert.ok(layers.reduce((count, {geometry}) => count + geometry.attributes.position.count / 3, 0) <= 800, id);
    silhouettes.add(geometryHash(body));
    for (const {geometry, material} of layers) {
      geometry.dispose();
      material.dispose();
    }
  }
  assert.equal(silhouettes.size, ids.size);
  assert.ok(ids.size >= 12);
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
