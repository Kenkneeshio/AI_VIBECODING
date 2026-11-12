import * as THREE from 'three';
import polygonClipping from 'polygon-clipping';
import {createFloorSupport} from './storybook-floor-support.mjs';

const MAX_BINS = 4096;
const FLOOR_LIFT = .18;
const LOW = new THREE.Color('#465fc4');
const MID = new THREE.Color('#cc548d');
const HIGH = new THREE.Color('#ffd572');

function tile(x, y, size) {
  const r = size * .48;
  const c = r * .83;
  return [[x-c,y-r],[x+c,y-r],[x+r,y-c],[x+r,y+c],[x+c,y+r],
    [x-c,y+r],[x-r,y+c],[x-r,y-c],[x-c,y-r]];
}

function appendPolygon(vertices, colors, polygon, color, alpha) {
  const [outer, ...holes] = polygon.map(ring => ring.slice(0, -1).map(([x, y]) => new THREE.Vector2(x, y)));
  const faces = THREE.ShapeUtils.triangulateShape(outer, holes);
  const points = [outer, ...holes].flat();
  for (const face of faces) for (const index of face) {
    const {x, y} = points[index];
    vertices.push(x, FLOOR_LIFT, y);
    colors.push(color.r, color.g, color.b, alpha);
  }
  return faces.length > 0;
}

/** Projected bins are clipped to the authored upper floor, keeping holes intact. */
export function radarHeatMapGeometry(footprint, floorSupport, history) {
  const {cells, cellSize} = history ?? {};
  if (!Array.isArray(cells) || !Number.isFinite(cellSize) || cellSize <= 0 || cellSize > 200) return null;
  const bins = cells.slice(0, MAX_BINS).filter(cell =>
    [cell?.x, cell?.y, cell?.hits].every(Number.isFinite) && cell.hits > 0 && floorSupport.contains(cell.x, cell.y));
  if (!bins.length) return null;
  const maximum = bins.reduce((largest, {hits}) => Math.max(largest, hits), 0);
  const vertices = [];
  const colors = [];
  let drawn = 0;
  for (const {x, y, hits} of bins) {
    const rate = Math.sqrt(hits / maximum);
    const color = rate < .55 ? LOW.clone().lerp(MID, rate / .55) : MID.clone().lerp(HIGH, (rate - .55) / .45);
    let painted = false;
    for (const polygon of polygonClipping.intersection([tile(x, y, cellSize)], footprint)) {
      painted = appendPolygon(vertices, colors, polygon, color, .36 + rate * .42) || painted;
    }
    if (painted) drawn++;
  }
  if (!drawn) return null;
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4));
  return {geometry, drawn};
}

export function createStorybookRadarHeatMap(footprint) {
  const root = new THREE.Group();
  root.name = 'Roomcraft radar heat map';
  const floorSupport = createFloorSupport(footprint);
  const material = new THREE.MeshBasicMaterial({vertexColors: true, side: THREE.DoubleSide,
    transparent: true, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -1});
  let mesh;

  function setHistory(history) {
    if (mesh) {
      root.remove(mesh);
      mesh.geometry.dispose();
      mesh = undefined;
    }
    const next = radarHeatMapGeometry(footprint, floorSupport, history);
    if (!next) return 0;
    mesh = new THREE.Mesh(next.geometry, material);
    root.add(mesh);
    return next.drawn;
  }

  function dispose() {
    setHistory(null);
    material.dispose();
  }

  return {root, setHistory, dispose};
}
