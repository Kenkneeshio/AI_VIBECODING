/* Read-only sky, weather and appearance layer. The only requested service is
 * weather.get_forecasts; no device actions or location requests are made.
 * https://www.home-assistant.io/integrations/weather/
 * https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
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
const hasOwn=(object,key)=>Object.prototype.hasOwnProperty.call(object,key);
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
const FORECAST_TTL=15*60*1000,FORECAST_RETRY=5*60*1000,FORECAST_TIMEOUT=20000,FORECAST_MAX_AGE=60*60*1000;
const forecastCaches=new WeakMap();
function timestamp(value){
  if(typeof value!=='string'||!/^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/.test(value))return null;
  const ms=Date.parse(value);return Number.isFinite(ms)?ms:null;
}
function dateKey(time,zone){
  // Never compare localized date strings. A WebView may fall back from en-CA
  // to a month-first locale, which would place forecast rows on the wrong day.
  try{
    const parts=new Intl.DateTimeFormat('en-US',{timeZone:zone||'UTC',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(time));
    const field=type=>parts.find(part=>part.type===type)?.value;
    const year=field('year'),month=field('month'),day=field('day');
    return /^\d{4}$/.test(year)&&/^\d{2}$/.test(month)&&/^\d{2}$/.test(day)?`${year}-${month}-${day}`:null;
  }catch{return null;}
}
function bounded(value,min,max){const n=finiteReading(value);return n!==null&&n>=min&&n<=max?n:null;}
function supportedForecast(weather){const flags=finiteReading(weather?.attributes?.supported_features)||0;return flags&2?'hourly':flags&1?'daily':flags&4?'twice_daily':null;}
function relevantForecast(item,kind,now,zone){return kind==='daily'?Boolean(item.localDate&&item.localDate>=(dateKey(now,zone)||'9999')):item.time>=now-(kind==='twice_daily'?12:1)*3600000;}
export function normalizeForecast(rows,weather={},kind='hourly',now=Date.now(),zone='UTC'){
  if(!Array.isArray(rows))return[];
  const attrs=weather.attributes||{},temperatureUnit=({'F':'°F','C':'°C'})[attrs.temperature_unit]||attrs.temperature_unit;
  const tempUnit=['°F','°C','K'].includes(temperatureUnit)?temperatureUnit:null,windUnit=['m/s','km/h','mph','kn','ft/s'].includes(attrs.wind_speed_unit)?attrs.wind_speed_unit:null;
  const precipitationUnit=['mm','in'].includes(attrs.precipitation_unit)?attrs.precipitation_unit:null;
  const unique=new Map();
  for(const row of rows.slice(0,250)){
    if(!row||typeof row!=='object')continue;const time=timestamp(row.datetime);if(time===null)continue;
    const condition=hasOwn(conditions,row.condition)?row.condition:null,definition=conditions[condition];
    const item={datetime:new Date(time).toISOString(),time,localTime:localTime(row.datetime,zone),localDate:dateKey(time,zone),condition,label:definition?.[0]||'Condition unavailable',icon:definition?.[1]||'—',effect:definition?.[2]||'none',
      temperature:tempUnit?finiteReading(row.temperature):null,temperatureLow:tempUnit?finiteReading(row.templow):null,temperatureUnit:tempUnit,
      temperatureLabel:temperature(row.temperature,temperatureUnit),precipitationProbability:bounded(row.precipitation_probability,0,100),
      precipitation:precipitationUnit?bounded(row.precipitation,0,10000):null,precipitationUnit,windSpeed:windUnit?bounded(row.wind_speed,0,1000):null,windUnit,
      daylight:typeof row.is_daytime==='boolean'?row.is_daytime:null};
    if(relevantForecast(item,kind,now,zone)&&!unique.has(time))unique.set(time,item);
  }
  return [...unique.values()].sort((a,b)=>a.time-b.time);
}
export function solarReading(sun,connected=true,now=Date.now()){
  const mode=connected&&sun?.state==='above_horizon'?'day':connected&&sun?.state==='below_horizon'?'night':null,attrs=mode?(sun.attributes||{}):{};
  const future=field=>{const time=timestamp(attrs[field]);return time!==null&&time>now?new Date(time).toISOString():null;};
  const nextRising=future('next_rising'),nextSetting=future('next_setting');
  const transitions=[['sunrise',nextRising],['sunset',nextSetting]].filter(([,value])=>value).map(([kind,datetime])=>({kind,datetime,time:Date.parse(datetime),minutesUntil:Math.ceil((Date.parse(datetime)-now)/60000)})).sort((a,b)=>a.time-b.time);
  return{status:mode?'ready':'unavailable',mode,elevation:bounded(attrs.elevation,-90,90),rising:typeof attrs.rising==='boolean'?attrs.rising:null,nextRising,nextSetting,nextDawn:future('next_dawn'),nextDusk:future('next_dusk'),nextTransition:transitions[0]||null};
}
function forecastCache(hass){
  const owner=hass?.connection||hass?.callWS;
  if((typeof owner!=='object'||owner===null)&&typeof owner!=='function')return null;
  let cache=forecastCaches.get(owner);if(!cache){cache=new Map();forecastCaches.set(owner,cache);}return cache;
}
function requestForecast(hass,entityId,kind){
  let timeout;
  const deadline=new Promise((_,reject)=>{timeout=setTimeout(()=>reject(Error('forecast timeout')),FORECAST_TIMEOUT);});
  return Promise.race([Promise.resolve().then(()=>hass.callWS({type:'call_service',domain:'weather',service:'get_forecasts',service_data:{type:kind},target:{entity_id:entityId},return_response:true})),deadline]).finally(()=>clearTimeout(timeout));
}
export function forecastReading(entry,{entityId=null,kind=null,now=Date.now(),zone='UTC',condition=null,unavailable=null}={}){
  const empty={status:'unavailable',entityId,kind,fetchedAt:null,expiresAt:null,nextRefreshAt:null,items:[],today:[],next:null,nextChange:null,reason:unavailable||'Forecast unavailable',timeZone:zone};
  if(unavailable||!entry)return empty;
  const fresh=entry.fetchedAt!==null&&now<entry.expiresAt,usable=entry.fetchedAt!==null&&now-entry.fetchedAt<=FORECAST_MAX_AGE;
  const items=usable?(entry.items||[]).filter(item=>relevantForecast(item,kind,now,zone)):[];
  const status=items.length?(fresh?'ready':'stale'):entry.pending?'loading':'unavailable';
  return{...empty,status,fetchedAt:entry.fetchedAt,expiresAt:entry.expiresAt,nextRefreshAt:entry.nextRefreshAt,items,today:items.filter(item=>item.localDate===dateKey(now,zone)),next:items.find(item=>item.time>=now)||null,
    nextChange:condition?items.find(item=>item.time>now&&item.time<=now+12*3600000&&item.condition&&item.condition!==condition)||null:null,
    reason:status==='ready'?null:status==='loading'?'Loading forecast':status==='stale'?'Cached forecast · refresh pending or unavailable':entry.error||'No upcoming forecast periods'};
}
export function environmentReading(hass={},config={},now=Date.now(),appearance='auto'){
  const states=hass.states||{},connected=hass.connected!==false;
  const sunId=config.sun_entity||'sun.sun',sun=states[sunId];
  const sunMode=connected&&sun?.state==='above_horizon'?'day':connected&&sun?.state==='below_horizon'?'night':null;
  const preview=['day','night'].includes(appearance);
  const mode=preview?appearance:sunMode;
  const weatherId=discover(states,config.weather_entity,'weather.forecast_ishioho_city',id=>id.startsWith('weather.'));
  const weather=states[weatherId],weatherValid=connected&&valid(weather);
  const condition=weatherValid&&hasOwn(conditions,weather.state)?conditions[weather.state]:null;
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
  return {connected,mode,preview,sunMode,sunId,weatherId,moonId,outsideId,humidityId,solar:solarReading(sun,connected,now),
    weatherUpdatedAt:weatherValid&&timestamp(weather.last_updated)!==null?new Date(timestamp(weather.last_updated)).toISOString():null,
    outsideUpdatedAt:connected&&valid(outside)&&timestamp(outside.last_updated)!==null?new Date(timestamp(outside.last_updated)).toISOString():null,
    windSpeed:['m/s','km/h','mph','kn','ft/s'].includes(attrs.wind_speed_unit)?bounded(attrs.wind_speed,0,1000):null,windUnit:['m/s','km/h','mph','kn','ft/s'].includes(attrs.wind_speed_unit)?attrs.wind_speed_unit:null,
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
  _stopForecast(){this._forecastGeneration=(this._forecastGeneration||0)+1;this._forecastPending=null;},
  _forecastData(reading,now=Date.now()){
    const hass=this._hass,entityId=reading.weatherId,weather=hass?.states?.[entityId],kind=supportedForecast(weather),zone=hass?.config?.time_zone||'UTC';
    const unavailable=!reading.connected?'Forecast unavailable while disconnected':!valid(weather)?'Weather provider unavailable':!kind?'Provider does not expose a supported forecast':typeof hass?.callWS!=='function'?'Forecast connection unavailable':this.isConnected===false?'Dashboard detached':null;
    const options={entityId,kind,now,zone,condition:reading.condition,unavailable};
    if(unavailable){this._stopForecast();return this._weatherForecast=forecastReading(null,options);}
    const cache=forecastCache(hass),key=JSON.stringify([entityId,kind,zone,weather.attributes?.temperature_unit,weather.attributes?.wind_speed_unit,weather.attributes?.precipitation_unit]);
    let entry=cache.get(key);if(!entry){entry={items:[],fetchedAt:null,expiresAt:null,nextRefreshAt:0,error:null,pending:null};cache.set(key,entry);}
    if(!entry.pending&&now>=entry.nextRefreshAt){
      entry.pending=requestForecast(hass,entityId,kind).then(response=>{
        const rows=response?.response?.[entityId]?.forecast??response?.[entityId]?.forecast;
        if(!Array.isArray(rows))throw Error('Malformed forecast response');
        const fetchedAt=Date.now(),items=normalizeForecast(rows,weather,kind,fetchedAt,zone);
        if(!items.length)throw Error('Empty forecast response');
        Object.assign(entry,{items,fetchedAt,expiresAt:fetchedAt+FORECAST_TTL,nextRefreshAt:fetchedAt+FORECAST_TTL,error:null});
      }).catch(()=>{entry.error='Forecast request unavailable';entry.nextRefreshAt=Date.now()+FORECAST_RETRY;}).finally(()=>{entry.pending=null;});
    }
    if(entry.pending&&this._forecastPending!==entry.pending){
      const pending=entry.pending,generation=this._forecastGeneration||0,baseGeneration=this._generation,owner=hass.connection||hass.callWS;this._forecastPending=pending;
      pending.then(()=>{
        if(this._forecastPending===pending)this._forecastPending=null;
        if(generation!==(this._forecastGeneration||0)||baseGeneration!==this._generation||this.isConnected===false||this._hass?.connected===false||(this._hass?.connection||this._hass?.callWS)!==owner)return;
        const current=environmentReading(this._hass,this._config);if(current.weatherId!==entityId)return;
        this._updateEnvironment();
      });
    }
    return this._weatherForecast=forecastReading(entry,options);
  },
  _forecastMarkup(forecast){
    const heading=forecast.kind==='hourly'?"Today's hourly outlook":forecast.kind==='twice_daily'?'Day & night forecast':'Daily forecast';
    if(!forecast.items.length)return `<h3>${heading}</h3><p class="environment-note">${escapeHtml(forecast.reason||'Forecast unavailable')}</p>`;
    const list=items=>`<ol class="environment-forecast-list">${items.map(item=>`<li><time datetime="${escapeHtml(item.datetime)}">${escapeHtml(item.localTime)}</time><span>${escapeHtml(item.icon)} ${escapeHtml(item.label)}</span><strong>${escapeHtml(item.temperatureLabel)}</strong>${item.precipitationProbability!==null?`<small>${item.precipitationProbability}% precipitation chance</small>`:''}</li>`).join('')}</ol>`;
    let periods=list(forecast.items.slice(0,6));
    if(forecast.kind==='hourly'){
      const todayDate=dateKey(Date.now(),forecast.timeZone),today=forecast.items.filter(item=>item.localDate===todayDate),nextDate=forecast.items.find(item=>item.localDate>todayDate)?.localDate;
      periods=today.length?`<p class="environment-note">Today · ${escapeHtml(todayDate)} · remaining provider periods</p>${list(today)}`:'<p class="environment-note">No remaining hourly periods for today were returned.</p>';
      if(nextDate)periods+=`<p class="environment-note">Upcoming · ${escapeHtml(nextDate)}</p>${list(forecast.items.filter(item=>item.localDate===nextDate).slice(0,6))}`;
    }
    return `<h3>${heading}</h3>${forecast.status==='stale'?'<p class="environment-note">Cached forecast · refresh pending or unavailable</p>':''}${periods}<p class="environment-note">Provider forecast · retrieved ${escapeHtml(localTime(new Date(forecast.fetchedAt).toISOString(),forecast.timeZone))}. Forecast periods are predictions, not current observations.</p>`;
  },
  _mapAsset(type='map',night=false){
    const profiles={pokemon:{version:8,extension:'png'},pokedex:{version:6,extension:'svg'},crossing:{version:6,extension:'svg'},stardew:{version:5,extension:'png'}};
    const theme=hasOwn(profiles,this._theme)?this._theme:'pokemon',profile=profiles[theme];
    return `/local/ishioho/${theme}${night?'-night':''}-${type==='still'?'still':'map'}${profile.extension==='png'?'-v'+profile.version:''}.${profile.extension}?v=${profile.version}`;
  },
  _environmentMarkup(){
    return `<section class="environment-panel" aria-label="Sky and outdoor weather"><button class="environment-weather" data-action="weather" aria-label="Open sky and weather details"><span class="environment-icon" id="env-icon" aria-hidden="true">☀</span><span><span class="eyebrow">OUTSIDE / SKY</span><strong id="env-weather">Checking weather…</strong><small><span id="env-temp">—</span><span class="env-source" id="env-temp-source"></span></small></span><span class="environment-arrow">↗</span></button><button class="environment-moon" data-action="weather" aria-label="Open moon and sun details"><span id="env-moon-icon" aria-hidden="true">☾</span><span id="env-moon">Checking moon…</span></button><button class="environment-mode" data-action="appearance" aria-label="Appearance: automatic. Select to preview day."><span id="env-mode">Auto</span><span class="mode-next" aria-hidden="true">◐</span></button></section>`;
  },
  _updateEnvironment(){
    const shell=this._q('.shell');if(!shell)return;
    const r=environmentReading(this._hass,this._config,Date.now(),this._appearance||'auto');r.forecast=this._forecastData(r);this._environment=r;this._text('#scene-weather',`${r.weatherIcon} ${r.temp}`);this._text('#scene-moon',r.moon?.icon||'☾');this._q('.scene-sky')?.setAttribute('aria-label',`${r.weatherLabel}, ${r.temp}. ${r.moonLabel}. Open weather and moon phase.`);
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
      for(const[selector,type]of [['.animated-map','map'],['.still-map','still']]){
        const img=this._q(selector),src=this._mapAsset(type,night);
        if(img&&img.getAttribute('src')!==src)img.setAttribute('src',src);
      }
      shell.classList.toggle('has-night-art',true);
    }
    if(this._modal==='environment'){
      const values={condition:r.weatherLabel,temperature:r.providerTemp,outside:r.outsideTemp,humidity:r.humidity,'provider-humidity':r.weatherHumidity,wind:r.wind,pressure:r.pressure,cloud:r.cloud,moon:r.moonLabel,'moon-source':r.moonSource,sun:r.sunNote,rise:r.nextRise,set:r.nextSet,source:r.weatherSource,mode:r.modeLabel,'preview-note':r.previewNote};
      for(const[id,value]of Object.entries(values))this._text('#environment-'+id,value);
      this._text('#environment-connection',r.connected?'Current integration readings':'Connection lost · live readings unavailable');
      const host=this._q('#environment-forecast'),html=this._forecastMarkup(r.forecast);
      if(host&&(host!==this._forecastRenderedNode||html!==this._forecastRenderedHtml)){host.innerHTML=html;this._forecastRenderedNode=host;this._forecastRenderedHtml=html;}
    }
    this._updateWeatherVisuals?.();
  },
  _cycleAppearance(){this._appearance=({auto:'day',day:'night',night:'auto'})[this._appearance||'auto'];this._updateEnvironment();},
  _openEnvironment(){
    const tile=(label,id)=>`<div><span class="eyebrow">${label}</span><strong id="environment-${id}">—</strong></div>`;
    const r=environmentReading(this._hass,this._config,Date.now(),this._appearance||'auto');
    const infos=[[r.weatherId,'Weather details & forecast'],[r.outsideId,'Outdoor sensor'],[r.sunId,'Sun details'],[r.moonId,'Moon details']].filter(([id])=>id&&this._hass?.states?.[id]);
    this._dialog('Sky & weather',`<div class="environment-dialog"><div class="environment-head"><span class="eyebrow" id="environment-connection"></span><h3 id="environment-condition"></h3><p id="environment-source"></p></div><div class="environment-readings">${tile('WEATHER TEMPERATURE','temperature')}${tile('OUTSIDE SENSOR','outside')}${tile('OUTSIDE HUMIDITY','humidity')}${tile('WEATHER HUMIDITY','provider-humidity')}${tile('WIND','wind')}${tile('CLOUD COVER','cloud')}${tile('PRESSURE','pressure')}</div><div class="environment-sky"><div><span class="eyebrow">MOON PHASE</span><h3 id="environment-moon"></h3><p id="environment-moon-source"></p></div><div><span class="eyebrow">HOME SUN POSITION</span><h3 id="environment-sun"></h3><p>Next sunrise · <span id="environment-rise"></span></p><p>Next sunset · <span id="environment-set"></span></p></div></div><section id="environment-forecast" aria-label="Provider weather forecast"></section><div class="environment-preview"><strong id="environment-mode"></strong>${this._button('Change appearance','appearance','','details-button')}<p id="environment-preview-note"></p></div><div class="environment-links">${infos.map(([id,label])=>this._button(escapeHtml(label),'info',`data-entity="${escapeHtml(id)}"`,'details-button')).join('')}</div><p class="environment-note">Weather conditions come from the provider; the outdoor sensor is a separate local reading. Times use your Home Assistant time zone. If a moon entity is unavailable, the labelled calculated phase uses a mean lunar cycle and is approximate.</p></div>`,{kind:'environment'});
    this._updateEnvironment();
  }
};

export const environmentCss=`
.environment-forecast-list{display:flex;gap:9px;list-style:none;padding:0;margin:12px 0;overflow-x:auto}.environment-forecast-list li{display:flex;flex:0 0 130px;flex-direction:column;gap:8px;padding:12px;background:var(--accent-soft);border-radius:6px;font-size:11px}.environment-forecast-list time,.environment-forecast-list small{color:var(--muted);font-size:10px}.environment-forecast-list strong{font-size:20px}

.environment-panel{background:var(--paper);border:1px solid var(--border);border-radius:10px;overflow:hidden;min-width:0}.environment-weather{display:flex;gap:10px;align-items:center;text-align:left;width:100%;padding:12px 11px;min-height:70px}.environment-weather>span:nth-child(2){min-width:0;flex:1}.environment-weather .eyebrow{font-size:5px}.environment-weather strong{display:block;font-size:14px;line-height:1.4}.environment-weather small{display:flex;gap:6px;flex-wrap:wrap;font-size:11px;line-height:1.5}.env-source{color:var(--muted);font-size:9px}.environment-icon{font-family:Segoe UI Symbol,sans-serif;font-size:31px;color:var(--accent);min-width:32px;text-align:center}.environment-arrow{font-size:18px;color:var(--muted)}.environment-moon,.environment-mode{width:100%;display:flex;align-items:center;gap:8px;padding:8px 12px;text-align:left;font-size:10px;border-top:1px solid var(--line);line-height:1.5}.environment-moon>span:first-child{font-size:15px}.environment-mode{background:var(--accent-soft);font-weight:650;justify-content:space-between}.appearance-preview .environment-mode{background:#e6d59c;color:#4d3a19}.environment-head{padding-bottom:18px;border-bottom:1px solid var(--line)}.environment-head h3{font-size:28px;margin:8px 0}.environment-head p,.environment-sky p,.environment-preview p,.environment-note{font-size:12px;color:var(--muted);line-height:1.6}.environment-readings{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:18px 0}.environment-readings>div{padding:14px;background:var(--accent-soft);border-radius:7px}.environment-readings strong{display:block;font-size:23px;margin-top:7px;overflow-wrap:anywhere}.environment-readings .eyebrow{font-size:6px}.environment-sky{display:grid;gap:20px;grid-template-columns:1fr 1fr;margin:24px 0}.environment-sky h3{margin:6px 0;font-size:18px}.environment-preview{padding:15px;background:var(--accent-soft);border-radius:7px}.environment-preview .details-button{margin:0 0 8px 15px}.environment-links{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}.environment-note{font-size:10px;margin-top:16px}.shell[data-weather="clear"] .environment-icon{animation:skyGlow 5s ease-in-out infinite}.shell[data-weather="rain"] .environment-icon,.shell[data-weather="snow"] .environment-icon{animation:skyDrift 3s ease-in-out infinite}.shell[data-weather="wind"] .environment-icon{animation:skyWind 4s ease-in-out infinite}.shell[data-weather="cloud"] .environment-icon{animation:skyDrift 6s ease-in-out infinite}.shell[data-weather="storm"] .environment-icon{color:#9e663f}
.shell.is-night{--ink:#e3ecd9;--muted:#b2c1b7;--paper:#1e302f;--accent:#a7d3a7;--accent-soft:#304840;--page:#142522;--border:#668275;--line:#496254;--shadow:#0b1715;--green:#add6a9;--lime:#b2cd8c;--red:#e7a59a;--ha-card-background:#1e302f;--card-background-color:#1e302f;--primary-background-color:#1e302f;--secondary-background-color:#304840;--primary-text-color:#e3ecd9;--secondary-text-color:#b2c1b7;--primary-color:#a7d3a7;--divider-color:#496254;--ha-card-border-color:#496254;--input-fill-color:#304840;--input-ink-color:#e3ecd9;--input-label-ink-color:#b2c1b7;--mdc-theme-surface:#1e302f;--mdc-theme-on-surface:#e3ecd9;color:var(--ink);color-scheme:dark;background-color:var(--page);background-image:radial-gradient(#7da88c15 .7px,transparent .7px)}.shell.theme-pokedex.is-night{--page:#281f2b;--paper:#273341;--accent-soft:#364750;--border:#73888d;--shadow:#160e19;--accent:#8fd1d5;--green:#9ed1ce;--line:#4b6370;--ha-card-background:#273341;--card-background-color:#273341;--primary-background-color:#273341;--primary-color:#8fd1d5}.shell.theme-crossing.is-night{--page:#1c3433;--paper:#294342;--accent-soft:#395850;--border:#729986;--line:#4e7162;--shadow:#122521;--ha-card-background:#294342;--card-background-color:#294342;--primary-background-color:#294342}.shell.is-night:not(.has-night-art) .house-map{filter:brightness(.65) saturate(.78) hue-rotate(12deg)}.shell.is-night .world-toolbar,.shell.is-night .dialog-header,.shell.is-night .theme-tabs,.shell.is-night .stat-icon,.shell.is-night .sensor-grid>div,.shell.is-night .energy-total,.shell.is-night .stream-message,.shell.is-night .connect-button,.shell.is-night .notice{background:var(--accent-soft);color:var(--ink);border-color:var(--line)}.shell.is-night .theme-tabs a,.shell.is-night .foot,.shell.is-night .foot>span:last-child,.shell.is-night .brand h1,.shell.is-night .brand .eyebrow,.shell.is-night .brand h1 span,.shell.is-night .clock,.shell.is-night .connection{color:var(--ink)}.shell.is-night .theme-tabs a.current,.shell.is-night .map-tools button.selected{background:var(--accent);color:#17352b}.shell.is-night .room-pin{background:#263e37f2;color:var(--ink);border-color:#99b997;box-shadow:2px 3px 0 #06161080}.shell.is-night .room-pin small{color:var(--muted)}.shell.is-night .room-pin.active{background:#465a37;border-color:#d4d185}.shell.is-night .robot-pin-label{background:#213b33f2;color:var(--ink);border-color:#7eac87}.shell.is-night .mini-cameras button,.shell.is-night .square,.shell.is-night .toggle,.shell.is-night .details-button{background:var(--accent-soft);color:var(--ink);border-color:var(--line)}.shell.is-night .toggle.is-on{background:#585c33;border-color:#b6b877}.shell.is-night .world-panel,.shell.is-night .stat,.shell.is-night .robot-summary,.shell.is-night .dock button{border-color:var(--border);box-shadow:0 3px 0 var(--shadow)}.shell.is-night .environment-icon{color:#d8dda8}.shell.is-night .close,.shell.is-night .alert-top{background:var(--accent);color:#17352b}.shell.is-night .appearance-preview .environment-mode,.shell.is-night.appearance-preview .environment-mode{background:#70623a;color:#fff1c6}.shell.is-night .environment-weather:hover,.shell.is-night .environment-moon:hover{background:var(--accent-soft)}
@keyframes skyGlow{50%{opacity:.7;transform:scale(.95)}}@keyframes skyDrift{50%{transform:translateY(2px)}}@keyframes skyWind{50%{transform:translateX(3px)}}@media(max-width:550px){.environment-weather{padding:10px 9px;gap:6px}.environment-icon{font-size:25px;min-width:26px}.environment-weather strong{font-size:12px}.environment-moon,.environment-mode{font-size:9px;padding:7px 9px}.environment-sky{grid-template-columns:1fr}.environment-readings strong{font-size:20px}.environment-preview .details-button{display:block;margin:8px 0}}@media(prefers-reduced-motion:reduce){.environment-icon{animation:none!important}}
`;
