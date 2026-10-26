/* Portable floor-plan geometry and renderer checks, without Home Assistant. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');
const model = JSON.parse(read('floorplan.json'));
const schema = JSON.parse(read('floorplan.schema.json'));
const source = read('ishioho-floorplan.js').replace(/^export /gm, '');
const {validateFloorplan, roomAnchors, renderFloorplanSvg} = vm.runInNewContext(
  `${source}\n({validateFloorplan,roomAnchors,renderFloorplanSvg})`
);
const tests = [];
const test = (name, fn) => tests.push([name, fn]);
const clone = value => JSON.parse(JSON.stringify(value));

function inside(point, polygon) {
  const [x, y] = point;
  let result = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i], [xj, yj] = polygon[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) result = !result;
  }
  return result;
}

test('the default home is a typed, bounded, two-level model with a lower garage', () => {
  assert.equal(validateFloorplan(model).ok, true);
  assert.match(schema.$schema, /2020-12/);
  assert.deepEqual(model.coordinateSystem.viewBox, [0, 0, 100, 50]);
  assert.equal(model.coordinateSystem.measured, false);
  assert.equal(model.levels.find(level => level.id === 'home').number, 2);
  assert.equal(model.levels.find(level => level.id === 'garage').number, 1);
  assert.equal(model.spaces.find(space => space.id === 'garage').levelId, 'garage');
  assert.ok(model.connections.some(link => link.from.spaceId === 'garage_stairs' && link.to.spaceId === 'garage'));
  assert.ok(model.spaces.filter(space => space.levelId === 'home').length >= 12);
});

test('the far-left stair descends screen-up toward the top garage driveway', () => {
  const spaces = new Map(model.spaces.map(space => [space.id, space]));
  const stair = spaces.get('garage_stairs'), porch = spaces.get('porch');
  const balcony = spaces.get('balcony'), garage = spaces.get('garage');
  const left = polygon => Math.min(...polygon.map(([x]) => x));
  const right = polygon => Math.max(...polygon.map(([x]) => x));
  const top = polygon => Math.min(...polygon.map(([, y]) => y));
  const bottom = polygon => Math.max(...polygon.map(([, y]) => y));
  assert.equal(stair.levelId, 'home');
  assert.ok(right(stair.polygon) < left(balcony.polygon), 'balcony railing separates it from the stair');
  assert.equal(left(porch.polygon), right(stair.polygon), 'lower-screen porch walkway must connect to the stair');
  assert.ok(top(stair.polygon) < bottom(balcony.polygon), 'stair must run beside the planted landing');
  assert.ok(bottom(stair.polygon) <= bottom(porch.polygon), 'stair meets the lower-screen porch walkway');
  const flight = model.objects.find(object => object.id === 'exterior_stair_flight');
  assert.ok(flight.ascentSegment[0][1] < flight.ascentSegment[1][1],
    'ascent toward the upstairs landing points screen-down, so descent toward the garage points screen-up');
  assert.ok(flight.ascentSegment.every(point => inside(point, stair.polygon)));
  assert.ok(right(stair.polygon) < left(garage.polygon), 'garage must be right of the exterior stair');
  assert.ok(inside(garage.anchor, model.levels.find(level => level.id === 'home').footprint),
    'garage center must project beneath the main home');
  const porchGate = model.openings.find(opening => opening.id === 'porch_stair_gate');
  assert.ok(porchGate.connects.includes('porch') && porchGate.connects.includes('garage_stairs'));
  assert.ok(porchGate.segment.every(([x, y]) => x === right(stair.polygon) &&
    y >= bottom(stair.polygon) - 4) &&
    porchGate.segment.some(([, y]) => y === bottom(stair.polygon)),
  'porch must connect at the lower-screen stair end');
  assert.ok(!model.openings.some(opening => opening.connects?.includes('porch') && opening.connects.includes('balcony')),
    'solid barrier separates the porch and plant balcony');
  assert.ok(!model.openings.some(opening => opening.connects?.includes('garage_stairs') && opening.connects.includes('balcony')),
    'stair must not arrive at the balcony on the top side');
  const garageOpenings = model.openings.filter(opening => opening.levelId === 'garage');
  const vehicle = garageOpenings.find(opening => opening.kind === 'garage_door');
  const pedestrian = garageOpenings.find(opening => opening.kind === 'door');
  assert.equal(garageOpenings.length, 2, 'only roll-up and pedestrian doors belong to the garage');
  assert.ok(vehicle.segment.every(([, y]) => y === top(garage.polygon)), 'roll-up faces the top driveway');
  assert.ok(pedestrian.segment.every(([x]) => x === left(garage.polygon)), 'pedestrian door is on the left wall');
  assert.ok(garageOpenings.every(opening => opening.segment.every(([x, y]) =>
    x !== right(garage.polygon) && y !== bottom(garage.polygon))), 'garage has no east or south opening');
});

test('the porch, interior entry, balcony, and stair popup remain distinct', () => {
  const anchors = roomAnchors(model);
  assert.deepEqual(Array.from(Object.values(anchors.porch)), [17.7, 64.4]);
  assert.deepEqual(Array.from(Object.values(anchors.entryway)), [28.7, 68.4]);
  assert.deepEqual(Array.from(Object.values(anchors.balcony)), [18.3, 35.2]);
  assert.deepEqual(Array.from(Object.values(anchors.garage_stairs)), [5.7, 46.8]);
  assert.ok(anchors.guest_bathroom, 'the modeled guest bath must match the dashboard room ID');
  assert.equal(anchors.guest_bath, undefined);
  assert.equal(anchors.garage, undefined);
  for (const space of model.spaces) assert.ok(inside(space.anchor, space.polygon), `${space.id} anchor outside room`);
});

test('Stardew fallback pins and documented theme overrides match modeled room zones', () => {
  const anchors = roomAnchors(model);
  const example = JSON.parse(read('ishioho-dashboard.json'));
  const positions = JSON.parse(read('room-positions.json'));
  const card = example.views.find(view => view.path === 'stardew').cards[0];
  for (const room of card.rooms) {
    const spaceId = room.id === 'garage' ? 'garage_stairs' : room.id;
    const space = model.spaces.find(item => item.id === spaceId);
    assert.ok(space, `no modeled space for ${room.id}`);
    assert.deepEqual([room.x, room.y], [anchors[spaceId].x, anchors[spaceId].y],
      `${room.id} fallback pin differs from modeled anchor`);
    const override = positions.theme_pin_overrides.stardew[room.id];
    assert.deepEqual([override.x, override.y], [room.x, room.y],
      `${room.id} documented override differs from example`);
    assert.ok(inside([room.x, room.y / 2], space.polygon), `${room.id} pin outside ${spaceId}`);
  }
});

test('open living, entry, dining, and kitchen zones are not drawn as solid partitions', () => {
  const interiors = model.walls.filter(wall => wall.levelId === 'home' && wall.kind === 'interior');
  const crosses = (wall, axis, value, start, end) => {
    const index = axis === 'x' ? 0 : 1, other = 1 - index;
    return wall.segment.every(point => point[index] === value) &&
      Math.max(start, Math.min(...wall.segment.map(point => point[other]))) <
      Math.min(end, Math.max(...wall.segment.map(point => point[other])));
  };
  assert.ok(!interiors.some(wall => crosses(wall, 'y', 25.2, 25, 52.5)),
    'Living must remain open toward the Hall and Dining');
  assert.ok(!interiors.some(wall => crosses(wall, 'x', 33.5, 29.5, 37)),
    'indoor Entry must remain open toward Dining');
  assert.ok(!interiors.some(wall => crosses(wall, 'x', 49.9, 29.5, 42.8)),
    'a low counter must not become a full-height Dining–Kitchen wall');
  const peninsula = model.objects.find(object => object.id === 'kitchen_peninsula');
  assert.equal(peninsula.kind, 'counter');
  assert.equal(peninsula.spaceId, 'kitchen');
  assert.ok(model.openings.some(opening => opening.id === 'dining_kitchen_passage' &&
    opening.connects.includes('dining') && opening.connects.includes('kitchen')));
  const officeDoor = model.openings.find(opening => opening.id === 'office_door');
  assert.ok(officeDoor && interiors.some(wall => wall.id === 'office_hall_west') &&
    interiors.some(wall => wall.id === 'office_hall_east'),
  'Office remains enclosed except for its modeled door');
  const guest = model.spaces.find(space => space.id === 'guest_bathroom');
  const primary = model.spaces.find(space => space.id === 'bathroom');
  const area = space => space.polygon.reduce((sum, [x, y], index, points) => {
    const [nextX, nextY] = points[(index + 1) % points.length];
    return sum + x * nextY - nextX * y;
  }, 0) / 2;
  assert.ok(Math.abs(area(guest)) < Math.abs(area(primary)), 'guest bath is the smaller bath');
});

test('modeled doors and gates are actual gaps in their physical walls', () => {
  const overlap = (first, second) => {
    for (const [fixed, varying] of [[0, 1], [1, 0]]) {
      if (!first.every(point => point[fixed] === first[0][fixed]) ||
          !second.every(point => point[fixed] === second[0][fixed]) ||
          first[0][fixed] !== second[0][fixed]) continue;
      if (Math.max(Math.min(...first.map(point => point[varying])),
        Math.min(...second.map(point => point[varying]))) <
        Math.min(Math.max(...first.map(point => point[varying])),
          Math.max(...second.map(point => point[varying])))) return true;
    }
    return false;
  };
  for (const opening of model.openings.filter(item =>
    ['door', 'sliding_door', 'gate', 'garage_door'].includes(item.kind))) {
    assert.ok(!model.walls.some(wall => wall.levelId === opening.levelId &&
      overlap(wall.segment, opening.segment)), `${opening.id} is covered by a wall`);
  }
});

test('the front door and bath entrances connect the visible circulation zones', () => {
  const opening = id => model.openings.find(item => item.id === id);
  assert.deepEqual(opening('front_door').connects, ['porch', 'entryway']);
  assert.deepEqual(opening('porch_stair_gate').connects, ['porch', 'garage_stairs']);
  assert.deepEqual(opening('guest_bath_door').connects, ['hall', 'guest_bathroom']);
  assert.deepEqual(opening('primary_bath_door').connects, ['hall', 'bathroom']);
  assert.ok(!model.openings.some(item =>
    item.connects?.includes('balcony') && item.connects.includes('porch')),
  'the planted balcony is not a route into the porch');
});

test('all named device anchors use coordinates inside their assigned spaces', () => {
  const spaces = new Map(model.spaces.map(space => [space.id, space]));
  assert.ok(model.deviceAnchors.length >= 8);
  for (const anchor of model.deviceAnchors) {
    const room = spaces.get(anchor.spaceId);
    assert.equal(anchor.levelId, room.levelId);
    assert.ok(inside(anchor.point, room.polygon), `${anchor.id} outside ${room.id}`);
  }
  const bedroom = model.deviceAnchors.find(anchor => anchor.id === 'bedroom_light');
  assert.deepEqual(bedroom.point, [80.5, 9.7]);
});

test('SVG contains semantic spaces, openings, furnishings, and no garage footprint on the upstairs level', () => {
  const svg = renderFloorplanSvg(model, {levelId: 'home'});
  assert.match(svg, /viewBox="0 0 100 50"/);
  assert.match(svg, /class="floor-space-group"/);
  assert.match(svg, /data-floorplan-room="entryway"/);
  assert.match(svg, /data-floorplan-action="garage" data-floorplan-room="garage"/);
  assert.match(svg, /class="floor-stair-tread"/);
  assert.match(svg, /id="floor-wall-living_office"/);
  assert.match(svg, /id="floor-opening-front_door"/);
  assert.match(svg, /id="floor-object-bedroom_bed"/);
  assert.ok(!svg.includes('id="floor-space-garage"'));
  const lower = renderFloorplanSvg(model, {levelId: 'garage'});
  assert.match(lower, /id="floor-space-garage"/);
  assert.ok(!lower.includes('id="floor-space-master"'));
});

test('malformed geometry and injected text fail safely', () => {
  const invalid = clone(model);
  invalid.spaces[0].polygon = [[0, 0], [0, 0], [0, 0]];
  assert.equal(validateFloorplan(invalid).ok, false);
  assert.match(renderFloorplanSvg(invalid), /Floor plan unavailable/);
  const duplicate = clone(model);
  duplicate.objects[0].id = duplicate.objects[1].id;
  assert.equal(validateFloorplan(duplicate).ok, false);
  const escaped = clone(model);
  escaped.spaces.find(space => space.id === 'living').label = '<script>alert("x")</script>';
  const svg = renderFloorplanSvg(escaped);
  assert.ok(!svg.includes('<script>'));
  assert.match(svg, /&lt;script&gt;/);
});

let failed = 0;
for (const [name, fn] of tests) {
  try { fn(); console.log(`PASS ${name}`); }
  catch (error) { failed++; console.error(`FAIL ${name}\n  ${error.message}`); }
}
console.log(`${tests.length - failed}/${tests.length} floor-plan tests passed.`);
process.exitCode = failed ? 1 : 0;
