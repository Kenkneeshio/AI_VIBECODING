import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import test from 'node:test';
import {Box3, MeshLambertMaterial} from 'three';
import {
  addStorybookTree, createStorybookTreeWind, sampleStorybookTreeWind, STORYBOOK_TREE_SPECIES,
} from '../ha-local/storybook-trees.mjs';

function collect(kind, seed, height) {
  const bounds = new Box3();
  const digest = createHash('sha256');
  const colors = new Set();
  let triangles = 0;
  const batch = {
    add(mesh, color, x, y, z) {
      assert.deepEqual([x, y, z], [20, -111, 40]);
      assert.ok(mesh.index && mesh.attributes.normal && mesh.attributes.uv);
      assert.equal(mesh.attributes.position.count, mesh.attributes.normal.count);
      assert.equal(mesh.attributes.position.count, mesh.attributes.uv.count);
      mesh.computeBoundingBox();
      bounds.union(mesh.boundingBox);
      digest.update(color).update(Buffer.from(mesh.attributes.position.array.buffer));
      triangles += mesh.index.count / 3;
      colors.add(color);
      mesh.dispose();
    },
  };
  assert.equal(addStorybookTree(batch, {kind, x: 20, z: 40, groundY: -111, seed, height}), true);
  return {bounds, signature: digest.digest('hex'), triangles, colors: colors.size};
}

test('each landscape tree is tall, grounded, distinct and fits the static batch budget', () => {
  const signatures = new Set();
  for (const [kind, {height, radius}] of Object.entries(STORYBOOK_TREE_SPECIES)) {
    const tree = collect(kind, 7);
    const {min, max} = tree.bounds;
    assert.ok(Math.abs(min.y) < 1, kind);
    assert.ok(max.y > height * .86 && max.y < height * 1.06, kind);
    assert.ok(Math.max(-min.x, max.x, -min.z, max.z) <= height * radius, kind);
    assert.ok(tree.colors >= 6);
    assert.ok(tree.triangles <= 4000);
    signatures.add(tree.signature);
  }
  assert.equal(signatures.size, 7);
});

test('tree variations replay exactly for the same seed and respond to authored scale', () => {
  const original = collect('fan-palm', 12);
  assert.equal(collect('fan-palm', 12).signature, original.signature);
  assert.notEqual(collect('fan-palm', 13).signature, original.signature);
  const scaled = collect('fan-palm', 12, 146);
  assert.ok(scaled.bounds.max.y > original.bounds.max.y * 1.25);
  assert.equal(scaled.triangles, original.triangles);
  assert.equal(addStorybookTree({}, {kind: 'constructor', x: 0, z: 0, groundY: 0}), false);
});

test('wind follows the reported FROM direction and reduces motion to zero', () => {
  for (const [bearing, x, z] of [[0, 0, 1], [90, -1, 0], [180, 0, -1], [270, 1, 0]]) {
    const wind = sampleStorybookTreeWind(2, {windBearing: bearing, windSpeed: 10});
    assert.ok(Math.abs(wind.x - x) < 1e-6);
    assert.ok(Math.abs(wind.z - z) < 1e-6);
    assert.ok(Math.abs(wind.strength - .048) < 1e-6);
  }
  assert.equal(sampleStorybookTreeWind(0, {windSpeed: 30, reduceMotion: true}).strength, 0);
  assert.equal(sampleStorybookTreeWind(0, {condition: 'sunny'}).strength, 0);
  assert.equal(sampleStorybookTreeWind(0, {condition: 'windy', windSpeed: 0}).strength, 0);
  assert.ok(sampleStorybookTreeWind(0, {condition: 'windy'}).strength > 0);
  assert.equal(sampleStorybookTreeWind(0, {windSpeed: 30}).strength, sampleStorybookTreeWind(0, {windSpeed: 22}).strength);
  assert.deepEqual(sampleStorybookTreeWind(242, {windSpeed: 6, windBearing: -90}),
    sampleStorybookTreeWind(2, {windSpeed: 6, windBearing: 270}));
});

test('tree wind uses shared material uniforms and retains each tree’s seed, height and ground-relative weights', () => {
  const materials = new Map();
  const meshes = [];
  const wind = createStorybookTreeWind({
    add(geometry, color) { meshes.push({geometry, color}); },
    material(color) {
      if (!materials.has(color)) materials.set(color, new MeshLambertMaterial({color}));
      return materials.get(color);
    },
  });
  assert.equal(wind.add({kind: 'fan-palm', x: 20, z: 40, groundY: -111, height: 145, seed: 7}), true);
  assert.equal(wind.add({kind: 'fan-palm', x: 30, z: 45, groundY: -111, height: 90, seed: 17}), true);
  let root = false;
  let crown = false;
  const phases = new Set();
  for (const {geometry} of meshes) {
    const {roomcraftTreeWind: weights, position} = geometry.attributes;
    assert.equal(weights.count, position.count);
    assert.equal(weights.itemSize, 3);
    for (let index = 0; index < weights.count; index++) {
      const height = weights.getY(index);
      const fraction = weights.getX(index);
      assert.ok(height === 145 || height === 90);
      assert.ok(Math.abs(fraction - position.getY(index) / height) < 1e-6);
      root ||= fraction <= .16;
      crown ||= fraction > .85;
      phases.add(weights.getZ(index));
    }
    geometry.dispose();
  }
  assert.ok(root && crown);
  assert.equal(phases.size, 2);
  const compiled = [...materials.values()].map(material => {
    const shader = {vertexShader: '#include <common>\n#include <beginnormal_vertex>\n#include <begin_vertex>', uniforms: {}};
    material.onBeforeCompile(shader);
    assert.match(shader.vertexShader, /transformed\.xz \+= roomcraftTreeDrift/);
    assert.match(shader.vertexShader, /objectNormal\.y -= dot/);
    material.dispose();
    return shader.uniforms;
  });
  wind.update(16, {windSpeed: 9, windBearing: 180});
  assert.ok(compiled.every(uniforms => uniforms.roomcraftTreeStrength === compiled[0].roomcraftTreeStrength));
  assert.ok(compiled[0].roomcraftTreeDirection.value.y < -.99);
  assert.ok(compiled[0].roomcraftTreeStrength.value > 0);
  wind.update(16, {windSpeed: 9, windBearing: 180, reduceMotion: true});
  assert.equal(compiled[0].roomcraftTreeStrength.value, 0);
});
