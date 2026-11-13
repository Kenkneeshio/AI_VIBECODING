import test from 'node:test';
import assert from 'node:assert/strict';
import {Matrix4,Vector3} from 'three';
import {buildStorybookNeighborhood,buildStorybookStreet,storybookStreetBounds} from '../ha-local/storybook-street.mjs';
import {createStorybookWorldMoments,planStorybookWorldMoments,sampleStorybookWorldMoments,WORLD_MOMENT_KINDS} from '../ha-local/storybook-world-moments.mjs';
import {createStorybookTraffic,storybookTrafficAppearance} from '../ha-local/storybook-traffic.mjs';
import {createStorybookSidewalk} from '../ha-local/storybook-sidewalk.mjs';
import {createStorybookBoats} from '../ha-local/storybook-boats.mjs';
import {createStorybookBeachPlay} from '../ha-local/storybook-beach-play.mjs';
import {STORYBOOK_VEHICLES} from '../ha-local/storybook-vehicles.mjs';

const plan={houseBounds:{minX:420,maxX:1450,minZ:210,maxZ:870},bounds:{minX:420,maxX:1450,minZ:210,maxZ:870},editableStructure:true};
const street=storybookStreetBounds(plan);
const batch={box(){},ball(){},add(g){g.dispose();}};
const {water}=buildStorybookNeighborhood(batch,street,-111,plan.houseBounds,6200,935);
const road=buildStorybookStreet(batch,street,-111,6200,935);
const trees=[{kind:'jacaranda',x:1600,z:220,groundY:-111,height:90},{kind:'olive',x:1700,z:330,groundY:-111,height:94}];
const inputs={water,street,plan,trees,heightAt:()=>-111};
const layout=planStorybookWorldMoments(inputs);
const sunny={condition:'sunny',windSpeed:4,windBearing:270,worldLife:{density:1,variety:1}};
function shore(x){const i=water.shoreline.findIndex(p=>p.x>=x),a=water.shoreline[i-1],b=water.shoreline[i];return a.z+(b.z-a.z)*(x-a.x)/(b.x-a.x);}

test('ambient actor envelopes stay in dry sand clear of the street, existing play sites and authored furniture',()=>{
  assert.ok(layout.sites.length>=3);
  for(const site of layout.sites){
    for(const dx of [-site.radius,0,site.radius]){
      assert.ok(site.z-site.radius>shore(site.x+dx)+20);
      assert.ok(site.z+site.radius<street.sample(site.x+dx,street.farZ).z-25);
    }
    for(const f of [.108,.49])assert.ok(Math.abs(site.x-(water.focusX+1030*f))>48+site.radius);
    assert.ok(site.z+site.radius<plan.houseBounds.minZ);
    assert.equal(site.y,water.sandHeight(site.x,site.z));
  }
  assert.deepEqual(planStorybookWorldMoments({}),{sites:[],waterSites:[],trees:[]});
  assert.equal(planStorybookWorldMoments({...inputs,water:{...water,sandHeight:(x)=>x}}).sites.length,0,'steep modifications fail closed');
  const blocked=planStorybookWorldMoments({...inputs,exclusions:[{minX:-1e4,maxX:1e4,minZ:-1e4,maxZ:1e4}]});
  assert.equal(blocked.sites.length,0);
  const planted=planStorybookWorldMoments({...inputs,trees:[{...trees[0],x:layout.sites[0].x,z:layout.sites[0].z}]});
  assert.ok(planted.sites.every(s=>Math.hypot(s.x-layout.sites[0].x,s.z-layout.sites[0].z)>60),'new activity yields to an authored tree');
});

test('finite activity catalog varies across long cycles and seeds, while explicit elapsed time replays exactly',()=>{
  const kinds=new Set();
  for(let time=0;time<20000;time+=41){
    const a=sampleStorybookWorldMoments(layout,time,sunny);
    assert.deepEqual(a,sampleStorybookWorldMoments(layout,time,sunny));
    for(const activity of a.activities)kinds.add(activity.kind);
    assert.ok(a.activities.length<=4&&a.birds.length<=3&&a.butterflies.length<=8&&a.drift.length<=8&&a.water.length<=18);
  }
  assert.deepEqual([...kinds].sort(),[...WORLD_MOMENT_KINDS].sort());
  const first=sampleStorybookWorldMoments(layout,1800000456,sunny);
  assert.deepEqual(first,sampleStorybookWorldMoments(layout,1800000456,sunny));
  assert.notDeepEqual(first,sampleStorybookWorldMoments(layout,1800000456,{...sunny,worldLife:{...sunny.worldLife,seed:88}}));
  assert.deepEqual(sampleStorybookWorldMoments(layout,1,{...sunny,reduceMotion:true}),sampleStorybookWorldMoments(layout,1800000456,{...sunny,reduceMotion:true}));
});

test('night, severe weather, disabled categories and zero density suppress fictional activity independently',()=>{
  for(const options of [{night:true},{activity:'overnight'},{activity:'evening'},{condition:'pouring'},{condition:'lightning'}]){
    const state=sampleStorybookWorldMoments(layout,123,{...sunny,...options});
    assert.equal(state.activities.length,0);assert.equal(state.birds.length,0);assert.equal(state.butterflies.length,0);
  }
  for(const worldLife of [{enabled:false},{density:0}]){
    const state=sampleStorybookWorldMoments(layout,123,{...sunny,worldLife});
    for(const key of ['activities','birds','butterflies','drift','water'])assert.deepEqual(state[key],[]);
  }
  const state=sampleStorybookWorldMoments(layout,123,{...sunny,worldLife:{characters:false,vegetation:false,surprises:false,water:false}});
  for(const key of ['activities','birds','butterflies','drift','water'])assert.deepEqual(state[key],[]);
});

test('wind and water accents follow supplied weather rather than inventing environmental conditions',()=>{
  const unknown=sampleStorybookWorldMoments(layout,20,{worldLife:{density:1}});
  assert.equal(unknown.water.length,0);assert.equal(unknown.drift.length,0);assert.ok(unknown.activities.every(a=>a.kind!=='kite'));
  const rain=sampleStorybookWorldMoments(layout,20,{condition:'rainy'});
  assert.ok(rain.water.length>0&&rain.water.every(w=>w.kind==='rain-ring'));
  const sun=sampleStorybookWorldMoments(layout,20,sunny);
  assert.ok(sun.water.every(w=>w.kind==='glitter'));
  const noMoon=sampleStorybookWorldMoments(layout,20,{night:true,condition:'clear-night'});
  assert.equal(noMoon.water.length,0);
  const moon=sampleStorybookWorldMoments(layout,20,{night:true,condition:'clear-night',moonPhase:'full_moon'});
  assert.ok(moon.water.length>0&&moon.water.every(w=>w.night));
  assert.equal(sampleStorybookWorldMoments(layout,20,{night:true,condition:'clear-night',moonPhase:'full_moon',moonElevation:-3}).water.length,0);
  assert.equal(sampleStorybookWorldMoments(layout,20,{condition:'rainy',precipitation:false}).water.length,0);
  assert.equal(sampleStorybookWorldMoments(layout,20,{...sunny,reflections:false}).water.length,0);
  for(const [bearing,direction] of [[90,-1],[270,1]]){
    const state=sampleStorybookWorldMoments(layout,8,{...sunny,windBearing:bearing});
    state.drift.forEach((leaf,i)=>{
      assert.ok(leaf.y>=trees[i].groundY&&leaf.y<=trees[i].groundY+trees[i].height*.68+.4);
      assert.ok((leaf.x-trees[i].x-Math.sin(leaf.progress*Math.PI*2)*2)*direction>=0);
    });
  }
});

test('renderer remains bounded, handles visibility pruning and disposes all owned geometry/materials',()=>{
  const art=createStorybookWorldMoments(inputs),resources=new Set();
  art.root.traverse(mesh=>{if(mesh.isMesh){resources.add(mesh.geometry);resources.add(mesh.material);}});
  let disposed=0;for(const resource of resources)resource.addEventListener('dispose',()=>disposed++);
  const matrix=new Matrix4(),p=new Vector3();
  for(const time of [0,100,600,1800000456]){
    art.update(time,sunny);const state=art.getState();assert.ok(state.parts>50&&state.parts<500);
    assert.ok(art.root.children.length<=8);
    for(const mesh of art.root.children)for(let i=0;i<mesh.count;i++){
      mesh.getMatrixAt(i,matrix);assert.ok(matrix.elements.every(Number.isFinite));
      p.setFromMatrixPosition(matrix);assert.ok(p.y>=-111.5,'no prop crosses ground');
    }
  }
  art.update(200,{...sunny,inView:()=>false});assert.equal(art.getState().parts,0);assert.equal(art.root.visible,false);
  art.dispose();art.dispose();assert.equal(disposed,resources.size);assert.equal(art.root.children.length,0);
});

test('cosmetic fleet variety preserves real traffic quantities, poses, speeds and explicitly chosen vehicle models',()=>{
  const selected=STORYBOOK_VEHICLES.find(v=>v.id==='seafoam-sedan');
  const appearances=new Set();
  for(let i=0;i<60;i++){
    const a=storybookTrafficAppearance({index:i,lane:i%2},{variety:1,seed:37});
    appearances.add(a.vehicle.id+':'+a.paint+':'+a.accessory);
    assert.deepEqual(a,storybookTrafficAppearance({index:i,lane:i%2},{variety:1,seed:37}));
    assert.deepEqual(storybookTrafficAppearance({index:i,lane:0},{variety:1},selected),{vehicle:selected,paint:-1,accessory:null});
  }
  assert.ok(appearances.size>25);
  const a=createStorybookTraffic(road),b=createStorybookTraffic(road);
  for(const severity of ['ambient','clear','heavy'])for(const time of [0,10,100]){
    a.update(time,{severity},{transientTelemetry:true});
    b.update(time,{severity},{transientTelemetry:true,worldLife:{density:.1,pace:2,variety:1}});
    assert.equal(a.root.children[0].count,b.root.children[0].count);
    const m=new Matrix4(),n=new Matrix4();
    for(let i=0;i<a.root.children[0].count;i++){
      a.root.children[0].getMatrixAt(i,m);b.root.children[0].getMatrixAt(i,n);
      assert.deepEqual(m.elements.slice(12,15),n.elements.slice(12,15));
    }
  }
  a.dispose();b.dispose();
});

test('existing decorative people and boats honor category gates and density without touching real controls',()=>{
  const sidewalk=createStorybookSidewalk(road),boats=createStorybookBoats(water),beach=createStorybookBeachPlay(water,street);
  const update=(life)=>{sidewalk.update(12,{transientTelemetry:true,worldLife:life});boats.update(12,{transientTelemetry:true,worldLife:life});beach.update(12,{transientTelemetry:true,worldLife:life});};
  update({density:1});const walkers=sidewalk.root.getObjectByName('sidewalk-walkers').count,fullBoats=boats.root.children.filter(n=>n.visible).length;
  update({density:.2});assert.ok(sidewalk.root.getObjectByName('sidewalk-walkers').count<walkers);assert.ok(boats.root.children.filter(n=>n.visible).length<fullBoats);
  update({characters:false,vehicles:false});assert.equal(sidewalk.root.visible,false);assert.equal(boats.root.visible,false);assert.equal(beach.root.visible,false);
  update({enabled:true,density:1});assert.ok(sidewalk.root.visible&&boats.root.visible&&beach.root.visible);
  sidewalk.dispose();boats.dispose();beach.dispose();
});
