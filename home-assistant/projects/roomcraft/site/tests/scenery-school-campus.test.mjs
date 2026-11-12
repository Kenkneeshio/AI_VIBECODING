import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {test} from 'node:test';
import {Box3,Vector3,Raycaster} from 'three';
import {makeStorybookSchoolCampus} from '../ha-local/storybook-school-campus.mjs';

const dispose=root=>root.traverse(mesh=>{mesh.geometry?.dispose();mesh.material?.dispose();});
const hash=root=>{const digest=createHash('sha256');for(const mesh of root.children)for(const key of ['position','normal','color']){
  const a=mesh.geometry.getAttribute(key).array;digest.update(Buffer.from(a.buffer,a.byteOffset,a.byteLength));}return digest.digest('hex');};

test('school owns a bounded opaque campus with editable dimensions and ground support',()=>{
  for(const [w,h] of [[300,240],[150,120],[390,200]]){
    const {root,anchorY}=makeStorybookSchoolCampus({type:'scenerySchoolCampus',w,h});
    const bounds=new Box3().setFromObject(root),span=bounds.getSize(new Vector3());
    assert.ok(Math.abs(span.x-w)<.0001);assert.ok(Math.abs(span.z-h)<.0001);assert.ok(Math.abs(bounds.min.y)<.0001);
    assert.ok(Math.abs(bounds.max.y-32*Math.min(w/300,h/240))<.0001);
    assert.equal(root.children.length,4);assert.ok(anchorY>0&&anchorY<span.y);
    assert.ok(root.children.every(mesh=>!mesh.material.transparent&&!mesh.material.map));
    assert.ok(root.children.reduce((n,mesh)=>n+mesh.geometry.attributes.position.count/3,0)<25000);
    for(const mesh of root.children)for(const key of ['position','normal'])assert.ok(mesh.geometry.attributes[key].array.every(Number.isFinite));
    dispose(root);
  }
});

test('public entrance has no curb or fence obstruction, and wing foundations reach the parcel',()=>{
  const {root}=makeStorybookSchoolCampus({type:'scenerySchoolCampus'});root.updateMatrixWorld(true);
  for(const x of [-13,0,13])for(const z of [119.99,117,110]){
    const hit=new Raycaster(new Vector3(x,50,z),new Vector3(0,-1,0)).intersectObject(root,true)[0];
    assert.ok(hit);assert.ok(Math.abs(hit.point.y-1.6)<.0001,'street connector meets continuous asphalt');
  }
  for(const [x,z] of [[-70,64.5],[70,64.5],[-89,38.5],[89,38.5],[0,-35.5],[0,27]]){
    const hit=new Raycaster(new Vector3(x,1.2,z+2),new Vector3(0,0,-1)).intersectObject(root,true)[0];
    assert.ok(hit&&hit.distance<2.1,'low view cannot see daylight under the wing');
  }
  // Open center path and separate junior/main play areas survive roof occlusion.
  const height=(x,z)=>new Raycaster(new Vector3(x,50,z),new Vector3(0,-1,0)).intersectObject(root,true)[0]?.point.y;
  assert.ok(height(0,52)<2);assert.ok(height(-128,46)>20);assert.ok(height(-108,-91)>20);
  assert.ok(height(96,-92)<2);dispose(root);
});

test('school recipe is deterministic, safely typed and independently disposable',()=>{
  const a=makeStorybookSchoolCampus({type:'scenerySchoolCampus'}),b=makeStorybookSchoolCampus({type:'scenerySchoolCampus',w:NaN,h:0});
  assert.equal(hash(a.root),hash(b.root));assert.equal(makeStorybookSchoolCampus({type:'constructor'}),null);
  for(let i=0;i<a.root.children.length;i++){assert.notEqual(a.root.children[i].geometry,b.root.children[i].geometry);assert.notEqual(a.root.children[i].material,b.root.children[i].material);}
  dispose(a.root);dispose(b.root);
});

test('school Canvas catalog recipe preserves transforms without reference photography',()=>{
  const window={dispatchEvent(){}};class Image{complete=false;naturalWidth=0;addEventListener(){}}
  runInNewContext(readFileSync(new URL('../public/object-art.js',import.meta.url),'utf8'),{window,Image,Event:class{}});
  const rotations=[],scales=[];let images=0,fills=0;
  const gradient={addColorStop(){}};
  const ctx=new Proxy({}, {get(target,key){
    if(key==='createLinearGradient'||key==='createRadialGradient')return ()=>gradient;
    if(key==='drawImage')return ()=>{images++;};if(key==='fill'||key==='fillRect')return ()=>{fills++;};
    if(key==='rotate')return v=>rotations.push(v);if(key==='scale')return (...v)=>scales.push(v);
    return target[key]??(()=>{});
  },set(target,key,value){target[key]=value;return true;}});
  assert.equal(window.RoomcraftObjectArt.draw(ctx,{type:'scenerySchoolCampus',x:300,y:400,w:450,h:240,rotation:90}),true);
  assert.equal(images,0);assert.ok(fills>100);assert.equal(rotations[0],Math.PI/2);assert.deepEqual(scales[0],[1.5,1]);
});
