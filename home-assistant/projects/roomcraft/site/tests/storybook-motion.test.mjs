import assert from 'node:assert/strict';
import test from 'node:test';
import {Scene} from 'three';
import {compileStorybookPlan, storybookMotionSurfaces} from '../ha-local/storybook-scene.mjs';
import {createStorybookMotion} from '../ha-local/storybook-motion.mjs';
import {createStorybookPeople} from '../ha-local/storybook-people.mjs';
import {nearestSupportedFloorPoint} from '../ha-local/storybook-floor-support.mjs';

const room = (id, surface, x, z, right, bottom) => ({id, surface,
  points:[{x,y:z},{x:right,y:z},{x:right,y:bottom},{x,y:bottom}]});
const layout = {
  version:2, editableReferenceVersion:10,
  rooms:[room('west','oak',20,80,150,300), room('east','walnut',150,80,300,300),
    room('balcony','patio',20,300,300,366)],
  walls:[{id:'partition-upper',x1:150,y1:80,x2:150,y2:145},
    {id:'partition-lower',x1:150,y1:220,x2:150,y2:300}],
  items:[{id:'glazing',type:'window',x:150,y:111,w:46,h:12,rotation:90},
    {id:'exterior-stair',type:'stairs',x:100,y:387,w:42,h:42,rotation:180}],
};
const point = (x, y) => ({x, y});
const tracked = (surface, radius, options = {}) => createStorybookMotion({
  allowsPoint:(x,z) => surface.clearance(x,z) >= radius,
  allowsRoute:(x,z,endX,endZ) => surface.supportsRoute(x,z,endX,endZ,radius),
  ...options,
});

test('authored floors stay walkable while compiled walls and window sills block passage', () => {
  const {home, vacuum, presence} = storybookMotionSurfaces(compileStorybookPlan(layout));
  assert.ok(home.clearance(75, 120) > 24);
  assert.equal(home.clearance(150, 111), 0, 'a window sill still occupies floor-level space');
  assert.equal(home.clearance(100, 337), 0, 'patio is outside the home classification');
  assert.equal(home.clearance(100, 383), 0, 'exterior stairs are outside the home classification');
  assert.ok(vacuum.clearance(100, 337) > 15, 'the upper patio is still an authored floor surface');
  for (const surface of [home, vacuum, presence]) {
    assert.equal(surface.supportsRoute(115,111,185,111,11), false);
    assert.equal(surface.supportsRoute(115,178,185,178,13), true);
    assert.equal(surface.supportsRoute(115,152,185,152), true);
    assert.equal(surface.supportsRoute(115,152,185,152,13), false, 'swept body would clip jamb');
  }
});

test('presence uses the upper condo slab, authored landing and rotated stair tread heights', () => {
  const source = structuredClone(layout);
  source.items.find(item => item.type === 'stairs').steps = 7;
  source.items.push({id:'garage',type:'garageDoor',x:175,y:460,w:70,h:54,rotation:0});
  const {presence, vacuum} = storybookMotionSurfaces(compileStorybookPlan(source));
  assert.equal(presence.floorAt(100, 255), 0);
  assert.equal(presence.floorAt(100, 350), 0);
  assert.equal(presence.floorAt(100, 368), 0);
  assert.equal(presence.floorAt(100, 387), -108 + 4 * (108 / 7));
  assert.equal(presence.floorAt(100, 419), -108);
  assert.equal(presence.floorAt(100, 434), null, 'yard below the stair is outside the condo footprint');
  assert.equal(presence.floorAt(175, 460), null, 'first-floor garage is outside the condo footprint');
  assert.equal(presence.floorAt(150, 111), null, 'a window still occupies the walkable footprint');
  assert.equal(vacuum.clearance(100, 387), 0);
  assert.equal(presence.supportsRoute(100, 330, 100, 401, 15), true);
  assert.equal(presence.supportsRoute(100, 401, 150, 345, 15), false);

  const scene = new Scene();
  const layer = createStorybookPeople(scene, presence.floorAt, {
    floorClearance:presence.clearance, supportsRoute:presence.supportsRoute,
  });
  layer.setTracks([{id:'test:1',x:100,y:387}], 1, {reduceMotion:true});
  const character = scene.getObjectByName('radar-avatar-papa');
  assert.equal(character.visible, true);
  assert.equal(character.position.y, presence.floorAt(100, 387));
  layer.dispose();
});

test('a person cannot step sideways from a raised deck onto a low tread or through a railing', () => {
  const source = structuredClone(layout);
  source.rooms.push(room('side-deck', 'patio', 121, 366, 210, 409));
  source.walls.push({id:'rail',kind:'fence',x1:70,y1:341,x2:130,y2:341});
  const {presence} = storybookMotionSurfaces(compileStorybookPlan(source));
  assert.ok(presence.floorAt(100, 399) < -50);
  assert.equal(presence.floorAt(144, 399), 0);
  assert.equal(presence.supportsRoute(100, 399, 144, 399, 0), false);
  assert.equal(presence.supportsRoute(100, 332, 100, 351, 0), false);
  assert.equal(presence.floorAt(100, 341), null);
});

test('nearby standing fallback keeps valid coordinates and checks full clearance for each candidate', () => {
  const {presence} = storybookMotionSurfaces(compileStorybookPlan(layout));
  const allowsPoint = (x, z) => presence.clearance(x, z) >= 20 && Math.hypot(x - 100, z - 190) > 22;
  assert.deepEqual(nearestSupportedFloorPoint(100, 388, 0, allowsPoint), {x:100,y:388});
  assert.equal(nearestSupportedFloorPoint(100, 190, 15, allowsPoint), null);
  const fallback = nearestSupportedFloorPoint(100, 190, 30, allowsPoint);
  assert.ok(fallback && allowsPoint(fallback.x, fallback.y));
  assert.ok(Math.hypot(fallback.x - 100, fallback.y - 190) <= 30);
});

test('a supported telemetry path animates continuously through the actual doorway', () => {
  const {home} = storybookMotionSurfaces(compileStorybookPlan(layout));
  const motion = tracked(home, 11);
  motion.observe(point(115,178), 0);
  motion.observe(point(185,178), 1);
  for (let t = 1; t <= 1.32; t += .02) {
    const sample = motion.sample(t);
    assert.ok(home.clearance(sample.x, sample.y) >= 11);
    assert.equal(sample.y, 178);
  }
  assert.equal(motion.sample(1.16).walking, true);
  assert.ok(Math.abs(motion.sample(1.16).x - 150) < 1e-7);
  assert.equal(motion.sample(1.4).x, 185);
});

test('the vacuum holds its last point across a wall, hides before reacquisition, and separates demo history', () => {
  const {vacuum} = storybookMotionSurfaces(compileStorybookPlan(layout));
  const live = tracked(vacuum, 13);
  const demo = tracked(vacuum, 13, {duration:0});
  live.observe(point(105,111), 1, {observation:100});
  live.observe(point(195,111), 2, {observation:101});
  assert.equal(live.sample(2.2).x, 105);
  assert.equal(live.sample(2.2).current, false);
  live.observe(point(195,111), 2.25, {observation:101});
  assert.equal(live.sample(2.25).x, 105);
  live.observe(point(195,111), 3, {observation:102});
  assert.equal(live.sample(3.1), null);
  assert.equal(live.hasPosition, true);
  assert.equal(live.pendingReacquisition, true);
  assert.equal(live.sample(3.3).x, 195);
  assert.equal(live.sample(3.3).walking, false);
  assert.equal(live.pendingReacquisition, false);
  demo.observe(point(215,180), 1);
  assert.equal(demo.sample(1).x, 215);
  assert.equal(demo.observe(point(150,111), 2), false, 'a report inside a wall is rejected');
  demo.clear();
  assert.equal(demo.sample(2), null);
  assert.equal(live.sample(3.4).x, 195);
});
