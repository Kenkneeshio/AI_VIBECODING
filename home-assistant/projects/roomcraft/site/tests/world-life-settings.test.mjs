import assert from 'node:assert/strict';
import test from 'node:test';
import {WORLD_LIFE_FLAGS, normalizeWorldLifeSettings, validWorldLifeSettings, withWorldLifeSettings} from '../ha-local/storybook-world-life-settings.mjs';
import {validSceneSettings} from '../ha-local/storybook-scene-settings.mjs';
import {saveWorldLifeSettings} from '../ha-local/storybook-world-life-save.mjs';

test('living world defaults, exact numeric values and species choices normalize deterministically',()=>{
  const defaults=normalizeWorldLifeSettings();
  assert.equal(WORLD_LIFE_FLAGS.length,13);assert.ok(WORLD_LIFE_FLAGS.every(key=>defaults[key]===true));
  assert.deepEqual([defaults.density,defaults.pace,defaults.variety,defaults.seed],[.65,1,.8,37]);
  const input=Object.freeze({marine:false,sharks:false,density:.65321,pace:1.037,variety:.84567,seed:0});
  const next=normalizeWorldLifeSettings(input);
  assert.equal(next.marine,false);assert.equal(next.sharks,false);assert.equal(next.dolphins,true);
  assert.equal(next.density,input.density);assert.equal(next.pace,input.pace);assert.equal(next.variety,input.variety);
  assert.deepEqual(normalizeWorldLifeSettings(next),next);assert.equal(input.marine,false);
  assert.ok(validWorldLifeSettings(next));
});

test('living world authoring rejects unknown keys, coercions and unsupported numeric values',()=>{
  assert.ok(validWorldLifeSettings(undefined));assert.ok(validWorldLifeSettings({}));
  for(const input of [null,[],{enabled:1},{marine:'false'},{dolphins:null},{unknown:true},{density:-.01},{density:1.01},
    {pace:0},{pace:2.01},{pace:Infinity},{variety:NaN},{seed:1.5},{seed:-1},{seed:10000},
    JSON.parse('{"__proto__":{"enabled":false}}'),{preview:true}])assert.equal(validWorldLifeSettings(input),false,JSON.stringify(input));
  assert.ok(validWorldLifeSettings({density:0,pace:.25,variety:1,seed:9999}));
  assert.ok(validSceneSettings({holidays:{enabled:false},worldLife:{seals:false,pace:1.123}}));
  assert.equal(validSceneSettings({worldLife:{pace:'1'}}),false);
});

test('settings update preserves holiday preferences, supports reset and exact JSON roundtrip',()=>{
  const before={sky:false,holidays:{modes:{christmas:'off'}}};
  const next=withWorldLifeSettings(before,{whales:false,density:.65321});
  assert.deepEqual(next.holidays,before.holidays);assert.equal(next.sky,false);assert.equal(before.worldLife,undefined);
  assert.deepEqual(JSON.parse(JSON.stringify(next)),next);
  assert.equal(withWorldLifeSettings(next,{pace:20}),next);
  assert.equal(withWorldLifeSettings(next,next.worldLife),next);
  assert.deepEqual(withWorldLifeSettings(next,undefined),before);
  assert.equal(withWorldLifeSettings({worldLife:{}},undefined),undefined);
});

const fixture=()=>({title:'Fixture',views:[{path:'home'}],unrelated:{preserve:true},
  roomcraft_layout:{version:2,rooms:[],walls:[],hotspots:[],items:Array.from({length:82},(_,i)=>({id:'item-'+i,
    type:'lamp',x:i*10,y:400,w:20,h:20,entityId:'light.synthetic_'+i})),sceneSettings:{wind:false,holidays:{modes:{christmas:'off'}}}},
  roomcraft_plan:{type:'picture-elements',image:'/api/image/serve/'+'a'.repeat(32)+'/original',elements:[]}});
const options={stillAuthorized:()=>true,savedAt:'2026-11-12T12:00:00.000Z'};
function makeSession(initial){let config=structuredClone(initial);const calls=[];
  return{user:{is_admin:true},calls,get config(){return config;},async callWS(request){calls.push(structuredClone(request));
    if(request.type==='lovelace/config/save'){config=structuredClone(request.config);return;}return structuredClone(config);}};
}

test('guarded Live save keeps all 82 items, bindings, holidays and latest unrelated data with rollback',async()=>{
  const original=fixture(),session=makeSession(original);
  const result=await saveWorldLifeSettings(session,'roomcraft-home',undefined,{sharks:false,density:.65321},options);
  assert.equal(result.status,'saved');assert.equal(result.value.density,.65321);
  assert.deepEqual(result.layout.items,original.roomcraft_layout.items);assert.equal(result.layout.items.length,82);
  assert.deepEqual(result.layout.sceneSettings.holidays,original.roomcraft_layout.sceneSettings.holidays);
  assert.equal(result.layout.sceneSettings.wind,false);assert.deepEqual(result.config.views,original.views);
  assert.deepEqual(result.config.unrelated,original.unrelated);assert.deepEqual(result.config.roomcraft_plan,original.roomcraft_plan);
  assert.deepEqual(result.config.roomcraft_snapshots[0].layout,original.roomcraft_layout);
  const again=await saveWorldLifeSettings(session,'roomcraft-home',result.value,result.value,options);
  assert.equal(again.status,'saved');assert.equal(session.calls.filter(r=>r.type.endsWith('/save')).length,1);
});

test('Live save fails closed on conflicts, invalid values, authorization loss or unverified readback',async()=>{
  const original=fixture();original.roomcraft_layout.sceneSettings.worldLife={sharks:false};
  const stale=makeSession(original);
  assert.equal((await saveWorldLifeSettings(stale,'roomcraft-home',undefined,{},options)).status,'changed');assert.equal(stale.calls.length,1);
  for(const [dashboard,changes,settings] of [['wrong',options,{}],['roomcraft-home',{...options,stillAuthorized:()=>false},{}],
    ['roomcraft-home',options,{seed:1.25}]]){const session=makeSession(fixture());
    await saveWorldLifeSettings(session,dashboard,undefined,settings,changes);assert.equal(session.calls.length,0);}
  const revoked=makeSession(fixture());
  assert.equal((await saveWorldLifeSettings(revoked,'roomcraft-home',undefined,{}, {...options,stillAuthorized:()=>revoked.calls.length===0})).status,'closed');
  assert.equal(revoked.calls.length,1);
  const base=makeSession(fixture());let reads=0;
  const overwritten={user:base.user,callWS:request=>request.type==='lovelace/config'&&++reads>1?fixture():base.callWS(request)};
  assert.equal((await saveWorldLifeSettings(overwritten,'roomcraft-home',undefined,{marine:false},options)).status,'unverified');
});
