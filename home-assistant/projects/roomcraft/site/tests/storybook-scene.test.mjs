import assert from 'node:assert/strict';
import test from 'node:test';
import { compileStorybookPlan } from '../ha-local/storybook-scene.mjs';

function covers(polygons, x, z) {
  const contains = ring => {
    let inside = false;
    for (let i = 1; i < ring.length; i++) {
      const [ax, az] = ring[i - 1];
      const [bx, bz] = ring[i];
      if ((az > z) !== (bz > z) && x < (bx - ax) * (z - az) / (bz - az) + ax) inside = !inside;
    }
    return inside;
  };
  return polygons.some(([outer, ...holes]) => contains(outer) && !holes.some(contains));
}

function sample() {
  return {
    version: 2,
    rooms: [{
      id: 'synthetic-room', surface: 'oak',
      points: [{ x: 110, y: 210 }, { x: 760, y: 210 }, { x: 760, y: 700 }, { x: 110, y: 700 }],
    }],
    walls: [{ id: 'synthetic-wall', x1: 110, y1: 210, x2: 760, y2: 210 }],
    items: [
      { id: 'glass', type: 'window', x: 400, y: 219, w: 100, h: 34, rotation: 0 },
      { id: 'shade', type: 'controlZone', entityId: 'cover.example', x: 409, y: 222, w: 112, h: 53, rotation: 0 },
      { id: 'switch', type: 'presenceSwitch', x: 570, y: 225, w: 26, h: 34, rotation: 0 },
      { id: 'camera', type: 'cameraThumbnail', x: 92, y: 719, w: 70, h: 42, rotation: 0 },
    ],
  };
}

test('v2 projection is deterministic and preserves the authored scene', () => {
  const source = sample();
  const snapshot = structuredClone(source);
  const one = compileStorybookPlan(source);
  assert.deepEqual(one, compileStorybookPlan(structuredClone(source)));
  assert.deepEqual(source, snapshot);
  assert.equal(one.reference, null);
  assert.equal(one.bounds.minX, 57);
  assert.equal(one.bounds.maxZ, 740);
});

test('the wall opening, glass, and live shade share the same geometry', () => {
  const plan = compileStorybookPlan(sample());
  assert.deepEqual(plan.walls[0].openings, [{ start: 241, end: 339 }]);
  const [glass, shade, switchPlacement] = plan.placements;
  assert.equal(glass.x, 400);
  assert.equal(glass.z, 210);
  assert.equal(shade.x, glass.x);
  assert.equal(shade.z, glass.z);
  assert.equal(shade.angle, glass.angle);
  assert.equal(shade.window.w, glass.window.w);
  assert.equal(switchPlacement.x, 570);
  assert.equal(switchPlacement.z, 221);
  assert.equal(switchPlacement.mountY, 39);
});

test('invalid rooms and incompatible versions fail before allocating WebGL resources', () => {
  const source = sample();
  assert.throws(() => compileStorybookPlan({ ...source, version: 3 }), /Roomcraft v2/);
  assert.throws(() => compileStorybookPlan({ ...source, rooms: [{ points: [{ x: 1, y: NaN }] }] }), /room polygon/);
});

test('short drafting gaps and mitered wall corners close while a doorway stays open', () => {
  const source = sample();
  source.items = [];
  source.walls = [
    {id: 'corner', x1: 110, y1: 410, x2: 110, y2: 210},
    {id: 'left', x1: 110, y1: 210, x2: 420, y2: 210},
    {id: 'center', x1: 431, y1: 210, x2: 530, y2: 210},
    {id: 'right', x1: 600, y1: 210, x2: 760, y2: 210},
  ];
  const plan = compileStorybookPlan(source);
  const floorLevelWalls = plan.wallStructure.filter(({bottom, top}) => bottom < 10 && top > 10)
    .flatMap(({polygons}) => polygons);
  const caps = plan.wallStructure.filter(({top}) => top === 58)
    .flatMap(({polygons}) => polygons);
  assert.ok(covers(floorLevelWalls, 104, 204));
  assert.ok(covers(caps, 425, 210));
  assert.ok(!covers(floorLevelWalls, 570, 210));
  assert.ok(!covers(caps, 570, 210));
});

test('walls share one cap height, close L and T junctions, and expose only solid boundaries', () => {
  const source = sample();
  source.walls.push(
    {id: 'angled-end', x1: 770, y1: 220, x2: 810, y2: 260, finish: 'sage'},
    {id: 'interior-tee', x1: 300, y1: 226, x2: 300, y2: 440, finish: 'walnut'},
    {id: 'beside-glass', x1: 400, y1: 226, x2: 400, y2: 440},
    {id: 'front-edge', x1: 110, y1: 700, x2: 760, y2: 700},
  );
  const {wallStructure} = compileStorybookPlan(source);
  const caps = wallStructure.filter(({top}) => top === 58).flatMap(({faces}) => faces.top);
  const atGlass = wallStructure.filter(({bottom, top}) => bottom <= 35 && top > 35)
    .flatMap(({polygons}) => polygons);
  assert.ok(covers(caps, 300, 219));
  assert.ok(covers(caps, 765, 215));
  assert.ok(covers(caps, 400, 700));
  assert.ok(!covers(caps, 400, 210));
  assert.ok(!covers(atGlass, 400, 210));
  assert.ok(!covers(atGlass, 400, 219));
  assert.ok(covers(atGlass, 300, 219));
  assert.ok(!wallStructure.some(({top, faces}) => top === 56 && faces.top.length));
  const teeInternalSides = wallStructure.filter(({bottom, top}) => bottom <= 35 && top > 35)
    .flatMap(({faces}) => faces.sides).filter(([[ax, az], [bx, bz]]) =>
      ax === 293 && bx === 293 && Math.min(az, bz) < 217 && Math.max(az, bz) > 217);
  assert.deepEqual(teeInternalSides, []);
});

test('opposed room finishes share a continuous floor slab through their threshold', () => {
  const source = sample();
  source.rooms = [
    {id: 'first', surface: 'oak', points: [{x: 110, y: 210}, {x: 400, y: 210},
      {x: 400, y: 700}, {x: 110, y: 700}]},
    {id: 'second', surface: 'blue', points: [{x: 411, y: 210}, {x: 760, y: 210},
      {x: 760, y: 700}, {x: 411, y: 700}]},
  ];
  const {floorStructure} = compileStorybookPlan(source);
  assert.equal(floorStructure.footprint.length, 1);
  assert.ok(covers(floorStructure.footprint, 405, 450));
  assert.deepEqual(floorStructure.regions.filter(({polygons}) => covers(polygons, 405, 450))
    .map(({surface}) => surface), ['oak']);
  assert.deepEqual(floorStructure.regions.filter(({polygons}) => covers(polygons, 600, 450))
    .map(({surface}) => surface), ['blue']);
});
