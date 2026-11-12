import {BufferGeometry, Color, CubicBezierCurve, Float32BufferAttribute, MathUtils, Vector2} from 'three';

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
  const structures=(plan.placements ?? []).filter(p=>p!==owner&&p.item.type==='garageDoor').map(placement=>({
    placement, half:placement.item.w/2+2, from:-placement.item.h*.55, to:placement.item.h*.66,
  }));
  for(const placement of plan.stairs ?? []) structures.push({placement,half:placement.item.w/2,
    from:-placement.item.h/2-(placement.apronDepth||0),to:placement.item.h/2});
  const segments=[...(plan.walls ?? []),...(plan.fences ?? []).filter(s=>Math.min(s.base1,s.base2)<groundY+9)];
  return (x,z,radius) => {
    if(house && x+radius>house.minX&&x-radius<house.maxX&&z+radius>house.minZ&&z-radius<house.maxZ)return true;
    if(structures.some(({placement:p,half,from,to})=>{
      const dx=x-p.x,dz=z-p.z,cos=Math.cos(p.angle),sin=Math.sin(p.angle);
      const side=dx*cos+dz*sin,run=-dx*sin+dz*cos;
      return Math.abs(side)<half+radius&&run>from-radius&&run<to+radius;
    }))return true;
    return segments.some(s=>distanceToSegment(x,z,{x:s.x1,z:s.y1},{x:s.x2,z:s.y2})<radius+7);
  };
}

function rowPoint(row,u,street) {
  const x=row.x+row.acrossX*u*row.half;
  const z=row.streetZ===undefined
    ? row.z+row.acrossZ*u*row.half
    : (street.sample?.(x,row.streetZ)?.z ?? row.streetZ);
  return {x,z};
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
    // A rear-facing garage needs an authored relocation/rotation, not a road
    // guessed through the home or behind the building.
    if(outward.y>-.55)continue;
    const width=clamp(Number.isFinite(item.garageDrivewayWidth)?item.garageDrivewayWidth:w*.72,32,200);
    const start=new Vector2(garage.x,garage.z).addScaledVector(outward,h*.57-.48);
    const distance=start.y-near(start.x).z;
    if(distance<12||distance>650)continue;
    const blocked=obstruction(plan,garage,groundY);
    const startHalf=Math.min(width/2,w*.45);
    for(const offset of [0,-width*.48,width*.48,-width,width]) {
      const endX=start.x+outward.x/-outward.y*distance*.5+offset;
      const curb=near(endX),end=new Vector2(endX,curb.z);
      const inward=new Vector2(Math.sin(curb.yaw||0),Math.cos(curb.yaw||0));
      const lead=Math.min(65,distance*.36);
      const curve=new CubicBezierCurve(start,start.clone().addScaledVector(outward,lead),
        end.clone().addScaledVector(inward,lead),end);
      const length=curve.getLength();
      const rows=[];
      const count=Math.max(5,Math.ceil(length/3.5));
      let clear=true;
      for(let index=0;index<=count;index++) {
        const t=index/count,point=curve.getPoint(t),tangent=curve.getTangent(t);
        const half=lerp(startHalf,width/2,smootherstep(t,0,.55))+5*smootherstep(t,.7,1);
        const row={x:point.x,z:point.y,acrossX:-tangent.y,acrossZ:tangent.x,half,t,
          ...(index===count?{streetZ:street.nearZ,acrossX:1,acrossZ:0}:{})};
        if(blocked(point.x,point.y,half+2)||routeOverlap(routes,point.x,point.y,half+2)) {clear=false;break;}
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
      const route={id:item.id,width,rows,street,cut:{minX:endX-endHalf,maxX:endX+endHalf}};
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

/** Concrete, inset shoulders and expansion joints share one graded surface. */
export function buildStorybookGarageDriveways(batch,routes,heightAt,groundY) {
  for(const route of routes) {
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
