/* High-detail rendering uses the supplied artwork itself as the source of every
   untouched pixel and every movable cutout. Geometry stays in app.js. */
(() => {
  'use strict';
  const Engine = window.RoomcraftEngine;
  if (!Engine) throw new Error('RoomcraftEngine must load before raster-renderer.js');
  const assetUrl = window.RoomcraftAssetUrl || (path => path);
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
    i14: { box:[1419,446,48,60], shapes:[['e',3,2,39,41],['e',13,34,22,22]] },
    lamp:{ box:[1419,446,48,60], shapes:[['e',3,2,39,41],['e',13,34,22,22]] }
  };
  const prototype = {sofa:'i1',tv:'i2',table:'i3',desk:'i4',chair:'i5',bed:'i6',counter:'i7',tub:'i9',toilet:'i11',plant:'i13',lamp:'lamp'};
  const vectorFurniture = new Set([
    'sofa','table','chair','bed','desk','armchair','coffeeTable','sideTable','dresser','nightstand','bookcase','stool',
    'lamp','ceilingLight','pendantLight','floorLamp','tableLamp','wallSconce',
    'kitchenWorktop','bathFixtures','doubleVanity','storageCabinet','bedroomBench','wallUnit'
  ]);
  // The wall relief comes from clean adjacent strips of the same shell.
  // Each source/target pair covers the old trim and sill at matching depth.
  // The Design canvas then paints glazing exclusively from scene items.
  const exteriorOpeningRepairs = [
    [[503,183,17,47], [420,183,81,47]],
    [[768,183,14,47], [693,183,74,47]],
    [[903,183,20,47], [831,183,72,47]],
    [[1003,183,19,47], [925,183,77,47]],
    [[1168,162,13,47], [1184,162,85,47]],
    [[1280,162,15,47], [1298,162,82,47]],
    [[381,378,50,13], [381,264,50,112]],
    [[286,783,40,10], [286,665,40,117]],
    [[509,183,17,31], [528,183,143,31]],
  ];
  const floorSamples = {
    oak:[545,260,180,150], walnut:[835,265,176,150], ash:[1190,235,175,150],
    ivory:[936,683,132,100], blue:[1235,690,120,100]
  };
  const extraTextures = {terrazzo:new Image(),sage:new Image()};
  for(const image of Object.values(extraTextures))image.addEventListener('load',()=>{floorLayers.clear();window.dispatchEvent(new Event('roomcraft-asset-loaded'));});
  let textileTile;
  const fixedExteriorWalls=new Set(['w1','w2','w3','w4','w5','w6','w7','w8','w9','w10','w11','w12']);
  // Source-space ownership for the editable interior of empty-shell.png.
  // Geometry lines approximate the plan; these bounds include the illustrated
  // cap, reveal, and shadow. Shared joins use a hard cut. Free floor edges
  // feather out into the underlying texture ('l', 't', 'r', 'b').
  const interiorWallRegions = {
    w13: [[773, 214, 827, 465, 'lr']],
    w14: [[762, 465, 987, 531, 'lrb']],
    w15: [[1037, 441, 1174, 530, 'lrb']],
    w16: [[1035, 212, 1094, 299, 'lr'], [1035, 299, 1094, 360, 'lb']],
    w17: [[1094, 297, 1118, 345, 'tb']],
    w18: [[1115, 189, 1142, 217, 'lrb']],
    w19: [[1118, 285, 1175, 441, 'tr']],
    w20: [[1038, 541, 1293, 579, 'ltr'], [1129, 579, 1293, 602, 'rb']],
    w21: [[1339, 541, 1497, 579, 'lt'], [1425, 579, 1497, 604, 'b']],
    w22: [[878, 629, 979, 688, 'trb']],
    w23: [[1014, 629, 1086, 689, 'ltb']],
    w24: [[827, 639, 878, 794, 'l']],
    w25: [[1086, 579, 1129, 629, 'l'], [1086, 629, 1136, 794, '']],
    w26: [[1136, 629, 1286, 690, 'trb']],
    w29: [[1369, 655, 1434, 794, 'lr']],
    w30: [[1369, 579, 1425, 655, 'lr']],
    w32: [[591, 541, 671, 794, 'ltr']],
    w33: [[827, 541, 878, 639, 'lt'], [878, 541, 971, 612, 'trb']],
  };
  // w25 and w28 describe the two room boundaries of one illustrated divider.
  // w27 and w31 have no separate source pixels.
  const interiorWallOwners = {w28: 'w25'};
  let cacheImage = null, cacheShell = null;
  const sprites = new Map(), repairs = new Map(), masks = new Map(), paintMasks = new Map(), wallPaintMasks = new Map(), floorLayers = new Map();
  const wallRepairs = new Map();
  const interiorWallRepairs = new WeakMap();
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
        // The difference edge keeps the natural source shadow. The authored
        // silhouette is the opaque material core, preventing pale upholstery,
        // porcelain, and walnut surfaces from becoming holes in the object.
        subject.data[i+3]=Math.max(Math.round(subject.data[i+3]*edge),shape[i+3]);
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
    const sourceChanged=cacheImage!==original,shellChanged=cacheShell!==shell;
    if(sourceChanged||shellChanged){
      sprites.clear();paintMasks.clear();floorLayers.clear();
      cacheImage=original;cacheShell=shell;
    }
    if(shellChanged)repairs.clear();
  }
  function sourceSprite(id,original,shell,repair=false) {
    ensureCache(original,shell);const map=repair?repairs:sprites;
    if(!map.has(id))map.set(id,cutout(id,repair?shell:original,repair,repair||id==='i14'?null:shell));
    return map.get(id);
  }
  function sameVisual(a,b){return !!a&&!!b&&a.type===b.type&&a.x===b.x&&a.y===b.y&&a.w===b.w&&a.h===b.h&&a.rotation===b.rotation;}
  function sameWall(a,b){return !!a&&!!b&&a.x1===b.x1&&a.y1===b.y1&&a.x2===b.x2&&a.y2===b.y2&&(a.finish||'graphite')===(b.finish||'graphite');}
  function sameRoom(a,b){return !!a&&!!b&&a.surface===b.surface&&JSON.stringify(a.points)===JSON.stringify(b.points);}
  function pathRoom(c,points){if(!points?.length)return;c.beginPath();c.moveTo(points[0].x,points[0].y);for(let i=1;i<points.length;i++)c.lineTo(points[i].x,points[i].y);c.closePath();}
  function drawShape(c,s){const [type,x,y,w,h,r]=s;c.beginPath();if(type==='e')c.ellipse(x+w/2,y+h/2,w/2,h/2,0,0,Math.PI*2);else c.roundRect(x,y,w,h,r||0);c.fill();}
  function floorPattern(c,surface,shell){
    const extra=extraTextures[surface];
    if(extra&&!extra.src)extra.src=assetUrl(`assets/${surface}-tile.png`);
    const tw=192,th=extra?192:160,tile=makeCanvas(tw,th),t=tile.getContext('2d');
    if(extra?.complete&&extra.naturalWidth)t.drawImage(extra,0,0,extra.naturalWidth,extra.naturalHeight,0,0,tw,th);
    else if(floorSamples[surface]&&ready(shell)){const [x,y,w,h]=floorSamples[surface];t.drawImage(shell,x,y,w,h,0,0,tw,th);}
    else {t.fillStyle=surface==='sage'?'#9caf92':'#e9dfce';t.fillRect(0,0,tw,th);}
    return c.createPattern(tile,'repeat');
  }
  function paintRoom(c,room,starter,project,images) {
    const wallState=project.walls.map(w=>`${w.id}:${w.x1},${w.y1},${w.x2},${w.y2}`).join('|');
    const innerGeometry=room.id==='great'?JSON.stringify(project.rooms.filter(r=>r.id!=='great').map(r=>[r.id,r.points])):'';
    const key=`${room.id}|${room.surface}|${JSON.stringify(room.points)}|${innerGeometry}|${wallState}`;
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
    const wallsById=new Map(project.walls.map(w=>[w.id,w]));
    p.globalCompositeOperation='destination-out';p.fillStyle='#fff';
    // The open-area polygon encloses the house footprint. Cut out every
    // enclosed room so painting it cannot overwrite their distinct floors.
    if(room.id==='great')for(const other of project.rooms){if(other.id===room.id)continue;pathRoom(p,other.points);p.fill();}
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
  function interiorWallPatch(wallFree, region){
    let patches=interiorWallRepairs.get(wallFree);
    if(!patches){patches=new Map();interiorWallRepairs.set(wallFree,patches);}
    if(patches.has(region))return patches.get(region);
    const [left,top,right,bottom,edges]=region;
    const fade=8;
    const l=edges.includes('l')?fade:0, t=edges.includes('t')?fade:0;
    const r=edges.includes('r')?fade:0, b=edges.includes('b')?fade:0;
    const x=left-l, y=top-t, w=right+r-x, h=bottom+b-y;
    const patch=makeCanvas(w,h),p=patch.getContext('2d');
    p.drawImage(wallFree,x,y,w,h,0,0,w,h);
    p.globalCompositeOperation='destination-in';
    function fadeAxis(before,after,axisLength,gradient){
      gradient.addColorStop(0,before?'transparent':'white');
      gradient.addColorStop(before/axisLength,'white');
      gradient.addColorStop(1-after/axisLength,'white');
      gradient.addColorStop(1,after?'transparent':'white');
      p.fillStyle=gradient;p.fillRect(0,0,w,h);
    }
    if(l||r)fadeAxis(l,r,w,p.createLinearGradient(0,0,w,0));
    if(t||b)fadeAxis(t,b,h,p.createLinearGradient(0,0,0,h));
    const result={patch,x,y};patches.set(region,result);return result;
  }
  function repairChangedWalls(c,changedWalls,wallFree){
    const interiors=new Set();
    for(const base of changedWalls){
      if(fixedExteriorWalls.has(base.id)){repairWall(c,base,wallFree);continue;}
      interiors.add(interiorWallOwners[base.id]||base.id);
    }
    for(const id of interiors)for(const region of interiorWallRegions[id]||[]){
      const {patch,x,y}=interiorWallPatch(wallFree,region);
      c.drawImage(patch,x,y);
    }
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
    // The offset stroke is the shadow. Avoid canvas shadowBlur: several
    // Android WebView/driver combinations turn it into isolated black bars.
    stroke(3,15,35,palette.shadow);
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
    const gx=left+5,gy=top+5,gw=w-10,gh=h-11;
    // The long axis follows the wall; the short axis is its thickness. No
    // vertical facade or glowing cyan band is visible from this viewpoint.
    c.fillStyle='rgba(10,17,22,.20)';c.fillRect(left+1,top+3,w,h);
    c.fillStyle='#17242c';c.fillRect(left,top,w,h);
    c.fillStyle='#41515a';c.fillRect(left+2,top+2,w-4,h-4);
    c.fillStyle='#122632';c.fillRect(gx-1,gy-1,gw+2,gh+2);
    const glass=c.createLinearGradient(0,gy,0,gy+gh);
    glass.addColorStop(0,'#2b4959');glass.addColorStop(.3,'#547586');
    glass.addColorStop(.65,'#385a6b');glass.addColorStop(1,'#1e3745');
    c.fillStyle=glass;c.fillRect(gx,gy,gw,gh);
    const panes=w>110?3:2;
    for(let i=1;i<panes;i++){
      const px=gx+i*gw/panes;
      c.fillStyle='#1d3440';c.fillRect(px-1,gy,2,gh);
      c.fillStyle='rgba(164,188,193,.35)';c.fillRect(px+1,gy,1,gh);
    }
    c.fillStyle='rgba(208,225,222,.16)';c.fillRect(gx+1,gy+2,gw-2,1);
    c.fillStyle='#70858a';c.fillRect(left+2,top+3,2,h-6);c.fillRect(left+w-4,top+3,2,h-6);
    c.fillStyle='#86979a';c.fillRect(left+4,top+h-4,w-8,1.5);
    c.fillStyle='rgba(10,18,23,.45)';c.fillRect(left+4,top+h-2,w-8,1);
    c.restore();
  }
  function repairItem(c,id,original,shell) {
    if(id==='i14'&&ready(original)){
      // The lamp sits on a baked bedside table. Removing its pixels from the
      // empty shell would also punch a hole through the table. Clone a clean
      // strip of the same tabletop under the tight lamp silhouette instead.
      const spec=specs.i14,[x,y,w,h]=spec.box,patch=makeCanvas(w,h),p=patch.getContext('2d');
      p.drawImage(original,1461,449,11,55,0,0,w,h);
      p.globalCompositeOperation='destination-in';p.filter='blur(2px)';p.drawImage(maskFor(spec),0,0);
      c.drawImage(patch,x,y);return;
    }
    const spec=specs[id], patch=sourceSprite(id,original,shell,true);if(!spec||!patch)return;
    c.drawImage(patch,spec.box[0],spec.box[1]);
  }
  function drawItem(c,item,starter,original,shell,fallback) {
    if(item.type==='controlZone')return;
    // Movable furniture and lighting use deterministic vector recipes. Source
    // crops carried floor pixels and fixed shadows, which broke the independent
    // layer contract after resize or rotation.
    if(vectorFurniture.has(item.type)){fallback(item);return;}
    if(item.type==='window'){
      drawGlazedWindow(c,item.x,item.y,item.w,item.h,item.rotation||0);
      return;
    }
    if(item.type==='rug'){
      drawRug(c,item);
      return;
    }
    const id=specs[item.id]?item.id:prototype[item.type];const spec=specs[id];
    const sprite=id&&sourceSprite(id,original,shell,false);
    if(!sprite||!spec){fallback(item);return;}
    const base=starter.items.find(i=>i.id===id)||{x:spec.box[0]+spec.box[2]/2,y:spec.box[1]+spec.box[3]/2,w:spec.box[2],h:spec.box[3]};
    const sx=item.w/base.w,sy=item.h/base.h;
    c.save();c.translate(item.x,item.y);c.rotate((item.rotation||0)*Math.PI/180);c.scale(sx,sy);
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
    // Source sprites already contain their natural contact shadow. Adding a
    // GPU canvas blur here caused colored edge corruption on the wall tablet.
    c.drawImage(sprite,spec.box[0]-base.x,spec.box[1]-base.y);
    c.restore();
  }
  const rugRecipes={
    classic:{w:207,h:142,pile:['#f4e8d0','#e5d3b1','#c7ae85'],edge:'#ad8e64'},
    'bedroom-floral':{w:254,h:240,pile:['#f9efd9','#e8d8b8','#cdb68f'],edge:'#ae9167'},
    'office-round':{w:82,h:78,pile:['#f9ecd1','#e5cda0','#b29164'],edge:'#a18154'}
  };
  function textilePattern(c){
    if(!textileTile){
      textileTile=makeCanvas(32,32);
      const tile=textileTile.getContext('2d');
      for(let y=0;y<16;y++)for(let x=0;x<8;x++){
        const thread=(x*13+y*7+x*y*3)%11;
        const left=x*4+(y%2)*2;
        tile.fillStyle=thread<4?'#61482525':'#fff6df45';
        tile.fillRect(left,y*2,1.5+thread*.19,.72);
        if(left>29)tile.fillRect(left-32,y*2,1.5+thread*.19,.72);
      }
    }
    return c.createPattern(textileTile,'repeat');
  }
  function drawRug(c,item){
    const style=Object.hasOwn(rugRecipes,item.rugStyle)?item.rugStyle:'classic';
    const {w,h,pile,edge}=rugRecipes[style];
    const round=style==='office-round';
    function outline(inset=0,dx=0,dy=0){
      c.beginPath();
      if(round)c.ellipse(dx,dy,w/2-inset,h/2-inset,0,0,Math.PI*2);
      else c.roundRect(-w/2+inset+dx,-h/2+inset+dy,w-2*inset,h-2*inset,Math.max(1,7-inset/3));
    }
    c.save();
    c.translate(item.x,item.y);
    c.rotate((item.rotation||0)*Math.PI/180);
    c.scale(item.w/w,item.h/h);
    // Low felt pile with a small contact shadow in the scene's light direction.
    outline(0,1.4,3.1);c.fillStyle='#49341c22';c.fill();
    outline(0,.7,1.6);c.fillStyle='#49341c2b';c.fill();
    outline();c.fillStyle=edge;c.fill();
    const dye=c.createLinearGradient(-w*.35,-h/2,w*.35,h/2);
    dye.addColorStop(0,pile[0]);dye.addColorStop(.48,pile[1]);dye.addColorStop(1,pile[2]);
    c.save();outline(1);c.clip();
    c.fillStyle=dye;c.fillRect(-w/2,-h/2,w,h);
    if(round)drawBraidedRug(c,w,h);
    else drawRectangularRug(c,w,h,style);
    c.fillStyle=textilePattern(c);c.fillRect(-w/2,-h/2,w,h);
    c.restore();
    outline(2);c.lineWidth=.8;c.strokeStyle='#fff5dd99';c.stroke();
    c.restore();
  }
  function drawRectangularRug(c,w,h,style){
    const x=-w/2,y=-h/2;
    for(const [inset,color,width] of [[4,'#fff5dc9e',3],[7.5,'#9e7e555e',1],[13,'#f8eaceb8',4],[16,'#9e7e5554',1]]){
      c.beginPath();c.roundRect(x+inset,y+inset,w-2*inset,h-2*inset,4);
      c.lineWidth=width;c.strokeStyle=color;c.stroke();
    }
    // A clipped tonal repeat keeps the field textured beneath the motifs.
    c.save();c.beginPath();c.roundRect(x+17,y+17,w-34,h-34,3);c.clip();
    c.beginPath();
    for(let row=-Math.ceil(h/22);row<=Math.ceil(h/22);row++){
      for(let col=-Math.ceil(w/36);col<=Math.ceil(w/36);col++){
        const cx=col*36+(row%2)*18,cy=row*14;
        c.moveTo(cx-8,cy);c.quadraticCurveTo(cx,cy-2,cx,cy-7);
        c.quadraticCurveTo(cx,cy-2,cx+8,cy);c.quadraticCurveTo(cx,cy+2,cx,cy+7);
        c.quadraticCurveTo(cx,cy+2,cx-8,cy);
      }
    }
    c.lineWidth=.78;c.strokeStyle=style==='classic'?'#8d6d423b':'#a2875e33';c.stroke();
    c.restore();
    if(style==='bedroom-floral'){
      for(const cx of [x+29,-x-29]){
        for(const cy of [y+30,0,-y-30])drawRugRosette(c,cx,cy);
      }
    }
  }
  function drawRugRosette(c,x,y){
    c.beginPath();c.arc(x,y,10,0,Math.PI*2);
    c.lineWidth=.75;c.strokeStyle='#9a754c73';c.stroke();
    for(let petal=0;petal<6;petal++){
      const angle=petal*Math.PI/3;
      c.beginPath();
      c.ellipse(x+Math.cos(angle)*4.9,y+Math.sin(angle)*4.9,3.15,1.65,angle,0,Math.PI*2);
      c.fillStyle=petal%2===0?'#a07b4b':'#bc9964';c.fill();
    }
    c.beginPath();c.arc(x,y,1.8,0,Math.PI*2);c.fillStyle='#f9e3a8';c.fill();
  }
  function drawBraidedRug(c,w,h){
    for(let inset=4;inset<h/2-3;inset+=2.55){
      const rx=w/2-inset,ry=h/2-inset;
      c.beginPath();c.ellipse(0,0,rx,ry,0,0,Math.PI*2);
      c.lineWidth=.72;c.strokeStyle=inset<10?'#87603989':'#8f663b62';c.stroke();
      c.beginPath();c.ellipse(0,-.36,rx-.55,ry-.55,0,0,Math.PI*2);
      c.lineWidth=.77;c.strokeStyle='#fff4d994';c.stroke();
      const stitches=Math.max(8,Math.round(rx*1.8));
      c.beginPath();
      for(let n=0;n<stitches;n++){
        const angle=(n+inset*.3)*Math.PI*2/stitches;
        c.moveTo(Math.cos(angle)*rx,Math.sin(angle)*ry);
        c.lineTo(Math.cos(angle+.032)*(rx-1.5),Math.sin(angle+.032)*(ry-1.5));
      }
      c.lineWidth=.52;c.strokeStyle='#895c315b';c.stroke();
    }
  }
  function repairExteriorOpenings(c,shell){
    // The old lavender unit extends above the cap. Reflect the narrow strip
    // of grass immediately above it so the original grain meets at the edge.
    const x=528, y=167, width=143, height=17;
    c.save();
    c.translate(0,2*y);
    c.scale(1,-1);
    c.drawImage(shell,x,y-height,width,height,x,y-height,width,height);
    c.restore();
    for(const [source,target] of exteriorOpeningRepairs)c.drawImage(shell,...source,...target);
  }
  function waitForImage(image,src){
    if(src&&!image.src)image.src=src;
    if(image.complete)return image.naturalWidth?Promise.resolve():Promise.reject(new Error(`Image asset failed to decode: ${src||image.src||'unknown'}`));
    return new Promise((resolve,reject)=>{
      image.addEventListener('load',()=>image.naturalWidth?resolve():reject(new Error(`Image asset decoded without pixels: ${src||image.src||'unknown'}`)),{once:true});
      image.addEventListener('error',()=>reject(new Error('Image asset could not load')),{once:true});
    });
  }
  function prepareExport(project,starter,images){
    const tasks=[waitForImage(images.original),waitForImage(images.shell),waitForImage(images.wallFree)];
    for(const id of ['terrazzo','sage'])if(project.rooms.some(r=>r.surface===id))tasks.push(waitForImage(extraTextures[id],assetUrl(`assets/${id}-tile.png`)));
    return Promise.all(tasks);
  }
  function draw(c,project,starter,images,fallback) {
    const {original,shell,wallFree}=images;
    if(!ready(original)||!ready(shell))return false;
    const currentWalls=new Map(project.walls.map(w=>[w.id,w]));
    const changedWalls=starter.walls.filter(base=>!sameWall(base,currentWalls.get(base.id)));
    if(changedWalls.length&&!ready(wallFree))return false;
    // The empty shell is the canonical background. Floors and walls are never
    // repaired with furniture-sized rectangles; every object is a separate
    // transparent layer above this seamless base.
    c.drawImage(shell,0,0,W,H);
    const baseById=new Map(starter.items.map(i=>[i.id,i]));
    const currentById=new Map(project.items.map(i=>[i.id,i]));
    repairChangedWalls(c,changedWalls,wallFree);
    const starterRooms=new Map(starter.rooms.map(r=>[r.id,r]));
    for(const room of project.rooms)if(!sameRoom(room,starterRooms.get(room.id)))paintRoom(c,room,starter,project,images);
    repairExteriorOpenings(c,shell);
    const layers=Engine.render.orderSceneItems(project.items,window.RoomcraftInventory?.byType);
    for(const item of layers.floorItems)drawItem(c,item,starter,original,shell,fallback);
    for(const item of layers.regularItems)drawItem(c,item,starter,original,shell,fallback);
    // Ceiling fixtures remain visible above movable furniture, independent of insertion order.
    for(const item of layers.ceilingItems)drawItem(c,item,starter,original,shell,fallback);
    for(const wall of project.walls){const base=starter.walls.find(w=>w.id===wall.id);if(!sameWall(wall,base))drawNewWall(c,wall);}
    for(const item of layers.windowItems)drawItem(c,item,starter,original,shell,fallback);
    return true;
  }
  window.RoomcraftRasterRenderer={draw,drawItem,ready,prepareExport};
})();
