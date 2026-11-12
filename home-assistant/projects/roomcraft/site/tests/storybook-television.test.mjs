import assert from 'node:assert/strict';
import {test} from 'node:test';
import {Box3} from 'three';
import {makeStorybookFurniture} from '../ha-local/storybook-furniture.mjs';
import {televisionLabel} from '../ha-local/storybook-television.mjs';

test('the existing television stays dark until its normalized power is active', () => {
  const model = makeStorybookFurniture({type:'tv', w:52, h:145});
  const screen = model.root.getObjectByName('storybook-tv-screen');
  const spill = model.root.getObjectByName('storybook-tv-spill');
  const panel = () => [screen.material.color.getHexString(), spill.visible];
  assert.deepEqual(panel(), ['08090c', false]);
  for (const state of ['on', 'playing', 'paused']) {
    model.animate({state, active:true}, 2.54);
    assert.deepEqual(panel(), ['ffffff', true]);
  }
  for (const state of ['off', 'standby', 'unavailable', 'unknown']) {
    model.animate({state, active:false}, 3.54);
    assert.deepEqual(panel(), ['08090c', false]);
  }
  model.animate({state:'on'}, 7);
  assert.deepEqual(panel(), ['08090c', false]);
  assert.ok(model.root.children.some(part => part.castShadow));
});

test('screen and overhead reflection stay inside the cabinet and replay the same clock sample', () => {
  const w = 52, h = 145;
  const model = makeStorybookFurniture({type:'tv', w, h});
  const screen = model.root.getObjectByName('storybook-tv-screen');
  const spill = model.root.getObjectByName('storybook-tv-spill');
  const time = spill.material.uniforms.screenTime;
  const bounds = new Box3().setFromObject(model.root);
  assert.ok(Math.abs(bounds.min.x + w / 2) < 1e-5);
  assert.ok(Math.abs(bounds.max.z - h / 2) < 1e-5);
  const on = {active:true, attributes:{media_title:'  Example  show ', source:'HDMI 1'}};
  model.animate(on, 2.015);
  assert.equal(time.value, 2);
  assert.equal(screen.userData.title, 'Example show');
  model.animate(on, 3);
  assert.equal(time.value, 3);
  model.animate(on, 2.015);
  assert.equal(time.value, 2);
  model.animate(on, 0);
  assert.equal(time.value, 0);
  model.animate({active:false}, 0);
  assert.equal(screen.userData.title, '');
});

test('display text falls back to reported app, input, or power', () => {
  assert.equal(televisionLabel({app_name:'Example app', source:'HDMI 1'}), 'Example app');
  assert.equal(televisionLabel({source:'HDMI 1'}), 'HDMI 1');
  assert.equal(televisionLabel({}), 'TV on');
});
