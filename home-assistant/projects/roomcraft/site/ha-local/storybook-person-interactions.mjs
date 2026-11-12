import * as THREE from 'three';
import '../public/inventory.js';

const FRONT = [[0, 1]];
const SIDES = [[-1, 0], [1, 0]];
const AROUND = [...FRONT, ...SIDES, [0, -1]];
const SCREEN_SIDE = [[-1, 0]];
const INTERIOR = [[0, 0]];
const LONG_SIDE = 'long-side';
const TABLETOP_REACH = 37;
const COUNTER = {pose:'prep', faces:LONG_SIDE};
const WASH = {pose:'wash', faces:LONG_SIDE};
const BED = {pose:'makeBed', faces:SIDES};
const DESK = {pose:'write', faces:FRONT};
const BOOKCASE = {pose:'browse', faces:FRONT};
const CABINET = {pose:'tidy', faces:AROUND, frontPreference:9};
const PLANTS = {pose:'water', faces:AROUND};
const FLOOR_PLAY = {pose:'floorPlay', faces:INTERIOR, penalty:16};
const LAMP = {pose:'adjust', faces:AROUND, penalty:8};

const MODELS = new Map([
  ['tv', {pose:'watch', faces:SCREEN_SIDE, reach:64, offset:13}],
  ['desk', {...DESK, faceFraction:-.16, single:true}],
  ['bed', BED],
  ['diningTable', {pose:'setTable', faces:LONG_SIDE}],
  ['table', {pose:'setTable', faces:LONG_SIDE}],
  ['coffeeTable', {pose:'setTable', faces:AROUND}],
  ['sideTable', {pose:'tidy', faces:AROUND}],
  ['counter', COUNTER],
  ['kitchenWorktop', {pose:'cook', faces:AROUND}],
  ['doubleVanity', WASH],
  ['bathFixtures', {...WASH, penalty:8}],
  ['tub', {pose:'rinse', faces:LONG_SIDE}],
  ['bookcase', BOOKCASE],
  ['dresser', CABINET],
  ['storageCabinet', CABINET],
  ['nightstand', CABINET],
  ['floorPlant', PLANTS],
  ['plant', PLANTS],
  ['mirror', {pose:'groom', faces:FRONT, wall:true}],
  ['artwork', {pose:'admire', faces:FRONT, wall:true}],
  ['presenceSwitch', {pose:'tap', faces:FRONT, wall:true}],
  ['thermostat', {pose:'adjust', faces:FRONT, wall:true}],
  ['window', {pose:'lookOut', faces:AROUND, wall:true, reach:50}],
  ['wallUnit', {pose:'admire', faces:FRONT, wall:true, penalty:12}],
  ['humidifier', {pose:'inspect', faces:AROUND, penalty:6}],
  ['airPurifier', {pose:'inspect', faces:AROUND, penalty:6}],
  ['windowFan', {pose:'inspect', faces:AROUND, penalty:6}],
  ['lamp', LAMP],
  ['floorLamp', LAMP],
  ['tableLamp', LAMP],
]);

const SERIES = new Map([
  ['desk', DESK],
  ['bed', BED],
  ['dining-table', {pose:'setTable', faces:LONG_SIDE}],
  ['dining', {pose:'setTable', faces:LONG_SIDE}],
  ['coffee-table', {pose:'setTable', faces:AROUND}],
  ['side-table', {pose:'tidy', faces:AROUND}],
  ['bookcase', BOOKCASE],
  ['nightstand', CABINET],
  ['dresser', CABINET],
  ['floor-light', LAMP],
  ['table-light', LAMP],
  ['wall-light', {...LAMP, faces:FRONT, wall:true}],
]);

const PLAY = {pose:'toyPlay', faces:AROUND};
const FAMILIES = new Map([
  ['softToy', PLAY],
  ['activityToy', PLAY],
  ['foamBlock', {pose:'stack', faces:AROUND, penalty:3}],
  ['playMat', FLOOR_PLAY],
  ['paddedPanel', {pose:'peek', faces:LONG_SIDE, penalty:12}],
  ['fireplace', {pose:'warm', faces:FRONT, offset:6}],
  ['shelf', BOOKCASE],
  ['storage', {pose:'sort', faces:FRONT}],
  ['planterSet', PLANTS],
  ['playFurniture', PLAY],
]);

const FORMS = new Map([
  ['aquarium', {pose:'watchFish', faces:AROUND, offset:5}],
  ['terrarium', {pose:'watchGecko', faces:AROUND, offset:5}],
  ['cornerDesk', {...DESK, faceFraction:-.16, single:true}],
  ['cribBed', {pose:'peek', faces:SIDES}],
  ['book', {pose:'readFloor', faces:AROUND}],
  ['ball', {pose:'ballPlay', faces:AROUND}],
  ['texturedBall', {pose:'ballPlay', faces:AROUND}],
  ['plush', {pose:'cuddle', faces:AROUND}],
  ['photoBunnyPlush', {pose:'cuddle', faces:AROUND}],
  ['cups', {pose:'stack', faces:AROUND}],
  ['rings', {pose:'stack', faces:AROUND}],
  ['blocks', {pose:'stack', faces:AROUND}],
  ['photoActivityTable', {pose:'pressKeys', faces:AROUND}],
  ['activityBoard', {pose:'pressKeys', faces:FRONT}],
  ['mirror', {pose:'groom', faces:FRONT}],
  ['playGym', {pose:'reachToy', faces:AROUND}],
  ['photoWoodArch', {pose:'reachToy', faces:AROUND}],
  ['photoToyShelf', {pose:'sort', faces:FRONT}],
  ['lowShelf', {pose:'sort', faces:FRONT}],
  ['photoBearChair', {pose:'floorPlay', faces:FRONT}],
]);

function profileFor(type, inventory) {
  const entry = inventory?.[type];
  return MODELS.get(type) ?? FORMS.get(entry?.form) ?? SERIES.get(entry?.seriesId) ?? FAMILIES.get(entry?.artFamily);
}

function approaches(profile, w, h, focus) {
  if (profile.faces === INTERIOR) {
    const grid = size => size > 105 ? [-.27, 0, .27] : [0];
    return grid(w).flatMap(x => grid(h).map(z => ({x:w*x, z:h*z, nx:0, nz:0})));
  }
  const faces = profile.faces === LONG_SIDE ? (h > w ? SIDES : [[0,1],[0,-1]]) : profile.faces;
  return faces.flatMap(([nx,nz]) => {
    const span = nx ? h : w;
    const count = profile.single || focus ? 1 : Math.min(5, Math.ceil(span / 49));
    const side = (nx ? w : h) * (profile.faceFraction ?? .5);
    return Array.from({length:count}, (_, index) => {
      const across = focus
        ? Math.max(-span * .415,Math.min(span * .415,nx ? focus.z : focus.x))
        : ((index + .5) / count - .5) * span * .83;
      return {x: nx ? nx * side : across, z: nz ? nz * side : across, nx, nz};
    });
  });
}

/** Build stable approach locations once from the same placements used by the renderer. */
export function compileStorybookInteractions(placements, roots, supports) {
  const inventory = (typeof window === 'undefined' ? globalThis : window).RoomcraftInventory?.byType;
  const result = [];
  const byId = new Map(placements.map(placement => [placement.item.id,placement]));
  for (const {item,x,z,baseY,angle = 0,mountY} of placements) {
    const profile = profileFor(item.type, inventory);
    const {w,h} = item;
    if (!profile || !roots.has(item.id) || baseY !== 0 || item.visualKind === 'none' ||
        (!profile.wall && Number.isFinite(mountY)) ||
        ![w,h,x,z,angle].every(Number.isFinite) || w <= 0 || h <= 0) continue;
    const support = byId.get(supports?.get(item.id)?.supportId);
    const anchor = support ?? {item,x,z,angle};
    const cos = Math.cos(anchor.angle ?? 0);
    const sin = Math.sin(anchor.angle ?? 0);
    const supportProfile = support && profileFor(support.item.type,inventory);
    const shape = !support ? profile : supportProfile?.faceFraction !== undefined ? supportProfile : {faces:AROUND};
    const dx = x - anchor.x;
    const dz = z - anchor.z;
    const focus = support ? {x:dx*cos + dz*sin,z:dz*cos - dx*sin} : null;
    for (const [index, local] of approaches(shape,anchor.item.w,anchor.item.h,focus).entries()) {
      if (focus && Math.hypot(focus.x-local.x,focus.z-local.z) > TABLETOP_REACH) continue;
      const nx = local.nx * cos - local.nz * sin;
      const nz = local.nx * sin + local.nz * cos;
      result.push({
        id:`${item.id}:activity:${index}`, itemId:item.id, pose:profile.pose,
        obstacleId:anchor.item.id, focus:focus ? {x,z} : null,
        edgeX:anchor.x + local.x*cos - local.z*sin, edgeZ:anchor.z + local.x*sin + local.z*cos,
        nx,nz, heading:nx || nz ? Math.atan2(-nx,-nz) : -angle,
        reach:profile.reach ?? 44, offset:profile.offset ?? 3,
        penalty:(profile.penalty ?? 0) + (local.nz === 1 ? 0 : profile.frontPreference ?? 0),
      });
    }
  }
  return result;
}

/** Use only a physically reachable side of a nearby object. */
export function findStorybookInteraction(interactions, point, radius, {allowsPoint, allowsTarget} = {}, taken) {
  let best;
  let bestScore = Infinity;
  for (const item of interactions) {
    if (taken?.has(item.id) || taken?.has(item.itemId)) continue;
    const {edgeX,edgeZ,nx,nz} = item;
    const outside = (point.x-edgeX)*nx + (point.y-edgeZ)*nz;
    if (outside < -18) continue;
    const x = edgeX + nx*(radius + item.offset);
    const z = edgeZ + nz*(radius + item.offset);
    const distance = Math.hypot(x-point.x,z-point.y);
    const score = distance + item.penalty;
    if (distance > item.reach || score > bestScore ||
        (score === bestScore && item.id >= best.id)) continue;
    if (allowsPoint && !allowsPoint(x,z,radius)) continue;
    if (allowsTarget && (!allowsTarget(x,z,point.x,point.y,item.obstacleId) ||
        !allowsTarget(x,z,edgeX + nx*3,edgeZ + nz*3,item.obstacleId))) continue;
    bestScore = score;
    const heading = item.focus ? Math.atan2(item.focus.x-x,item.focus.z-z) : item.heading;
    best = {id:item.id,itemId:item.itemId,pose:item.pose,x,z,heading};
  }
  return best;
}

const SEAT = {lean:.03, thighs:-1.30, shins:1.16, hands:[-.43,-.40], pulse:[.10,.10], pace:2.1};
const KNEEL = {crouch:-4.4, lean:.24, thighs:-.77, shins:1.48, headPitch:.19, hands:[-.65,-.62]};

// Base transforms and repeating gestures are in avatar-local coordinates.
const POSES = {
  idle: SEAT,
  lounge: {...SEAT, lean:-.13, tilt:.07, thighs:-1.16, shins:.92, hands:[-.22,-.14], pace:1.8},
  dining: {...SEAT, lean:.06, hands:[-.69,-.56], pulse:[.10,.50], pace:1.75, prop:'spoon'},
  desk: {...SEAT, lean:.16, thighs:-1.26, shins:1.18, hands:[-.98,-.92], pulse:[.22,.22], pace:6.3},
  bench: {...SEAT, tilt:-.09, hands:[-.35,-.56], pulse:[.12,.20], pace:3.3},
  read: {...SEAT, lean:.13, headPitch:.31, hands:[-1.09,-1.17], pulse:[.08,.20], pace:1.85, prop:'book'},
  sip: {...SEAT, hands:[-.29,-.96], pulse:[.04,.58], pace:1.55, prop:'mug'},
  sketch: {...SEAT, lean:.18, headPitch:.31, hands:[-.63,-1.04], pulse:[.06,.26], pace:3.7, prop:'pencil'},
  chat: {...SEAT, tilt:-.10, hands:[-.42,-.58], pulse:[.20,.38], pace:2.9, look:.21},
  write: {lean:.21, headPitch:.31, hands:[-.55,-1.07], pulse:[.12,.27], pace:3.9, prop:'pencil'},
  prep: {lean:.14, headPitch:.18, hands:[-.90,-.91], pulse:[.12,.34], pace:4.1},
  cook: {lean:.12, headPitch:.16, hands:[-.74,-1.04], pulse:[.16,.37], pace:3.6, prop:'spoon'},
  wash: {lean:.19, headPitch:.24, hands:[-1.02,-1.06], pulse:[.34,.31], pace:5.8, armSpread:[-.12,.12]},
  rinse: {...KNEEL, crouch:-3.2, hands:[-.89,-.81], pulse:[.34,.12], pace:3.4},
  makeBed: {lean:.27, headPitch:.22, hands:[-.93,-.94], pulse:[.32,.28], pace:2.4, armSpread:[.15,-.15]},
  setTable: {lean:.13, headPitch:.18, hands:[-.55,-.86], pulse:[.20,.42], pace:2.9, prop:'mug'},
  tidy: {lean:.17, headPitch:.21, hands:[-.63,-.83], pulse:[.39,.42], pace:2.8},
  browse: {lean:.05, headPitch:-.12, hands:[-.18,-.90], pulse:[.06,.63], pace:1.8, look:.20},
  sort: {...KNEEL, hands:[-.73,-.94], pulse:[.42,.39], pace:3.6, prop:'ball'},
  warm: {lean:.08, headPitch:.10, hands:[-.98,-.98], pulse:[.09,.10], pace:2.1, armSpread:[.12,-.12]},
  water: {lean:.16, headPitch:.19, hands:[-.61,-.93], pulse:[.07,.57], pace:2, prop:'wateringCan'},
  watch: {lean:.03, headPitch:-.16, hands:[-.19,-.25], pulse:[.06,.08], pace:1.8, look:.10},
  watchFish: {lean:.13, headPitch:-.02, hands:[-.34,-.49], pulse:[.07,.22], pace:1.7, look:.32},
  watchGecko: {lean:.23, headPitch:.18, hands:[-.27,-.65], pulse:[.05,.36], pace:1.45, look:.25},
  inspect: {...KNEEL, crouch:-2.7, hands:[-.30,-.57], pulse:[.08,.28], pace:2.4},
  lookOut: {lean:.14, headPitch:-.09, hands:[-.43,-.45], pulse:[.05,.05], pace:1.65, look:.26},
  admire: {lean:-.03, headPitch:-.16, hands:[-.12,-.20], pulse:[.08,.17], pace:1.25, look:.16},
  groom: {lean:.08, headPitch:-.09, hands:[-.14,-1.37], pulse:[.08,.37], pace:3.9, look:.17},
  tap: {lean:.07, headPitch:-.12, hands:[-.22,-1.13], pulse:[.05,.62], pace:2.2},
  adjust: {lean:.06, headPitch:-.06, hands:[-.22,-.91], pulse:[.10,.47], pace:2.55},
  floorPlay: {...KNEEL, crouch:-5.3, tilt:-.10, pulse:[.31,.36], pace:3.4},
  toyPlay: {...KNEEL, hands:[-.85,-1.01], pulse:[.28,.52], pace:4.1, prop:'ball'},
  stack: {...KNEEL, hands:[-.73,-.87], pulse:[.21,.55], pace:2.9, prop:'block'},
  ballPlay: {...KNEEL, hands:[-.72,-.91], pulse:[.35,.53], pace:3.5, prop:'ball'},
  cuddle: {...KNEEL, crouch:-2.4, tilt:.12, hands:[-1.03,-1.19], pulse:[.10,.16], pace:2.05, prop:'toy'},
  readFloor: {...KNEEL, headPitch:.29, hands:[-.94,-1.03], pulse:[.09,.22], pace:2.2, prop:'book'},
  pressKeys: {lean:.20, headPitch:.23, hands:[-.91,-1.04], pulse:[.33,.43], pace:7.2},
  reachToy: {...KNEEL, headPitch:-.17, hands:[-.45,-1.24], pulse:[.21,.48], pace:2.9},
  peek: {lean:.21, headPitch:.10, tilt:.09, hands:[-.55,-.65], pulse:[.07,.21], pace:1.9, look:.22},
};

const SEATED_ACTIVITIES = {
  idle:['idle','read','chat'], lounge:['lounge','read','sip'], dining:['dining','sip','chat'],
  desk:['desk','sketch','desk'], bench:['bench','read','chat'],
};
const SEATED_ACTIVITY_SECONDS = 7;
const SEATED_TRANSITION_SECONDS = .55;

export function storybookSeatedActivity(seat, seconds = 0) {
  const variants = SEATED_ACTIVITIES[seat.pose] ?? [seat.pose];
  return variants[Math.floor(Math.max(0,seconds) / SEATED_ACTIVITY_SECONDS) % variants.length];
}

export function storybookInteractionPose(pose, seconds = 0, reduced = false) {
  const recipe = POSES[pose];
  if (!recipe) return null;
  const {lean = 0, tilt = 0, crouch = 0, headPitch = 0, look = .08, thighs = 0, shins = 0,
    hands, armSpread = [0,0], pulse = [0,0], pace = 2.1, prop} = recipe;
  const phase = reduced ? 0 : Math.max(0,seconds) * pace;
  const gesture = (amplitude, offset) => reduced ? 0 : amplitude * ((1-Math.cos(phase + offset))/2) ** 2;
  return {
    lean:lean + (reduced ? 0 : Math.sin(phase)*.022),
    tilt,crouch,headPitch,lookAside:reduced ? 0 : Math.sin(phase*.42)*look,
    hands:[hands[0]-gesture(pulse[0],0),hands[1]-gesture(pulse[1],1.65)],
    armSpread,thighs,shins,prop,
  };
}

export function storybookSeatedPose(seat, seconds, reduced = false) {
  const pose = storybookSeatedActivity(seat,reduced ? 0 : seconds);
  const next = storybookInteractionPose(pose,seconds,reduced);
  const phase = seconds % SEATED_ACTIVITY_SECONDS;
  if (reduced || !next || seconds < SEATED_ACTIVITY_SECONDS || phase >= SEATED_TRANSITION_SECONDS) return next;
  const previousPose = storybookSeatedActivity(seat,seconds - SEATED_TRANSITION_SECONDS);
  const previous = storybookInteractionPose(previousPose,seconds);
  if (!previous || previousPose === pose) return next;
  const t = phase / SEATED_TRANSITION_SECONDS;
  const amount = t*t*(3-2*t);
  const blend = (a,b) => a + (b-a)*amount;
  return {
    lean:blend(previous.lean,next.lean), tilt:blend(previous.tilt,next.tilt),
    crouch:blend(previous.crouch,next.crouch), headPitch:blend(previous.headPitch,next.headPitch),
    lookAside:blend(previous.lookAside,next.lookAside),
    hands:next.hands.map((v,i) => blend(previous.hands[i],v)),
    armSpread:next.armSpread.map((v,i) => blend(previous.armSpread[i],v)),
    thighs:blend(previous.thighs,next.thighs), shins:blend(previous.shins,next.shins),
    prop:t < .5 ? previous.prop : next.prop,
  };
}

/** Small reusable meshes keep hand props visible at wall-display scale. */
export function createStorybookInteractionProps() {
  const cube = new THREE.BoxGeometry(1,1,1);
  const sphere = new THREE.SphereGeometry(1,10,7);
  const cylinder = new THREE.CylinderGeometry(1,1,1,12);
  const ring = new THREE.TorusGeometry(1,.23,5,12);
  const materials = new Map();
  const art = {
    book:[[cube,'#628b88',0,0,0,8.9,1.1,6.1],[cube,'#fff0cf',0,.69,0,8.1,.7,5.55],
      [cube,'#b6a189',0,1.06,0,.30,.1,5.4]],
    mug:[[cylinder,'#df9d79',0,1,0,2.1,4.2,2.1],[cylinder,'#f6dcc2',0,3.16,0,1.63,.13,1.63],
      [ring,'#df9d79',2.1,1,0,1.38,1.26,1.38]],
    spoon:[[cube,'#bc8b5b',0,0,1.4,.75,.75,5.9],[sphere,'#d8ae79',0,0,4.6,1.25,.48,1.6]],
    pencil:[[cube,'#f3b86a',0,.1,1.2,.78,.78,5.8],[cube,'#483852',0,.1,4.25,.45,.45,.7]],
    ball:[[sphere,'#e3b066',0,0,0,2.7,2.7,2.7],[sphere,'#ffde93',0,.7,1.85,1.26,1.31,.82]],
    block:[[cube,'#d591ad',0,0,0,4.4,4.4,4.4],[sphere,'#ffdbbd',0,.3,2.24,1.1,1.15,.1]],
    toy:[[sphere,'#c8916d',0,.2,0,2.8,2.65,1.85],[sphere,'#daab88',0,2.55,.2,2.7,2,1.91],
      [sphere,'#daab88',-1.85,3.9,0,1,1,.8],[sphere,'#daab88',1.85,3.9,0,1,1,.8]],
    wateringCan:[[cylinder,'#7ba797',0,.1,0,2.65,3.3,2.3],[ring,'#a2bba0',0,2.23,-.38,1.6,1.5,1.4],
      [cube,'#93af99',0,.52,2.44,1.15,1.14,3.5]],
  };

  function attach(arms) {
    const models = new Map();
    let active;
    return id => {
      if (active === id) return;
      if (active) models.get(active).visible = false;
      active = Object.hasOwn(art,id) ? id : undefined;
      if (!active) return;
      if (!models.has(active)) {
        const prop = new THREE.Group();
        prop.name = 'radar-held-' + active;
        prop.position.set(1.15,-7.65,2);
        for (const [geometry,tint,x,y,z,w,h,d] of art[active]) {
          if (!materials.has(tint)) materials.set(tint, new THREE.MeshStandardMaterial({
            color:tint, emissive:tint, emissiveIntensity:.13, roughness:.8,
          }));
          const mesh = new THREE.Mesh(geometry, materials.get(tint));
          mesh.position.set(x,y,z);
          mesh.scale.set(w,h,d);
          prop.add(mesh);
        }
        arms[1].add(prop);
        models.set(active,prop);
      }
      models.get(active).visible = true;
    };
  }

  function dispose() {
    for (const geometry of [cube,sphere,cylinder,ring]) geometry.dispose();
    for (const material of materials.values()) material.dispose();
  }

  return {attach,dispose};
}
