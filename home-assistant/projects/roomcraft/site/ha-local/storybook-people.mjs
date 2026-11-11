import * as THREE from 'three';

const MAX_TRACKS = 24;
const MOVE_SECONDS = 0.32;
const MAX_INTERPOLATION_DISTANCE = 125;
const STYLES = [
  {role: 'papa', scale: [1.26, 1.25, 1.22], sweater: '#537eaa', trim: '#ffcc81', skin: '#db9f76', hair: '#4b3533'},
  {role: 'mama', scale: [1.09, 1.18, 1.12], sweater: '#c86587', trim: '#ffdeaf', skin: '#e8af83', hair: '#5a3841'},
  {role: 'baby', scale: [.92, .83, .92], sweater: '#8b78cf', trim: '#ffe492', skin: '#f1b98e', hair: '#674138'},
];

function paintedMaterial(color, emissiveIntensity = 0.12) {
  return new THREE.MeshStandardMaterial({color, roughness: 0.78, emissive: color, emissiveIntensity});
}

function animateFace(character, idle, reducedMotion) {
  const blinking = !reducedMotion && idle % 4.8 < 0.13;
  character.head.rotation.x = -0.62 + (reducedMotion ? 0 : Math.sin(idle * 1.5) * 0.047);
  character.head.rotation.z = reducedMotion ? 0 : Math.sin(idle * 3.4) * 0.047;
  for (const eye of character.eyes) eye.scale.y = blinking ? 0.15 : 0.87;
}

/**
 * Private, transient scene layer. A snapshot contains {id, x, y} plan points.
 * Time is monotonic seconds supplied by the scene adapter.
 */
export function createStorybookPeople(scene, floorAt = () => 0) {
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
      groundRing: new THREE.RingGeometry(13.8, 17.5, 32).rotateX(-Math.PI / 2),
      glasses: new THREE.TorusGeometry(1, .14, 6, 16),
      palette: STYLES.map(({sweater, trim, skin, hair}) => Object.fromEntries(
        Object.entries({sweater, trim, skin, hair}).map(([part, color]) => [part, paintedMaterial(color)]),
      )),
      ink: paintedMaterial('#423c50', 0.09),
      cheek: paintedMaterial('#d78383'),
      shoes: paintedMaterial('#514656'),
      white: paintedMaterial('#fff1dc'),
      shadow: new THREE.MeshBasicMaterial({color:'#433849', transparent:true, opacity:0.22, depthWrite:false}),
      groundMark: new THREE.MeshBasicMaterial({color:'#fff1cd', depthWrite:false, toneMapped:false}),
    };
  }

  function makeCharacter(styleIndex) {
    art ??= makeArt();
    const {role, scale} = STYLES[styleIndex];
    const {sweater, trim, skin, hair} = art.palette[styleIndex];
    const baby = role === 'baby';
    const root = new THREE.Group();
    root.name = `radar-avatar-${role}`;
    const body = new THREE.Group();
    const head = new THREE.Group();
    const eyes = [];
    const arms = [];
    const legs = [];
    group.add(root);
    root.add(body);
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
    groundMark.position.y = 0.26;
    root.add(groundMark);

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
      ellipse(leg, baby ? sweater : art.ink, 0, -3.2, 0, 2.65, 4.6, 2.6);
      ellipse(leg, baby ? trim : art.shoes, 0, -8.15, 1.25, 3.1, 2.1, 4);
      ellipse(leg, art.white, 0, -8.8, 3.25, 2.75, 1.1, 2);
      legs.push(leg);

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
    return {root, body, head, arms, legs, eyes, styleIndex, baby};
  }

  function progress(track, time) {
    return track.duration > 0 ? THREE.MathUtils.clamp((time - track.start) / track.duration, 0, 1) : 1;
  }

  function render(seconds, reduceMotion = preference) {
    lastTime = Number.isFinite(seconds) ? seconds : lastTime;
    reduced = reduceMotion || preference;
    hasVisibleTracks = false;
    for (const track of tracks.values()) {
      const {character} = track;
      const amount = reduced ? 1 : progress(track, lastTime);
      const x = THREE.MathUtils.lerp(track.fromX, track.x, amount);
      const z = THREE.MathUtils.lerp(track.fromZ, track.z, amount);
      const floor = floorAt(x, z);
      character.root.visible = Number.isFinite(floor);
      if (!character.root.visible) continue;
      hasVisibleTracks = true;
      character.root.position.set(x, floor, z);
      character.root.rotation.y = track.heading;
      const walking = track.walking && amount < 1 && !reduced;
      const idle = Math.floor(Math.max(0, lastTime - track.born) * 16) / 16 + .7 + character.styleIndex * .62;
      const step = Math.floor(amount * 12) / 12 * Math.PI * 4;
      const stride = walking ? Math.sin(step) * .56 : 0;
      const bounce = walking ? Math.abs(Math.sin(step)) * 1.9 : (1 + Math.sin(idle * 4.7)) * .47;
      character.body.position.y = reduced ? 0 : bounce * (character.baby ? 1.5 : 1);
      character.body.rotation.z = reduced ? 0 : walking ? stride * .15 : Math.sin(idle * 2.8) * .045;
      for (let i = 0; i < 2; i++) {
        const side = i === 0 ? -1 : 1;
        character.arms[i].rotation.x = walking ? -stride * side : reduced ? 0 : Math.sin(idle * 3.1 + i) * .09;
        character.legs[i].rotation.x = stride * side;
      }
      animateFace(character, idle, reduced);
    }
  }

  function setTracks(snapshot, seconds, {reduceMotion = false} = {}) {
    preference = reduceMotion;
    const time = Number.isFinite(seconds) ? seconds : lastTime;
    const next = new Map();
    for (const point of Array.isArray(snapshot) ? snapshot : []) {
      if (typeof point?.id !== 'string' || !point.id || point.id.length > 256 ||
          !Number.isFinite(point.x) || !Number.isFinite(point.y) || next.has(point.id) ||
          !Number.isFinite(floorAt(point.x, point.y))) continue;
      next.set(point.id, point);
      if (next.size === MAX_TRACKS) break;
    }
    for (const [id, track] of tracks) {
      if (next.has(id)) continue;
      track.character.root.visible = false;
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
      const {x, y: z} = next.get(id);
      tracks.set(id, {character, fromX:x, fromZ:z, x, z, heading:0, born:time, start:time, duration:0});
    }
    for (const [id, {x, y: z}] of next) {
      const old = tracks.get(id);
      if (old.x !== x || old.z !== z) {
        const amount = reduceMotion ? 1 : progress(old, time);
        const fromX = THREE.MathUtils.lerp(old.fromX, old.x, amount);
        const fromZ = THREE.MathUtils.lerp(old.fromZ, old.z, amount);
        const distance = Math.hypot(x - fromX, z - fromZ);
        const heading = distance > 1 ? Math.atan2(x - fromX, z - fromZ) : old.heading;
        const duration = !reduceMotion && distance <= MAX_INTERPOLATION_DISTANCE ? MOVE_SECONDS : 0;
        Object.assign(old, {fromX, fromZ, x, z, heading, start:time, duration, walking:distance > 2});
      }
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
    get hasMotion() { return !reduced && tracks.size > 0; },
    get hasVisibleTracks() { return hasVisibleTracks; },
  };
}
