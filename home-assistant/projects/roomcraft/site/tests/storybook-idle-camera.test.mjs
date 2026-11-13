import test from 'node:test';
import assert from 'node:assert/strict';
import {createIdleCameraDirector, IDLE_CAMERA_DEFAULTS, normalizeIdleCameraSettings} from '../ha-local/storybook-idle-camera.mjs';

const interests = [
  {id:'home-holiday', focus:{x:500,y:30,z:200}, weight:6, zoomFactor:2},
  {id:'dolphins', focus:{x:700,y:-105,z:-800}, weight:3, zoomFactor:2.5},
  {id:'garden', focus:{x:900,y:-100,z:150}, weight:1, zoomFactor:1.5},
];
const cycleMs = IDLE_CAMERA_DEFAULTS.travelMs * 2 + IDLE_CAMERA_DEFAULTS.lingerMs + IDLE_CAMERA_DEFAULTS.homeMs;

test('30 seconds of inactivity starts a slow excursion; touch immediately restores home and restarts the deadline', () => {
  const director=createIdleCameraDirector();
  assert.deepEqual(director.sample(100,{interests}),{active:false,targetId:null,focus:undefined,zoomFactor:1,phase:'waiting',nextWakeAt:30100});
  assert.equal(director.sample(30099,{interests}).active,false);
  const start=director.sample(30100,{interests});
  assert.equal(start.active,true);assert.equal(start.phase,'outbound');assert.equal(start.focus.weight,0);assert.equal(start.zoomFactor,1);
  const midway=director.sample(42100,{interests});
  assert.equal(midway.focus.weight,.5);assert.ok(midway.zoomFactor>1&&midway.zoomFactor<2.5);
  const home=director.touch(42101);
  assert.equal(home.active,false);assert.equal(home.focus,undefined);assert.equal(home.zoomFactor,1);
  assert.equal(director.sample(72100,{interests}).active,false);
  assert.equal(director.sample(72101,{interests}).active,true);
});

test('instant start travels and returns smoothly then spends 45 seconds at home', () => {
  const director=createIdleCameraDirector();director.start(1000);
  const beginning=director.sample(1000,{interests}), end=director.sample(25000,{interests});
  assert.equal(beginning.focus.weight,0);assert.equal(end.phase,'linger');assert.equal(end.focus.weight,1);
  assert.deepEqual(director.sample(30000,{interests}),{...end,nextWakeAt:41000});
  const returning=director.sample(53000,{interests});
  assert.equal(returning.phase,'return');assert.equal(returning.focus.weight,.5);
  const almost=director.sample(64999,{interests});
  assert.ok(almost.focus.weight<.000001);assert.ok(almost.zoomFactor<1.000001);
  const home=director.sample(65000,{interests});
  assert.equal(home.phase,'home');assert.equal(home.focus,undefined);assert.equal(home.zoomFactor,1);assert.equal(home.nextWakeAt,110000);
  assert.equal(director.sample(109999,{interests}).phase,'home');
  assert.equal(director.sample(110000,{interests}).phase,'outbound');
});

test('blocked, disabled and reduced-motion states cannot accumulate a pending excursion', () => {
  for (const option of ['blocked','reducedMotion','enabled']) {
    const director=createIdleCameraDirector();director.start(0);director.sample(18000,{interests});
    const state=director.sample(20000,{interests,[option]:option==='enabled'?false:true});
    assert.deepEqual(state,{active:false,targetId:null,focus:undefined,zoomFactor:1,phase:'blocked',nextWakeAt:null});
    assert.equal(director.sample(1_000_000,{interests}).active,false);
    assert.equal(director.sample(1_029_999,{interests}).active,false);
    assert.equal(director.sample(1_030_000,{interests}).active,true);
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
    const state=weighted.sample(i*cycleMs+12000,{interests});
    selections.push(state.targetId);counts.set(state.targetId,(counts.get(state.targetId)??0)+1);
  }
  assert.equal(counts.size,3);assert.ok(counts.get('home-holiday')>counts.get('garden')*3);
  const other=createIdleCameraDirector({seed:83});other.start(0);
  assert.notDeepEqual(selections,Array.from({length:300},(_,i)=>other.sample(i*cycleMs+12000,{interests}).targetId));
});

test('one snapshotted destination prevents jumps when moving interests change or disappear', () => {
  const director=createIdleCameraDirector();director.start(0);
  const only=[{id:'dolphin',focus:{x:12,y:20,z:30},zoomFactor:2}];
  const first=director.sample(1000,{interests:only});only[0].focus.x=999;
  const second=director.sample(2000,{interests:only}), vanished=director.sample(24000,{interests:[]});
  assert.equal(first.focus.x,12);assert.equal(second.focus.x,12);assert.equal(vanished.focus.x,12);
  assert.equal(vanished.targetId,'dolphin');assert.equal(director.sample(64000,{interests:[]}).phase,'home');
  const next=director.sample(cycleMs,{interests:[]});assert.equal(next.phase,'home');assert.equal(next.targetId,null);
});

test('invalid interests and settings remain finite and harmless, including backward or unavailable time', () => {
  assert.deepEqual(normalizeIdleCameraSettings(null),IDLE_CAMERA_DEFAULTS);
  assert.deepEqual(normalizeIdleCameraSettings({idleAfterMs:-1,travelMs:Infinity,lingerMs:1,homeMs:NaN,seed:1.8}),
    {idleAfterMs:5000,travelMs:24000,lingerMs:5000,homeMs:45000,seed:1});
  const invalid=[{id:'bad',focus:{x:Infinity,y:0,z:0}},{id:'zero',focus:{x:0,y:0,z:0},weight:0},null];
  const director=createIdleCameraDirector();director.start(1000);
  assert.equal(director.sample(2000,{interests:invalid}).phase,'home');
  assert.equal(director.sample(3000,{interests:null}).targetId,null);
  const safe=director.sample(NaN);assert.ok(Number.isFinite(safe.zoomFactor));
  const backwards=director.sample(500,{interests});assert.equal(backwards.active,false);assert.equal(backwards.nextWakeAt,30500);
});
