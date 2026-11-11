import assert from 'node:assert/strict';
import test from 'node:test';
import {createStorybookLocation, locationMapConfig, readLocationSources} from '../ha-local/storybook-location.mjs';

const sourceConfig = {
  sources: [
    {entity: 'device_tracker.example_google', provider: 'google_maps', label: ' Shared phone '},
    {entity: 'person.example_companion'},
    {entity: 'device_tracker.example_google', label: 'Duplicate'},
    {entity: 'device_tracker.inactive'},
    {entity: 'device_tracker.invalid_position'},
    {entity: 'device_tracker.other', provider: 'unsupported'},
    {entity: 'camera.example'},
  ],
};
const states = {
  'device_tracker.example_google': {state: 'away', attributes: {latitude: 0, longitude: 13}},
  'person.example_companion': {state: 'home', attributes: {friendly_name: 'Example companion'}},
  'device_tracker.inactive': {state: 'unavailable', attributes: {latitude: 10, longitude: 5}},
  'device_tracker.invalid_position': {state: 'away', attributes: {latitude: 100, longitude: 30}},
  'device_tracker.unlisted': {state: 'home', attributes: {latitude: 10, longitude: 5}},
};

test('the location map accepts only configured live trackers with valid coordinates and current markers', () => {
  assert.deepEqual(readLocationSources({entities: ['device_tracker.example_google']}), []);
  const sources = readLocationSources(sourceConfig);
  assert.deepEqual(sources, [
    {entity: 'device_tracker.example_google', provider: 'google_maps', label: 'Shared phone'},
    {entity: 'person.example_companion', provider: 'home_assistant', label: ''},
    {entity: 'device_tracker.inactive', provider: 'home_assistant', label: ''},
    {entity: 'device_tracker.invalid_position', provider: 'home_assistant', label: ''},
  ]);
  const config = locationMapConfig(sources, {states});
  assert.deepEqual(config.entities, [{entity: 'device_tracker.example_google', name: 'Shared phone'}]);
  assert.equal(config.type, 'map');
  assert.equal(config.hours_to_show, 0);
  assert.equal(config.show_all, false);
  assert.equal(config.fit_zones, false);
  assert.equal(locationMapConfig(sources, {states, connected: false}), null);
  assert.equal(locationMapConfig([], {states}), null);
});

function panelFixture(loadCardHelpers) {
  const element = () => ({
    children: [],
    append(...children) { this.children.push(...children); },
    replaceChildren(...children) { this.children = children; },
  });
  const selectors = {
    '[data-location-status]': element(),
    '[data-location-sources]': element(),
    '[data-location-map]': element(),
  };
  const dialog = Object.assign(new EventTarget(), {
    open: false,
    ownerDocument: {defaultView: {loadCardHelpers}, createElement: element},
    querySelector: selector => selectors[selector],
  });
  const panel = createStorybookLocation(dialog);
  return {
    dialog, panel,
    status: selectors['[data-location-status]'],
    list: selectors['[data-location-sources]'],
    map: selectors['[data-location-map]'],
  };
}

const nextTick = () => new Promise(resolve => setImmediate(resolve));

test('an open panel mounts the signed-in native card, reports sources, and unmounts offline or on close', async () => {
  let loads = 0;
  const created = [];
  const {dialog, panel, status, list, map} = panelFixture(async () => {
    loads++;
    return {createCardElement(config) {
      const card = {localName: 'hui-map-card', setConfig() {}, config};
      created.push(card);
      return card;
    }};
  });
  const hass = {states, connected: true};
  panel.configure(sourceConfig);
  panel.update(hass);
  assert.equal(loads, 0);
  dialog.open = true;
  panel.update(hass);
  await nextTick();
  assert.equal(loads, 1);
  assert.deepEqual(map.children, created);
  assert.equal(created[0].hass, hass);
  assert.equal(map.hidden, false);
  assert.equal(status.textContent, '');
  assert.deepEqual(list.children.map(row => row.children.map(cell => cell.textContent)), [
    ['Shared phone', 'Google Maps · Location available'],
    ['Example companion', 'Home Assistant · Waiting for GPS'],
    ['device_tracker.inactive', 'Home Assistant · Source unavailable'],
    ['device_tracker.invalid_position', 'Home Assistant · Waiting for GPS'],
  ]);
  const updated = {states: {...states}, connected: true};
  panel.update(updated);
  assert.equal(loads, 1);
  assert.equal(created[0].hass, updated);
  panel.update({states, connected: false});
  assert.equal(status.textContent, 'Home Assistant is offline.');
  assert.equal(map.hidden, true);
  assert.deepEqual(map.children, []);
  panel.update(hass);
  await nextTick();
  assert.equal(loads, 2);
  dialog.open = false;
  dialog.dispatchEvent(new Event('close'));
  assert.deepEqual(map.children, []);
  assert.deepEqual(list.children, []);
});

test('a map that finishes loading after the dialog closes is discarded', async () => {
  let resolveHelpers;
  const {dialog, panel, map} = panelFixture(() => new Promise(resolve => { resolveHelpers = resolve; }));
  dialog.open = true;
  panel.configure(sourceConfig);
  panel.update({states});
  dialog.open = false;
  dialog.dispatchEvent(new Event('close'));
  const card = {localName: 'hui-map-card', setConfig() {}};
  resolveHelpers({createCardElement: () => card});
  await nextTick();
  assert.equal(card.hass, undefined);
  assert.equal(map.hidden, true);
  assert.deepEqual(map.children, []);
});
