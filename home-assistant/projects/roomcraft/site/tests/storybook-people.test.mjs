import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {createStorybookPeople} from '../ha-local/storybook-people.mjs';
import {compileStorybookSeats} from '../ha-local/storybook-seating.mjs';

function setup(floorAt, geometry) {
  const scene = new THREE.Scene();
  const people = createStorybookPeople(scene, floorAt, geometry);
  const report = (x, y, time, options, expiresAt) => people.setTracks([{id: 'radar:1', x, y, expiresAt}], time, options);
  const avatar = () => scene.getObjectByName('radar-avatar-papa');
  const ring = () => scene.getObjectByName('radar-track-mark');
  return {people, report, avatar, ring};
}

test('a track holds across an unsupported gap and reacquires only after a distinct report and hidden interval', () => {
  const gapStart = 40.17;
  const gapEnd = 40.19;
  const floorAt = x => x <= gapStart || x >= gapEnd ? 0 : null;
  const supportsRoute = (fromX, _fromZ, toX) =>
    Math.max(fromX, toX) <= gapStart || Math.min(fromX, toX) >= gapEnd;
  const {people, report, avatar} = setup(floorAt, {supportsRoute});
  report(20, 30, 1);
  report(60, 30, 2);
  assert.deepEqual(avatar().position.toArray(), [20, 0, 30]);
  report(60, 30, 2.1);
  people.render(2.1);
  assert.deepEqual(avatar().position.toArray(), [20, 0, 30]);
  report(63, 30, 2.2);
  assert.equal(avatar().visible, false);
  people.render(2.5);
  assert.deepEqual(avatar().position.toArray(), [63, 0, 30]);
  assert.equal(avatar().visible, true);
});

test('interpolation follows a supported segment and keeps the reported destination', () => {
  const floorAt = x => x >= 0 && x <= 200 ? 8 : null;
  const supportsRoute = (fromX, _fromZ, toX) => Math.min(fromX, toX) >= 0 && Math.max(fromX, toX) <= 200;
  const {people, report, avatar} = setup(floorAt, {supportsRoute});
  report(20, 30, 1);
  report(60, 50, 2);
  people.render(2.16);
  assert.ok(avatar().position.distanceTo(new THREE.Vector3(40, 8, 40)) < 1e-8);
  people.render(2.4);
  assert.deepEqual(avatar().position.toArray(), [60, 8, 50]);
});

test('a frame that loses floor support hides before reacquiring the destination', () => {
  let supportChanged = false;
  const floorAt = x => !supportChanged || x <= 40 || x >= 55 ? 0 : null;
  const {people, report, avatar} = setup(floorAt, {supportsRoute: () => true});
  report(20, 30, 1);
  report(80, 30, 2);
  supportChanged = true;
  people.render(2.16);
  assert.equal(avatar().visible, false);
  people.render(2.2);
  assert.equal(avatar().visible, false);
  people.render(2.5);
  assert.equal(avatar().visible, true);
  assert.deepEqual(avatar().position.toArray(), [80, 0, 30]);
});

test('an edge measurement keeps the radar ring at its location and hides the full-size body', () => {
  const floorAt = (x, z) => x >= 0 && x <= 200 && z >= 0 && z <= 200 ? 0 : null;
  const floorClearance = (x, z) => Math.min(x, z, 200 - x, 200 - z);
  const {people, report, avatar, ring} = setup(floorAt, {floorClearance});
  report(70, 40, 1);
  assert.equal(avatar().scale.x, 1);
  report(4, 40, 2, {reduceMotion:true});
  assert.equal(avatar().visible, false);
  assert.equal(avatar().scale.x, 1);
  assert.equal(ring().visible, true);
  assert.deepEqual(ring().position.toArray(), [4, .26, 40]);
  assert.ok(new THREE.Box3().setFromObject(ring()).min.x >= -1e-7);
  assert.equal(people.hasVisibleTracks, true);
  report(-1, 40, 3);
  assert.equal(avatar().visible, false);
  assert.equal(ring().visible, false);
  assert.equal(people.hasVisibleTracks, false);
});

const cushion = {id:'sofa:0', itemId:'sofa', x:70, z:60, y:37, heading:0, forwardX:0, forwardZ:1,
  pose:'lounge', reach:32, behind:16, width:42, depth:34};
const poseOf = avatar => avatar.getObjectByName('radar-avatar-pose');

test('seating needs distinct settled reports and blends the body while the radar marker stays calibrated', () => {
  const {people, report, avatar} = setup(() => 0, {seats:[cushion]});
  report(60, 65, 1, undefined, 1000);
  report(60, 65, 2.2, undefined, 1000);
  assert.equal(poseOf(avatar()).userData.pose, 'standing');
  report(61, 65, 2.3, undefined, 2300);
  assert.equal(poseOf(avatar()).position.y, 0);
  people.render(2.51);
  const rising = poseOf(avatar()).getWorldPosition(new THREE.Vector3());
  assert.ok(rising.y > 4 && rising.y < 24);
  people.render(2.8);
  const seated = poseOf(avatar()).getWorldPosition(new THREE.Vector3());
  assert.equal(poseOf(avatar()).userData.pose, 'lounge');
  assert.equal(seated.x, cushion.x);
  assert.equal(seated.z, cushion.z);
  assert.equal(avatar().scale.x, 1);
  assert.equal(poseOf(avatar()).scale.x, 1);
  assert.deepEqual(avatar().position.toArray(), [61,0,65]);
  report(105, 67, 3, undefined, 3000);
  people.render(3.45);
  assert.equal(poseOf(avatar()).userData.pose, 'standing');
  assert.deepEqual(avatar().position.toArray(), [105,0,67]);
});

test('solid furniture stops the body while the radar ring follows every measured point', () => {
  const blocks = (fromX, toX, radius) => Math.max(fromX,toX) + radius >= 58 &&
    Math.min(fromX,toX) - radius <= 72;
  const {people, report, avatar, ring} = setup(() => 0, {
    allowsBodyPoint: (x, _z, radius) => !blocks(x, x, radius),
    allowsBodyRoute: (x, _z, toX, _toZ, radius) => !blocks(x, toX, radius),
  });
  report(30, 40, 1, undefined, 1000);
  report(70, 40, 2, undefined, 2000);
  assert.equal(avatar().visible, false);
  assert.equal(ring().position.x, 70);
  report(102, 40, 3, undefined, 3000);
  assert.equal(avatar().visible, false);
  assert.equal(ring().position.x, 102);
  report(105, 40, 3.4, undefined, 3400);
  people.render(3.52);
  assert.equal(avatar().visible, false);
  people.render(3.7);
  assert.equal(avatar().visible, true);
  assert.equal(avatar().position.x, 105);
  assert.equal(avatar().scale.x, 1);
});

test('the assigned cushion permits a seated body, while narrow seats and neighboring solids do not', () => {
  const geometry = {
    allowsBodyPoint: (_x, _z, _radius, except) => except === 'sofa',
    allowsBodyRoute: (_x, _z, _tx, _tz, _radius, except) => except === 'sofa',
  };
  for (const [seat, extra, visible] of [
    [cushion, {}, true],
    [{...cushion, width:19}, {}, false],
    [cushion, {allowsBodyRoute: () => false}, false],
  ]) {
    const {people, report, avatar, ring} = setup(() => 0, {...geometry, ...extra, seats:[seat]});
    report(62, 65, 1, undefined, 1000);
    assert.equal(avatar().visible, false);
    report(62, 65, 2.3, undefined, 2300);
    people.render(2.45);
    assert.equal(avatar().visible, visible);
    assert.equal(ring().position.x, 62);
    assert.equal(avatar().scale.x, 1);
    assert.equal(poseOf(avatar()).scale.x, 1);
    if (visible) {
      const pose = poseOf(avatar());
      assert.equal(pose.userData.pose, 'lounge');
      const position = pose.getWorldPosition(new THREE.Vector3());
      assert.equal(position.x, cushion.x);
      assert.equal(position.z, cushion.z);
    }
  }
});

test('a wall blocks a nearby cushion and a walk-by never accumulates seating evidence', () => {
  const seat = {...cushion, x:60, z:40};
  const route = (x, _z, endX) => Math.max(x, endX) < 50 || Math.min(x, endX) > 54;
  const blocked = setup(() => 0, {seats:[seat], supportsRoute:route});
  blocked.report(47, 40, 1, undefined, 1000);
  blocked.report(48, 41, 2.4, undefined, 2400);
  blocked.people.render(3);
  assert.equal(poseOf(blocked.avatar()).userData.pose, 'standing');
  const passing = setup(() => 0, {seats:[seat]});
  for (const [x, time] of [[43,1],[58,1.6],[73,2.2],[92,2.8]]) {
    passing.report(x, 42, time, undefined, time * 1000);
    passing.people.render(time + .4);
    assert.equal(poseOf(passing.avatar()).userData.pose, 'standing');
  }
});

test('two characters cannot share a cushion and reduced motion keeps the desk pose still', () => {
  const scene = new THREE.Scene();
  const people = createStorybookPeople(scene, () => 0, {seats:[{...cushion, pose:'desk'}]});
  for (const time of [1, 2.3]) people.setTracks([
    {id:'radar:2', x:66, y:61, expiresAt:time*1000}, {id:'radar:1', x:65, y:60, expiresAt:time*1000},
  ], time, {reduceMotion:true});
  const papa = scene.getObjectByName('radar-avatar-papa');
  const mama = scene.getObjectByName('radar-avatar-mama');
  assert.equal(poseOf(papa).userData.pose, 'desk');
  assert.equal(poseOf(mama).userData.pose, 'standing');
  const transforms = () => poseOf(papa).children[0].children.map(child => child.rotation.toArray());
  const before = transforms();
  people.render(3.5, true);
  assert.deepEqual(transforms(), before);
  people.render(3.6, true, false);
  assert.equal(poseOf(papa).userData.pose, 'standing');
});

test('seat anchors respect authored rotation, cushion variants, floor support and mesh height', () => {
  const placement = (id, type, w, h, x, z, angle = 0) => ({item:{id,type,w,h}, x,z,angle,baseY:0});
  const items = [
    placement('sofa','sofa',120,192,130,190),
    placement('dining','diningChair',34,26,200,120,Math.PI/2),
    placement('desk','desk',105,95,310,160),
    placement('chair','chair',34,36,310,116),
    placement('bench','bedroomBench',86,32,225,250),
    placement('off-floor','stool',38,38,470,460),
  ];
  const roots = new Map(items.map(({item}) => [item.id,{root:{position:{y:0},scale:{y:item.id==='dining' ? 1.5 : 1}}}]));
  const seats = compileStorybookSeats(items, roots, x => x < 400 ? 30 : 0);
  assert.equal(seats.filter(({pose}) => pose==='lounge').length, 4);
  assert.equal(seats.filter(({pose}) => pose==='bench').length, 2);
  assert.equal(seats.filter(({pose}) => pose==='desk').length, 1);
  const dining = seats.find(({pose}) => pose==='dining');
  assert.equal(dining.heading, -Math.PI / 2);
  assert.equal(dining.y, 45);
  assert.equal(seats.some(({id}) => id.startsWith('off-floor:')), false);
});
