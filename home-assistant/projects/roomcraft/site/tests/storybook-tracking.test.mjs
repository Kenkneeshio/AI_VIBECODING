import assert from 'node:assert/strict';
import test from 'node:test';
import {readDetectionZones, readPersonTracks, trackingSnapshots, validTrackTransform} from '../ha-local/storybook-tracking.mjs';

const source = {type:'presenceSwitch', presenceTrackEntityId:'sensor.radar_a',
  presenceTrackTransform:[0,-1.1,600,1.1,0,400]};
const snapshot = (id = 1, x = 20, y = 100, at = 8000) => ({state:'1', attributes:{
  tracking_schema:'roomcraft-presence-v1', observed_at:at, tracks:[{id,x,y,z:5,speed:0}],
  zones:[true,false], internal:'ignored',
}});

test('detection zone uses the radar calibration and clips to the editable map', () => {
  const zone = {id:'radar', ...source, presenceTrackZone:[-600,600,0,600]};
  assert.deepEqual(readDetectionZones([zone]), [{
    id:'radar', points:[{x:0,y:0},{x:600,y:0},{x:600,y:1024},{x:0,y:1024}],
  }]);
  assert.deepEqual(readDetectionZones([{...zone,presenceTrackZone:[10,-10,0,600]}, source]), []);
});

test('map coordinates from multiple radars and keep source-scoped track identities', () => {
  const states = {'sensor.radar_a':snapshot(), 'sensor.radar_b':snapshot()};
  const second = {...source, presenceTrackEntityId:'sensor.radar_b', presenceTrackTransform:[1,0,800,0,1,500]};
  assert.deepEqual(readPersonTracks([source, {...source}, second], states, 9000), [
    {id:'sensor.radar_a:1',x:490,y:422,expiresAt:12500},
    {id:'sensor.radar_b:1',x:820,y:600,expiresAt:12500},
  ]);
});

test('drop stale, unknown, out of range and malformed data without inferring people', () => {
  const states = {'sensor.radar_a':snapshot()};
  assert.deepEqual(readPersonTracks([source], states, 12500), []);
  assert.deepEqual(readPersonTracks([source], states, 6500), []);
  assert.deepEqual(readPersonTracks([source], {'sensor.radar_a':snapshot(2,20,680)}, 9000), []);
  assert.deepEqual(readPersonTracks([source], {'sensor.radar_a':{...snapshot(),state:'unavailable'}}, 9000), []);
  assert.equal(validTrackTransform([1,2,3,2,4,6]), false);
  assert.equal(validTrackTransform(source.presenceTrackTransform), true);
});

test('only authorized tracker schema fields are passed to Studio', () => {
  const states = {
    'sensor.radar_a':snapshot(),
    'sensor.other':{state:'21',attributes:{friendly_name:'Temperature'}},
  };
  const result = trackingSnapshots(states, ['sensor.radar_a','sensor.other','light.example']);
  assert.deepEqual(Object.keys(result), ['sensor.radar_a']);
  assert.deepEqual(result['sensor.radar_a'].attributes.tracks, [{id:1,x:20,y:100,z:5,speed:0}]);
  assert.equal(result['sensor.radar_a'].attributes.internal, undefined);
});
