import assert from 'node:assert/strict';
import test from 'node:test';
import {createFloorSupport} from '../ha-local/storybook-floor-support.mjs';
import {createStorybookRadarHeatMap, radarHeatMapGeometry} from '../ha-local/storybook-radar-heatmap.mjs';

const floor = [[[[0,0],[96,0],[96,96],[0,96],[0,0]], [[34,34],[62,34],[62,62],[34,62],[34,34]]]];
const history = {
  cellSize: 24,
  cells: [{x: 5, y: 16, hits: 3}, {x: 30, y: 45, hits: 20}, {x: 46, y: 46, hits: 100},
    {x: -6, y: 15, hits: 9}, {x: 12, y: 65, hits: 0}, null],
};

test('radar bins use measured counts and clip geometry to the authored floor and its holes', () => {
  const before = structuredClone(history);
  const support = createFloorSupport(floor);
  const {geometry, drawn} = radarHeatMapGeometry(floor, support, history);
  assert.equal(drawn, 2);
  const positions = geometry.getAttribute('position');
  const colors = geometry.getAttribute('color');
  assert.equal(positions.count, colors.count);
  assert.equal(colors.itemSize, 4);
  let low = 1, high = 0;
  for (let i = 0; i < positions.count; i += 3) {
    const center = [0, 1, 2].reduce(([x, y], offset) =>
      [x + positions.getX(i + offset) / 3, y + positions.getZ(i + offset) / 3], [0, 0]);
    assert.ok(support.contains(...center));
    low = Math.min(low, colors.getW(i));
    high = Math.max(high, colors.getW(i));
  }
  assert.ok(high > low && high < 1 && low > 0);
  assert.deepEqual(history, before);
  geometry.dispose();
});

test('heat map uses one depth-tested mesh and disposes empty or replaced data', () => {
  const map = createStorybookRadarHeatMap(floor);
  assert.equal(map.setHistory(history), 2);
  assert.equal(map.root.children.length, 1);
  const [original] = map.root.children;
  assert.equal(original.material.depthTest, true);
  assert.equal(original.material.depthWrite, false);
  let geometryDisposals = 0;
  let materialDisposals = 0;
  original.geometry.addEventListener('dispose', () => geometryDisposals++);
  original.material.addEventListener('dispose', () => materialDisposals++);
  assert.equal(map.setHistory({cellSize: 24, cells: []}), 0);
  assert.equal(map.root.children.length, 0);
  assert.equal(geometryDisposals, 1);
  assert.equal(map.setHistory({cellSize: 0, cells: history.cells}), 0);
  map.dispose();
  assert.equal(materialDisposals, 1);
});
