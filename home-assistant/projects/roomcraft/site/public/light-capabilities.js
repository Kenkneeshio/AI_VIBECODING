((root) => {
  'use strict';

  // Home Assistant's LightEntityFeature flags and advertised color modes.
  const colorModes = new Set(['hs', 'xy', 'rgb', 'rgbw', 'rgbww']);
  const dimmableModes = new Set(['brightness', 'color_temp', 'white', ...colorModes]);
  const finite = value => typeof value === 'number' && Number.isFinite(value);

  function describe(attributes = {}) {
    attributes ??= {};
    const modes = Array.isArray(attributes.supported_color_modes) ? attributes.supported_color_modes : [];
    const brightness = modes.some(mode => dimmableModes.has(mode)) || finite(attributes.brightness);
    const color = modes.some(mode => colorModes.has(mode));
    const white = modes.includes('white') && color;
    const features = Number.isInteger(attributes.supported_features) ? attributes.supported_features : 0;
    const transition = Boolean(features & 32);
    const flash = Boolean(features & 8);
    const effect = Boolean(features & 4);
    const effects = Array.isArray(attributes.effect_list)
      ? [...new Set(attributes.effect_list.filter(value => typeof value === 'string' && value.trim()))] : [];
    const min = attributes.min_color_temp_kelvin;
    const max = attributes.max_color_temp_kelvin;
    const temperature = modes.includes('color_temp') ? (finite(min) && finite(max) && min > 0 && max > min
      ? {min: Math.round(min), max: Math.round(max)} : {min: 2000, max: 6535}) : null;
    const labels = ['On/off'];
    if (brightness) labels.push('Brightness');
    if (temperature) labels.push('White temperature');
    if (color) labels.push('Color');
    if (white) labels.push('White mode');
    if (effect || effects.length) labels.push('Effects');
    if (transition) labels.push('Fade duration');
    if (flash) labels.push('Flash');
    return {brightness, temperature, color, white, effects, transition, flash, labels};
  }

  root.RoomcraftLightCapabilities = Object.freeze({describe});
})(typeof window === 'undefined' ? globalThis : window);
