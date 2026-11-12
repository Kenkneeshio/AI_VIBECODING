import assert from 'node:assert/strict';
import test from 'node:test';
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
      const {color:paint, normal} = geometry.attributes;
      const upward = paint && Array.from({length:normal.count}, (_, index) => normal.getY(index)).every(y => y > .5);
      meshes.push({color, min:[min.x+x,min.y+y,min.z+z], max:[max.x+x,max.y+y,max.z+z],
        vertices:geometry.attributes.position.count, colored:Boolean(paint), upward:Boolean(upward)});
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
  assert.ok(Math.abs(Math.sin(angle)) > .5);
  const landSide = z + Math.cos(angle) * length / 2;
  const farSide = z - Math.cos(angle) * length / 2;
  const shore = site.shoreZ(x - site.focusX);
  assert.ok(y > site.groundY + 12 && landSide > shore && farSide < shore - 65);
  const piers = landmarks.meshes.filter(({min,max,vertices}) => vertices === 24 &&
    max[1] - min[1] > 15 && min[1] < site.groundY && max[2] < site.farZ - 75);
  assert.equal(piers.length, 24);
});

test('Kellogg Park adds a curved lawn, mature trees and bounded static batches', () => {
  const landmarks = collectLandmarks(site);
  const lawn = landmarks.meshes.find(mesh => mesh.colored);
  assert.ok(lawn && lawn.upward && lawn.vertices > 200 && lawn.max[2] - lawn.min[2] > 52);
  assert.equal(landmarks.materials.get(lawn.color).vertexColors, true);
  assert.ok(landmarks.meshes.filter(({max}) => max[1] > site.groundY + 57).length > 12);
  assert.ok(landmarks.colors.size < 32);
  assert.ok(landmarks.meshes.every(mesh => [...mesh.min, ...mesh.max].every(Number.isFinite)));
});
