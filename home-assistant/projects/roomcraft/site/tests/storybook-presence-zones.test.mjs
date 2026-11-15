import test from 'node:test';
import assert from 'node:assert/strict';
import {createPresenceZoneMap,normalizePresenceZoneCalibration} from '../ha-local/storybook-presence-zones.mjs';

const layout={items:[
  {type:'sofa',x:493,y:333},{type:'diningTable',x:447,y:695},
  {type:'counter',x:654,y:661},{type:'presenceSwitch',x:781,y:442},
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
