import test from 'node:test';
import assert from 'node:assert/strict';
import {INLAND_POPULATION,INLAND_SPECIES,planInlandWildlife,sampleInlandWildlife} from '../ha-local/storybook-inland-wildlife.mjs';

const plan={houseBounds:{minX:360,maxX:1450,minZ:185,maxZ:835}};
const heightAt=(x,z)=>-111+Math.sin(x*.001)*4+Math.cos(z*.001)*3;
const groups=planInlandWildlife({plan,heightAt,canPlace:(x,z)=>!(x>1800&&x<1860&&z>1300&&z<1390)});

test('120 stable individuals across regional habitats avoid the home and blocked land',()=>{
  const ids=groups.flatMap(group=>group.members.map(member=>member.id));
  assert.equal(INLAND_POPULATION,120);assert.equal(ids.length,120);
  assert.equal(new Set(ids).size,120);assert.ok(INLAND_SPECIES.length>=40);
  assert.ok(['bobcat','raccoon','coyote','california-quail','greater-roadrunner'].every(id=>INLAND_SPECIES.some(s=>s.id===id)));
  assert.deepEqual([...new Set(groups.map(g=>g.habitat))].sort(),['canyon','desert','riparian','scrub']);
  for(const group of groups){
    assert.ok(group.z>plan.houseBounds.maxZ+200);
    assert.ok(Number.isFinite(group.y));
    assert.ok(!(group.x>1800&&group.x<1860&&group.z>1300&&group.z<1390));
  }
});

test('all identities rotate through multiple actions and paired encounters reproducibly',()=>{
  const seen=new Set(),modes=new Map(),interactions=new Set();
  const options={heightAt,worldLife:{density:1,pace:1,seed:37}};
  for(let t=0;t<720;t+=2){
    const sampleOptions={...options,night:t>=360};
    const actors=sampleInlandWildlife(groups,t%360,sampleOptions);
    assert.deepEqual(actors,sampleInlandWildlife(groups,t%360,sampleOptions));
    assert.ok(actors.length<=32);
    for(const actor of actors){
      seen.add(actor.id);
      if(!modes.has(actor.id))modes.set(actor.id,new Set());modes.get(actor.id).add(actor.mode);
      if(actor.interaction)interactions.add(actor.interaction);
      assert.ok([actor.x,actor.y,actor.z,actor.size,actor.flyHeight].every(Number.isFinite));
      assert.ok(Math.abs(actor.y-heightAt(actor.x,actor.z))<.0001);
      assert.ok(actor.z>plan.houseBounds.maxZ+200);
      assert.ok(groups.some(g=>g.members.some(m=>m.id===actor.partnerId)));
    }
  }
  assert.equal(seen.size,120);
  assert.ok([...modes.values()].every(set=>set.size>=3));
  assert.ok(interactions.has('watch')&&interactions.has('greet')&&interactions.has('flock'));
  assert.deepEqual(sampleInlandWildlife(groups,30,{worldLife:{landWildlife:false}}),[]);
  assert.deepEqual(sampleInlandWildlife(groups,30,{worldLife:{density:0}}),[]);
  assert.deepEqual(sampleInlandWildlife([],30,{worldLife:{density:1}}),[]);
});
