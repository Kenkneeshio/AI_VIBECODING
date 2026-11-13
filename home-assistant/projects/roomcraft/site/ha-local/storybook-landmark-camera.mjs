import {Box3, Vector3} from 'three';

export const LANDMARK_CAMERA_TYPES = Object.freeze({
  goldcoast:'sceneryRanchHouse', school:'scenerySchoolCampus', innoflight:'sceneryOfficeCampus',
});

/** All three model recipes face local +Z; use their actual transformed meshes. */
export function storybookLandmarkCameraFrames(placements, roots) {
  const frames = {};
  for (const [preset, type] of Object.entries(LANDMARK_CAMERA_TYPES)) {
    const placement = placements.find(({item}) => item.type === type && roots.get(item.id)?.root.visible !== false && roots.has(item.id));
    if (!placement) continue;
    const root = roots.get(placement.item.id).root;
    root.updateWorldMatrix(true, true);
    const bounds = new Box3().setFromObject(root);
    if (bounds.isEmpty() || ![...bounds.min, ...bounds.max].every(Number.isFinite)) continue;
    const front = new Vector3(0, 0, 1).transformDirection(root.matrixWorld);
    const azimuth = ((Math.atan2(front.x, front.z) * 180 / Math.PI) % 360 + 360) % 360;
    frames[preset] = {
      minX:bounds.min.x, maxX:bounds.max.x, minY:bounds.min.y, maxY:bounds.max.y,
      minZ:bounds.min.z, maxZ:bounds.max.z, azimuth, subjectId:placement.item.id,
    };
  }
  return frames;
}
