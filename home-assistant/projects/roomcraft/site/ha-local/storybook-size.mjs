import { Box3 } from 'three';
import '../public/model-library.js';

/** Scale the mesh vertically while keeping the model's original support plane. */
export function applyModelHeight(item, root) {
  const height = item.modelHeight;
  const models = (typeof window === 'undefined' ? globalThis : window).RoomcraftModels;
  if (!models.supportsHeight(item) || !Number.isFinite(height) || height < 6 || height > 300) return 0;
  const {min, max} = new Box3().setFromObject(root);
  const naturalHeight = max.y - min.y;
  if (!Number.isFinite(naturalHeight) || naturalHeight < .01) return 0;
  const factor = height / naturalHeight;
  root.scale.y *= factor;
  return min.y * (1 - factor);
}
