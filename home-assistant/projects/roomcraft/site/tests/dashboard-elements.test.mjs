import test from 'node:test';
import assert from 'node:assert/strict';
import { editableDashboardHotspots, mergeDashboardElements, withUpdatedPlanCard } from '../lib/dashboard-elements.ts';

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
  assert.deepEqual(next.map((element) => element.type), ['state-icon', 'icon', 'state-label', 'conditional']);
  assert.equal(next[0].entity, 'light.new_lamp');
  assert.equal('id' in next[0], false);
  assert.equal(next[1].tap_action.url_path, 'https://example.com/editor');
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
  assert.deepEqual(card.elements.map((element) => element.type), ['state-icon', 'icon']);
  assert.equal(card.elements[0].entity, 'light.new');
  assert.deepEqual(config.views[1], studio);
  assert.deepEqual(config.views[2], live);
  assert.equal(dashboard.views[0].cards[0].image, '/old.png');
});
