(function(root) {
  'use strict';

  const GRID_SIZE = 32;
  const MAX_INDEX = 256;
  const MAX_CELLS = 4096;
  const MAX_PROPS = 96;
  const MIN_HEIGHT = -32;
  const MAX_HEIGHT = 64;
  const MIN_RADIUS = 24;
  const MAX_RADIUS = 256;
  const MIN_STRENGTH = 1;
  const MAX_STRENGTH = 16;
  const COVERS = Object.freeze(['grass', 'sand', 'soil', 'stone', 'scrub']);
  const PROPS = Object.freeze(['pine', 'oak', 'cypress', 'palm', 'sage', 'rock']);
  const COASTS = Object.freeze(['la-jolla', 'gentle', 'rugged']);
  const ROADS = Object.freeze(['coastal', 'straight', 'winding']);
  const DEFAULTS = Object.freeze({
    coast:'la-jolla', road:'coastal', beachWidth:100, roadSetback:0, hillHeight:100, planting:100,
    cove:true, shores:true, yardAccess:true,
  });
  const RANGES = {beachWidth:[70, 145], roadSetback:[0, 180], hillHeight:[0, 150], planting:[0, 150]};
  const SHAPES = {coast:COASTS, road:ROADS};
  const CELL_FIELDS = new Set(['col', 'row', 'height', 'cover', 'prop']);
  const MODES = new Set(['raise', 'lower', 'smooth', 'paint', 'erase', 'place']);
  const EMPTY_COVERS = Object.freeze(Object.fromEntries(COVERS.map(cover => [cover, 0])));
  const EMPTY_SAMPLE = Object.freeze({height:0, covers:EMPTY_COVERS});
  const between = (n, min, max) => Number.isInteger(n) && n >= min && n <= max;
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const record = value => value && Object.prototype.toString.call(value) === '[object Object]';
  const gridIndex = n => between(n, -MAX_INDEX, MAX_INDEX);
  const cellKey = (col, row) => (row + MAX_INDEX) * (MAX_INDEX * 2 + 1) + col + MAX_INDEX;
  const cellsOf = terrain => terrain && Object.hasOwn(terrain, 'cells') ? terrain.cells : [];
  const valueOf = (terrain, key) => terrain && Object.hasOwn(terrain, key) ? terrain[key] : DEFAULTS[key];
  const occupied = ({height, cover, prop}) => Boolean(height || cover || prop);

  function validSetting(key, value) {
    if (!Object.hasOwn(DEFAULTS, key)) return false;
    if (Object.hasOwn(RANGES, key)) return between(value, ...RANGES[key]);
    if (Object.hasOwn(SHAPES, key)) return SHAPES[key].includes(value);
    return typeof value === 'boolean';
  }

  function valid(terrain) {
    if (terrain === undefined) return true;
    if (!record(terrain)) return false;
    for (const [key, value] of Object.entries(terrain)) {
      if (key !== 'cells' && !validSetting(key, value)) return false;
    }
    if (!Object.hasOwn(terrain, 'cells')) return true;
    const cells = terrain.cells;
    if (!Array.isArray(cells) || cells.length > MAX_CELLS) return false;
    const seen = new Set();
    let props = 0;
    for (const cell of cells) {
      if (!record(cell) || Object.keys(cell).some(key => !CELL_FIELDS.has(key)) ||
          !Object.hasOwn(cell, 'col') || !Object.hasOwn(cell, 'row') ||
          !gridIndex(cell.col) || !gridIndex(cell.row)) return false;
      const hasHeight = Object.hasOwn(cell, 'height');
      const hasCover = Object.hasOwn(cell, 'cover');
      const hasProp = Object.hasOwn(cell, 'prop');
      if ((!hasHeight && !hasCover && !hasProp) || (hasHeight && !between(cell.height, MIN_HEIGHT, MAX_HEIGHT)) ||
          (hasCover && !COVERS.includes(cell.cover)) || (hasProp && !PROPS.includes(cell.prop))) return false;
      if (hasProp && ++props > MAX_PROPS) return false;
      const key = cellKey(cell.col, cell.row);
      if (seen.has(key)) return false;
      seen.add(key);
    }
    return true;
  }

  function pack(settings, cells) {
    const terrain = {};
    for (const [key, fallback] of Object.entries(DEFAULTS)) {
      const value = valueOf(settings, key);
      if (value !== fallback) terrain[key] = value;
    }
    const painted = cells.filter(occupied)
      .sort((a, b) => a.row - b.row || a.col - b.col)
      .map(({col, row, height, cover, prop}) => ({
        col:col || 0, row:row || 0, ...(height ? {height} : {}), ...(cover ? {cover} : {}), ...(prop ? {prop} : {}),
      }));
    if (painted.length) terrain.cells = painted;
    return Object.keys(terrain).length ? terrain : undefined;
  }

  function normalize(terrain) {
    if (!valid(terrain)) throw new TypeError('Invalid Roomcraft terrain');
    return pack(terrain, cellsOf(terrain));
  }

  function withSetting(terrain, key, value = DEFAULTS[key]) {
    if (!validSetting(key, value) || value === valueOf(terrain, key)) return terrain;
    if (!valid(terrain)) throw new TypeError('Invalid Roomcraft terrain');
    return pack({...terrain, [key]:value}, cellsOf(terrain));
  }

  function indexCells(terrain) {
    return new Map(cellsOf(terrain).filter(occupied)
      .map(cell => [cellKey(cell.col, cell.row), {...cell}]));
  }

  function at(cells, col, row) {
    return gridIndex(col) && gridIndex(row) ? cells.get(cellKey(col, row)) : undefined;
  }

  function placeProp(terrain, x, z, prop, canEdit) {
    if (prop !== null && !PROPS.includes(prop)) return terrain;
    const col = Math.round(x / GRID_SIZE), row = Math.round(z / GRID_SIZE);
    if (!gridIndex(col) || !gridIndex(row) || (canEdit && !canEdit(col * GRID_SIZE, row * GRID_SIZE))) return terrain;
    const cells = indexCells(terrain);
    const key = cellKey(col, row);
    const old = cells.get(key);
    if (old?.prop === (prop ?? undefined) || (!old && cells.size >= MAX_CELLS)) return terrain;
    if (prop && !old?.prop && cellsOf(terrain).filter(cell => cell.prop).length >= MAX_PROPS) return terrain;
    const cell = {...old, col, row, prop};
    if (occupied(cell)) cells.set(key, cell);
    else cells.delete(key);
    return pack(terrain, [...cells.values()]);
  }

  function applyBrush(terrain, command) {
    const {mode, x, z, radius, strength, cover, prop, canEdit} = command ?? {};
    if (!MODES.has(mode) || !Number.isFinite(x) || !Number.isFinite(z) ||
        (canEdit !== undefined && typeof canEdit !== 'function')) return terrain;
    if (!valid(terrain)) throw new TypeError('Invalid Roomcraft terrain');
    if (mode === 'place') return placeProp(terrain, x, z, prop, canEdit);
    if (!between(radius, MIN_RADIUS, MAX_RADIUS)) return terrain;
    if (mode === 'paint' && !COVERS.includes(cover)) return terrain;
    if (mode !== 'paint' && mode !== 'erase' && !between(strength, MIN_STRENGTH, MAX_STRENGTH)) return terrain;
    const before = indexCells(terrain);
    const changes = [];
    const radiusSquared = radius * radius;
    const minCol = Math.max(-MAX_INDEX, Math.ceil((x - radius) / GRID_SIZE));
    const maxCol = Math.min(MAX_INDEX, Math.floor((x + radius) / GRID_SIZE));
    const minRow = Math.max(-MAX_INDEX, Math.ceil((z - radius) / GRID_SIZE));
    const maxRow = Math.min(MAX_INDEX, Math.floor((z + radius) / GRID_SIZE));
    const heightAt = (col, row) => at(before, col, row)?.height ?? 0;
    for (let row = minRow; row <= maxRow; row++) {
      const pz = row * GRID_SIZE;
      for (let col = minCol; col <= maxCol; col++) {
        const px = col * GRID_SIZE;
        const distance = (px - x) ** 2 + (pz - z) ** 2;
        if (distance > radiusSquared || (canEdit && !canEdit(px, pz))) continue;
        const key = cellKey(col, row);
        const old = before.get(key);
        const oldHeight = old?.height ?? 0;
        const oldCover = old?.cover;
        const oldProp = old?.prop;
        const falloff = 1 - distance / radiusSquared;
        let height = oldHeight;
        let surface = oldCover;
        let detail = oldProp;
        if (mode === 'erase') { height = 0; surface = undefined; detail = undefined; }
        else if (mode === 'paint') surface = cover;
        else if (mode === 'smooth') {
          const neighbors = heightAt(col - 1, row) + heightAt(col + 1, row) +
            heightAt(col, row - 1) + heightAt(col, row + 1);
          const average = (neighbors + 2 * oldHeight) / 6;
          const blended = oldHeight + (average - oldHeight) * Math.min(1, strength / 8) * falloff;
          height = Math.sign(blended) * Math.round(Math.abs(blended));
        } else {
          const amount = Math.max(1, Math.round(strength * falloff));
          height = clamp(oldHeight + (mode === 'raise' ? amount : -amount), MIN_HEIGHT, MAX_HEIGHT);
        }
        if (height !== oldHeight || surface !== oldCover || detail !== oldProp) {
          changes.push({key, distance, old, cell:{col, row, height, cover:surface, prop:detail}});
        }
      }
    }
    if (!changes.length) return terrain;
    // Update existing cells first, then fill remaining capacity nearest the brush center.
    changes.sort((a, b) => Number(!a.old) - Number(!b.old) || a.distance - b.distance || a.key - b.key);
    let changed = false;
    for (const {key, old, cell} of changes) {
      if (old || before.size < MAX_CELLS) {
        if (occupied(cell)) before.set(key, cell);
        else before.delete(key);
        changed = true;
      }
    }
    return changed ? pack(terrain, [...before.values()]) : terrain;
  }

  /** An authored delta and cover weights. Missing vertices contribute the original scenery. */
  function createSampler(terrain) {
    if (!valid(terrain)) throw new TypeError('Invalid Roomcraft terrain');
    const cells = indexCells(terrain);
    function evaluate(x, z, includeCovers) {
      if (!cells.size || !Number.isFinite(x) || !Number.isFinite(z)) return includeCovers ? EMPTY_SAMPLE : 0;
      const gx = x / GRID_SIZE, gz = z / GRID_SIZE;
      const col = Math.floor(gx), row = Math.floor(gz);
      const u = gx - col, v = gz - row;
      const a = at(cells, col, row), b = at(cells, col + 1, row);
      const c = at(cells, col, row + 1), d = at(cells, col + 1, row + 1);
      const aw = (1 - u) * (1 - v), bw = u * (1 - v), cw = (1 - u) * v, dw = u * v;
      const height = (a?.height ?? 0) * aw + (b?.height ?? 0) * bw +
        (c?.height ?? 0) * cw + (d?.height ?? 0) * dw;
      if (!includeCovers) return height;
      if (!a?.cover && !b?.cover && !c?.cover && !d?.cover) return {height, covers:EMPTY_COVERS};
      const covers = {...EMPTY_COVERS};
      if (a?.cover) covers[a.cover] += aw;
      if (b?.cover) covers[b.cover] += bw;
      if (c?.cover) covers[c.cover] += cw;
      if (d?.cover) covers[d.cover] += dw;
      return {height, covers};
    }
    const sample = (x, z) => evaluate(x, z, true);
    sample.heightAt = (x, z) => evaluate(x, z, false);
    return sample;
  }

  root.RoomcraftTerrain = Object.freeze({
    GRID_SIZE, MAX_INDEX, MAX_CELLS, MAX_PROPS, MIN_HEIGHT, MAX_HEIGHT, MIN_RADIUS, MAX_RADIUS,
    MIN_STRENGTH, MAX_STRENGTH, COVERS, PROPS, COASTS, ROADS, DEFAULTS,
    valid, normalize, withSetting, applyBrush, createSampler,
  });
})(typeof window === 'undefined' ? globalThis : window);
