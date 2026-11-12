import assert from 'node:assert/strict';
import {test} from 'node:test';
import {lightCommand} from '../ha-local/storybook-light-panel.mjs';

const state = (mode, attrs, status = 'on') => ({
  state: status, attributes: {supported_color_modes: mode, ...attrs},
});
const studio = globalThis.RoomcraftLightCapabilities;

test('light capabilities follow advertised modes, Kelvin limits, and effects', () => {
  assert.deepEqual(studio.describe(state(['onoff']).attributes).labels, ['On/off']);
  const rgb = state(['hs', 'color_temp', 'white'], {
    min_color_temp_kelvin: 2700, max_color_temp_kelvin: 6500,
    effect_list: ['Breathe', '', 'Breathe'], supported_features: 44,
  });
  const advanced = studio.describe(rgb.attributes);
  assert.deepEqual(advanced.temperature, {min: 2700, max: 6500});
  assert.deepEqual(advanced.effects, ['Breathe']);
  assert.deepEqual(advanced.labels, ['On/off', 'Brightness', 'White temperature', 'Color', 'White mode',
    'Effects', 'Fade duration', 'Flash']);
});

test('light commands validate capability, range and availability before creating a service request', () => {
  const plain = state(['onoff']);
  assert.deepEqual(lightCommand(plain, 'power', undefined, '4'), {service: 'turn_off', data: {}});
  assert.equal(lightCommand(plain, 'brightness', '40'), null);
  assert.equal(lightCommand(plain, 'color', '#92a3b4'), null);
  assert.equal(lightCommand(state(['brightness'], {}, 'unavailable'), 'power'), null);
  assert.equal(lightCommand(state(['brightness']), 'brightness', ''), null);
  assert.deepEqual(lightCommand(state(['brightness'], {}, 'off'), 'brightness', '35.7'),
    {service: 'turn_on', data: {brightness_pct: 36}});
  const advanced = state(['rgbw', 'white', 'color_temp'], {
    brightness: 112, min_color_temp_kelvin: 2500, max_color_temp_kelvin: 5300,
    effect_list: ['Breathe'], supported_features: 44,
  });
  assert.deepEqual(lightCommand(advanced, 'temperature', '9900', '4.5'),
    {service: 'turn_on', data: {color_temp_kelvin: 5300, transition: 4.5}});
  assert.deepEqual(lightCommand(advanced, 'color', '#20c0ff'),
    {service: 'turn_on', data: {rgb_color: [32, 192, 255]}});
  assert.deepEqual(lightCommand(advanced, 'white'), {service: 'turn_on', data: {white: 112}});
  assert.equal(lightCommand(advanced, 'effects', 'Unexpected'), null);
  assert.deepEqual(lightCommand(advanced, 'effects', 'Breathe'), {service: 'turn_on', data: {effect: 'Breathe'}});
  assert.deepEqual(lightCommand(advanced, 'short', undefined, 3), {service: 'turn_on', data: {flash: 'short'}});
});
