import assert from 'node:assert/strict';
import test from 'node:test';
import {Box3, BoxGeometry, Group, Mesh, MeshBasicMaterial} from 'three';
import {applyModelHeight} from '../ha-local/storybook-size.mjs';

const Models = globalThis.RoomcraftModels;
const {templates} = Models.catalog();
const models = new Map(templates.map(model => [model.type, model]));

test('device mapping shows compatible models and preserves camera, garage, and mount semantics', () => {
  const camera = Models.suggestions({entity_id:'camera.example', name:'Camera'}, templates);
  assert.deepEqual(camera.recommended.map(model => model.type), ['cameraThumbnail']);
  assert.deepEqual(camera.available.map(model => model.type), ['cameraThumbnail']);
  const lights = Models.suggestions({entity_id:'light.example', name:'Reading lamp'}, templates);
  assert.ok(lights.recommended.some(model => model.type === 'tableLamp'));
  assert.equal(Models.canMap('sensor.example', models.get('garageDoor')), false);
  assert.equal(Models.canReplace({type:'lamp',entityId:'light.example'}, models.get('lamp'), models.get('floorLamp')), true);
  assert.equal(Models.canReplace({type:'lamp',entityId:'light.example'}, models.get('lamp'), models.get('wallSconce')), false);
  assert.equal(Models.canReplace({type:'cameraThumbnail'}, models.get('cameraThumbnail'), models.get('lamp')), false);
});

test('locking proportions scales both axes and respects the limits of linked touch areas', () => {
  const item = {type:'table', w:160,h:80};
  assert.deepEqual(Models.resizeFootprint(item, 'w', 200, false), {w:200});
  assert.deepEqual(Models.resizeFootprint(item, 'w', 200, true), {w:200,h:100});
  assert.deepEqual(Models.resizeFootprint({...item,entityId:'switch.test'}, 'w', 9000, true), {w:1536,h:768});
  assert.equal(Models.resizeFootprint(item,'h',NaN,false), null);
});

test('top contact allows a lamp on a table and blocks edge overhang and incompatible furniture', () => {
  const nightstand = {id:'stand', type:'nightstand', x:120, y:100, w:62, h:52, rotation:90};
  const lamp = {id:'lamp', type:'tableLamp', x:120, y:100, w:46, h:54};
  const humidifier = {id:'air', type:'humidifier', x:120, y:100, w:46, h:58};
  const bed = {id:'bed', type:'bed', x:120, y:100, w:145, h:160};
  const rug = {...bed, id:'rug', type:'rug'};
  const chair = {...bed, id:'chair', type:'chair'};
  assert.equal(Models.blockingPlacement(lamp, [nightstand, rug, chair]), undefined);
  assert.equal(Models.blockingPlacement({...lamp, x:143}, [nightstand]), nightstand);
  assert.equal(Models.blockingPlacement({...humidifier, x:132}, [nightstand]), nightstand);
  assert.equal(Models.blockingPlacement(lamp, [bed]), bed);
  assert.equal(Models.blockingPlacement(lamp, [nightstand, humidifier]), humidifier);
  assert.deepEqual(Models.orderMountedObjects([lamp, rug, nightstand]), [rug, nightstand, lamp]);
  assert.deepEqual(Models.orderMountedObjects([lamp, bed]), [lamp, bed]);
});

test('floor furniture checks rotated occupied shapes and lets earlier overlaps shrink', () => {
  const sofa = {id:'sofa', type:'sofa', x:140, y:140, w:160, h:230};
  const bench = {id:'bench', type:'bedroomBench', x:174, y:125, w:50, h:55, rotation:16};
  assert.equal(Models.blockingPlacement(bench, [sofa]), undefined);
  const blocked = {...bench, x:50};
  assert.equal(Models.blockingPlacement(blocked, [sofa]), sofa);
  assert.equal(Models.blockingPlacement({...blocked, x:44}, [sofa], blocked), undefined);
  assert.equal(Models.blockingPlacement({...blocked, y:225, x:145}, [sofa], blocked), sofa);
});

test('authored height scales vertically around the model support plane', () => {
  const root = new Group();
  const mesh = new Mesh(new BoxGeometry(40,20,30), new MeshBasicMaterial());
  mesh.position.y = 15;
  root.add(mesh);
  root.position.y = applyModelHeight({type:'dresser',modelHeight:70}, root);
  const {min,max} = new Box3().setFromObject(root);
  assert.equal(min.y, 5);
  assert.equal(max.y, 75);
  assert.equal(max.x - min.x, 40);
  assert.equal(max.z - min.z, 30);
  assert.equal(applyModelHeight({type:'stairs',modelHeight:70}, root), 0);
  mesh.geometry.dispose();
  mesh.material.dispose();
});
