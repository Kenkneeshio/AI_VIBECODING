/* Pure state + inert DOM tests. No network, HA services, native cards or real waits. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'ishioho-environment.js'),'utf8');
const api=vm.runInNewContext('(function(){'+source.replace(/\bexport /g,'')+';return {finiteReading,approximateMoonPhase,environmentReading,environmentMethods,environmentCss};})()',{Date,Intl,console});
const{finiteReading,approximateMoonPhase,environmentReading,environmentMethods,environmentCss}=api;
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
  const{p}=fixture();for(const[theme,suffix,ext,version]of [['pokemon','-v8','png',8],['pokedex','','svg',6],['crossing','','svg',6],['stardew','-v1','png',1]]){
    p._theme=theme;for(const night of [false,true])for(const type of ['map','still'])assert.equal(p._mapAsset(type,night),`/local/ishioho/${theme}${night?'-night':''}-${type}${suffix}.${ext}?v=${version}`);
  }
  for(const theme of ['unknown','../outside','__proto__','constructor']){p._theme=theme;assert.equal(p._mapAsset(),'\/local/ishioho/pokemon-map-v8.png?v=8');}
});
test('Stardew sun changes and manual preview switch both art layers without rebuilding controls',()=>{
  const{p}=fixture();p._theme='stardew';p._updateEnvironment();const art=p._q('.animated-map');
  assert.equal(art.attrs.src,'/local/ishioho/stardew-map-v1.png?v=1');const writes=art.writes;p._updateEnvironment();assert.equal(art.writes,writes);
  p._hass.states['sun.sun'].state='below_horizon';p._updateEnvironment();assert.equal(art.attrs.src,'/local/ishioho/stardew-night-map-v1.png?v=1');assert.equal(p._q('.still-map').attrs.src,'/local/ishioho/stardew-night-still-v1.png?v=1');
  p._cycleAppearance();assert.equal(art.attrs.src,'/local/ishioho/stardew-map-v1.png?v=1');assert.equal(p._environment.modeLabel,'Preview · Day');assert.equal(p._hass.states['sun.sun'].state,'below_horizon');
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

(async()=>{let failed=0;for(const[name,fn]of tests){try{await fn();console.log('PASS '+name);}catch(e){failed++;console.error('FAIL '+name+'\n  '+e.stack);}}console.log(`${tests.length-failed}/${tests.length} ishioho environment tests passed. Device and network calls were mocked.`);process.exitCode=failed?1:0;})();
