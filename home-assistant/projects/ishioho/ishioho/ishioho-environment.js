/* Read-only sky, weather and appearance layer. No services or location requests.
 * Fallback lunar phase uses NASA's 2000-01-06 18:14 UTC new moon and the mean
 * 29.530588-day synodic month. This is a mean-cycle approximation, not an
 * ephemeris, illumination observation or moonrise prediction.
 * https://eclipse.gsfc.nasa.gov/phase/phases1901.html
 * https://eclipse.gsfc.nasa.gov/phase/phasecat.html
 */
const phases=['new_moon','waxing_crescent','first_quarter','waxing_gibbous','full_moon','waning_gibbous','last_quarter','waning_crescent'];
const moonIcons=['🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘'];
const conditions={ 'clear-night':['Clear night','☾','clear'],cloudy:['Cloudy','☁','cloud'],fog:['Fog','≋','cloud'],hail:['Hail','◇','rain'],lightning:['Lightning','ϟ','storm'],'lightning-rainy':['Thunderstorms','ϟ','storm'],partlycloudy:['Partly cloudy','⛅','cloud'],pouring:['Heavy rain','☂','rain'],rainy:['Rain','☂','rain'],snowy:['Snow','❄','snow'],'snowy-rainy':['Sleet','❄','snow'],sunny:['Sunny','☀','clear'],windy:['Windy','≋','wind'],'windy-variant':['Windy & cloudy','≋','wind'],exceptional:['Exceptional weather','!','alert'] };
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const title=s=>String(s||'').replaceAll('_',' ').replace(/^./,c=>c.toUpperCase());
const valid=e=>Boolean(e&&!['unknown','unavailable','none','null',''].includes(String(e.state).trim().toLowerCase()));
export function finiteReading(value){
  if(typeof value!=='number'&&typeof value!=='string')return null;
  if(typeof value==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(value.trim()))return null;
  const n=Number(value);return Number.isFinite(n)?n:null;
}
function quantity(value,unit,allowed,range){
  const n=finiteReading(value);if(n===null||(range&&(n<range[0]||n>range[1])))return 'Unavailable';
  const u=typeof unit==='string'?unit.trim():'';
  if(!allowed.includes(u))return 'Unit unavailable';
  return `${new Intl.NumberFormat('en-US',{maximumFractionDigits:1}).format(n)}${['%','°F','°C','K'].includes(u)?'':' '}${u}`;
}
const temperature=(value,unit)=>quantity(value,({'F':'°F','C':'°C'})[unit]||unit,['°F','°C','K']);
export function approximateMoonPhase(now=Date.now()){
  if(now===null||now===''||(typeof now!=='number'&&!(now instanceof Date)))return null;
  const ms=now instanceof Date?now.getTime():Number(now);if(!Number.isFinite(ms))return null;
  const period=29.530588,days=(ms-Date.UTC(2000,0,6,18,14))/86400000;
  const fraction=((days%period)+period)%period/period;
  const index=Math.round(fraction*8)%8;
  return {state:phases[index],label:title(phases[index]),icon:moonIcons[index],calculated:true,fraction};
}
function discover(states,configured,preferred,predicate){
  if(configured)return configured;
  if(states[preferred])return preferred;
  const ids=Object.keys(states).filter(id=>predicate(id,states[id]));
  return ids.find(id=>valid(states[id]))||ids[0]||null;
}
function localTime(value,zone){
  if(typeof value!=='string'||!/^\d{4}-\d\d-\d\dT/.test(value))return 'Unavailable';
  const d=new Date(value);if(!Number.isFinite(d.getTime()))return 'Unavailable';
  try{return new Intl.DateTimeFormat('en-US',{weekday:'short',hour:'numeric',minute:'2-digit',timeZone:zone||'UTC'}).format(d);}catch{return 'Unavailable';}
}
export function environmentReading(hass={},config={},now=Date.now(),appearance='auto'){
  const states=hass.states||{},connected=hass.connected!==false;
  const sunId=config.sun_entity||'sun.sun',sun=states[sunId];
  const sunMode=connected&&sun?.state==='above_horizon'?'day':connected&&sun?.state==='below_horizon'?'night':null;
  const preview=['day','night'].includes(appearance);
  const mode=preview?appearance:sunMode;
  const weatherId=discover(states,config.weather_entity,'weather.forecast_ishioho_city',id=>id.startsWith('weather.'));
  const weather=states[weatherId],weatherValid=connected&&valid(weather);
  const condition=weatherValid&&Object.hasOwn(conditions,weather.state)?conditions[weather.state]:null;
  const weatherLabel=!connected?'Weather · connection lost':!weatherId?'Weather not connected':!weatherValid?'Weather unavailable':condition?.[0]||'Condition unavailable';
  const outsideId=config.outside||'sensor.hub_temperature',outside=states[outsideId];
  const outsideValue=connected&&valid(outside)?temperature(outside.state,outside.attributes?.unit_of_measurement):'Unavailable';
  const providerValue=weatherValid?temperature(weather.attributes?.temperature,weather.attributes?.temperature_unit):'Unavailable';
  const useOutside=!['Unavailable','Unit unavailable'].includes(outsideValue);
  const temp=useOutside?outsideValue:providerValue;
  const tempSource=useOutside?'Outside sensor':!['Unavailable','Unit unavailable'].includes(providerValue)?'Weather provider':'Temperature unavailable';
  const humidityId=config.outside_humidity||'sensor.hub_humidity',humidity=states[humidityId];
  const humidityValue=connected&&valid(humidity)?quantity(humidity.state,humidity.attributes?.unit_of_measurement,['%'],[0,100]):'Unavailable';
  const moonId=discover(states,config.moon_entity,'sensor.moon_phase',(id,e)=>id.startsWith('sensor.')&&/moon|lunar/i.test(id)&&phases.includes(e?.state));
  const moon=states[moonId],moonIndex=connected?phases.indexOf(moon?.state):-1;
  const moonValue=moonIndex>=0?{state:moon.state,label:title(moon.state),icon:moonIcons[moonIndex],calculated:false}:approximateMoonPhase(now);
  const attrs=weatherValid?(weather.attributes||{}):{};
  const sunNote=!connected?'Sun status unavailable while disconnected':sunMode==='day'?'Sun above the horizon':sunMode==='night'?'Sun below the horizon':'Sun status unavailable';
  return {connected,mode,preview,sunMode,sunId,weatherId,moonId,outsideId,humidityId,
    modeLabel:preview?`Preview · ${title(appearance)}`:sunMode?`Auto · ${title(sunMode)}`:'Auto · Sun unavailable',
    sunNote,weatherLabel,weatherIcon:condition?.[1]||'—',weatherEffect:condition?.[2]||'none',condition:condition?weather.state:null,
    temp,tempSource,outsideTemp:outsideValue,providerTemp:providerValue,humidity:humidityValue,
    weatherHumidity:quantity(attrs.humidity,'%', ['%'],[0,100]),
    cloud:quantity(attrs.cloud_coverage,'%', ['%'],[0,100]),
    wind:quantity(attrs.wind_speed,attrs.wind_speed_unit,['m/s','km/h','mph','kn','ft/s'],[0,1000]),
    pressure:quantity(attrs.pressure,attrs.pressure_unit,['hPa','mbar','inHg','mmHg','Pa','kPa'],[0,200000]),
    moon:moonValue,moonLabel:moonValue?`${moonValue.label}${moonValue.calculated?' · calculated':''}`:'Moon phase unavailable',
    moonSource:moonValue?.calculated?'Calculated from a mean lunar cycle; approximate.':'Home Assistant Moon integration',
    weatherSource:weatherId==='weather.forecast_ishioho_city'?'Met.no weather':weather?.attributes?.friendly_name||weatherId||'No weather provider connected',
    nextRise:connected?localTime(sun?.attributes?.next_rising,hass.config?.time_zone):'Unavailable',
    nextSet:connected?localTime(sun?.attributes?.next_setting,hass.config?.time_zone):'Unavailable',
    previewNote:preview?'Appearance preview only. Weather and sensor readings stay real. Select Auto to follow the sun.':'Appearance follows Home Assistant’s sun position for your home.'
  };
}

export const environmentMethods={
  _environmentMarkup(){
    return `<section class="environment-panel" aria-label="Sky and outdoor weather"><button class="environment-weather" data-action="weather" aria-label="Open sky and weather details"><span class="environment-icon" id="env-icon" aria-hidden="true">☀</span><span><span class="eyebrow">OUTSIDE / SKY</span><strong id="env-weather">Checking weather…</strong><small><span id="env-temp">—</span><span class="env-source" id="env-temp-source"></span></small></span><span class="environment-arrow">↗</span></button><button class="environment-moon" data-action="weather" aria-label="Open moon and sun details"><span id="env-moon-icon" aria-hidden="true">☾</span><span id="env-moon">Checking moon…</span></button><button class="environment-mode" data-action="appearance" aria-label="Appearance: automatic. Select to preview day."><span id="env-mode">Auto</span><span class="mode-next" aria-hidden="true">◐</span></button></section>`;
  },
  _updateEnvironment(){
    const shell=this._q('.shell');if(!shell)return;
    const r=environmentReading(this._hass,this._config,Date.now(),this._appearance||'auto');this._environment=r;
    // Retain the last known appearance when sun telemetry is missing; its label
    // becomes unavailable rather than presenting cached telemetry as current.
    if(r.mode)this._lastEnvironmentMode=r.mode;
    const night=(r.mode||this._lastEnvironmentMode)==='night';
    shell.classList.toggle('is-night',night);shell.classList.toggle('appearance-preview',r.preview);
    shell.classList.toggle('sun-unavailable',!r.sunMode);shell.dataset.weather=r.weatherEffect;
    for(const[id,value]of Object.entries({'env-weather':r.weatherLabel,'env-temp':r.temp,'env-temp-source':r.tempSource,'env-moon':r.moonLabel,'env-moon-icon':r.moon?.icon||'☾','env-mode':r.modeLabel,'env-icon':r.weatherIcon}))this._text('#'+id,value);
    const next=(this._appearance||'auto')==='auto'?'day':this._appearance==='day'?'night':'automatic';
    this._q('.environment-mode')?.setAttribute('aria-label',`${r.modeLabel}. Select for ${next==='automatic'?'automatic appearance':next+' preview'}.`);
    if(this._config?.night_assets){
      const theme=['pokemon','pokedex','crossing'].includes(this._theme)?this._theme:'pokemon';
      for(const[selector,type]of [['.animated-map','map'],['.still-map','still']]){
        const img=this._q(selector),src=`/local/ishioho/${theme}${night?'-night':''}-${type}.svg?v=4`;
        if(img&&img.getAttribute('src')!==src)img.setAttribute('src',src);
      }
      shell.classList.toggle('has-night-art',true);
    }
    if(this._modal==='environment'){
      const values={condition:r.weatherLabel,temperature:r.providerTemp,outside:r.outsideTemp,humidity:r.humidity,'provider-humidity':r.weatherHumidity,wind:r.wind,pressure:r.pressure,cloud:r.cloud,moon:r.moonLabel,'moon-source':r.moonSource,sun:r.sunNote,rise:r.nextRise,set:r.nextSet,source:r.weatherSource,mode:r.modeLabel,'preview-note':r.previewNote};
      for(const[id,value]of Object.entries(values))this._text('#environment-'+id,value);
      this._text('#environment-connection',r.connected?'Current integration readings':'Connection lost · live readings unavailable');
    }
  },
  _cycleAppearance(){this._appearance=({auto:'day',day:'night',night:'auto'})[this._appearance||'auto'];this._updateEnvironment();},
  _openEnvironment(){
    const tile=(label,id)=>`<div><span class="eyebrow">${label}</span><strong id="environment-${id}">—</strong></div>`;
    const r=environmentReading(this._hass,this._config,Date.now(),this._appearance||'auto');
    const infos=[[r.weatherId,'Weather details & forecast'],[r.outsideId,'Outdoor sensor'],[r.sunId,'Sun details'],[r.moonId,'Moon details']].filter(([id])=>id&&this._hass?.states?.[id]);
    this._dialog('Sky & weather',`<div class="environment-dialog"><div class="environment-head"><span class="eyebrow" id="environment-connection"></span><h3 id="environment-condition"></h3><p id="environment-source"></p></div><div class="environment-readings">${tile('WEATHER TEMPERATURE','temperature')}${tile('OUTSIDE SENSOR','outside')}${tile('OUTSIDE HUMIDITY','humidity')}${tile('WEATHER HUMIDITY','provider-humidity')}${tile('WIND','wind')}${tile('CLOUD COVER','cloud')}${tile('PRESSURE','pressure')}</div><div class="environment-sky"><div><span class="eyebrow">MOON PHASE</span><h3 id="environment-moon"></h3><p id="environment-moon-source"></p></div><div><span class="eyebrow">HOME SUN POSITION</span><h3 id="environment-sun"></h3><p>Next sunrise · <span id="environment-rise"></span></p><p>Next sunset · <span id="environment-set"></span></p></div></div><div class="environment-preview"><strong id="environment-mode"></strong>${this._button('Change appearance','appearance','','details-button')}<p id="environment-preview-note"></p></div><div class="environment-links">${infos.map(([id,label])=>this._button(escapeHtml(label),'info',`data-entity="${escapeHtml(id)}"`,'details-button')).join('')}</div><p class="environment-note">Weather conditions come from the provider; the outdoor sensor is a separate local reading. Times use your Home Assistant time zone. If a moon entity is unavailable, the labelled calculated phase uses a mean lunar cycle and is approximate.</p></div>`,{kind:'environment'});
    this._updateEnvironment();
  }
};

export const environmentCss=`
.environment-panel{background:var(--paper);border:1px solid var(--border);border-radius:10px;overflow:hidden;min-width:0}.environment-weather{display:flex;gap:10px;align-items:center;text-align:left;width:100%;padding:12px 11px;min-height:70px}.environment-weather>span:nth-child(2){min-width:0;flex:1}.environment-weather .eyebrow{font-size:5px}.environment-weather strong{display:block;font-size:14px;line-height:1.4}.environment-weather small{display:flex;gap:6px;flex-wrap:wrap;font-size:11px;line-height:1.5}.env-source{color:var(--muted);font-size:9px}.environment-icon{font-family:Segoe UI Symbol,sans-serif;font-size:31px;color:var(--accent);min-width:32px;text-align:center}.environment-arrow{font-size:18px;color:var(--muted)}.environment-moon,.environment-mode{width:100%;display:flex;align-items:center;gap:8px;padding:8px 12px;text-align:left;font-size:10px;border-top:1px solid var(--line);line-height:1.5}.environment-moon>span:first-child{font-size:15px}.environment-mode{background:var(--accent-soft);font-weight:650;justify-content:space-between}.appearance-preview .environment-mode{background:#e6d59c;color:#4d3a19}.environment-head{padding-bottom:18px;border-bottom:1px solid var(--line)}.environment-head h3{font-size:28px;margin:8px 0}.environment-head p,.environment-sky p,.environment-preview p,.environment-note{font-size:12px;color:var(--muted);line-height:1.6}.environment-readings{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0}.environment-readings>div{padding:14px;background:var(--accent-soft);border-radius:7px}.environment-readings strong{display:block;font-size:23px;margin-top:7px;overflow-wrap:anywhere}.environment-readings .eyebrow{font-size:6px}.environment-sky{display:grid;gap:20px;grid-template-columns:1fr 1fr;margin:24px 0}.environment-sky h3{margin:6px 0;font-size:18px}.environment-preview{padding:15px;background:var(--accent-soft);border-radius:7px}.environment-preview .details-button{margin:0 0 8px 15px}.environment-links{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}.environment-note{font-size:10px;margin-top:16px}.shell[data-weather="clear"] .environment-icon{animation:skyGlow 5s ease-in-out infinite}.shell[data-weather="rain"] .environment-icon,.shell[data-weather="snow"] .environment-icon{animation:skyDrift 3s ease-in-out infinite}.shell[data-weather="wind"] .environment-icon{animation:skyWind 4s ease-in-out infinite}.shell[data-weather="cloud"] .environment-icon{animation:skyDrift 6s ease-in-out infinite}.shell[data-weather="storm"] .environment-icon{color:#9e663f}
.shell.is-night{--ink:#e3ecd9;--muted:#b2c1b7;--paper:#1e302f;--accent:#a7d3a7;--accent-soft:#304840;--page:#142522;--border:#668275;--line:#496254;--shadow:#0b1715;--green:#add6a9;--lime:#b2cd8c;--red:#e7a59a;--ha-card-background:#1e302f;--card-background-color:#1e302f;--primary-background-color:#1e302f;--secondary-background-color:#304840;--primary-text-color:#e3ecd9;--secondary-text-color:#b2c1b7;--primary-color:#a7d3a7;--divider-color:#496254;--ha-card-border-color:#496254;--input-fill-color:#304840;--input-ink-color:#e3ecd9;--input-label-ink-color:#b2c1b7;--mdc-theme-surface:#1e302f;--mdc-theme-on-surface:#e3ecd9;color:var(--ink);color-scheme:dark;background-color:var(--page);background-image:radial-gradient(#7da88c15 .7px,transparent .7px)}.shell.theme-pokedex.is-night{--page:#281f2b;--paper:#273341;--accent-soft:#364750;--border:#73888d;--shadow:#160e19;--accent:#8fd1d5;--green:#9ed1ce;--line:#4b6370;--ha-card-background:#273341;--card-background-color:#273341;--primary-background-color:#273341;--primary-color:#8fd1d5}.shell.theme-crossing.is-night{--page:#1c3433;--paper:#294342;--accent-soft:#395850;--border:#729986;--line:#4e7162;--shadow:#122521;--ha-card-background:#294342;--card-background-color:#294342;--primary-background-color:#294342}.shell.is-night:not(.has-night-art) .house-map{filter:brightness(.65) saturate(.78) hue-rotate(12deg)}.shell.is-night .world-toolbar,.shell.is-night .dialog-header,.shell.is-night .theme-tabs,.shell.is-night .stat-icon,.shell.is-night .sensor-grid>div,.shell.is-night .energy-total,.shell.is-night .stream-message,.shell.is-night .connect-button,.shell.is-night .notice{background:var(--accent-soft);color:var(--ink);border-color:var(--line)}.shell.is-night .theme-tabs a,.shell.is-night .foot,.shell.is-night .foot>span:last-child,.shell.is-night .brand h1,.shell.is-night .brand .eyebrow,.shell.is-night .brand h1 span,.shell.is-night .clock,.shell.is-night .connection{color:var(--ink)}.shell.is-night .theme-tabs a.current,.shell.is-night .map-tools button.selected{background:var(--accent);color:#17352b}.shell.is-night .room-pin{background:#263e37f2;color:var(--ink);border-color:#99b997;box-shadow:2px 3px 0 #06161080}.shell.is-night .room-pin small{color:var(--muted)}.shell.is-night .room-pin.active{background:#465a37;border-color:#d4d185}.shell.is-night .robot-pin-label{background:#213b33f2;color:var(--ink);border-color:#7eac87}.shell.is-night .mini-cameras button,.shell.is-night .square,.shell.is-night .toggle,.shell.is-night .details-button{background:var(--accent-soft);color:var(--ink);border-color:var(--line)}.shell.is-night .toggle.is-on{background:#585c33;border-color:#b6b877}.shell.is-night .world-panel,.shell.is-night .stat,.shell.is-night .robot-summary,.shell.is-night .dock button{border-color:var(--border);box-shadow:0 3px 0 var(--shadow)}.shell.is-night .environment-icon{color:#d8dda8}.shell.is-night .close,.shell.is-night .alert-top{background:var(--accent);color:#17352b}.shell.is-night .appearance-preview .environment-mode,.shell.is-night.appearance-preview .environment-mode{background:#70623a;color:#fff1c6}.shell.is-night .environment-weather:hover,.shell.is-night .environment-moon:hover{background:var(--accent-soft)}
@keyframes skyGlow{50%{opacity:.7;transform:scale(.95)}}@keyframes skyDrift{50%{transform:translateY(2px)}}@keyframes skyWind{50%{transform:translateX(3px)}}@media(max-width:550px){.environment-weather{padding:10px 9px;gap:6px}.environment-icon{font-size:25px;min-width:26px}.environment-weather strong{font-size:12px}.environment-moon,.environment-mode{font-size:9px;padding:7px 9px}.environment-sky{grid-template-columns:1fr}.environment-readings strong{font-size:20px}.environment-preview .details-button{display:block;margin:8px 0}}@media(prefers-reduced-motion:reduce){.environment-icon{animation:none!important}}
`;
