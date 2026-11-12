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

function panelFixture(loadCardHelpers, stored = new Map()) {
  const element = () => ({
    children: [],
    append(...children) { this.children.push(...children); },
    replaceChildren(...children) { this.children = children; },
  });
  const selectors = {
    '[data-location-status]': element(),
    '[data-location-sources]': element(),
    '[data-location-map]': element(),
    '[data-location-google]': new EventTarget(),
    '[data-location-google-status]': element(),
    '[data-location-setup]': element(),
    '[data-google-connect]': Object.assign(new EventTarget(), {reset() {}}),
    '[data-google-connect-insecure]': element(),
  };
  const dialog = Object.assign(new EventTarget(), {
    open: false,
    ownerDocument: {defaultView: {
      loadCardHelpers,
      localStorage: {getItem: key => stored.get(key), setItem: (key, value) => stored.set(key, value)},
    }, createElement: element},
    querySelector: selector => selectors[selector],
  });
  const panel = createStorybookLocation(dialog);
  return {
    dialog, panel,
    status: selectors['[data-location-status]'],
    list: selectors['[data-location-sources]'],
    map: selectors['[data-location-map]'],
    google: selectors['[data-location-google]'],
    googleStatus: selectors['[data-location-google-status]'],
    googleSetup: selectors['[data-location-setup]'],
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

test('Google locations require a browser opt-in and exact provider evidence', async () => {
  const saved = new Map();
  const helpers = async () => ({createCardElement: config => ({localName: 'hui-map-card', setConfig() {}, config})});
  const {dialog, panel, google, googleStatus, googleSetup, map} = panelFixture(helpers, saved);
  const coordinates = {latitude: 1, longitude: 2};
  const shared = {state: 'away', attributes: {...coordinates, attribution: 'Data from Google Maps'}};
  const hass = {
    user: {is_admin: true},
    states: {
      ...states,
      'device_tracker.renamed_phone': shared,
      'device_tracker.via_registry': {state: 'away', attributes: coordinates},
      'device_tracker.hidden': shared,
      'device_tracker.google_maps_name_only': {state: 'away', attributes: coordinates},
      'person.example_companion': {state: 'home', attributes: {
        ...coordinates, source: 'device_tracker.duplicate_companion',
      }},
      'device_tracker.duplicate_companion': shared,
    },
    entities: {
      'device_tracker.via_registry': {platform: 'google_maps'},
      'device_tracker.hidden': {platform: 'google_maps', hidden: true},
    },
  };
  panel.configure(sourceConfig);
  dialog.open = true;
  panel.update(hass);
  await nextTick();
  assert.equal(google.checked, false);
  assert.equal(googleSetup.hidden, false);
  assert.deepEqual(map.children[0].config.entities, [
    {entity: 'device_tracker.example_google', name: 'Shared phone'}, {entity: 'person.example_companion'},
  ]);
  google.checked = true;
  google.dispatchEvent(new Event('change'));
  await nextTick();
  assert.equal(googleStatus.hidden, true);
  assert.deepEqual(map.children[0].config.entities, [
    {entity: 'device_tracker.example_google', name: 'Shared phone'}, {entity: 'person.example_companion'},
    {entity: 'device_tracker.renamed_phone'}, {entity: 'device_tracker.via_registry'},
  ]);
  assert.deepEqual([...saved.values()], ['true']);
  assert.equal(panelFixture(helpers, saved).google.checked, true);
  google.checked = false;
  google.dispatchEvent(new Event('change'));
  await nextTick();
  assert.deepEqual([...saved.values()], ['false']);
  assert.equal(map.children[0].config.entities.length, 2);
});

test('Google setup is limited to admins and absent Google trackers are reported separately', () => {
  const {dialog, panel, google, googleStatus, googleSetup} = panelFixture(async () => undefined);
  dialog.open = true;
  panel.update({connected: true, user: {is_admin: false}, states});
  google.checked = true;
  google.dispatchEvent(new Event('change'));
  assert.equal(googleSetup.hidden, true);
  assert.equal(googleStatus.hidden, false);
  assert.match(googleStatus.textContent, /No Google shared locations/);
});
