import test from 'node:test';
import assert from 'node:assert/strict';
import {createStorybookPersonMotion} from '../ha-local/storybook-person-motion.mjs';

test('walking speed changes travel while the authored route still governs movement',()=>{
  const make=()=>createStorybookPersonMotion({allowsPoint:(x,y)=>x>=0&&x<=300&&y===0,
    findRoute:(_from,to)=>[to]});
  const slow=make(),fast=make();
  for(const motion of [slow,fast]){motion.aim({x:0,y:0},0,false);motion.aim({x:200,y:0},0,false);}
  slow.setSpeed(40);fast.setSpeed(200);
  assert.equal(slow.sample(.5,false).x,20);
  assert.equal(fast.sample(.5,false).x,100);
  assert.equal(slow.aim({x:400,y:0},.5,false),false);
});
