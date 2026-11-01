import test from 'node:test';
import assert from 'node:assert/strict';
import { ROOMCRAFT_SCENE, editableDashboardHotspots, mergeDashboardElements, objectVisualKind, validCameraThumbnail, validObjectControl, withUpdatedPlanCard } from '../lib/dashboard-elements.ts';

test('dashboard export replaces editable controls and retains independent overlays', () => {
  const existing = [
    { type: 'state-icon', entity: 'light.old_lamp', style: { left: '20%', top: '20%' } },
    { type: 'icon', icon: 'mdi:pencil-ruler', title: 'Edit layout in Roomcraft', tap_action: { action: 'url', url_path: 'https://example.com/editor' }, style: { left: '94%', top: '9%' } },
    { type: 'state-label', entity: 'sensor.time', style: { left: '80%', top: '9%' } },
    { type: 'conditional', conditions: [{ entity: 'binary_sensor.example', state: 'on' }], elements: [{ type: 'image', image: '/local/example.png' }] },
  ];
  const next = mergeDashboardElements([
    { id: 'internal-1', type: 'state-icon', entity: 'light.new_lamp', style: { left: '30%', top: '30%' } },
  ], existing);
  assert.deepEqual(next.map((element) => element.type), ['state-icon', 'custom:roomcraft-entity-menu', 'icon', 'state-label', 'conditional']);
  assert.equal(next[0].entity, 'light.new_lamp');
  assert.equal(next[0].style.left, '30%');
  assert.equal(next[0].style.top, '26.3%');
  assert.equal('id' in next[0], false);
  assert.equal(next[2].tap_action.url_path, 'https://example.com/editor');
  assert.deepEqual(editableDashboardHotspots(next).map((element) => element.entity), ['light.new_lamp']);
  assert.equal(editableDashboardHotspots(next, ROOMCRAFT_SCENE)[0].style.left, '30%');
  assert.equal(editableDashboardHotspots(next, ROOMCRAFT_SCENE)[0].style.top, '30%');
  assert.equal(existing[0].entity, 'light.old_lamp');
});

test('plan export leaves the separate studio and live views untouched', () => {
  const studio = { title: 'Layout Studio', path: 'studio', cards: [{ type: 'button', name: 'Open Roomcraft' }] };
  const live = { title: 'Live Home', path: 'live', cards: [{ type: 'entities', entities: ['sensor.example'] }] };
  const dashboard = {
    views: [
      { title: 'Floor Plan', path: 'plan', cards: [{ type: 'picture-elements', image: '/old.png', elements: [
        { type: 'state-icon', entity: 'light.old' },
        { type: 'icon', icon: 'mdi:pencil-ruler', tap_action: { action: 'url', url_path: 'https://example.com/editor' } },
      ] }] },
      studio,
      live,
    ],
  };
  const { config, card } = withUpdatedPlanCard(dashboard, '/new.png', [
    { id: 'editable', type: 'state-icon', entity: 'light.new' },
  ]);
  assert.equal(card.image, '/new.png');
  assert.equal(card.roomcraft_scene, ROOMCRAFT_SCENE);
  assert.deepEqual(card.elements.map((element) => element.type), ['state-icon', 'custom:roomcraft-entity-menu', 'icon']);
  assert.equal(card.elements[0].entity, 'light.new');
  assert.deepEqual(config.views[1], studio);
  assert.deepEqual(config.views[2], live);
  assert.equal(dashboard.views[0].cards[0].image, '/old.png');
});

test('new full-width crop migrates reserved header chrome and preserves later edits', () => {
  const header = [
    { type: 'state-label', entity: 'weather.example_home', style: { left: '68%', top: '9%' } },
    { type: 'state-label', entity: 'sensor.time', style: { left: '83%', top: '9%' } },
    { type: 'icon', icon: 'mdi:pencil-ruler', tap_action: { action: 'navigate', navigation_path: '/second-floor/studio' }, style: { left: '94%', top: '9%' } },
    { type: 'state-label', entity: 'sensor.other', style: { left: '50%', top: '9%' } },
  ];
  const old = { views: [{ path: 'plan', cards: [{ type: 'picture-elements', image: '/old.png', elements: header }] }] };
  const first = withUpdatedPlanCard(old, '/new.png', []).config;
  const firstElements = first.views[0].cards[0].elements;
  assert.deepEqual(firstElements.slice(1).map(element => element.style.top), ['5.3%', '5.3%', '5.3%', '9%']);
  firstElements[1].style.top = '7%';
  const second = withUpdatedPlanCard(first, '/newer.png', []).config;
  assert.equal(second.views[0].cards[0].elements[1].style.top, '7%');
});

test('every export keeps weather and time values but softens their native header chrome', () => {
  const existing = [
    { type: 'state-label', entity: 'weather.home', prefix: 'Weather · ',
      style: { left: '68%', top: '5.3%', background: 'rgba(24, 29, 35, 0.8)', padding: '8px 12px' } },
    { type: 'state-label', entity: 'sensor.time', prefix: 'Time · ',
      style: { left: '83%', top: '5.3%', background: 'rgba(24, 29, 35, 0.8)', padding: '8px 12px' } },
    { type: 'state-label', entity: 'sensor.other', prefix: 'Other · ', style: { left: '50%', top: '5.3%' } },
  ];
  const result = mergeDashboardElements([], existing, [], ROOMCRAFT_SCENE).slice(1);
  assert.deepEqual(result.map(element => element.entity), ['weather.home', 'sensor.time', 'sensor.other']);
  for (const element of result.slice(0, 2)) {
    assert.equal(element.prefix, undefined);
    assert.equal(element.style.background, 'rgba(17, 33, 35, 0.42)');
    assert.equal(element.style.padding, '4px 7px');
    assert.equal(element.style.top, '5.3%');
  }
  assert.deepEqual(result[2], existing[2]);
  assert.deepEqual(mergeDashboardElements([], result, [], ROOMCRAFT_SCENE).slice(1), result);
  assert.equal(existing[0].prefix, 'Weather · ');
});

test('previous cropped scene imports with its old bounds and migrates its reserved header', () => {
  const oldHotspot = { type: 'state-icon', entity: 'light.study', style: { left: '42.47%', top: '39.11%' } };
  const previous = { views: [{ path: 'plan', cards: [{ type: 'picture-elements',
    roomcraft_scene: 'wall-to-wall-v1', image: '/old.png', elements: [
      oldHotspot,
      { type: 'state-label', entity: 'sensor.time', style: { left: '83%', top: '3.6%' } },
      { type: 'state-label', entity: 'sensor.other', style: { left: '50%', top: '3.6%' } },
    ] }] }] };
  const imported = editableDashboardHotspots(previous.views[0].cards[0].elements, 'wall-to-wall-v1');
  assert.equal(imported[0].style.left, '42%');
  assert.equal(imported[0].style.top, '41%');
  const { card } = withUpdatedPlanCard(previous, '/new.png', imported);
  assert.equal(card.roomcraft_scene, ROOMCRAFT_SCENE);
  assert.equal(card.elements[0].style.left, '42%');
  assert.equal(card.elements[0].style.top, '39.33%');
  assert.equal(card.elements[2].style.top, '5.3%');
  assert.equal(card.elements[3].style.top, '3.6%');
});

test('camera thumbnail replaces only its marked overlay and keeps independent elements', () => {
  const oldCamera = { type: 'custom:roomcraft-camera-thumbnail', roomcraft_item_id: 'door', camera_entity: 'camera.old', style: { left: '1%' } };
  const manualImage = { type: 'image', image: '/local/manual-camera.png', style: { left: '83%' } };
  const unmarkedCustom = { type: 'custom:roomcraft-camera-thumbnail', camera_entity: 'camera.manual', style: { left: '85%' } };
  const item = { id: 'door', type: 'cameraThumbnail', name: 'Entry camera', x: 260, y: 390, w: 170, h: 110,
    rotation: 8, entityId: 'camera.entry', imageEntityId: 'image.entry_event', previewMode: 'event' };
  const result = mergeDashboardElements([], [oldCamera, manualImage, unmarkedCustom], [item]);
  assert.equal(result.length, 4);
  assert.equal(result[0].roomcraft_item_id, 'door');
  assert.equal(result[0].camera_entity, 'camera.entry');
  assert.equal(result[0].image_entity, 'image.entry_event');
  assert.equal(result[0].preview_mode, 'event');
  assert.equal(result[0].style.left, '16.93%');
  assert.equal(result[0].style.top, '35.88%');
  assert.equal(result[0].style.width, '11.07%');
  assert.equal(result[0].style.height, '12.73%');
  assert.equal(result[0].style.transform, 'translate(-50%, -50%) rotate(8deg)');
  assert.equal(result[1].type, 'custom:roomcraft-entity-menu');
  assert.deepEqual(result.slice(2), [manualImage, unmarkedCustom]);
  assert.equal(oldCamera.camera_entity, 'camera.old');
  assert.deepEqual(mergeDashboardElements([], result, []).slice(1), [manualImage, unmarkedCustom]);
});

test('linked artwork replaces a duplicate icon and preserves curated menu sections', () => {
  const item = { id: 'lamp', type: 'lamp', name: 'Bedside lamp', x: 1200, y: 400, w: 52, h: 60,
    entityId: 'light.bedroom', controlLabel: 'Bedside light', controlIcon: 'mdi:lamp',
    tapAction: 'toggle', holdAction: 'more-info' };
  assert.equal(validObjectControl(item), true);
  const existing = [
    { type: 'state-icon', entity: 'light.bedroom' },
    { type: 'custom:roomcraft-object-control', roomcraft_item_id: 'lamp', entity: 'light.old' },
    { type: 'custom:roomcraft-entity-menu', roomcraft_menu: true,
      sections: [{ title: 'Lighting', entities: ['light.bedroom'] }] },
  ];
  const result = mergeDashboardElements([{ id: 'legacy', type: 'state-icon', entity: 'light.bedroom' }], existing, [item]);
  assert.deepEqual(result.map(element => element.type),
    ['custom:roomcraft-object-control', 'custom:roomcraft-entity-menu']);
  assert.equal(result[0].entity, 'light.bedroom');
  assert.equal(result[0].roomcraft_tap_action, 'toggle');
  assert.equal(result[0].roomcraft_hold_action, 'more-info');
  assert.equal(result[0].control_icon, 'mdi:lamp');
  assert.equal(result[0].control_zone, false);
  assert.equal(result[0].roomcraft_visual_kind, 'light');
  assert.equal(result[0].roomcraft_light_form, 'table_lamp');
  assert.equal(result[0].style.left, '78.13%');
  assert.deepEqual(result[1].sections, [{ title: 'Lighting', entities: ['light.bedroom'] }]);
  assert.deepEqual(result[1].bound_objects, [{ entity_id: 'light.bedroom', label: 'Bedside light', icon: 'mdi:lamp' }]);
});

test('table lamps export a compact shade form only when rendered as lights', () => {
  const base = { id: 'office-desk-lamp', type: 'tableLamp', name: 'Office desk lamp',
    x: 915, y: 245, w: 48, h: 60, rotation: 0, entityId: 'light.office' };
  const [lamp] = mergeDashboardElements([], [], [base]);
  assert.equal(lamp.roomcraft_visual_kind, 'light');
  assert.equal(lamp.roomcraft_light_form, 'table_lamp');
  const [nonLight] = mergeDashboardElements([], [], [{ ...base, visualKind: 'device' }]);
  assert.equal(nonLight.roomcraft_light_form, undefined);
});

test('a linked fan exports separate scene targets without losing its monitored switch', () => {
  const fan = { id: 'fan', type: 'fans-fan-light-white', name: 'Ceiling fan',
    x: 650, y: 350, w: 158, h: 158, rotation: 0, entityId: 'switch.ceiling_fan',
    tapAction: 'activate', tapEntityId: 'scene.ceiling_fan_on_scene',
    holdAction: 'activate', holdEntityId: 'scene.ceiling_fan_off' };
  assert.equal(validObjectControl(fan), true);
  assert.equal(validObjectControl({ ...fan, holdEntityId: 'https://outside.example' }), false);
  const [element] = mergeDashboardElements([], [], [fan]);
  assert.equal(element.entity, 'switch.ceiling_fan');
  assert.equal(element.roomcraft_tap_action, 'activate');
  assert.equal(element.roomcraft_tap_entity, 'scene.ceiling_fan_on_scene');
  assert.equal(element.roomcraft_hold_entity, 'scene.ceiling_fan_off');
  assert.equal(element.roomcraft_visual_kind, 'fan');
});

test('linked object visuals classify stateful equipment and allow a safe override', () => {
  const base = { id: 'device', type: 'controlZone', x: 400, y: 400, w: 60, h: 50,
    entityId: 'cover.example', name: 'Window blind' };
  assert.equal(objectVisualKind(base), 'window');
  assert.equal(objectVisualKind({ ...base, entityId: 'cover.garage', name: 'Garage door' }), 'door');
  assert.equal(objectVisualKind({ ...base, entityId: 'climate.study', name: 'Study AC' }), 'climate');
  assert.equal(objectVisualKind({ ...base, entityId: 'switch.ceiling_fan', name: 'Ceiling fan' }), 'fan');
  assert.equal(objectVisualKind({ ...base, entityId: 'light.study', name: 'Study desk lamp' }), 'light');
  assert.equal(objectVisualKind({ ...base, visualKind: 'none' }), 'none');
  assert.equal(objectVisualKind({ ...base, visualKind: 'auto' }), 'window');
  assert.equal(validObjectControl({ ...base, visualKind: 'auto' }), true);
  assert.equal(validObjectControl({ ...base, visualKind: 'not-a-kind' }), false);
  const horizontal = mergeDashboardElements([], [], [{ ...base, id: 'horizontal', w: 98, h: 58 }])[0];
  const vertical = mergeDashboardElements([], [], [{ ...base, id: 'vertical', w: 70, h: 135 }])[0];
  assert.equal(horizontal.roomcraft_window_axis, 'horizontal');
  assert.equal(vertical.roomcraft_window_axis, 'vertical');
});

test('camera thumbnail validation rejects external or malformed entities and invalid geometry', () => {
  const item = { id: 'cam', type: 'cameraThumbnail', x: 260, y: 390, w: 170, h: 110,
    rotation: 0, entityId: 'camera.entry', imageEntityId: 'image.entry_event', previewMode: 'event' };
  assert.equal(validCameraThumbnail(item), true);
  const gated = { ...item, previewMode: 'event_live',
    eventEntityIds: ['binary_sensor.entry_ring', 'binary_sensor.entry_person'] };
  assert.equal(validCameraThumbnail(gated), true);
  assert.deepEqual(mergeDashboardElements([], [], [gated])[0].event_entities, gated.eventEntityIds);
  assert.equal(validCameraThumbnail({ ...item, previewMode: 'live_auto' }), true);
  for (const change of [
    { entityId: 'https://outside.example/image' }, { entityId: 'camera.entry?token=secret' },
    { imageEntityId: 'sensor.entry' }, { x: -1 }, { w: 0 }, { rotation: Infinity },
    { previewMode: 'event_live' }, { eventEntityIds: ['scene.not_a_sensor'] },
    { eventEntityIds: ['binary_sensor.entry_ring', 'binary_sensor.entry_ring'] },
  ]) {
    assert.equal(validCameraThumbnail({ ...item, ...change }), false);
  }
});
