import assert from 'node:assert/strict';
import test from 'node:test';
import {HOLIDAY_IDS, normalizeHolidaySettings, validHolidaySettings, validHolidayDate,
  withHolidaySettings} from '../ha-local/storybook-holiday-settings.mjs';
import {validSceneSettings} from '../ha-local/storybook-scene-settings.mjs';
import {saveHolidaySettings} from '../ha-local/storybook-holiday-save.mjs';

test('holiday defaults and per-holiday modes are deterministic and independent', () => {
  const settings = normalizeHolidaySettings();
  assert.equal(new Set(HOLIDAY_IDS).size, 31);
  assert.equal(settings.windowDays, 7); assert.equal(settings.intensity, .7);
  assert.ok(HOLIDAY_IDS.every(id => settings.modes[id] === 'auto'));
  const input = {modes: {christmas: 'on', halloween: 'off'}, events: false, dateOverrides: {easter: '04-09'}};
  const copy = structuredClone(input), next = normalizeHolidaySettings(input);
  assert.equal(next.modes.christmas, 'on'); assert.equal(next.modes.halloween, 'off');
  assert.equal(next.modes['lunar-new-year'], 'auto'); assert.equal(next.events, false);
  assert.deepEqual(normalizeHolidaySettings(next), next); assert.deepEqual(input, copy);
  next.dateOverrides.easter = '04-10'; assert.equal(input.dateOverrides.easter, '04-09');
});

test('authoring rejects malformed settings, unsupported IDs and invalid calendar dates', () => {
  assert.ok(validHolidaySettings(undefined)); assert.ok(validHolidaySettings({}));
  for (const date of ['02-29', '2000-02-29', '2028-02-29', '12-31']) assert.ok(validHolidayDate(date), date);
  for (const date of ['1900-02-29', '2027-02-29', '04-31', '2-01', '2200-01-01', '1899-12-31', '2026-13-01']) assert.equal(validHolidayDate(date), false, date);
  const bad = [null, [], {enabled: 1}, {lighting: 'off'}, {windowDays: 0}, {windowDays: 32},
    {windowDays: 2.5}, {intensity: NaN}, {intensity: 1.1}, {preview: 'christmas'},
    {modes: {christmas: 'keep'}}, {modes: {unknown: 'auto'}}, {modes: []},
    {dateOverrides: {christmas: '02-30'}}, {dateOverrides: {unknown: '01-01'}},
    JSON.parse('{"modes":{"__proto__":"on"}}'), {placement: {x: 1,y: 2,scale: 1,rotation: 360}},
    {placement: {x: 1,y: 2,scale: .3,rotation: 0}}, {placement: {x: 1,y: 2,scale: 1,rotation: 0,extra: true}}];
  for (const value of bad) assert.equal(validHolidaySettings(value), false, JSON.stringify(value));
  assert.ok(validHolidaySettings({placement: {x: -4000,y: 5000,scale: .4,rotation: 359}}));
  assert.ok(validSceneSettings({traffic: false, holidays: {modes: {christmas: 'off'}}}));
  assert.equal(validSceneSettings({holidays: {enabled: 'false'}}), false);
});

test('scene updates round-trip without touching objects, other scene settings or previous history', () => {
  const project = {version: 2, rooms: [], walls: [], items: [{id: 'lamp', entityId: 'light.synthetic'}],
    hotspots: [], sceneSettings: {sky: false, dockAlignment: 'left'}};
  const before = structuredClone(project), history = [structuredClone(project)];
  project.sceneSettings = withHolidaySettings(project.sceneSettings, {modes: {christmas: 'on'},
    placement: {x: 700,y: 80,scale: 1.2,rotation: 15}});
  const imported = JSON.parse(JSON.stringify(project));
  assert.ok(validSceneSettings(imported.sceneSettings));
  assert.deepEqual(imported.items, before.items); assert.equal(imported.sceneSettings.sky, false);
  assert.equal(imported.sceneSettings.holidays.modes.christmas, 'on');
  assert.deepEqual(history[0], before);
  assert.equal(withHolidaySettings(project.sceneSettings, {intensity: 3}), project.sceneSettings);
  assert.deepEqual(withHolidaySettings(project.sceneSettings, undefined), before.sceneSettings);
  assert.equal(withHolidaySettings({holidays: {}}, undefined), undefined);
});

const fixture = () => ({title: 'Fixture', views: [{path: 'home'}], unrelated: {keep: true},
  roomcraft_layout: {version: 2,rooms: [],walls: [],items: [{id: 'fixture', entityId: 'light.synthetic'}],hotspots: [],sceneSettings: {wind: false}},
  roomcraft_plan: {type: 'picture-elements', image: '/api/image/serve/' + 'a'.repeat(32) + '/original', elements: []}});
const saveOptions = {stillAuthorized: () => true, savedAt: '2026-11-12T12:00:00.000Z'};
function sessionFor(initial) {
  let config = structuredClone(initial); const calls = [];
  return {user: {is_admin: true}, calls, get config() { return config; }, async callWS(request) {
    calls.push(structuredClone(request));
    if (request.type === 'lovelace/config/save') { config = structuredClone(request.config); return; }
    return structuredClone(config);
  }};
}

test('live holiday save preserves unrelated latest layout and retains rollback snapshot', async () => {
  const original = fixture(), session = sessionFor(original);
  const result = await saveHolidaySettings(session, 'roomcraft-home', undefined, {modes: {christmas: 'on'}}, saveOptions);
  assert.equal(result.status, 'saved'); assert.equal(result.value.modes.christmas, 'on');
  assert.deepEqual(result.config.views, original.views); assert.deepEqual(result.config.unrelated, original.unrelated);
  assert.deepEqual(result.layout.items, original.roomcraft_layout.items); assert.equal(result.layout.sceneSettings.wind, false);
  assert.deepEqual(result.config.roomcraft_snapshots[0].layout, original.roomcraft_layout);
  const writeCount = session.calls.filter(call => call.type.endsWith('/save')).length;
  const repeated = await saveHolidaySettings(session, 'roomcraft-home', result.value, result.value, saveOptions);
  assert.equal(repeated.status, 'saved'); assert.equal(session.calls.filter(call => call.type.endsWith('/save')).length, writeCount);
});

test('live save fails closed on stale settings, lost authorization, invalid input and mismatched readback', async () => {
  const original = fixture(); original.roomcraft_layout.sceneSettings.holidays = {modes: {christmas: 'off'}};
  const stale = sessionFor(original);
  assert.equal((await saveHolidaySettings(stale, 'roomcraft-home', undefined, {}, saveOptions)).status, 'changed');
  assert.equal(stale.calls.length, 1);
  for (const [dashboard, options, value] of [['another', saveOptions, {}], ['roomcraft-home', {...saveOptions, stillAuthorized: () => false}, {}], ['roomcraft-home', saveOptions, {enabled: 1}]]) {
    const session = sessionFor(fixture()); await saveHolidaySettings(session, dashboard, undefined, value, options);
    assert.equal(session.calls.length, 0);
  }
  const session = sessionFor(fixture()); let reads = 0;
  const overwritten = {user: session.user, async callWS(request) {
    if (request.type === 'lovelace/config' && ++reads > 1) return fixture();
    return session.callWS(request);
  }};
  assert.equal((await saveHolidaySettings(overwritten, 'roomcraft-home', undefined, {enabled: false}, saveOptions)).status, 'unverified');
  const revoked = sessionFor(fixture());
  assert.equal((await saveHolidaySettings(revoked, 'roomcraft-home', undefined, {}, {...saveOptions, stillAuthorized: () => revoked.calls.length === 0})).status, 'closed');
  assert.equal(revoked.calls.length, 1);
});
