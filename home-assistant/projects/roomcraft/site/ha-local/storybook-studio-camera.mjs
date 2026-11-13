import {populateCameraOptions, normalizeCameraView, resolveDefaultCameraView, studioCameraPreferences} from './storybook-camera.mjs';

/** Device presentation preferences are deliberately outside layout undo/save. */
export function mountStudioCamera(document, host, {getView, preview, finish}) {
  const trigger=document.getElementById('cameraViewsButton');
  if(!trigger)return {get isPreview(){return false;},end(){},dispose(){}};
  const preferences=studioCameraPreferences(host);
  let saved=null,busy=false,active=false,generation=0;
  const dialog=document.createElement('dialog');
  dialog.id='studioCameraDialog';dialog.className='app-dialog scene-settings-dialog studio-camera-dialog';
  dialog.setAttribute('aria-labelledby','studioCameraTitle');
  dialog.innerHTML=`<button id="studioCloseCamera" class="dialog-close" type="button" aria-label="Close views">×</button>
    <h2 id="studioCameraTitle">Views & device default</h2>
    <p>Explore the same scene as Home. Return to overhead editing to modify the layout. Defaults are saved only in this frontend browser.</p>
    <label for="studioCameraView">Camera view</label><select id="studioCameraView"></select>
    <div class="studio-camera-actions"><button id="studioPreviewView" class="primary-button" type="button">Preview view</button>
    <button id="studioSaveDefault" class="secondary-button" type="button">Save as this device’s default</button>
    <button id="studioClearDefault" class="secondary-button" type="button">Use Top down on this device</button></div>
    <p id="studioCameraStatus" role="status" aria-live="polite"></p>`;
  document.body.append(dialog);
  const viewport=document.getElementById('viewport'), select=dialog.querySelector('#studioCameraView');
  const banner=document.createElement('div');banner.className='studio-camera-banner';banner.hidden=true;
  banner.innerHTML='<span>View preview · canvas editing paused</span><button id="studioOpenViews" type="button">Views</button><button id="studioReturnEditing" type="button">Return to overhead editing</button>';
  viewport.append(banner);
  const status=dialog.querySelector('#studioCameraStatus');
  const buttons=[...dialog.querySelectorAll('.studio-camera-actions button')];
  populateCameraOptions(select);
  const setBusy=value=>{busy=value;select.disabled=value;buttons.forEach(b=>b.disabled=value);};
  async function open(){
    const request=++generation;dialog.showModal();select.value=active?getView().preset:'default';
    status.textContent='Reading this device’s default…';setBusy(true);
    try {saved=await preferences.read();if(request===generation)status.textContent='Applies to Home on this frontend only.';}
    catch {if(request===generation)status.textContent='Could not read this device’s default. Check browser storage.';}
    finally {if(request===generation)setBusy(false);}
  }
  function apply(){
    const next=select.value==='default'?resolveDefaultCameraView(saved):normalizeCameraView(select.value);
    active=true;preview(next);banner.hidden=false;
    return getView();
  }
  function end(){if(!active)return;active=false;banner.hidden=true;finish();}
  function key(event){
    if(!dialog.open&&(!active||!document.getElementById('exportMenu').hidden))return;
    if(['INPUT','TEXTAREA','SELECT'].includes(event.target.tagName))return;
    const name=event.key.toLowerCase();
    if(name==='escape'){event.preventDefault();event.stopImmediatePropagation();if(dialog.open)dialog.close();else end();return;}
    if(['delete','backspace','v','h','r','w','f','t','e'].includes(name)||
      (event.ctrlKey||event.metaKey)&&['z','y'].includes(name)||name===' '&&event.target.tagName!=='BUTTON'){
      event.preventDefault();event.stopImmediatePropagation();
    }
  }
  async function save(clear){
    if(busy)return;setBusy(true);
    try {
      const next=clear?null:apply();
      await preferences.write(next);saved=next;
      if(clear&&active&&select.value==='default')preview(resolveDefaultCameraView(null));
      status.textContent=clear?'This frontend now uses Top down.':'Default saved for this frontend. Other devices are unchanged.';
    }catch {status.textContent='Could not save on this frontend. Check browser storage.';}
    finally {setBusy(false);}
  }
  trigger.addEventListener('click',open);
  dialog.querySelector('#studioCloseCamera').addEventListener('click',()=>dialog.close());
  dialog.querySelector('#studioPreviewView').addEventListener('click',()=>{if(!busy){apply();dialog.close();}});
  dialog.querySelector('#studioSaveDefault').addEventListener('click',()=>save(false));
  dialog.querySelector('#studioClearDefault').addEventListener('click',()=>save(true));
  banner.querySelector('#studioOpenViews').addEventListener('click',open);
  banner.querySelector('#studioReturnEditing').addEventListener('click',end);
  host.addEventListener('keydown',key,true);
  return {get isPreview(){return active;},end,
    dispose(){generation++;end();dialog.close();dialog.remove();banner.remove();trigger.removeEventListener('click',open);host.removeEventListener('keydown',key,true);}};
}
