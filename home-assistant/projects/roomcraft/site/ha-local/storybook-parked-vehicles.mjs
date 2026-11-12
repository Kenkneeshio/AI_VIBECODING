import * as THREE from 'three';
import {buildStorybookParkedPrius} from './storybook-vehicles.mjs';

const dimension = (value, fallback) => Number.isFinite(value) && value > 0 ? value : fallback;

/** Independent editable parked vehicle, nose +Z and support plane at Y=0. */
export function makeStorybookParkedVehicle(item) {
  if (item?.type !== 'garagePriusBlue') return null;
  const root = new THREE.Group();
  root.name = 'storybook-parked-blue-prius';
  const width = dimension(item.w,34), depth = dimension(item.h,70);
  const layers = buildStorybookParkedPrius();
  for (const {role,geometry,material} of layers) {
    const mesh = new THREE.Mesh(geometry,material);
    mesh.name = 'prius-' + role;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
  }
  // Traffic models point +X. Bake the rotation so the root retains the same
  // transform contract as furniture, garage bays, and Studio selection boxes.
  for (const mesh of root.children) mesh.geometry.rotateY(-Math.PI / 2);
  const bounds = new THREE.Box3().setFromObject(root);
  const span = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const scaleX = width / span.x, scaleZ = depth / span.z;
  const scaleY = Math.min(scaleX,scaleZ);
  for (const mesh of root.children) {
    // One transform avoids two Float32 rounding passes at the authored bounds.
    const transform=new THREE.Matrix4().makeScale(scaleX,scaleY,scaleZ);
    transform.setPosition(-center.x*scaleX,-bounds.min.y*scaleY,-center.z*scaleZ);
    mesh.geometry.applyMatrix4(transform);
    mesh.geometry.computeBoundingBox();
  }
  root.userData.parkedVehicle = true;
  return {root,anchorY:span.y * scaleY * .62};
}
