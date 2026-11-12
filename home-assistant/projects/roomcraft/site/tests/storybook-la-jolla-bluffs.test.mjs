import assert from 'node:assert/strict';
import test from 'node:test';
import {Color, MathUtils, Vector3} from 'three';
import {buildLaJollaBluffs} from '../ha-local/storybook-la-jolla-bluffs.mjs';

const sandColor = new Color('#eac893');
const options = {
  focusX:800,
  span:1000,
  farZ:-245,
  groundY:-111,
  shoreZ:offset => -410 + 74 * (1 - MathUtils.smootherstep(Math.abs(offset + 290), 0, 145)),
  sampleSand: (offset, z) => ({height:-110.45 + offset * .001 + z * .003, color:sandColor}),
};

function captureBluffs(overrides = {}) {
  const headlands = [], scrub = [], stairs = [];
  buildLaJollaBluffs({
    add(geometry) {
      if (geometry.attributes.stoneExposure) {
        const attributes = Object.fromEntries(Object.entries(geometry.attributes)
          .map(([name, attribute]) => [name, Array.from(attribute.array)]));
        headlands.push({...attributes, index:Array.from(geometry.index.array)});
      }
      geometry.dispose();
    },
    box(width, height, depth, color, x, y, z) {
      if (width === 7.4) stairs.push({height, depth, x, y:y + height / 2, z});
    },
    ball(...shape) { scrub.push(shape); },
  }, {...options, ...overrides});
  return {headlands, scrub, stairs};
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

test('one indexed bluff stays left of the house and backs the crescent pocket beach', () => {
  const built = captureBluffs();
  assert.deepEqual(captureBluffs(), built);
  assert.equal(built.headlands.length, 1);
  const [headland] = built.headlands;
  const grid = rows(headland.position);
  const [toe] = grid;
  const stride = toe.length;
  assert.ok(toe.at(-1)[0] < options.focusX);
  assert.ok(grid.length > 20);
  assert.ok(grid.every(row => row.length === stride));
  assert.equal(headland.index.length, (grid.length - 1) * (stride - 1) * 6);
  assert.ok(headland.normal.every(Number.isFinite));
  assert.ok(grid.flat().every(([, , z]) => z < options.farZ - 14));
  assert.ok(headland.stoneExposure.some(value => value > .95));
  assert.ok(built.scrub.every(([, , , , , y]) => y > options.groundY));

  function offsetAt(fraction) {
    return toe.reduce((closest, [x], i) => {
      const target = options.focusX + fraction * options.span;
      return Math.abs(x - target) < Math.abs(toe[closest][0] - target) ? i : closest;
    }, 0);
  }
  const [west, center, east] = [-.43, -.29, -.145].map(offsetAt);
  const sandWidth = index => toe[index][2] - options.shoreZ(toe[index][0] - options.focusX);
  assert.ok(sandWidth(center) > 22 && sandWidth(center) < 32);
  assert.ok(sandWidth(west) < 12 && sandWidth(east) < 12);
  for (let index = west; index <= east; index++) {
    assert.ok(Math.max(...grid.map(row => row[index][1])) > options.groundY + 35);
  }
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

test('the narrow stairs climb from the pocket sand to the continuous bluff trail', () => {
  const {stairs} = captureBluffs();
  assert.equal(stairs.length, 17);
  assert.ok(stairs.every(step => step.height > 0 && step.depth > 1 && step.x === stairs[0].x));
  for (let index = 1; index < stairs.length; index++) {
    assert.ok(stairs[index].y > stairs[index - 1].y);
    assert.ok(stairs[index].z > stairs[index - 1].z);
  }
  assert.ok(stairs[0].y - options.sampleSand(stairs[0].x - options.focusX, stairs[0].z).height < 5);
  assert.ok(stairs.at(-1).y > options.groundY + 35);
});

test('the bluff apron follows the curved landward boundary while staying clear of the sidewalk', () => {
  const roadEdgeAt = x => options.farZ + 15 + 12 * Math.cos((x - options.focusX) * .018);
  const {headlands} = captureBluffs({roadEdgeAt});
  const grid = rows(headlands[0].position);
  const apron = grid.at(-1);
  assert.ok(apron.some(([, , z]) => z > options.farZ - 14));
  assert.ok(grid.flat().every(([x, , z]) => z < roadEdgeAt(x) - 14));
  assert.ok(apron.every(([x, y, z]) => close(options.sampleSand(x - options.focusX, z).height - y, .19)));
});
