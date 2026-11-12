import assert from 'node:assert/strict';
import test from 'node:test';
import {readRoomControls, roomControlAction} from '../ha-local/storybook-controls-view.mjs';

const room = (id,name,x) => ({id,name,points:[{x,y:0},{x:x+100,y:0},{x:x+100,y:100},{x,y:100}]});
const config = {
  roomcraft_layout: {
    version:2, walls:[], rooms:[room('office','Office',0),room('hall','Hall',100)],
    items:[
      {id:'lamp',name:'Desk lamp',entityId:'light.desk',x:20,y:40,presenceEntityId:'binary_sensor.office_presence'},
      {id:'shade',name:'Hall shade',entityId:'cover.shade',x:135,y:-4},
      {id:'tv',name:'Hall display',entityId:'media_player.display',x:150,y:50},
      {id:'cam',type:'cameraThumbnail',name:'Doorbell',entityId:'camera.porch',x:200,y:250},
    ],
  },
  roomcraft_plan: {
    type:'picture-elements', elements:[
      {type:'custom:roomcraft-object-control',roomcraft_item_id:'lamp',entity:'light.desk',
        title:'Desk lights',roomcraft_tap_action:'toggle',roomcraft_hold_action:'activate',
        roomcraft_hold_entity:'scene.desk'},
      {type:'custom:roomcraft-camera-thumbnail',roomcraft_item_id:'cam',camera_entity:'camera.porch'},
      {type:'custom:roomcraft-status-popup',roomcraft_status_kind:'air',entities:['sensor.office_air']},
      {type:'custom:roomcraft-entity-menu',roomcraft_menu:true,sections:[{title:'Hall',
        entities:['sensor.hall_temperature','media_player.display']}]},
      {type:'custom:roomcraft-weather-outdoor',weather_entity:'weather.home'},
    ],
  },
};

test('published objects use room geometry and keep their authoritative control and sensor bindings', () => {
  const groups = readRoomControls(config);
  assert.deepEqual(groups.map(group => group.title), ['Office','Hall','Shared and exterior','Indoor air']);
  const rows = Object.fromEntries(groups.map(group => [group.title,group.rows.map(row => row.entity)]));
  assert.deepEqual(rows, {
    Office:['light.desk','binary_sensor.office_presence'],
    Hall:['cover.shade','media_player.display','sensor.hall_temperature'],
    'Shared and exterior':['camera.porch','weather.home'],
    'Indoor air':['sensor.office_air'],
  });
  const lamp = groups[0].rows[0];
  assert.equal(lamp.name, 'Desk lights');
  assert.equal(lamp.holdEntity, 'scene.desk');
  assert.equal(groups[2].rows[0].tap, 'more-info');
});

test('eligible visible devices without layout objects supplement their HA area with conservative actions', () => {
  const groups = readRoomControls(config, {
    entities:{
      'fan.extra':{device_id:'air-device'},
      'lock.back':{area_id:'foyer'},
      'sensor.ambient':{area_id:'office'},
      'switch.debug':{area_id:'office',entity_category:'diagnostic'},
      'switch.hidden':{area_id:'office',hidden:true},
      'switch.unplaced':{},
      'switch.inactive':{area_id:'office',disabled_by:'user'},
      'sensor.debug':{area_id:'office'},
    },
    devices:{'air-device':{area_id:'office'}},
    areas:{office:{name:'Office'},foyer:{name:'Foyer'}},
    states:{
      'fan.extra':{state:'on'}, 'lock.back':{state:'locked'},
      'sensor.ambient':{state:'23',attributes:{device_class:'temperature'}},
      'sensor.debug':{state:'1'}, 'switch.debug':{state:'off'}, 'switch.hidden':{state:'off'},
      'switch.unplaced':{state:'off'}, 'switch.inactive':{state:'off'},
    },
  });
  const office = groups.find(group => group.title === 'Office');
  assert.deepEqual(office.rows.map(row => row.entity),
    ['light.desk','binary_sensor.office_presence','fan.extra','sensor.ambient']);
  assert.equal(office.rows[2].tap, 'toggle');
  const lock = groups.find(group => group.title === 'Foyer').rows[0];
  assert.equal(lock.tap, 'more-info');
  assert.equal(lock.entity, 'lock.back');
});

test('room actions preserve explicit targets, do not activate missing entities, and route sensitive items to details', () => {
  const [office, hall] = readRoomControls(config);
  const light = office.rows[0];
  const hass = {services:{light:{toggle:{}},cover:{toggle:{}}},states:{
    'light.desk':{state:'on'}, 'scene.desk':{state:'unknown'}, 'cover.shade':{state:'closed'},
  }};
  assert.deepEqual(roomControlAction(light, 'tap', hass), {
    target:'light.desk',label:'Turn off',available:true,domain:'homeassistant',service:'toggle',
  });
  assert.deepEqual(roomControlAction(light, 'hold', hass), {
    target:'scene.desk',label:'Run',available:false,domain:'scene',service:'turn_on',
  });
  assert.deepEqual(roomControlAction(hall.rows[0], 'tap', hass), {
    target:'cover.shade',label:'Toggle',available:true,domain:'homeassistant',service:'toggle',
  });
  assert.deepEqual(roomControlAction({entity:'vacuum.living',tap:'auto'}, 'tap', hass), {target:'vacuum.living'});
  assert.equal(roomControlAction(light, 'tap', {...hass,connected:false}).available, false);
});
