import {validSceneSettings} from './storybook-scene-settings.mjs';

const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;
const INTERFACE_ITEMS = new Set(['uiWeatherOrb', 'uiMenu', 'uiTime', 'uiEdit', 'uiStatusAir', 'uiStatusElectrical']);
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const finite = (...values) => values.every(Number.isFinite);

export function isDashboardLayout(project) {
  return object(project) && project.version === 2 &&
    ['rooms','walls','items','hotspots'].every(key => Array.isArray(project[key]));
}

/** Shared checks performed by both publication transports before touching Home Assistant. */
export function dashboardProjectProblem(project, {validCameraThumbnail, validObjectControl}) {
  if (!isDashboardLayout(project)) {
    return 'The layout is not a supported Roomcraft project.';
  }
  if (project.rooms.length > 200 || project.walls.length > 2000 ||
      project.items.length > 2000 || project.hotspots.length > 100) {
    return 'The layout exceeds supported limits.';
  }
  if (!validSceneSettings(project.sceneSettings)) return 'The layout has invalid scene settings.';
  if (project.rooms.some(room => !object(room) || !Array.isArray(room.points) || room.points.length < 3 ||
      room.points.some(point => !object(point) || !finite(point.x, point.y)))) {
    return 'The layout has an invalid room.';
  }
  if (project.walls.some(wall => !object(wall) || !finite(wall.x1, wall.y1, wall.x2, wall.y2))) {
    return 'The layout has an invalid wall.';
  }
  for (const hotspot of project.hotspots) {
    if (!object(hotspot) || hotspot.type !== 'state-icon' || typeof hotspot.entity !== 'string' ||
        !/^[a-z_]+\.[a-z0-9_]+$/i.test(hotspot.entity) || !object(hotspot.style)) {
      return 'The layout has an invalid Home Assistant control.';
    }
  }
  for (const item of project.items) {
    if (!object(item) || typeof item.id !== 'string' || typeof item.type !== 'string') {
      return 'The layout has an invalid object.';
    }
    if (INTERFACE_ITEMS.has(item.type) &&
        (!finite(item.x, item.y, item.w, item.h, item.rotation ?? 0) ||
          item.x < 0 || item.x > PLAN_WIDTH || item.y < 0 || item.y > PLAN_HEIGHT ||
          item.w < 12 || item.h < 12 || item.w > PLAN_WIDTH || item.h > PLAN_HEIGHT)) {
      return 'The layout has an invalid dashboard interface item.';
    }
    if (item.type === 'cameraThumbnail' && !validCameraThumbnail(item)) {
      return 'The layout has an invalid camera thumbnail.';
    }
    if (item.type !== 'cameraThumbnail' && item.entityId && !validObjectControl(item)) {
      return 'The layout has an invalid object control.';
    }
  }
}
