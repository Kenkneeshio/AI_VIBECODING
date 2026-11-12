import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const size = (value, fallback) => Number.isFinite(value) && value > 0 ? value : fallback;
const C = Object.freeze({wall:'#caab77',trim:'#654f43',cream:'#eee7d3',roof:'#75564d',
  roofLight:'#87685a',roofDark:'#624b46',glass:'#547787',grass:'#9aab76',soil:'#826b50',
  paving:'#c5c1ab',brick:'#a36855',leaves:'#698653'});

function finish(parts) {
  const geometries=parts.map(([source,color])=>{
    const geometry=source.index?source.toNonIndexed():source;
    if(geometry!==source)source.dispose();
    geometry.deleteAttribute('uv');
    const colors=new Float32Array(geometry.getAttribute('position').count*3);
    const shade=new THREE.Color(color);
    for(let i=0;i<colors.length;i+=3)shade.toArray(colors,i);
    geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));
    return geometry;
  });
  const merged=mergeGeometries(geometries);
  for(const geometry of geometries)geometry.dispose();
  return merged;
}

/** Coastal ranch miniature: +Z front, Y=0 ground; yard included in w/h. */
export function makeStorybookSceneryHouse(item) {
  if(item?.type!=='sceneryRanchHouse')return null;
  const width=size(item.w,130),depth=size(item.h,176),sy=Math.min(width/130,depth/176);
  const shell=[],roof=[],glass=[],garden=[];
  const add=(parts,geometry,color)=>parts.push([geometry,color]);
  const box=(parts,x,y,z,w,h,d,color)=>add(parts,new THREE.BoxGeometry(w,h,d).translate(x,y,z),color);
  const quad=(parts,vertices,color)=>{
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices.flat(),3));
    geometry.setIndex([0,1,2,0,2,3]);geometry.computeVertexNormals();add(parts,geometry,color);
  };
  const triangle=(parts,a,b,c,color)=>{
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute('position',new THREE.Float32BufferAttribute([...a,...b,...c],3));
    geometry.computeVertexNormals();add(parts,geometry,color);
  };
  const beam=(parts,a,b,thickness,color)=>{
    const from=new THREE.Vector3(...a),to=new THREE.Vector3(...b),direction=to.clone().sub(from);
    const geometry=new THREE.BoxGeometry(thickness,direction.length(),thickness);
    geometry.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize()));
    geometry.translate(...from.add(to).multiplyScalar(.5).toArray());add(parts,geometry,color);
  };
  // A slender lawn plinth keeps selection/export bounds exact without hiding
  // the street beneath an arbitrary large landscape tile.
  // The building retains its authored proportions. Sixty extra units behind
  // the former yard make room for the rear garden; the final transform recenters it.
  box(shell,0,.4,-30,130,.8,176,C.grass);
  box(shell,-32.5,1.1,39,49,1.4,38,C.paving);
  for(const z of [34,46])box(shell,-32.5,1.81,z,48,.03,.16,'#a6a18f');
  box(shell,-32.5,1.81,40,.18,.03,35,'#aaa694');
  box(shell,1,1.3,31,14,1.8,47,'#d8ceb8');
  box(shell,2,2.3,15,15,2,10,'#cfbea0');
  box(shell,2,3.5,10,15,2.2,5,'#e4d5ba');
  // A broad second driveway meets the front edge beside the garage approach.
  box(shell,35,1.1,33,54,1.4,50,'#ccc7b1');
  for(const z of [27,42])box(shell,35,1.81,z,53,.03,.16,'#ada994');
  box(shell,35,1.81,33,.18,.03,49,'#ada994');
  // Main horizontal ranch volume and projecting front-gabled garage.
  box(shell,2,16,-18,108,28,52,C.wall);
  box(shell,-32.5,16,4,43,28,52,C.wall);
  box(shell,2,2,-18,109,2,53,'#ae926e');
  box(shell,-32.5,2,5,44,2,53,'#ae926e');
  // Main gable ends, with the long ridge left/right.
  for(const [x,sign] of [[-52,-1],[56,1]]){
    const a=[x,30,-44],b=[x,42,-18],c=[x,30,8];
    triangle(shell,...(sign>0?[a,b,c]:[c,b,a]),C.wall);
  }
  // Each roof is a grid of coplanar shingle patches, merged into one mesh.
  // Row-edge lips supply subtle real highlights without a texture download.
  const slope=(start,end,across,rows=12)=>{
    for(let row=0;row<rows;row++){
      const t0=row/rows,t1=(row+1)/rows;
      const a=start.map((v,i)=>THREE.MathUtils.lerp(v,end[i],t0));
      const b=start.map((v,i)=>THREE.MathUtils.lerp(v,end[i],t1));
      const cuts=19;
      for(let column=0;column<=cuts;column++){
        const stagger=(row%2)*.5;
        const u0=Math.max(0,(column-stagger)/cuts),u1=Math.min(1,(column+1-stagger)/cuts);
        if(u1<=u0)continue;
        const p=(base,u)=>base.map((v,i)=>v+across[i]*u);
        const vertices=[p(a,u0),p(b,u0),p(b,u1),p(a,u1)];
        const normal=new THREE.Vector3().subVectors(new THREE.Vector3(...vertices[1]),new THREE.Vector3(...vertices[0])).cross(new THREE.Vector3().subVectors(new THREE.Vector3(...vertices[2]),new THREE.Vector3(...vertices[0])));
        if(normal.y<0)vertices.reverse();
        const palette=['#765b51','#795e53','#72584f','#7b5f53','#755a50'];
        quad(roof,vertices,palette[(row*11+column*7)%palette.length]);
      }
      if(row>0)beam(roof,a,a.map((v,i)=>v+across[i]),.09,'#665147');
    }
  };
  slope([-57,42.8,-18],[-57,30.8,12],[118,0,0]);
  slope([-57,42.8,-18],[-57,30.8,-48],[118,0,0]);
  for(const z of [-48,12])box(roof,2,30.4,z,118,1.6,1.7,C.trim);
  box(roof,2,42.8,-18,119,.9,1.5,'#9c7b62');
  for(const x of [-57,61]){
    beam(roof,[x,30.4,-48],[x,42.8,-18],1.6,C.trim);
    beam(roof,[x,42.8,-18],[x,30.4,12],1.6,C.trim);
  }
  // Garage ridge meets the main ridge; no floating seams or detached eaves.
  triangle(shell,[-54,30,30],[-11,30,30],[-32.5,42,30],C.wall);
  slope([-32.5,43.2,-18],[-57.5,30.8,-18],[0,0,52],10);
  slope([-32.5,43.2,-18],[-7.5,30.8,-18],[0,0,52],10);
  for(const x of [-57.5,-7.5])box(roof,x,30.5,8,1.5,1.6,53,C.trim);
  for(const x of [-57.5,-7.5])beam(roof,[x,30.4,34],[-32.5,43.2,34],1.7,C.trim);
  box(roof,-32.5,43.2,8,1.6,1,53,'#9c7b62');
  // Ivory sectional garage, inset panels and dark separation lines.
  box(shell,-32.5,15,30.08,37,24.5,.35,'#6d604e');
  box(shell,-32.5,15,30.35,35.5,23,.35,C.cream);
  for(let row=0;row<4;row++)for(let column=0;column<4;column++){
    box(shell,-45.5+column*8.65,6.2+row*5.7,30.57,7.8,4.6,.12,'#d1cbb9');
    box(shell,-45.5+column*8.65,6.4+row*5.7,30.65,7.1,3.8,.08,'#ece7d8');
  }
  for(const x of [-51.4,-13.6])box(shell,x,15.2,30.7,1.6,26,.8,'#e6d9bc');
  box(shell,-32.5,28.1,30.7,39.5,1.7,.8,'#e6d9bc');
  box(shell,-32.5,13,30.83,3,.55,.2,'#7c776c');
  // Small gable vent is an opening with a triangle surround and louvers.
  triangle(shell,[-36.5,33,30.18],[-28.5,33,30.18],[-32.5,37.9,30.18],C.trim);
  for(let row=0;row<3;row++)box(shell,-32.5,33.8+row*.9,30.4,6-row*1.5,.28,.25,'#c9b795');
  // Recessed entry reads as a shaded porch, with paneled door and sidelights.
  box(shell,2,16,8.08,15,25,.3,'#7f684b');
  box(shell,2,15,8.4,8.4,23,.45,'#74523d');
  for(const yy of [9.5,20])box(shell,2,yy,8.68,6.3,8.4,.15,'#865f45');
  box(shell,5.1,15,8.9,.5,1.8,.4,'#cebd8d');
  for(const x of [-4.4,8.4])box(shell,x,16.2,8.5,1.4,25.6,.6,'#d8c193');
  // Broad three-pane living window, opaque blue glazing avoids sorting leaks.
  box(shell,33,18.6,8.18,31.7,14.8,.6,'#6f654e');
  box(glass,33,18.6,8.55,29.8,13.1,.2,C.glass);
  for(const x of [17.6,26.6,39.4,48.4])box(shell,x,18.6,8.95,1,14.8,.65,C.cream);
  for(const yy of [11.2,26])box(shell,33,yy,8.95,31.8,1,.65,C.cream);
  box(shell,33,10.7,9.5,33,1.3,2.6,'#e5d8b7');
  for(const x of [22,33,43.5])quad(glass,[[x-2,13,8.68],[x+1,13,8.68],[x+4,24,8.68],[x+1,24,8.68]],'#88a5ad');
  // Side window and stucco chimney add legibility at free-view angles.
  box(shell,56.15,18,-22,.5,12,18,'#e8dfc7');
  box(glass,56.45,18,-22,.2,10.2,16.2,C.glass);
  box(shell,56.65,18,-22,.3,11,.8,C.cream);
  box(shell,45,43,-21,7,22,8,'#c3a57b');
  box(shell,45,54,-21,8.6,1.8,9.6,'#d9c39b');
  box(shell,45,55,-21,5.8,.4,6.8,'#67564a');
  // A compact L-shaped rear-roof solar array. Its blue cells follow the actual
  // roof plane; no floating rectangular panel or runtime texture is needed.
  const solarY=z=>42.8+(z+18)*.4+.35;
  for(let row=0;row<3;row++)for(let column=0;column<6;column++){
    if((row===0&&column<2)||(row===2&&column===5))continue;
    const x=6+column*7.2,z=-43+row*6.8,w=6.6,d=6.2;
    const plane=(xx,zz,ww,dd,lift,color,parts)=>quad(parts,[[xx,solarY(zz)+lift,zz],[xx,solarY(zz+dd)+lift,zz+dd],
      [xx+ww,solarY(zz+dd)+lift,zz+dd],[xx+ww,solarY(zz)+lift,zz]],color);
    plane(x-.2,z-.2,w+.4,d+.4,0,'#6f7980',roof);
    plane(x,z,w,d,.07,'#304d64',glass);
    for(let ix=1;ix<3;ix++)plane(x+ix*w/3-.035,z,.07,d,.09,'#668395',glass);
    for(let iz=1;iz<4;iz++)plane(x,z+iz*d/4-.025,w,.05,.09,'#668395',glass);
  }
  // Enclosed rear garden: terracotta walk loop, planted beds, utility shed,
  // and an irregular canopy. These are constituent parts of one house recipe.
  box(garden,0,.95,-88,123,.3,56,'#9b7757');
  for(const [x,z,w,d] of [[0,-113,120,5],[-59,-88,5,53],[59,-88,5,53],[0,-62,120,5],[7,-87,5,47]]){
    box(garden,x,1.25,z,w,.4,d,'#b67e61');
    const alongX=w>d,length=alongX?w:d;
    for(let offset=-length/2+3;offset<length/2;offset+=6)
      box(garden,x+(alongX?offset:0),1.48,z+(alongX?0:offset),alongX?.12:w,.04,alongX?d:.12,'#d3a582');
  }
  const planter=(cx,cz,w,d,height)=>{
    box(garden,cx,1+height*.5,cz,w,height,d,'#b6946c');
    box(garden,cx,height+1.1,cz,w+.6,.5,d+.6,'#dfc299');
    box(garden,cx,height+1.4,cz,w-2,.12,d-2,'#735840');
  };
  planter(-21,-79,52,18,2.8);planter(34,-96,35,24,2.8);
  // Timber boundary panels are visibly continuous, with separate cap rails.
  for(const x of [-63,63]){
    box(garden,x,6,-88,1.2,10.5,60,'#a28d6b');
    box(garden,x,11.5,-88,1.6,.8,60,'#c3ac85');
    for(let z=-116;z<-58;z+=7)box(garden,x,6,z,1.5,11,1.2,'#8f7758');
  }
  box(garden,0,6,-117,126,10.5,1.2,'#a28d6b');
  box(garden,0,11.5,-117,126,.8,1.6,'#c3ac85');
  for(let x=-60;x<=60;x+=8)box(garden,x,6,-117,1.1,11,1.5,'#8f7758');
  box(garden,-44,8,-101,19,14,20,'#c6b08a');
  box(garden,-44,15.5,-101,22,1.2,23,'#8c7964');
  box(garden,-44,7.7,-90.8,8,12,.35,'#a08765');
  box(garden,-41,8,-90.5,.5,1,.3,'#e6d3a5');
  for(const x of [-50,-46,-42,-38])box(garden,x,8,-90.7,.18,13,.1,'#a48f6e');
  const shrub=(x,y,z,r,shade)=>{
    for(let i=0;i<4;i++){
      const a=i*2.399,geometry=new THREE.IcosahedronGeometry(r*(.56+(i%2)*.09),1);
      geometry.scale(1,.8,1);geometry.translate(x+Math.cos(a)*r*.42,y+r*.5+(i%2)*r*.15,z+Math.sin(a)*r*.42);
      add(garden,geometry,i%2?shade:C.leaves);
    }
  };
  const agave=(x,y,z,r)=>{
    for(let i=0;i<9;i++){
      const a=i*Math.PI*2/9,tip=[x+Math.cos(a)*r,y+r*(.45+(i%3)*.14),z+Math.sin(a)*r];
      const left=[x+Math.cos(a-.9)*r*.2,y+.15,z+Math.sin(a-.9)*r*.2];
      const right=[x+Math.cos(a+.9)*r*.2,y+.15,z+Math.sin(a+.9)*r*.2];
      const ridge=[x+Math.cos(a)*r*.43,y+r*.53,z+Math.sin(a)*r*.43];
      triangle(garden,left,tip,ridge,i%2?'#78997a':'#91a78c');
      triangle(garden,tip,right,ridge,'#587e67');
    }
  };
  for(const [x,z,r] of [[-44,-78,5.3],[-28,-79,6],[-12,-78,5],[25,-97,6],[43,-99,5.6],[44,-89,4.5],[-18,-102,6],[25,-69,6]])
    shrub(x,4.5,z,r,x<0?'#8a9b64':'#78905c');
  agave(-7,1.5,-107,6);agave(46,1.5,-68,7);
  const tree=(x,z,height,r)=>{
    add(garden,new THREE.CylinderGeometry(.9,1.4,height,7).translate(x,height*.5+1,z),'#856d50');
    beam(garden,[x,height*.6,z],[x-r*.3,height*.95,z+r*.23],.9,'#856d50');
    shrub(x,height*.63,z,r,'#7f9861');
  };
  tree(-20,-96,20,10);tree(44,-108,22,10);tree(48,-79,15,7.5);
  for(let i=0;i<16;i++){
    const x=-44+i*2.3,z=-76+Math.sin(i*2.4)*2.4,y=7+(i%3)*.5;
    add(garden,new THREE.IcosahedronGeometry(.6,0).translate(x,y,z),['#eee0a3','#c78490','#e7be76'][i%3]);
  }
  // Side grass and a few low stones ground the miniature without neighbors.
  shrub(-61,1,7,3,'#8ea76e');shrub(61,1,-32,3,'#7b976b');
  const root=new THREE.Group();root.name='storybook-coastal-ranch';
  for(const [role,parts,roughness] of [['shell',shell,.88],['roof',roof,.96],['glazing',glass,.3],['garden',garden,.9]]){
    const geometry=finish(parts);geometry.translate(0,0,30);geometry.scale(width/130,sy,depth/176);geometry.computeBoundingBox();
    const material=new THREE.MeshStandardMaterial({vertexColors:true,roughness,metalness:role==='glazing'?.08:0,side:role==='garden'?THREE.DoubleSide:THREE.FrontSide});
    const mesh=new THREE.Mesh(geometry,material);mesh.name='ranch-'+role;mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);
  }
  root.userData.sceneryHouse=true;
  return {root,anchorY:25*sy};
}
