/* High-detail rendering uses the supplied artwork itself as the source of every
   untouched pixel and every movable cutout. Geometry stays in app.js. */
(() => {
  'use strict';
  const W = 1536, H = 1024;
  const specs = {
    i1: { box:[398,197,194,272], shapes:[['r',14,12,88,246,10],['r',13,167,171,94,11]] },
    i2: { box:[735,244,57,236], shapes:[['r',5,3,49,230,5]] },
    i3: { box:[348,567,220,194], shapes:[['r',34,36,156,113,27],['r',1,62,49,82,22],['r',177,62,42,82,22],['r',81,4,61,45,20],['r',83,145,60,48,20]] },
    i4: { box:[809,232,204,86], shapes:[['r',4,3,196,78,5]], diff:[30,65] },
    i5: { box:[945,261,65,83], shapes:[['e',5,5,55,70]], diff:[30,65] },
    i6: { box:[1228,260,238,229], shapes:[['r',16,15,207,198,14]] },
    i7: { box:[637,545,63,252], shapes:[['r',5,3,54,246,5]] },
    i8: { box:[796,546,65,252], shapes:[['r',5,3,54,245,5]] },
    i9: { box:[868,655,69,143], shapes:[['r',5,5,59,133,19]] },
    i10:{ box:[1113,655,72,143], shapes:[['r',6,4,61,134,20]] },
    i11:{ box:[1017,680,76,119], shapes:[['r',4,3,68,112,16]] },
    i12:{ box:[1109,583,79,60], shapes:[['r',5,3,69,54,16]] },
    i13:{ box:[435,624,51,56], shapes:[['e',3,3,45,50]] },
    lamp:{ box:[1412,446,62,69], shapes:[['e',4,1,54,58]] }
  };
  const prototype = {sofa:'i1',tv:'i2',table:'i3',desk:'i4',chair:'i5',bed:'i6',counter:'i7',tub:'i9',toilet:'i11',plant:'i13',lamp:'lamp'};
  // Reapply the original recessed blue glazing from the empty illustrated shell
  // above floor and furniture repairs in Design view, including moved cutouts.
  const exteriorWindows = [
    [461,201,76,26,0],[728,201,72,26,0],
    [866.5,201,65,26,0],[962.5,201,67,26,0],
    [1227,177,78,26,0],[1340,177,76,26,0],
    [400,316.5,107,28,90],[303.5,709,138,29,90]
  ];
  const floorSamples = {
    oak:[545,260,180,150], walnut:[835,265,176,150], ash:[1190,235,175,150],
    ivory:[936,683,132,100], blue:[1235,690,120,100]
  };
  const extraTextures = {terrazzo:new Image(),sage:new Image()};
  for(const image of Object.values(extraTextures))image.addEventListener('load',()=>{floorLayers.clear();window.dispatchEvent(new Event('roomcraft-asset-loaded'));});
  const rugImage=new Image();
  rugImage.addEventListener('load',()=>window.dispatchEvent(new Event('roomcraft-asset-loaded')));
  const bedroomRugImage=new Image();
  bedroomRugImage.addEventListener('load',()=>window.dispatchEvent(new Event('roomcraft-asset-loaded')));
  const fixedDecor = {
    great:[['r',466,245,147,213,13],['r',695,672,106,127,5]],
    study:[['r',807,281,50,108,5],['r',1001,233,58,144,5],['r',807,423,124,45,6],['e',899,350,82,78]],
    bedroom:[['r',1200,297,213,224,15],['r',1403,449,80,103,8],['r',1395,197,75,92,8],['r',1143,352,52,122,5]],
    'bath-one':[['r',1020,681,73,117,8]],
    'bath-two':[['r',1195,755,202,44,5]]
  };
  const fixedExteriorWalls=new Set(['w1','w2','w3','w4','w5','w6','w7','w8','w9','w10','w11','w12']);
  let cacheImage = null, cacheShell = null;
  const sprites = new Map(), repairs = new Map(), masks = new Map(), paintMasks = new Map(), decorSpecs = new Map(), wallPaintMasks = new Map(), floorLayers = new Map();
  const wallRepairs = new Map();
  const ready = image => image?.complete && image.naturalWidth >= W;
  function makeCanvas(w,h) { const c=document.createElement('canvas');c.width=w;c.height=h;return c; }
  function maskFor(spec) {
    if(masks.has(spec))return masks.get(spec);
    const [,,w,h]=spec.box, mask=makeCanvas(w,h), c=mask.getContext('2d');
    c.fillStyle='#fff';
    for(const [type,x,y,a,b,r] of spec.shapes){c.beginPath();if(type==='e')c.ellipse(x+a/2,y+b/2,a/2,b/2,0,0,Math.PI*2);else c.roundRect(x,y,a,b,r||0);c.fill();}
    masks.set(spec,mask);return mask;
  }
  function maskForPaint(spec,original,shell){
    if(paintMasks.has(spec))return paintMasks.get(spec);
    const [x,y,w,h]=spec.box,geo=maskFor(spec),out=makeCanvas(w,h),c=out.getContext('2d');
    c.drawImage(geo,0,0);const alpha=c.getImageData(0,0,w,h);
    const source=makeCanvas(w,h),s=source.getContext('2d');s.drawImage(original,x,y,w,h,0,0,w,h);
    const clean=makeCanvas(w,h),b=clean.getContext('2d');b.drawImage(shell,x,y,w,h,0,0,w,h);
    const a=s.getImageData(0,0,w,h).data,z=b.getImageData(0,0,w,h).data;
    const [low,high]=spec.diff||[13,35];
    for(let i=0;i<alpha.data.length;i+=4){
      if(!alpha.data[i+3])continue;
      const dr=Math.abs(a[i]-z[i]),dg=Math.abs(a[i+1]-z[i+1]),db=Math.abs(a[i+2]-z[i+2]);
      const d=Math.max((dr+dg+db)/3,Math.max(dr,dg,db)*.68);
      alpha.data[i+3]=Math.round(alpha.data[i+3]*Math.max(0,Math.min(1,(d-low)/(high-low))));
    }
    c.putImageData(alpha,0,0);paintMasks.set(spec,out);return out;
  }
  function decorMask(shape,roomId,original,shell){
    if(!decorSpecs.has(shape)){
      const [type,x,y,w,h,r]=shape;
      decorSpecs.set(shape,{box:[x,y,w,h],shapes:[[type,0,0,w,h,r]],diff:roomId==='study'?[30,65]:[13,35]});
    }
    const spec=decorSpecs.get(shape);return {mask:maskForPaint(spec,original,shell),x:spec.box[0],y:spec.box[1]};
  }
  function wallPaintMask(w,original,wallFree){
    if(wallPaintMasks.has(w.id))return wallPaintMasks.get(w.id);
    const x=Math.max(0,Math.floor(Math.min(w.x1,w.x2)-27)),y=Math.max(0,Math.floor(Math.min(w.y1,w.y2)-27));
    const bw=Math.min(W-x,Math.ceil(Math.max(w.x1,w.x2)+27)-x),bh=Math.min(H-y,Math.ceil(Math.max(w.y1,w.y2)+27)-y);
    const mask=makeCanvas(bw,bh),m=mask.getContext('2d');
    m.strokeStyle='#fff';m.lineWidth=47;m.lineCap='square';m.beginPath();m.moveTo(w.x1-x,w.y1-y);m.lineTo(w.x2-x,w.y2-y);m.stroke();
    const data=m.getImageData(0,0,bw,bh),src=makeCanvas(bw,bh),s=src.getContext('2d'),clean=makeCanvas(bw,bh),z=clean.getContext('2d');
    s.drawImage(original,x,y,bw,bh,0,0,bw,bh);z.drawImage(wallFree,x,y,bw,bh,0,0,bw,bh);
    const a=s.getImageData(0,0,bw,bh).data,b=z.getImageData(0,0,bw,bh).data;
    for(let i=0;i<data.data.length;i+=4){const d=(Math.abs(a[i]-b[i])+Math.abs(a[i+1]-b[i+1])+Math.abs(a[i+2]-b[i+2]))/3;data.data[i+3]=Math.round(data.data[i+3]*Math.max(0,Math.min(1,(d-20)/40)));}
    m.putImageData(data,0,0);const result={mask,x,y};wallPaintMasks.set(w.id,result);return result;
  }
  function cutout(id,image,feather=false,compare=null) {
    const spec=specs[id];if(!spec||!ready(image))return null;
    const [x,y,w,h]=spec.box, canvas=makeCanvas(w,h), c=canvas.getContext('2d');
    c.drawImage(image,x,y,w,h,0,0,w,h);
    if(compare&&ready(compare)){
      // A rectangular slice carries its old floor with it when it is moved.
      // Compare the furnished art with the empty illustrated shell and keep
      // only pixels belonging to the actual object and its natural shadow.
      const clean=makeCanvas(w,h),b=clean.getContext('2d');
      b.drawImage(compare,x,y,w,h,0,0,w,h);
      const subject=c.getImageData(0,0,w,h),background=b.getImageData(0,0,w,h).data;
      const shape=maskFor(spec).getContext('2d').getImageData(0,0,w,h).data;
      for(let i=0;i<subject.data.length;i+=4){
        if(!shape[i+3]){subject.data[i+3]=0;continue;}
        const dr=Math.abs(subject.data[i]-background[i]);
        const dg=Math.abs(subject.data[i+1]-background[i+1]);
        const db=Math.abs(subject.data[i+2]-background[i+2]);
        const difference=Math.max((dr+dg+db)/3,Math.max(dr,dg,db)*.68);
        const edge=Math.max(0,Math.min(1,(difference-6)/22));
        subject.data[i+3]=Math.round(subject.data[i+3]*edge);
      }
      c.putImageData(subject,0,0);
      return canvas;
    }
    c.globalCompositeOperation='destination-in';
    if(feather){c.filter='blur(7px)';c.drawImage(maskFor(spec),0,0);c.filter='none';}
    else c.drawImage(maskFor(spec),0,0);
    return canvas;
  }
  function ensureCache(original,shell) {
    if(cacheImage!==original){sprites.clear();cacheImage=original;}
    if(cacheShell!==shell){repairs.clear();cacheShell=shell;}
  }
  function sourceSprite(id,original,shell,repair=false) {
    ensureCache(original,shell);const map=repair?repairs:sprites;
    if(!map.has(id))map.set(id,cutout(id,repair?shell:original,repair,repair?null:shell));
    return map.get(id);
  }
  function sameVisual(a,b){return !!a&&!!b&&a.type===b.type&&a.x===b.x&&a.y===b.y&&a.w===b.w&&a.h===b.h&&a.rotation===b.rotation;}
  function sameWall(a,b){return !!a&&!!b&&a.x1===b.x1&&a.y1===b.y1&&a.x2===b.x2&&a.y2===b.y2&&(a.finish||'graphite')===(b.finish||'graphite');}
  function sameRoom(a,b){return !!a&&!!b&&a.surface===b.surface&&JSON.stringify(a.points)===JSON.stringify(b.points);}
  function pathRoom(c,points){if(!points?.length)return;c.beginPath();c.moveTo(points[0].x,points[0].y);for(let i=1;i<points.length;i++)c.lineTo(points[i].x,points[i].y);c.closePath();}
  function drawShape(c,s){const [type,x,y,w,h,r]=s;c.beginPath();if(type==='e')c.ellipse(x+w/2,y+h/2,w/2,h/2,0,0,Math.PI*2);else c.roundRect(x,y,w,h,r||0);c.fill();}
  function floorPattern(c,surface,shell){
    const extra=extraTextures[surface];
    if(extra&&!extra.src)extra.src=`assets/${surface}-tile.png`;
    const tw=192,th=extra?192:160,tile=makeCanvas(tw,th),t=tile.getContext('2d');
    if(extra?.complete&&extra.naturalWidth)t.drawImage(extra,0,0,extra.naturalWidth,extra.naturalHeight,0,0,tw,th);
    else if(floorSamples[surface]&&ready(shell)){const [x,y,w,h]=floorSamples[surface];t.drawImage(shell,x,y,w,h,0,0,tw,th);}
    else {t.fillStyle=surface==='sage'?'#9caf92':'#e9dfce';t.fillRect(0,0,tw,th);}
    return c.createPattern(tile,'repeat');
  }
  function paintRoom(c,room,starter,project,images) {
    const itemState=starter.items.map(i=>sameVisual(i,project.items.find(o=>o.id===i.id))?'1':'0').join('');
    const wallState=project.walls.map(w=>`${w.id}:${w.x1},${w.y1},${w.x2},${w.y2}`).join('|');
    const innerGeometry=room.id==='great'?JSON.stringify(project.rooms.filter(r=>r.id!=='great').map(r=>[r.id,r.points])):'';
    const key=`${room.id}|${room.surface}|${JSON.stringify(room.points)}|${innerGeometry}|${itemState}|${wallState}`;
    if(floorLayers.has(key)){c.drawImage(floorLayers.get(key),0,0);return;}
    const layer=makeCanvas(W,H),p=layer.getContext('2d');
    const fill=floorPattern(p,room.surface,images.shell);
    p.fillStyle=fill;pathRoom(p,room.points);p.fill();
    // The shell has soft contact shadows at its walls. A newly painted floor
    // otherwise covers them and looks like a flat sticker on top of the art.
    p.save();pathRoom(p,room.points);p.clip();
    p.filter='blur(7px)';p.strokeStyle='rgba(65,45,31,.13)';p.lineWidth=37;p.lineCap='square';
    p.beginPath();
    for(const wall of project.walls){
      p.moveTo(wall.x1,wall.y1);p.lineTo(wall.x2,wall.y2);
    }
    p.stroke();
    p.restore();
    const currentById=new Map(project.items.map(i=>[i.id,i]));
    const wallsById=new Map(project.walls.map(w=>[w.id,w]));
    p.globalCompositeOperation='destination-out';p.fillStyle='#fff';
    // The open-area polygon encloses the house footprint. Cut out every
    // enclosed room so painting it cannot overwrite their distinct floors.
    if(room.id==='great')for(const other of project.rooms){if(other.id===room.id)continue;pathRoom(p,other.points);p.fill();}
    for(const base of starter.items){if(!sameVisual(base,currentById.get(base.id)))continue;const spec=specs[base.id];if(spec)p.drawImage(maskForPaint(spec,images.original,images.shell),spec.box[0],spec.box[1]);}
    for(const shape of fixedDecor[room.id]||[]){const d=decorMask(shape,room.id,images.original,images.shell);p.drawImage(d.mask,d.x,d.y);}
    for(const base of starter.walls){if(!sameWall(base,wallsById.get(base.id)))continue;p.beginPath();p.lineCap='square';p.lineWidth=35;p.moveTo(base.x1,base.y1);p.lineTo(base.x2,base.y2);p.stroke();}
    if(floorLayers.size>8)floorLayers.clear();floorLayers.set(key,layer);
    c.drawImage(layer,0,0);
  }
  function repairWall(c,w,wallFree){
    if(!ready(wallFree))return;
    const key=`${w.id}:${w.x1},${w.y1},${w.x2},${w.y2}`;
    if(!wallRepairs.has(key)){
      const x=Math.max(0,Math.floor(Math.min(w.x1,w.x2)-25)),y=Math.max(0,Math.floor(Math.min(w.y1,w.y2)-25));
      const bw=Math.min(W-x,Math.ceil(Math.max(w.x1,w.x2)+25)-x),bh=Math.min(H-y,Math.ceil(Math.max(w.y1,w.y2)+25)-y);
      const patch=makeCanvas(bw,bh),p=patch.getContext('2d');
      p.drawImage(wallFree,x,y,bw,bh,0,0,bw,bh);
      const mask=makeCanvas(bw,bh),m=mask.getContext('2d');
      m.filter='blur(3px)';m.beginPath();m.lineCap='square';m.lineWidth=31;m.strokeStyle='#fff';
      m.moveTo(w.x1-x,w.y1-y);m.lineTo(w.x2-x,w.y2-y);m.stroke();
      p.globalCompositeOperation='destination-in';p.drawImage(mask,0,0);
      wallRepairs.set(key,{patch,x,y});
    }
    const result=wallRepairs.get(key);c.drawImage(result.patch,result.x,result.y);
  }
  function drawNewWall(c,w){
    const vx=w.x2-w.x1,vy=w.y2-w.y1,length=Math.hypot(vx,vy)||1;
    const nx=-vy/length,ny=vx/length;
    const finishes={
      graphite:{shadow:'#66564b',side:'#9f8d7a',bevel:'#c7b39b',edge:'#e0cbb0',top:['#41505a','#2b3842','#1a252f','#121b23']},
      plaster:{shadow:'#84705d',side:'#ad987f',bevel:'#c9b79e',edge:'#eadbc1',top:['#f1e4cb','#e4d4b9','#d2bfa4','#bead95']},
      sage:{shadow:'#556250',side:'#75856e',bevel:'#9caf93',edge:'#c8d4b9',top:['#c1d0b7','#a8ba9e','#8fa588','#738a71']},
      walnut:{shadow:'#46352d',side:'#684b3c',bevel:'#926c51',edge:'#b28968',top:['#b08260','#9b6d4f','#7e543d','#624232']}
    };
    const palette=finishes[w.finish]||finishes.graphite;
    const stroke=(ox,oy,width,color)=>{
      c.beginPath();c.strokeStyle=color;c.lineWidth=width;
      c.moveTo(w.x1+ox,w.y1+oy);c.lineTo(w.x2+ox,w.y2+oy);c.stroke();
    };
    c.save();c.lineCap='square';c.lineJoin='miter';
    c.shadowColor='rgba(31,27,23,.27)';c.shadowBlur=14;c.shadowOffsetX=5;c.shadowOffsetY=9;
    stroke(3,15,35,palette.shadow);
    c.shadowColor='transparent';c.shadowBlur=0;c.shadowOffsetX=0;c.shadowOffsetY=0;
    stroke(3,14,34,palette.side);
    stroke(2,10,34,palette.bevel);
    stroke(1,6,32,palette.edge);
    stroke(0,3,32,palette.top[3]);
    const top=c.createLinearGradient(w.x1-nx*16,w.y1-ny*16,w.x1+nx*16,w.y1+ny*16);
    top.addColorStop(0,palette.top[0]);top.addColorStop(.22,palette.top[1]);top.addColorStop(.75,palette.top[2]);top.addColorStop(1,palette.top[3]);
    stroke(0,0,28,top);
    stroke(-nx*12,-ny*12,2,'rgba(213,225,226,.26)');
    stroke(nx*12,ny*12,1.5,'rgba(0,0,0,.35)');
    c.restore();
  }
  function drawGlazedWindow(c,x,y,w,h,rotation=0){
    w=Math.max(32,w);h=Math.max(16,h);
    c.save();c.translate(x,y);c.rotate(rotation*Math.PI/180);
    const left=-w/2,top=-h/2;
    const gx=left+4,gy=top+4,gw=w-8,gh=h-10;
    // The dark cut runs through the wall. Glazing sits inside it, with a
    // narrow front reveal on the side facing the room. Rotation is chosen by
    // the side of the wall used during placement, so the reveal follows it.
    c.shadowColor='rgba(16,28,34,.35)';c.shadowBlur=5;c.shadowOffsetX=2;c.shadowOffsetY=5;
    c.fillStyle='#0d1c28';c.fillRect(left,top,w,h);
    c.shadowColor='transparent';c.shadowBlur=0;c.shadowOffsetX=0;c.shadowOffsetY=0;
    c.fillStyle='#344756';c.fillRect(left+1,top+1,w-2,h-2);
    c.fillStyle='#0b263b';c.fillRect(gx-1,gy-1,gw+2,gh+2);
    const glass=c.createLinearGradient(0,gy,0,gy+gh);
    glass.addColorStop(0,'#ebfaff');glass.addColorStop(.12,'#86c9e7');
    glass.addColorStop(.48,'#59b6dd');glass.addColorStop(.71,'#9ad8ea');
    glass.addColorStop(1,'#4f8fb7');
    c.fillStyle=glass;c.fillRect(gx,gy,gw,gh);
    c.save();c.beginPath();c.rect(gx,gy,gw,gh);c.clip();
    const panes=Math.max(2,Math.round(w/40));
    for(let i=0;i<panes;i++){
      const px=gx+i*gw/panes,pw=gw/panes;
      const reflection=c.createLinearGradient(px,gy,px+pw*.65,gy+gh);
      reflection.addColorStop(0,'rgba(255,255,255,.57)');
      reflection.addColorStop(.35,'rgba(255,255,255,.04)');
      reflection.addColorStop(.73,'rgba(255,255,255,.22)');
      reflection.addColorStop(1,'rgba(255,255,255,0)');
      c.fillStyle=reflection;c.fillRect(px,gy,pw,gh);
      if(i){c.fillStyle='#376178';c.fillRect(px-1.1,gy,2.2,gh);c.fillStyle='#d9f5f9';c.fillRect(px+.5,gy,.7,gh);}
    }
    c.fillStyle='rgba(255,255,255,.55)';c.fillRect(gx,gy+gh*.45,gw,1);
    c.restore();
    // Thin metal jambs, upper cap and a projected inner sill echo the source
    // art's slightly raised walls without turning the pane into a white box.
    c.fillStyle='#e6ece8';c.fillRect(left+1,top+2,2,h-4);c.fillRect(left+w-3,top+2,2,h-4);
    c.fillStyle='#bad7dc';c.fillRect(left+3,top+2,w-6,1.2);
    c.fillStyle='#eef7f2';c.fillRect(left+3,top+h-5,w-6,2);
    c.fillStyle='#aa9c87';c.fillRect(left+3,top+h-3,w-6,3);
    c.fillStyle='rgba(65,47,34,.22)';c.fillRect(left+4,top+h,w-8,2);
    c.restore();
  }
  function repairItem(c,id,original,shell) {
    const spec=specs[id], patch=sourceSprite(id,original,shell,true);if(!spec||!patch)return;
    c.drawImage(patch,spec.box[0],spec.box[1]);
  }
  function drawItem(c,item,starter,original,shell,fallback) {
    if(item.type==='window'){
      drawGlazedWindow(c,item.x,item.y,item.w,item.h,item.rotation||0);
      return;
    }
    if(item.type==='rug'){
      if(!rugImage.src)rugImage.src='assets/rug-sprite.png';
      if(!rugImage.complete||!rugImage.naturalWidth){fallback(item);return;}
      c.save();c.translate(item.x,item.y);c.rotate((item.rotation||0)*Math.PI/180);
      c.drawImage(rugImage,120,105,1210,885,-item.w/2,-item.h/2,item.w,item.h);c.restore();
      return;
    }
    const id=specs[item.id]?item.id:prototype[item.type];const spec=specs[id];
    const sprite=id&&sourceSprite(id,original,shell,false);
    if(!sprite||!spec){fallback(item);return;}
    const base=starter.items.find(i=>i.id===id)||{x:spec.box[0]+spec.box[2]/2,y:spec.box[1]+spec.box[3]/2,w:spec.box[2],h:spec.box[3]};
    const sx=item.w/base.w,sy=item.h/base.h;
    c.save();c.translate(item.x,item.y);c.rotate((item.rotation||0)*Math.PI/180);c.scale(sx,sy);
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
    c.shadowColor='rgba(39,30,23,.20)';c.shadowBlur=11;c.shadowOffsetX=3;c.shadowOffsetY=7;
    c.drawImage(sprite,spec.box[0]-base.x,spec.box[1]-base.y);
    c.restore();
  }
  function drawLivingRug(c){
    if(!rugImage.src)rugImage.src='assets/rug-sprite.png';
    if(!rugImage.complete||!rugImage.naturalWidth)return;
    c.save();c.translate(541,351);c.rotate(Math.PI/2);
    c.drawImage(rugImage,120,105,1210,885,-207/2,-142/2,207,142);c.restore();
  }
  function drawBedroomRug(c){
    if(!bedroomRugImage.src)bedroomRugImage.src='assets/bedroom-rug-sprite.png';
    if(!bedroomRugImage.complete||!bedroomRugImage.naturalWidth)return;
    c.drawImage(bedroomRugImage,85,80,1010,1160,1200,297,215,223);
  }
  function waitForImage(image,src){
    if(src&&!image.src)image.src=src;
    if(image.complete&&image.naturalWidth)return Promise.resolve();
    return new Promise((resolve,reject)=>{
      image.addEventListener('load',resolve,{once:true});
      image.addEventListener('error',()=>reject(new Error('Image asset could not load')),{once:true});
    });
  }
  function prepareExport(project,starter,images){
    const tasks=[waitForImage(images.original),waitForImage(images.shell),waitForImage(images.wallFree)];
    const sofa=starter.items.find(i=>i.id==='i1'),current=project.items.find(i=>i.id==='i1');
    if(project.items.some(i=>i.type==='rug')||!sameVisual(sofa,current))tasks.push(waitForImage(rugImage,'assets/rug-sprite.png'));
    const bed=starter.items.find(i=>i.id==='i6'),currentBed=project.items.find(i=>i.id==='i6');
    if(!sameVisual(bed,currentBed))tasks.push(waitForImage(bedroomRugImage,'assets/bedroom-rug-sprite.png'));
    for(const id of ['terrazzo','sage'])if(project.rooms.some(r=>r.surface===id))tasks.push(waitForImage(extraTextures[id],`assets/${id}-tile.png`));
    return Promise.all(tasks);
  }
  function draw(c,project,starter,images,fallback) {
    const {original,shell,wallFree}=images;
    if(!ready(original))return false;
    c.drawImage(original,0,0,W,H);
    if(!ready(shell))return true;
    const baseById=new Map(starter.items.map(i=>[i.id,i]));
    const currentById=new Map(project.items.map(i=>[i.id,i]));
    const currentWalls=new Map(project.walls.map(w=>[w.id,w]));
    for(const base of starter.walls)if(!sameWall(base,currentWalls.get(base.id)))repairWall(c,base,wallFree);
    for(const base of starter.items){const now=currentById.get(base.id);if(!sameVisual(base,now))repairItem(c,base.id,original,shell);}
    const starterRooms=new Map(starter.rooms.map(r=>[r.id,r]));
    for(const room of project.rooms)if(!sameRoom(room,starterRooms.get(room.id)))paintRoom(c,room,starter,project,images);
    if(!sameVisual(starter.items.find(i=>i.id==='i1'),currentById.get('i1')))drawLivingRug(c);
    if(!sameVisual(starter.items.find(i=>i.id==='i6'),currentById.get('i6')))drawBedroomRug(c);
    const changed=project.items.filter(item=>!sameVisual(item,baseById.get(item.id)));
    const isFloorLayer=item=>item.type==='rug'||['playMat','floorMat'].includes(window.RoomcraftInventory?.byType?.[item.type]?.artFamily);
    const floorItems=changed.filter(isFloorLayer);
    for(const item of floorItems)drawItem(c,item,starter,original,shell,fallback);
    // Mats sit beneath furniture: redraw unchanged source items they overlap.
    for(const mat of floorItems)for(const item of project.items){
      if(isFloorLayer(item)||!sameVisual(item,baseById.get(item.id)))continue;
      if(Math.abs(item.x-mat.x)<(item.w+mat.w)/2&&Math.abs(item.y-mat.y)<(item.h+mat.h)/2)drawItem(c,item,starter,original,shell,fallback);
    }
    for(const item of changed.filter(i=>!isFloorLayer(i)&&i.type!=='window'))drawItem(c,item,starter,original,shell,fallback);
    for(const wall of project.walls){const base=starter.walls.find(w=>w.id===wall.id);if(!sameWall(wall,base))drawNewWall(c,wall);}
    for(const [x,y,w,h,rotation] of exteriorWindows){
      const vertical=Math.abs(rotation)%180===90;
      const sx=Math.round(x-(vertical?h:w)/2),sy=Math.round(y-(vertical?w:h)/2);
      const sw=vertical?h:w,sh=vertical?w:h;
      c.drawImage(shell,sx,sy,sw,sh,sx,sy,sw,sh);
    }
    for(const item of changed.filter(i=>i.type==='window'))drawItem(c,item,starter,original,shell,fallback);
    return true;
  }
  window.RoomcraftRasterRenderer={draw,drawItem,ready,prepareExport};
})();
