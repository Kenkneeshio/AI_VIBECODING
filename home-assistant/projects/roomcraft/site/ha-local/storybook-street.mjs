const WALK_WIDTH = 26;
const ROAD_WIDTH = 92;
const CURB_WIDTH = 4;
const VERGE_WIDTH = 18;

export function storybookStreetBounds(plan) {
  const {minZ, maxZ} = plan.houseBounds;
  const shrubs = minZ - (maxZ - minZ) * .11 - 46;
  const path = plan.editableStructure ? Infinity : minZ - 146;
  const nearZ = Math.min(plan.bounds.minZ, shrubs, path) - VERGE_WIDTH;
  return {nearZ, farZ: nearZ - 2 * WALK_WIDTH - ROAD_WIDTH};
}

export function buildStorybookStreet(batch, {nearZ, farZ}, groundY, width, centerX) {
  const roadNorth = farZ + WALK_WIDTH;
  const roadSouth = nearZ - WALK_WIDTH;
  const roadCenter = (roadNorth + roadSouth) / 2;
  const left = centerX - width / 2;
  const right = centerX + width / 2;
  const strip = (start, end, height, color) =>
    batch.box(width, height, end - start, color, centerX, groundY + height / 2, (start + end) / 2);

  strip(roadNorth, roadSouth, 1.2, '#73767c');
  strip(roadNorth, roadNorth + 3.4, 1.4, '#656b71');
  strip(roadSouth - 3.4, roadSouth, 1.4, '#656b71');

  for (const [start, end, curbStart, pavingStart] of [
    [farZ, roadNorth, roadNorth - CURB_WIDTH, farZ],
    [roadSouth, nearZ, roadSouth, roadSouth + CURB_WIDTH],
  ]) {
    strip(start, end, 5, '#c0b6a7');
    strip(curbStart, curbStart + CURB_WIDTH, 6.2, '#d0c3b0');
    const pavingWidth = WALK_WIDTH - CURB_WIDTH;
    for (let x = left + 36; x < right; x += 72) {
      batch.box(1.15, 0.18, pavingWidth, '#a69c91', x, groundY + 5.04, pavingStart + pavingWidth / 2);
    }
  }

  for (let x = left + 36; x + 17 < right; x += 72) {
    batch.box(34, 0.2, 2.8, '#e9ce91', x, groundY + 1.24, roadCenter);
  }
}
