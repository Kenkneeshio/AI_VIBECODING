/* Deterministic catalog style/size/finish resolver. */
(() => {
  'use strict';

  const dimensions = ['style', 'size', 'finish'];
  const valueKey = { style: 'designId', size: 'sizeId', finish: 'finishId' };
  const labelKey = { style: 'designLabel', size: 'sizeLabel', finish: 'finishLabel' };
  const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;

  function stable(entries) {
    return [...entries].sort((a, b) => compare(a.type, b.type));
  }

  function compatible(entry, current, dimension) {
    if (!entry || !current || !current.seriesId || entry.seriesId !== current.seriesId) return false;
    if (dimension === 'finish') return entry.designId === current.designId && entry.sizeId === current.sizeId;
    if (dimension === 'size') return entry.designId === current.designId;
    if (dimension === 'style') return true;
    return false;
  }

  function preference(entry, current, dimension) {
    let score = 0;
    if (entry.finishId === current.finishId) score += 4;
    if (entry.designId === current.designId) score += 2;
    if (entry.sizeId === current.sizeId) score += 8;
    if (dimension === 'finish' && entry.finishId === current.finishId) score += 8;
    return score;
  }

  function footprintDifference(entry, current) {
    return Math.abs(entry.w / current.w - 1) + Math.abs(entry.h / current.h - 1);
  }

  function choices(templates, current, dimension) {
    if (!dimensions.includes(dimension) || !current?.seriesId) return [];
    const key = valueKey[dimension], label = labelKey[dimension];
    const candidates = stable(templates.filter(entry => compatible(entry, current, dimension) && (!entry.legacy || entry.type === current.type)));
    const grouped = new Map();
    for (const entry of candidates) {
      const id = entry[key];
      if (!id) continue;
      const previous = grouped.get(id);
      const score = preference(entry, current, dimension);
      const previousScore = previous && preference(previous, current, dimension);
      if (!previous || score > previousScore || score === previousScore &&
          footprintDifference(entry, current) < footprintDifference(previous, current)) grouped.set(id, entry);
    }
    return [...grouped.values()].sort((a, b) => {
      if (a[key] === current[key]) return -1;
      if (b[key] === current[key]) return 1;
      return compare(String(a[label] || a[key]), String(b[label] || b[key]));
    });
  }

  function applyModel(item, current, next, {resize = false, preserveLightForm = false} = {}) {
    const result = { ...item, type: next.type };
    if (item.name === current.label) result.name = next.label;
    if (resize) {
      result.w = next.w;
      result.h = next.h;
    }
    if (!preserveLightForm || current.lightForm !== next.lightForm) {
      if (next.lightForm) result.lightForm = next.lightForm;
      else delete result.lightForm;
    }
    if (!item.visualKind || item.visualKind === current.visualKind) {
      if (next.visualKind) result.visualKind = next.visualKind;
      else delete result.visualKind;
    }
    return result;
  }

  function apply(item, current, next, dimension) {
    if (!item || !current || !next || !dimensions.includes(dimension) || next.legacy) return null;
    const allowed = current.seriesId ? compatible(next, current, dimension)
      : dimension === 'finish' && legacyFinishChoices([next], current).length > 0;
    if (!allowed) return null;
    return applyModel(item, current, next, {
      resize: dimension === 'size' || dimension === 'style',
      preserveLightForm: dimension !== 'style',
    });
  }

  function legacyFinishChoices(templates, current) {
    if (!current?.artFamily || !current.type.includes('-')) return [];
    const stem = current.type.slice(0, current.type.lastIndexOf('-'));
    return stable(templates.filter(entry => (!entry.legacy || entry.type === current.type) && entry.type.startsWith(stem + '-') &&
      entry.type.slice(0, entry.type.lastIndexOf('-')) === stem));
  }

  window.RoomcraftCatalogVariants = Object.freeze({ choices, apply, applyModel, legacyFinishChoices });
})();
