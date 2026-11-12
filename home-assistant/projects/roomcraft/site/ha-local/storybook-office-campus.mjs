import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const dimension=(value,fallback)=>Number.isFinite(value)&&value>0?value:fallback;

/** Generic coastal office landmark. Full campus footprint, ground Y=0, front +Z. */
export function makeStorybookOfficeCampus(item){
  if(item?.type!=='sceneryOfficeCampus')return null;
  const w=dimension(item.w,220),h=dimension(item.h,180),sy=Math.min(w/220,h/180);
  const layers={structure:[],glazing:[],details:[],garden:[]};
  const add=(layer,geometry,color)=>layers[layer].push([geometry,color]);
  const box=(layer,x,y,z,w,h,d,color)=>add(layer,new THREE.BoxGeometry(w,h,d).translate(x,y,z),color);
  const quad=(layer,points,color)=>{
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(points.flat(),3));
    g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();add(layer,g,color);
  };
  const cylinder=(layer,x,y,z,r,height,color,segments=20)=>add(layer,new THREE.CylinderGeometry(r,r,height,segments).translate(x,y,z),color);
  const beam=(layer,a,b,r,color)=>{
    const p=new THREE.Vector3(...a),q=new THREE.Vector3(...b),v=q.clone().sub(p);
    const g=new THREE.CylinderGeometry(r,r,v.length(),6);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize()));
    g.translate(...p.add(q).multiplyScalar(.5).toArray());add(layer,g,color);
  };
  const arcBand=(x,z,r,y,height,color,thickness=1.5)=>{
    const count=20;
    for(let i=0;i<count;i++){
      const a=-Math.PI/2+i*Math.PI/count,b=-Math.PI/2+(i+1)*Math.PI/count;
      const p=(angle,radius,yy)=>[x+Math.sin(angle)*radius,yy,z+Math.cos(angle)*radius];
      quad('structure',[p(a,r,y),p(b,r,y),p(b,r,y+height),p(a,r,y+height)],color);
      quad('structure',[p(b,r-thickness,y),p(a,r-thickness,y),p(a,r-thickness,y+height),p(b,r-thickness,y+height)],'#b3ad99');
      quad('structure',[p(a,r,y+height),p(b,r,y+height),p(b,r-thickness,y+height),p(a,r-thickness,y+height)],'#eee9d4');
      quad('structure',[p(b,r,y),p(a,r,y),p(a,r-thickness,y),p(b,r-thickness,y)],'#a5a18f');
    }
  };
  // The lawn/curb plinth defines an exact editable footprint; parking and
  // planting are part of this recipe rather than additional household objects.
  box('structure',0,.5,0,220,1,180,'#a3b189');
  box('structure',0,1.1,0,210,1.2,170,'#d1cbb7');
  box('details',0,1.9,-4,198,.4,158,'#737d7e');
  box('structure',-4,3,-25,162,2.2,104,'#d5ceba');
  box('structure',-4,8.5,-25,150,9,91,'#a9b4af');
  // Ground-floor glazing and pale support columns establish a real podium.
  box('glazing',-4,11,-25,146,15,88,'#405e67');
  for(const x of [-72,-47,-19,26,53,76])box('structure',x,11,21,3.6,18,4.2,'#ddd7c1');
  for(const z of [-64,-37,-9])for(const x of [-73,77])box('structure',x,11,z,3.6,18,4,'#ddd7c1');
  const wings=[{x:-43,z:-23,w:56,d:90},{x:5,z:-34,w:40,d:66},{x:51,z:-25,w:52,d:82}];
  const glassColors=['#789aaa','#6e91a3','#829eac','#618397','#8ca7b1','#7293a5'];
  for(let wingIndex=0;wingIndex<wings.length;wingIndex++){
    const p=wings[wingIndex],low=20,high=110;
    box('structure',p.x,65,p.z,p.w,90,p.d,'#435e70');
    // Ten panel courses across five upper floors, with opaque tonal reflection.
    const columns=Math.max(4,Math.round(p.w/8)),sideColumns=Math.round(p.d/9);
    for(let row=0;row<10;row++){
      const y0=low+row*9+.35,y1=y0+8.5;
      for(const front of [-1,1])for(let col=0;col<columns;col++){
        const x0=p.x-p.w/2+col*p.w/columns+.18,x1=p.x-p.w/2+(col+1)*p.w/columns-.18,z=p.z+front*(p.d/2+.08);
        const points=[[x0,y0,z],[x1,y0,z],[x1,y1,z],[x0,y1,z]];
        if(front<0)points.reverse();quad('glazing',points,glassColors[(col+row*2+wingIndex)%glassColors.length]);
      }
      for(const side of [-1,1])for(let col=0;col<sideColumns;col++){
        const z0=p.z-p.d/2+col*p.d/sideColumns+.18,z1=p.z-p.d/2+(col+1)*p.d/sideColumns-.18,x=p.x+side*(p.w/2+.08);
        const points=[[x,y0,z1],[x,y0,z0],[x,y1,z0],[x,y1,z1]];
        if(side<0)points.reverse();quad('glazing',points,glassColors[(col+row+wingIndex+2)%glassColors.length]);
      }
    }
    for(let floor=0;floor<=5;floor++){
      const yy=low+floor*18;
      for(const front of [-1,1])box('details',p.x,yy,p.z+front*(p.d/2+.22),p.w+.5,.8,.36,'#3b596a');
      for(const side of [-1,1])box('details',p.x+side*(p.w/2+.22),yy,p.z,.36,.8,p.d+.5,'#3b596a');
    }
    // Light membrane roofs, raised perimeter coping and mechanical details.
    box('structure',p.x,high+.9,p.z,p.w+1.8,1.8,p.d+1.8,'#e4dfc9');
    box('details',p.x,high+1.9,p.z,p.w-2,.4,p.d-2,'#bdbdb0');
    for(const front of [-1,1])box('structure',p.x,high+3,p.z+front*p.d/2,p.w+2,3.2,1.6,'#e7e1c9');
    for(const side of [-1,1])box('structure',p.x+side*p.w/2,high+3,p.z,1.6,3.2,p.d,'#e7e1c9');
  }
  // A pale cylindrical rotunda has five genuinely open balcony sections.
  // Opaque inset glazing supplies depth behind each opening; no alpha sorting.
  cylinder('glazing',6,64,14,13.5,104,'#35515d',28);
  for(let level=0;level<6;level++){
    const yy=18+level*18;
    cylinder('structure',6,yy,14,17.5,1.4,'#d6d0bb',28);
    arcBand(6,14,17.7,yy,4.7,'#ded9c5');
    if(level<5){
      for(const angle of [-Math.PI/2,-Math.PI/6,Math.PI/6,Math.PI/2]){
        const x=6+Math.sin(angle)*16.7,z=14+Math.cos(angle)*16.7;
        box('structure',x,yy+10,z,1.8,15,1.8,'#dcd6c1');
      }
      for(let i=0;i<=12;i++){
        const a=-Math.PI/2+i*Math.PI/12,x=6+Math.sin(a)*16.5,z=14+Math.cos(a)*16.5;
        beam('details',[x,yy+4.7,z],[x,yy+8,z],.17,'#566b6d');
        if(i<12){const b=a+Math.PI/12;beam('details',[x,yy+8,z],[6+Math.sin(b)*16.5,yy+8,14+Math.cos(b)*16.5],.22,'#839391');}
      }
    }
  }
  arcBand(6,14,17.7,111,11,'#e1dcc9');
  cylinder('structure',6,122.2,14,17.8,1.2,'#eee8d2',28);
  for(const yy of [115,119])arcBand(6,14,17.85,yy,.18,'#b6af99',.2);
  // Covered entry, glazed doors and a compact staircase toward +Z.
  box('structure',6,3.5,33,32,3,18,'#d9d1bb');
  for(let step=0;step<4;step++)box('structure',6,1.6+step*.65,46-step*2.2,29,1.2,3,'#d7ceba');
  box('structure',6,21.5,32,27,1.6,16,'#e3dbc3');
  for(const x of [-6,18])box('structure',x,12,38,1.5,18,1.5,'#d7d0b9');
  box('glazing',6,11.5,28.2,14,16,.6,'#426b79');
  for(const x of [-1.3,6,13.3])box('details',x,11.5,28.8,.35,16,.3,'#cfdbd5');
  for(const x of [4.7,7.3])box('details',x,10.8,29.2,.22,3,.4,'#e2e1ca');
  // Adjacent two-level deck: open ground bays, concrete top and parking marks.
  box('details',-30,2.3,61,144,.5,48,'#4e5d5e');
  box('structure',-30,12,61,148,2.8,52,'#c9c5b0');
  box('details',-30,13.6,61,144,.4,48,'#aaa995');
  for(const x of [-101,-77,-53,-29,-5,19,41])for(const z of [38,84])box('structure',x,7,z,2.6,9,2.6,'#c8c3ae');
  for(const z of [36,86]){
    box('structure',-30,15,z,148,2,1.6,'#e2dcc6');
    for(const yy of [17,19.2])box('details',-30,yy,z,147,.42,.42,'#798581');
    for(let x=-101;x<=41;x+=8)box('details',x,17.1,z,.42,5.2,.42,'#84938b');
  }
  for(const x of [-103,43])box('structure',x,15,61,1.6,2,50,'#e2dcc6');
  for(let x=-98;x<41;x+=12){
    for(const z of [45,77])box('details',x,13.86,z,.28,.06,15,'#f0e5c7');
  }
  for(const z of [52.5,69.5])box('details',-30,13.86,z,140,.06,.28,'#e8e0c5');
  // A few permanently parked tiny cars clarify the deck's scale.
  const cars=[[-91,43,'#799fb8'],[-55,77,'#d9ba82'],[-7,43,'#8ca99a'],[17,77,'#b68e9b']];
  for(const [x,z,color] of cars){
    box('details',x,15.6,z,7.7,3.2,13,color);box('glazing',x,17.6,z-.4,6.4,2.1,7,'#415e69');
    box('details',x,18.9,z-.5,6.6,.7,4.7,color);
    for(const dx of [-4,4])for(const dz of [-4,4])box('details',x+dx,14.5,z+dz,1.2,2,2.2,'#344246');
    for(const dx of [-2.5,2.5])box('details',x+dx,15.7,z+6.6,1.4,.7,.15,'#e9e2bd');
  }
  // Rooftop service boxes and fan grilles remain explicit, inexpensive art.
  for(const [x,z,r] of [[-47,-44,1],[-43,-13,1],[46,-39,1],[6,-48,.8]]){
    box('structure',x,114.5,z,15*r,5*r,12*r,'#c9c7b6');
    box('details',x,117.1,z,13*r,.3,10*r,'#89948e');
    for(const dx of [-3.5,3.5]){
      cylinder('details',x+dx*r,117.45,z,2.5*r,.3,'#4b6265',14);
      for(let i=0;i<4;i++){const a=i*Math.PI/2;beam('details',[x+dx*r,117.7,z],[x+dx*r+Math.cos(a)*2*r,117.7,z+Math.sin(a)*2*r],.2,'#aab7ac');}
    }
  }
  box('structure',5,117,-25,20,10,17,'#d1c9b4');
  box('structure',5,122.3,-25,21,1,18,'#e3ddc6');
  // Low planting islands and tall, irregular perimeter trees.
  const shrub=(x,y,z,r,color)=>{
    for(let i=0;i<3;i++){
      const a=i*2.399,g=new THREE.IcosahedronGeometry(r*(.6+i*.04),1);
      g.scale(1,.8,1);g.translate(x+Math.cos(a)*r*.33,y+r*.4,z+Math.sin(a)*r*.33);add('garden',g,i%2?'#8ca674':color);
    }
  };
  for(const [x,z,w,d] of [[91,-53,16,43],[-92,-32,15,42],[92,34,15,31],[-36,-81,80,8]]){
    box('structure',x,3,z,w,2,d,'#d8d0b7');box('garden',x,4.1,z,w-2,.3,d-2,'#788a5f');
    const count=w>d?Math.floor(w/12):Math.floor(d/11);
    for(let i=0;i<count;i++)shrub(x+(w>d?(i-(count-1)/2)*11:0),4.4,z+(d>w?(i-(count-1)/2)*10:0),4,'#678455');
  }
  for(const [x,z,height,r] of [[92,-64,24,8],[-93,-46,26,8.5],[94,34,23,7],[-70,-81,25,8],[70,-76,25,7]]){
    add('garden',new THREE.CylinderGeometry(.65,1,height,7).translate(x,height*.5+3,z),'#8e7957');
    shrub(x,height*.72,z,r,'#6c8d60');shrub(x+1,height*.95,z-1,r*.65,'#849e69');
  }
  // Bicycle rack, benches and bollards are quiet close-up details.
  for(const x of [48,63]){
    box('details',x,4.6,30,11,1.1,3.5,'#a8835e');
    for(const dx of [-4,4])box('details',x+dx,3.2,30,.7,2.2,2.2,'#5b6e65');
    box('details',x,7,28.6,11,2.5,.7,'#ae8b62');
  }
  for(const x of [-10,22,78])cylinder('details',x,4.6,52,.65,4.6,'#697d79',10);
  const root=new THREE.Group();root.name='storybook-coastal-office-campus';
  for(const [role,parts] of Object.entries(layers)){
    const geometries=parts.map(([source,color])=>{
      const g=source.index?source.toNonIndexed():source;if(g!==source)source.dispose();g.deleteAttribute('uv');
      const rgb=new THREE.Color(color),values=new Float32Array(g.getAttribute('position').count*3);
      for(let i=0;i<values.length;i+=3)rgb.toArray(values,i);g.setAttribute('color',new THREE.BufferAttribute(values,3));return g;
    });
    const geometry=mergeGeometries(geometries);for(const g of geometries)g.dispose();
    geometry.scale(w/220,sy,h/180);geometry.computeBoundingBox();
    const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:role==='glazing'?.32:.85,metalness:role==='glazing'?.16:0});
    const mesh=new THREE.Mesh(geometry,material);mesh.name='office-'+role;mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
  }
  root.userData.sceneryOfficeCampus=true;
  return {root,anchorY:65*sy};
}
