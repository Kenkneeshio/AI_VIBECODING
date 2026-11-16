/** Coarse presence is an illustrative room label, never a claim of seat-level
 * accuracy. Calibration samples are local to this frontend and contain only
 * the latest anonymous radar coordinate captured with the owner's action. */
export const PRESENCE_ZONE_KEY='roomcraft.presence-zones.v1';
export const PRESENCE_ZONE_SETTINGS_KEY='roomcraft.presence-zone-settings.v1';
export const PRESENCE_ZONE_NAMES=Object.freeze({living:'Living room',dining:'Dining room',kitchen:'Kitchen',hall:'Start of hall'});
const ZONE_IDS=Object.keys(PRESENCE_ZONE_NAMES);
const finite=point=>Number.isFinite(point?.x)&&Number.isFinite(point?.y);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const bounded=(value,fallback,min,max)=>Number.isFinite(Number(value))?
  Math.max(min,Math.min(max,Number(value))):fallback;

export function normalizePresenceZoneSettings(value={}){
  value=value??{};
  return {movementGain:bounded(value.movementGain,.75,0,1.5),
    movementRadius:bounded(value.movementRadius,45,0,90),
    switchDelayMs:bounded(value.switchDelayMs,1200,0,3000),
    matchDistanceCm:bounded(value.matchDistanceCm,85,40,200)};
}

export function summarizePresenceAreas(people=[]){
  const result=Object.fromEntries(ZONE_IDS.map(id=>[id,{live:0,retained:0}]));
  for(const point of people){
    if(!result[point.zone])continue;
    result[point.zone][point.quality?'retained':'live']++;
  }
  return result;
}

export function normalizePresenceZoneCalibration(value){
  const result={};
  for(const id of ZONE_IDS){
    const point=value?.[id];
    if(finite(point)&&Math.abs(point.x)<=1200&&point.y>=0&&point.y<=1200)
      result[id]={x:Math.round(point.x),y:Math.round(point.y)};
  }
  return result;
}

export function createPresenceZoneMap(layout,calibration={},preferences={}){
  const items=layout?.items??[];
  const first=(type)=>items.find(item=>item.type===type&&finite(item));
  const sofa=first('sofa'),table=first('diningTable')??first('table');
  const counter=first('counter')??first('kitchenWorktop'),sensor=first('presenceSwitch');
  const anchors={
    living:{x:(sofa?.x??500)+80,y:(sofa?.y??350)+72},
    dining:{x:table?.x??450,y:(table?.y??690)-100},
    kitchen:{x:(counter?.x??650)+95,y:(counter?.y??660)-55},
    hall:{x:(sensor?.x??780)+73,y:(sensor?.y??440)+72},
  };
  let learned=normalizePresenceZoneCalibration(calibration);
  let settings=normalizePresenceZoneSettings(preferences);
  const transform=first('presenceSwitch')?.presenceTrackTransform;
  const memory=new Map();
  function classify(point,raw){
    if(finite(raw)){
      const close=Object.entries(learned).map(([id,anchor])=>({id,d:distance(raw,anchor)}))
        .sort((a,b)=>a.d-b.d)[0];
      if(close&&close.d<=settings.matchDistanceCm)return close.id;
    }
    return ZONE_IDS.reduce((best,id)=>distance(point,anchors[id])<distance(point,anchors[best])?id:best,'living');
  }
  function resolve(point,raw,now,nearest){
    if(!finite(point))return null;
    const candidate=classify(point,raw),id=point.id??'anonymous';
    let held=memory.get(id);
    if(!held)held={zone:candidate,pending:null,since:now,originRaw:finite(raw)?{x:raw.x,y:raw.y}:null};
    else if(candidate===held.zone){held.pending=null;held.since=now;}
    else if(held.pending!==candidate){held.pending=candidate;held.since=now;}
    else if(now-held.since>=settings.switchDelayMs){held.zone=candidate;held.pending=null;
      held.originRaw=finite(raw)?{x:raw.x,y:raw.y}:null;}
    memory.set(id,held);
    const anchor=anchors[held.zone];
    const reference=learned[held.zone]??held.originRaw;
    let dx=0,dy=0;
    if(finite(raw)&&finite(reference)&&Array.isArray(transform)&&transform.length===6){
      const rx=raw.x-reference.x,ry=raw.y-reference.y;
      dx=(transform[0]*rx+transform[1]*ry)*settings.movementGain;
      dy=(transform[3]*rx+transform[4]*ry)*settings.movementGain;
      const length=Math.hypot(dx,dy),max=settings.movementRadius;
      if(length>max&&length>0){dx=dx/length*max;dy=dy/length*max;}
    }
    const target={x:anchor.x+dx,y:anchor.y+dy};
    const safe=nearest?.(target.x,target.y,Math.min(32,settings.movementRadius+12))??
      nearest?.(anchor.x,anchor.y,135)??anchor;
    return {...point,x:safe.x,y:safe.y,zone:held.zone};
  }
  return {anchors,resolve,calibrate(zone,raw){
    if(!ZONE_IDS.includes(zone)||!finite(raw))return false;
    learned=normalizePresenceZoneCalibration({...learned,[zone]:raw});memory.clear();return true;
  },removeCalibration(zone){if(!ZONE_IDS.includes(zone))return false;
    const next={...learned};delete next[zone];learned=next;memory.clear();return true;
  },setSettings(value){settings=normalizePresenceZoneSettings(value);memory.clear();},
  get settings(){return {...settings};},get calibration(){return {...learned};},clear(){memory.clear();}};
}
