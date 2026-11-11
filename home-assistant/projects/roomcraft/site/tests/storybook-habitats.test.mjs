import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {test} from 'node:test';
import {Box3} from 'three';
import {makeStorybookFurniture} from '../ha-local/storybook-furniture.mjs';

const window = {};
runInNewContext(readFileSync(new URL('../public/inventory.js', import.meta.url), 'utf8'), {window});
const definitions = window.RoomcraftInventory.templates.filter(entry => entry.group === 'pets');

function position(root, name) {
  return root.getObjectByName(name).position.toArray();
}

function poseOf(root) {
  const result = [];
  root.traverse(part => result.push([part.name, part.position.toArray(), part.rotation.toArray(), part.visible]));
  return result;
}

test('pet catalog footprints drive model width and depth and remain editable', () => {
  assert.equal(definitions.length, 2);
  for (const item of definitions) {
    for (const [w, h] of [[item.w, item.h], [item.w * .7, item.h * 1.4], [12, 12]]) {
      const model = makeStorybookFurniture({...item, w, h});
      const bounds = new Box3().setFromObject(model.root);
      assert.equal(model.ambientMotion, true);
      assert.ok(Math.abs(bounds.min.x + w / 2) < 1e-4, item.type);
      assert.ok(Math.abs(bounds.max.x - w / 2) < 1e-4, item.type);
      assert.ok(Math.abs(bounds.min.z + h / 2) < 1e-4, item.type);
      assert.ok(Math.abs(bounds.max.z - h / 2) < 1e-4, item.type);
      assert.ok(bounds.max.y <= model.anchorY);
    }
  }
});

test('fish, bubbles and gecko have repeatable animation and a zero-time resting frame', () => {
  const motion = {
    'pets-fish-aquarium-oak': ['fish-0', 'bubble-0'],
    'pets-lizard-terrarium-walnut': ['gecko'],
  };
  for (const item of definitions) {
    const model = makeStorybookFurniture(item);
    const resting = poseOf(model.root);
    const restingPositions = motion[item.type].map(name => position(model.root, name));
    model.animate({}, 2);
    const moving = poseOf(model.root);
    for (const [index, name] of motion[item.type].entries()) {
      assert.notDeepEqual(position(model.root, name), restingPositions[index]);
    }
    model.animate({}, 1);
    model.animate({}, 2);
    assert.deepEqual(poseOf(model.root), moving);
    model.animate({}, 0);
    assert.deepEqual(poseOf(model.root), resting);
  }
});
