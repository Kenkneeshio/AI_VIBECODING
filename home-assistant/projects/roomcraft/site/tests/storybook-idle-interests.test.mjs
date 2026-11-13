import test from 'node:test';
import assert from 'node:assert/strict';
import {selectIdleCameraInterests} from '../ha-local/storybook-idle-interests.mjs';
import {sampleStorybookWorldMoments} from '../ha-local/storybook-world-moments.mjs';

const focus = {x:120, y:24, z:-400};
const holiday = {selection:'lunar-new-year', active:['lunar-new-year'], visible:true,
  focus, stage:{intensity:1, events:true}};
const dolphin = {id:'dolphin-1', visible:true, behavior:'leap', position:[500,-90,-300]};
const marine = {validWater:true, preview:false, disposed:false, actors:[dolphin]};
const ids = input => selectIdleCameraInterests(input).map(candidate => candidate.id);

test('active holiday displays and current wildlife events take priority over scenery without leaking source data', () => {
  const source = {holiday:{...holiday, privateEntity:'never-export'}, marine,
    landmarks:[{id:'school',visible:true,enabled:true,active:true,event:true,focus}],
    habitats:[{id:'tank',visible:true,animated:true,focus}],
    scenery:[{id:'coast',visible:true,focus}]};
  const before = structuredClone(source), result = selectIdleCameraInterests(source);
  assert.equal(result[0].id,'holiday:lunar-new-year');
  assert.equal(result[1].id,'marine:dolphin-1');
  assert.ok(result[1].weight > result.find(candidate => candidate.id==='scenery:coast').weight);
  for (const candidate of result) {
    assert.deepEqual(Object.keys(candidate).sort(),['focus','id','weight','zoomFactor']);
    assert.deepEqual(Object.keys(candidate.focus).sort(),['x','y','z']);
    assert.ok(Object.values(candidate.focus).every(Number.isFinite));
    assert.ok(Number.isFinite(candidate.weight) && candidate.weight > 0);
    assert.ok(candidate.zoomFactor >= 1 && candidate.zoomFactor <= 3);
  }
  assert.equal(JSON.stringify(result).includes('never-export'),false);
  result[0].focus.x = -999;
  assert.deepEqual(source,before,'camera subjects do not alias scene positions or mutate states');
});

test('holiday targets require the actual active, visible selected stage', () => {
  for (const override of [{visible:false},{active:[]},{selection:null},{stage:{intensity:0}},
    {selection:'inactive-preview'},{focus:{...focus,y:NaN}}]) {
    assert.deepEqual(ids({holiday:{...holiday,...override}}),[]);
  }
  const quiet = selectIdleCameraInterests({holiday:{...holiday,stage:{intensity:1,events:false}}});
  assert.equal(quiet.length,1,'a quiet active holiday display remains a valid subject');
  assert.ok(quiet[0].weight < selectIdleCameraInterests({holiday})[0].weight);
});

test('hidden, invalid-water, preview and disposed wildlife never become camera destinations', () => {
  for (const override of [{validWater:false},{preview:true},{disposed:true},
    {actors:[{...dolphin,visible:false}]},{actors:[{...dolphin,position:[0,Infinity,0]}]}]) {
    assert.deepEqual(ids({marine:{...marine,...override}}),[]);
  }
  const result = selectIdleCameraInterests({marine:{...marine,actors:[
    {...dolphin,id:'swimmer',behavior:'swim'},dolphin]}});
  assert.equal(result[0].id,'marine:dolphin-1');
  assert.ok(result[0].weight > result[1].weight);
});

test('real world-moment samples honor weather, night and category settings even while offscreen', () => {
  const plan = {sites:[{id:'beach-1',x:20,y:-100,z:-300,radius:26}],waterSites:[],trees:[]};
  const sampled = sampleStorybookWorldMoments(plan,0,{condition:'sunny',reduceMotion:true});
  assert.equal(sampled.activities.length,1);
  assert.deepEqual(ids({moments:{...sampled,parts:0}}),['activity:beach-1'],
    'frustum-culling does not permanently hide an otherwise valid destination');
  for (const options of [{night:true},{condition:'lightning'},
    {worldLife:{enabled:false}},{worldLife:{characters:false}},{worldLife:{density:0}}]) {
    const moments = sampleStorybookWorldMoments(plan,0,{reduceMotion:true,...options});
    assert.deepEqual(ids({moments}),[]);
  }
  for (const settings of [{enabled:false},{characters:false},{density:0}]) {
    assert.deepEqual(ids({moments:{...sampled,settings:{...sampled.settings,...settings}}}),[]);
  }
});

test('authored landmark life, animated habitats and scenery respect their availability gates', () => {
  const landmark = {id:'home',visible:true,enabled:true,active:true,focus};
  assert.deepEqual(ids({landmarks:[landmark]}),['landmark:home']);
  for (const flag of ['visible','enabled','active']) {
    assert.deepEqual(ids({landmarks:[{...landmark,[flag]:false}]}),[]);
  }
  assert.deepEqual(ids({habitats:[{id:'tank',visible:true,animated:true,focus}]}),['habitat:tank']);
  for (const flags of [{visible:false,animated:true},{visible:true,animated:false}]) {
    assert.deepEqual(ids({habitats:[{id:'tank',focus,...flags}]}),[]);
  }
  assert.deepEqual(ids({scenery:[{id:'coast',visible:false,focus}]}),[]);
});

test('selection is replayable, unique, bounded and excludes non-finite positions', () => {
  const scenery = Array.from({length:30},(_,i) => ({id:'view-'+i,visible:true,focus}));
  scenery.push(scenery[0],{id:'invalid',visible:true,focus:{x:0,y:0,z:NaN}});
  const source = {holiday,marine,scenery};
  const result = selectIdleCameraInterests(source);
  assert.deepEqual(result,selectIdleCameraInterests(source));
  assert.equal(result.length,16);
  assert.equal(new Set(result.map(candidate => candidate.id)).size,16);
  assert.equal(result.some(candidate => candidate.id==='scenery:invalid'),false);
  assert.equal(result[0].id,'holiday:lunar-new-year');
  assert.deepEqual(selectIdleCameraInterests(),[]);
});
