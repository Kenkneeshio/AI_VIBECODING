import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

const {lerp} = THREE.MathUtils;
const DETAILS = {
  window: '#3b596b', glass: '#496c7e', glassGlow: '#7393a1', bumper: '#5a5158',
  tire: '#37333b', rim: '#a79e9b', hub: '#e8d4b7', grille: '#514651', plate: '#e8d5b1',
  upholstery: '#aa775d', roofRail: '#766573', tan: '#d2aa7a', wood: '#a77350',
};

// Authored dimensions are in scene units. Roof coordinates follow the lower
// body from the rear of the vehicle toward the nose, along its +X travel axis.
const RECIPES = [
  {id: 'butter-compact', label: 'Buttercup compact', length: 43, width: 23, height: 21, tire: 4,
    cabin: [-.39, -.29, .09, .29], body: '#edb857', roof: '#fff0c7', detail: 'sunroof'},
  {id: 'blush-beetle', label: 'Blush bubble car', length: 46, width: 24, height: 25, tire: 4.6,
    cabin: [-.39, -.17, .025, .33], body: '#da8e8a', roof: '#e4a4a1', detail: 'bubble'},
  {id: 'seafoam-sedan', label: 'Seafoam sedan', length: 54, width: 24, height: 20, tire: 4.4,
    cabin: [-.31, -.18, .055, .28], body: '#70aea5', roof: '#98c9b6'},
  {id: 'blue-wagon', label: 'Bluebird wagon', length: 57, width: 25, height: 23, tire: 4.4,
    cabin: [-.44, -.40, .08, .29], body: '#769bc0', roof: '#a5bbcf', detail: 'wagon', windows: 3},
  {id: 'coral-convertible', label: 'Coral roadster', length: 49, width: 24, height: 17, tire: 4.1,
    cabin: [-.28, -.21, .075, .25], body: '#e4806b', roof: '#ffe0a9', detail: 'convertible'},
  {id: 'berry-sports', label: 'Berry sports coupe', length: 52, width: 26, height: 17, tire: 4.25,
    cabin: [-.34, -.16, .055, .30], body: '#a3769d', roof: '#c3a2ba', detail: 'sports'},
  {id: 'pine-suv', label: 'Pinewood SUV', length: 59, width: 27, height: 27, tire: 5.2,
    cabin: [-.43, -.39, .08, .28], body: '#80986e', roof: '#c7bd8d', detail: 'trail', windows: 3},
  {id: 'sand-pickup', label: 'Sandy pickup', length: 63, width: 27, height: 25, tire: 5,
    cabin: [-.075, -.055, .185, .34], body: '#c6a37c', roof: '#e3c09a', detail: 'pickup'},
  {id: 'lavender-delivery', label: 'Lavender delivery van', length: 63, width: 27, height: 29, tire: 4.6,
    cabin: [-.44, -.43, .21, .42], body: '#ac9ec7', roof: '#d6c5da', detail: 'delivery'},
  {id: 'cream-camper', label: 'Custard camper van', length: 65, width: 28, height: 31, tire: 4.8,
    cabin: [-.44, -.43, .32, .42], body: '#9bb9a7', roof: '#f5dc9b', detail: 'camper'},
  {id: 'peach-food-truck', label: 'Peach snack truck', length: 67, width: 28, height: 32, tire: 4.8,
    cabin: [.07, .12, .31, .43], body: '#e8a283', roof: '#f2c5a2', detail: 'food'},
  {id: 'cobalt-minibus', label: 'Blueberry minibus', length: 70, width: 29, height: 29, tire: 4.9,
    cabin: [-.455, -.43, .34, .44], body: '#7898bc', roof: '#e3dbcc', detail: 'bus', windows: 4},
  {id: 'honey-box-truck', label: 'Honey box truck', length: 72, width: 29, height: 32, tire: 5,
    cabin: [.105, .16, .31, .44], body: '#dca95d', roof: '#f0cf96', detail: 'cargo'},
  {id: 'mint-city-bus', label: 'Mint city bus', length: 78, width: 29, height: 30, tire: 4.9,
    cabin: [-.458, -.448, .397, .455], body: '#75a99d', roof: '#d8e2bd', detail: 'city', windows: 5},
];
const RECIPES_BY_ID = new Map(RECIPES.map(recipe => [recipe.id, recipe]));

export const STORYBOOK_VEHICLES = Object.freeze(RECIPES.map(({id, label, length, width, detail}) =>
  Object.freeze({id, label, length, width: detail === 'food' ? width + 2 : width})));

function quad(points) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points.flat(), 3));
  geometry.setIndex([0, 1, 2, 0, 2, 3]);
  geometry.computeVertexNormals();
  return geometry;
}

function paintedLayer(parts) {
  const geometries = parts.map(([part, shade]) => {
    const geometry = part.index ? part.toNonIndexed() : part;
    if (geometry !== part) part.dispose();
    geometry.deleteAttribute('uv');
    const color = new THREE.Color(shade);
    const colors = new Float32Array(geometry.getAttribute('position').count * 3);
    for (let offset = 0; offset < colors.length; offset += 3) color.toArray(colors, offset);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  });
  const geometry = mergeGeometries(geometries);
  for (const part of geometries) part.dispose();
  geometry.computeBoundingBox();
  return geometry;
}

function vehicleShell(sections, bottom) {
  const vertices = sections.flatMap(([x, halfWidth, top]) => [
    [x, bottom, -halfWidth * .78], [x, bottom, halfWidth * .78],
    [x, bottom + 1.5, halfWidth], [x, top - 2.05, halfWidth],
    [x, top, halfWidth * .83], [x, top, -halfWidth * .83],
    [x, top - 2.05, -halfWidth], [x, bottom + 1.5, -halfWidth],
  ]).flat();
  const indices = [];
  const finalRing = (sections.length - 1) * 8;
  for (let ring = 0; ring < finalRing; ring += 8) {
    for (let j = 0; j < 8; j++) {
      const next = (j + 1) % 8;
      indices.push(ring + j, ring + j + 8, ring + next + 8, ring + j, ring + next + 8, ring + next);
    }
  }
  for (let j = 1; j < 7; j++) indices.push(0, j, j + 1, finalRing, finalRing + j + 1, finalRing + j);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function createArt(recipe) {
  const bodyParts = [];
  const add = (geometry, color) => bodyParts.push([geometry, color]);
  const box = (x, y, z, w, h, d, color) =>
    add(new THREE.BoxGeometry(w, h, d).translate(x, y, z), color);
  const face = (points, shade) => add(quad(points), shade);
  const sideFace = (side, x1, x2, bottom, top, z, shade) => {
    const points = [[x1, bottom, z], [x2, bottom, z], [x2, top, z], [x1, top, z]];
    face(side > 0 ? points : points.reverse(), shade);
  };
  const {width, tire, body, roof, detail} = recipe;
  const length = recipe.length - 2.8;
  const nose = length * .5;
  const outer = width * .435;
  const floor = tire * .78;
  const shoulder = 8.25 + tire * .52;
  const frontY = shoulder - (detail === 'sports' || detail === 'convertible' ? 1.8 : .75);
  add(vehicleShell([
    [-nose, outer * .76, shoulder - 1.6], [-nose + 2.4, outer * .93, shoulder - .2],
    [-nose + 6.2, outer, shoulder], [nose - 6.2, outer, shoulder - .24],
    [nose - 2.4, outer * .92, frontY + .35], [nose, outer * .75, frontY],
  ], floor), body);
  const bumperY = floor + .95;
  for (const end of [-1, 1]) {
    box(end * (nose - .22), bumperY, 0, 1.42, 1.58, outer * 1.57, DETAILS.bumper);
    box(end * (nose + .05), bumperY + .82, 0, 1.08, .95, 4.5, DETAILS.plate);
  }
  box(nose + .1, frontY - 2.8, 0, .65, 1.2, outer * .64, DETAILS.grille);
  box(nose + .38, frontY - 2.62, 0, .24, .35, outer * .55, DETAILS.rim);
  for (const side of [-1, 1]) {
    box(0, floor + 1.3, side * (outer + .04), length * .53, .9, .34, DETAILS.bumper);
    for (const axle of [-.323, .323]) {
      const x = length * axle;
      const z = side * (outer + .05);
      add(new THREE.CylinderGeometry(tire, tire, 2.9, 10).rotateX(Math.PI / 2).translate(x, tire, z), DETAILS.tire);
      add(new THREE.CircleGeometry(tire * .57, 8).rotateY(side < 0 ? Math.PI : 0)
        .translate(x, tire, z + side * 1.46), DETAILS.rim);
      add(new THREE.CircleGeometry(tire * .28, 6).rotateY(side < 0 ? Math.PI : 0)
        .translate(x, tire, z + side * 1.48), DETAILS.hub);
    }
  }

  const [back, rearRoof, frontRoof, front] = recipe.cabin.map(x => length * x);
  const low = shoulder - .35;
  const high = recipe.height - 1.25;
  const cabinHalf = outer * .88;
  const roofHalf = cabinHalf * (recipe.windows > 2 || detail === 'camper' || detail === 'delivery' ? .94 : .79);
  const zAt = v => lerp(cabinHalf, roofHalf, v);
  const yAt = v => lerp(low, high, v);
  const sidePoint = (u, v, side, offset = 0) =>
    [lerp(lerp(back, rearRoof, v), lerp(front, frontRoof, v), u), yAt(v), side * (zAt(v) + offset)];
  function glazingSide(side, start, end, color, bottom = .20, top = .85, offset = .08) {
    const polygon = [sidePoint(start, bottom, side, offset), sidePoint(end, bottom, side, offset),
      sidePoint(end, top, side, offset), sidePoint(start, top, side, offset)];
    face(side > 0 ? polygon : polygon.reverse(), color);
  }
  function endFace(side, minZ, maxZ, bottom, top, color, offset = 0) {
    const [lower, upper] = side > 0 ? [front, frontRoof] : [back, rearRoof];
    const point = (z, v) => [lerp(lower, upper, v) + side * offset, yAt(v), z * zAt(v)];
    const polygon = [point(maxZ, bottom), point(minZ, bottom), point(minZ, top), point(maxZ, top)];
    face(side > 0 ? polygon : polygon.reverse(), color);
  }
  function windshield(end) {
    endFace(end, -.81, .81, .16, .88, DETAILS.window, .08);
    endFace(end, -.72, .73, .23, .82, DETAILS.glass, .13);
    endFace(end, -.67, .64, .67, .75, DETAILS.glassGlow, .18);
  }
  if (detail === 'convertible') {
    endFace(1, -.88, .88, 0, 1, roof, .08);
    windshield(1);
    box((back + frontRoof) / 2, low + .2, 0, (frontRoof - back) * .96, 1.05, cabinHalf * 1.92, DETAILS.window);
    for (const side of [-1, 1]) {
      box(back + 5.7, low + 2.35, side * cabinHalf * .43, 7.7, 2.5, 5.6, DETAILS.upholstery);
      box(back + 2.2, low + 3.7, side * cabinHalf * .43, 2, 5.2, 6.0, DETAILS.tan);
    }
  } else {
    for (const side of [-1, 1]) glazingSide(side, 0, 1, body, 0, 1, 0);
    endFace(1, -1, 1, 0, 1, body);
    endFace(-1, -1, 1, 0, 1, body);
    windshield(1);
    if (!['delivery', 'cargo', 'food'].includes(detail)) windshield(-1);
    const topCenter = (frontRoof + rearRoof) / 2;
    const topLength = frontRoof - rearRoof + .38;
    box(topCenter, high + .34, 0, topLength, .84, roofHalf * 2.05, roof);
    if (detail === 'bubble') {
      box(topCenter, high + .79, 0, topLength * .88, .52, roofHalf * 1.67, roof);
    }
    if (detail === 'sunroof') {
      box(topCenter, high + .82, 0, topLength * .48, .24, roofHalf * 1.12, DETAILS.window);
      box(topCenter - topLength * .12, high + .98, 0, .65, .18, roofHalf, DETAILS.glassGlow);
    }
    const paneCount = recipe.windows ?? 2;
    const panes = detail === 'delivery' || detail === 'camper' ? [[.70, .94]]
      : Array.from({length: paneCount}, (_, index) => [(index + .16) / paneCount, (index + .86) / paneCount]);
    for (const side of [-1, 1]) {
      for (const [start, end] of panes) {
        glazingSide(side, start, end, DETAILS.window);
        glazingSide(side, start + .011, end - .009, DETAILS.glass, .29, .79, .13);
        glazingSide(side, start + .023, end - .025, DETAILS.glassGlow, .64, .72, .18);
      }
    }
  }

  for (const side of [-1, 1]) {
    box(front - 3, low + 1.05, side * (outer + .2), 3.2, 1.8, 1.75, roof);
    box(lerp(back, front, .36), shoulder - 1.45, side * (outer + .1), 2.8, .46, .24, DETAILS.rim);
  }
  return {add, box, sideFace, glazingSide, bodyParts, recipe, length, outer, shoulder, nose, frontY};
}

function addCargo(art, color) {
  const {length, outer, shoulder, recipe, add, box, sideFace} = art;
  const rear = -length * .454;
  const front = length * .105;
  const top = recipe.height - .4;
  const span = front - rear;
  add(vehicleShell([
    [rear, outer * .93, top - .7], [rear + 1.6, outer, top],
    [front - 1.6, outer, top], [front, outer * .93, top - .7],
  ], shoulder - .8), color);
  box((rear + front) / 2, top + .1, 0, span - 3.5, .28, outer * 1.6, recipe.roof);
  for (const side of [-1, 1]) {
    const z = side * (outer + .1);
    sideFace(side, rear + 3, front - 3, shoulder + 1.6, shoulder + 2.45, z, recipe.body);
  }
  for (const line of [-.4, 0, .4]) box(rear - .13, (shoulder + top) / 2, outer * line,
    .26, top - shoulder - 3.1, .4, DETAILS.rim);
  return {rear, front, top};
}

function addDetails(art) {
  const {recipe, box, sideFace, glazingSide, length, outer, shoulder} = art;
  const {detail, height, roof} = recipe;
  if (detail === 'wagon' || detail === 'trail') {
    const rackY = height + .5;
    for (const side of [-1, 1]) box(length * -.18, rackY, side * outer * .51,
      length * .30, .85, .83, DETAILS.roofRail);
    if (detail === 'trail') {
      for (const axle of [-.29, -.07]) box(length * axle, rackY + .55, 0,
        1.05, .75, outer * 1.18, DETAILS.roofRail);
      box(length * -.18, rackY + 1.1, 0, length * .17, 1.65, outer * .78, DETAILS.tan);
    }
  } else if (detail === 'sports') {
    box(length * -.4, shoulder + 1.1, 0, 4.2, 1.15, outer * 1.72, DETAILS.window);
    box(length * .39, shoulder - .65, 0, 6.5, .28, 1.65, '#f6e5cc');
  } else if (detail === 'pickup') {
    const bedX = length * -.25;
    box(bedX, shoulder + .22, 0, length * .35, .42, outer * 1.43, DETAILS.wood);
    for (const side of [-1, 1]) {
      box(bedX, shoulder + .93, side * outer * .84, length * .34, 2.28, 1.72, roof);
      box(bedX, shoulder + .48, side * outer * .38, length * .33, .25, .4, DETAILS.tan);
    }
    box(length * -.429, shoulder + 1.05, 0, 1.8, 2.45, outer * 1.72, roof);
    box(length * -.17, shoulder + 1.75, 0, 5.5, 2.5, 8, DETAILS.tan);
  } else if (detail === 'cargo' || detail === 'food') {
    const {rear, front} = addCargo(art, detail === 'food' ? '#f6c3a2' : '#f0d099');
    if (detail === 'food') {
      const counter = shoulder + 7;
      sideFace(1, rear + 5.5, front - 4.5, counter, counter + 8.4, outer + .19, DETAILS.window);
      box((rear + front) / 2, counter, outer + .75, front - rear - 9.5, .75, 2.65, DETAILS.wood);
      for (let i = 0; i < 7; i++) {
        box(lerp(rear + 6, front - 4.5, i / 6), counter + 8.6, outer + 1.4, 2.5, 1.05, 2.75,
          i % 2 ? '#fff0cc' : '#d9867e');
      }
    }
  } else if (detail === 'delivery' || detail === 'camper') {
    for (const side of [-1, 1]) {
      if (detail === 'delivery') {
        glazingSide(side, .10, .61, '#e5d6e4', .28, .65, .12);
        glazingSide(side, .18, .54, '#b39cc2', .43, .49, .18);
      } else {
        glazingSide(side, .09, .61, '#456575', .29, .68, .12);
        glazingSide(side, .12, .58, '#dbbf89', .49, .62, .18);
        box(length * -.18, height + .68, side * outer * .32, length * .19, .85, outer * .48, '#f6e1b1');
      }
    }
  } else if (detail === 'city' || detail === 'bus') {
    for (const side of [-1, 1]) box(0, shoulder - 1.05, side * (outer + .13),
      length * .62, .88, .42, detail === 'city' ? '#e0d49a' : '#e6c29b');
    if (detail === 'city') {
      box(length * .34, height - .5, 0, 5.5, .7, outer * 1.05, DETAILS.window);
      box(length * -.12, height + .28, 0, length * .23, .9, outer * 1.18, roof);
    }
  }
}

/** Build independently owned layers for +X-facing road instancing. */
export function buildStorybookVehicle(id) {
  const recipe = RECIPES_BY_ID.get(id);
  if (!recipe) return null;
  const art = createArt(recipe);
  addDetails(art);
  const {outer, nose, frontY, shoulder, bodyParts} = art;
  const lamps = (end, lampY) => paintedLayer([-1, 1].map(side =>
    [new THREE.BoxGeometry(1.48, 1.8, outer * .35)
      .translate(end * (nose + .19), lampY, side * outer * .63), '#ffffff']));
  return [
    {role: 'body', geometry: paintedLayer(bodyParts),
      material: new THREE.MeshStandardMaterial({vertexColors: true, roughness: .65})},
    {role: 'headlamp', geometry: lamps(1, frontY - 1.75),
      material: new THREE.MeshStandardMaterial({color: '#fff1d7', emissive: '#ffe4ab',
        emissiveIntensity: .26, roughness: .5})},
    {role: 'taillamp', geometry: lamps(-1, shoulder - 2.65),
      material: new THREE.MeshStandardMaterial({color: '#bc5854', emissive: '#ed6b5c',
        emissiveIntensity: .28, roughness: .5})},
  ];
}
