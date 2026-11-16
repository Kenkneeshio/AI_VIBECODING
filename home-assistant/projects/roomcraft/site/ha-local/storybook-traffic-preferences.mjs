export const TRAFFIC_PREFERENCES_KEY='roomcraft.traffic-appearance.v1';
const MODES=new Set(['live','clear','slow','heavy']);
const finite=(value,fallback,min,max)=>Number.isFinite(Number(value))?
  Math.max(min,Math.min(max,Number(value))):fallback;

/** Per-screen artwork controls. A preview changes no travel-time sensor. */
export function normalizeTrafficPreferences(value={}){
  value=value??{};
  return {
    mode:MODES.has(value.mode)?value.mode:'live',
    density:finite(value.density,100,50,100),
    crawlSpeed:finite(value.crawlSpeed,1.5,0,8),
    tailGlow:finite(value.tailGlow,2,0.5,4),
  };
}

export function trafficWithPreferences(profile,preferences){
  const settings=normalizeTrafficPreferences(preferences);
  const base=settings.mode==='live'?profile:{severity:settings.mode};
  return {...base,density:settings.density,crawlSpeed:settings.crawlSpeed,tailGlow:settings.tailGlow,
    preview:settings.mode!=='live'};
}
