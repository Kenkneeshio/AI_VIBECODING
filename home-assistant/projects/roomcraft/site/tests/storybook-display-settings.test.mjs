import assert from 'node:assert/strict';
import test from 'node:test';
import {bindStorybookDisplaySettings, DISPLAY_SETTINGS_KEY, normalizeStorybookDisplaySettings,
  storybookDisplaySceneSettings} from '../ha-local/storybook-display-settings.mjs';

test('display settings allow only known browser overrides and preserve the authored layout', () => {
  const base = {boats:false, wind:false, dockAlignment:'left'};
  const settings = normalizeStorybookDisplaySettings({
    features:{boats:true, sky:false, wind:'false', unknown:true},
    dockAlignment:'center', headlightBrightness:8, heatMapOpacity:.02, showAvatars:false,
    frameRate:15, cameraFrameRate:'20', renderScale:0, shadowQuality:'unknown', showFps:1,
    limitOffscreenScenery:'true',
  });
  assert.deepEqual(settings, {features:{sky:false, boats:true}, dockAlignment:'center',
    headlightBrightness:1.6, heatMapOpacity:.25, showAvatars:false, seatedPoses:true,
    frameRate:24, cameraFrameRate:null, renderScale:1, shadowQuality:'high', showFps:false,
    limitOffscreenScenery:false, insaneGraphics:false});
  assert.deepEqual(storybookDisplaySceneSettings(base, settings),
    {boats:true, wind:false, sky:false, dockAlignment:'center'});
  assert.deepEqual(base, {boats:false, wind:false, dockAlignment:'left'});
  assert.deepEqual(storybookDisplaySceneSettings(base, normalizeStorybookDisplaySettings()), base);
});

class Control extends EventTarget {
  constructor() { super(); this.value = ''; this.checked = false; }
  get valueAsNumber() { return this.value === '' ? NaN : Number(this.value); }
  emit(type) { this.dispatchEvent(new Event(type)); }
  focus() {}
}

function bindFixture(preferences) {
  const host = new EventTarget();
  const local = new Map([[DISPLAY_SETTINGS_KEY, JSON.stringify(preferences)]]);
  const timers = new Map();
  let now = 0;
  let nextTimer = 0;
  const setTimer = (fn, delay) => {
    timers.set(++nextTimer, {fn, at:now + delay});
    return nextTimer;
  };
  host.setTimeout = setTimer;
  host.clearTimeout = timer => timers.delete(timer);
  host.setInterval = setTimer;
  host.clearInterval = host.clearTimeout;
  host.performance = {now: () => now};
  host.document = Object.assign(new EventTarget(), {hidden:false});
  host.localStorage = {
    getItem: key => local.get(key) ?? null,
    setItem: (key, value) => local.set(key, value),
    removeItem: key => local.delete(key),
  };
  const controls = Object.fromEntries(['dock','avatars','seats','headlight','heat','headlight-value','heat-value','close','reset',
    'frame-rate','camera-frame-rate','render-scale','shadow-quality','limit-offscreen','tablet-performance','graphics-status',
    'insane','keep','revert','countdown','preview-actions']
    .map(key => [key, new Control()]));
  const toggle = new Control();
  const sky = Object.assign(new Control(), {dataset:{displayFeature:'sky'}});
  const dialog = Object.assign(new EventTarget(), {
    open:false,
    querySelectorAll: () => [sky],
    querySelector: selector => controls[selector.slice('[data-display-'.length,-1)],
    toggleAttribute() {},
    showModal() { this.open = true; },
    close() { this.open = false; this.dispatchEvent(new Event('close')); },
  });
  const changes = [];
  const card = {
    shadowRoot: {querySelector: selector => selector === '.display-settings-dialog' ? dialog : toggle},
    setMainMenu(open, focus) { assert.equal(open, false); assert.equal(focus, true); },
  };
  const settings = bindStorybookDisplaySettings(card, value => changes.push(value), host);
  settings.connect();
  toggle.emit('click');
  return {host, local, controls, sky, dialog, changes, settings, toggle,
    advance(ms, dispatch = true) {
      now += ms;
      if (!dispatch) return;
      for (const [id, {fn, at}] of timers) {
        if (at > now) continue;
        timers.delete(id);
        fn();
      }
    },
  };
}

test('the display dialog restores preferences, saves edits locally, and resets without a device request', () => {
  const {host, local, controls, sky, dialog, changes, settings} =
    bindFixture({features:{sky:false}, seatedPoses:false});
  assert.equal(dialog.open, true);
  assert.equal(sky.value, 'hide');
  assert.equal(controls.seats.checked, false);
  assert.equal(controls['frame-rate'].value, '24');
  assert.equal(controls['camera-frame-rate'].value, '');
  assert.equal(controls['render-scale'].value, '1');
  assert.equal(controls['shadow-quality'].value, 'high');
  assert.equal(controls['limit-offscreen'].checked, false);
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
  controls['camera-frame-rate'].value = '12';
  controls['camera-frame-rate'].emit('change');
  controls['limit-offscreen'].checked = true;
  controls['limit-offscreen'].emit('change');
  settings.setShowFps(true);
  assert.equal(JSON.parse(local.get(DISPLAY_SETTINGS_KEY)).showFps, true);
  controls['tablet-performance'].emit('click');
  assert.equal(controls['frame-rate'].value, '20');
  assert.equal(controls['camera-frame-rate'].value, '12');
  assert.equal(settings.value.showFps, true);
  assert.equal(controls['limit-offscreen'].checked, true);
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
    showAvatars:false, seatedPoses:false, dockAlignment:'left', frameRate:12, cameraFrameRate:12,
    renderScale:.67, shadowQuality:'low', showFps:true, limitOffscreenScenery:true, insaneGraphics:false});
  controls['camera-frame-rate'].value = '';
  controls['camera-frame-rate'].emit('change');
  assert.equal(JSON.parse(local.get(DISPLAY_SETTINGS_KEY)).cameraFrameRate, null);
  controls.reset.emit('click');
  assert.equal(local.has(DISPLAY_SETTINGS_KEY), false);
  assert.equal(sky.value, 'layout');
  assert.equal(controls['limit-offscreen'].checked, false);
  assert.deepEqual(settings.value, normalizeStorybookDisplaySettings());
  const storageEvent = Object.assign(new Event('storage'),
    {key:DISPLAY_SETTINGS_KEY, newValue:JSON.stringify({features:{sky:false}, frameRate:60,
      cameraFrameRate:20, renderScale:.5, shadowQuality:'off', showFps:true})});
  host.dispatchEvent(storageEvent);
  assert.equal(sky.value, 'hide');
  assert.equal(controls['frame-rate'].value, '60');
  assert.equal(controls['camera-frame-rate'].value, '20');
  assert.equal(controls['render-scale'].value, '0.5');
  assert.equal(controls['shadow-quality'].value, 'off');
  assert.equal(settings.value.showFps, true);
  settings.disconnect();
  assert.equal(dialog.open, false);
});

test('Insane graphics previews once for five seconds, then restores every preference without writing', () => {
  const {local, controls, settings, changes, advance} = bindFixture({
    frameRate:20, cameraFrameRate:12, renderScale:.67, shadowQuality:'low',
    limitOffscreenScenery:true, features:{clouds:false}, showFps:true,
  });
  const stored = local.get(DISPLAY_SETTINGS_KEY);
  const normal = settings.value;
  controls.insane.emit('click');
  assert.equal(settings.graphicsPreviewActive, true);
  assert.deepEqual(changes.at(-1), {...normal, insaneGraphics:true,
    frameRate:60, cameraFrameRate:60, renderScale:1, shadowQuality:'ultra', limitOffscreenScenery:false});
  assert.equal(local.get(DISPLAY_SETTINGS_KEY), stored);
  advance(4999);
  assert.equal(settings.graphicsPreviewActive, true);
  advance(1);
  assert.equal(settings.graphicsPreviewActive, false);
  assert.deepEqual(changes.at(-1), normal);
  assert.equal(local.get(DISPLAY_SETTINGS_KEY), stored);
  assert.equal(controls['preview-actions'].hidden, true);

  controls.insane.emit('click');
  advance(5000, false);
  controls.keep.emit('click');
  assert.deepEqual(settings.value, normal);
  assert.equal(local.get(DISPLAY_SETTINGS_KEY), stored);
  settings.disconnect();
});

test('confirmation keeps only the graphics override, closing and hiding cancel previews, and Tablet exits the mode', () => {
  const {host, local, controls, dialog, settings, toggle, advance} = bindFixture({
    frameRate:30, renderScale:.8, shadowQuality:'low', features:{trees:false}, showFps:true,
  });
  const normal = settings.value;
  controls.insane.emit('click');
  dialog.close();
  assert.deepEqual(settings.value, normal);
  toggle.emit('click');
  controls.insane.emit('click');
  host.document.hidden = true;
  host.document.dispatchEvent(new Event('visibilitychange'));
  assert.deepEqual(settings.value, normal);
  host.document.hidden = false;
  controls.insane.emit('click');
  assert.equal(settings.cancelGraphicsPreview(), true);
  assert.deepEqual(settings.value, normal);

  controls.insane.emit('click');
  advance(2500);
  controls.keep.emit('click');
  assert.equal(settings.graphicsPreviewActive, false);
  assert.equal(settings.value.insaneGraphics, true);
  assert.equal(settings.value.shadowQuality, 'ultra');
  assert.deepEqual(JSON.parse(local.get(DISPLAY_SETTINGS_KEY)), {...normal, insaneGraphics:true});
  advance(5000);
  controls.insane.emit('click');
  assert.deepEqual(settings.value, normal);

  controls.insane.emit('click');
  controls.keep.emit('click');
  controls['tablet-performance'].emit('click');
  assert.deepEqual(settings.value, {...normal, frameRate:20, renderScale:.67, shadowQuality:'off'});
  controls.insane.emit('click');
  settings.disconnect();
  assert.equal(settings.graphicsPreviewActive, false);
});
