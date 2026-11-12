import assert from 'node:assert/strict';
import test from 'node:test';
import {storybookPlantClearsStructures} from '../ha-local/storybook-scene.mjs';

test('generated shrubs and their outer leaves cannot occupy the cutaway garage pad', () => {
  const garage={x:260,z:155,angle:Math.PI,item:{type:'garageDoor',w:132,h:120}};
  const radius=42*1.26+4;
  assert.equal(storybookPlantClearsStructures([garage],260,155,radius),false);
  assert.equal(storybookPlantClearsStructures([garage],160,155,radius),false,
    'a shrub outside the garage still intersects it through its leaves');
  assert.equal(storybookPlantClearsStructures([garage],130,155,radius),true,
    'nearby planting remains when the full canopy clears the structure');
});

test('plant clearance follows garage rotation and also excludes stairs', () => {
  const garage={x:400,z:250,angle:Math.PI/2,item:{type:'garageDoor',w:160,h:80}};
  assert.equal(storybookPlantClearsStructures([garage],400,331,12),false);
  assert.equal(storybookPlantClearsStructures([garage],471,250,12),true);
  const stairs={x:100,z:360,angle:0,item:{type:'stairs',w:80,h:220}};
  assert.equal(storybookPlantClearsStructures([stairs],145,420,20),false);
  assert.equal(storybookPlantClearsStructures([garage,stairs],220,470,20),true);
});
