import assert from 'node:assert/strict';
import {test} from 'node:test';
import {Box3,Vector3,Raycaster} from 'three';
import {createLandmarkLife} from '../ha-local/storybook-landmark-life.mjs';
import {makeStorybookSchoolCampus} from '../ha-local/storybook-school-campus.mjs';

const types=['sceneryRanchHouse','scenerySchoolCampus','sceneryOfficeCampus'];
const shape={sceneryRanchHouse:[130,176],scenerySchoolCampus:[300,240],sceneryOfficeCampus:[220,180]};
const pose=root=>{const result=[];root.traverse(o=>{if(o.isBone)result.push(...o.rotation.toArray().slice(0,3));});return result;};

test('landmark life uses deterministic explicit time and independent resettable resources',()=>{
  for(const type of types){
    const item={type,id:'fixed-campus'},a=createLandmarkLife(item),b=createLandmarkLife(item);
    a.update({elapsedSeconds:99});a.update({elapsedSeconds:15});b.update({elapsedSeconds:15});
    assert.deepEqual(a.getState(),b.getState());assert.deepEqual(pose(a.root),pose(b.root));
    a.reset();b.update({elapsedSeconds:0});assert.deepEqual(a.getState(),b.getState());
    let draws=0,triangles=0;a.root.traverse(o=>{if(o.geometry){draws++;triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;}});
    assert.ok(draws<=11);assert.ok(triangles<10500);assert.ok(a.getState().decorative);
    const children=b.root.children.length;a.dispose();assert.equal(a.root.children.length,0);assert.equal(b.root.children.length,children);a.dispose();b.dispose();
  }
  assert.equal(createLandmarkLife({type:'constructor'}),null);
});

test('day/night, reduced motion, per-category settings and master switch are honest ambient controls',()=>{
  for(const type of types){
    const life=createLandmarkLife({type,id:'settings'});
    life.update({elapsedSeconds:51,night:true});
    assert.ok(life.getState().actors.filter(a=>a.kind==='person').every(a=>!a.visible));
    assert.ok(life.getState().actors.filter(a=>a.kind==='vehicle').every(a=>a.activity==='parked'));
    life.update({elapsedSeconds:1,reducedMotion:true});const still=life.getState(),bones=pose(life.root);
    life.update({elapsedSeconds:990,reducedMotion:true});assert.deepEqual(life.getState(),still);assert.deepEqual(pose(life.root),bones);
    life.update({elapsedSeconds:0,settings:{people:false,vehicles:false,satellites:false}});assert.ok(life.getState().actors.every(a=>!a.visible));
    life.update({elapsedSeconds:0,settings:{enabled:false}});assert.equal(life.root.visible,false);
    life.update({elapsedSeconds:0,settings:{events:false}});assert.ok(life.getState().actors.every(a=>!['signal','greet','garden','play'].includes(a.activity)));
    life.dispose();
  }
});

test('nonuniform resizing preserves body proportions and deck/roof heights follow modelHeight',()=>{
  for(const type of types){
    const [nw,nh]=shape[type],a=createLandmarkLife({type,w:nw*1.4,h:nh*.6},{heightScale:2.5}),b=createLandmarkLife({type,w:nw*1.4,h:nh*.6},{heightScale:.3});
    for(const life of [a,b])life.update({elapsedSeconds:17,reducedMotion:true});
    const small=b.getState().actors;
    for(const actor of a.getState().actors){
      assert.equal(actor.bodyScale,small.find(s=>s.role===actor.role).bodyScale);
      if(actor.kind!=='satellite')assert.ok(Math.abs(actor.position[1]-actor.nativePosition[1]*.6*2.5)<1e-6);
      assert.ok(Math.abs(actor.position[0])<nw*1.4/2);assert.ok(Math.abs(actor.position[2])<nh*.6/2);
    }
    if(type==='sceneryOfficeCampus'){
      for(const actor of a.getState().actors.filter(s=>s.kind==='satellite'))assert.ok(actor.position[1]>122.8*2.5*.6+10*.6);
      assert.equal(a.bounds.max.y,(122.8*2.5+35)*.6);
    }
    a.dispose();b.dispose();
  }
});

test('authored routes stay on open campus spaces and satellites remain above the office roof',()=>{
  for(const type of types){
    const life=createLandmarkLife({type,id:'collision-check'}),[w,h]=shape[type];
    for(let t=0;t<=360;t+=1.25){
      life.update({elapsedSeconds:t});
      for(const a of life.getState().actors){
        const [x,y,z]=a.nativePosition;
        assert.ok(Math.abs(x)<w/2&&Math.abs(z)<h/2);
        if(type==='sceneryRanchHouse'){
          if(a.role==='grandfather')assert.equal(z,-32);
          if(a.role==='grandmother')assert.ok(x>=23&&x<=49&&z>=70&&z<=82);
          if(a.role==='granddaughter')assert.equal(x,7);
          if(a.kind==='vehicle')assert.ok(z>=70&&z<=78&&x===-32.5);
        }
        if(type==='sceneryOfficeCampus'){
          if(a.kind==='person')assert.ok(x>=53&&x<=80&&z>=52&&z<=69);
          if(a.kind==='vehicle')assert.ok(x>=-78&&x<=26&&z===61&&y===13.8);
          if(a.kind==='satellite')assert.ok(y-7>122.8);
        }
        if(type==='scenerySchoolCampus'&&a.kind==='vehicle')assert.ok(x>=-83&&x<=83&&z===111&&y===1.6);
      }
    }
    life.dispose();
  }
});

test('all runtime art stays within conservative camera bounds and cannot steal selection hits',()=>{
  for(const type of types){
    const life=createLandmarkLife({type,id:'bounds'});
    for(const t of [0,7,20,43,81]){
      life.update({elapsedSeconds:t});
      life.root.traverse(o=>{if(o.isSkinnedMesh){o.skeleton.update();o.computeBoundingBox();o.computeBoundingSphere();}});
      const b=new Box3().setFromObject(life.root),epsilon=.02;
      assert.ok(b.min.x>=life.bounds.min.x-epsilon&&b.max.x<=life.bounds.max.x+epsilon);
      assert.ok(b.min.z>=life.bounds.min.z-epsilon&&b.max.z<=life.bounds.max.z+epsilon);
      assert.ok(b.max.y<=life.bounds.max.y+epsilon);
      assert.ok(b.min.y>=-epsilon);
    }
    life.root.traverse(o=>{assert.ok(o.userData.roomcraftDecorative);assert.deepEqual(o.raycast({},[]),undefined);});
    assert.ok(life.bounds.getSize(new Vector3()).toArray().every(Number.isFinite));life.dispose();
  }
});

test('school guide body clears the actual static campus shrubs and entrance structures',()=>{
  const campus=makeStorybookSchoolCampus({type:'scenerySchoolCampus'}).root;
  campus.updateMatrixWorld(true);
  const life=createLandmarkLife({type:'scenerySchoolCampus',id:'review'});
  for(let t=0;t<=100;t+=2){
    life.update({elapsedSeconds:t});
    const actor=life.getState().actors.find(a=>a.role==='school-guide'),[x,,z]=actor.nativePosition;
    for(const dx of [-1.5,0,1.5])for(const dz of [-1.5,0,1.5]){
      const hit=new Raycaster(new Vector3(x+dx,40,z+dz),new Vector3(0,-1,0)).intersectObject(campus,true)[0];
      assert.ok(hit&&hit.point.y<.81,'guide body corridor contains only the ground plinth');
    }
  }
  life.dispose();campus.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
});
