import * as THREE from 'three';
import {createStorybookMotion} from './storybook-motion.mjs';
import {canUseStorybookSeat, createSeatDwell} from './storybook-seating.mjs';

const MAX_TRACKS = 24;
const GROUND_RING_RADIUS = 17.5;
const SIT_SECONDS = .42;
const SEAT_HIPS = 8.9;
const STYLES = [
  {role: 'papa', scale: [1.26, 1.25, 1.22], radius:20, sweater: '#537eaa', trim: '#ffcc81', skin: '#db9f76', hair: '#4b3533'},
  {role: 'mama', scale: [1.09, 1.18, 1.12], radius:18, sweater: '#c86587', trim: '#ffdeaf', skin: '#e8af83', hair: '#5a3841'},
  {role: 'baby', scale: [.92, .83, .92], radius:16, sweater: '#8b78cf', trim: '#ffe492', skin: '#f1b98e', hair: '#674138'},
];
const POSES = {
  idle: {lean:.03, tilt:0, thighs:-1.30, shins:1.16, hands:[-.43,-.40], fidget:.10, pace:2.1},
  lounge: {lean:-.13, tilt:.07, thighs:-1.16, shins:.92, hands:[-.22,-.14], fidget:.13, pace:1.8},
  dining: {lean:.06, tilt:.02, thighs:-1.34, shins:1.26, hands:[-.61,-.51], fidget:.14, pace:2.8},
  desk: {lean:.16, tilt:0, thighs:-1.26, shins:1.18, hands:[-.98,-.92], fidget:.12, pace:6.3},
  bench: {lean:.04, tilt:-.09, thighs:-1.28, shins:1.10, hands:[-.35,-.56], fidget:.22, pace:3.3},
};
const mix = (from, to, amount) => from + (to - from) * amount;
const clampUnit = value => Math.min(1, Math.max(0, value));
const angleDelta = (target, start) => Math.atan2(Math.sin(target - start), Math.cos(target - start));

function paintedMaterial(color, emissiveIntensity = 0.12) {
  return new THREE.MeshStandardMaterial({color, roughness: 0.78, emissive: color, emissiveIntensity});
}

function animateFace(character, idle, reducedMotion, forwardTilt = 0, lookAside = 0) {
  const blinking = !reducedMotion && idle % 4.8 < 0.13;
  character.head.rotation.x = -0.62 + forwardTilt + (reducedMotion ? 0 : Math.sin(idle * 1.5) * 0.047);
  character.head.rotation.y = lookAside;
  character.head.rotation.z = reducedMotion ? 0 : Math.sin(idle * 3.4) * 0.047;
  for (const eye of character.eyes) eye.scale.y = blinking ? 0.15 : 0.87;
}

/**
 * Private, transient scene layer. A snapshot contains {id, x, y} plan points.
 * Time is monotonic seconds supplied by the scene adapter.
 * Route and clearance queries use the same compiled surface as floorAt.
 */
export function createStorybookPeople(scene, floorAt = () => 0,
  {supportsRoute, floorClearance, allowsBodyPoint, allowsBodyRoute, seats = []} = {}) {
  const group = new THREE.Group();
  group.name = 'tracked-people';
  scene.add(group);

  // Initialize the resources only on first use. The normal editor scene and its
  // exports have no runtime characters or dependencies on the tracker feed.
  let art;
  const tracks = new Map();
  const unused = STYLES.map(() => []);
  let preference = false;
  let reduced = false;
  let lastTime = 0;
  let hasVisibleTracks = false;

  function makeArt() {
    return {
      sphere: new THREE.SphereGeometry(1, 12, 8),
      disc: new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2),
      groundRing: new THREE.RingGeometry(13.8, GROUND_RING_RADIUS, 32).rotateX(-Math.PI / 2),
      glasses: new THREE.TorusGeometry(1, .14, 6, 16),
      palette: STYLES.map(({sweater, trim, skin, hair}) => Object.fromEntries(
        Object.entries({sweater, trim, skin, hair}).map(([part, color]) => [part, paintedMaterial(color)]),
      )),
      ink: paintedMaterial('#423c50', 0.09),
      cheek: paintedMaterial('#d78383'),
      shoes: paintedMaterial('#514656'),
      white: paintedMaterial('#fff1dc'),
      shadow: new THREE.MeshBasicMaterial({color:'#433849', transparent:true, opacity:0.22, depthWrite:false}),
      groundMark: new THREE.MeshBasicMaterial({color:'#fff1cd', depthTest:false, depthWrite:false, toneMapped:false}),
    };
  }

  function makeCharacter(styleIndex) {
    art ??= makeArt();
    const {role, scale, radius} = STYLES[styleIndex];
    const {sweater, trim, skin, hair} = art.palette[styleIndex];
    const baby = role === 'baby';
    const root = new THREE.Group();
    root.name = `radar-avatar-${role}`;
    const poseRoot = new THREE.Group();
    poseRoot.name = 'radar-avatar-pose';
    const body = new THREE.Group();
    const head = new THREE.Group();
    const eyes = [];
    const arms = [];
    const legs = [];
    group.add(root);
    root.add(poseRoot);
    poseRoot.add(body);
    body.scale.set(...scale);

    const ellipse = (parent, material, x, y, z, width, height, depth) => {
      const mesh = new THREE.Mesh(art.sphere, material);
      mesh.position.set(x, y, z);
      mesh.scale.set(width, height, depth);
      parent.add(mesh);
      return mesh;
    };
    const shadow = new THREE.Mesh(art.disc, art.shadow);
    shadow.position.y = 0.13;
    shadow.scale.set(19, 1, 19);
    root.add(shadow);
    const groundMark = new THREE.Mesh(art.groundRing, art.groundMark);
    groundMark.name = 'radar-track-mark';
    // The marker remains visible through the floor, with the character in front of it.
    groundMark.renderOrder = -1;
    group.add(groundMark);

    ellipse(body, sweater, 0, 15, 0, baby ? 8.2 : 7.1, 8.3, 5.4);
    if (baby) {
      ellipse(body, trim, 0, 17.5, 4.8, 4.9, 4.1, 1.15);
      ellipse(body, art.white, 0, 17.4, 5.9, 1.5, 1.5, .35);
    } else {
      ellipse(body, trim, 0, 20.7, 2.4, 5.8, 2.2, 4);
      ellipse(body, trim, role === 'papa' ? -2.4 : 0, 15.7, 5.2, 1.5, 3.7, .65);
    }

    for (const side of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 3.4, 10.3, 0.1);
      body.add(leg);
      const shin = new THREE.Group();
      shin.position.y = -4.65;
      leg.add(shin);
      const pants = baby ? sweater : art.ink;
      ellipse(leg, pants, 0, -2.35, 0, 2.65, 3.25, 2.6);
      ellipse(shin, pants, 0, -1.6, 0, 2.4, 3.1, 2.4);
      ellipse(shin, baby ? trim : art.shoes, 0, -3.5, 1.25, 3.1, 2.1, 4);
      ellipse(shin, art.white, 0, -4.15, 3.25, 2.75, 1.1, 2);
      legs.push({thigh: leg, shin});

      const arm = new THREE.Group();
      arm.position.set(side * 6.25, 19.1, 0);
      body.add(arm);
      ellipse(arm, sweater, side * .9, -3.7, .15, 2.75, 5.3, 2.7);
      ellipse(arm, skin, side * 1.3, -7.8, .5, 2.3, 2.6, 2.2);
      arms.push(arm);
    }

    // The tilted face reads both in the overhead plan and in the dollhouse.
    head.position.set(0, baby ? 26 : 27.2, 0);
    if (baby) head.scale.set(1.16, 1.17, 1.12);
    body.add(head);
    ellipse(head, hair, 0, 1.3, -1.65, 9.2, 9.65, 8.6);
    ellipse(head, skin, 0, 0, 1.9, 8.65, 8.45, 7.5);
    const fringe = ellipse(head, hair, -2.1, 7.3, 4.25, 6.4, 3.4, 4.35);
    fringe.rotation.z = role === 'papa' ? -.27 : .22;
    if (role === 'mama') {
      ellipse(head, hair, -6.7, -1.9, -3.8, 3.6, 8.1, 5.2);
      ellipse(head, hair, 6.2, -1.7, -3.9, 3.3, 7.6, 5.4);
      ellipse(head, hair, 2.8, 10.4, -2.5, 5.1, 5.1, 5.1);
      ellipse(head, trim, 4.4, 8.7, 2.2, 2.8, 1.1, 1.1);
    }
    if (baby) {
      ellipse(head, hair, -7.3, 6.7, -2, 3.35, 3.7, 3.5);
      ellipse(head, hair, 7.3, 6.7, -2, 3.35, 3.7, 3.5);
      const bowLeft = ellipse(head, trim, .9, 10, 4.2, 2.5, 1.45, 1.25);
      const bowRight = ellipse(head, trim, 4.1, 10, 4.2, 2.5, 1.45, 1.25);
      bowLeft.rotation.z = -.4;
      bowRight.rotation.z = .4;
      ellipse(head, art.white, 2.5, 9.8, 5.1, 1.15, 1.2, 1);
    }
    for (const side of [-1, 1]) {
      ellipse(head, skin, side * 8.2, -.15, 1.1, 1.85, 2.4, 1.75);
      eyes.push(ellipse(head, art.ink, side * 3, 1.2, 8.95, 0.85, 0.87, 0.52));
      ellipse(head, art.cheek, side * 5.05, -1.25, 7.95, 1.18, 0.62, 0.52);
      if (role === 'papa') {
        const lens = new THREE.Mesh(art.glasses, art.ink);
        lens.position.set(side * 3.1, 1.25, 9.15);
        lens.scale.set(2.5, 2.15, 1.55);
        head.add(lens);
      }
    }
    if (role === 'papa') ellipse(head, art.ink, 0, 1.6, 9.35, 1.1, .28, .35);
    ellipse(head, art.ink, 0, -1.95, 9.15, 1.38, 0.45, 0.38);
    return {root, groundMark, poseRoot, body, head, arms, legs, eyes, radius, styleIndex, baby};
  }

  const allowsPoint = (x, z) => Number.isFinite(floorAt(x, z)) && (!floorClearance || floorClearance(x, z) > 0);
  const clearBodyPoint = (x, z, radius, exceptItemId) => allowsPoint(x, z) &&
    (!floorClearance || floorClearance(x, z) >= radius) && (allowsBodyPoint?.(x, z, radius, exceptItemId) ?? true);
  const clearBodyRoute = (x, z, toX, toZ, radius, exceptItemId) =>
    (supportsRoute?.(x, z, toX, toZ, radius) ?? true) &&
    (allowsBodyRoute?.(x, z, toX, toZ, radius, exceptItemId) ?? true);

  function fitsSeat(seat, x, z, radius, tolerance = 1) {
    return seat.width >= radius * 1.35 && seat.depth >= radius * .82 &&
      clearBodyPoint(seat.x, seat.z, radius, seat.itemId) &&
      canUseStorybookSeat(seat, x, z,
        (fromX, fromZ, toX, toZ) => clearBodyRoute(fromX, fromZ, toX, toZ, radius, seat.itemId), tolerance);
  }

  function nearestSeat(x, z, radius, taken) {
    let nearest;
    let distance = Infinity;
    for (const seat of seats) {
      const next = Math.hypot(x - seat.x, z - seat.z);
      if (next >= distance || taken.has(seat.id) || !fitsSeat(seat, x, z, radius)) continue;
      nearest = seat;
      distance = next;
    }
    return nearest;
  }

  function seatingBlend(track, target, x, z) {
    if (track.seat !== target) {
      track.seat = target;
      track.poseAt = lastTime;
    }
    if (!target) return 0;
    // Only interpolate along an open approach. A measured point already in
    // the cushion appears in its supported pose without crossing the shell.
    if (reduced || !clearBodyPoint(x, z, track.character.radius) ||
        !clearBodyPoint(target.x, target.z, track.character.radius) ||
        !clearBodyRoute(x, z, target.x, target.z, track.character.radius)) return 1;
    const amount = clampUnit((lastTime - track.poseAt) / SIT_SECONDS);
    return amount * amount * (3 - 2 * amount);
  }

  function drawCharacter(track, sample, blend) {
    const {character, seat} = track;
    const {x, y:z, heading, walking, progress:amount} = sample;
    const floor = floorAt(x, z);
    const cos = Math.cos(heading);
    const sin = Math.sin(heading);
    const dx = (seat ? seat.x - x : 0) * blend;
    const dz = (seat ? seat.z - z : 0) * blend;
    const posture = POSES[seat?.pose ?? 'idle'];
    const raise = seat ? seat.y - floor - SEAT_HIPS * STYLES[character.styleIndex].scale[1] : 0;
    character.root.position.set(x, floor, z);
    character.root.rotation.y = heading;
    character.poseRoot.position.set(dx * cos - dz * sin, raise * blend, dx * sin + dz * cos);
    character.poseRoot.rotation.y = seat ? angleDelta(seat.heading, heading) * blend : 0;
    character.poseRoot.userData.pose = blend > 0 ? seat.pose : 'standing';
    const idle = Math.floor(Math.max(0, lastTime - track.born) * 16) / 16 + .7 + character.styleIndex * .62;
    const step = Math.floor(amount * 12) / 12 * Math.PI * 4;
    const stride = walking ? Math.sin(step) * .56 : 0;
    const bounce = walking ? Math.abs(Math.sin(step)) * 1.9 : (1 + Math.sin(idle * 4.7)) * .47;
    const breath = .19 * (1 + Math.sin(idle * 2.6));
    character.body.position.y = reduced ? 0 : mix(bounce * (character.baby ? 1.5 : 1), breath, blend);
    character.body.rotation.x = posture.lean * blend;
    const sway = reduced ? 0 : walking ? stride * .15 : Math.sin(idle * 2.8) * .045;
    character.body.rotation.z = mix(sway, posture.tilt, blend);
    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? -1 : 1;
      const standingArm = walking ? -stride * side : reduced ? 0 : Math.sin(idle * 3.1 + i) * .09;
      const fidget = reduced ? 0 : Math.sin(idle * posture.pace + i * 2.6) * posture.fidget;
      const nod = reduced ? 0 : Math.sin(idle * 2.7 + i) * .035;
      character.arms[i].rotation.x = mix(standingArm, posture.hands[i] + fidget, blend);
      character.legs[i].thigh.rotation.x = mix(stride * side, posture.thighs + nod, blend);
      character.legs[i].shin.rotation.x = (posture.shins + nod * 2) * blend;
    }
    const look = reduced || seat?.pose === 'desk' ? 0 : Math.sin(idle * 1.08) * .13 * blend;
    animateFace(character, idle, reduced, posture.lean * .45 * blend, look);
  }

  function render(seconds, reduceMotion = preference, allowSeats = true) {
    lastTime = Number.isFinite(seconds) ? seconds : lastTime;
    reduced = reduceMotion || preference;
    hasVisibleTracks = false;
    const pending = [];
    const taken = new Set();
    for (const track of tracks.values()) {
      const {character} = track;
      const {x, y:z} = track.point;
      const floor = floorAt(x, z);
      const clearance = floorClearance?.(x, z) ?? GROUND_RING_RADIUS;
      character.groundMark.visible = Number.isFinite(floor) && clearance > 0;
      if (character.groundMark.visible) {
        character.groundMark.position.set(x, floor + .26, z);
        character.groundMark.scale.setScalar(Math.min(1, clearance / GROUND_RING_RADIUS));
      }
      const sample = track.motion.sample(lastTime, reduced);
      if (track.bodyReported && sample?.current) track.bodySuppressed = false;
      const standing = track.bodyReported && !track.bodySuppressed ? sample : null;
      const ready = allowSeats && (!track.bodyReported || (standing?.current && !standing.walking)) &&
        track.dwell.ready(x, z, lastTime);
      if (track.seat) {
        if (ready && fitsSeat(track.seat, x, z, character.radius, 1.18)) taken.add(track.seat.id);
        else track.seat = undefined;
      }
      pending.push({track, standing, ready});
    }
    for (const {track, standing, ready} of pending) {
      const {character, point} = track;
      const target = ready ? track.seat ?? nearestSeat(point.x, point.y, character.radius, taken) : undefined;
      if (target) taken.add(target.id);
      const blend = seatingBlend(track, target, point.x, point.y);
      const sample = target ? {x:point.x, y:point.y, heading:standing?.heading ?? target.heading,
        walking:false, progress:1} : standing;
      character.root.visible = Boolean(sample);
      if (sample) drawCharacter(track, sample, blend);
      hasVisibleTracks ||= character.root.visible || character.groundMark.visible;
    }
  }

  function setTracks(snapshot, seconds, {reduceMotion = false} = {}) {
    preference = reduceMotion;
    const time = Number.isFinite(seconds) ? seconds : lastTime;
    const next = new Map();
    for (const point of Array.isArray(snapshot) ? snapshot : []) {
      if (typeof point?.id !== 'string' || !point.id || point.id.length > 256 ||
          !Number.isFinite(point.x) || !Number.isFinite(point.y) || next.has(point.id) ||
          !allowsPoint(point.x, point.y)) continue;
      next.set(point.id, point);
      if (next.size === MAX_TRACKS) break;
    }
    for (const [id, track] of tracks) {
      if (next.has(id)) continue;
      track.character.root.visible = false;
      track.character.groundMark.visible = false;
      unused[track.character.styleIndex].push(track.character);
      tracks.delete(id);
    }
    // These are visual roles only. Use each look before repeating it and keep
    // each active track's look when the sensor changes its report order.
    const styleCounts = STYLES.map(() => 0);
    for (const {character} of tracks.values()) styleCounts[character.styleIndex]++;
    for (const id of [...next.keys()].filter(id => !tracks.has(id)).sort()) {
      const styleIndex = styleCounts.indexOf(Math.min(...styleCounts));
      styleCounts[styleIndex]++;
      const character = unused[styleIndex].pop() ?? makeCharacter(styleIndex);
      const motion = createStorybookMotion({
        allowsPoint: (x, z) => clearBodyPoint(x, z, character.radius),
        allowsRoute: (x, z, toX, toZ) => clearBodyRoute(x, z, toX, toZ, character.radius),
      });
      tracks.set(id, {character, motion, dwell:createSeatDwell(), born:time, poseAt:time});
    }
    for (const [id, point] of next) {
      const track = tracks.get(id);
      track.point = point;
      track.bodyReported = track.motion.observe(point, time, {observation:point.expiresAt, reduceMotion});
      if (!track.bodyReported) track.bodySuppressed = true;
      if (seats.length) track.dwell.observe(point, time);
    }
    render(time, reduceMotion);
  }

  function dispose() {
    group.removeFromParent();
    if (!art) return;
    for (const material of [art.ink, art.cheek, art.shoes, art.white, art.shadow, art.groundMark]) material.dispose();
    for (const style of art.palette) for (const material of Object.values(style)) material.dispose();
    art.sphere.dispose();
    art.disc.dispose();
    art.groundRing.dispose();
    art.glasses.dispose();
    group.clear();
    for (const pool of unused) pool.length = 0;
    tracks.clear();
    art = undefined;
  }

  return {
    setTracks,
    render,
    dispose,
    setVisible(visible) { group.visible = visible; },
    get hasMotion() { return !reduced && tracks.size > 0; },
    get hasVisibleTracks() { return hasVisibleTracks; },
    get hasPendingReacquisition() { return [...tracks.values()].some(({motion}) => motion.pendingReacquisition); },
  };
}
