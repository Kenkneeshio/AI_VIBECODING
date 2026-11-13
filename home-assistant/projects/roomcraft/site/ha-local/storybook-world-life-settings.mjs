import '../public/engine/world-life.js';

const settings = (typeof window === 'undefined' ? globalThis : window).RoomcraftWorldLife;
export const WORLD_LIFE_FLAGS = settings.flags;
export const WORLD_LIFE_NUMBERS = settings.numbers;
export const normalizeWorldLifeSettings = settings.normalize;
export const validWorldLifeSettings = settings.valid;
export const withWorldLifeSettings = settings.withSettings;
