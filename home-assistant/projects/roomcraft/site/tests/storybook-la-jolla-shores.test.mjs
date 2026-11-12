import assert from 'node:assert/strict';
import test from 'node:test';
import {Color} from 'three';
import {buildLaJollaShores} from '../ha-local/storybook-la-jolla-shores.mjs';

const site = {focusX:800, span:1080, farZ:-250, groundY:-111,
  shoreZ:offset => -373 + 5 * Math.sin(offset / 160)};

function collectLandmarks(site) {
  const boxes = [];
  const meshes = [];
  const colors = new Set();
  const materials = new Map();
  buildLaJollaShores({
    box(...data) {
      boxes.push(data);
      colors.add(data[3]);
    },
    ball(_rx, _ry, _rz, color) { colors.add(color); },
    material(color) {
      if (!materials.has(color)) materials.set(color, {});
      return materials.get(color);
    },
    add(geometry, color, x, y, z) {
      geometry.computeBoundingBox();
      const {min,max} = geometry.boundingBox;
      const {color:paint, normal, position} = geometry.attributes;
      const upward = paint && Array.from({length:normal.count}, (_, index) => normal.getY(index)).every(y => y > .5);
      const points = paint || position.count === 18 ? Array.from({length:position.count}, (_, i) =>
        [position.getX(i)+x, position.getY(i)+y, position.getZ(i)+z, paint?.getX(i)]) : null;
      meshes.push({color, min:[min.x+x,min.y+y,min.z+z], max:[max.x+x,max.y+y,max.z+z],
        vertices:position.count, colored:Boolean(paint), upward:Boolean(upward), points});
      colors.add(color);
      geometry.dispose();
    },
  }, site);
  return {boxes, meshes, materials, colors};
}

test('Scripps Pier has a diagonal raised deck and repeats its deterministic supported span', () => {
  const landmarks = collectLandmarks(site);
  assert.deepEqual(collectLandmarks(site), landmarks);
  const deck = landmarks.boxes.find(([w,h,d,,,,,angle]) => w > 12 && h < 2 && d > 110 && angle);
  assert.ok(deck);
  const [, , length, , x, y, z, angle] = deck;
  assert.ok(Math.sin(angle) > .5);
  const landX = x + Math.sin(angle) * length / 2;
  const farX = x - Math.sin(angle) * length / 2;
  const landSide = z + Math.cos(angle) * length / 2;
  const farSide = z - Math.cos(angle) * length / 2;
  assert.ok(landX > farX && farX > site.focusX);
  assert.ok(y > site.groundY + 12 && landSide > site.shoreZ(landX - site.focusX) &&
    farSide < site.shoreZ(farX - site.focusX) - 65);
  const piers = landmarks.meshes.filter(({min,max,vertices}) => vertices === 24 &&
    max[1] - min[1] > 15 && min[1] < site.groundY && max[2] < site.farZ - 75);
  assert.equal(piers.length, 24);
});

test('Kellogg Park adds a curved lawn, mature trees and bounded static batches', () => {
  const landmarks = collectLandmarks(site);
  const lawn = landmarks.meshes.find(mesh => mesh.colored);
  assert.ok(lawn && lawn.upward && lawn.vertices > 200 && lawn.max[2] - lawn.min[2] > 52);
  assert.ok(lawn.min[0] > site.focusX && lawn.max[2] >= site.farZ - 2);
  assert.equal(landmarks.materials.get(lawn.color).vertexColors, true);
  assert.ok(landmarks.meshes.filter(({max}) => max[1] > site.groundY + 57).length > 12);
  assert.ok(landmarks.colors.size < 32);
  assert.ok(landmarks.meshes.every(mesh => [...mesh.min, ...mesh.max].every(Number.isFinite)));
});

test('the promenade meets the real sidewalk edge at both ends and the lawn grades into local sand', () => {
  const roadEdgeAt = x => site.farZ + 16 * Math.sin((x - site.focusX) / 190);
  const sampleSand = (offset, z) => ({height:site.groundY + .4 + .08 * Math.sin(offset / 52 + z / 22),
    color:new Color('#ddbc8f').multiplyScalar(.97 + .028 * Math.cos(offset / 19 + z / 33))});
  const {meshes} = collectLandmarks({...site, roadEdgeAt, sampleSand});
  const connectsToSidewalk = ([,y]) => Math.abs(y - site.groundY - 4.98) < 1e-4;
  const entrances = meshes.filter(({vertices,points}) => vertices === 18 && points.some(connectsToSidewalk));
  assert.equal(entrances.length, 2);
  for (const {points} of entrances) {
    const join = points.filter(connectsToSidewalk);
    assert.equal(join.length, 9);
    assert.ok(join.every(([x,,z]) => Math.abs(z - roadEdgeAt(x) - .55) < 1e-4));
  }
  const lawn = meshes.find(({colored}) => colored);
  assert.ok(lawn.upward && lawn.points.every(([x,,z]) => z < roadEdgeAt(x) - 1.8));
  for (const [x,y,z,red] of lawn.points.filter((_, i) => i % 8 === 7)) {
    const sand = sampleSand(x - site.focusX, z);
    assert.ok(Math.abs(y - sand.height - .018) < 1e-4);
    assert.ok(Math.abs(red - sand.color.r) < 1e-5);
  }
});
