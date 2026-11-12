import assert from 'node:assert/strict';
import test from 'node:test';
import {Mesh, MeshBasicMaterial, Raycaster, Vector3} from 'three';
import {createStorybookMeadow} from '../ha-local/storybook-meadow.mjs';

const garage = {item:{type:'garageDoor', w:134, h:92}, x:220, z:300, angle:.48};
const stairs = {item:{type:'stairs', w:84, h:142}, x:244, z:712, angle:-.31, apronDepth:39};
const plan = {
  houseBounds:{minX:360, maxX:1450, minZ:185, maxZ:835},
  editableStructure:true, placements:[garage, stairs], stairs:[stairs],
};
const street = {
  nearZ:41,
  sample(x, z) { return {x, z:z + 32 * Math.sin(x * .006), yaw:0}; },
};
const inputs = {plan, street, width:6200, depth:4200, centerX:905, centerZ:510, groundY:-111};

function pointIn(pad, side, along) {
  const cosine = Math.cos(pad.angle), sine = Math.sin(pad.angle);
  return [pad.x + side * cosine - along * sine, pad.z + side * sine + along * cosine];
}

test('ground under house, rotated garage, stairs and curved road is flat between mesh vertices', () => {
  const {geometry, heightAt} = createStorybookMeadow(inputs);
  for (let x = -175; x <= 1960; x += 19) {
    const verge = street.sample(x, street.nearZ).z;
    for (const offset of [0, -7, -132, -250, -430]) {
      assert.equal(heightAt(x, verge + offset), inputs.groundY);
    }
  }
  const {minX, maxX, minZ, maxZ} = plan.houseBounds;
  for (let x = minX; x <= maxX; x += 31) {
    for (let z = minZ; z <= maxZ; z += 23) assert.equal(heightAt(x, z), inputs.groundY);
  }
  for (const [pad, front, back] of [[garage, -50, 60], [stairs, -110, 71]]) {
    for (const lateral of [-pad.item.w / 2, -15, 0, 15, pad.item.w / 2]) {
      for (let along = front; along <= back; along += 7.1) {
        assert.equal(heightAt(...pointIn(pad, lateral, along)), inputs.groundY);
      }
    }
  }
  geometry.dispose();
});

test('meadow relief stays within the terrain budget and planting samples match rendered triangles', () => {
  const {geometry, heightAt} = createStorybookMeadow(inputs);
  const {geometry:again} = createStorybookMeadow(inputs);
  assert.deepEqual(geometry.attributes.position.array, again.attributes.position.array);
  assert.deepEqual(geometry.attributes.color.array, again.attributes.color.array);
  assert.ok(geometry.index.count / 3 <= 20_000);
  const {position, normal, uv} = geometry.attributes;
  assert.equal(uv.count, position.count);
  let highest = 0;
  for (let index = 0; index < position.count; index++) {
    assert.ok(position.getY(index) >= 0 && position.getY(index) <= 15);
    assert.ok(normal.getY(index) > .9);
    highest = Math.max(highest, position.getY(index));
  }
  assert.ok(highest > 10);
  const mesh = new Mesh(geometry, new MeshBasicMaterial());
  mesh.position.set(inputs.centerX, inputs.groundY, inputs.centerZ);
  mesh.updateMatrixWorld(true);
  const down = new Vector3(0, -1, 0);
  for (const [x, z] of [[-85, 381], [169.2, 804.5], [904.6, 980.7], [1680.5, 735.2], [1935.2, 695.8]]) {
    const ray = new Raycaster(new Vector3(x, inputs.groundY + 80, z), down);
    const [hit] = ray.intersectObject(mesh);
    assert.ok(hit && Math.abs(hit.point.y - heightAt(x, z)) < .0001);
  }
  assert.equal(heightAt(inputs.centerX - inputs.width / 2, inputs.centerZ), inputs.groundY);
  assert.equal(heightAt(inputs.centerX + inputs.width, inputs.centerZ), inputs.groundY);
  mesh.material.dispose();
  geometry.dispose();
  again.dispose();
});
