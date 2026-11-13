import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const TAU=Math.PI*2;
export const HOLIDAY_ART_THEMES=Object.freeze(['fireworks','pine','lanterns','blossoms','kites','flowers','water','boats','harvest','lights','stars','hearts','clover','pumpkins','gifts','beans']);
const THEMES=new Set(HOLIDAY_ART_THEMES);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const fract=v=>v-Math.floor(v);
const seed=n=>fract(Math.sin(n*127.1+311.7)*43758.5453);
const COLORS=['#e9ba72','#c9868f','#86afaa','#a8a0c2','#a2b87f','#e4d4aa'];

function merge(parts){
  const geometries=parts.map(([source,color])=>{
    const g=source.index?source.toNonIndexed():source;if(g!==source)source.dispose();g.deleteAttribute('uv');
    const rgb=new THREE.Color(color),values=new Float32Array(g.attributes.position.count*3);
    for(let i=0;i<values.length;i+=3)rgb.toArray(values,i);g.setAttribute('color',new THREE.BufferAttribute(values,3));return g;
  });
  const result=mergeGeometries(geometries);for(const g of geometries)g.dispose();result.computeBoundingBox();result.computeBoundingSphere();return result;
}

function recipe(){
  const body=[],glow=[];
  const add=(g,c,lit=false)=>(lit?glow:body).push([g,c]);
  const box=(x,y,z,w,h,d,c,lit=false)=>add(new THREE.BoxGeometry(w,h,d).translate(x,y,z),c,lit);
  const sphere=(x,y,z,w,h,d,c,lit=false)=>add(new THREE.SphereGeometry(1,10,7).scale(w,h,d).translate(x,y,z),c,lit);
  const cylinder=(x,y,z,r,h,c,r2=r,n=12,lit=false)=>add(new THREE.CylinderGeometry(r,r2,h,n).translate(x,y,z),c,lit);
  const cone=(x,y,z,r,h,c)=>add(new THREE.ConeGeometry(r,h,12).translate(x,y,z),c);
  const beam=(a,b,r,c)=>{
    const p=new THREE.Vector3(...a),q=new THREE.Vector3(...b),v=q.clone().sub(p);
    const g=new THREE.CylinderGeometry(r,r,v.length(),6);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize()));g.translate(...p.add(q).multiplyScalar(.5).toArray());add(g,c);
  };
  const star=(x,y,z,r,c)=>{
    const s=new THREE.Shape();for(let i=0;i<10;i++){const a=Math.PI/2+i*Math.PI/5,rr=i%2?r*.44:r;const xx=Math.cos(a)*rr,yy=Math.sin(a)*rr;if(i)s.lineTo(xx,yy);else s.moveTo(xx,yy);}s.closePath();
    add(new THREE.ExtrudeGeometry(s,{depth:.7,bevelEnabled:false}).translate(x,y,z),c,true);
  };
  const heart=(x,y,z,r,c)=>{
    const s=new THREE.Shape();s.moveTo(0,-r);s.bezierCurveTo(-r*1.8,0,-r*1.5,r*1.35,-r*.55,r*1.1);s.bezierCurveTo(-r*.1,r*1.1,0,r*.65,0,r*.65);s.bezierCurveTo(r*.6,r*1.55,r*1.8,r*.9,r*.9,0);s.quadraticCurveTo(r*.4,-r*.55,0,-r);
    add(new THREE.ExtrudeGeometry(s,{depth:.55,steps:1,bevelEnabled:false,curveSegments:6}).translate(x,y,z),c);
  };
  const flower=(x,y,z,r,c)=>{
    for(let i=0;i<6;i++){const a=i*TAU/6,g=new THREE.SphereGeometry(1,8,5).scale(r*.55,r*.24,r*.95);g.rotateY(a);g.translate(x+Math.sin(a)*r*.57,y,z+Math.cos(a)*r*.57);add(g,c);}
    sphere(x,y+.3,z,r*.4,r*.24,r*.4,'#e7c57c');
  };
  const leaf=(x,y,z,r,c)=>sphere(x,y,z,r*.5,r*.2,r,c);
  const bowl=(x,y,z,r,c)=>{
    const center=Math.max(y,r*.22),base=center-r*.22;
    if(base>.01)cylinder(x,base/2,z,r*.35,base,c);
    sphere(x,center,z,r,r*.22,r,c);cylinder(x,center+r*.17,z,r*.84,.3,'#b8a480');
  };
  const flame=(x,y,z,r=1)=>sphere(x,y,z,r*.55,r*1.1,r*.55,'#f6dd9b',true);
  const lotus=(x,y,z,r=6)=>{bowl(x,y,z,r,'#8ca98c');for(let i=0;i<8;i++){const a=i*TAU/8;sphere(x+Math.cos(a)*r*.48,y+r*.32,z+Math.sin(a)*r*.48,r*.45,r*.4,r*.45,i%2?'#dfb8be':'#ecd4c9');}flame(x,y+r*.9,z,1.1);};
  return {body,glow,add,box,sphere,cylinder,cone,beam,star,heart,flower,leaf,bowl,flame,lotus};
}

function lanternArt(){
  const r=recipe();r.sphere(0,0,0,4.2,5.2,4.2,'#b8443c',true);
  for(const y of [-4.5,4.5])r.cylinder(0,y,0,2.5,.7,'#deb574');
  for(let i=0;i<8;i++){const a=i*TAU/8;r.beam([Math.sin(a)*2.2,-4.1,Math.cos(a)*2.2],[Math.sin(a)*3.7,0,Math.cos(a)*3.7],.12,'#e4bf82');r.beam([Math.sin(a)*3.7,0,Math.cos(a)*3.7],[Math.sin(a)*2.2,4.1,Math.cos(a)*2.2],.12,'#e4bf82');}
  r.cylinder(0,-6.2,0,.55,2.7,'#cb9d63');r.cylinder(0,5.7,0,.15,2.1,'#88775c');return r;
}

function fishArt(){
  const r=recipe();r.sphere(0,0,0,9,3.1,3,'#84aaa9');r.cylinder(8.5,0,0,1.9,.65,'#e8d3ad');
  // The windsock mouth and tail read in both a top view and the free camera.
  r.add(new THREE.TorusGeometry(2.45,.45,5,14).rotateY(Math.PI/2).translate(8,0,0),'#e7c992');
  for(const side of [-1,1]){r.sphere(5.2,.6,side*2.65,1.2,1.2,.18,'#e8e1c5');r.sphere(5.55,.7,side*2.83,.52,.6,.12,'#455660');}
  for(let x=-6;x<=2;x+=2.6)for(const side of [-1,1])r.sphere(x,0,side*2.55,1.2,1.85,.3,x%2?'#a7c1ad':'#719897');
  for(const z of [-2.2,2.2]){const g=new THREE.ConeGeometry(3.3,8,3).rotateZ(Math.PI/2).translate(-11,0,z);r.add(g,'#cf9b85');}
  return r;
}

function rabbit(r,x,z,scale=1){
  r.sphere(x,4.1*scale,z,3.8*scale,4.1*scale,3.5*scale,'#e7ded0');r.sphere(x,7.5*scale,z+1.1*scale,3.2*scale,3*scale,2.8*scale,'#f0e5d2');
  for(const side of [-1,1]){
    r.sphere(x+side*1.3*scale,11.8*scale,z+1.1*scale,.9*scale,3.3*scale,.9*scale,'#e7ded0');r.sphere(x+side*1.3*scale,12*scale,z+1.9*scale,.42*scale,2.4*scale,.13*scale,'#cfacb1');
    r.sphere(x+side*1.15*scale,7.8*scale,z+3.65*scale,.28*scale,.37*scale,.16*scale,'#48505a');r.sphere(x+side*2.1*scale,1.1*scale,z+1.9*scale,1.7*scale,.8*scale,2.1*scale,'#ded4c3');
  }
  r.sphere(x,6.8*scale,z+3.9*scale,.3*scale,.2*scale,.16*scale,'#ba8e91');r.sphere(x+3.2*scale,3.5*scale,z-1.8*scale,1.5*scale,1.5*scale,1.5*scale,'#f1e6d4');
}

function pumpkin(r,x,z,scale=1){
  for(let i=0;i<8;i++){const a=i*TAU/8;r.sphere(x+Math.cos(a)*2.6*scale,4.4*scale,z+Math.sin(a)*2.6*scale,2.4*scale,4*scale,2.4*scale,i%2?'#d99d61':'#ca875a');}
  r.cylinder(x,8.8*scale,z,.65*scale,2*scale,'#8e8962',.9*scale,7);
  for(const side of [-1,1])r.sphere(x+side*1.5*scale,5*scale,z+4.7*scale,.5*scale,.7*scale,.15*scale,'#625a52');
  r.sphere(x,3.5*scale,z+4.95*scale,1.2*scale,.35*scale,.15*scale,'#80614e');
}

/** Original seasonal miniature. Scene owns placement; time is explicit. */
export function createHolidayArt({theme,id='',quiet=false,event,colors=[]}={}){
  if(!THEMES.has(theme))return null;
  const isQuiet=quiet||event==='quiet'||id==='vesak'||id==='obon',r=recipe(),ornaments=[],root=new THREE.Group();root.name=`holiday-art-${id||theme}`;
  const palette=Array.isArray(colors)&&colors.length?colors.filter(c=>typeof c==='string'&&/^#[0-9a-f]{6}$/i.test(c)):COLORS;
  const color=i=>(palette.length?palette:COLORS)[i%(palette.length||COLORS.length)];
  const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.86,metalness:.025});
  const glowMaterial=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.6,emissive:theme==='lanterns'?'#a9402c':'#d9b57c',emissiveIntensity:.15});
  let particleKind='petals',count=32,disposed=false,state={};
  const addOrnaments=(art,points,kind)=>{
    const all=merge([...art.body,...art.glow]),mesh=new THREE.InstancedMesh(all,kind==='lantern'?glowMaterial:material,points.length);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.castShadow=true;root.add(mesh);ornaments.push({mesh,points,kind});
  };
  const pole=(x,height,z=0)=>{r.cylinder(x,height/2,z,.8,height,'#a79977',1,8);r.cylinder(x,1,z,2.7,2,'#b8ad8d');};
  const pond=()=>{r.sphere(0,.45,0,34,.45,23,'#6c9b9e');r.add(new THREE.TorusGeometry(26,.4,5,36).rotateX(-Math.PI/2).scale(1,1,.72).translate(0,1,0),'#a2c5bd');};
  if(theme==='lanterns'){
    for(const x of [-43,43])pole(x,48,-5);
    for(let i=0;i<10;i++)r.beam([-43+i*8.6,48-Math.sin(i/10*Math.PI)*8,-5],[-43+(i+1)*8.6,48-Math.sin((i+1)/10*Math.PI)*8,-5],.25,'#948569');
    addOrnaments(lanternArt(),[-30,-15,0,15,30].map((x,i)=>[x,34+Math.abs(i-2)*2.6,-5]),'lantern');
    const path=[];for(let i=0;i<30;i++)path.push(new THREE.Vector3(-30+i*2,18+Math.sin(i*.37)*4,10+Math.sin(i*.5)*3));
    r.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(path),35,2.2,6,false),'#b97b62');
    for(let i=1;i<28;i+=3)r.cone(path[i].x,path[i].y+2.5,path[i].z,1.1,2.4,'#d9b275');
    r.sphere(30,20,11,4.1,3.2,3,'#cf9c6f');r.sphere(33,19,12.5,3,1.9,2.4,'#dfb77d');
    for(const side of [-1,1]){r.sphere(31,21.3,11+side*2.5,.7,.75,.3,'#ede0b4');r.sphere(31.2,21.4,11+side*2.75,.3,.4,.15,'#544f49');r.cone(28.5,24,11+side*2,1,4,'#e4cc91');}
    particleKind='sparks';
  }else if(theme==='kites'){
    pole(-25,68,-2);r.star(-25,71,-2,3.3,'#d6c17e');
    addOrnaments(fishArt(),[[-7,56,-2],[-8.28,41,-2],[-9.56,26,-2]],'fish');
    for(const y of [56,41,26])r.beam([-25,y,-2],[-15,y,-2],.25,'#9b8d71');particleKind='petals';
  }else if(theme==='blossoms'){
    if(id==='tanabata'){
      for(const x of [-8,3,12]){r.cylinder(x,25+x*.15,0,.7,50+x*.3,'#7d9972',.9,8);for(let y=8;y<50;y+=8){r.cylinder(x,y,0,.9,.5,'#b0b68b');r.beam([x,y,0],[x+13,y+8,2],.3,'#8aa17b');r.leaf(x+11,y+8,2,4,'#91a77c');}}
      const slips=recipe();slips.box(0,-3,0,2.5,7,.22,'#cc9ba7');slips.box(0,-1.5,.15,1.4,.2,.1,'#edd6b3');
      addOrnaments(slips,[[-10,35,2],[6,45,1],[17,24,2],[19,39,2],[-5,19,1]],'ribbon');
    }else{
      for(let level=0;level<3;level++)r.box(0,1.5+level*3,-level*6,52-level*9,3,10,'#b97c7d');
      for(const x of [-12,12]){r.cone(x,14,-12,5,10,x<0?'#9da9c1':'#cd98a3');r.sphere(x,21,-12,2.5,2.5,2.2,'#e6c4a3');r.sphere(x,23,-12,2.6,1.3,2.3,'#55535e');r.box(x,25,-12,4,.7,2,'#bea570');}
      for(const x of [-32,32]){pole(x,31,0);for(let i=0;i<8;i++){const a=i*2.4;r.flower(x+Math.cos(a)*7,27+(i%3)*3,Math.sin(a)*6,3.6,i%2?'#dba7b2':'#ebc7cc');}}
    }
  }else if(theme==='lights'){
    if(id==='hanukkah'){
      r.box(0,2,0,25,3,9,'#b3a77d');r.cylinder(0,18,0,1.4,33,'#cbb37d');
      for(const x of [-24,-18,-12,-6,6,12,18,24]){r.beam([0,8,0],[x,18,0],.8,'#cbb37d');r.cylinder(x,23,0,.8,10,'#cbb37d');r.cylinder(x,30.5,0,1.15,5,'#e6d8b8');r.flame(x,34,0,1);}
      r.cylinder(0,36,0,1.15,5,'#e6d8b8');r.flame(0,39.5,0,1);particleKind='glow';
    }else if(id==='vesak'||id==='obon'){
      pond();for(const [x,z] of [[-18,4],[0,-8],[19,5]])r.lotus(x,1,z,7);
      const paper=recipe();paper.box(0,0,0,6,8,6,'#e6d5b2',true);for(const y of [-4,4])paper.box(0,y,0,6.5,.5,6.5,'#a29678');
      addOrnaments(paper,[[-24,20,-9],[0,28,-12],[24,20,-9]],'paper');particleKind='glow';
    }else{
      for(let row=0;row<3;row++)for(let i=0;i<12;i++){const a=i*TAU/12+row*.15,rad=8+row*7;r.flower(Math.cos(a)*rad,.7,Math.sin(a)*rad,2.1,color(i+row));}
      for(let i=0;i<8;i++){const a=i*TAU/8,x=Math.cos(a)*31,z=Math.sin(a)*26;r.bowl(x,1.5,z,4,'#bf8868');r.flame(x,4,z,1.3);}particleKind='glow';
    }
  }else if(theme==='harvest'&&(id==='mid-autumn'||id==='chuseok')){
    pole(0,40,-10);r.sphere(0,40,-10,13,13,1.8,'#eed799',true);
    for(const [x,y,rr] of [[-4,44,2.8],[6,36,2.2],[-5,35,1.5]])r.sphere(x,y,-8.05,rr,rr,.12,'#ddc48f');
    rabbit(r,-16,12,1.1);r.bowl(15,2,13,10,'#b9a37d');for(const x of [10,17])r.cylinder(x,4,13,2.8,2.2,'#d9b680',3.1,8);
    addOrnaments(lanternArt(),[[-35,22,-1],[35,22,-1]],'lantern');particleKind='glow';
  }else if(theme==='harvest'){
    for(const [x,z,s] of [[-16,0,1.3],[0,8,1],[18,0,1.15]])pumpkin(r,x,z,s);
    for(let i=0;i<9;i++){const x=-25+i*6;r.beam([x,.1,-12],[x+Math.sin(i)*2,19+(i%3)*3,-12],.28,'#b99c69');r.sphere(x,18+(i%3)*3,-12,1.3,4,.9,'#dcc188');}particleKind='leaves';
  }else if(theme==='gifts'){
    r.cylinder(0,4,0,2.2,8,'#9a8060');for(const [y,rr,hh] of [[15,18,24],[28,13,21],[39,8.5,19]])r.cone(0,y,0,rr,hh,y<20?'#6b947d':'#80a28a');
    r.star(0,51,0,5,'#e6c47d');for(let i=0;i<23;i++){const y=8+(i%6)*6,a=i*2.4,rad=(47-y)*.4;r.sphere(Math.cos(a)*rad,y,Math.sin(a)*rad,1.2,1.2,1.2,color(i),true);}
    for(const [x,z,i] of [[-22,8,0],[19,10,2],[-11,23,3],[7,24,4]]){r.box(x,4,z,10,8,9,color(i));r.box(x,8.3,z,10.8,.8,9.8,'#e4cfab');r.box(x,4.5,z,1.7,8.7,9.9,'#e8d9ba');r.box(x,8.8,z,11,.3,1.7,'#e8d9ba');r.sphere(x-2,10,z,2.2,.9,1.1,'#e8d9ba');r.sphere(x+2,10,z,2.2,.9,1.1,'#e8d9ba');}particleKind='snow';
  }else if(theme==='stars'){
    if(id==='nowruz'){
      r.bowl(0,2,0,18,'#c1aa84');for(let i=0;i<25;i++){const a=i*2.399,rad=13*Math.sqrt((i+.5)/25);r.beam([Math.cos(a)*rad,3,Math.sin(a)*rad],[Math.cos(a)*rad,8+(i%5),Math.sin(a)*rad],.3,'#8daa76');}
      for(const x of [-27,27]){r.cylinder(x,4,0,4,8,'#d0a49e',3);r.flower(x,10,0,7,'#e7b9b7');}particleKind='petals';
    }else{
      const shape=new THREE.Shape(),a=Math.acos(.4),iy=Math.sqrt(144-4.8**2),b=Math.atan2(iy,-.2);shape.absarc(0,0,12,a,TAU-a,false);shape.absarc(5,0,11,-b,b,true);shape.closePath();
      r.add(new THREE.ExtrudeGeometry(shape,{depth:1,bevelEnabled:false,curveSegments:24}).translate(-3,34,0),'#dfc48a',true);r.star(14,36,.5,4.7,'#ead8a8');
      pole(-3,22,0);addOrnaments(lanternArt(),[[-28,18,-7],[29,18,-7]],'lantern');particleKind='glow';
    }
  }else if(theme==='water'||theme==='boats'){
    pond();
    if(id==='dragon-boat'){
      r.sphere(0,3.5,0,29,3.5,6.3,'#b78b64');r.box(0,5,0,45,1.1,8,'#d3b17b');r.sphere(28,7,0,4,4,3,'#c69b6a');r.sphere(31,8,1,3,2.3,2.5,'#daba7d');
      for(let x=-18;x<=18;x+=9){r.box(x,7,0,1.5,3,8,'#a37d5b');for(const z of [-5,5])r.beam([x,6,z],[x+3,1,z*2.3],.35,'#c3ab7a');}
      r.cylinder(-4,8,0,3,4,'#bf8b75');r.cylinder(-4,10.2,0,3,.4,'#e5d2a9');particleKind='water';
    }else{for(const [x,z] of [[-18,5],[0,-5],[18,5]])r.lotus(x,1,z,7);particleKind=theme==='water'?'water':'glow';}
  }else if(theme==='flowers'){
    if(id==='easter'){
      rabbit(r,-11,3,1.25);r.bowl(14,3,5,10,'#bdaa80');for(let i=0;i<6;i++)r.sphere(9+(i%3)*5,6,2+Math.floor(i/3)*6,2.5,3.7,2.4,color(i));
    }else{
      for(let i=0;i<11;i++){const a=i*2.399,rad=9+seed(i)*20,x=Math.cos(a)*rad,z=Math.sin(a)*rad;r.beam([x,0,z],[x,12+(i%3)*6,z],.4,'#839a73');r.flower(x,12+(i%3)*6,z,4.5,color(i));r.leaf(x+2,6,z,3.5,'#93ad80');}
      if(id==='holi')for(let i=0;i<5;i++){const x=-24+i*12;r.bowl(x,1.5,25,4.7,'#b5a480');r.cone(x,3.3,25,3.8,3,color(i));}
    }particleKind='petals';
  }else if(theme==='pine'){
    for(const x of [-18,18]){
      r.cylinder(x,4,0,9,8,'#b3a47d',7);for(const [dx,hh] of [[-4,22],[0,34],[4,28]]){r.cylinder(x+dx,hh/2+7,0,2,hh,'#93ac7f',2.1);r.cylinder(x+dx,hh+7,0,1.4,.2,'#dfd0a5');}
      for(let i=0;i<10;i++){const a=i*2.4;r.sphere(x+Math.cos(a)*8,10+(i%3)*5,Math.sin(a)*7,4,2.2,3,'#789775');}r.flower(x,15,6,3.3,'#daa0aa');
    }particleKind='petals';
  }else if(theme==='pumpkins'){
    for(const [x,z,s] of [[-17,2,1.25],[0,10,.85],[18,1,1.1]])pumpkin(r,x,z,s);
    const ghost=recipe();ghost.sphere(0,0,0,3.5,4.5,3,'#e9e3d1');for(const side of [-1,1])ghost.sphere(side*1.1,.5,2.8,.4,.65,.15,'#69717b');ghost.sphere(0,-1,3,.55,.7,.15,'#69717b');addOrnaments(ghost,[[-26,22,-6],[25,28,-7]],'ghost');particleKind='leaves';
  }else if(theme==='hearts'){
    for(const [x,y,z,rr] of [[-20,23,-3,7],[0,34,-7,10],[23,23,-4,7]]){r.beam([x*.6,.1,z],[x,y-rr,z],.16,'#9e9982');r.heart(x,y,z,rr,'#cf929e');}
    r.bowl(0,2,12,12,'#c5a385');for(let i=0;i<7;i++)r.flower(Math.cos(i)*7,5,12+Math.sin(i)*6,3.5,color(i));
  }else if(theme==='clover'){
    r.bowl(0,3,0,16,'#b5a178');for(let i=0;i<9;i++){const x=(i%3-1)*9,z=(Math.floor(i/3)-1)*7,hh=10+(i%3)*5;r.beam([x,3,z],[x,hh,z],.35,'#7a9c75');for(let j=0;j<4;j++){const a=j*Math.PI/2;r.sphere(x+Math.cos(a)*2,hh,z+Math.sin(a)*2,2.7,.7,2.7,'#8eae7c');}}
  }else if(theme==='beans'){
    r.box(0,4,5,24,8,19,'#bda77d');r.box(0,8.2,5,21,.4,16,'#e0c595');for(let i=0;i<25;i++)r.sphere(-9+seed(i)*18,9+seed(i+90),-1+seed(i+20)*13,.9,.65,.75,'#decc9b');
    r.sphere(0,23,-6,9,10,2.5,'#c78f82');for(const side of [-1,1]){r.cone(side*5,34,-6,1.9,6,'#d8bf86');r.sphere(side*3.5,25,-3.5,1.7,1,.2,'#e4d6b6');r.sphere(side*3.5,25,-3.2,.7,.7,.15,'#62646b');}r.sphere(0,19,-3.3,3,.7,.2,'#98756b');
  }else{
    for(const x of [-30,30]){pole(x,37);r.star(x,40,0,5,'#dabb7e');}
    for(let i=0;i<7;i++){r.box(-24+i*8,24-Math.sin(i/6*Math.PI)*5,0,5,7,.35,color(i));if(i)r.beam([-24+(i-1)*8,28-Math.sin((i-1)/6*Math.PI)*5,0],[-24+i*8,28-Math.sin(i/6*Math.PI)*5,0],.18,'#a0977c');}
    particleKind='fireworks';count=54;
  }
  const addLayer=(parts,mat,name)=>{if(!parts.length)return;const mesh=new THREE.Mesh(merge(parts),mat);mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);};
  addLayer(r.body,material,'holiday-decoration');addLayer(r.glow,glowMaterial,'holiday-local-light');
  const particles=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:'#fff7db',roughness:.8,emissive:'#b6a384',emissiveIntensity:.12}),count);
  particles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);particles.frustumCulled=false;particles.name='holiday-ambient-events';root.add(particles);
  for(let i=0;i<count;i++)particles.setColorAt(i,new THREE.Color(particleKind==='snow'?'#eee9dc':particleKind==='water'?'#99c8ca':color(i)));
  root.traverse(o=>{o.userData.roomcraftDecorative=true;o.userData.holidayArt=true;o.raycast=()=>{};});
  const bounds=new THREE.Box3(new THREE.Vector3(-70,0,-50),new THREE.Vector3(70,100,50));
  const matrix=new THREE.Matrix4(),position=new THREE.Vector3(),rotation=new THREE.Quaternion(),scaling=new THREE.Vector3(),euler=new THREE.Euler();
  function update({elapsedSeconds=0,night=false,reducedMotion=false,events=true,lighting=true,intensity=1}={}){
    if(disposed)return;
    const strength=Number.isFinite(intensity)?clamp(intensity,0,1):1,t=reducedMotion?0:Number.isFinite(elapsedSeconds)?Math.max(0,elapsedSeconds):0;
    root.visible=strength>0;glowMaterial.emissiveIntensity=lighting?(night?.72:.12)*strength:0;
    let ornamentCount=0;
    for(const {mesh,points,kind} of ornaments){
      for(let i=0;i<points.length;i++){
        const [x,y,z]=points[i],wave=reducedMotion?0:Math.sin(t*(kind==='fish'?.9:.55)+i*1.9);
        position.set(x+(kind==='paper'?wave:0),y+(kind==='paper'||kind==='ghost'?wave*2:0),z+wave*.7);
        euler.set(0,kind==='fish'?Math.PI+wave*.14:0,wave*(kind==='ribbon'?.22:.055));rotation.setFromEuler(euler);scaling.setScalar(kind==='fish'?1-i*.16:1);
        matrix.compose(position,rotation,scaling);mesh.setMatrixAt(i,matrix);ornamentCount++;
      }mesh.instanceMatrix.needsUpdate=true;
    }
    // No confetti/fireworks on quiet observances. Decorative flames remain
    // steady for reduced motion and when events are disabled.
    const animateEvents=events&&!reducedMotion&&!isQuiet&&strength>0;
    particles.visible=animateEvents;particles.count=Math.round(count*strength);
    for(let i=0;i<count;i++){
      const offset=seed(i+1),cycle=fract(t*.08+offset);let x,y,z,rr=.65;
      if(particleKind==='fireworks'){
        const burst=Math.floor(i/18),f=fract(t*.16+burst*.31),a=(i%18)*TAU/18;
        x=(burst-1)*30+Math.cos(a)*f*16;y=64+Math.sin(a)*f*16-f*f*9;z=Math.sin(i*2.4)*f*10;rr=(1-f)*.85;
      }else if(particleKind==='water'){
        const a=i*2.399;x=Math.cos(a)*(5+cycle*18);z=Math.sin(a)*(4+cycle*12);y=2+Math.sin(cycle*Math.PI)*25;rr=.7;
      }else{
        x=(seed(i+11)-.5)*95+Math.sin(t*.3+i)*3;z=(seed(i+21)-.5)*64;y=8+(1-cycle)*62;rr=particleKind==='snow'?.55:particleKind==='glow'?.38:.7;
      }
      position.set(x,y,z);rotation.setFromEuler(euler.set(t*.1+i,t*.2+i,0));scaling.setScalar(Math.max(.04,rr));matrix.compose(position,rotation,scaling);particles.setMatrixAt(i,matrix);
    }particles.instanceMatrix.needsUpdate=true;
    state={theme,id,quiet:isQuiet,reducedMotion:!!reducedMotion,events:animateEvents,lighting:!!lighting,intensity:strength,ornaments:ornamentCount,particles:animateEvents?particles.count:0};
    root.updateMatrixWorld(true);return state;
  }
  function dispose(){
    if(disposed)return;disposed=true;const geometry=new Set(),materials=new Set();
    root.traverse(o=>{if(o.geometry)geometry.add(o.geometry);if(o.material)materials.add(o.material);});
    for(const g of geometry)g.dispose();for(const m of materials)m.dispose();
    // A theme with no emissive layer still owns this unreferenced material.
    if(!materials.has(material))material.dispose();if(!materials.has(glowMaterial))glowMaterial.dispose();root.removeFromParent();root.clear();
  }
  update();return {root,bounds,update,getState:()=>structuredClone(state),dispose};
}

/** Two-draw festive roof trim. Callers supply safe exterior polygons and exact
 * support heights; this factory never infers a wall or changes device lights. */
export function createHolidayTrim({rings=[],colors=[]}={}){
  const root=new THREE.Group();root.name='holiday-neighborhood-trim';
  const samples=[],segments=[],accepted=[];
  for(const ring of Array.isArray(rings)?rings.slice(0,128):[]){
    const closed=ring?.closed!==false;
    if(!Number.isFinite(ring?.y)||!Array.isArray(ring.points)||ring.points.length<(closed?3:2)||ring.points.length>128)continue;
    if(!ring.points.every(p=>Array.isArray(p)&&p.length===2&&p.every(Number.isFinite)))continue;
    const points=ring.points.map(p=>[...p]);
    if(points.length>3&&points[0][0]===points.at(-1)[0]&&points[0][1]===points.at(-1)[1])points.pop();
    const area=Math.abs(points.reduce((sum,p,i)=>{const q=points[(i+1)%points.length];return sum+p[0]*q[1]-q[0]*p[1];},0)/2);
    if(closed&&area<1)continue;
    const size=Number.isFinite(ring.bulbSize)?clamp(ring.bulbSize,.5,6):2.4;
    const spacing=Number.isFinite(ring.spacing)?clamp(ring.spacing,6,80):18;
    accepted.push({id:String(ring.id??accepted.length),y:ring.y,bulbSize:size});
    for(let i=0;i<(closed?points.length:points.length-1);i++){
      const p=points[i],q=points[(i+1)%points.length],length=Math.hypot(q[0]-p[0],q[1]-p[1]);
      if(length<.01)continue;
      segments.push(p[0],ring.y+size*.1,p[1],q[0],ring.y+size*.1,q[1]);
      const steps=Math.max(1,Math.floor(length/spacing));
      for(let n=0;n<steps&&samples.length<512;n++){
        const f=n/steps;samples.push({x:p[0]+(q[0]-p[0])*f,y:ring.y,z:p[1]+(q[1]-p[1])*f,size,ring:accepted.length-1});
      }
    }
  }
  const shape=merge([[new THREE.SphereGeometry(.5,7,5).translate(0,.6,0),'#ffffff'],[new THREE.CylinderGeometry(.22,.22,.2,7).translate(0,.1,0),'#b7b29d']]);
  const bulbMaterial=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.55,emissive:'#bca886',emissiveIntensity:.06});
  const bulbs=new THREE.InstancedMesh(shape,bulbMaterial,samples.length);bulbs.name='holiday-roof-bulbs';bulbs.frustumCulled=false;
  const matrix=new THREE.Matrix4();
  for(let i=0;i<samples.length;i++){const s=samples[i];matrix.makeScale(s.size,s.size,s.size);matrix.setPosition(s.x,s.y,s.z);bulbs.setMatrixAt(i,matrix);}
  root.add(bulbs);
  const wireGeometry=new THREE.BufferGeometry();wireGeometry.setAttribute('position',new THREE.Float32BufferAttribute(segments,3));
  const wire=new THREE.LineSegments(wireGeometry,new THREE.LineBasicMaterial({color:'#a79a78'}));wire.name='holiday-roof-wire';root.add(wire);
  root.traverse(o=>{o.userData.roomcraftDecorative=true;o.userData.holidayArt=true;o.raycast=()=>{};});
  const bounds=new THREE.Box3();
  for(let i=0;i<segments.length;i+=3)bounds.expandByPoint(new THREE.Vector3(segments[i],segments[i+1],segments[i+2]));
  for(const s of samples){bounds.expandByPoint(new THREE.Vector3(s.x-s.size*.5,s.y,s.z-s.size*.5));bounds.expandByPoint(new THREE.Vector3(s.x+s.size*.5,s.y+s.size*1.1,s.z+s.size*.5));}
  if(!samples.length)bounds.set(new THREE.Vector3(),new THREE.Vector3());
  let disposed=false,state={};
  function update({elapsedSeconds=0,night=false,reducedMotion=false,events=true,lighting=true,intensity=1,colors:nextColors=colors}={}){
    if(disposed)return;
    const strength=Number.isFinite(intensity)?clamp(intensity,0,1):1;
    const valid=Array.isArray(nextColors)?nextColors.filter(c=>typeof c==='string'&&/^#[0-9a-f]{6}$/i.test(c)):[];
    const palette=(valid.length?valid:COLORS).map(c=>new THREE.Color(c));
    const t=Number.isFinite(elapsedSeconds)?Math.max(0,elapsedSeconds):0;
    const animated=!!events&&!reducedMotion&&lighting&&strength>0;
    for(let i=0;i<samples.length;i++){
      const flicker=animated?.9+Math.sin(t*1.3-i*.3)*.1:1;
      bulbs.setColorAt(i,palette[i%palette.length].clone().multiplyScalar(flicker));
    }
    if(bulbs.instanceColor)bulbs.instanceColor.needsUpdate=true;
    bulbMaterial.emissiveIntensity=lighting?(night?.28:.045)*strength:0;
    root.visible=samples.length>0&&strength>0;
    state={bulbs:samples.length,rings:accepted.length,animated,lighting:!!lighting,intensity:strength};
    return state;
  }
  function dispose(){if(disposed)return;disposed=true;shape.dispose();bulbMaterial.dispose();wireGeometry.dispose();wire.material.dispose();root.removeFromParent();root.clear();}
  update();return {root,bounds,update,getState:()=>({...state}),dispose};
}
