import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import test from 'node:test';
import {compileStorybookPlan} from '../ha-local/storybook-scene.mjs';
import {pickEditorItem} from '../ha-local/storybook-editor.mjs';
import {dashboardProjectProblem} from '../ha-local/dashboard-project.mjs';

const window = {};
for (const name of ['inventory.js','control-actions.js','object-controls.js','model-library.js']) {
  runInNewContext(readFileSync(new URL('../public/' + name, import.meta.url), 'utf8'), {window});
}
const Controls = window.RoomcraftObjectControls;
const Models = window.RoomcraftModels;
const Safety = globalThis.RoomcraftEditSafety;
const garage = {id:'garage',type:'garageDoor',x:306,y:112,w:132,h:120,rotation:180,
  garageRoof:'cutaway',garageDriveway:true,garageDrivewayWidth:92};
const car = {id:'prius',type:'garagePriusBlue',x:306,y:112,w:34,h:70,rotation:180};
const lamp = {id:'overhead',type:'garageCeilingLight',x:338,y:112,w:32,h:18,rotation:180};
const project = (items = [garage,car,lamp]) => ({version:2,editableReferenceVersion:10,rooms:[],walls:[],hotspots:[],items});
const publicationProblem = value => dashboardProjectProblem(value,
  {validCameraThumbnail:() => true,validObjectControl:() => true});

test('garage, parked Prius and overhead fixture compile at their ground-floor elevations', () => {
  const source = project();
  const original = structuredClone(source);
  const placements = compileStorybookPlan(source).placements;
  assert.deepEqual(source, original, 'scene compilation never rewrites authored data');
  assert.deepEqual(placements.map(({baseY}) => baseY), [-111,-105.79,-111]);
  assert.deepEqual(placements.map(({x,z,angle}) => [x,z,angle]),
    [[306,112,Math.PI],[306,112,Math.PI],[338,112,Math.PI]]);
  assert.deepEqual(Safety.audit(source), []);
  assert.equal(publicationProblem(source), undefined);
  const restored = JSON.parse(JSON.stringify(source));
  assert.deepEqual(compileStorybookPlan(restored).placements, placements,
    'saved/exported layout keeps the same ground-level scene');
});

test('ground-level car and overhead light pick their visible anchor rather than the upstairs projection', () => {
  for (const item of [garage,car,lamp]) {
    const anchors = new Map([[item.id,{x:.8,y:.3}]]);
    const upstairs = {x:item.x,y:item.y};
    assert.equal(pickEditorItem([item],{x:100,y:100},upstairs,anchors,1000,700),null);
    assert.equal(pickEditorItem([item],{x:800,y:210},null,anchors,1000,700)?.id,item.id);
  }
});

test('garage Inspector settings accept bounded values and clear optional defaults', () => {
  const expect = (key,input,value) => {
    const result = Controls.propertyUpdate(key,input);
    assert.equal(result.valid,true,key + ':' + input);
    assert.equal(result.value,value);
  };
  expect('garageRoof','cutaway','cutaway');
  expect('garageRoof',' full ',undefined);
  expect('garageDriveway','true',true);
  expect('garageDriveway','false',undefined);
  for (const width of [32,92,150.5,200]) expect('garageDrivewayWidth',String(width),width);
  expect('garageDrivewayWidth','',undefined);
  for (const [key,input] of [['garageRoof','open'],['garageRoof',''],['garageDriveway','yes'],
    ['garageDriveway','1'],['garageDrivewayWidth','31.99'],['garageDrivewayWidth','200.01'],
    ['garageDrivewayWidth','Infinity'],['garageDrivewayWidth','NaN'],['garageDrivewayWidth','wide']]) {
    assert.equal(Controls.propertyUpdate(key,input).valid,false,key + ':' + input);
  }
});

test('invalid imported garage settings are rejected by geometry and both publication transports', () => {
  for (const changes of [{garageRoof:'transparent'},{garageRoof:null},{garageDriveway:'true'},
    {garageDriveway:1},{garageDrivewayWidth:31},{garageDrivewayWidth:201},
    {garageDrivewayWidth:Infinity},{garageDrivewayWidth:'92'}]) {
    const malformed = project([{...garage,...changes},car,lamp]);
    const before = structuredClone(malformed);
    assert.ok(Safety.audit(malformed).some(issue => issue.code === 'garage-settings'));
    assert.match(publicationProblem(malformed),/garage roof and driveway settings/i);
    assert.deepEqual(malformed,before,'failed validation leaves the candidate unchanged');
  }
  const legacy = {...garage};
  delete legacy.garageRoof;delete legacy.garageDriveway;delete legacy.garageDrivewayWidth;
  assert.equal(publicationProblem(project([legacy])),undefined,'old roofed garages remain compatible');
});

test('catalog exposes independent car and light, and raster ordering keeps the car above the garage floor', () => {
  const catalog = new Map(Models.catalog().templates.map(item => [item.type,item]));
  const carModel = catalog.get('garagePriusBlue');
  const lightModel = catalog.get('garageCeilingLight');
  assert.ok(carModel && lightModel);
  assert.deepEqual([carModel.w,carModel.h,lightModel.w,lightModel.h],[34,70,32,18]);
  assert.equal(lightModel.visualKind,'light');
  assert.equal(Models.canMap('light.garage_fixture',lightModel),true);
  const rearranged = [car,lamp,garage];
  const original = structuredClone(rearranged);
  const ordered = Models.orderMountedObjects(rearranged);
  assert.deepEqual(Array.from(ordered,item => item.id),['garage','prius','overhead']);
  assert.deepEqual(rearranged,original,'render ordering does not reorder the saved collection');
});
