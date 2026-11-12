import assert from 'node:assert/strict';
import test from 'node:test';
import '../public/engine/terrain.js';

const Terrain = globalThis.RoomcraftTerrain;
const dab = {x:0, z:0, radius:24, strength:8};

test('terrain normalizes legacy defaults, sparse cells, and settings without mutating the project', () => {
  const source = {coast:'gentle', road:'coastal', planting:100, cove:false, cells:[
    {col:0, row:2, cover:'grass'}, {col:0, row:0, height:0},
    {col:1, row:-1, height:-3}, {col:0, row:-1, height:0, cover:'scrub'},
  ]};
  const snapshot = structuredClone(source);
  const canonical = Terrain.normalize(source);
  assert.deepEqual(source, snapshot);
  assert.deepEqual(canonical, {coast:'gentle', cove:false, cells:[
    {col:0, row:-1, cover:'scrub'}, {col:1, row:-1, height:-3}, {col:0, row:2, cover:'grass'},
  ]});
  assert.deepEqual(Terrain.normalize(canonical), canonical);
  assert.equal(Terrain.valid(undefined), true);
  assert.equal(Terrain.normalize(Terrain.DEFAULTS), undefined);
  assert.equal(Terrain.normalize({cells:[]}), undefined);
  assert.deepEqual(Terrain.withSetting(undefined, 'roadSetback', 80), {roadSetback:80});
  assert.equal(Terrain.withSetting({roadSetback:80}, 'roadSetback', 0), undefined);
  assert.deepEqual(Terrain.withSetting({road:'winding'}, 'yardAccess', false), {road:'winding', yardAccess:false});
  assert.equal(Terrain.withSetting(canonical, 'beachWidth', 70.1), canonical);
});

test('terrain rejects duplicate or malformed cells and out-of-range choices', () => {
  const cell = {col:0, row:0, height:1};
  for (const invalid of [
    null, [], {cells:[cell, cell]}, {cells:[{col:257, row:0, height:1}]},
    {cells:[{col:0, row:-257, cover:'grass'}]}, {cells:[{col:0, row:0}]},
    {cells:[{...cell, height:65}]}, {cells:[{...cell, height:NaN}]},
    {cells:[{...cell, cover:'flower'}]}, {coast:'unknown'}, {road:'diagonal'},
    {beachWidth:146}, {roadSetback:-1}, {hillHeight:151}, {planting:99.7},
    {cove:'off'}, {unknown:true}, {cells:new Array(4097).fill(cell)},
  ]) {
    assert.equal(Terrain.valid(invalid), false);
    assert.throws(() => Terrain.normalize(invalid), /Invalid Roomcraft terrain/);
  }
});

test('brush strokes replay exactly, filter protected vertices, and keep height and cover separate', () => {
  const commands = [
    {...dab, mode:'raise', radius:49, canEdit:x => x >= 0},
    {...dab, mode:'smooth', radius:49, canEdit:x => x >= 0},
    {...dab, mode:'paint', cover:'stone'},
    {...dab, mode:'lower', x:64, z:-32},
  ];
  const replay = () => commands.reduce(Terrain.applyBrush, undefined);
  const terrain = replay();
  assert.deepEqual(replay(), terrain);
  assert.ok(terrain.cells.every(cell => cell.col >= 0));
  assert.ok(terrain.cells.some(cell => cell.col === 2 && cell.row === -1 && cell.height === -8));
  const peak = terrain.cells.find(cell => cell.col === 0 && cell.row === 0);
  assert.ok(peak.height > 0 && peak.height < 8);
  assert.equal(peak.cover, 'stone');
  assert.equal(Terrain.applyBrush(terrain, {...dab, mode:'paint', cover:'stone'}), terrain);
  const erased = Terrain.applyBrush(terrain, {...dab, mode:'erase'});
  assert.ok(!erased.cells.some(cell => cell.col === 0 && cell.row === 0));
  assert.ok(terrain.cells.includes(peak));
  assert.equal(Terrain.applyBrush(undefined, {...dab, mode:'raise', canEdit:() => false}), undefined);
  assert.equal(Terrain.applyBrush(undefined, {...dab, mode:'raise', strength:NaN}), undefined);
});

test('brush strength saturates and the sparse storage cap preserves existing cells', () => {
  let terrain;
  for (let i = 0; i < 6; i++) terrain = Terrain.applyBrush(terrain, {...dab, mode:'raise', strength:16});
  assert.equal(terrain.cells[0].height, 64);
  for (let i = 0; i < 8; i++) terrain = Terrain.applyBrush(terrain, {...dab, mode:'lower', strength:16});
  assert.equal(terrain.cells[0].height, -32);

  const full = {cells:Array.from({length:Terrain.MAX_CELLS}, (_, index) =>
    ({col:128 + index % 64, row:128 + Math.floor(index / 64), height:1}))};
  assert.equal(Terrain.applyBrush(full, {...dab, mode:'raise'}), full);
  const first = 128 * Terrain.GRID_SIZE;
  const changed = Terrain.applyBrush(full, {...dab, x:first, z:first, mode:'paint', cover:'soil'});
  assert.equal(changed.cells.length, Terrain.MAX_CELLS);
  assert.equal(changed.cells[0].cover, 'soil');
  assert.equal(full.cells[0].cover, undefined);
});

test('sampler interpolates elevation and separate cover weights without affecting untouched terrain', () => {
  const terrain = {cells:[
    {col:0, row:0, height:16, cover:'grass'}, {col:1, row:0, height:-8, cover:'sand'},
    {col:0, row:1, cover:'scrub'},
  ]};
  const sample = Terrain.createSampler(terrain);
  assert.deepEqual(sample(16,16), {height:2, covers:{grass:.25, sand:.25, soil:0, stone:0, scrub:.25}});
  assert.equal(sample.heightAt(16,16), 2);
  assert.equal(sample.heightAt(-32,-32), 0);
  terrain.cells[0].height = 64;
  assert.equal(sample.heightAt(0,0), 16);
  const border = Terrain.createSampler({cells:[{col:-256, row:1, height:40, cover:'soil'}]});
  assert.equal(border.heightAt(257 * Terrain.GRID_SIZE,0), 0);
  assert.deepEqual(Terrain.createSampler(undefined)(0,0), {height:0, covers:{grass:0,sand:0,soil:0,stone:0,scrub:0}});
});

test('place and remove snap one prop without losing that cell’s sculpting or paint', () => {
  const original = {cells:[{col:1, row:-1, height:4, cover:'stone'}]};
  const place = {mode:'place', x:39, z:-23, prop:'oak'};
  const planted = Terrain.applyBrush(original, place);
  assert.deepEqual(planted.cells, [{col:1, row:-1, height:4, cover:'stone', prop:'oak'}]);
  assert.deepEqual(Terrain.applyBrush(planted, {...place, prop:null}), original);
  assert.equal(Terrain.applyBrush(planted, {...place, canEdit:() => false}), planted);
  assert.equal(Terrain.applyBrush(planted, {...place, mode:'erase', radius:24}), undefined);
  const propOnly = Terrain.applyBrush(undefined, {...place, x:-2, z:0, prop:'rock'});
  assert.deepEqual(propOnly, {cells:[{col:0, row:0, prop:'rock'}]});
  assert.equal(Terrain.applyBrush(propOnly, {...place, x:0, z:0, prop:null}), undefined);
  assert.equal(Terrain.valid({cells:[{col:0,row:0,prop:'unknown'}]}), false);
});

test('the object cap still permits replacing and removing existing props', () => {
  const full = {cells:Array.from({length:Terrain.MAX_PROPS}, (_, col) => ({col, row:0, prop:'sage'}))};
  const command = {mode:'place', x:0, z:32, prop:'pine'};
  assert.equal(Terrain.valid(full), true);
  assert.equal(Terrain.valid({cells:[...full.cells,{col:0,row:1,prop:'pine'}]}), false);
  assert.equal(Terrain.applyBrush(full, command), full);
  const replaced = Terrain.applyBrush(full, {...command,z:0});
  assert.equal(replaced.cells.length, Terrain.MAX_PROPS);
  assert.equal(replaced.cells[0].prop, 'pine');
  const cleared = Terrain.applyBrush(replaced, {...command,z:0,prop:null});
  assert.equal(cleared.cells.length, Terrain.MAX_PROPS - 1);
  assert.equal(Terrain.applyBrush(cleared, command).cells.length, Terrain.MAX_PROPS);
});
