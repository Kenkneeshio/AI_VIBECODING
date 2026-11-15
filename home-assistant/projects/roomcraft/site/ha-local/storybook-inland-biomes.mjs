import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const smooth=(x)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};
const gauss=(x,scale)=>Math.exp(-Math.pow(x/scale,2));

/** Broad world-space features. All elevations stay positive and are tapered
 * again by the meadow's road, building, and boundary masks. */
export function sampleInlandBiomes(x,z,house){
  const canyonX=house.minX-900,canyonZ=house.maxZ+700;
  const canyonEnvelope=gauss(x-canyonX,1000)*gauss(z-canyonZ,680);
  const canyonRidge=gauss(Math.abs(x-canyonX)-270,275)*canyonEnvelope;
  const desertX=house.maxX+1250,desertZ=house.maxZ+800;
  const desert=gauss(x-desertX,1050)*gauss(z-desertZ,800);
  const washX=house.maxX+610+115*Math.sin((z-house.maxZ-220)/1150*6.1);
  const creekEnvelope=smooth((z-house.maxZ-120)/150)*(1-smooth((z-house.maxZ-1260)/190));
  const creek=gauss(x-washX,64)*creekEnvelope;
  const banks=gauss(Math.abs(x-washX)-120,160)*creekEnvelope;
  const dunes=(.5+.5*Math.sin(x*.009+Math.sin(z*.006)*1.5))*desert;
  return {height:25*canyonRidge+12*dunes+5*banks,canyon:canyonEnvelope,desert,creek,
    riparian:gauss(x-washX,250)*creekEnvelope};
}

/** Two shallow, meandering strips stay inside the meadow and follow its
 * exact sampler. They are decorative waterways, never editable home floors. */
export function createInlandWatercourse(house,heightAt){
  const root=new THREE.Group();root.name='San Diego seasonal creek';root.userData.roomcraftDecorative=true;
  if(!house||typeof heightAt!=='function')return root;
  const material=new THREE.MeshStandardMaterial({color:'#70aba5',metalness:.15,roughness:.29,
    transparent:true,opacity:.88,side:THREE.DoubleSide,depthWrite:false});
  const paths=[
    t=>({x:house.maxX+610+115*Math.sin(t*6.1),z:house.maxZ+220+t*1150,width:31+6*Math.sin(t*5)}),
    t=>({x:house.maxX+1100-t*420+18*Math.sin(t*8),z:house.maxZ+1010-t*330,width:17+4*Math.sin(t*4)}),
  ];
  for(const [index,path] of paths.entries()){
    const vertices=[],indices=[],colors=[];
    for(let i=0;i<=80;i++){
      const t=i/80,p=path(t),next=path(Math.min(1,t+.001));
      const dx=next.x-p.x,dz=next.z-p.z,len=Math.hypot(dx,dz)||1;
      for(const side of [-1,1]){
        const x=p.x+side*(-dz/len)*p.width,z=p.z+side*(dx/len)*p.width;
        vertices.push(x,heightAt(x,z)+.24,z);
        const foam=Math.pow(Math.abs(side),3)*.12+Math.sin(t*19+index)*.04;
        colors.push(.75+foam,.9+foam,.89+foam);
      }
      if(i<80){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
    }
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
    geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    geometry.setIndex(indices);geometry.computeVertexNormals();
    const mesh=new THREE.Mesh(geometry,material);mesh.name=index?'Creek tributary':'Meandering creek';
    mesh.receiveShadow=true;root.add(mesh);
  }
  return root;
}

/** Static authored formations share a handful of merged material batches.
 * No geometry or materials are created in the animation loop. */
export function createInlandBiomeDetails(house,heightAt,canPlace=()=>true){
  const root=new THREE.Group();root.name='Canyon creek and desert details';root.userData.roomcraftDecorative=true;
  if(!house||typeof heightAt!=='function')return root;
  const batches=new Map(),unit=new THREE.Object3D();
  function add(shape,color,x,y,z,w,h,d,rotation=0){
    if(!canPlace(x,z))return;
    const geometry=shape==='rock'?new THREE.SphereGeometry(1,9,6):
      shape==='spire'?new THREE.CylinderGeometry(.46,.74,1,7):
      shape==='arm'?new THREE.CylinderGeometry(.75,.9,1,6):
      new THREE.CylinderGeometry(.72,1,1,18);
    unit.position.set(x,y,z);unit.scale.set(w,h,d);unit.rotation.set(0,rotation,0);unit.updateMatrix();
    geometry.applyMatrix4(unit.matrix);
    if(!batches.has(color))batches.set(color,[]);batches.get(color).push(geometry);
  }
  const canyonX=house.minX-900,canyonZ=house.maxZ+700;
  for(let i=0;i<7;i++){
    const side=i%2?-1:1,x=canyonX+side*(210+(i%3)*145-(i===0?100:0)),z=canyonZ+(i-3)*130;
    const base=heightAt(x,z),wide=105+(i%3)*27,tall=72+(i%4)*16;
    add('mesa','#795e4f',x,base+tall*.29,z,wide*1.2,tall*.63,wide*.72,i*.42);
    add('mesa','#a47d64',x,base+tall*.68,z,wide*.98,tall*.25,wide*.62,i*.42);
    add('mesa','#d1a681',x,base+tall*.91,z,wide*.83,tall*.22,wide*.55,i*.42);
    for(let k=0;k<3;k++){
      const ledge=wide*(.78-k*.10),angle=i*1.1+k*2.05;
      add('rock','#c19b79',x+Math.cos(angle)*ledge,base+tall*(.48+k*.17),
        z+Math.sin(angle)*ledge*.55,wide*.23,8,wide*.19,angle);
    }
    for(let j=0;j<7;j++){
      const a=j*Math.PI*2/7+.4*i,rx=x+Math.cos(a)*wide*1.55,rz=z+Math.sin(a)*wide;
      add('rock',j%3?'#ae9577':'#d0b99a',rx,heightAt(rx,rz)+4,rz,7+(j%3)*3,4+(j%2)*3,8+(j%4)*2,a);
    }
  }
  for(let i=0;i<28;i++){
    const x=house.maxX+900+(i%7)*165+Math.sin(i*2.4)*33;
    const z=house.maxZ+320+Math.floor(i/7)*255+Math.cos(i*1.7)*38;
    const base=heightAt(x,z),height=13+i%5*4;
    add('spire','#65886d',x,base+height*.5,z,3.1,height,3.1,i*.5);
    add('arm','#65886d',x+5,base+height*.52,z,5.5,2.2,2.3,-.55);
    add('spire','#65886d',x+7,base+height*.65,z,2,5.5,2);
    if(i%2===0)add('rock','#bba686',x-16,base+2,z+9,8,3,6,i);
  }
  for(let i=0;i<36;i++){
    const z=house.maxZ+225+i*31,x=house.maxX+610+115*Math.sin((z-house.maxZ-220)/1150*6.1);
    const side=i%2?-1:1,px=x+side*(43+(i%4)*5),pz=z;
    const base=heightAt(px,pz);
    add('rock',i%3?'#6c806c':'#8a9a77',px,base+2,pz,8+(i%3)*3,3+(i%4),6+(i%3)*2,i*.8);
    if(i%4===0)add('spire','#758f6c',px+side*8,base+7,pz,1.6,14,1.6,i);
  }
  for(const [color,pieces] of batches){
    const geometry=mergeGeometries(pieces);pieces.forEach(piece=>piece.dispose());
    const mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:.91}));
    mesh.name='Inland detail '+color;mesh.receiveShadow=true;mesh.castShadow=true;root.add(mesh);
  }
  return root;
}
