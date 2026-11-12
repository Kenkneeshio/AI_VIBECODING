import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import {createStorybookLighting} from '../ha-local/storybook-lighting.mjs';
import {createStorybookSolarFade, storybookSolar} from '../ha-local/storybook-solar.mjs';

const sample = (elevation, azimuth, rising, weather = {}) => storybookSolar({
  sunElevation: elevation, sunAzimuth: azimuth, sunRising: rising, ...weather,
});

test('local sun bearings map to a north-up world and solar twilight survives below the horizon', () => {
  const dawn = sample(-6, 108, true);
  const dusk = sample(-6, 252, false);
  assert.equal(dawn.phase, 'sunrise');
  assert.equal(dusk.phase, 'sunset');
  assert.ok(dawn.east > .9 && dusk.east < -.9);
  assert.ok(dawn.north < 0 && dusk.north < 0);
  assert.equal(dawn.disc, 0);
  assert.ok(dawn.twilight > .5 && dawn.daylight < .2);
  assert.equal(sample(1, 108, true).disc, 1);
  assert.equal(sample(36, 172, true).phase, 'day');
  assert.equal(sample(-14, 252, false).twilight, 0);
  assert.equal(sample(-14, 252, false).phase, 'night');
  assert.equal(sample(2, 252, false, {cloudCoverage: 64}).cloud, .64);
  assert.ok(sample(2, 252, false, {condition: 'fog'}).cloud > .9);
  assert.equal(storybookSolar({night: true, sunElevation: Infinity}).phase, 'night');
});

test('measured sun updates fade along the shortest bearing and reduced motion snaps to the reading', () => {
  const fade = createStorybookSolarFade();
  const westOfNorth = sample(10, 358, true);
  const eastOfNorth = sample(14, 2, true, {cloudCoverage: 70});
  assert.equal(fade(westOfNorth, 100), westOfNorth);
  assert.equal(fade(eastOfNorth, 101).elevation, 10);
  const midpoint = fade(eastOfNorth, 101.4);
  assert.ok(Math.abs(midpoint.elevation - 12) < 1e-8);
  assert.ok(midpoint.north > .99 && Math.abs(midpoint.east) < 1e-8);
  assert.ok(Math.abs(midpoint.cloud - .35) < 1e-8);
  assert.equal(fade(eastOfNorth, 102), eastOfNorth);
  assert.equal(fade(westOfNorth, 103, true), westOfNorth);
});

test('realistic shadow direction and cloud attenuation preserve the state-driven indoor lights', () => {
  const renderer = {shadowMap: {}, capabilities: {maxTextureSize: 2048}};
  const scene = new THREE.Scene();
  scene.background = new THREE.Color();
  const ground = {color: new THREE.Color()};
  const lighting = createStorybookLighting(renderer, scene, {minX: 0, maxX: 1500, minZ: 0, maxZ: 850});
  const key = scene.children.find(node => node.isDirectionalLight && node.castShadow);
  const accent = scene.children.find(node => node.isPointLight);
  const object = {root: new THREE.Group(), anchorY: 26};
  lighting.register({id: 'lamp', type: 'tableLamp', entityId: 'light.fixture'}, object);
  const off = {lamp: {state: 'off'}};
  lighting.update({solar: sample(6, 108, true)}, off, ground);
  assert.ok(key.position.x > key.target.position.x);
  assert.ok(key.position.z > key.target.position.z);
  assert.ok(renderer.shadowMap.needsUpdate);
  assert.equal(accent.intensity, 0);
  renderer.shadowMap.needsUpdate = false;
  const sunset = sample(6, 252, false);
  lighting.update({solar: sunset}, off, ground);
  assert.ok(key.position.x < key.target.position.x);
  assert.ok(renderer.shadowMap.needsUpdate);
  const clearIntensity = key.intensity;
  renderer.shadowMap.needsUpdate = false;
  lighting.update({solar: sunset}, {lamp: {state: 'on'}}, ground);
  assert.ok(accent.intensity > 0);
  assert.equal(renderer.shadowMap.needsUpdate, false);
  lighting.update({solar: sample(6, 252, false, {condition: 'cloudy'})}, off, ground);
  assert.ok(key.intensity < clearIntensity);
  assert.equal(accent.intensity, 0);
  lighting.dispose();
});
