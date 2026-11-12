import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {buildStorybookNeighborhood, buildStorybookStreet, storybookStreetBounds} from '../ha-local/storybook-street.mjs';
import {createStorybookBoatRoutes} from '../ha-local/storybook-boats.mjs';
import {createStorybookBeachPlay, planStorybookBeachPlay, sampleStorybookBeachPlay} from '../ha-local/storybook-beach-play.mjs';

const street = {farZ:-254};
const {water} = buildStorybookNeighborhood({box() {}, ball() {}, add(geometry) { geometry.dispose(); }},
  street, -111, {minX:350, maxX:1430}, 6200, 780);
const layout = planStorybookBeachPlay(water, street);

test('La Jolla shares the sculpted shore between the sand, water, and cinematic frames', () => {
  const room = {minX:350, maxX:1430};
  const capture = () => {
    let sand;
    const {water, coastalFrames} = buildStorybookNeighborhood({
      box() {},
      ball() {},
      add(geometry, shade, x, y, z) {
        if (shade === '#fffbec') sand = {x, y, z, vertices:geometry.attributes.position.count,
          coloredVertices:geometry.attributes.color.count};
        geometry.dispose();
      },
    }, street, -111, room, 6200, 780);
    const {sandHeight, ...shape} = water;
    return {sand, water:shape, coastalFrames, sandGrade: Object.values(water.playSites).map(x => sandHeight(x, -330))};
  };
  const coast = capture();
  assert.deepEqual(capture(), coast);
  const shoreAt = fraction => coast.water.shoreline.reduce((nearest, point) => {
    const x = coast.water.focusX + fraction * (room.maxX - room.minX);
    return Math.abs(point.x - x) < Math.abs(nearest.x - x) ? point : nearest;
  }).z;
  assert.ok(shoreAt(-.29) > shoreAt(-.145) + 50, 'the pocket retreats from Point La Jolla');
  assert.ok(shoreAt(-.29) > shoreAt(-.43) + 50, 'sandstone headlands enclose the pocket');
  assert.ok(shoreAt(-.43) < shoreAt(-.145) - 14, 'Point La Jolla reaches farther seaward than the east shelf');
  const westArc = [-.43, -.39, -.35, -.32, -.29].map(shoreAt);
  const eastArc = [-.29, -.25, -.21, -.18, -.145].map(shoreAt);
  assert.ok(westArc.every((z, i) => i === 0 || z > westArc[i - 1]));
  assert.ok(eastArc.every((z, i) => i === 0 || z < eastArc[i - 1]));
  assert.ok(Math.abs(shoreAt(.36) - shoreAt(.49)) < 10, 'Shores remains a broad gentle beach');
  assert.ok(shoreAt(.46) > Math.max(shoreAt(.05), shoreAt(.88)) + 15, 'the broader bay bows inland at Shores');
  assert.equal(coast.sand.vertices, coast.sand.coloredVertices);
  assert.ok(coast.sandGrade.every(y => y > -111 && y < coast.water.y));
  assert.ok(coast.water.cove.x < coast.water.focusX);
  assert.ok(coast.coastalFrames.waterfront.maxX < coast.coastalFrames.shores.minX);
  const boats = createStorybookBoatRoutes(coast.water);
  const cabin = boats.find(route => route.id === 'cabin');
  assert.ok(cabin.point(Math.PI).x > coast.water.focusX + (room.maxX - room.minX) * .335 + cabin.beam);
  const sailboat = boats.find(route => route.id === 'sailboat');
  for (let step = 0; step < 12; step++) {
    const {x,z} = sailboat.point(step / 12 * Math.PI * 2);
    assert.ok(shoreAt((x - coast.water.focusX) / (room.maxX - room.minX)) - z > 70);
  }
});

test('the authored road bends smoothly and the sidewalk meets the graded beach at every column', () => {
  const house = {minX:220, maxX:1450, minZ:210, maxZ:820};
  // A garage or stair apron can extend farther north than the house.
  const bounds = {...house, minZ:82};
  const curved = storybookStreetBounds({houseBounds:house, bounds, editableStructure:true});
  const points = Array.from({length: 101}, (_, i) => house.minX + i * (house.maxX - house.minX) / 100);
  const shifts = points.map(x => curved.sample(x, curved.farZ).z);
  assert.ok(Math.max(...shifts) - Math.min(...shifts) > 35);
  assert.ok(shifts[25] > Math.max(shifts[0], shifts[50]), 'the coast road bends inward behind the Cove');
  assert.ok(shifts[75] < Math.min(shifts[50], shifts[100]), 'a broad reverse bend leads past Shores');
  for (const x of points) {
    const {z, yaw} = curved.sample(x, curved.farZ);
    const slope = (curved.sample(x + .01, curved.farZ).z - curved.sample(x - .01, curved.farZ).z) / .02;
    assert.ok(Math.abs(Math.tan(-yaw) - slope) < 1e-8);
    assert.ok(Math.abs(slope) < .15, 'no sharp kinks');
    const inlandEdge = curved.sample(x, curved.nearZ).z;
    assert.ok(Math.abs(inlandEdge - z - (curved.nearZ - curved.farZ)) < 1e-8);
    assert.ok(inlandEdge <= bounds.minZ - 18, 'the full bend clears the northernmost saved structures');
  }

  const width = 1800, centerX = 835, ground = -111;
  const sidewalks = [], geometryByColor = new Map();
  const batch = {
    box() {}, ball() {},
    add(geometry, color) {
      const position = geometry.attributes.position;
      if (color === '#c0b6a7') sidewalks.push(position);
      else if (color === '#fffbec') geometryByColor.set(color, position);
      geometry.dispose();
    },
  };
  const road = buildStorybookStreet(batch, curved, ground, width, centerX);
  const {water} = buildStorybookNeighborhood(batch, curved, ground, house, width, centerX);
  const beach = geometryByColor.get('#fffbec');
  const walk = sidewalks[0];
  const rows = beach.count / water.shoreline.length;
  const duneCrests = [];
  assert.equal(walk.count / 2, water.shoreline.length);
  for (const [column, {x}] of water.shoreline.entries()) {
    const border = walk.getZ(2 * column);
    const lastSand = (column + 1) * rows - 1;
    assert.ok(Math.abs(border - road.sample(x, curved.farZ).z) < .001);
    assert.ok(Math.abs(beach.getZ(lastSand) - border - .35) < .001, 'sand reaches below the paving');
    const firstSand = column * rows;
    let crest = ground;
    for (let i = firstSand; i <= lastSand; i++) {
      const depth = beach.getZ(i);
      const y = beach.getY(i);
      assert.ok(Math.abs(water.sandHeight(x, depth) - y) < .001);
      if (i > firstSand) assert.ok(depth > beach.getZ(i - 1));
      if (depth < water.shoreline[column].z + 60) assert.ok(y < water.y);
      crest = Math.max(crest, y);
    }
    duneCrests.push(crest - ground);
  }
  assert.ok(Math.max(...duneCrests) > 10, 'the backshore has discernible relief');
  assert.ok(Math.min(...duneCrests) < 2, 'the dunes fade into the surrounding flat beach');
});

test('the authored shoreline gives the volleyball and sandcastle groups distinct dry-sand patches', () => {
  assert.ok(layout.court && layout.castle);
  assert.ok(Math.abs(layout.court.x - layout.castle.x) > layout.court.halfWidth + layout.castle.halfWidth);
  for (const area of Object.values(layout)) {
    assert.ok(area.z + area.halfDepth <= street.farZ - 39 + 1e-6);
    const nearest = water.shoreline.filter(({x}) => Math.abs(x - area.x) < area.halfWidth);
    assert.ok(nearest.every(({z}) => area.z - area.halfDepth >= z + 26 - 1e-6));
    assert.ok(area.y > -111 && area.y < water.y);
  }
  const empty = createStorybookBeachPlay({...water, shoreline:[]}, street);
  empty.update(0);
  assert.equal(empty.root.children.length, 0);
  empty.dispose();
});

test('wide coast scenery extends beyond the actor routes and responds to landscape presets', () => {
  const house = {minX:220, maxX:1450, minZ:210, maxZ:820};
  const plan = {houseBounds:house, bounds:house, editableStructure:true};
  const batch = {box() {}, ball() {}, add(geometry) { geometry.dispose(); }};
  const standard = storybookStreetBounds(plan);
  const terrain = {road:'straight', coast:'rugged', roadSetback:180, beachWidth:130};
  const straight = storybookStreetBounds(plan, terrain);
  assert.ok(straight.nearZ < standard.nearZ - 130);
  const road = buildStorybookStreet(batch, straight, -111, 6200, 835, {renderWidth:16568});
  assert.equal(road.width, 6200);
  assert.equal(road.sample(45, straight.nearZ).z, straight.nearZ);
  const {water:wide} = buildStorybookNeighborhood(batch, straight, -111, house, 6200, 835, {renderWidth:16568, terrain});
  assert.equal(wide.shoreline.at(-1).x - wide.shoreline[0].x, 6200);
  assert.equal(wide.renderShoreline.at(-1).x - wide.renderShoreline[0].x, 16568);
  assert.ok(wide.renderFarZ < wide.farZ - 10000);
  assert.ok(wide.renderShoreline.every(({z}) => z <= straight.farZ - 65));
  const {water:narrow} = buildStorybookNeighborhood(batch, straight, -111, house, 6200, 835,
    {terrain:{...terrain, beachWidth:70}});
  assert.ok(wide.cove.z < narrow.cove.z - 50);
});

test('the ball crosses both sides above the net while the family works around its sandcastle', () => {
  const start = sampleStorybookBeachPlay(layout, 0);
  const crest = sampleStorybookBeachPlay(layout, 1.125);
  const returnStart = sampleStorybookBeachPlay(layout, 2.25);
  assert.ok(start.ball.x < layout.court.x && returnStart.ball.x > layout.court.x);
  assert.ok(Math.abs(crest.ball.x - layout.court.x) < 1e-6);
  assert.ok(crest.ball.y - layout.court.y > 30);
  assert.ok(start.actors[0].reach > start.actors[1].reach);
  assert.ok(returnStart.actors[0].reach < returnStart.actors[1].reach);
  assert.equal(start.actors[2].kind, 'builder');
  assert.ok(start.actors[2].scale < start.actors[3].scale);
  assert.notEqual(start.actors[2].reach, crest.actors[2].reach);
  assert.deepEqual(sampleStorybookBeachPlay(layout, 4, true), sampleStorybookBeachPlay(layout, 500, true));
});

function snapshot(beach) {
  const ball = beach.root.getObjectByName('beach-volleyball-ball');
  const actors = beach.root.getObjectByName('beach-recreation-figures');
  const matrix = new THREE.Matrix4();
  return {ball:ball.position.toArray(), spin:ball.rotation.toArray(),
    actors:Array.from({length:actors.count}, (_, index) => {
      actors.getMatrixAt(index, matrix);
      return matrix.toArray();
    })};
}

test('demo time, live time and reduced motion remain independent and replayable', () => {
  const beach = createStorybookBeachPlay(water, street);
  const reference = createStorybookBeachPlay(water, street);
  const demo = {transientTelemetry:true};
  beach.update(1, demo);
  const first = snapshot(beach);
  beach.update(2, demo);
  assert.notDeepEqual(snapshot(beach), first);
  beach.update(1, demo);
  assert.deepEqual(snapshot(beach), first);
  beach.update(.12);
  reference.update(.12);
  assert.deepEqual(snapshot(beach), snapshot(reference));
  beach.update(2, {reduceMotion:true});
  const still = snapshot(beach);
  beach.update(200, {reduceMotion:true});
  assert.deepEqual(snapshot(beach), still);
  beach.dispose();
  reference.dispose();
});

test('a complete activity uses five meshes and disposes its assets', () => {
  const beach = createStorybookBeachPlay(water, street);
  const scene = new THREE.Scene();
  scene.add(beach.root);
  const meshes = [];
  beach.root.traverse(node => { if (node.isMesh) meshes.push(node); });
  let active = 0;
  beach.root.traverseVisible(node => { if (node.isMesh) active++; });
  assert.equal(active, 5);
  let disposed = 0;
  for (const mesh of meshes) {
    mesh.material.addEventListener('dispose', () => disposed++);
    mesh.geometry.addEventListener('dispose', () => disposed++);
  }
  beach.dispose();
  assert.equal(disposed, meshes.length * 2);
  assert.equal(scene.children.length, 0);
});

test('a stage change swaps the activities at the same time and clears the beach overnight', () => {
  const beach = createStorybookBeachPlay(water, street);
  const names = () => beach.root.children.filter(group => group.visible).map(group => group.name);
  assert.deepEqual(names(), ['beach-day-activities']);
  beach.update(0, {activity:'morning'});
  assert.deepEqual(names(), ['beach-morning-surfers']);
  assert.ok(beach.root.getObjectByName('beach-surfers').count > 0);
  beach.update(0, {activity:'evening'});
  assert.deepEqual(names(), ['beach-evening-bonfires']);
  assert.equal(beach.root.getObjectByName('beach-bonfire-sand-glow').count, 1);
  assert.equal(beach.root.getObjectByName('beach-firepit-2'), undefined);
  assert.equal(beach.root.getObjectByName('beach-bonfire-contact-shadows').count, 1);
  beach.update(0, {activity:'day', night:true});
  assert.deepEqual(names(), ['beach-evening-bonfires']);
  beach.update(0, {activity:'overnight'});
  assert.deepEqual(names(), []);
  beach.update(0, {activity:'day'});
  assert.deepEqual(names(), ['beach-day-activities']);
  beach.dispose();
});

test('the surfboards stay in the breakers and their paths replay without overlap', () => {
  const beach = createStorybookBeachPlay(water, street);
  const boards = [1, 2].map(index => beach.root.getObjectByName(`beach-surfboard-${index}`));
  const sample = (time, reduceMotion = false) => {
    beach.update(time, {activity:'morning', transientTelemetry:true, reduceMotion});
    return boards.map(({position, rotation}) => [position.toArray(), rotation.toArray()]);
  };
  const initial = sample(0);
  for (let second = 1; second <= 44; second++) {
    const frame = sample(second);
    for (const [[x, y, z]] of frame) {
      const shore = water.shoreline.findIndex(point => point.x > x);
      const left = water.shoreline[shore - 1];
      const right = water.shoreline[shore];
      const shoreZ = THREE.MathUtils.lerp(left.z, right.z, (x - left.x) / (right.x - left.x));
      assert.ok(shoreZ - z > 27 && shoreZ - z < 77);
      assert.ok(Math.abs(y - water.y) < .9);
    }
    assert.ok(frame[1][0][0] - frame[0][0][0] > 50);
  }
  assert.notDeepEqual(sample(4), initial);
  assert.deepEqual(sample(0), initial);
  assert.deepEqual(sample(2, true), sample(28, true));
  beach.dispose();
});

test('bonfire sparks and seated figures animate deterministically on dry sand', () => {
  const beach = createStorybookBeachPlay(water, street);
  const flames = beach.root.getObjectByName('beach-bonfire-flames');
  const camp = beach.root.getObjectByName('beach-firepit-1');
  const people = beach.root.getObjectByName('beach-bonfire-figures');
  const glows = beach.root.getObjectByName('beach-bonfire-sand-glow');
  assert.deepEqual(camp.position.toArray(), [layout.court.x, layout.court.y, layout.court.z]);
  const matrix = new THREE.Matrix4();
  function sample(time, reduceMotion = false) {
    beach.update(time, {activity:'evening', transientTelemetry:true, reduceMotion});
    const result = [glows.material.uniforms.warmth.value];
    for (const mesh of [flames, people]) {
      for (let index = 0; index < mesh.count; index++) {
        mesh.getMatrixAt(index, matrix);
        assert.ok(matrix.elements.every(Number.isFinite));
        result.push(...matrix.elements);
      }
    }
    return result;
  }
  const initial = sample(0);
  assert.notDeepEqual(sample(1), initial);
  assert.deepEqual(sample(0), initial);
  assert.deepEqual(sample(1, true), sample(300, true));
  beach.dispose();
});
