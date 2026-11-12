import assert from 'node:assert/strict';
import test from 'node:test';
import '../public/engine/terrain.js';

const Terrain = globalThis.RoomcraftTerrain;
const key = (col, row) => `${col},${row}`;

function assertSafe(terrain, maxStep = Terrain.MAX_HEIGHT_STEP) {
  assert.equal(Terrain.valid(terrain), true);
  const cells = new Map((terrain?.cells ?? []).map(cell => [key(cell.col, cell.row), cell.height ?? 0]));
  for (const cell of terrain?.cells ?? []) {
    for (const [col, row] of [[cell.col - 1, cell.row], [cell.col + 1, cell.row],
      [cell.col, cell.row - 1], [cell.col, cell.row + 1]]) {
      assert.ok(Math.abs((cell.height ?? 0) - (cells.get(key(col, row)) ?? 0)) <= maxStep);
    }
  }
}

test('terrain repair limits isolated peaks and pits and keeps untouched defaults by identity', () => {
  assert.deepEqual(Terrain.repair(undefined), {terrain:undefined, changed:false, repairs:[]});
  const settings = {coast:'rugged', road:'winding', planting:75};
  assert.equal(Terrain.repair(settings).terrain, settings);
  for (const height of [Terrain.MAX_HEIGHT, Terrain.MIN_HEIGHT]) {
    const source = {cells:[{col:0, row:0, height}]};
    const before = structuredClone(source);
    const result = Terrain.repair(source);
    assert.equal(result.changed, true);
    assert.deepEqual(result.repairs, [{code:'terrain-steep-step', count:1}]);
    assert.equal(result.terrain.cells[0].height, Math.sign(height) * Terrain.MAX_HEIGHT_STEP);
    assert.deepEqual(source, before);
    assertSafe(result.terrain);
    const again = Terrain.repair(result.terrain);
    assert.equal(again.terrain, result.terrain);
    assert.equal(again.changed, false);
  }
});

test('terrain repair preserves paint, props and settings and never invents cells', () => {
  const source = {coast:'gentle', roadSetback:42, cove:false, cells:[
    {col:1, row:0, height:-32, cover:'soil', prop:'oak'},
    {col:0, row:0, height:64, cover:'stone', prop:'rock'},
    {col:3, row:2, cover:'sand', prop:'palm'},
  ]};
  const result = Terrain.repair(source);
  assert.equal(result.changed, true);
  assert.equal(result.terrain.coast, source.coast);
  assert.equal(result.terrain.roadSetback, source.roadSetback);
  assert.equal(result.terrain.cove, false);
  assert.equal(result.terrain.cells.length, source.cells.length);
  for (const original of source.cells) {
    const cell = result.terrain.cells.find(cell => cell.col === original.col && cell.row === original.row);
    assert.equal(cell.cover, original.cover);
    assert.equal(cell.prop, original.prop);
    assert.ok(Math.abs(cell.height ?? 0) <= Math.abs(original.height ?? 0));
    if (cell.height) assert.equal(Math.sign(cell.height), Math.sign(original.height));
  }
  assertSafe(result.terrain);
  assert.deepEqual(Terrain.repair({...source, cells:[...source.cells].reverse()}).terrain, result.terrain);
});

test('valid broad hills retain their authored summit and fixed point exactly', () => {
  const source = {cells:[]};
  for (let row = -3; row <= 3; row++) for (let col = -3; col <= 3; col++) {
    const height = Math.max(0, 64 - 24 * (Math.abs(col) + Math.abs(row)));
    if (height) source.cells.push({col, row, height});
  }
  assertSafe(source);
  const result = Terrain.repair(source);
  assert.equal(result.terrain, source);
  assert.equal(result.changed, false);
  assert.equal(source.cells.find(cell => cell.col === 0 && cell.row === 0).height, 64);
});

test('terrain repair respects grid limits and full capacity without changing semantic cells', () => {
  const source = {cells:Array.from({length:Terrain.MAX_CELLS}, (_, index) => ({
    col:Terrain.MAX_INDEX - index % 64,
    row:Terrain.MAX_INDEX - Math.floor(index / 64),
    height:index % 3 ? 64 : -32,
    cover:index % 2 ? 'grass' : 'stone',
    ...(index < Terrain.MAX_PROPS ? {prop:'sage'} : {}),
  }))};
  const result = Terrain.repair(source);
  assert.equal(result.terrain.cells.length, Terrain.MAX_CELLS);
  assert.equal(result.terrain.cells.filter(cell => cell.prop).length, Terrain.MAX_PROPS);
  assertSafe(result.terrain);
  assert.equal(Terrain.repair(result.terrain).terrain, result.terrain);
  assert.deepEqual(Terrain.repair({...source, cells:[...source.cells].reverse()}).terrain, result.terrain);
});

test('terrain repair validates before changing data and accepts an explicit slope budget', () => {
  for (const source of [null, {cells:[{col:0, row:0, height:Infinity}]},
    {cells:[{col:0, row:0, height:1}, {col:0, row:0, height:2}]},
    {cells:[{col:0, row:0, height:65}]}, {coast:'invalid'}]) {
    assert.throws(() => Terrain.repair(source), TypeError);
  }
  for (const maxStep of [0, 1.5, 97, NaN, Infinity, '24']) {
    assert.throws(() => Terrain.repair(undefined, {maxStep}), TypeError);
  }
  const source = {cells:[{col:0, row:0, height:64}, {col:1, row:0, height:-32}]};
  assertSafe(Terrain.repair(source, {maxStep:1}).terrain, 1);
  assert.equal(Terrain.repair(source, {maxStep:96}).terrain, source);
});

test('terrain repair converges across wide plateaus and deterministic mixed-height fixtures', () => {
  const plateau = {cells:Array.from({length:Terrain.MAX_CELLS}, (_, index) => ({
    col:index % 64, row:Math.floor(index / 64), height:64,
  }))};
  const result = Terrain.repair(plateau, {maxStep:1});
  assertSafe(result.terrain, 1);
  assert.equal(result.terrain.cells.find(cell => cell.col === 31 && cell.row === 31).height, 32);
  assert.equal(Terrain.repair(result.terrain, {maxStep:1}).terrain, result.terrain);

  for (const seed of [7, 29, 83]) {
    const source = {cells:Array.from({length:144}, (_, index) => ({
      col:index % 12 - 6, row:Math.floor(index / 12) - 6,
      height:((index * seed + 11) % 97) - 32, cover:'scrub',
    }))};
    const before = structuredClone(source);
    for (const maxStep of [1, 7, 24]) {
      const repaired = Terrain.repair(source, {maxStep});
      assertSafe(repaired.terrain, maxStep);
      assert.equal(Terrain.repair(repaired.terrain, {maxStep}).terrain, repaired.terrain);
      assert.deepEqual(Terrain.repair({...source, cells:[...source.cells].reverse()}, {maxStep}).terrain, repaired.terrain);
      assert.deepEqual(source, before);
    }
  }
});
