import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {test} from 'node:test';
import {Box3,Vector3,Raycaster} from 'three';
import {makeStorybookOfficeCampus} from '../ha-local/storybook-office-campus.mjs';

const dispose=root=>root.traverse(mesh=>{mesh.geometry?.dispose();mesh.material?.dispose();});
const hash=root=>{const digest=createHash('sha256');for(const mesh of root.children)for(const key of ['position','normal','color']){
  const a=mesh.geometry.getAttribute(key).array;digest.update(Buffer.from(a.buffer,a.byteOffset,a.byteLength));}return digest.digest('hex');};

test('office campus has exact editable footprint, ground support and bounded opaque art',()=>{
  for(const [w,h] of [[220,180],[110,90],[300,140]]){
    const {root,anchorY}=makeStorybookOfficeCampus({type:'sceneryOfficeCampus',w,h});
    const bounds=new Box3().setFromObject(root),span=bounds.getSize(new Vector3());
    assert.ok(Math.abs(span.x-w)<.0001);assert.ok(Math.abs(span.z-h)<.0001);assert.ok(Math.abs(bounds.min.y)<.0001);
    assert.equal(root.children.length,4);assert.ok(anchorY>0&&anchorY<span.y);
    assert.ok(root.children.every(mesh=>!mesh.material.transparent&&!mesh.material.map));
    assert.ok(root.children.reduce((n,mesh)=>n+mesh.geometry.attributes.position.count/3,0)<18000);
    for(const mesh of root.children)for(const key of ['position','normal'])assert.ok(mesh.geometry.attributes[key].array.every(Number.isFinite));
    dispose(root);
  }
});

test('office balconies have open fronts and parking stays below the six-story tower',()=>{
  const {root}=makeStorybookOfficeCampus({type:'sceneryOfficeCampus'});root.updateMatrixWorld(true);
  const cast=y=>new Raycaster(new Vector3(6,y,100),new Vector3(0,0,-1)).intersectObject(root,true)[0];
  const opening=cast(48),fascia=cast(38);
  assert.ok(opening&&fascia);assert.ok(opening.point.z<29,'open balcony reveals inset glazing');
  assert.ok(fascia.point.z>31,'curved fascia stays in front of the inset glazing');
  const overhead=new Raycaster(new Vector3(-80,180,61),new Vector3(0,-1,0)).intersectObject(root,true)[0];
  assert.ok(overhead.point.y<22,'parking deck is low enough to remain a separate adjacent structure');
  dispose(root);
});

test('office art is deterministic and independently owned with safe fallbacks',()=>{
  const a=makeStorybookOfficeCampus({type:'sceneryOfficeCampus'}),b=makeStorybookOfficeCampus({type:'sceneryOfficeCampus',w:NaN,h:0});
  assert.equal(hash(a.root),hash(b.root));assert.equal(makeStorybookOfficeCampus({type:'constructor'}),null);
  for(let i=0;i<a.root.children.length;i++){assert.notEqual(a.root.children[i].geometry,b.root.children[i].geometry);assert.notEqual(a.root.children[i].material,b.root.children[i].material);}
  dispose(a.root);dispose(b.root);
});

test('office Canvas recipe scales and rotates independently without photo assets',()=>{
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
  assert.equal(window.RoomcraftObjectArt.draw(ctx,{type:'sceneryOfficeCampus',x:300,y:400,w:330,h:180,rotation:90}),true);
  assert.equal(images,0);assert.ok(fills>100);assert.equal(rotations[0],Math.PI/2);assert.deepEqual(scales[0],[1.5,1]);
});
