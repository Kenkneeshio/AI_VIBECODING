import * as THREE from 'three';

const MAX_TRACKS = 24;
const MOVE_SECONDS = 0.32;
const MAX_INTERPOLATION_DISTANCE = 125;
const CHARACTER_SCALE = 1.17;
const STYLES = [
  {sweater: '#d77465', trim: '#ffe3bb', skin: '#d9a57e', hair: '#63453b'},
  {sweater: '#67a396', trim: '#d6efe4', skin: '#efbc92', hair: '#7c5544'},
  {sweater: '#8d80b4', trim: '#f0daf1', skin: '#a96e52', hair: '#4d3940'},
  {sweater: '#d4a345', trim: '#fff0bc', skin: '#e6ab82', hair: '#856247'},
  {sweater: '#6198c1', trim: '#def4ef', skin: '#c99065', hair: '#493744'},
  {sweater: '#bd779b', trim: '#f7dce0', skin: '#f2c5a3', hair: '#9d664e'},
];

function colorIndex(id) {
  let hash = 2166136261;
  for (let i = 0; i < id.length; i++) hash = Math.imul(hash ^ id.charCodeAt(i), 16777619);
  return (hash >>> 0) % STYLES.length;
}

function paintedMaterial(color, emissiveIntensity = 0.12) {
  return new THREE.MeshStandardMaterial({color, roughness: 0.78, emissive: color, emissiveIntensity});
}

function animateFace(character, time, reducedMotion) {
  const idle = time + character.palette * 1.43;
  const blinking = !reducedMotion && idle % 4.8 < 0.13;
  character.head.rotation.x = -0.62 + (reducedMotion ? 0 : Math.sin(idle * 1.5) * 0.047);
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
  const unused = [];
  let preference = false;
  let reduced = false;
  let lastTime = 0;
  let hasVisibleTracks = false;

  function makeArt() {
    return {
      sphere: new THREE.SphereGeometry(1, 12, 8),
      disc: new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2),
      groundRing: new THREE.RingGeometry(13.8, 17.5, 32).rotateX(-Math.PI / 2),
      palette: STYLES.map(style => Object.fromEntries(
        Object.entries(style).map(([part, color]) => [part, paintedMaterial(color)]),
      )),
      ink: paintedMaterial('#423c50', 0.09),
      cheek: paintedMaterial('#d78383'),
      shoes: paintedMaterial('#514656'),
      white: paintedMaterial('#fff1dc'),
      shadow: new THREE.MeshBasicMaterial({color:'#433849', transparent:true, opacity:0.22, depthWrite:false}),
      groundMark: new THREE.MeshBasicMaterial({color:'#fff1cd', depthWrite:false, toneMapped:false}),
    };
  }

  function makeCharacter() {
    art ??= makeArt();
    const root = new THREE.Group();
    const body = new THREE.Group();
    const head = new THREE.Group();
    const clothes = [];
    const skin = [];
    const hair = [];
    const trim = [];
    const eyes = [];
    const arms = [];
    const legs = [];
    group.add(root);
    root.add(body);
    body.scale.setScalar(CHARACTER_SCALE);

    const ellipse = (parent, material, x, y, z, width, height, depth) => {
      const mesh = new THREE.Mesh(art.sphere, material);
      mesh.position.set(x, y, z);
      mesh.scale.set(width, height, depth);
      parent.add(mesh);
      return mesh;
    };
    const tinted = (parts, parent, ...shape) => parts.push(ellipse(parent, art.white, ...shape));
    const shadow = new THREE.Mesh(art.disc, art.shadow);
    shadow.position.y = 0.13;
    shadow.scale.set(19, 1, 19);
    root.add(shadow);
    const groundMark = new THREE.Mesh(art.groundRing, art.groundMark);
    groundMark.position.y = 0.26;
    root.add(groundMark);

    tinted(clothes, body, 0, 15, 0, 7.1, 8.3, 5.4);
    tinted(trim, body, 0, 20.7, 2.4, 5.8, 2.2, 4);
    tinted(trim, body, 0.8, 14.4, 5.2, 2.4, 2, 0.65);

    for (const side of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 3.4, 10.3, 0.1);
      body.add(leg);
      ellipse(leg, art.ink, 0, -3.2, 0, 2.65, 4.6, 2.6);
      ellipse(leg, art.shoes, 0, -8.15, 1.25, 3.1, 2.1, 4);
      ellipse(leg, art.white, 0, -8.8, 3.25, 2.75, 1.1, 2);
      legs.push(leg);

      const arm = new THREE.Group();
      arm.position.set(side * 6.25, 19.1, 0);
      body.add(arm);
      tinted(clothes, arm, side * 0.9, -3.7, 0.15, 2.75, 5.3, 2.7);
      tinted(skin, arm, side * 1.3, -7.8, 0.5, 2.3, 2.6, 2.2);
      arms.push(arm);
    }

    // The tilted face reads both in the overhead plan and in the dollhouse.
    head.position.set(0, 27.2, 0);
    body.add(head);
    tinted(hair, head, 0, 1.3, -1.65, 9.2, 9.65, 8.6);
    tinted(skin, head, 0, 0, 1.9, 8.65, 8.45, 7.5);
    tinted(hair, head, -3, 7, 4.25, 5.75, 3.65, 4.35);
    tinted(hair, head, 3.1, 8.5, 0.5, 4.7, 2.6, 5.15);
    for (const side of [-1, 1]) {
      tinted(skin, head, side * 8.2, -0.15, 1.1, 1.85, 2.4, 1.75);
      eyes.push(ellipse(head, art.ink, side * 3, 1.2, 8.95, 0.85, 0.87, 0.52));
      ellipse(head, art.cheek, side * 5.05, -1.25, 7.95, 1.18, 0.62, 0.52);
    }
    ellipse(head, art.ink, 0, -1.95, 9.15, 1.38, 0.45, 0.38);
    const character = {root, body, head, arms, legs, eyes};
    return {
      character,
      setStyle(index) {
        const colors = art.palette[index];
        character.palette = index;
        for (const mesh of clothes) mesh.material = colors.sweater;
        for (const mesh of skin) mesh.material = colors.skin;
        for (const mesh of hair) mesh.material = colors.hair;
        for (const mesh of trim) mesh.material = colors.trim;
      },
    };
  }

  function progress(track, time) {
    return track.duration > 0 ? THREE.MathUtils.clamp((time - track.start) / track.duration, 0, 1) : 1;
  }

  function render(seconds, reduceMotion = preference) {
    lastTime = Number.isFinite(seconds) ? seconds : lastTime;
    reduced = reduceMotion || preference;
    hasVisibleTracks = false;
    for (const track of tracks.values()) {
      const {character} = track.model;
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
      const stride = walking ? Math.sin(amount * Math.PI * 2) * 0.38 : 0;
      character.body.position.y = walking ? Math.sin(amount * Math.PI) * 0.85 : 0;
      for (let i = 0; i < 2; i++) {
        const swing = stride * (i === 0 ? -1 : 1);
        character.arms[i].rotation.x = -swing;
        character.legs[i].rotation.x = swing;
      }
      animateFace(character, lastTime, reduced);
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
      track.model.character.root.visible = false;
      unused.push(track.model);
      tracks.delete(id);
    }
    for (const [id, {x, y: z}] of next) {
      const old = tracks.get(id);
      if (!old) {
        const model = unused.pop() ?? makeCharacter();
        model.setStyle(colorIndex(id));
        tracks.set(id, {model, fromX:x, fromZ:z, x, z, heading:0, start:time, duration:0});
      } else if (old.x !== x || old.z !== z) {
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
    group.clear();
    unused.length = 0;
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
