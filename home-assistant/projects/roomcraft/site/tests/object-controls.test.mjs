import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import { installRoomcraftEngine } from './engine-loader.mjs';

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

test('bottom interface controls export as one uniform upward-opening button row', () => {
  const c = controls();
  const elements = c.manualDashboardElements({ hotspots: [], items: [
    { id: 'edit', type: 'uiEdit', x: 1350, y: 864, w: 48, h: 48, rotation: 0 },
    { id: 'air', type: 'uiStatusAir', x: 1410, y: 864, w: 48, h: 48, rotation: 0 },
    { id: 'power', type: 'uiStatusElectrical', x: 1470, y: 864, w: 48, h: 48, rotation: 0 },
  ] });
  const edit = elements.find(element => element.type === 'icon');
  const air = elements.find(element => element.roomcraft_status_kind === 'air');
  const power = elements.find(element => element.roomcraft_status_kind === 'electrical');
  for (const element of [edit, air, power]) {
    assert.equal(element.style.top, '90.74%');
    assert.equal(element.style.width, '3.13%');
    assert.equal(element.style.height, '5.56%');
    assert.equal(element.style['--roomcraft-control-bg'], 'rgba(16, 40, 43, 0.88)');
  }
  assert.equal(edit.style['border-radius'], '50%');
  assert.equal(air.roomcraft_popup_direction, 'up');
  assert.equal(power.roomcraft_popup_direction, 'up');
});

test('vacuum bindings export an authenticated map camera and editor controls', () => {
  const c = controls();
  const vacuum = {
    id: 'vacuum', type: 'cleaning-round-robot-vac-white', name: 'Robot vacuum',
    x: 760, y: 500, w: 76, h: 76, rotation: 0,
    entityId: 'vacuum.example', vacuumMapEntityId: 'camera.example_map',
    vacuumPositionTransform: [-0.1, -0.006, 560, -0.001, 0.093, 716]
  };
  assert.equal(c.validBinding(vacuum), true);
  assert.equal(c.visualKind(vacuum), 'vacuum');
  assert.equal(c.validBinding({ ...vacuum, vacuumMapEntityId: 'https://invalid.example' }), false);
  assert.equal(c.propertyUpdate('vacuumMapEntityId', ' camera.example_map ').value, 'camera.example_map');
  assert.deepEqual(Array.from(c.propertyUpdate('vacuumPositionTransform', '-0.1, -0.006, 560, -0.001, 0.093, 716').value),
    vacuum.vacuumPositionTransform);
  assert.equal(c.propertyUpdate('vacuumPositionTransform', '1, 2, nope').valid, false);
  const element = c.manualDashboardElements({ items: [vacuum], hotspots: [] })[0];
  assert.equal(element.roomcraft_visual_kind, 'vacuum');
  assert.equal(element.roomcraft_vacuum_map_entity, 'camera.example_map');
  assert.deepEqual(Array.from(element.roomcraft_vacuum_position_transform), vacuum.vacuumPositionTransform);
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const inspector = c.renderInspector(vacuum, { icon: '◉', label: 'Robot vacuum' },
    () => '', () => '', escape, [{ entity_id: 'camera.example_map', domain: 'camera', name: 'Map', area: '' }]);
  assert.match(inspector, /Vacuum map camera/);
  assert.match(inspector, /Position transform/);
  assert.match(inspector, /maps live vacuum coordinates to plan pixels/);
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
  assert.equal(element.roomcraft_visual_kind, 'fan');
  const yaml = c.manualYaml({ items: [fan], hotspots: [] });
  assert.match(yaml, /roomcraft_tap_action: "activate"/);
  assert.match(yaml, /roomcraft_hold_entity: "scene.ceiling_fan_off"/);
  assert.match(yaml, /roomcraft_visual_kind: "fan"/);
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const inspector = c.renderInspector(fan, { icon: '✳', label: 'Ceiling fan' },
    () => '', () => '', escape, []);
  assert.match(inspector, /Run scene, script, or button/);
  assert.match(inspector, /data-prop="tapEntityId"/);
  assert.match(inspector, /data-prop="holdEntityId"/);
  assert.match(inspector, /data-prop="visualKind"/);
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
  assert.equal(c.propertyUpdate('visualKind', 'auto').value, undefined);
  assert.equal(c.propertyUpdate('visualKind', 'window').value, 'window');
  assert.equal(c.propertyUpdate('visualKind', 'unsafe').valid, false);
  assert.equal(c.validBinding({ visualKind: 'unsafe' }), false);
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
    { type: 'cameraThumbnail', name: 'Camera', x: 0, y: 0, w: 170, h: 110, rotation: 0,
      previewMode: 'event_live', eventEntityIds: ['binary_sensor.entry_ring', 'binary_sensor.entry_person'] },
    { icon: '▣', label: 'Camera' }, () => '', () => '', escape, options
  );
  assert.match(camera, /value="camera.example_entry"/);
  assert.match(camera, /value="image.example_event"/);
  assert.match(camera, /value="event_live" selected/);
  assert.match(camera, /binary_sensor.entry_ring, binary_sensor.entry_person/);
  assert.match(camera, /value="live_auto"/);
  assert.doesNotMatch(camera, /value="light.example_lamp"/);
});

test('transparent control area produces no bitmap artwork', () => {
  class ImageStub { addEventListener() {} }
  const window = {};
  installRoomcraftEngine(window);
  runInNewContext(rasterSource, { window, Image: ImageStub });
  const canvas = new Proxy({}, { get: () => { throw new Error('Unexpected bitmap paint'); } });
  window.RoomcraftRasterRenderer.drawItem(canvas, {
    id: 'zone', type: 'controlZone', x: 100, y: 100, w: 80, h: 40, rotation: 0
  }, { items: [] }, null, null, () => { throw new Error('Unexpected fallback art'); });
});

test('movable furniture and lights use floor-free vector art instead of source crops', () => {
  class ImageStub { addEventListener() {} }
  const window = {};
  installRoomcraftEngine(window);
  runInNewContext(rasterSource, { window, Image: ImageStub });
  const fallbackTypes = [];
  for (const type of ['sofa', 'table', 'chair', 'bed', 'desk', 'armchair', 'coffeeTable',
    'sideTable', 'dresser', 'nightstand', 'bookcase', 'stool', 'lamp', 'ceilingLight',
    'pendantLight', 'floorLamp', 'tableLamp', 'wallSconce']) {
    window.RoomcraftRasterRenderer.drawItem({}, { id: `test-${type}`, type, x: 100, y: 100,
      w: 80, h: 60, rotation: 0 }, { items: [] }, null, null, item => fallbackTypes.push(item.type));
  }
  assert.deepEqual(Array.from(fallbackTypes), ['sofa', 'table', 'chair', 'bed', 'desk', 'armchair',
    'coffeeTable', 'sideTable', 'dresser', 'nightstand', 'bookcase', 'stool', 'lamp',
    'ceilingLight', 'pendantLight', 'floorLamp', 'tableLamp', 'wallSconce']);
});

test('manual dashboard YAML carries window orientation and doorbell event sensors', () => {
  const c = controls();
  const elements = c.manualDashboardElements({
    hotspots: [],
    items: [
      { id: 'side-blind', type: 'controlZone', name: 'Side blind', x: 400, y: 300,
        w: 45, h: 130, rotation: 0, entityId: 'cover.example_blind' },
      { id: 'doorbell', type: 'cameraThumbnail', name: 'Doorbell', x: 180, y: 820,
        w: 150, h: 90, rotation: 0, entityId: 'camera.example_doorbell',
        imageEntityId: 'image.example_event', previewMode: 'event_live',
        eventEntityIds: ['binary_sensor.example_ring', 'binary_sensor.example_person'] },
    ],
  });
  assert.equal(elements.find(element => element.roomcraft_item_id === 'side-blind').roomcraft_window_axis, 'vertical');
  assert.deepEqual(Array.from(elements.find(element => element.roomcraft_item_id === 'doorbell').event_entities),
    ['binary_sensor.example_ring', 'binary_sensor.example_person']);
  const yaml = c.manualYaml({ hotspots: [], items: [
    { id: 'doorbell', type: 'cameraThumbnail', name: 'Doorbell', x: 180, y: 820,
      w: 150, h: 90, rotation: 0, entityId: 'camera.example_doorbell',
      imageEntityId: 'image.example_event', previewMode: 'event_live',
      eventEntityIds: ['binary_sensor.example_ring'] },
  ] });
  assert.match(yaml, /event_entities:/);
  assert.match(yaml, /binary_sensor\.example_ring/);
});

test('a bedroom-style desk lamp keeps a small stateful light shade', () => {
  const c = controls();
  const lamp = { id: 'desk-lamp', type: 'lamp', name: 'Office desk lamp', x: 850, y: 260,
    w: 48, h: 52, rotation: 0, entityId: 'light.example_office' };
  const element = c.manualDashboardElements({ items: [lamp], hotspots: [] })[0];
  assert.equal(element.roomcraft_visual_kind, 'light');
  assert.equal(element.roomcraft_light_form, 'table_lamp');
  assert.match(c.manualYaml({ items: [lamp], hotspots: [] }), /roomcraft_light_form: "table_lamp"/);
});

test('crafted catalog lights preserve their live silhouette and reject unknown forms', () => {
  const c = controls();
  const forms = ['bud_lamp', 'cloud_floor_lamp', 'bloom_ceiling', 'star_pendant', 'acorn_sconce'];
  const items = forms.map((lightForm, index) => ({ id: `cute-${index}`, type: `lighting-cute-${index}`,
    name: `Cute light ${index}`, x: 400 + index * 80, y: 300, w: 60, h: 60, rotation: 0,
    entityId: `light.example_${index}`, visualKind: 'light', lightForm }));
  assert.deepEqual(Array.from(c.manualDashboardElements({ items, hotspots: [] })
    .filter(element => element.type === 'custom:roomcraft-object-control')
    .map(element => element.roomcraft_light_form)), forms);
  assert.equal(c.validBinding({ ...items[0], lightForm: 'copied_character' }), false);
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
