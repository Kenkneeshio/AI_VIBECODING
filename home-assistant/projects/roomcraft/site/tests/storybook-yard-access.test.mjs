import assert from 'node:assert/strict';
import test from 'node:test';
import {buildStorybookYardAccess} from '../ha-local/storybook-yard-access.mjs';

const ground = -111;
const flight = {x:70,z:338,angle:.18,item:{type:'stairs',w:90,h:205},apronDepth:40};
const garage = {x:214,z:160,angle:.24,item:{type:'garageDoor',w:98,h:65}};
const plan = {editableStructure:true, stairs:[flight], placements:[garage],
  houseBounds:{minX:160,maxX:910,minZ:212,maxZ:760}, fences:[], walls:[]};
const street = {nearZ:70, sample:(x,z) => ({z:z + 13 * Math.sin(x / 160),yaw:-Math.atan(13 / 160 * Math.cos(x / 160))})};
const heightAt = (x,z) => ground + .45 + .0032 * z + .08 * Math.cos(x / 18);

function capture(source = plan, curb = street) {
  const material = {};
  let mesh;
  const made = buildStorybookYardAccess({
    material:() => material,
    add(geometry) {
      const {position,color,normal} = geometry.attributes;
      mesh = Array.from({length:position.count}, (_, i) => [
        position.getX(i),position.getY(i),position.getZ(i),color.getW(i),normal.getY(i),
      ]);
      geometry.dispose();
    },
  }, source, curb, heightAt, ground);
  return {made,mesh,material};
}

test('yard access joins the rotated low apron and actual house-side curb with feathered edges', () => {
  const path = capture();
  assert.equal(path.made, true);
  assert.deepEqual(capture(), path);
  assert.deepEqual(path.material, {vertexColors:true,transparent:true,depthWrite:false});
  const points = path.mesh;
  const start = points[4];
  const run = -flight.item.h / 2 - flight.apronDepth + .48;
  assert.ok(Math.abs(start[0] - flight.x + run * Math.sin(flight.angle)) < 1e-4);
  assert.ok(Math.abs(start[2] - flight.z - run * Math.cos(flight.angle)) < 1e-4);
  assert.ok(Math.abs(start[1] - ground - 2.965) < 1e-4);
  assert.ok(points.slice(0,-9).every(([x,,z]) => z > street.sample(x, street.nearZ).z - .181));
  assert.ok(points.slice(-9).every(([x,,z]) => Math.abs(z - street.sample(x, street.nearZ).z + .32) < 1e-4));
  assert.ok(Math.abs(points.at(-5)[1] - ground - 4.965) < 1e-4);
  assert.ok(points.every((point, i) => point[4] > 0 && (i % 9 === 0 || i % 9 === 8 ? point[3] === 0 : point[3] > 0)));
});

test('yard access skips blocked, undersized or ambiguous approaches', () => {
  const garageInRoute = {...garage,x:96,z:131,item:{...garage.item,w:260,h:108}};
  assert.equal(capture({...plan,placements:[garageInRoute]}).made, false);
  assert.equal(capture({...plan,stairs:[flight,{...flight,x:108}]}).made, false);
  assert.equal(capture({...plan,stairs:[{...flight,angle:Math.PI}]}).made, false);
  assert.equal(capture(plan,{nearZ:174}).made, false);
});
