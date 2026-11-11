(function(root) {
  'use strict';

  const features = Object.freeze([
    Object.freeze({key: 'sky', label: 'Sky strip'}),
    Object.freeze({key: 'precipitation', label: 'Rain, snow and hail'}),
    Object.freeze({key: 'wind', label: 'Wind effects'}),
    Object.freeze({key: 'reflections', label: 'Sun, moon and cloud reflections'}),
    Object.freeze({key: 'trees', label: 'Trees and palms'}),
    Object.freeze({key: 'traffic', label: 'Road traffic'}),
    Object.freeze({key: 'sidewalk', label: 'Walkers and cyclists'}),
    Object.freeze({key: 'boats', label: 'Boats'}),
    Object.freeze({key: 'beachPlay', label: 'Beach play'}),
  ]);
  const keys = new Set(features.map(({key}) => key));
  const dockChoices = new Set(['left', 'center', 'right']);
  const fieldValue = (key, value) => key === 'dockAlignment' ? dockChoices.has(value) : keys.has(key) && typeof value === 'boolean';
  const dockAlignment = settings => dockChoices.has(settings?.dockAlignment) ? settings.dockAlignment : 'right';

  function valid(value) {
    return value === undefined || Boolean(value && typeof value === 'object' && !Array.isArray(value)
      && Object.entries(value).every(([key, option]) => fieldValue(key, option)));
  }

  function enabled(settings, key) {
    return settings?.[key] !== false;
  }

  function withFeature(settings, key, active) {
    if (!fieldValue(key, active) || active === (key === 'dockAlignment' ? dockAlignment(settings) : enabled(settings, key))) return settings;
    const next = {...settings};
    if (active === (key === 'dockAlignment' ? 'right' : true)) delete next[key];
    else next[key] = active;
    return Object.keys(next).length ? next : undefined;
  }

  function wind(environment, settings) {
    return enabled(settings, 'wind') ? environment : {...environment, windSpeed: 0, windBearing: undefined};
  }

  root.RoomcraftSceneSettings = Object.freeze({features, valid, enabled, withFeature, wind, dockAlignment});
})(typeof window === 'undefined' ? globalThis : window);
