import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {buildStorybookNeighborhood} from '../ha-local/storybook-street.mjs';
import {createStorybookBeachPlay, planStorybookBeachPlay, sampleStorybookBeachPlay} from '../ha-local/storybook-beach-play.mjs';

const street = {farZ:-254};
const {water} = buildStorybookNeighborhood({box() {}, ball() {}, add(geometry) { geometry.dispose(); }},
  street, -111, {minX:350, maxX:1430}, 6200, 780);
const layout = planStorybookBeachPlay(water, street);

test('the authored shoreline gives the volleyball and sandcastle groups distinct dry-sand patches', () => {
  assert.ok(layout.court && layout.castle);
  assert.ok(layout.court.x + layout.court.halfWidth < layout.castle.x - layout.castle.halfWidth);
  for (const area of Object.values(layout)) {
    assert.ok(area.z + area.halfDepth <= street.farZ - 39 + 1e-6);
    const nearest = water.shoreline.filter(({x}) => Math.abs(x - area.x) < area.halfWidth);
    assert.ok(nearest.every(({z}) => area.z - area.halfDepth >= z + 26 - 1e-6));
    assert.ok(area.y > -111 && area.y < water.y);
  }
  const empty = createStorybookBeachPlay({...water, shoreline:[]}, street);
  empty.update(0);
  assert.equal(empty.root.children.length, 0);
  empty.dispose();
});

test('the ball crosses both sides above the net while the family works around its sandcastle', () => {
  const start = sampleStorybookBeachPlay(layout, 0);
  const crest = sampleStorybookBeachPlay(layout, 1.125);
  const returnStart = sampleStorybookBeachPlay(layout, 2.25);
  assert.ok(start.ball.x < layout.court.x && returnStart.ball.x > layout.court.x);
  assert.ok(Math.abs(crest.ball.x - layout.court.x) < 1e-6);
  assert.ok(crest.ball.y - layout.court.y > 30);
  assert.ok(start.actors[0].reach > start.actors[1].reach);
  assert.ok(returnStart.actors[0].reach < returnStart.actors[1].reach);
  assert.equal(start.actors[2].kind, 'builder');
  assert.ok(start.actors[2].scale < start.actors[3].scale);
  assert.notEqual(start.actors[2].reach, crest.actors[2].reach);
  assert.deepEqual(sampleStorybookBeachPlay(layout, 4, true), sampleStorybookBeachPlay(layout, 500, true));
});

function snapshot(beach) {
  const ball = beach.root.getObjectByName('beach-volleyball-ball');
  const actors = beach.root.getObjectByName('beach-recreation-figures');
  const matrix = new THREE.Matrix4();
  return {ball:ball.position.toArray(), spin:ball.rotation.toArray(),
    actors:Array.from({length:actors.count}, (_, index) => {
      actors.getMatrixAt(index, matrix);
      return matrix.toArray();
    })};
}

test('demo time, live time and reduced motion remain independent and replayable', () => {
  const beach = createStorybookBeachPlay(water, street);
  const reference = createStorybookBeachPlay(water, street);
  const demo = {transientTelemetry:true};
  beach.update(1, demo);
  const first = snapshot(beach);
  beach.update(2, demo);
  assert.notDeepEqual(snapshot(beach), first);
  beach.update(1, demo);
  assert.deepEqual(snapshot(beach), first);
  beach.update(.12);
  reference.update(.12);
  assert.deepEqual(snapshot(beach), snapshot(reference));
  beach.update(2, {reduceMotion:true});
  const still = snapshot(beach);
  beach.update(200, {reduceMotion:true});
  assert.deepEqual(snapshot(beach), still);
  beach.dispose();
  reference.dispose();
});

test('a complete activity uses five meshes and disposes its assets', () => {
  const beach = createStorybookBeachPlay(water, street);
  const scene = new THREE.Scene();
  scene.add(beach.root);
  const meshes = [];
  beach.root.traverse(node => { if (node.isMesh) meshes.push(node); });
  assert.equal(meshes.length, 5);
  let disposed = 0;
  for (const mesh of meshes) {
    mesh.material.addEventListener('dispose', () => disposed++);
    mesh.geometry.addEventListener('dispose', () => disposed++);
  }
  beach.dispose();
  assert.equal(disposed, 10);
  assert.equal(scene.children.length, 0);
});
