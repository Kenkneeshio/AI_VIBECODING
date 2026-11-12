import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {createStorybookPeople} from '../ha-local/storybook-people.mjs';
import {compileStorybookSeats} from '../ha-local/storybook-seating.mjs';
import {createStorybookPersonSignal} from '../ha-local/storybook-person-motion.mjs';
import {compileStorybookInteractions} from '../ha-local/storybook-person-interactions.mjs';

function setup(floorAt, geometry) {
  const scene = new THREE.Scene();
  const people = createStorybookPeople(scene, floorAt, geometry);
  const report = (x, y, time, options, expiresAt) => people.setTracks([{id: 'radar:1', x, y, expiresAt}], time, options);
  const avatar = () => scene.getObjectByName('radar-avatar-papa');
  const ring = () => scene.getObjectByName('radar-track-mark');
  return {people, report, avatar, ring};
}

test('a track holds at the last reachable point across a disconnected gap', () => {
  const gapStart = 40.17;
  const gapEnd = 40.19;
  const floorAt = (x, z) => z >= 0 && z <= 100 && (x <= gapStart || x >= gapEnd) ? 0 : null;
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
  people.render(2.5);
  assert.deepEqual(avatar().position.toArray(), [20, 0, 30]);
  assert.equal(avatar().visible, true);
});

test('interpolation follows a supported segment and keeps the reported destination', () => {
  const floorAt = x => x >= 0 && x <= 200 ? 8 : null;
  const supportsRoute = (fromX, _fromZ, toX) => Math.min(fromX, toX) >= 0 && Math.max(fromX, toX) <= 200;
  const {people, report, avatar} = setup(floorAt, {supportsRoute});
  report(20, 30, 1);
  report(60, 50, 2);
  people.render(2.16);
  assert.ok(Math.abs(avatar().position.distanceTo(new THREE.Vector3(20, 8, 30)) - 18.4) < 1e-8);
  people.render(2.4);
  assert.deepEqual(avatar().position.toArray(), [60, 8, 50]);
});

test('changed geometry invalidates the active path and leaves the actor at a supported point', () => {
  let supportChanged = false;
  const floorAt = (x, z) => z >= 0 && z <= 100 && (!supportChanged || x <= 40 || x >= 55) ? 0 : null;
  const supportsRoute = (fromX, _fromZ, toX) => !supportChanged || Math.max(fromX,toX) <= 40 || Math.min(fromX,toX) >= 55;
  const {people, report, avatar} = setup(floorAt, {supportsRoute, geometryRevision:() => supportChanged});
  report(20, 30, 1);
  report(80, 30, 2);
  supportChanged = true;
  people.render(2.16);
  people.render(2.5);
  assert.equal(avatar().visible, true);
  assert.deepEqual(avatar().position.toArray(), [20, 0, 30]);
});

test('an edge measurement keeps the raw ring and projects the full-size body to safe floor', () => {
  const floorAt = (x, z) => x >= 0 && x <= 200 && z >= 0 && z <= 200 ? 0 : null;
  const floorClearance = (x, z) => Math.min(x, z, 200 - x, 200 - z);
  const {people, report, avatar, ring} = setup(floorAt, {floorClearance});
  report(70, 40, 1);
  assert.equal(avatar().scale.x, 1);
  report(4, 40, 2, {reduceMotion:true});
  assert.equal(avatar().visible, true);
  assert.ok(avatar().position.x >= 20);
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

test('seating needs three seconds of fresh observations and blends from a safe approach', () => {
  const {people, report, avatar, ring} = setup(() => 0, {seats:[cushion]});
  report(60, 65, 1, undefined, 1000);
  report(60, 65, 2.2, undefined, 1000);
  report(61, 65, 2.3, undefined, 2300);
  report(59, 65, 3.6, undefined, 3600);
  assert.equal(poseOf(avatar()).userData.pose, 'standing');
  report(61, 65, 4, undefined, 4000);
  assert.equal(poseOf(avatar()).position.y, 0);
  people.render(4.21);
  const rising = poseOf(avatar()).getWorldPosition(new THREE.Vector3());
  assert.ok(rising.y > 4 && rising.y < 24);
  people.render(4.8);
  const seated = poseOf(avatar()).getWorldPosition(new THREE.Vector3());
  assert.equal(poseOf(avatar()).userData.pose, 'lounge');
  assert.equal(seated.x, cushion.x);
  assert.equal(seated.z, cushion.z);
  assert.equal(avatar().scale.x, 1);
  assert.equal(poseOf(avatar()).scale.x, 1);
  assert.deepEqual(ring().position.toArray(), [61,.26,65]);
  report(105, 67, 5, undefined, 5000);
  people.render(5.5);
  people.render(6.1);
  assert.equal(poseOf(avatar()).userData.pose, 'standing');
  assert.ok(Math.abs(avatar().position.x - 105) < 1);
});

test('a moving avatar detours around a cabinet while the radar ring stays at the observation', () => {
  const intersects = (x, z, radius) => Math.hypot(x-125, z-100) < 24 + radius;
  const {people, report, avatar, ring} = setup(() => 0, {
    allowsBodyPoint: (x,z,radius) => !intersects(x,z,radius),
    allowsBodyRoute: (x,z,toX,toZ,radius) => {
      const dx = toX-x, dz = toZ-z;
      const t = dx || dz ? Math.max(0, Math.min(1, ((125-x)*dx + (100-z)*dz)/(dx*dx + dz*dz))) : 0;
      return !intersects(x + t*dx,z + t*dz,radius);
    },
  });
  report(65, 100, 1, undefined, 1000);
  report(187, 100, 2, undefined, 2000);
  assert.equal(ring().position.x, 187);
  let widestDetour = 0;
  for (let time = 2; time <= 4; time += .025) {
    people.render(time);
    assert.equal(avatar().visible, true);
    const {x,z} = avatar().position;
    assert.equal(intersects(x,z,20), false);
    widestDetour = Math.max(widestDetour, Math.abs(z-100));
  }
  assert.ok(widestDetour > 42, `detour reached ${widestDetour}`);
  assert.ok(Math.abs(avatar().position.x - 187) < 1);
  assert.equal(avatar().scale.x, 1);
});

test('an occupied avatar stays visible on the reachable side of a barrier', () => {
  const scene = new THREE.Scene();
  const cues = new THREE.Scene();
  const blocks = (fromX, toX, radius) => Math.max(fromX,toX) + radius >= 58 &&
    Math.min(fromX,toX) - radius <= 72;
  const people = createStorybookPeople(scene, (_x,z) => z >= 0 && z <= 100 ? 0 : null, {occlusionScene:cues,
    allowsBodyPoint: (x, _z, radius) => !blocks(x, x, radius),
    allowsBodyRoute: (x, _z, toX, _toZ, radius) => !blocks(x, toX, radius),
  });
  const report = (x, time) => people.setTracks([{id:'radar:1', x, y:40, expiresAt:time * 1000,
    keepVisible:true, fallback:{x:30, y:40}}], time);
  report(30, 1);
  const avatar = scene.getObjectByName('radar-avatar-papa');
  const cue = cues.getObjectByName('radar-occlusion-cue');
  assert.equal(cue.material.depthFunc, THREE.GreaterDepth);
  assert.equal(cue.material.depthWrite, false);
  for (const [x, time] of [[69,2], [102,3], [105,3.4]]) {
    report(x, time);
    assert.equal(avatar.visible, true);
    assert.ok(avatar.position.x < 38);
    assert.equal(cue.visible, true);
  }
  people.render(3.7);
  assert.equal(avatar.visible, true);
  assert.ok(avatar.position.x < 38);
  people.setTracks([], 4);
  assert.equal(avatar.visible, false);
  assert.equal(cue.visible, false);
});

test('the assigned cushion permits a seated body, while narrow seats and neighboring solids do not', () => {
  const inside = (x,z) => Math.hypot(x-70,z-60) < 35;
  const geometry = {
    allowsBodyPoint: (x, z, _radius, except) => except === 'sofa' || !inside(x,z),
    allowsBodyRoute: (x, z, tx, tz, _radius, except) => except === 'sofa' || (!inside(x,z) && !inside(tx,tz)),
  };
  for (const [seat, extra, visible] of [
    [cushion, {}, true],
    [{...cushion, width:19}, {}, false],
    [cushion, {supportsRoute: () => false}, false],
  ]) {
    const {report, avatar, ring} = setup(() => 0, {...geometry, ...extra, seats:[seat]});
    for (const time of [1, 2, 3, 4]) report(62, 65, time, {reduceMotion:true}, time*1000);
    assert.equal(avatar().visible, true);
    assert.equal(ring().position.x, 62);
    assert.equal(avatar().scale.x, 1);
    assert.equal(poseOf(avatar()).scale.x, 1);
    const pose = poseOf(avatar());
    assert.equal(pose.userData.pose, visible ? 'lounge' : 'standing');
    if (visible) {
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
  for (const time of [1,2,3,4]) blocked.report(47, 40, time, undefined, time*1000);
  blocked.people.render(4.8);
  assert.equal(poseOf(blocked.avatar()).userData.pose, 'standing');
  const passing = setup(() => 0, {seats:[seat]});
  for (const [x, time] of [[43,1],[58,1.6],[73,2.2],[92,2.8],[110,3.4],[128,4]]) {
    passing.report(x, 42, time, undefined, time * 1000);
    passing.people.render(time + .4);
    assert.equal(poseOf(passing.avatar()).userData.pose, 'standing');
  }
});

test('two characters cannot share a cushion and reduced motion keeps the desk pose still', () => {
  const scene = new THREE.Scene();
  const people = createStorybookPeople(scene, () => 0, {seats:[{...cushion, pose:'desk'}]});
  for (const time of [1,2,3,4]) people.setTracks([
    {id:'radar:2', x:66, y:61, expiresAt:time*1000}, {id:'radar:1', x:65, y:60, expiresAt:time*1000},
  ], time, {reduceMotion:true});
  const papa = scene.getObjectByName('radar-avatar-papa');
  const mama = scene.getObjectByName('radar-avatar-mama');
  assert.equal(poseOf(papa).userData.pose, 'desk');
  assert.equal(poseOf(mama).userData.pose, 'standing');
  const transforms = () => poseOf(papa).children[0].children.map(child => child.rotation.toArray());
  const before = transforms();
  people.render(12, true);
  assert.deepEqual(transforms(), before);
  people.render(12.1, true, false);
  assert.equal(poseOf(papa).userData.pose, 'standing');
});

test('jitter and a single distant spike do not move the target or arm a pose', () => {
  const signal = createStorybookPersonSignal();
  const observe = (x, y, time, expiresAt = time * 1000) => signal.observe({x,y,expiresAt}, time);
  const initial = observe(100, 100, 1).target;
  for (const [x,y,time] of [[103,96,2],[96,104,3]]) {
    assert.deepEqual(observe(x,y,time), {target:initial, settled:false});
  }
  assert.deepEqual(observe(420,400,3.25), {target:initial, settled:false});
  assert.deepEqual(observe(100,99,8,3000), {target:initial, settled:false});
  assert.equal(observe(101,102,4).target, initial);
  observe(100,100,5);
  assert.equal(observe(100,100,6).settled, false);
  assert.equal(observe(100,100,7).settled, true);
  assert.equal(signal.observe({x:100,y:100,quality:'last-known'}, 12).settled, false);
});

test('a settled track can kneel at a play mat, then leaves the pose when movement resumes', () => {
  const placements = [{item:{id:'mat',type:'baby-mats-leaf-play-mat-slate',w:70,h:60},x:100,z:100,angle:0,baseY:0}];
  const roots = new Map([['mat',{root:{position:{y:0},scale:{y:1}}}]]);
  const {people, report, avatar} = setup(() => 0, {interactions:compileStorybookInteractions(placements, roots)});
  for (const time of [1,2,3]) report(100, 100, time, undefined, time*1000);
  people.render(3.9);
  assert.equal(poseOf(avatar()).userData.pose, 'standing');
  report(100, 100, 4, undefined, 4000);
  people.render(4.6);
  assert.notEqual(poseOf(avatar()).userData.pose, 'standing');
  report(180, 105, 5, undefined, 5000);
  people.render(5.6);
  assert.equal(poseOf(avatar()).userData.pose, 'standing');
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
