import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import test from 'node:test';
import {dashboardProjectProblem} from '../ha-local/dashboard-project.mjs';

const window = {};
for (const name of ['control-actions.js', 'object-controls.js', 'model-library.js']) {
  runInNewContext(readFileSync(new URL('../public/' + name, import.meta.url), 'utf8'), {window});
}
const Models = window.RoomcraftModels;
const Controls = window.RoomcraftObjectControls;
const Safety = globalThis.RoomcraftEditSafety;
const catalog = new Map(Models.catalog().templates.map(model => [model.type, model]));
const road = {id:'branch', type:'scenerySideRoad', name:'Side road', x:1660, y:-45, w:64, h:380, rotation:0, entityId:''};
const house = {id:'house', type:'sceneryRanchHouse', name:'Landscape house', x:1775, y:420, w:130, h:176, rotation:90, entityId:''};
const office = {id:'office', type:'sceneryOfficeCampus', name:'Office campus', x:2020, y:700, w:220, h:180, rotation:90, entityId:''};
const layout = (items = [road, house, office]) => ({version:2, rooms:[], walls:[], hotspots:[], items});
const publicationProblem = project => dashboardProjectProblem(project,
  {validCameraThumbnail:() => true, validObjectControl:() => true});
const plain = value => JSON.parse(JSON.stringify(value));

test('exterior catalog models remain movable beyond the condo and cannot become device buttons', () => {
  const source = layout();
  const before = structuredClone(source);
  assert.deepEqual(Safety.audit(source), []);
  assert.equal(publicationProblem(source), undefined);
  assert.deepEqual(source, before);
  for (const item of source.items) {
    const model = catalog.get(item.type);
    assert.ok(model, item.type);
    assert.equal(model.group, 'scenery');
    assert.match(model.tags, /decorative exterior/);
    assert.equal(Models.isExterior(item.type), true);
    assert.deepEqual([model.w, model.h], [item.w, item.h]);
    assert.equal(Controls.validBinding(item), true);
    for (const entity of ['light.porch', 'switch.house', 'cover.garage', 'sensor.temperature']) {
      assert.equal(Models.canMap(entity, model), false);
      assert.equal(Models.canBind({...item,x:600,y:300}, entity, model), false);
    }
    assert.equal(Models.canReplace(item, model, catalog.get('lamp')), false);
  }
  assert.equal(Models.supportsHeight(house), true);
  assert.equal(Models.supportsHeight(office), true);
  assert.equal(Models.supportsHeight(road), false);
  assert.equal(Models.canMap('light.porch', catalog.get('lamp')), true, 'ordinary device mapping stays enabled');
});

test('numeric and handle resizing enforce the same road limits with or without ratio lock', () => {
  assert.deepEqual(plain(Models.resizeFootprint(road, 'w', 10, false)), {w:48});
  assert.deepEqual(plain(Models.resizeFootprint(road, 'w', 400, false)), {w:140});
  assert.deepEqual(plain(Models.resizeFootprint(road, 'h', 20, false)), {h:120});
  assert.deepEqual(plain(Models.resizeFootprint(road, 'h', 1200, false)), {h:1000});
  assert.deepEqual(plain(Models.resizeCornerFootprint(road, 200, 1500, false)), {w:140,h:1000});
  for (const [w,h] of [[1,1], [100,650], [400,1500]]) {
    const resized = Models.resizeCornerFootprint(road, w, h, true);
    assert.ok(resized.w >= 48 && resized.w <= 140);
    assert.ok(resized.h >= 120 && resized.h <= 1000);
    assert.ok(Math.abs(resized.w / resized.h - road.w / road.h) < .0002);
    assert.deepEqual(Safety.audit(layout([{...road,...resized}])), []);
  }
  assert.equal(Models.resizeFootprint(road, 'w', Infinity, false), null);
  assert.deepEqual(plain(Models.resizeFootprint(house, 'w', 200, false)), {w:200});
  assert.deepEqual(plain(Models.resizeFootprint(office, 'w', 240, false)), {w:240});
  assert.deepEqual(plain(Models.resizeFootprint(office, 'h', 200, false)), {h:200});
});

test('road Inspector explains automatic alignment and exposes bounded dimensions without device controls', () => {
  const field = (label,key,value,type,attributes = '') =>
    `<label>${label}<input data-prop="${key}" value="${value}" type="${type}" ${attributes}></label>`;
  for (const item of [road, house, office]) {
    const html = Controls.renderInspector(item, catalog.get(item.type), field, () => '', String, [], {height:Models.supportsHeight(item)});
    assert.doesNotMatch(html, /DASHBOARD BUTTON|data-prop="entityId"/);
    assert.match(html, /data-prop="x"/);
    assert.match(html, /data-prop="y"/);
    assert.match(html, /data-action="delete"/);
    assert.match(html, /data-action="duplicate"/);
    if (item === road) {
      assert.match(html, /data-prop="rotation"[^>]*disabled/);
      assert.match(html, /runs straight along the home’s plan grid/);
      assert.match(html, /data-prop="w"[^>]*min="48" max="140"/);
      assert.match(html, /data-prop="h"[^>]*min="120" max="1000"/);
      assert.doesNotMatch(html, /data-action="rotate"/);
    } else {
      assert.match(html, /data-action="rotate"/);
      assert.match(html, /data-prop="modelHeight"/);
      assert.doesNotMatch(html, /data-prop="rotation"[^>]*disabled/);
    }
  }
});

test('unsafe imported side roads reject the whole edit and both dashboard publication routes', () => {
  const previous = layout();
  for (const change of [{w:47.9}, {w:140.1}, {h:119.9}, {h:1000.1}, {rotation:90},
    {rotation:'0'}, {modelHeight:20}, {w:'64'}, {h:NaN}]) {
    const candidate = layout([{...road,...change}, house]);
    const before = structuredClone(candidate);
    assert.ok(Safety.audit(candidate).some(issue => issue.code === 'side-road-settings'));
    assert.equal(Safety.repair(candidate, {previous}).project, previous);
    assert.ok(publicationProblem(candidate));
    assert.deepEqual(candidate, before);
  }
  for (const [w,h] of [[48,120], [140,1000]]) {
    assert.equal(publicationProblem(layout([{...road,w,h}])), undefined);
  }
});

test('decoration binding rejection also covers hand-edited files and secondary action targets', () => {
  for (const item of [road,house,office]) {
    for (const change of [{entityId:'switch.house'}, {tapEntityId:'light.porch'},
      {holdEntityId:'cover.garage'}, {presenceEntityId:'binary_sensor.people'},
      {presenceTrackEntityId:'sensor.targets'}, {vacuumMapEntityId:'camera.map'},
      {imageEntityId:'image.person'}, {eventEntityIds:['binary_sensor.person']}]) {
      const invalid = {...item,...change};
      assert.equal(Controls.validBinding(invalid), false);
      assert.ok(Safety.audit(layout([invalid])).some(issue => issue.code === 'exterior-binding'));
      assert.match(publicationProblem(layout([invalid])), /decorative/);
    }
  }
});
