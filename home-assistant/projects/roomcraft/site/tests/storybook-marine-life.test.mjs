import assert from 'node:assert/strict';
import {test} from 'node:test';
import {Vector3} from 'three';
import {createStorybookMarineLife,planStorybookMarineRoutes} from '../ha-local/storybook-marine-life.mjs';
import {createStorybookBoatRoutes} from '../ha-local/storybook-boats.mjs';

const water={y:-104.95,farZ:-2210,focusX:768,shoreline:Array.from({length:125},(_,i)=>{
  const x=768-3100+i*50;return{x,z:-468+14*Math.cos((x-768+110)*.006)+7*Math.sin((x-858)*.013)};
})};
const shore=(w,x)=>{const i=Math.max(0,Math.min(w.shoreline.length-2,w.shoreline.findIndex(p=>p.x>x)-1));const a=w.shoreline[i],b=w.shoreline[i+1];return a.z+(b.z-a.z)*(x-a.x)/(b.x-a.x);};
const visible=life=>life.getState().actors.filter(a=>a.visible);

test('eight detailed articulated animals remain a bounded nine-draw pool',()=>{
  const life=createStorybookMarineLife(water);life.update(17,{preview:true});
  assert.equal(visible(life).length,8);assert.equal(new Set(visible(life).map(a=>a.species)).size,5);
  assert.ok(visible(life).find(a=>a.species==='walruses').storybookVisitor);
  let triangles=0,draws=0,skin=0,material=new Set();
  life.root.traverse(o=>{if(o.geometry){draws++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;material.add(o.material);assert.ok(o.geometry.attributes.position.count>0);if(o.isSkinnedMesh){skin++;assert.equal(o.skeleton.bones.length,4);assert.ok(o.geometry.attributes.color);assert.ok(o.geometry.attributes.skinWeight);}}});
  assert.equal(skin,8);assert.equal(draws,9);assert.ok(triangles<28000);assert.equal(material.size,2);
  assert.ok(life.getState().particles<=64);assert.ok(visible(life).find(a=>a.variant==='humpback').length>visible(life).find(a=>a.species==='dolphins').length*2);
  life.dispose();
});

test('whole animal routes clear coast, ocean edge, other animals, and swept boat/wake reservations',()=>{
  for(const w of [water,{...water,boatCenters:{cabin:1600,sailboat:-680},boatOffshore:{sailboat:82}}])for(const preview of [false,true]){
    const routes=planStorybookMarineRoutes(w,{preview});assert.equal(routes.length,8);
    const boats=createStorybookBoatRoutes(w);
    for(const r of routes)for(let i=0;i<64;i++){
      const angle=i*Math.PI*2/64,x=r.x+Math.cos(angle)*r.radius,z=r.z+Math.sin(angle)*r.depth;
      for(let edge=0;edge<32;edge++){
        const a=edge*Math.PI*2/32,px=x+Math.cos(a)*r.safetyRadius,pz=z+Math.sin(a)*r.safetyRadius;
        assert.ok(pz<shore(w,px)-15,`${r.id} crossed coast`);assert.ok(pz>w.farZ+15);assert.ok(px>w.shoreline[0].x&&px<w.shoreline.at(-1).x);
      }
      for(const boat of boats)for(let j=0;j<48;j++){
        const p=boat.point(j*Math.PI*2/48);assert.ok(Math.hypot(p.x-x,p.z-z)>r.safetyRadius+boat.length*1.1,`${r.id} intersected ${boat.id}`);
      }
    }
    for(let i=0;i<routes.length;i++)for(let j=i+1;j<routes.length;j++)assert.ok(!routes[i].envelope.intersectsBox(routes[j].envelope));
  }
  for(const species of ['dolphins','seals'])assert.ok(planStorybookMarineRoutes(water).filter(r=>r.species===species).some(r=>shore(water,r.x)-r.z+r.depth<200),'nearshore animals visible from ordinary Home framing');
});

test('explicit epoch time, seed, backward resets and reduced motion are deterministic',()=>{
  const a=createStorybookMarineLife(water),b=createStorybookMarineLife(water);
  a.update(1_800_000_031,{preview:true});a.update(17,{preview:true});b.update(17,{preview:true});assert.deepEqual(a.getState(),b.getState());
  a.update(1_800_000_031,{preview:true});b.update(1_800_000_031,{preview:true});assert.deepEqual(a.getState(),b.getState());
  assert.ok(a.getState().actors.flatMap(a=>a.position.concat(a.rotation)).every(Number.isFinite));
  a.update(20,{preview:true,reduceMotion:true});const still=a.getState();a.update(1_800_000_031,{preview:true,reduceMotion:true});assert.deepEqual(a.getState(),still);assert.equal(still.particles,0);
  a.update(17,{preview:true,worldLife:{seed:9900}});assert.notDeepEqual(a.getState(),b.getState());a.dispose();b.dispose();
});

test('deformed tails, fins and breach poses fit the reserved whole-body clearance',()=>{
  const life=createStorybookMarineLife(water),point=new Vector3();
  for(let t=0;t<36;t+=1.5){
    life.update(t,{preview:true});life.root.updateMatrixWorld(true);
    for(const actor of visible(life)){
      const group=life.root.getObjectByName(actor.id),mesh=group.children[0];mesh.skeleton.update();
      for(let i=0;i<mesh.geometry.attributes.position.count;i+=29){mesh.getVertexPosition(i,point);mesh.localToWorld(point);assert.ok(Math.hypot(point.x-actor.position[0],point.z-actor.position[2])<=actor.safetyRadius,actor.id+' exceeded its reserved footprint');assert.ok(life.getBounds().containsPoint(point),actor.id+' escaped preview bounds');}
    }
  }
  life.dispose();
});

test('preview respects all draft switches and density while preserving quiet actual night/weather',()=>{
  const life=createStorybookMarineLife(water);
  for(const flag of ['enabled','marine']){life.update(50,{preview:true,worldLife:{[flag]:false}});assert.equal(visible(life).length,0);assert.equal(life.root.visible,false);}
  life.update(50,{preview:true,worldLife:{density:0}});assert.equal(visible(life).length,0);
  for(const flag of ['dolphins','sharks','whales','seals','walruses']){life.update(50,{preview:true,worldLife:{[flag]:false}});assert.ok(visible(life).every(a=>a.species!==flag));assert.ok(visible(life).length>0);}
  for(const options of [{night:true},{activity:'overnight'}]){life.update(50,options);assert.equal(visible(life).length,0);assert.equal(life.getState().particles,0);life.update(27,{...options,preview:true});assert.equal(visible(life).length,8);assert.ok(visible(life).every(a=>!['leap','breach','spout','roll','flipper-wave'].includes(a.behavior)));}
  for(const condition of ['pouring','lightning-rainy']){life.update(27,{preview:true,condition});assert.ok(visible(life).every(a=>['swim','rest'].includes(a.behavior)));}
  life.update(27,{preview:true,worldLife:{surprises:false}});assert.ok(visible(life).every(a=>['swim','rest'].includes(a.behavior)));life.dispose();
});

test('long schedules vary behaviors without geometry or material churn, and focus tracks visible action',()=>{
  const life=createStorybookMarineLife(water),geometry=[],material=[];life.root.traverse(o=>{if(o.geometry){geometry.push(o.geometry);material.push(o.material);}});
  const behaviors=new Set(),counts=new Set();
  for(let t=0;t<1200;t+=2){life.update(t,{worldLife:{density:1,variety:1}});const state=visible(life);counts.add(state.length);state.forEach(a=>behaviors.add(a.behavior));const focus=life.getFocus();assert.ok([focus.x,focus.y,focus.z].every(Number.isFinite));assert.ok(life.getBounds().containsPoint(new Vector3(focus.x,focus.y,focus.z)));}
  for(const behavior of ['swim','leap','breach','spout','roll','rest','flipper-wave'])assert.ok(behaviors.has(behavior),behavior);assert.ok(counts.size>1);
  const afterGeometry=[],afterMaterial=[];life.root.traverse(o=>{if(o.geometry){afterGeometry.push(o.geometry);afterMaterial.push(o.material);}});assert.deepEqual(afterGeometry,geometry);assert.deepEqual(afterMaterial,material);
  life.dispose();
});

test('malformed/coastless water fails closed and disposal is isolated and idempotent',()=>{
  for(const invalid of [undefined,null,{}, {...water,y:NaN},{...water,shoreline:[{x:0,z:2},{x:0,z:3}]},{...water,shoreline:[{x:0,z:NaN},{x:3,z:4}]}]){
    const life=createStorybookMarineLife(invalid);life.update(Infinity,{preview:true});assert.equal(life.root.visible,false);assert.equal(visible(life).length,0);assert.ok(Object.values(life.getFocus()).every(Number.isFinite));life.dispose();life.dispose();
  }
  const a=createStorybookMarineLife(water),b=createStorybookMarineLife(water);let geometryDisposed=0,materialsDisposed=0;
  const materials=new Set();a.root.traverse(o=>{if(o.geometry){o.geometry.addEventListener('dispose',()=>geometryDisposed++);materials.add(o.material);}});for(const m of materials)m.addEventListener('dispose',()=>materialsDisposed++);
  a.dispose();a.dispose();a.update(5,{preview:true});assert.equal(geometryDisposed,9);assert.equal(materialsDisposed,2);assert.equal(a.root.children.length,0);assert.equal(a.getState().disposed,true);
  b.update(0,{preview:true});assert.equal(visible(b).length,8);b.update(NaN,null);assert.ok(b.getState().actors.flatMap(a=>a.position).every(Number.isFinite));b.dispose();
});

test('encounters vary coat and size deterministically without geometry, attribute, or material replacement',()=>{
  const a=createStorybookMarineLife(water),b=createStorybookMarineLife(water),sizes=new Set(),coats=new Set(),paint=new Set(),resources=[];
  a.root.traverse(o=>{if(o.geometry)resources.push([o.geometry,o.geometry.attributes.color,o.material]);});
  for(let t=0;t<6000;t+=157){
    a.update(t,{worldLife:{variety:1}});b.update(t,{worldLife:{variety:1}});assert.deepEqual(a.getState(),b.getState());
    for(const actor of a.getState().actors){assert.ok(actor.bodyScale>=.8&&actor.bodyScale<=1);assert.ok(Number.isInteger(actor.coatVariant)&&actor.coatVariant>=0&&actor.coatVariant<3);if(actor.id==='pearl-dolphin'){sizes.add(actor.bodyScale);coats.add(actor.coatVariant);const color=a.root.getObjectByName(actor.id).children[0].geometry.attributes.color;paint.add([color.getX(0),color.getY(0),color.getZ(0)].join(','));}}
  }
  assert.ok(sizes.size>10);assert.equal(coats.size,3);assert.equal(paint.size,3);
  const after=[];a.root.traverse(o=>{if(o.geometry)after.push([o.geometry,o.geometry.attributes.color,o.material]);});assert.deepEqual(after,resources);
  a.update(8,{preview:true,worldLife:{variety:0}});assert.ok(a.getState().actors.every(v=>v.bodyScale===1&&v.coatVariant===0));
  a.update(8,{preview:true,worldLife:{variety:1}});const preview=a.getState().actors.map(v=>[v.bodyScale,v.coatVariant]);a.update(8000,{preview:true,worldLife:{variety:1}});assert.deepEqual(a.getState().actors.map(v=>[v.bodyScale,v.coatVariant]),preview);
  a.update(1e308,{worldLife:{pace:2}});assert.ok(a.getState().actors.flatMap(v=>v.position.concat(v.rotation,v.bodyScale)).every(Number.isFinite));a.dispose();b.dispose();
});

test('pure preview bounds are available before RAF, respect filters, and contain every showcase phase',()=>{
  const life=createStorybookMarineLife(water),before=life.getState(),bounds=life.getPreviewBounds({variety:1});assert.ok(bounds);assert.deepEqual(life.getState(),before);
  for(const settings of [{enabled:false},{marine:false},{density:0},{dolphins:false,sharks:false,whales:false,seals:false,walruses:false}])assert.equal(life.getPreviewBounds(settings),null);
  const filtered=life.getPreviewBounds({whales:false,seals:false,walruses:false});assert.ok(bounds.containsBox(filtered));assert.ok(filtered.max.z-filtered.min.z<bounds.max.z-bounds.min.z);
  for(let t=0;t<360;t+=3){life.update(t,{preview:true,worldLife:{variety:0}});assert.ok(bounds.containsBox(life.getBounds()),'camera bounds missed active showcase extent');}
  const original=life.getPreviewBounds();original.min.set(99999,99999,99999);assert.ok(life.getPreviewBounds().min.x<99999);life.dispose();assert.equal(life.getPreviewBounds(),null);
});
