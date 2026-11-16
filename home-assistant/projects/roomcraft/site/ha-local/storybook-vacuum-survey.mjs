// A local, bounded evidence log. It never commands the robot or stores map URLs/tokens.
export const VACUUM_SURVEY_VERSION = 1;
export const vacuumSurveyKey = entity => `roomcraft.vacuum-survey.v1.${entity}`;
export function emptyVacuumSurvey(entity) {
  return {version: VACUUM_SURVEY_VERSION, entity, enabled: false, points: [], flags: []};
}
export function readVacuumSurvey(store, entity) {
  try {
    const value = JSON.parse(store.getItem(vacuumSurveyKey(entity)));
    if (value?.version !== 1 || value.entity !== entity || !Array.isArray(value.points) || !Array.isArray(value.flags)) throw Error();
    return {...emptyVacuumSurvey(entity), enabled: value.enabled === true,
      points: value.points.slice(-1500), flags: value.flags.slice(-150)};
  } catch { return emptyVacuumSurvey(entity); }
}
export function sampleVacuumSurvey(survey, {state, map, expectedMapId, transform, now = Date.now()}) {
  if (!survey?.enabled || state !== 'cleaning' || !map?.attributes) return survey;
  const position = map.attributes.vacuum_position;
  const x = Number(position?.x), y = Number(position?.y);
  const observed = Date.parse(map.last_updated || '');
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(observed) || now - observed > 120000) return survey;
  const previous = survey.points.at(-1);
  if (previous && (previous.observed === observed || now - previous.recorded < 10000)) return survey;
  const mapId = Number(map.attributes.saved_map_id || map.attributes.map_id) || null;
  const point = {recorded: now, observed, mapId, x, y};
  const [a,b,c,d,e,f] = Array.isArray(transform) && transform.length === 6 ? transform : [NaN,NaN,NaN,NaN,NaN,NaN];
  const planX = a*x+b*y+c, planY = d*x+e*y+f;
  if (Number.isFinite(planX) && Number.isFinite(planY)) { point.planX=Math.round(planX); point.planY=Math.round(planY); }
  const flags = [...survey.flags];
  const issue = expectedMapId && mapId !== expectedMapId ? 'wrong-floor-map'
    : Number.isFinite(planX) && (planX < 0 || planX > 1536 || planY < 80 || planY > 944) ? 'outside-plan-bounds' : null;
  if (issue && !flags.some(flag => flag.issue === issue && flag.recorded > now - 60000))
    flags.push({issue, recorded:now, mapId, x, y});
  return {...survey, points:[...survey.points, point].slice(-1500), flags:flags.slice(-150)};
}
export function markVacuumMismatch(survey, map, now=Date.now()) {
  const position=map?.attributes?.vacuum_position;
  return {...survey, flags:[...survey.flags,{issue:'review-layout-alignment',recorded:now,
    mapId:Number(map?.attributes?.saved_map_id || map?.attributes?.map_id) || null,
    ...(Number.isFinite(Number(position?.x)) && Number.isFinite(Number(position?.y)) ? {x:Number(position.x),y:Number(position.y)} : {})}].slice(-150)};
}
