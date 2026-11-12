import * as THREE from 'three';
import polygonClipping from 'polygon-clipping';
import {sceneFeatureEnabled, sceneWind} from './storybook-scene-settings.mjs';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeStorybookFurniture } from './storybook-furniture.mjs';
import '../public/inventory.js';
import { garagePadContains, isStorybookBlind, makeStorybookDevice } from './storybook-devices.mjs';
import { compileFloorStructure, compileWallStructure, isOutdoorRoom } from './storybook-structure.mjs';
import { createStorybookLighting } from './storybook-lighting.mjs';
import { createStorybookSolarFade, storybookSolar } from './storybook-solar.mjs';
import { fitStorybookCamera, normalizeCameraView, storybookHorizonFog, STORYBOOK_CAMERA_FAR } from './storybook-camera.mjs';
import { applyModelHeight } from './storybook-size.mjs';
import { createStorybookPeople, STORYBOOK_PERSON_RADIUS } from './storybook-people.mjs';
import {applyVacuumAlignment} from './storybook-vacuum-alignment.mjs';
import { compileStorybookSeats } from './storybook-seating.mjs';
import { compileStorybookInteractions } from './storybook-person-interactions.mjs';
import {
  createFloorSupport, createStorybookFurnitureCollision, nearestSupportedFloorPoint, unobstructedFloor,
} from './storybook-floor-support.mjs';
import { createStorybookMotion } from './storybook-motion.mjs';
import { createStorybookCoverage } from './storybook-coverage.mjs';
import { createStorybookRadarHeatMap } from './storybook-radar-heatmap.mjs';
import { createStorybookOcean } from './storybook-ocean.mjs';
import { buildStorybookNeighborhood, buildStorybookStreet, storybookStreetBounds } from './storybook-street.mjs';
import { createStorybookTraffic } from './storybook-traffic.mjs';
import { createStorybookSidewalk } from './storybook-sidewalk.mjs';
import { createStorybookBoats } from './storybook-boats.mjs';
import { createStorybookBeachPlay } from './storybook-beach-play.mjs';
import { createStorybookPlacement } from './storybook-placement.mjs';
import { createStorybookTreeWind, STORYBOOK_TREE_SPECIES } from './storybook-trees.mjs';

const DEG = Math.PI / 180;
const WALL_WIDTH = 14;
const WALL_HEIGHT = 56;
const SILL = 21;
const GROUND_Y = -111;
const STAIR_BASE = -108;
const DEFAULT_STEPS = 14;
const FENCE_POST_SPACING = 28;
const FENCE_HEIGHT = 28;
const FENCE_RAIL_WIDTH = 7;
const EMPTY_PLAN_BOUNDS = { minX: 0, maxX: 1536, minZ: 0, maxZ: 1024 };
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
const WET = new Set(['lightning-rainy', 'pouring', 'rainy', 'snowy-rainy']);
const SNOW = new Set(['snowy', 'snowy-rainy']);
const INSANE_DRAW_PIXELS = 12_000_000;
const MOUNT_HEIGHT = { presenceSwitch: 39, wallSconce: 40, wallUnit: 48, thermostat: 42, artwork: 38, mirror: 39 };

// Snapshot the projection so a new zoom or orbit invalidates the sidewalk's cached pose.
export function storybookSceneryView(camera) {
  const projection = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  const frustum = new THREE.Frustum().setFromProjectionMatrix(projection);
  const sphere = new THREE.Sphere();
  return (x, y, z, radius) => {
    sphere.center.set(x, y, z);
    sphere.radius = radius;
    return frustum.intersectsSphere(sphere);
  };
}

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
  const template = (typeof window === 'undefined' ? globalThis : window).RoomcraftInventory?.byType?.[item.type];
  const padding = template?.artFamily === 'paddedPanel';
  const height = MOUNT_HEIGHT[item.type] ?? (template?.mount === 'wall'
    ? padding ? 0 : MOUNT_HEIGHT.wallSconce : undefined);
  if (height === undefined) return null;
  const match = nearestWall(walls, item.x, item.y);
  if (!match || match.distance > 38) return null;
  const { wall, centerX, centerZ } = match;
  const signedDistance = (item.x - centerX) * -wall.dz + (item.y - centerZ) * wall.dx;
  const side = Math.abs(signedDistance) > 4 ? Math.sign(signedDistance) : interiorSide(rooms, wall, centerX, centerZ);
  const inset = (WALL_WIDTH / 2 + 4 + (padding ? item.h * .30 : 0)) * side;
  return {
    x: centerX - wall.dz * inset,
    z: centerZ + wall.dx * inset,
    angle: wall.angle + (side < 0 ? Math.PI : 0),
    mountY: Math.min(height, WALL_HEIGHT - 8),
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

function emptyBounds() {
  return { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity };
}

function includePoint(bounds, x, z) {
  bounds.minX = Math.min(bounds.minX, x);
  bounds.maxX = Math.max(bounds.maxX, x);
  bounds.minZ = Math.min(bounds.minZ, z);
  bounds.maxZ = Math.max(bounds.maxZ, z);
}

function wallPalette(wall) {
  return Object.hasOwn(WALL_LOOKS, wall.finish) ? WALL_LOOKS[wall.finish] : WALL_LOOKS.graphite;
}

function stairLocalPoint(stair, x, z) {
  const dx = x - stair.x;
  const dz = z - stair.z;
  const cos = Math.cos(stair.angle);
  const sin = Math.sin(stair.angle);
  return [dx * cos + dz * sin, -dx * sin + dz * cos];
}

function stairGrade(stair, x, z) {
  const [localX, localZ] = stairLocalPoint(stair, x, z);
  if (Math.abs(localX) > stair.item.w / 2 + 5 || Math.abs(localZ) > stair.item.h / 2 + 5) return null;
  const fraction = THREE.MathUtils.clamp(localZ / stair.item.h + .5, 0, 1);
  return STAIR_BASE - STAIR_BASE * fraction;
}

function touchesRoom(room, x, z) {
  if (roomContains(room, x, z)) return true;
  return room.points.some((a, index) => {
    const b = room.points[(index + 1) % room.points.length];
    const dx = b.x - a.x;
    const dz = b.y - a.y;
    const length2 = dx * dx + dz * dz;
    const t = length2 ? THREE.MathUtils.clamp(((x - a.x) * dx + (z - a.y) * dz) / length2, 0, 1) : 0;
    return Math.hypot(x - a.x - t * dx, z - a.y - t * dz) <= WALL_WIDTH / 2;
  });
}

function compileFence(wall, rooms, stairs) {
  const centerX = (wall.x1 + wall.x2) / 2;
  const centerZ = (wall.y1 + wall.y2) / 2;
  const deck = rooms.some(room => touchesRoom(room, centerX, centerZ));
  const followsDeck = rooms.some(room => isOutdoorRoom(room) &&
    touchesRoom(room, centerX, centerZ) &&
    touchesRoom(room, wall.x1, wall.y1) && touchesRoom(room, wall.x2, wall.y2));
  let base1 = deck ? 0 : GROUND_Y;
  let base2 = base1;
  // A rail along a full upper ledge stays level even beside a descending flight.
  if (!followsDeck) {
    for (const stair of stairs) {
      const start = stairGrade(stair, wall.x1, wall.y1);
      const end = stairGrade(stair, wall.x2, wall.y2);
      if (start !== null && end !== null) {
        base1 = start;
        base2 = end;
        break;
      }
    }
  }
  const [, cap, base] = wallPalette(wall);
  return {...wall, base1, base2, color: wall.finish ? cap : '#896e79',
    postColor: wall.finish ? base : '#9f8183',
    posts: Math.min(120, Math.max(1, Math.ceil(wall.length / FENCE_POST_SPACING)))};
}

// This is a read-only projection of the v2 layout. Pixel coordinates are
// still the authored units and every wall uses the same cutaway height.
export function compileStorybookPlan(layout) {
  const editableStructure = layout?.editableReferenceVersion >= 8;
  if (layout?.version !== 2 || !Array.isArray(layout.rooms) ||
      !Array.isArray(layout.walls) || !Array.isArray(layout.items)) {
    throw new Error('Storybook requires a Roomcraft v2 layout with rooms, walls and items.');
  }
  const rooms = layout.rooms.filter(room => room?.points?.length >= 3 && room.points.every(
    point => Number.isFinite(point?.x) && Number.isFinite(point?.y)));
  if (!rooms.length && (!editableStructure || layout.rooms.length)) {
    throw new Error('Storybook could not find a valid room polygon.');
  }
  const indoorRooms = editableStructure ? rooms.filter(room => !isOutdoorRoom(room)) : rooms;
  const authoredWalls = layout.walls.map(projectWall).filter(Boolean);
  const authoredSolids = authoredWalls.filter(wall => wall.kind !== 'fence');
  const items = layout.items.filter(item => typeof item?.id === 'string' && typeof item.type === 'string' &&
    [item.x, item.y, item.w, item.h].every(Number.isFinite) && item.w > 0 && item.h > 0);
  const bounds = emptyBounds();
  const indoorBounds = emptyBounds();
  const extend = (x, z) => includePoint(bounds, x, z);
  for (const room of rooms) for (const point of room.points) extend(point.x, point.y);
  for (const wall of authoredWalls) {
    extend(wall.x1, wall.y1);
    extend(wall.x2, wall.y2);
  }
  for (const room of indoorRooms) for (const point of room.points) includePoint(indoorBounds, point.x, point.y);
  for (const wall of authoredSolids) {
    includePoint(indoorBounds, wall.x1, wall.y1);
    includePoint(indoorBounds, wall.x2, wall.y2);
  }
  const houseBounds = {...(Number.isFinite(indoorBounds.minX) ? indoorBounds :
    Number.isFinite(bounds.minX) ? bounds : EMPTY_PLAN_BOUNDS)};
  // The illustrated v2 reference contains the landing and stairway in the
  // fixed shell image. Only project the authored reference silhouette here.
  const byWallId = new Map(authoredSolids.map(wall => [wall.id, wall]));
  const reference = !editableStructure && ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9', 'w11', 'w12', 'w13', 'w18']
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
  const walls = authoredSolids.filter(wall => {
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
    const side = interiorSide(indoorRooms, wall, centerX, centerZ);
    const angle = wall.angle + (side < 0 ? Math.PI : 0);
    const midpoint = (start + end) / 2;
    windowMounts.set(item.id, {
      x: wall.x1 + midpoint * wall.dx,
      z: wall.y1 + midpoint * wall.dz,
      angle,
      window: { ...item, w: end - start + 2, rotation: angle / DEG },
    });
  }
  const garages = items.filter(item => item.type === 'garageDoor');
  const placements = items.map(item => {
    const baseY = item.type === 'cameraThumbnail' && garages.some(garage => cameraAboveGarage(item, garage))
      ? GROUND_Y : garageBaseY(item.type);
    const isBlind = isStorybookBlind(item);
    let mount = windowMounts.get(item.id) ?? resolveWallMount(indoorRooms, walls, item);
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
    const limit = item.type === 'stairs' ? 1536 : 300;
    const halfX = Math.min(limit, (Math.abs(Math.cos(angle)) * item.w + Math.abs(Math.sin(angle)) * item.h) / 2);
    const halfZ = Math.min(limit, (Math.abs(Math.sin(angle)) * item.w + Math.abs(Math.cos(angle)) * item.h) / 2);
    extend(x - halfX, z - halfZ);
    extend(x + halfX, z + halfZ);
    return { item, x, z, baseY, angle, window: mount?.window, mountY: mount?.mountY, isBlind };
  });
  for (const wall of walls) wall.openings.sort((a, b) => a.start - b.start || a.end - b.end);
  const stairs = placements.filter(({item}) => item.type === 'stairs').map(placement => {
    const {item, x, z, angle} = placement;
    const steps = Number.isInteger(item.steps) && item.steps >= 2 && item.steps <= 40
      ? item.steps : DEFAULT_STEPS;
    const apronDepth = Math.min(46, Math.max(12, item.w * .47));
    const lowEnd = -item.h / 2 - apronDepth;
    for (const side of [-item.w / 2, item.w / 2]) {
      extend(x + side * Math.cos(angle) - lowEnd * Math.sin(angle),
        z + side * Math.sin(angle) + lowEnd * Math.cos(angle));
    }
    return {...placement, steps, apronDepth};
  });
  const fences = authoredWalls.filter(wall => wall.kind === 'fence').map(wall => compileFence(wall, rooms, stairs));
  const floorStructure = compileFloorStructure(rooms, reference, editableStructure);
  const wallStructure = compileWallStructure(walls.map(wall => ({
    ...wall,
    palette: wallPalette(wall),
  })), WALL_WIDTH, WALL_HEIGHT, SILL);
  if (!Number.isFinite(bounds.minX)) Object.assign(bounds, EMPTY_PLAN_BOUNDS);
  return { rooms, walls, fences, stairs, placements, bounds, houseBounds, reference, floorStructure, wallStructure,
    editableStructure };
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

function buildFences(batch, fences) {
  const builtPosts = new Set();
  for (const fence of fences) {
    const {x1, y1, x2, y2, base1, base2, length, angle, posts, color, postColor} = fence;
    const rise = base2 - base1;
    const rail = new THREE.BoxGeometry(Math.hypot(length, rise), 5, FENCE_RAIL_WIDTH);
    rail.rotateZ(Math.atan2(rise, length));
    batch.add(rail, color, (x1 + x2) / 2, (base1 + base2) / 2 + FENCE_HEIGHT, (y1 + y2) / 2, -angle);
    for (let index = 0; index <= posts; index++) {
      const fraction = index / posts;
      const x = THREE.MathUtils.lerp(x1, x2, fraction);
      const z = THREE.MathUtils.lerp(y1, y2, fraction);
      const y = THREE.MathUtils.lerp(base1, base2, fraction);
      const key = [x, y, z].map(value => Math.round(value * 1000)).join(',');
      if (builtPosts.has(key)) continue;
      builtPosts.add(key);
      batch.box(5, FENCE_HEIGHT, 5, postColor, x, y + FENCE_HEIGHT / 2, z, -angle);
    }
  }
}

function stairTreads(depth, steps) {
  const run = depth / steps;
  const rise = -STAIR_BASE / steps;
  const noseDepth = Math.min(5.5, run * .25);
  const lipDepth = Math.min(1.8, noseDepth * .38);
  const height = index => index === steps - 1 ? 0 : STAIR_BASE + (index + 1) * rise;
  return {run, rise, noseDepth, lipDepth, height};
}

function addStairTreads(batch, width, depth, steps, x = 0, z = 0) {
  const {run, noseDepth, lipDepth, height} = stairTreads(depth, steps);
  for (let step = 0; step < steps; step++) {
    const front = z - depth / 2 + run * step;
    const y = height(step);
    const coreTop = y - 3;
    batch.box(width, coreTop - GROUND_Y, run, '#a98075', x, (GROUND_Y + coreTop) / 2, front + run / 2);
    batch.box(width, 3, run - noseDepth, step % 2 ? '#e4c5a8' : '#d9b79a',
      x, y - 1.5, front + (run + noseDepth) / 2);
    // The edge profile sits above the tread so the actual step breaks survive
    // a directly overhead view. The contrasting bevel also reads from below.
    batch.box(width, 3.35, noseDepth - lipDepth, '#896254',
      x, coreTop + 3.35 / 2, front + (noseDepth + lipDepth) / 2);
    batch.box(width, 3.4, lipDepth, '#f5d8b5', x, coreTop + 3.4 / 2, front + lipDepth / 2);
  }
}

export function makeStorybookStairs({item, steps, apronDepth}) {
  const root = new THREE.Group();
  const batch = makeStaticBatch(root);
  addStairTreads(batch, item.w, item.h, steps);
  const apronHeight = STAIR_BASE - GROUND_Y;
  batch.box(item.w, apronHeight, apronDepth, '#c8b79e', 0, GROUND_Y + apronHeight / 2,
    -item.h / 2 - apronDepth / 2);
  batch.finish();
  return {root, anchorY: STAIR_BASE / 2};
}

function buildReferenceLanding(batch, plan) {
  if (!plan.reference) return;
  const { left, deckEdge, stepTop, stepBottom, northDeck } = plan.reference;
  const deckWidth = deckEdge - left;
  const center = (deckEdge + left) / 2;
  const steps = DEFAULT_STEPS;
  const depth = stepBottom - stepTop;
  const run = depth / steps;
  const ground = STAIR_BASE;
  const rise = -ground / steps;
  addStairTreads(batch, deckWidth, depth, steps, center, (stepTop + stepBottom) / 2);
  for (let step = 0; step < steps; step++) {
    const z = stepTop + run * (step + 0.5);
    const y = ground + (step + 1) * rise;
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

function buildYard(batch, plan, street, treeWind) {
  const { minX, maxX, minZ, maxZ } = plan.houseBounds;
  const width = maxX - minX;
  const depth = maxZ - minZ;
  const rand = seededRandom(150741);
  if (!plan.editableStructure) {
    const pathWidth = Math.min(90, width * 0.18);
    const pathX = plan.reference ? plan.reference.left + pathWidth / 2 : minX + pathWidth / 2;
    batch.box(pathWidth, 4, 115, '#c7baa4', pathX, -109, minZ - 88);
    for (let i = 0; i < 5; i++) {
      batch.box(pathWidth * 0.85, 1.8, 13, '#dbceba', pathX, -106, minZ - 137 + i * 20);
    }
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
  const treeSites = [
    ['cypress', .10, -.10, 126],
    ['shore-pine', .81, -.145, 119],
    ['fan-palm', .96, -.10, 112],
    ['olive', -.075, .42, 97],
    ['cypress', 1.055, .64, 136],
    ['coast-oak', .21, 1.14, 112],
    ['jacaranda', .82, 1.16, 118],
  ];
  const structures = plan.placements.filter(({item}) => item.type === 'garageDoor' || item.type === 'stairs');
  for (const [seed, [kind, fx, fz, height]] of treeSites.entries()) {
    const radius = height * STORYBOOK_TREE_SPECIES[kind].radius + 7;
    const x = minX + fx * width;
    const z = minZ + fz * depth;
    const towardOutside = z < minZ ? -1 : 1;
    const lateral = x < (minX + maxX) / 2 ? -1 : 1;
    for (const [shiftX, shiftZ] of [[0, 0], [lateral * (radius + 20), 0], [0, towardOutside * (radius + 20)]]) {
      const nextX = x + shiftX;
      const nextZ = z + shiftZ;
      if (nextZ - radius <= street.nearZ) continue;
      if (nextX + radius > minX && nextX - radius < maxX && nextZ + radius > minZ && nextZ - radius < maxZ) continue;
      const meetsStructure = structures.some(structure => {
        const dx = nextX - structure.x;
        const dz = nextZ - structure.z;
        const u = dx * Math.cos(structure.angle) + dz * Math.sin(structure.angle);
        const v = -dx * Math.sin(structure.angle) + dz * Math.cos(structure.angle);
        return Math.abs(u) < structure.item.w / 2 + radius && Math.abs(v) < structure.item.h * .6 + radius;
      });
      if (meetsStructure) continue;
      treeWind.add({kind, x: nextX, z: nextZ, groundY: GROUND_Y, height, seed: 7229 + seed * 101});
      break;
    }
  }
  for (const [seed, kind, fx, shoreOffset] of [
    [5633, 'date-palm', .065, 21], [2081, 'fan-palm', .93, 20], [7313, 'date-palm', .985, 32],
  ]) {
    treeWind.add({kind, x: minX + fx * width, z: street.farZ - shoreOffset,
      groundY: GROUND_Y + .68, seed});
  }
}

function buildPrecipitation(scene, plan, sceneryMinZ) {
  const rand = seededRandom(2912);
  const bounds = plan.bounds;
  const rainLocations = [];
  const recess = plan.reference?.recess;
  const isExterior = (x, z) => !(recess && x >= recess.x1 && x <= recess.x2 && z >= recess.z1 && z <= recess.z2) &&
    !plan.rooms.some(room => (!plan.editableStructure || !isOutdoorRoom(room)) && roomContains(room, x, z));
  const north = Math.min(bounds.minZ, sceneryMinZ) - 70;
  const rainDepth = bounds.maxZ + 70 - north;
  let standardCount;
  for (let i = 0; i < 520; i++) {
    if (i === 210) standardCount = rainLocations.length;
    const x = bounds.minX - 70 + (bounds.maxX - bounds.minX + 140) * rand();
    const z = north + rainDepth * rand();
    const phase = rand() * 180;
    const length = 8 + rand() * 8;
    const speed = 112 + rand() * 34;
    if (isExterior(x, z)) rainLocations.push({x, z, phase, length, speed});
  }
  const rainPositions = new Float32Array(rainLocations.length * 6);
  const snowPositions = new Float32Array(rainLocations.length * 3);
  const hailPositions = new Float32Array(rainLocations.length * 3);
  const rainGeometry = new THREE.BufferGeometry();
  const snowGeometry = new THREE.BufferGeometry();
  const hailGeometry = new THREE.BufferGeometry();
  rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3).setUsage(THREE.DynamicDrawUsage));
  snowGeometry.setAttribute('position', new THREE.BufferAttribute(snowPositions, 3).setUsage(THREE.DynamicDrawUsage));
  hailGeometry.setAttribute('position', new THREE.BufferAttribute(hailPositions, 3).setUsage(THREE.DynamicDrawUsage));
  const rain = new THREE.LineSegments(rainGeometry,
    new THREE.LineBasicMaterial({color: '#d3e4ec', transparent: true, opacity: .36, depthWrite: false}));
  const snow = new THREE.Points(snowGeometry,
    new THREE.PointsMaterial({ color: '#fff6eb', size: 3.2, transparent: true, opacity: 0.8 }));
  const hail = new THREE.Points(hailGeometry,
    new THREE.PointsMaterial({color: '#c9edf6', size: 2.6, transparent: true, opacity: .83}));
  rain.frustumCulled = snow.frustumCulled = hail.frustumCulled = false;
  scene.add(rain, snow, hail);
  let drawCount = 0;
  return (time, {condition, windSpeed, windBearing}, detail) => {
    rain.visible = WET.has(condition);
    const heavy = condition === 'pouring' || condition === 'lightning-rainy';
    rain.material.opacity = heavy ? .50 : .34;
    snow.visible = SNOW.has(condition);
    hail.visible = condition === 'hail';
    if (rain.visible || snow.visible || hail.visible) {
      const count = detail ? rainLocations.length : standardCount;
      if (count !== drawCount) {
        rainGeometry.setDrawRange(0, count * 2);
        snowGeometry.setDrawRange(0, count);
        hailGeometry.setDrawRange(0, count);
        drawCount = count;
      }
      const upwind = Number.isFinite(windBearing) ? windBearing * DEG : 285 * DEG;
      const slant = THREE.MathUtils.clamp(windSpeed ?? 6, 0, 22) * .028;
      const driftX = slant * Math.sin(upwind);
      const driftZ = -slant * Math.cos(upwind);
      for (let index = 0; index < count; index++) {
        const {x, z, phase, speed, length} = rainLocations[index];
        const i = index * 3;
        if (rain.visible) {
          const y = 65 - (phase + time * speed * (heavy ? 1.3 : 1)) % 170;
          const j = i * 2;
          rainPositions[j] = x;
          rainPositions[j + 1] = y;
          rainPositions[j + 2] = z;
          rainPositions[j + 3] = x + length * driftX;
          rainPositions[j + 4] = y + length;
          rainPositions[j + 5] = z + length * driftZ;
        }
        if (snow.visible) {
          snowPositions[i] = x + Math.sin(time + index) * 6;
          snowPositions[i + 1] = 65 - (phase + time * 20) % 170;
          snowPositions[i + 2] = z;
        }
        if (hail.visible) {
          hailPositions[i] = x;
          hailPositions[i + 1] = 65 - (phase + time * speed * 1.55) % 170;
          hailPositions[i + 2] = z;
        }
      }
      rainGeometry.attributes.position.needsUpdate = rain.visible;
      snowGeometry.attributes.position.needsUpdate = snow.visible;
      hailGeometry.attributes.position.needsUpdate = hail.visible;
    }
  };
}

function garageBaseY(type) {
  return type === 'garageDoor' ? GROUND_Y : 0;
}

function cameraAboveGarage(camera, garage) {
  const dx = camera.x - garage.x;
  const dz = camera.y - garage.y;
  const angle = (garage.rotation ?? 0) * DEG;
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  return garagePadContains(garage, dx * cosine + dz * sine, -dx * sine + dz * cosine);
}

// The live camera thumbnails yield to the visible stair and rail geometry.
export function projectExteriorClearance(plan, camera, width, height) {
  const projected = new THREE.Vector3();
  const padding = 7;
  const bounds = corners => {
    const rect = {left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity};
    for (const corner of corners) {
      projected.set(...corner).project(camera);
      const x = (projected.x + 1) * width / 2;
      const y = (1 - projected.y) * height / 2;
      rect.left = Math.min(rect.left, x - padding);
      rect.right = Math.max(rect.right, x + padding);
      rect.top = Math.min(rect.top, y - padding);
      rect.bottom = Math.max(rect.bottom, y + padding);
    }
    return rect;
  };
  const rails = plan.fences.map(({x1, y1, x2, y2, base1, base2}) => bounds([
    [x1, base1, y1], [x1, base1 + FENCE_HEIGHT, y1],
    [x2, base2, y2], [x2, base2 + FENCE_HEIGHT, y2],
  ]));
  const stairs = plan.stairs.map(({x, z, angle, item, apronDepth}) => {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const corners = [];
    for (const side of [-item.w / 2, item.w / 2]) {
      for (const [run, level] of [[-item.h / 2 - apronDepth, STAIR_BASE], [item.h / 2, 0]]) {
        corners.push([x + side * cos - run * sin, level, z + side * sin + run * cos]);
      }
    }
    return bounds(corners);
  });
  return [...rails, ...stairs];
}

function supportedPresenceFloor(plan) {
  const flights = [...plan.stairs];
  if (plan.reference) {
    const {left, deckEdge, stepTop, stepBottom} = plan.reference;
    flights.push({x:(left + deckEdge) / 2, z:(stepTop + stepBottom) / 2, angle:0,
      item:{w:deckEdge - left, h:stepBottom - stepTop}, steps:DEFAULT_STEPS, apronDepth:80, apronOverhang:1});
  }
  const snap = n => Math.round(n * 1e5) / 1e5;
  const rectangles = flights.flatMap(stair => {
    const {x, z, angle, item, apronDepth, apronOverhang = 0} = stair;
    const at = (side, run) => [
      snap(x + side * Math.cos(angle) - run * Math.sin(angle)),
      snap(z + side * Math.sin(angle) + run * Math.cos(angle)),
    ];
    const rectangle = (half, start, end) => [[at(-half, start), at(half, start), at(half, end), at(-half, end)]];
    return [rectangle(item.w / 2, -item.h / 2, item.h / 2),
      rectangle(item.w / 2 + apronOverhang, -item.h / 2 - apronDepth, -item.h / 2)];
  });
  const rails = plan.fences.map(({x1, y1, x2, y2, dx, dz}) => {
    const half = FENCE_RAIL_WIDTH / 2;
    const corners = [[x1 - dz * half, y1 + dx * half], [x2 - dz * half, y2 + dx * half],
      [x2 + dz * half, y2 - dx * half], [x1 + dz * half, y1 - dx * half]];
    return [corners.map(point => point.map(snap))];
  });
  const levelFloor = createFloorSupport(plan.floorStructure.footprint);
  const footprint = rectangles.length ? polygonClipping.union(plan.floorStructure.footprint, ...rectangles)
    : plan.floorStructure.footprint;
  const walkable = createFloorSupport(unobstructedFloor(footprint, plan.wallStructure, rails));
  const profiles = flights.map(stair => ({stair, ...stairTreads(stair.item.h, stair.steps)}));
  const level = {height:0, rise:0};

  function surfaceAt(x, z) {
    if (levelFloor.contains(x, z)) return level;
    let best;
    for (const {stair, run, rise, height} of profiles) {
      const {item, steps, apronDepth, apronOverhang = 0} = stair;
      const [side, along] = stairLocalPoint(stair, x, z);
      const start = along + item.h / 2;
      const apron = start < 0;
      if (Math.abs(side) > item.w / 2 + (apron ? apronOverhang : 0) ||
          start < -apronDepth || start > item.h) continue;
      const tread = Math.min(steps - 1, Math.floor(start / run));
      const elevation = apron ? STAIR_BASE : height(tread);
      if (!best || elevation > best.height) best = {height:elevation, rise};
    }
    return best;
  }

  function supportsRoute(x, z, endX, endZ, radius) {
    if (!walkable.supportsRoute(x, z, endX, endZ, radius)) return false;
    if (!profiles.length) return true;
    // Crossing two plan polygons must also cross a physically adjacent height.
    // Check more often than the shortest tread to reject sideways jumps off a ledge.
    const stride = Math.max(1, Math.min(8, ...profiles.map(profile => profile.run / 2)));
    const intervals = Math.min(256, Math.ceil(Math.hypot(endX - x, endZ - z) / stride));
    let previous = surfaceAt(x, z);
    for (let i = 1; i <= intervals; i++) {
      const t = i / intervals;
      const current = surfaceAt(THREE.MathUtils.lerp(x, endX, t), THREE.MathUtils.lerp(z, endZ, t));
      if (!previous || !current ||
          Math.abs(previous.height - current.height) > Math.max(previous.rise, current.rise) + .01) return false;
      previous = current;
    }
    return true;
  }
  return {...walkable, supportsRoute,
    floorAt: (x, z) => walkable.contains(x, z) ? surfaceAt(x, z)?.height ?? null : null};
}

/** Shared classifications for Studio's placement checks, radar and vacuum. */
export function storybookMotionSurfaces(plan) {
  const {floorStructure, wallStructure} = plan;
  const interior = plan.editableStructure ? floorStructure.foundation
    : compileFloorStructure(plan.rooms.filter(room => !isOutdoorRoom(room)), plan.reference, true).foundation;
  return {
    home: createFloorSupport(unobstructedFloor(interior, wallStructure)),
    vacuum: createFloorSupport(unobstructedFloor(floorStructure.footprint, wallStructure)),
    presence: supportedPresenceFloor(plan),
  };
}

export function storybookDrawingPixelRatio(width, height, deviceRatio, {
  insaneGraphics = false, renderScale = 1, maxWidth = Infinity, maxHeight = Infinity,
} = {}) {
  const pixelLimit = insaneGraphics ? INSANE_DRAW_PIXELS : 2_700_000;
  const ratio = Math.min(deviceRatio, insaneGraphics ? Infinity : 1.5, maxWidth / width, maxHeight / height,
    Math.sqrt(pixelLimit / (width * height)));
  return Math.max(1 / Math.min(width, height), ratio * (insaneGraphics ? 1 : renderScale));
}

export function createStorybookScene(canvas, layout, {insaneGraphics = false} = {}) {
  const plan = compileStorybookPlan(layout);
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, alpha: false, powerPreference: insaneGraphics ? 'high-performance' : 'low-power',
  });
  try {
    renderer.resetState();
    return buildStorybookScene(canvas, layout, plan, renderer);
  } catch (error) {
    releaseRenderer(renderer);
    throw error;
  }
}

function releaseRenderer(renderer) {
  try {
    // The canvas owns its WebGL context across Home reconnects and Studio edits.
    // Reset unpack flags before Three initializes another renderer's 3D placeholders.
    if (!renderer.getContext().isContextLost()) renderer.resetState();
  } finally {
    renderer.dispose();
  }
}

function buildStorybookScene(canvas, layout, plan, renderer) {
  let sceneSettings = layout.sceneSettings;
  let displaySettings = {};
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#d7dfcd');
  const horizonFog = new THREE.Fog(scene.background);
  const camera = new THREE.OrthographicCamera(-800, 800, 450, -450, 1, STORYBOOK_CAMERA_FAR);
  const { minX, maxX, minZ, maxZ } = plan.bounds;
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: '#e8e8d2', map: meadowTexture(canvas.ownerDocument), roughness: 0.95
  });
  let lightingLutUniform;
  groundMaterial.onBeforeCompile = ({uniforms}) => { lightingLutUniform = uniforms.dfgLUT; };
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(6200, 4200), groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set((minX + maxX) / 2, GROUND_Y, (minZ + maxZ) / 2);
  scene.add(ground);
  const batch = makeStaticBatch(scene);
  const treeBatch = makeStaticBatch(scene);
  const treeWind = createStorybookTreeWind(treeBatch);
  const street = storybookStreetBounds(plan);
  const road = buildStorybookStreet(batch, street, GROUND_Y, ground.geometry.parameters.width, ground.position.x);
  let traffic;
  const {water} = buildStorybookNeighborhood(batch, street, GROUND_Y, plan.houseBounds,
    ground.geometry.parameters.width, ground.position.x);
  const shoreCenter = water.shoreline.reduce((closest, point) =>
    Math.abs(point.x - water.focusX) < Math.abs(closest.x - water.focusX) ? point : closest);
  const sceneryFocus = {
    road: {x: road.centerX, y: road.surfaceY + 8, z: (road.lanes[0] + road.lanes[1]) / 2},
    coast: {x: water.focusX + 16, y: water.y, z: shoreCenter.z - 36},
    beach: {x: water.focusX, y: water.y + 8, z: shoreCenter.z + 37},
  };
  buildYard(batch, plan, street, treeWind);
  buildReferenceLanding(batch, plan);
  buildFloors(scene, batch, plan, canvas.ownerDocument);
  const surfaceAnisotropy = new Map(scene.children.flatMap(node => {
    const texture = node.material?.map;
    return texture ? [[texture, texture.anisotropy]] : [];
  }));
  buildWalls(batch, plan);
  buildFences(batch, plan.fences);
  batch.finish();
  const firstTreeMesh = scene.children.length;
  treeBatch.finish();
  const treeMeshes = scene.children.slice(firstTreeMesh);
  const structureMeshes = scene.children.filter(node => node.isMesh);
  const lighting = createStorybookLighting(renderer, scene, plan.bounds);
  const fadeSolar = createStorybookSolarFade();
  lighting.markStructure();
  const foregroundGeometry = new THREE.PlaneGeometry(160000, 160000);
  const {position:foregroundPoints, uv:foregroundUv} = foregroundGeometry.attributes;
  for (let i = 0; i < foregroundUv.count; i++) {
    foregroundUv.setXY(i, foregroundPoints.getX(i) / ground.geometry.parameters.width + .5,
      foregroundPoints.getY(i) / ground.geometry.parameters.height + .5);
  }
  const horizonForeground = new THREE.Mesh(foregroundGeometry, groundMaterial);
  horizonForeground.name = 'Horizon foreground';
  horizonForeground.rotation.copy(ground.rotation);
  horizonForeground.position.copy(ground.position);
  horizonForeground.position.y -= .12;
  horizonForeground.receiveShadow = true;
  horizonForeground.visible = false;
  scene.add(horizonForeground);
  const ocean = createStorybookOcean(water);
  const sidewalk = createStorybookSidewalk(road);
  const boats = createStorybookBoats(water);
  const beachPlay = createStorybookBeachPlay(water, street);
  scene.add(ocean.mesh, sidewalk.root, boats.root, beachPlay.root);
  const updatePrecipitation = buildPrecipitation(scene, plan, street.sceneryMinZ);
  const footprint = plan.floorStructure.footprint;
  const {home, vacuum, presence} = storybookMotionSurfaces(plan);
  const floorForPerson = presence.floorAt;
  // Give avatars their own lighting while sharing the house depth and camera.
  const trackingOverlay = new THREE.Scene();
  const trackingOcclusion = new THREE.Scene();
  let lidarOverlay;
  function setVacuumMapOverlay(image, transform) {
    if (lidarOverlay) {
      lidarOverlay.removeFromParent();
      lidarOverlay.geometry.dispose();
      lidarOverlay.material.map.dispose();
      lidarOverlay.material.dispose();
      lidarOverlay = undefined;
    }
    if (!image) return true;
    const w = image.naturalWidth;
    const h = image.naturalHeight;
    if (!(w > 0 && h > 0)) return false;
    const corners = [[0,0],[w,0],[w,h],[0,h]].map(([x,y]) => applyVacuumAlignment(transform, {x,y}));
    if (corners.some(point => !point || Math.abs(point.x) > 10000 || Math.abs(point.y) > 10000)) return false;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(corners.flatMap(({x,y}) => [x,.82,y]), 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute([0,1,1,1,1,0,0,0], 2));
    geometry.setIndex([0,2,1,0,3,2]);
    const texture = new THREE.Texture(image);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    const material = new THREE.MeshBasicMaterial({map:texture, opacity:.48, transparent:true,
      side:THREE.DoubleSide, depthWrite:false, toneMapped:false});
    lidarOverlay = new THREE.Mesh(geometry, material);
    lidarOverlay.name = 'vacuum-lidar-overlay';
    scene.add(lidarOverlay);
    return true;
  }
  const coverage = createStorybookCoverage();
  const heatMap = createStorybookRadarHeatMap(footprint);
  scene.add(heatMap.root);
  const trackingFill = new THREE.HemisphereLight('#fff5e1', '#c9bfd7', 1.8);
  const trackingKey = new THREE.DirectionalLight('#fff1d8', 1.65);
  trackingKey.position.set(-4, 9, 6);
  trackingOverlay.add(trackingFill, trackingKey);
  const anchors = new Map();
  const roots = new Map();
  const surfaceDetail = {value:0};
  const staticGraphics = new Set(plan.placements.filter(({item}) => item.visualKind === 'none').map(({item}) => item.id));
  const garages = new Map();
  const stairsById = new Map(plan.stairs.map(stair => [stair.item.id, stair]));
  for (const placement of plan.placements) {
    const { item, x, z, baseY, angle, window, mountY, isBlind } = placement;
    const drawItem = item.type === 'window' && window ? window : item;
    const stair = stairsById.get(item.id);
    const object = stair ? makeStorybookStairs(stair) :
      makeStorybookDevice(drawItem, {window: isBlind ? window : undefined, mountY}) ??
      makeStorybookFurniture(drawItem, {mountY, surfaceDetail});
    if (object) {
      const heightOffset = applyModelHeight(item, object.root);
      object.root.position.set(x, baseY + heightOffset, z);
      object.root.rotation.y = -angle;
      if (object.dock) {
        object.dock.position.set(x, baseY, z);
        object.dock.rotation.y = -angle;
        scene.add(object.dock);
      }
      if (object.floorRadius) {
        const radius = object.floorRadius;
        const allowsPoint = (px, pz) => vacuum.clearance(px, pz) >= radius;
        const allowsRoute = (px, pz, endX, endZ) => vacuum.supportsRoute(px, pz, endX, endZ, radius);
        object.dockFits = allowsPoint(x, z);
        object.root.name = item.id;
        object.liveMotion = createStorybookMotion({allowsPoint, allowsRoute, duration:.42});
        object.demoMotion = createStorybookMotion({allowsPoint, allowsRoute, duration:0});
      }
      scene.add(object.root);
      roots.set(item.id, object);
      if (item.type === 'garageDoor') garages.set(object.root, item.id);
      lighting.register(item, object);
    }
    anchors.set(item.id, { x, z, baseY, rootY: object?.root.position.y, object });
  }
  const floorItems = plan.placements.filter(({item, baseY}) => baseY === 0 && roots.has(item.id));
  const restFurniture = createStorybookFurnitureCollision(floorItems);
  let furniture = restFurniture;
  const placementSupport = createStorybookPlacement(plan.placements, roots);
  const restingSupports = placementSupport.resolve();
  let resolvedSupports = restingSupports;
  const peopleOptions = {
    supportsRoute: presence.supportsRoute,
    floorClearance: presence.clearance,
    geometryRevision: () => furniture,
    allowsBodyPoint: (x, z, radius, exceptItemId) => !furniture.blocksPoint(x, z, radius, exceptItemId),
    allowsBodyRoute: (x, z, endX, endZ, radius, exceptItemId) =>
      !furniture.blocksRoute(x, z, endX, endZ, radius, exceptItemId),
  };
  const livePeople = createStorybookPeople(trackingOverlay, floorForPerson, {
    occlusionScene: trackingOcclusion,
    ...peopleOptions, seats: compileStorybookSeats(plan.placements, roots, home.clearance),
    interactions: compileStorybookInteractions(plan.placements, roots, restingSupports),
  });
  let demoPeople;
  let people = livePeople;
  let lastDraftPositions;
  let trackedControlChanged = false;
  const cameraBounds = {...plan.bounds, sceneryMinZ: street.sceneryMinZ, waterfront: {
    minX: water.focusX - 475, maxX: water.focusX + 605,
    minZ: shoreCenter.z - 352, maxZ: shoreCenter.z + 88,
  }};
  for (const placement of plan.placements) {
    const object = roots.get(placement.item.id);
    if (!object) continue;
    const support = restingSupports.get(placement.item.id);
    if (support) object.root.position.y = support.y;
    if (object.root.scale.y !== 1 || support?.supportId) {
      const {max} = new THREE.Box3().setFromObject(object.root);
      if (Number.isFinite(max.y)) cameraBounds.maxY = Math.max(cameraBounds.maxY ?? 92, max.y);
    }
  }
  const position = new THREE.Vector3();
  let disposed = false;
  let currentWidth = 0;
  let currentHeight = 0;
  let renderScale = 1;
  let insaneGraphics = false;
  let pixelRatio;
  const gl = renderer.getContext();
  const [viewportWidth, viewportHeight] = gl.getParameter(gl.MAX_VIEWPORT_DIMS);
  const maxRenderbuffer = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
  const maxWidth = Math.min(maxRenderbuffer, viewportWidth);
  const maxHeight = Math.min(maxRenderbuffer, viewportHeight);
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
  let limitOffscreenScenery = false;
  let inSceneryView;
  let cameraView = normalizeCameraView();
  let cameraFraming;
  const raycaster = new THREE.Raycaster();
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const projected = new THREE.Vector3();
  const defaultState = Object.freeze({ state: 'unavailable', attributes: Object.freeze({}), presence: 'off', active: false });
  function updateSceneryView() {
    inSceneryView = limitOffscreenScenery && currentWidth > 0 && currentHeight > 0 ? storybookSceneryView(camera) : undefined;
  }
  function updateCamera() {
    fitStorybookCamera(camera, cameraBounds, currentWidth, currentHeight, cameraView, cameraFraming);
    updateSceneryView();
    const haze = storybookHorizonFog(cameraView.tilt);
    scene.fog = haze ? horizonFog : null;
    horizonForeground.visible = Boolean(haze);
    if (haze) {
      const offset = camera.far - STORYBOOK_CAMERA_FAR;
      horizonFog.near = haze.near + offset;
      horizonFog.far = haze.far + offset;
    }
  }
  function resizeDrawingBuffer() {
    const deviceRatio = canvas.ownerDocument.defaultView?.devicePixelRatio || 1;
    pixelRatio = storybookDrawingPixelRatio(currentWidth, currentHeight, deviceRatio, {
      renderScale, insaneGraphics, maxWidth, maxHeight,
    });
    renderer.setDrawingBufferSize(currentWidth, currentHeight, pixelRatio);
  }
  function resize(width, height) {
    if (disposed || width < 1 || height < 1) return;
    if (width === currentWidth && height === currentHeight) {
      const deviceRatio = canvas.ownerDocument.defaultView?.devicePixelRatio || 1;
      if (pixelRatio !== storybookDrawingPixelRatio(width, height, deviceRatio, {
        renderScale, insaneGraphics, maxWidth, maxHeight,
      })) resizeDrawingBuffer();
      return;
    }
    currentWidth = width;
    currentHeight = height;
    resizeDrawingBuffer();
    updateCamera();
  }
  function setGraphicsSettings({
    renderScale: nextScale, shadowQuality, limitOffscreenScenery: limitScenery, insaneGraphics: nextDetail = false,
  } = {}) {
    if (disposed) return;
    lighting.setShadowQuality(shadowQuality);
    if ((limitScenery === true) !== limitOffscreenScenery) {
      limitOffscreenScenery = limitScenery === true;
      updateSceneryView();
    }
    const scale = Number.isFinite(nextScale) ? THREE.MathUtils.clamp(nextScale, .5, 1) : 1;
    if (scale === renderScale && nextDetail === insaneGraphics) return;
    if (nextDetail !== insaneGraphics) {
      insaneGraphics = nextDetail;
      surfaceDetail.value = Number(insaneGraphics);
      ocean.setHighDetail(insaneGraphics);
      for (const [texture, standard] of surfaceAnisotropy) {
        const anisotropy = insaneGraphics ? Math.max(standard, maxAnisotropy) : standard;
        if (anisotropy === texture.anisotropy) continue;
        texture.anisotropy = anisotropy;
        texture.needsUpdate = true;
      }
    }
    renderScale = scale;
    if (currentWidth > 0 && currentHeight > 0) resizeDrawingBuffer();
  }
  function setView(value, framing) {
    cameraView = normalizeCameraView(value);
    cameraFraming = framing;
    if (!disposed && currentWidth > 0 && currentHeight > 0) updateCamera();
    return getView();
  }
  function getView() { return {...cameraView}; }
  function getDemoFocus(target) {
    if (typeof target === 'string') {
      if (Object.hasOwn(sceneryFocus, target)) return {...sceneryFocus[target]};
      const entry = anchors.get(target);
      if (!entry) return null;
      const {x, z, baseY, object} = entry;
      if (!object) return {x, y: baseY + 6, z};
      return {x, y: object.root.position.y + (object.anchorY ?? 0) * object.root.scale.y, z};
    }
    if (![target?.x, target?.y].every(Number.isFinite)) return null;
    return {x: target.x, y: (floorForPerson(target.x, target.y) ?? 0) + 22, z: target.y};
  }
  function pointRay(x, y) {
    if (disposed || !Number.isFinite(x) || !Number.isFinite(y) || currentWidth <= 0 || currentHeight <= 0) return false;
    raycaster.setFromCamera(new THREE.Vector2(x / currentWidth * 2 - 1, 1 - y / currentHeight * 2), camera);
    return true;
  }
  function projectToPlan(x, y, type, {preferTabletop = false} = {}) {
    if (!pointRay(x, y)) return null;
    if (preferTabletop) {
      const surface = placementSupport.projectTabletop(type, raycaster);
      if (surface) return surface;
    }
    floorPlane.constant = -garageBaseY(type);
    return raycaster.ray.intersectPlane(floorPlane, projected)
      ? {x: projected.x, y: projected.z} : null;
  }
  function pickGarage(x, y) {
    if (!garages.size || !pointRay(x, y)) return null;
    const visibleMeshes = [];
    for (const root of garages.keys()) {
      root.traverseVisible(node => { if (node.isMesh) visibleMeshes.push(node); });
    }
    const hit = raycaster.intersectObjects(visibleMeshes, false)[0];
    if (!hit || raycaster.intersectObjects(structureMeshes, false)
      .some(obstruction => obstruction.distance < hit.distance - 0.01)) return null;
    for (let node = hit.object; node; node = node.parent) {
      if (garages.has(node)) return garages.get(node);
    }
    return null;
  }
  function draw(transientTelemetry = false) {
    heatMap.root.visible = !transientTelemetry && cameraView.preset !== 'waterfront';
    if (lidarOverlay) lidarOverlay.visible = !transientTelemetry && cameraView.preset !== 'waterfront';
    renderer.render(scene, camera);
    const showPeople = (transientTelemetry || displaySettings.showAvatars !== false) &&
      cameraView.preset !== 'waterfront' && people?.hasVisibleTracks;
    const showCoverage = !transientTelemetry && cameraView.preset !== 'waterfront' && coverage.scene.children.length > 0;
    if (!showPeople && !showCoverage) return;
    renderer.autoClear = false;
    try {
      if (showPeople) {
        if (!transientTelemetry) {
          people.orientOcclusionCues(camera);
          renderer.render(trackingOcclusion, camera);
        }
        renderer.render(trackingOverlay, camera);
      }
      if (showCoverage) {
        renderer.clearDepth();
        renderer.render(coverage.scene, camera);
      }
    } finally {
      renderer.autoClear = true;
    }
  }
  function setDisplaySettings(settings = {}) {
    displaySettings = settings;
    sceneSettings = {...layout.sceneSettings, ...settings.features};
    heatMap.setOpacity(settings.heatMapOpacity);
  }
  function updateWaterfront(timeSeconds, environment, transientTelemetry = false) {
    const activity = environment.beachActivity ?? (environment.night ? 'overnight' : 'day');
    const options = {reduceMotion: environment.reduceMotion === true, night: environment.night === true,
      condition: environment.condition, transientTelemetry, activity, inView:inSceneryView};
    sidewalk.root.visible = activity !== 'overnight' &&
      (transientTelemetry || sceneFeatureEnabled(sceneSettings, 'sidewalk'));
    boats.root.visible = transientTelemetry || sceneFeatureEnabled(sceneSettings, 'boats');
    beachPlay.root.visible = transientTelemetry || sceneFeatureEnabled(sceneSettings, 'beachPlay');
    if (sidewalk.root.visible) sidewalk.update(timeSeconds, options);
    if (boats.root.visible) boats.update(timeSeconds, options);
    if (beachPlay.root.visible) beachPlay.update(timeSeconds, options);
    const showTrees = transientTelemetry || sceneFeatureEnabled(sceneSettings, 'trees');
    for (const mesh of treeMeshes) mesh.visible = showTrees;
    if (showTrees) treeWind.update(timeSeconds, environment);
    ocean.update(timeSeconds, transientTelemetry || sceneFeatureEnabled(sceneSettings, 'reflections')
      ? environment : {...environment, reflections: false});
  }
  function render(timeSeconds = 0, statesById = {}, environment = {},
    {animateTelemetry = true, showTelemetryPosition = true, draftPositions, transientTelemetry = false} = {}) {
    if (disposed || currentWidth < 1 || currentHeight < 1) return;
    if (!transientTelemetry) environment = sceneWind(environment, sceneSettings);
    const reduceMotion = environment.reduceMotion === true;
    const time = !reduceMotion && Number.isFinite(timeSeconds) ? timeSeconds : 0;
    const solar = storybookSolar(environment);
    environment = {...environment, solar: transientTelemetry ? solar : fadeSolar(solar, time, reduceMotion)};
    const telemetryTime = animateTelemetry ? time : 0;
    const showTraffic = transientTelemetry || sceneFeatureEnabled(sceneSettings, 'traffic');
    if (showTraffic && !traffic && environment.traffic) {
      traffic = createStorybookTraffic(road);
      scene.add(traffic.root);
    }
    if (traffic) {
      traffic.root.visible = showTraffic;
      if (showTraffic) traffic.update(timeSeconds, environment.traffic, {reduceMotion,
        night: environment.night === true, transientTelemetry,
        inView:inSceneryView,
        headlightBrightness: transientTelemetry ? 1 : displaySettings.headlightBrightness});
    }
    updatePrecipitation(telemetryTime, transientTelemetry || sceneFeatureEnabled(sceneSettings, 'precipitation')
      ? environment : {}, insaneGraphics);
    updateWaterfront(timeSeconds, environment, transientTelemetry);
    const placementChanged = lastDraftPositions !== draftPositions;
    if (placementChanged) {
      lastDraftPositions = draftPositions;
      resolvedSupports = draftPositions ? placementSupport.resolve(draftPositions) : restingSupports;
      furniture = draftPositions ? createStorybookFurnitureCollision(floorItems.map(placement => {
        const position = draftPositions[placement.item.id]?.position;
        return position ? {...placement, x:position.x, z:position.y} : placement;
      })) : restFurniture;
    }
    trackedControlChanged = false;
    for (const [id, object] of roots) {
      const staticGraphic = staticGraphics.has(id);
      const state = staticGraphic ? defaultState : statesById[id] ?? defaultState;
      const {visible, position:rootPosition} = object.root;
      let location = draftPositions?.[id]?.position;
      let hasTracking = false;
      if (object.floorRadius && !staticGraphic && showTelemetryPosition && !location) {
        const motion = transientTelemetry ? object.demoMotion : object.liveMotion;
        if (!transientTelemetry && object.demoMotion.hasPosition) object.demoMotion.clear();
        const measured = motion.observe(state.position, timeSeconds, {
          observation:state.positionObservedAt, reduceMotion,
        });
        if (!measured && (state.state === 'docked' || state.wrongMap)) motion.clear();
        const reported = motion.sample(timeSeconds, reduceMotion);
        location = reported;
        hasTracking = measured && reported?.current === true;
        object.root.visible = Boolean(reported || !motion.hasPosition && object.dockFits);
      } else if (object.floorRadius) object.root.visible = true;
      const authored = anchors.get(id);
      const x = location?.x ?? authored.x;
      const z = location?.y ?? authored.z;
      trackedControlChanged ||= Boolean(object.floorRadius &&
        (visible !== object.root.visible || rootPosition.x !== x || rootPosition.z !== z));
      object.root.position.x = x;
      object.root.position.y = resolvedSupports.get(id)?.y ?? authored.rootY;
      object.root.position.z = z;
      object.animate?.(state, object.ambientMotion ? time : telemetryTime, hasTracking, transientTelemetry);
    }
    lighting.update(environment, statesById, groundMaterial, placementChanged);
    if (scene.fog) horizonFog.color.copy(scene.background);
    const nextPeople = transientTelemetry ? demoPeople : livePeople;
    if (people !== nextPeople) {
      people?.setVisible(false);
      if (!transientTelemetry) demoPeople?.setTracks([], 0);
      people = nextPeople;
      people?.setVisible(true);
    }
    people?.render(timeSeconds, reduceMotion, !draftPositions &&
      (transientTelemetry || displaySettings.seatedPoses !== false));
    draw(transientTelemetry);
  }
  function setPeople(tracks, timeSeconds, options = {}) {
    if (disposed) return;
    if (options.transientTelemetry) {
      if (!demoPeople && tracks?.length) {
        demoPeople = createStorybookPeople(trackingOverlay, floorForPerson, peopleOptions);
        demoPeople.setVisible(false);
      }
      demoPeople?.setTracks(tracks, timeSeconds, options);
    } else livePeople.setTracks(tracks, timeSeconds, options);
  }
  function anchor(itemId) {
    if (cameraView.preset === 'waterfront') return null;
    const entry = anchors.get(itemId);
    if (!entry || currentWidth < 1 || currentHeight < 1) return null;
    const { x, z, baseY, object } = entry;
    if (object) {
      if (!object.root.visible) return null;
      position.set(object.anchorOffset?.x || 0, object.anchorY || 0, object.anchorOffset?.z || 0);
      object.root.localToWorld(position);
    } else {
      position.set(x, baseY + 6, z);
    }
    position.project(camera);
    return { x: (position.x + 1) / 2, y: (1 - position.y) / 2 };
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    setVacuumMapOverlay(null);
    livePeople.dispose();
    demoPeople?.dispose();
    coverage.dispose();
    heatMap.dispose();
    traffic?.dispose();
    sidewalk.dispose();
    boats.dispose();
    beachPlay.dispose();
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
    // Three's shared lighting lookup keeps an upload listener for each WebGL
    // renderer. Evict its GPU uploads on rebuild so retired renderers can be collected.
    // A remaining canvas uploads the same lookup again on its next draw.
    lightingLutUniform?.value?.dispose();
    releaseRenderer(renderer);
  }
  const exteriorClearance = () => projectExteriorClearance(plan, camera, currentWidth, currentHeight);
  return {
    resize, render, anchor, setView, getView, getDemoFocus, projectToPlan, pickGarage, exteriorClearance, dispose,
    hasAmbientMotion: true, setPeople, setDisplaySettings, setGraphicsSettings, setVacuumMapOverlay,
    setDetectionZones: coverage.setZones, setHeatMap: heatMap.setHistory,
    get trackedControlChanged() { return trackedControlChanged; },
    get hasPendingReacquisition() { return [...roots.values()].some(object => object.liveMotion?.pendingReacquisition); },
    canPlacePerson: (x, y) => Number.isFinite(floorForPerson(x, y)),
    personFloorAt: floorForPerson,
    nearestPersonPoint: (x, y, maxDistance = 128) => nearestSupportedFloorPoint(x, y, maxDistance,
      (nextX, nextZ) => Number.isFinite(floorForPerson(nextX, nextZ)) &&
        presence.clearance(nextX, nextZ) >= STORYBOOK_PERSON_RADIUS &&
        peopleOptions.allowsBodyPoint(nextX, nextZ, STORYBOOK_PERSON_RADIUS)),
    get hasPeopleMotion() { return people?.hasMotion ?? false; },
  };
}
