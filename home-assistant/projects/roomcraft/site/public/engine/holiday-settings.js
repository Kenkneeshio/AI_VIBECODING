(function(root) {
  'use strict';
  const ids = Object.freeze(['new-year', 'japanese-new-year', 'lunar-new-year', 'lantern-festival',
    'setsubun', 'hinamatsuri', 'holi', 'nowruz', 'easter', 'songkran', 'childrens-day', 'vesak',
    'dragon-boat', 'tanabata', 'obon', 'mid-autumn', 'chuseok', 'loy-krathong', 'diwali',
    'eid-al-fitr', 'eid-al-adha', 'hanukkah', 'valentines-day', 'st-patricks-day', 'earth-day',
    'mothers-day', 'fathers-day', 'independence-day', 'halloween', 'thanksgiving', 'christmas']);
  const known = new Set(ids);
  const modes = new Set(['auto', 'on', 'off']);
  const booleans = new Set(['enabled', 'events', 'lighting']);
  const fields = new Set([...booleans, 'modes', 'windowDays', 'intensity', 'dateOverrides', 'placement']);
  const record = value => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || Object.getPrototypeOf(prototype) === null;
  };
  const leap = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  function validPlacement(value) {
    return record(value) && Object.keys(value).length === 4
      && ['x', 'y', 'scale', 'rotation'].every(key => Object.hasOwn(value, key) && Number.isFinite(value[key]))
      && value.x >= -4000 && value.x <= 5000 && value.y >= -4000 && value.y <= 5000
      && value.scale >= .4 && value.scale <= 2 && value.rotation >= 0 && value.rotation <= 359;
  }

  function validDate(value) {
    if (typeof value !== 'string' || !/^(?:\d{4}-)?\d{2}-\d{2}$/.test(value)) return false;
    const parts = value.split('-').map(Number);
    const [year, month, day] = parts.length === 3 ? parts : [2000, ...parts];
    if (year < 1900 || year > 2199 || month < 1 || month > 12) return false;
    const days = [31, leap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day >= 1 && day <= days[month - 1];
  }

  function valid(value) {
    if (value === undefined) return true;
    if (!record(value)) return false;
    return Object.entries(value).every(([key, option]) => {
      if (!fields.has(key)) return false;
      if (booleans.has(key)) return typeof option === 'boolean';
      if (key === 'windowDays') return Number.isInteger(option) && option >= 1 && option <= 31;
      if (key === 'intensity') return Number.isFinite(option) && option >= 0 && option <= 1;
      if (key === 'placement') return validPlacement(option);
      if (!record(option)) return false;
      return Object.entries(option).every(([id, entry]) => known.has(id)
        && (key === 'modes' ? modes.has(entry) : validDate(entry)));
    });
  }

  /** Runtime normalization is defensive; authoring boundaries must call valid first. */
  function normalize(value) {
    const source = record(value) ? value : {};
    const normalizedModes = {}, dateOverrides = {};
    for (const id of ids) {
      normalizedModes[id] = modes.has(source.modes?.[id]) ? source.modes[id] : 'auto';
      if (validDate(source.dateOverrides?.[id])) dateOverrides[id] = source.dateOverrides[id];
    }
    return {enabled: source.enabled !== false, modes: normalizedModes,
      windowDays: Number.isInteger(source.windowDays) && source.windowDays >= 1 && source.windowDays <= 31 ? source.windowDays : 7,
      intensity: Number.isFinite(source.intensity) && source.intensity >= 0 && source.intensity <= 1 ? source.intensity : .7,
      events: source.events !== false, lighting: source.lighting !== false, dateOverrides,
      ...(validPlacement(source.placement) ? {placement: {...source.placement}} : {})};
  }

  function withSettings(sceneSettings, value) {
    if (!valid(value)) return sceneSettings;
    const next = {...sceneSettings};
    if (value === undefined) delete next.holidays;
    else next.holidays = normalize(value);
    if (JSON.stringify(next.holidays) === JSON.stringify(sceneSettings?.holidays)) return sceneSettings;
    return Object.keys(next).length ? next : undefined;
  }

  root.RoomcraftHolidaySettings = Object.freeze({ids, valid, validDate, validPlacement, normalize, withSettings});
})(typeof window === 'undefined' ? globalThis : window);
