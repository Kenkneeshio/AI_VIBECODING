import assert from 'node:assert/strict';
import test from 'node:test';
import {Box3, Group, Raycaster, Vector3} from 'three';
import {makeStorybookDevice} from '../ha-local/storybook-devices.mjs';
import {makeStorybookParkedVehicle} from '../ha-local/storybook-parked-vehicles.mjs';

const fixture = {id:'garage', type:'garageDoor', w:132, h:120, rotation:180};
const allMeshes = root => {
  const nodes = [];
  root.traverse(node => { if (node.isMesh) nodes.push(node); });
  return nodes;
};

test('cutaway garage exposes its floor while the existing full roof stays compatible', () => {
  const full = makeStorybookDevice(fixture);
  const source = {...fixture, garageRoof:'cutaway'};
  const cutaway = makeStorybookDevice(source);
  assert.equal(source.garageRoof, 'cutaway');
  assert.ok(full.root.getObjectByName('Garage roof'));
  assert.equal(cutaway.root.getObjectByName('Garage roof'), undefined);
  assert.ok(cutaway.root.getObjectByName('Garage interior floor'));
  full.root.updateMatrixWorld(true);
  cutaway.root.updateMatrixWorld(true);
  const ray = new Raycaster(new Vector3(12, 150, 0), new Vector3(0, -1, 0));
  const fullHit = ray.intersectObject(full.root, true)[0];
  const cutawayHit = ray.intersectObject(cutaway.root, true)[0];
  assert.ok(fullHit.point.y > 40, 'full roof covers the interior');
  assert.equal(cutawayHit.object.name, 'Garage interior floor', 'cutaway has clear overhead line of sight');
  assert.ok(cutawayHit.point.y > 5 && cutawayHit.point.y < 6);
  const fullBounds = new Box3().setFromObject(full.root);
  const cutawayBounds = new Box3().setFromObject(cutaway.root);
  assert.equal(fullBounds.min.y, cutawayBounds.min.y);
  assert.ok(cutawayBounds.max.y < fullBounds.max.y);
});

test('cutaway shutter still represents closed, open and unavailable door reports', () => {
  const model = makeStorybookDevice({...fixture, garageRoof:'cutaway'});
  const count = () => {
    let total = 0;
    model.root.traverseVisible(node => { if (node.isMesh) total++; });
    return total;
  };
  model.animate({state:'closed'});
  const closed = count();
  model.animate({state:'open'});
  assert.ok(count() < closed);
  model.animate({state:'closed'});
  assert.equal(count(), closed);
  model.animate({state:'open'}, 0, false, true);
  model.animate({state:'unavailable'});
  assert.equal(count(), closed, 'demo state does not leak into unavailable live state');
});

test('full opaque garage reveals Prius only through its real open doorway', () => {
  const shell = makeStorybookDevice({...fixture,garageRoof:'full'});
  const car = makeStorybookParkedVehicle({type:'garagePriusBlue',w:34,h:70});
  car.root.position.y = 5.21;
  const scene = new Group();
  scene.add(shell.root,car.root);
  const hit = (origin, direction) => {
    scene.updateMatrixWorld(true);
    const meshes = [];
    scene.traverseVisible(node => { if (node.isMesh) meshes.push(node); });
    return new Raycaster(new Vector3(...origin),new Vector3(...direction).normalize()).intersectObjects(meshes,false)[0];
  };
  const frontRays = [12,18,24].flatMap(y => [-8,0,8].map(x => [x,y,150]));
  const carHit = result => result?.object.name.startsWith('prius-');
  shell.animate({state:'closed'});
  assert.ok(frontRays.every(origin => !carHit(hit(origin,[0,0,-1]))), 'closed shutter hides every sampled car sightline');
  shell.animate({state:'open'});
  assert.ok(frontRays.some(origin => carHit(hit(origin,[0,0,-1]))), 'opening removes the shutter and exposes the real model');
  assert.ok(!carHit(hit([0,150,0],[0,-1,0])), 'full roof remains opaque even while the door is open');
  assert.ok(!carHit(hit([150,18,0],[-1,0,0])), 'side walls remain opaque');
  assert.ok(!carHit(hit([0,18,-150],[0,0,1])), 'back wall remains opaque');
  shell.animate({state:'closed'});
  assert.ok(frontRays.every(origin => !carHit(hit(origin,[0,0,-1]))), 'closing conceals the contents again');
  assert.ok(allMeshes(shell.root).every(mesh => mesh.material.transparent === false && mesh.material.opacity === 1));
});

test('garage overhead fixture hangs beneath the opaque roof and points its diffusers down', () => {
  const light = makeStorybookDevice({type:'garageCeilingLight',w:32,h:18});
  const fixtures = allMeshes(light.root).filter(mesh => !mesh.material.isShaderMaterial);
  const bounds = new Box3();
  for (const mesh of fixtures) bounds.expandByObject(mesh);
  assert.ok(bounds.max.y < 52, 'fixture hardware remains below the garage ceiling');
  assert.ok(bounds.min.y > 40, 'fixture remains overhead');
  for (const diffuser of fixtures.filter(mesh => mesh.name === 'Garage light diffuser')) {
    assert.ok(diffuser.position.y < 46, 'light is emitted from the underside rather than into the roof');
  }
});

test('independent garage light only glows for explicit on state and respects brightness', () => {
  const model = makeStorybookDevice({type:'garageCeilingLight', w:32, h:18});
  assert.equal(model.anchorY, 52);
  const diffusers = allMeshes(model.root).filter(node => node.name === 'Garage light diffuser');
  const pool = allMeshes(model.root).find(node => node.material.isShaderMaterial);
  assert.equal(diffusers.length, 2);
  assert.ok(pool.position.y > 5.28, 'floor glow sits above the garage pad, concrete and seam');
  for (const state of [undefined, {state:'off'}, {state:'off',active:true}, {state:'unavailable',active:true}, {state:'unknown'}, {state:'active'}]) {
    model.animate(state);
    assert.equal(diffusers[0].material.emissiveIntensity, 0);
    assert.equal(pool.visible, false);
  }
  model.animate({state:'on',attributes:{brightness:128,rgb_color:[100,180,255]}});
  assert.ok(diffusers[0].material.emissiveIntensity > .5 && diffusers[0].material.emissiveIntensity < .54);
  assert.equal(pool.visible, true);
  model.animate({state:'on',attributes:{brightness:0}});
  assert.equal(pool.visible, false);
  model.animate({state:'on'});
  assert.equal(diffusers[0].material.emissiveIntensity, 1.05);
  model.animate({state:'off'});
  assert.equal(pool.visible, false);
  assert.equal(diffusers[0].material.emissiveIntensity, 0);
});
