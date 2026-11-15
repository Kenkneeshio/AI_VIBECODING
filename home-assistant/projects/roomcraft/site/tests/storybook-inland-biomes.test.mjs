import test from 'node:test';
import assert from 'node:assert/strict';
import {sampleInlandBiomes,createInlandWatercourse} from '../ha-local/storybook-inland-biomes.mjs';

const house={minX:360,maxX:1450,minZ:185,maxZ:835};
test('canyon shoulders, seasonal creek and desert transition vary smoothly away from home',()=>{
  const home=sampleInlandBiomes(900,500,house);
  const canyon=sampleInlandBiomes(house.minX-900+270,house.maxZ+700,house);
  const desert=sampleInlandBiomes(house.maxX+1250,house.maxZ+800,house);
  const creek=sampleInlandBiomes(house.maxX+610+115*Math.sin((600-220)/1150*6.1),house.maxZ+600,house);
  assert.ok(canyon.canyon>.6&&canyon.height>home.height+10);
  assert.ok(desert.desert>.8&&desert.height>home.height);
  assert.ok(creek.riparian>.3&&creek.creek>.2);
  for(const sample of [home,canyon,desert,creek])assert.ok(Object.values(sample).every(Number.isFinite));
});

test('watercourse shares meadow height and owns bounded disposable geometry',()=>{
  const heightAt=(x,z)=>-111+Math.sin(x*.002)*2+Math.cos(z*.003)*2;
  const root=createInlandWatercourse(house,heightAt);
  assert.equal(root.children.length,2);
  for(const mesh of root.children){
    assert.equal(mesh.geometry.index.count,80*6);
    const p=mesh.geometry.attributes.position;
    for(let i=0;i<p.count;i++)assert.ok(Math.abs(p.getY(i)-heightAt(p.getX(i),p.getZ(i))-.24)<.0001);
    mesh.geometry.dispose();
  }
  root.children[0].material.dispose();
});
