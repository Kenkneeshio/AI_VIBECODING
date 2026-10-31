import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const controlsSource = readFileSync(new URL('../public/object-controls.js', import.meta.url), 'utf8');
const rasterSource = readFileSync(new URL('../public/raster-renderer.js', import.meta.url), 'utf8');

function controls() {
  const window = {};
  runInNewContext(controlsSource, { window });
  return window.RoomcraftObjectControls;
}

test('old object bindings keep automatic device actions', () => {
  const c = controls();
  const oldLight = { type: 'lamp', entityId: 'light.example_lamp' };
  const oldBlind = { type: 'controlZone', entityId: 'cover.example_blind' };
  assert.equal(c.validBinding(oldLight), true);
  assert.equal(c.effectiveTapAction(oldLight), 'toggle');
  assert.equal(c.effectiveHoldAction(oldLight), 'more-info');
  assert.equal(c.effectiveTapAction(oldBlind), 'more-info');
  assert.equal(c.effectiveTapAction({ ...oldLight, tapAction: 'none' }), 'none');
  assert.equal(c.effectiveHoldAction({ ...oldBlind, holdAction: 'toggle' }), 'toggle');
});

test('a fan can show its switch state while tap and hold run separate scenes', () => {
  const c = controls();
  const fan = {
    id: 'fan', type: 'fans-fan-light-white', name: 'Ceiling fan', x: 650, y: 350,
    w: 158, h: 158, rotation: 0, entityId: 'switch.ceiling_fan',
    tapEntityId: 'scene.ceiling_fan_on_scene', holdEntityId: 'scene.ceiling_fan_off',
    tapAction: 'activate', holdAction: 'activate'
  };
  assert.equal(c.validBinding(fan), true);
  assert.equal(c.effectiveTapAction(fan), 'activate');
  assert.equal(c.effectiveTapAction({ entityId: 'scene.ceiling_fan_light_toggle' }), 'activate');
  assert.equal(c.effectiveTapAction({ entityId: 'script.example' }), 'activate');
  assert.equal(c.effectiveTapAction({ entityId: 'button.example' }), 'activate');
  assert.equal(c.validBinding({ ...fan, tapEntityId: 'https://invalid.example' }), false);
  assert.equal(c.propertyUpdate('holdEntityId', ' scene.ceiling_fan_off ').value, 'scene.ceiling_fan_off');
  assert.equal(c.propertyUpdate('tapEntityId', 'javascript:alert(1)').valid, false);

  const element = c.manualDashboardElements({ items: [fan], hotspots: [] })[0];
  assert.equal(element.entity, 'switch.ceiling_fan');
  assert.equal(element.roomcraft_tap_entity, 'scene.ceiling_fan_on_scene');
  assert.equal(element.roomcraft_hold_entity, 'scene.ceiling_fan_off');
  const yaml = c.manualYaml({ items: [fan], hotspots: [] });
  assert.match(yaml, /roomcraft_tap_action: "activate"/);
  assert.match(yaml, /roomcraft_hold_entity: "scene.ceiling_fan_off"/);
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const inspector = c.renderInspector(fan, { icon: '✳', label: 'Ceiling fan' },
    () => '', () => '', escape, []);
  assert.match(inspector, /Run scene, script, or button/);
  assert.match(inspector, /data-prop="tapEntityId"/);
  assert.match(inspector, /data-prop="holdEntityId"/);
});

test('button labels, icons, and actions accept only safe values', () => {
  const c = controls();
  assert.equal(c.validBinding({ controlLabel: 'Desk lamp', controlIcon: 'mdi:desk-lamp', tapAction: 'toggle', holdAction: 'none' }), true);
  assert.equal(c.validBinding({ tapAction: 'navigate' }), false);
  assert.equal(c.validBinding({ controlIcon: 'javascript:alert(1)' }), false);
  assert.equal(c.propertyUpdate('tapAction', 'auto').value, undefined);
  assert.equal(c.propertyUpdate('controlLabel', '  Desk lamp  ').value, 'Desk lamp');
  assert.equal(c.propertyUpdate('controlIcon', 'mdi:lightbulb').valid, true);
  assert.equal(c.propertyUpdate('controlIcon', 'javascript:alert(1)').valid, false);
});

test('dashboard entity suggestions are sanitized, searchable, and domain filtered', () => {
  const c = controls();
  const options = c.normalizeEntityOptions([
    { entity_id: 'light.example_lamp', name: 'Bedside <lamp>', domain: 'camera', area: 'Bedroom' },
    { entity_id: 'light.example_lamp', name: 'Duplicate' },
    { entity_id: 'camera.example_entry', name: 'Entry camera', area: 'Porch' },
    { entity_id: 'image.example_event', name: 'Latest event', area: 'Porch' },
    { entity_id: 'https://invalid.test', name: 'Invalid' }
  ]);
  assert.equal(options.length, 3);
  assert.equal(options.find(o => o.entity_id === 'light.example_lamp').domain, 'light');
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const chair = c.renderInspector(
    { type: 'chair', name: 'Chair', x: 0, y: 0, w: 50, h: 50, rotation: 0 },
    { icon: '◒', label: 'Chair' }, () => '', () => '', escape, options
  );
  assert.match(chair, /value="light.example_lamp"/);
  assert.match(chair, /Bedside &lt;lamp&gt; · Bedroom · light/);
  const camera = c.renderInspector(
    { type: 'cameraThumbnail', name: 'Camera', x: 0, y: 0, w: 170, h: 110, rotation: 0 },
    { icon: '▣', label: 'Camera' }, () => '', () => '', escape, options
  );
  assert.match(camera, /value="camera.example_entry"/);
  assert.match(camera, /value="image.example_event"/);
  assert.doesNotMatch(camera, /value="light.example_lamp"/);
});

test('transparent control area produces no bitmap artwork', () => {
  class ImageStub { addEventListener() {} }
  const window = {};
  runInNewContext(rasterSource, { window, Image: ImageStub });
  const canvas = new Proxy({}, { get: () => { throw new Error('Unexpected bitmap paint'); } });
  window.RoomcraftRasterRenderer.drawItem(canvas, {
    id: 'zone', type: 'controlZone', x: 100, y: 100, w: 80, h: 40, rotation: 0
  }, { items: [] }, null, null, () => { throw new Error('Unexpected fallback art'); });
});

test('manual YAML keeps linked furniture and invisible zones as custom controls', () => {
  const c = controls();
  const yaml = c.manualYaml({
    items: [
      { id: 'lamp', type: 'lamp', name: 'Bedroom lamp', x: 1200, y: 400, w: 48, h: 60,
        rotation: 0, entityId: 'light.example_bedroom', controlLabel: 'Bedside light',
        controlIcon: 'mdi:lamp', tapAction: 'toggle', holdAction: 'more-info' },
      { id: 'window-zone', type: 'controlZone', name: 'Window', x: 450, y: 200, w: 120, h: 72,
        rotation: 0, entityId: 'cover.example_window', tapAction: 'more-info', holdAction: 'none' },
      { id: 'camera', type: 'cameraThumbnail', name: 'Entry', x: 260, y: 390, w: 170, h: 110,
        rotation: 0, entityId: 'camera.example_entry', imageEntityId: 'image.example_event', previewMode: 'event' }
    ],
    hotspots: [
      { id: 'old-lamp', type: 'state-icon', entity: 'light.example_bedroom', title: 'Old lamp',
        tap_action: { action: 'toggle' }, style: { left: '20%', top: '20%' } },
      { id: 'other', type: 'state-icon', entity: 'switch.example_other', title: 'Other',
        tap_action: { action: 'toggle' }, style: { left: '30%', top: '30%' } }
    ]
  });
  assert.match(yaml, /register \/local\/roomcraft\/roomcraft-card\.js as a JavaScript module/);
  assert.match(yaml, /roomcraft_scene: full-width-v1/);
  assert.match(yaml, /"left": "78\.13%"/);
  assert.match(yaml, /"left": "30%"/);
  assert.match(yaml, /"left": "16\.93%"/);
  assert.match(yaml, /"top": "26\.3%"/);
  assert.equal((yaml.match(/- type: "custom:roomcraft-object-control"/g) || []).length, 2);
  assert.equal((yaml.match(/- type: "state-icon"/g) || []).length, 1);
  assert.match(yaml, /roomcraft_item_id: "window-zone"/);
  assert.equal((yaml.match(/control_zone: true/g) || []).length, 1);
  assert.equal((yaml.match(/control_zone: false/g) || []).length, 1);
  assert.match(yaml, /roomcraft_hold_action: "none"/);
  assert.match(yaml, /roomcraft_tap_action: "toggle"/);
  assert.match(yaml, /control_icon: "mdi:lamp"/);
  assert.match(yaml, /- type: "custom:roomcraft-camera-thumbnail"/);
  assert.match(yaml, /- type: "custom:roomcraft-entity-menu"/);
  assert.doesNotMatch(yaml, /title: "Old lamp"/);
});
