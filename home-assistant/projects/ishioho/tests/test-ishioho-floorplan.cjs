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

test('the porch, interior entry, balcony, and stair popup remain distinct', () => {
  const anchors = roomAnchors(model);
  assert.deepEqual(Array.from(Object.values(anchors.porch)), [10.8, 37.5]);
  assert.deepEqual(Array.from(Object.values(anchors.entryway)), [25.5, 55]);
  assert.deepEqual(Array.from(Object.values(anchors.balcony)), [19.023, 28.24]);
  assert.deepEqual(Array.from(Object.values(anchors.garage_stairs)), [18.8, 63.2]);
  assert.equal(anchors.garage, undefined);
  for (const space of model.spaces) assert.ok(inside(space.anchor, space.polygon), `${space.id} anchor outside room`);
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
  assert.deepEqual(bedroom.point, [89.18, 5.805]);
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
