/* Deterministic catalog style/size/finish resolver. */
(() => {
  'use strict';

  const dimensions = ['style', 'size', 'finish'];
  const valueKey = { style: 'designId', size: 'sizeId', finish: 'finishId' };
  const labelKey = { style: 'designLabel', size: 'sizeLabel', finish: 'finishLabel' };

  function stable(entries) {
    return [...entries].sort((a, b) => a.type.localeCompare(b.type));
  }

  function compatible(entry, current, dimension) {
    if (!entry || !current || !current.seriesId || entry.seriesId !== current.seriesId) return false;
    if (dimension === 'finish') return entry.designId === current.designId && entry.sizeId === current.sizeId;
    if (dimension === 'size') return entry.designId === current.designId;
    if (dimension === 'style') return entry.sizeId === current.sizeId;
    return false;
  }

  function preference(entry, current, dimension) {
    let score = 0;
    if (entry.finishId === current.finishId) score += 4;
    if (entry.designId === current.designId) score += 2;
    if (entry.sizeId === current.sizeId) score += 1;
    if (dimension === 'finish' && entry.finishId === current.finishId) score += 8;
    return score;
  }

  function choices(templates, current, dimension) {
    if (!dimensions.includes(dimension) || !current?.seriesId) return [];
    const key = valueKey[dimension], label = labelKey[dimension];
    const candidates = stable(templates.filter(entry => compatible(entry, current, dimension)));
    const grouped = new Map();
    for (const entry of candidates) {
      const id = entry[key];
      if (!id) continue;
      const previous = grouped.get(id);
      if (!previous || preference(entry, current, dimension) > preference(previous, current, dimension)) grouped.set(id, entry);
    }
    return [...grouped.values()].sort((a, b) => {
      if (a[key] === current[key]) return -1;
      if (b[key] === current[key]) return 1;
      return String(a[label] || a[key]).localeCompare(String(b[label] || b[key]));
    });
  }

  function apply(item, current, next, dimension) {
    if (!item || !current || !next || !dimensions.includes(dimension) || !compatible(next, current, dimension)) return null;
    const result = { ...item, type: next.type };
    if (item.name === current.label) result.name = next.label;
    if (dimension === 'size' || dimension === 'style') {
      result.w = next.w;
      result.h = next.h;
    }
    for (const key of ['lightForm', 'visualKind']) {
      if (next[key]) result[key] = next[key];
      else delete result[key];
    }
    return result;
  }

  function legacyFinishChoices(templates, current) {
    if (!current?.artFamily || !current.type.includes('-')) return [];
    const stem = current.type.slice(0, current.type.lastIndexOf('-'));
    return stable(templates.filter(entry => entry.type.startsWith(stem + '-') &&
      entry.type.slice(0, entry.type.lastIndexOf('-')) === stem));
  }

  window.RoomcraftCatalogVariants = Object.freeze({ choices, apply, legacyFinishChoices });
})();
