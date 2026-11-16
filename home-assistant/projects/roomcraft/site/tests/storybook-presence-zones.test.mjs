import test from 'node:test';
import assert from 'node:assert/strict';
import {createPresenceZoneMap,normalizePresenceZoneCalibration,normalizePresenceZoneSettings,
  summarizePresenceAreas} from '../ha-local/storybook-presence-zones.mjs';

const layout={items:[
  {type:'sofa',x:493,y:333},{type:'diningTable',x:447,y:695},
  {type:'counter',x:654,y:661},{type:'presenceSwitch',x:781,y:442,
    presenceTrackTransform:[1,0,0,0,1,0]},
]};
const nearest=(x,y)=>({x,y});

test('four stable room areas hide exact radar coordinates and accept local calibration',()=>{
  const zones=createPresenceZoneMap(layout,{hall:{x:-190,y:451}});
  const tracked={id:'radar:1',x:285,y:233};
  const hall=zones.resolve(tracked,{x:-190,y:451},1000,nearest);
  assert.deepEqual([hall.zone,hall.x,hall.y],['hall',854,514]);
  assert.notDeepEqual([hall.x,hall.y],[tracked.x,tracked.y]);
  zones.calibrate('kitchen',{x:-50,y:330});
  const atTable={id:'radar:2',x:447,y:695};
  const kitchen=zones.resolve(atTable,{x:-50,y:330},1000,nearest);
  assert.equal(kitchen.zone,'kitchen');
  assert.deepEqual([kitchen.x,kitchen.y],[749,606]);
  assert.equal(zones.resolve(atTable,{x:-190,y:451},1300,nearest).zone,'kitchen');
  assert.equal(zones.resolve(atTable,{x:-190,y:451},2600,nearest).zone,'hall');
  assert.deepEqual(normalizePresenceZoneCalibration({kitchen:{x:Infinity,y:0},hall:{x:-190.4,y:451.2}}),
    {hall:{x:-190,y:451}});
});

test('calibrated radar movement animates inside a bounded room area without changing the room label',()=>{
  const zones=createPresenceZoneMap(layout,{kitchen:{x:-50,y:330}},
    {movementGain:1,movementRadius:30,switchDelayMs:800,matchDistanceCm:100});
  const first=zones.resolve({id:'radar:1',x:447,y:695},{x:-50,y:330},1000,nearest);
  const moved=zones.resolve({id:'radar:1',x:480,y:695},{x:-30,y:330},1200,nearest);
  assert.deepEqual([first.zone,first.x,first.y],['kitchen',749,606]);
  assert.deepEqual([moved.zone,moved.x,moved.y],['kitchen',769,606]);
  const capped=zones.resolve({id:'radar:1',x:520,y:695},{x:20,y:330},1400,nearest);
  assert.equal(Math.hypot(capped.x-749,capped.y-606),30);
  assert.equal(zones.removeCalibration('kitchen'),true);
  assert.deepEqual(zones.calibration,{});
});

test('area counts distinguish fresh tracks from retained locations and settings stay bounded',()=>{
  const counts=summarizePresenceAreas([{zone:'living'},{zone:'living',quality:'last-known'},
    {zone:'kitchen'},{zone:'office'},{zone:'hall',quality:'area'}]);
  assert.deepEqual(counts.living,{live:1,retained:1});
  assert.deepEqual(counts.kitchen,{live:1,retained:0});
  assert.deepEqual(counts.hall,{live:0,retained:1});
  assert.deepEqual(normalizePresenceZoneSettings({movementGain:99,movementRadius:-5,
    switchDelayMs:99999,matchDistanceCm:0}),
    {movementGain:1.5,movementRadius:0,switchDelayMs:3000,matchDistanceCm:40,
      walkingSpeed:115,socialRadius:95,furnitureInteractions:true,socialInteractions:true,trackingMode:'areas'});
  const behavior=normalizePresenceZoneSettings({walkingSpeed:999,socialRadius:-2,
    furnitureInteractions:false,socialInteractions:false,trackingMode:'precise'});
  assert.deepEqual([behavior.walkingSpeed,behavior.socialRadius,behavior.furnitureInteractions,
    behavior.socialInteractions,behavior.trackingMode],[240,0,false,false,'precise']);
});
