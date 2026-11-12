import {BufferGeometry, Color, CylinderGeometry, DodecahedronGeometry, Float32BufferAttribute, MathUtils, Quaternion, Vector3} from 'three';

const COVE_BLUFF = Object.freeze({
  center:-.29,
  west:.315,
  east:.265,
  height:56,
  phase:2.4,
  cave:-.53,
  cuts:[[-.72, .046, 9], [-.40, .054, 13], [-.14, .063, 7], [.18, .055, 8], [.53, .058, 11], [.78, .048, 6]],
});

// Front to back. The toe and the wave-cut platform sit low; recessed joints
// above them give way to a rounded, planted upland that meets the beach again.
const CROSS_SECTION = [
  [0, -.048, '#8b7257'],
  [.007, -.017, '#8c7358'],
  [.015, .017, '#927759'],
  [.035, .063, '#987553'],
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
const DRY_BANK = new Color('#ad9b6e');
const SAGE_BANK = new Color('#8a9566');
const CAP_ROW = CROSS_SECTION.findIndex(([, depth]) => depth === .549);
const SECTIONS = 132;
const ACCESS_COLUMN = 86;
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
        float bedBend = .96 * bluffNoise(weather * .046) + .71 * sin(p.x * .060 + p.z * .029);
        float bedLine = sin(p.y * 1.47 + p.x * .063 + p.z * .055 + bedBend);
        float bedExposure = smoothstep(.22, .69, bluffNoise(weather * .11));
        float detail = 1.0 - smoothstep(.8, 2.9, length(fwidth(p)));
        float bluffFinish = .84 + .32 * patches + detail * (.135 * (grit - .42) + .048 * bedLine * bedExposure * bluffStone);
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
  const radius = Math.hypot((u - spec.cave) / .075, (height - .106) / .28);
  return (1 - MathUtils.smoothstep(radius, .05, 1)) * (1 - MathUtils.smoothstep(depth, .21, .36));
}

function weatheredColor(row, u, spec) {
  const color = PALETTE[row].clone();
  const {phase} = spec;
  const [height, depth] = CROSS_SECTION[row];
  const seam = Math.sin(u * 8.2 + row * .41 + phase) * .055 +
    Math.sin(u * 22.7 - row * .83 + phase) * .041;
  if (depth < .39) return color.multiplyScalar(1 + seam - .67 * shoreRecess(spec, u, height, depth));

  // Recede from the lip through interrupted grass and sandy brush on the
  // apron. The plant line moves up and down the profile with the runoff ribs.
  const margin = .50 + .095 * Math.sin(u * 10.3 + phase) + .05 * Math.sin(u * 27.4 - phase);
  const dryBank = MathUtils.smoothstep(depth, .72, 1.29);
  const pattern = .5 + .30 * Math.sin(u * 14.3 + depth * 8.4 + phase) +
    .20 * Math.sin(u * 36.9 - depth * 7.5);
  const cover = MathUtils.smoothstep(depth, margin - .11, margin + .10) * (1 - dryBank * .64);
  if (row >= CAP_ROW - 1) {
    color.lerp(DRY_BANK, (.28 + .48 * dryBank) * pattern);
  }
  color.lerp(SAGE_BANK, cover * (.23 + .34 * (1 - pattern)));
  return color.multiplyScalar(1 + seam * 1.38);
}

function inlandDepth(toe, run, end, depth) {
  const apronStart = .68;
  const apronEnd = 1.34;
  if (depth <= apronStart) return toe + run * depth;
  const entry = toe + run * apronStart;
  const length = end - entry;
  const t = (depth - apronStart) / (apronEnd - apronStart);
  const slopeIn = Math.min(run * (apronEnd - apronStart), length * 1.7);
  const slopeOut = length * .78;
  const ease = t * t * (3 - 2 * t);
  return entry + length * ease + t * (1 - t) * ((1 - t) * slopeIn - t * slopeOut);
}

function shelfWeight(u, center, inner, outer) {
  return 1 - MathUtils.smootherstep(Math.abs(u - center), inner, outer);
}

function faceProfile(u, height, depth, phase) {
  // Wave-cut platforms hold the west point at low tide. The east shoulder
  // preserves smaller upper ledges, with worn faces between the two.
  const west = shelfWeight(u, -.49, .09, .29) * (1 - MathUtils.smoothstep(height, .30, .67));
  const east = shelfWeight(u, .52, .075, .27) * MathUtils.smoothstep(height, .07, .24) *
    (1 - MathUtils.smoothstep(height, .58, .90));
  const seam = shelfWeight(u, -.18, .045, .24) * MathUtils.smoothstep(height, .32, .45) *
    (1 - MathUtils.smoothstep(height, .56, .78));
  const face = MathUtils.smootherstep(height, .047, .112) * (1 - MathUtils.smootherstep(height, .79, .98));
  const grade = .028 + .409 * height;
  const shelves = MathUtils.clamp(west + east + seam, 0, 1);
  const shift = (.51 + .49 * Math.sin(u * 6.3 + height * 7.2 + phase)) * (.08 + .16 * (1 - shelves));
  const graded = MathUtils.lerp(depth, grade, face * (.82 - .71 * shelves + shift * .2));
  const drift = -.049 * u + .047 * Math.sin(u * 8.6 + depth * 8.2 + phase) +
    .024 * Math.sin(u * 21.1 - depth * 10.7);
  return {depth:graded, dip:drift * face};
}

function form(spec, offset, coast, roadEdge, sampleSand, focusX, u, row) {
  const [height, depth] = CROSS_SECTION[row];
  const phase = spec.phase;
  const bay = 1 - MathUtils.smootherstep(Math.abs(u), .09, .58);
  const shoulder = .64 + .07 * Math.sin(phase + u * 1.4) + .08 * MathUtils.smoothstep(depth, .36, .9);
  const silhouette = 1 - MathUtils.smootherstep(Math.abs(u), shoulder, 1);
  const relief = silhouette * (1 - .22 * bay - .10 * u + .085 * Math.sin(u * 5.2 + phase) + .04 * Math.cos(u * 16 + phase));
  const indent = Math.sin(u * 17 + phase) * 2.4 + Math.sin(u * 34.6 - phase) * 1.34;
  const ridge = (Math.sin(u * 8.2 + phase) * 5 + indent) * silhouette * (1 - .66 * bay);
  // The brow stays connected around the basin. Its toe wraps around the pocket
  // beach and meets wave-cut ledges on the shoulders at the same water level.
  const toe = coast + 1.5 + 24 * bay + ridge + 18 * (1 - silhouette);
  const run = Math.min(MathUtils.clamp(roadEdge - 25 - toe, 27, 124), Math.max(1, roadEdge - 16 - toe));
  const cave = shoreRecess(spec, u, height, depth) * MathUtils.smoothstep(height, .013, .076) * 21;
  const gully = spec.cuts.reduce((sum, [center, width, amplitude]) =>
    sum + (1 - MathUtils.smoothstep(Math.abs(u - center), width * .28, width)) * amplitude, 0);
  const erosion = gully * (1 - MathUtils.smoothstep(depth, .28, .72)) * MathUtils.smoothstep(height, .025, .157);
  const grain = Math.sin(u * 12.8 + phase) * .016 + Math.sin(u * 39 - phase + row * .73) * .008;
  const taper = Math.min(1, relief * 2.8);
  const apron = MathUtils.smoothstep(depth, .74, 1.34);
  const end = Math.min(roadEdge - 16, toe + run * (1.31 + .055 * Math.sin(u * 12 + phase)));
  const beds = faceProfile(u, height, depth, phase);
  const strataReach = MathUtils.smootherstep(height, .015, .12);
  const flutes = ridge * Math.sin(row * .38 + u * 3.8) * strataReach * .69;
  const z = inlandDepth(toe, run, end, beds.depth) + (cave + erosion + flutes) * taper * (1 - apron);
  const beach = sampleSand(offset, z);
  const strata = grain * MathUtils.smoothstep(height, 0, .10) * (1 - apron);
  const grading = 1 - apron * (.16 + .09 * Math.cos(u * 9.8 + phase));
  const rise = relief * spec.height * (height * grading + strata + beds.dip) - erosion * .24 - .19;
  const border = Math.max(MathUtils.smootherstep(Math.abs(u), .68, .985), MathUtils.smootherstep(depth, .88, 1.29));
  const blend = 1 - (1 - border) * MathUtils.smootherstep(rise, .05, 6.8);
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

function duneTuft(batch, [x, y, z], size, phase) {
  const colors = ['#a4a575', '#c6b37c', '#8a9567'];
  const front = [0, 1, 3, 0, 3, 2, 1, 4, 3, 2, 3, 5, 3, 4, 5];
  const back = [6, 9, 7, 6, 8, 9, 7, 9, 10, 8, 11, 9, 9, 11, 10];
  for (let blade = 0; blade < 3; blade++) {
    const angle = phase + blade * 2.39;
    const depth = size * (.33 + blade * .08);
    const length = size * (1.10 - blade * .13);
    const width = size * .085;
    const leaf = new BufferGeometry();
    const points = [-width, 0, 0, width, 0, 0,
      -width * .7, length * .54, depth * .22, 0, length * .54, depth * .34,
      width * .7, length * .54, depth * .22, 0, length, depth];
    leaf.setAttribute('position', new Float32BufferAttribute([...points, ...points], 3));
    leaf.setIndex([...front, ...back]);
    leaf.computeVertexNormals();
    batch.add(leaf, colors[blade], x + Math.cos(angle) * size * .20, y, z + Math.sin(angle) * size * .20, angle);
  }
}

function sageBrush(batch, [x, y, z], size, phase, dry) {
  const foliage = dry ? ['#8d986c', '#aab17e', '#b3ad75'] : ['#758e6c', '#8ba17c', '#9eb38b'];
  for (let lobe = 0; lobe < 5; lobe++) {
    const bearing = phase + lobe * 2.4;
    const spread = size * (.16 + .108 * lobe);
    const leaf = new DodecahedronGeometry(1);
    const radius = size * (.43 - .046 * lobe);
    leaf.scale(radius, radius * (.44 + .12 * (lobe % 2)), radius * .73);
    batch.add(leaf, foliage[lobe % foliage.length],
      x + Math.cos(bearing) * spread, y + radius * .46, z + Math.sin(bearing) * spread, bearing);
  }
}

function sandstoneChip(batch, [x, y, z], size, phase) {
  const chip = new DodecahedronGeometry(1);
  chip.scale(size * 1.2, size * (.17 + .05 * Math.sin(phase)), size * .65);
  chip.rotateX(-.16);
  const colors = ['#a89976', '#bbab89', '#c6b38c'];
  batch.add(chip, colors[Math.floor(phase) % colors.length], x, y - size * .04, z, phase);
}

function addBackshorePlants(batch, mesh, spec, roadEdgeAt) {
  const phase = spec.phase;
  for (let index = 6; index <= SECTIONS - 6; index += 3) {
    const cluster = .5 + .31 * Math.sin(index * .34 + phase) + .19 * Math.cos(index * 1.09);
    const footprint = .5 + .5 * Math.cos(index * 2.37 + phase);
    const row = CAP_ROW + (footprint < .56 ? 4 : 6);
    const point = between(mesh[row][index], mesh[row + 1][index], footprint, .065);
    const [x, , z] = point;
    const size = 2.3 + 4.0 * cluster;
    if (z + size * 1.6 + 3 > roadEdgeAt(x)) continue;
    if (cluster > .54) {
      sageBrush(batch, point, size, index * 2.53, row > CAP_ROW + 4);
      const outer = between(mesh[row + 1][index + 1], mesh[row + 2][index + 1], .49, .05);
      if (outer[2] + size + 3 < roadEdgeAt(outer[0])) duneTuft(batch, outer, size * .70, index * 2.44);
    } else if (cluster > .34) {
      duneTuft(batch, point, size, index * 2.44);
    } else {
      sandstoneChip(batch, point, size * 1.07, index * .91 + phase);
    }
  }
}

function profileHeight(profile, z) {
  let highest = -Infinity;
  for (let i = 1; i < profile.length; i++) {
    const [, y0, z0] = profile[i - 1];
    const [, y1, z1] = profile[i];
    if (z0 === z1 || z < Math.min(z0, z1) || z > Math.max(z0, z1)) continue;
    highest = Math.max(highest, MathUtils.lerp(y0, y1, (z - z0) / (z1 - z0)));
  }
  return highest;
}

function addCoveStairs(batch, mesh, sampleSand, focusX) {
  const profile = mesh.map(row => row[ACCESS_COLUMN]);
  const [x, topY, topZ] = between(profile[CAP_ROW], profile[CAP_ROW + 1], .72, .25);
  const footZ = profile[0][2] - 6.5;
  const footY = sampleSand(x - focusX, footZ).height;
  const steps = 17;
  const run = (topZ - footZ) / steps;
  let previous = footY;
  const rail = [];
  for (let i = 1; i <= steps; i++) {
    const z = footZ + (i - .5) * run;
    const highZ = z + run * .5;
    const ground = sampleSand(x - focusX, z).height;
    const tread = Math.max(previous + .1, MathUtils.lerp(footY, topY, i / steps), profileHeight(profile, highZ) + .25);
    const height = tread - ground + .2;
    batch.box(7.4, height, run + .16, i % 2 ? '#b7aa8f' : '#c0b195', x, tread - height / 2, z);
    batch.box(7.7, .2, .58, '#d8c6a5', x, tread + .1, z - run * .5 + .2);
    if (i === 1 || i === steps || i % 5 === 0) {
      batch.box(.44, 3.1, .44, '#927e65', x + 3.53, tread + 1.55, z);
      rail.push([x + 3.53, tread + 3.0, z]);
    }
    previous = tread;
  }
  for (let index = 1; index < rail.length; index++) branch(batch, rail[index - 1], rail[index], .18, .18, '#927e65');
}

function addBluffTop(batch, mesh, spec) {
  const crown = mesh[CAP_ROW], hillside = mesh[CAP_ROW + 1];
  const trailOuter = [], trailInner = [];
  for (let index = 13; index <= SECTIONS - 13; index++) {
    const sway = .09 * Math.sin(index * .18 + spec.phase);
    trailOuter.push(between(crown[index], hillside[index], .57 + sway, .10));
    trailInner.push(between(crown[index], hillside[index], .88 + sway, .10));
  }
  ribbon(batch, trailOuter, trailInner, '#c0b387');

  for (let index = 13; index <= SECTIONS - 13; index += 4) {
    const rhythm = .5 + .5 * Math.sin(index * 2.383 + spec.phase);
    const onFace = index % 2 === 0;
    const base = onFace ? mesh[CAP_ROW - 1] : hillside;
    const next = onFace ? crown : mesh[CAP_ROW + 2];
    const u = .11 + rhythm * .44;
    const size = 2.1 + rhythm * 4.8;
    scrub(batch, between(base[index], next[index], u, .12), size, index * 1.49, index % 4 === 0);
  }

  for (const [index, size, turn] of [[20, 16, .6], [33, 19, 1.9], [50, 16, 2.4], [74, 19, 1.7], [92, 22, 2.8], [112, 16, 4.1]]) {
    const point = between(hillside[index], mesh[CAP_ROW + 2][index], .29, .16);
    cypress(batch, point, size * (.93 + spec.phase * .046), turn + spec.phase);
  }
  for (const [index, size] of [[25, 7.6], [39, 9.7], [55, 6.5], [71, 9.6], [83, 7.5], [106, 7.2]]) {
    const point = between(mesh[CAP_ROW - 1][index], crown[index], .61, .18);
    agave(batch, point, size, spec.phase + index);
  }

  for (const [start, end] of [[17, ACCESS_COLUMN - 2], [ACCESS_COLUMN + 2, SECTIONS - 17]]) {
    let previous;
    for (let index = start; ; index = Math.min(end, index + 9)) {
      const [x, y, z] = between(crown[index], hillside[index], .41, .18);
      const post = [x, y + 2.92, z];
      batch.box(.85, 3.5, .85, '#a38b70', x, y + 1.8, z);
      if (previous) branch(batch, previous, post, .27, .27, '#a38b70');
      if (index === end) break;
      previous = post;
    }
  }
}

/** Build the continuous bluff and retain the pocket beach on the shared coastline. */
export function buildLaJollaBluffs(batch, {
  focusX, span, farZ, groundY, shoreZ, sandstone,
  sampleSand = () => ({height:groundY + .55, color:SAND_TINT}),
  roadEdgeAt = () => farZ,
}) {
  layeredMaterial(batch, sandstone);
  const mesh = CROSS_SECTION.map(() => []);
  for (let index = 0; index <= SECTIONS; index++) {
    const u = index / SECTIONS * 2 - 1;
    const radius = u < 0 ? COVE_BLUFF.west : COVE_BLUFF.east;
    const offset = span * (COVE_BLUFF.center + radius * u);
    const coast = shoreZ(offset);
    const edge = roadEdgeAt(focusX + offset);
    for (const [row, positions] of mesh.entries()) {
      positions.push(form(COVE_BLUFF, offset, coast, edge, sampleSand, focusX, u, row));
    }
  }
  addTerrain(batch, mesh, sampleSand, focusX);
  const terrain = mesh.map(row => row.map(({point}) => point));
  addBluffTop(batch, terrain, COVE_BLUFF);
  addBackshorePlants(batch, terrain, COVE_BLUFF, roadEdgeAt);
  addCoveStairs(batch, terrain, sampleSand, focusX);
}
