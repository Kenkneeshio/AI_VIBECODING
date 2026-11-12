import {BufferGeometry, Color, CubicBezierCurve, Float32BufferAttribute, MathUtils, Vector2} from 'three';

const PATH_MATERIAL = '#fff8ed';
const GRANITE = new Color('#d4ba91');
const APRON_RISE = 3;
const CURB_RISE = 5;
const CROSS_SECTION = [-1,-.83,-.60,-.29,0,.29,.60,.83,1];

function stairApron(stair) {
  const {x,z,angle,item,apronDepth} = stair;
  const along = -item.h / 2 - apronDepth;
  const side = new Vector2(Math.cos(angle), Math.sin(angle));
  const outward = new Vector2(side.y, -side.x);
  return {edge:new Vector2(x - along * side.y, z + along * side.x), outward};
}

function blocksPlan(plan, stair, groundY) {
  const {minX,maxX,minZ,maxZ} = plan.houseBounds;
  const rectangles = (plan.placements ?? []).filter(({item}) => item.type === 'garageDoor').map(garage => {
    const {w,h} = garage.item;
    const roof = h * .36 + 7.5;
    return {placement:garage, halfWidth:w / 2 + 2, from:-Math.max(roof, h * .39), to:Math.max(roof, h * .57)};
  });
  for (const flight of plan.stairs) {
    if (flight === stair) continue;
    const {w,h} = flight.item;
    rectangles.push({placement:flight, halfWidth:w / 2, from:-h / 2 - flight.apronDepth, to:h / 2});
  }
  const edges = [...(plan.walls ?? []), ...(plan.fences ?? []).filter(edge => Math.min(edge.base1,edge.base2) < groundY + 9)];
  return (x,z,margin) => {
    if (x >= minX - margin && x <= maxX + margin && z >= minZ - margin && z <= maxZ + margin) return true;
    if (rectangles.some(({placement,halfWidth,from,to}) => {
      const dx = x - placement.x, dz = z - placement.z;
      const cos = Math.cos(placement.angle), sin = Math.sin(placement.angle);
      const side = dx * cos + dz * sin, along = -dx * sin + dz * cos;
      return Math.abs(side) <= halfWidth + margin && along >= from - margin && along <= to + margin;
    })) return true;
    return edges.some(({x1,y1,dx,dz,length}) => {
      const t = MathUtils.clamp((x - x1) * dx + (z - y1) * dz, 0, length);
      return Math.hypot(x - x1 - t * dx, z - y1 - t * dz) < margin + 7;
    });
  };
}

function accessSurface(curve, stair, nearEdge, heightAt, groundY, blocked) {
  const position = [], colors = [], uv = [], faces = [];
  const rows = Math.ceil(curve.getLength() / 3.8);
  const across = new Vector2();
  const pigment = new Color();
  for (let row = 0; row <= rows; row++) {
    const t = row / rows;
    const center = curve.getPoint(t);
    const tangent = curve.getTangent(t);
    across.set(-tangent.y, tangent.x);
    const apron = 1 - MathUtils.smootherstep(t, 0, .19);
    const curb = MathUtils.smootherstep(t, .77, 1);
    const half = 18 + (Math.min(stair.item.w * .36, 28) - 18) * apron + 4.5 * curb;
    const irregularity = Math.sin(t * 31.7) * 1.05 + Math.sin(t * 18.7 + .7) * .7;
    if (blocked(center.x,center.y,half + Math.abs(irregularity) + 2.6)) return null;
    for (const [index,u] of CROSS_SECTION.entries()) {
      const shoulder = Math.abs(u) * irregularity;
      const x = center.x + across.x * u * (half + shoulder);
      const edge = nearEdge(x).z;
      const z = row === rows ? edge - .32 : center.y + across.y * u * (half + shoulder);
      if (row < rows && z < edge - .18) return null;
      const terrain = heightAt(x,z) + .055;
      const approach = MathUtils.lerp(terrain, groundY + APRON_RISE - .035, apron);
      const lift = MathUtils.lerp(approach, groundY + CURB_RISE - .035, curb);
      const fade = MathUtils.smootherstep(Math.abs(u), .52, 1);
      const y = MathUtils.lerp(lift, terrain, fade);
      position.push(x, y, z);
      pigment.copy(GRANITE).multiplyScalar(.935 + .047 * Math.cos(t * 50 + u * 1.7) + .022 * Math.sin(x * .17 + z * .26));
      colors.push(pigment.r, pigment.g, pigment.b, (1 - fade) * .97);
      uv.push((u + 1) / 2, t);
      if (!row || !index) continue;
      const a = row * CROSS_SECTION.length + index;
      const before = a - CROSS_SECTION.length;
      faces.push(before - 1, before, a - 1, before, a, a - 1);
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(position, 3));
  geometry.setAttribute('uv', new Float32BufferAttribute(uv, 2));
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 4));
  geometry.setIndex(faces);
  geometry.computeVertexNormals();
  return geometry;
}

/** Connect an unambiguous exterior stair apron to the house-side sidewalk. */
export function buildStorybookYardAccess(batch, plan, street, heightAt, groundY) {
  if (!plan.editableStructure) return false;
  const northFacing = (plan.stairs ?? []).filter(({angle}) => Math.cos(angle) >= .65);
  if (northFacing.length !== 1 || northFacing[0].item.w < 38) return false;
  const stair = northFacing[0];
  const {edge,outward} = stairApron(stair);
  const nearEdge = x => street.sample?.(x, street.nearZ) ?? {z:street.nearZ,yaw:0};
  const distance = edge.y - nearEdge(edge.x).z;
  if (distance < 35 || distance > 420) return false;
  const {minX,maxX} = plan.houseBounds;
  const lateral = stair.x < (minX + maxX) / 2 ? -1 : 1;
  const blocked = blocksPlan(plan, stair, groundY);
  const lead = Math.min(46, distance * .31);
  const start = edge.clone().addScaledVector(outward, -.48);
  for (const offset of [27 * lateral,0,27 * -lateral,51 * lateral,51 * -lateral]) {
    const x = edge.x + outward.x / -outward.y * distance * .39 + offset;
    const sidewalk = nearEdge(x);
    const end = new Vector2(x, sidewalk.z - .32);
    const inward = new Vector2(Math.sin(sidewalk.yaw || 0), Math.cos(sidewalk.yaw || 0));
    const curve = new CubicBezierCurve(start, start.clone().addScaledVector(outward, lead),
      end.clone().addScaledVector(inward, lead * .8), end);
    const geometry = accessSurface(curve, stair, nearEdge, heightAt, groundY, blocked);
    if (!geometry) continue;
    const material = batch.material?.(PATH_MATERIAL);
    if (material) {
      material.vertexColors = true;
      material.transparent = true;
      material.depthWrite = false;
    }
    batch.add(geometry, material ? PATH_MATERIAL : '#d4ba91', 0, 0, 0);
    return true;
  }
  return false;
}
