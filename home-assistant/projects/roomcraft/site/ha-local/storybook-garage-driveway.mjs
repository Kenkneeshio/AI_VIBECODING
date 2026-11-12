import {BufferGeometry, Color, CubicBezierCurve, CurvePath, Float32BufferAttribute, MathUtils, Path, Shape, ShapeGeometry, Vector2} from 'three';
import polygonClipping from 'polygon-clipping';

const {clamp, lerp, smootherstep} = MathUtils;
const WALK_WIDTH = 26;
const APRON_HEIGHT = 5;
const PAVING = '#fff6e5';
const CONCRETE = new Color('#c5bcae');
const CROSS_SECTION = [-1,-.94,-.89,-.5,0,.5,.89,.94,1];

const distanceToSegment = (x,z,a,b) => {
  const dx=b.x-a.x, dz=b.z-a.z, size=dx*dx+dz*dz;
  const t=size ? clamp(((x-a.x)*dx+(z-a.z)*dz)/size,0,1) : 0;
  return Math.hypot(x-a.x-t*dx,z-a.z-t*dz);
};

function obstruction(plan, owner, groundY) {
  const house=plan.houseBounds;
  const rooms=(plan.rooms??[]).filter(room=>room.points?.length>=3).map(room=>room.points.map(p=>({x:p.x,z:p.y})));
  const structures=(plan.placements ?? []).filter(p=>p!==owner&&p.item.type==='garageDoor').map(placement=>({
    placement, half:placement.item.w/2+2, from:-placement.item.h*.55, to:placement.item.h*.66,
  }));
  for(const placement of plan.stairs ?? []) structures.push({placement,half:placement.item.w/2,
    from:-placement.item.h/2-(placement.apronDepth||0),to:placement.item.h/2});
  const segments=[...(plan.walls ?? []),...(plan.fences ?? []).filter(s=>Math.min(s.base1,s.base2)<groundY+9)];
  return (x,z,radius) => {
    if(rooms.length?rooms.some(points=>polygonBlocks(points,x,z,radius)):
      house&&x+radius>house.minX&&x-radius<house.maxX&&z+radius>house.minZ&&z-radius<house.maxZ)return true;
    if(structures.some(({placement:p,half,from,to})=>{
      const dx=x-p.x,dz=z-p.z,cos=Math.cos(p.angle),sin=Math.sin(p.angle);
      const side=dx*cos+dz*sin,run=-dx*sin+dz*cos;
      return Math.abs(side)<half+radius&&run>from-radius&&run<to+radius;
    }))return true;
    return segments.some(s=>distanceToSegment(x,z,{x:s.x1,z:s.y1},{x:s.x2,z:s.y2})<radius+7);
  };
}

function polygonBlocks(points,x,z,radius) {
  let inside=false;
  for(let i=0,j=points.length-1;i<points.length;j=i++) {
    const a=points[i],b=points[j];
    if(distanceToSegment(x,z,a,b)<=radius)return true;
    if((a.z>z)!==(b.z>z)&&x<(b.x-a.x)*(z-a.z)/(b.z-a.z)+a.x)inside=!inside;
  }
  return inside;
}

function rowPoint(row,u,street) {
  const x=row.x+row.acrossX*u*row.half;
  const z=row.streetZ===undefined
    ? row.z+row.acrossZ*u*row.half
    : (street.sample?.(x,row.streetZ)?.z ?? row.streetZ);
  return {x,z};
}

function ownerBlocked(garage,row,street) {
  const cos=Math.cos(garage.angle),sin=Math.sin(garage.angle),{w,h}=garage.item;
  return CROSS_SECTION.some(u=>{
    const p=rowPoint(row,u,street),dx=p.x-garage.x,dz=p.z-garage.z;
    const across=dx*cos+dz*sin,along=-dx*sin+dz*cos;
    // The front pad is the intentional connection. The building and side/rear
    // pad are never used as a shortcut when a route turns around the garage.
    return Math.abs(across)<w/2+1&&along>-h*.39-1&&along<h*.36+2;
  });
}

function candidates(garage,start,outward,width,distance,near) {
  if(outward.y<=-.55)return [0,-width*.48,width*.48,-width,width].map(offset=>{
    const endX=start.x+outward.x/-outward.y*distance*.5+offset;
    const curb=near(endX),end=new Vector2(endX,curb.z);
    const inward=new Vector2(Math.sin(curb.yaw||0),Math.cos(curb.yaw||0));
    const lead=Math.min(65,distance*.36);
    return {curve:new CubicBezierCurve(start,start.clone().addScaledVector(outward,lead),
      end.clone().addScaledVector(inward,lead),end),endX};
  });
  const side=new Vector2(Math.cos(garage.angle),Math.sin(garage.angle));
  const paths=[];
  for(const sign of [-1,1])for(const extra of [0,12,28]) {
    const sideStart=start.clone().addScaledVector(side,sign*(garage.item.w/2+width/2+8+extra));
    const endX=sideStart.x,curb=near(endX),end=new Vector2(endX,curb.z);
    const inward=new Vector2(Math.sin(curb.yaw||0),Math.cos(curb.yaw||0));
    const lead=Math.max(12,width*.25);
    const curve=new CurvePath();
    curve.add(new CubicBezierCurve(start,start.clone().addScaledVector(outward,lead),
      sideStart.clone().addScaledVector(outward,lead),sideStart));
    curve.add(new CubicBezierCurve(sideStart,sideStart.clone().addScaledVector(outward,-Math.min(55,distance*.3)),
      end.clone().addScaledVector(inward,Math.min(55,distance*.3)),end));
    paths.push({curve,endX,wrapped:true});
  }
  return paths;
}

function routeFootprint(route,inset=0) {
  const pieces=[];
  for(let i=1;i<route.rows.length;i++) {
    const a={...route.rows[i-1],half:route.rows[i-1].half-inset},b={...route.rows[i],half:route.rows[i].half-inset};
    const ring=[rowPoint(a,-1,route.street),rowPoint(a,1,route.street),rowPoint(b,1,route.street),rowPoint(b,-1,route.street)].map(p=>[p.x,p.z]);
    for(const corners of [[0,1,2],[0,2,3]]) {
      const triangle=corners.map(index=>ring[index]);
      const [p,q,r]=triangle;
      if(Math.abs((q[0]-p[0])*(r[1]-p[1])-(q[1]-p[1])*(r[0]-p[0]))>1e-6)pieces.push([triangle]);
    }
  }
  return pieces.length?polygonClipping.union(...pieces):[];
}

/** Derive opt-in garage entrances without changing authored item coordinates. */
export function compileStorybookGarageDriveways(plan,street,groundY=-111) {
  const routes=[];
  const near=x=>street.sample?.(x,street.nearZ) ?? {x,z:street.nearZ,yaw:0};
  for(const garage of plan.placements ?? []) {
    const item=garage.item;
    if(item.type!=='garageDoor'||item.garageDriveway!==true)continue;
    const {w,h}=item;
    if(![w,h,garage.x,garage.z,garage.angle,street.nearZ].every(Number.isFinite)||w<42||h<30)continue;
    const outward=new Vector2(-Math.sin(garage.angle),Math.cos(garage.angle));
    const width=clamp(Number.isFinite(item.garageDrivewayWidth)?item.garageDrivewayWidth:w*.72,32,200);
    const start=new Vector2(garage.x,garage.z).addScaledVector(outward,h*.57-.48);
    const distance=start.y-near(start.x).z;
    if(distance<12||distance>650)continue;
    const blocked=obstruction(plan,garage,groundY);
    const startHalf=Math.min(width/2,w*.45);
    for(const {curve,endX,wrapped} of candidates(garage,start,outward,width,distance,near)) {
      const length=curve.getLength();
      const rows=[];
      const count=Math.max(5,Math.ceil(length/3.5));
      let clear=true;
      for(let index=0;index<=count;index++) {
        const t=index/count,point=curve.getPoint(t),tangent=curve.getTangent(t);
        const half=lerp(startHalf,width/2,smootherstep(t,0,.55))+5*smootherstep(t,.7,1);
        const row={x:point.x,z:point.y,acrossX:-tangent.y,acrossZ:tangent.x,half,t,
          ...(index===count?{streetZ:street.nearZ,acrossX:1,acrossZ:0}:{})};
        if(blocked(point.x,point.y,half+2)||routeOverlap(routes,point.x,point.y,half+2)||ownerBlocked(garage,row,street)) {clear=false;break;}
        if(index<count&&CROSS_SECTION.some(u=>{
          const p=rowPoint(row,u,street);return p.z<near(p.x).z-.2;
        })) {clear=false;break;}
        rows.push(row);
      }
      if(!clear)continue;
      // Cross the entire near sidewalk and a few units into asphalt. The
      // matching cut prevents a curb or paving slab poking through this ramp.
      const endHalf=width/2+5;
      for(let index=1;index<=10;index++) {
        const u=index/10,baseline=street.nearZ-(WALK_WIDTH+4)*u;
        rows.push({x:endX,z:street.sample?.(endX,baseline)?.z??baseline,
          acrossX:1,acrossZ:0,half:endHalf,streetZ:baseline,crossover:u,t:1});
      }
      const route={id:item.id,width,rows,street,wrapped:Boolean(wrapped),cut:{minX:endX-endHalf,maxX:endX+endHalf}};
      if(wrapped) {
        // Tight apron turns can overlap their own ribbon. Union the paving
        // footprint before triangulating it; never draw folded or doubled strips.
        route.footprint=routeFootprint(route);
        if(!route.footprint.length)continue;
      }
      routes.push(route);
      break;
    }
  }
  return routes;
}

function routeOverlap(routes,x,z,margin) {
  return routes.some(route=>route.rows.slice(1).some((row,index)=>
    distanceToSegment(x,z,route.rows[index],row)<=Math.max(row.half,route.rows[index].half)+margin));
}

/** Use the same road footprint to exclude generated planting and terrain tools. */
export function storybookGarageDrivewayContains(routes,x,z,margin=0) {
  return routeOverlap(routes,x,z,Math.max(0,margin));
}

function surfaceHeight(row,p,heightAt,groundY) {
  if(row.crossover!==undefined) {
    const along=row.crossover*(WALK_WIDTH+4);
    return groundY+lerp(5.12,1.34,smootherstep(along,15,WALK_WIDTH+3));
  }
  const ground=heightAt(p.x,p.z)+.16;
  const apron=1-smootherstep(row.t,0,.2);
  const sidewalk=smootherstep(row.t,.72,1);
  return Math.max(ground,lerp(lerp(Math.max(ground,groundY+.2),groundY+APRON_HEIGHT+.06,apron),groundY+5.12,sidewalk));
}

function buildWrappedDriveway(batch,route,heightAt,groundY) {
  const start=route.rows[0],a=rowPoint(start,-1,route.street),b=rowPoint(start,1,route.street);
  const height=p=>{
    const gap=p.z-(route.street.sample?.(p.x,route.street.nearZ)?.z??route.street.nearZ);
    if(gap<=0)return groundY+lerp(5.12,1.34,smootherstep(-gap,15,WALK_WIDTH+3));
    const ground=heightAt(p.x,p.z)+.16;
    const apron=1-smootherstep(distanceToSegment(p.x,p.z,a,b),0,48);
    const sidewalk=1-smootherstep(gap,0,40);
    return Math.max(ground,lerp(lerp(ground,groundY+5.06,apron),groundY+5.12,sidewalk));
  };
  // A single unioned surface owns both concrete and its shaded shoulder. An
  // independently triangulated inset can cross this grade between vertices,
  // even with a small lift, causing visible z-fighting at curves and curb ramps.
  for(const [outer,...holes] of route.footprint) {
    const boundaries=[outer,...holes].flatMap(ring=>ring.slice(1).map((p,i)=>[
      {x:ring[i][0],z:ring[i][1]},{x:p[0],z:p[1]},
    ]));
    const tone=new Color();
    const shape=new Shape(outer.map(([x,z])=>new Vector2(x,-z)));
    shape.holes=holes.map(ring=>new Path(ring.map(([x,z])=>new Vector2(x,-z))));
    const outline=new ShapeGeometry(shape).rotateX(-Math.PI/2);
    const source=outline.index?outline.toNonIndexed():outline;
    const position=source.attributes.position,vertices=[],normals=[],colors=[];
    const vertex=i=>({x:position.getX(i),z:position.getZ(i)});
    const midpoint=(p,q)=>({x:(p.x+q.x)/2,z:(p.z+q.z)/2});
    const split=(p,q,r,depth=0)=>{
      if(Math.abs((q.x-p.x)*(r.z-p.z)-(q.z-p.z)*(r.x-p.x))<.001)return;
      const edges=[Math.hypot(p.x-q.x,p.z-q.z),Math.hypot(q.x-r.x,q.z-r.z),Math.hypot(r.x-p.x,r.z-p.z)];
      const longest=Math.max(...edges);
      if(longest<=18||depth===10) {
        for(const v of [p,q,r]) {
          vertices.push(v.x,height(v),v.z);
          const edge=Math.min(...boundaries.map(([a,b])=>distanceToSegment(v.x,v.z,a,b)));
          tone.copy(CONCRETE).multiplyScalar(lerp(.84,1,smootherstep(edge,0,3)));
          colors.push(tone.r,tone.g,tone.b);
          // Tight union corners can create skinny triangles. Derive their
          // shading from the continuous grade, not ill-conditioned face normals.
          const dx=(height({x:v.x+.25,z:v.z})-height({x:v.x-.25,z:v.z}))/.5;
          const dz=(height({x:v.x,z:v.z+.25})-height({x:v.x,z:v.z-.25}))/.5;
          const length=Math.hypot(dx,1,dz);normals.push(-dx/length,1/length,-dz/length);
        }
        return;
      }
      if(edges[0]===longest){const m=midpoint(p,q);split(p,m,r,depth+1);split(m,q,r,depth+1);}
      else if(edges[1]===longest){const m=midpoint(q,r);split(p,q,m,depth+1);split(p,m,r,depth+1);}
      else{const m=midpoint(r,p);split(p,q,m,depth+1);split(m,q,r,depth+1);}
    };
    for(let i=0;i<position.count;i+=3)split(vertex(i),vertex(i+1),vertex(i+2));
    if(source!==outline)source.dispose();outline.dispose();
    const geometry=new BufferGeometry();
    geometry.setAttribute('position',new Float32BufferAttribute(vertices,3));
    geometry.setAttribute('normal',new Float32BufferAttribute(normals,3));
    geometry.setAttribute('color',new Float32BufferAttribute(colors,3));
    const material=batch.material?.(PAVING);
    if(material)material.vertexColors=true;
    batch.add(geometry,material?PAVING:'#c5bcae',0,0,0);
  }
}

/** Concrete, inset shoulders and expansion joints share one graded surface. */
export function buildStorybookGarageDriveways(batch,routes,heightAt,groundY) {
  for(const route of routes) {
    if(route.wrapped){buildWrappedDriveway(batch,route,heightAt,groundY);continue;}
    const positions=[],colors=[],uv=[],faces=[];
    const tone=new Color();
    for(const [rowIndex,row] of route.rows.entries()) {
      for(const [column,u] of CROSS_SECTION.entries()) {
        const p=rowPoint(row,u,route.street);
        const y=surfaceHeight(row,p,heightAt,groundY);
        const border=Math.abs(u)>.89;
        const joint=row.crossover===undefined&&rowIndex>1&&rowIndex%12===0;
        tone.copy(CONCRETE).multiplyScalar(border?.84:joint?.91:1+.023*Math.sin(p.x*.17+p.z*.23));
        positions.push(p.x,y+(border?.025:0),p.z);
        colors.push(tone.r,tone.g,tone.b);uv.push((u+1)/2,rowIndex/12);
        if(!rowIndex||!column)continue;
        const a=rowIndex*CROSS_SECTION.length+column,b=a-CROSS_SECTION.length;
        faces.push(b-1,b,a-1,b,a,a-1);
      }
    }
    const geometry=new BufferGeometry();
    geometry.setAttribute('position',new Float32BufferAttribute(positions,3));
    geometry.setAttribute('color',new Float32BufferAttribute(colors,3));
    geometry.setAttribute('uv',new Float32BufferAttribute(uv,2));
    geometry.setIndex(faces);geometry.computeVertexNormals();
    const material=batch.material?.(PAVING);
    if(material)material.vertexColors=true;
    batch.add(geometry,material?PAVING:'#c5bcae',0,0,0);
  }
  return routes.length;
}
