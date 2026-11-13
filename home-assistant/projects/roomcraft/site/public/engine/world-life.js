(function(root) {
  'use strict';
  const flags = Object.freeze(['enabled', 'marine', 'dolphins', 'sharks', 'whales', 'seals', 'walruses',
    'characters', 'vehicles', 'vegetation', 'water', 'weatherAccents', 'surprises']);
  const numbers = Object.freeze({density: Object.freeze([0, 1, .65]), pace: Object.freeze([.25, 2, 1]),
    variety: Object.freeze([0, 1, .8]), seed: Object.freeze([0, 9999, 37])});
  const knownFlags = new Set(flags);
  const record = value => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || Object.getPrototypeOf(prototype) === null;
  };
  const numeric = (key, value) => Object.hasOwn(numbers, key) && Number.isFinite(value)
    && value >= numbers[key][0] && value <= numbers[key][1] && (key !== 'seed' || Number.isInteger(value));

  function valid(value) {
    return value === undefined || record(value) && Object.entries(value).every(([key, option]) =>
      knownFlags.has(key) ? typeof option === 'boolean' : numeric(key, option));
  }
  function normalize(value) {
    const source = record(value) ? value : {}, result = {};
    for (const key of flags) result[key] = source[key] !== false;
    for (const [key, range] of Object.entries(numbers)) result[key] = numeric(key, source[key]) ? source[key] : range[2];
    return result;
  }
  function withSettings(sceneSettings, value) {
    if (!valid(value)) return sceneSettings;
    const next = {...sceneSettings};
    if (value === undefined) delete next.worldLife;
    else next.worldLife = normalize(value);
    if (JSON.stringify(next.worldLife) === JSON.stringify(sceneSettings?.worldLife)) return sceneSettings;
    return Object.keys(next).length ? next : undefined;
  }
  root.RoomcraftWorldLife = Object.freeze({flags, numbers, valid, normalize, withSettings});
})(typeof window === 'undefined' ? globalThis : window);
