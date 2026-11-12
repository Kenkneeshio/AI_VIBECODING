import * as THREE from 'three';
import {createStorybookPersonMotion, createStorybookPersonSignal} from './storybook-person-motion.mjs';
import {createStorybookPersonNavigation} from './storybook-person-navigation.mjs';
import {canUseStorybookSeat} from './storybook-seating.mjs';
import {createStorybookInteractionProps, findStorybookInteraction, storybookInteractionPose,
  storybookSeatedActivity, storybookSeatedPose} from './storybook-person-interactions.mjs';

const MAX_TRACKS = 24;
const GROUND_RING_RADIUS = 17.5;
const POSE_SECONDS = .42;
const SEAT_HIPS = 8.9;
export const STORYBOOK_PERSON_RADIUS = 20;
const STYLES = [
  {role: 'papa', scale: [1.26, 1.25, 1.22], radius:STORYBOOK_PERSON_RADIUS, sweater: '#537eaa', trim: '#ffcc81', skin: '#db9f76', hair: '#4b3533'},
  {role: 'mama', scale: [1.09, 1.18, 1.12], radius:18, sweater: '#c86587', trim: '#ffdeaf', skin: '#e8af83', hair: '#5a3841'},
  {role: 'baby', scale: [.92, .83, .92], radius:16, sweater: '#8b78cf', trim: '#ffe492', skin: '#f1b98e', hair: '#674138'},
];
const mix = (from, to, amount) => from + (to - from) * amount;
const clampUnit = value => Math.min(1, Math.max(0, value));
const angleDelta = (target, start) => Math.atan2(Math.sin(target - start), Math.cos(target - start));
const STANDING = {lean:0, tilt:0, crouch:0, headPitch:0, lookAside:0, hands:[0,0],
  armSpread:[0,0], thighs:0, shins:0};

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
  {supportsRoute, floorClearance, allowsBodyPoint, allowsBodyRoute, geometryRevision,
    seats = [], interactions = [], occlusionScene} = {}) {
  const group = new THREE.Group();
  group.name = 'tracked-people';
  scene.add(group);
  const occlusion = new THREE.Group();
  occlusionScene?.add(occlusion);

  // Initialize the resources only on first use. The normal editor scene and its
  // exports have no runtime characters or dependencies on the tracker feed.
  let art;
  let props;
  const tracks = new Map();
  const navigators = new Map();
  const unused = STYLES.map(() => []);
  let preference = false;
  let reduced = false;
  let lastTime = 0;
  let hasVisibleTracks = false;
  let activitiesEnabled = true;
  let previousSnapshot;

  function makeArt() {
    const head = new THREE.Shape();
    head.absarc(0, 4, 3.5, 0, 2 * Math.PI, false);
    const shoulders = new THREE.Shape();
    shoulders.moveTo(-6.5, -6.5);
    shoulders.quadraticCurveTo(-7, -.2, 0, -.2);
    shoulders.quadraticCurveTo(7, -.2, 6.5, -6.5);
    shoulders.closePath();
    return {
      sphere: new THREE.SphereGeometry(1, 12, 8),
      disc: new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2),
      groundRing: new THREE.RingGeometry(13.8, GROUND_RING_RADIUS, 32).rotateX(-Math.PI / 2),
      glasses: new THREE.TorusGeometry(1, .14, 6, 16),
      occlusionGlyph: new THREE.ShapeGeometry([head, shoulders], 12),
      occlusionMaterial: new THREE.MeshBasicMaterial({
        color:'#fff1cd', depthFunc:THREE.GreaterDepth, depthWrite:false, transparent:true, opacity:.90, toneMapped:false,
      }),
      palette: STYLES.map(({sweater, trim, skin, hair}) => Object.fromEntries(
        Object.entries({sweater, trim, skin, hair}).map(([part, color]) => [part, paintedMaterial(color)]),
      )),
      ink: paintedMaterial('#423c50', 0.09),
      cheek: paintedMaterial('#d78383'),
      shoes: paintedMaterial('#514656'),
      white: paintedMaterial('#fff1dc'),
      shadow: new THREE.MeshBasicMaterial({color:'#433849', transparent:true, opacity:0.22, depthWrite:false}),
      groundMark: new THREE.MeshBasicMaterial({color:'#fff1cd', depthTest:false, depthWrite:false, toneMapped:false}),
      retainedMark: new THREE.MeshBasicMaterial({color:'#eeb660', depthTest:true, depthWrite:false, toneMapped:false}),
    };
  }

  function makeCharacter(styleIndex) {
    art ??= makeArt();
    props ??= createStorybookInteractionProps();
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
    const cue = occlusionScene ? new THREE.Mesh(art.occlusionGlyph, art.occlusionMaterial) : null;
    if (cue) {
      cue.name = 'radar-occlusion-cue';
      cue.visible = false;
      occlusion.add(cue);
    }

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
    return {root, groundMark, poseRoot, body, head, arms, legs, eyes, radius, styleIndex, baby, cue,
      setProp:props.attach(arms)};
  }

  const allowsPoint = (x, z) => Number.isFinite(floorAt(x, z)) && (!floorClearance || floorClearance(x, z) > 0);
  const clearBodyPoint = (x, z, radius, exceptItemId) => allowsPoint(x, z) &&
    (!floorClearance || floorClearance(x, z) >= radius) && (allowsBodyPoint?.(x, z, radius, exceptItemId) ?? true);
  const clearBodyRoute = (x, z, toX, toZ, radius, exceptItemId) =>
    (supportsRoute?.(x, z, toX, toZ, radius) ?? true) &&
    (allowsBodyRoute?.(x, z, toX, toZ, radius, exceptItemId) ?? true);

  function navigatorFor(radius) {
    if (!navigators.has(radius)) {
      navigators.set(radius, createStorybookPersonNavigation({
        allowsPoint: (x, z) => clearBodyPoint(x, z, radius),
        allowsRoute: (x, z, toX, toZ) => clearBodyRoute(x, z, toX, toZ, radius),
        geometryRevision,
      }));
    }
    return navigators.get(radius);
  }

  function seatApproaches(seat, point, radius) {
    const bodyRadius = radius * .8;
    if (seat.width < radius * 1.35 || seat.depth < radius * .82 ||
        !clearBodyPoint(seat.x, seat.z, bodyRadius, seat.itemId) ||
        !canUseStorybookSeat(seat, point.x, point.y,
          (x, z, endX, endZ) => clearBodyRoute(x, z, endX, endZ, 0, seat.itemId))) return [];
    const points = [];
    for (let distance = 16; distance <= 76; distance += 8) {
      for (const offset of [0, -.5, .5, -1, 1, -1.5, 1.5]) {
        const direction = seat.heading + offset;
        const x = seat.x + Math.sin(direction) * distance;
        const y = seat.z + Math.cos(direction) * distance;
        if (clearBodyPoint(x, y, radius) && clearBodyRoute(x, y, seat.x, seat.z, bodyRadius, seat.itemId)) {
          points.push({x, y});
        }
      }
      if (points.length) break;
    }
    return points;
  }

  function chooseActivity(track, point, taken) {
    const {radius} = track.character;
    const distanceTo = item => Math.hypot(item.x - point.x, item.z - point.y);
    const nearbySeats = seats.filter(seat => !taken.has(seat.id) && distanceTo(seat) <= seat.reach)
      .sort((a, b) => distanceTo(a) - distanceTo(b));
    for (const seat of nearbySeats) {
      for (const approach of seatApproaches(seat, point, radius)) {
        if (track.motion.aim(approach, lastTime, reduced)) return {id:seat.id, heading:seat.heading, seat};
      }
    }
    const activity = findStorybookInteraction(interactions, point, radius, {
      allowsPoint:clearBodyPoint,
      allowsTarget:(x, z, endX, endZ, itemId) => clearBodyRoute(x, z, endX, endZ, 0, itemId),
    }, taken);
    if (activity && track.motion.aim({x:activity.x, y:activity.z}, lastTime, reduced)) return activity;
    return null;
  }

  function planTrack(track, current, taken, allowActivities) {
    const {signal, point, motion, navigator} = track;
    const revision = geometryRevision?.();
    const eligible = allowActivities && !point.quality && signal.settled;
    if (track.activity && (!allowActivities || revision !== track.revision)) {
      track.blend = 0;
      track.activity = null;
      track.leaving = false;
      track.planned = null;
    }
    if (track.activity && !eligible && !(point.quality === 'last-known' && track.blend > 0)) {
      track.leaving = true;
      if (track.blend === 0) {
        track.activity = null;
        track.leaving = false;
      }
    }
    if (track.activity) return;
    if (track.planned === signal && track.revision === revision && track.activitiesAllowed === allowActivities) return;
    track.planned = signal;
    track.revision = revision;
    track.activitiesAllowed = allowActivities;
    if (eligible) {
      track.activity = chooseActivity(track, signal.target, taken);
      if (track.activity) return;
    }
    const destination = navigator.standingTarget(signal.target, current);
    motion.aim(destination ?? (!current && point.keepVisible ? point.fallback : null), lastTime, reduced);
  }

  function drawCharacter(track, sample, blend) {
    const {character, activity} = track;
    const seat = activity?.seat;
    const {x, y:z, heading, walking, step} = sample;
    const floor = floorAt(x, z);
    const cos = Math.cos(heading);
    const sin = Math.sin(heading);
    const dx = (seat ? seat.x - x : 0) * blend;
    const dz = (seat ? seat.z - z : 0) * blend;
    const duration = lastTime - (track.poseAt ?? lastTime);
    const pose = seat ? storybookSeatedActivity(seat, reduced ? 0 : duration) : activity?.pose;
    const posture = (seat ? storybookSeatedPose(seat, duration, reduced) :
      storybookInteractionPose(pose, duration, reduced)) ?? STANDING;
    const raise = seat ? seat.y - floor - SEAT_HIPS * STYLES[character.styleIndex].scale[1] : 0;
    character.root.position.set(x, floor, z);
    character.root.rotation.y = heading;
    character.poseRoot.position.set(dx * cos - dz * sin, raise * blend, dx * sin + dz * cos);
    character.poseRoot.rotation.y = activity ? angleDelta(activity.heading, heading) * blend : 0;
    character.poseRoot.userData.pose = blend > 0 ? pose : 'standing';
    character.setProp(blend > .52 ? posture.prop : undefined);
    const idle = Math.floor(Math.max(0, lastTime - track.born) * 16) / 16 + .7 + character.styleIndex * .62;
    const gait = Math.floor(step * 12) / 12 * 2 * Math.PI;
    const stride = walking ? Math.sin(gait) * .56 : 0;
    const bounce = reduced ? 0 : walking ? Math.abs(Math.sin(gait)) * 1.9 : (1 + Math.sin(idle * 4.7)) * .47;
    character.body.position.y = mix(bounce * (character.baby ? 1.5 : 1), posture.crouch, blend);
    character.body.rotation.x = posture.lean * blend;
    const sway = reduced ? 0 : walking ? stride * .15 : Math.sin(idle * 2.8) * .045;
    character.body.rotation.z = mix(sway, posture.tilt, blend);
    for (let i = 0; i < 2; i++) {
      const side = i === 0 ? -1 : 1;
      const standingArm = walking ? -stride * side : reduced ? 0 : Math.sin(idle * 3.1 + i) * .09;
      character.arms[i].rotation.x = mix(standingArm, posture.hands[i], blend);
      character.arms[i].rotation.z = posture.armSpread[i] * blend;
      character.legs[i].thigh.rotation.x = mix(stride * side, posture.thighs, blend);
      character.legs[i].shin.rotation.x = posture.shins * blend;
    }
    animateFace(character, idle, reduced, posture.headPitch * blend, posture.lookAside * blend);
  }

  function render(seconds, reduceMotion = preference, allowActivities = activitiesEnabled) {
    lastTime = Number.isFinite(seconds) ? seconds : lastTime;
    reduced = reduceMotion || preference;
    activitiesEnabled = allowActivities;
    hasVisibleTracks = false;
    const taken = new Set();
    const reserve = activity => taken.add(activity.seat ? activity.id : activity.itemId);
    for (const {activity} of tracks.values()) if (activity) reserve(activity);
    for (const track of tracks.values()) {
      const {character} = track;
      const {x, y:z} = track.point;
      const floor = floorAt(x, z);
      const clearance = floorClearance?.(x, z) ?? GROUND_RING_RADIUS;
      character.groundMark.visible = Number.isFinite(floor) && clearance > 0;
      if (character.groundMark.visible) {
        character.groundMark.material = track.point.quality ? art.retainedMark : art.groundMark;
        character.groundMark.position.set(x, floor + .26, z);
        character.groundMark.scale.setScalar(Math.min(1, clearance / GROUND_RING_RADIUS));
      }
      const elapsed = Math.max(0, lastTime - track.renderedAt);
      track.renderedAt = lastTime;
      if (track.leaving) {
        track.blend = reduced || !allowActivities ? 0 : clampUnit(track.blend - elapsed / POSE_SECONDS);
        if (track.blend === 0) {
          track.activity = null;
          track.leaving = false;
          track.planned = null;
        }
      }
      const previousActivity = track.activity;
      planTrack(track, track.motion.sample(lastTime, reduced), taken, allowActivities);
      const sample = track.motion.sample(lastTime, reduced);
      if (track.activity) {
        reserve(track.activity);
        if (sample && !sample.walking && !track.leaving) {
          if (track.blend === 0) track.poseAt = lastTime;
          track.blend = reduced ? 1 : clampUnit(track.blend +
            (track.activity === previousActivity ? elapsed / POSE_SECONDS : 0));
        }
      }
      const blend = track.blend * track.blend * (3 - 2 * track.blend);
      character.root.visible = Boolean(sample);
      character.root.userData.locationQuality = track.point.quality ?? 'measured';
      if (sample) drawCharacter(track, sample, blend);
      if (character.cue) {
        character.cue.visible = Boolean(sample && track.point.keepVisible);
        if (character.cue.visible) character.head.getWorldPosition(character.cue.position);
      }
      hasVisibleTracks ||= character.root.visible || character.groundMark.visible;
    }
  }

  function setTracks(snapshot, seconds, {reduceMotion = false} = {}) {
    if (snapshot === previousSnapshot && reduceMotion === preference) return;
    previousSnapshot = snapshot;
    preference = reduceMotion;
    const time = Number.isFinite(seconds) ? seconds : lastTime;
    const next = new Map();
    for (const point of Array.isArray(snapshot) ? snapshot : []) {
      if (typeof point?.id !== 'string' || !point.id || point.id.length > 256 ||
          !Number.isFinite(point.x) || !Number.isFinite(point.y) || next.has(point.id) ||
          (!point.keepVisible && !allowsPoint(point.x, point.y))) continue;
      next.set(point.id, point);
      if (next.size === MAX_TRACKS) break;
    }
    for (const [id, track] of tracks) {
      if (next.has(id)) continue;
      track.character.root.visible = false;
      track.character.groundMark.visible = false;
      if (track.character.cue) track.character.cue.visible = false;
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
      const navigator = navigatorFor(character.radius);
      const motion = createStorybookPersonMotion({
        allowsPoint: (x, z) => clearBodyPoint(x, z, character.radius),
        findRoute:navigator.findRoute, geometryRevision,
      });
      tracks.set(id, {character, motion, navigator, filter:createStorybookPersonSignal(),
        born:time, renderedAt:time, blend:0});
    }
    for (const [id, point] of next) {
      const track = tracks.get(id);
      if (track.point === point) continue;
      track.point = point;
      const signal = track.filter.observe(point, time);
      if (track.signal?.target !== signal.target || track.signal.settled !== signal.settled ||
          track.signal.quality !== point.quality) track.signal = {...signal, quality:point.quality};
    }
    render(time, reduceMotion);
  }

  function dispose() {
    group.removeFromParent();
    occlusion.removeFromParent();
    if (!art) return;
    for (const material of [art.ink, art.cheek, art.shoes, art.white, art.shadow, art.groundMark,
      art.retainedMark, art.occlusionMaterial]) material.dispose();
    for (const style of art.palette) for (const material of Object.values(style)) material.dispose();
    art.sphere.dispose();
    art.disc.dispose();
    art.groundRing.dispose();
    art.glasses.dispose();
    art.occlusionGlyph.dispose();
    props.dispose();
    group.clear();
    occlusion.clear();
    for (const pool of unused) pool.length = 0;
    tracks.clear();
    navigators.clear();
    art = undefined;
  }

  return {
    setTracks,
    render,
    dispose,
    setVisible(visible) { group.visible = occlusion.visible = visible; },
    orientOcclusionCues(camera) {
      for (const cue of occlusion.children) if (cue.visible) cue.quaternion.copy(camera.quaternion);
    },
    get hasMotion() { return !reduced && tracks.size > 0; },
    get hasVisibleTracks() { return hasVisibleTracks; },
  };
}
