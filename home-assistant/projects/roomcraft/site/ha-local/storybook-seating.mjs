const SOFA = /(?:sofa|loveseat|chaise)-/;
const DESK = /-desk-/;

function seat(x, z, surface, yaw, width, depth, pose) {
  return {x, z, surface, yaw, width, depth, pose};
}

function sofaSeats(type, width, depth) {
  const sectional = type === 'sofa' || type.includes('cloud-sofa');
  const vertical = sectional && depth > width;
  const count = type.includes('loveseat') || type.includes('chaise') ? 2 : 3;
  const seats = [];
  if (vertical) {
    const span = depth * .88 / count;
    const cushionDepth = width * .38;
    for (let index = 0; index < count; index++) {
      const along = -.44 * depth + span * (index + .5);
      seats.push(seat(-.25 * width + .018 * Math.min(width, depth), along, 37,
        Math.PI / 2, span - 3, cushionDepth, 'lounge'));
    }
    const returnSide = type === 'sofa' ? 1 : -1;
    seats.push(seat(.22 * width, returnSide * .30 * depth, 37, returnSide > 0 ? Math.PI : 0,
      .48 * width, .34 * depth, 'lounge'));
  } else {
    const mainDepth = sectional ? .57 * depth : depth;
    const mainZ = sectional ? -.215 * depth : 0;
    const span = .80 * width / count;
    for (let index = 0; index < count; index++) {
      seats.push(seat(-.4 * width + span * (index + .5), mainZ + mainDepth * .08, 37, 0,
        span - 3, mainDepth * .70, 'lounge'));
    }
    if (sectional) seats.push(seat(-.32 * width, .25 * depth, 37, 0, .33 * width, .42 * depth, 'lounge'));
  }
  return seats;
}

function facesDesk(placement, desks) {
  const {x, z, angle} = placement;
  const forwardX = -Math.sin(angle);
  const forwardZ = Math.cos(angle);
  return desks.some(({x: dx, z: dz, item}) => {
    const offsetX = dx - x;
    const offsetZ = dz - z;
    const reach = Math.min(104, Math.max(50, Math.min(item.w, item.h) * .58));
    return Math.hypot(offsetX, offsetZ) <= reach && offsetX * forwardX + offsetZ * forwardZ >= -8;
  });
}

function localSeats(placement, desks) {
  const {type, w, h} = placement.item;
  if (type === 'sofa' || SOFA.test(type)) return sofaSeats(type, w, h);
  if (type === 'diningChair' || type.startsWith('living-dining-chair-')) {
    return [seat(0, 0, 30, 0, w * .83, h * .83, 'dining')];
  }
  if (type === 'chair' || type === 'stool' || type.includes('desk-chair')) {
    const pose = type.includes('desk-chair') || facesDesk(placement, desks) ? 'desk' : 'idle';
    return [seat(0, 0, type === 'stool' ? 32 : 41, 0, w * .83, h * .83, pose)];
  }
  if (type === 'armchair' || type.includes('acorn-armchair')) {
    return [seat(0, 0, 32, 0, w * .65, h * .76, 'lounge')];
  }
  if (type === 'bedroomBench') {
    const count = w >= 58 ? 2 : 1;
    return Array.from({length: count}, (_, index) =>
      seat((index - (count - 1) / 2) * w * .44, 0, 34.2, 0, w * .87 / count, h * .91, 'bench'));
  }
  return [];
}

/** Read authored cushion centers and actual mesh height scale. No runtime positions are saved. */
export function compileStorybookSeats(placements, roots, floorClearance) {
  const desks = placements.filter(({item}) => item.type === 'desk' || DESK.test(item.type));
  const result = [];
  for (const placement of placements) {
    const {item, x, z, baseY, angle} = placement;
    const root = roots.get(item.id)?.root;
    if (!root || baseY !== 0) continue;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    for (const [index, local] of localSeats(placement, desks).entries()) {
      if (local.width < 12 || local.depth < 11) continue;
      const centerX = x + local.x * cos - local.z * sin;
      const centerZ = z + local.x * sin + local.z * cos;
      const clearance = floorClearance(centerX, centerZ);
      if (clearance < 7) continue;
      const heading = local.yaw - angle;
      const supportY = root.position.y + local.surface * root.scale.y;
      if (supportY < 10 || supportY > 84) continue;
      result.push({id: `${item.id}:${index}`, itemId:item.id, x: centerX, z: centerZ, y: supportY,
        heading, forwardX: Math.sin(heading), forwardZ: Math.cos(heading), pose: local.pose,
        reach: Math.min(42, Math.max(18, local.depth * .48 + 8)),
        behind: Math.max(7, local.depth * .32), width:local.width, depth:local.depth});
    }
  }
  return result;
}

/** The avatar can only leave its measured point for the adjacent, reachable cushion. */
export function canUseStorybookSeat(seat, x, z, allowsRoute, tolerance = 1) {
  const dx = x - seat.x;
  const dz = z - seat.z;
  if (Math.hypot(dx, dz) > seat.reach * tolerance ||
      dx * seat.forwardX + dz * seat.forwardZ < -seat.behind) return false;
  return !allowsRoute || allowsRoute(x, z, seat.x, seat.z);
}
