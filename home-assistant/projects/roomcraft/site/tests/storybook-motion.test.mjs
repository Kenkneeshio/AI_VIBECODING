import assert from 'node:assert/strict';
import test from 'node:test';
import {compileStorybookPlan, storybookMotionSurfaces} from '../ha-local/storybook-scene.mjs';
import {createStorybookMotion} from '../ha-local/storybook-motion.mjs';

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

test('authored interior stays walkable while compiled walls, window sills and exterior space block presence', () => {
  const {home, vacuum} = storybookMotionSurfaces(compileStorybookPlan(layout));
  assert.ok(home.clearance(75, 120) > 24);
  assert.equal(home.clearance(150, 111), 0, 'a window sill still occupies floor-level space');
  assert.equal(home.clearance(100, 337), 0, 'patio is outside the home classification');
  assert.equal(home.clearance(100, 383), 0, 'exterior stairs are outside the home classification');
  assert.ok(vacuum.clearance(100, 337) > 15, 'the upper patio is still an authored floor surface');
  for (const surface of [home, vacuum]) {
    assert.equal(surface.supportsRoute(115,111,185,111,11), false);
    assert.equal(surface.supportsRoute(115,178,185,178,13), true);
    assert.equal(surface.supportsRoute(115,152,185,152), true);
    assert.equal(surface.supportsRoute(115,152,185,152,13), false, 'swept body would clip jamb');
  }
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
