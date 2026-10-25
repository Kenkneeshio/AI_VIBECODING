import {environmentMethods,environmentCss} from './ishioho-environment.js?v=14';
import {directoryMethods,directoryCss} from './ishioho-directory.js?v=13';
import {ishiohoCss} from './ishioho-style.js?v=14';
import {weatherVisualMethods} from './ishioho-weather-visuals.js?v=1';
import '/local/pallet-house/pallet-panel.js?v=5';
const BasePanel=customElements.get('pallet-house-panel');
const ASSETS='/local/ishioho';
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const THEMES={pokemon:{title:'Pokémon',edition:'GAME BOY EDITION',subtitle:'A little adventure. A place called home.',icon:'◒'},pokedex:{title:'Pokédex',edition:'HOME ENCYCLOPEDIA',subtitle:'Every room. Every reading. One living atlas.',icon:'◉'},crossing:{title:'Animal Crossing',edition:'ISLAND LIFE EDITION',subtitle:'Slow mornings. Little discoveries. Welcome home.',icon:'❧'},stardew:{title:'Stardew',edition:'COUNTRYSIDE EDITION',subtitle:'Warm wood. Quiet evenings. A home to tend.',icon:'✿'}};
let metadataPromise;
function metadata(){return metadataPromise ||= Promise.all([fetch(`${ASSETS}/catalog.json?v=1`).then(r=>{if(!r.ok)throw Error('catalog');return r.json();}),fetch(`${ASSETS}/robot.json?v=1`).then(r=>r.ok?r.json():{}).catch(()=>({}))]).catch(error=>{metadataPromise=null;throw error;});}
class IshiohoPanel extends BasePanel {
  constructor(){super();this._motion=true;this.shadowRoot.addEventListener('input',e=>this._directoryInput?.(e));this.shadowRoot.addEventListener('change',e=>this._directoryInput?.(e));}
  connectedCallback(){super.connectedCallback();if(this._built&&this._hass)this._updateEnvironment();}
  disconnectedCallback(){this._stopForecast?.();super.disconnectedCallback();}
  setConfig(config){this._theme=THEMES[config.theme]?config.theme:'pokemon';super.setConfig(config);metadata().then(([catalog,robot])=>{this._catalog=catalog;this._robotMetadata=robot;if(this._built){this._update();if(this._modal==='directory')this._renderDirectory();}}).catch(()=>{this._catalog={entities:[],areas:[]};this._catalogFailure=true;if(this._built)this._update();});}
  _build(){
    this._stopStreams();this._alertKey=null;this._modal=null;this._cards=[];
    const c=this._config,t=THEMES[this._theme];
    this.shadowRoot.innerHTML=`<style>${this._css()}</style><main class="shell immersive theme-${this._theme}">
    <header class="masthead"><div class="brand"><span class="house-emblem" aria-hidden="true">${t.icon}</span><div><div class="eyebrow">${t.edition}</div><h1>ishioho<span>YOUR HOME, ALIVE</span></h1></div></div>
    <nav class="theme-tabs" aria-label="Choose art style">${Object.entries(THEMES).map(([key,val])=>`<a class="${key===this._theme?'current':''}" href="/prototype-copy/${key==='pokemon'?'home':key}" aria-label="${escapeHtml(val.title)} theme" ${key===this._theme?'aria-current="page"':''}>${val.icon}<span>${val.title}</span></a>`).join('')}</nav>
    <div class="header-right">${this._button('<span id="scene-weather">Sky</span><span id="scene-moon" aria-hidden="true">☾</span>','weather','aria-label="Open weather and moon phase"','scene-sky')}${this._button('☷ <span>Controls</span>','overview','aria-label="Open home overview and map settings"','scene-menu')}<span class="connection"><i></i><span id="connection">Connected</span></span><div class="clock"><strong id="time"></strong><span id="date"></span></div>${this._button('<span class="alert-dot">!</span><span id="alert-count">0</span>','alerts','aria-label="Open all alerts"','alert-top')}</div></header>
    <section class="dashboard-grid">
    <div class="world-panel panel">
    <div class="landscape-scroll"><div class="map-wrap"><img class="house-map animated-map" src="${this._mapAsset('map')}" alt="Landscape floor plan of ishioho, with planted balcony on the left and garage access at the stairs"><img class="house-map still-map" src="${this._mapAsset('still')}" alt="Landscape floor plan of ishioho">
    ${this._weatherVisualMarkup()}
    <div class="map-pins">${c.rooms.map(r=>`<button class="room-pin ${r.id==='garage'?'garage-pin':''}" style="left:${r.x}%;top:${r.y}%" data-action="${r.id==='garage'?'garage':'room'}" data-room="${escapeHtml(r.id)}" aria-label="Open ${escapeHtml(r.name)} controls"><span class="pin-light"></span><strong>${escapeHtml(r.short||r.name)}</strong><small data-room-state="${escapeHtml(r.id)}">Explore</small></button>`).join('')}
    <button class="robot-pin" data-action="vacuum" aria-label="Open robot tracker" style="left:60%;top:65%"><span class="robot-ring"></span><span class="robot-sprite"><i></i></span><span class="robot-pin-label">ROTO</span></button></div>
    </div></div>
    <div class="world-footer"><span><i class="legend-on"></i> Lights on <span class="separator">·</span> <span id="map-coverage">All devices within reach</span></span><span id="motion-status">Animation on</span></div></div>
</section>
    <section class="command-row"><nav class="dock" aria-label="Home controls">${[['directory','▦','All devices'],['lights','☀','Lights'],['climate','❋','Climate'],...(c.cameras.length?[['cameras','▣','Cameras']]:[]),['energy','ϟ','Energy'],['garage','⌂','Garage'],['planner','▤','Planner']].map(([action,icon,label])=>this._button(`<span>${icon}</span><span>${label}${action==='directory'?'<small id="directory-count"></small>':''}</span>`,action,`aria-label="Open ${label.toLowerCase()}"`)).join('')}</nav></section>
    <footer class="foot"><span>${t.icon} <span>ishioho · ${t.title} edition</span></span><span id="last-sync">Live status</span></footer>
    <div hidden id="alerts-preview"></div><span hidden id="notice-number"></span><div id="toast" role="status" aria-live="polite" hidden></div><div id="modal-root"></div></main>`;
    this._q('.shell').classList.toggle('motion-paused',!this._motion);
  }
  _overviewMarkup(){
    const c=this._config,t=THEMES[this._theme];
    return `<div class="world-toolbar"><div><span class="world-signal"></span><strong>${this._theme==='pokedex'?'HOME ATLAS':this._theme==='crossing'?'YOUR LITTLE ISLAND':this._theme==='stardew'?'THE HOMESTEAD':'THE OVERWORLD'}</strong><span class="world-hint">Rooms open their controls · stairs open the garage</span></div><div class="map-tools" role="group" aria-label="Map display">${['rooms','lights','climate'].map((x,i)=>this._button(`${['⌂','☀','❋'][i]} ${x[0].toUpperCase()+x.slice(1)}`,'filter',`data-filter="${x}" aria-pressed="${x===this._filter}"`,x===this._filter?'selected':'')).join('')}${this._button(this._motion?'Ⅱ':'▶','motion',`aria-label="${this._motion?'Pause':'Resume'} decorative animation" aria-pressed="${!this._motion}"`,'motion-button')}</div></div><aside class="control-rail overview-rail" aria-label="Live home overview">
    ${this._environmentMarkup()}
    <div class="status-row" aria-label="Home status"><div class="stats">${this._stat('OUTSIDE','outside','☀','weather','Outdoor sensor')}${this._stat('LIGHTS','lights','✦','lights','Connected')}${this._stat('POWER','power','ϟ','energy','Live usage')}${this._stat('DINING','temp','❋','climate','Room sensor')}</div></div>
    ${c.cameras.length?`<div class="lookout-panel"><div class="rail-label"><span class="eyebrow">LOOKOUT</span><span>${c.cameras.length} configured feeds</span></div><div class="mini-lookout"><div class="camera-tile"><div class="camera-host" data-camera-host="0"></div><button class="camera-open" data-action="camera" data-index="0" aria-label="Open ${escapeHtml(c.cameras[0].name)} camera"><span class="cam-badge"><i></i> ${escapeHtml(c.cameras[0].name.toUpperCase())}</span><span class="expand">↗</span></button></div><div class="mini-cameras">${c.cameras.slice(1).map((cam,i)=>this._button(`▣ ${escapeHtml(cam.name)} · live view`,'camera',`data-index="${i+1}" aria-label="Open ${escapeHtml(cam.name)} camera"`)).join('')}</div></div></div>`:''}
    <button class="robot-summary" data-action="vacuum" aria-label="Open robot tracker and controls"><span class="robot-sprite"><i></i></span><span><span class="eyebrow">ROTO / ROBOT TRACKER</span><strong id="robot-location">Locating…</strong><small id="vacuum-state"></small><span class="battery"><span id="vacuum-battery-bar"></span></span></span><span class="summary-arrow">↗</span></button>
    <div class="rail-caption"><strong id="greeting">Welcome home.</strong><span>ishioho · ${t.edition.toLowerCase()}</span><small>Tap a room for its devices. Every remaining sensor and control is in All devices.</small></div>
    </aside><nav class="scene-options" aria-label="Dashboard options">${this._button('⛶ Full screen','fullscreen','aria-label="Enter browser full screen"','details-button')}<a class="details-button" href="?disable_km">Home Assistant navigation</a></nav>`;
  }
  _updateClock(){super._updateClock();this._updateEnvironment();}
  _dashboardIds(){const excluded=new Set(this._config.excluded_entities||[]);return Object.keys(this._hass?.states||{}).filter(id=>!excluded.has(id));}
  _update(){super._update();if(!this._q('.shell'))return;const count=this._dashboardIds().length;this._text('#directory-count',count.toLocaleString());this._text('#map-coverage',`${count.toLocaleString()} live entities · all in All devices`);this._updateRobot();this._directoryUpdate?.();if(this._modal==='garage')this._text('#garage-status',this._state(this._config.garage));if(this._filter==='rooms')for(const room of this._config.rooms)if(!room.temperature&&!room.status)this._text(`[data-room-state="${room.id}"]`,this._roomCount(room));}
  _robotReading(){
    const c=this._config,vac=this._s(c.vacuum),room=this._s(c.robot_room||'sensor.l10s_ultra_current_room');
    const roomName=room&&!['unavailable','unknown','none','None',''].includes(room.state)?room.state:null;
    const names={dining:'dining','dining room':'dining',living:'living','living room':'living',kitchen:'kitchen',bedroom:'master','master bedroom':'master',master:'master',office:'office',hallway:'hall',hall:'hall',bathroom:'bathroom',balcony:'balcony',entryway:'entryway',entry:'entryway'};
    const roomKey=(roomName||'').toLowerCase();
    const duplicate=(this._robotMetadata?.room_segments||[]).filter(s=>(s.name||'').toLowerCase()===roomKey).length>1;
    const roomId=names[roomKey],point=c.rooms.find(r=>r.id===roomId),state=vac?.state||'unavailable',located=vac?.attributes?.located===true;
    const available=this._valid(c.vacuum)&&this._hass.connected!==false;
    const ambiguous=duplicate||roomKey==='bathroom';
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
      const room=this._config.rooms.find(r=>r.id===data.room);if(!room)return;if(room.id==='garage'){this._open('garage');return;}
      const ids=this._roomEntities(room),important=[...new Set([...(room.entities||[]),...ids.filter(id=>['light','switch','fan','climate','cover','media_player','humidifier','vacuum'].includes(id.split('.')[0]))])].filter(id=>ids.includes(id)).slice(0,14);
      this._dialog(room.name,`<div class="room-topline"><div>${room.temperature?`<strong data-sensor="${room.temperature}">${escapeHtml(this._fmt(room.temperature))}</strong>`:''}${room.humidity?`<small><span data-sensor="${room.humidity}">${escapeHtml(this._fmt(room.humidity))}</span> humidity</small>`:''}</div>${this._button(`▦ All ${ids.length} entities`,'room-directory',`data-room="${escapeHtml(room.id)}"`,'all-room-button')}</div><p class="dialog-intro">${escapeHtml(room.note||'Quick controls here. Every sensor and setting is in the room directory.')}</p>${this._entityRows(important)}<div class="room-all-footer">${this._button(`Explore all ${room.name} sensors & controls →`,'room-directory',`data-room="${escapeHtml(room.id)}"`,'all-room-button')}</div>`,{kind:'room'});this._modalData=data;this._update();return;
    }
    if(kind==='garage'){
      const room=this._config.rooms.find(r=>r.id==='garage'),ids=room?this._roomEntities(room):[this._config.garage];
      this._dialog('Garage',`<div class="garage-status"><span class="garage-illustration" aria-hidden="true"><i></i></span><div><span class="eyebrow">SINGLE-CAR GARAGE · BELOW HOME</span><h3 id="garage-status">${escapeHtml(this._state(this._config.garage))}</h3><p>Reached by the porch stairs. Check the live view before operating the door.</p></div></div><div class="garage-grid"><div><h3>Live view</h3><div id="garage-live"></div></div><div><h3>Door & devices</h3><div id="garage-controls"></div>${this._button(`All ${ids.length} garage entities →`,'room-directory','data-room="garage"','all-room-button')}</div></div>`,{kind:'garage',wide:true});
      this._mountCard(this._q('#garage-controls'),{type:'entities',entities:[{entity:this._config.garage,name:'Garage door'}],show_header_toggle:false});const camera=this._config.cameras.find(cam=>cam.entity==='camera.garage_camera');if(camera)this._connectCamera(camera,this._q('#garage-live'));this._update();return;
    }
    if(kind==='vacuum'){
      const ids=Object.keys(this._hass.states).filter(id=>id.includes('l10s_ultra'));
      this._dialog('ROTO · robot tracker',`<div class="robot-tracker-head"><span class="robot-sprite"><i></i></span><div><span class="eyebrow">REPORTED ROOM / LIVE TELEMETRY</span><h3 id="robot-popup-location"></h3><p id="robot-position-note"></p></div></div><div id="robot-controls"></div><div class="robot-metrics">${[[this._config.vacuum_battery,'BATTERY'],['sensor.l10s_ultra_current_room','ROOM'],['sensor.l10s_ultra_cleaned_area','CLEANED'],['sensor.l10s_ultra_cleaning_time','TIME']].filter(([id])=>this._s(id)).map(([id,label])=>`<div><span class="eyebrow">${label}</span><strong data-entity-state="${id}">${escapeHtml(this._state(id))}</strong></div>`).join('')}</div><h3>Live robot map</h3><div id="robot-map"></div><p class="dialog-intro map-note">The map comes directly from your robot. Its position and route update as the integration reports them.</p>${this._button(`All ${ids.length} robot sensors & settings →`,'robot-directory','','all-room-button')}`,{kind:'vacuum',wide:true});
      this._mountCard(this._q('#robot-controls'),{type:'tile',entity:this._config.vacuum,name:'ROTO',features:[{type:'vacuum-commands',commands:['start_pause','stop','return_home']}]});this._mountCard(this._q('#robot-map'),{type:'picture-entity',entity:this._config.vacuum_map,show_name:false,show_state:false});this._update();return;
    }
    super._open(kind,data);this._text('.dialog-header .eyebrow',`ISHIOHO / ${kind.toUpperCase()}`);
    if(['lights','climate','energy','planner','cameras'].includes(kind)){const wrap=document.createElement('div');wrap.className='room-all-footer';wrap.innerHTML=this._button('Browse all sensors & controls →','directory','','all-room-button');this._q('#dialog-content').append(wrap);}
  }
  _entityRows(ids){return ids.map(id=>{const domain=id.split('.')[0],tog=['light','switch','fan','humidifier'].includes(domain);return `<div class="entity-row">${this._button(`<span class="device-icon">${domain==='light'?'☀':domain==='cover'?'▥':domain==='sensor'?'◈':'◉'}</span><span><strong>${escapeHtml(this._name(id))}</strong><small data-entity-state="${escapeHtml(id)}">${escapeHtml(this._state(id))}</small><small class="entity-id">${escapeHtml(id)}</small></span>`,'info',`data-entity="${escapeHtml(id)}"`,'entity-name')}${tog?this._button(this._on(id)?'Turn off':'Turn on','toggle',`data-toggle="${escapeHtml(id)}" aria-label="${this._on(id)?'Turn off':'Turn on'} ${escapeHtml(this._name(id))}" ${!this._valid(id)?'disabled':''}`,'toggle'):this._button('↗','info',`data-entity="${escapeHtml(id)}" aria-label="Open ${escapeHtml(this._name(id))} details"`,'square')}</div>`;}).join('')||'<p class="dialog-intro">No entities are assigned here yet.</p>';}
  async _click(e){
    const button=e.target.closest?.('button');if(!button)return;const action=button.dataset.action;
    if(action==='fullscreen'){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{this._toast('Use Fully Kiosk fullscreen settings on this device.',true);}return;}
    if(action==='weather'){this._openEnvironment();return;}
    if(action==='appearance'){this._cycleAppearance();return;}
    if(action==='motion'){this._motion=!this._motion;this._q('.shell').classList.toggle('motion-paused',!this._motion);button.setAttribute('aria-pressed',String(!this._motion));button.setAttribute('aria-label',this._motion?'Pause decorative animation':'Resume decorative animation');button.textContent=this._motion?'Ⅱ':'▶';this._text('#motion-status',this._motion?'Animation on':'Animation paused');return;}
    if(action==='room-directory'){const room=this._config.rooms.find(r=>r.id===button.dataset.room);if(room)this._openDirectory({ids:this._roomEntities(room),title:`${room.name} · all devices`});return;}
    if(action==='robot-directory'){this._openDirectory({ids:Object.keys(this._hass.states).filter(id=>id.includes('l10s_ultra')),title:'ROTO · all sensors & controls'});return;}
    if(action?.startsWith('directory-')){this._directoryClick(action,button);return;}
    return super._click(e);
  }
  _css(){return super._css()+directoryCss+ishiohoCss+environmentCss;}
}
Object.assign(IshiohoPanel.prototype,directoryMethods,environmentMethods,weatherVisualMethods);
if(!customElements.get('ishioho-panel'))customElements.define('ishioho-panel',IshiohoPanel);
window.customCards.push({type:'ishioho-panel',name:'ishioho',description:'Three living worlds. Every home sensor and control.'});
