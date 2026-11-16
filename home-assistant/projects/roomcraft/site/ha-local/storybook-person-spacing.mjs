/** Keep illustrated people apart while respecting the authored walkable floor.
 * The actual radar points and heatmap are unchanged. Stable ID order makes
 * results independent of sensor array order and render rate. */
export function separateStorybookPeople(samples,{allowsPoint,allowsRoute,margin=5}={}){
  const placed=[];
  for(const entry of [...samples].sort((a,b)=>a.id.localeCompare(b.id))){
    const {sample,radius}=entry;
    if(!sample)continue;
    const separate=(point)=>placed.every(other=>Math.hypot(point.x-other.sample.x,point.y-other.sample.y)>=radius+other.radius+margin);
    const clear=(point)=>allowsPoint(point.x,point.y,radius)&&
      (!allowsRoute||allowsRoute(sample.x,sample.y,point.x,point.y,radius))&&separate(point);
    let position=sample;
    if(!separate(position)){
      position=null;
      for(let distance=radius*2+margin;distance<=180&&!position;distance+=10){
        for(let step=0;step<24;step++){
          const angle=step*2*Math.PI/24;
          const candidate={...sample,x:sample.x+Math.cos(angle)*distance,y:sample.y+Math.sin(angle)*distance};
          if(clear(candidate)){position=candidate;break;}
        }
      }
    }
    // The home is broad enough for normal occupancy. If its authored geometry
    // becomes too narrow, omit a marker rather than draw overlapping bodies.
    if(position)placed.push({...entry,sample:position});
  }
  return placed;
}
