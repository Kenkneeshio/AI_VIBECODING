import {Box3, Raycaster, Vector3} from 'three';
import '../public/model-library.js';

const DOWN = new Vector3(0, -1, 0);
const SAMPLE_DIRECTIONS = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1],
  [.707, .707], [.707, -.707], [-.707, .707], [-.707, -.707]];
const HEIGHT_EPSILON = .01;

function role(item) {
  const host = typeof window === 'undefined' ? globalThis : window;
  return host.RoomcraftModels.placementRole(item);
}

function isSolidMesh(mesh) {
  if (!mesh.isMesh || !mesh.geometry) return false;
  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  return materials.some(material => material && material.visible !== false && !material.transparent);
}

function solidFoot(root) {
  root.updateWorldMatrix(true, true);
  const boxes = [];
  root.traverseVisible(mesh => {
    if (!isSolidMesh(mesh)) return;
    const {geometry} = mesh;
    if (!geometry.boundingBox) geometry.computeBoundingBox();
    if (geometry.boundingBox?.isEmpty() === false) {
      boxes.push(geometry.boundingBox.clone().applyMatrix4(mesh.matrixWorld));
    }
  });
  const minY = Math.min(...boxes.map(box => box.min.y));
  if (!Number.isFinite(minY)) return null;
  const base = new Box3();
  for (const box of boxes) if (box.min.y <= minY + HEIGHT_EPSILON) base.union(box);
  const center = base.getCenter(new Vector3());
  const size = base.getSize(new Vector3());
  const bottom = minY - root.position.y;
  return {
    bottom: Math.abs(bottom) < 1e-6 ? 0 : bottom,
    centerX: center.x - root.position.x,
    centerZ: center.z - root.position.z,
    radiusX: size.x * .45,
    radiusZ: size.z * .45,
  };
}

// The approximate band identifies the intended tabletop among the model's
// chairs, monitor, drawer handles and decor. The actual contact height and
// footprint come from the authored mesh within that band.
function surfaceBand(item, object) {
  const {type} = item;
  if (type === 'desk' || type.includes('-desk-')) return [43.65, 44.4];
  if (type === 'table') return [44.65, 46.45];
  if (type.includes('dining-set')) return [40.65, 42.35];
  if (/coffeeTable|sideTable|coffee-table|side-table|low-play-table/.test(type)) return [32.65, 33.35];
  return [object.anchorY - .35, object.anchorY + .35];
}

function createSurface(placement, object) {
  const [low, high] = surfaceBand(placement.item, object);
  if (![low, high, object.root.scale.y].every(Number.isFinite)) return null;
  // The probe shares immutable geometry but owns its transforms. Draft
  // coordinates change where the same surface is queried, with no mesh copies.
  const probe = object.root.clone(true);
  probe.position.set(0, 0, 0);
  probe.updateMatrixWorld(true);
  const bounds = new Box3().setFromObject(probe);
  if (bounds.isEmpty()) return null;
  return {placement, probe, bounds, rootY: object.root.position.y,
    low: low * probe.scale.y, high: high * probe.scale.y};
}

function xy(placement, drafts) {
  const point = drafts?.[placement.item.id]?.position;
  return [point?.x, point?.y].every(Number.isFinite)
    ? {x: point.x, z: point.y} : placement;
}

function firstSolidHit(ray, probe) {
  return ray.intersectObject(probe, true).find(entry => isSolidMesh(entry.object));
}

function onSupportTop(hit, {low, high}) {
  return hit?.face?.normal.y >= .92 && hit.point.y >= low && hit.point.y <= high;
}

function contactHeight(surface, target, foot, origin, ray, point) {
  const x = target.x + foot.centerX - origin.x;
  const z = target.z + foot.centerZ - origin.z;
  const {bounds, probe, rootY} = surface;
  if (x - foot.radiusX < bounds.min.x || x + foot.radiusX > bounds.max.x ||
      z - foot.radiusZ < bounds.min.z || z + foot.radiusZ > bounds.max.z) return null;
  let top = -Infinity;
  for (const [u, v] of SAMPLE_DIRECTIONS) {
    point.set(x + u * foot.radiusX, bounds.max.y + 1, z + v * foot.radiusZ);
    ray.set(point, DOWN);
    const hit = firstSolidHit(ray, probe);
    if (!onSupportTop(hit, surface)) return null;
    top = Math.max(top, hit.point.y);
  }
  return rootY + top;
}

/** Resolve local tabletop contacts without rewriting authored X/Z or layout data. */
export function createStorybookPlacement(placements, roots) {
  const surfaces = [];
  const tabletop = [];
  for (const placement of placements) {
    const object = roots.get(placement.item.id);
    if (!object || Number.isFinite(placement.mountY)) continue;
    const kind = role(placement.item);
    if (kind === 'surface') {
      const surface = createSurface(placement, object);
      if (surface) surfaces.push(surface);
    } else if (kind === 'tabletop') {
      const foot = solidFoot(object.root);
      if (foot) tabletop.push({placement, foot});
    }
  }
  const ray = new Raycaster();
  const point = new Vector3();
  function resolve(drafts) {
    const result = new Map();
    for (const {placement, foot} of tabletop) {
      const target = xy(placement, drafts);
      let supportId = null;
      let top = placement.baseY;
      let distance = Infinity;
      for (const surface of surfaces) {
        if (surface.placement.baseY !== placement.baseY) continue;
        const origin = xy(surface.placement, drafts);
        const candidate = contactHeight(surface, target, foot, origin, ray, point);
        if (candidate === null || candidate <= placement.baseY || candidate < top - HEIGHT_EPSILON) continue;
        const id = surface.placement.item.id;
        const offset = Math.hypot(target.x - origin.x, target.z - origin.z);
        if (Math.abs(candidate - top) < HEIGHT_EPSILON &&
            (offset > distance || (offset === distance && id > supportId))) continue;
        supportId = id;
        top = candidate;
        distance = offset;
      }
      result.set(placement.item.id, {y: top - foot.bottom, supportId});
    }
    return result;
  }
  function projectTabletop(type, source) {
    if (role({type}) !== 'tabletop') return null;
    const ray = new Raycaster(undefined, undefined, source.near, source.far);
    const local = new Vector3();
    let nearest;
    for (const surface of surfaces) {
      const {x, z} = surface.placement;
      local.copy(source.ray.origin).sub(point.set(x, surface.rootY, z));
      ray.set(local, source.ray.direction);
      const hit = firstSolidHit(ray, surface.probe);
      if (hit && (!nearest || hit.distance < nearest.hit.distance ||
          (hit.distance === nearest.hit.distance && surface.placement.item.id < nearest.surface.placement.item.id))) {
        nearest = {hit, surface, x, z};
      }
    }
    if (!nearest || !onSupportTop(nearest.hit, nearest.surface)) return null;
    return {x: nearest.x + nearest.hit.point.x, y: nearest.z + nearest.hit.point.z};
  }
  return {resolve, projectTabletop};
}
