import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {test} from 'node:test';
import {Box3,Vector3} from 'three';
import {makeStorybookParkedVehicle} from '../ha-local/storybook-parked-vehicles.mjs';
import {STORYBOOK_VEHICLES,buildStorybookVehicle} from '../ha-local/storybook-vehicles.mjs';

function geometryHash(root) {
  const hash=createHash('sha256');
  for(const mesh of root.children){
    for(const name of ['position','normal','color']){
      const array=mesh.geometry.getAttribute(name)?.array;
      if(array)hash.update(Buffer.from(array.buffer,array.byteOffset,array.byteLength));
    }
  }
  return hash.digest('hex');
}
function dispose(root){root.traverse(node=>{node.geometry?.dispose();node.material?.dispose();});}

test('parked Prius has exact editable footprint, ground support, +Z nose and inactive lamps',()=>{
  for(const [w,h] of [[34,70],[28,56],[72,140]]){
    const model=makeStorybookParkedVehicle({type:'garagePriusBlue',w,h});
    const bounds=new Box3().setFromObject(model.root),span=bounds.getSize(new Vector3());
    assert.ok(Math.abs(span.x-w)<.00001);
    assert.ok(Math.abs(span.z-h)<.00001);
    assert.ok(Math.abs(bounds.min.y)<.00001);
    assert.ok(model.anchorY>0&&model.anchorY<span.y);
    assert.equal(model.root.children.length,4,'paint, glazing and lamp layers bound rendering work');
    const lamps=model.root.getObjectByName('prius-headlamp');
    assert.ok(lamps.geometry.boundingBox.min.z>h*.35);
    const normals=lamps.geometry.getAttribute('normal').array;
    for(let i=1;i<normals.length;i+=3)assert.ok(normals[i]>0,'both swept lenses face upward');
    assert.ok(model.root.getObjectByName('prius-taillamp').geometry.boundingBox.max.z<0);
    assert.ok(model.root.children.every(mesh=>mesh.material.emissiveIntensity===0));
    const triangleCount=model.root.children.reduce((sum,mesh)=>sum+mesh.geometry.getAttribute('position').count/3,0);
    assert.ok(triangleCount<2500,'the detailed parked car remains under its static mesh budget');
    const glazing=model.root.getObjectByName('prius-glazing');
    assert.equal(glazing.material.isMeshPhysicalMaterial,true);
    assert.equal(glazing.material.transparent,false,'opaque glazing never leaks through the garage roof');
    assert.ok(glazing.material.clearcoat>.5);
    dispose(model.root);
  }
});

test('parked Prius builds deterministic independently disposable art without changing the traffic fleet',()=>{
  const first=makeStorybookParkedVehicle({type:'garagePriusBlue'});
  const second=makeStorybookParkedVehicle({type:'garagePriusBlue'});
  assert.equal(geometryHash(first.root),geometryHash(second.root));
  for(let i=0;i<first.root.children.length;i++){
    assert.notEqual(first.root.children[i].geometry,second.root.children[i].geometry);
    assert.notEqual(first.root.children[i].material,second.root.children[i].material);
  }
  assert.ok(STORYBOOK_VEHICLES.every(entry=>!entry.id.toLowerCase().includes('prius')));
  assert.equal(buildStorybookVehicle('garagePriusBlue'),null);
  assert.equal(makeStorybookParkedVehicle({type:'constructor'}),null);
  dispose(first.root);dispose(second.root);
});

test('parked vehicle, overhead light and cutaway garage have independent scalable canvas art',()=>{
  const source=readFileSync(new URL('../public/object-art.js',import.meta.url),'utf8');
  const window={dispatchEvent(){}};
  class Image{complete=false;naturalWidth=0;addEventListener(){}}
  runInNewContext(source,{window,Image,Event:class{}});
  const rotation=[],translates=[];let strokes=0,images=0;
  const gradient={addColorStop(){}};
  const canvas=new Proxy({}, {get(target,key){
    if(key==='createLinearGradient'||key==='createRadialGradient')return ()=>gradient;
    if(key==='stroke'||key==='fill')return ()=>{strokes++;};
    if(key==='rotate')return angle=>rotation.push(angle);
    if(key==='translate')return (...args)=>translates.push(args);
    if(key==='drawImage')return ()=>{images++;};
    return target[key]??(()=>{});
  },set(target,key,value){target[key]=value;return true;}});
  for(const [type,w,h] of [['garagePriusBlue',34,70],['garageCeilingLight',32,18],['garageDoor',132,120]]){
    assert.equal(window.RoomcraftObjectArt.draw(canvas,{type,w,h,x:200,y:180,rotation:180,garageRoof:'cutaway'}),true);
  }
  assert.equal(images,0,'no source image or floor crop is used');
  assert.ok(strokes>60,'body, glazing, trim, lamp and shell details render');
  assert.equal(rotation.at(-1),Math.PI);
  assert.deepEqual(translates.at(-1),[200,180]);
});
