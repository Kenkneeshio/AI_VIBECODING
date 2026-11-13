import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {extname,join,resolve} from 'node:path';
import {createRequire} from 'node:module';
const source=process.cwd();
const {build}=createRequire(join(source,'package.json'))('esbuild');
const qa=await mkdtemp(join(tmpdir(),'roomcraft-holiday-studio-qa-'));
const editorCode=process.env.ROOMCRAFT_HOLIDAY_STUDIO_QA_DIST ? await readFile(join(source,'public','storybook-editor.js')) :
  (await build({absWorkingDir:source,bundle:true,target:'es2022',format:'iife',write:false,
   entryPoints:['ha-local/storybook-editor.mjs'],minify:true})).outputFiles[0].contents;
// The probe exposes the production street-bounds calculation only inside this fixture.
const probe=(await build({absWorkingDir:source,bundle:true,target:'es2022',format:'iife',write:false,
  stdin:{contents:"import {storybookStreetBounds} from './ha-local/storybook-street.mjs'; import {compileStorybookSideRoads} from './ha-local/storybook-side-road.mjs'; window.RoomcraftExteriorQAStreetBounds=storybookStreetBounds; window.RoomcraftExteriorQARoads=compileStorybookSideRoads;",resolveDir:source},
  minify:true})).outputFiles[0].contents;
const code=Buffer.concat([Buffer.from(editorCode),Buffer.from('\n'),Buffer.from(probe)]);
const garage={id:'fixture-garage',type:'garageDoor',name:'Garage',x:306,y:112,w:132,h:120,rotation:0,
  garageRoof:'full',garageDriveway:true,garageDrivewayWidth:60};
const project={version:2,editableReferenceVersion:10,rooms:[{id:'home-floor',name:'Home floor',surface:'oak',label:{x:425,y:380},
  points:[{x:420,y:210},{x:1450,y:210},{x:1450,y:870},{x:420,y:870}]}],walls:[],hotspots:[],items:[garage]};
const html=`<!DOCTYPE html><html><head><meta name=viewport content="width=device-width, initial-scale=1"></head><body style="margin:0"><script>
window.ops=[];
window.addEventListener('message',event=>{
 const request=event.data;
 if(request?.kind!=='request'||request.channel!=='roomcraft-ha')return;
 window.ops.push([request.method,request.payload]);
 const data=request.method==='GET'?{project:${JSON.stringify(project)},revision:'test-1',hotspots:[]}:
  request.method==='POST'?{revision:'test-2',imageUrl:'/fixture.png'}:undefined;
 event.source.postMessage({channel:'roomcraft-ha',kind:'response',id:request.id,ok:true,data},location.origin);
});
</script><iframe id="editor" width="100%" height="810" style="border:0" src="/local/roomcraft/editor.html"></iframe></body></html>`;
const server=createServer(async(request,response)=>{
  const name=new URL(request.url,'http://localhost').pathname;
  try{
    if(name==='/') {response.writeHead(200,{'Content-Type':'text/html'});return response.end(html);}
    if(name==='/api/dashboard') {
      response.writeHead(200,{'Content-Type':'application/json'});
      return response.end(JSON.stringify({project,revision:'hosted-fixture',hotspots:[]}));
    }
    const path=name==='/editor' ? 'editor.html' : name.replace(/^\/(?:local\/roomcraft\/)?/,'');
    if(path.includes('..')) throw new Error('Unknown fixture path');
    const type={'.js':'text/javascript','.css':'text/css','.html':'text/html','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'}[extname(path)]||'application/octet-stream';
    let contents=path==='storybook-editor.js'?code:await readFile(resolve(source,'public',path));
    if (process.env.ROOMCRAFT_TEST_LEGACY_MOUNT && path==='editor.html' && !contents.includes('id="sceneView"')) {
      contents=Buffer.from(contents.toString().replace('</body>', '<select id="sceneView" hidden><option value="plan">Plan</option></select></body>'));
    }
    response.writeHead(200,{'Content-Type':type});response.end(contents);
  }catch{response.writeHead(404);response.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const {port}=server.address();
const profile=join(qa,'chrome-profile');
const chrome=spawn(process.env.ROOMCRAFT_QA_CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',[
  '--headless','--disable-gpu-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader',
  '--no-first-run','--no-default-browser-check','--hide-scrollbars','--disable-background-networking',
  '--remote-debugging-port=0','--user-data-dir='+profile,'about:blank',
],{windowsHide:true,stdio:'ignore'});
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function until(callback,label,timeout=45000){
  const limit=Date.now()+timeout;let last;
  while(Date.now()<limit){
    try{const result=await callback();if(result)return result;}catch(error){last=error;}
    await delay(125);
  }
  throw new Error(label+' timed out'+(last?' ('+last.message+')':''));
}
let ws;
try {
  const active=await until(()=>readFile(join(profile,'DevToolsActivePort'),'utf8'),'Chrome port');
  const chromePort=Number(active.split(/\r?\n/)[0]);
  const [page]=(await (await fetch('http://127.0.0.1:'+chromePort+'/json')).json()).filter(target=>target.type==='page');
  ws=new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true});});
  const inflight=new Map(), errors=[];let seq=0;
  function send(method,params={}){
    const id=++seq;
    return new Promise((resolve,reject)=>{inflight.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
  }
  ws.addEventListener('message',event=>{
    const message=JSON.parse(event.data);
    if(message.id){
      const pending=inflight.get(message.id);inflight.delete(message.id);
      if(message.error)pending?.reject(new Error(message.error.message));else pending?.resolve(message.result);
    }
    if(message.method==='Runtime.consoleAPICalled' && message.params.type==='error' && message.params.args.some(arg=>String(arg.value??arg.description).includes('THREE.'))) errors.push(message.params.args.map(arg=>arg.value??arg.description));
    if(message.method==='Runtime.exceptionThrown')errors.push(message.params.exceptionDetails.exception?.description);
    if(message.method==='Fetch.requestPaused'){
      const {requestId,request:{url}}=message.params;
      if(url.startsWith('http://127.0.0.1:'+port+'/')||url.startsWith('data:image/png'))void send('Fetch.continueRequest',{requestId});
      else void send('Fetch.failRequest',{requestId,errorReason:'BlockedByClient'});
    }
  });
  const evaluate=async expression=>{
    const result=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});
    if(result.exceptionDetails)throw new Error(result.exceptionDetails.exception?.description??result.exceptionDetails.text);
    return result.result?.value;
  };
  await send('Runtime.enable');
  await send('Fetch.enable',{patterns:[{urlPattern:'*'}]});
  await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://127.0.0.1:'+port+'/'});
  await until(()=>evaluate("document.getElementById('editor')?.contentWindow.RoomcraftEditorViewport?.getProject().items.some(item=>item.id==='fixture-garage')"),'fixture project');
  const dom="document.getElementById('editor').contentDocument";
  const scoped=code=>evaluate(`((doc)=>{${code}})(${dom})`);

  const wd='document.getElementById("editor").contentWindow';
  const overhead=()=>scoped("return !doc.getElementById('sceneCanvas').hidden&&doc.getElementById('viewport').classList.contains('scene-3d')");
  await until(overhead,'3D overhead scene');
  assert.equal(await scoped("return doc.querySelector('#sceneView,.reference-card,#referenceModeButton')===null"),true);
  assert.equal(await scoped("return doc.querySelector('#exportDashboardButton + #backDashboardButton')?.textContent.includes('Return to live dashboard')"),true);
  const photo=async name=>{
    const result=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    await writeFile(join(qa,name+'.png'),Buffer.from(result.data,'base64'));
  };

  await scoped("doc.getElementById('holidaySettingsButton').click()");
  await until(()=>scoped("return doc.querySelector('.roomcraft-holidays')?.open"),'Holiday menu');
  assert.equal(await scoped("return doc.querySelectorAll('.holiday-card').length"),31);
  await evaluate(`(()=>{const w=${wd},doc=w.document,d=doc.querySelector('.roomcraft-holidays');
    for(let i=0;i<8;i++){
      d.querySelector('[data-holiday-close]').click();doc.getElementById('holidaySettingsButton').click();
      d.querySelector('[data-holiday-preview="christmas"]').click();doc.querySelector('[data-holiday-preview-stop]').click();
      doc.getElementById('holidaySettingsButton').click();
    }
    d.querySelector('[data-holiday-close]').click();doc.getElementById('holidaySettingsButton').click();
    d.querySelector('[data-holiday-preview="christmas"]').click();})()`);
  await delay(150);
  assert.equal(await scoped("return !doc.querySelector('.holiday-preview-strip').hidden&&!doc.querySelector('.roomcraft-holidays').open"),true,
    'queued prior close events must not dismiss the newest preview');
  await scoped("doc.querySelector('[data-holiday-preview-settings]').click()");
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  await delay(100);
  assert.equal(await scoped("return doc.querySelector('.holiday-preview-strip').hidden&&!doc.querySelector('.roomcraft-holidays').open"),true,
    'native Escape dismisses the current settings session and its preview');
  await scoped("doc.getElementById('holidaySettingsButton').click()");
  const expected=await evaluate(`(()=>{const w=${wd},doc=w.document,api=w.RoomcraftEditorViewport,dialog=doc.querySelector('.roomcraft-holidays');
    const set=(selector,value,event='input')=>{const input=dialog.querySelector(selector);input.value=String(value);input.dispatchEvent(new w.Event(event,{bubbles:true}));};
    const form=dialog.querySelector('form');
    if(!form.checkValidity())throw Error('Automatic placement blocks native Save');
    set('[data-holiday-id="christmas"] select','on','change');set('[data-holiday-id="halloween"] select','off','change');
    set('[data-holiday-id="christmas"] details input','12-24');set('[data-holiday-setting="intensity"]','.553');set('[data-holiday-setting="windowDays"]','9');
    for(const [key,value] of Object.entries({x:650.125,y:147.07474631771458,scale:.8985050736457082,rotation:15.25}))set('[data-holiday-placement="'+key+'"]',value);
    if(!form.checkValidity())throw Error('Valid fractional settings block native Save');
    dialog.querySelector('[data-holiday-preview="christmas"]').click();
    if(dialog.open||doc.querySelector('.holiday-preview-strip').hidden)throw Error('Preview did not expose artwork');
    if(api.getProject().sceneSettings?.holidays)throw Error('Preview mutated canonical project');
    doc.querySelector('[data-holiday-preview-settings]').click();form.requestSubmit();
    return api.getProject().sceneSettings.holidays;})()`);
  assert.equal(expected.modes.christmas,'on');assert.equal(expected.modes.halloween,'off');assert.equal(expected.intensity,.553);
  assert.deepEqual(expected.placement,{x:650.125,y:147.07474631771458,scale:.8985050736457082,rotation:15.25});
  await photo('holiday-studio-desktop');
  const untouched=await evaluate(`(()=>{const w=${wd},doc=w.document,api=w.RoomcraftEditorViewport,d=doc.querySelector('.roomcraft-holidays');
    const input=d.querySelector('[data-holiday-id="christmas"] details input');input.value='02-30';input.dispatchEvent(new w.Event('input',{bubbles:true}));d.querySelector('form').requestSubmit();
    const invalid=d.querySelector('[role=status]').textContent;d.querySelector('[data-holiday-close]').click();doc.getElementById('undoButton').click();
    if(api.getProject().sceneSettings?.holidays)throw Error('Holiday Undo failed');doc.getElementById('redoButton').click();
    return {settings:api.getProject().sceneSettings.holidays,invalid};})()`);
  assert.deepEqual(untouched.settings,expected);assert.match(untouched.invalid,/Check/);
  await scoped("doc.getElementById('exportDashboardButton').click()");
  const payload=await until(()=>evaluate("window.ops.find(([method])=>method==='POST')?.[1]"),'mock Studio Save');
  assert.deepEqual(payload.project.sceneSettings.holidays,expected);assert.deepEqual(payload.project.items,project.items);
  assert.deepEqual(payload.project.rooms,project.rooms);assert.ok(payload.pngDataUrl.startsWith('data:image/png;base64,'));
  await scoped("doc.getElementById('holidaySettingsButton').click()");
  await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
  await delay(250);
  const fit=await evaluate(`(()=>{const w=${wd},d=w.document.querySelector('.roomcraft-holidays'),r=d.getBoundingClientRect();return{left:r.left,right:r.right,bottom:r.bottom,width:w.innerWidth,height:w.innerHeight,overflow:d.scrollWidth>d.clientWidth+1};})()`);
  assert.ok(fit.left>=0&&fit.right<=fit.width&&fit.bottom<=fit.height&&!fit.overflow,JSON.stringify(fit));
  await photo('holiday-studio-phone');
  const reset=await evaluate(`(()=>{const w=${wd},d=w.document.querySelector('.roomcraft-holidays');d.querySelector('[data-holiday-auto]').click();
    if(!d.querySelector('form').checkValidity())throw Error('Reset automatic placement blocks Save');d.querySelector('form').requestSubmit();
    return w.RoomcraftEditorViewport.getProject().sceneSettings.holidays;})()`);
  assert.equal(reset.placement,undefined);assert.equal(reset.intensity,.553);assert.equal(reset.modes.christmas,'on');
  assert.deepEqual(errors,[]);
  await writeFile(join(qa,'evidence.json'),JSON.stringify({settings:expected,phoneFit:fit,physicalActions:0},null,2));
  console.log('PASS: Studio holiday menu, independent schedules, preview isolation, date validation, exact fractional settings, native Save, Undo/Redo, mock Save, automatic placement reset and phone dialog fit.');console.log(qa);
} finally { ws?.close();chrome.kill();server.close(); }
