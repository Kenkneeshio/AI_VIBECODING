/** Decorative exterior models do not redefine the upstairs plan or coastline. */
export const isExteriorBuilding = type => ['sceneryRanchHouse','sceneryOfficeCampus','scenerySchoolCampus'].includes(type);
export const isExteriorScenery = type => isExteriorBuilding(type) || type==='scenerySideRoad';

export function exteriorFootprint({item,x,z,angle}, margin = 0) {
  const halfW=item.w/2+margin,halfH=item.h/2+margin;
  return [[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,v])=>({
    x:x+u*halfW*Math.cos(angle)-v*halfH*Math.sin(angle),
    z:z+u*halfW*Math.sin(angle)+v*halfH*Math.cos(angle),
  }));
}

export function exteriorBounds(placements) {
  const points=placements.filter(({item})=>isExteriorScenery(item.type)).flatMap(p=>exteriorFootprint(p));
  return points.length ? {minX:Math.min(...points.map(p=>p.x)),maxX:Math.max(...points.map(p=>p.x)),
    minZ:Math.min(...points.map(p=>p.z)),maxZ:Math.max(...points.map(p=>p.z))} : null;
}

/** Frame editable scenery without using it to move the home, street or coast. */
export function exteriorCameraBounds(plan) {
  const frame = {...plan.bounds};
  const exterior = plan.exteriorBounds;
  if (!exterior || !['minX','maxX','minZ','maxZ'].every(key => Number.isFinite(exterior[key]))) return frame;
  for (const key of ['minX','minZ']) frame[key] = Math.min(frame[key], exterior[key]);
  for (const key of ['maxX','maxZ']) frame[key] = Math.max(frame[key], exterior[key]);
  return frame;
}

export function exteriorHouseContains(placements,x,z,margin=0) {
  return placements.some(p=>{
    if(!isExteriorBuilding(p.item.type))return false;
    const dx=x-p.x,dz=z-p.z;
    return Math.abs(dx*Math.cos(p.angle)+dz*Math.sin(p.angle))<=p.item.w/2+margin&&
      Math.abs(-dx*Math.sin(p.angle)+dz*Math.cos(p.angle))<=p.item.h/2+margin;
  });
}
