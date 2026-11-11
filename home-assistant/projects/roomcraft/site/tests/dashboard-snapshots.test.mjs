import assert from 'node:assert/strict';
import test from 'node:test';
import {keepPreviousDashboardDesign, readDashboardSnapshots, restoreDashboardDesign} from '../ha-local/dashboard-snapshots.mjs';

const time = '2026-05-12T10:00:00.000Z';
const later = '2026-05-12T12:00:00.000Z';
const planImage = id => `/api/image/serve/${id.repeat(32)}/original`;

function dashboard(label, image = 'a') {
  return {
    roomcraft_layout: {version: 2, rooms: [], walls: [], items: [{id: label}], hotspots: []},
    roomcraft_plan: {type: 'picture-elements', image: planImage(image), elements: [{type: 'icon', title: label}]},
    roomcraft_health: {cards: []}, views: [{path: 'home'}, {path: 'studio'}],
  };
}

function entry(label, savedAt = time, image) {
  const config = dashboard(label, image);
  return {savedAt, layout: config.roomcraft_layout, plan: config.roomcraft_plan};
}

function names(config) {
  return readDashboardSnapshots(config).map(snapshot => snapshot.layout.items[0].id);
}

test('publishing a distinct layout retains the three most recent previous designs in the same config', () => {
  let saved = dashboard('first');
  for (const label of ['second', 'third', 'fourth', 'fifth']) {
    saved = keepPreviousDashboardDesign(saved, dashboard(label), time);
  }
  assert.deepEqual(names(saved), ['fourth', 'third', 'second']);
  assert.equal(saved.roomcraft_layout.items[0].id, 'fifth');
  assert.equal(saved.roomcraft_snapshots.length, 3);
  assert.deepEqual(saved.views, dashboard('first').views);
});

test('republishing identical layout and projection under a new image ID does not consume a slot', () => {
  const current = {...dashboard('active'), roomcraft_snapshots: [entry('previous')]};
  const next = {...current, roomcraft_plan: dashboard('active', 'b').roomcraft_plan};
  assert.equal(keepPreviousDashboardDesign(current, next, later), next);
  assert.deepEqual(names(next), ['previous']);
});

test('restoring swaps the layout and projection while retaining the former active design for undo', () => {
  const current = {...dashboard('active', 'a'), roomcraft_snapshots: [entry('recent', time, 'b'), entry('older', time, 'c')]};
  const before = structuredClone(current);
  const restored = restoreDashboardDesign(current, 1, later);
  assert.equal(restored.roomcraft_plan.image, planImage('c'));
  assert.equal(restored.roomcraft_plan.elements[0].title, 'older');
  assert.equal(restored.roomcraft_layout.items[0].id, 'older');
  assert.equal(restored.roomcraft_snapshots[0].savedAt, later);
  assert.deepEqual(names(restored), ['active', 'recent']);
  assert.equal(restored.views, current.views);
  assert.equal(restored.roomcraft_health, current.roomcraft_health);
  assert.equal(restoreDashboardDesign(restored, 0, later).roomcraft_plan.image, planImage('a'));
  assert.equal(restoreDashboardDesign(current, 3, later), null);
  assert.deepEqual(current, before);
});

test('history ignores malformed, duplicate, active and mutable-image entries', () => {
  const bad = entry('mutable');
  bad.plan.image = '/local/old.png';
  const nullItem = entry('null-item');
  nullItem.layout.items = [null];
  const current = {...dashboard('active'), roomcraft_snapshots: [
    null, entry('active', time, 'e'), bad, nullItem,
    entry('invalid-date', '2026-02-31T00:00:00.000Z'), entry('valid'), entry('valid', later, 'd'),
  ]};
  assert.deepEqual(names(current), ['valid']);
  assert.equal(readDashboardSnapshots(current)[0].savedAt, time);
});
