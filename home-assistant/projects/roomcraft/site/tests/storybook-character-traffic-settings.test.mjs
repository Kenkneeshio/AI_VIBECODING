import assert from 'node:assert/strict';
import test from 'node:test';
import {separateStorybookPeople} from '../ha-local/storybook-person-spacing.mjs';
import {chooseStorybookFamilyLook} from '../ha-local/storybook-family-settings.mjs';
import {normalizeTrafficPreferences,trafficWithPreferences} from '../ha-local/storybook-traffic-preferences.mjs';
import {createTrafficMotion} from '../ha-local/storybook-traffic.mjs';

test('anonymous family priority changes casting while using every look before repetition',()=>{
  for(const [preference,first] of [['dad',0],['mom',1],['baby',2]]){
    const counts=[0,0,0],roles=[];
    for(const id of ['sensor:1','sensor:2','sensor:3']){
      const role=chooseStorybookFamilyLook(id,counts,preference);roles.push(role);counts[role]++;
    }
    assert.equal(roles[0],first);
    assert.deepEqual([...roles].sort(),[0,1,2]);
  }
  assert.equal(chooseStorybookFamilyLook('sensor:1',[0,0,0],'random'),
    chooseStorybookFamilyLook('sensor:1',[0,0,0],'random'));
});

test('two or three characters at one coarse radar anchor remain apart and on reachable floor',()=>{
  const entries=['b','a','c'].map(id=>({id,sample:{x:100,y:100},radius:20}));
  const allowed=(x,y)=>x>=25&&x<=175&&y>=25&&y<=175;
  const result=separateStorybookPeople(entries,{allowsPoint:allowed});
  assert.equal(result.length,3);
  for(const one of result){
    assert.ok(allowed(one.sample.x,one.sample.y));
    for(const other of result)if(one!==other)
      assert.ok(Math.hypot(one.sample.x-other.sample.x,one.sample.y-other.sample.y)>=45);
  }
  assert.deepEqual(result.map(entry=>entry.id),['a','b','c']);
});

test('heavy road artwork packs more cars and crawls nearly stopped with editable settings',()=>{
  const road={centerX:0,width:6200,lanes:[-10,10]};
  const settings=normalizeTrafficPreferences({mode:'heavy',density:100,crawlSpeed:1,tailGlow:3});
  const profile=trafficWithPreferences({severity:'clear',speedFactor:1},settings);
  const motion=createTrafficMotion(road);
  const packed=motion.update(0,profile);
  assert.equal(profile.preview,true);
  assert.equal(profile.severity,'heavy');
  const first=packed[0].x;
  const next=motion.update(.1,profile)[0].x;
  assert.ok(next-first>0&&next-first<.2);
  const sparse=createTrafficMotion(road).update(0,{...profile,density:50});
  assert.ok(packed.length>=sparse.length*1.8);
  assert.equal(normalizeTrafficPreferences({mode:'bad',density:500,crawlSpeed:-3,tailGlow:99}).mode,'live');
});
