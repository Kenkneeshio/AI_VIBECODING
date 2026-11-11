import * as THREE from 'three';
import {Line2} from 'three/addons/lines/Line2.js';
import {LineGeometry} from 'three/addons/lines/LineGeometry.js';
import {LineMaterial} from 'three/addons/lines/LineMaterial.js';

const AMBER = '#ffce84';
const CYAN = '#a8f5ff';
const NAVY = '#10242e';

function lineMaterial(color, linewidth, extra) {
  return new LineMaterial({color, linewidth, transparent: true, depthTest: false,
    depthWrite: false, toneMapped: false, ...extra});
}

function line(scene, points, materials, order) {
  const geometry = new LineGeometry();
  geometry.setPositions(points.flatMap(({x,y}) => [x, 0.5, y]));
  for (const [index, material] of materials.entries()) {
    const stroke = new Line2(geometry, material);
    if (index === 0 && material.dashed) stroke.computeLineDistances();
    stroke.renderOrder = order + index;
    scene.add(stroke);
  }
}

function fill(scene, points, material, order) {
  const geometry = new THREE.BufferGeometry().setFromPoints(
    points.map(({x,y}) => new THREE.Vector3(x, 0.5, y)));
  geometry.setIndex(THREE.ShapeUtils.triangulateShape(
    points.map(({x,y}) => new THREE.Vector2(x, y)), []).flat());
  const mesh = new THREE.Mesh(geometry, material);
  mesh.renderOrder = order;
  scene.add(mesh);
}

export function createStorybookCoverage() {
  const scene = new THREE.Scene();
  const fillOptions = {side: THREE.DoubleSide, transparent: true, depthTest: false,
    depthWrite: false, toneMapped: false};
  const beamFill = new THREE.MeshBasicMaterial({...fillOptions, color: AMBER, opacity: 0.13});
  const originFill = new THREE.MeshBasicMaterial({...fillOptions, color: NAVY, opacity: 0.95});
  const casing = lineMaterial(NAVY, 4.6, {opacity: 0.8});
  const beam = lineMaterial(AMBER, 2.25);
  const dashed = {dashed: true, dashSize: 15, gapSize: 8};
  const dashCasing = lineMaterial(NAVY, 3.5, {...dashed, opacity: 0.65});
  const bounds = lineMaterial(CYAN, 1.7, {...dashed, opacity: 0.9});

  function drawOrigin({origin, forward}) {
    const local = (advance, sideways = 0) => ({
      x: origin.x + forward.x * advance - forward.y * sideways,
      y: origin.y + forward.y * advance + forward.x * sideways,
    });
    const ring = Array.from({length: 28}, (_, index) => {
      const angle = index / 28 * Math.PI * 2;
      return local(10 * Math.cos(angle), 10 * Math.sin(angle));
    });
    line(scene, [local(10), local(56)], [casing, beam], 5);
    line(scene, [local(45,-7), local(56), local(45,7)], [casing, beam], 5);
    fill(scene, ring, originFill, 7);
    line(scene, [...ring, ring[0]], [casing, beam], 8);
  }

  function setZones(zones) {
    for (const geometry of new Set(scene.children.map(node => node.geometry))) geometry.dispose();
    scene.clear();
    const markers = new Map();
    for (const zone of zones) {
      const {points, kind, id, origin, forward} = zone;
      if (points.length < 3) continue;
      const nominal = kind === 'nominal';
      if (nominal) fill(scene, points, beamFill, 0);
      line(scene, [...points, points[0]], nominal ? [casing, beam] : [dashCasing, bounds], nominal ? 3 : 1);
      if (origin && forward) markers.set(id, zone);
    }
    for (const marker of markers.values()) drawOrigin(marker);
  }

  function dispose() {
    setZones([]);
    for (const material of [beamFill, originFill, casing, beam, dashCasing, bounds]) material.dispose();
  }

  return {scene, setZones, dispose};
}
