import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {createFloorSupport, createStorybookFurnitureCollision} from '../ha-local/storybook-floor-support.mjs';
import {compileStorybookInteractions, createStorybookInteractionProps, findStorybookInteraction,
  storybookInteractionPose, storybookSeatedActivity, storybookSeatedPose} from '../ha-local/storybook-person-interactions.mjs';

function placement(id, type, x = 150, z = 150, w = 60, h = 40, angle = 0) {
  return {item:{id,type,w,h}, x,z,angle,baseY:0};
}

function compile(...placements) {
  return compileStorybookInteractions(placements, new Map(placements.map(({item}) => [item.id,{}])));
}

function geometry(placements, holes = []) {
  const floor = createFloorSupport([[[[0,0],[300,0],[300,300],[0,300],[0,0]], ...holes]]);
  const furniture = createStorybookFurnitureCollision(placements);
  return {
    allowsPoint: (x,z,radius) => floor.clearance(x,z) >= radius && !furniture.blocksPoint(x,z,radius),
    allowsTarget: (x,z,endX,endZ,except) =>
      floor.supportsRoute(x,z,endX,endZ) && !furniture.blocksRoute(x,z,endX,endZ,0,except),
  };
}

test('catalog variants create distinct activities and omit hidden, missing and ground-level exterior models', () => {
  const variants = [
    ['pets-fish-aquarium-oak','watchFish'], ['pets-lizard-terrarium-walnut','watchGecko'],
    ['baby-activities-wooden-play-arch-oak','reachToy'], ['baby-toys-cloth-book-sky','readFloor'],
    ['baby-mats-leaf-play-mat-slate','floorPlay'], ['climbing-foam-wedge-rainbow','stack'],
    ['bedroom-corner-desk-oak','write'], ['bedroom-moon-bed-sky','makeBed'],
    ['balcony-herb-trio-sage','water'], ['fireplace-white-tile-mantel-white','warm'],
    ['kitchenWorktop','cook'], ['doubleVanity','wash'], ['tv','watch'],
  ];
  const placements = variants.map(([type]) => placement(type,type));
  const hidden = placement('hidden','desk');
  hidden.item.visualKind = 'none';
  const exterior = {...placement('exterior','tv'),baseY:-80};
  const anchors = compile(...placements,hidden,exterior);
  assert.deepEqual(new Map(anchors.map(({itemId,pose}) => [itemId,pose])), new Map(variants));
  assert.deepEqual(compileStorybookInteractions(placements,new Map()), []);
});

test('a rotated display selects a clear viewing side and rejects a wall or another obstruction', () => {
  const tv = placement('tv','tv',150,150,28,96,Math.PI/2);
  const approaches = compile(tv);
  const open = geometry([tv]);
  const front = findStorybookInteraction(approaches,{x:150,y:105},20,open);
  assert.equal(front.pose,'watch');
  assert.ok(Math.abs(front.heading) < .0001);
  assert.equal(front.z,103);
  assert.equal(open.allowsPoint(front.x,front.z,20),true);
  assert.equal(findStorybookInteraction(approaches,{x:150,y:193},20,open),undefined);
  assert.equal(findStorybookInteraction(approaches,{x:150,y:105},20,open,new Set(['tv'])),undefined);
  const wall = [[125,112],[175,112],[175,118],[125,118],[125,112]];
  assert.equal(findStorybookInteraction(approaches,{x:150,y:105},20,geometry([tv],[wall])),undefined);
  const dresser = placement('dresser','dresser',150,106,79,24);
  assert.equal(findStorybookInteraction(approaches,{x:150,y:94},20,geometry([tv,dresser])),undefined);
});

test('an observed point just inside an object can select an outside approach without crossing a second solid', () => {
  const kitchen = placement('stove','kitchenWorktop',150,150,78,55);
  const anchors = compile(kitchen);
  const radar = {x:150,y:172};
  const open = geometry([kitchen]);
  assert.equal(open.allowsPoint(radar.x,radar.y,20),false);
  const actor = findStorybookInteraction(anchors,radar,20,open);
  assert.equal(actor.pose,'cook');
  assert.ok(actor.z > 177.5);
  assert.equal(open.allowsPoint(actor.x,actor.z,20),true);
  assert.equal(findStorybookInteraction(anchors,{x:150,y:265},20,open),undefined);
});

test('tabletop interactions stand outside the supporting furniture and face the item', () => {
  const table = placement('table','diningTable',150,150,112,52,Math.PI/2);
  const plant = placement('plant','plant',157,155,28,28);
  const placements = [table,plant];
  const roots = new Map(placements.map(({item}) => [item.id,{}]));
  const supports = new Map([['plant',{supportId:'table'}]]);
  const anchors = compileStorybookInteractions(placements,roots,supports).filter(({itemId}) => itemId === 'plant');
  const surface = geometry(placements);
  const activity = findStorybookInteraction(anchors,{x:196,y:154},20,surface);
  assert.equal(activity.pose,'water');
  assert.ok(activity.x >= 197);
  assert.equal(surface.allowsPoint(activity.x,activity.z,20),true);
  assert.ok(Math.sin(activity.heading) < -.99);
  assert.ok(anchors.every(({obstacleId}) => obstacleId === 'table'));
});

test('activity rhythms are repeatable, use distinct transforms and stay static in reduced motion', () => {
  const names = ['cook','wash','watchFish','watchGecko','floorPlay','stack','read','desk','sip','dining'];
  const frames = names.map(pose => {
    const frame = storybookInteractionPose(pose,2.5);
    assert.deepEqual(frame,storybookInteractionPose(pose,2.5));
    assert.notDeepEqual(frame.hands,storybookInteractionPose(pose,.5).hands);
    assert.deepEqual(storybookInteractionPose(pose,2.5,true),storybookInteractionPose(pose,.5,true));
    return JSON.stringify(frame);
  });
  assert.equal(new Set(frames).size,names.length);
  assert.equal(storybookSeatedActivity({pose:'desk'},0),'desk');
  assert.equal(storybookSeatedActivity({pose:'desk'},8),'sketch');
  assert.equal(storybookSeatedActivity({pose:'lounge'},8),'read');
  assert.equal(storybookSeatedActivity({pose:'lounge'},23),'lounge');
  const lounge = {pose:'lounge'};
  assert.deepEqual(storybookSeatedPose(lounge,7),storybookInteractionPose('lounge',7));
  assert.equal(storybookSeatedPose(lounge,7.2).prop,undefined);
  assert.equal(storybookSeatedPose(lounge,7.4).prop,'book');
  assert.deepEqual(storybookSeatedPose(lounge,7.6),storybookInteractionPose('read',7.6));
  assert.deepEqual(storybookSeatedPose(lounge,8,true),storybookSeatedPose(lounge,2,true));
});

test('the held object rig reuses meshes and hides the previous held prop when an activity ends', () => {
  const props = createStorybookInteractionProps();
  const arms = [new THREE.Group(),new THREE.Group()];
  const show = props.attach(arms);
  show('book');
  const book = arms[1].getObjectByName('radar-held-book');
  assert.equal(book.visible,true);
  show('mug');
  const mug = arms[1].getObjectByName('radar-held-mug');
  assert.equal(book.visible,false);
  assert.equal(mug.visible,true);
  show();
  assert.equal(mug.visible,false);
  show('book');
  assert.equal(book.visible,true);
  assert.equal(arms[1].children.length,2);
  props.dispose();
});
