/* Read-only weather art. CSS shapes stay outside the rooms; real forecasts are
 * labelled separately from the observed current condition. No SVG compositor. */
const escapeWeather=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hasOwn=(object,key)=>Object.prototype.hasOwnProperty.call(object,key);
const weatherKinds={sunny:'clear','clear-night':'clear',partlycloudy:'partly',cloudy:'cloud',fog:'fog',rainy:'rain',pouring:'rain',hail:'hail',snowy:'snow','snowy-rainy':'sleet',lightning:'storm','lightning-rainy':'storm-rain',windy:'wind','windy-variant':'wind-cloud',exceptional:'alert'};
const weatherSymbols={clear:'☀',partly:'⛅',cloud:'☁',fog:'≋',rain:'☂',hail:'◇',snow:'❄',sleet:'❄',storm:'ϟ','storm-rain':'ϟ',wind:'≋','wind-cloud':'≋',alert:'!'};
const number=value=>typeof value==='number'&&Number.isFinite(value)?value:null;
const dateMs=value=>typeof value==='string'&&/^\d{4}-\d\d-\d\dT/.test(value)&&Number.isFinite(Date.parse(value))?Date.parse(value):null;
const compactTime=(time,zone,days=false)=>{try{return new Intl.DateTimeFormat('en-US',{...(days?{weekday:'short'}:{hour:'numeric'}),timeZone:zone||'UTC'}).format(new Date(time));}catch{return '—';}};

export function weatherVisualState(reading={},now=Date.now()){
  const condition=reading.connected!==false&&hasOwn(weatherKinds,reading.condition)?reading.condition:null;
  const effect=condition?weatherKinds[condition]:'none';
  const solar=reading.solar||{},mode=reading.mode||null,elevation=number(solar.elevation);
  // The actual solar elevation and direction keep twilight continuous on both
  // sides of sunrise/sunset, even when HA rolls next_* forward to tomorrow.
  let phase=mode||'unknown';
  if(!reading.preview&&reading.connected!==false&&mode&&solar.status!=='unavailable'){
    const windows=[['dawn',solar.nextRising],['dusk',solar.nextSetting],['dawn',solar.nextDawn],['dusk',solar.nextDusk]];
    const upcoming=windows.map(([kind,value])=>({kind,time:dateMs(value)})).filter(x=>x.time!==null&&x.time>=now&&x.time-now<=45*60000).sort((a,b)=>a.time-b.time)[0];
    if(elevation!==null&&elevation>=-8&&elevation<=8&&typeof solar.rising==='boolean')phase=solar.rising?'dawn':'dusk';
    else if(upcoming&&elevation!==null&&elevation>-12&&elevation<12)phase=upcoming.kind;
  }
  const forecast=reading.forecast||{},status=['ready','loading','stale','unavailable'].includes(forecast.status)?forecast.status:'unavailable';
  const items=['ready','stale'].includes(status)&&Array.isArray(forecast.items)?forecast.items.filter(i=>number(i?.time)!==null&&i.time>=now).sort((a,b)=>a.time-b.time).slice(0,4):[];
  const next=solar.nextTransition,time=number(next?.time);
  const transition=time!==null&&time>=now&&reading.connected!==false?`${({sunrise:'Sunrise',sunset:'Sunset',dawn:'Dawn',dusk:'Dusk',rising:'Sunrise',setting:'Sunset'})[next.kind]||'Sun transition'} ${compactTime(time,forecast.timeZone)}`:'';
  return {available:Boolean(condition),condition,effect,mode,phase,night:mode==='night',clouds:['partly','cloud','rain','hail','snow','sleet','storm','storm-rain','wind-cloud'].includes(effect),
    rain:['rain','hail','sleet','storm-rain'].includes(effect),snow:['snow','sleet'].includes(effect),wind:['wind','wind-cloud'].includes(effect),fog:effect==='fog',
    symbol:effect==='clear'&&mode==='night'?'☾':weatherSymbols[effect]||'—',status,items,kind:forecast.kind,forecast,transition};
}

function forecastTiles(state,reading){
  const source=state.forecast,days=source.kind==='daily'||source.kind==='twice_daily';
  const heading=state.status==='stale'?'SAVED FORECAST':days?'NEXT DAYS':'NEXT HOURS';
  const updated=number(source.fetchedAt)!==null?`Updated ${compactTime(source.fetchedAt,source.timeZone)}`:'';
  const current=`<span class="wx-now"><small>NOW${reading.preview?' · ART PREVIEW':''}</small><span><i aria-hidden="true">${state.symbol}</i><b>${escapeWeather(reading.temp||'—')}</b></span><em>${escapeWeather(state.available?reading.weatherLabel:'Weather unavailable')}</em></span>`;
  if(!state.items.length){
    const message=state.status==='loading'?'Loading forecast…':'Forecast unavailable';
    return `${current}<span class="wx-forecast-empty"><small>OUTLOOK</small><b>${message}</b><em>${escapeWeather(state.transition||'Open weather details')}</em></span>`;
  }
  const cards=state.items.map((item,index)=>{
    const kind=hasOwn(weatherKinds,item.condition)?weatherKinds[item.condition]:'none',isNight=item.condition==='clear-night'||item.daylight===false,icon=kind==='clear'&&isNight?'☾':weatherSymbols[kind]||'—';
    const temperature=item.temperatureLabel&&item.temperatureLabel!=='Unavailable'?item.temperatureLabel:number(item.temperature)!==null&&item.temperatureUnit?`${Math.round(item.temperature)}${item.temperatureUnit}`:'—';
    const pop=number(item.precipitationProbability),precip=pop!==null&&pop>=0&&pop<=100?` · ${Math.round(pop)}% precipitation chance`:'';
    return `<span class="wx-hour" data-forecast-effect="${kind}" data-daylight="${isNight?'night':item.daylight===true?'day':'unknown'}" title="${escapeWeather(`${item.label||'Condition unavailable'}${precip}`)}"><small>${escapeWeather(compactTime(item.time,source.timeZone,days))}</small><span><i aria-hidden="true">${icon}</i><b>${escapeWeather(temperature)}</b></span><em>${escapeWeather(item.label||'Unavailable')}</em>${pop!==null&&pop>=0&&pop<=100?`<span class="wx-pop">${Math.round(pop)}%</span>`:''}</span>`;
  }).join('');
  return `${current}<span class="wx-outlook"><small class="wx-forecast-heading">${heading}<span>${escapeWeather(state.status==='stale'?'Last received':state.transition||updated)}</span></small><span class="wx-hours">${cards}</span></span>`;
}

export const weatherVisualMethods={
  _weatherVisualMarkup(){
    if(this._theme!=='stardew')return '';
    const particles=Array.from({length:8},(_,i)=>`<i style="--wx-x:${(i*29+7)%100}%;--wx-y:${(i*37+5)%92}%;--wx-delay:${-(i%7)*.61}s;--wx-duration:${2.1+(i%4)*.42}s"></i>`).join('');
    const band=name=>`<div class="wx-weather-band wx-band-${name}"><div class="wx-rain">${particles}</div><div class="wx-snow">${particles}</div><div class="wx-fog"></div><div class="wx-wind"><i></i><i></i><i></i></div>${name==='left'?'<span class="wx-lightning"></span>':''}</div>`;
    return `<div class="weather-stage" data-weather-visual="none" data-sky-phase="unknown"><div class="weather-atmosphere" aria-hidden="true"><div class="wx-light-wash"></div><div class="wx-sky-band"><span class="wx-sun"></span><span class="wx-moon"></span><span class="wx-cloud wx-cloud-one"></span><span class="wx-cloud wx-cloud-two"></span></div>${band('left')}${band('top')}${band('garden')}</div><button class="scene-forecast" data-action="weather" aria-label="Open current weather and forecast"><span class="wx-forecast-empty"><small>WEATHER</small><b>Checking weather…</b></span></button></div>`;
  },
  _updateWeatherVisuals(){
    if(this._theme!=='stardew')return;
    const stage=this._q('.weather-stage');if(!stage)return;
    const reading=this._environment||{},state=weatherVisualState(reading);
    stage.dataset.weatherVisual=state.effect;stage.dataset.skyPhase=state.phase;
    stage.dataset.available=String(state.available);stage.dataset.night=String(state.night);
    stage.dataset.forecastStatus=state.status;
    const button=this._q('.scene-forecast');if(!button)return;
    const html=forecastTiles(state,reading);
    if(button.innerHTML!==html)button.innerHTML=html;
    const forecastLabel=state.status==='stale'?'Saved forecast; refresh unavailable':state.items.length?`${state.kind==='hourly'?'Upcoming hours':'Upcoming days'} forecast`:state.status==='loading'?'Forecast loading':'Forecast unavailable';
    button.setAttribute('aria-label',`Now: ${state.available?reading.weatherLabel:'weather unavailable'}, ${reading.temp||'temperature unavailable'}. ${forecastLabel}. Open weather details.`);
    button.title=[state.available?reading.weatherLabel:'Weather unavailable',state.forecast.reason,state.transition].filter(Boolean).join(' · ');
  }
};
