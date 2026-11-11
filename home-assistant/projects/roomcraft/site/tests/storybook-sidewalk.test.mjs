import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {compileStorybookSidewalk, createStorybookSidewalk} from '../ha-local/storybook-sidewalk.mjs';

const road = {
  centerX: 765, width: 6200,
  sidewalks: [{minZ: -80, maxZ: -58, surfaceY: -106}, {minZ: -212, maxZ: -190, surfaceY: -106}],
};

test('fictional adults, children and cyclists stay on separate stripes of both paved sidewalks', () => {
  const paths = compileStorybookSidewalk(road);
  assert.ok(paths.walkers.some(actor => actor.child));
  assert.ok(paths.walkers.some(actor => paths.walkers.some(other =>
    other.groupId === actor.groupId && other.child !== actor.child)));
  assert.ok(new Set(paths.cyclists.map(actor => actor.style.id)).size > 2);
  for (const seconds of [0, 2, 12.7, 25, 120, 600]) {
    const {walkers, cyclists} = paths.sample(seconds);
    const inView = actor => Math.abs(actor.x - road.centerX) < 800;
    for (const direction of [-1, 1]) {
      const walking = walkers.filter(actor => actor.direction === direction);
      const riding = cyclists.filter(actor => actor.direction === direction);
      const sidewalk = road.sidewalks[direction < 0 ? 1 : 0];
      const fits = (actor, halfWidth) => actor.z - halfWidth >= sidewalk.minZ &&
        actor.z + halfWidth <= sidewalk.maxZ && actor.y === sidewalk.surfaceY;
      assert.ok(walking.every(actor => fits(actor, 4.2 * actor.scale)));
      assert.ok(riding.every(actor => fits(actor, actor.style.width * .58 * actor.scale)));
      assert.ok(walking.every(walker => riding.every(rider => Math.abs(walker.z - rider.z) >= 9.4)));
      assert.ok(walking.some(inView));
      assert.ok(riding.some(inView));
    }
  }
});

test('walkers and cyclists move at distinct steady speeds with deterministic phase and safe wrap bounds', () => {
  const paths = compileStorybookSidewalk(road);
  const first = paths.sample(0);
  const next = paths.sample(1);
  assert.ok(Math.abs(next.walkers[0].x - first.walkers[0].x - 22) < 1e-6);
  assert.ok(Math.abs(next.cyclists[0].x - first.cyclists[0].x - 63) < 1e-6);
  assert.deepEqual(paths.sample(25), paths.sample(25));
  assert.ok(paths.sample(25).cyclists.some(actor => Math.abs(actor.x - road.centerX) < 240));
  for (const {x} of [...paths.sample(960).walkers, ...paths.sample(960).cyclists]) {
    assert.ok(Math.abs(x - road.centerX) <= road.width / 2 - 75);
  }
});

function snapshot(sidewalk) {
  const matrix = new THREE.Matrix4();
  return sidewalk.root.children.map(mesh => [
    mesh.name, ...Array.from({length: mesh.count}, (_, index) => {
      mesh.getMatrixAt(index, matrix);
      return matrix.toArray();
    }),
  ]);
}

test('scenic instancing, reduced motion and replay leave the live sidewalk clock intact', () => {
  const sidewalk = createStorybookSidewalk(road);
  const reference = createStorybookSidewalk(road);
  assert.equal(sidewalk.root.name, 'sidewalk-scenery');
  assert.ok(sidewalk.root.children.every(mesh => mesh.isInstancedMesh));
  sidewalk.update(100);
  reference.update(100);
  assert.deepEqual(snapshot(sidewalk), snapshot(reference));
  const options = {transientTelemetry: true, night: true};
  sidewalk.update(25, options);
  const showcase = snapshot(sidewalk);
  sidewalk.update(28, options);
  assert.notDeepEqual(snapshot(sidewalk), showcase);
  sidewalk.update(25, options);
  assert.deepEqual(snapshot(sidewalk), showcase);
  sidewalk.update(100.1);
  reference.update(100.1);
  assert.deepEqual(snapshot(sidewalk), snapshot(reference));
  sidewalk.update(100.2, {reduceMotion: true});
  const still = snapshot(sidewalk);
  sidewalk.update(103, {reduceMotion: true});
  assert.deepEqual(snapshot(sidewalk), still);
  sidewalk.dispose();
  reference.dispose();
});

test('the sidewalk owns and disposes its geometry, materials and instance buffers', () => {
  const scene = new THREE.Scene();
  const sidewalk = createStorybookSidewalk(road);
  scene.add(sidewalk.root);
  let disposed = 0;
  const meshes = sidewalk.root.children.length;
  for (const mesh of sidewalk.root.children) {
    for (const resource of [mesh, mesh.geometry, mesh.material]) {
      resource.addEventListener('dispose', () => disposed++);
    }
  }
  sidewalk.dispose();
  assert.equal(disposed, meshes * 3);
  assert.equal(scene.children.length, 0);
  const empty = createStorybookSidewalk({...road, sidewalks: []});
  empty.update(0);
  empty.dispose();
  assert.equal(empty.root.children.length, 0);
});
