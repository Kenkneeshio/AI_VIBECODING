import * as THREE from 'three';

const FOLIAGE = {
  grass: ['#82976b', '#a1ac73', '#c0ba7d'],
  yucca: ['#608782', '#779d8c', '#a2b295'],
  sage: ['#728d75', '#91a48b', '#a4ac80'],
  iceplant: ['#748b62', '#9aaf79', '#c58e90'],
};

function blades(batch, x, y, z, size, phase, tones) {
  const positions = [];
  const uv = [];
  const indices = [];
  for (let i = 0; i < 8; i++) {
    const angle = phase + i * 2.399963;
    const height = size * (.53 + .25 * Math.cos(i * 2.1 + phase));
    const reach = size * (.56 + .24 * Math.sin(i * 1.7 + phase));
    const dx = Math.cos(angle), dz = Math.sin(angle);
    const width = size * (.06 + (i % 3) * .017);
    const base = positions.length / 3;
    positions.push(
      -dz * width * .4, -.25, dx * width * .4,
      dz * width * .4, -.25, -dx * width * .4,
      dx * reach * .43 - dz * width, height, dz * reach * .43 + dx * width,
      dx * reach * .43 + dz * width, height, dz * reach * .43 - dx * width,
      dx * reach, height * .9, dz * reach,
    );
    uv.push(0,0, 1,0, 0,.65, 1,.65, .5,1);
    indices.push(base,base+1,base+2, base+1,base+3,base+2, base+2,base+3,base+4);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const tone = tones[Math.floor(phase * 4) % tones.length];
  const material = batch.material?.(tone);
  if (material) material.side = THREE.DoubleSide;
  batch.add(geometry, tone, x, y, z);
}

export function addCoastalPlanting(batch, kind, x, y, z, size, phase) {
  if (kind === 'stone') {
    const stone = new THREE.IcosahedronGeometry(1, 1);
    const positions = stone.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const ax = positions.getX(i), ay = positions.getY(i), az = positions.getZ(i);
      const weathering = .89 + .11 * Math.sin(phase + ax * 8 + ay * 5 + az * 3);
      positions.setXYZ(i, ax * weathering * size, ay * size * .39, az * weathering * size * .64);
    }
    const indexed = Array.from({length: positions.count}, (_, i) => i);
    stone.setIndex(indexed);
    stone.computeVertexNormals();
    batch.add(stone, '#bbaa91', x, y + size * .14, z, phase);
    return;
  }
  const tones = FOLIAGE[kind];
  if (kind === 'grass' || kind === 'yucca') {
    blades(batch, x, y, z, size, phase, tones);
    return;
  }
  for (let i = 0; i < 4; i++) {
    const angle = phase + i * 2.399963;
    const radius = size * (.13 + i * .16);
    const dx = x + Math.cos(angle) * radius, dz = z + Math.sin(angle) * radius * .73;
    const top = kind === 'sage' ? size * .42 : size * .22;
    batch.ball(size * .54, top, size * .44, tones[i % 2], dx, y + top * .62, dz);
    if (kind === 'iceplant' && i % 2 === 0) {
      batch.ball(size * .135, size * .07, size * .125, tones[2], dx, y + top * 1.64, dz);
    }
  }
}
