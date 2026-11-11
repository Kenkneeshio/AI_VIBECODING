import test from 'node:test';
import assert from 'node:assert/strict';
import {readStorybookUtilities, utilityReading} from '../ha-local/storybook-utilities.mjs';

test('Roomcraft utility dialogs use saved readings without publishing the old views', () => {
  const menu = {type: 'custom:roomcraft-entity-menu', roomcraft_menu: true, sections: []};
  const plan = {type: 'picture-elements', elements: [
    menu,
    {type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'air',
      entities: [{entity: 'sensor.test_humidity', name: 'Humidity'}, {entity: 'invalid id'}]},
    {type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'electrical',
      entities: [{entity: 'sensor.test_power', name: 'Power'}]},
  ]};
  const health = {path: 'health', cards: [
    {type: 'custom:system-watchdog-card', summary_entity: 'sensor.test_summary', issue_entity: 'sensor.test_issues'},
    {type: 'entities', entities: ['sensor.test_summary', {entity: 'sensor.test_tablet', name: 'Tablet'}]},
  ]};
  const legacy = readStorybookUtilities({views: [{path: 'plan', cards: [plan]}, health]});
  const popupOnly = readStorybookUtilities({roomcraft_plan: plan, roomcraft_health: health,
    views: [{path: 'home'}, {path: 'studio'}]});
  assert.deepEqual(popupOnly, legacy);
  assert.equal(popupOnly.devices, menu);
  assert.deepEqual(popupOnly.panels.air.entities, [{entity: 'sensor.test_humidity', name: 'Humidity'}]);
  assert.deepEqual(popupOnly.panels.electrical.entities, [{entity: 'sensor.test_power', name: 'Power'}]);
  assert.deepEqual(popupOnly.panels.health.entities.map(entry => entry.entity),
    ['sensor.test_summary', 'sensor.test_issues', 'sensor.test_tablet']);
});

test('utility readings use live units, watchdog status, and an honest unavailable state', () => {
  const entry = {entity: 'sensor.test_reading', name: ''};
  const meter = {[entry.entity]: {state: '25', attributes: {friendly_name: 'Meter', unit_of_measurement: 'W'}}};
  assert.equal(utilityReading(entry, meter, false).reading, '25 W');
  assert.equal(utilityReading(entry, meter, false).name, 'Meter');
  assert.equal(utilityReading(entry, undefined, false).reading, 'Unavailable');
  const watchdog = {[entry.entity]: {state: 'warning', attributes: {message: 'Tablet is offline',
    issues: ['Tablet unavailable', 15]}}};
  const reading = utilityReading(entry, watchdog, true);
  assert.equal(reading.level, 'warning');
  assert.equal(reading.message, 'Tablet is offline');
  assert.deepEqual(reading.issues, ['Tablet unavailable']);
});
