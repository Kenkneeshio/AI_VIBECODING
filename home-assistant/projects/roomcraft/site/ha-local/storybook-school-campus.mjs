import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const size=(value,fallback)=>Number.isFinite(value)&&value>0?value:fallback;
const palette={wall:'#e4d8bb',roof:'#ece9d9',trim:'#847a66',glass:'#5a8390',navy:'#475d79',paving:'#d2ccb6',asphalt:'#85888a',grass:'#8fa572'};

/** Reference-informed elementary campus; +Z front, Y=0 support, yard in w/h. */
export function makeStorybookSchoolCampus(item){
  if(item?.type!=='scenerySchoolCampus')return null;
  const w=size(item.w,300),h=size(item.h,240),sy=Math.min(w/300,h/240);
  const layers={structure:[],glazing:[],details:[],garden:[]};
  const add=(role,g,color)=>layers[role].push([g,color]);
  const box=(role,x,y,z,width,height,depth,color)=>add(role,new THREE.BoxGeometry(width,height,depth).translate(x,y,z),color);
  const cylinder=(role,x,y,z,r,height,color,sides=8)=>add(role,new THREE.CylinderGeometry(r,r,height,sides).translate(x,y,z),color);
  const beam=(role,a,b,thickness,color)=>{
    const from=new THREE.Vector3(...a),to=new THREE.Vector3(...b),v=to.clone().sub(from);
    const g=new THREE.BoxGeometry(thickness,v.length(),thickness);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize()));
    g.translate(...from.add(to).multiplyScalar(.5).toArray());add(role,g,color);
  };
  const quad=(role,points,color)=>{
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(points.flat(),3));
    g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();add(role,g,color);
  };
  const ring=(role,x,y,z,outer,inner,color)=>{
    const g=new THREE.RingGeometry(inner,outer,28);g.rotateX(-Math.PI/2);g.translate(x,y,z);add(role,g,color);
  };
  // Two exact support planes define the complete editable parcel and its
  // centered, unobstructed street connection. All authored details stay inside.
  box('garden',0,.4,0,300,.8,240,palette.grass);
  box('structure',0,1,98,278,1.2,44,palette.asphalt);
  box('structure',0,1.65,77,280,.4,4,palette.paving);
  // The entrance cuts through the front sidewalk, rather than crossing a curb.
  for(const x of [-76.5,76.5])box('structure',x,1.65,117,125,.4,3,palette.paving);
  // Parking island and marked bays leave clear circulation above and below.
  box('structure',0,1.8,98,202,.8,16,palette.paving);
  box('structure',0,2.25,98,194,.1,11,'#92918a');
  for(let x=-90;x<=90;x+=15){
    box('details',x,2.33,98,.45,.04,11,'#f0e6cc');
    box('details',x+7,2.35,102,8,.12,.75,'#ded6be');
  }
  for(const x of [-122,122]){
    cylinder('structure',x,1.7,98,9,.8,palette.paving,24);
    cylinder('garden',x,2.15,98,7.6,.2,palette.grass,24);
  }
  // Crosswalk, gate forecourt and a planted campus entrance.
  box('structure',0,1.3,61,24,1,31,palette.paving);
  for(let x=-10;x<=10;x+=4)box('details',x,1.65,87,2,.06,10,'#eee7d3');
  for(const x of [-16,16])box('structure',x,6.2,65,3,9.2,3,'#bdab8a');
  box('details',0,11.2,65,35,1.4,2.4,palette.navy);

  const wing=(cx,cz,bw,bd,height)=>{
    box('structure',cx,1.8+height*.5,cz,bw,height,bd,palette.wall);
    box('structure',cx,1.8,cz,bw+.8,2,bd+.8,'#b5a58b');
    box('structure',cx,height+2.2,cz,bw+2,1.6,bd+2,palette.trim);
    box('structure',cx,height+3.1,cz,bw+1.4,.8,bd+1.4,palette.roof);
    box('structure',cx,height+3.55,cz,bw-3,.12,bd-3,'#dedccd');
    // Facade glazing is opaque and inset: clean from every free-view angle.
    for(const z of [cz-bd/2-.06,cz+bd/2+.06]){
      const front=z>cz?1:-1;
      for(let x=cx-bw/2+6;x<=cx+bw/2-6;x+=12){
        box('glazing',x,10,z,7.8,6.1,.18,palette.glass);
        for(const yy of [6.8,13.2])box('details',x,yy,z+front*.18,8.4,.4,.25,'#f5ebd5');
        box('details',x,10,z+front*.18,.35,6.4,.25,'#ded8c2');
      }
    }
    for(const x of [cx-bw/2-.06,cx+bw/2+.06])for(let z=cz-bd/2+7;z<=cz+bd/2-7;z+=13){
      box('glazing',x,10,z,.18,6.1,8,palette.glass);
      box('details',x+(x>cx?.18:-.18),10,z,.25,6.5,.35,'#e3dac5');
    }
    // Fine roof seams, equipment curbs and vents give a readable flat roof.
    for(let x=cx-bw/2+12;x<cx+bw/2-6;x+=14)box('details',x,height+3.63,cz,.13,.03,bd-5,'#cbc8b9');
    for(const dx of [-bw*.22,bw*.22]){
      box('details',cx+dx,height+4.3,cz,4.5,1.3,4,'#aaa99d');
      box('details',cx+dx,height+5,cz,4.7,.25,4.2,'#dad9cb');
      for(let n=-1;n<=1;n++)box('details',cx+dx+n,height+5.15,cz,.3,.07,3,'#888e88');
    }
  };
  // A low central block and long courtyard wings follow the observed campus
  // grouping; individual openings/equipment are original stylized details.
  wing(-70,52,68,25,15);wing(70,52,68,25,15);
  wing(-89,-7,26,91,15);wing(89,-7,26,91,15);
  wing(0,-48,148,25,15);wing(0,3,67,48,17);
  // Doors beside the public forecourt and covered courtyard circulation.
  for(const x of [-46,46]){
    box('glazing',x,8,64.66,8,12,.25,'#506974');
    box('details',x,8,64.85,.35,12,.25,'#ddd9ca');
    box('details',x+2,7,65,1,.4,.3,'#d7d8bf');
  }
  for(const [x,z,bw,bd] of [[-63,-5,10,76],[63,-5,10,76],[0,-29,119,10]]){
    box('structure',x,1.2,z,bw,1,bd,palette.paving);
    box('structure',x,12.5,z,bw,1.1,bd,'#b9bbab');
    box('structure',x,13.15,z,bw+.8,.3,bd+.8,'#e0dfce');
    const alongX=bw>bd,count=Math.floor((alongX?bw:bd)/16);
    for(let i=0;i<=count;i++){
      const t=(i/count-.5)*((alongX?bw:bd)-5);
      box('details',x+(alongX?t:0),6.8,z+(alongX?0:t),.9,11,.9,'#a49f8a');
    }
  }
  // Rear hardcourt, grass playfield and two visually distinct fenced play zones.
  box('structure',60,1.2,-91,157,.8,48,'#a2a49a');
  box('garden',96,1.65,-92,77,.08,40,'#92ad75');
  box('structure',16,1.65,-92,64,.09,39,'#a59079');
  for(const z of [-109,-75])box('details',16,1.73,z,56,.04,.45,'#eee7d5');
  for(const x of [-12,44])box('details',x,1.73,-92,.45,.04,34,'#eee7d5');
  box('details',16,1.73,-92,56,.04,.45,'#eee7d5');ring('details',16,1.74,-92,6.2,5.8,'#eee7d5');
  for(const z of [-110,-74]){
    cylinder('details',16,7,z,.45,11,'#788d89');
    box('details',16,12,z,7,4,.5,'#e5e2d1');
    box('details',16,11.5,z+(z<-90?1.8:-1.8),3,.25,3,'#c68365');
  }
  box('structure',-88,1.25,-88,82,1,49,'#ccb687');
  box('garden',-88,1.8,-88,78,.12,45,'#c6a575');
  box('structure',-128,1.2,47,31,.8,43,'#bac7ad');
  const fence=(x,z,length,alongX,open=false)=>{
    const count=Math.round(length/5);
    for(let i=0;i<=count;i++){
      const at=(i/count-.5)*length;if(open&&Math.abs(at)<9)continue;
      box('details',x+(alongX?at:0),4.8,z+(alongX?0:at),.45,6,.45,'#6b8279');
    }
    for(const y of [2.4,7.5]){
      if(!open)box('details',x,y,z,alongX?length:.45,.45,alongX?.45:length,'#71897e');
      else for(const sign of [-1,1])box('details',x+(alongX?sign*(length/4+4.5):0),y,z+(alongX?0:sign*(length/4+4.5)),alongX?length/2-9:.45,.45,alongX?.45:length/2-9,'#71897e');
    }
  };
  fence(-88,-112,82,true);fence(-129,-88,48,false);fence(-47,-88,48,false);fence(-88,-64,82,true,true);
  fence(-144,47,43,false);fence(-128,68.5,31,true);fence(-128,25.5,31,true,true);
  // Junior play corner: small navy canopy with low steps and a tiny slide.
  for(const x of [-139,-117])for(const z of [32,60])cylinder('details',x,8,z,.55,13,'#9d9b80');
  const shadeRoof=new THREE.ConeGeometry(18.4,6,4);shadeRoof.rotateY(Math.PI/4);shadeRoof.scale(1,1,1.23);shadeRoof.translate(-128,18,46);add('details',shadeRoof,palette.navy);
  for(const [x,z] of [[-136,41],[-125,41],[-136,51],[-125,51]])cylinder('details',x,4,z,.55,5,'#cba058');
  box('details',-130.5,6.4,46,12,1,11,'#d8bc7b');
  box('details',-128,7,43,5,4,1,'#c06e66');
  quad('details',[[-133,6.8,52],[-128,6.8,52],[-128,2.4,63],[-133,2.4,63]],'#80afa9');
  // Main play area: twin towers, bridge, wavy slide, climbing net and swings.
  for(const x of [-113,-103,-91,-81])for(const z of [-96,-86])cylinder('details',x,7.2,z,.65,11,'#bbaa74');
  for(const x of [-108,-86]){
    box('details',x,8.3,-91,12,1.1,12,'#dca867');
    const cone=new THREE.ConeGeometry(9,6,4);cone.rotateY(Math.PI/4);cone.translate(x,18,-91);add('details',cone,x<-100?'#547e91':'#a96663');
    for(const xx of [x-5.3,x+5.3])box('details',xx,11.4,-91,.7,5.5,11,'#d6b870');
    for(const zz of [-96,-86])box('details',x,11.5,zz,10,.6,.6,'#b7c1a6');
  }
  box('details',-97,8.5,-91,10,.7,7,'#bb9768');
  for(const z of [-94.5,-87.5]){box('details',-97,11.2,z,11,.55,.55,'#729a94');for(let x=-101;x<=-93;x+=2.5)box('details',x,10,z,.4,3,.4,'#c7b788');}
  // Sloping slide strip, raised sides and rolled exit lip, all opaque geometry.
  const slide=[[ -84,8.9,-85],[-84,8.1,-81],[-84,4.2,-77],[-84,2.3,-72]];
  for(let i=0;i<slide.length-1;i++){
    const a=slide[i],b=slide[i+1];quad('details',[[a[0]-3,a[1],a[2]],[a[0]+3,a[1],a[2]],[b[0]+3,b[1],b[2]],[b[0]-3,b[1],b[2]]],'#7fa9ae');
    for(const dx of [-3.2,3.2])beam('details',[a[0]+dx,a[1]+.7,a[2]],[b[0]+dx,b[1]+.7,b[2]],.65,'#59969f');
  }
  for(let i=0;i<6;i++)box('details',-111,2.4+i*.9,-78-i*1.3,7,.7,1.7,'#cfab70');
  for(const x of [-66,-52]){
    beam('details',[x,2,-107],[x,14,-99],.7,'#6e8d85');beam('details',[x,14,-99],[x,2,-91],.7,'#6e8d85');
  }
  beam('details',[-67,14,-99],[-51,14,-99],.9,'#b58a68');
  for(const x of [-62,-56]){
    for(const dx of [-1.6,1.6])beam('details',[x+dx,13.5,-99],[x+dx,5,-98],.15,'#6f7771');
    box('details',x,4.8,-98,4,.6,2,'#ba806c');
  }
  // Compact climbing ladder/net and a painted stepping-stone path.
  for(const x of [-120,-114])beam('details',[x,2,-106],[x,10,-99],.5,'#749591');
  for(let i=0;i<6;i++)beam('details',[-120,2+i*1.5,-106+i*1.3],[-114,2+i*1.5,-106+i*1.3],.35,'#cfb283');
  for(let i=0;i<6;i++)cylinder('details',-106+i*6,2.4,-106+(i%2)*2,1.8,1.1,['#ccaa6d','#8caaa1','#bb8380'][i%3],10);
  // Lawn field goal, boundary fencing and a shaded picnic corner.
  for(const x of [70,122]){for(const z of [-101,-83])box('details',x,6.3,z,.45,8.5,.45,'#e8e4d0');box('details',x,10.5,-92,.45,.45,18,'#e8e4d0');}
  fence(0,-117,284,true);fence(146,-5,213,false);fence(-146,-5,213,false);
  for(const x of [53,72]){
    box('details',x,4,34,12,.8,5,'#bba077');
    for(const z of [29,39])box('details',x,2.9,z,12,.65,2,'#c7af82');
    for(const dx of [-4,4])box('details',x+dx,2.5,34,.6,3,10,'#75887c');
  }
  const shrub=(x,y,z,r)=>{
    for(let i=0;i<3;i++){
      const a=i*2.399,g=new THREE.IcosahedronGeometry(r*(.6+i*.07),1);
      g.scale(1,.8,1);g.translate(x+Math.cos(a)*r*.31,y+r*.4,z+Math.sin(a)*r*.31);add('garden',g,['#6f8e5e','#86a16d','#96ae7a'][i]);
    }
  };
  for(const [x,z] of [[-122,98],[122,98],[-135,-51],[136,-48],[-135,7],[136,12],[-24,44],[24,44],[-42,-72],[48,65]]){
    cylinder('garden',x,8,z,.8,13,'#9b8967');shrub(x,12,z,7.2);shrub(x+1,17,z-1,4.7);
  }
  for(const [x,z] of [[-47,74],[47,74],[-32,31],[32,31],[-111,2],[111,1],[-20,-68],[137,55]])shrub(x,1.2,z,4);
  // Simple plinth sign and flag add miniature scale without private identifiers.
  box('structure',74,4.2,73,22,5.2,2.5,'#c3b391');
  box('details',74,5.8,74.3,16,.5,.1,'#9b8266');
  cylinder('details',21,16,64,.38,32,'#aeb9ac');
  quad('details',[[21,30,64],[30,29,64],[30,23.5,64],[21,24.5,64]],'#7b99ad');
  const root=new THREE.Group();root.name='storybook-coastal-elementary-campus';
  for(const [role,parts] of Object.entries(layers)){
    const geometries=parts.map(([source,color])=>{
      const g=source.index?source.toNonIndexed():source;if(g!==source)source.dispose();g.deleteAttribute('uv');
      const rgb=new THREE.Color(color),values=new Float32Array(g.getAttribute('position').count*3);
      for(let i=0;i<values.length;i+=3)rgb.toArray(values,i);g.setAttribute('color',new THREE.BufferAttribute(values,3));return g;
    });
    const geometry=mergeGeometries(geometries);for(const g of geometries)g.dispose();
    geometry.scale(w/300,sy,h/240);geometry.computeBoundingBox();
    const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness:role==='glazing'?.32:.9,metalness:role==='glazing'?.08:0,side:role==='details'?THREE.DoubleSide:THREE.FrontSide});
    const mesh=new THREE.Mesh(geometry,material);mesh.name='school-'+role;mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
  }
  root.userData.scenerySchoolCampus=true;
  return {root,anchorY:18*sy};
}
