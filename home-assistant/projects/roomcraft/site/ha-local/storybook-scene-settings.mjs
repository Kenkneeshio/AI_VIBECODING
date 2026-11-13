import '../public/engine/holiday-settings.js';
import '../public/engine/world-life.js';
import '../public/engine/scene-settings.js';

const settings = (typeof window === 'undefined' ? globalThis : window).RoomcraftSceneSettings;
export const sceneFeatures = settings.features;
export const validSceneSettings = settings.valid;
export const sceneFeatureEnabled = settings.enabled;
export const sceneWind = settings.wind;
export const sceneDockAlignment = settings.dockAlignment;
