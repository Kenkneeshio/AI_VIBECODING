import {Group,Vector3} from 'three';
import {resolveHolidays, HOLIDAY_CATALOG} from './storybook-holidays.mjs';
import {normalizeHolidaySettings} from './storybook-holiday-settings.mjs';
import {createHolidayArt,createHolidayTrim} from './storybook-holiday-art.mjs';
import {isOutdoorRoom} from './storybook-structure.mjs';

const insideRing=(points,x,z)=>{
  let yes=false;for(let i=0,j=points.length-1;i<points.length;j=i++){
    const a=points[i],b=points[j];if((a[1]>z)!==(b[1]>z)&&x<(b[0]-a[0])*(z-a[1])/(b[1]-a[1])+a[0])yes=!yes;
  }return yes;
};

/** Exterior solid cap spans only: no interior partitions, open balconies or
 * unsupported strings across an authored window opening. */
export function homeHolidayTrimPaths(plan){
  const polygons=plan.floorStructure?.foundation?.length?plan.floorStructure.foundation:
    (plan.rooms??[]).filter(room=>!isOutdoorRoom(room)).map(room=>[room.points.map(p=>[p.x,p.y])]);
  const inside=(x,z)=>polygons.some(([outer,...holes])=>insideRing(outer,x,z)&&!holes.some(hole=>insideRing(hole,x,z)));
  const y=Math.max(0,...(plan.wallStructure??[]).map(s=>s.top));
  if(!polygons.length||!y)return [];
  const paths=[];
  for(const wall of plan.walls??[]){
    if(wall.kind==='fence'||!(wall.length>0))continue;
    const sideAt=t=>{
      const x=wall.x1+wall.dx*t,z=wall.y1+wall.dz*t;
      for(const d of [12,24,40]){
        const left=inside(x-wall.dz*d,z+wall.dx*d),right=inside(x+wall.dz*d,z-wall.dx*d);
        if(left&&right)return 0;if(left!==right)return left?-1:1;
      }return 0;
    };
    const spans=[];let start=0;
    for(const gap of wall.openings??[]){if(gap.start>start)spans.push([start,gap.start]);start=Math.max(start,gap.end);}
    if(start<wall.length)spans.push([start,wall.length]);
    for(const [from,to] of spans){
      const n=Math.max(1,Math.ceil((to-from)/12));let runStart=from,sign=0;
      const flush=end=>{if(sign&&end-runStart>1){const point=t=>[wall.x1+wall.dx*t-wall.dz*sign*6.2,wall.y1+wall.dz*t+wall.dx*sign*6.2];paths.push({id:`home-${wall.id}-${paths.length}`,points:[point(runStart),point(end)],closed:false,y,bulbSize:2.4,spacing:22});}};
      for(let i=0;i<n;i++){
        const a=from+(to-from)*i/n,b=from+(to-from)*(i+1)/n,next=sideAt((a+b)/2);
        if(next!==sign){flush(a);runStart=a;sign=next;}
      }flush(to);
    }
  }return paths;
}

/** Native roof edges, separate from each parcel's gardens and parking. */
export function landmarkHolidayTrimRings(item){
  const rectangle=(x,z,w,d,y)=>({points:[[x-w/2,z-d/2],[x+w/2,z-d/2],[x+w/2,z+d/2],[x-w/2,z+d/2]],y});
  let rings,nw,nh;
  if(item.type==='sceneryRanchHouse'){
    nw=130;nh=176;rings=[{points:[[-57.5,-18],[61,-18],[61,42],[-7.5,42],[-7.5,64],[-57.5,64]],y:31.6}];
  }else if(item.type==='scenerySchoolCampus'){
    nw=300;nh=240;rings=[[-70,52,69.4,26.4,18.5],[70,52,69.4,26.4,18.5],[-89,-7,27.4,92.4,18.5],[89,-7,27.4,92.4,18.5],[0,-48,149.4,26.4,18.5],[0,3,68.4,49.4,20.5]].map(p=>rectangle(...p));
  }else if(item.type==='sceneryOfficeCampus'){
    nw=220;nh=180;rings=[[-43,-23,57.6,91.6,114.6],[5,-34,41.6,67.6,114.6],[51,-25,53.6,83.6,114.6]].map(p=>rectangle(...p));
  }else return [];
  const sx=Number.isFinite(item.w)&&item.w>0?item.w/nw:1,sz=Number.isFinite(item.h)&&item.h>0?item.h/nh:1,sy=Math.min(sx,sz);
  return rings.map((ring,i)=>({...ring,id:`${item.id}-${i}`,points:ring.points.map(([x,z])=>[x*sx,z*sz]),y:ring.y*sy,bulbSize:1.7*sy,spacing:9*sy}));
}

/** One editable outdoor clearing, derived from the same home/street geometry. */
export function defaultHolidayPlacement(plan, street) {
  const bounds = plan.houseBounds ?? plan.bounds;
  const x = (bounds.minX + bounds.maxX) / 2;
  const edge = Math.max(...[-90, 0, 90].map(dx => street?.sample?.(x + dx, street.nearZ)?.z ??
    (Number.isFinite(street?.nearZ) ? street.nearZ : bounds.minZ - 230)));
  const gap = bounds.minZ - edge;
  return {x, y: (bounds.minZ + edge) / 2, scale: Math.min(1.2, Math.max(.4, (gap - 36) / 100)), rotation:0};
}

export function holidayPlacement(plan, street, settings) {
  const value = normalizeHolidaySettings(settings).placement;
  return value ? {...value} : defaultHolidayPlacement(plan, street);
}

export function holidayPlacementBounds(placement) {
  const angle = placement.rotation * Math.PI / 180;
  const x = (Math.abs(Math.cos(angle)) * 70 + Math.abs(Math.sin(angle)) * 50) * placement.scale;
  const z = (Math.abs(Math.sin(angle)) * 70 + Math.abs(Math.cos(angle)) * 50) * placement.scale;
  return {minX:placement.x-x, maxX:placement.x+x, minZ:placement.y-z, maxZ:placement.y+z};
}

/** Decorative-only runtime. Calendar input is supplied explicitly by an adapter. */
export function createHolidayRuntime({plan, street, heightAt}) {
  const root = new Group();
  root.name = 'holiday-decorations';
  const stage=new Group();stage.name='holiday-outdoor-stage';root.add(stage);
  const landmarks=new Map(),homePaths=homeHolidayTrimPaths(plan),point=new Vector3();
  let art, trim,trimKey,artKey, fingerprint, resolution, previewHoliday, selection, placement, disposed = false;
  function registerLandmark(item,target){
    const rings=landmarkHolidayTrimRings(item);if(!rings.length)return;
    landmarks.set(item.id,{target,rings});trimKey=undefined;
  }
  function refreshTrim(){
    const matrices=[];for(const [id,{target}] of landmarks){target.updateWorldMatrix(true,false);matrices.push([id,target.visible,...target.matrixWorld.elements]);}
    const key=JSON.stringify(matrices);if(key===trimKey)return;
    const rings=[...homePaths];
    for(const {target,rings:local} of landmarks.values()){
      if(!target.visible)continue;
      for(const ring of local){
        const points=ring.points.map(([x,z])=>point.set(x,ring.y,z).applyMatrix4(target.matrixWorld).toArray());
        rings.push({...ring,points:points.map(p=>[p[0],p[2]]),y:points[0][1]});
      }
    }
    trim?.dispose();trim=createHolidayTrim({rings});root.add(trim.root);trimKey=key;
  }
  function update({elapsedSeconds=0, environment={}, settings} = {}) {
    if (disposed) return;
    const preview = environment.holidayPreview;
    const effective = normalizeHolidaySettings(preview?.settings ?? settings);
    const next = JSON.stringify([environment.holidayDate ?? null, effective ?? null, preview?.id ?? null]);
    if (next !== fingerprint) {
      fingerprint = next;
      resolution = resolveHolidays(environment.holidayDate, effective);
      previewHoliday = preview?.id && HOLIDAY_CATALOG.find(item => item.id === preview.id);
      placement = holidayPlacement(plan, street, effective);
    }
    const active = resolution?.active ?? [];
    const slot = environment.reduceMotion || !Number.isFinite(elapsedSeconds) ? 0
      : Math.floor(Math.max(0, elapsedSeconds) / 20);
    selection = previewHoliday ? {...previewHoliday, preview:true} : active[slot % active.length];
    const key = selection ? `${selection.id}:${selection.theme}` : null;
    if (key !== artKey) {
      art?.dispose();
      art = selection ? createHolidayArt(selection) : undefined;
      if (art) stage.add(art.root);
      artKey = key;
    }
    root.visible = Boolean(art);
    if (!art) return;
    refreshTrim();
    const ground=heightAt?.(placement.x, placement.y);
    stage.position.set(placement.x,Number.isFinite(ground)?ground:0,placement.y);
    stage.rotation.y = -placement.rotation * Math.PI / 180;
    stage.scale.setScalar(placement.scale);
    art.update({elapsedSeconds, night:environment.night === true,
      reducedMotion:environment.reduceMotion === true, events:effective?.events !== false,
      lighting:effective?.lighting !== false, intensity:effective?.intensity ?? .7});
    trim.update({elapsedSeconds,night:environment.night===true,reducedMotion:environment.reduceMotion===true,
      events:effective.events&&!selection.quiet,lighting:effective.lighting,intensity:effective.intensity,colors:selection.colors});
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    art?.dispose();
    trim?.dispose();landmarks.clear();
    root.removeFromParent();
    root.clear();
  }
  return {root, update, dispose,registerLandmark,getState:() => ({selection:selection?.id ?? null,
    active:resolution?.active?.map(item=>item.id) ?? [], placement:placement && {...placement},
    trim:trim?.getState()??null,stage:art?.getState()??null})};
}
