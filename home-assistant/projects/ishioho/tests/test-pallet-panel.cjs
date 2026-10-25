/* Isolated regression tests; no network, live Home Assistant, or real device calls. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

class FakeNode {
  constructor(tag='div') { this.tagName=tag.toUpperCase();this.localName=tag;this.children=[];this.dataset={};this.style={};this.attrs={};this.isConnected=true;this.disabled=false;this.tabIndex=tag==='button'?0:-1;this.textContent='';this._html='';this.focusCount=0;this.classList={toggle(){},add(){},remove(){}}; }
  set innerHTML(s){this._html=s;this.nodes=new Map();}
  get innerHTML(){return this._html;}
  addEventListener(){}
  querySelector(s){this.nodes ||=new Map();if(!this.nodes.has(s))this.nodes.set(s,new FakeNode(s==='.close'?'button':'div'));return this.nodes.get(s);}
  querySelectorAll(s){return this.lists?.get(s)||[];}
  replaceChildren(...nodes){this.children=nodes;}
  get childElementCount(){return this.children.length;}
  setAttribute(k,v){this.attrs[k]=v;}
  getClientRects(){return this.hidden?[]:[{}];}
  matches(s){return this.tagName==='BUTTON' || this.tagName==='INPUT' || this.tabIndex>=0;}
  focus(){this.focusCount++;}
}
class FakeHTMLElement extends FakeNode {attachShadow(){return this.shadowRoot=new FakeNode();}dispatchEvent(e){this.events ||= [];this.events.push(e);return true;}}
const defined=new Map(),loadedFonts=[];let helperCalls=0,virtualNow=Date.now(),virtualPolls=0;
const context=vm.createContext({HTMLElement:FakeHTMLElement,Date:class extends Date{static now(){return virtualNow;}},FontFace:class{constructor(family,source){this.family=family;this.source=source;}async load(){return this;}},document:{fonts:{add:font=>loadedFonts.push(font)}},CustomEvent:class{constructor(type,options){this.type=type;Object.assign(this,options);}},customElements:{get:n=>defined.get(n),define:(n,c)=>defined.set(n,c)},window:{loadCardHelpers:async()=>{helperCalls++;return{createCardElement:config=>{const n=new FakeNode('native-card');n.config=config;return n;}};}},setTimeout:(callback,ms)=>{if(ms===300){virtualNow+=ms;virtualPolls++;queueMicrotask(callback);}return 1;},clearTimeout(){},setInterval:()=>1,clearInterval(){},console});
vm.runInContext(fs.readFileSync(path.join(__dirname,'pallet-panel.js'),'utf8'),context,{filename:'pallet-panel.js'});
const Panel=defined.get('pallet-house-panel');
const state=(value,unit='')=>({state:value,attributes:{unit_of_measurement:unit,friendly_name:'Test device'}});
const config=()=>({rooms:[],cameras:[],lights:[],outside:'sensor.outside',power:'sensor.power',living_temp:'sensor.temp',vacuum:'vacuum.test',vacuum_battery:'sensor.battery',vacuum_map:'camera.map',garage:'cover.garage',events:[],air:[],maintenance:[],monitored:[],temperatures:[],energy:[],calendars:[],climate:'climate.test'});
function fixture(states={},overrides={}){
  const p=new Panel(),calls=[],toasts=[],wsCalls=[];
  const h={states,config:{time_zone:'America/Los_Angeles'},connected:true,callService:async(...args)=>{calls.push(args);},callWS:async request=>{wsCalls.push(request);return{url:'/test-stream'};},...overrides};
  p._toast=(...args)=>toasts.push(args);
  p.setConfig(config());p.hass=h;
  return {p,h,calls,toasts,wsCalls};
}
function click(p,action,extra={}){const button={dataset:{action,...extra}};return p._click({target:{closest:()=>button}});}
const settle=()=>new Promise(setImmediate);
const batteryCam=()=>({entity:'camera.eufy',name:'Eufy test',start_service:'start_livestream',stop_service:'stop_livestream'});
const serviceCount=(calls,service)=>calls.filter(c=>c[0]==='eufy_security'&&c[1]===service).length;
const tests=[];function test(name,fn){tests.push([name,fn]);}

test('initial render, state refresh, and view opening never actuate devices',async()=>{
  const {p,h,calls}=fixture();p.connectedCallback();p.hass={...h};
  for(const kind of ['lights','climate','energy','vacuum','planner','cameras','alerts']){p._open(kind);p._close();}
  await Promise.resolve();assert.equal(calls.length,0);p.disconnectedCallback();
});
test('missing, unknown, and unavailable values display unavailable rather than zero',()=>{
  const {p}=fixture({'sensor.unknown':state('unknown'),'sensor.unavailable':state('unavailable'),'sensor.zero':state('0','W')});
  for(const e of ['sensor.missing','sensor.unknown','sensor.unavailable']){assert.equal(p._valid(e),false);assert.equal(p._fmt(e),'—');}
  assert.equal(p._fmt('sensor.zero'),'0W');
});
test('garage alerts distinguish open/opening from closed/unknown/unavailable',()=>{
  const {p,h}=fixture();p._config.monitored=['cover.garage'];
  for(const v of ['open','opening','closed','unknown','unavailable']){h.states['cover.garage']=state(v);const a=p._alerts();assert.equal(a.some(x=>x.id==='garage'),['open','opening'].includes(v));assert.equal(a.some(x=>x.id==='offline'),['unknown','unavailable'].includes(v));}
});
test('motion and maintenance alerts require on and ignore unavailable',()=>{
  const {p,h}=fixture();p._config.events=[{entity:'binary_sensor.motion',name:'Motion'}];p._config.maintenance=[{entity:'binary_sensor.problem',name:'Maintenance'}];
  for(const v of ['on','off','unknown','unavailable']){h.states['binary_sensor.motion']=state(v);h.states['binary_sensor.problem']=state(v);assert.equal(p._alerts().length,v==='on'?2:0);}
});
test('air alerts retain extreme readings and do not fabricate numeric invalid readings',()=>{
  const {p,h}=fixture();p._config.air=[{entity:'sensor.pm',name:'Bedroom'}];
  for(const [v,warn] of [['35',false],['36',true],['1000',true],['unknown',false],['unavailable',false],['not_numeric',false]]){h.states['sensor.pm']=state(v,'µg/m³');const a=p._alerts();assert.equal(a.length,warn?1:0);if(warn)assert.ok(a[0].detail.includes(v));}
});
test('malformed and non-finite PM values do not become pollution warnings',()=>{
  const {p,h}=fixture();p._config.air=[{entity:'sensor.pm',name:'Bedroom'}];
  for(const v of ['NaN','Infinity','-Infinity','1e999','',' ','36 µg/m³','36.5.0','null','undefined']){h.states['sensor.pm']=state(v,'µg/m³');assert.equal(p._alerts().length,0,`malformed PM value ${JSON.stringify(v)} should not be a numeric warning`);}
});
test('initial conditions and unchanged reconnect do not generate new-event popups',()=>{
  const {p,h,toasts}=fixture({'cover.garage':state('open')});assert.equal(toasts.length,0);h.connected=false;p.hass=h;h.connected=true;p.hass=h;p.disconnectedCallback();p.connectedCallback();p.hass=h;assert.equal(toasts.length,0);p.disconnectedCallback();
});
test('temporary empty disconnected states do not cause false reconnect popups',()=>{
  const {p,h,toasts}=fixture({'cover.garage':state('open')});const remembered=h.states;p.hass={...h,states:{},connected:false};p.hass={...h,states:remembered,connected:true};assert.equal(toasts.length,0);
});
test('new connected events notify once and state refreshes do not repeat them',()=>{
  const {p,h,toasts}=fixture({'cover.garage':state('closed')});h.states['cover.garage']=state('open');p.hass=h;p.hass=h;assert.equal(toasts.length,1);assert.ok(toasts[0][0].includes('Garage'));h.states['cover.garage']=state('closed');p.hass=h;h.states['cover.garage']=state('open');p.hass=h;assert.equal(toasts.length,2);
});
test('all unavailable monitored entities are exposed in connection alert',()=>{
  const {p}=fixture({'light.ok':state('off'),'light.bad':state('unavailable')});p._config.monitored=['light.ok','light.bad','light.absent'];assert.equal(JSON.stringify(p._alerts()[0].entities),JSON.stringify(['light.bad','light.absent']));
});
test('offline, missing, unavailable, unknown, and busy writes are blocked',async()=>{
  const {p,h,calls}=fixture({'light.test':state('on')});
  h.connected=false;await click(p,'toggle',{toggle:'light.test'});h.connected=true;
  await click(p,'toggle',{toggle:'light.missing'});
  for(const v of ['unknown','unavailable']){h.states['light.test']=state(v);await click(p,'toggle',{toggle:'light.test'});}
  h.states['light.test']=state('on');p._busy.add('light.test');await click(p,'toggle',{toggle:'light.test'});assert.equal(calls.length,0);
});
test('allowed domains issue one explicit entity turn-on or turn-off command',async()=>{
  const {p,h,calls}=fixture();
  for(const domain of ['light','switch','fan','humidifier'])for(const value of ['off','on']){const id=domain+'.test';h.states[id]=state(value);await click(p,'toggle',{toggle:id});const actual=calls.at(-1);assert.equal(actual[0],domain);assert.equal(actual[1],value==='on'?'turn_off':'turn_on');assert.equal(JSON.stringify(actual[2]),JSON.stringify({entity_id:id}));assert.equal(h.states[id].state,value,'must wait for actual device state');}
  assert.equal(calls.length,8);
});
test('door, lock, alarm, climate, vacuum, and sensor cannot be sent generic toggles',async()=>{
  const {p,h,calls}=fixture();for(const domain of ['cover','lock','alarm_control_panel','climate','vacuum','sensor','camera','scene','script']){const id=domain+'.test';h.states[id]=state('on');await click(p,'toggle',{toggle:id});}assert.equal(calls.length,0);
});
test('in-flight commands block duplicate clicks and release the guard afterward',async()=>{
  let release;const pending=new Promise(resolve=>{release=resolve;});const {p,calls}=fixture({'light.test':state('off')});p._hass.callService=(...args)=>{calls.push(args);return pending;};const first=click(p,'toggle',{toggle:'light.test'});await click(p,'toggle',{toggle:'light.test'});assert.equal(calls.length,1);assert.equal(p._busy.has('light.test'),true);release();await first;assert.equal(p._busy.has('light.test'),false);
});
test('service rejection releases guard and reports failure without changing state',async()=>{
  const {p,h,toasts}=fixture({'light.test':state('off')},{callService:async()=>{throw new Error('offline');}});await click(p,'toggle',{toggle:'light.test'});assert.equal(p._busy.size,0);assert.equal(h.states['light.test'].state,'off');assert.ok(toasts.some(([m,warning])=>warning&&m.includes('failed')));
});
test('detail action dispatches native more-info without a device write',async()=>{
  const {p,calls}=fixture({'cover.garage':state('open')});await click(p,'info',{entity:'cover.garage'});assert.equal(calls.length,0);assert.equal(p.events[0].type,'hass-more-info');assert.equal(p.events[0].detail.entityId,'cover.garage');
});
test('open modal data-sensor values refresh on hass updates',()=>{
  const {p,h}=fixture({'sensor.temp':state('21','°C')});const bound=new FakeNode();bound.dataset.sensor='sensor.temp';p.shadowRoot.lists=new Map([['[data-sensor]',[bound]]]);p._update();assert.equal(bound.textContent,'21°C');h.states['sensor.temp']=state('24','°C');p.hass=h;assert.equal(bound.textContent,'24°C');h.states['sensor.temp']=state('unavailable');p.hass=h;assert.equal(bound.textContent,'—');
});
test('asynchronous card loading is canceled after host removal',async()=>{
  const {p}=fixture();const host=new FakeNode();host.isConnected=false;await p._mountCard(host,{type:'picture-entity',entity:'camera.test'});assert.equal(host.children.length,0);assert.equal(p._cards.length,0);
});
test('asynchronous card loading is canceled after component disconnection',async()=>{
  const {p}=fixture();const host=new FakeNode();const result=p._mountCard(host,{type:'picture-entity',entity:'camera.test'});p.disconnectedCallback();await result;assert.equal(host.children.length,0);assert.equal(p._cards.length,0);
});
test('camera thumbnails survive ordinary state refresh rather than remounting',async()=>{
  const {p,h}=fixture();const host=new FakeNode();host.dataset.cameraHost='0';p.shadowRoot.lists=new Map([['[data-camera-host]',[host]]]);p._config.cameras=[{entity:'camera.test',name:'Test'}];p._mountCameras();await new Promise(setImmediate);const card=host.children[0];assert.ok(card);p.hass={...h};assert.equal(host.children[0],card);assert.equal(p._cards.length,1);
});
test('camera configuration preserves video-only muted thumbnails and expanded playback UI',()=>{
  const {p,calls}=fixture();for(const expanded of [false,true]){const c=p._cameraConfig({entity:'camera.test'},expanded);assert.equal(c.type,'custom:webrtc-camera');assert.equal(c.entity,'camera.test');assert.equal(c.poster,'camera.test');assert.equal(c.media,'video');assert.equal(c.muted,true);assert.equal(c.ui,expanded);}assert.equal(calls.length,0);
});
test('runtime font registration uses a local asset without network access in the test',async()=>{
  await new Promise(setImmediate);assert.equal(loadedFonts.length,1);assert.equal(loadedFonts[0].family,'Pixel');assert.equal(loadedFonts[0].source,'url(/local/pallet-house/press-start.ttf)');
});
test('battery camera overview stays asleep until the camera is explicitly opened',async()=>{
  const {p,calls}=fixture({'camera.eufy':state('idle')});const host=new FakeNode();host.dataset.cameraHost='0';p.shadowRoot.lists=new Map([['[data-camera-host]',[host]]]);p._config.cameras=[batteryCam()];p._mountCameras();await settle();assert.equal(calls.length,0);assert.ok(host.innerHTML.includes('sleeping'));p._open('cameras');await settle();assert.equal(calls.length,0);p._close();
});
test('a pre-existing camera stream is displayed and is never stopped by the panel',async()=>{
  const {p,calls}=fixture({'camera.eufy':state('streaming')});const host=new FakeNode();await p._connectCamera(batteryCam(),host);await settle();assert.ok(host.children[0]);p._close();p.disconnectedCallback();assert.equal(calls.length,0);
});
test('a successful requested camera stream is stopped exactly once on close',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});h.callService=async(...args)=>{calls.push(args);if(args[1]==='start_livestream')h.states['camera.eufy']=state('streaming');};const host=new FakeNode();await p._connectCamera(batteryCam(),host);await settle();assert.equal(serviceCount(calls,'start_livestream'),1);assert.ok(host.children[0]);p._close();p._close();await settle();assert.equal(serviceCount(calls,'stop_livestream'),1);
});
test('late camera startup success after dismissal is cleaned up without mounting',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});let release;h.callService=(...args)=>{calls.push(args);return args[1]==='start_livestream'?new Promise(r=>{release=r;}):Promise.resolve();};const host=new FakeNode();const connecting=p._connectCamera(batteryCam(),host);await settle();p._close();release();await connecting;await settle();assert.equal(serviceCount(calls,'stop_livestream'),1);assert.equal(host.children.length,0);
});
test('dismissal and reopening during startup does not stop the newly wanted stream',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});const releases=[];h.callService=(...args)=>{calls.push(args);return args[1]==='start_livestream'?new Promise(r=>releases.push(r)):Promise.resolve();};const oldHost=new FakeNode(),newHost=new FakeNode();const first=p._connectCamera(batteryCam(),oldHost);await settle();p._close();const second=p._connectCamera(batteryCam(),newHost);await settle();h.states['camera.eufy']=state('streaming');for(const release of releases)release();await Promise.all([first,second]);await settle();assert.equal(serviceCount(calls,'stop_livestream'),0,'old popup must not stop camera wanted by the new popup');assert.ok(newHost.children[0]);p._close();await settle();assert.equal(serviceCount(calls,'stop_livestream'),1);
});
test('reopening during panel-owned stop restarts despite a stale streaming state',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});let releaseStop;h.callService=(...args)=>{calls.push(args);if(args[1]==='start_livestream'){h.states['camera.eufy']=state('streaming');return Promise.resolve();}return new Promise(r=>{releaseStop=r;});};await p._connectCamera(batteryCam(),new FakeNode());p._close();const next=p._connectCamera(batteryCam(),new FakeNode());await settle();assert.equal(serviceCount(calls,'start_livestream'),1,'must await pending stop');releaseStop();await next;await settle();assert.equal(serviceCount(calls,'start_livestream'),2,'must restart the camera this panel just stopped even if HA state lags');p._close();releaseStop();
});
test('camera startup rejection reports error without stopping a stream never owned',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});h.callService=async(...args)=>{calls.push(args);throw new Error('camera offline');};const host=new FakeNode();await p._connectCamera(batteryCam(),host);p._close();assert.equal(serviceCount(calls,'stop_livestream'),0);assert.ok(host.innerHTML.includes('unavailable'));
});
test('a camera reporting streaming without a video source fails and releases only its owned stream',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')},{callWS:async()=>({})});h.callService=async(...args)=>{calls.push(args);if(args[1]==='start_livestream')h.states['camera.eufy']=state('streaming');};const host=new FakeNode();await p._connectCamera(batteryCam(),host);await settle();assert.ok(host.innerHTML.includes('unavailable'));assert.equal(host.children.length,0);assert.equal(serviceCount(calls,'stop_livestream'),1);
});
test('closing while video-source verification is pending prevents a late player mount',async()=>{
  let releaseSource;const {p,h,calls}=fixture({'camera.eufy':state('idle')},{callWS:()=>new Promise(r=>{releaseSource=r;})});h.callService=async(...args)=>{calls.push(args);if(args[1]==='start_livestream')h.states['camera.eufy']=state('streaming');};const host=new FakeNode();const opening=p._connectCamera(batteryCam(),host);await settle();assert.equal(typeof releaseSource,'function');p._close();releaseSource({url:'/test-stream'});await opening;await settle();assert.equal(host.children.length,0);assert.equal(serviceCount(calls,'stop_livestream'),1);
});
test('camera stream timeout uses virtual time and releases an owned failed session',async()=>{
  const {p,calls}=fixture({'camera.eufy':state('idle')});const host=new FakeNode(),before=virtualPolls;await p._connectCamera(batteryCam(),host);await settle();assert.ok(virtualPolls>before,'test must exercise virtual polling');assert.ok(host.innerHTML.includes('unavailable'));assert.equal(serviceCount(calls,'stop_livestream'),1,'timed-out stream should be stopped without waiting for close');p._close();
});
test('configuration rebuild stops active panel-owned camera streams',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});h.callService=async(...args)=>{calls.push(args);if(args[1]==='start_livestream')h.states['camera.eufy']=state('streaming');};await p._connectCamera(batteryCam(),new FakeNode());p.setConfig(config());await settle();assert.equal(serviceCount(calls,'stop_livestream'),1);
});
test('component removal stops active panel-owned camera streams',async()=>{
  const {p,h,calls}=fixture({'camera.eufy':state('idle')});h.callService=async(...args)=>{calls.push(args);if(args[1]==='start_livestream')h.states['camera.eufy']=state('streaming');};await p._connectCamera(batteryCam(),new FakeNode());p.disconnectedCallback();await settle();assert.equal(serviceCount(calls,'stop_livestream'),1);
});
test('alert previews are repainted after reconnect rebuild with same active alerts',()=>{
  const {p,h}=fixture({'cover.garage':state('open')});assert.ok(p._q('#alerts-preview').innerHTML.includes('Garage door'));p.disconnectedCallback();p.connectedCallback();p.hass=h;assert.ok(p._q('#alerts-preview').innerHTML.includes('Garage door'));p.disconnectedCallback();
});
test('teardown clears modal state so reconnect keyboard input is safe',()=>{
  const {p,h}=fixture();p._open('vacuum');p.disconnectedCallback();p.hass=h;assert.equal(p._modal,null);
});
test('focus trap includes native controls nested through shadow roots',()=>{
  const {p}=fixture();const close=new FakeNode('button'),nativeAction=new FakeNode('button'),host=new FakeNode('ha-card');host.shadowRoot=new FakeNode();host.shadowRoot.children=[nativeAction];const dialog=new FakeNode();dialog.children=[close,host];p._q=s=>s==='.dialog'?dialog:null;p._modal='vacuum';let prevented=false;p._key({key:'Tab',composedPath:()=>[close],preventDefault(){prevented=true;}});assert.equal(prevented,false,'must allow focus from close into native card');p._key({key:'Tab',composedPath:()=>[nativeAction],preventDefault(){prevented=true;}});assert.equal(prevented,true);assert.equal(close.focusCount,1);
});
test('focus trap includes controls assigned into native card slots',()=>{
  const {p}=fixture();const close=new FakeNode('button'),nativeAction=new FakeNode('button'),slot=new FakeNode('slot'),host=new FakeNode('ha-card');slot.assignedElements=()=>[nativeAction];host.children=[nativeAction];host.shadowRoot=new FakeNode();host.shadowRoot.children=[slot];const dialog=new FakeNode();dialog.children=[close,host];p._q=s=>s==='.dialog'?dialog:null;p._modal='vacuum';let prevented=false;p._key({key:'Tab',composedPath:()=>[close],preventDefault(){prevented=true;}});assert.equal(prevented,false,'must allow focus into slotted control');p._key({key:'Tab',composedPath:()=>[nativeAction],preventDefault(){prevented=true;}});assert.equal(prevented,true);assert.equal(close.focusCount,1);
});

(async()=>{let failed=0;for(const [name,fn]of tests){let watchdog;try{await Promise.race([Promise.resolve().then(fn),new Promise((_,reject)=>{watchdog=setTimeout(()=>reject(new Error('Test stalled; all camera polling must use virtual time')),1000);})]);console.log('PASS '+name);}catch(error){failed++;console.error('FAIL '+name+'\n  '+error.message);}finally{clearTimeout(watchdog);}}console.log(`${tests.length-failed}/${tests.length} tests passed. All service calls were mocked; camera timeouts used virtual time.`);process.exitCode=failed?1:0;})();
