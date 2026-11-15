/** Coarse presence is an illustrative room label, never a claim of seat-level
 * accuracy. Calibration samples are local to this frontend and contain only
 * the latest anonymous radar coordinate captured with the owner's action. */
export const PRESENCE_ZONE_KEY='roomcraft.presence-zones.v1';
export const PRESENCE_ZONE_NAMES=Object.freeze({living:'Living room',dining:'Dining room',kitchen:'Kitchen',hall:'Start of hall'});
const ZONE_IDS=Object.keys(PRESENCE_ZONE_NAMES);
const finite=point=>Number.isFinite(point?.x)&&Number.isFinite(point?.y);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);

export function normalizePresenceZoneCalibration(value){
  const result={};
  for(const id of ZONE_IDS){
    const point=value?.[id];
    if(finite(point)&&Math.abs(point.x)<=1200&&point.y>=0&&point.y<=1200)
      result[id]={x:Math.round(point.x),y:Math.round(point.y)};
  }
  return result;
}

export function createPresenceZoneMap(layout,calibration={}){
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
  const memory=new Map();
  function classify(point,raw){
    if(finite(raw)){
      const close=Object.entries(learned).map(([id,anchor])=>({id,d:distance(raw,anchor)}))
        .sort((a,b)=>a.d-b.d)[0];
      if(close&&close.d<=85)return close.id;
    }
    return ZONE_IDS.reduce((best,id)=>distance(point,anchors[id])<distance(point,anchors[best])?id:best,'living');
  }
  function resolve(point,raw,now,nearest){
    if(!finite(point))return null;
    const candidate=classify(point,raw),id=point.id??'anonymous';
    let held=memory.get(id);
    if(!held)held={zone:candidate,pending:null,since:now};
    else if(candidate===held.zone){held.pending=null;held.since=now;}
    else if(held.pending!==candidate){held.pending=candidate;held.since=now;}
    else if(now-held.since>=1200){held.zone=candidate;held.pending=null;}
    memory.set(id,held);
    const target=anchors[held.zone];
    const safe=nearest?.(target.x,target.y,135)??target;
    return {...point,x:safe.x,y:safe.y,zone:held.zone};
  }
  return {anchors,resolve,calibrate(zone,raw){
    if(!ZONE_IDS.includes(zone)||!finite(raw))return false;
    learned=normalizePresenceZoneCalibration({...learned,[zone]:raw});memory.clear();return true;
  },get calibration(){return {...learned};},clear(){memory.clear();}};
}
