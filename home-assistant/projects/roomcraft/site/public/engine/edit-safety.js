(function(root) {
  'use strict';

  const Terrain = root.RoomcraftTerrain;
  const MAX_COORDINATE = 32768;
  const MAX_ROOM_POINTS = 1024;
  const MAX_TOTAL_ROOM_POINTS = 8192;
  const EPSILON = 0.000001;
  const LIMITS = Object.freeze({rooms:200, walls:2000, items:2000});
  const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const finite = (...values) => values.every(Number.isFinite);
  const coordinate = value => Number.isFinite(value) && Math.abs(value) <= MAX_COORDINATE;
  const point = value => record(value) && coordinate(value.x) && coordinate(value.y);
  const same = (a, b) => a.x === b.x && a.y === b.y;
  const cross = (a, b, c) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
  const edgeLength = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
  const validId = value => typeof value === 'string' && value.trim().length > 0;

  function onSegment(a, b, p) {
    const tolerance = EPSILON * Math.max(1, edgeLength(a, b));
    return Math.abs(cross(a, b, p)) <= tolerance &&
      p.x >= Math.min(a.x, b.x) - EPSILON && p.x <= Math.max(a.x, b.x) + EPSILON &&
      p.y >= Math.min(a.y, b.y) - EPSILON && p.y <= Math.max(a.y, b.y) + EPSILON;
  }

  function intersects(a, b, c, d) {
    const abC = cross(a, b, c), abD = cross(a, b, d);
    const cdA = cross(c, d, a), cdB = cross(c, d, b);
    return (((abC > 0 && abD < 0) || (abC < 0 && abD > 0)) &&
      ((cdA > 0 && cdB < 0) || (cdA < 0 && cdB > 0))) ||
      onSegment(a, b, c) || onSegment(a, b, d) || onSegment(c, d, a) || onSegment(c, d, b);
  }

  function polygonProblem(points) {
    if (points.length < 3) return ['room-degenerate', 'A room needs at least three different corners.'];
    let twiceArea = 0;
    const origin = points[0];
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length], c = points[(i + 2) % points.length];
      if (edgeLength(a, b) <= EPSILON) return ['room-short-edge', 'A room has overlapping corners.'];
      // Consecutive collinear edges may extend one side, but may not double back.
      const reversal = (b.x - a.x) * (c.x - b.x) + (b.y - a.y) * (c.y - b.y);
      if (Math.abs(cross(a, b, c)) <= EPSILON * Math.max(1, edgeLength(a, b)) && reversal < -EPSILON) {
        return ['room-self-intersection', 'A room boundary doubles back over itself.'];
      }
      twiceArea += cross(origin, a, b);
      for (let j = i + 2; j < points.length; j++) {
        if (i === 0 && j === points.length - 1) continue;
        if (intersects(a, b, points[j], points[(j + 1) % points.length])) {
          return ['room-self-intersection', 'A room boundary crosses or touches itself.'];
        }
      }
    }
    if (Math.abs(twiceArea) <= EPSILON) return ['room-degenerate', 'A room boundary has no usable floor area.'];
    return null;
  }

  function cleanPoints(points) {
    const next = [];
    for (const p of points) if (!next.length || !same(next[next.length - 1], p)) next.push(p);
    if (next.length > 1 && same(next[0], next[next.length - 1])) next.pop();
    return next.length === points.length ? points : next;
  }

  /** Bounded geometry checks, not a replacement for binding or catalog validation. */
  function inspect(project, {repair = false, terrainRepair = false} = {}) {
    const issues = [], repairs = [];
    const issue = (code, path, message) => issues.push({code, path, message});
    if (!record(project) || project.version !== 2) {
      issue('invalid-project', '', 'This is not a supported Roomcraft layout.');
      return {project, issues, repairs};
    }
    for (const [key, limit] of Object.entries(LIMITS)) {
      if (!Array.isArray(project[key]) || project[key].length > limit) {
        issue('collection-limit', key, 'The layout has a missing or oversized geometry collection.');
      }
    }
    if (issues.length) return {project, issues, repairs};
    for (const key of ['rooms', 'walls', 'items']) {
      const seen = new Set();
      project[key].forEach((entry, index) => {
        const path = key + '[' + index + ']';
        if (!record(entry) || !validId(entry.id)) issue('invalid-id', path, 'Every authored object needs a stable, nonempty ID.');
        else if (seen.has(entry.id)) issue('duplicate-id', path, 'Duplicate IDs in one geometry collection cannot be safely repaired.');
        else seen.add(entry.id);
      });
    }
    let next = project;
    const replace = (key, value) => {
      if (next === project) next = {...project};
      if (value === undefined) delete next[key];
      else next[key] = value;
    };
    let totalPoints = 0;
    let rooms = project.rooms;
    project.rooms.forEach((room, index) => {
      const path = 'rooms[' + index + ']';
      if (!record(room) || !Array.isArray(room.points)) {
        issue('room-geometry', path, 'A room boundary is missing its corners.');
        return;
      }
      totalPoints += room.points.length;
      if (room.points.length > MAX_ROOM_POINTS || totalPoints > MAX_TOTAL_ROOM_POINTS) {
        issue('room-point-limit', path, 'The room boundaries exceed the safe editing detail limit.');
        return;
      }
      if (!room.points.every(point)) {
        issue('room-geometry', path, 'Room corners must have finite coordinates within the editing range.');
        return;
      }
      const points = cleanPoints(room.points);
      if (points !== room.points) {
        if (repair) {
          if (rooms === project.rooms) rooms = [...project.rooms];
          rooms[index] = {...room, points};
          repairs.push({code:'room-repeated-corner', path, count:room.points.length - points.length,
            message:'Removed repeated room corners without moving the boundary.'});
        } else {
          issue('room-repeated-corner', path, 'A room has repeated corners. Use Check and repair before saving.');
        }
      }
      const problem = polygonProblem(points);
      if (problem) issue(problem[0], path, problem[1]);
    });
    if (rooms !== project.rooms) replace('rooms', rooms);

    project.walls.forEach((wall, index) => {
      const path = 'walls[' + index + ']';
      if (!record(wall) || ![wall.x1, wall.y1, wall.x2, wall.y2].every(coordinate)) {
        issue('wall-geometry', path, 'Wall and fence endpoints must have finite coordinates within the editing range.');
      } else if (Math.hypot(wall.x2 - wall.x1, wall.y2 - wall.y1) <= EPSILON) {
        issue('wall-degenerate', path, 'A wall or fence cannot have both ends at the same point.');
      }
    });
    project.items.forEach((item, index) => {
      const path = 'items[' + index + ']';
      if (!record(item) || typeof item.type !== 'string' || !item.type ||
          ![item.x, item.y].every(coordinate) ||
          !finite(item.w, item.h, item.rotation === undefined ? 0 : item.rotation) ||
          item.w <= 0 || item.h <= 0 || item.w > MAX_COORDINATE || item.h > MAX_COORDINATE ||
          (Object.hasOwn(item, 'zIndex') && !Number.isFinite(item.zIndex)) ||
          (Object.hasOwn(item, 'modelHeight') && (!Number.isFinite(item.modelHeight) || item.modelHeight < 6 || item.modelHeight > 300))) {
        issue('item-geometry', path, 'Object position and dimensions must be usable finite numbers.');
      }
    });
    if (project.terrain !== undefined) {
      if (!Terrain || !Terrain.valid(project.terrain)) {
        issue('terrain-invalid', 'terrain', 'Terrain settings or cells are invalid. The last safe edit was kept.');
      } else if (repair && terrainRepair) {
        try {
          const result = Terrain.repair(project.terrain);
          if (result.changed) {
            replace('terrain', result.terrain);
            for (const entry of result.repairs) repairs.push({...entry, path:'terrain',
              message:'Softened steep terrain steps while preserving covers and placed objects.'});
          }
        } catch {
          issue('terrain-repair-failed', 'terrain', 'The terrain edit could not be safely repaired.');
        }
      }
    }
    return {project:next, issues, repairs};
  }

  function checked(project, options) {
    try { return inspect(project, options); }
    catch { return {project, repairs:[], issues:[{
      code:'invalid-project', path:'', message:'The edit could not be safely checked. The last safe edit was kept.',
    }]}; }
  }

  function audit(project) {
    return checked(project).issues;
  }

  /**
   * Repair only redundant geometry or explicitly requested terrain steps.
   * Any remaining issue rejects the entire edit and returns the exact previous
   * reference when supplied. Callers own snapshotting, Undo and presentation.
   */
  function repair(project, {previous, terrainRepair = false} = {}) {
    const result = checked(project, {repair:true, terrainRepair});
    const ok = result.issues.length === 0;
    return {
      ok,
      project:ok ? result.project : (previous === undefined ? project : previous),
      repaired:ok && result.repairs.length > 0,
      issues:result.issues,
      repairs:ok ? result.repairs : [],
    };
  }

  root.RoomcraftEditSafety = Object.freeze({
    MAX_COORDINATE, MAX_ROOM_POINTS, MAX_TOTAL_ROOM_POINTS, audit, repair,
  });
})(typeof window === 'undefined' ? globalThis : window);
