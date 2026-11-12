import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {test} from 'node:test';
import {Box3,Vector3} from 'three';
import {makeStorybookSceneryHouse} from '../ha-local/storybook-scenery-house.mjs';

const dispose=root=>root.traverse(mesh=>{mesh.geometry?.dispose();mesh.material?.dispose();});
function digest(root){
  const hash=createHash('sha256');
  for(const mesh of root.children)for(const name of ['position','normal','color']){
    const array=mesh.geometry.getAttribute(name).array;
    hash.update(Buffer.from(array.buffer,array.byteOffset,array.byteLength));
  }
  return hash.digest('hex');
}

test('scenery ranch preserves exact editable yard dimensions and ground support',()=>{
  for(const [w,h] of [[130,176],[65,88],[260,150]]){
    const model=makeStorybookSceneryHouse({type:'sceneryRanchHouse',w,h});
    const bounds=new Box3().setFromObject(model.root),span=bounds.getSize(new Vector3());
    assert.ok(Math.abs(span.x-w)<.0001);assert.ok(Math.abs(span.z-h)<.0001);
    assert.ok(Math.abs(bounds.min.y)<.00001);
    assert.ok(model.anchorY>0&&model.anchorY<span.y);
    assert.equal(model.root.children.length,4,'four merged material layers bound draw work');
    assert.ok(model.root.children.every(mesh=>mesh.material.transparent===false));
    const triangles=model.root.children.reduce((sum,mesh)=>sum+mesh.geometry.getAttribute('position').count/3,0);
    assert.ok(triangles<10000,'roof courses and garden stay within the scenery triangle budget');
    const garden=model.root.getObjectByName('ranch-garden').geometry;
    assert.ok(garden.boundingBox.min.z<-h*.45,'the substantial garden extends behind the house');
    const points=garden.getAttribute('position');
    for(let i=0;i<points.count;i++)if(points.getY(i)>5*Math.min(w/130,h/176)){
      assert.ok(points.getZ(i)<0,'raised garden planting and fixtures stay in the rear yard');
    }
    dispose(model.root);
  }
});

test('scenery ranch is deterministic, independently disposable and type guarded',()=>{
  const a=makeStorybookSceneryHouse({type:'sceneryRanchHouse'}),b=makeStorybookSceneryHouse({type:'sceneryRanchHouse'});
  assert.equal(digest(a.root),digest(b.root));
  for(let i=0;i<a.root.children.length;i++){
    assert.notEqual(a.root.children[i].geometry,b.root.children[i].geometry);
    assert.notEqual(a.root.children[i].material,b.root.children[i].material);
    for(const name of ['position','normal'])assert.ok(a.root.children[i].geometry.getAttribute(name).array.every(Number.isFinite));
  }
  assert.equal(makeStorybookSceneryHouse({type:'constructor'}),null);
  const fallback=makeStorybookSceneryHouse({type:'sceneryRanchHouse',w:NaN,h:-4});
  const span=new Box3().setFromObject(fallback.root).getSize(new Vector3());
  assert.equal(span.x,130);assert.equal(span.z,176);
  dispose(a.root);dispose(b.root);dispose(fallback.root);
});

test('canvas ranch uses independent vector geometry and normal object transforms',()=>{
  const source=readFileSync(new URL('../public/object-art.js',import.meta.url),'utf8');
  const window={dispatchEvent(){}};
  class Image{complete=false;naturalWidth=0;addEventListener(){}}
  runInNewContext(source,{window,Image,Event:class{}});
  const rotations=[],scales=[],translates=[];let images=0,fills=0;
  const gradient={addColorStop(){}};
  const ctx=new Proxy({}, {get(target,key){
    if(key==='createLinearGradient'||key==='createRadialGradient')return ()=>gradient;
    if(key==='drawImage')return ()=>{images++;};
    if(key==='fill'||key==='fillRect')return ()=>{fills++;};
    if(key==='rotate')return angle=>rotations.push(angle);
    if(key==='scale')return (...args)=>scales.push(args);
    if(key==='translate')return (...args)=>translates.push(args);
    return target[key]??(()=>{});
  },set(target,key,value){target[key]=value;return true;}});
  assert.equal(window.RoomcraftObjectArt.draw(ctx,{type:'sceneryRanchHouse',x:200,y:250,w:260,h:264,rotation:90}),true);
  assert.equal(images,0);assert.ok(fills>100);
  assert.ok(translates.some(([x,y])=>x===200&&y===250));assert.deepEqual(translates.at(-1),[0,30]);assert.equal(rotations.at(-1),Math.PI/2);
  assert.deepEqual(scales.at(-1),[2,1.5]);
});
