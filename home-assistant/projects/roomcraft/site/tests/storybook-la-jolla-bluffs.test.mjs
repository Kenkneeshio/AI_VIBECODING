import assert from 'node:assert/strict';
import test from 'node:test';
import {buildLaJollaBluffs} from '../ha-local/storybook-la-jolla-bluffs.mjs';

const options = {
  focusX:800,
  span:1000,
  farZ:-245,
  groundY:-111,
  shoreZ:offset => -370 - 25 * Math.cos((offset - 130) / 120),
};

function captureBluffs() {
  const bands = [], scrub = [];
  buildLaJollaBluffs({
    add(geometry, color, x, y, z) {
      if (x === 0 && y === 0 && z === 0 && geometry.attributes.stoneExposure) {
        const positions = Array.from(geometry.attributes.position.array);
        const {array:normals} = geometry.attributes.normal;
        assert.ok(normals.every(Number.isFinite));
        assert.equal(geometry.attributes.color.count, geometry.attributes.position.count);
        bands.push({color, positions, exposure: Array.from(geometry.attributes.stoneExposure.array)});
      }
      geometry.dispose();
    },
    box() {},
    ball(...shape) { scrub.push(shape); },
  }, options);
  return {bands, scrub};
}

function edge({positions}, inland = false) {
  const vertices = [];
  for (let i = inland ? 3 : 0; i < positions.length; i += 6) {
    vertices.push(positions.slice(i, i + 3));
  }
  return vertices;
}

test('both headlands are deterministic, stitched landforms with open pocket beach between them', () => {
  const built = captureBluffs();
  assert.deepEqual(captureBluffs(), built);
  const toes = built.bands.reduce((found, band, index) =>
    index === 0 || edge(band)[0][0] !== edge(built.bands[index - 1])[0][0] ? [...found, index] : found, []);
  assert.equal(toes.length, 2);
  assert.ok(edge(built.bands[toes[0]]).at(-1)[0] < edge(built.bands[toes[1]])[0][0]);

  for (const [headland, start] of toes.entries()) {
    const last = (toes[headland + 1] ?? built.bands.length) - 1;
    assert.ok(last - start > 16);
    assert.ok(built.bands[start].exposure.every(value => value === 1));
    assert.ok(built.bands[last].exposure.every(value => value === 0));
    for (let index = start; index < last; index++) {
      assert.deepEqual(edge(built.bands[index], true), edge(built.bands[index + 1]));
    }
    const terrain = built.bands.slice(start, last + 1).flatMap(band => edge(band, true));
    assert.ok(Math.max(...terrain.map(([, y]) => y)) > options.groundY + 40);
    assert.ok(terrain.every(([, , z]) => z < options.farZ - 14));
  }
  assert.ok(built.scrub.every(([, , , , , y]) => y > options.groundY));
});
