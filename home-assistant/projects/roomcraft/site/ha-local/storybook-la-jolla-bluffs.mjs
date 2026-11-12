import {BufferGeometry, Color, CylinderGeometry, DodecahedronGeometry, Float32BufferAttribute, MathUtils, Quaternion, Vector3} from 'three';

const HEADLANDS = Object.freeze([
  {center:-.43, west:.183, east:.112, height:59, phase:2.8, cave:.37, cuts:[[.72, .094, 11], [-.04, .118, 14], [-.65, .104, 9]]},
  {center:-.145, west:.091, east:.123, height:48, phase:1.1, cuts:[[.49, .105, 11], [-.27, .082, 8]]},
]);

// Front to back. The toe and the wave-cut platform sit low; recessed joints
// above them give way to a rounded, planted upland that meets the beach again.
const CROSS_SECTION = [
  [0, -.02, '#7f664b'],
  [.045, .022, '#987553'],
  [.083, .102, '#b28b61'],
  [.105, .144, '#bc946b'],
  [.157, .124, '#a47b55'],
  [.255, .151, '#b68b60'],
  [.330, .207, '#cfa36d'],
  [.368, .228, '#b68d62'],
  [.470, .213, '#c69b6c'],
  [.568, .267, '#d6a677'],
  [.595, .287, '#c39c6d'],
  [.711, .278, '#c99a67'],
  [.799, .344, '#ddb17b'],
  [.827, .365, '#c8a06d'],
  [.921, .364, '#ceaa71'],
  [.971, .412, '#d9b683'],
  [1.004, .465, '#86804d'],
  [1.019, .549, '#738052'],
  [.977, .650, '#6f7e48'],
  [.883, .746, '#788754'],
  [.750, .842, '#85905b'],
  [.568, .937, '#919461'],
  [.375, 1.029, '#a39c67'],
  [.204, 1.115, '#b0a26f'],
  [.082, 1.203, '#c2ad7d'],
  [.023, 1.276, '#ccba8c'],
  [0, 1.34, '#d5b890'],
];
const TERRAIN = '#fff9e9';
const SAND_TINT = new Color('#e4c797');
const PALETTE = CROSS_SECTION.map(([, , color]) => new Color(color));
const CAP_ROW = 17;
const SECTIONS = 68;
const UP = new Vector3(0, 1, 0);

function layeredMaterial(batch, sandstone) {
  const material = batch.material?.(TERRAIN);
  if (!material) return;
  material.color?.set('#fffbec');
  material.vertexColors = true;
  material.customProgramCacheKey = () => sandstone ? 'la-jolla-rock-albedo' : 'la-jolla-rock-procedural';
  material.onBeforeCompile = shader => {
    if (sandstone) shader.uniforms.bluffAlbedo = {value:sandstone};
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        varying vec3 bluffPosition;
        attribute float stoneExposure;
        attribute float sandBlend;
        varying float bluffStone;
        varying float bluffSand;`)
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>
        bluffPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
        bluffStone = stoneExposure;
        bluffSand = sandBlend;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 bluffPosition;
        varying float bluffStone;
        varying float bluffSand;
        ${sandstone ? 'uniform sampler2D bluffAlbedo;' : ''}
        float bluffHash(vec2 p) {
          p = fract(p * vec2(.1031,.11369));
          p += dot(p,p.yx + 27.31);
          return fract((p.x+p.y)*p.x);
        }
        float bluffNoise(vec2 p) {
          vec2 i=floor(p), f=fract(p);
          f=f*f*(3.0-2.0*f);
          return mix(mix(bluffHash(i),bluffHash(i+vec2(1.,0.)),f.x),
            mix(bluffHash(i+vec2(0.,1.)),bluffHash(i+vec2(1.,1.)),f.x),f.y);
        }
        float coastGrainHash(vec2 p) {
          p=fract(p*vec2(.1031,.11369));
          p+=dot(p,p.yx+19.19);
          return fract((p.x+p.y)*p.x);
        }
        float coastGrain(vec2 p) {
          vec2 i=floor(p), f=fract(p);
          f=f*f*(3.0-2.0*f);
          return mix(mix(coastGrainHash(i),coastGrainHash(i+vec2(1.,0.)),f.x),
            mix(coastGrainHash(i+vec2(0.,1.)),coastGrainHash(i+vec2(1.,1.)),f.x),f.y);
        }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        vec3 p = bluffPosition;
        vec2 weather = p.xz + p.y * vec2(.39,.17);
        float patches = .65 * bluffNoise(weather * .082) + .35 * bluffNoise(weather * .25);
        float grit = bluffNoise(weather * .63);
        float beds = sin(p.y * 1.52 + p.x * .082 + .61 * sin(p.x * .32));
        float detail = 1.0 - smoothstep(.8, 2.9, length(fwidth(p)));
        float bluffFinish = .84 + .32 * patches + detail * (.135 * (grit - .42) + .043 * beds * bluffStone);
        float sandPixel = max(length(dFdx(p.xz)),length(dFdy(p.xz)));
        if (bluffSand > .001) {
          float sandPatches = coastGrain(p.xz * .041);
          float sandGrain = coastGrain(p.xz * .67);
          float sandRake = sin(p.z * 1.3 + coastGrain(p.xz * .085) * 6.5);
          float sandFine = 1.0 - smoothstep(1.0,4.0,sandPixel);
          float sandFinish = .95 + .12 * sandPatches + sandFine * (.15 * (sandGrain - .5) + .025 * sandRake);
          bluffFinish = mix(bluffFinish, sandFinish, bluffSand);
        }
        diffuseColor.rgb *= bluffFinish;
        ${sandstone ? `
        vec3 rockNormal = abs(cross(dFdx(p),dFdy(p)));
        rockNormal /= max(.0001, max(rockNormal.x, max(rockNormal.y, rockNormal.z)));
        vec3 axes = rockNormal * rockNormal * rockNormal;
        axes /= max(.001, axes.x + axes.y + axes.z);
        vec3 mapP = p * .015;
        vec3 stone = axes.x * texture2D(bluffAlbedo, mapP.zy).rgb
          + axes.y * texture2D(bluffAlbedo, mapP.xz).rgb
          + axes.z * texture2D(bluffAlbedo, mapP.xy).rgb;
        float weathering = dot(stone, vec3(.2126, .7152, .0722));
        diffuseColor.rgb *= mix(1.0, .72 + .70 * weathering, bluffStone);
        ` : ''}`);
  };
}

function shoreRecess(spec, u, height, depth) {
  const radius = Math.hypot((u - (spec.cave ?? 4)) / .16, (height - .106) / .28);
  return (1 - MathUtils.smoothstep(radius, .05, 1)) * (1 - MathUtils.smoothstep(depth, .21, .36));
}

function weatheredColor(row, u, spec) {
  const color = PALETTE[row].clone();
  const {phase} = spec;
  const seam = Math.sin(u * 8.2 + row * .41 + phase) * .055 +
    Math.sin(u * 22.7 - row * .83 + phase) * .041;
  if (row < CAP_ROW) {
    const [height, depth] = CROSS_SECTION[row];
    return color.multiplyScalar(1 + seam - .67 * shoreRecess(spec, u, height, depth));
  }
  color.lerp(PALETTE[CAP_ROW], .15 + .12 * Math.sin(u * 13 + row));
  return color.multiplyScalar(1 + seam * 1.7);
}

function form(spec, offset, coast, farZ, sampleSand, focusX, u, row) {
  const [height, depth] = CROSS_SECTION[row];
  const phase = spec.phase;
  const shoulder = .48 + .11 * Math.sin(phase + u * 1.4) + .09 * MathUtils.smoothstep(depth, .36, .9);
  const silhouette = 1 - MathUtils.smoothstep(Math.abs(u), shoulder, 1);
  const relief = silhouette * (1 + .105 * Math.sin(u * 5.2 + phase) + .045 * Math.cos(u * 16 + phase));
  const indent = Math.sin(u * 17 + phase) * 2.4 + Math.sin(u * 34.6 - phase) * 1.34;
  const ridge = (Math.sin(u * 8.2 + phase) * 5 + indent) * silhouette;
  const toe = coast + 1.5 + ridge + 18 * (1 - silhouette);
  const run = MathUtils.clamp(farZ - 25 - toe, 27, 124);
  const cave = shoreRecess(spec, u, height, depth) * 21;
  const gully = spec.cuts.reduce((sum, [center, width, amplitude]) =>
    sum + (1 - MathUtils.smoothstep(Math.abs(u - center), width * .28, width)) * amplitude, 0);
  const erosion = gully * (1 - MathUtils.smoothstep(depth, .28, .72)) * MathUtils.smoothstep(row, 1, 5);
  const grain = Math.sin(u * 12.8 + phase) * .016 + Math.sin(u * 39 - phase + row * .73) * .008;
  const taper = Math.min(1, relief * 2.8);
  const apron = MathUtils.smoothstep(depth, .74, 1.34);
  const end = Math.min(farZ - 16, toe + run * (1.31 + .055 * Math.sin(u * 12 + phase)));
  const landDepth = depth <= .74 ? toe + run * depth :
    MathUtils.lerp(toe + run * .74, end, (depth - .74) / .6);
  const z = landDepth + (cave + erosion + ridge * Math.sin(row * .55) * .69) * taper * (1 - apron);
  const beach = sampleSand(offset, z);
  const strata = grain * MathUtils.smoothstep(height, 0, .10) * (1 - apron);
  const rise = relief * spec.height * (height + strata) - erosion * .24 - .19;
  const border = Math.max(MathUtils.smoothstep(Math.abs(u), .64, .98), MathUtils.smoothstep(depth, .91, 1.28));
  const blend = 1 - (1 - border) * MathUtils.smoothstep(rise, .05, 4.5);
  return {
    point:[focusX + offset, beach.height + rise, z],
    tint:weatheredColor(row, u, spec).lerp(beach.color, blend),
    stone:(1 - MathUtils.smoothstep(row, CAP_ROW - 2, CAP_ROW)) * (1 - blend),
    blend,
  };
}

function ribbon(batch, outer, inner, color) {
  const positions = [], uv = [], index = [];
  for (let segment = 0; segment < outer.length; segment++) {
    const edge = outer[segment], inland = inner[segment];
    positions.push(...edge, ...inland);
    uv.push(edge[0] / 50, edge[2] / 50, inland[0] / 50, inland[2] / 50);
    if (!segment) continue;
    const a = (segment - 1) * 2, b = segment * 2;
    index.push(a, a + 1, b, b, a + 1, b + 1);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  geometry.setIndex(index);
  geometry.computeVertexNormals();
  batch.add(geometry, color, 0, 0, 0);
}

function addTerrain(batch, rows, sampleSand, focusX) {
  const vertices = rows.flat();
  const stride = rows[0].length;
  const faces = [];
  for (let row = 1; row < rows.length; row++) for (let segment = 1; segment < stride; segment++) {
    const inner = row * stride + segment;
    const outer = inner - stride;
    faces.push(outer - 1, inner - 1, outer, outer, inner - 1, inner);
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices.flatMap(({point}) => point), 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(vertices.flatMap(({point:[x, , z]}) => [x / 50, z / 50]), 2));
  geometry.setAttribute('color', new Float32BufferAttribute(vertices.flatMap(({tint}) => tint.toArray()), 3));
  geometry.setAttribute('stoneExposure', new Float32BufferAttribute(vertices.map(({stone}) => stone), 1));
  geometry.setAttribute('sandBlend', new Float32BufferAttribute(vertices.map(({blend}) => blend), 1));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  const normal = geometry.attributes.normal;
  const n = new Vector3(), sandNormal = new Vector3();
  for (const [index, {point:[x, , z], blend}] of vertices.entries()) {
    if (blend < .65) continue;
    const offset = x - focusX;
    sandNormal.set((sampleSand(offset - 2, z).height - sampleSand(offset + 2, z).height) * .25, 1,
      (sampleSand(offset, z - 2).height - sampleSand(offset, z + 2).height) * .25).normalize();
    n.fromBufferAttribute(normal, index).lerp(sandNormal, MathUtils.smoothstep(blend, .65, 1)).normalize();
    normal.setXYZ(index, n.x, n.y, n.z);
  }
  batch.add(geometry, TERRAIN, 0, 0, 0);
}

function between(a, b, t, rise = 0) {
  return [MathUtils.lerp(a[0], b[0], t), MathUtils.lerp(a[1], b[1], t) + rise,
    MathUtils.lerp(a[2], b[2], t)];
}

function branch(batch, start, end, foot, tip, color) {
  const axis = new Vector3(end[0] - start[0], end[1] - start[1], end[2] - start[2]);
  const length = axis.length();
  const segment = new CylinderGeometry(tip, foot, length, 6);
  segment.applyQuaternion(new Quaternion().setFromUnitVectors(UP, axis.normalize()));
  batch.add(segment, color, ...between(start, end, .5));
}

function cypress(batch, [x, y, z], size, turn) {
  const lean = -1.3 + .45 * Math.sin(turn);
  const world = (u, v, w) => [x + size * u, y + size * v, z + size * w];
  const root = world(0, -.012, 0);
  const bend = world(-.063, .28, -.13);
  const fork = world(.075, .59, -.26);
  const wood = '#88785a';
  branch(batch, root, bend, size * .075, size * .057, wood);
  branch(batch, bend, fork, size * .062, size * .034, wood);
  for (let i = 0; i < 5; i++) {
    const angle = lean + (i - 2) * .55;
    const reach = .46 + .27 * Math.sin(turn + i * 2.1) ** 2;
    const spreadX = Math.sin(angle) * reach;
    const spreadZ = Math.cos(angle) * reach;
    const twig = world(spreadX, .73 + .09 * (i % 3), spreadZ - .38);
    branch(batch, i % 2 === 0 ? bend : fork, twig, size * .037, size * .010, wood);
    for (let spray = 0; spray < 3; spray++) {
      const leaf = new DodecahedronGeometry(1, 1);
      const radius = size * (.17 + .045 * (2 - spray));
      leaf.scale(radius * (spray === 1 ? 1.45 : 1.22), radius * .28, radius);
      const placement = world(spreadX * (.73 + spray * .21), .81 + .08 * (i % 3) + .043 * spray,
        spreadZ - .38 + .09 * spray);
      const color = ['#56724f', '#7a8c55', '#879c58'][(i + spray) % 3];
      batch.add(leaf, color, ...placement, angle);
    }
  }
}

function agave(batch, point, size, turn) {
  for (let index = 0; index < 7; index++) {
    const outer = index % 3 !== 0;
    const leaf = new BufferGeometry();
    leaf.setAttribute('position', new Float32BufferAttribute([
      0, 0, 0, -size * .12, size * .21, size * .32, 0, size * .38, size * .45,
      size * .12, size * .21, size * .32, 0, size * (outer ? .54 : .83), size * (outer ? .78 : .49),
    ], 3));
    leaf.setIndex([0, 1, 2, 0, 2, 3, 1, 4, 2, 2, 4, 3, 0, 3, 1, 1, 3, 4]);
    leaf.computeVertexNormals();
    batch.add(leaf, ['#648a80', '#739e8d', '#879f82'][index % 3], ...point, turn + index * 2.4);
  }
}

function scrub(batch, [x, y, z], size, angle, flowers) {
  batch.ball(size * 1.06, size * .20, size * .81, '#728457', x, y + size * .04, z);
  for (let i = 0; i < 4; i++) {
    const bearing = angle + i * 2.39996;
    const radius = size * (.35 + .09 * i);
    const leafX = x + Math.cos(bearing) * radius, leafZ = z + Math.sin(bearing) * radius;
    const leaf = size * (.33 + .085 * (i % 2));
    const leafY = y + size * (.15 + .055 * (i % 3));
    batch.ball(leaf, leaf * .58, leaf * .91, i % 2 ? '#9baa69' : '#859a60', leafX, leafY, leafZ);
    if (flowers && i % 2 === 0) {
      batch.ball(leaf * .31, leaf * .18, leaf * .26, '#d5a276', leafX, leafY + leaf * .5, leafZ);
    }
  }
}

function addBluffTop(batch, mesh, spec) {
  const crown = mesh[CAP_ROW], hillside = mesh[CAP_ROW + 1];
  const trailOuter = [], trailInner = [];
  for (let index = 9; index <= SECTIONS - 9; index++) {
    const sway = .09 * Math.sin(index * .18 + spec.phase);
    trailOuter.push(between(crown[index], hillside[index], .57 + sway, .10));
    trailInner.push(between(crown[index], hillside[index], .88 + sway, .10));
  }
  ribbon(batch, trailOuter, trailInner, '#c0b387');

  for (let index = 8; index <= SECTIONS - 8; index += 3) {
    const rhythm = .5 + .5 * Math.sin(index * 2.383 + spec.phase);
    const onFace = index % 2 === 0;
    const base = onFace ? mesh[CAP_ROW - 1] : hillside;
    const next = onFace ? crown : mesh[CAP_ROW + 2];
    const u = .11 + rhythm * .44;
    const size = 2.1 + rhythm * 4.8;
    scrub(batch, between(base[index], next[index], u, .12), size, index * 1.49, index % 4 === 0);
  }

  for (const [index, size, turn] of [[19, 18, .7], [35, 22.5, 2.4], [51, 15, 1.7]]) {
    const point = between(hillside[index], mesh[CAP_ROW + 2][index], .29, .16);
    cypress(batch, point, size * (.93 + spec.phase * .046), turn + spec.phase);
  }
  for (const [index, size] of [[23, 7.6], [40, 9.7], [53, 6.5]]) {
    const point = between(mesh[CAP_ROW - 1][index], crown[index], .61, .18);
    agave(batch, point, size, spec.phase + index);
  }

  const posts = [];
  for (let index = 13; index <= SECTIONS - 13; index += 8) {
    const point = between(crown[index], hillside[index], .41, .18);
    const [x, y, z] = point;
    batch.box(.85, 3.5, .85, '#a38b70', x, y + 1.8, z);
    posts.push([x, y + 2.92, z]);
  }
  for (let index = 1; index < posts.length; index++) {
    branch(batch, posts[index - 1], posts[index], .27, .27, '#a38b70');
  }
}

/** Build continuous headlands on the animated shoreline's own coordinates. */
export function buildLaJollaBluffs(batch, {
  focusX, span, farZ, groundY, shoreZ, sandstone,
  sampleSand = () => ({height:groundY + .55, color:SAND_TINT}),
}) {
  layeredMaterial(batch, sandstone);
  for (const spec of HEADLANDS) {
    const mesh = CROSS_SECTION.map(() => []);
    for (let index = 0; index <= SECTIONS; index++) {
      const u = index / SECTIONS * 2 - 1;
      const radius = u < 0 ? spec.west : spec.east;
      const offset = span * (spec.center + radius * u);
      const coast = shoreZ(offset);
      for (const [row, positions] of mesh.entries()) {
        positions.push(form(spec, offset, coast, farZ, sampleSand, focusX, u, row));
      }
    }
    addTerrain(batch, mesh, sampleSand, focusX);
    addBluffTop(batch, mesh.map(row => row.map(({point}) => point)), spec);
  }
}
