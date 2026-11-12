import assert from 'node:assert/strict';
import test from 'node:test';
import {createFloorSupport, createStorybookFurnitureCollision} from '../ha-local/storybook-floor-support.mjs';
import {createStorybookPersonNavigation} from '../ha-local/storybook-person-navigation.mjs';
import {compileStorybookPlan, storybookMotionSurfaces} from '../ha-local/storybook-scene.mjs';

const rectangle = (x1, z1, x2, z2) => [[x1,z1], [x2,z1], [x2,z2], [x1,z2], [x1,z1]];
const point = (x, y) => ({x, y});
const bounds = {minX:0, minZ:0, maxX:320, maxZ:420};

function setup(surface, furniture, radius = 13) {
  const allowsPoint = (x, z) => surface.clearance(x, z) >= radius && !furniture()?.blocksPoint(x, z, radius);
  const allowsRoute = (x, z, endX, endZ) => surface.supportsRoute(x, z, endX, endZ, radius) &&
    !furniture()?.blocksRoute(x, z, endX, endZ, radius);
  return {...createStorybookPersonNavigation({allowsPoint, allowsRoute, bounds, geometryRevision:furniture}), allowsRoute};
}

function checkSegments(route, start, allowsRoute) {
  assert.ok(route?.length, 'expected a walkable route');
  for (const end of route) {
    assert.ok(allowsRoute(start.x, start.y, end.x, end.y), 'each swept segment clears the geometry');
    start = end;
  }
}

test('routes deterministically around solid furniture and clears the swept radius at corners', () => {
  const floor = createFloorSupport([[rectangle(0, 0, 300, 260)]]);
  const furniture = createStorybookFurnitureCollision([
    {item:{id:'sofa',type:'sofa',w:102,h:75}, x:138,z:122,angle:Math.PI / 8},
    {item:{id:'chair',type:'diningChair',w:34,h:40}, x:212,z:98,angle:0},
  ]);
  const {allowsRoute, findRoute, standingTarget} = setup(floor, () => furniture);
  const from = point(55, 97);
  const to = point(260, 104);
  assert.equal(allowsRoute(from.x, from.y, to.x, to.y), false);
  const route = findRoute(from, to);
  assert.ok(route.length > 1, 'blocked direct route gets a real detour');
  assert.equal(route.at(-1), to);
  checkSegments(route, from, allowsRoute);
  assert.deepEqual(findRoute(from, to), route);
  assert.equal(standingTarget(to, from), to);
  const blocked = point(212, 98);
  assert.equal(findRoute(from, blocked), null, 'a walking target cannot occupy a chair');
  const clear = standingTarget(blocked, point(258, 98));
  assert.ok(clear.x > blocked.x);
  assert.ok(allowsRoute(258, 98, clear.x, clear.y), 'projection stays beside the chair on the arrival side');
});

const room = (id, surface, x, z, right, bottom) => ({id, surface,
  points:[point(x,z), point(right,z), point(right,bottom), point(x,bottom)]});

test('a routed detour uses the door and joins the upper landing and stairs', () => {
  const {presence} = storybookMotionSurfaces(compileStorybookPlan({
    version:2, editableReferenceVersion:10,
    rooms:[room('west','oak',20,80,150,300), room('east','walnut',150,80,300,300),
      room('landing','patio',20,300,145,366)],
    walls:[{id:'north-wall',x1:150,y1:80,x2:150,y2:145},
      {id:'south-wall',x1:150,y1:220,x2:150,y2:300}],
    items:[{id:'stair',type:'stairs',x:100,y:387,w:42,h:42,steps:7,rotation:180}],
  }));
  const {allowsRoute, findRoute} = setup(presence, () => null);
  const from = point(240, 114);
  const to = point(100, 405);
  assert.ok(presence.floorAt(to.x, to.y) < 0);
  assert.equal(allowsRoute(from.x, from.y, to.x, to.y), false);
  checkSegments(findRoute(from, to), from, allowsRoute);
  assert.equal(findRoute(from, point(100, 436)), null, 'the yard is beyond the stair footprint');
});

test('isolated floors do not get a route and draft collision changes invalidate cached edges', () => {
  const floor = createFloorSupport([[rectangle(0, 0, 320, 130)], [rectangle(0, 150, 320, 320)]]);
  const makeFurniture = h => createStorybookFurnitureCollision([
    {item:{id:'desk',type:'diningTable',w:32,h}, x:160,z:65,angle:0},
  ]);
  let furniture = makeFurniture(52);
  const {allowsRoute, findRoute} = setup(floor, () => furniture);
  const from = point(80, 65);
  const to = point(220, 65);
  checkSegments(findRoute(from, to), from, allowsRoute);
  assert.equal(findRoute(from, point(160, 200)), null);
  furniture = makeFurniture(118);
  assert.equal(findRoute(from, to), null, 'an item that now spans the floor blocks the earlier detour');
  furniture = makeFurniture(52);
  checkSegments(findRoute(from, to), from, allowsRoute);
});
