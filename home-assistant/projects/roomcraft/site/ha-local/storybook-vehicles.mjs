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
const SEMIS = [
  {id: 'teal-semi', label: 'Teal semi with box trailer', length: 119, width: 29,
    paint: '#61978e', roof: '#9bc0a8', trailer: '#eadcbd', stripe: '#83a89c'},
  {id: 'coral-reefer', label: 'Coral semi with refrigerated trailer', length: 122, width: 29,
    paint: '#b97c76', roof: '#e2ad95', trailer: '#e4e5d8', stripe: '#7298a7', refrigerated: true},
];
const SEMIS_BY_ID = new Map(SEMIS.map(recipe => [recipe.id, recipe]));

const MOTORCYCLES = [
  {id: 'apricot-scooter', label: 'Apricot scooter', length: 40, width: 14, style: 'scooter',
    paint: '#e19872', trim: '#f7d9ab', jacket: '#547c83', helmet: '#f1e5cb'},
  {id: 'ruby-motorcycle', label: 'Ruby sport motorcycle', length: 46, width: 14, style: 'racer',
    paint: '#b95b66', trim: '#edb9a1', jacket: '#594e70', helmet: '#f4c27d'},
  {id: 'moss-motorcycle', label: 'Moss trail motorcycle', length: 43, width: 14, style: 'trail',
    paint: '#869961', trim: '#ead5a0', jacket: '#b57357', helmet: '#ded5a1'},
  {id: 'indigo-motorcycle', label: 'Indigo cruiser motorcycle', length: 46, width: 15, style: 'cruiser',
    paint: '#657a9a', trim: '#ded3aa', jacket: '#98775e', helmet: '#c5d1d2'},
];
const BICYCLES = [
  {id: 'peach-basket-bicycle', label: 'Peach basket bicycle', length: 27, width: 8.8, style: 'basket',
    paint: '#d98474', trim: '#eac996', jacket: '#708e7f', helmet: '#f8d48a'},
  {id: 'seafoam-commuter-bicycle', label: 'Seafoam commuter bicycle', length: 28, width: 8.8, style: 'commuter',
    paint: '#77aba0', trim: '#c5d8bd', jacket: '#b67479', helmet: '#ece0ba'},
  {id: 'lavender-road-bicycle', label: 'Lavender road bicycle', length: 28, width: 8.8, style: 'road',
    paint: '#9e8abb', trim: '#d9c7e2', jacket: '#5c7292', helmet: '#edc99d'},
  {id: 'honey-cargo-bicycle', label: 'Honey cargo bicycle', length: 30, width: 9, style: 'longtail',
    paint: '#d9a359', trim: '#f2d3a3', jacket: '#917da0', helmet: '#e7c79b'},
];
const MOTORCYCLE_BY_ID = new Map(MOTORCYCLES.map(recipe => [recipe.id, recipe]));
const BICYCLE_BY_ID = new Map(BICYCLES.map(recipe => [recipe.id, recipe]));
const catalogEntry = ({id, label, length, width, detail}) =>
  Object.freeze({id, label, length, width: detail === 'food' ? width + 2 : width});

export const STORYBOOK_VEHICLES = Object.freeze([...RECIPES, ...SEMIS, ...MOTORCYCLES].map(catalogEntry));
export const STORYBOOK_BICYCLES = Object.freeze(BICYCLES.map(catalogEntry));

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

function vehicleLayers(bodyParts, headlamp, taillamp) {
  return [
    {role: 'body', geometry: paintedLayer(bodyParts),
      material: new THREE.MeshStandardMaterial({vertexColors: true, roughness: .65})},
    {role: 'headlamp', geometry: headlamp,
      material: new THREE.MeshStandardMaterial({color: '#fff1d7', emissive: '#ffe4ab',
        emissiveIntensity: .26, roughness: .5})},
    {role: 'taillamp', geometry: taillamp,
      material: new THREE.MeshStandardMaterial({color: '#bc5854', emissive: '#ed6b5c',
        emissiveIntensity: .28, roughness: .5})},
  ];
}

function semiArt({length, width, paint, roof, trailer, stripe, refrigerated}) {
  const parts = [];
  const add = (geometry, shade) => parts.push([geometry, shade]);
  const box = (x, y, z, w, h, d, shade) => add(new THREE.BoxGeometry(w, h, d).translate(x, y, z), shade);
  const rear = -length / 2 + 1.3;
  const nose = length / 2 - 1.3;
  const cargoEnd = 14;
  const rail = width / 2 - 1.15;
  const cabWidth = rail - .7;
  add(vehicleShell([[rear, rail - 1.2, 32], [rear + 2, rail, 34],
    [cargoEnd - 2, rail, 34], [cargoEnd, rail - 1, 32]], 10.2), trailer);
  add(vehicleShell([[17, cabWidth - 1, 18], [21, cabWidth, 22], [45, cabWidth, 22],
    [nose - 4, cabWidth - 1, 16], [nose, cabWidth - 2, 14]], 7), paint);
  add(vehicleShell([[27, cabWidth - 1, 28], [31, cabWidth - .7, 32], [42, cabWidth - .7, 31],
    [47, cabWidth - 1.6, 26]], 16), roof);
  box(48, 23.6, 0, .9, 6.8, cabWidth * 1.5, DETAILS.window);
  box(48.55, 25.8, 0, .22, .8, cabWidth * 1.4, DETAILS.glassGlow);
  box(nose + .27, 11, 0, .56, 5.9, 9, DETAILS.grille);
  box(nose + .61, 8.6, 0, .55, 1.12, cabWidth * 1.55, DETAILS.rim);
  box(rear - .32, 10.6, 0, .62, 1.2, 2 * rail - 3, DETAILS.bumper);
  box(cargoEnd + 2.8, 9.1, 0, 10, 1.5, 12, DETAILS.bumper);
  for (const side of [-1, 1]) {
    box((rear + cargoEnd) / 2, 15, side * rail, cargoEnd - rear - 5, 2.1, .39, stripe);
    box((rear + cargoEnd) / 2, 26, side * (rail + .06), cargoEnd - rear - 10, .32, .3, '#f6edd3');
    box(40, 25, side * (cabWidth - .5), 7.8, 5.25, .32, DETAILS.window);
    box(47, 21, side * (cabWidth + .2), 2.1, 2.1, 1.5, paint);
    box(35, 9.5, side * (cabWidth + .25), 7.2, .85, 1.12, DETAILS.rim);
    box(rear - .1, 22, side * rail * .41, .48, 13.2, .51, DETAILS.rim);
    for (const x of [rear + 9, rear + 19, 23, 32, nose - 8.2]) {
      const z = side * (rail - 1.42);
      add(new THREE.CylinderGeometry(4.35, 4.35, 2.8, 8).rotateX(Math.PI / 2).translate(x, 4.35, z), DETAILS.tire);
      add(new THREE.CircleGeometry(2.47, 6).rotateY(side < 0 ? Math.PI : 0)
        .translate(x, 4.35, z + side * 1.41), DETAILS.hub);
    }
  }
  if (refrigerated) {
    box(cargoEnd + 1.2, 27, 0, 2.6, 7.9, 8.8, '#eee5ce');
    box(cargoEnd + 2.55, 27.8, 0, .2, 3.9, 6.4, stripe);
  }
  const lamps = (x, y) => paintedLayer([-1, 1].map(side =>
    [new THREE.BoxGeometry(.42, 1.3, 3.1).translate(x, y, side * (rail - 3.7)), '#ffffff']));
  return vehicleLayers(parts, lamps(nose + .38, 12.25), lamps(rear - .54, 12.4));
}

function cycleArt(recipe, motor) {
  const {style, length, paint, trim, jacket, helmet} = recipe;
  const parts = [];
  const add = (geometry, shade) => parts.push([geometry, shade]);
  const box = (shade, position, size) => add(new THREE.BoxGeometry(...size).translate(...position), shade);
  const sphere = (shade, position, size, angle = 0) =>
    add(new THREE.SphereGeometry(1, 8, 5).scale(...size).rotateZ(angle).translate(...position), shade);
  function rod(shade, start, end, radius) {
    const from = new THREE.Vector3(...start);
    const to = new THREE.Vector3(...end);
    const axis = new THREE.Vector3().subVectors(to, from);
    const rotation = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), axis.clone().normalize());
    add(new THREE.CylinderGeometry(radius, radius, axis.length(), 5, 1, true)
      .applyQuaternion(rotation).translate(...from.lerp(to, .5).toArray()), shade);
  }
  const scale = motor ? 1 : .75;
  const tire = length * (motor ? .132 : .15);
  const rear = -length * (style === 'longtail' ? .309 : .326);
  const front = length * .326;
  const crank = [length * -.024, tire + scale * 1.25, 0];
  const seat = [length * (style === 'cruiser' ? -.16 : -.115),
    length * (style === 'trail' ? .40 : style === 'cruiser' ? .327 : .369), 0];
  const crouches = style === 'road' || style === 'racer';
  const bar = [length * (crouches ? .234 : .204),
    seat[1] + (crouches ? .50 : 3.7) * scale, 0];
  const hubWidth = scale * (motor ? 2.2 : 1.36);
  const tireTube = scale * (motor ? 1.04 : .65);
  const frame = scale * (motor ? .90 : .65);
  const guard = style !== 'road';
  for (const x of [rear, front]) {
    add(new THREE.TorusGeometry(tire - tireTube, tireTube, 4, 12).translate(x, tire, 0), DETAILS.tire);
    if (guard) {
      add(new THREE.TorusGeometry(tire + scale * .37, scale * .39, 4, 6, Math.PI * .74)
        .rotateZ(Math.PI * .13).translate(x, tire, 0), paint);
    }
    for (const turn of [0, Math.PI / 3, Math.PI * 2 / 3]) {
      const radius = tire - tireTube * 1.35;
      const dx = Math.cos(turn) * radius;
      const dy = Math.sin(turn) * radius;
      rod(DETAILS.rim, [x - dx, tire - dy, 0], [x + dx, tire + dy, 0], scale * .23);
    }
    add(new THREE.CylinderGeometry(scale * 1.05, scale * 1.05, hubWidth, 8)
      .rotateX(Math.PI / 2).translate(x, tire, 0), DETAILS.hub);
  }

  const rearAxle = [rear, tire, 0];
  rod(paint, rearAxle, seat, frame);
  rod(paint, rearAxle, crank, frame);
  rod(paint, seat, crank, frame);
  rod(paint, crank, bar, frame);
  const topTube = style === 'basket' || style === 'scooter' ? [bar[0] * .7, crank[1] + scale * 2.65, 0] : bar;
  rod(paint, seat, topTube, frame);
  if (topTube !== bar) rod(paint, topTube, bar, frame);
  for (const side of [-1, 1]) {
    rod(DETAILS.rim, [bar[0], bar[1] - scale * 2.3, side * hubWidth * .38],
      [front, tire, side * hubWidth * .45], frame * .7);
  }
  box(DETAILS.bumper, [seat[0] - .25, seat[1] + scale * .4, 0],
    [scale * (motor ? 7.1 : 4.8), scale * 1.08, scale * 3.15]);
  const gripZ = scale * (motor ? 5.05 : 4.75);
  const gripX = bar[0] + (crouches ? scale * 1.85 : -scale * .8);
  const gripY = bar[1] + (crouches ? -scale * .6 : scale * .25);
  for (const side of [-1, 1]) {
    const grip = [gripX, gripY, side * gripZ];
    rod(DETAILS.rim, bar, grip, scale * .47);
    rod(DETAILS.tire, [gripX + scale * .6, gripY, side * gripZ * .82], grip, scale * .63);
  }

  if (motor) {
    box(DETAILS.bumper, [crank[0] + .4, crank[1] + 1.05, 0], [6.4, 4.9, 5.4]);
    const hood = style === 'scooter' ? [bar[0] + 2.1, seat[1] - 2.3, 0] : [seat[0] + 5.5, seat[1] + .7, 0];
    const profile = style === 'scooter' ? [4.1, 5.3, 4.2]
      : style === 'racer' ? [6.8, 3.45, 4.55] : [5.4, 2.8, 3.85];
    sphere(paint, hood, profile, style === 'scooter' ? .34 : -.18);
    box(trim, [hood[0] + .8, hood[1] + .15, profile[2] * .87], [profile[0] * 1.18, 1, .8]);
    box(trim, [hood[0] + .8, hood[1] + .15, -profile[2] * .87], [profile[0] * 1.18, 1, .8]);
    if (style === 'racer') {
      sphere(DETAILS.window, [bar[0] + 2, bar[1] + .95, 0], [2.75, 2.4, 3.15], -.52);
      box(paint, [rear + 1.75, seat[1] + 1.25, 0], [5.6, 1.55, 4.25]);
    } else if (style === 'trail') {
      box(trim, [front - 2.2, tire * 2.1 + 1.05, 0], [7.25, .82, 3.65]);
      box(DETAILS.rim, [rear + 1.55, seat[1] - 1.9, 0], [6.7, 1.35, 4.2]);
    } else if (style === 'scooter') {
      sphere(paint, [rear + 3.7, seat[1] - 3.1, 0], [6.9, 3.05, 4.05], -.13);
      box(trim, [crank[0], tire + 1.1, 0], [8.2, 1.22, 6.2]);
    } else {
      for (const side of [-1, 1]) {
        rod(DETAILS.rim, [rear - 2.2, tire + 2.1, side * 2.8], [crank[0] + 4.5, tire + .45, side * 3.25], .79);
      }
    }
  } else {
    const rack = style === 'longtail' ? [rear + 1.1, tire * 2.05 + 1.8, 0]
      : [front - .98, bar[1] - 1.55, 0];
    if (style === 'basket' || style === 'longtail') {
      box(DETAILS.wood, rack, [style === 'longtail' ? 7.6 : 4.1, 2.8, 4.8]);
      box(trim, [rack[0], rack[1] + 1.15, 0], [style === 'longtail' ? 8 : 4.6, .56, 5.1]);
      box(DETAILS.tan, [rack[0], rack[1] + 1.5, 0], [style === 'longtail' ? 6.3 : 3.6, .34, 3.75]);
    } else if (style === 'commuter') {
      box(trim, [rear + 1.65, tire + 1.05, 2], [4.2, 3.4, 1.85]);
      box(DETAILS.roofRail, [rear + 1.6, tire * 2.05 + .45, 0], [5.3, .66, 4.3]);
    }
  }

  // Seated figures use a readable helmet, jacket and bent knees at overview scale.
  const hip = [seat[0] - scale * .38, seat[1] + scale * 2.05, 0];
  const torso = [hip[0] + (crouches ? 3.05 : 1.05) * scale, hip[1] + scale * 3.75, 0];
  const head = [torso[0] + (crouches ? 3.35 : .95) * scale,
    torso[1] + (crouches ? 3.10 : 4.85) * scale, 0];
  const angle = crouches ? -.57 : -.22;
  sphere(jacket, torso, [scale * 2.6, scale * 4.15, scale * 3.0], angle);
  sphere(helmet, head, [scale * 2.94, scale * 2.68, scale * 2.62]);
  sphere(DETAILS.window, [head[0] + scale * 2.1, head[1] - scale * .4, 0],
    [scale * 1.08, scale * 1.05, scale * 2.2]);
  if (style === 'commuter' || style === 'trail') {
    box(trim, [torso[0] - scale * 2.1, torso[1] + scale * .6, 0], [scale * 1.9, scale * 3.3, scale * 3.5]);
  }
  const leg = '#4b4e63';
  const gloves = '#e2b491';
  for (const side of [-1, 1]) {
    const shoulder = [torso[0] + scale * 1.1, torso[1] + scale * 1.65, side * scale * 2.43];
    const elbow = [lerp(shoulder[0], gripX, .48), lerp(shoulder[1], gripY, .52) - scale, side * scale * 3.48];
    const hand = [gripX, gripY, side * gripZ * .93];
    rod(jacket, shoulder, elbow, scale * .95);
    rod(jacket, elbow, hand, scale * .76);
    box(gloves, hand, [scale * 1.5, scale * 1.11, scale * 1.09]);
    const offset = motor ? 0 : side * scale * 1.35;
    const knee = [hip[0] + scale * (motor ? 4.3 : 4.9) + offset, hip[1] - scale * 3.5, side * scale * 2.64];
    const foot = [crank[0] + scale * (style === 'scooter' ? 2.65 : .35) + offset,
      crank[1] + scale * .27 - offset, side * scale * 2.5];
    rod(leg, [hip[0], hip[1], side * scale * 1.86], knee, scale * 1.12);
    rod(leg, knee, foot, scale * .88);
    box(DETAILS.tire, [foot[0] + scale * .25, foot[1], foot[2]], [scale * 2.15, scale * .95, scale * 1.42]);
  }

  const lampSize = scale * (motor ? 1.34 : .84);
  const frontLamp = [front + scale * .58, tire * (motor ? 2.3 : 2.18), 0];
  const rearLamp = [rear - scale * .56, tire * (motor ? 2.18 : 2.02), 0];
  rod(DETAILS.bumper, [front, tire + scale * 1.5, 0], frontLamp, scale * .58);
  rod(DETAILS.bumper, [rear, tire * 1.6, 0], rearLamp, scale * .46);
  const lamp = point => paintedLayer([[new THREE.SphereGeometry(lampSize, 6, 4)
    .scale(.53, .78, 1).translate(...point), '#ffffff']]);
  return vehicleLayers(parts, lamp(frontLamp), lamp(rearLamp));
}

/** Build independently owned layers for +X-facing road instancing. */
export function buildStorybookVehicle(id) {
  const motorcycle = MOTORCYCLE_BY_ID.get(id);
  if (motorcycle) return cycleArt(motorcycle, true);
  const semi = SEMIS_BY_ID.get(id);
  if (semi) return semiArt(semi);
  const recipe = RECIPES_BY_ID.get(id);
  if (!recipe) return null;
  const art = createArt(recipe);
  addDetails(art);
  const {outer, nose, frontY, shoulder, bodyParts} = art;
  const lamps = (end, lampY) => paintedLayer([-1, 1].map(side =>
    [new THREE.BoxGeometry(1.48, 1.8, outer * .35)
      .translate(end * (nose + .19), lampY, side * outer * .63), '#ffffff']));
  return vehicleLayers(bodyParts, lamps(1, frontY - 1.75), lamps(-1, shoulder - 2.65));
}

/** Build an independently owned +X-facing bicycle and its seated rider. */
export function buildStorybookBicycle(id) {
  const recipe = BICYCLE_BY_ID.get(id);
  return recipe ? cycleArt(recipe, false) : null;
}
