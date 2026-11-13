import * as THREE from 'three';
import {normalizeWorldLifeSettings} from './storybook-world-life-settings.mjs';
import {planStorybookBeachPlay} from './storybook-beach-play.mjs';

const TAU=Math.PI*2;
const RAIN=new Set(['rainy','pouring','lightning-rainy']);
const UNSAFE=new Set([...RAIN,'lightning','snowy','snowy-rainy','hail','exceptional']);
const MOON=new Set(['waxing_crescent','first_quarter','waxing_gibbous','full_moon','waning_gibbous','last_quarter','waning_crescent']);
const PALETTES=[
  {shirt:'#e18d78',trim:'#f5d997',hair:'#624439',skin:'#e4af8c',pants:'#658496'},
  {shirt:'#75a69b',trim:'#f5dbb1',hair:'#42353c',skin:'#a8745c',pants:'#777695'},
  {shirt:'#a290bc',trim:'#efd599',hair:'#765144',skin:'#e7bd96',pants:'#667d80'},
  {shirt:'#d3a665',trim:'#a9c8b3',hair:'#453f40',skin:'#b58165',pants:'#6e7c97'},
  {shirt:'#7c9dbb',trim:'#f2c8ae',hair:'#564336',skin:'#d99c78',pants:'#80728e'},
  {shirt:'#c785a0',trim:'#e4dfb5',hair:'#493c44',skin:'#bd866b',pants:'#6a8b87'},
];
export const WORLD_MOMENT_KINDS=Object.freeze(['kite','yoga','reading','painting','picnic','shells']);
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const mod=(v,d)=>((v%d)+d)%d;
export function worldMomentHash(seed,index=0){
  let n=(Math.imul((seed|0)^0x9e3779b9,1597334677)^Math.imul(index|0,3812015801))>>>0;
  n=Math.imul(n^(n>>>16),2246822507)>>>0;n=Math.imul(n^(n>>>13),3266489909)>>>0;
  return ((n^(n>>>16))>>>0)/4294967296;
}
function shoreAt(water,x){
  const points=water?.shoreline;
  if(!Array.isArray(points)||points.length<2)return NaN;
  const i=points.findIndex(p=>p.x>=x);
  if(i<1)return points[i===0?0:points.length-1].z;
  const a=points[i-1],b=points[i];return a.z+(b.z-a.z)*(x-a.x)/(b.x-a.x);
}
const inside=(x,z,b,pad=0)=>b&&x>=b.minX-pad&&x<=b.maxX+pad&&z>=b.minZ-pad&&z<=b.maxZ+pad;

/** Reserve complete vignette envelopes in dry sand. Invalid/steep/narrow
 * terrain produces fewer sites, never an actor in the sea, home or street. */
export function planStorybookWorldMoments({water,street,plan,trees=[],heightAt,exclusions=[]}={}){
  const bounds=plan?.houseBounds??plan?.bounds;
  const empty={sites:[],waterSites:[],trees:[]};
  if(!bounds||![bounds.minX,bounds.maxX,bounds.minZ,bounds.maxZ,street?.farZ,water?.y,water?.focusX].every(Number.isFinite))return empty;
  const span=bounds.maxX-bounds.minX;if(span<100||!Array.isArray(water.shoreline)||water.shoreline.length<2)return empty;
  if(!water.shoreline.every((p,i,a)=>Number.isFinite(p?.x)&&Number.isFinite(p?.z)&&(!i||p.x>a[i-1].x)))return empty;
  const beach=planStorybookBeachPlay(water,street);
  const occupied=Object.values(beach??{}).filter(Boolean).map(p=>({minX:p.x-p.halfWidth-10,maxX:p.x+p.halfWidth+10,minZ:p.z-p.halfDepth-12,maxZ:p.z+p.halfDepth+12}));
  // Existing authored umbrella/chair clusters occupy these frontage bands.
  for(const f of [.108,.49])occupied.push({minX:water.focusX+span*f-48,maxX:water.focusX+span*f+48,minZ:-Infinity,maxZ:Infinity});
  for(const tree of trees)if([tree.x,tree.z,tree.height].every(Number.isFinite)){
    const r=tree.height*.48;occupied.push({minX:tree.x-r,maxX:tree.x+r,minZ:tree.z-r,maxZ:tree.z+r});
  }
  occupied.push(...exclusions.filter(b=>[b?.minX,b?.maxX,b?.minZ,b?.maxZ].every(Number.isFinite)));
  const sites=[];
  for(const f of [-.035,.23,.365,.595,.845,1.02]){
    const x=water.focusX+span*f,radius=26;
    const zs=[-radius,0,radius].map(dx=>shoreAt(water,x+dx));
    const roadZ=Math.min(...[-radius,0,radius].map(dx=>street.sample?.(x+dx,street.farZ)?.z??street.farZ));
    const dry=Math.max(...zs)+30,land=roadZ-35;
    if(!Number.isFinite(dry)||land-dry<radius*2)continue;
    const z=(land+dry)/2;
    if(occupied.some(b=>inside(x,z,b,radius))||inside(x,z,bounds,radius))continue;
    const ground=(px,pz)=>water.sandHeight?.(px,pz)??heightAt?.(px,pz);
    const heights=[[-radius,-radius],[-radius,radius],[radius,-radius],[radius,radius],[0,0]].map(([dx,dz])=>ground(x+dx,z+dz));
    if(!heights.every(Number.isFinite)||Math.max(...heights)-Math.min(...heights)>5)continue;
    sites.push({id:'beach-moment-'+sites.length,x,z,y:ground(x,z),radius});
  }
  const waterSites=[];
  for(let i=0;i<18;i++){
    const x=water.focusX+span*(-.02+i*.057),shore=shoreAt(water,x),z=shore-45-(i%3)*24;
    if(Number.isFinite(shore)&&z>water.farZ+25)waterSites.push({x,z,y:water.y+.25});
  }
  const safeTrees=trees.filter(t=>[t.x,t.z,t.groundY,t.height].every(Number.isFinite)&&!inside(t.x,t.z,bounds,20))
    .filter(t=>t.z>shoreAt(water,t.x)+10&&!inside(t.x,t.z,{minX:-Infinity,maxX:Infinity,
      minZ:(street.sample?.(t.x,street.farZ)?.z??street.farZ)-22,maxZ:(street.sample?.(t.x,street.nearZ)?.z??street.nearZ)+22},20))
    .slice(0,24).map(t=>({...t}));
  return {sites,waterSites,trees:safeTrees};
}

/** A pure, bounded, finite catalog of fictional scenery moments. Time comes
 * from the caller; neither wall-clock access nor ambient randomness is used. */
export function sampleStorybookWorldMoments(plan,seconds=0,options={}){
  const settings=normalizeWorldLifeSettings(options.worldLife);
  const state={activities:[],birds:[],butterflies:[],drift:[],water:[],settings};
  if(!settings.enabled||settings.density===0)return state;
  const frozen=options.reduceMotion===true;
  const time=frozen?0:(Number.isFinite(seconds)?Math.max(0,seconds):0)*settings.pace;
  const seed=settings.seed,day=!options.night&&options.activity!=='overnight'&&options.activity!=='evening';
  const bad=UNSAFE.has(options.condition);
  const wind=Number.isFinite(options.windSpeed)?clamp(options.windSpeed,0,22):['windy','windy-variant'].includes(options.condition)?6:0;
  const bearing=Number.isFinite(options.windBearing)?options.windBearing:270;
  const wx=-Math.sin(bearing*Math.PI/180),wz=Math.cos(bearing*Math.PI/180);
  if(day&&!bad&&settings.characters){
    const count=Math.min(plan.sites.length,Math.ceil(settings.density*4));
    for(let i=0;i<count;i++){
      const site=plan.sites[i],phase=mod(time+worldMomentHash(seed,i)*480,480);
      // Keep entire groups stable for eight minutes; a short empty interval
      // separates changes without shrinking people or teleporting their pose.
      if(!frozen&&phase>465)continue;
      const cycle=Math.floor((time+worldMomentHash(seed,i)*480)/480);
      const varietyCount=1+Math.floor(settings.variety*(WORLD_MOMENT_KINDS.length-1));
      const kind=WORLD_MOMENT_KINDS[(i+Math.floor(worldMomentHash(seed,cycle*17+i+100)*varietyCount))%WORLD_MOMENT_KINDS.length];
      state.activities.push({...site,kind:kind==='kite'&&wind<1?'reading':kind,
        palette:Math.floor(worldMomentHash(seed,i+41)*PALETTES.length),phase:frozen?.25:phase,
        yaw:(worldMomentHash(seed,i+72)-.5)*.8,wind,wx,wz});
    }
  }
  if(day&&!bad&&settings.surprises){
    const phase=mod(time+seed*1.37,173);
    if(frozen||phase<91)for(let i=0;i<Math.ceil(settings.density*3);i++){
      const p=plan.waterSites[(i*5+3)%Math.max(1,plan.waterSites.length)];if(!p)continue;
      const angle=(frozen?.6:phase/91*TAU)+i*.7;
      state.birds.push({x:p.x+Math.cos(angle)*28,y:p.y+28+i*8+Math.sin(angle*2)*3,z:p.z+Math.sin(angle)*18,
        yaw:-angle,flap:frozen?.18:Math.sin(time*4.3+i)*.45});
    }
  }
  if(settings.vegetation)for(let i=0;i<Math.min(plan.trees.length,Math.ceil(settings.density*8));i++){
    const t=plan.trees[i];
    if(day&&!bad&&settings.surprises){
      const phase=time*(.25+worldMomentHash(seed,i+300)*.15)+i*2;
      state.butterflies.push({x:t.x+Math.cos(phase)*10,y:t.groundY+8+Math.sin(phase*1.7)*3,z:t.z+Math.sin(phase*.8)*10,
        yaw:phase,flap:frozen?.5:Math.sin(time*13+i)*.95,palette:i%PALETTES.length});
    }
    if(wind>0&&settings.weatherAccents&&!frozen){
      const progress=mod(time/(14+i%4)+worldMomentHash(seed,i+400),1);
      state.drift.push({x:t.x+wx*progress*12+Math.sin(progress*TAU)*2,
        y:t.groundY+.4+(1-progress)*t.height*.68,z:t.z+wz*progress*12,
        yaw:time+i,blossom:t.kind==='jacaranda',progress});
    }
  }
  if(settings.water&&settings.weatherAccents){
    const raining=RAIN.has(options.condition)&&options.precipitation!==false;
    const sun=day&&!bad&&options.condition==='sunny'&&options.reflections!==false;
    const moon=options.night&&MOON.has(options.moonPhase)&&['clear-night','partlycloudy'].includes(options.condition)&&
      (!Number.isFinite(options.moonElevation)||options.moonElevation>0)&&options.reflections!==false;
    if(raining||sun||moon)for(let i=0;i<Math.ceil(plan.waterSites.length*settings.density);i++){
      const p=plan.waterSites[(i+seed)%plan.waterSites.length];
      const phase=mod(time*(raining?.6:.22)+worldMomentHash(seed,i+600),1);
      state.water.push({...p,kind:raining?'rain-ring':'glitter',phase:frozen?.45:phase,night:Boolean(moon)});
    }
  }
  return state;
}

// Eight shared instanced geometry pools keep hundreds of rounded details to eight
// draw submissions. No geometry/material is allocated during animation.
function createBrush(root){
  const material=new THREE.MeshStandardMaterial({color:'#fff',roughness:.77});
  const glow=new THREE.MeshBasicMaterial({color:'#fff',transparent:true,opacity:.62,depthWrite:false,toneMapped:false});
  const shade=new THREE.MeshBasicMaterial({color:'#fff',transparent:true,opacity:.16,depthWrite:false});
  const shapes={ball:new THREE.SphereGeometry(1,10,7),box:new THREE.BoxGeometry(1,1,1),
    cone:new THREE.CylinderGeometry(0,1,1,10),rod:new THREE.CylinderGeometry(1,1,1,8),
    ring:new THREE.TorusGeometry(1,.055,4,24).rotateX(Math.PI/2),
    diamond:new THREE.OctahedronGeometry(1),glint:new THREE.OctahedronGeometry(1),shadow:new THREE.CircleGeometry(1,18).rotateX(-Math.PI/2)};
  const layers=new Map(Object.entries(shapes).map(([name,geometry])=>{
    const mesh=new THREE.InstancedMesh(geometry,['ring','glint'].includes(name)?glow:name==='shadow'?shade:material,800);
    mesh.name='world-moments-'+name;mesh.count=0;mesh.frustumCulled=false;mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    root.add(mesh);return [name,mesh];
  }));
  const transform=new THREE.Object3D(),colors=new Map(),up=new THREE.Vector3(0,1,0),direction=new THREE.Vector3();
  const color=shade=>{if(!colors.has(shade))colors.set(shade,new THREE.Color(shade));return colors.get(shade);};
  function part(shape,shade,x,y,z,w,h,d,rx=0,ry=0,rz=0){
    const mesh=layers.get(shape);if(mesh.count>=800)return;
    transform.position.set(x,y,z);transform.scale.set(w,h,d);transform.rotation.set(rx,ry,rz);transform.updateMatrix();
    mesh.setMatrixAt(mesh.count,transform.matrix);mesh.setColorAt(mesh.count++,color(shade));
  }
  function line(shade,a,b,r=.16){
    const dx=b[0]-a[0],dy=b[1]-a[1],dz=b[2]-a[2],length=Math.hypot(dx,dy,dz);if(length<.0001)return;
    const mesh=layers.get('rod');if(mesh.count>=800)return;
    transform.position.set((a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2);
    transform.quaternion.setFromUnitVectors(up,direction.set(dx,dy,dz).divideScalar(length));
    transform.scale.set(r,length,r);transform.updateMatrix();mesh.setMatrixAt(mesh.count,transform.matrix);mesh.setColorAt(mesh.count++,color(shade));
  }
  return {part,line,begin(){for(const mesh of layers.values())mesh.count=0;},finish(){for(const mesh of layers.values()){
    mesh.visible=mesh.count>0;if(mesh.count){mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;}
  }},dispose(){for(const mesh of layers.values()){mesh.dispose();mesh.geometry.dispose();}material.dispose();glow.dispose();shade.dispose();},
  count:()=>[...layers.values()].reduce((n,m)=>n+m.count,0)};
}

function drawActivity(brush,a){
  const p=PALETTES[a.palette],t=a.phase,breath=Math.sin(t*.75),c=Math.cos(a.yaw),s=Math.sin(a.yaw);
  const point=(x,y,z)=>[a.x+x*c+z*s,a.y+y,a.z-x*s+z*c];
  const part=(shape,shade,x,y,z,w,h,d,rx=0,ry=0,rz=0)=>brush.part(shape,shade,...point(x,y,z),w,h,d,rx,a.yaw+ry,rz);
  const line=(shade,from,to,r)=>brush.line(shade,point(...from),point(...to),r);
  function person(x,z,pose='stand',palette=p){
    const seated=['read','picnic','shells'].includes(pose),headY=seated?12.6:18.3,torso=seated?7.5:12;
    part('shadow','#645b52',x,.09,z+1,5.2,1,4.1);
    part('ball',palette.shirt,x,torso,z,3.4,3.9,2.65);
    part('ball',palette.trim,x,torso+2.9,z+.7,2.8,.5,2.2);
    part('ball',palette.hair,x,headY+.6,z-.4,3.65,3.8,3.25);
    part('ball',palette.skin,x,headY,z+.65,3.25,3.2,2.75);
    part('ball',palette.hair,x-.65,headY+2.75,z+1.2,2.9,1,2.25);
    part('ball',palette.hair,x+2.5,headY+2.7,z-1.1,1.4,1.5,1.3);
    for(const side of [-1,1]){
      part('ball',palette.skin,x+side*3.1,headY,z+.35,.65,.8,.65);
      part('ball','#393944',x+side*1.2,headY+.3,z+3.15,.29,.39,.2);
      part('ball','#fff0d9',x+side*1.12,headY+.42,z+3.32,.10,.12,.08);
      part('ball','#d48e83',x+side*1.9,headY-.58,z+2.99,.43,.22,.17);
      const legX=x+side*(pose==='yoga'?3.2:1.6);
      line(palette.pants,[x+side*1.6,torso-2.5,z],[legX,seated?2:3,z+(seated?3.5:0)],1.25);
      part('ball',palette.trim,legX,1,z+(seated?5:1),1.6,.9,2.3);
      let hand=[x+side*3.8,torso-2,z+1.2];
      if(pose==='yoga')hand=[x+side*(7+breath*.6),torso+4+breath,z+.5];
      if(pose==='kite')hand=[x+side*3.2,torso+2.7+breath*.8,z+4];
      if(pose==='read'||pose==='picnic')hand=[x+side*3,torso-.6,z+4];
      if(pose==='paint')hand=side>0?[x+8.2,torso+4+Math.sin(t*1.5)*.6,z-4.8]:[x-3.2,torso-1.7,z+3];
      if(pose==='shells')hand=[x+side*3.2,3+Math.sin(t*1.1)*.6,z+5.5];
      line(palette.shirt,[x+side*2.8,torso+1.4,z],hand,1.05);
      part('ball',palette.skin,...hand,1.05,1.05,1.05);
    }
    part('ball','#9c6665',x,headY-1.2,z+3.13,.55,.14,.13);
  }
  const towel=(x,z,w,d)=>{part('box',p.trim,x,.22,z,w,.35,d);for(let i=-2;i<=2;i++)part('box',p.shirt,x+i*w/6,.43,z,.65,.12,d*.94);};
  if(a.kind==='yoga'){
    towel(0,0,17,26);person(0,0,'yoga');
    part('rod','#6e9f9c',11,3,5,1.2,5,1.2);part('rod','#e6d3ab',11,5.7,5,.9,.5,.9);
  }else if(a.kind==='kite'){
    person(-5,1,'kite');const kx=7+Math.sin(t*.4)*4,kz=-5+Math.sin(t*.31)*3,ky=47+Math.sin(t*.53)*3;
    part('diamond',p.shirt,kx,ky,kz,8,12,.4,.2,0,Math.sin(t*.4)*.15);
    part('diamond',p.trim,kx,ky,kz+.4,5.4,8.5,.2,.2,0,Math.sin(t*.4)*.15);
    line('#a28c74',[-3,15,5],[kx,ky,kz],.10);
    for(let i=0;i<5;i++){
      const tailX=kx+Math.sin(t*.8+i)*1.5,tailY=ky-12-i*2.6;
      part('ball',i%2?p.shirt:p.trim,tailX,tailY,kz,1.6,.45,.4,0,0,Math.sin(i+t)*.35);
      if(i)line('#ac977f',[tailX,tailY,kz],[kx+Math.sin(t*.8+i-1)*1.5,tailY+2.6,kz],.09);
    }
  }else if(a.kind==='reading'){
    towel(0,2,23,24);person(0,0,'read');
    part('box','#749e9c',0,7.5,5,6,.7,4,.1);part('box','#f1e4c7',0,8,5,5.5,.28,3.7,.1);
    line('#bba68a',[0,8.2,3.3],[0,8.2,6.6],.08);
    part('rod',p.shirt,9,1.7,5,1.6,3,1.6);part('ring',p.trim,11,2.2,5,1.1,1.1,1.1,Math.PI/2);
    part('ball','#f1cf97',-9,1.1,6,3.9,.7,3.7);part('ball','#e6b675',-9,2.3,6,2.2,1.3,2.2);
  }else if(a.kind==='painting'){
    person(-7,3,'paint');
    for(const side of [-1,1])line('#94735b',[8+side*5,.3,-4],[8+side*2,23,-4],.55);
    line('#94735b',[8,.3,2],[8,22,-5],.6);
    part('box','#a47c58',8,17,-4,13,13,1);part('box','#ecddba',8,17,-3.4,11.2,11.2,.3);
    part('box','#8fbac4',8,19,-3.17,10,6,.1);part('box','#72a7a7',8,15.3,-3.12,10,2.6,.1);
    part('ball','#ebd39a',11,20,-3,1.4,1.4,.1);part('box','#cfad87',8,13,-3.1,10,1.4,.1);
    part('ball',p.trim,-10.2,10.3,6.3,2.7,.3,1.7);for(let i=0;i<3;i++)part('ball',PALETTES[i].shirt,-11.2+i,10.65,6.3,.4,.12,.4);
    line('#987856',[1.2,16+Math.sin(t*1.5)*.6,-1.8],[3.4,17+Math.sin(t*1.5)*.6,-3],.14);
  }else if(a.kind==='picnic'){
    towel(0,3,34,27);person(-9,1,'picnic');person(9,1,'picnic',PALETTES[(a.palette+1)%PALETTES.length]);
    part('box','#b78a61',0,2,9,7,4,5);part('box','#d6ae79',0,4.2,9,7.4,.6,5.4);
    for(let i=0;i<5;i++)line('#e3c397',[-3+i*1.5,.4,11.6],[-3+i*1.5,3.8,11.6],.12);
    part('ring','#a47c5d',0,5.2,9,2.7,2.7,2.7,Math.PI/2);
    for(let i=0;i<3;i++)part('ball',['#b65f60','#e4b666','#87a779'][i],-1.8+i*1.8,5,8.5,.9,.8,.9);
  }else{
    person(0,-2,'shells');for(let i=0;i<7;i++){
      const a=i*TAU/7;part('ball',i%2?'#ead3b5':'#d7b4a3',Math.cos(a)*9,.45,7+Math.sin(a)*5,1.1,.4,.8,0,a);
    }
    part('rod',p.shirt,11,2.4,-2,2.5,4,2.1);part('ring',p.trim,11,4.5,-2,2.3,2.3,2.3,Math.PI/2);
  }
}

export function createStorybookWorldMoments(inputs={}){
  const plan=planStorybookWorldMoments(inputs),root=new THREE.Group();root.name='living-world-moments';
  const brush=createBrush(root);let state=sampleStorybookWorldMoments(plan,0,{worldLife:{enabled:false}}),disposed=false;
  function update(seconds,options={}){
    if(disposed)return;state=sampleStorybookWorldMoments(plan,seconds,options);brush.begin();
    const visible=(x,y,z,r=30)=>!options.inView||options.inView(x,y,z,r);
    for(const a of state.activities)if(visible(a.x,a.y+25,a.z,56))drawActivity(brush,a);
    for(const b of state.birds)if(visible(b.x,b.y,b.z,10)){
      brush.part('ball','#eee9db',b.x,b.y,b.z,1.6,1.35,3.7,0,b.yaw);
      for(const side of [-1,1]){
        const x=b.x+Math.cos(b.yaw)*side*4.6,z=b.z-Math.sin(b.yaw)*side*4.6;
        brush.part('ball','#e0dfd5',x,b.y+Math.abs(b.flap)*1.4,z,4.9,.3,1.9,0,b.yaw,side*b.flap);
        brush.part('ball','#606875',x+Math.cos(b.yaw)*side*3.9,b.y+Math.abs(b.flap)*2,z-Math.sin(b.yaw)*side*3.9,1.4,.23,1.1,0,b.yaw,side*b.flap);
      }
      const hx=b.x+Math.sin(b.yaw)*3.2,hz=b.z+Math.cos(b.yaw)*3.2;
      brush.part('ball','#f5f0e3',hx,b.y+.65,hz,1.25,1.25,1.25,0,b.yaw);
      brush.part('cone','#d0a66a',hx+Math.sin(b.yaw)*1.5,b.y+.5,hz+Math.cos(b.yaw)*1.5,.65,2,.65,Math.PI/2,b.yaw);
      for(const side of [-1,1])brush.part('ball','#424c56',hx+Math.cos(b.yaw)*side*.78,b.y+1.0,hz-Math.sin(b.yaw)*side*.78,.16,.19,.16);
    }
    for(const b of state.butterflies)if(visible(b.x,b.y,b.z,5)){
      const color=PALETTES[b.palette].shirt;
      brush.part('ball','#59534d',b.x,b.y,b.z,.35,1.2,.35,Math.PI/2,b.yaw);
      for(const side of [-1,1])brush.part('ball',color,b.x+side*1.5,b.y+.6,b.z,1.8,.16,2.1,0,b.yaw,side*b.flap);
    }
    for(const d of state.drift)if(visible(d.x,d.y,d.z,3))brush.part('ball',d.blossom?'#bfa0c5':'#8da16b',d.x,d.y,d.z,1.3,.15,.7,d.yaw,d.yaw);
    for(const w of state.water)if(visible(w.x,w.y,w.z,9)){
      if(w.kind==='rain-ring')brush.part('ring','#bbd6d2',w.x,w.y,w.z,1+w.phase*5,.25,1+w.phase*5);
      else{
        const scale=.25+Math.pow(Math.sin(w.phase*Math.PI),6)*2.8;
        brush.part('glint',w.night?'#b9cbd6':'#fff0c9',w.x,w.y,w.z,scale,.08,scale);
      }
    }
    brush.finish();root.visible=brush.count()>0;
  }
  function dispose(){if(disposed)return;disposed=true;brush.dispose();root.clear();root.removeFromParent();}
  return {root,update,dispose,getState:()=>({...structuredClone(state),parts:brush.count(),sites:plan.sites.map(s=>({...s}))})};
}
