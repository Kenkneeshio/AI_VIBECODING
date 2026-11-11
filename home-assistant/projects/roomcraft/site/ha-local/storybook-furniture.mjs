import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeStorybookHabitat } from './storybook-habitats.mjs';

// These miniatures use the editor's existing footprint units. All geometry is
// floor-relative, centered on the item, and independent of Home Assistant.
const color = Object.freeze({
  ink: '#493e51', oak: '#c89468', oakLight: '#e1b184', walnut: '#9e715d',
  sage: '#98ad83', moss: '#708a73', linen: '#f3e6cd', cream: '#fff4df',
  blush: '#dca3a0', peach: '#edc1a7', honey: '#dcb575', sand: '#e2c5a0',
  lilac: '#aca0c8', lilacLight: '#d7c9e1', blue: '#81a6b5', aqua: '#b4d6d3',
  ceramic: '#f2e6e0', shadow: '#a38898', glass: '#577b91', darkGlass: '#344459',
  brass: '#c39257', binding: '#b29386', blueWater: '#9ac3bf',
  oatmeal: '#dac3a4', upholsteryShadow: '#bca087', denim: '#58637b',
  steel: '#bbc9cd', basinSteel: '#879aa4',
});

const finishes = Object.freeze({
  sage: color.sage, mint: color.aqua, sky: color.blue, peach: color.peach,
  coral: '#cf8979', lavender: color.lilac, butter: color.honey, cream: color.linen,
  white: color.cream, oak: color.oakLight, walnut: color.walnut,
  charcoal: '#505b68', brass: color.brass, terracotta: '#b97d63',
  forest: color.moss, blush: color.blush, teddy: '#aa8063', slate: '#9b9b9d',
});

const woods = new Set([color.oak, color.oakLight, color.walnut]);
const textiles = new Set([color.sage, color.moss, color.linen, color.lilac, color.lilacLight,
  color.blush, color.peach, color.oatmeal, color.upholsteryShadow, color.denim]);

function furnitureMaterial(tint, grainDirection) {
  const detail = woods.has(tint) ? 1 : textiles.has(tint) ? 2 : 0;
  const glass = tint === color.glass || tint === color.darkGlass || tint === color.blueWater;
  const brass = tint === color.brass;
  const stainless = tint === color.steel || tint === color.basinSteel;
  const material = new THREE.MeshStandardMaterial({
    color: tint,
    roughness: brass || stainless ? .37 : glass ? .33 : tint === color.ceramic ? .44 : detail === 1 ? .64 : .89,
    metalness: brass ? .42 : stainless ? .28 : 0,
  });
  if (!detail) return material;
  material.onBeforeCompile = shader => {
    shader.uniforms.furnitureDetail = { value: detail };
    shader.uniforms.furnitureGrainDirection = { value: grainDirection };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 furnitureSurfacePosition;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nfurnitureSurfacePosition = position;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 furnitureSurfacePosition;
        uniform float furnitureDetail;
        uniform float furnitureGrainDirection;`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 localPoint = furnitureSurfacePosition;
        float lengthwise = mix(localPoint.x, localPoint.z, furnitureGrainDirection);
        float crosswise = mix(localPoint.z, localPoint.x, furnitureGrainDirection);
        float pixelSize = max(fwidth(lengthwise), fwidth(crosswise));
        float grain = 0.0;
        if (furnitureDetail < 1.5) {
          float warp = 1.3*sin(lengthwise*.054) + .45*sin(lengthwise*.143);
          float fine = sin((crosswise + warp)*2.1) * (1.0-smoothstep(.55, 2.4, pixelSize));
          grain = .048*fine + .037*sin((crosswise + warp)*.38);
        } else {
          float weave = sin(localPoint.x*2.4) * sin((localPoint.z + localPoint.y)*2.4);
          grain = .035 * weave * (1.0-smoothstep(.5, 1.8, pixelSize));
        }
        diffuseColor.rgb *= 1.0 + grain;`);
  };
  return material;
}

class Miniature {
  constructor(width, depth) {
    this.root = new THREE.Group();
    this.materials = new Map();
    this.grainDirection = depth > width ? 1 : 0;
  }

  part(geometry, tint, x, y, z, angle = 0) {
    if (!this.materials.has(tint)) {
      this.materials.set(tint, furnitureMaterial(tint, this.grainDirection));
    }
    const mesh = new THREE.Mesh(geometry, this.materials.get(tint));
    mesh.position.set(x, y, z);
    mesh.rotation.y = angle;
    this.root.add(mesh);
    return mesh;
  }

  box(x, y, z, width, height, depth, tint, radius = 0, angle = 0) {
    // Absolute seam allowances cannot invert a shrunken editor asset.
    width = Math.max(.1, width);
    depth = Math.max(.1, depth);
    const bevel = Math.min(radius, width * .42, height * .42, depth * .42);
    const geometry = bevel > .2
      ? new RoundedBoxGeometry(width, height, depth, 2, bevel)
      : new THREE.BoxGeometry(width, height, depth);
    return this.part(geometry, tint, x, y + height / 2, z, angle);
  }

  disc(x, y, z, rx, height, rz, tint, taper = 1) {
    const geometry = new THREE.CylinderGeometry(1, taper, height, 20);
    geometry.scale(rx, 1, rz);
    return this.part(geometry, tint, x, y + height / 2, z);
  }

  oval(x, y, z, rx, ry, rz, tint) {
    const geometry = new THREE.SphereGeometry(1, 12, 8);
    geometry.scale(rx, ry, rz);
    return this.part(geometry, tint, x, y, z);
  }

  ring(x, y, z, rx, rz, thickness, tint) {
    const geometry = new THREE.TorusGeometry(1, thickness / Math.min(rx, rz), 6, 24);
    geometry.rotateX(-Math.PI / 2);
    geometry.scale(rx, 1.5, rz);
    return this.part(geometry, tint, x, y, z);
  }

  basin(x, y, z, rx, height, rz) {
    const profile = [[0, 0], [.74, 0], [.94, .20], [1, .72], [.96, 1], [.83, 1],
      [.78, .64], [.56, .28], [.22, .25], [0, .25]].map(([r, level]) => new THREE.Vector2(r, level));
    const geometry = new THREE.LatheGeometry(profile, 24);
    geometry.scale(rx, height, rz);
    return this.part(geometry, color.ceramic, x, y, z);
  }

  finish(anchorY) {
    // Static pieces of the same material can share one draw call. Keep each
    // item's geometry independent so remounting a scene can dispose it safely.
    const buckets = new Map();
    for (const mesh of [...this.root.children]) {
      const source = mesh.geometry;
      const geometry = source.index ? source.toNonIndexed() : source;
      if (geometry !== source) source.dispose();
      mesh.updateMatrix();
      geometry.applyMatrix4(mesh.matrix);
      if (!buckets.has(mesh.material)) buckets.set(mesh.material, []);
      buckets.get(mesh.material).push(geometry);
      this.root.remove(mesh);
    }
    for (const [material, parts] of buckets) {
      const geometry = parts.length === 1 ? parts[0] : mergeGeometries(parts);
      if (parts.length > 1) parts.forEach(part => part.dispose());
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = mesh.receiveShadow = true;
      this.root.add(mesh);
    }
    return { root: this.root, anchorY };
  }
}

function feet(p, x, z, w, d, height, tint = color.walnut) {
  const radius = Math.min(4.5, w * .07, d * .12);
  for (const sideX of [-.36, .36]) for (const sideZ of [-.36, .36]) {
    p.disc(x + w * sideX, 0, z + d * sideZ, radius, height, radius, tint, .68);
  }
}

function pillow(p, x, y, z, width, depth, tint, angle) {
  const binding = tint === color.linen ? color.binding : color.blush;
  p.box(x, y, z, width, 8, depth, binding, 3.2, angle);
  p.box(x, y + 2.1, z, width - 2.6, 7.4, depth - 2.6, tint, 3.2, angle);
}

function sofa(p, w, d, tint, type) {
  const sectional = type === 'sofa' || type.includes('cloud-sofa');
  const vertical = sectional && d > w;
  const legacy = type === 'sofa';
  // The original sectional backs onto the west wall and its short return
  // sits at the south end. Other catalog sectionals keep their authored shape.
  const returnSide = legacy ? 1 : -1;
  const base = legacy ? color.upholsteryShadow : color.moss;
  const back = legacy ? color.oatmeal : color.sage;
  const mainWidth = vertical ? w * .50 : w;
  const mainDepth = sectional && !vertical ? d * .57 : d;
  const mainX = vertical ? -w * .25 : 0;
  const mainZ = sectional && !vertical ? -d * .215 : 0;
  const arm = Math.min(w, d) * .10;
  feet(p, mainX, mainZ, mainWidth, mainDepth, 5);
  p.box(mainX, 5, mainZ, mainWidth * .97, 22, mainDepth * .98, base, 8);
  if (sectional) {
    const returnWidth = vertical ? w * .52 : w * .34;
    const returnDepth = vertical ? d * .38 : d * .46;
    const returnX = vertical ? w * .22 : -w * .32;
    const returnZ = vertical ? returnSide * d * .30 : d * .25;
    feet(p, returnX, returnZ, returnWidth, returnDepth, 5);
    p.box(returnX, 5, returnZ, returnWidth, 22, returnDepth, base, 8);
    p.box(returnX, 25, returnZ, returnWidth * .96, 12, returnDepth * .9, tint, 5);
    if (vertical) p.box(returnX, 29, returnSide * d * .464, returnWidth, 26, arm, back, 6);
  }
  const count = type.includes('loveseat') || type.includes('chaise') ? 2 : 3;
  if (vertical) {
    const span = d * .88 / count;
    for (let i = 0; i < count; i++) {
      const z = -d * .44 + span * (i + .5);
      p.box(mainX + arm * .18, 25, z, mainWidth * .76, 12, span - 3, tint, 5);
      p.box(mainX - mainWidth * .39, 27, z, mainWidth * .22, 31, span - 1, back, 8);
    }
    p.box(mainX, 29, -returnSide * d * .445, mainWidth * .88, 20, arm, back, 6);
    pillow(p, mainX + mainWidth * .13, 35, -d * .31, mainWidth * .42, span * .49,
      legacy ? color.sage : color.peach, -.18);
    pillow(p, mainX + mainWidth * .12, 35, d * .28, mainWidth * .40, span * .45, color.linen, .20);
  } else {
    const span = w * .80 / count;
    for (let i = 0; i < count; i++) {
      const x = -w * .4 + span * (i + .5);
      p.box(x, 25, mainZ + mainDepth * .08, span - 3, 12, mainDepth * .70, tint, 6);
      p.box(x, 27, mainZ - mainDepth * .39, span - 1, 31, mainDepth * .24, back, 7);
    }
    for (const x of [-w * .442, w * .442]) {
      p.box(x, 26, mainZ, arm, 22, mainDepth * .89, back, 6);
    }
    pillow(p, -w * .27, 35, mainZ - mainDepth * .15, w * .18, mainDepth * .34, color.peach, -.18);
    pillow(p, w * .27, 35, mainZ - mainDepth * .12, w * .17, mainDepth * .33, color.linen, .20);
  }
  const throwWidth = vertical ? mainWidth * .67 : mainWidth * .19;
  const throwDepth = vertical ? d * .14 : mainDepth * .58;
  const throwX = vertical ? mainX + mainWidth * .06 : mainWidth * .32;
  const throwZ = vertical ? d * .13 : mainZ + mainDepth * .10;
  p.box(throwX, 37.1, throwZ, throwWidth, 1.7, throwDepth, color.lilacLight, .65);
  for (const edge of [-1, 1]) {
    p.box(throwX, 38.82, throwZ + edge * throwDepth * .36, throwWidth * .9, .25, 1.2, color.lilac);
  }
  return 58;
}

function chair(p, x, z, w, d, direction, tint, low = false) {
  const seat = low ? 19 : 28;
  feet(p, x, z, w, d, seat, color.walnut);
  p.box(x, seat, z, w * .90, 7, d * .92, color.walnut, 2);
  p.box(x, seat + 5, z, w * .83, 8, d * .83, tint, 3);
  const sideSeat = Math.abs(direction) === Math.PI / 2;
  const xBack = x - Math.sin(direction) * (sideSeat ? w : d) * .39;
  const zBack = z - Math.cos(direction) * d * .39;
  p.box(xBack, seat + 9, zBack, sideSeat ? d * .20 : w * .84, 22, sideSeat ? d * .82 : d * .22, tint, 4);
}

function diningChair(p, w, d, tint) {
  const back = -d * .39;
  feet(p, 0, 0, w, d, 20, color.walnut);
  p.box(0, 20, 0, w * .90, 6, d * .92, color.walnut, 2);
  p.box(0, 24, 0, w * .83, 6, d * .83, tint, 2.5);
  for (const side of [-1, 1]) {
    p.box(w * .34 * side, 23, back, w * .075, 18, d * .12, color.walnut, 1.1);
  }
  p.box(0, 37, back, w * .84, 22, d * .22, tint, 4);
  return 59;
}

// Independent tables use the physical top as their footprint. Composite
// imports still use the historic full dining-set dimensions.
function diningTop(p, w, d, tint, form) {
  if (form === 'round') {
    p.disc(0, 0, 0, w * (.13 / .58), 5, d * (.13 / .58), color.walnut);
    p.disc(0, 4, 0, w * (.045 / .58), 31, d * (.045 / .58), color.walnut, 1.5);
    p.disc(0, 33, 0, w / 2, 8, d / 2, tint, .96);
    return 41;
  }
  if (form === 'classic') {
    feet(p, 0, 0, w * (.69 / .79), d * (.49 / .57), 35);
    p.box(0, 32, 0, w * (.72 / .79), 6, d * (.50 / .57), color.walnut, 3);
    p.box(0, 37, 0, w, 8, d, tint, 4);
    p.box(0, 45, 0, w * (.69 / .79), 1.4, d * (.14 / .57), color.linen, .6);
    return 46.4;
  }
  feet(p, 0, 0, w * (.69 / .79), d * (.47 / .56), 34);
  p.box(0, 33, 0, w, 8, d, tint, 3);
  p.box(0, 41.1, 0, w * (.55 / .79), 1.2, d * (.15 / .56), color.linen, .5);
  return 42.3;
}

function table(p, w, d, tint, type) {
  const round = type.includes('round-dining');
  const rectangular = type.includes('rectangular-dining');
  const four = !rectangular;
  if (type === 'table') {
    chair(p, 0, -d * .39, w * .20, d * .23, 0, color.denim);
    chair(p, 0, d * .39, w * .20, d * .23, Math.PI, color.denim);
    chair(p, -w * .415, 0, w * .17, d * .27, Math.PI / 2, color.denim);
    chair(p, w * .415, 0, w * .17, d * .27, -Math.PI / 2, color.denim);
    return diningTop(p, w * .79, d * .57, color.oak, 'classic');
  }
  if (round) {
    chair(p, 0, -d * .37, w * .20, d * .20, 0, color.sage);
    chair(p, 0, d * .37, w * .20, d * .20, Math.PI, color.blush);
    chair(p, -w * .38, 0, w * .20, d * .20, Math.PI / 2, color.lilac);
    chair(p, w * .38, 0, w * .20, d * .20, -Math.PI / 2, color.honey);
    diningTop(p, w * .58, d * .58, tint, 'round');
  } else {
    const positions = four ? [-.28, .28] : [-.32, 0, .32];
    const swatches = [color.sage, color.blush, color.lilac, color.honey];
    for (let i = 0; i < positions.length; i++) {
      for (const side of [-1, 1]) {
        chair(p, w * positions[i], d * .37 * side, w * (four ? .19 : .15), d * .23,
          side < 0 ? 0 : Math.PI, swatches[(i + (side < 0 ? 0 : 2)) % swatches.length]);
      }
    }
    diningTop(p, w * .79, d * .56, tint, 'styled');
  }
  return 42;
}

function monitor(p, x, y, z, w, d) {
  p.box(x, y, z, w * .31, 2, d * .50, color.ink, .5);
  p.box(x, y + 1, z, w * .10, 14, 4, color.ink, 1);
  p.box(x, y + 12, z, w, 25, 6, color.ink, 2);
  p.box(x, y + 14, z + 3.1, w * .91, 21, 1, color.glass, .4);
  p.box(x - w * .25, y + 28, z + 3.7, w * .28, 2, .5, color.blue, .2);
}

function desk(p, w, d, tint, wraparound) {
  const back = wraparound ? d * .34 : d * .85;
  const z = wraparound ? -d / 2 + back / 2 : 0;
  const returnWidth = w * .18;
  p.box(0, 37, z, w, 7, back, tint, 2.4);
  for (const side of [-1, 1]) {
    const x = side * (w - returnWidth) / 2;
    const run = wraparound ? d - back : d * .58;
    const returnZ = wraparound ? back / 2 : 0;
    if (wraparound) p.box(x, 37, returnZ + .8, returnWidth, 7, run - 1.6, tint, 2.4);
    p.box(x, 4, returnZ, returnWidth * .81, 34, run * .81, color.walnut, 2.8);
    for (let row = 0; row < 3; row++) {
      const y = 6 + row * 9.7;
      p.box(x, y, returnZ + run * .41, returnWidth * .74, 8.4, 2, color.oak, .7);
      p.box(x, y + 3, returnZ + run * .43, returnWidth * .26, 2, 2, color.brass, .5);
    }
  }
  monitor(p, -w * .02, 44, z - back * .22, w * .28, back * .43);
  p.box(-w * .02, 44, z + back * .25, w * .25, 1.7, back * .18, color.linen, .6);
  p.oval(w * .18, 45, z + back * .23, w * .018, 1.9, back * .074, color.peach);
  return 81;
}

function star(p, x, y, z, radius, tint) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const angle = i * Math.PI / 5 - Math.PI / 2;
    const r = i % 2 ? radius * .46 : radius;
    const point = [Math.cos(angle) * r, Math.sin(angle) * r];
    if (i === 0) shape.moveTo(...point);
    else shape.lineTo(...point);
  }
  shape.closePath();
  const geometry = new THREE.ShapeGeometry(shape);
  geometry.rotateX(-Math.PI / 2);
  p.part(geometry, tint, x, y, z);
}

function bed(p, w, d, tint, type) {
  const upperDeck = type.includes('bunk-bed');
  const crib = type.includes('crafted-crib');
  const canopy = type.includes('canopy-bed');
  feet(p, 0, 0, w, d, 6, color.walnut);
  const decks = upperDeck ? [6, 55] : [6];
  for (const deck of decks) {
    p.box(0, deck, 0, w * .97, 15, d * .98, color.walnut, 5);
    p.box(0, deck + 12, 0, w * .90, 11, d * .92, color.linen, 4);
    p.box(0, deck + 21.6, d * .15, w * .89, 5, d * .62, color.lilac, 2.5);
    p.box(0, deck + 23.7, d * .15, w * .877, 7, d * .605, tint, 3.4);
    p.box(0, deck + 28, -d * .11, w * .88, 3, d * .071, color.lilacLight, 1);
    const centers = w >= 145 ? [-w * .20, w * .20] : [0];
    for (const x of centers) {
      pillow(p, x, deck + 22, -d * .275, w * (centers.length === 2 ? .34 : .49),
        d * .20, color.linen, x < 0 ? -.04 : .04);
    }
    const mark = Math.min(w, d) * .045;
    for (const [x, z, scale, swatch] of [[-.24, .12, 1, color.cream], [.23, .27, .79, color.honey],
      [.08, .04, .57, color.cream], [-.1, .34, .62, color.honey]]) {
      star(p, w * x, deck + 30.8, d * z, mark * scale, swatch);
    }
    for (const x of [-.32, -.17, 0, .17, .32]) {
      p.box(w * x, deck + 30.71, d * .24, .85, .24, d * .33, color.lilacLight, 0);
    }
    for (const z of [.09, .195, .30, .405]) {
      p.box(0, deck + 30.72, d * z, w * .71, .24, .9, color.lilacLight, 0);
    }
  }
  const cap = upperDeck || canopy ? 93 : 52;
  p.box(0, 4, -d * .46, w * .95, cap - 4, d * .083, color.walnut, 6);
  p.box(0, 18, -d * .417, w * .89, cap - 23, d * .055, tint, 4);
  if (crib || upperDeck || canopy) {
    for (const side of [-1, 1]) {
      for (const end of [-1, 1]) {
        p.box(w * .45 * side, 4, d * .46 * end, 5, cap, 6, color.walnut, 2);
      }
      p.box(w * .45 * side, cap - 9, 0, 5, 5, d * .89, tint, 1.5);
      if (crib || upperDeck) for (let i = -3; i <= 3; i++) {
        p.box(w * .45 * side, cap - 29, d * i * .105, 3, 20, 3, tint, .8);
      }
    }
  }
  return cap;
}

function cabinet(p, w, d, tint, type) {
  const nightstand = /nightstand/.test(type);
  const bookcase = /bookcase|shelf/.test(type);
  const height = bookcase ? 66 : nightstand ? 29 : type === 'storageCabinet' ? 50 : 38;
  feet(p, 0, 0, w, d, 5);
  p.box(0, 5, 0, w * .96, height - 6, d * .90, color.walnut, 3);
  p.box(0, height - 2, 0, w, 4, d, tint, 1.7);
  p.box(0, height - 3.7, 0, w * .985, 1.5, d * .967, color.oak, .6);
  const drawerRows = nightstand ? 2 : 3;
  const drawerCols = w >= 95 ? 2 : 1;
  for (let row = 0; row < drawerRows; row++) for (let col = 0; col < drawerCols; col++) {
    const drawerW = w * .89 / drawerCols;
    const drawerH = (height - 8) / drawerRows;
    const x = drawerW * (col - (drawerCols - 1) / 2);
    const y = 5 + row * drawerH;
    p.box(x, y, d * .46, drawerW - 2, drawerH - 1.5, 2.9, tint, 1);
    p.oval(x, y + drawerH * .45, d * .51, 2.2, 1.7, 2.2, color.brass);
  }
  return height + 2;
}

function rug(p, w, d, style) {
  if (style === 'office-round') {
    p.disc(0, 1, 0, w * .50, 2.2, d * .50, color.moss);
    p.disc(0, 3.2, 0, w * .46, .7, d * .46, color.sage);
    p.ring(0, 3.9, 0, w * .40, d * .40, .6, color.linen);
    return 4;
  }
  const floral = style === 'bedroom-floral';
  p.box(0, 1, 0, w, 2.4, d, floral ? color.lilac : color.blush, 1);
  p.box(0, 3.5, 0, w * .91, .8, d * .91, color.linen);
  p.box(0, 4.3, 0, w * .86, .5, d * .86, floral ? color.lilacLight : color.peach);
  for (const side of [-1, 1]) for (let i = -5; i <= 5; i++) {
    p.box(i * w * .074, 1.3, side * d * .493, w * .025, 1.2, d * .047, color.linen);
  }
  for (const side of [-1, 1]) {
    p.box(side * w * .398, 4.84, 0, .6, .32, d * .797, color.linen);
    p.box(0, 4.84, side * d * .398, w * .797, .32, .6, color.linen);
  }
  if (floral) for (const x of [-1, 0, 1]) for (const z of [-1, 0, 1]) {
    star(p, w * .22 * x, 4.9, d * .22 * z, Math.min(w, d) * .038, color.cream);
  }
  return 5;
}

function sinkCountertop(p, w, d, top) {
  // The reference kitchen counter has two wells aligned with its long side.
  // Four stone sections leave a real opening rather than a sink painted on top.
  const width = w * .58;
  const depth = d * .28;
  const z = -d * .04;
  const start = z - depth / 2;
  const end = z + depth / 2;
  const sideWidth = (w - width) / 2;
  for (const side of [-1, 1]) {
    p.box(side * (w + width) / 4, top - 5, 0, sideWidth, 5, d, color.linen);
  }
  p.box(0, top - 5, (start - d / 2) / 2, width, 5, start + d / 2, color.linen);
  p.box(0, top - 5, (end + d / 2) / 2, width, 5, d / 2 - end, color.linen);

  const lip = Math.min(2.6, width * .10);
  p.box(0, top - 4.88, z, width, .72, depth, color.basinSteel);
  for (const side of [-1, 1]) {
    p.box(side * width / 2, top - 4.5, z, lip, 5.25, depth + lip, color.steel, .4);
    p.box(0, top - 4.5, z + side * depth / 2, width, 5.25, lip, color.steel, .4);
    p.disc(0, top - 4.1, z + side * depth / 4, lip, .6, lip, color.darkGlass);
  }
  p.box(0, top - 4.5, z, width, 4.85, lip, color.steel, .4);
  const tapX = -width / 2 - lip * 1.15;
  p.disc(tapX, top, z, lip * .8, lip * 2.9, lip * .8, color.steel);
  p.box(tapX + lip, top + lip * 2.5, z, lip * 2.8, lip * .7, lip, color.steel, .6);
}

function counter(p, w, d, type, hasSink = false) {
  const height = type === 'doubleVanity' ? 32 : 35;
  const appliance = type === 'kitchenWorktop';
  const double = type === 'doubleVanity';
  p.box(0, 1, 0, w * .91, height - 4, d * .93, double ? color.sage : color.walnut, 2.3);
  if (hasSink) sinkCountertop(p, w, d, height + 2);
  else p.box(0, height - 3, 0, w, 5, d, color.linen, 1.8);
  const long = d > w;
  for (const edge of [-1, 1]) for (let i = -1; i <= 1; i++) {
    const width = long ? 2.2 : w * .29;
    const depth = long ? d * .29 : 2.2;
    const x = long ? w * .46 * edge : w * .30 * i;
    const z = long ? d * .30 * i : d * .47 * edge;
    p.box(x, 6, z, width, height * .67, depth, double ? color.moss : color.oak, .8);
    p.box(x, height * .63, z, long ? 3.2 : w * .08, 2.6, long ? d * .05 : 3.2, color.honey, .7);
  }
  if (appliance) {
    p.box(0, height + 2, 0, w * .84, 2.5, d * .72, color.darkGlass, .8);
    for (const x of [-.20, .20]) for (const z of [-.19, .19]) {
      const r = Math.min(w, d) * (x < 0 ? .12 : .092);
      p.ring(w * x, height + 4.8, d * z, r, r, 1, color.glass);
    }
  }
  if (double) {
    for (const x of [-w * .24, w * .24]) {
      p.basin(x, height + 1.9, 0, w * .16, 5.5, d * .36);
      p.oval(x, height + 3.48, 0, 2.1, .52, 2.1, color.brass);
      p.disc(x, height + 2, -d * .32, 2.6, 8, 2.6, color.brass);
      p.box(x, height + 8.4, -d * .22, 4, 3, d * .2, color.brass, 1);
    }
  }
  return height + 3;
}

function bath(p, w, d, type) {
  if (type === 'tub') {
    p.box(0, 0, 0, w * .95, 19, d * .95, color.ceramic, 6);
    p.box(0, 18, 0, w * .85, 3, d * .86, color.blueWater, 1.3);
    for (const side of [-1, 1]) {
      p.box(side * w * .44, 17, 0, w * .11, 7, d * .94, color.cream, 2.6);
      p.box(0, 17, side * d * .43, w * .82, 7, d * .12, color.cream, 2.6);
    }
    p.disc(0, 21, -d * .31, 2.4, .9, 2.4, color.glass);
    p.disc(0, 22, -d * .44, 3.5, 9, 3.5, color.brass);
    p.box(0, 30, -d * .40, 5, 3.7, d * .10, color.brass, 1.3);
    p.box(w * .24, 21.07, d * .14, w * .014, .18, d * .22, color.aqua, .08);
    return 34;
  }
  if (type === 'toilet') {
    p.disc(0, 0, d * .12, w * .28, 11, d * .29, color.ceramic, .65);
    p.disc(0, 10, d * .12, w * .43, 5, d * .34, color.cream, .81);
    p.disc(0, 15, d * .12, w * .34, 1, d * .27, color.linen);
    p.box(0, 4, -d * .32, w * .92, 22, d * .31, color.ceramic, 4.2);
    p.box(0, 25, -d * .32, w * .93, 3, d * .32, color.cream, 1.3);
    p.disc(w * .25, 28, -d * .32, 2.1, 1.1, 2.1, color.honey);
    return 29;
  }
  p.box(-w * .15, 0, -d * .14, w * .65, 24, d * .58, color.sage, 3.8);
  p.box(-w * .15, 23, -d * .14, w * .76, 4, d * .68, color.cream, 1.6);
  p.basin(-w * .15, 27, -d * .11, w * .28, 5.2, d * .22);
  p.oval(-w * .15, 28.56, -d * .11, 1.6, .55, 1.6, color.brass);
  p.disc(-w * .15, 27, -d * .34, 2.5, 8, 2.5, color.brass);
  p.box(-w * .15, 33, -d * .31, 4.7, 3, d * .1, color.brass, 1.1);
  p.box(w * .34, 2, d * .12, w * .22, 17, d * .73, color.walnut, 2.1);
  p.box(w * .34, 19, d * .18, w * .24, 4.7, d * .34, color.blush, 1.7);
  return 36;
}

function plush(p, w, d, bunny, asChair) {
  const fur = bunny ? color.cream : '#bb9476';
  const size = Math.min(w, d);
  const middle = size * (asChair ? .40 : .25);
  const face = size * (asChair ? .64 : .49);
  p.oval(0, middle * .68, d * .07, w * .35, middle * .62, d * .36, fur);
  p.oval(0, face, -d * .13, w * .30, size * .23, d * .27, fur);
  for (const side of [-1, 1]) {
    p.oval(w * .27 * side, face + size * .19, -d * .19,
      w * .102, size * (bunny ? .19 : .10), d * .093, fur);
    p.oval(w * .10 * side, face + size * .04, d * .105, size * .026, size * .034, size * .022, color.ink);
    p.oval(w * .26 * side, middle * .69, d * .23, w * .14, size * .105, d * .16, fur);
    p.oval(w * .15 * side, face - size * .06, d * .094, size * .043, size * .023, size * .023, color.blush);
  }
  p.oval(0, face - size * .044, d * .12, size * .033, size * .022, size * .023, color.ink);
  if (asChair) p.box(0, 8, d * .17, w * .57, 9, d * .49, color.linen, 3.8);
  return face + size * (bunny ? .37 : .28);
}

function activity(p, w, d) {
  const height = 22;
  const tints = [color.sage, color.peach, color.honey, color.lilac, color.blue, color.blush];
  feet(p, 0, 0, w * .96, d * .96, height, color.sage);
  p.box(0, height - 2, 0, w * .94, 7, d * .93, color.linen, 3);
  for (let i = 0; i < tints.length; i++) {
    const x = w * (.23 * (i % 3) - .23);
    const z = d * (i < 3 ? -.18 : .18);
    p.disc(x, height + 5, z, w * .067, 2.6 + i % 3, d * .072, tints[i], 1.12);
  }
  return 31;
}

function mat(p, w, d, tint) {
  const swatches = [color.linen, tint, color.sand, color.peach];
  for (let row = 0; row < 4; row++) for (let col = 0; col < 5; col++) {
    const x = w * ((col + .5) / 5 - .5);
    const z = d * ((row + .5) / 4 - .5);
    p.box(x, 1.1, z, w / 5 - .8, 2.6, d / 4 - .8, swatches[(row + col) % 4], 1);
  }
  return 4;
}

function foliage(p, w, d, isFloor) {
  const size = Math.min(w, d);
  const pot = size * (isFloor ? .33 : .25);
  p.disc(0, 0, 0, pot, pot * .85, pot, color.peach, .72);
  p.disc(0, pot * .75, 0, pot * 1.07, pot * .18, pot * 1.07, color.walnut);
  for (let i = 0; i < 5; i++) {
    const angle = i * Math.PI * .4;
    const x = Math.cos(angle) * size * .21;
    const z = Math.sin(angle) * size * .21;
    const y = size * (isFloor ? .55 : .44) + i % 2 * size * .08;
    const stem = p.oval(x * .5, y * .69, z * .5, size * .035, y * .32, size * .035, color.moss);
    stem.rotation.z = -x / y;
    stem.rotation.x = z / y;
    const leaves = isFloor ? color.sage : [color.blush, color.linen, color.honey][i % 3];
    p.oval(x, y, z, size * .13, size * (isFloor ? .18 : .085), size * .11, leaves);
  }
  return size * (isFloor ? .82 : .65);
}

export function makeStorybookFurniture(item) {
  const { type, w, h: d } = item || {};
  if (typeof type !== 'string' || !Number.isFinite(w) || !Number.isFinite(d) || w < 1 || d < 1) return null;
  if (type.startsWith('pets-')) return makeStorybookHabitat(type, w, d);
  const tint = finishes[type.split('-').at(-1)];
  const p = new Miniature(w, d);
  let top;
  if (type === 'sofa' || /(?:sofa|loveseat|chaise)-/.test(type)) {
    top = sofa(p, w, d, tint || (type === 'sofa' ? color.linen : color.sage), type);
  } else if (type === 'tv') {
    p.box(0, 2, 0, w * .94, 23, d * .98, color.walnut, 3.5);
    p.box(0, 24, 0, w, 4, d, color.oakLight, 1.5);
    p.box(0, 28, 0, w * .40, 6, d * .32, color.ink, 1.4);
    p.box(0, 33, 0, w * .29, 52, d * .89, color.ink, 2.5);
    p.box(-w * .155, 36, 0, 1.6, 46, d * .84, color.darkGlass, .6);
    p.box(-w * .187, 68, -d * .12, .6, 6, d * .33, color.glass, .15);
    p.oval(-w * .173, 35, d * .34, 1.2, 1.2, 1.2, color.honey);
    top = 85;
  } else if (type === 'table' || type.includes('dining-set')) {
    top = table(p, w, d, tint || color.oakLight, type);
  } else if (type === 'diningTable' || /^living-(?:petal|round|rectangular)-dining-table-/.test(type)) {
    const form = type === 'diningTable' ? 'classic' : type.includes('round-dining') ? 'round' : 'styled';
    top = diningTop(p, w, d, tint || (form === 'classic' ? color.oak : color.oakLight), form);
  } else if (type === 'diningChair' || type.startsWith('living-dining-chair-')) {
    top = diningChair(p, w, d, tint || color.denim);
  } else if (type === 'desk' || type.includes('-desk-')) {
    top = desk(p, w, d, tint || color.oakLight, type === 'desk' || type.includes('corner-desk'));
  } else if (type === 'chair' || type === 'stool' || type.includes('desk-chair')) {
    chair(p, 0, 0, w, d, 0, tint || color.lilac, type === 'stool');
    top = type === 'stool' ? 50 : 60;
  } else if (type === 'armchair' || type.includes('acorn-armchair')) {
    chair(p, 0, 0, w, d, 0, tint || color.lilac, true);
    for (const side of [-1, 1]) {
      p.box(side * w * .37, 16, 0, w * .19, 25, d * .83, color.lilac, 6.5);
    }
    top = 51;
  } else if (type === 'bed' || /(?:bed|crib)-/.test(type)) {
    top = bed(p, w, d, tint || color.lilac, type);
  } else if (type === 'rug') {
    top = rug(p, w, d, item.rugStyle);
  } else if (type === 'counter' || type === 'kitchenWorktop' || type === 'doubleVanity') {
    top = counter(p, w, d, type, type === 'counter' && item.id === 'i7');
  } else if (type === 'tub' || type === 'toilet' || type === 'bathFixtures') {
    top = bath(p, w, d, type);
  } else if (type === 'plant' || type === 'floorPlant' || type.startsWith('balcony-')) {
    top = foliage(p, w, d, type !== 'plant');
  } else if (type === 'wallUnit') {
    p.box(0, 48, 0, w, 17, d * .62, color.linen, 4);
    p.box(0, 51, d * .32, w * .89, 4, 1.8, color.ink, .6);
    p.box(-w * .34, 56, d * .32, w * .11, 2.1, 2.1, color.blue, .7);
    top = 65;
  } else if (/dresser|nightstand|bookcase|storageCabinet|toy-storage|shelf/.test(type)) {
    top = cabinet(p, w, d, tint || color.oakLight, type);
  } else if (/coffeeTable|sideTable|bedroomBench|coffee-table|side-table|low-play-table/.test(type)) {
    const height = type === 'bedroomBench' ? 26 : 30;
    feet(p, 0, 0, w, d, height - 4);
    p.box(0, height - 5, 0, w, 8, d, tint || color.oakLight, 3.4);
    if (type === 'bedroomBench') p.box(0, height + 2, 0, w * .87, 6.2, d * .91, color.lilacLight, 2.6);
    top = height + 8;
  } else if (type.includes('bunny-plush') || type.includes('plush-bear') || type.includes('bear-floor-chair')) {
    top = plush(p, w, d, type.includes('bunny'), type.includes('floor-chair'));
  } else if (type.startsWith('baby-mats-')) {
    top = mat(p, w, d, tint || color.sage);
  } else if (type.startsWith('baby-activities-')) {
    top = activity(p, w, d);
  } else if (type.startsWith('baby-toys-')) {
    const r = Math.min(w, d) * .20;
    p.oval(0, r, 0, r, r, r, tint || color.peach);
    p.ring(0, r, 0, r * .95, r * .95, 1.2, color.linen);
    top = r * 2;
  } else {
    return null;
  }
  return p.finish(top);
}
