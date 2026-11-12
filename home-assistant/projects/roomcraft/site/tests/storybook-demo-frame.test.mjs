import assert from 'node:assert/strict';
import test from 'node:test';
import {createStorybookDemoScenario} from '../ha-local/storybook-demo-frame.mjs';

const fixture = {
  rooms: [{id: 'living', points: [{x: 100, y: 100}, {x: 460, y: 100}, {x: 460, y: 450},
    {x: 270, y: 450}, {x: 270, y: 380}, {x: 100, y: 380}]}],
  walls: [{x1: 310, y1: 290, x2: 310, y2: 400}],
  items: [
    {id: 'switch', type: 'presenceSwitch', x: 400, y: 160},
    {id: 'lamp', type: 'tableLamp', x: 420, y: 360},
    {id: 'fan', type: 'fans-five-blade-fan-white', x: 340, y: 220},
    {id: 'fan-lamp', type: 'ceilingLight', x: 340, y: 220},
    {id: 'robot', type: 'cleaning-robot-mop-white', x: 200, y: 300, w: 50, h: 50},
    {id: 'sofa', type: 'sofa', x: 200, y: 145, w: 130, h: 60},
    {id: 'garage', type: 'garageDoor', x: 50, y: 30},
    {id: 'camera', type: 'cameraThumbnail', x: 50, y: 60, entityId: 'camera.test'},
    {id: 'air', type: 'humidifier', x: 400, y: 380},
    {id: 'shade', type: 'controlZone', x: 180, y: 100, entityId: 'cover.test'},
  ],
};
const scenario = createStorybookDemoScenario(fixture);
const sample = (beat, beatTimeMs) => scenario.sampleFrame({beat, beatTimeMs});

test('showcase targets the real authored model IDs and keeps camera data out of every sample', () => {
  assert.equal(scenario.targets.lamps, 'lamp');
  assert.equal(scenario.targets.fan, 'fan');
  assert.equal(scenario.targets.garage, 'garage');
  assert.equal(scenario.targets.habitat, 'air');
  assert.equal(sample('overview', 0).states.camera, undefined);
  assert.deepEqual(sample('lamps', 800), sample('lamps', 800));
  sample('lamps', 800).states.lamp.attributes.brightness = 0;
  assert.equal(sample('lamps', 800).states.lamp.attributes.brightness, 230);
});

test('light and fan controls preview independent on and off states', () => {
  assert.equal(sample('lamps', 0).states.lamp.state, 'off');
  assert.equal(sample('lamps', 750).states.lamp.state, 'on');
  assert.equal(sample('lamps', 2700).states.lamp.state, 'off');
  assert.deepEqual([750, 1600, 2500].map(time => {
    const {states} = sample('fan', time);
    return [states.fan.state, states['fan-lamp'].state];
  }), [['on', 'off'], ['on', 'on'], ['off', 'off']]);
});

test('presence animates three anonymous tracks on the authored indoor floor', () => {
  assert.deepEqual(sample('presence', 0).people, []);
  assert.equal(sample('presence', 900).states.switch.presence, 'on');
  const first = sample('presence', 900).people;
  assert.deepEqual(first.map(({id}) => id), ['demo-person-1', 'demo-person-2', 'demo-person-3']);
  assert.notDeepEqual(first, sample('presence', 1800).people);
  for (let time = 250; time < 3000; time += 150) {
    for (const {x, y} of sample('presence', time).people) {
      assert.ok(x >= 124 && x <= 436 && y >= 124 && y <= 426);
      assert.ok(x > 270 || y < 380);
    }
  }
  assert.deepEqual(sample('traffic', 1500).people, []);
});

test('vacuum moves between clear floor points and cover art receives an open-close sweep', () => {
  assert.equal(sample('vacuum', 0).states.robot.state, 'docked');
  const positions = [500, 1500, 2600].map(time => sample('vacuum', time).states.robot.position);
  assert.equal(new Set(positions.map(({x, y}) => `${x},${y}`)).size, 3);
  assert.ok(positions.every(({x, y}) => x >= 122 && x <= 438 && y >= 122 && y < 360));
  assert.equal(sample('overview', 0).states.robot.position, undefined);
  const covers = [0, 700, 1700, 2500, 3000].map(time => sample('garage', time).states.garage);
  assert.deepEqual(covers.map(({state}) => state), ['closed', 'opening', 'open', 'closing', 'closed']);
  assert.ok(covers[1].attributes.current_position > 0 && covers[1].attributes.current_position < 100);
  assert.equal(sample('habitat', 1700).states.air.active, true);
  assert.equal(sample('habitat', 1700).states.shade.state, 'open');
});

test('weather and traffic cues work without any linked sensors or placed models', () => {
  const empty = createStorybookDemoScenario({rooms: [], walls: [], items: []});
  const weather = beatTimeMs => empty.sampleFrame({beat: 'weather', beatTimeMs}).environment;
  const day = Array.from({length: 14}, (_, index) => weather(index * 800));
  assert.deepEqual(day.map(({condition}) => condition), ['sunny', 'partlycloudy', 'cloudy', 'fog',
    'windy', 'windy-variant', 'rainy', 'pouring', 'lightning', 'lightning-rainy', 'hail',
    'snowy', 'snowy-rainy', 'exceptional']);
  assert.deepEqual(day.slice(4, 6).map(({windBearing}) => windBearing), [270, 90]);
  assert.ok(weather(1200).sunElevation > weather(0).sunElevation);
  assert.ok(weather(0).night && weather(0).sunRising);
  assert.ok(!weather(600).night && weather(600).sunAzimuth < 180);
  const finish = beatTimeMs => empty.sampleFrame({beat: 'finale', beatTimeMs}).environment;
  assert.ok(!finish(0).night && !finish(0).sunRising);
  assert.ok(finish(1900).night && finish(1900).sunAzimuth > 180);
  const night = Array.from({length: 8}, (_, index) => weather(11200 + index * 600));
  assert.ok(night.every(({condition, night}) => condition === 'clear-night' && night));
  assert.deepEqual(night.map(({moonPhase}) => moonPhase), ['new_moon', 'waxing_crescent', 'first_quarter',
    'waxing_gibbous', 'full_moon', 'waning_gibbous', 'last_quarter', 'waning_crescent']);
  assert.ok(night.at(-1).skyProgress > night[0].skyProgress);
  assert.equal(sample('traffic', 1000).environment.traffic.severity, 'clear');
  assert.equal(sample('traffic', 1800).environment.traffic.severity, 'heavy');
  assert.equal(sample('overview', 0).environment.traffic, undefined);
});
