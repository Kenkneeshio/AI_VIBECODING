/* New component integration tests with actual base class, local modules, and inert DOM.
 * Network, native card loading, service calls, and camera viewing are mocked. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
class Node {
  constructor(tag='div'){this.tagName=tag.toUpperCase();this.localName=tag;this.dataset={};this.style={};this.attrs={};this.children=[];this.isConnected=true;this.textContent='';this.hidden=false;this.disabled=false;this.tabIndex=tag==='button'?0:-1;this.focusCount=0;const values=new Set();this.classList={toggle(name,on){if(on)values.add(name);else values.delete(name);},contains:name=>values.has(name)};}
  set innerHTML(html){this._html=html;this.nodes=new Map();}get innerHTML(){return this._html||'';}
  querySelector(s){this.nodes ||=new Map();if(!this.nodes.has(s))this.nodes.set(s,new Node(s==='.close'?'button':'div'));return this.nodes.get(s);}
  querySelectorAll(s){return this.lists?.get(s)||[];}addEventListener(){}setAttribute(k,v){this.attrs[k]=v;}getAttribute(k){return this.attrs[k];}
  replaceChildren(...children){this.children=children;}append(child){this.children.push(child);}get childElementCount(){return this.children.length;}
  focus(){this.focusCount++;}getClientRects(){return this.hidden?[]:[{}];}matches(){return this.tabIndex>=0;}contains(){return false;}
}
class Element extends Node{attachShadow(){return this.shadowRoot=new Node();}dispatchEvent(e){this.events ||= [];this.events.push(e);return true;}}
const defined=new Map(),nativeCards=[],fetches=[],fetchOptions=[];
const context=vm.createContext({HTMLElement:Element,FontFace:class{async load(){return this;}},document:{fonts:{add(){}},createElement:tag=>new Node(tag)},CustomEvent:class{constructor(type,opts){this.type=type;Object.assign(this,opts);}},customElements:{get:n=>defined.get(n),define:(n,c)=>defined.set(n,c)},window:{loadCardHelpers:async()=>({createCardElement:config=>{const n=new Node('native-card');n.config=config;nativeCards.push(n);return n;}})},fetch:async(url,options)=>{fetches.push(url);fetchOptions.push(options);return{ok:true,json:async()=>url.includes('catalog')?{entities:[],areas:[]}:url.includes('floorplan')?JSON.parse(fs.readFileSync(path.join(__dirname,'floorplan.json'),'utf8')):{room_segments:[]}};},setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,clearInterval(){},console});
const read=name=>fs.readFileSync(path.join(__dirname,name),'utf8');
vm.runInContext(read('pallet-panel.js'),context,{filename:'pallet-panel.js'});
Object.assign(context,vm.runInContext('(function(){'+read('ishioho-directory.js').replace(/\bexport /g,'')+';return {directoryMethods,directoryCss};})()',context));
Object.assign(context,vm.runInContext('(function(){'+read('ishioho-style.js').replace(/\bexport /g,'')+';return {ishiohoCss};})()',context));
Object.assign(context,vm.runInContext('(function(){'+read('ishioho-environment.js').replace(/\bexport /g,'')+';return {environmentMethods,environmentCss};})()',context));
Object.assign(context,vm.runInContext('(function(){'+read('ishioho-weather-visuals.js').replace(/\bexport /g,'')+';return {weatherVisualMethods};})()',context));
Object.assign(context,vm.runInContext('(function(){'+read('ishioho-floorplan.js').replace(/\bexport /g,'')+';return {validateFloorplan,roomAnchors,renderFloorplanSvg};})()',context));
vm.runInContext(read('ishioho-panel.js').replace(/^import .*;\r?\n/gm,''),context,{filename:'ishioho-panel.js'});
const Panel=defined.get('ishioho-panel');
const state=(value,attributes={})=>({state:value,attributes,last_updated:'2026-10-25T18:00:00Z'});
const rooms=()=>[{id:'dining',name:'Dining Room',x:40,y:50,entities:[]},{id:'living',name:'Living Room',x:60,y:50,entities:[]},{id:'kitchen',name:'Kitchen',x:60,y:30,entities:['light.curated'],area_names:['Kitchen']},{id:'master',name:'Master Bedroom',x:15,y:20,entities:[]},{id:'hall',name:'Hallway',x:45,y:30,entities:[]},{id:'bathroom',name:'Bathroom',x:20,y:35,entities:[]},{id:'garage',name:'Garage',x:90,y:75,entities:['cover.garage']}];
const config=()=>({rooms:rooms(),cameras:[{entity:'camera.porch',name:'Porch'},{entity:'camera.garage_camera',name:'Garage'}],lights:[],outside:'sensor.outside',power:'sensor.power',living_temp:'sensor.temp',vacuum:'vacuum.l10s_ultra',vacuum_battery:'sensor.l10s_ultra_battery',vacuum_map:'camera.l10s_ultra_map',garage:'cover.garage',events:[],air:[],maintenance:[],monitored:[],temperatures:[],energy:[],calendars:[],climate:'climate.test'});
function fixture(states={}){const calls=[],p=new Panel();p._theme='pokemon';p._config=config();p.hass={states,config:{time_zone:'America/Los_Angeles'},connected:true,callService:async(...args)=>calls.push(args),callWS:async()=>({url:'/test-stream'})};p._toast=()=>{};return{p,h:p._hass,calls};}
function click(p,action,extra={}){const b=new Node('button');b.dataset={action,...extra};return p._click({target:{closest:()=>b}});}
const tests=[];const test=(name,fn)=>tests.push([name,fn]);

test('room directory membership includes every assigned domain and curated entity, without duplicates',()=>{
  const states={'light.curated':state('on')},entities=[];for(let i=0;i<42;i++){const id=['sensor','binary_sensor','update','button','select','automation'][i%6]+'.kitchen_'+i;states[id]=state(i%5?'off':'unavailable');entities.push({entity_id:id,area_name:'KITCHEN'});}states['sensor.other']=state('on');entities.push({entity_id:'sensor.other',area_name:'Living Room'},{entity_id:'sensor.missing',area_name:'Kitchen'});const{p}=fixture(states);p._catalog={entities};const ids=p._roomEntities(p._config.rooms.find(r=>r.id==='kitchen'));assert.equal(ids.length,43);assert.equal(new Set(ids).size,43);assert.ok(!ids.includes('sensor.other'));assert.ok(!ids.includes('sensor.missing'));assert.ok(ids.some(id=>id.startsWith('update.')));
});
test('room directory does not invent area assignments based on an entity name',()=>{
  const{p}=fixture({'sensor.kitchen_named':state('20',{friendly_name:'Kitchen temperature'})});p._catalog={entities:[{entity_id:'sensor.kitchen_named',area_name:''}]};assert.equal(p._roomEntities(p._config.rooms.find(r=>r.id==='kitchen')).length,0);
});
test('room and robot directory actions pass the complete allow-list and contextual title',async()=>{
  const states={'light.curated':state('on')};for(let i=0;i<131;i++)states['sensor.l10s_ultra_'+i]=state(String(i));const{p,calls}=fixture(states);const opens=[];p._openDirectory=opts=>opens.push(opts);await click(p,'robot-directory');assert.equal(opens[0].ids.length,131);assert.equal(opens[0].title,'ROTO · all sensors & controls');await click(p,'room-directory',{room:'kitchen'});assert.equal(JSON.stringify(opens[1].ids),JSON.stringify(['light.curated']));assert.equal(opens[1].title,'Kitchen · all devices');assert.equal(calls.length,0);
});
test('robot uses reported room and explicit located status, ignoring metadata snapshots',()=>{
  const{p}=fixture({'vacuum.l10s_ultra':state('docked',{located:true}),'sensor.l10s_ultra_current_room':state('Dining')});p._robotMetadata={snapshot:{current_room:'Kitchen'}};const r=p._robotReading();assert.equal(r.point.id,'dining');assert.equal(r.roomName,'Dining');assert.equal(r.cleaning,false);assert.equal(r.available,true);
});
test('room aliases map live telemetry to the correct floorplan room',()=>{
  const{p,h}=fixture({'vacuum.l10s_ultra':state('cleaning',{located:true})});for(const[reported,id]of [['Dining Room','dining'],['LIVING ROOM','living'],['Kitchen','kitchen'],['Master Bedroom','master'],['Hallway','hall']]){h.states['sensor.l10s_ultra_current_room']=state(reported);assert.equal(p._robotReading().point?.id,id);}
});
test('unknown, unavailable, ambiguous and unmapped room readings never invent a position',()=>{
  const{p,h}=fixture({'vacuum.l10s_ultra':state('cleaning',{located:true})});for(const room of ['unknown','unavailable','None','','Bathroom','Walkway','Room 11']){h.states['sensor.l10s_ultra_current_room']=state(room);assert.ok(!p._robotReading().point,room);p._updateRobot();assert.equal(p._q('.robot-pin').hidden,true,room);}
});
test('duplicate reported room names are treated as ambiguous',()=>{
  const{p}=fixture({'vacuum.l10s_ultra':state('docked',{located:true}),'sensor.l10s_ultra_current_room':state('Dining')});p._robotMetadata={room_segments:[{name:'Dining'},{name:'Dining'}]};assert.ok(!p._robotReading().point);
});
test('unavailable robot, disconnected transport, or missing located flag suppresses the map marker',()=>{
  const{p,h}=fixture({'vacuum.l10s_ultra':state('docked',{located:true}),'sensor.l10s_ultra_current_room':state('Dining')});h.connected=false;assert.equal(p._robotReading().available,false);assert.ok(!p._robotReading().point);p._updateRobot();assert.equal(p._q('.robot-pin').hidden,true);h.connected=true;for(const attrs of [{located:false},{}, {located:'true'}]){h.states['vacuum.l10s_ultra']=state('docked',attrs);assert.ok(!p._robotReading().point);}h.states['vacuum.l10s_ultra']=state('unavailable',{located:true});assert.ok(!p._robotReading().point);
});
test('robot marker coordinates stay stable without telemetry changes and only follow reported rooms',()=>{
  const{p,h,calls}=fixture({'vacuum.l10s_ultra':state('cleaning',{located:true}),'sensor.l10s_ultra_current_room':state('Dining')});p._updateRobot();const pin=p._q('.robot-pin'),first={...pin.style};for(let i=0;i<20;i++)p._updateRobot();assert.deepEqual(pin.style,first);assert.equal(pin.hidden,false);assert.equal(pin.classList.contains('cleaning'),true);h.states['sensor.l10s_ultra_current_room']=state('Kitchen');p._updateRobot();assert.notEqual(pin.style.top,first.top);assert.ok(pin.attrs['aria-label'].includes('Room-level location'));assert.equal(calls.length,0);
});
test('popup transitions preserve original external focus and close restores it',()=>{
  const{p}=fixture();const outside=new Node('button');p.shadowRoot.activeElement=outside;p._dialog('Kitchen','',{kind:'room'});const oldClose=p._q('.close');p.shadowRoot.activeElement=oldClose;p._dialog('Kitchen · all devices','',{kind:'directory'});assert.equal(p._returnFocus,outside);p._close();assert.equal(outside.focusCount,1);assert.equal(p._modal,null);
});
test('dialog replacement and component teardown invoke inherited stream cleanup',()=>{
  const{p}=fixture();let stopped=0;p._stopStreams=()=>{stopped++;};p._dialog('A','',{kind:'room'});assert.equal(stopped,0);p._dialog('B','',{kind:'garage'});assert.equal(stopped,1);p.disconnectedCallback();assert.equal(stopped,2);assert.equal(p._modal,null);
});
test('ordinary status updates retain base state rendering and native card propagation',()=>{
  const{p,h}=fixture({'sensor.power':state('120',{unit_of_measurement:'W'}),'vacuum.l10s_ultra':state('docked',{located:true}),'sensor.l10s_ultra_current_room':state('Dining')});const card=new Node();p._cards=[card];h.states['sensor.power']=state('140',{unit_of_measurement:'W'});p.hass=h;assert.equal(p._q('#stat-power').textContent,'140W');assert.equal(card.hass,h);assert.equal(p._q('#directory-count').textContent,'3');assert.ok(p._q('#robot-location').textContent.includes('Dining'));
});
test('opening garage embeds native controls and requests viewing without operating the door',()=>{
  const{p,calls}=fixture({'cover.garage':state('open')});const mounted=[],viewed=[];p._mountCard=(host,config)=>mounted.push(config);p._connectCamera=(cam,host)=>viewed.push(cam.entity);p._open('garage');assert.equal(p._modal,'garage');assert.equal(mounted[0].type,'entities');assert.equal(mounted[0].show_header_toggle,false);assert.equal(mounted[0].entities[0].entity,'cover.garage');assert.deepEqual(viewed,['camera.garage_camera']);assert.equal(calls.length,0);
});
test('opening the robot uses native live map and controls without starting cleaning',()=>{
  const{p,calls}=fixture({'vacuum.l10s_ultra':state('docked',{located:true}),'sensor.l10s_ultra_current_room':state('Dining')});const mounted=[];p._mountCard=(host,config)=>mounted.push(config);p._open('vacuum');assert.equal(mounted[0].type,'tile');assert.equal(mounted[1].entity,'camera.l10s_ultra_map');assert.equal(calls.length,0);
});
test('specialized domains remain native details rather than generic toggle actions',()=>{
  const ids=['cover.garage','lock.front','automation.routine','update.core','button.reboot','number.limit','input_boolean.mode'];const{p}=fixture(Object.fromEntries(ids.map(id=>[id,state('off')])));const html=p._entityRows(ids);assert.ok(!html.includes('data-action="toggle"'));for(const id of ids)assert.ok(html.includes(`data-entity="${id}"`));
});
test('decorative animation toggle makes no device calls and records accessible state',async()=>{
  const{p,calls}=fixture();const b=new Node('button');b.dataset.action='motion';await p._click({target:{closest:()=>b}});assert.equal(p._motion,false);assert.equal(p._q('.shell').classList.contains('motion-paused'),true);assert.equal(b.attrs['aria-pressed'],'true');assert.equal(calls.length,0);
});
test('all themes retain the inherited lifecycle and unsupported theme defaults safely',async()=>{
  const{p}=fixture();for(const theme of ['pokemon','pokedex','crossing','stardew','invalid']){p.setConfig({...config(),theme});assert.equal(p._theme,theme==='invalid'?'pokemon':theme);}await new Promise(setImmediate);assert.ok(fetches.every(url=>url.startsWith('/local/ishioho/')));assert.equal(typeof p._connectCamera,'function');assert.equal(typeof p._close,'function');
});
test('user-specific catalog and robot metadata are fetched without browser caching',()=>{
  assert.ok(fetches.includes('/local/ishioho/catalog.json'));
  assert.ok(fetches.includes('/local/ishioho/robot.json'));
  assert.ok(fetchOptions.every(options=>options?.cache==='no-store'));
});
test('theme links honor an alternate dashboard path and can infer the current Home Assistant path',()=>{
  const{p}=fixture();p.setConfig({...config(),theme:'stardew',dashboard_path:'house-console'});
  assert.match(p.shadowRoot.innerHTML,/href="\/house-console\/stardew"/);
  assert.equal(p._themeHref('pokemon'),'/house-console/home');
  delete p._config.dashboard_path;context.window.location={pathname:'/another-dashboard/stardew'};
  try{assert.equal(p._themeHref('crossing'),'/another-dashboard/crossing');}finally{delete context.window.location;}
});
test('alternate robot IDs and explicit aliases drive tracker and directory without the original vacuum prefix',()=>{
  const states={'vacuum.second_bot':state('docked',{located:true}),'sensor.second_bot_current_room':state('Office Zone'),'sensor.second_bot_cleaning_time':state('14'),'sensor.second_bot_battery':state('90'),'sensor.extra_robot':state('ready'),'sensor.l10s_ultra_old':state('stale')};
  const{p}=fixture(states);Object.assign(p._config,{vacuum:'vacuum.second_bot',vacuum_battery:'sensor.second_bot_battery',vacuum_map:null,robot_entities:['sensor.extra_robot'],robot_room_aliases:{'Office Zone':'kitchen'}});
  assert.equal(p._robotStem(),'second_bot');assert.equal(p._robotRoomEntity(),'sensor.second_bot_current_room');assert.equal(p._robotReading().point.id,'kitchen');
  const ids=p._robotEntityIds();assert.ok(ids.includes('sensor.second_bot_cleaning_time'));assert.ok(ids.includes('sensor.extra_robot'));assert.ok(!ids.includes('sensor.l10s_ultra_old'));
  p._config.robot_entity_prefix='override_bot';assert.equal(p._robotStem(),'override_bot');
  p._config.robot_room='sensor.custom_room';assert.equal(p._robotRoomEntity(),'sensor.custom_room');
});
test('garage camera selection uses configuration or room assignment and tolerates no camera',()=>{
  const{p}=fixture({'cover.garage':state('closed')});const garage=p._config.rooms.find(r=>r.id==='garage');
  p._config.cameras=[{entity:'camera.named',name:'Garage'},{entity:'camera.assigned',name:'Porch'},{entity:'camera.preferred',name:'Side'}];
  p._config.garage_camera='camera.preferred';assert.equal(p._garageCamera(garage).entity,'camera.preferred');
  delete p._config.garage_camera;garage.entities.push('camera.assigned');assert.equal(p._garageCamera(garage).entity,'camera.assigned');
  garage.entities=[];assert.equal(p._garageCamera(garage).entity,'camera.named');
  p._config.cameras=[];assert.equal(p._garageCamera(garage),null);
  p._connectCamera=()=>{throw Error('Unexpected camera attempt');};p._mountCard=()=>{};p._open('garage');assert.equal(p._q('#garage-live').textContent,'No garage camera is configured.');
});
test('unconfigured garage and vacuum omit dedicated controls and leave the garage room inspectable',()=>{
  const{p}=fixture();const c=config();delete c.garage;delete c.vacuum;p.setConfig(c);
  assert.ok(!p.shadowRoot.innerHTML.includes('data-action="vacuum"'));
  assert.ok(!p.shadowRoot.innerHTML.includes('data-action="garage"'));
  assert.ok(!p._overviewMarkup().includes('data-action="vacuum"'));
  p._open('garage');assert.equal(p._modal,'room');const prior=p._modal;p._open('vacuum');assert.equal(p._modal,prior);
});

test('excluded camera stays absent from dashboard counts and full room membership',()=>{
  const{p}=fixture({'camera.front_door':state('unavailable'),'camera.porch':state('idle'),'sensor.other':state('unknown')});p._config.excluded_entities=['camera.front_door'];const room=p._config.rooms.find(r=>r.id==='kitchen');room.entities=['camera.front_door','camera.porch'];p._catalog={entities:[{entity_id:'camera.front_door',area_name:'Kitchen'}]};assert.equal(JSON.stringify(p._dashboardIds()),JSON.stringify(['camera.porch','sensor.other']));assert.equal(JSON.stringify(p._roomEntities(room)),JSON.stringify(['camera.porch']));p._update();assert.equal(p._q('#directory-count').textContent,'2');
});
test('excluded camera cannot reappear through directory reset or scoped allow-list',()=>{
  const{p}=fixture({'camera.front_door':state('idle'),'camera.porch':state('idle')});p._config.excluded_entities=['camera.front_door'];p._openDirectory({ids:['camera.front_door','camera.porch'],title:'Camera group'});const root=p._q('#directory-root');assert.ok(!root.querySelector('[data-directory-results]').innerHTML.includes('camera.front_door'));assert.ok(root.querySelector('[data-directory-results]').innerHTML.includes('camera.porch'));p._directoryClick('directory-all',{});assert.ok(!p._q('#directory-root').querySelector('[data-directory-results]').innerHTML.includes('camera.front_door'));
});
test('room quick controls honor exclusions even when a curated list still references them',()=>{
  const{p}=fixture({'camera.front_door':state('idle'),'light.curated':state('on')});p._config.excluded_entities=['camera.front_door'];p._config.rooms.find(r=>r.id==='kitchen').entities.push('camera.front_door');p._open('room',{room:'kitchen'});assert.ok(!p._q('#modal-root').innerHTML.includes('data-entity="camera.front_door"'));
});
test('live sun changes flow through inherited updates without camera remounting',()=>{
  const{p,h,calls}=fixture({'sun.sun':state('above_horizon'),'weather.forecast_ishioho_city':state('sunny')});p._config.night_assets=true;let remounts=0;p._mountCameras=()=>remounts++;p._update();assert.equal(p._q('.shell').classList.contains('is-night'),false);h.states['sun.sun'].state='below_horizon';p.hass=h;assert.equal(p._q('.shell').classList.contains('is-night'),true);assert.equal(p._q('.animated-map').attrs.src,'/local/ishioho/pokemon-night-map-v8.png?v=8');assert.equal(remounts,0);assert.equal(calls.length,0);
});
test('synthetic example retains configured feeds and bundles the correct assets for every theme',()=>{
  const doc=JSON.parse(read('ishioho-dashboard.json'));for(const view of doc.views){const c=view.cards[0];assert.deepEqual(c.cameras.map(x=>x.entity),['camera.porch_camera_profile_000','camera.garage_camera']);assert.ok(c.excluded_entities.includes('camera.front_door'));assert.ok(!c.rooms.some(r=>(r.entities||[]).includes('camera.front_door')));assert.equal(c.night_assets,true);assert.equal(c.weather_entity,'weather.forecast_ishioho_city');assert.equal(c.moon_entity,'sensor.moon_phase');const profile={pokemon:{version:8,extensions:['png','svg']},stardew:{version:3,extensions:['png']}}[c.theme];for(const suffix of ['-map','-still','-night-map','-night-still']){const stem=c.theme+suffix+(profile?'-v'+profile.version:'');for(const ext of profile?.extensions||['svg'])assert.ok(fs.existsSync(path.join(__dirname,'ishioho-assets',stem+'.'+ext)),stem+'.'+ext);}}
});

test('live updates work when optional robot battery widget is not mounted',()=>{
  const {p,calls}=fixture({'sensor.power':state('120',{unit_of_measurement:'W'})});const q=p._q.bind(p);p._q=selector=>selector==='#vacuum-battery-bar'?null:q(selector);assert.doesNotThrow(()=>p._update());assert.equal(p._q('#stat-power').textContent,'120W');assert.equal(calls.length,0);
});
test('overview opens status and camera widgets on demand without device actuation',()=>{
  const {p,calls}=fixture();let mounts=0;p._mountCameras=()=>mounts++;p._open('overview');assert.equal(p._modal,'overview');assert.equal(mounts,1);assert.equal(calls.length,0);p._close();assert.equal(p._modal,null);
});

test('Stardew example preserves Pokemon controls while placing its upper porch pin on the revised art',()=>{
  const doc=JSON.parse(read('ishioho-dashboard.json'));
  assert.deepEqual(doc.views.map(v=>v.path),['home','pokedex','crossing','stardew']);
  const pokemon=doc.views.find(v=>v.path==='home').cards[0],stardew=doc.views.find(v=>v.path==='stardew').cards[0];
  assert.equal(stardew.theme,'stardew');
  const {rooms:stardewRooms,theme:stardewTheme,scene_devices:sceneDevices,...stardewControls}=stardew;
  const {rooms:pokemonRooms,theme:pokemonTheme,...pokemonControls}=pokemon;
  assert.deepEqual(stardewControls,pokemonControls);
  assert.deepEqual(sceneDevices.map(device=>device.kind),['light','light','purifier']);
  assert.deepEqual(sceneDevices.map(device=>device.anchor),['bedroom_light','kitchen_sink_light','dining_air_purifier']);
  assert.ok(sceneDevices.every(device=>!Object.hasOwn(device,'x')&&!Object.hasOwn(device,'y')),'Named floor-plan anchors replace duplicate coordinates');
  assert.ok(sceneDevices.every(device=>!Object.hasOwn(device,'shade')),'Example light effect geometry belongs to the floor-plan model');
  assert.deepEqual(stardewRooms.map(r=>r.id),pokemonRooms.map(r=>r.id));
  for(const room of stardewRooms.filter(r=>!['porch','garage'].includes(r.id)))assert.deepEqual(room,pokemonRooms.find(r=>r.id===room.id));
  const entry=stardew.rooms.find(r=>r.id==='entryway'),porch=stardew.rooms.find(r=>r.id==='porch'),garage=stardew.rooms.find(r=>r.id==='garage');
  assert.deepEqual([entry.x,entry.y],[25.5,55]);assert.deepEqual([porch.x,porch.y],[10.8,37.5]);assert.deepEqual([garage.x,garage.y],[18.8,63.2]);
  assert.equal(garage.short,'Garage ↓');
});
test('Stardew builds its own images and accessible fourth navigation link without device calls',()=>{
  const{p,calls}=fixture();p.setConfig({...config(),theme:'stardew'});const html=p.shadowRoot.innerHTML;
  assert.match(html,/theme-stardew/);assert.match(html,/stardew-map-v3\.png\?v=3/);assert.match(html,/stardew-still-v3\.png\?v=3/);
  assert.match(html,/href="\/prototype-copy\/stardew" aria-label="Stardew theme" aria-current="page"/);
  for(const path of ['home','pokedex','crossing'])assert.ok(html.includes('href="/prototype-copy/'+path+'"'));
  assert.equal(calls.length,0);
});
test('Stardew loads the default structured home and uses its room anchors instead of stale card coordinates',async()=>{
  const{p,calls}=fixture();const c=config();c.theme='stardew';c.rooms.find(room=>room.id==='living').x=1;c.rooms.find(room=>room.id==='living').y=1;c.rooms.find(room=>room.id==='garage').x=90;
  p.setConfig(c);await new Promise(setImmediate);
  assert.equal(p._floorplan?.id,'ishioho-default');
  assert.deepEqual([p._config.rooms.find(room=>room.id==='living').x,p._config.rooms.find(room=>room.id==='living').y],[39.543,29.474]);
  assert.deepEqual([p._config.rooms.find(room=>room.id==='garage').x,p._config.rooms.find(room=>room.id==='garage').y],[18.8,63.2]);
  assert.match(p.shadowRoot.innerHTML,/class="floorplan-svg"/);
  assert.match(p.shadowRoot.innerHTML,/data-floorplan-room="living"/);
  assert.match(p.shadowRoot.innerHTML,/data-floorplan-action="garage"/);
  assert.equal(calls.length,0);
});
test('Stardew fixture bindings derive placement from named model anchors',async()=>{
  const{p,calls}=fixture({'light.bedroom':state('off')});
  p.setConfig({...config(),theme:'stardew',scene_devices:[
    {entity:'light.bedroom',kind:'light',anchor:'bedroom_light',label:'Bedroom light',x:2,y:2,shade:[[1,1],[2,1],[2,2]]},
    {entity:'light.wrong_floor',kind:'light',anchor:'garage_door',label:'Wrong floor',x:20,y:20}
  ]});
  await new Promise(setImmediate);
  assert.equal(p._sceneDevices().length,1,'Garage-level anchors cannot appear on the upstairs map');
  const mapped=p._sceneDevices()[0];
  assert.deepEqual([mapped.x,mapped.y],[89.18,11.61]);
  assert.deepEqual(JSON.parse(JSON.stringify(mapped.shade)),[[73.7,9],[91.8,9],[91.8,50],[73.7,50]]);
  assert.match(p.shadowRoot.innerHTML,/data-scene-entity="light.bedroom"[^>]*left:89.18%;top:11.61%/);
  assert.equal(calls.length,0);
});
test('structured floor mode and SVG rooms open native popups without operating devices',async()=>{
  const{p,calls}=fixture();p.setConfig({...config(),theme:'stardew'});await new Promise(setImmediate);
  const button=new Node('button');button.dataset.action='floorplan';
  await p._click({target:{closest:selector=>selector==='button'?button:null}});
  assert.equal(p._floorplanMode,true);
  assert.equal(p._q('.shell').classList.contains('floorplan-mode'),true);
  p._floorplanOpen({dataset:{floorplanAction:'room',floorplanRoom:'living'}});
  assert.equal(p._modal,'room');
  p._floorplanOpen({dataset:{floorplanAction:'garage',floorplanRoom:'garage'}});
  assert.equal(p._modal,'garage');
  assert.equal(calls.length,0);
});
test('a missing active illustration automatically reveals the structured SVG',async()=>{
  const{p,calls}=fixture();p.setConfig({...config(),theme:'stardew'});await new Promise(setImmediate);
  p._mapImageError({target:{classList:{contains:name=>name==='house-map'||name==='animated-map'}}});
  assert.equal(p._floorplanMode,true);
  assert.equal(p._q('.shell').classList.contains('floorplan-mode'),true);
  assert.equal(p._q('.floorplan-layer').inert,false);
  assert.equal(calls.length,0);
});
test('Stardew scene devices render only safe configured art controls, without actuation',()=>{
  const{p,calls}=fixture({'light.bedroom':state('on'),'switch.office_fan':state('off'),'fan.dining_purifier':state('unavailable')});
  const scene_devices=[
    {entity:'light.bedroom',kind:'light',x:89,y:12,label:'Bedroom <lamp>'},
    {entity:'switch.office_fan',kind:'fan',x:60,y:27,label:'Office fan'},
    {entity:'fan.dining_purifier',kind:'purifier',x:38,y:75,label:'Dining purifier'},
    {entity:'light.bedroom',kind:'light',x:85,y:15,label:'Duplicate fixture'},
    {entity:'light.hidden',kind:'light',x:20,y:20,label:'Excluded'},
    {entity:'cover.garage',kind:'fan',x:16,y:50,label:'Wrong domain'},
    {entity:'light.bad_kind',kind:'spinner',x:50,y:50,label:'Wrong kind'},
    {entity:'light.bad_x',kind:'light',x:-1,y:50,label:'Wrong coordinate'},
    {entity:'light.bad_y',kind:'light',x:50,y:101,label:'Wrong coordinate'},
    {entity:'light.bad_number',kind:'light',x:'50',y:50,label:'Wrong coordinate'}
  ];
  p.setConfig({...config(),theme:'stardew',scene_devices,excluded_entities:['light.hidden']});
  const ids=p._sceneDevices().map(device=>device.entity);
  assert.deepEqual(ids,['light.bedroom','switch.office_fan','fan.dining_purifier']);
  const html=p.shadowRoot.innerHTML;
  for(const id of ids){assert.ok(html.includes(`data-scene-entity="${id}"`),id);assert.ok(html.includes(`data-toggle="${id}"`),id);}
  for(const id of ['light.hidden','cover.garage','light.bad_kind','light.bad_x','light.bad_y','light.bad_number'])assert.ok(!html.includes(`data-scene-entity="${id}"`),id);
  assert.ok(html.includes('style="left:89%;top:12%"'),'art coordinates must use map-relative percentages');
  assert.ok(html.includes('Bedroom &lt;lamp&gt;'));
  assert.equal(calls.length,0);
  p.setConfig({...config(),theme:'pokemon',scene_devices});
  assert.ok(!p.shadowRoot.innerHTML.includes('data-scene-entity='));
});
test('Stardew fixture art follows live on, off, unavailable, and disconnected states',()=>{
  const{p,h,calls}=fixture({'light.bedroom':state('off')});
  p.setConfig({...config(),theme:'stardew',scene_devices:[{entity:'light.bedroom',kind:'light',x:89,y:12,label:'Bedroom light'}]});
  const wrapper=new Node(),button=new Node('button');wrapper.dataset.sceneEntity='light.bedroom';wrapper.dataset.kind='light';wrapper.querySelector=()=>button;
  p.shadowRoot.querySelectorAll=selector=>selector==='.scene-device'?[wrapper]:[];
  p._updateSceneDevices();
  assert.equal(wrapper.dataset.state,'off');assert.equal(button.attrs['aria-pressed'],'false');assert.equal(button.disabled,false);
  h.states['light.bedroom']=state('on');p._updateSceneDevices();
  assert.equal(wrapper.dataset.state,'on');assert.equal(button.attrs['aria-pressed'],'true');
  h.states['light.bedroom']=state('unavailable');p._updateSceneDevices();
  assert.equal(wrapper.dataset.state,'unavailable');assert.equal(button.disabled,true);
  h.states['light.bedroom']=state('on');h.connected=false;p._updateSceneDevices();
  assert.equal(button.disabled,true);assert.equal(calls.length,0);
});
test('room artwork shade accepts bounded light polygons and ignores malformed masks without losing controls',()=>{
  const{p,calls}=fixture({'light.valid':state('off'),'light.too_few':state('off'),'light.bad_point':state('off'),'light.bad_number':state('off'),'fan.with_shade':state('off')});
  const valid=[[74,9],[92,9],[92,50],[74,50]];
  p.setConfig({...config(),theme:'stardew',scene_devices:[
    {entity:'light.valid',kind:'light',x:82,y:25,label:'Bedroom',shade:valid},
    {entity:'light.too_few',kind:'light',x:10,y:20,label:'Too few',shade:[[10,10],[20,20]]},
    {entity:'light.bad_point',kind:'light',x:20,y:20,label:'Out of bounds',shade:[[10,10],[101,10],[20,20]]},
    {entity:'light.bad_number',kind:'light',x:30,y:20,label:'String coordinate',shade:[[10,10],['20',10],[20,20]]},
    {entity:'fan.with_shade',kind:'fan',x:60,y:25,label:'Fan',shade:valid}
  ]});
  assert.equal(p._sceneDevices().length,5,'bad masks must not remove otherwise valid controls');
  const html=p.shadowRoot.innerHTML;
  assert.ok(html.includes('data-scene-shade="light.valid"'));
  assert.ok(html.includes('left:74%;top:9%;width:18%;height:41%;clip-path:polygon(0% 0%,100% 0%,100% 100%,0% 100%)'));
  assert.equal((html.match(/data-scene-shade=/g)||[]).length,1);
  for(const id of ['light.too_few','light.bad_point','light.bad_number','fan.with_shade'])assert.ok(html.includes(`data-toggle="${id}"`),id);
  const css=context.ishiohoCss;
  const day=css.match(/\.theme-stardew \.scene-device-shade\[data-state="off"\]\{opacity:([\d.]+)\}/);
  const night=css.match(/\.theme-stardew\.is-night \.scene-device-shade\[data-state="off"\]\{opacity:([\d.]+)\}/);
  assert.ok(day&&night&&Number(day[1])>0&&Number(night[1])>Number(day[1]),'off artwork should dim subtly by day and more at night');
  assert.match(css,/\.scene-device-shade\{[^}]*opacity:0/,'on and unavailable should leave the original illustration unshaded');
  assert.equal(calls.length,0);
});
test('room artwork shade state tracks the actual light without operating it',()=>{
  const{p,h,calls}=fixture({'light.bedroom':state('off')});
  p.setConfig({...config(),theme:'stardew',scene_devices:[{entity:'light.bedroom',kind:'light',x:82,y:25,label:'Bedroom',shade:[[74,9],[92,9],[92,50],[74,50]]}]});
  const shade=new Node();shade.dataset.sceneShade='light.bedroom';
  p.shadowRoot.querySelectorAll=selector=>selector==='.scene-device-shade'?[shade]:[];
  p._updateSceneDevices();assert.equal(shade.dataset.state,'off');
  h.states['light.bedroom']=state('on');p._updateSceneDevices();assert.equal(shade.dataset.state,'on');
  h.states['light.bedroom']=state('unavailable');p._updateSceneDevices();assert.equal(shade.dataset.state,'unavailable');
  h.states['light.bedroom']=state('off');h.connected=false;p._updateSceneDevices();assert.equal(shade.dataset.state,'unavailable');
  assert.equal(calls.length,0);
});
test('Stardew art controls route live light and fan toggles through guarded Home Assistant calls',async()=>{
  const{p,h,calls}=fixture({'light.bedroom':state('off'),'switch.office_fan':state('on'),'fan.dining_purifier':state('unavailable')});
  p.setConfig({...config(),theme:'stardew',scene_devices:[
    {entity:'light.bedroom',kind:'light',x:89,y:12,label:'Bedroom light'},
    {entity:'switch.office_fan',kind:'fan',x:60,y:27,label:'Office fan'},
    {entity:'fan.dining_purifier',kind:'purifier',x:38,y:75,label:'Dining purifier'}
  ]});
  assert.equal(calls.length,0,'rendering must not operate devices');
  await click(p,'toggle',{toggle:'light.bedroom'});
  await click(p,'toggle',{toggle:'switch.office_fan'});
  await click(p,'toggle',{toggle:'fan.dining_purifier'});
  assert.deepEqual(calls.map(([domain,service,data])=>[domain,service,data.entity_id]),[['light','turn_on','light.bedroom'],['switch','turn_off','switch.office_fan']]);
  assert.equal(h.states['light.bedroom'].state,'off','art must wait for reported state');
  h.connected=false;await click(p,'toggle',{toggle:'light.bedroom'});assert.equal(calls.length,2);
});
test('Stardew garage uses the inherited viewing popup and native door controls without actuation',()=>{
  const{p,calls}=fixture({'cover.garage':state('closed')});p.setConfig({...config(),theme:'stardew'});let camera;
  p._connectCamera=cam=>{camera=cam.entity;};const mounted=[];p._mountCard=(host,config)=>mounted.push(config);
  p._open('garage');assert.equal(p._modal,'garage');assert.equal(camera,'camera.garage_camera');
  assert.equal(mounted[0].type,'entities');assert.equal(mounted[0].entities[0].entity,'cover.garage');assert.equal(mounted[0].show_header_toggle,false);assert.equal(calls.length,0);
});
test('Stardew room directory and robot source keep the same live entity behavior',()=>{
  const{p,calls}=fixture({'light.curated':state('on'),'sensor.kitchen_extra':state('24'),'vacuum.l10s_ultra':state('cleaning',{located:true}),'sensor.l10s_ultra_current_room':state('Kitchen')});
  p.setConfig({...config(),theme:'stardew'});p._catalog={entities:[{entity_id:'sensor.kitchen_extra',area_name:'Kitchen'}]};
  const room=p._config.rooms.find(r=>r.id==='kitchen');assert.deepEqual(new Set(p._roomEntities(room)),new Set(['light.curated','sensor.kitchen_extra']));
  assert.equal(p._robotReading().point.id,'kitchen');assert.equal(p._robotReading().roomName,'Kitchen');assert.equal(calls.length,0);
});

(async()=>{let failed=0;for(const[name,fn]of tests){try{await fn();console.log('PASS '+name);}catch(error){failed++;console.error('FAIL '+name+'\n  '+error.message);}}console.log(`${tests.length-failed}/${tests.length} ishioho component tests passed. Device and network calls were mocked.`);process.exitCode=failed?1:0;})();
