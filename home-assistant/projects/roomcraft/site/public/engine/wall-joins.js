(function(root) {
  'use strict';

  const SNAP_DISTANCE = 18;
  const EPSILON = 0.002;
  const position = (wall, end) => ({x: wall['x' + end], y: wall['y' + end]});
  const delta = (a, b) => ({x: a.x - b.x, y: a.y - b.y});
  const dot = (a, b) => a.x * b.x + a.y * b.y;
  const cross = (a, b) => a.x * b.y - a.y * b.x;
  const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const rounded = ({x, y}) => ({x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000});

  function segment(wall) {
    const start = position(wall, 1);
    const end = position(wall, 2);
    const direction = delta(end, start);
    return {start, end, direction, length: distance(start, end)};
  }

  function onSegment(point, line) {
    const t = dot(delta(point, line.start), line.direction) / line.length ** 2;
    const ratio = Math.max(0, Math.min(1, t));
    return {x: line.start.x + line.direction.x * ratio, y: line.start.y + line.direction.y * ratio};
  }

  function nearest(point, candidates, tolerance) {
    let best = null;
    for (const candidate of candidates) {
      const gap = distance(point, candidate);
      if (gap > tolerance) continue;
      if (!best || gap < best.gap ||
          (gap === best.gap && (candidate.x < best.x || (candidate.x === best.x && candidate.y < best.y)))) {
        best = {...candidate, gap};
      }
    }
    return best ? rounded(best) : null;
  }

  // Match an existing corner first, otherwise attach to the wall face centerline.
  // During Shift-constrained drawing only candidates on the locked axis qualify.
  function snapPoint(point, walls, {excludeId, axis} = {}) {
    const lines = walls.filter(wall => wall.id !== excludeId).map(segment).filter(line => line.length > EPSILON);
    const allowed = candidate => !axis || Math.abs(candidate[axis] - point[axis]) < EPSILON;
    const ends = lines.flatMap(line => [line.start, line.end]).filter(allowed);
    const centers = lines.map(line => onSegment(point, line)).filter(allowed);
    return nearest(point, ends, SNAP_DISTANCE) ?? nearest(point, centers, SNAP_DISTANCE);
  }

  function intersection(point, source, host) {
    const determinant = cross(source.direction, host.direction);
    if (Math.abs(determinant) < source.length * host.length * 0.1) return null;
    const toHost = delta(host.start, point);
    const alongSource = cross(toHost, host.direction) / determinant;
    const alongHost = cross(toHost, source.direction) / determinant;
    if (alongHost < -EPSILON || alongHost > 1 + EPSILON) return null;
    return {x: point.x + source.direction.x * alongSource, y: point.y + source.direction.y * alongSource};
  }

  function joinNearby(walls, fixedIds = []) {
    const fixed = new Set(fixedIds);
    const result = walls.map(wall => ({...wall}));
    const ordered = [...result].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    let joined = 0;
    for (const wall of ordered) {
      if (fixed.has(wall.id)) continue;
      for (const end of [1, 2]) {
        const source = segment(wall);
        if (source.length <= EPSILON) continue;
        const point = position(wall, end);
        const opposite = position(wall, 3 - end);
        const hosts = ordered.filter(other => other !== wall).map(segment).filter(line => line.length > EPSILON);
        if (hosts.some(host => distance(point, onSegment(point, host)) <= EPSILON)) continue;
        const candidates = [];
        for (const host of hosts) {
          const crossing = intersection(point, source, host);
          if (crossing) candidates.push(crossing);
          const alignment = Math.abs(dot(source.direction, host.direction)) / (source.length * host.length);
          if (alignment < 0.985) {
            candidates.push(host.start, host.end);
          } else {
            // Close end-to-end breaks along one wall. Leave parallel walls alone.
            const perpendicular = Math.abs(cross(delta(host.start, point), source.direction)) / source.length;
            if (perpendicular > EPSILON) continue;
            const outward = delta(point, opposite);
            for (const [near, far] of [[host.start, host.end], [host.end, host.start]]) {
              if (dot(delta(near, point), outward) > 0 && dot(delta(far, near), outward) > 0) candidates.push(near);
            }
          }
        }
        const target = nearest(point, candidates.filter(candidate =>
          distance(opposite, candidate) >= Math.min(source.length, 12) &&
          dot(delta(candidate, opposite), delta(point, opposite)) > 0), SNAP_DISTANCE);
        if (!target) continue;
        wall['x' + end] = target.x;
        wall['y' + end] = target.y;
        joined++;
      }
    }
    return {walls: result, joined};
  }

  root.RoomcraftWallJoins = Object.freeze({SNAP_DISTANCE, snapPoint, joinNearby});
})(typeof window === 'undefined' ? globalThis : window);
