import assert from 'node:assert/strict';
import test from 'node:test';
import {storybookCameraTileSize} from '../ha-local/storybook-camera.mjs';
import {sceneDockAlignment, sceneFeatureEnabled, sceneFeatures, sceneWind,
  validSceneSettings} from '../ha-local/storybook-scene-settings.mjs';
import {studioWeatherPreview} from '../ha-local/storybook-studio-look.mjs';

test('legacy layouts display every feature and keep the Home menu on the right', () => {
  assert.equal(validSceneSettings(undefined), true);
  assert.ok(sceneFeatures.every(({key}) => sceneFeatureEnabled(undefined, key)));
  assert.equal(sceneDockAlignment(), 'right');
  assert.equal(validSceneSettings({wind: false, trees: false, dockAlignment: 'left'}), true);
  for (const input of [null, [], {boats: 'false'}, {dockAlignment: 'top'}, {liveState: true}]) {
    assert.equal(validSceneSettings(input), false);
  }
});

test('scene settings can be replayed and reset without injecting data into legacy projects', () => {
  const {withFeature} = globalThis.RoomcraftSceneSettings;
  const first = Object.freeze({sky: false, dockAlignment: 'center'});
  const second = withFeature(first, 'traffic', false);
  assert.deepEqual(second, {sky: false, dockAlignment: 'center', traffic: false});
  assert.equal(withFeature(second, 'dockAlignment', 'elsewhere'), second);
  assert.equal(withFeature(second, 'traffic', false), second);
  assert.equal(sceneFeatureEnabled(second, 'traffic'), false);
  const defaults = withFeature(withFeature(withFeature(second, 'traffic', true),
    'dockAlignment', 'right'), 'sky', true);
  assert.equal(defaults, undefined);
  assert.deepEqual(first, {sky: false, dockAlignment: 'center'});
});

test('turning off directional wind preserves the weather, day and traffic data', () => {
  const environment = Object.freeze({condition: 'rainy', night: false, windSpeed: 12, windBearing: 270,
    traffic: {severity: 'slow', speedFactor: .7}});
  assert.equal(sceneWind(environment), environment);
  assert.deepEqual(sceneWind(environment, {wind: false}), {...environment, windSpeed: 0, windBearing: undefined});
});

test('custom Studio weather covers daylight, wind and lunar phase without a live sensor', () => {
  assert.deepEqual(studioWeatherPreview({condition: 'snowy', daylight: 'night', moonPhase: 'last_quarter',
    windSpeed: 10, windBearing: 90}), {
    condition: 'snowy', night: true, daylightKnown: true, sunElevation: -16, sunAzimuth: 290,
    traffic: {severity: 'ambient'}, moonPhase: 'last_quarter', windSpeed: 10, windBearing: 90,
    beachActivity: 'evening',
  });
  assert.equal(studioWeatherPreview({condition: 'clear-night', daylight: 'day'}).night, true);
  assert.equal(studioWeatherPreview({condition: 'sunny', daylight: 'morning'}).beachActivity, 'morning');
  assert.equal(studioWeatherPreview({condition: 'clear-night', daylight: 'overnight'}).beachActivity, 'overnight');
});

test('authored camera frame dimensions change the shared tile while bounds preserve tap access', () => {
  assert.deepEqual(storybookCameraTileSize({w: 170, h: 110}, 1536), {w: 116, h: 75});
  assert.deepEqual(storybookCameraTileSize({w: 220, h: 130}, 1536), {w: 150, h: 88});
  assert.deepEqual(storybookCameraTileSize({w: 40, h: 40}, 390), {w: 58, h: 44});
  assert.deepEqual(storybookCameraTileSize({w: 900, h: 900}, 1920), {w: 216, h: 152});
});
