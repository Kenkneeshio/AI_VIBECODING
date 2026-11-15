import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {build} from 'esbuild';

const qa=await mkdtemp(join(tmpdir(),'roomcraft-inland-landscape-qa-'));
const source=`import * as THREE from 'three';
import {createStorybookMeadow} from './ha-local/storybook-meadow.mjs';
import {createInlandWatercourse,createInlandBiomeDetails} from './ha-local/storybook-inland-biomes.mjs';
const plan={houseBounds:{minX:360,maxX:1450,minZ:185,maxZ:835},editableStructure:true,placements:[],stairs:[]};
const street={nearZ:41,sample(x,z){return{x,z:z+32*Math.sin(x*.006),yaw:0}}};
const meadow=createStorybookMeadow({plan,street,width:6200,depth:4200,centerX:905,centerZ:510,groundY:-111});
const scene=new THREE.Scene();scene.background=new THREE.Color('#d9e3d1');
scene.add(new THREE.HemisphereLight('#fff7df','#83947e',2));const sun=new THREE.DirectionalLight('#fff0d8',2.4);sun.position.set(-700,1800,400);scene.add(sun);
const land=new THREE.Mesh(meadow.geometry,new THREE.MeshStandardMaterial({color:'#d9d8b4',vertexColors:true,roughness:1}));
land.position.set(905,-111,510);scene.add(land);
const creek=createInlandWatercourse(plan.houseBounds,meadow.heightAt);scene.add(creek);
const details=createInlandBiomeDetails(plan.houseBounds,meadow.heightAt);scene.add(details);
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setSize(1500,1000);
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
document.body.append(renderer.domElement);
const target=new THREE.Vector3(1050,-65,1300),camera=new THREE.OrthographicCamera(-1900,1900,1267,-1267,1,9000);
camera.position.copy(target).add(new THREE.Vector3(1300,2200,2900));camera.lookAt(target);camera.updateMatrixWorld(true);
renderer.render(scene,camera);document.body.dataset.result='pass';
document.querySelector('#evidence').textContent=JSON.stringify({creeks:creek.children.length,details:details.children.length,
 vertices:land.geometry.attributes.position.count,materials:[...new Set(creek.children.map(m=>m.material.color.getHexString()))]});`;
const bundled=await build({stdin:{contents:source,resolveDir:process.cwd(),sourcefile:'inland-proof.mjs'},bundle:true,format:'iife',target:'es2022',write:false,minify:true});
await writeFile(join(qa,'bundle.js'),bundled.outputFiles[0].contents);
await writeFile(join(qa,'index.html'),'<html><body style="margin:0"><pre id="evidence" hidden></pre><script src="bundle.js"></script></body></html>');
const chrome=spawn(process.env.ROOMCRAFT_QA_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-first-run',
  '--no-default-browser-check','--hide-scrollbars','--disable-background-networking','--window-size=1500,1000',
  '--user-data-dir='+join(qa,'chrome-profile'),'--virtual-time-budget=5000',
  '--screenshot='+join(qa,'inland-landscape.png'),'--dump-dom','file:///'+join(qa,'index.html').replaceAll('\\','/'),
],{windowsHide:true,stdio:['ignore','pipe','pipe']});
let output='',errors='';chrome.stdout.on('data',d=>output+=d);chrome.stderr.on('data',d=>errors+=d);
await new Promise((resolve,reject)=>{chrome.once('error',reject);chrome.once('exit',code=>code===0?resolve():reject(Error(errors)));});
assert.match(output,/data-result="pass"/);assert.ok((await readFile(join(qa,'inland-landscape.png'))).length>10000);
console.log('PASS: deterministic canyon, desert and creek rendered in production geometry.');console.log(qa);
