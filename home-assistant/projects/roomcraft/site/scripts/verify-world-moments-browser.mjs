import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {mkdtemp,writeFile,readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {build} from 'esbuild';

// Public synthetic art sheet. It uses the production planner/sampler/factory;
// no device APIs, dashboard state or private photographs are loaded.
const qa=await mkdtemp(join(tmpdir(),'roomcraft-world-moments-qa-'));
const source=`
import * as THREE from 'three';
import {createStorybookWorldMoments,planStorybookWorldMoments,sampleStorybookWorldMoments,WORLD_MOMENT_KINDS} from './ha-local/storybook-world-moments.mjs';
import {buildStorybookNeighborhood,buildStorybookStreet,storybookStreetBounds} from './ha-local/storybook-street.mjs';
import {createStorybookTraffic,createTrafficMotion,storybookTrafficAppearance} from './ha-local/storybook-traffic.mjs';
const plan={houseBounds:{minX:420,maxX:1450,minZ:210,maxZ:870},bounds:{minX:420,maxX:1450,minZ:210,maxZ:870},editableStructure:true};
const street=storybookStreetBounds(plan),{water}=buildStorybookNeighborhood({box(){},ball(){},add(g){g.dispose()}},street,-111,plan.houseBounds,6200,935);
const inputs={water,street,plan,heightAt:()=>-111},layout=planStorybookWorldMoments(inputs);
const options={condition:'sunny',windSpeed:5,worldLife:{density:1,variety:1}};
const width=1500,height=1000,renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
renderer.setSize(width,height);renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
document.querySelector('main').append(renderer.domElement);renderer.setScissorTest(true);
const evidence=[];
if(!location.search.includes('vehicles')){
for(const [index,kind] of WORLD_MOMENT_KINDS.entries()){
 let pose,seconds;
 for(let t=0;t<20000;t+=13){const state=sampleStorybookWorldMoments(layout,t,options);pose=state.activities.find(a=>a.kind===kind);if(pose){seconds=t;break;}}
 if(!pose)throw Error('Missing activity '+kind);
 const scene=new THREE.Scene();scene.background=new THREE.Color('#eee5cc');
 scene.add(new THREE.HemisphereLight('#fff4df','#8c967f',2.1));const sun=new THREE.DirectionalLight('#fff1d4',3.5);sun.position.set(-40,95,60);scene.add(sun);
 const sand=new THREE.Mesh(new THREE.PlaneGeometry(180,180),new THREE.MeshStandardMaterial({color:'#e5cfaa',roughness:1}));sand.rotation.x=-Math.PI/2;sand.position.set(pose.x,pose.y-.10,pose.z);scene.add(sand);
 const art=createStorybookWorldMoments(inputs);scene.add(art.root);
 art.update(seconds,{...options,inView:(x,y,z)=>Math.hypot(x-pose.x,z-pose.z)<1});
 const camera=new THREE.OrthographicCamera(-45,45,45,-45,.1,600),target=new THREE.Vector3(pose.x,pose.y+22,pose.z);
 camera.position.copy(target).add(new THREE.Vector3(48,60,88));camera.lookAt(target);camera.updateMatrixWorld(true);
 const col=index%3,row=Math.floor(index/3),x=col*500,y=(1-row)*500;renderer.setViewport(x,y,500,500);renderer.setScissor(x,y,500,500);renderer.render(scene,camera);
 evidence.push({kind,seconds,pose,parts:art.getState().parts});
 const label=document.createElement('div');label.className='label';label.style.left=(col*500+20)+'px';label.style.top=(row*500+15)+'px';label.textContent=kind;document.querySelector('main').append(label);
}
}else{
 const road={...buildStorybookStreet({box(){},add(g){g.dispose()}},street,-111,6200,935),sample:undefined};
 const slot=createTrafficMotion(road).update(0,{severity:'heavy'},true)[0];
 for(const [index,[wanted,accessory]] of [['blue-wagon','surfboard'],['pine-suv','weekend-case'],['mint-city-bus',null],['blush-beetle',null]].entries()){
   let seed,appearance;for(let n=0;n<10000;n++){const a=storybookTrafficAppearance(slot,{seed:n,variety:1});if(a.vehicle.id===wanted&&a.accessory===accessory){seed=n;appearance=a;break;}}
   if(seed===undefined)throw Error('Missing cosmetic '+wanted);
   const scene=new THREE.Scene();scene.background=new THREE.Color('#e8e4d7');scene.add(new THREE.HemisphereLight('#fff7e8','#7b8a7a',2));
   const sun=new THREE.DirectionalLight('#fff0d8',3.5);sun.position.set(-40,95,60);scene.add(sun);
   const ground=new THREE.Mesh(new THREE.PlaneGeometry(250,250),new THREE.MeshStandardMaterial({color:'#b5b4aa',roughness:1}));ground.rotation.x=-Math.PI/2;ground.position.set(slot.x,road.surfaceY-.1,slot.z);scene.add(ground);
   const art=createStorybookTraffic(road);scene.add(art.root);art.update(0,{severity:'heavy'},{reduceMotion:true,worldLife:{seed,variety:1},inView:(x,y,z)=>Math.abs(x-slot.x)<1&&Math.abs(z-slot.z)<1});
   const target=new THREE.Vector3(slot.x,road.surfaceY+16,slot.z),camera=new THREE.OrthographicCamera(-65,65,43.3,-43.3,.1,600);
   camera.position.copy(target).add(new THREE.Vector3(70,70,90));camera.lookAt(target);camera.updateMatrixWorld(true);
   const col=index%2,row=Math.floor(index/2);renderer.setViewport(col*750,(1-row)*500,750,500);renderer.setScissor(col*750,(1-row)*500,750,500);renderer.render(scene,camera);
   const label=document.createElement('div');label.className='label';label.style.left=(col*750+20)+'px';label.style.top=(row*500+15)+'px';label.textContent=wanted+' · '+(accessory??'alternate paint');document.querySelector('main').append(label);
   evidence.push({kind:wanted,seed,appearance,parts:art.root.children[0].count});
 }
}
document.body.dataset.result='pass';document.querySelector('#evidence').textContent=JSON.stringify(evidence);
`;
const bundle=await build({stdin:{contents:source,resolveDir:process.cwd(),sourcefile:'world-moments-proof.mjs'},bundle:true,format:'iife',target:'es2022',write:false,minify:true});
await writeFile(join(qa,'bundle.js'),bundle.outputFiles[0].contents);
await writeFile(join(qa,'index.html'),`<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;background:#ece3cf}main{position:relative;width:1500px;height:1000px}.label{position:absolute;font:24px Georgia;color:#53665b;text-transform:capitalize}#evidence{display:none}</style></head><body><main></main><pre id="evidence"></pre><script src="bundle.js"></script></body></html>`);
for(const [name,query,count] of [['world-moments','',6],['vehicle-variety','?vehicles',4]]){
const child=spawn(process.env.ROOMCRAFT_QA_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-first-run',
  '--no-default-browser-check','--hide-scrollbars','--disable-background-networking','--window-size=1500,1000',
  '--user-data-dir='+join(qa,'chrome-profile-'+name),'--virtual-time-budget=5000','--screenshot='+join(qa,name+'.png'),
  '--dump-dom','file:///'+join(qa,'index.html').replaceAll('\\','/')+query,
],{windowsHide:true,stdio:['ignore','pipe','pipe']});
let output='',errors='';child.stdout.on('data',d=>output+=d);child.stderr.on('data',d=>errors+=d);
await new Promise((resolve,reject)=>{child.once('error',reject);child.once('exit',code=>code===0?resolve():reject(Error(errors)));});
assert.match(output,/data-result="pass"/);const evidence=JSON.parse(output.match(/<pre id="evidence">([^<]+)<\/pre>/)[1]);
assert.equal(evidence.length,count);assert.ok(evidence.every(e=>e.parts>0));
assert.ok((await readFile(join(qa,name+'.png'))).length>10000);
await writeFile(join(qa,name+'-evidence.json'),JSON.stringify(evidence,null,2));
}
console.log('PASS: six production ambient activities and four cosmetic vehicles rendered in Chrome; no device APIs.');console.log(qa);
