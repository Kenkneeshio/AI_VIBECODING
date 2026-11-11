import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {createStorybookPeople} from '../ha-local/storybook-people.mjs';

function setup(floorAt, geometry) {
  const scene = new THREE.Scene();
  const people = createStorybookPeople(scene, floorAt, geometry);
  const report = (x, y, time, options) => people.setTracks([{id: 'radar:1', x, y}], time, options);
  const avatar = () => scene.getObjectByName('radar-avatar-papa');
  return {people, report, avatar};
}

test('a track snaps to the reported point across a narrow unsupported gap', () => {
  const gapStart = 40.17;
  const gapEnd = 40.19;
  const floorAt = x => x <= gapStart || x >= gapEnd ? 0 : null;
  const supportsRoute = (fromX, _fromZ, toX) =>
    Math.max(fromX, toX) <= gapStart || Math.min(fromX, toX) >= gapEnd;
  const {people, report, avatar} = setup(floorAt, {supportsRoute});
  report(20, 30, 1);
  report(60, 30, 2);
  assert.deepEqual(avatar().position.toArray(), [60, 0, 30]);
  people.render(2.1);
  assert.deepEqual(avatar().position.toArray(), [60, 0, 30]);
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

test('a frame that loses floor support snaps to the reported destination immediately', () => {
  let supportChanged = false;
  const floorAt = x => !supportChanged || x <= 40 || x >= 55 ? 0 : null;
  const {people, report, avatar} = setup(floorAt, {supportsRoute: () => true});
  report(20, 30, 1);
  report(80, 30, 2);
  supportChanged = true;
  people.render(2.16);
  assert.equal(avatar().visible, true);
  assert.deepEqual(avatar().position.toArray(), [80, 0, 30]);
  people.render(2.2);
  assert.deepEqual(avatar().position.toArray(), [80, 0, 30]);
});

test('the model fits at a measured edge point and an off-floor report clears it', () => {
  const floorAt = (x, z) => x >= 0 && x <= 200 && z >= 0 && z <= 200 ? 0 : null;
  const floorClearance = (x, z) => Math.min(x, z, 200 - x, 200 - z);
  const {people, report, avatar} = setup(floorAt, {floorClearance});
  report(70, 40, 1);
  assert.equal(avatar().scale.x, 1);
  report(4, 40, 2);
  assert.deepEqual(avatar().position.toArray(), [4, 0, 40]);
  assert.ok(avatar().scale.x > 0 && avatar().scale.x < 1);
  const bounds = new THREE.Box3().setFromObject(avatar());
  assert.ok(bounds.min.x >= 0, 'the avatar, shadow and ground ring stay on the supported side');
  report(-1, 40, 3);
  assert.equal(avatar().visible, false);
  assert.equal(people.hasVisibleTracks, false);
});
