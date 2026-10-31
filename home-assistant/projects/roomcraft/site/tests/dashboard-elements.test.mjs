import test from 'node:test';
import assert from 'node:assert/strict';
import { editableDashboardHotspots, mergeDashboardElements, validCameraThumbnail, validObjectControl, withUpdatedPlanCard } from '../lib/dashboard-elements.ts';

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
  assert.equal('id' in next[0], false);
  assert.equal(next[2].tap_action.url_path, 'https://example.com/editor');
  assert.deepEqual(editableDashboardHotspots(next).map((element) => element.entity), ['light.new_lamp']);
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
  assert.deepEqual(card.elements.map((element) => element.type), ['state-icon', 'custom:roomcraft-entity-menu', 'icon']);
  assert.equal(card.elements[0].entity, 'light.new');
  assert.deepEqual(config.views[1], studio);
  assert.deepEqual(config.views[2], live);
  assert.equal(dashboard.views[0].cards[0].image, '/old.png');
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
  assert.equal(result[0].style.top, '38.09%');
  assert.equal(result[0].style.width, '11.07%');
  assert.equal(result[0].style.height, '10.74%');
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
  assert.equal(result[0].style.left, '78.13%');
  assert.deepEqual(result[1].sections, [{ title: 'Lighting', entities: ['light.bedroom'] }]);
  assert.deepEqual(result[1].bound_objects, [{ entity_id: 'light.bedroom', label: 'Bedside light', icon: 'mdi:lamp' }]);
});

test('camera thumbnail validation rejects external or malformed entities and invalid geometry', () => {
  const item = { id: 'cam', type: 'cameraThumbnail', x: 260, y: 390, w: 170, h: 110,
    rotation: 0, entityId: 'camera.entry', imageEntityId: 'image.entry_event', previewMode: 'event' };
  assert.equal(validCameraThumbnail(item), true);
  for (const change of [
    { entityId: 'https://outside.example/image' }, { entityId: 'camera.entry?token=secret' },
    { imageEntityId: 'sensor.entry' }, { x: -1 }, { w: 0 }, { rotation: Infinity },
  ]) {
    assert.equal(validCameraThumbnail({ ...item, ...change }), false);
  }
});
