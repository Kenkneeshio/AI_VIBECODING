import assert from 'node:assert/strict';
import {test} from 'node:test';
import {Group,Vector3} from 'three';
import {compileStorybookPlan} from '../ha-local/storybook-scene.mjs';
import {createHolidayRuntime,homeHolidayTrimPaths,landmarkHolidayTrimRings,holidayPlacement} from '../ha-local/storybook-holiday-runtime.mjs';

const room=(id,x1,y1,x2,y2,outdoor=false)=>({id,surface:outdoor?'patio':'oak',outdoor,points:[{x:x1,y:y1},{x:x2,y:y1},{x:x2,y:y2},{x:x1,y:y2}]});
const layout={version:2,editableReferenceVersion:8,rooms:[room('home',0,0,100,100),room('balcony',-40,0,0,100,true)],
  walls:[[0,0,100,0],[100,0,100,100],[100,100,0,100],[0,100,0,0],[50,0,50,100]].map((p,i)=>({id:`wall-${i}`,x1:p[0],y1:p[1],x2:p[2],y2:p[3]})).concat({id:'rail',kind:'fence',x1:-40,y1:0,x2:-40,y2:100}),
  items:[{id:'window',type:'window',x:25,y:0,w:20,h:10,rotation:0}]};
const plan=compileStorybookPlan(layout),street={nearZ:-200,sample:(x,z)=>({x,z})};
const runtime=()=>createHolidayRuntime({plan,street,heightAt:()=>-111});
const manual={enabled:true,modes:{'mid-autumn':'on',chuseok:'on'},windowDays:1};

test('home roof trim follows only supported exterior caps and skips window gaps and balcony rails',()=>{
  const paths=homeHolidayTrimPaths(plan);
  assert.ok(paths.length>=5);assert.ok(paths.every(p=>p.closed===false&&p.y===58));
  for(const path of paths){
    const [a,b]=path.points;
    assert.ok(a[0]!==50&&b[0]!==50,'interior partition receives no trim');
    assert.ok(a[0]>-10&&b[0]>-10,'balcony railing is excluded');
    if(a[1]<0){assert.ok(Math.max(a[0],b[0])<=16||Math.min(a[0],b[0])>=34,'window opening remains unbridged');}
  }
});

test('runtime rotates simultaneous holidays exactly every20seconds and freezes selection for reduced motion',()=>{
  const r=runtime(),environment={holidayDate:'2026-09-25'};
  r.update({elapsedSeconds:0,environment,settings:manual});const first=r.getState().selection;
  r.update({elapsedSeconds:19.999,environment,settings:manual});assert.equal(r.getState().selection,first);
  r.update({elapsedSeconds:20,environment,settings:manual});assert.notEqual(r.getState().selection,first);
  r.update({elapsedSeconds:40,environment,settings:manual});assert.equal(r.getState().selection,first);
  r.update({elapsedSeconds:20,environment:{...environment,reduceMotion:true},settings:manual});assert.equal(r.getState().selection,first);
  assert.equal(r.getState().trim.animated,false);r.dispose();
});

test('invalid dates and Off hide decorations; explicit preview is temporary and settings remain unchanged',()=>{
  const r=runtime(),settings={enabled:false,modes:{christmas:'off'}},before=JSON.stringify(settings);
  r.update({environment:{holidayDate:'invalid'},settings:manual});assert.equal(r.root.visible,false);assert.equal(r.getState().selection,null);
  r.update({environment:{holidayDate:'2026-12-25'},settings});assert.equal(r.root.visible,false);
  r.update({environment:{holidayDate:'invalid',holidayPreview:{id:'christmas',settings}},settings});assert.equal(r.getState().selection,'christmas');assert.equal(r.root.visible,true);
  r.update({environment:{holidayDate:'2026-12-25'},settings});assert.equal(r.root.visible,false);assert.equal(JSON.stringify(settings),before);
  r.update({environment:{holidayDate:'2026-08-15'},settings:{windowDays:1}});assert.equal(r.getState().selection,'obon');assert.equal(r.getState().stage.events,false);assert.equal(r.getState().trim.animated,false);
  r.dispose();r.dispose();assert.equal(r.root.children.length,0);
});

test('stage placement never translates neighborhood trim and invalid placement safely falls back',()=>{
  const r=runtime(),placement={x:500,y:-100,scale:1.6,rotation:90};
  r.update({environment:{holidayDate:'2026-12-25'},settings:{placement,windowDays:1}});
  const stage=r.root.getObjectByName('holiday-outdoor-stage'),trim=r.root.getObjectByName('holiday-neighborhood-trim');
  assert.deepEqual(r.root.position.toArray(),[0,0,0]);assert.deepEqual(stage.position.toArray(),[500,-111,-100]);
  assert.equal(stage.scale.x,1.6);assert.equal(stage.rotation.y,-Math.PI/2);assert.deepEqual(trim.position.toArray(),[0,0,0]);
  assert.notDeepEqual(holidayPlacement(plan,street,{placement:{...placement,scale:-2}}),{...placement,scale:-2});
  r.dispose();
});

test('landmark roof trim inherits actual nonuniform dimensions, rotation, height and draft movement without altering pick bounds',()=>{
  const item={id:'office',type:'sceneryOfficeCampus',w:330,h:90},target=new Group();target.position.set(500,-100,400);target.rotation.y=Math.PI/2;target.scale.y=1.8;
  const r=runtime();r.registerLandmark(item,target);r.update({environment:{holidayDate:'2026-12-25'},settings:{windowDays:1}});
  assert.equal(target.children.length,0,'decorative trim is not a child of the selectable object');
  let bulbs=r.root.getObjectByName('holiday-roof-bulbs');
  const ring=landmarkHolidayTrimRings(item)[0],expected=new Vector3(ring.points[0][0],ring.y,ring.points[0][1]).applyMatrix4(target.matrixWorld);
  const hasPoint=point=>Array.from({length:bulbs.count},(_,i)=>new Vector3().setFromMatrixPosition(new (target.matrixWorld.constructor)().fromArray(bulbs.instanceMatrix.array,i*16))).some(p=>p.distanceTo(point)<.001);
  assert.ok(hasPoint(expected));const previous=bulbs.geometry;let released=false;previous.addEventListener('dispose',()=>{released=true;});
  target.position.x+=70;r.update({environment:{holidayDate:'2026-12-25'},settings:{windowDays:1}});bulbs=r.root.getObjectByName('holiday-roof-bulbs');
  expected.x+=70;assert.ok(hasPoint(expected));assert.ok(released,'replaced trim geometry is disposed after movement');
  assert.equal(r.getState().trim.rings,homeHolidayTrimPaths(plan).length+3);r.dispose();
});
