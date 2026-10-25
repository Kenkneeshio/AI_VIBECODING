/* Entity directory mixin. Metadata is local; live state always comes from hass.states.
 * Host contract: _dialog(title,html,{kind,wide}), _entityRows(ids), _q(), _button(),
 * _info(), _modal, _hass, _catalog. Delegate input/change and directory-* clicks.
 * Call _directoryUpdate() after ordinary live-state rendering. No service calls here.
 */
export const DIRECTORY_PAGE_SIZE = 60;
const NONE = '__none__';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fold = value => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('en');
const order = new Intl.Collator('en',{numeric:true,sensitivity:'base'});
const domainNames = {alarm_control_panel:'Alarm panels',automation:'Automations',binary_sensor:'Binary sensors',button:'Buttons',calendar:'Calendars',camera:'Cameras',climate:'Climate',conversation:'Conversation',cover:'Blinds & doors',device_tracker:'Device trackers',event:'Events',fan:'Fans',humidifier:'Humidifiers',image:'Images',input_boolean:'Input toggles',input_button:'Input buttons',input_datetime:'Date & time inputs',input_number:'Number inputs',input_select:'Selection inputs',input_text:'Text inputs',light:'Lights',lock:'Locks',media_player:'Media players',notify:'Notifications',number:'Numbers',person:'People',remote:'Remotes',scene:'Scenes',script:'Scripts',select:'Selections',sensor:'Sensors',siren:'Sirens',stt:'Speech recognition',sun:'Sun',switch:'Switches',time:'Times',timer:'Timers',todo:'To-do lists',tts:'Speech',update:'Updates',vacuum:'Vacuums',weather:'Weather',zone:'Zones'};
const domainLabel = domain => domainNames[domain] || domain.replaceAll('_',' ').replace(/^./,c=>c.toUpperCase());

export function directoryRecords(states = {}, catalog = {}) {
  const metadata = new Map((Array.isArray(catalog) ? catalog : catalog?.entities || []).map(e=>[e.entity_id,e]));
  const areas = new Map((catalog?.areas || []).map(a=>[a.area_id,a.name]));
  return Object.entries(states || {}).map(([id,state])=>{
    const meta=metadata.get(id)||{}, domain=id.split('.')[0];
    const name=state?.attributes?.friendly_name || meta.name || id;
    const area=meta.area_id || '', areaName=meta.area_name || areas.get(area) || (area ? area.replaceAll('_',' ') : 'No area assigned');
    const device=meta.device_name || '';
    const available=typeof state?.state==='string' && state.state.trim()!=='' && !['unknown','unavailable'].includes(state.state);
    return {id,name,domain,area,areaName,device,available,search:fold([name,id,domainLabel(domain),areaName,device].join(' '))};
  }).sort((a,b)=>order.compare(a.name,b.name)||order.compare(a.id,b.id));
}

export function directoryPage(records, options = {}) {
  const terms=fold(options.query).trim().split(/\s+/).filter(Boolean);
  const allow=Array.isArray(options.ids)?new Set(options.ids):null;
  const scoped=allow?records.filter(e=>allow.has(e.id)):records;
  const filtered=scoped.filter(e=>
    (!options.domain || e.domain===options.domain) &&
    (!options.area || (options.area===NONE ? !e.area : e.area===options.area)) &&
    (!options.availability || options.availability==='all' || (options.availability==='available' ? e.available : !e.available)) &&
    terms.every(term=>e.search.includes(term)));
  const pages=Math.max(1,Math.ceil(filtered.length/DIRECTORY_PAGE_SIZE));
  const requested=Number(options.page);
  const page=Math.min(pages-1,Math.max(0,Number.isFinite(requested)?Math.floor(requested):0));
  return {total:records.length,scopeTotal:scoped.length,isScoped:allow!==null,matched:filtered.length,pages,page,from:filtered.length?page*DIRECTORY_PAGE_SIZE+1:0,to:Math.min((page+1)*DIRECTORY_PAGE_SIZE,filtered.length),items:filtered.slice(page*DIRECTORY_PAGE_SIZE,(page+1)*DIRECTORY_PAGE_SIZE)};
}

export const directoryMethods = {
  _openDirectory(options = {}) {
    clearTimeout(this._directoryTimer);this._directoryTimer=null;
    const ids=Array.isArray(options.ids)?[...new Set(options.ids.filter(id=>typeof id==='string'))]:null;
    const title=options.title||(ids?'Selected devices & entities':'All devices & entities');
    this._directory={query:String(options.query||''),domain:String(options.domain||''),area:String(options.area||options.area_id||''),availability:options.availability||'all',page:0,ids};
    this._directoryRowKey=null;this._directoryOptionKey=null;
    this._dialog(title,`<section id="directory-root" class="entity-directory" aria-label="Home Assistant entity directory">
      <p class="directory-intro">${ids?`Showing the current entities in <strong>${esc(title)}</strong>. Choose “Show all devices” to browse your entire home.`:'Every current Home Assistant entity, including sensors, automations, updates, and controls.'} Open a device name for its full controls and details.</p>
      <div class="directory-search"><label for="directory-query">Search your home</label><input id="directory-query" type="search" data-directory-field="query" placeholder="Name, room, device, or entity ID" autocomplete="off" spellcheck="false"></div>
      <div class="directory-filters"><label>Room<select data-directory-field="area" aria-label="Filter by room"></select></label><label>Type<select data-directory-field="domain" aria-label="Filter by entity type"></select></label><label>Status<select data-directory-field="availability" aria-label="Filter by availability"><option value="all">All states</option><option value="available">Available</option><option value="unavailable">Unknown or unavailable</option></select></label></div>
      <div class="directory-summary"><span data-directory-summary role="status" aria-live="polite"></span><div class="directory-actions">${this._button('Reset filters','directory-reset','','directory-reset')}${ids?this._button('Show all devices','directory-all','','directory-reset'):''}</div></div>
      <div data-directory-results class="directory-results"></div>
      <nav class="directory-pagination" aria-label="Entity pages">${this._button('← Previous','directory-page','data-step="-1"','directory-page')}<span data-directory-page></span>${this._button('Next →','directory-page','data-step="1"','directory-page')}</nav>
      <p class="directory-footnote">Values update from Home Assistant. Unknown and unavailable entities remain inspectable. A room filter uses your assigned areas; unassigned devices remain under “No area assigned.”</p>
    </section>`,{kind:'directory',wide:true});
    this._directorySetControls();this._renderDirectory();
  },
  _directorySetControls() {
    const root=this._q('#directory-root');if(!root||!this._directory)return;
    for(const el of root.querySelectorAll('[data-directory-field]'))el.value=this._directory[el.dataset.directoryField]||'';
  },
  _renderDirectory() {
    const root=this._q('#directory-root');if(this._modal!=='directory'||!root||!this._directory)return;
    const excluded=new Set(this._config?.excluded_entities||[]);
    const records=directoryRecords(this._hass?.states,this._catalog).filter(record=>!excluded.has(record.id)), state=this._directory;
    const domains=[...new Set(records.map(e=>e.domain))];if(state.domain&&!domains.includes(state.domain))domains.push(state.domain);domains.sort((a,b)=>order.compare(domainLabel(a),domainLabel(b)));
    const areaMap=new Map((this._catalog?.areas||[]).map(a=>[a.area_id,a.name]));for(const e of records)if(e.area)areaMap.set(e.area,e.areaName);
    if(state.area&&state.area!==NONE&&!areaMap.has(state.area))areaMap.set(state.area,state.area.replaceAll('_',' '));
    const areas=[...areaMap].sort((a,b)=>order.compare(a[1],b[1])||order.compare(a[0],b[0]));
    const optionKey=JSON.stringify([domains,areas]);
    if(optionKey!==this._directoryOptionKey){
      this._directoryOptionKey=optionKey;
      root.querySelector('[data-directory-field="domain"]').innerHTML='<option value="">All types</option>'+domains.map(domain=>`<option value="${esc(domain)}">${esc(domainLabel(domain))}</option>`).join('');
      root.querySelector('[data-directory-field="area"]').innerHTML='<option value="">All rooms</option><option value="__none__">No area assigned</option>'+areas.map(([id,name])=>`<option value="${esc(id)}">${esc(name)}</option>`).join('');
      this._directorySetControls();
    }
    const page=directoryPage(records,state);state.page=page.page;
    const summary=root.querySelector('[data-directory-summary]');
    const text=`${page.from}–${page.to} of ${page.matched.toLocaleString('en-US')} matching${page.isScoped?` · ${page.scopeTotal.toLocaleString('en-US')} in this group`:''} · ${page.total.toLocaleString('en-US')} total entities`;
    if(summary.textContent!==text)summary.textContent=text;
    root.querySelector('[data-directory-page]').textContent=`Page ${page.page+1} of ${page.pages}`;
    for(const button of root.querySelectorAll('[data-action="directory-page"]'))button.disabled=Number(button.dataset.step)<0?page.page===0:page.page===page.pages-1;
    const rowKey=JSON.stringify(page.items.map(e=>[e.id,e.name,e.area,e.areaName]));
    if(rowKey!==this._directoryRowKey){
      const target=this.shadowRoot?.activeElement, focusId=target?.dataset?.entity||target?.dataset?.toggle, focusAction=target?.dataset?.action;
      const results=root.querySelector('[data-directory-results]');
      const focusWasInResults=target&&results.contains(target);
      this._directoryRowKey=rowKey;
      results.innerHTML=page.items.length?this._entityRows(page.items.map(e=>e.id)):'<div class="directory-empty"><strong>No matching entities</strong><p>Try another name, room, or type, or reset the filters.</p></div>';
      if(focusWasInResults){const replacement=[...results.querySelectorAll('button')].find(el=>(el.dataset.entity||el.dataset.toggle)===focusId&&el.dataset.action===focusAction);(replacement||root.querySelector('#directory-query'))?.focus();}
    }
  },
  _directoryClick(action,button) {
    if(!['directory-page','directory-reset','directory-all'].includes(action))return false;
    if(!this._directory||this._modal!=='directory')return true;
    if(action==='directory-all'){const returnFocus=this._returnFocus;this._openDirectory();if(returnFocus)this._returnFocus=returnFocus;return true;}
    if(action==='directory-reset'){Object.assign(this._directory,{query:'',domain:'',area:'',availability:'all',page:0});this._directorySetControls();}
    else {const step=Number(button?.dataset?.step);if(step===1||step===-1)this._directory.page+=step;}
    this._renderDirectory();return true;
  },
  _directoryInput(event) {
    const el=event.composedPath?.()[0]||event.target, field=el?.dataset?.directoryField;
    if(!['query','domain','area','availability'].includes(field)||this._modal!=='directory'||!this._directory)return false;
    if(this._directory[field]===el.value)return true;
    this._directory[field]=el.value;this._directory.page=0;this._renderDirectory();return true;
  },
  _directoryUpdate() {
    if(this._modal!=='directory'||this._directoryTimer)return;
    this._directoryTimer=setTimeout(()=>{this._directoryTimer=null;if(this._modal==='directory'&&this._q('#directory-root')?.isConnected)this._renderDirectory();},120);
  }
};

export const directoryCss = `
.entity-directory{min-width:0}.directory-intro,.directory-footnote{font-size:12px;line-height:1.6;color:var(--muted,#68766a);margin:0 0 16px}.directory-footnote{margin:17px 0 0;font-size:11px}.directory-search>label,.directory-filters label{display:flex;flex-direction:column;gap:6px;font-size:11px;font-weight:650}.directory-search input,.directory-filters select{box-sizing:border-box;width:100%;min-height:42px;border:1px solid var(--line,#bfccb8);border-radius:6px;background:var(--paper,#f7f4e8);color:var(--ink,#283d38);padding:10px;font:inherit;font-size:13px}.directory-search input:focus-visible,.directory-filters select:focus-visible{outline:3px solid var(--accent,#ad6d46);outline-offset:2px}.directory-filters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:14px 0}.directory-summary{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:11px;line-height:1.5;padding:10px 0;border-bottom:1px solid var(--line,#bfccb8)}.directory-actions{display:flex;gap:12px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.directory-reset{font-size:11px;text-decoration:underline;white-space:nowrap;min-height:36px}.directory-results{min-width:0}.directory-pagination{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:17px;font-size:11px}.directory-page{border:1px solid var(--line,#bfccb8);border-radius:5px;min-height:40px;padding:9px 14px;background:var(--paper,#f7f4e8)}.directory-page:disabled{opacity:.4;cursor:not-allowed}.directory-empty{padding:35px 10px;text-align:center;font-size:13px}.directory-empty p{margin-top:9px;font-size:12px;color:var(--muted,#68766a)}@media(max-width:560px){.directory-filters{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.directory-filters label:last-child{grid-column:1/-1}.directory-summary{align-items:flex-start}.directory-pagination{gap:7px}.directory-page{padding:9px 11px}.directory-search input{font-size:16px}}
`;
