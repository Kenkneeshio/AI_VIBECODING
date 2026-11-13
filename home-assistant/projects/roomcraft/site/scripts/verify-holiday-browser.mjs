import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {build} from 'esbuild';
import {HOLIDAY_CATALOG} from '../ha-local/storybook-holidays.mjs';
import {normalizeHolidaySettings} from '../ha-local/storybook-holiday-settings.mjs';

// Production live card with a public-safe in-memory HA adapter; never connects to a real server.
const source=process.cwd();
const qa=await mkdtemp(join(tmpdir(),'roomcraft-holiday-live-qa-'));
const code=process.env.ROOMCRAFT_HOLIDAY_QA_DIST ? await readFile(join(source,'dist/ha-local/roomcraft-storybook.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'esm',write:false,
    entryPoints:['ha-local/roomcraft-storybook.mjs'],minify:true})).outputFiles[0].contents;
const project={version:2,editableReferenceVersion:10,hotspots:[],walls:[],rooms:[{
  id:'living-floor',name:'Living room',surface:'oak',label:{x:700,y:500},
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}],
}],items:[{id:'lamp',type:'lamp',name:'Desk lamp',x:700,y:430,w:30,h:30,rotation:0}],
sceneSettings:{holidays:{modes:{'mid-autumn':'auto',chuseok:'auto'}}}};
const config={title:'Fixture home',views:[{path:'home',title:'Home'}],fixtureUnrelated:{preserve:true},
  roomcraft_layout:project,roomcraft_plan:{type:'picture-elements',elements:[],image:'/api/image/serve/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/original'}};
const html=`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#e7eadb"><script>
window.ops=[];window.fixtureConfig=${JSON.stringify(config)};window.originalConfig=structuredClone(fixtureConfig);
for(const tag of ['roomcraft-object-control','roomcraft-camera-thumbnail'])customElements.define(tag,class extends HTMLElement{setConfig(){}});
window.fixtureSession={connected:true,user:{id:'fixture-admin',is_admin:true},states:{},config:{time_zone:'America/Los_Angeles'},
 callWS:async request=>{window.ops.push(structuredClone(request));
   if(request.type==='lovelace/config')return structuredClone(window.fixtureConfig);
   if(request.type==='lovelace/config/save'){window.fixtureConfig=structuredClone(request.config);return {};}
   throw Error('Unexpected API request: '+request.type);},
 callService:()=>{window.ops.push({type:'FORBIDDEN_SERVICE'});throw Error('Holiday art must never actuate devices');}};
</script><script type="module">
import '/local/roomcraft/roomcraft-storybook.js';
window.card=document.createElement('roomcraft-storybook-card');card.setConfig({dashboard:'roomcraft-home'});
card.hass=window.fixtureSession;document.body.append(card);
</script></body></html>`;
const server=createServer(async(request,response)=>{
  try{
    const name=new URL(request.url,'http://localhost').pathname;
    if(name==='/'){response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    const path=name.replace(/^\/(?:local\/roomcraft\/)?/,'');if(path.includes('..'))throw Error('Invalid fixture path');
    const type={'.js':'text/javascript','.mp3':'audio/mpeg','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'}[extname(path)]??'application/octet-stream';
    const data=path==='roomcraft-storybook.js'?code:await readFile(resolve(source,'public',path));
    response.writeHead(200,{'Content-Type':type});response.end(data);
  }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const {port}=server.address(),profile=join(qa,'chrome-profile');
const chrome=spawn(process.env.ROOMCRAFT_QA_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader',
  '--no-first-run','--no-default-browser-check','--hide-scrollbars','--disable-background-networking',
  '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank',
],{windowsHide:true,stdio:'ignore'});
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function until(callback,label,timeout=60000){
  const end=Date.now()+timeout;let last;
  while(Date.now()<end){try{const result=await callback();if(result)return result;}catch(error){last=error;}await delay(125);}
  throw Error(label+' timed out'+(last?' ('+last.message+')':''));
}
let ws;
try{
  const active=await until(()=>readFile(join(profile,'DevToolsActivePort'),'utf8'),'Chrome port');
  const chromePort=Number(active.split(/\r?\n/)[0]);
  const [page]=(await (await fetch('http://127.0.0.1:'+chromePort+'/json')).json()).filter(target=>target.type==='page');
  ws=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  const inflight=new Map(),errors=[];let seq=0;
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;inflight.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  ws.addEventListener('message',event=>{
    const message=JSON.parse(event.data);
    if(message.id){const pending=inflight.get(message.id);inflight.delete(message.id);
      if(message.error)pending?.reject(Error(message.error.message));else pending?.resolve(message.result);}
    if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.exception?.description);
    if(message.method==='Runtime.consoleAPICalled'&&message.params.type==='error'&&message.params.args.some(arg=>String(arg.value??arg.description).includes('THREE.')))
      errors.push(message.params.args.map(arg=>arg.value??arg.description));
    if(message.method==='Fetch.requestPaused'){
      const {requestId,request:{url}}=message.params;
      if(url.startsWith('http://127.0.0.1:'+port+'/')||url.startsWith('data:image/png'))void send('Fetch.continueRequest',{requestId});
      else void send('Fetch.failRequest',{requestId,errorReason:'BlockedByClient'});
    }
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(result.exceptionDetails)throw Error(result.exceptionDetails.exception?.description??result.exceptionDetails.text);
    return result.result?.value;
  };
  const photo=async name=>{const result=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    await writeFile(join(qa,name+'.png'),Buffer.from(result.data,'base64'));};
  await send('Runtime.enable');await send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://127.0.0.1:'+port+'/'});
  await until(()=>evaluate('Boolean(window.card?.scene&&card.frame&&!card.demoButton.disabled)'),'live card');
  await evaluate(`(()=>{
    // Pin the calendar input only. Keep the production scheduler and renderer:
    // a manual draw would hide a modal-close bug that leaves the tablet at 0 FPS.
    card.frame.environment.holidayDate='2026-09-25';card.frame.environment.night=true;
    window.openHolidays=()=>{card.menuButton.click();card.shadowRoot.querySelector('.holiday-settings').click();};
    window.originalView=card.scene.getView();
  })()`);
  await until(()=>evaluate("card.scene.getHolidayState().active.includes('mid-autumn')"),'automatic calendar render');
  const initial=await evaluate('card.scene.getHolidayState()');assert.deepEqual(initial.active,['mid-autumn','chuseok']);
  await evaluate('openHolidays()');
  assert.equal(await evaluate('card.holidayPanel.isOpen'),true);
  assert.equal(await evaluate("card.shadowRoot.querySelectorAll('.holiday-card').length"),31);
  await photo('holidays-menu-desktop');
  const representatives=[...new Map(HOLIDAY_CATALOG.map(entry=>[entry.theme,entry])).values()];
  const previewResults=[];
  for(const {id,theme} of representatives){
    if(!await evaluate('card.holidayPanel.isOpen'))await evaluate('openHolidays()');
    // Let the open modal pause the real animation loop before requesting a preview.
    await until(()=>evaluate('card.animationFrame===undefined'),'modal pauses animation');
    const before=await evaluate('card.lastSceneRenderAt');
    await evaluate(`card.shadowRoot.querySelector('[data-holiday-preview="${id}"]').click()`);
    await until(()=>evaluate(`card.lastSceneRenderAt>${before}&&card.scene.getHolidayState().selection==='${id}'`),'automatic '+id+' preview render');
    const firstFrame=await evaluate('card.lastSceneRenderAt');
    await until(()=>evaluate(`card.lastSceneRenderAt>${firstFrame}`),'continuing '+id+' animation');
    const preview=await evaluate(`(()=>{
      const state=card.scene.getHolidayState();
      return {...state,preview:card.holidayPreview?.id,dialogOpen:card.holidayPanel.isOpen,
        stripVisible:!card.shadowRoot.querySelector('.holiday-preview-strip').hidden,renderedAt:card.lastSceneRenderAt};
    })()`);
    assert.equal(preview.selection,id);assert.equal(preview.preview,id);assert.equal(preview.dialogOpen,false);assert.equal(preview.stripVisible,true);
    previewResults.push({theme,...preview});
    if(['lanterns','harvest','lights','gifts','boats'].includes(theme))await photo('holiday-'+id);
    const restored=await evaluate(`(()=>{card.shadowRoot.querySelector('[data-holiday-preview-stop]').click();
      return {view:card.scene.getView(),original:originalView,preview:card.holidayPreview,stripHidden:card.shadowRoot.querySelector('.holiday-preview-strip').hidden};})()`);
    assert.deepEqual(restored.view,restored.original);assert.equal(restored.preview,null);assert.equal(restored.stripHidden,true);
    await until(()=>evaluate(`card.lastSceneRenderAt>${preview.renderedAt}&&['mid-autumn','chuseok'].includes(card.scene.getHolidayState().selection)`),'automatic render after ending '+id+' preview');
  }
  assert.equal(previewResults.length,16);
  assert.equal(await evaluate("ops.some(request=>request.type==='lovelace/config/save')"),false,'previews do not persist changes');
  const formState=await evaluate(`(()=>{openHolidays();
    const select=card.shadowRoot.querySelector('[data-holiday-id="mid-autumn"] select');select.value='off';select.dispatchEvent(new Event('change'));
    const form=card.shadowRoot.querySelector('.roomcraft-holidays form');form.requestSubmit();
    return {valid:form.checkValidity(),invalid:[...form.querySelectorAll(':invalid')].map(input=>({name:input.dataset.holidayPlacement??input.dataset.holidaySetting,value:input.value,reason:input.validationMessage}))};})()`);
  assert.equal(formState.valid,true,JSON.stringify(formState.invalid));
  await until(()=>evaluate("card.shadowRoot.querySelector('.holiday-actions [role=status]').textContent==='Holiday settings saved.'&&Boolean(card.scene&&card.frame)"),'holiday save and readback');
  await evaluate("card.frame.environment.holidayDate='2026-09-25';card.frame.environment.night=true;card.holidayPanel.close()");
  await until(()=>evaluate("card.scene.getHolidayState().selection==='chuseok'"),'saved settings render after modal closes');
  const saved=await evaluate('({config:fixtureConfig,ops,state:card.scene.getHolidayState()})');
  assert.equal(saved.ops.filter(request=>request.type==='lovelace/config/save').length,1);
  assert.ok(saved.ops.every(request=>['lovelace/config','lovelace/config/save'].includes(request.type)));
  assert.deepEqual(saved.config.fixtureUnrelated,config.fixtureUnrelated);assert.deepEqual(saved.config.views,config.views);
  assert.deepEqual(saved.config.roomcraft_plan,config.roomcraft_plan);
  assert.deepEqual(saved.config.roomcraft_layout,{...project,sceneSettings:{holidays:normalizeHolidaySettings({modes:{'mid-autumn':'off',chuseok:'auto'}})}});
  assert.equal(saved.config.roomcraft_snapshots.length,1);
  assert.deepEqual(saved.config.roomcraft_snapshots[0].layout,project,'prior design is retained for rollback');
  assert.deepEqual(saved.state.active,['chuseok']);assert.equal(saved.state.selection,'chuseok');
  await evaluate('openHolidays()');
  assert.equal(await evaluate(`card.shadowRoot.querySelector('[data-holiday-id="mid-autumn"] select').value`),'off');
  assert.equal(await evaluate(`card.shadowRoot.querySelector('[data-holiday-id="chuseok"] select').value`),'auto');
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await delay(150);
  const phone=await evaluate(`(()=>{const dialog=card.holidayPanel.dialog,r=dialog.getBoundingClientRect(),body=dialog.querySelector('.holiday-body');
    return {x:r.x,y:r.y,right:r.right,bottom:r.bottom,width:innerWidth,height:innerHeight,
      horizontalOverflow:dialog.scrollWidth>dialog.clientWidth+1,bodyScroll:body.scrollHeight>body.clientHeight,
      columns:getComputedStyle(dialog.querySelector('.holiday-list')).gridTemplateColumns};})()`);
  assert.ok(phone.x>=0&&phone.y>=0&&phone.right<=phone.width&&phone.bottom<=phone.height,'phone dialog stays within viewport');
  assert.equal(phone.horizontalOverflow,false);assert.equal(phone.bodyScroll,true);assert.ok(!phone.columns.includes(' '),'single column on phone');
  await photo('holidays-menu-phone');
  await evaluate(`(()=>{card.frame.environment.holidayDate='2040-11-12';card.holidayPanel.close();})()`);
  await evaluate('openHolidays()');
  assert.match(await evaluate("card.shadowRoot.querySelector('[data-holiday-id=\"loy-krathong\"] .holiday-schedule').textContent"),/Automatic date unavailable/);
  assert.deepEqual(errors,[]);
  await writeFile(join(qa,'evidence.json'),JSON.stringify({initial,previewResults,saved,phone,errors},null,2));
  console.log('PASS: actual live menu31holidays,16automatic RAF theme previews with continuing frames and restored camera, independent Off with snapshot+readback, persisted reopening, phone modal fit, unknown-date notice; no physical actions or manual rendering');
  console.log(qa);
}finally{ws?.close();chrome.kill();server.close();}
