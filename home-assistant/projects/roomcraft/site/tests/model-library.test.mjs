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
