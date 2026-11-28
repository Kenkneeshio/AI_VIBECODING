import test from 'node:test';
import assert from 'node:assert/strict';
import {createIdleCameraDirector, IDLE_CAMERA_DEFAULTS, normalizeIdleCameraSettings} from '../ha-local/storybook-idle-camera.mjs';
import {readIdlePreferences} from '../ha-local/storybook-idle-runtime.mjs';

const interests = [
  {id:'home-holiday', focus:{x:500,y:30,z:200}, weight:6, zoomFactor:2},
  {id:'dolphins', focus:{x:700,y:-105,z:-800}, weight:3, zoomFactor:2.5},
  {id:'garden', focus:{x:900,y:-100,z:150}, weight:1, zoomFactor:1.5},
];
const homeMs = 256_000;
const cycleMs = 320_000;

test('the menu defaults to one minute and migrates the prior untouched 30-second preference',()=>{
  assert.equal(readIdlePreferences().idleAfterMs,60_000);
  assert.equal(readIdlePreferences({idleAfterMs:30_000,travelMs:24_000,lingerMs:16_000,homeMs:45_000}).idleAfterMs,60_000);
  assert.equal(readIdlePreferences({idleAfterMs:30_000,travelMs:30_000,lingerMs:16_000,homeMs:45_000}).idleAfterMs,30_000);
});

test('60 seconds of inactivity starts the home stage; touch immediately restores home and restarts the deadline', () => {
  const director=createIdleCameraDirector();
  assert.deepEqual(director.sample(100,{interests}),{active:false,targetId:null,focus:undefined,zoomFactor:1,phase:'waiting',nextWakeAt:60100});
  assert.equal(director.sample(60099,{interests}).active,false);
  const start=director.sample(60100,{interests});
  assert.equal(start.active,true);assert.equal(start.phase,'home');assert.equal(start.focus,undefined);assert.equal(start.zoomFactor,1);
  const midway=director.sample(72100+homeMs,{interests});
  assert.equal(midway.focus.weight,.5);assert.ok(midway.zoomFactor>1&&midway.zoomFactor<2.5);
  const home=director.touch(72101+homeMs);
  assert.equal(home.active,false);assert.equal(home.focus,undefined);assert.equal(home.zoomFactor,1);
  assert.equal(director.sample(132100+homeMs,{interests}).active,false);
  assert.equal(director.sample(132101+homeMs,{interests}).active,true);
});

test('instant start spends 80 percent at home before a smooth round trip', () => {
  const director=createIdleCameraDirector();director.start(1000);
  assert.equal(director.sample(256999,{interests}).phase,'home');
  assert.equal(director.sample(257000,{interests}).focus.weight,0);
  assert.equal(director.sample(281000,{interests}).phase,'linger');
  assert.equal(director.sample(309000,{interests}).focus.weight,.5);
  assert.ok(director.sample(320999,{interests}).focus.weight<.000001);
  assert.equal(director.sample(321000,{interests}).phase,'home');
});

test('blocked, disabled and reduced-motion states cannot accumulate a pending excursion', () => {
  for (const option of ['blocked','reducedMotion','enabled']) {
    const director=createIdleCameraDirector();director.start(0);director.sample(18000,{interests});
    const state=director.sample(20000,{interests,[option]:option==='enabled'?false:true});
    assert.deepEqual(state,{active:false,targetId:null,focus:undefined,zoomFactor:1,phase:'blocked',nextWakeAt:null});
    assert.equal(director.sample(1_000_000,{interests}).active,false);
    assert.equal(director.sample(1_029_999,{interests}).active,false);
    assert.equal(director.sample(1_060_000,{interests}).active,true);
  }
});

test('seeded weighted selection is independent of input order and rendering frequency', () => {
  const dense=createIdleCameraDirector(), sparse=createIdleCameraDirector();dense.start(0);sparse.start(0);
  for(let time=0;time<=cycleMs*12;time+=1000){
    const actual=dense.sample(time,{interests});
    if(time%13000===0)assert.deepEqual(sparse.sample(time,{interests:[...interests].reverse()}),actual);
  }
  const counts=new Map(), selections=[], weighted=createIdleCameraDirector();weighted.start(0);
  for(let i=0;i<300;i++){
    const state=weighted.sample(i*cycleMs+homeMs+12000,{interests});
    selections.push(state.targetId);counts.set(state.targetId,(counts.get(state.targetId)??0)+1);
  }
  assert.equal(counts.size,3);assert.ok(counts.get('home-holiday')>counts.get('garden')*3);
  const other=createIdleCameraDirector({seed:83});other.start(0);
  assert.notDeepEqual(selections,Array.from({length:300},(_,i)=>other.sample(i*cycleMs+homeMs+12000,{interests}).targetId));
});

test('one snapshotted destination prevents jumps when moving interests change or disappear', () => {
  const director=createIdleCameraDirector();director.start(0);
  const only=[{id:'dolphin',focus:{x:12,y:20,z:30},zoomFactor:2}];
  const first=director.sample(homeMs+1000,{interests:only});only[0].focus.x=999;
  const second=director.sample(homeMs+2000,{interests:only}), vanished=director.sample(homeMs+24000,{interests:[]});
  assert.equal(first.focus.x,12);assert.equal(second.focus.x,12);assert.equal(vanished.focus.x,12);
  assert.equal(vanished.targetId,'dolphin');assert.equal(director.sample(cycleMs-1,{interests:[]}).phase,'return');
  const next=director.sample(cycleMs,{interests:[]});assert.equal(next.phase,'home');assert.equal(next.targetId,null);
});

test('invalid interests and settings remain finite and harmless, including backward or unavailable time', () => {
  assert.deepEqual(normalizeIdleCameraSettings(null),IDLE_CAMERA_DEFAULTS);
  assert.deepEqual(normalizeIdleCameraSettings({idleAfterMs:-1,travelMs:Infinity,lingerMs:1,homeMs:NaN,seed:1.8}),
    {idleAfterMs:5000,travelMs:24000,lingerMs:5000,homeShare:80,seed:1});
  const invalid=[{id:'bad',focus:{x:Infinity,y:0,z:0}},{id:'zero',focus:{x:0,y:0,z:0},weight:0},null];
  const director=createIdleCameraDirector();director.start(1000);
  assert.equal(director.sample(2000,{interests:invalid}).phase,'home');
  assert.equal(director.sample(3000,{interests:null}).targetId,null);
  const safe=director.sample(NaN);assert.ok(Number.isFinite(safe.zoomFactor));
  const backwards=director.sample(500,{interests});assert.equal(backwards.active,false);assert.equal(backwards.nextWakeAt,60500);
});

test('idle favors beach, then traffic, activities, and interactions over a full rotation', () => {
  const director = createIdleCameraDirector();
  director.start(0);
  const focus = {x:20,y:10,z:30};
  const subjects = ['scenery:beach','scenery:road','activity:kite','landmark:office']
    .map(id => ({id,focus,weight:1}));
  const counts = {};
  for (let index=0;index<18;index++) {
    const id=director.sample(index*cycleMs+homeMs+1000,{interests:subjects}).targetId;
    counts[id]=(counts[id] ?? 0)+1;
  }
  assert.deepEqual(counts,{'scenery:beach':9,'scenery:road':5,'activity:kite':3,'landmark:office':1});
  assert.ok(homeMs / cycleMs === .8);
});

test('three-stage idle starts its house cycle one minute into idle', () => {
  const director = createIdleCameraDirector({introMs:60_000});
  director.start(0);
  assert.equal(director.sample(59_999,{interests}).phase,'intro');
  assert.equal(director.sample(60_000,{interests}).phase,'home');
  assert.equal(director.sample(60_000+homeMs,{interests}).phase,'outbound');
  assert.equal(director.touch(60_001+homeMs).phase,'waiting');
});
