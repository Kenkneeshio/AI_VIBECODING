import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import test from 'node:test';
import {Box3, OrthographicCamera, Vector3} from 'three';
import {compileStorybookPlan} from '../ha-local/storybook-scene.mjs';
import {exteriorCameraBounds, exteriorFootprint} from '../ha-local/storybook-exterior.mjs';
import {fitStorybookCamera} from '../ha-local/storybook-camera.mjs';
import {storybookStreetBounds} from '../ha-local/storybook-street.mjs';
import {makeStorybookOfficeCampus} from '../ha-local/storybook-office-campus.mjs';

const project = {version:2,editableReferenceVersion:10,walls:[],hotspots:[],rooms:[{
  id:'condo',surface:'oak',points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}],
}],items:[
  {id:'garage',type:'garageDoor',x:306,y:112,w:132,h:120,rotation:0},
  {id:'road',type:'scenerySideRoad',x:1570,y:350,w:64,h:380,rotation:0},
  {id:'house',type:'sceneryRanchHouse',x:1775,y:420,w:130,h:176,rotation:90},
  {id:'office',type:'sceneryOfficeCampus',x:2020,y:700,w:220,h:180,rotation:90},
]};

test('exterior framing includes scenery while leaving structural and street bounds untouched', () => {
  const plan=compileStorybookPlan(project),before=structuredClone(plan.bounds),home=structuredClone(plan.houseBounds);
  const street=storybookStreetBounds(plan);
  const frame=exteriorCameraBounds(plan);
  assert.equal(frame.maxX,2110);
  assert.equal(frame.minX,240);
  assert.deepEqual(plan.bounds,before);
  assert.deepEqual(plan.houseBounds,home);
  const afterStreet=storybookStreetBounds(plan);
  assert.equal(afterStreet.nearZ,street.nearZ);
  assert.deepEqual(afterStreet.sample(1745,street.nearZ),street.sample(1745,street.nearZ));
  frame.maxY=300;
  assert.equal(plan.bounds.maxY,undefined,'camera height adjustments cannot mutate scene bounds');
  const without=exteriorCameraBounds({...plan,exteriorBounds:null});
  assert.deepEqual(without,plan.bounds);
  assert.notEqual(without,plan.bounds);
});

test('default zoom frames every exterior corner in phone, tablet and ultrawide views', () => {
  const plan=compileStorybookPlan(project),street=storybookStreetBounds(plan);
  const frame={...exteriorCameraBounds(plan),sceneryMinZ:street.sceneryMinZ};
  const office=makeStorybookOfficeCampus(project.items.find(item=>item.type==='sceneryOfficeCampus'));
  office.root.updateMatrixWorld(true);
  const officeHeight=new Box3().setFromObject(office.root).max.y;
  for (const [width,height] of [[390,680],[748,642],[1280,800],[2560,720]]) {
    for (const preset of ['default','top','dollhouse','corner','north','east','south','west']) {
      const camera=new OrthographicCamera(-800,800,450,-450,1,4400);
      const view=fitStorybookCamera(camera,frame,width,height,preset);
      assert.equal(view.zoom,1);
      for (const placement of plan.placements) {
        for (const {x,z} of exteriorFootprint(placement)) {
          for (const y of [placement.baseY,placement.baseY+(placement.item.type==='sceneryOfficeCampus'?officeHeight:92)]) {
            const pixel=new Vector3(x,y,z).project(camera);
            assert.ok(Math.abs(pixel.x)<1 && Math.abs(pixel.y)<1,
              `${placement.item.type} stays inside ${preset} at ${width}×${height}`);
          }
        }
      }
    }
  }
});

test('side-road compatibility art draws a detailed vector junction instead of a blank thumbnail', () => {
  const window={dispatchEvent(){}};
  class Image {complete=false;naturalWidth=0;addEventListener(){}}
  runInNewContext(readFileSync(new URL('../public/object-art.js',import.meta.url),'utf8'),{window,Image,Event:class{}});
  let fills=0,strokes=0,images=0;
  const translates=[];
  const gradient={addColorStop(){}};
  const ctx=new Proxy({}, {get(target,key){
    if(key==='createLinearGradient'||key==='createRadialGradient')return ()=>gradient;
    if(key==='fill'||key==='fillRect')return ()=>{fills++;};
    if(key==='stroke')return ()=>{strokes++;};
    if(key==='drawImage')return ()=>{images++;};
    if(key==='translate')return (...args)=>translates.push(args);
    return target[key]??(()=>{});
  },set(target,key,value){target[key]=value;return true;}});
  assert.equal(window.RoomcraftObjectArt.draw(ctx,{type:'scenerySideRoad',x:1570,y:350,w:64,h:380,rotation:0}),true);
  assert.equal(images,0);
  assert.ok(fills>=6);
  assert.ok(strokes>10);
  assert.deepEqual(translates,[[1570,350]]);
});
