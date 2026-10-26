/* Pure state + inert DOM tests. No network, HA services, native cards or real waits. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'ishioho-environment.js'),'utf8');
let fakeNow=null,timerId=0;const timers=new Map();class TestDate extends Date{static now(){return fakeNow??Date.now();}}
const api=vm.runInNewContext('(function(){'+source.replace(/\bexport /g,'')+';return {finiteReading,approximateMoonPhase,environmentReading,environmentMethods,environmentCss,normalizeForecast,forecastReading,solarReading};})()',{Date:TestDate,Intl,console,setTimeout:(fn,ms)=>{const id=++timerId;timers.set(id,{fn,ms});return id;},clearTimeout:id=>timers.delete(id)});
const{finiteReading,approximateMoonPhase,environmentReading,environmentMethods,environmentCss,normalizeForecast,forecastReading,solarReading}=api;
const entity=(state,attributes={})=>({state,attributes});
const states=()=>({'sun.sun':entity('above_horizon',{next_rising:'2026-10-26T14:30:00Z',next_setting:'2026-10-26T01:15:00Z'}),'sensor.hub_temperature':entity('80.96',{unit_of_measurement:'°F'}),'sensor.hub_humidity':entity('51',{unit_of_measurement:'%'}),'weather.forecast_ishioho_city':entity('sunny',{temperature:82,temperature_unit:'°F',humidity:49,wind_speed:4,wind_speed_unit:'mph',cloud_coverage:8,pressure:1011,pressure_unit:'hPa'}),'sensor.moon_phase':entity('waxing_gibbous')});
const hass=()=>({states:states(),config:{time_zone:'America/Los_Angeles'},connected:true});
const tests=[];const test=(name,fn)=>tests.push([name,fn]);
class Node{constructor(){this.textContent='';this.dataset={};this.attrs={};this.writes=0;const c=new Set();this.classList={toggle(n,on){on?c.add(n):c.delete(n);},contains:n=>c.has(n)};}setAttribute(k,v){this.attrs[k]=v;this.writes++;}getAttribute(k){return this.attrs[k];}}
function fixture(){const nodes=new Map();const p=Object.assign({_hass:hass(),_config:{night_assets:true},_theme:'pokemon',_q(s){if(!nodes.has(s))nodes.set(s,new Node());return nodes.get(s);},_text(s,v){this._q(s).textContent=String(v);},_button:(label,action,attrs='',cls='')=>`<button data-action="${action}" class="${cls}" ${attrs}>${label}</button>`,_dialog(title,html,opts){this._modal=opts.kind;this.dialog={title,html};},_build(){throw Error('Unexpected DOM rebuild');},_mountCameras(){throw Error('Unexpected camera mount');}},environmentMethods);return{p,nodes};}

test('finite parsing preserves zero/negative and rejects coercions, malformed text, infinity',()=>{
  for(const value of [null,undefined,'',' ','12oops','0x10',Infinity,-Infinity,NaN,{},true])assert.equal(finiteReading(value),null,String(value));
  for(const[value,expected]of [['0',0],[-1.5,-1.5],[' .5 ',.5],['2e2',200]])assert.equal(finiteReading(value),expected);
});
test('sun state controls automatic appearance regardless of clock or weather condition',()=>{
  const h=hass();assert.equal(environmentReading(h,{},Date.UTC(2026,0,1,0)).mode,'day');h.states['sun.sun'].state='below_horizon';assert.equal(environmentReading(h,{},Date.UTC(2026,0,1,12)).mode,'night');assert.equal(environmentReading(h).weatherLabel,'Sunny');
});
test('unknown or disconnected sun never becomes invented automatic day or night',()=>{
  const h=hass();for(const s of ['unknown','unavailable','', 'day']){h.states['sun.sun'].state=s;const r=environmentReading(h);assert.equal(r.mode,null);assert.equal(r.modeLabel,'Auto · Sun unavailable');}h.connected=false;h.states['sun.sun'].state='below_horizon';assert.equal(environmentReading(h).mode,null);
});
test('preview is explicit, independent from real weather, and instance-only',()=>{
  const{p}=fixture();p._cycleAppearance();assert.equal(p._appearance,'day');assert.match(p._environment.modeLabel,/Preview · Day/);p._cycleAppearance();assert.equal(p._environment.mode,'night');assert.equal(p._environment.weatherLabel,'Sunny');assert.equal(p._q('.shell').classList.contains('appearance-preview'),true);p._cycleAppearance();assert.equal(p._environment.mode,'day');assert.equal(p._environment.preview,false);assert.equal(fixture().p._appearance,undefined);
});
test('missing sun after valid night retains artwork with unavailable label',()=>{
  const{p}=fixture();p._hass.states['sun.sun'].state='below_horizon';p._updateEnvironment();delete p._hass.states['sun.sun'];p._updateEnvironment();assert.equal(p._q('.shell').classList.contains('is-night'),true);assert.equal(p._q('#env-mode').textContent,'Auto · Sun unavailable');
});
test('every official weather condition maps to a real labelled effect',()=>{
  const h=hass();for(const s of ['clear-night','cloudy','fog','hail','lightning','lightning-rainy','partlycloudy','pouring','rainy','snowy','snowy-rainy','sunny','windy','windy-variant','exceptional']){h.states['weather.forecast_ishioho_city'].state=s;const r=environmentReading(h);assert.equal(r.condition,s);assert.notEqual(r.weatherEffect,'none');assert.ok(!r.weatherLabel.includes('unavailable'));}
});
test('no weather provider gives explicit missing data and never infers sunny from sun',()=>{
  const h=hass();delete h.states['weather.forecast_ishioho_city'];const r=environmentReading(h);assert.equal(r.weatherLabel,'Weather not connected');assert.equal(r.weatherEffect,'none');assert.equal(r.temp,'81°F');assert.equal(r.tempSource,'Outside sensor');
});
test('unavailable or unrecognized weather does not animate a fabricated condition',()=>{
  const h=hass();for(const s of ['unknown','unavailable','toString','__proto__','<img src=x onerror=alert(1)>']){h.states['weather.forecast_ishioho_city'].state=s;const r=environmentReading(h);assert.equal(r.weatherEffect,'none');assert.equal(r.condition,null);assert.ok(r.weatherLabel.includes('unavailable'));}
});
test('dynamic weather discovery and configured provider selection are deterministic',()=>{
  const h=hass();delete h.states['weather.forecast_ishioho_city'];h.states['weather.old']=entity('unavailable');h.states['weather.new']=entity('rainy');assert.equal(environmentReading(h).weatherId,'weather.new');assert.equal(environmentReading(h,{weather_entity:'weather.old'}).weatherLabel,'Weather unavailable');
});
test('outside temperature is distinct from weather; fallback keeps source and units',()=>{
  const h=hass();let r=environmentReading(h);assert.equal(r.outsideTemp,'81°F');assert.equal(r.providerTemp,'82°F');h.states['sensor.hub_temperature'].state='unavailable';r=environmentReading(h);assert.equal(r.temp,'82°F');assert.equal(r.tempSource,'Weather provider');h.states['weather.forecast_ishioho_city'].attributes.temperature=0;r=environmentReading(h);assert.equal(r.temp,'0°F');
});
test('bad units and malformed readings never leak NaN, Infinity or unsafe content',()=>{
  const h=hass();h.states['sensor.hub_temperature'].attributes.unit_of_measurement='<script>';h.states['weather.forecast_ishioho_city'].attributes.temperature='oops';h.states['weather.forecast_ishioho_city'].attributes.wind_speed=Infinity;h.states['sensor.hub_humidity'].state='101';const r=environmentReading(h);assert.equal(r.outsideTemp,'Unit unavailable');assert.equal(r.temp,'Unavailable');assert.equal(r.wind,'Unavailable');assert.equal(r.humidity,'Unavailable');assert.ok(!JSON.stringify(r).includes('<script>'));
});
test('provider humidity, pressure, wind and clouds preserve zero and validate bounds',()=>{
  const h=hass(),a=h.states['weather.forecast_ishioho_city'].attributes;Object.assign(a,{humidity:0,cloud_coverage:0,wind_speed:0,pressure:0});let r=environmentReading(h);assert.equal(r.wind,'0 mph');assert.equal(r.weatherHumidity,'0%');assert.equal(r.cloud,'0%');assert.equal(r.pressure,'0 hPa');a.cloud_coverage=-1;a.humidity=200;a.wind_speed=-1;r=environmentReading(h);assert.equal(r.cloud,'Unavailable');assert.equal(r.wind,'Unavailable');assert.equal(r.weatherHumidity,'Unavailable');
});
test('disconnected readings are not presented as current cached sensor values',()=>{
  const h=hass();h.connected=false;const r=environmentReading(h);assert.equal(r.temp,'Unavailable');assert.equal(r.humidity,'Unavailable');assert.equal(r.wind,'Unavailable');assert.equal(r.weatherEffect,'none');assert.match(r.weatherLabel,/connection lost/);assert.match(r.moonLabel,/calculated/);assert.equal(r.nextRise,'Unavailable');
});
test('official moon phase is preferred and labelled without approximate claim',()=>{
  const h=hass();for(const phase of ['new_moon','waxing_crescent','first_quarter','waxing_gibbous','full_moon','waning_gibbous','last_quarter','waning_crescent']){h.states['sensor.moon_phase'].state=phase;const r=environmentReading(h);assert.equal(r.moon.state,phase);assert.equal(r.moon.calculated,false);assert.ok(!r.moonLabel.includes('calculated'));}
});
test('fallback moon uses a documented epoch and normalized mean cycle',()=>{
  const epoch=Date.UTC(2000,0,6,18,14),period=29.530588*86400000;assert.equal(approximateMoonPhase(epoch).state,'new_moon');assert.equal(approximateMoonPhase(epoch+period/4).state,'first_quarter');assert.equal(approximateMoonPhase(epoch+period/2).state,'full_moon');assert.equal(approximateMoonPhase(epoch-period/4).state,'last_quarter');assert.equal(approximateMoonPhase(NaN),null);const h=hass();delete h.states['sensor.moon_phase'];assert.match(environmentReading(h,{},epoch).moonLabel,/New moon · calculated/);assert.match(source,/29\.530588/);assert.match(source,/eclipse\.gsfc\.nasa\.gov/);
});
test('sun events format using HA zone and reject invalid times or zones',()=>{
  const h=hass();let r=environmentReading(h);assert.match(r.nextRise,/7:30 AM/);assert.match(r.nextSet,/6:15 PM/);h.states['sun.sun'].attributes.next_rising='garbage';assert.equal(environmentReading(h).nextRise,'Unavailable');h.config.time_zone='invalid';assert.equal(environmentReading(h).nextSet,'Unavailable');
});
test('update switches only map sources that change, never remounting the dashboard',()=>{
  const{p}=fixture();p._updateEnvironment();const image=p._q('.animated-map');assert.equal(image.attrs.src,'/local/ishioho/pokemon-map-v8.png?v=8');const writes=image.writes;p._updateEnvironment();assert.equal(image.writes,writes);p._hass.states['sun.sun'].state='below_horizon';p._updateEnvironment();assert.equal(image.attrs.src,'/local/ishioho/pokemon-night-map-v8.png?v=8');assert.equal(p._q('.still-map').attrs.src,'/local/ishioho/pokemon-night-still-v8.png?v=8');assert.equal(p._q('.shell').classList.contains('has-night-art'),true);assert.equal(p._q('.shell').classList.contains('is-night'),true);
});
test('no night asset configuration uses CSS fallback and never requests an image',()=>{
  const{p}=fixture();p._config={};p._hass.states['sun.sun'].state='below_horizon';p._updateEnvironment();assert.equal(p._q('.animated-map').writes,0);assert.match(environmentCss,/is-night:not\(\.has-night-art\) \.house-map/);
});
test('all four theme asset profiles preserve their expected local day and night paths',()=>{
  const{p}=fixture();for(const[theme,suffix,ext,version]of [['pokemon','-v8','png',8],['pokedex','','svg',6],['crossing','','svg',6],['stardew','-v3','png',3]]){
    p._theme=theme;for(const night of [false,true])for(const type of ['map','still'])assert.equal(p._mapAsset(type,night),`/local/ishioho/${theme}${night?'-night':''}-${type}${suffix}.${ext}?v=${version}`);
  }
  for(const theme of ['unknown','../outside','__proto__','constructor']){p._theme=theme;assert.equal(p._mapAsset(),'\/local/ishioho/pokemon-map-v8.png?v=8');}
});
test('Stardew sun changes and manual preview switch both art layers without rebuilding controls',()=>{
  const{p}=fixture();p._theme='stardew';p._updateEnvironment();const art=p._q('.animated-map');
  assert.equal(art.attrs.src,'/local/ishioho/stardew-map-v3.png?v=3');const writes=art.writes;p._updateEnvironment();assert.equal(art.writes,writes);
  p._hass.states['sun.sun'].state='below_horizon';p._updateEnvironment();assert.equal(art.attrs.src,'/local/ishioho/stardew-night-map-v3.png?v=3');assert.equal(p._q('.still-map').attrs.src,'/local/ishioho/stardew-night-still-v3.png?v=3');
  p._cycleAppearance();assert.equal(art.attrs.src,'/local/ishioho/stardew-map-v3.png?v=3');assert.equal(p._environment.modeLabel,'Preview · Day');assert.equal(p._hass.states['sun.sun'].state,'below_horizon');
});
test('open weather popup is live and does not replace its markup on sensor updates',()=>{
  const{p}=fixture();p._openEnvironment();assert.equal(p._modal,'environment');assert.equal(p._q('#environment-condition').textContent,'Sunny');const html=p.dialog.html;p._hass.states['weather.forecast_ishioho_city'].state='rainy';p._hass.states['sensor.hub_temperature'].state='64';p._updateEnvironment();assert.equal(p.dialog.html,html);assert.equal(p._q('#environment-condition').textContent,'Rain');assert.equal(p._q('#environment-outside').textContent,'64°F');assert.match(html,/Weather details &amp; forecast/);
});
test('dynamic provider labels are text only, entity IDs escaped in popup links',()=>{
  const{p}=fixture();const id='weather.bad" data-evil="x';p._config.weather_entity=id;p._hass.states[id]=entity('sunny',{friendly_name:'<img src=x onerror=alert(1)>'});p._openEnvironment();assert.ok(p.dialog.html.includes('weather.bad&quot; data-evil=&quot;x'));assert.ok(!p.dialog.html.includes('<img'));assert.equal(p._q('#environment-source').textContent,'<img src=x onerror=alert(1)>');
});
test('appearance/weather updates need no service or native-card methods and respect motion preference',()=>{
  const{p}=fixture();for(let i=0;i<10;i++)p._cycleAppearance();p._openEnvironment();assert.match(environmentCss,/@media\(prefers-reduced-motion:reduce\)/);assert.match(environmentCss,/--primary-text-color:#e3ecd9/);assert.match(environmentCss,/--ha-card-background/);
});

const forecastEpoch=Date.parse('2026-10-26T02:15:00Z');
function forecastFixture(flags=3){fakeNow=forecastEpoch;const{p}=fixture();p.isConnected=true;p._hass.states['weather.forecast_ishioho_city'].attributes.supported_features=flags;return p;}
function forecastRows(){return[{datetime:'2026-10-26T02:00:00Z',condition:'sunny',temperature:80,precipitation:0},{datetime:'2026-10-26T03:00:00Z',condition:'rainy',temperature:70,precipitation:0.1},{datetime:'2026-10-26T04:00:00Z',condition:'cloudy',temperature:68}];}
const response=(rows=forecastRows(),entityId='weather.forecast_ishioho_city')=>({response:{[entityId]:{forecast:rows}}});
async function settle(p){if(p._forecastPending)await p._forecastPending;await Promise.resolve();}

test('forecast normalization sorts, deduplicates and rejects malformed or expired times without inventing conditions',()=>{
  const weather={attributes:{temperature_unit:'°F',wind_speed_unit:'mph',precipitation_unit:'in'}};
  const rows=[forecastRows()[2],{datetime:'not-a-date',condition:'sunny',temperature:20},{datetime:'2026-10-26T03:00:00',condition:'sunny'},{datetime:'2026-10-25T00:00:00Z',condition:'sunny'},forecastRows()[0],forecastRows()[2],{datetime:'2026-10-26T03:00:00Z',condition:'<img onerror=x>',temperature:'0'}];
  const normalized=normalizeForecast(rows,weather,'hourly',forecastEpoch,'America/Los_Angeles');assert.equal(normalized.length,3);assert.equal(normalized[0].temperature,80);assert.equal(normalized[1].condition,null);assert.equal(normalized[1].label,'Condition unavailable');assert.equal(normalized[1].temperature,0);assert.equal(normalized[1].effect,'none');assert.ok(!JSON.stringify(normalized).includes('<img'));
});
test('forecast missing probabilities remain null while real zero values and provider daylight survive',()=>{
  const rows=forecastRows();Object.assign(rows[0],{precipitation_probability:0,is_daytime:false,wind_speed:0,templow:0});Object.assign(rows[1],{precipitation_probability:101,is_daytime:'false'});
  const items=normalizeForecast(rows,{attributes:{temperature_unit:'°F',precipitation_unit:'in',wind_speed_unit:'mph'}},'hourly',forecastEpoch);
  assert.equal(items[0].precipitation,0);assert.equal(items[0].precipitationProbability,0);assert.equal(items[0].windSpeed,0);assert.equal(items[0].temperatureLow,0);assert.equal(items[0].daylight,false);assert.equal(items[1].precipitationProbability,null);assert.equal(items[1].daylight,null);assert.equal(items[2].precipitationProbability,null);
  const unknown=normalizeForecast(rows,{attributes:{temperature_unit:'<bad>',wind_speed_unit:'<bad>'}},'hourly',forecastEpoch)[0];assert.equal(unknown.temperature,null);assert.equal(unknown.windSpeed,null);assert.equal(unknown.temperatureLabel,'Unit unavailable');
});
test('today and daily periods use the HA time zone instead of UTC or the browser date',()=>{
  const zone='America/Los_Angeles',items=normalizeForecast([{datetime:'2026-10-24T19:00:00Z',condition:'sunny',temperature:80},{datetime:'2026-10-25T19:00:00Z',condition:'sunny',temperature:82},{datetime:'2026-10-26T19:00:00Z',condition:'rainy',temperature:70}],{attributes:{temperature_unit:'°F'}},'daily',forecastEpoch,zone);
  assert.equal(items.length,2);const view=forecastReading({items,fetchedAt:forecastEpoch,expiresAt:forecastEpoch+900000,nextRefreshAt:forecastEpoch+900000},{kind:'daily',now:forecastEpoch,zone,condition:'sunny'});assert.equal(view.today.length,1);assert.equal(view.today[0].temperature,82);assert.equal(view.next.temperature,70);assert.equal(view.nextChange,null);
});
test('local-day forecast filtering works when Intl format falls back to month-first text',()=>{
  class MonthFirstFormatter {
    constructor(locale,options){this.options=options;this.real=new Intl.DateTimeFormat(locale,options);}
    format(date){return this.options.year&&this.options.month&&this.options.day?'10/25/2026':this.real.format(date);}
    formatToParts(date){return this.real.formatToParts(date);}
  }
  const scoped=vm.runInNewContext('(function(){'+source.replace(/\bexport /g,'')+';return {normalizeForecast,forecastReading};})()',{
    Date:TestDate,Intl:{DateTimeFormat:MonthFirstFormatter,NumberFormat:Intl.NumberFormat},console,setTimeout,clearTimeout
  });
  const zone='America/Los_Angeles',rows=[{datetime:'2026-10-26T03:00:00Z',condition:'sunny',temperature:78},{datetime:'2026-10-26T19:00:00Z',condition:'rainy',temperature:70}];
  const items=scoped.normalizeForecast(rows,{attributes:{temperature_unit:'°F'}},'hourly',forecastEpoch,zone);
  const view=scoped.forecastReading({items,fetchedAt:forecastEpoch,expiresAt:forecastEpoch+900000,nextRefreshAt:forecastEpoch+900000},{kind:'hourly',now:forecastEpoch,zone,condition:'sunny'});
  assert.equal(items[0].localDate,'2026-10-25');assert.equal(items[1].localDate,'2026-10-26');assert.equal(view.today.length,1);assert.equal(view.today[0].temperature,78);
});
test('solar timing uses supplied future events only and validates elevation, rising and disconnection',()=>{
  const sun=entity('above_horizon',{next_rising:'2026-10-26T14:00:00Z',next_setting:'2026-10-26T03:00:00Z',next_dawn:'bad',next_dusk:'2026-10-26T03:25:00Z',elevation:4.2,rising:false});
  const solar=solarReading(sun,true,forecastEpoch);assert.equal(solar.mode,'day');assert.equal(solar.elevation,4.2);assert.equal(solar.rising,false);assert.equal(solar.nextDawn,null);assert.equal(solar.nextTransition.kind,'sunset');assert.equal(solar.nextTransition.minutesUntil,45);
  assert.equal(solarReading(sun,false,forecastEpoch).nextTransition,null);assert.equal(solarReading(sun,true,Date.parse('2026-10-27T00:00:00Z')).nextSetting,null);sun.attributes.elevation=120;assert.equal(solarReading(sun,true,forecastEpoch).elevation,null);
});
test('hourly retrieval uses the supported read-only response envelope and keeps current readings distinct',async()=>{
  const p=forecastFixture(),calls=[];p._hass.callWS=async request=>{calls.push(request);return response();};p._hass.callService=()=>{throw Error('No control service');};p._hass.states['weather.forecast_ishioho_city'].last_updated='2026-10-26T01:10:00Z';p._updateEnvironment();assert.equal(p._environment.forecast.status,'loading');await settle(p);
  assert.equal(calls.length,1);assert.equal(JSON.stringify(calls[0]),JSON.stringify({type:'call_service',domain:'weather',service:'get_forecasts',service_data:{type:'hourly'},target:{entity_id:'weather.forecast_ishioho_city'},return_response:true}));assert.equal(p._environment.forecast.status,'ready');assert.equal(p._environment.providerTemp,'82°F');assert.equal(p._environment.condition,'sunny');assert.equal(p._environment.forecast.items[0].temperature,80);assert.equal(p._environment.forecast.nextChange.condition,'rainy');assert.notEqual(p._environment.weatherUpdatedAt,new Date(p._environment.forecast.fetchedAt).toISOString());assert.equal(timers.size,0);
});
test('repeated state updates and another theme share a fifteen minute forecast cache',async()=>{
  const p=forecastFixture();let calls=0;const callWS=async()=>{calls++;return response();};p._hass.callWS=callWS;p._updateEnvironment();await settle(p);for(let i=0;i<30;i++)p._updateEnvironment();const other=forecastFixture();other._hass.callWS=callWS;other._theme='stardew';other._updateEnvironment();await settle(other);assert.equal(calls,1);
  fakeNow+=900001;p._updateEnvironment();await settle(p);assert.equal(calls,2);
});
test('expired cache starts only one refresh while its response remains pending',async()=>{
  const p=forecastFixture();let calls=0,resolveRefresh;p._hass.callWS=()=>{calls++;return calls===1?Promise.resolve(response()):new Promise(done=>{resolveRefresh=done;});};
  p._updateEnvironment();await settle(p);fakeNow+=900001;p._updateEnvironment();await Promise.resolve();const pending=p._forecastPending;
  for(let i=0;i<50;i++){fakeNow+=1000;p._updateEnvironment();}assert.equal(calls,2);assert.equal(p._forecastPending,pending);assert.equal(p._environment.forecast.status,'stale');
  resolveRefresh(response());await settle(p);assert.equal(calls,2);assert.equal(p._environment.forecast.status,'ready');assert.equal(timers.size,0);
});
test('daily and twice-daily providers are selected from declared capabilities only',async()=>{
  for(const[flags,kind]of [[1,'daily'],[4,'twice_daily']]){const p=forecastFixture(flags);let requested;p._hass.callWS=async request=>{requested=request.service_data.type;return response();};p._updateEnvironment();await settle(p);assert.equal(requested,kind);assert.equal(p._environment.forecast.kind,kind);}
});
test('failed refresh retains clearly stale forecast and retries no more than once in five minutes',async()=>{
  const p=forecastFixture();let calls=0,fail=false;p._hass.callWS=async()=>{calls++;if(fail)throw Error('private backend details');return response();};p._updateEnvironment();await settle(p);fakeNow+=900001;fail=true;p._updateEnvironment();await settle(p);assert.equal(p._environment.forecast.status,'stale');assert.ok(p._environment.forecast.items.length);assert.ok(!p._environment.forecast.reason.includes('private'));for(let i=0;i<50;i++)p._updateEnvironment();assert.equal(calls,2);fakeNow+=300001;p._updateEnvironment();await settle(p);assert.equal(calls,3);fakeNow=forecastEpoch+3600001;p._updateEnvironment();await settle(p);assert.equal(p._environment.forecast.status,'unavailable');assert.equal(p._environment.forecast.items.length,0);
});
test('forecast timeout settles and backs off without leaving timers or a loading state forever',async()=>{
  const p=forecastFixture();let calls=0;p._hass.callWS=()=>{calls++;return new Promise(()=>{});};p._updateEnvironment();await Promise.resolve();assert.equal(timers.size,1);for(const timer of [...timers.values()]){assert.equal(timer.ms,20000);timer.fn();}await settle(p);assert.equal(p._environment.forecast.status,'unavailable');assert.equal(timers.size,0);p._updateEnvironment();assert.equal(calls,1);
});
test('late forecast after detach does not repaint a removed card and can populate shared cache safely',async()=>{
  const p=forecastFixture();let resolve;p._hass.callWS=()=>new Promise(done=>{resolve=done;});p._updateEnvironment();await Promise.resolve();const pending=p._forecastPending;p.isConnected=false;p._stopForecast();let visualUpdates=0;p._updateWeatherVisuals=()=>visualUpdates++;resolve(response());await pending;await Promise.resolve();assert.equal(visualUpdates,0);p.isConnected=true;p._updateEnvironment();assert.equal(p._environment.forecast.status,'ready');assert.equal(visualUpdates,1);
});
test('closing the weather popup during retrieval never reopens it or mounts cameras',async()=>{
  const p=forecastFixture();let resolve;p._hass.callWS=()=>new Promise(done=>{resolve=done;});p._openEnvironment();await Promise.resolve();p._modal=null;const original=p.dialog;resolve(response());await settle(p);assert.equal(p._modal,null);assert.equal(p.dialog,original);assert.equal(p._environment.forecast.status,'ready');
});
test('provider changes reject late old-provider responses and disconnected data is never presented current',async()=>{
  const p=forecastFixture();let resolveOld;p._hass.callWS=request=>request.target.entity_id==='weather.forecast_ishioho_city'?new Promise(done=>{resolveOld=done;}):Promise.resolve(response(forecastRows(),'weather.other'));
  p._updateEnvironment();await Promise.resolve();const old=p._forecastPending;p._config.weather_entity='weather.other';p._hass.states['weather.other']=entity('rainy',{supported_features:2,temperature_unit:'°F'});p._updateEnvironment();await settle(p);resolveOld(response());await old;assert.equal(p._environment.forecast.entityId,'weather.other');p._hass.connected=false;p._updateEnvironment();assert.equal(p._environment.forecast.status,'unavailable');assert.equal(p._environment.forecast.items.length,0);
});
test('unsupported forecasts and malformed responses remain explicit and do not become sunny predictions',async()=>{
  const p=forecastFixture(0);let calls=0;p._hass.callWS=async()=>{calls++;return {response:{}};};p._updateEnvironment();assert.equal(calls,0);assert.equal(p._environment.forecast.status,'unavailable');p._hass.states['weather.forecast_ishioho_city'].attributes.supported_features=2;p._updateEnvironment();await settle(p);assert.equal(calls,1);assert.equal(p._environment.forecast.items.length,0);assert.equal(p._environment.forecast.next,null);
});
test('forecast rendering escapes unavailable text and never fabricates a missing precipitation chance',()=>{
  const p=forecastFixture();assert.ok(!p._forecastMarkup({items:[],reason:'<img onerror=x>'}).includes('<img'));const items=normalizeForecast(forecastRows(),{attributes:{temperature_unit:'°F'}},'hourly',forecastEpoch);const html=p._forecastMarkup({items,kind:'hourly',status:'ready',fetchedAt:forecastEpoch,timeZone:'UTC'});assert.ok(html.includes('Provider forecast'));assert.ok(!html.includes('precipitation chance'));assert.ok(html.includes('predictions, not current observations'));
});
test('hourly popup includes every remaining today period and labels next-date data explicitly',()=>{
  const p=forecastFixture();fakeNow=Date.parse('2026-10-25T15:15:00Z');const zone='America/Los_Angeles',rows=Array.from({length:24},(_,i)=>({datetime:new Date(Date.parse('2026-10-25T15:00:00Z')+i*3600000).toISOString(),condition:'sunny',temperature:70+i}));
  const items=normalizeForecast(rows,{attributes:{temperature_unit:'°F'}},'hourly',fakeNow,zone),html=p._forecastMarkup({items,kind:'hourly',status:'ready',fetchedAt:fakeNow,timeZone:zone});
  const [today,upcoming]=html.split('Upcoming · 2026-10-26');assert.equal((today.match(/<li>/g)||[]).length,16);assert.equal((upcoming.match(/<li>/g)||[]).length,6);assert.match(today,/Today · 2026-10-25/);assert.match(today,/11:00 PM/);assert.ok(!today.includes('12:00 AM'));
  const onlyTomorrow=p._forecastMarkup({items:items.filter(item=>item.localDate==='2026-10-26'),kind:'hourly',status:'ready',fetchedAt:fakeNow,timeZone:zone});assert.match(onlyTomorrow,/No remaining hourly periods for today were returned/);assert.match(onlyTomorrow,/Upcoming · 2026-10-26/);
});

(async()=>{let failed=0;for(const[name,fn]of tests){try{await fn();console.log('PASS '+name);}catch(e){failed++;console.error('FAIL '+name+'\n  '+e.stack);}finally{fakeNow=null;timers.clear();}}console.log(`${tests.length-failed}/${tests.length} ishioho environment tests passed. Device and network calls were mocked.`);process.exitCode=failed?1:0;})();
