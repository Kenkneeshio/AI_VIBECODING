import assert from 'node:assert/strict';
import test from 'node:test';
import { compileStorybookPlan, storybookDrawingPixelRatio } from '../ha-local/storybook-scene.mjs';
import { makeStorybookDevice } from '../ha-local/storybook-devices.mjs';

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

test('native graphics use device DPR while respecting WebGL dimensions and a framebuffer budget', () => {
  assert.equal(storybookDrawingPixelRatio(1280, 800, 2, {insaneGraphics:true}), 2);
  assert.equal(storybookDrawingPixelRatio(1280, 800, 2, {renderScale:.67}), 1.5 * .67);
  assert.equal(storybookDrawingPixelRatio(1200, 700, 3, {insaneGraphics:true, maxWidth:3072, maxHeight:2048}), 2.56);
  const huge = storybookDrawingPixelRatio(7680, 4320, 2, {insaneGraphics:true});
  assert.ok(7680 * 4320 * huge ** 2 <= 12_000_001);
  assert.ok(huge < 1);
});

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

test('explicit invisible and door zones keep their authored location beside a window', () => {
  const source = sample();
  for (const mode of ['none', 'device', 'door']) {
    const zone = {...source.items[1], visualKind:mode};
    const layout = {...source, items:[source.items[0], zone]};
    const placement = compileStorybookPlan(layout).placements[1];
    assert.equal(placement.isBlind, false);
    assert.deepEqual([placement.x, placement.z], [zone.x, zone.y]);
    const object = makeStorybookDevice(zone);
    assert.equal(Boolean(object), mode === 'door');
    object?.root.traverse(node => {
      node.geometry?.dispose();
      node.material?.dispose();
    });
  }
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

test('editable structure uses outdoor floors, stairs and fence records independently', () => {
  const source = sample();
  source.editableReferenceVersion = 8;
  source.rooms.push({
    id: 'deck', surface: 'oak', outdoor: true,
    points: [{x: 20, y: 210}, {x: 110, y: 210}, {x: 110, y: 310}, {x: 20, y: 310}],
  });
  source.items.push({id: 'stairs', type: 'stairs', x: 80, y: 430, w: 50, h: 180, rotation: 0, steps: 9});
  source.walls.push(
    {id: 'stair-rail', kind: 'fence', x1: 56, y1: 340, x2: 56, y2: 520},
    {id: 'deck-rail', kind: 'fence', x1: 20, y1: 210, x2: 110, y2: 210},
    {id: 'garden-fence', kind: 'fence', x1: 5, y1: 390, x2: 5, y2: 510},
  );
  const plan = compileStorybookPlan(source);
  assert.equal(plan.stairs[0].steps, 9);
  assert.deepEqual(plan.walls.map(wall => wall.id), ['synthetic-wall']);
  assert.deepEqual(plan.fences.map(({id, base1, base2}) => [id, base1, base2]), [
    ['stair-rail', -108, 0], ['deck-rail', 0, 0], ['garden-fence', -111, -111],
  ]);
  assert.ok(covers(plan.floorStructure.footprint, 60, 260));
  assert.ok(!covers(plan.floorStructure.foundation, 60, 260));
  assert.ok(covers(plan.floorStructure.foundation, 200, 260));

  const edited = compileStorybookPlan({...source, rooms: [], walls: [], items: []});
  assert.deepEqual(edited.walls, []);
  assert.deepEqual(edited.fences, []);
  assert.deepEqual(edited.stairs, []);
  assert.deepEqual(edited.floorStructure.footprint, []);
  assert.deepEqual(edited.floorStructure.foundation, []);
});

test('legacy wall IDs cannot regenerate a hidden shell in an editable plan', () => {
  const source = sample();
  source.walls = [
    ['w1', 400, 193, 799, 193], ['w2', 400, 193, 400, 408], ['w3', 400, 408, 342, 468],
    ['w4', 342, 468, 158, 468], ['w5', 158, 468, 158, 590], ['w6', 158, 590, 248, 590],
    ['w7', 248, 590, 302, 651], ['w8', 302, 651, 302, 800], ['w9', 302, 800, 1485, 800],
    ['w11', 1485, 178, 1133, 178], ['w12', 799, 193, 1066, 193], ['w13', 799, 193, 799, 485],
    ['w18', 1133, 178, 1133, 210],
  ].map(([id, x1, y1, x2, y2]) => ({id, x1, y1, x2, y2}));
  const legacy = compileStorybookPlan({...source, editableReferenceVersion: 7});
  assert.ok(legacy.reference);
  assert.ok(legacy.walls.some(wall => wall.id.startsWith('reference-recess-')));
  const editable = compileStorybookPlan({...source, editableReferenceVersion: 8});
  assert.equal(editable.reference, null);
  assert.deepEqual(editable.walls.map(wall => wall.id), source.walls.map(wall => wall.id));
  assert.deepEqual(editable.fences, []);
  assert.deepEqual(editable.stairs, []);
  assert.ok(!covers(editable.floorStructure.footprint, 80, 845));
});
