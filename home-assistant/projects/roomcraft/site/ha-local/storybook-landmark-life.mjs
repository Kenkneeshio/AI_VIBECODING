import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {buildStorybookVehicle} from './storybook-vehicles.mjs';

const TAU=Math.PI*2;
const SHAPES={sceneryRanchHouse:[130,176,55.2],scenerySchoolCampus:[300,240,32],sceneryOfficeCampus:[220,180,122.8]};
const size=(v,f)=>Number.isFinite(v)&&v>0?v:f;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const phaseFor=value=>{let n=2166136261;for(const c of String(value))n=Math.imul(n^c.charCodeAt(0),16777619);return (n>>>0)/4294967296;};
const positiveModulo=(v,d)=>(v%d+d)%d;

function painted(parts,skinned=false){
  const pieces=parts.map(([source,color,bone=0])=>{
    const g=source.index?source.toNonIndexed():source;if(g!==source)source.dispose();g.deleteAttribute('uv');
    const count=g.attributes.position.count,rgb=new THREE.Color(color),colors=new Float32Array(count*3);
    for(let i=0;i<count;i++)rgb.toArray(colors,i*3);g.setAttribute('color',new THREE.BufferAttribute(colors,3));
    if(skinned){
      const indices=new Uint16Array(count*4),weights=new Float32Array(count*4);
      for(let i=0;i<count;i++){indices[i*4]=bone;weights[i*4]=1;}
      g.setAttribute('skinIndex',new THREE.BufferAttribute(indices,4));g.setAttribute('skinWeight',new THREE.BufferAttribute(weights,4));
    }
    return g;
  });
  const merged=mergeGeometries(pieces);for(const g of pieces)g.dispose();merged.computeBoundingBox();merged.computeBoundingSphere();return merged;
}

// One skinned draw per resident; joints animate independently without dozens
// of tiny mesh submissions. The small doll faces intentionally look upward.
function resident(style,material){
  const parts=[];
  const ellipse=(x,y,z,w,h,d,color,bone=0)=>parts.push([new THREE.SphereGeometry(1,8,6).scale(w,h,d).translate(x,y,z),color,bone]);
  const box=(x,y,z,w,h,d,color,bone=0)=>parts.push([new THREE.BoxGeometry(w,h,d).translate(x,y,z),color,bone]);
  const skin=style.skin??'#e4b18a',hair=style.hair??'#454344',shirt=style.shirt,trim=style.trim??'#f1d597';
  ellipse(0,4.2,0,1.35,1.7,.9,shirt);ellipse(0,5.45,.25,1.12,.4,.9,trim);
  if(style.skirt)parts.push([new THREE.CylinderGeometry(.85,1.65,1.8,10).translate(0,3.5,0),style.skirt,0]);
  for(const [side,bone] of [[-1,1],[1,2]]){
    ellipse(side*1.55,4.55,0,.48,1.12,.5,shirt,bone);ellipse(side*1.65,3.5,.05,.42,.48,.42,skin,bone);
  }
  for(const [side,bone] of [[-1,3],[1,4]]){
    ellipse(side*.65,1.9,0,.53,1.3,.53,style.skirt?'#e1b48f':'#5d6475',bone);
    ellipse(side*.65,.45,.35,.62,.45,.85,'#615d67',bone);ellipse(side*.65,.23,.75,.58,.18,.5,'#e8dec3',bone);
  }
  ellipse(0,7.5,-.2,2.1,2.1,1.85,hair,5);ellipse(0,7.15,.65,1.9,1.88,1.6,skin,5);
  ellipse(-.4,8.7,1.2,1.7,.7,1.1,hair,5);
  if(style.bun){ellipse(1.4,8.85,-.75,1,.95,.85,hair,5);ellipse(1.5,9.4,-.1,.5,.2,.25,trim,5);}
  if(style.girl){
    for(const side of [-1,1]){
      ellipse(side*1.75,8,-.55,.7,1.35,.7,hair,5);ellipse(side*1.85,8.45,.05,.55,.25,.3,trim,5);
      ellipse(side*1.45,8.55,.05,.45,.3,.3,trim,5);
    }
  }
  for(const side of [-1,1]){
    ellipse(side*1.85,7.05,.5,.35,.5,.35,skin,5);
    ellipse(side*.66,7.4,2.12,.18,.26,.17,'#363a45',5);
    ellipse(side*.73,7.54,2.24,.065,.08,.05,'#fff5d9',5);
    ellipse(side*1.08,6.8,1.97,.3,.15,.1,'#d8877c',5);
    if(style.glasses){
      parts.push([new THREE.TorusGeometry(.5,.07,4,12).scale(1,1.05,1).translate(side*.66,7.38,2.2),'#65716e',5]);
    }
  }
  if(style.glasses)box(0,7.4,2.24,.4,.08,.08,'#65716e',5);
  if(style.moustache)ellipse(0,6.55,2.15,.5,.16,.12,'#d0cec0',5);
  ellipse(0,6.35,2.12,.28,.075,.08,'#9b635e',5);
  if(style.badge){box(.53,4.55,.91,.5,.75,.1,'#eee7d0');box(.53,4.72,.98,.32,.17,.05,'#7b9da6');}
  if(style.watering){
    ellipse(1.8,2.9,.65,.75,.7,.65,'#84aaa2',2);
    parts.push([new THREE.TorusGeometry(.55,.12,5,12).translate(1.85,3.65,.7),'#d5c195',2]);
    const spout=new THREE.CylinderGeometry(.17,.23,1.5,6).rotateZ(-.8).translate(2.65,3.3,.65);parts.push([spout,'#7a9894',2]);
    ellipse(3.2,3.9,.65,.33,.16,.3,'#d7c28f',2);
  }
  if(style.ball){
    ellipse(1.65,3.3,.8,.7,.7,.7,'#e2b76f',2);ellipse(1.8,3.4,1.43,.4,.5,.1,'#81aba9',2);
    ellipse(1.2,3.5,1.3,.25,.45,.12,'#cb8d8c',2);
  }
  const mesh=new THREE.SkinnedMesh(painted(parts,true),material),bones=[];
  for(const [x,y,z] of [[0,0,0],[-1.35,5.3,0],[1.35,5.3,0],[-.65,2.8,0],[.65,2.8,0],[0,7.1,.1]]){
    const b=new THREE.Bone();b.position.set(x,y,z);bones.push(b);
  }
  for(let i=1;i<bones.length;i++)bones[0].add(bones[i]);mesh.add(bones[0]);mesh.bind(new THREE.Skeleton(bones));
  mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;
  return {mesh,bones};
}

function satellite(material){
  const p=[];
  const box=(x,y,z,w,h,d,color)=>p.push([new THREE.BoxGeometry(w,h,d).translate(x,y,z),color]);
  const ball=(x,y,z,r,color)=>p.push([new THREE.SphereGeometry(r,8,6).translate(x,y,z),color]);
  box(0,0,0,7,6,6,'#dbc292');box(0,.1,3.1,6,4.6,.2,'#e8e6d2');
  box(0,3.25,0,7.7,.5,6.6,'#bca276');box(0,-3.2,0,7.7,.45,6.6,'#9e9d8b');
  for(const side of [-1,1]){
    box(side*8.8,0,0,11,.5,6.5,'#657d9a');box(side*8.8,.28,0,10.4,.08,5.9,'#406583');
    for(let x=0;x<4;x++)for(let z=0;z<2;z++)box(side*(4.25+x*2.8),.35,-1.55+z*3.1,2.4,.07,2.7,(x+z)%2?'#7394b4':'#5b7c9e');
    box(side*1.4,.45,3.3,.55,.8,.18,'#3e4b59');ball(side*1.55,.7,3.45,.12,'#f4f1df');
    box(side*2,-.75,3.35,.6,.25,.13,'#d9a692');
  }
  box(0,-.9,3.35,.8,.18,.16,'#a77761');box(0,4.1,0,.35,2,.35,'#aaa98d');ball(0,5.25,0,.65,'#eadca9');
  const dish=new THREE.CylinderGeometry(2,.9,.8,12).rotateX(.4).translate(0,3.9,-1.5);p.push([dish,'#dddccc']);
  const mesh=new THREE.Mesh(painted(p),material);mesh.castShadow=true;return mesh;
}

function schoolBus(material){
  const p=[],box=(x,y,z,w,h,d,c)=>p.push([new THREE.BoxGeometry(w,h,d).translate(x,y,z),c]);
  box(0,3.8,0,22,5,7,'#e4b85c');box(-1,6.45,0,18,.65,7.3,'#f0d591');box(10,3,0,2.4,2.8,6.7,'#d7a450');
  for(const side of [-1,1]){
    for(let x=-8;x<=7;x+=3)box(x,5,side*3.55,2.4,2,.15,'#597787');
    box(0,2.9,side*3.57,20,.25,.14,'#796d54');box(0,2.35,side*3.57,20,.18,.14,'#796d54');
    for(const x of [-7,7]){
      p.push([new THREE.CylinderGeometry(1.65,1.65,1,10).rotateX(Math.PI/2).translate(x,1.65,side*3.5),'#444c4e']);
      p.push([new THREE.CylinderGeometry(.85,.85,1.05,10).rotateX(Math.PI/2).translate(x,1.65,side*3.5),'#c3c3af']);
    }
    box(11.25,3.3,side*2.1,.3,.8,1,'#efe7bb');box(-11.15,3.3,side*2.1,.2,.7,.7,'#ba7561');
  }
  box(10.15,4.9,0,.25,2.1,5.8,'#5c7c88');box(11.35,1.9,0,.45,.6,6.5,'#a8afa2');
  const mesh=new THREE.Mesh(painted(p),material);mesh.castShadow=true;mesh.receiveShadow=true;return mesh;
}

function routeAt(points,time,speed,dwell){
  const lengths=points.map((p,i)=>Math.hypot(p[0]-points[(i+1)%points.length][0],p[1]-points[(i+1)%points.length][1]));
  let t=positiveModulo(time,lengths.reduce((s,d)=>s+d/speed+dwell,0));
  for(let i=0;i<points.length;i++){
    const p=points[i],q=points[(i+1)%points.length],duration=lengths[i]/speed;
    if(t<=dwell)return {x:p[0],z:p[1],walking:false,yaw:Math.atan2(q[0]-p[0],q[1]-p[1]),index:i};
    t-=dwell;
    if(t<=duration){const f=t/duration;return {x:p[0]+(q[0]-p[0])*f,z:p[1]+(q[1]-p[1])*f,walking:true,yaw:Math.atan2(q[0]-p[0],q[1]-p[1]),index:i};}
    t-=duration;
  }
  return {x:points[0][0],z:points[0][1],walking:false,yaw:0,index:0};
}

/** Decorative ambient life, never a feed of measured people or device events. */
export function createLandmarkLife(item,{heightScale=1}={}){
  const shape=Object.hasOwn(SHAPES,item?.type)?SHAPES[item.type]:null;if(!shape)return null;
  const [nw,nh,roof]=shape,w=size(item.w,nw),h=size(item.h,nh),sx=w/nw,sz=h/nh,scale=Math.min(sx,sz),hs=size(heightScale,1);
  const root=new THREE.Group();root.name='landmark-ambient-life';root.userData.roomcraftDecorative=true;
  const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.76,metalness:.025});
  const people=[],vehicles=[],satellites=[];let disposed=false,lastInput={},state={};
  const person=(role,style,points,height,ground,activity)=>{
    const art=resident(style,material),group=new THREE.Group();group.name='ambient-'+role;group.add(art.mesh);root.add(group);
    const uniform=height/9.8*scale;group.scale.setScalar(uniform);
    const actor={role,group,...art,points,height,ground,activity,phase:phaseFor(`${item.id??item.type}:${role}`)*28,uniform};people.push(actor);return actor;
  };
  const vehicle=(role,recipe,points,factor,ground)=>{
    const group=new THREE.Group();group.name='ambient-'+role;
    if(recipe==='school-bus')group.add(schoolBus(material));
    else for(const layer of buildStorybookVehicle(recipe)){const mesh=new THREE.Mesh(layer.geometry,layer.material);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);}
    root.add(group);group.scale.setScalar(factor*scale);vehicles.push({role,group,points,ground,phase:phaseFor(`${item.id??item.type}:${role}`)*48});
  };
  if(item.type==='sceneryRanchHouse'){
    person('grandfather',{shirt:'#73979b',hair:'#cecdc1',glasses:true,moustache:true,watering:true,trim:'#e6d2a6'},[[-28,-32],[-8,-32]],15.6,1.5,'garden');
    person('grandmother',{shirt:'#bd8a9f',hair:'#c5c7bf',bun:true,trim:'#e9cf9f'},[[23,82],[49,82],[49,70],[23,70]],15,1.8,'greet');
    person('granddaughter',{shirt:'#75a6a5',skirt:'#d7a0ac',hair:'#353b43',girl:true,ball:true,trim:'#e8c36d',skin:'#e1b28b'},[[7,-76],[7,-35]],11.4,1.5,'play');
    vehicle('family-car','blue-wagon',[[-32.5,78],[-32.5,70]],.26,1.8);
  }else if(item.type==='scenerySchoolCampus'){
    person('playground-child',{shirt:'#d6a762',hair:'#51423e',girl:true,trim:'#82a5a2'},[[-119,-70],[-101,-70]],6.3,1.86,'play');
    person('court-child',{shirt:'#9294bd',hair:'#3e3d46',ball:true,trim:'#ecd694'},[[4,-100],[28,-100],[28,-85],[4,-85]],6.5,1.7,'play');
    person('field-child',{shirt:'#73a39c',hair:'#79543d',trim:'#ead38b'},[[80,-98],[112,-98],[112,-87],[80,-87]],6.2,1.7,'play');
    person('school-guide',{shirt:'#c18778',hair:'#59504b',badge:true},[[-25,70],[-38,70]],7.6,0.8,'greet');
    vehicle('school-bus','school-bus',[[-83,111],[83,111]],1,1.6);
  }else{
    person('engineer-one',{shirt:'#819db8',hair:'#3e424c',glasses:true,badge:true},[[53,52],[72,52]],6.7,2.1,'greet');
    person('engineer-two',{shirt:'#b38fbb',hair:'#574c4b',bun:true,badge:true},[[60,69],[80,69]],6.5,2.1,'greet');
    vehicle('office-van','lavender-delivery',[[-78,61],[26,61]],.22,13.8);
    for(let i=0;i<3;i++){
      const mesh=satellite(material);mesh.name=`ambient-satellite-${i+1}`;mesh.scale.setScalar(scale*.72);root.add(mesh);
      const ring=new THREE.Mesh(new THREE.TorusGeometry(4,.16,5,24),new THREE.MeshStandardMaterial({color:'#f0d48f',emissive:'#d5b56c',emissiveIntensity:.4,roughness:.7}));
      ring.rotation.x=-Math.PI/2;root.add(ring);satellites.push({mesh,ring,index:i});
    }
  }
  // Decorative objects cannot steal ray hits or enlarge editable object bounds.
  root.traverse(object=>{object.userData.roomcraftDecorative=true;object.raycast=()=>{};});
  const maxY=item.type==='sceneryOfficeCampus'?(roof*hs+35)*scale:Math.max(roof*hs,20)*scale;
  const bounds=new THREE.Box3(new THREE.Vector3(-w/2,0,-h/2),new THREE.Vector3(w/2,maxY,h/2));
  const options=settings=>{
    const bool=(key,raw)=>typeof settings?.[key]==='boolean'?settings[key]:typeof settings?.[raw]==='boolean'?settings[raw]:item[raw]!==false;
    const pace=settings?.speed??settings?.landmarkPace??item.landmarkPace;
    return {enabled:bool('enabled','landmarkActivity'),people:bool('people','landmarkPeople'),vehicles:bool('vehicles','landmarkVehicles'),events:bool('events','landmarkEvents'),satellites:bool('satellites','landmarkSatellites'),speed:Number.isFinite(pace)?clamp(pace,.25,2):1};
  };
  function update(input={}){
    if(disposed)return;
    lastInput=input;
    const settings=options(input.settings),reduced=!!input.reducedMotion,night=!!input.night;
    const elapsed=Number.isFinite(input.elapsedSeconds)?Math.max(0,input.elapsedSeconds):0,time=(reduced?0:elapsed)*settings.speed;
    root.visible=settings.enabled;
    const actorStates=[];
    for(const a of people){
      const sample=routeAt(a.points,time+(reduced?0:a.phase),a.role.includes('child')||a.role==='granddaughter'?1.75:1.1,7);
      const walking=!reduced&&sample.walking,active=settings.enabled&&settings.people&&!night;
      const event=!walking&&settings.events&&!reduced?a.activity:'idle',cycle=time+a.phase;
      a.group.visible=active;a.group.position.set(sample.x*sx,a.ground*scale*hs,sample.z*sz);a.group.rotation.y=sample.yaw;
      a.mesh.position.y=walking?Math.abs(Math.sin(cycle*4))*.1:event==='play'?Math.max(0,Math.sin(cycle*3))*.28:0;
      a.mesh.rotation.x=event==='garden'?.18:0;
      const gait=walking?Math.sin(cycle*4.2)*.4:0;
      a.bones[1].rotation.set(gait,0,event==='greet'?-.9-Math.sin(cycle*5)*.18:0);
      a.bones[2].rotation.set(-gait,0,event==='garden'?.55:event==='play'?.55:0);
      if(event==='garden')a.bones[1].rotation.x=-.8+Math.sin(cycle*2)*.1;
      a.bones[3].rotation.x=-gait;a.bones[4].rotation.x=gait;
      a.bones[5].rotation.set(-.16+(reduced?0:Math.sin(cycle*1.6)*.025),0,0);
      a.mesh.updateMatrixWorld(true);
      actorStates.push({role:a.role,kind:'person',visible:active,activity:walking?'walk':event,position:a.group.position.toArray(),nativePosition:[sample.x,a.ground,sample.z],bodyScale:a.uniform});
    }
    for(const a of vehicles){
      const active=settings.enabled&&settings.vehicles;
      // Park during quiet hours. Daytime vignette travel never leaves the
      // authored driveway/aisle. Bus arrivals reset only while hidden.
      let x=a.points[0][0],z=a.points[0][1],yaw=0,visible=active,moving=false;
      if(a.role==='school-bus'){
        const t=positiveModulo(time+a.phase,100),f=clamp((t-12)/66,0,1);x=THREE.MathUtils.lerp(a.points[0][0],a.points[1][0],f);yaw=0;
        visible=active&&(night||reduced||t<88);moving=!night&&!reduced&&t>12&&t<78;
        if(night||reduced){x=-58;z=111;}
      }else{
        const sample=routeAt(a.points,time+(reduced?0:a.phase),a.role==='family-car'?.55:2,12);
        if(!night&&!reduced){x=sample.x;z=sample.z;moving=sample.walking;yaw=sample.yaw-Math.PI/2;}
        else yaw=a.role==='family-car'?Math.PI/2:0;
      }
      a.group.position.set(x*sx,a.ground*scale*hs,z*sz);a.group.rotation.y=yaw;a.group.visible=visible;
      actorStates.push({role:a.role,kind:'vehicle',visible,activity:moving?'arrival':'parked',position:a.group.position.toArray(),nativePosition:[x,a.ground,z],bodyScale:a.group.scale.x});
    }
    for(const a of satellites){
      const angle=a.index*TAU/3+(reduced?0:time*.055),y=roof*hs+21+(reduced?0:Math.sin(time*.55+a.index)*3);
      a.mesh.position.set(Math.cos(angle)*55*sx,y*scale,Math.sin(angle)*31*sz);a.mesh.rotation.set(reduced?0:Math.sin(time*.7+a.index)*.08,-angle+.3,0);
      a.mesh.visible=settings.enabled&&settings.satellites;
      const pulse=positiveModulo(time+a.index*13,28),pulseOn=!reduced&&settings.events&&pulse<2.5;
      a.ring.visible=a.mesh.visible&&pulseOn;a.ring.position.copy(a.mesh.position);a.ring.position.y-=4*scale;a.ring.scale.setScalar(scale*(1+Math.min(pulse,2.5)));
      actorStates.push({role:`satellite-${a.index+1}`,kind:'satellite',visible:a.mesh.visible,activity:pulseOn?'signal':'orbit',position:a.mesh.position.toArray(),nativePosition:[Math.cos(angle)*55,y,Math.sin(angle)*31],bodyScale:scale*.72});
    }
    state={decorative:true,night,reducedMotion:reduced,enabled:settings.enabled,actors:actorStates,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}};
    root.updateMatrixWorld(true);return state;
  }
  function dispose(){
    if(disposed)return;disposed=true;
    const geometries=new Set(),materials=new Set(),skeletons=new Set();
    root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);if(o.skeleton)skeletons.add(o.skeleton);});
    for(const g of geometries)g.dispose();for(const m of materials)m.dispose();for(const s of skeletons)s.dispose();
    root.removeFromParent();root.clear();
  }
  update({elapsedSeconds:0});
  return {root,bounds,update,reset:()=>update({...lastInput,elapsedSeconds:0}),getState:()=>structuredClone(state),dispose};
}
