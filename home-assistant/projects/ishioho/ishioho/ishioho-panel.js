import {environmentMethods,environmentCss} from './ishioho-environment.js?v=14';
import {directoryMethods,directoryCss} from './ishioho-directory.js?v=13';
import {ishiohoCss} from './ishioho-style.js?v=14';
import {weatherVisualMethods} from './ishioho-weather-visuals.js?v=1';
import {validateFloorplan,roomAnchors,renderFloorplanSvg} from './ishioho-floorplan.js?v=1';
import '/local/pallet-house/pallet-panel.js?v=5';
const BasePanel=customElements.get('pallet-house-panel');
const ASSETS='/local/ishioho';
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hasOwn=(object,key)=>Object.prototype.hasOwnProperty.call(object,key);
const THEMES={pokemon:{title:'Pokémon',edition:'GAME BOY EDITION',subtitle:'A little adventure. A place called home.',icon:'◒'},pokedex:{title:'Pokédex',edition:'HOME ENCYCLOPEDIA',subtitle:'Every room. Every reading. One living atlas.',icon:'◉'},crossing:{title:'Animal Crossing',edition:'ISLAND LIFE EDITION',subtitle:'Slow mornings. Little discoveries. Welcome home.',icon:'❧'},stardew:{title:'Stardew',edition:'COUNTRYSIDE EDITION',subtitle:'Warm wood. Quiet evenings. A home to tend.',icon:'✿'}};
let metadataPromise;
function metadata(){return metadataPromise ||= Promise.all([fetch(`${ASSETS}/catalog.json`,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('catalog');return r.json();}),fetch(`${ASSETS}/robot.json`,{cache:'no-store'}).then(r=>r.ok?r.json():{}).catch(()=>({}))]).catch(error=>{metadataPromise=null;throw error;});}
let floorplanPromise;
function defaultFloorplan(){return floorplanPromise ||= fetch(`${ASSETS}/floorplan.json`,{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('floorplan');return r.json();}).then(model=>{const result=validateFloorplan(model);if(!result.ok)throw Error(`Invalid floor plan: ${result.errors.join('; ')}`);return model;}).catch(error=>{floorplanPromise=null;throw error;});}
class IshiohoPanel extends BasePanel {
  constructor(){super();this._motion=true;this._floorplanMode=false;this._floorplanRequest=0;this._failedMapImages=new Set();this.shadowRoot.addEventListener('input',e=>this._directoryInput?.(e));this.shadowRoot.addEventListener('change',e=>this._directoryInput?.(e));this.shadowRoot.addEventListener('keydown',e=>{this._floorplanKey(e);this._themeMenuKey(e);});this.shadowRoot.addEventListener('click',e=>this._themeMenuClick(e));this.shadowRoot.addEventListener('error',e=>this._mapImageError(e),true);}
  connectedCallback(){super.connectedCallback();if(this._built&&this._hass)this._updateEnvironment();}
  disconnectedCallback(){this._stopForecast?.();super.disconnectedCallback();}
  setConfig(config){
    this._theme=hasOwn(THEMES,config.theme)?config.theme:'stardew';
    const request=++this._floorplanRequest;
    const needsFloorplan=this._theme==='stardew'&&!this._floorplan;
    super.setConfig(this._theme==='stardew'&&this._floorplan?this._positionedConfig(config):config);
    if(needsFloorplan)defaultFloorplan().then(model=>{
      if(request!==this._floorplanRequest||this._theme!=='stardew')return;
      this._floorplan=model;this._floorplanError=false;if(this._failedMapImages.has(this._motion?'animated':'still'))this._floorplanMode=true;this._config=this._positionedConfig(this._config);this._built=false;this._render();
    }).catch(()=>{if(request===this._floorplanRequest){this._floorplanError=true;this._q('.floorplan-status')?.removeAttribute('hidden');}});
    metadata().then(([catalog,robot])=>{this._catalog=catalog;this._robotMetadata=robot;this._catalogFailure=false;if(this._built){this._update();if(this._modal==='directory')this._renderDirectory();}}).catch(()=>{this._catalog={entities:[],areas:[]};this._catalogFailure=true;if(this._built)this._update();});
  }
  _positionedConfig(config){
    const anchors=roomAnchors(this._floorplan,'home');
    return {...config,rooms:config.rooms.map(room=>{
      const point=anchors[room.id==='garage'?'garage_stairs':room.id];
      return point?{...room,x:point.x,y:point.y}:room;
    })};
  }
  _floorplanKey(e){
    if(this._theme!=='stardew'||!['Enter',' '].includes(e.key))return;
    const target=e.target.closest?.('[data-floorplan-action]');if(!target)return;
    e.preventDefault();this._floorplanOpen(target);
  }
  _floorplanOpen(target){
    const action=target.dataset.floorplanAction,room=target.dataset.floorplanRoom;
    if(action==='garage')this._open(this._config.garage?'garage':'room',{room:'garage'});
    else if(action==='room'&&this._config.rooms.some(item=>item.id===room))this._open('room',{room});
  }
  _mapImageError(event){
    if(this._theme!=='stardew'||!event.target?.classList?.contains('house-map'))return;
    const kind=event.target.classList.contains('still-map')?'still':'animated';
    this._failedMapImages.add(kind);
    if(this._floorplan&&kind===(this._motion?'animated':'still')){this._floorplanMode=true;this._applyFloorplanMode();}
  }
  _applyFloorplanMode(){
    const active=this._theme==='stardew'&&this._floorplanMode&&!!this._floorplan;
    this._q('.shell')?.classList.toggle('floorplan-mode',active);
    const layer=this._q('.floorplan-layer');if(layer){layer.inert=!active;layer.setAttribute('aria-hidden',String(!active));}
    const button=this._q('.scene-plan');if(button){button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',active?'Show illustrated floor plan':'Show structured floor plan');}
  }
  _themeHref(theme){
    const configured=this._config?.dashboard_path;
    const slug=typeof configured==='string'?configured.trim().replace(/^\/+|\/+$/g,''):'';
    const current=typeof window.location?.pathname==='string'?window.location.pathname.match(/^\/([^/?#]+)/)?.[1]:'';
    const dashboard=/^[a-z0-9_-]+$/i.test(slug)?slug:/^[a-z0-9_.%~-]+$/i.test(current)?current:'prototype-copy';
    const view=theme==='pokemon'?'home':theme;
    return `/${dashboard}/${view}`;
  }
  _themeMenuMarkup(){
    const choices=['stardew','pokemon','pokedex','crossing'].map(key=>{
      const theme=THEMES[key],current=key===this._theme;
      return `<a class="theme-choice ${current?'current':''}" href="${escapeHtml(this._themeHref(key))}" aria-label="${escapeHtml(theme.title)} theme" ${current?'aria-current="page"':''}><span class="theme-choice-icon" aria-hidden="true">${theme.icon}</span><span><strong>${escapeHtml(theme.title)}</strong><small>${key==='stardew'?'Default world':escapeHtml(theme.edition.toLowerCase())}</small></span>${current?'<span class="theme-choice-check" aria-hidden="true">✓</span>':''}</a>`;
    }).join('');
    return `<details class="theme-menu"><summary aria-label="Open themes and settings" title="Themes and settings"><span class="theme-menu-art" aria-hidden="true"><i></i><b></b><em></em></span><span class="theme-menu-label" aria-hidden="true">Menu</span><span class="theme-menu-caret" aria-hidden="true">⌄</span></summary><div class="theme-menu-popover"><div class="theme-menu-heading"><span class="eyebrow">ISHIOHO / LITTLE WORLDS</span><strong>Choose a world</strong></div><nav class="theme-choices" aria-label="Dashboard themes">${choices}</nav><div class="theme-menu-actions">${this._button('▦ <span>Home controls</span>','overview','aria-label="Open home controls and settings"')}${this._button('⛶ <span>Full screen</span>','fullscreen','aria-label="Enter browser full screen"')}</div></div></details>`;
  }
  _themeMenuClick(event){
    const menu=this._q('.theme-menu');
    if(menu?.open&&!event.target.closest?.('.theme-menu'))menu.open=false;
  }
  _themeMenuKey(event){
    if(event.key!=='Escape'||this._modal)return;
    const menu=this._q('.theme-menu');
    if(!menu?.open)return;
    event.preventDefault();menu.open=false;menu.querySelector('summary')?.focus();
  }
  _build(){
    this._stopStreams();this._alertKey=null;this._modal=null;this._cards=[];
    const c=this._config,t=THEMES[this._theme];
    this.shadowRoot.innerHTML=`<style>${this._css()}</style><main class="shell immersive theme-${this._theme}">
    <header class="masthead"><div class="brand"><span class="house-emblem" aria-hidden="true">${t.icon}</span><div><div class="eyebrow">${t.edition}</div><h1>ishioho<span>YOUR HOME, ALIVE</span></h1></div></div>
    ${this._themeMenuMarkup()}
    <div class="header-right">${this._button('<span id="scene-weather">Sky</span><span id="scene-moon" aria-hidden="true">☾</span>','weather','aria-label="Open weather and moon phase"','scene-sky')}${this._theme==='stardew'?this._button('▦ <span>Plan</span>','floorplan',`aria-label="${this._floorplanMode?'Show illustrated floor plan':'Show structured floor plan'}" aria-pressed="${this._floorplanMode}" ${!this._floorplan?'disabled':''}`,'scene-plan'):''}<span class="connection"><i></i><span id="connection">Connected</span></span><div class="clock"><strong id="time"></strong><span id="date"></span></div>${this._button('<span class="alert-dot">!</span><span id="alert-count">0</span>','alerts','aria-label="Open all alerts"','alert-top')}</div></header>
    <section class="dashboard-grid">
    <div class="world-panel panel">
    <div class="landscape-scroll"><div class="map-wrap"><img class="house-map animated-map" src="${this._mapAsset('map')}" alt="Landscape floor plan of ishioho, with planted balcony on the left and garage access at the stairs"><img class="house-map still-map" src="${this._mapAsset('still')}" alt="Landscape floor plan of ishioho">
    ${this._theme==='stardew'?`<div class="floorplan-layer" ${this._floorplanMode?'aria-hidden="false"':'inert aria-hidden="true"'}>${this._floorplan?renderFloorplanSvg(this._floorplan,{levelId:'home',interactiveRoomIds:c.rooms.map(room=>room.id)}):''}</div><div class="floorplan-status" ${this._floorplanError?'':'hidden'}>Structured floor plan unavailable; illustrated view remains available.</div>`:''}
    ${this._weatherVisualMarkup()}
    ${this._sceneDeviceMarkup()}
    <div class="map-pins">${c.rooms.map(r=>{const stairs=this._theme==='stardew'&&r.id==='garage';return `<button class="room-pin ${r.id==='garage'?'garage-pin':''} ${stairs?'stair-hotspot':''}" style="left:${r.x}%;top:${r.y}%" data-action="${r.id==='garage'&&c.garage?'garage':'room'}" data-room="${escapeHtml(r.id)}" aria-label="${stairs?'Open garage popup from stairs descending screen-up toward the top driveway':r.id==='entryway'?'Open indoor Entry controls':`Open ${escapeHtml(r.name)} controls`}">${stairs?'<span class="stair-pin-emblem" aria-hidden="true"></span><strong>Down stairs ↑</strong><span class="stair-pin-target">Garage at top</span>':`<span class="pin-light"></span><strong>${escapeHtml(r.short||r.name)}</strong>`}<small data-room-state="${escapeHtml(r.id)}">Explore</small></button>`;}).join('')}
    ${c.vacuum?'<button class="robot-pin" data-action="vacuum" aria-label="Open robot tracker" style="left:60%;top:65%"><span class="robot-ring"></span><span class="robot-sprite"><i></i></span><span class="robot-pin-label">ROTO</span></button>':''}</div>
    </div></div>
    <div class="world-footer"><span><i class="legend-on"></i> Lights on <span class="separator">·</span> <span id="map-coverage">All devices within reach</span></span><span id="motion-status">Animation on</span></div></div>
</section>
    <section class="command-row"><nav class="dock" aria-label="Home controls">${[['directory','▦','All devices'],['lights','☀','Lights'],['climate','❋','Climate'],...(c.cameras.length?[['cameras','▣','Cameras']]:[]),['energy','ϟ','Energy'],...(c.garage?[['garage','⌂','Garage']]:[]),['planner','▤','Planner']].map(([action,icon,label])=>this._button(`<span>${icon}</span><span>${label}${action==='directory'?'<small id="directory-count"></small>':''}</span>`,action,`aria-label="Open ${label.toLowerCase()}"`)).join('')}</nav></section>
    <footer class="foot"><span>${t.icon} <span>ishioho · ${t.title} edition</span></span><span id="last-sync">Live status</span></footer>
    <div hidden id="alerts-preview"></div><span hidden id="notice-number"></span><div id="toast" role="status" aria-live="polite" hidden></div><div id="modal-root"></div></main>`;
    this._q('.shell').classList.toggle('motion-paused',!this._motion);
    this._applyFloorplanMode();
  }
  _overviewMarkup(){
    const c=this._config,t=THEMES[this._theme];
    return `<div class="world-toolbar"><div><span class="world-signal"></span><strong>${this._theme==='pokedex'?'HOME ATLAS':this._theme==='crossing'?'YOUR LITTLE ISLAND':this._theme==='stardew'?'THE HOMESTEAD':'THE OVERWORLD'}</strong><span class="world-hint">Rooms open their controls · stairs open the garage</span></div><div class="map-tools" role="group" aria-label="Map display">${['rooms','lights','climate'].map((x,i)=>this._button(`${['⌂','☀','❋'][i]} ${x[0].toUpperCase()+x.slice(1)}`,'filter',`data-filter="${x}" aria-pressed="${x===this._filter}"`,x===this._filter?'selected':'')).join('')}${this._button(this._motion?'Ⅱ':'▶','motion',`aria-label="${this._motion?'Pause':'Resume'} decorative animation" aria-pressed="${!this._motion}"`,'motion-button')}</div></div><aside class="control-rail overview-rail" aria-label="Live home overview">
    ${this._environmentMarkup()}
    <div class="status-row" aria-label="Home status"><div class="stats">${this._stat('OUTSIDE','outside','☀','weather','Outdoor sensor')}${this._stat('LIGHTS','lights','✦','lights','Connected')}${this._stat('POWER','power','ϟ','energy','Live usage')}${this._stat('DINING','temp','❋','climate','Room sensor')}</div></div>
    ${c.cameras.length?`<div class="lookout-panel"><div class="rail-label"><span class="eyebrow">LOOKOUT</span><span>${c.cameras.length} configured feeds</span></div><div class="mini-lookout"><div class="camera-tile"><div class="camera-host" data-camera-host="0"></div><button class="camera-open" data-action="camera" data-index="0" aria-label="Open ${escapeHtml(c.cameras[0].name)} camera"><span class="cam-badge"><i></i> ${escapeHtml(c.cameras[0].name.toUpperCase())}</span><span class="expand">↗</span></button></div><div class="mini-cameras">${c.cameras.slice(1).map((cam,i)=>this._button(`▣ ${escapeHtml(cam.name)} · live view`,'camera',`data-index="${i+1}" aria-label="Open ${escapeHtml(cam.name)} camera"`)).join('')}</div></div></div>`:''}
    ${c.vacuum?'<button class="robot-summary" data-action="vacuum" aria-label="Open robot tracker and controls"><span class="robot-sprite"><i></i></span><span><span class="eyebrow">ROTO / ROBOT TRACKER</span><strong id="robot-location">Locating…</strong><small id="vacuum-state"></small><span class="battery"><span id="vacuum-battery-bar"></span></span></span><span class="summary-arrow">↗</span></button>':''}
    <div class="rail-caption"><strong id="greeting">Welcome home.</strong><span>ishioho · ${t.edition.toLowerCase()}</span><small>Tap a room for its devices. Every remaining sensor and control is in All devices.</small></div>
    </aside><nav class="scene-options" aria-label="Dashboard options">${this._button('⛶ Full screen','fullscreen','aria-label="Enter browser full screen"','details-button')}<a class="details-button" href="?disable_km">Home Assistant navigation</a></nav>`;
  }
  _updateClock(){super._updateClock();this._updateEnvironment();}
  _dashboardIds(){const excluded=new Set(this._config.excluded_entities||[]);return Object.keys(this._hass?.states||{}).filter(id=>!excluded.has(id));}
  _sceneDevices(){
    if(this._theme!=='stardew'||!Array.isArray(this._config?.scene_devices))return [];
    const excluded=new Set(this._config.excluded_entities||[]),seen=new Set(),kinds=new Set(['light','fan','purifier','vent']);
    const anchors=new Map((this._floorplan?.deviceAnchors||[]).map(anchor=>[anchor.id,anchor]));
    return this._config.scene_devices.map(item=>{
      const anchor=anchors.get(item?.anchor);
      if(anchor&&anchor.levelId!=='home')return null;
      return anchor&&Array.isArray(anchor.point)?{
        ...item,x:anchor.point[0],y:anchor.point[1]*2,
        ...(Array.isArray(anchor.effectPolygon)?{shade:anchor.effectPolygon.map(([x,y])=>[x,y*2])}:{})
      }:item;
    }).filter(item=>{
      if(!item||typeof item!=='object'||typeof item.entity!=='string'||!/^(light|switch|fan|humidifier)\.[a-z0-9_]+$/.test(item.entity)||!kinds.has(item.kind)||!Number.isFinite(item.x)||!Number.isFinite(item.y)||item.x<0||item.x>100||item.y<0||item.y>100||excluded.has(item.entity)||seen.has(item.entity))return false;
      seen.add(item.entity);return true;
    });
  }
  _sceneShade(item){
    if(item.kind!=='light'||!Array.isArray(item.shade)||item.shade.length<3||item.shade.length>12)return '';
    if(!item.shade.every(point=>Array.isArray(point)&&point.length===2&&point.every(value=>Number.isFinite(value)&&value>=0&&value<=100)))return '';
    const xs=item.shade.map(point=>point[0]),ys=item.shade.map(point=>point[1]);
    const left=Math.min(...xs),top=Math.min(...ys),width=Math.max(...xs)-left,height=Math.max(...ys)-top;
    if(width<1||height<1)return '';
    const polygon=item.shade.map(([x,y])=>`${Math.round((x-left)/width*1000)/10}% ${Math.round((y-top)/height*1000)/10}%`).join(',');
    return `<div class="scene-device-shade" data-scene-shade="${escapeHtml(item.entity)}" data-state="unavailable" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%;clip-path:polygon(${polygon})"></div>`;
  }
  _sceneDeviceMarkup(){
    const devices=this._sceneDevices();if(!devices.length)return '';
    return `<div class="scene-devices" aria-label="Interactive home fixtures">${devices.map(item=>this._sceneShade(item)).join('')}${devices.map(item=>{
      const id=escapeHtml(item.entity),label=escapeHtml(typeof item.label==='string'&&item.label.trim()?item.label.trim():this._name(item.entity));
      return `<div class="scene-device" data-scene-entity="${id}" data-kind="${item.kind}" data-state="unavailable" style="left:${item.x}%;top:${item.y}%"><span class="scene-device-art" aria-hidden="true"><i class="scene-device-halo"></i><i class="scene-device-sprite"></i><i class="scene-device-air"></i></span><span class="scene-device-label" aria-hidden="true">${label}</span><button class="scene-device-hit" type="button" data-action="toggle" data-toggle="${id}" aria-label="${label} unavailable" title="${label} unavailable" aria-pressed="false" disabled>Turn on</button></div>`;
    }).join('')}</div>`;
  }
  _updateSceneDevices(){
    const connected=this._hass?.connected!==false,devices=new Map(this._sceneDevices().map(device=>[device.entity,device]));
    const stateFor=id=>connected&&this._valid(id)&&['on','off'].includes(this._value(id))?this._value(id):'unavailable';
    this.shadowRoot.querySelectorAll('.scene-device').forEach(item=>{
      const id=item.dataset.sceneEntity,button=item.querySelector('.scene-device-hit');if(!button)return;
      const state=stateFor(id);
      const configuredLabel=devices.get(id)?.label,label=typeof configuredLabel==='string'&&configuredLabel.trim()?configuredLabel.trim():this._name(id);
      item.dataset.state=state;
      item.dataset.pending=String(this._busy.has(id));
      button.disabled=state==='unavailable'||this._busy.has(id);
      button.setAttribute('aria-pressed',String(state==='on'));
      const action=state==='unavailable'?'Unavailable':this._busy.has(id)?'Waiting for':state==='on'?'Turn off':'Turn on';
      button.setAttribute('aria-label',`${action} ${label}`);
      button.title=`${label} · ${state==='unavailable'?'unavailable':this._busy.has(id)?'waiting for device':state}`;
    });
    this.shadowRoot.querySelectorAll('.scene-device-shade').forEach(shade=>{shade.dataset.state=stateFor(shade.dataset.sceneShade);});
  }
  _update(){super._update();if(!this._q('.shell'))return;const count=this._dashboardIds().length;this._text('#directory-count',count.toLocaleString());this._text('#map-coverage',`${count.toLocaleString()} live entities · all in All devices`);this._updateSceneDevices();this._updateRobot();this._directoryUpdate?.();if(this._modal==='garage'){this._text('#garage-status',this._state(this._config.garage));const scene=this._q('.garage-scene');if(scene){const state=this._hass?.connected!==false&&['open','closed','opening','closing'].includes(this._value(this._config.garage))?this._value(this._config.garage):'unknown';scene.dataset.state=state;}}if(this._filter==='rooms')for(const room of this._config.rooms)if(!room.temperature&&!room.status)this._text(`[data-room-state="${room.id}"]`,this._roomCount(room));}
  _robotStem(){
    const configured=this._config?.robot_entity_prefix;
    if(typeof configured==='string'&&/^[a-z0-9_]+$/i.test(configured.trim()))return configured.trim().toLowerCase();
    const vacuum=this._config?.vacuum;
    return typeof vacuum==='string'&&/^vacuum\.[a-z0-9_]+$/i.test(vacuum)?vacuum.slice('vacuum.'.length):null;
  }
  _robotRoomEntity(){const stem=this._robotStem();return this._config.robot_room||(stem?`sensor.${stem}_current_room`:null);}
  _robotEntityIds(){
    const states=this._hass?.states||{},stem=this._robotStem(),config=this._config;
    const matching=stem?Object.keys(states).filter(id=>{const objectId=id.split('.')[1];return objectId===stem||objectId?.startsWith(stem+'_');}):[];
    const explicit=[config.vacuum,config.vacuum_battery,config.vacuum_map,this._robotRoomEntity(),...(Array.isArray(config.robot_entities)?config.robot_entities:[])];
    const excluded=new Set(config.excluded_entities||[]);
    return [...new Set([...matching,...explicit])].filter(id=>typeof id==='string'&&states[id]&&!excluded.has(id));
  }
  _robotMetrics(){
    const c=this._config,stem=this._robotStem();
    const defaults=[[c.vacuum_battery,'BATTERY'],[this._robotRoomEntity(),'ROOM'],[stem?`sensor.${stem}_cleaned_area`:null,'CLEANED'],[stem?`sensor.${stem}_cleaning_time`:null,'TIME']];
    const entries=Array.isArray(c.robot_metrics)?c.robot_metrics.map(item=>[item?.entity,item?.label]):defaults;
    return entries.filter(([id])=>typeof id==='string'&&this._s(id));
  }
  _garageCamera(room){
    const excluded=new Set(this._config.excluded_entities||[]);
    const cameras=(this._config.cameras||[]).filter(camera=>!excluded.has(camera.entity)),preferred=this._config.garage_camera;
    if(preferred)return cameras.find(camera=>camera.entity===preferred)||null;
    const assigned=new Set((room?.entities||[]).filter(id=>typeof id==='string'&&id.startsWith('camera.')));
    return cameras.find(camera=>assigned.has(camera.entity))||cameras.find(camera=>/\bgarage\b/i.test(camera.name||''))||null;
  }
  _robotReading(){
    const c=this._config,vac=this._s(c.vacuum),room=this._s(this._robotRoomEntity());
    const roomName=room&&!['unavailable','unknown','none','None',''].includes(room.state)?room.state:null;
    const names={dining:'dining','dining room':'dining',living:'living','living room':'living',kitchen:'kitchen',bedroom:'master','master bedroom':'master',master:'master',office:'office',hallway:'hall',hall:'hall',bathroom:'bathroom',balcony:'balcony',entryway:'entryway',entry:'entryway'};
    const roomKey=(roomName||'').toLowerCase();
    const duplicate=(this._robotMetadata?.room_segments||[]).filter(s=>(s.name||'').toLowerCase()===roomKey).length>1;
    const customAlias=Object.entries(c.robot_room_aliases||{}).find(([name])=>name.toLowerCase()===roomKey)?.[1];
    const namedRoom=c.rooms.find(r=>r.id===roomKey||r.name.toLowerCase()===roomKey);
    const roomId=customAlias||names[roomKey]||namedRoom?.id,point=c.rooms.find(r=>r.id===roomId),state=vac?.state||'unavailable',located=vac?.attributes?.located===true;
    const available=this._valid(c.vacuum)&&this._hass.connected!==false;
    const ambiguous=duplicate||(roomKey==='bathroom'&&!customAlias);
    return {roomName,point:available&&located&&!ambiguous?point:null,state,located,cleaning:available&&['cleaning','returning'].includes(state),available,updated:room?.last_updated};
  }
  _updateRobot(){
    const r=this._robotReading(),pin=this._q('.robot-pin');if(!pin)return;
    const label=r.available?(r.state==='docked'?`Docked${r.roomName?' · '+r.roomName:''}`:r.roomName||'Location on live map'):'Robot unavailable';
    this._text('#robot-location',label);this._text('.robot-pin-label',r.available?(r.point?`ROTO · ${r.roomName}`:'ROTO · map'):'ROTO · offline');
    pin.classList.toggle('cleaning',r.cleaning);pin.classList.toggle('offline',!r.available);pin.classList.toggle('unlocated',!r.point);pin.hidden=!r.point;
    const point=r.point||{x:55,y:85};pin.style.left=`${point.x+2.3}%`;pin.style.top=`${Math.min(94,point.y+8)}%`;
    pin.setAttribute('aria-label',`Open robot tracker: ${label}. ${r.point?'Room-level location':'See live map for location'}`);
    this._text('#robot-popup-location',label);this._text('#robot-position-note',r.point?'Marker follows the room reported by the robot. Open the live map below for its precise position.':'The robot is not reporting a mapped room. Its live map below is the location source.');
  }
  _dialog(title,html,options={}){
    if(this._modal)this._stopStreams();else this._returnFocus=this.shadowRoot.activeElement;this._cards=this._cards.filter(c=>c.isConnected);this._modal=options.kind||'custom';
    this._q('#modal-root').innerHTML=`<div class="backdrop"><section class="dialog ${options.wide?'wide':''}" role="dialog" aria-modal="true" aria-labelledby="dialog-title" tabindex="-1"><header class="dialog-header"><div><span class="eyebrow">ISHIOHO / ${escapeHtml((options.kind||'HOME').toUpperCase())}</span><h2 id="dialog-title">${escapeHtml(title)}</h2></div>${this._button('×','close','aria-label="Close dialog"','close')}</header><div class="dialog-body" id="dialog-content">${html}</div><footer class="dialog-footer">Live Home Assistant devices <span>ESC TO CLOSE</span></footer></section></div>`;this._q('.close').focus();
  }
  _catalogRows(){const source=this._catalog?.entities||[];return Array.isArray(source)?source:Object.entries(source).map(([entity_id,x])=>({entity_id,...x}));}
  _roomCount(room){const n=this._roomEntities(room).length;return `${n} ${n===1?'entity':'entities'}`;}
  _roomEntities(room){const names=new Set((room.area_names||[room.name]).map(s=>s.toLowerCase()));const entries=this._catalogRows().filter(e=>names.has((e.area_name||'').toLowerCase())&&this._s(e.entity_id));const excluded=new Set(this._config.excluded_entities||[]);return [...new Set([...(room.entities||[]),...entries.map(e=>e.entity_id)])].filter(id=>this._s(id)&&!excluded.has(id));}
  _open(kind,data={}){
    if(kind==='overview'){this._dialog('Home controls',this._overviewMarkup(),{kind:'overview'});this._mountCameras();this._update();this._updateEnvironment();return;}
    if(kind==='weather'){this._openEnvironment();return;}
    if(kind==='directory'){this._openDirectory(data);return;}
    if(kind==='room'){
      const room=this._config.rooms.find(r=>r.id===data.room);if(!room)return;if(room.id==='garage'&&this._config.garage){this._open('garage');return;}
      const ids=this._roomEntities(room),important=[...new Set([...(room.entities||[]),...ids.filter(id=>['light','switch','fan','climate','cover','media_player','humidifier','vacuum'].includes(id.split('.')[0]))])].filter(id=>ids.includes(id)).slice(0,14);
      this._dialog(room.name,`<div class="room-topline"><div>${room.temperature?`<strong data-sensor="${room.temperature}">${escapeHtml(this._fmt(room.temperature))}</strong>`:''}${room.humidity?`<small><span data-sensor="${room.humidity}">${escapeHtml(this._fmt(room.humidity))}</span> humidity</small>`:''}</div>${this._button(`▦ All ${ids.length} entities`,'room-directory',`data-room="${escapeHtml(room.id)}"`,'all-room-button')}</div><p class="dialog-intro">${escapeHtml(room.note||'Quick controls here. Every sensor and setting is in the room directory.')}</p>${this._entityRows(important)}<div class="room-all-footer">${this._button(`Explore all ${room.name} sensors & controls →`,'room-directory',`data-room="${escapeHtml(room.id)}"`,'all-room-button')}</div>`,{kind:'room'});this._modalData=data;this._update();return;
    }
    if(kind==='garage'){
      const room=this._config.rooms.find(r=>r.id==='garage'),ids=room?this._roomEntities(room):[this._config.garage];
      if(!this._config.garage){if(room)this._open('room',{room:'garage'});return;}
      this._dialog('Garage',`<div class="garage-status"><div><span class="eyebrow">SINGLE-CAR GARAGE · BELOW HOME</span><h3 id="garage-status">${escapeHtml(this._state(this._config.garage))}</h3><p>The roll-up faces the driveway at the top of the map. From the upstairs porch at the bottom, the stairs descend screen-up beside the left pedestrian door.</p></div></div><div class="garage-grid"><div class="garage-scene-panel"><h3>Garage & stairs</h3><div class="garage-scene" data-state="unknown"><img src="${ASSETS}/garage-scene-v5.svg?v=5" alt="Top-down single-car garage: roll-up opens toward the top driveway; left pedestrian door is beside stairs that descend screen-up from the bottom-side porch; no openings on the right or bottom" loading="lazy"><span class="garage-door-curtain" aria-hidden="true"></span></div></div><div class="garage-camera-panel"><h3>Live view</h3><div id="garage-live"></div></div><div class="garage-controls-panel"><h3>Door & devices</h3><div id="garage-controls"></div>${this._button(`All ${ids.length} garage entities →`,'room-directory','data-room="garage"','all-room-button')}</div></div>`,{kind:'garage',wide:true});
      this._mountCard(this._q('#garage-controls'),{type:'entities',entities:[{entity:this._config.garage,name:'Garage door'}],show_header_toggle:false});const camera=this._garageCamera(room);if(camera)this._connectCamera(camera,this._q('#garage-live'));else this._q('#garage-live').textContent='No garage camera is configured.';this._update();return;
    }
    if(kind==='vacuum'){
      if(!this._config.vacuum)return;
      const ids=this._robotEntityIds(),hasMap=Boolean(this._config.vacuum_map);
      this._dialog('ROTO · robot tracker',`<div class="robot-tracker-head"><span class="robot-sprite"><i></i></span><div><span class="eyebrow">REPORTED ROOM / LIVE TELEMETRY</span><h3 id="robot-popup-location"></h3><p id="robot-position-note"></p></div></div><div id="robot-controls"></div><div class="robot-metrics">${this._robotMetrics().map(([id,label])=>`<div><span class="eyebrow">${escapeHtml(label||id)}</span><strong data-entity-state="${escapeHtml(id)}">${escapeHtml(this._state(id))}</strong></div>`).join('')}</div>${hasMap?'<h3>Live robot map</h3><div id="robot-map"></div><p class="dialog-intro map-note">The map comes directly from your robot. Its position and route update as the integration reports them.</p>':''}${this._button(`All ${ids.length} robot sensors & settings →`,'robot-directory','','all-room-button')}`,{kind:'vacuum',wide:true});
      this._mountCard(this._q('#robot-controls'),{type:'tile',entity:this._config.vacuum,name:'ROTO',features:[{type:'vacuum-commands',commands:['start_pause','stop','return_home']}]});if(hasMap)this._mountCard(this._q('#robot-map'),{type:'picture-entity',entity:this._config.vacuum_map,show_name:false,show_state:false});this._update();return;
    }
    super._open(kind,data);this._text('.dialog-header .eyebrow',`ISHIOHO / ${kind.toUpperCase()}`);
    if(['lights','climate','energy','planner','cameras'].includes(kind)){const wrap=document.createElement('div');wrap.className='room-all-footer';wrap.innerHTML=this._button('Browse all sensors & controls →','directory','','all-room-button');this._q('#dialog-content').append(wrap);}
  }
  _entityRows(ids){return ids.map(id=>{const domain=id.split('.')[0],tog=['light','switch','fan','humidifier'].includes(domain);return `<div class="entity-row">${this._button(`<span class="device-icon">${domain==='light'?'☀':domain==='cover'?'▥':domain==='sensor'?'◈':'◉'}</span><span><strong>${escapeHtml(this._name(id))}</strong><small data-entity-state="${escapeHtml(id)}">${escapeHtml(this._state(id))}</small><small class="entity-id">${escapeHtml(id)}</small></span>`,'info',`data-entity="${escapeHtml(id)}"`,'entity-name')}${tog?this._button(this._on(id)?'Turn off':'Turn on','toggle',`data-toggle="${escapeHtml(id)}" aria-label="${this._on(id)?'Turn off':'Turn on'} ${escapeHtml(this._name(id))}" ${!this._valid(id)?'disabled':''}`,'toggle'):this._button('↗','info',`data-entity="${escapeHtml(id)}" aria-label="Open ${escapeHtml(this._name(id))} details"`,'square')}</div>`;}).join('')||'<p class="dialog-intro">No entities are assigned here yet.</p>';}
  async _click(e){
    if(this._theme==='stardew'&&this._floorplanMode){const target=e.target.closest?.('[data-floorplan-action]');if(target){this._floorplanOpen(target);return;}}
    const button=e.target.closest?.('button');if(!button)return;const action=button.dataset.action;
    if(button.closest?.('.theme-menu'))this._q('.theme-menu').open=false;
    if(action==='floorplan'){
      if(!this._floorplan||this._failedMapImages.has(this._motion?'animated':'still'))return;
      this._floorplanMode=!this._floorplanMode;
      this._applyFloorplanMode();
      return;
    }
    if(action==='fullscreen'){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{this._toast('Use Fully Kiosk fullscreen settings on this device.',true);}return;}
    if(action==='weather'){this._openEnvironment();return;}
    if(action==='appearance'){this._cycleAppearance();return;}
    if(action==='motion'){this._motion=!this._motion;this._q('.shell').classList.toggle('motion-paused',!this._motion);button.setAttribute('aria-pressed',String(!this._motion));button.setAttribute('aria-label',this._motion?'Pause decorative animation':'Resume decorative animation');button.textContent=this._motion?'Ⅱ':'▶';this._text('#motion-status',this._motion?'Animation on':'Animation paused');if(this._theme==='stardew'&&this._floorplan&&this._failedMapImages.has(this._motion?'animated':'still')){this._floorplanMode=true;this._applyFloorplanMode();}return;}
    if(action==='room-directory'){const room=this._config.rooms.find(r=>r.id===button.dataset.room);if(room)this._openDirectory({ids:this._roomEntities(room),title:`${room.name} · all devices`});return;}
    if(action==='robot-directory'){this._openDirectory({ids:this._robotEntityIds(),title:'ROTO · all sensors & controls'});return;}
    if(action?.startsWith('directory-')){this._directoryClick(action,button);return;}
    return super._click(e);
  }
  _css(){return super._css()+directoryCss+ishiohoCss+environmentCss;}
}
Object.assign(IshiohoPanel.prototype,directoryMethods,environmentMethods,weatherVisualMethods);
if(!customElements.get('ishioho-panel'))customElements.define('ishioho-panel',IshiohoPanel);
const customCards=window.customCards||(window.customCards=[]);
if(!customCards.some(card=>card.type==='ishioho-panel'))customCards.push({type:'ishioho-panel',name:'ishioho',description:'Four living worlds. Every home sensor and control.'});
