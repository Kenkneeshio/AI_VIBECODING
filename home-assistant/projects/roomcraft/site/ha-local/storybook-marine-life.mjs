import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {createStorybookBoatRoutes} from './storybook-boats.mjs';
import {normalizeWorldLifeSettings} from './storybook-world-life-settings.mjs';

const TAU=Math.PI*2;
const mod=(n,d)=>(n%d+d)%d;
const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
const hash=text=>{let n=2166136261;for(const c of String(text))n=Math.imul(n^c.charCodeAt(0),16777619);return(n>>>0)/4294967296;};
const ROUGH=new Set(['pouring','lightning','lightning-rainy','windy','windy-variant']);
const CAST=Object.freeze([
  {id:'pearl-dolphin',species:'dolphins',variant:'bottlenose',length:40,beam:10,color:'#699da9',belly:'#d5e7de',x:-630,offshore:153,radius:32},
  {id:'lagoon-dolphin',species:'dolphins',variant:'common',length:33,beam:8.5,color:'#526f91',belly:'#f1d7ac',x:-760,offshore:165,radius:26},
  {id:'reef-shark',species:'sharks',variant:'reef',length:47,beam:14,color:'#778e9e',belly:'#e8e4d4',x:-610,offshore:320,radius:40},
  {id:'humpback-whale',species:'whales',variant:'humpback',length:86,beam:28,color:'#54788a',belly:'#c9dad6',x:-490,offshore:560,radius:54},
  {id:'orca-whale',species:'whales',variant:'orca',length:65,beam:21,color:'#253e4d',belly:'#f2eeda',x:-255,offshore:680,radius:43},
  {id:'harbor-seal',species:'seals',variant:'harbor',length:25,beam:13,color:'#b4a591',belly:'#e2d4ba',x:650,offshore:160,radius:18},
  {id:'spotted-seal',species:'seals',variant:'spotted',length:22,beam:11,color:'#849caa',belly:'#dce0d6',x:760,offshore:175,radius:17},
  {id:'storybook-walrus',species:'walruses',variant:'visitor',length:37,beam:21,color:'#aa806f',belly:'#cfab8c',x:690,offshore:320,radius:23},
]);
const COATS=Object.freeze({
  bottlenose:['#699da9','#6b8fb0','#7aaba3'],common:['#526f91','#5c829b','#668d8b'],
  reef:['#778e9e','#6d919c','#899c96'],humpback:['#54788a','#577f91','#658a85'],
  orca:['#253e4d','#2d4358','#304f53'],harbor:['#b4a591','#a39782','#c7b89e'],
  spotted:['#849caa','#7396a0','#9eaaa7'],visitor:['#aa806f','#b38b73','#97786c'],
});

function validWater(water){
  return water&&[water.y,water.farZ,water.focusX].every(Number.isFinite)&&Array.isArray(water.shoreline)&&water.shoreline.length>=2&&water.shoreline.every((p,i,a)=>Number.isFinite(p.x)&&Number.isFinite(p.z)&&p.z>water.farZ&&(!i||p.x>a[i-1].x));
}
function shoreAt(water,x){
  const p=water.shoreline;let lo=0,hi=p.length-1;
  while(hi-lo>1){const i=(hi+lo)>>1;if(x<p[i].x)hi=i;else lo=i;}
  const a=p[lo],b=p[hi];return a.z+(b.z-a.z)*clamp((x-a.x)/(b.x-a.x),0,1);
}

/** Conservative reservations include hulls and trailing wakes at every boat phase. */
function boatReservations(water){
  return createStorybookBoatRoutes(water).map(route=>{
    const box=new THREE.Box2();for(let i=0;i<96;i++){const p=route.point(i*TAU/96);box.expandByPoint(new THREE.Vector2(p.x,p.z));}
    return box.expandByScalar(route.length*1.12+12);
  });
}
function routePoint(route,angle,out){
  out.x=route.x+Math.cos(angle)*route.radius;
  out.z=route.z+Math.sin(angle)*route.depth;return out;
}
function safeRoute(water,route,boats,used){
  const padding=route.safetyRadius+10,left=water.shoreline[0].x,right=water.shoreline.at(-1).x;
  const envelope=new THREE.Box2(new THREE.Vector2(route.x-route.radius-padding,route.z-route.depth-padding),new THREE.Vector2(route.x+route.radius+padding,route.z+route.depth+padding));
  if(boats.some(b=>b.intersectsBox(envelope))||used.some(r=>r.envelope.intersectsBox(envelope)))return false;
  for(let i=0;i<64;i++){
    const p=routePoint(route,i*TAU/64,{});
    if(p.x-padding<left||p.x+padding>right||p.z-padding<=water.farZ+12)return false;
    for(let j=0;j<16;j++){const a=j*TAU/16,x=p.x+Math.cos(a)*padding,z=p.z+Math.sin(a)*padding;if(z>=shoreAt(water,x)-12)return false;}
  }
  route.envelope=envelope;return true;
}

/** Pure planner: whole-body coast clearance and disjoint, clock-independent boat lanes. */
export function planStorybookMarineRoutes(water,{preview=false}={}){
  if(!validWater(water))return[];
  const boats=boatReservations(water),routes=[];
  for(const [index,recipe] of CAST.entries()){
    const baseX=preview?-850+(index%3)*145:recipe.x;
    const offshore=preview?175+Math.floor(index/3)*160:recipe.offshore;
    let selected=null;
    for(const shift of [0,-140,140,-280,280,-420,420,-650,650,-950,950]){
      for(const extra of [0,90,190]){
        const x=water.focusX+baseX+shift,radius=preview?10:recipe.radius;
        const route={...recipe,x,z:shoreAt(water,x)-offshore-extra,radius,depth:preview?7:Math.min(17,radius*.38),safetyRadius:recipe.length*.62,period:156+index*23};
        if(safeRoute(water,route,boats,routes)){selected=route;break;}
      }
      if(selected)break;
    }
    if(selected)routes.push(selected);
  }
  return routes;
}

function painted(parts){
  const pieces=parts.map(([source,color,bone=0])=>{
    const g=source.index?source.toNonIndexed():source;if(g!==source)source.dispose();g.deleteAttribute('uv');
    const count=g.attributes.position.count,c=new THREE.Color(color),colors=new Float32Array(count*3),indices=new Uint16Array(count*4),weights=new Float32Array(count*4);
    for(let i=0;i<count;i++){c.toArray(colors,i*3);indices[i*4]=bone;weights[i*4]=1;}
    g.setAttribute('color',new THREE.BufferAttribute(colors,3));g.setAttribute('skinIndex',new THREE.BufferAttribute(indices,4));g.setAttribute('skinWeight',new THREE.BufferAttribute(weights,4));return g;
  });
  const merged=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());merged.computeBoundingBox();merged.computeBoundingSphere();return merged;
}

function animalArt(recipe,material){
  const p=[],l=recipe.length,b=recipe.beam,top=recipe.color,belly=recipe.belly;
  const seal=recipe.species==='seals',walrus=recipe.species==='walruses',shark=recipe.species==='sharks',orca=recipe.variant==='orca',whale=recipe.species==='whales',pinniped=seal||walrus;
  const ell=(x,y,z,w,h,d,c,bone=0,segments=12)=>p.push([new THREE.SphereGeometry(1,segments,8).scale(w,h,d).translate(x,y,z),c,bone]);
  const line=(ax,ay,az,bx,by,bz,r,c,bone=0)=>{
    const a=new THREE.Vector3(ax,ay,az),end=new THREE.Vector3(bx,by,bz),dir=end.clone().sub(a),g=new THREE.CylinderGeometry(r,r,dir.length(),5);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize()));g.translate((ax+bx)/2,(ay+by)/2,(az+bz)/2);p.push([g,c,bone]);
  };
  // Curved double-sided fin with a raised center, rather than a flat triangle sprite.
  const fin=(points,c,bone=0)=>{
    const center=points.reduce((a,v)=>a.map((n,i)=>n+v[i]/points.length),[0,0,0]),vertices=[],indices=[];
    vertices.push(...center);points.forEach(v=>vertices.push(...v));const mid=points.length+1;vertices.push(center[0],center[1]-.55,center[2]);
    for(let i=0;i<points.length;i++){const a=i+1,b=(i+1)%points.length+1;indices.push(0,a,b,mid,b,a);}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setIndex(indices);g.computeVertexNormals();p.push([g,c,bone]);
  };
  ell(-l*.015,0,0,l*.37,b*.43,b*.49,top,0,20);
  ell(l*.015,-b*.19,0,l*.335,b*.3,b*.39,belly,0,16);
  ell(-l*.325,-b*.04,0,l*.17,b*.19,b*.22,top,1,12);
  ell(l*.25,b*.035,0,l*(pinniped?.145:.17),b*(pinniped?.47:.36),b*.43,top,0,16);
  if(!pinniped){
    if(!whale&&!shark){ell(l*.43,-b*.08,0,l*.125,b*.12,b*.16,top);ell(l*.445,-b*.15,0,l*.115,b*.055,b*.145,belly);}
    if(shark)ell(l*.405,-b*.06,0,l*.12,b*.17,b*.28,top);
    if(whale)ell(l*.33,-b*.13,0,l*.16,b*.26,b*.39,top,0,16);
    // Flowing, asymmetric swept dorsal profile; high orca fin is instantly distinct.
    fin([[-l*.17,b*.33,0],[-l*.13,b*(orca?1.15:.83),0],[-l*.055,b*.67,0],[l*.07,b*.39,0]],top);
    if(shark){
      fin([[-l*.40,0,0],[-l*.54,b*.73,0],[-l*.48,b*.06,0],[-l*.53,-b*.43,0],[-l*.39,-b*.11,0]],top,1);
      for(const side of [-1,1])for(let i=0;i<4;i++)line(l*(.17-i*.035),-.05,side*b*.43,l*(.15-i*.035),-b*.14,side*b*.45,.12,'#506877');
    }else{
      for(const side of [-1,1])fin([[-l*.37,0,0],[-l*.46,b*.035,side*b*.64],[-l*.55,-b*.03,side*b*.85],[-l*.51,0,side*b*.25],[-l*.49,0,0]],top,1);
    }
  }else{
    for(const side of [-1,1]){
      ell(-l*.44,-b*.06,side*b*.19,l*.13,b*.08,b*.21,top,1);
      ell(l*.375,-b*.14,side*b*.13,l*.09,b*.2,b*.22,belly);
      for(let i=0;i<3;i++)line(l*.41,-b*.13+i*.6,side*b*.16,l*.48,-b*.11+i*.8,side*b*(.39+i*.035),.09,'#e9deca');
      if(walrus){
        const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(l*.42,-b*.18,side*b*.17),new THREE.Vector3(l*.44,-b*.39,side*b*.18),new THREE.Vector3(l*.47,-b*.61,side*b*.15)]);
        p.push([new THREE.TubeGeometry(curve,7,.65,7,false),'#eee3c4',0]);
      }
    }
    ell(l*.445,-b*.01,0,l*.035,b*.07,b*.085,'#554a48');
    if(seal)for(let i=0;i<12;i++){const x=(-.25+(i%4)*.13)*l,z=(i%2?1:-1)*b*(.27+(i%3)*.035),y=b*.43*Math.sqrt(Math.max(.01,1-((x+l*.015)/(l*.37))**2-(z/(b*.49))**2));ell(x,y,z,.65,.20,.55,'#617582');}
    if(walrus)for(let i=0;i<4;i++)ell(-l*.18+i*2,b*.31,0,.35,.27,b*.31,'#997061');
  }
  for(const side of [-1,1]){
    const reach=b*(whale&&!orca?1.23:pinniped?.66:.88),bone=side<0?2:3;
    fin([[l*.12,-b*.12,side*b*.3],[-l*.03,-b*.23,side*reach],[-l*.23,-b*.23,side*reach*.94],[-l*.12,-b*.08,side*b*.37]],top,bone);
    const eyeX=l*(pinniped?.34:whale?.34:.31),eyeY=b*.15,eyeZ=side*b*(pinniped?.31:.36);
    if(orca)ell(eyeX-l*.065,eyeY+b*.045,eyeZ,l*.062,b*.13,b*.09,belly);
    ell(eyeX,eyeY,eyeZ,.65,.72,.35,'#233840');ell(eyeX+.19,eyeY+.24,eyeZ+side*.22,.19,.21,.13,'#fff7e2');
    if(!pinniped)line(l*.35,-b*.19,side*b*.24,l*.46,-b*.14,side*b*.13,.13,'#52737d');
    if(recipe.variant==='humpback')for(let i=0;i<5;i++)ell(l*(.25+i*.035),b*.16,side*b*.31,.55,.45,.45,'#819eaa');
  }
  if(whale){
    ell(l*.22,b*.38,0,l*.035,.32,b*.06,'#314f60');
    if(orca)ell(-l*.15,b*.39,0,l*.09,b*.08,b*.28,'#acb9bd');
    else for(let i=-2;i<=2;i++)line(l*.03,-b*.415,i*b*.09,l*.33,-b*.35,i*b*.08,.15,'#9fbab9');
  }
  const mesh=new THREE.SkinnedMesh(painted(p),material),bones=[];
  for(const xyz of [[0,0,0],[-l*.29,0,0],[l*.08,-b*.1,-b*.29],[l*.08,-b*.1,b*.29]]){const bone=new THREE.Bone();bone.position.set(...xyz);bones.push(bone);}
  for(let i=1;i<bones.length;i++)bones[0].add(bones[i]);mesh.add(bones[0]);mesh.bind(new THREE.Skeleton(bones));mesh.frustumCulled=false;mesh.castShadow=false;mesh.receiveShadow=true;
  return {mesh,bones};
}

/** Decorative wildlife only. Neither real sightings nor household-device telemetry. */
export function createStorybookMarineLife(water){
  const root=new THREE.Group();root.name='storybook-marine-life';root.userData.roomcraftDecorative=true;
  const valid=validWater(water),normal=planStorybookMarineRoutes(water),showcase=planStorybookMarineRoutes(water,{preview:true});
  const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.43,metalness:.025});
  const foamMaterial=new THREE.MeshStandardMaterial({color:'#d1eee9',roughness:.65,transparent:false});
  const foam=new THREE.InstancedMesh(new THREE.SphereGeometry(1,6,4),foamMaterial,64);foam.count=0;foam.frustumCulled=false;root.add(foam);
  const actors=CAST.filter(r=>normal.some(n=>n.id===r.id)||showcase.some(n=>n.id===r.id)).map(recipe=>{
    const art=animalArt(recipe,material),group=new THREE.Group();group.name=recipe.id;group.add(art.mesh);root.add(group);
    const colors=art.mesh.geometry.attributes.color,coatColor=new THREE.Color(recipe.color),coatVertices=[];
    colors.setUsage(THREE.DynamicDrawUsage);
    for(let i=0;i<colors.count;i++)if(Math.abs(colors.getX(i)-coatColor.r)<1e-6&&Math.abs(colors.getY(i)-coatColor.g)<1e-6&&Math.abs(colors.getZ(i)-coatColor.b)<1e-6)coatVertices.push(i);
    return {...recipe,...art,group,normal:normal.find(r=>r.id===recipe.id),preview:showcase.find(r=>r.id===recipe.id),behavior:'hidden',radius:recipe.length*.62,coatVertices,coatColor,coatVariant:-1,bodyScale:1,encounter:0};
  });
  const transform=new THREE.Object3D(),point=new THREE.Vector3(),bounds=new THREE.Box3(),boundPoint=new THREE.Vector3();
  let disposed=false,currentPreview=false,currentReduced=false,particleCount=0;
  function update(seconds,options={}){
    if(disposed)return;
    if(!options||typeof options!=='object')options={};
    const settings=normalizeWorldLifeSettings(options.worldLife),preview=options.preview===true,reduced=options.reduceMotion===true;
    const absolute=Number.isFinite(seconds)?clamp(seconds,0,Number.MAX_SAFE_INTEGER/2):0,time=reduced?0:absolute*settings.pace;
    const rough=ROUGH.has(options.condition),quiet=Boolean(options.night)||options.activity==='overnight',active=settings.enabled&&settings.marine&&settings.density>0;
    root.visible=Boolean(valid&&active);currentPreview=preview;currentReduced=reduced;particleCount=0;bounds.makeEmpty();
    for(const [index,a] of actors.entries()){
      const route=preview?a.preview:a.normal,seed=hash(settings.seed+':'+a.id),period=route?.period??200,t=mod(time,period),phase=mod(t+seed*period,period)/period;
      // A new appearance starts only at the next encounter; the normal duty-cycle
      // has already hidden the animal before this boundary. Preview stays stable.
      a.encounter=preview?0:Math.floor(time/period+seed);
      if(a.appearanceEncounter!==a.encounter||a.appearanceSeed!==settings.seed||a.appearanceVariety!==settings.variety){
        a.appearanceEncounter=a.encounter;a.appearanceSeed=settings.seed;a.appearanceVariety=settings.variety;
        const appearanceSeed=settings.seed+':'+a.id+':'+a.encounter;
        a.bodyScale=1-settings.variety*.2*hash(appearanceSeed+':size');a.group.scale.setScalar(a.bodyScale);
        const coat=hash(appearanceSeed+':coat')<settings.variety?Math.floor(hash(appearanceSeed+':palette')*3):0;
        if(coat!==a.coatVariant){
          a.coatVariant=coat;a.coatColor.set(COATS[a.variant][coat]);const colors=a.mesh.geometry.attributes.color;
          for(const i of a.coatVertices)colors.setXYZ(i,a.coatColor.r,a.coatColor.g,a.coatColor.b);colors.needsUpdate=true;
        }
      }
      const duty=clamp(.28+settings.density*.68,0,1),event=preview?mod(time+index*4,36)/36:phase;
      const rare= a.species==='walruses'||a.variant==='orca';
      const visible=active&&settings[a.species]&&route&&(preview||(!quiet&&phase<duty&&(!rare||seed<.2+settings.variety*.8)));
      a.group.visible=Boolean(visible);a.behavior=visible?'swim':'hidden';
      if(!route)continue;
      const angle=mod(time,route.period)*TAU/route.period+seed*TAU;
      routePoint(route,angle,a.group.position);
      const yaw=Math.atan2(-route.depth*Math.cos(angle),-route.radius*Math.sin(angle));
      const surface=preview?.04:Math.sin(phase*Math.PI)*.15;
      a.group.position.y=water.y+a.beam*a.bodyScale*(.04+surface);a.group.rotation.set(0,yaw,0,'YXZ');
      for(let i=1;i<a.bones.length;i++)a.bones[i].rotation.set(0,0,0);
      const wave=Math.sin(mod(time,12)*TAU/2.6+seed*TAU);
      if(!reduced){
        if(a.species==='sharks')a.bones[1].rotation.y=wave*.19;else a.bones[1].rotation.z=wave*.14;
        a.bones[2].rotation.x=wave*.13;a.bones[3].rotation.x=-wave*.13;
        a.group.rotation.z=wave*.035;a.group.position.y+=Math.sin(mod(time,8)*TAU/4+index)*.4;
      }
      const canEvent=settings.surprises&&!reduced&&!rough&&!quiet;
      let splash=0,spout=0;
      if(visible&&canEvent&&event>.70&&event<.86){
        const f=(event-.70)/.16,lift=Math.sin(f*Math.PI);
        if(a.species==='dolphins'){
          a.behavior='leap';a.group.position.y+=lift*18;a.group.rotation.z=Math.cos(f*Math.PI)*.68;splash=1-lift;
        }else if(a.species==='whales'){
          a.behavior=a.variant==='orca'?'breach':'spout';
          if(a.variant==='orca'){a.group.position.y+=lift*27;a.group.rotation.z=lift*.65;splash=1-lift;}else spout=lift;
        }else if(a.species==='seals'){
          a.behavior='roll';a.group.rotation.x=lift*TAU;a.group.position.y+=1.3;
        }else if(a.species==='walruses'){a.behavior='flipper-wave';a.bones[3].rotation.x=Math.sin(f*TAU*2)*.55;}
      }else if(visible&&(a.species==='seals'||a.species==='walruses')&&event<.30){a.behavior='rest';a.group.rotation.z=0;}
      if(reduced){a.behavior=visible?'rest':'hidden';a.group.rotation.set(0,yaw,0);}
      if(!visible)continue;
      a.group.updateMatrix();
      const r=a.radius;bounds.expandByPoint(boundPoint.set(a.group.position.x-r,a.group.position.y-r,a.group.position.z-r));bounds.expandByPoint(boundPoint.set(a.group.position.x+r,a.group.position.y+r+22,a.group.position.z+r));
      if(!reduced){
        const count=spout>0?9:6;
        for(let j=0;j<count&&particleCount<64;j++){
          const progress=mod(mod(time,8)*.43+j/count,1),spread=spout?progress*5:progress*a.beam*.8;
          point.set(spout?a.length*.22:-a.length*.40-progress*4,spout?a.beam*.38+Math.sin(progress*Math.PI)*21*spout:-a.group.position.y+water.y+.25,(j%2?1:-1)*spread);
          point.applyMatrix4(a.group.matrix);if(!spout)point.y=water.y+.25+splash*j*.12;transform.position.copy(point);
          const size=spout?.4+Math.sin(progress*Math.PI)*.65:.5+(1-progress)*(splash?1.1:.6);
          transform.scale.set(size,spout?size:size*.18,size*(spout?1:1.7));transform.rotation.set(0,0,0);transform.updateMatrix();foam.setMatrixAt(particleCount++,transform.matrix);
        }
      }
    }
    foam.count=particleCount;foam.visible=particleCount>0;foam.instanceMatrix.needsUpdate=true;
  }
  function getFocus(){const a=actors.find(a=>a.group.visible&&['leap','breach','spout'].includes(a.behavior))??actors.find(a=>a.group.visible);return a?{x:a.group.position.x,y:a.group.position.y,z:a.group.position.z}:{x:valid?water.focusX:0,y:valid?water.y:0,z:valid?shoreAt(water,water.focusX)-175:0};}
  function getBounds(){if(!bounds.isEmpty())return bounds.clone();const f=getFocus();return new THREE.Box3(new THREE.Vector3(f.x-60,f.y-15,f.z-45),new THREE.Vector3(f.x+60,f.y+35,f.z+45));}
  /** Pure, pre-RAF framing contract; no temporary preview update or scene mutation. */
  function getPreviewBounds(value){
    const settings=normalizeWorldLifeSettings(value);if(!valid||disposed||!settings.enabled||!settings.marine||settings.density===0)return null;
    const result=new THREE.Box3();
    for(const a of actors){
      const route=a.preview;if(!route||!settings[a.species])continue;
      const r=a.radius,rx=route.radius+r,rz=route.depth+r;
      result.expandByPoint(new THREE.Vector3(route.x-rx,water.y-r-.4,route.z-rz));
      result.expandByPoint(new THREE.Vector3(route.x+rx,water.y+a.beam*.19+.4+27+r+22,route.z+rz));
    }
    return result.isEmpty()?null:result;
  }
  function getState(){return {decorative:true,validWater:Boolean(valid),disposed,preview:currentPreview,reducedMotion:currentReduced,particles:particleCount,actors:actors.map(a=>({id:a.id,species:a.species,variant:a.variant,storybookVisitor:a.species==='walruses',visible:root.visible&&a.group.visible,behavior:a.behavior,length:a.length,beam:a.beam,bodyScale:a.bodyScale,coatVariant:a.coatVariant,encounter:a.encounter,safetyRadius:a.radius,position:a.group.position.toArray(),rotation:a.group.rotation.toArray().slice(0,3),joints:a.bones.slice(1).map(b=>b.rotation.toArray().slice(0,3))}))};}
  function dispose(){if(disposed)return;disposed=true;for(const a of actors){a.mesh.geometry.dispose();a.mesh.skeleton.dispose();}foam.geometry.dispose();foamMaterial.dispose();material.dispose();root.clear();root.visible=false;}
  update(0);return {root,update,dispose,getState,getFocus,getBounds,getPreviewBounds};
}
