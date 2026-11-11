import {createFloorSupport} from './storybook-floor-support.mjs';
import {isOutdoorRoom} from './storybook-structure.mjs';

const LAMP = /^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/;
const FLOOR_FURNITURE = /^(?:sofa|bed|table|desk|chair|dresser|nightstand|counter|kitchenWorktop|tv|tub|toilet|doubleVanity|bathFixtures|storageCabinet|bedroomBench|fireplace|shelf|pets-|living-|bedroom-|play-furniture-)/;
const STEPS = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [-1, 1], [-1, -1], [1, -1]];
const DIRECTIONS = STEPS.map(([x, y]) => ({x: x / Math.hypot(x, y), y: y / Math.hypot(x, y)}));
const SEARCH_OFFSETS = Array.from({length: 17}, (_, y) =>
  Array.from({length: 17}, (_, x) => ({x: (x - 8) * 24, y: (y - 8) * 24})))
  .flat().sort((a, b) => Math.hypot(a.x, a.y) - Math.hypot(b.x, b.y));

const DAY = {night: false, daylightKnown: true, condition: 'partlycloudy', sunElevation: 31};
const GOLDEN_HOUR = {...DAY, condition: 'sunny', sunElevation: 13, sunRising: false};
const RAIN = {...DAY, condition: 'rainy', sunElevation: 26};
const MOON = {...DAY, night: true, condition: 'clear-night', moonPhase: 'full_moon', sunElevation: -16};

function validPoint(point) {
  return Number.isFinite(point?.x) && Number.isFinite(point?.y);
}

function classify(item) {
  const {type, visualKind} = item;
  if (type === 'cameraThumbnail' || type.startsWith('ui')) return;
  if (type === 'presenceSwitch') return 'presence';
  if (type === 'garageDoor') return 'garage';
  if (type === 'windowFan' || type.startsWith('fans-') || visualKind === 'fan') return 'fan';
  if (type.startsWith('cleaning-') && type.includes('robot') || visualKind === 'vacuum') return 'vacuum';
  if (LAMP.test(type) || item.lightForm || visualKind === 'light') return 'lamps';
  if (type === 'door' || visualKind === 'door') return 'door';
  if (visualKind === 'window' || /^(?:controlZone|window)$/.test(type) && item.entityId?.startsWith('cover.')) {
    return 'door';
  }
  if (type === 'airPurifier' || type === 'humidifier') return 'air';
  if (type === 'thermostat' || type === 'wallUnit' || visualKind === 'climate') return 'climate';
  if (type === 'pets-fish-aquarium-oak' || type === 'pets-lizard-terrarium-walnut') return 'habitat';
}

function pointAlong(start, end, amount) {
  return {x: start.x + (end.x - start.x) * amount, y: start.y + (end.y - start.y) * amount};
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function floorGeometry(layout) {
  const rooms = (layout?.rooms ?? []).filter(room => room?.points?.length >= 3 &&
    room.points.every(validPoint) && !isOutdoorRoom(room));
  const geometry = rooms.map(room => {
    const ring = [...room.points, room.points[0]].map(({x, y}) => [x, y]);
    return {room, support: createFloorSupport([[ring]])};
  });
  const primary = geometry.find(({room}) => /living|great/i.test(`${room.id} ${room.name}`)) ?? geometry[0];
  return {geometry, primary};
}

function roomCenter(room) {
  if (!room) return;
  const sum = room.points.reduce((total, point) => ({x: total.x + point.x, y: total.y + point.y}), {x: 0, y: 0});
  return {x: sum.x / room.points.length, y: sum.y / room.points.length};
}

function obstacleClearance(layout, items) {
  const furniture = items.filter(item => FLOOR_FURNITURE.test(item.type)).map(item => {
    const rotation = (item.rotation || 0) * Math.PI / 180;
    return {item, cos: Math.cos(rotation), sin: Math.sin(rotation)};
  });
  const walls = (layout?.walls ?? []).filter(wall => wall && wall.kind !== 'fence' &&
    [wall.x1, wall.y1, wall.x2, wall.y2].every(Number.isFinite)).map(wall => {
    const dx = wall.x2 - wall.x1;
    const dy = wall.y2 - wall.y1;
    return {...wall, dx, dy, length2: dx * dx + dy * dy};
  }).filter(wall => wall.length2 > 0);
  return (point, radius) => {
    for (const {item, cos, sin} of furniture) {
      const dx = point.x - item.x;
      const dy = point.y - item.y;
      if (Math.abs(dx * cos + dy * sin) < item.w / 2 + radius &&
          Math.abs(-dx * sin + dy * cos) < item.h / 2 + radius) return false;
    }
    for (const wall of walls) {
      const dx = point.x - wall.x1;
      const dy = point.y - wall.y1;
      const fraction = Math.min(1, Math.max(0, (dx * wall.dx + dy * wall.dy) / wall.length2));
      if (Math.hypot(dx - fraction * wall.dx, dy - fraction * wall.dy) < radius + 6) return false;
    }
    return true;
  };
}

function demoRoutes(anchor, support, clearOfObstacles, {radius, lengths, count, spacing}) {
  if (!anchor || !support) return [];
  const routes = [];
  const fits = point => support.clearance(point.x, point.y) >= radius && clearOfObstacles(point, radius)
    && routes.every(route => route.samples.every(other => distance(point, other) >= spacing));
  for (const offset of SEARCH_OFFSETS) {
    const start = {x: anchor.x + offset.x, y: anchor.y + offset.y};
    if (!fits(start)) continue;
    let route;
    for (const length of lengths) {
      for (const direction of DIRECTIONS) {
        const end = {x: start.x + direction.x * length, y: start.y + direction.y * length};
        if (!support.supportsRoute(start.x, start.y, end.x, end.y)) continue;
        const samples = Array.from({length: 5}, (_, index) => pointAlong(start, end, index / 4));
        if (samples.slice(1).every(fits)) {
          route = {start, end, samples};
          break;
        }
      }
      if (route) break;
    }
    if (route) routes.push(route);
    if (routes.length === count) break;
  }
  return routes;
}

function firstMatch(items, preferred) {
  return items.find(item => item.entityId && preferred(item)) ?? items.find(preferred)
    ?? items.find(item => item.entityId) ?? items[0];
}

function control(state, active = false, attributes = {}, presence = 'off') {
  return {state, active, attributes, presence};
}

function doorState(time) {
  if (time < 480) return control('closed', false, {current_position: 0});
  if (time < 1280) return control('opening', false, {current_position: (time - 480) / 8});
  if (time < 2180) return control('open', false, {current_position: 100});
  if (time < 2800) return control('closing', false, {current_position: (2800 - time) / 6.2});
  return control('closed', false, {current_position: 0});
}

function demoEnvironment(beat, time) {
  if (beat === 'lamps') return {...GOLDEN_HOUR, sunElevation: 1};
  if (beat === 'weather') return {...(time < 1150 ? GOLDEN_HOUR : time < 2150 ? RAIN : MOON)};
  if (beat === 'traffic') return {...GOLDEN_HOUR,
    traffic: time < 1250 ? {severity: 'clear', speedFactor: 1} : {severity: 'heavy', speedFactor: .32}};
  if (beat === 'finale') return {...GOLDEN_HOUR, traffic: {severity: 'slow', speedFactor: .55}};
  return {...DAY};
}

/** Build render-only cues from the authored scene once per demo run. */
export function createStorybookDemoScenario(layout) {
  const items = (layout?.items ?? []).filter(item => typeof item?.id === 'string' &&
    typeof item.type === 'string' && validPoint(item));
  const byKind = new Map();
  for (const item of items) {
    const kind = classify(item);
    if (!kind) continue;
    if (!byKind.has(kind)) byKind.set(kind, []);
    byKind.get(kind).push(item);
  }
  const kinds = name => byKind.get(name) ?? [];
  const primaryLamp = firstMatch(kinds('lamps'), item => /desk|table|bedside/i.test(item.name ?? item.type));
  const fan = firstMatch(kinds('fan'), item => item.type !== 'windowFan');
  const fanLight = fan && kinds('lamps').find(item => item !== primaryLamp && distance(item, fan) < 35);
  const sensor = kinds('presence')[0];
  const vacuum = kinds('vacuum')[0];
  const garage = kinds('garage')[0];
  const habitat = kinds('habitat')[0];
  const air = kinds('air')[0];
  const floor = floorGeometry(layout);
  const supportNear = anchor => (anchor && floor.geometry.find(({support}) =>
    support.contains(anchor.x, anchor.y)) || floor.primary)?.support;
  const clearOfObstacles = obstacleClearance(layout, items);
  const personAnchor = sensor ?? roomCenter(floor.primary?.room);
  const peopleRoutes = demoRoutes(personAnchor, supportNear(personAnchor), clearOfObstacles,
    {radius: 24, lengths: [48, 24, 0], count: 3, spacing: 42});
  const radius = vacuum && Math.min(480, Math.max(12, Math.min(vacuum.w || 42, vacuum.h || 42))) * .44;
  const [vacuumRoute] = demoRoutes(vacuum, supportNear(vacuum), clearOfObstacles,
    {radius, lengths: [100, 64, 36], count: 1, spacing: 0});
  const presenceFocus = peopleRoutes.length ? roomCenter({points: peopleRoutes.flatMap(({start, end}) => [start, end])})
    : personAnchor;
  const targets = {
    presence: presenceFocus && {x: presenceFocus.x, y: presenceFocus.y},
    lamps: primaryLamp?.id,
    fan: fan?.id,
    vacuum: vacuumRoute ? pointAlong(vacuumRoute.start, vacuumRoute.end, .5) : vacuum?.id,
    garage: garage?.id,
    habitat: (habitat ?? air ?? kinds('climate')[0] ?? kinds('door')[0])?.id,
  };

  function sampleFrame({beat, beatTimeMs = 0}) {
    const time = Math.max(0, beatTimeMs);
    const states = Object.create(null);
    const present = beat === 'presence' && time >= 240;
    const people = present ? peopleRoutes.map(({start, end}, index) => {
      const step = Math.max(0, Math.floor((time - 240) / 360));
      const phase = (step + index * 2) % 8;
      return {id: `demo-person-${index + 1}`, ...pointAlong(start, end, (phase < 4 ? phase : 8 - phase) / 4)};
    }) : [];
    for (const item of kinds('presence')) states[item.id] = control('off', false, {}, present ? 'on' : 'off');
    for (const [index, item] of kinds('lamps').entries()) {
      const lit = beat === 'lamps' && (item === primaryLamp ? time >= 530 && time < 2430 : time >= 1320)
        || beat === 'fan' && item === fanLight && time >= 1120 && time < 2220
        || beat === 'finale' && index % 2 === 0;
      states[item.id] = lit ? control('on', true, {brightness: 230}) : control('off');
    }
    for (const item of kinds('fan')) {
      const spinning = beat === 'fan' && item === fan && time >= 470 && time < 2460
        || beat === 'finale' && item === fan;
      states[item.id] = spinning ? control('on', true, {percentage: 78}) : control('off');
    }
    for (const item of kinds('vacuum')) {
      const cleaning = beat === 'vacuum' && item === vacuum && time >= 360;
      const position = cleaning && vacuumRoute
        ? pointAlong(vacuumRoute.start, vacuumRoute.end, Math.min(1, (time - 360) / 2400)) : undefined;
      states[item.id] = {...control(cleaning ? 'cleaning' : 'docked', cleaning), position};
    }
    for (const item of kinds('garage')) states[item.id] = doorState(beat === 'garage' && item === garage ? time : 0);
    for (const item of kinds('door')) states[item.id] = doorState(beat === 'habitat' ? time : 0);
    for (const item of kinds('air')) {
      states[item.id] = beat === 'habitat' && time >= 550 ? control('on', true) : control('off');
    }
    for (const item of kinds('climate')) {
      states[item.id] = beat === 'habitat' && time >= 920
        ? control('cool', true, {hvac_action: 'cooling'}) : control('off');
    }
    return {states, environment: demoEnvironment(beat, time), people, moving: true};
  }
  return {targets, sampleFrame};
}
