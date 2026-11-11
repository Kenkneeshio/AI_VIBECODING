import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeStorybookFurniture } from './storybook-furniture.mjs';
import { makeStorybookDevice } from './storybook-devices.mjs';
import { compileFloorStructure, compileWallStructure } from './storybook-structure.mjs';
import { createStorybookLighting } from './storybook-lighting.mjs';
import { fitStorybookCamera, normalizeCameraView } from './storybook-camera.mjs';

const DEG = Math.PI / 180;
const WALL_WIDTH = 14;
const WALL_HEIGHT = 56;
const SILL = 21;
const GROUND_Y = -111;
const FLOOR_LOOKS = {
  oak: ['#d8ad86', '#aa775d', 'board'],
  walnut: ['#a57b6e', '#755952', 'board'],
  ash: ['#e5caaa', '#b79681', 'board'],
  ivory: ['#eee0cc', '#b9a494', 'tile'],
  blue: ['#b7c9ca', '#81999e', 'tile'],
  sage: ['#b2bd9b', '#7f9a82', 'tile'],
  terrazzo: ['#e0cbba', '#a8878b', 'stone'],
  patio: ['#e5cfb2', '#a98d7e', 'tile'],
};
const WALL_LOOKS = {
  graphite: ['#eee0c9', '#514855', '#725d6d'],
  plaster: ['#f4e6d4', '#c3a393', '#b18b84'],
  sage: ['#dce0bf', '#8fa18c', '#667d74'],
  walnut: ['#d0a991', '#a47d6f', '#755a56'],
};
const CLOUDY = new Set(['cloudy', 'partlycloudy', 'fog', 'hail', 'lightning', 'lightning-rainy', 'pouring',
  'rainy', 'snowy', 'snowy-rainy', 'windy-variant']);
const WET = new Set(['hail', 'lightning-rainy', 'pouring', 'rainy', 'snowy-rainy']);
const SNOW = new Set(['snowy', 'snowy-rainy', 'hail']);
const MOUNT_HEIGHT = { presenceSwitch: 39, wallSconce: 40, wallUnit: 48, thermostat: 42 };
const VISIBLE_MOON_PHASES = new Set(['waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full_moon',
  'waning_gibbous', 'last_quarter', 'waning_crescent']);

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function roomContains(room, x, z) {
  let inside = false;
  for (let i = 0, j = room.points.length - 1; i < room.points.length; j = i++) {
    const a = room.points[i];
    const b = room.points[j];
    if ((a.y > z) !== (b.y > z) && x < (b.x - a.x) * (z - a.y) / (b.y - a.y) + a.x) inside = !inside;
  }
  return inside;
}

function nearestWall(walls, x, z, yaw = null) {
  let nearest = null;
  for (const wall of walls) {
    const t = (x - wall.x1) * wall.dx + (z - wall.y1) * wall.dz;
    if (t < 0 || t > wall.length) continue;
    if (yaw !== null && Math.abs(Math.cos(yaw - wall.angle)) < 0.82) continue;
    const centerX = wall.x1 + t * wall.dx;
    const centerZ = wall.y1 + t * wall.dz;
    const distance = Math.hypot(centerX - x, centerZ - z);
    if (distance < (nearest?.distance ?? Infinity)) nearest = { wall, t, centerX, centerZ, distance };
  }
  return nearest;
}

function interiorSide(rooms, wall, x, z) {
  const left = rooms.some(room => roomContains(room, x - wall.dz * 23, z + wall.dx * 23));
  const right = rooms.some(room => roomContains(room, x + wall.dz * 23, z - wall.dx * 23));
  return right && !left ? -1 : 1;
}

function resolveWallMount(rooms, walls, item) {
  if (!Object.hasOwn(MOUNT_HEIGHT, item.type)) return null;
  const match = nearestWall(walls, item.x, item.y);
  if (!match || match.distance > 38) return null;
  const { wall, centerX, centerZ } = match;
  const signedDistance = (item.x - centerX) * -wall.dz + (item.y - centerZ) * wall.dx;
  const side = Math.abs(signedDistance) > 4 ? Math.sign(signedDistance) : interiorSide(rooms, wall, centerX, centerZ);
  const inset = (WALL_WIDTH / 2 + 4) * side;
  return {
    x: centerX - wall.dz * inset,
    z: centerZ + wall.dx * inset,
    angle: wall.angle + (side < 0 ? Math.PI : 0),
    mountY: Math.min(MOUNT_HEIGHT[item.type], WALL_HEIGHT - 8),
  };
}

function projectWall(wall) {
  if (![wall?.x1, wall?.y1, wall?.x2, wall?.y2].every(Number.isFinite)) return null;
  const sx = wall.x2 - wall.x1;
  const sz = wall.y2 - wall.y1;
  const length = Math.hypot(sx, sz);
  if (length < 1) return null;
  return {...wall, dx: sx / length, dz: sz / length, length, angle: Math.atan2(sz, sx), openings: []};
}

function matchesSegment(wall, [x1, y1, x2, y2]) {
  return (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x2 && wall.y2 === y2) ||
    (wall.x1 === x2 && wall.y1 === y2 && wall.x2 === x1 && wall.y2 === y1);
}

function coversAxisSegment(wall, [x1, y1, x2, y2]) {
  if (x1 === x2 && wall.x1 === x1 && wall.x2 === x1) {
    return Math.min(wall.y1, wall.y2) <= Math.min(y1, y2) &&
      Math.max(wall.y1, wall.y2) >= Math.max(y1, y2);
  }
  if (y1 === y2 && wall.y1 === y1 && wall.y2 === y1) {
    return Math.min(wall.x1, wall.x2) <= Math.min(x1, x2) &&
      Math.max(wall.x1, wall.x2) >= Math.max(x1, x2);
  }
  return false;
}

// This is a read-only projection of the v2 layout. Pixel coordinates are
// still the authored units and every wall uses the same cutaway height.
export function compileStorybookPlan(layout) {
  if (layout?.version !== 2 || !Array.isArray(layout.rooms) || !layout.rooms.length ||
      !Array.isArray(layout.walls) || !Array.isArray(layout.items)) {
    throw new Error('Storybook requires a Roomcraft v2 layout with rooms, walls and items.');
  }
  const rooms = layout.rooms.filter(room => room?.points?.length >= 3 && room.points.every(
    point => Number.isFinite(point?.x) && Number.isFinite(point?.y)));
  if (!rooms.length) throw new Error('Storybook could not find a valid room polygon.');
  const authoredWalls = layout.walls.map(projectWall).filter(Boolean);
  const items = layout.items.filter(item => typeof item?.id === 'string' && typeof item.type === 'string' &&
    [item.x, item.y, item.w, item.h].every(Number.isFinite) && item.w > 0 && item.h > 0);
  const bounds = { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity };
  const extend = (x, z) => {
    bounds.minX = Math.min(bounds.minX, x);
    bounds.maxX = Math.max(bounds.maxX, x);
    bounds.minZ = Math.min(bounds.minZ, z);
    bounds.maxZ = Math.max(bounds.maxZ, z);
  };
  for (const room of rooms) for (const point of room.points) extend(point.x, point.y);
  for (const wall of authoredWalls) {
    extend(wall.x1, wall.y1);
    extend(wall.x2, wall.y2);
  }
  const houseBounds = { ...bounds };
  // The illustrated v2 reference contains the landing and stairway in the
  // fixed shell image. Only project the authored reference silhouette here.
  const byWallId = new Map(authoredWalls.map(wall => [wall.id, wall]));
  const reference = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9', 'w11', 'w12', 'w13', 'w18']
    .every(id => byWallId.has(id)) ? {
      left: houseBounds.minX - 108,
      deckEdge: houseBounds.minX - 10,
      stepTop: houseBounds.minZ + 14,
      stepBottom: houseBounds.maxZ + 25,
      deckBottom: houseBounds.maxZ + 82,
      northDeck: [
        [houseBounds.minX - 10, byWallId.get('w1').y1 + 57],
        [byWallId.get('w2').x1, byWallId.get('w1').y1 + 57],
        [byWallId.get('w3').x1, byWallId.get('w3').y1],
        [byWallId.get('w3').x2, byWallId.get('w3').y2],
        [houseBounds.minX - 10, byWallId.get('w4').y2],
      ].map(([x, y]) => ({ x, y })),
      southDeck: [
        [houseBounds.minX - 10, byWallId.get('w6').y1],
        [byWallId.get('w7').x1, byWallId.get('w7').y1],
        [byWallId.get('w7').x2, byWallId.get('w7').y2],
        [byWallId.get('w8').x1, houseBounds.maxZ + 82],
        [houseBounds.minX - 10, houseBounds.maxZ + 82],
      ].map(([x, y]) => ({ x, y })),
      recess: {
        x1: byWallId.get('w12').x2, x2: byWallId.get('w18').x1,
        z1: Math.min(byWallId.get('w11').y2, byWallId.get('w12').y2),
        z2: byWallId.get('w13').y2,
      },
    } : null;
  const walls = authoredWalls.filter(wall => {
    if (!reference) return true;
    // These legacy segments trace the shell's floor boundary. Their glazed
    // door leaves were removed in the approved plan, leaving level openings.
    return !(wall.id === 'w3' && matchesSegment(wall, [400, 408, 342, 468])) &&
      !(wall.id === 'w7' && matchesSegment(wall, [248, 590, 302, 651]));
  });
  if (reference) {
    extend(reference.left, reference.stepTop);
    extend(reference.deckEdge, reference.deckBottom);
    const {x1, x2, z1} = reference.recess;
    if (x2 > x1) {
      const rearJog = [
        [x1, byWallId.get('w12').y2, x1, z1],
        [x1, z1, x2, z1],
      ];
      for (const [index, segment] of rearJog.entries()) {
        if (walls.some(wall => coversAxisSegment(wall, segment))) continue;
        const [startX, startY, endX, endY] = segment;
        const wall = projectWall({id: `reference-recess-${index}`, x1: startX, y1: startY, x2: endX, y2: endY});
        if (wall) walls.push(wall);
      }
    }
  }
  const windowMounts = new Map();
  for (const item of items.filter(entry => entry.type === 'window')) {
    const match = nearestWall(walls, item.x, item.y, (item.rotation || 0) * DEG);
    if (!match || match.distance > 27) continue;
    const { wall, t, centerX, centerZ } = match;
    const start = Math.max(1, t - item.w / 2 + 1);
    const end = Math.min(wall.length - 1, t + item.w / 2 - 1);
    if (end - start < 14) continue;
    wall.openings.push({ start, end });
    const side = interiorSide(rooms, wall, centerX, centerZ);
    const angle = wall.angle + (side < 0 ? Math.PI : 0);
    const midpoint = (start + end) / 2;
    windowMounts.set(item.id, {
      x: wall.x1 + midpoint * wall.dx,
      z: wall.y1 + midpoint * wall.dz,
      angle,
      window: { ...item, w: end - start + 2, rotation: angle / DEG },
    });
  }
  const placements = items.map(item => {
    const isBlind = item.type === 'controlZone' &&
      (item.visualKind === 'window' || item.entityId?.startsWith('cover.'));
    let mount = windowMounts.get(item.id) ?? resolveWallMount(rooms, walls, item);
    if (isBlind) {
      let minDistance = 52;
      for (const candidate of windowMounts.values()) {
        const distance = Math.hypot(candidate.x - item.x, candidate.z - item.y);
        if (distance < minDistance) {
          mount = candidate;
          minDistance = distance;
        }
      }
    }
    const x = mount?.x ?? item.x;
    const z = mount?.z ?? item.y;
    const angle = mount?.angle ?? (Number.isFinite(item.rotation) ? item.rotation * DEG : 0);
    const halfX = Math.min(300, (Math.abs(Math.cos(angle)) * item.w + Math.abs(Math.sin(angle)) * item.h) / 2);
    const halfZ = Math.min(300, (Math.abs(Math.sin(angle)) * item.w + Math.abs(Math.cos(angle)) * item.h) / 2);
    extend(x - halfX, z - halfZ);
    extend(x + halfX, z + halfZ);
    return { item, x, z, angle, window: mount?.window, mountY: mount?.mountY, isBlind };
  });
  for (const wall of walls) wall.openings.sort((a, b) => a.start - b.start || a.end - b.end);
  const floorStructure = compileFloorStructure(rooms, reference);
  const wallStructure = compileWallStructure(walls.map(wall => ({
    ...wall,
    palette: Object.hasOwn(WALL_LOOKS, wall.finish) ? WALL_LOOKS[wall.finish] : WALL_LOOKS.graphite,
  })), WALL_WIDTH, WALL_HEIGHT, SILL);
  return { rooms, walls, placements, bounds, houseBounds, reference, floorStructure, wallStructure };
}

function drawRing(path, points) {
  for (const [index, [x, z]] of points.slice(0, -1).entries()) {
    if (index === 0) path.moveTo(x, -z);
    else path.lineTo(x, -z);
  }
  path.closePath();
  return path;
}

function joinedShape([exterior, ...holes]) {
  const shape = drawRing(new THREE.Shape(), exterior);
  shape.holes = holes.map(ring => drawRing(new THREE.Path(), ring));
  return shape;
}

function floorTexture(document, look, seed) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const [base, accent, pattern] = look;
  const rand = seededRandom(seed);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = accent;
  ctx.fillStyle = accent;
  if (pattern === 'board') {
    for (let row = 0; row < 8; row++) {
      const y = row * 32;
      ctx.globalAlpha = 0.04 + rand() * 0.14;
      ctx.fillRect(0, y, 256, 32);
      ctx.globalAlpha = 0.48;
      ctx.fillRect(0, y, 256, 1.2);
      const seam = 30 + (row * 47) % 181;
      ctx.fillRect(seam, y, 1, 32);
      ctx.globalAlpha = 0.15;
      for (let j = 0; j < 15; j++) {
        const x = rand() * 256;
        const lineY = y + 3 + rand() * 27;
        const length = 12 + rand() * 46;
        ctx.beginPath();
        ctx.moveTo(x, lineY);
        ctx.quadraticCurveTo(x + length / 2, lineY + rand() * 2 - 1, x + length, lineY);
        ctx.stroke();
      }
    }
  } else if (pattern === 'tile') {
    for (let row = 0; row < 8; row++) for (let col = 0; col < 8; col++) {
      ctx.globalAlpha = rand() * 0.14;
      ctx.fillRect(col * 32, row * 32, 32, 32);
      ctx.globalAlpha = 0.35;
      ctx.strokeRect(col * 32 + 0.5, row * 32 + 0.5, 31, 31);
    }
  } else {
    for (let i = 0; i < 160; i++) {
      ctx.globalAlpha = 0.12 + rand() * 0.24;
      ctx.fillRect(rand() * 256, rand() * 256, 1 + rand() * 4, 1 + rand() * 3);
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function makeStaticBatch(scene) {
  const batches = new Map();
  const matrix = new THREE.Matrix4();
  const rotation = new THREE.Quaternion();
  const position = new THREE.Vector3();
  const axis = new THREE.Vector3(0, 1, 0);
  const scale = new THREE.Vector3(1, 1, 1);
  const materials = new Map();
  const material = color => {
    if (!materials.has(color)) materials.set(color, new THREE.MeshLambertMaterial({ color }));
    return materials.get(color);
  };
  function add(geometry, color, x, y, z, angle = 0) {
    rotation.setFromAxisAngle(axis, angle);
    matrix.compose(position.set(x, y, z), rotation, scale);
    geometry.applyMatrix4(matrix);
    const mat = material(color);
    if (!batches.has(mat)) batches.set(mat, []);
    batches.get(mat).push(geometry);
  }
  function box(w, h, d, color, x, y, z, angle = 0) {
    if (w > 0 && h > 0 && d > 0) add(new THREE.BoxGeometry(w, h, d), color, x, y, z, angle);
  }
  function ball(rx, ry, rz, color, x, y, z) {
    const geometry = new THREE.SphereGeometry(1, 9, 6);
    geometry.scale(rx, ry, rz);
    add(geometry, color, x, y, z);
  }
  function finish() {
    for (const [mat, geometries] of batches) {
      const merged = mergeGeometries(geometries);
      if (!merged) {
        for (const geometry of geometries) scene.add(new THREE.Mesh(geometry, mat));
        continue;
      }
      scene.add(new THREE.Mesh(merged, mat));
      for (const geometry of geometries) geometry.dispose();
    }
    batches.clear();
  }
  return { add, ball, box, material, finish };
}

function buildFloors(scene, batch, plan, document) {
  const floorMaterials = new Map();
  for (const {surface: finish, polygons} of plan.floorStructure.regions) {
    const surface = Object.hasOwn(FLOOR_LOOKS, finish) ? finish : 'oak';
    if (!floorMaterials.has(surface)) {
      const look = FLOOR_LOOKS[surface];
      const texture = floorTexture(document, look, 141 + Object.keys(FLOOR_LOOKS).indexOf(surface) * 977);
      floorMaterials.set(surface, new THREE.MeshLambertMaterial({ color: texture ? '#fffdf8' : look[0], map: texture }));
    }
    for (const area of polygons) {
      const geometry = new THREE.ShapeGeometry(joinedShape(area));
      geometry.rotateX(-Math.PI / 2);
      const points = geometry.getAttribute('position');
      const uv = geometry.getAttribute('uv');
      for (let i = 0; i < uv.count; i++) uv.setXY(i, points.getX(i) / 248, points.getZ(i) / 248);
      const floor = new THREE.Mesh(geometry, floorMaterials.get(surface));
      floor.receiveShadow = true;
      scene.add(floor);
    }
  }
  for (const area of plan.floorStructure.footprint) {
    addSlab(batch, area, -22, 0, '#a67e76', true);
  }
  for (const area of plan.floorStructure.foundation) {
    addSlab(batch, area, GROUND_Y - 1, -22, '#a18e84', true);
  }
}

function indexed(geometry) {
  if (!geometry.index) {
    const count = geometry.getAttribute('position').count;
    const indices = new Uint32Array(count);
    for (let i = 0; i < count; i++) indices[i] = i;
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  }
  return geometry;
}

function addSlab(batch, polygon, bottom, top, surface, openTop = false) {
  const geometry = new THREE.ExtrudeGeometry(joinedShape(polygon), {depth: top - bottom, bevelEnabled: false});
  if (openTop) {
    // The finish meshes own this shared top plane. Removing the backing
    // triangles prevents the foundation from appearing through the floor.
    const positions = geometry.getAttribute('position');
    const indices = [];
    for (let i = 0; i < positions.count; i += 3) {
      if ([i, i + 1, i + 2].some(vertex => positions.getZ(vertex) < top - bottom - 0.001)) {
        indices.push(i, i + 1, i + 2);
      }
    }
    geometry.setIndex(indices);
  }
  geometry.rotateX(-Math.PI / 2);
  batch.add(indexed(geometry), surface, 0, bottom, 0);
}

function wallSidesGeometry(sides, height) {
  const positions = [];
  const indices = [];
  const uv = [];
  for (const [[ax, az], [bx, bz]] of sides) {
    const vertex = positions.length / 3;
    const width = Math.hypot(bx - ax, bz - az);
    positions.push(ax, 0, az, ax, height, az, bx, height, bz, bx, 0, bz);
    indices.push(vertex, vertex + 1, vertex + 2, vertex, vertex + 2, vertex + 3);
    uv.push(0, 0, 0, height, width, height, width, 0);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function wallHorizontalGeometry(polygon, underside) {
  const geometry = new THREE.ShapeGeometry(joinedShape(polygon));
  geometry.rotateX(-Math.PI / 2);
  if (underside) {
    const triangles = geometry.index.array;
    for (let i = 0; i < triangles.length; i += 3) {
      [triangles[i + 1], triangles[i + 2]] = [triangles[i + 2], triangles[i + 1]];
    }
    geometry.computeVertexNormals();
  }
  return geometry;
}

function buildWalls(batch, plan) {
  for (const {faces, bottom, top, surface} of plan.wallStructure) {
    for (const area of faces.top) batch.add(wallHorizontalGeometry(area, false), surface, 0, top, 0);
    for (const area of faces.bottom) batch.add(wallHorizontalGeometry(area, true), surface, 0, bottom, 0);
    if (faces.sides.length) {
      batch.add(wallSidesGeometry(faces.sides, top - bottom), surface, 0, bottom, 0);
    }
  }
}

function buildReferenceLanding(batch, plan) {
  if (!plan.reference) return;
  const { left, deckEdge, stepTop, stepBottom, northDeck } = plan.reference;
  const deckWidth = deckEdge - left;
  const center = (deckEdge + left) / 2;
  const steps = 14;
  const run = (stepBottom - stepTop) / steps;
  const ground = -108;
  const rise = -ground / steps;
  for (let step = 0; step < steps; step++) {
    const z = stepTop + run * (step + 0.5);
    const y = ground + (step + 1) * rise;
    const coreTop = y - 3;
    // Riser blocks meet edge to edge; the last tread shares the landing datum.
    batch.box(deckWidth, coreTop - ground, run, '#a98075', center, (ground + coreTop) / 2, z);
    batch.box(deckWidth, 3, run, step % 2 ? '#e2c2a6' : '#d5b198', center, y - 1.5, z);
    batch.box(deckWidth + 1, 2.4, 3, '#b68e82', center, y - 1.8, z - run / 2 + 0.4);
    batch.box(5, 24, 5, '#9f8183', left + 4, y + 12, z);
  }
  const railRun = run * (steps - 1);
  const railRise = rise * (steps - 1);
  const rail = new THREE.BoxGeometry(7, 5, Math.hypot(railRun, railRise) + 5);
  rail.rotateX(-Math.atan2(railRise, railRun));
  batch.add(rail, '#896e79', left + 4, 24 - railRise / 2, (stepTop + stepBottom) / 2);
  batch.box(deckWidth + 2, 3, 80, '#cbbda6', center, ground - 1.5, stepTop - 40);
  const [outer, inner] = northDeck;
  const posts = Math.max(2, Math.ceil((inner.x - outer.x) / 28));
  batch.box(inner.x - outer.x, 5, 7, '#896e79', (inner.x + outer.x) / 2, 28, outer.y);
  for (let i = 0; i <= posts; i++) {
    batch.box(5, 28, 5, '#9f8183', outer.x + (inner.x - outer.x) * i / posts, 14, outer.y);
  }
}

function meadowTexture(document) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const rng = seededRandom(71293);
  ctx.fillStyle = '#b1c3a0';
  ctx.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 92; i++) {
    const x = rng() * 512;
    const y = rng() * 512;
    const size = 20 + rng() * 56;
    for (const dx of [-512, 0, 512]) for (const dy of [-512, 0, 512]) {
      const gradient = ctx.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, size);
      gradient.addColorStop(0, i % 3 ? '#dbe0a730' : '#466f5630');
      gradient.addColorStop(1, '#b1c3a000');
      ctx.fillStyle = gradient;
      ctx.fillRect(x + dx - size, y + dy - size, size * 2, size * 2);
    }
  }
  for (let i = 0; i < 4200; i++) {
    const x = rng() * 512;
    const y = rng() * 512;
    ctx.fillStyle = i % 2 ? '#e3e6b33e' : '#5e7b5d30';
    ctx.fillRect(x, y, 1.4 + rng() * 3, 1.2 + rng() * 2.8);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(15, 10);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function buildYard(batch, plan) {
  const { minX, maxX, minZ, maxZ } = plan.houseBounds;
  const width = maxX - minX;
  const depth = maxZ - minZ;
  const rand = seededRandom(150741);
  const pathWidth = Math.min(90, width * 0.18);
  const pathX = plan.reference ? plan.reference.left + pathWidth / 2 : minX + pathWidth / 2;
  batch.box(pathWidth, 4, 115, '#c7baa4', pathX, -109, minZ - 88);
  for (let i = 0; i < 5; i++) {
    batch.box(pathWidth * 0.85, 1.8, 13, '#dbceba', pathX, -106, minZ - 137 + i * 20);
  }
  const bushes = [[0.06, -0.075], [0.32, -0.09], [0.63, -0.11], [0.92, -0.075], [1.045, 0.32],
    [1.035, 0.74], [0.84, 1.085], [0.51, 1.08], [0.23, 1.075], [-0.135, 0.55]];
  for (const [fx, fz] of bushes) {
    const x = minX + fx * width;
    const z = minZ + fz * depth;
    const size = 21 + rand() * 24;
    batch.ball(size * 0.94, 9, size * 0.67, '#6d886a', x, -104, z);
    batch.ball(size * 0.82, size * 0.57, size * 0.69, '#819b76', x + 3, -98, z);
    for (let j = 0; j < 8; j++) {
      const angle = j * 2.39996;
      const radius = (0.2 + rand() * 0.5) * size;
      const leaf = size * (0.28 + rand() * 0.2);
      const color = ['#94ad7f', '#a6ba88', '#8da878', '#bad09c'][j % 4];
      batch.ball(leaf * 1.15, leaf * 0.8, leaf, color,
        x + Math.cos(angle) * radius, -93 + 12 * rand(), z + Math.sin(angle) * radius * 0.75);
    }
    for (let j = 0; j < 5; j++) {
      const bloom = j % 2 ? '#e6c4b1' : '#fae6a4';
      const flowerX = x + (rand() - 0.5) * size * 1.14;
      const flowerZ = z + size * (0.62 + rand() * 0.43);
      batch.ball(2.3, 4.6, 2.3, '#819765', flowerX, -106, flowerZ);
      batch.ball(3.9, 1.8, 3.3, bloom, flowerX, -101.5, flowerZ);
      batch.ball(1.2, 0.9, 1.2, '#cb9c57', flowerX, -100.3, flowerZ);
    }
  }
}

function buildWeather(scene, plan) {
  const { minX, maxX, minZ } = plan.houseBounds;
  const rand = seededRandom(2912);
  const bounds = plan.bounds;
  const cloud = new THREE.Group();
  const cloudMaterial = new THREE.MeshLambertMaterial({ color: '#f8ebdf', transparent: true, opacity: 0.9 });
  const cloudGeometry = new THREE.SphereGeometry(1, 12, 8);
  const spanX = maxX - minX;
  for (const [index, offset] of [0.19, 0.53, 0.82].entries()) {
    const x = minX + spanX * offset;
    const z = minZ - 55 - index % 2 * 34;
    for (let lobe = 0; lobe < 3; lobe++) {
      const puff = new THREE.Mesh(cloudGeometry, cloudMaterial);
      puff.scale.set(32 + rand() * 21, 15 + rand() * 10, 25 + rand() * 10);
      puff.position.set(x + lobe * 31, 27 + 5 * (lobe === 1), z);
      cloud.add(puff);
    }
  }
  scene.add(cloud);
  const orb = new THREE.Group();
  orb.position.set(minX + spanX * 0.77, 21, minZ - 70);
  const sun = new THREE.Mesh(new THREE.SphereGeometry(17, 16, 10),
    new THREE.MeshBasicMaterial({ color: '#ffe2a1' }));
  orb.add(sun);
  const moon = new THREE.Group();
  // Shaded profiles derive from the reported HA moon phase.
  const moonFull = new THREE.Mesh(sun.geometry, new THREE.MeshBasicMaterial({ color: '#f9e5c6' }));
  moon.add(moonFull);
  const moonShadow = new THREE.Mesh(sun.geometry, new THREE.MeshBasicMaterial({ color: '#7d7c97' }));
  moonShadow.position.set(4, 4, 1);
  moonShadow.scale.setScalar(0.96);
  moon.add(moonShadow);
  orb.add(moon);
  scene.add(orb);
  const rainLocations = [];
  const recess = plan.reference?.recess;
  const isExterior = (x, z) => !(recess && x >= recess.x1 && x <= recess.x2 && z >= recess.z1 && z <= recess.z2) &&
    !plan.rooms.some(room => roomContains(room, x, z));
  for (let i = 0; i < 190; i++) {
    const x = bounds.minX - 70 + (bounds.maxX - bounds.minX + 140) * rand();
    const z = bounds.minZ - 70 + (bounds.maxZ - bounds.minZ + 140) * rand();
    if (isExterior(x, z)) rainLocations.push({ x, z, phase: rand() * 180 });
  }
  const rainPositions = new Float32Array(rainLocations.length * 6);
  const snowPositions = new Float32Array(rainLocations.length * 3);
  const rainGeometry = new THREE.BufferGeometry();
  const snowGeometry = new THREE.BufferGeometry();
  rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3).setUsage(THREE.DynamicDrawUsage));
  snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3).setUsage(THREE.DynamicDrawUsage));
  const rain = new THREE.LineSegments(rainGeometry,
    new THREE.LineBasicMaterial({ color: '#cce5ef', transparent: true, opacity: 0.66 }));
  const snow = new THREE.Points(snowGeometry,
    new THREE.PointsMaterial({ color: '#fff6eb', size: 3.2, transparent: true, opacity: 0.8 }));
  rain.frustumCulled = snow.frustumCulled = false;
  scene.add(rain, snow);
  return (time, environment, reduceMotion) => {
    const { night = false, condition = '', moonPhase = '', daylightKnown = true } = environment;
    const motionTime = reduceMotion ? 0 : time;
    cloud.visible = CLOUDY.has(condition);
    cloud.position.x = Math.sin(motionTime * 0.16) * (condition.includes('windy') ? 48 : 23);
    sun.visible = daylightKnown && !night;
    moon.visible = daylightKnown && night && VISIBLE_MOON_PHASES.has(moonPhase);
    moonShadow.visible = moonPhase !== 'full_moon';
    const waxing = moonPhase.startsWith('waxing') || moonPhase === 'first_quarter';
    const quarter = moonPhase.endsWith('quarter');
    moonShadow.position.x = (waxing ? -1 : 1) * (quarter ? 8 : moonPhase.endsWith('gibbous') ? 14 : 5);
    rain.visible = WET.has(condition);
    snow.visible = SNOW.has(condition);
    if (rain.visible || snow.visible) {
      for (const [index, drop] of rainLocations.entries()) {
        const y = 65 - (drop.phase + motionTime * 150) % 170;
        const flakeY = 65 - (drop.phase + motionTime * 20) % 170;
        const i = index * 6;
        rainPositions.set([drop.x, y, drop.z, drop.x - 4, y + 22, drop.z + 3], i);
        snowPositions.set([drop.x + Math.sin(motionTime + index) * 6, flakeY, drop.z], index * 3);
      }
      rainGeometry.attributes.position.needsUpdate = rain.visible;
      snowGeometry.attributes.position.needsUpdate = snow.visible;
    }
  };
}

function tableMount(plan, placement, roots) {
  if (placement.item.type !== 'plant') return 0;
  // V2 has no furniture sockets. Flowers on a table are the sole inferred
  // mount here; general placement still uses the authored floor coordinates.
  for (const support of plan.placements) {
    if (!['table', 'coffeeTable', 'sideTable'].includes(support.item.type)) continue;
    const dx = placement.x - support.x;
    const dz = placement.z - support.z;
    const localX = dx * Math.cos(support.angle) + dz * Math.sin(support.angle);
    const localZ = -dx * Math.sin(support.angle) + dz * Math.cos(support.angle);
    if (Math.abs(localX) < support.item.w * 0.35 && Math.abs(localZ) < support.item.h * 0.35) {
      return roots.get(support.item.id)?.anchorY ?? 0;
    }
  }
  return 0;
}

export function createStorybookScene(canvas, layout) {
  const plan = compileStorybookPlan(layout);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'low-power' });
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#d7dfcd');
  const camera = new THREE.OrthographicCamera(-800, 800, 450, -450, 1, 4400);
  const { minX, maxX, minZ, maxZ } = plan.bounds;
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: '#e8e8d2', map: meadowTexture(canvas.ownerDocument), roughness: 0.95
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(6200, 4200), groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set((minX + maxX) / 2, GROUND_Y, (minZ + maxZ) / 2);
  scene.add(ground);
  const batch = makeStaticBatch(scene);
  buildYard(batch, plan);
  buildReferenceLanding(batch, plan);
  buildFloors(scene, batch, plan, canvas.ownerDocument);
  buildWalls(batch, plan);
  batch.finish();
  const lighting = createStorybookLighting(renderer, scene, plan.bounds);
  lighting.markStructure();
  const updateWeather = buildWeather(scene, plan);
  const anchors = new Map();
  const roots = new Map();
  for (const placement of plan.placements) {
    const { item, x, z, angle, window, mountY, isBlind } = placement;
    const drawItem = item.type === 'window' && window ? window : item;
    const object = makeStorybookDevice(drawItem, { window: isBlind ? window : undefined, mountY }) ??
      makeStorybookFurniture(drawItem);
    if (object) {
      object.root.position.set(x, 0, z);
      object.root.rotation.y = -angle;
      scene.add(object.root);
      roots.set(item.id, object);
      lighting.register(item, object);
    }
    anchors.set(item.id, { x, z, object });
  }
  for (const placement of plan.placements) {
    const object = roots.get(placement.item.id);
    if (object) object.root.position.y = tableMount(plan, placement, roots);
  }
  const position = new THREE.Vector3();
  let disposed = false;
  let currentWidth = 0;
  let currentHeight = 0;
  let cameraView = normalizeCameraView();
  const raycaster = new THREE.Raycaster();
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const projected = new THREE.Vector3();
  const defaultState = Object.freeze({ state: 'unavailable', attributes: Object.freeze({}), presence: 'off', active: false });
  function resize(width, height) {
    if (disposed || width < 1 || height < 1 || (width === currentWidth && height === currentHeight)) return;
    currentWidth = width;
    currentHeight = height;
    const deviceRatio = canvas.ownerDocument.defaultView?.devicePixelRatio || 1;
    renderer.setPixelRatio(Math.min(deviceRatio, 1.5, Math.sqrt(2700000 / (width * height))));
    renderer.setSize(width, height, false);
    cameraView = fitStorybookCamera(camera, plan.bounds, width, height, cameraView);
  }
  function setView(value) {
    cameraView = normalizeCameraView(value);
    if (!disposed && currentWidth > 0 && currentHeight > 0) {
      cameraView = fitStorybookCamera(camera, plan.bounds, currentWidth, currentHeight, cameraView);
    }
    return getView();
  }
  function getView() { return {...cameraView}; }
  function projectToPlan(x, y) {
    if (disposed || !Number.isFinite(x) || !Number.isFinite(y) || currentWidth <= 0 || currentHeight <= 0) return null;
    raycaster.setFromCamera(new THREE.Vector2(x / currentWidth * 2 - 1, 1 - y / currentHeight * 2), camera);
    return raycaster.ray.intersectPlane(floorPlane, projected)
      ? {x: projected.x, y: projected.z} : null;
  }
  function render(timeSeconds = 0, statesById = {}, environment = {}) {
    if (disposed || currentWidth < 1 || currentHeight < 1) return;
    lighting.update(environment, statesById, groundMaterial);
    const reduceMotion = environment.reduceMotion === true;
    const time = Number.isFinite(timeSeconds) ? timeSeconds : 0;
    updateWeather(time, environment, reduceMotion);
    for (const [id, object] of roots) {
      const state = statesById[id] ?? defaultState;
      const latest = state.position;
      if (latest && Number.isFinite(latest.x) && Number.isFinite(latest.y)) {
        object.root.position.x = latest.x;
        object.root.position.z = latest.y;
      }
      object.animate?.(state, reduceMotion ? 0 : time);
    }
    renderer.render(scene, camera);
  }
  function anchor(itemId) {
    const entry = anchors.get(itemId);
    if (!entry || currentWidth < 1 || currentHeight < 1) return null;
    const { x, z, object } = entry;
    if (object) {
      position.set(object.anchorOffset?.x || 0, object.anchorY || 0, object.anchorOffset?.z || 0);
      object.root.localToWorld(position);
    } else {
      position.set(x, 6, z);
    }
    position.project(camera);
    return { x: (position.x + 1) / 2, y: (1 - position.y) / 2 };
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    const geometries = new Set();
    const materials = new Set();
    const textures = new Set();
    scene.traverse(node => {
      if (node.geometry) geometries.add(node.geometry);
      for (const mat of Array.isArray(node.material) ? node.material : [node.material]) {
        if (!mat) continue;
        materials.add(mat);
        for (const field of Object.values(mat)) if (field?.isTexture) textures.add(field);
      }
    });
    for (const texture of textures) texture.dispose();
    for (const geometry of geometries) geometry.dispose();
    for (const material of materials) material.dispose();
    lighting.dispose();
    renderer.dispose();
  }
  return { resize, render, anchor, setView, getView, projectToPlan, dispose };
}
