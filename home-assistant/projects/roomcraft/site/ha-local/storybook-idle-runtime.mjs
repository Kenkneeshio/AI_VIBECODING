import {createIdleCameraDirector, normalizeIdleCameraSettings} from './storybook-idle-camera.mjs';
import {resolveDefaultCameraView} from './storybook-camera.mjs';

export const IDLE_CAMERA_SETTINGS_KEY='roomcraft.idle-camera.v1';
const fields=[
  ['idleAfterMs','Start after no touch',15,300,30],
  ['travelMs','Slow pan duration',12,90,24],
  ['lingerMs','Pause at a discovery',5,60,16],
  ['homeMs','Stay at home between visits',30,180,45],
];
export function readIdlePreferences(value) {
  return {...normalizeIdleCameraSettings(value),enabled:value?.enabled!==false};
}

/** Browser interaction and persistence boundary. The director receives explicit
 * time; this adapter never sends services or writes the shared authored layout. */
export function bindIdleCamera(card, host=card.ownerDocument.defaultView) {
  const doc=card.ownerDocument, root=card.shadowRoot;
  let settings;
  try {settings=readIdlePreferences(JSON.parse(host.localStorage.getItem(IDLE_CAMERA_SETTINGS_KEY)));}
  catch {settings=readIdlePreferences();}
  const now=()=>host.performance.now();
  let director, state={active:false,phase:'waiting'}, connected=false, timer, interests=[], nextInterestAt=0;
  let suppressClickUntil=0, manual=false, lastAppliedFraming;
  const held=new Set(), wakePointers=new Set();
  function freshDirector() {
    // A new session has a different, explicit seed; frame sampling stays repeatable.
    director=createIdleCameraDirector({...settings,seed:(settings.seed+Math.floor(Date.now()/30000))%2147483647});
    state=director.touch(now());
  }
  freshDirector();
  const dialog=doc.createElement('dialog');
  dialog.className='idle-camera-dialog display-settings-dialog';dialog.setAttribute('aria-label','Idle camera settings');
  dialog.innerHTML=`<form><header><h2>Idle camera</h2><button type="button" data-idle-close>Close</button></header>
    <p class="display-settings-note">The home stays primary. Slow discoveries return home between visits. Touch once to return safely, then touch a control to use it. Saved in this browser.</p>
    <label class="display-toggle-row"><input type="checkbox" data-idle-enabled>Automatic idle view</label>
    ${fields.map(([key,label,min,max,value])=>`<label class="display-setting-row">${label}<span><input data-idle-field="${key}" type="number" min="${min}" max="${max}" step="1" value="${value}" style="width:72px;min-height:40px;font:inherit"> s</span></label>`).join('')}
    <p class="display-settings-note">Reduced motion keeps the home still. Open menus, previews and the demo pause automatic idle.</p>
    <p data-idle-status role="status"></p><button type="submit">Save settings</button></form>`;
  root.append(dialog);
  const startButton=root.querySelector('.idle-start'), settingsButton=root.querySelector('.idle-settings');
  const block=()=>!connected||!card.isConnected||!card.scene||!card.frame||doc.hidden
    ||held.size>0||Boolean(card.startupViewRequest)||Boolean(card.demoRun||card.holidayPreview||card.worldLifePreview)
    ||!card.mainMenu.hidden||Boolean(root.querySelector('dialog[open]'))
    ||Boolean(card.devicesDrawer?.isOpen)
    ||card.stage.getBoundingClientRect().width<1;
  function restore() {
    const view=resolveDefaultCameraView(card.savedStartupView);
    card.cameraView=view;card.pendingCameraView=undefined;
    card.scene?.setView(view);card.viewSelect.value='default';
    card.freeViewGestures?.cancel();card.syncFreeViewMode();
    card.world.removeAttribute('data-idle-camera');
    card.anchorDirty=true;lastAppliedFraming=undefined;
    card.schedule();
  }
  function touch() {
    const active=state.active;
    manual=false;state=director.touch(now());
    if(active){restore();freshDirector();}
    return active;
  }
  function update(at=now()) {
    // A queued RAF timestamp can precede an input handled in that same frame.
    // Keep adapter samples after touch/start so a busy WebView cannot undo them.
    at=Math.max(Number.isFinite(at)?at:0,now());
    const blocked=block();
    if(!blocked&&at>=nextInterestAt) {
      interests=card.scene.getIdleCameraInterests?.()??[];nextInterestAt=at+1000;
    }
    const previous=state;
    state=director.sample(at,{blocked,reducedMotion:card.motionReduced,enabled:settings.enabled||manual,interests});
    if(state.active) {
      const view=resolveDefaultCameraView(card.savedStartupView);
      if(!previous.active) {
        card.cameraView=view;card.pendingCameraView=undefined;card.viewSelect.value='default';
        card.freeViewGestures?.cancel();card.syncFreeViewMode();
      }
      lastAppliedFraming=state.focus?{focus:{...state.focus},demoZoom:Math.min(4.5,view.zoom*state.zoomFactor)}:undefined;
      card.scene.setView(view,lastAppliedFraming);
      card.world.setAttribute('data-idle-camera',state.phase);
      if(previous.phase!==state.phase||!previous.active)card.anchorDirty=true;
    } else if(previous.active)restore();
    return state;
  }
  function reset() {touch();interests=[];nextInterestAt=0;}
  function start() {
    card.setMainMenu(false,true);
    if(card.motionReduced) {card.viewStatus.textContent='Idle camera is paused by reduced motion.';touch();return false;}
    if(block())return false;
    freshDirector();manual=true;director.start(now());nextInterestAt=0;
    update();card.schedule();return true;
  }
  function consume(event) {if(event.cancelable)event.preventDefault();event.stopImmediatePropagation();}
  function pointerDown(event) {
    const wasIdle=state.active, inside=event.composedPath().includes(card);
    if(!wakePointers.size)suppressClickUntil=0;
    touch();held.add(event.pointerId);
    if((wasIdle||wakePointers.size>0)&&inside) {
      wakePointers.add(event.pointerId);suppressClickUntil=Infinity;consume(event);
    }
  }
  function pointerEnd(event) {
    held.delete(event.pointerId);director.touch(now());
    if(wakePointers.delete(event.pointerId)) {
      suppressClickUntil=wakePointers.size?Infinity:now()+1200;consume(event);
    }
  }
  function click(event) {
    if(now()<suppressClickUntil&&event.composedPath().includes(card)) {
      if(!wakePointers.size)suppressClickUntil=0;consume(event);return;
    }
    if(state.active) {touch();if(event.composedPath().includes(card))consume(event);return;}
    // Keyboard/assistive clicks also count without cancelling the newly
    // activated Start idle button at the end of its own click.
    if(!state.active)director.touch(now());
  }
  function key(event) {
    if(['Shift','Control','Alt','Meta'].includes(event.key))return;
    const wasIdle=touch();if(wasIdle&&event.composedPath().includes(card))consume(event);
  }
  function wheel(event) {const wasIdle=touch();if(wasIdle&&event.composedPath().includes(card))consume(event);}
  function visibility() {held.clear();wakePointers.clear();suppressClickUntil=0;touch();}
  function heartbeat() {
    if(block()||card.motionReduced)update();
    else card.schedule();
  }
  function openSettings() {
    touch();card.setMainMenu(false,true);
    dialog.querySelector('[data-idle-enabled]').checked=settings.enabled;
    for(const [key] of fields)dialog.querySelector(`[data-idle-field="${key}"]`).value=settings[key]/1000;
    dialog.querySelector('[data-idle-status]').textContent='';dialog.showModal();
  }
  startButton.addEventListener('click',start);settingsButton.addEventListener('click',openSettings);
  dialog.querySelector('[data-idle-close]').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>{touch();card.schedule();});
  dialog.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();
    const requested={...settings,enabled:dialog.querySelector('[data-idle-enabled]').checked};
    for(const [key] of fields)requested[key]=dialog.querySelector(`[data-idle-field="${key}"]`).valueAsNumber*1000;
    settings=readIdlePreferences(requested);
    let saved=true;try{host.localStorage.setItem(IDLE_CAMERA_SETTINGS_KEY,JSON.stringify(settings));}catch{saved=false;}
    const wasActive=state.active;freshDirector();if(wasActive)restore();
    dialog.querySelector('[data-idle-status]').textContent=saved?'Idle camera settings saved.':'Applied for this visit; browser storage is unavailable.';
  });
  return {
    update,touch,reset,start,dialog,get settings(){return {...settings};},
    getState:()=>({...state,settings:{...settings},appliedView:card.scene?.getView(),lastAppliedFraming}),
    connect() {
      if(connected)return;connected=true;freshDirector();
      host.addEventListener('pointerdown',pointerDown,{capture:true,passive:false});
      host.addEventListener('pointerup',pointerEnd,{capture:true,passive:false});
      host.addEventListener('pointercancel',pointerEnd,{capture:true,passive:false});
      host.addEventListener('click',click,{capture:true,passive:false});
      host.addEventListener('keydown',key,true);host.addEventListener('wheel',wheel,{capture:true,passive:false});
      doc.addEventListener('visibilitychange',visibility);host.addEventListener('blur',visibility);
      timer=host.setInterval(heartbeat,500);
    },
    disconnect() {
      if(!connected)return;touch();connected=false;held.clear();wakePointers.clear();host.clearInterval(timer);timer=undefined;
      host.removeEventListener('pointerdown',pointerDown,true);host.removeEventListener('pointerup',pointerEnd,true);
      host.removeEventListener('pointercancel',pointerEnd,true);host.removeEventListener('click',click,true);
      host.removeEventListener('keydown',key,true);host.removeEventListener('wheel',wheel,true);
      doc.removeEventListener('visibilitychange',visibility);host.removeEventListener('blur',visibility);dialog.close();
    },
  };
}

