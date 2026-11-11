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

test('legacy dining split retains transforms, custom dimensions, finishes and independent chairs', () => {
  const dining = {id:'family',type:'living-rectangular-dining-set-white',name:'Custom table',
    x:500,y:650,w:220,h:140,rotation:90,modelHeight:76,zIndex:3,entityId:'switch.example'};
  const seat = {id:'my-chair',type:'chair',name:'Keep me',x:551.8,y:579.6,w:44,h:48,rotation:90};
  const collision = {id:'family-chair-2',type:'rug',name:'Keep this ID',x:500,y:650,w:240,h:180,rotation:0};
  const source = {version:2,rooms:[],walls:[],items:[dining,seat,collision]};
  const migrated = Models.splitDiningFurniture(source);
  const table = migrated.items.find(item => item.id === dining.id);
  assert.equal(table.type,'living-rectangular-dining-table-white');
  assert.deepEqual([table.x,table.y,table.rotation,table.w,table.h], [500,650,90,173.8,78.4]);
  assert.equal(table.name,dining.name);
  assert.equal(table.entityId,dining.entityId);
  assert.ok(Math.abs(table.modelHeight - 76*42.3/59) < 1e-6);
  const generated = migrated.items.filter(item => item.type.startsWith('living-dining-chair-'));
  assert.equal(generated.length,5);
  assert.ok(generated.some(item => item.id === 'family-chair-2-2'));
  assert.ok(generated.every(item => item.modelHeight === 76 && item.zIndex === 3));
  assert.ok(migrated.items.includes(seat) && migrated.items.includes(collision));
  assert.equal(Models.splitDiningFurniture(migrated), migrated);
  assert.equal(source.items[0], dining);
});

test('only an aligned dining chair can tuck at the edge below a tabletop', () => {
  const table = {id:'table',type:'diningTable',x:500,y:650,w:136,h:62,rotation:0};
  const chair = {id:'chair',type:'diningChair',x:572,y:650,w:28,h:34,rotation:90};
  const plant = {id:'plant',type:'plant',x:500,y:650,w:30,h:32,rotation:0};
  assert.equal(Models.blockingPlacement(chair,[table]),undefined);
  assert.equal(Models.blockingPlacement(table,[chair]),undefined);
  assert.equal(Models.blockingPlacement({...chair,x:560},[table]),table);
  assert.equal(Models.blockingPlacement({...chair,rotation:270},[table]),table);
  assert.equal(Models.blockingPlacement({...chair,modelHeight:75},[table]),table);
  assert.equal(Models.blockingPlacement({...chair,type:'armchair'},[table]),table);
  assert.equal(Models.blockingPlacement({...chair,id:'second-chair'},[chair]),chair);
  assert.deepEqual(Models.orderMountedObjects([table,plant,chair]),[chair,table,plant]);
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
