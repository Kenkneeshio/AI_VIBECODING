import assert from 'node:assert/strict';
import test from 'node:test';
import {bindStorybookDisplaySettings, DISPLAY_SETTINGS_KEY, normalizeStorybookDisplaySettings,
  storybookDisplaySceneSettings} from '../ha-local/storybook-display-settings.mjs';

test('display settings allow only known browser overrides and preserve the authored layout', () => {
  const base = {boats:false, wind:false, dockAlignment:'left'};
  const settings = normalizeStorybookDisplaySettings({
    features:{boats:true, sky:false, wind:'false', unknown:true},
    dockAlignment:'center', headlightBrightness:8, heatMapOpacity:.02, showAvatars:false,
    frameRate:15, renderScale:0, shadowQuality:'unknown',
  });
  assert.deepEqual(settings, {features:{sky:false, boats:true}, dockAlignment:'center',
    headlightBrightness:1.6, heatMapOpacity:.25, showAvatars:false, seatedPoses:true,
    frameRate:24, renderScale:1, shadowQuality:'high'});
  assert.deepEqual(storybookDisplaySceneSettings(base, settings),
    {boats:true, wind:false, sky:false, dockAlignment:'center'});
  assert.deepEqual(base, {boats:false, wind:false, dockAlignment:'left'});
  assert.deepEqual(storybookDisplaySceneSettings(base, normalizeStorybookDisplaySettings()), base);
});

class Control extends EventTarget {
  constructor() { super(); this.value = ''; this.checked = false; }
  get valueAsNumber() { return this.value === '' ? NaN : Number(this.value); }
  emit(type) { this.dispatchEvent(new Event(type)); }
}

test('the display dialog restores preferences, saves edits locally, and resets without a device request', () => {
  const host = new EventTarget();
  const local = new Map([[DISPLAY_SETTINGS_KEY, JSON.stringify({features:{sky:false}, seatedPoses:false})]]);
  host.localStorage = {
    getItem: key => local.get(key) ?? null,
    setItem: (key, value) => local.set(key, value),
    removeItem: key => local.delete(key),
  };
  const controls = Object.fromEntries(['dock','avatars','seats','headlight','heat','headlight-value','heat-value','close','reset',
    'frame-rate','render-scale','shadow-quality','tablet-performance','graphics-status']
    .map(key => [key, new Control()]));
  const toggle = new Control();
  const sky = Object.assign(new Control(), {dataset:{displayFeature:'sky'}});
  const dialog = {
    open:false,
    querySelectorAll: () => [sky],
    querySelector: selector => controls[selector.slice('[data-display-'.length,-1)],
    showModal() { this.open = true; },
    close() { this.open = false; },
  };
  const changes = [];
  const card = {
    shadowRoot: {querySelector: selector => selector === '.display-settings-dialog' ? dialog : toggle},
    setMainMenu(open, focus) { assert.equal(open, false); assert.equal(focus, true); },
  };
  const settings = bindStorybookDisplaySettings(card, value => changes.push(value), host);
  settings.connect();
  toggle.emit('click');
  assert.equal(dialog.open, true);
  assert.equal(sky.value, 'hide');
  assert.equal(controls.seats.checked, false);
  assert.equal(controls['frame-rate'].value, '24');
  assert.equal(controls['render-scale'].value, '1');
  assert.equal(controls['shadow-quality'].value, 'high');
  sky.value = 'show';
  sky.emit('change');
  controls.dock.value = 'left';
  controls.dock.emit('change');
  controls.headlight.value = '1.25';
  controls.headlight.emit('input');
  controls.heat.value = '0.5';
  controls.heat.emit('input');
  controls.avatars.checked = false;
  controls.avatars.emit('change');
  assert.equal(controls.seats.disabled, true);
  assert.equal(controls['headlight-value'].value, '125%');
  assert.equal(controls['heat-value'].value, '50%');
  controls['tablet-performance'].emit('click');
  assert.equal(controls['frame-rate'].value, '20');
  assert.equal(controls['render-scale'].value, '0.67');
  assert.equal(controls['shadow-quality'].value, 'off');
  assert.equal(controls['graphics-status'].textContent, 'Tablet performance applied.');
  controls['frame-rate'].value = '12';
  controls['frame-rate'].emit('change');
  controls['shadow-quality'].value = 'low';
  controls['shadow-quality'].emit('change');
  const saved = JSON.parse(local.get(DISPLAY_SETTINGS_KEY));
  assert.deepEqual(saved, changes.at(-1));
  assert.deepEqual(saved, {features:{sky:true}, headlightBrightness:1.25, heatMapOpacity:.5,
    showAvatars:false, seatedPoses:false, dockAlignment:'left', frameRate:12, renderScale:.67, shadowQuality:'low'});
  controls.reset.emit('click');
  assert.equal(local.has(DISPLAY_SETTINGS_KEY), false);
  assert.equal(sky.value, 'layout');
  assert.deepEqual(settings.value, normalizeStorybookDisplaySettings());
  const storageEvent = Object.assign(new Event('storage'),
    {key:DISPLAY_SETTINGS_KEY, newValue:JSON.stringify({features:{sky:false}, frameRate:60, renderScale:.5, shadowQuality:'off'})});
  host.dispatchEvent(storageEvent);
  assert.equal(sky.value, 'hide');
  assert.equal(controls['frame-rate'].value, '60');
  assert.equal(controls['render-scale'].value, '0.5');
  assert.equal(controls['shadow-quality'].value, 'off');
  settings.disconnect();
  assert.equal(dialog.open, false);
});
