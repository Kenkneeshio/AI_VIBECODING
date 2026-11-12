import {BufferGeometry,Float32BufferAttribute,MathUtils} from 'three';
import polygonClipping from 'polygon-clipping';

const {clamp,lerp}=MathUtils;
const WALK=26,CURB=4,CORNER=40;
const TYPES=new Set(['garageDoor','sceneryRanchHouse','stairs']);
const add=(a,b,s=1)=>({x:a.x+b.x*s,z:a.z+b.z*s});
const dot=(a,b)=>a.x*b.x+a.z*b.z;
const delta=(a,b)=>({x:a.x-b.x,z:a.z-b.z});
const mix=(a,b,t)=>({x:lerp(a.x,b.x,t),z:lerp(a.z,b.z,t)});
const ring=points=>[...points.map(p=>[p.x,p.z]),[points[0].x,points[0].z]];
const bounds=points=>({minX:Math.min(...points.map(p=>p.x)),maxX:Math.max(...points.map(p=>p.x)),
  minZ:Math.min(...points.map(p=>p.z)),maxZ:Math.max(...points.map(p=>p.z))});
const sample=(street,x,z)=>street.sample?.(x,z)??{x,z,yaw:0};

function rectangle({x,z,angle=0,item},margin=0) {
  const across={x:Math.cos(angle),z:Math.sin(angle)},along={x:-Math.sin(angle),z:Math.cos(angle)};
  return [[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,v])=>
    add(add({x,z},across,u*(item.w/2+margin)),along,v*(item.h/2+margin)));
}

function overlaps(a,b) {
  return polygonClipping.intersection([ring(a)],[ring(b)]).length>0;
}

function pointInside(points,x,z,margin=0) {
  let inside=false;
  for(let i=0,j=points.length-1;i<points.length;j=i++) {
    const a=points[j],b=points[i],dx=b.x-a.x,dz=b.z-a.z;
    const t=clamp(((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz||1),0,1);
    if(Math.hypot(x-a.x-t*dx,z-a.z-t*dz)<=margin)return true;
    if((a.z>z)!==(b.z>z)&&x<(b.x-a.x)*(z-a.z)/(b.z-a.z)+a.x)inside=!inside;
  }
  return inside;
}

function blockedPolygons(plan,owner,groundY) {
  const result=(plan.rooms??[]).filter(room=>room.points?.length>=3).map(room=>room.points.map(p=>({x:p.x,z:p.y})));
  if(!result.length&&plan.houseBounds) {
    const b=plan.houseBounds;
    result.push([{x:b.minX,z:b.minZ},{x:b.maxX,z:b.minZ},{x:b.maxX,z:b.maxZ},{x:b.minX,z:b.maxZ}]);
  }
  for(const p of plan.placements??[])if(p!==owner&&TYPES.has(p.item.type))result.push(rectangle(p,3));
  for(const wall of [...(plan.walls??[]),...(plan.fences??[]).filter(w=>Math.min(w.base1,w.base2)<=groundY+9)]) {
    const dx=wall.x2-wall.x1,dz=wall.y2-wall.y1,length=Math.hypot(dx,dz);
    if(length)result.push(rectangle({x:(wall.x1+wall.x2)/2,z:(wall.y1+wall.y2)/2,
      angle:Math.atan2(dz,dx),item:{w:length,h:14}}));
  }
  return result;
}

function local(road,across,along) {
  return add(add(road.origin,road.tangent,across),road.forward,along);
}

// A quarter circle joins each side curb to the beach road. Its outer start is
// pinned to the same vertical cut as the existing curved sidewalk, preventing
// a tiny triangular grass gap when the main street is not horizontal.
function cornerPoint(road,side,theta,inset=0) {
  const radius=CORNER-inset;
  const p=local(road,side*(road.width/2+CORNER-radius*Math.sin(theta)),CORNER-radius*Math.cos(theta));
  const cutX=side<0?road.cut.minX:road.cut.maxX;
  const pinned=sample(road.street,cutX,road.street.nearZ-WALK+inset);
  const start=local(road,side*(road.width/2+CORNER),inset);
  return add(p,delta(pinned,start),Math.cos(theta)**2);
}

function sideRows(road,side,from,to) {
  const rows=[];
  if(from<CORNER)for(let i=0;i<=16;i++) {
    const theta=i/16*Math.PI/2;
    rows.push({along:CORNER*(1-Math.cos(theta)),theta});
  }
  const start=Math.max(CORNER,from),steps=Math.max(1,Math.ceil((to-start)/12));
  for(let i=from<CORNER?1:0;i<=steps;i++)rows.push({along:lerp(start,to,i/steps)});
  return inset=>rows.map(({along,theta})=>theta===undefined?
    local(road,side*(road.width/2+inset),along):cornerPoint(road,side,theta,inset));
}

function makeRoad(placement,street) {
  const {x,z,item}=placement;
  if(![x,z,item.w,item.h,street.nearZ].every(Number.isFinite)||item.w<=0||item.h<=0)return null;
  const width=clamp(item.w,48,140),bodyLength=clamp(item.h,120,1000);
  let junctionX=x;
  for(let i=0;i<12;i++) {
    const p=sample(street,junctionX,street.nearZ-WALK);
    if(!Number.isFinite(p.yaw??0)||Math.abs(p.yaw??0)>.45)return null;
    junctionX=lerp(junctionX,x-(z-p.z)*Math.tan(p.yaw??0),.75);
  }
  const origin=sample(street,junctionX,street.nearZ-WALK),yaw=origin.yaw??0;
  if(![origin.x,origin.z,yaw].every(Number.isFinite))return null;
  const forward={x:Math.sin(yaw),z:Math.cos(yaw)},tangent={x:Math.cos(yaw),z:-Math.sin(yaw)};
  const centerDistance=dot(delta({x,z},origin),forward),length=centerDistance+bodyLength/2;
  if(centerDistance<30||length<CORNER+70||length>2000)return null;
  const mouth=(width/2+CORNER)*tangent.x;
  const road={id:item.id,item,width,bodyLength,length,origin,forward,tangent,angle:-yaw,street,
    cut:{minX:origin.x-mouth,maxX:origin.x+mouth},connectors:[]};
  const left=sideRows(road,-1,0,length)(WALK),right=sideRows(road,1,0,length)(WALK);
  const mouthPoints=Array.from({length:17},(_,i)=>sample(street,lerp(road.cut.minX,road.cut.maxX,i/16),street.nearZ-WALK));
  road.footprint=[...mouthPoints,...right,...left.reverse()];
  road.bounds=bounds(road.footprint);
  road.end=local(road,0,length);
  return road;
}

function connectHouses(roads,plan,groundY) {
  for(const house of (plan.placements??[]).filter(p=>p.item.type==='sceneryRanchHouse')) {
    const forward={x:-Math.sin(house.angle),z:Math.cos(house.angle)};
    const across={x:Math.cos(house.angle),z:Math.sin(house.angle)};
    // Match the ranch recipe's two slabs after its +30 Z recentering. The
    // maximum model height is the 55.2-unit chimney, also used by applyModelHeight.
    const sx=house.item.w/130,sz=house.item.h/176;
    const sy=Number.isFinite(house.item.modelHeight)&&house.item.modelHeight>=6&&house.item.modelHeight<=300?
      house.item.modelHeight/55.2:Math.min(sx,sz);
    for(const bay of [{id:'garage',x:-32.5,width:49,front:58},{id:'second-driveway',x:35,width:54,front:58}]) {
      const width=bay.width*sx,start=add(add(house,forward,(bay.front+30)*sz),across,bay.x*sx);
      const choices=roads.map(road=>{
        const offset=delta(start,road.origin),along=dot(offset,road.forward),lateral=dot(offset,road.tangent);
        const side=Math.sign(lateral),gap=Math.abs(lateral)-road.width/2-WALK;
        return {road,along,side,gap};
      }).filter(({road,along,side,gap})=>gap>=-3&&gap<=160&&along>CORNER+width/2+10&&along<road.length-width/2-10&&
        dot(forward,road.tangent)*side<-.8).sort((a,b)=>a.gap-b.gap||a.road.id.localeCompare(b.road.id));
      for(const {road,along,side} of choices) {
        const end=local(road,side*road.width/2,along),startAcross=dot(across,road.forward)<0?{x:-across.x,z:-across.z}:across;
        const footprint=[add(start,startAcross,-width/2),add(end,road.forward,-width/2),
          add(end,road.forward,width/2),add(start,startAcross,width/2)];
        if(blockedPolygons(plan,house,groundY).some(p=>overlaps(footprint,p))||
          roads.some(r=>r.connectors.some(c=>overlaps(footprint,c.footprint))))continue;
        road.connectors.push({houseId:house.item.id,bay:bay.id,houseY:groundY+1.81*sy,along,side,width,start,end,footprint});
        break;
      }
    }
  }
}

/** Compile only explicitly placed roads; malformed or obstructed roads are omitted. */
export function compileStorybookSideRoads(plan,street,groundY=-111) {
  const roads=[];
  for(const placement of plan.placements??[]) {
    if(placement.item.type!=='scenerySideRoad')continue;
    const road=makeRoad(placement,street);
    if(!road||blockedPolygons(plan,placement,groundY).some(p=>overlaps(road.footprint,p))||
      roads.some(other=>overlaps(road.footprint,other.footprint)))continue;
    roads.push(road);
  }
  connectHouses(roads,plan,groundY);
  return roads;
}

/** Includes the junction, sidewalks and optional house aprons for planting/terrain protection. */
export function storybookSideRoadContains(roads,x,z,margin=0) {
  return roads.some(road=>[road.footprint,...road.connectors.map(c=>c.footprint)].some(points=>pointInside(points,x,z,Math.max(0,margin))));
}

function ribbon(batch,rows,color,height) {
  const positions=[],faces=[],columns=rows[0].length;
  for(const [r,row] of rows.entries())for(const [c,p] of row.entries()) {
    positions.push(p.x,height(p,r,c),p.z);
    if(!r||!c)continue;
    const a=r*columns+c,b=a-columns;
    for(const triangle of [[b-1,a-1,b],[b,a-1,a]]) {
      const [i,j,k]=triangle.map(index=>index*3);
      const normalY=(positions[j+2]-positions[i+2])*(positions[k]-positions[i])-(positions[j]-positions[i])*(positions[k+2]-positions[i+2]);
      faces.push(...(normalY<0?[triangle[0],triangle[2],triangle[1]]:triangle));
    }
  }
  const geometry=new BufferGeometry();
  geometry.setAttribute('position',new Float32BufferAttribute(positions,3));
  geometry.setIndex(faces);geometry.computeVertexNormals();
  batch.add(geometry,color,0,0,0);
}

function runs(road,side) {
  let result=[[0,road.length]];
  for(const c of road.connectors.filter(c=>c.side===side))result=result.flatMap(([a,b])=>{
    const from=c.along-c.width/2,to=c.along+c.width/2;
    return to<=a||from>=b?[[a,b]]:[[a,Math.max(a,from)],[Math.min(b,to),b]].filter(([x,y])=>y>x);
  });
  return result;
}

/** Side streets use the main road's material scale and elevations, without overlapping paving layers. */
export function buildStorybookSideRoads(batch,roads,heightAt,groundY=-111) {
  for(const road of roads) {
    const grade=p=>Math.max(groundY+1.2,heightAt(p.x,p.z)+.24);
    const left=sideRows(road,-1,0,road.length)(0),right=sideRows(road,1,0,road.length)(0);
    const cross=Math.ceil((road.width+CORNER*2)/12);
    ribbon(batch,left.map((p,i)=>Array.from({length:cross+1},(_,j)=>{
      const point=mix(p,right[i],j/cross);
      return i===0?sample(road.street,point.x,road.street.nearZ-WALK):point;
    })),'#73767c',grade);
    for(const side of [-1,1])for(const [from,to] of runs(road,side)) {
      const path=sideRows(road,side,from,to),inner=path(0),curb=path(CURB),outer=path(WALK);
      ribbon(batch,inner.map((p,i)=>[p,curb[i]]),'#d0c3b0',p=>grade(p)+5);
      ribbon(batch,curb.map((p,i)=>[p,outer[i]]),'#c0b6a7',p=>grade(p)+3.8);
      // Raised curb faces remain visible from free view and meet the existing curb heights.
      ribbon(batch,inner.map(p=>[p,p]),'#a99e8e',(p,r,c)=>grade(p)+(c?5:0));
      ribbon(batch,curb.map(p=>[p,p]),'#b1a797',(p,r,c)=>grade(p)+(c?5:3.8));
      ribbon(batch,outer.map(p=>[p,p]),'#a99e8e',(p,r,c)=>grade(p)+(c?3.8:-1.2));
      for(let along=Math.ceil((Math.max(CORNER,from)+1)/72)*72;along+.58<to;along+=72) {
        const joint=[along-.58,along+.58].map(v=>[local(road,side*(road.width/2+CURB),v),local(road,side*(road.width/2+WALK),v)]);
        ribbon(batch,joint,'#a69c91',p=>grade(p)+3.92);
      }
    }
    for(let along=CORNER+42;along+34<road.length-12;along+=72) {
      const mark=[along,along+8.5,along+17,along+25.5,along+34].map(v=>[local(road,-1.4,v),local(road,1.4,v)]);
      ribbon(batch,mark,'#e9ce91',p=>grade(p)+.14);
    }
    for(const c of road.connectors) {
      const length=Math.hypot(c.start.x-c.end.x,c.start.z-c.end.z),steps=Math.max(2,Math.ceil(length/9));
      const rows=Array.from({length:steps+1},(_,i)=>{
        return [mix(c.footprint[1],c.footprint[0],i/steps),mix(c.footprint[2],c.footprint[3],i/steps)];
      });
      ribbon(batch,rows,'#c5bcae',(p,r)=>{
        const distance=r/steps*length,walkY=grade(p)+3.8,ramp=Math.min(12,length*.25),shoulder=Math.min(WALK,length*.55);
        if(distance<ramp)return lerp(grade(p),walkY,distance/ramp);
        return lerp(walkY,c.houseY,clamp((distance-shoulder)/(length-shoulder),0,1));
      });
    }
  }
  return roads.length;
}
