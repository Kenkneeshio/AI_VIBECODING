import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import '../public/inventory.js';

// Miniature device models. Authored plan pixels map to world X/Z, with Y up.
// These models accept an explicit state and clock, and never read Home Assistant.
const color = {
  cream: 0xf4e4ca, oat: 0xd2b99c, honey: 0xbd8b60, rose: 0xb7787c,
  ink: 0x584252, muted: 0x8f817f, plum: 0x665673, sage: 0x8ea88f,
  mint: 0xb6d5bf, teal: 0x426e68, glass: 0xb7d4d7, blue: 0x7099a6,
  warm: 0xffdbab, gold: 0xe4b871, dark: 0x36374c, ember: 0xeea763,
  tile: 0x77566d, paleTile: 0x805d74, brass: 0xbc8857,
};
const PI = Math.PI;
const fullTurn = 2 * PI;
const inactiveStates = new Set(['unknown', 'unavailable']);

const clamp = (n, low, high) => Math.max(low, Math.min(high, n));
const span = (n, fallback) => Number.isFinite(n) ? clamp(n, 12, 480) : fallback;
const GARAGE_PAD_DEPTH = 0.96;
const GARAGE_PAD_CENTER = 0.09;

/** The camera remains independently placed and shares the level of the pad beneath it. */
export function garagePadContains(item, localX, localZ) {
  const width = span(item.w, 42);
  const depth = span(item.h, 42);
  return Math.abs(localX) <= width / 2 &&
    Math.abs(localZ - depth * GARAGE_PAD_CENTER) <= depth * GARAGE_PAD_DEPTH / 2;
}
const material = (shade, options = {}) => new THREE.MeshStandardMaterial({
  color: shade, roughness: 0.83, ...options,
});
const stateValue = (state) => String(state?.state ?? 'unknown');
const live = (state) => !inactiveStates.has(stateValue(state));
const on = (state) => live(state) && (state.active === true || state.state === 'on');
const brightness = (state) => on(state)
  ? (Number.isFinite(state.attributes?.brightness) ? clamp(state.attributes.brightness / 255, 0, 1) : 1)
  : 0;
const catalogItem = type => (typeof window === 'undefined' ? globalThis : window).RoomcraftInventory?.byType?.[type];

function mesh(parent, geometry, surface, x = 0, y = 0, z = 0) {
  const object = new THREE.Mesh(geometry, surface);
  object.position.set(x, y, z);
  parent.add(object);
  return object;
}

function box(parent, w, h, d, surface, x = 0, y = 0, z = 0) {
  return mesh(parent, new THREE.BoxGeometry(w, h, d), surface, x, y, z);
}

function softBox(parent, w, h, d, surface, x = 0, y = 0, z = 0, radius = 3) {
  const bevel = Math.min(radius, w / 3, h / 3, d / 3);
  const left = bevel - w / 2;
  const bottom = bevel - h / 2;
  const shape = new THREE.Shape();
  shape.moveTo(left, bottom);
  shape.lineTo(-left, bottom);
  shape.lineTo(-left, -bottom);
  shape.lineTo(left, -bottom);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: d - 2 * bevel, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2,
  });
  geometry.translate(0, 0, bevel - d / 2);
  return mesh(parent, geometry, surface, x, y, z);
}

function cylinder(parent, top, bottom, h, surface, x = 0, y = 0, z = 0, segments = 16) {
  return mesh(parent, new THREE.CylinderGeometry(top, bottom, h, segments), surface, x, y, z);
}

function bead(parent, r, surface, x, y, z) {
  return mesh(parent, new THREE.SphereGeometry(r, 10, 7), surface, x, y, z);
}

function child(parent, x = 0, y = 0, z = 0) {
  const group = new THREE.Group();
  group.position.set(x, y, z);
  parent.add(group);
  return group;
}

function lightPool(root, radius, height = 2.8) {
  const glow = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { strength: { value: 0 }, tint: { value: new THREE.Color(color.warm) } },
    vertexShader: 'varying vec2 floorUV; void main(){floorUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    fragmentShader: `
      uniform float strength;
      uniform vec3 tint;
      varying vec2 floorUV;
      void main(){
        float distanceFromLamp=length(floorUV-vec2(0.5));
        float edge=1.0-smoothstep(0.25,0.5,distanceFromLamp);
        float falloff=1.0/(1.0+20.0*distanceFromLamp*distanceFromLamp);
        gl_FragColor=vec4(tint,edge*falloff*strength);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const pool = mesh(root, new THREE.PlaneGeometry(2 * radius, 2 * radius), glow, 0, height, 0);
  pool.rotation.x = -PI / 2;
  pool.visible = false;
  return (power, tint) => {
    pool.visible = power > 0;
    glow.uniforms.strength.value = power * 0.29;
    glow.uniforms.tint.value.copy(tint);
  };
}

function lamp(item, w, h, context) {
  const root = new THREE.Group();
  const type = item.type;
  const recipe = catalogItem(type);
  const form = String(item.lightForm ?? recipe?.lightForm ?? '');
  const pendant = type === 'pendantLight' || form === 'star_pendant';
  const ceiling = type === 'ceilingLight' || pendant || form === 'bloom_ceiling';
  const standing = type === 'floorLamp' || form === 'cloud_floor_lamp';
  const wall = type === 'wallSconce' || form === 'acorn_sconce';
  const fanLight = ceiling && /fan light/i.test(item.name ?? '');
  const size = Math.min(w, h);
  const palette = recipe?.palette;
  const idleShade = new THREE.Color(palette?.detail ?? color.cream);
  const base = material(palette?.base ?? color.honey, {roughness: .53});
  const trim = material(palette?.dark ?? color.ink);
  const brass = material(color.brass, {roughness: 0.36, metalness: 0.42});
  const diffuser = material(idleShade, { emissive: color.warm, emissiveIntensity: 0 });
  const tint = new THREE.Color(color.warm);
  const bodyHeight = fanLight ? 46 : pendant ? 50 : ceiling ? 56 : wall ? context.mountY ?? 40 : standing ? 56 : 36;
  const tableLamp = !ceiling && !standing && !wall;
  const poolRadius = tableLamp ? clamp(size * .68, 15, 46) : clamp(size * (ceiling ? 1.72 : 1.35), 38, 110);
  const pool = lightPool(root, poolRadius, tableLamp ? 16.8 : 2.8);
  if (ceiling) {
    const radius = size * (fanLight ? 0.19 : 0.29);
    cylinder(root, radius, radius * 1.02, 3, trim, 0, bodyHeight + 2);
    if (pendant) cylinder(root, 1.7, 1.7, 13, base, 0, bodyHeight + 9);
    cylinder(root, radius * 0.82, radius, 5, base, 0, bodyHeight - 1.5);
    cylinder(root, radius * 0.92, radius * 0.96, 1.15, brass, 0, bodyHeight + 1.1);
    if (form === 'star_pendant' || form === 'bloom_ceiling') {
      const globe = mesh(root, new THREE.IcosahedronGeometry(radius * .96, 0), diffuser, 0, bodyHeight, 0);
      globe.scale.y = pendant ? 1.03 : .56;
    } else {
      const globe = bead(root, radius * .83, diffuser, 0, bodyHeight, 0);
      globe.scale.y = pendant ? .88 : .52;
    }
  } else if (wall) {
    softBox(root, size * 0.34, 18, 4, trim, 0, bodyHeight - 5, -4);
    cylinder(root, size * 0.12, size * 0.11, 14, base, 0, bodyHeight - 3, 3);
    if (form === 'acorn_sconce') {
      cylinder(root, size * .15, size * .22, 13, diffuser, 0, bodyHeight + 4, 3, 10);
      cylinder(root, size * .22, size * .218, 1.2, brass, 0, bodyHeight - 2.3, 3, 10);
    } else bead(root, size * .21, diffuser, 0, bodyHeight + 3, 3);
  } else {
    const stemTop = bodyHeight - 7;
    const foot = standing ? 3 : 16;
    const radius = size * (standing ? 0.25 : 0.30);
    cylinder(root, radius * 0.57, radius * 0.67, 4, trim, 0, foot);
    cylinder(root, 2, 2.9, stemTop - foot, base, 0, (foot + stemTop) / 2);
    if (standing) {
      bead(root, radius * 0.81, diffuser, 0, bodyHeight, 0);
    } else {
      const folds = form === 'bud_lamp' ? 12 : 9;
      if (form === 'bud_lamp') {
        const fluted = new THREE.CylinderGeometry(radius * .56, radius, 14, folds * 2);
        const vertices = fluted.attributes.position;
        for (let i = 0; i < vertices.count; i++) {
          const x = vertices.getX(i);
          const z = vertices.getZ(i);
          const facet = Math.round(Math.atan2(x, z) * folds / Math.PI);
          if (facet % 2) vertices.setXYZ(i, x * .92, vertices.getY(i), z * .92);
        }
        fluted.computeVertexNormals();
        mesh(root, fluted, diffuser, 0, bodyHeight, 0);
      } else cylinder(root, radius * .56, radius, 14, diffuser, 0, bodyHeight, 0, folds);
      cylinder(root, radius, radius * 0.99, 1.2, brass, 0, bodyHeight - 6.7, 0, folds);
      cylinder(root, radius * 0.55, radius * 0.58, 1.1, brass, 0, bodyHeight + 7.1, 0, folds);
    }
  }
  return {
    root, anchorY: bodyHeight + 2,
    animate(state) {
      const power = brightness(state);
      const rgb = state?.attributes?.rgb_color;
      if (Array.isArray(rgb) && rgb.length === 3 && rgb.every(Number.isFinite)) {
        const [red, green, blue] = rgb.map(value => clamp(value / 255, 0, 1));
        tint.setRGB(red, green, blue, THREE.SRGBColorSpace);
      } else {
        tint.setHex(color.warm);
      }
      pool(power, tint);
      diffuser.emissiveIntensity = power * 0.88;
      diffuser.emissive.copy(tint);
      if (power > 0) diffuser.color.copy(tint);
      else diffuser.color.copy(idleShade);
    },
  };
}

function fanBlade(radius, palm) {
  const outline = new THREE.Shape();
  outline.moveTo(radius * .10, -radius * .061);
  if (palm) {
    outline.bezierCurveTo(radius * .42, -radius * .15, radius * .76, -radius * .42, radius, -.024 * radius);
    outline.bezierCurveTo(radius * .87, radius * .25, radius * .49, radius * .28, radius * .10, radius * .063);
  } else {
    outline.bezierCurveTo(radius * .39, -radius * .094, radius * .62, -radius * .16, radius * .88, -radius * .14);
    outline.bezierCurveTo(radius * 1.01, -radius * .11, radius * 1.03, radius * .07, radius * .88, radius * .13);
    outline.bezierCurveTo(radius * .62, radius * .20, radius * .42, radius * .13, radius * .10, radius * .063);
  }
  outline.closePath();
  const geometry = new THREE.ExtrudeGeometry(outline, {
    depth: 1.8, bevelEnabled: true, bevelSize: .6, bevelThickness: .48,
    bevelSegments: 1, curveSegments: 5,
  });
  geometry.translate(0, 0, -.9);
  return geometry.rotateX(-PI / 2);
}

function fan(item, w, h, upright) {
  const root = new THREE.Group();
  const radius = Math.min(w, h) * (upright ? 0.37 : 0.46);
  const baseY = upright ? radius + 11 : 59;
  const shaft = child(root, 0, baseY, 0);
  if (upright) shaft.rotation.x = PI / 2;
  const rotor = child(shaft, 0, -1, 0);
  rotor.name = 'Fan blades';
  const recipe = catalogItem(item.type);
  const palm = recipe?.form === 'palm';
  const housing = material(recipe?.palette.accent ?? color.cream);
  const dark = material(recipe?.palette.dark ?? color.ink);
  const bladeColor = recipe?.palette.base ?? (/(?:white|cream)$/.test(item.type) ? color.oat
    : /(?:forest|sage)$/.test(item.type) ? color.sage : color.honey);
  const blades = material(bladeColor);
  const ribs = palm ? material(recipe.palette.accent) : null;
  const count = upright || /three-blade/.test(item.type) ? 3 : /four-blade/.test(item.type) ? 4 : 5;
  cylinder(shaft, radius * 0.18, radius * 0.2, 6, dark);
  cylinder(shaft, radius * 0.174, radius * 0.176, 1.4, material(color.brass, {roughness: .36, metalness: .42}), 0, 3.4);
  cylinder(shaft, radius * 0.15, radius * 0.17, 2.6, housing, 0, 4.9);
  const blade = fanBlade(radius, palm);
  for (let i = 0; i < count; i++) {
    const arm = child(rotor);
    arm.rotation.y = (i / count) * fullTurn;
    mesh(arm, blade, blades);
    if (ribs) {
      box(arm, radius * .72, .5, .55, ribs, radius * .52, 1.45);
      for (let row = 0; row < 4; row++) {
        for (const side of [-1, 1]) {
          const vein = box(arm, radius * (.10 + .025 * row), .46, .48, ribs, radius * (.45 + .11 * row), 1.39, side * radius * .043);
          vein.rotation.y = side * .68;
        }
      }
    }
  }
  if (upright) {
    softBox(root, radius * 1.66, 6, radius * 1.02, dark, 0, 3);
    box(root, radius * 0.3, 11, 6, housing, 0, 10);
    const ring = mesh(root, new THREE.TorusGeometry(radius, 2.6, 6, 24), housing, 0, baseY, 3);
    ring.rotation.z = 0.04;
    for (let i = -1; i <= 1; i++) {
      const x = i * radius * 0.5;
      cylinder(root, 0.68, 0.68, 2 * Math.sqrt(radius * radius - x * x), dark, x, baseY, 5, 6);
    }
  }
  return {
    root, anchorY: baseY, ...(upright ? {} : { anchorOffset: { x: radius * 0.76, z: 0 } }),
    animate(state, seconds = 0) {
      const speed = Number.isFinite(state?.attributes?.percentage)
        ? clamp(state.attributes.percentage / 100, 0.12, 1) : 0.64;
      rotor.rotation.y = on(state) ? (seconds * fullTurn * speed) % fullTurn : 0;
    },
  };
}

function presenceSwitch(w, context) {
  const root = new THREE.Group();
  const at = context.mountY ?? 39;
  const panel = child(root, 0, at);
  const width = clamp(w * 0.72, 17, 27);
  softBox(panel, width, 31, 5, material(color.ink), 0, 0, -0.5);
  softBox(panel, width - 1.9, 29, 4.4, material(color.cream), 0, 0.3, 1);
  const rockerSurface = material(color.oat, { emissive: color.warm, emissiveIntensity: 0 });
  const rocker = softBox(panel, width * 0.55, 17.5, 3.2, rockerSurface, 0, 3.2, 3.5);
  const pips = Array.from({ length: 3 }, (_, i) => {
    const surface = material(color.teal, { emissive: color.mint, emissiveIntensity: 0 });
    return bead(panel, 1.85, surface, (i - 1) * width * 0.24, -10.3, 3.55);
  });
  return {
    root, anchorY: at,
    animate(state, seconds = 0) {
      rocker.rotation.x = !live(state) ? 0 : on(state) ? -0.16 : 0.16;
      rockerSurface.emissiveIntensity = on(state) ? 0.42 : 0;
      const present = state?.presence === 'on';
      for (let i = 0; i < pips.length; i++) {
        const pulse = present ? 0.5 + 0.5 * Math.cos(seconds * 5 - i * 1.23) : 0;
        pips[i].material.color.setHex(present ? color.mint : color.teal);
        pips[i].material.emissiveIntensity = present ? 0.75 + pulse * 1.9 : 0;
        pips[i].scale.setScalar(present ? 1 + pulse * 0.18 : 1);
      }
    },
  };
}

function aperture(w, windowOnly, slatsEnabled, height = 31) {
  const root = new THREE.Group();
  const at = 36.5;
  const openWidth = Math.max(12, w - 6);
  const frame = material(color.oat);
  if (windowOnly) {
    const glass = material(color.glass, {roughness: 0.32});
    box(root, openWidth, height, 3.2, glass, 0, at, 0);
    for (const x of [-openWidth / 2 + 1.6, 0, openWidth / 2 - 1.6]) {
      box(root, 3.2, height + 2, 7.5, frame, x, at);
    }
    const headY = at + height / 2;
    box(root, openWidth, 1.8, 7, glass, 0, headY + 0.35);
    for (const z of [-4.25, 4.25]) box(root, openWidth + 2, 3.2, 1.5, frame, 0, headY, z);
    box(root, openWidth + 3, 3.8, 11, frame, 0, at - height / 2, 1.4);
    box(root, openWidth, 1.35, 0.5, material(color.cream), 0, at + 6.2, 2);
  }
  if (!slatsEnabled) return { root, anchorY: at };
  const roller = material(color.cream);
  const railY = at + height / 2 - 1;
  softBox(root, openWidth + 2, 4.6, 7, frame, 0, railY + 0.75, 6.7, 1.6);
  const slats = Array.from({ length: 8 }, (_, i) =>
    box(root, openWidth - 5, height / 8 - 0.45, 3, roller, 0, railY - i * (height / 8), 6.9));
  let shown = 0;
  return {
    root, anchorY: at + 1.5,
    animate(state, _seconds, _tracking, transientTelemetry = false) {
      const openness = coverOpenFraction(state);
      const visibleFraction = openness === null ? (transientTelemetry ? 0 : shown) : 1 - openness;
      if (!transientTelemetry) shown = visibleFraction;
      const tilt = Number.isFinite(state?.attributes?.current_tilt_position)
        ? clamp(state.attributes.current_tilt_position / 100, 0, 1) : 0;
      for (let i = 0; i < slats.length; i++) {
        const amount = clamp(visibleFraction * slats.length - i, 0, 1);
        slats[i].visible = amount > 0.02;
        slats[i].scale.y = amount;
        slats[i].rotation.x = tilt * 0.9;
      }
    },
  };
}

function coverOpenFraction(state) {
  if (!live(state)) return null;
  if (Number.isFinite(state.attributes?.current_position)) return clamp(state.attributes.current_position / 100, 0, 1);
  if (['open', 'on'].includes(state.state)) return 1;
  if (['closed', 'off'].includes(state.state)) return 0;
  return null;
}

function garage(w, h) {
  const root = new THREE.Group();
  const depth = h * 0.72;
  const frameW = w * 0.74;
  const front = depth / 2;
  const frameH = Math.min(48, w * 0.38);
  const roofH = Math.min(23, w * 0.19);
  const siding = material(color.oat);
  const trim = material(color.cream);
  const roof = material(color.plum);
  const shingles = [material(color.tile), material(color.paleTile)];
  const bay = material(color.dark);
  box(root, w, 5, h * GARAGE_PAD_DEPTH, trim, 0, 2.5, h * GARAGE_PAD_CENTER);
  box(root, w * 0.88, frameH + 4, 5, siding, 0, (frameH + 4) / 2, -front + 2);
  for (const x of [-w * 0.42, w * 0.42]) {
    box(root, w * 0.09, frameH + 4, depth, siding, x, (frameH + 4) / 2);
    softBox(root, w * 0.1, frameH + 4, 5, trim, x, (frameH + 4) / 2, front + 1, 1.5);
  }
  const shape = new THREE.Shape();
  shape.moveTo(-w * 0.49, 0);
  shape.lineTo(w * 0.49, 0);
  shape.lineTo(0, roofH);
  shape.closePath();
  const cap = new THREE.ExtrudeGeometry(shape, {
    depth: depth + 11, bevelThickness: 1.5, bevelSize: 1.5, bevelSegments: 2,
  });
  cap.translate(0, 0, -front - 5.5);
  mesh(root, cap, roof, 0, frameH + 4);
  const halfRun = w * .49;
  const roofSlope = Math.atan2(roofH, halfRun);
  const roofSpan = Math.hypot(roofH, halfRun);
  const shingleDepth = (depth + 11) / 8;
  const shingleRows = [[], []];
  for (const side of [-1, 1]) {
    for (let row = 0; row < 8; row++) {
      const z = -front - 5.5 + (row + .5) * shingleDepth;
      const shingle = new THREE.BoxGeometry(roofSpan * .97, 2.2, shingleDepth - .62);
      shingle.rotateZ(-side * roofSlope);
      shingle.translate(side * halfRun * .5, frameH + 5.65 + roofH * .5, z);
      shingleRows[row % 2].push(shingle);
    }
  }
  shingleRows.forEach((parts, row) => {
    mesh(root, mergeGeometries(parts), shingles[row]);
    parts.forEach(part => part.dispose());
  });
  softBox(root, 4, 4.5, depth + 12, roof, 0, frameH + roofH + 5.6, 0, 1.5);
  box(root, w * 0.95, 3.5, 3.5, trim, 0, frameH + 4, front + 5.5);
  box(root, frameW, frameH, 1.5, bay, 0, frameH / 2 + 4, front - 4);
  // The pad and shell cast a ground shadow while the shutter animates independently.
  for (const node of root.children) if (node.isMesh) node.castShadow = true;
  const doorSurface = material(color.mint);
  const doorInset = material(color.sage);
  const doorHeight = frameH - 3;
  const panelStep = doorHeight / 6;
  const panels = Array.from({ length: 6 }, (_, i) => {
    const panel = child(root, 0, frameH - (i + 0.5) * panelStep + 2, front + 0.5);
    softBox(panel, frameW - 2, panelStep - 0.7, 3.4, doorSurface, 0, 0, 0, 1.2);
    box(panel, frameW * .91, .68, .7, doorInset, 0, panelStep * .23, 1.8);
    if (i === 5) softBox(panel, frameW * .13, 2, 2.2, trim, 0, 0, 2.3, .55);
    return panel;
  });
  const lantern = material(color.gold, { emissive: color.ember, emissiveIntensity: 0 });
  bead(root, 3.7, lantern, w * 0.422, frameH * 0.73, front + 4.5);
  let fraction = 0;
  return {
    root, anchorY: frameH * 0.62, anchorOffset: { x: 0, z: front },
    animate(state, seconds = 0, _tracking, transientTelemetry = false) {
      const next = coverOpenFraction(state);
      const visibleFraction = next ?? (transientTelemetry ? 0 : fraction);
      if (!transientTelemetry) fraction = visibleFraction;
      doorSurface.color.setHex(live(state) ? color.mint : color.muted);
      doorInset.color.setHex(live(state) ? color.sage : color.muted);
      const exposed = (1 - visibleFraction) * panels.length;
      panels.forEach((panel, index) => {
        const shown = clamp(exposed - index, 0, 1);
        panel.visible = shown > 0.02;
        panel.scale.y = shown;
        panel.position.y = frameH - (index + shown / 2) * panelStep + 2;
      });
      const moving = ['opening', 'closing'].includes(stateValue(state));
      lantern.emissiveIntensity = moving ? 0.55 + (0.5 + 0.5 * Math.cos(seconds * 6)) : 0;
    },
  };
}

function hingedDoor(w) {
  const root = new THREE.Group();
  const height = 46;
  const frame = material(color.cream);
  const surface = material(color.honey);
  const width = Math.min(w * 0.86, 88);
  const hinge = child(root, -width / 2, 0, 0);
  for (const x of [-width / 2 - 1, width / 2 + 1]) box(root, 3.4, height, 5, frame, x, height / 2);
  box(root, width + 4, 3, 5, frame, 0, height);
  softBox(hinge, width - 2, height - 4, 4, surface, width / 2, height / 2, 0, 2);
  bead(hinge, 2.2, material(color.gold), width - 6, height * 0.47, 2.8);
  let lastFraction = 0;
  return {
    root, anchorY: height / 2,
    animate(state, _seconds, _tracking, transientTelemetry = false) {
      const fraction = coverOpenFraction(state);
      const visibleFraction = fraction ?? (transientTelemetry ? 0 : lastFraction);
      if (!transientTelemetry) lastFraction = visibleFraction;
      hinge.rotation.y = -1.32 * visibleFraction;
      surface.color.setHex(live(state) ? color.honey : color.muted);
    },
  };
}

function wallPanel(item, w, context) {
  const root = new THREE.Group();
  const climate = item.type !== 'wallUnit';
  const at = context.mountY ?? (climate ? 42 : 48);
  const width = clamp(w * 0.85, 23, 126);
  const face = material(color.dark, { emissive: color.mint, emissiveIntensity: 0 });
  softBox(root, width, climate ? 25 : 18, 8, material(color.cream), 0, at, 0);
  if (climate) {
    softBox(root, width * 0.7, 11, 1.9, face, 0, at + 2, 4.1);
    for (const x of [-0.22, 0, 0.22]) bead(root, 1.35, material(color.oat), width * x, at - 7, 4.3);
  } else {
    box(root, width * 0.89, 2.2, 0.7, face, 0, at - 4, 4.2);
  }
  return {
    root, anchorY: at,
    animate(state) {
      const mode = state?.attributes?.hvac_action;
      const heating = mode === 'heating';
      const working = live(state) && ['cooling', 'heating', 'drying', 'fan'].includes(mode);
      face.emissive.setHex(heating ? color.warm : color.glass);
      face.emissiveIntensity = working ? 1.15 : on(state) ? 0.25 : 0;
    },
  };
}

function appliance(item, w, h) {
  const root = new THREE.Group();
  const width = Math.min(w, h) * 0.74;
  const humidifier = item.type === 'humidifier';
  const height = humidifier ? 25 : 30;
  const trim = material(color.cream);
  const shade = material(humidifier ? color.glass : color.sage);
  const led = material(color.teal, { emissive: color.mint, emissiveIntensity: 0 });
  const y = height - 1;
  cylinder(root, width * 0.46, width * 0.5, 4, material(color.ink), 0, 2);
  if (humidifier) {
    const body = bead(root, width / 2, shade, 0, 13, 0);
    body.scale.y = 22 / width;
    cylinder(root, width * 0.19, width * 0.22, 3.5, trim, 0, y);
  } else {
    softBox(root, width, 24, width * 0.82, shade, 0, 15, 0, 5);
    softBox(root, width * 0.91, 3.8, width * 0.71, trim, 0, y);
    for (let i = -1; i <= 1; i++) box(root, width * 0.66, 1.2, 1.1, led, 0, y + 2.0, i * 3.5);
  }
  bead(root, 1.6, led, width * 0.18, y - 2, width * 0.31);
  const vapor = material(color.glass, { transparent: true, opacity: 0.54, depthWrite: false });
  const mist = Array.from({ length: 3 }, (_, index) => bead(root, 2.1 + index * 0.6, vapor, 0, y + 3, 0));
  return {
    root, anchorY: y,
    animate(state, seconds = 0) {
      const running = on(state);
      led.emissiveIntensity = running ? 1.6 : 0;
      for (let i = 0; i < mist.length; i++) {
        mist[i].visible = running;
        const phase = (seconds * 0.68 + i / mist.length) % 1;
        mist[i].position.set(Math.sin(phase * PI) * 3.1, y + 4 + phase * 14, 0);
        mist[i].scale.setScalar(0.7 + phase * 0.62);
      }
    },
  };
}

function robot(item, w, h) {
  const root = new THREE.Group();
  const recipe = catalogItem(item.type);
  const form = recipe?.form;
  const radius = Math.min(w, h) * 0.42;
  const visualScale = .72;
  root.scale.setScalar(visualScale);
  const status = material(color.sage, { emissive: color.mint, emissiveIntensity: 0 });
  const base = material(recipe?.palette.dark ?? color.ink);
  const shell = material(recipe?.palette.base ?? color.cream, {roughness:.46});
  const stretch = form === 'slim' ? 1.22 : 1;
  const body = cylinder(root, radius, radius * .95, form === 'slim' ? 4.8 : 7, base, 0, 4.6);
  const lid = cylinder(root, radius * .96, radius, form === 'slim' ? 3.6 : 5.5, shell, 0, form === 'slim' ? 8.4 : 10.2);
  body.scale.x = lid.scale.x = stretch;
  cylinder(root, radius * 0.28, radius * 0.33, 4, material(color.oat), 0, 14, -radius * 0.23);
  for (const x of [-0.27, 0.27]) bead(root, radius * 0.105, base, radius * x, 10, radius * 0.88);
  const stripe = softBox(root, radius * 0.68, 1.2, 2.5, status, 0, 13.2, radius * 0.36);
  if (form === 'mop') {
    const fabric = material(recipe.palette.accent);
    for (const side of [-1, 1]) cylinder(root, radius * .39, radius * .40, 2.1, fabric,
      side * radius * .45, 1.8, radius * .51);
  }
  let dock;
  if (form === 'docked') {
    dock = new THREE.Group();
    dock.name = 'Vacuum charging dock';
    const dockSurface = material(recipe.palette.accent);
    softBox(dock, radius * 1.36, 1.8, radius * .95, base, 0, 1.2, -radius * .59, .4);
    softBox(dock, radius * 1.36, radius * .53, radius * .35, dockSurface, 0, radius * .30, -radius * .94, 1.4);
    box(dock, radius * .50, .9, .9, base, 0, radius * .41, -radius * .75);
  }
  return {
    root, dock, anchorY: 12, floorRadius: radius * 1.03 * visualScale * stretch,
    animate(state, seconds = 0, tracking = false) {
      const running = ['cleaning', 'returning'].includes(stateValue(state));
      stripe.material.emissiveIntensity = running ? (tracking ? 0.6 + 0.5 * Math.cos(seconds * 6) : 0.3) : 0;
    },
  };
}

export function isStorybookBlind(item) {
  return item.type === 'controlZone' && (item.visualKind === 'window' ||
    (!item.visualKind || item.visualKind === 'auto') && typeof item.entityId === 'string' && item.entityId.startsWith('cover.'));
}

export function makeStorybookDevice(item, context = {}) {
  const w = span(item.w, 42);
  const h = span(item.h, 42);
  const type = String(item.type ?? '');
  const kind = item.visualKind;
  if (type === 'cameraThumbnail' || type.startsWith('ui')) return null;
  if (type === 'presenceSwitch') return presenceSwitch(w, context);
  if (type === 'garageDoor') return garage(w, h);
  if (type === 'door' || kind === 'door') return hingedDoor(w);
  if (type === 'window') return aperture(w, true, Boolean(item.entityId));
  if (type === 'controlZone') {
    return isStorybookBlind(item)
      ? aperture(span(context.window?.w, w), false, true) : null;
  }
  if (type === 'wallUnit' || type === 'thermostat' || kind === 'climate') return wallPanel(item, w, context);
  if (type === 'airPurifier' || type === 'humidifier') return appliance(item, w, h);
  if (kind === 'vacuum' || /^cleaning-.*robot/.test(type)) return robot(item, w, h);
  if (type === 'windowFan') return fan(item, w, h, true);
  if (kind === 'fan' || /^fans-/.test(type)) return fan(item, w, h, false);
  if (kind === 'light' || item.lightForm || catalogItem(type)?.lightForm ||
      /^(?:lamp|ceilingLight|pendantLight|floorLamp|tableLamp|wallSconce)$/.test(type)) {
    return lamp(item, w, h, context);
  }
  return null;
}
