import {normalizeWorldLifeSettings, validWorldLifeSettings, WORLD_LIFE_NUMBERS} from './storybook-world-life-settings.mjs';

const GROUPS = [
  {title:'Ocean wildlife', note:'Marine life is decorative. Individual species choices are kept when the ocean group is paused.',
    flags:[['marine','Ocean wildlife'],['dolphins','Dolphins'],['sharks','Sharks'],['whales','Whales'],['seals','Seals'],['walruses','Walruses']]},
  {title:'Coastal life', note:'Choose the ambient activities around your home.',
    flags:[['characters','People and activities'],['vehicles','Ambient vehicles'],['vegetation','Trees and plants'],['water','Water details'],
      ['weatherAccents','Weather accents'],['surprises','Occasional surprises']]},
];
const NUMBER_LABELS = {
  density:['Population density','0 is quiet; 1 has the most visitors.'],
  pace:['Activity pace','1 is the normal pace.'],
  variety:['Variety','0 favors a small cast; 1 uses the widest selection.'],
  seed:['Scene variation','Use the same whole number to repeat the same activity patterns.'],
};
export const WORLD_LIFE_PANEL_STYLE = `
.roomcraft-world-life{box-sizing:border-box;width:min(1000px,94vw);max-width:none;max-height:91dvh;padding:0;border:1px solid #b7c9c4;border-radius:22px;background:#f7f8ed;color:#2e4b47;font:15px system-ui;box-shadow:0 20px 80px #18364066}
.roomcraft-world-life::backdrop{background:#15354699;backdrop-filter:blur(4px)}
.roomcraft-world-life *,.world-life-preview-strip *{box-sizing:border-box}.roomcraft-world-life form{display:flex;flex-direction:column;max-height:90dvh;margin:0}
.world-life-header,.world-life-actions{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:18px 22px;background:linear-gradient(110deg,#e0eee5,#e6eff1)}
.world-life-header h2{font:600 clamp(24px,3vw,32px) Georgia,serif;margin:0}.world-life-header p{font-size:13px;margin:5px 0 0;color:#59756b}
.roomcraft-world-life button,.roomcraft-world-life input,.world-life-preview-strip button{min-height:42px;font:inherit;color:#2e4b47;border:1px solid #b7cbc0;border-radius:10px;padding:8px 12px;background:#fffef5}
.roomcraft-world-life button,.world-life-preview-strip button{cursor:pointer}.roomcraft-world-life button:focus-visible,.roomcraft-world-life input:focus-visible{outline:3px solid #588c8f;outline-offset:2px}
.world-life-body{overflow:auto;min-height:0;padding:20px 22px}.world-life-enabled{display:flex;align-items:center;gap:10px;font-size:17px;font-weight:600}
.roomcraft-world-life input[type=checkbox]{min-height:22px;width:22px;margin:0;accent-color:#427b72}.world-life-intro{font-size:13px;line-height:1.5;color:#61786c;margin:12px 0 20px}
.world-life-groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}.world-life-group{margin:0;min-width:0;padding:16px;border:1px solid #d3ddcf;border-radius:17px;background:linear-gradient(140deg,#fffef6,#edf3e7)}
.world-life-group legend{font:600 20px Georgia,serif;padding:0 7px}.world-life-group p{font-size:12px;line-height:1.5;color:#627a70;margin:0 0 12px}.world-life-checks{display:grid;gap:11px}.world-life-checks label{display:flex;align-items:center;gap:10px;min-height:30px}
.world-life-tuning{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;margin:20px 0 0}.world-life-tuning label{display:grid;gap:7px;font-size:14px;align-content:start}.world-life-tuning small{font-size:12px;color:#627a70}.world-life-tuning input{width:100%;max-width:180px}
.world-life-actions{flex-wrap:wrap;border-top:1px solid #d0ddd1;padding-block:12px}.world-life-actions p{flex:1;margin:0;font-size:13px}.world-life-actions button[type=submit]{background:#386f65;border-color:#386f65;color:white}.world-life-actions button:disabled{opacity:.55;cursor:wait}
.world-life-preview-strip{position:fixed;z-index:10000;left:50%;bottom:18px;transform:translateX(-50%);display:flex;align-items:center;gap:10px;max-width:calc(100vw - 24px);padding:10px 12px;background:#f6faef;color:#2e4b47;border:1px solid #b7cbc0;border-radius:15px;box-shadow:0 8px 30px #18364055;font:14px system-ui}.world-life-preview-strip[hidden]{display:none}
@media(max-width:640px){.roomcraft-world-life{width:calc(100vw - 12px);max-height:96dvh;border-radius:16px}.roomcraft-world-life form{max-height:95dvh}.world-life-header,.world-life-actions{padding:13px}.world-life-body{padding:16px 12px}.world-life-groups{grid-template-columns:1fr}.world-life-preview-strip{width:max-content;flex-wrap:wrap;justify-content:center}.world-life-actions p{flex-basis:100%}.world-life-tuning{gap:14px 10px}}
`;

/** Shared DOM adapter; previews and preferences never operate physical devices. */
export function createStorybookWorldLifePanel(container, {getSettings, onSave, onPreview, onClose,
  saveLabel='Save settings'} = {}) {
  const doc=container.ownerDocument??container, mount=container.nodeType===9?container.body:container;
  const style=doc.createElement('style');style.textContent=WORLD_LIFE_PANEL_STYLE;
  const dialog=doc.createElement('dialog');dialog.className='roomcraft-world-life';dialog.setAttribute('aria-label','Living world');
  dialog.innerHTML=`<form><header class="world-life-header"><div><h2>Living world</h2><p>A little more life along the coast.</p></div><button type="button" data-world-close>Close</button></header>
    <div class="world-life-body"><label class="world-life-enabled"><input type="checkbox" data-world-life="enabled">Living world enabled</label>
    <p class="world-life-intro">These are visual activities, not real animal or occupancy tracking. Weather accents follow actual weather. The vehicle option changes decorative variation, not measured traffic. Pausing Living world keeps real weather and device controls working. Your reduced-motion and graphics preferences still apply.</p>
    <div class="world-life-groups"></div><div class="world-life-tuning"></div></div>
    <footer class="world-life-actions"><p role="status" aria-live="polite"></p><button type="button" data-world-preview-start>Preview wildlife</button><button type="submit"></button></footer></form>`;
  const strip=doc.createElement('div');strip.className='world-life-preview-strip';strip.hidden=true;
  strip.innerHTML='<span>Living world · preview</span><button type="button" data-world-preview-settings>Settings</button><button type="button" data-world-preview-end>End preview</button>';
  mount.append(style,dialog,strip);
  const query=selector=>dialog.querySelector(selector), status=query('[role=status]'), submit=query('[type=submit]');submit.textContent=saveLabel;
  const controls={enabled:query('[data-world-life=enabled]')}, closeReasons=[];
  let draft, preview=false, busy=false, disposed=false, generation=0;
  for(const group of GROUPS){
    const fieldset=doc.createElement('fieldset');fieldset.className='world-life-group';
    const legend=doc.createElement('legend');legend.textContent=group.title;
    const note=doc.createElement('p');note.textContent=group.note;
    const checks=doc.createElement('div');checks.className='world-life-checks';
    for(const [key,label] of group.flags){const row=doc.createElement('label'),input=doc.createElement('input');
      input.type='checkbox';input.dataset.worldLife=key;controls[key]=input;row.append(input,label);checks.append(row);}
    fieldset.append(legend,note,checks);query('.world-life-groups').append(fieldset);
  }
  for(const [key,[min,max]] of Object.entries(WORLD_LIFE_NUMBERS)){
    const row=doc.createElement('label'),input=doc.createElement('input'),note=doc.createElement('small');
    Object.assign(input,{type:'number',min,max,step:key==='seed'?1:'any'});input.dataset.worldLife=key;
    controls[key]=input;note.textContent=NUMBER_LABELS[key][1];row.append(NUMBER_LABELS[key][0],input,note);query('.world-life-tuning').append(row);
  }
  for(const [key,input] of Object.entries(controls))input.addEventListener(input.type==='checkbox'?'change':'input',()=>{
    draft[key]=input.type==='checkbox'?input.checked:input.valueAsNumber;
  });
  function endPreview(){if(preview)onPreview?.(null);preview=false;strip.hidden=true;}
  function closeDialog(reason){if(!dialog.open)return;closeReasons.push({reason,generation});dialog.close();}
  function close(){endPreview();closeDialog('dismiss');}
  query('[data-world-close]').addEventListener('click',close);
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
  dialog.addEventListener('close',()=>{const closed=closeReasons.shift();
    if(closed?.generation!==generation||closed?.reason==='preview'||dialog.open)return;
    endPreview();onClose?.();
  });
  query('[data-world-preview-start]').addEventListener('click',()=>{
    if(!validWorldLifeSettings(draft)){status.textContent='Check the number limits before previewing.';return;}
    preview=true;strip.hidden=false;closeDialog('preview');
    // The rendering pause is released synchronously before scheduling a frame.
    onPreview?.({settings:normalizeWorldLifeSettings(draft)});
  });
  strip.querySelector('[data-world-preview-end]').addEventListener('click',endPreview);
  strip.querySelector('[data-world-preview-settings]').addEventListener('click',()=>open(true));
  query('form').addEventListener('submit',async event=>{
    event.preventDefault();if(busy)return;
    if(!validWorldLifeSettings(draft)){status.textContent='Check the number limits. Scene variation must be a whole number.';return;}
    busy=true;status.textContent='Saving…';
    for(const input of Object.values(controls))input.disabled=true;
    submit.disabled=true;query('[data-world-preview-start]').disabled=true;
    try{
      const result=await onSave?.(normalizeWorldLifeSettings(draft));if(disposed)return;
      if(result?.status&&result.status!=='saved')status.textContent=result.status==='changed'
        ?'Living world settings changed elsewhere. Close and reopen to load the latest settings.'
        :result.status==='closed'?'Saving is unavailable. Reopen with administrator access.'
        :'The save could not be verified. Reopen settings before trying again.';
      else{endPreview();status.textContent=result?.notice??'Living world settings saved.';}
    }catch{if(!disposed)status.textContent='Unable to save. Your draft is still here; check the connection and try again.';}
    finally{busy=false;submit.disabled=false;query('[data-world-preview-start]').disabled=false;for(const input of Object.values(controls))input.disabled=false;}
  });
  function open(preserveDraft=false){
    if(disposed||dialog.open)return;generation++;
    if(!preserveDraft||!draft)draft=normalizeWorldLifeSettings(getSettings?.());
    for(const [key,input] of Object.entries(controls)){
      if(input.type==='checkbox')input.checked=draft[key];else input.value=draft[key];
    }
    status.textContent='Changes apply when you save. Preview stays in this tab.';dialog.showModal();
  }
  return{open,close,dialog,get isOpen(){return dialog.open;},destroy(){disposed=true;close();dialog.remove();strip.remove();style.remove();}};
}
