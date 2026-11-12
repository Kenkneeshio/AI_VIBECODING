import assert from 'node:assert/strict';
import test from 'node:test';
import {Color, Vector3} from 'three';
import {buildLaJollaBluffs} from '../ha-local/storybook-la-jolla-bluffs.mjs';

const sandColor = new Color('#eac893');
const options = {
  focusX:800,
  span:1000,
  farZ:-245,
  groundY:-111,
  shoreZ:offset => -370 - 25 * Math.cos((offset + 130) / 120),
  sampleSand: (offset, z) => ({height:-110.45 + offset * .001 + z * .003, color:sandColor}),
};

function captureBluffs() {
  const headlands = [], scrub = [];
  buildLaJollaBluffs({
    add(geometry) {
      if (geometry.attributes.stoneExposure) {
        const attributes = Object.fromEntries(Object.entries(geometry.attributes)
          .map(([name, attribute]) => [name, Array.from(attribute.array)]));
        headlands.push({...attributes, index:Array.from(geometry.index.array)});
      }
      geometry.dispose();
    },
    box() {},
    ball(...shape) { scrub.push(shape); },
  }, options);
  return {headlands, scrub};
}

function rows(positions) {
  const grid = [[]];
  for (let i = 0; i < positions.length; i += 3) {
    if (i > 0 && positions[i] < positions[i - 3]) grid.push([]);
    grid.at(-1).push(positions.slice(i, i + 3));
  }
  return grid;
}

const close = (actual, expected) => Math.abs(actual - expected) < .0001;

test('the two indexed headlands stay left of the house with a pocket beach between them', () => {
  const built = captureBluffs();
  assert.deepEqual(captureBluffs(), built);
  assert.equal(built.headlands.length, 2);
  const [west, east] = built.headlands.map(({position}) => rows(position)[0]);
  assert.ok(west.at(-1)[0] < east[0][0]);
  assert.ok(east.at(-1)[0] < options.focusX);
  for (const headland of built.headlands) {
    const grid = rows(headland.position);
    const stride = grid[0].length;
    assert.ok(grid.length > 20);
    assert.ok(grid.every(row => row.length === stride));
    assert.equal(headland.index.length, (grid.length - 1) * (stride - 1) * 6);
    assert.ok(headland.normal.every(Number.isFinite));
    assert.ok(Math.max(...grid.flat().map(([, y]) => y)) > options.groundY + 40);
    assert.ok(grid.flat().every(([, , z]) => z < options.farZ - 14));
    assert.ok(headland.stoneExposure.some(value => value > .95));
  }
  assert.ok(built.scrub.every(([, , , , , y]) => y > options.groundY));
});

test('all toes, sides, and landward skirts taper beneath the adjacent sand with its normals and tint', () => {
  const expectedNormal = new Vector3(-.001, 1, -.003).normalize().toArray();
  for (const headland of captureBluffs().headlands) {
    const grid = rows(headland.position);
    for (const [row, points] of grid.entries()) for (const [col, [x, y, z]] of points.entries()) {
      if (row > 0 && row < grid.length - 1 && col > 0 && col < points.length - 1) continue;
      const index = row * points.length + col;
      assert.ok(close(options.sampleSand(x - options.focusX, z).height - y, .19));
      assert.equal(headland.stoneExposure[index], 0);
      assert.equal(headland.sandBlend[index], 1);
      for (const [channel, value] of expectedNormal.entries()) {
        assert.ok(close(headland.normal[index * 3 + channel], value));
      }
      for (const [channel, value] of sandColor.toArray().entries()) {
        assert.ok(close(headland.color[index * 3 + channel], value));
      }
    }
  }
});
