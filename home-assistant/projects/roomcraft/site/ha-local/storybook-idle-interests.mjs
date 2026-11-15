const MARINE_EVENTS = new Set(['leap', 'breach', 'spout', 'roll', 'flipper-wave']);
const point = value => value && [value.x, value.y, value.z].every(Number.isFinite)
  ? {x:value.x, y:value.y, z:value.z} : null;
const position = value => Array.isArray(value) && value.length >= 3
  ? point({x:value[0], y:value[1], z:value[2]}) : null;
const named = value => typeof value === 'string' && value.length > 0;

/** Read-only camera subjects derived from actual scene samples. No clocks,
 * random values, entity payloads or preview-only effects enter the result. */
export function selectIdleCameraInterests({holiday, marine, moments, landmarks=[], habitats=[], scenery=[]} = {}) {
  const candidates=[];
  function add(id, focus, weight, zoomFactor) {
    const safe=point(focus);
    if (!named(id) || !safe || candidates.some(candidate => candidate.id===id)) return;
    candidates.push({id, focus:safe, weight, zoomFactor});
  }
  if (holiday?.visible === true && named(holiday.selection) && holiday.active?.includes(holiday.selection)
      && holiday.stage?.intensity > 0) {
    add('holiday:'+holiday.selection, holiday.focus, holiday.stage.events ? 9 : 7, 3);
  }
  if (marine?.validWater === true && marine.preview !== true && marine.disposed !== true) {
    for (const actor of marine.actors ?? []) {
      if (actor.visible !== true || !named(actor.id)) continue;
      if(MARINE_EVENTS.has(actor.behavior))add('marine:'+actor.id, position(actor.position), 9, 2.7);
    }
  }
  if (moments?.settings?.enabled === true && moments.settings.characters === true && moments.settings.density > 0) {
    // A valid sampled activity may currently be outside the draw-frustum. It
    // remains a subject; the renderer reveals it as the camera approaches.
    for (const activity of moments.activities ?? []) {
      if (!named(activity.id)) continue;
      add('activity:'+activity.id, {x:activity.x, y:activity.y+12, z:activity.z}, 6, 2.5);
    }
  }
  if(moments?.settings?.enabled===true&&moments.settings.landWildlife===true&&moments.settings.density>0){
    for(const actor of moments.wildlife??[]){
      if(!named(actor.id)||!named(actor.interaction))continue;
      if(actor.interaction==='forage-near-person'&&moments.settings.characters!==true)continue;
      add('wildlife:'+actor.id,{x:actor.x,y:actor.y+actor.flyHeight+actor.size,z:actor.z},8,2.8);
    }
  }
  for (const landmark of landmarks) {
    if (!named(landmark.id) || landmark.visible !== true || landmark.enabled !== true || landmark.active !== true) continue;
    if(landmark.event === true)add('landmark:'+landmark.id, landmark.focus, 7, 2.2);
  }
  for (const habitat of habitats) {
    if (!named(habitat.id) || habitat.visible !== true || habitat.animated !== true) continue;
    add('habitat:'+habitat.id, habitat.focus, 3, 2.6);
  }
  if(candidates.length)return candidates.sort((a,b) => b.weight-a.weight || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)).slice(0,16);
  for (const view of scenery) {
    if (!named(view.id) || view.visible !== true) continue;
    add('scenery:'+view.id, view.focus, .7, 1.8);
  }
  return candidates.sort((a,b) => b.weight-a.weight || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)).slice(0,16);
}
