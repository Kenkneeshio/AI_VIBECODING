/* Illustrated top-down art for editable scene objects. */
(() => {
  'use strict';
  const assetUrl = window.RoomcraftAssetUrl || (path => path);
  const supported=new Set(['sofa','table','chair','diningTable','diningChair','bed','desk','armchair','coffeeTable','sideTable','dresser','nightstand','bookcase','stool','lamp','ceilingLight','pendantLight','floorLamp','tableLamp','wallSconce','thermostat','presenceSwitch','humidifier','airPurifier','windowFan','garageDoor','garagePriusBlue','garageCeilingLight','floorPlant','artwork','mirror','window']);
  // These cells face the same near-top-down camera as the supplied plan.
  // Front-facing atlas pieces use the perspective-aware canvas art below.
  const atlas=new Image();
  const atlasRegions={
    armchair:[46,45,244,250],coffeeTable:[360,82,291,204],floorPlant:[1017,341,231,255]
  };
  atlas.addEventListener('load',()=>window.dispatchEvent(new Event('roomcraft-asset-loaded')));
  atlas.src=assetUrl('assets/illustrated-furniture-atlas.png');
  const babyAtlas=new Image();
  // This atlas was redrawn for the plan's near-overhead, orthographic camera.
  // Tight source rectangles keep adjacent sprites out of each editable piece.
  const babyRegions={
    mat:[24,40,296,270],wallPanels:[331,121,326,140],babyGate:[661,101,319,180],foamWedge:[994,50,283,230],
    foamSteps:[38,320,257,288],foamArch:[332,344,323,246],stackRings:[702,341,267,257],activityCube:[1008,326,257,287],
    playGym:[0,628,346,275],sensoryBall:[377,662,230,225],plushBear:[663,627,312,290],activityBoard:[1002,630,273,267],
    fireplace:[27,937,384,229],balconyPlants:[397,946,254,206],ceilingFan:[732,930,306,269],robotVacuum:[1061,947,217,236]
  };
  const overheadAtlasPieces=new Set([
    'mat','wallPanels','babyGate','foamWedge','foamSteps','foamArch','stackRings',
    'activityCube','playGym','sensoryBall','plushBear','activityBoard','robotVacuum'
  ]);
  babyAtlas.addEventListener('load',()=>window.dispatchEvent(new Event('roomcraft-asset-loaded')));
  babyAtlas.src=assetUrl('assets/baby-and-home-overhead-atlas.png');
  function drawBabyAtlas(c,o,template){
    if(!overheadAtlasPieces.has(template.atlas))return false;
    const region=babyRegions[template.atlas];
    if(!region||!babyAtlas.complete||!babyAtlas.naturalWidth)return false;
    const [sx,sy,sw,sh]=region;
    // Narrow wall-mounted pieces need their full canvas footprint. A square
    // atlas icon fitted inside one would become a tiny spot on the plan.
    const ratio=(o.w/o.h)/(sw/sh);
    if(ratio>1.65||ratio<1/1.65)return false;
    const scale=Math.min(o.w/sw,o.h/sh)*.98;
    const dw=sw*scale,dh=sh*scale;
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
    c.drawImage(babyAtlas,sx,sy,sw,sh,-dw/2,-dh/2,dw,dh);
    c.restore();return true;
  }
  function drawAtlas(c,o){
    const region=atlasRegions[o.type];
    if(!region||!atlas.complete||!atlas.naturalWidth)return false;
    const [sx,sy,sw,sh]=region,scale=Math.min(o.w/sw,o.h/sh);
    const dw=sw*scale,dh=sh*scale;
    worldContact(c,o);
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
    c.drawImage(atlas,sx,sy,sw,sh,-dw/2,-dh/2,dw,dh);
    c.restore();return true;
  }
  function rr(c,x,y,w,h,r,fill,stroke,width=1){c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
  function disc(c,x,y,r,fill,stroke,width=1){c.beginPath();c.arc(x,y,r,0,Math.PI*2);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
  function oval(c,x,y,rx,ry,fill,stroke,width=1){c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}}
  function gradient(c,x,y,w,h,colors){const g=c.createLinearGradient(x,y,x+w*.28,y+h);for(const [stop,color] of colors)g.addColorStop(stop,color);return g;}
  function raisedCase(c,x,y,w,h,r=8,depth=7,color='#735a46'){
    // Android WebView occasionally rasterizes canvas shadowBlur as hard black
    // bars with a stray magenta/green edge pixel. Layered translucent shapes
    // give the same soft-looking depth and export identically on every GPU.
    rr(c,x+4,y+depth+5,w-4,h,r,'rgba(31,43,37,.10)');
    rr(c,x+3,y+depth+2,w-3,h,r,'rgba(31,43,37,.16)');
    rr(c,x+2,y+depth,w-2,h,r,color);
    c.fillStyle='#302b2530';c.beginPath();c.moveTo(x+w-3,y+h*.2);c.lineTo(x+w+1,y+h*.2+depth);c.lineTo(x+w+1,y+h-depth);c.lineTo(x+w-3,y+h-depth);c.closePath();c.fill();
  }
  function stitch(c,x,y,w,h,r=8){c.save();c.strokeStyle='#fff9e65e';c.lineWidth=1;c.setLineDash([2.3,3.8]);c.beginPath();c.roundRect(x,y,w,h,r);c.stroke();c.restore();}
  function wood(c,x,y,w,h){
    const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#d29865');g.addColorStop(.5,'#a76c47');g.addColorStop(1,'#815032');rr(c,x,y,w,h,5,g,'#6f4935',1.4);
    c.save();c.beginPath();c.roundRect(x+3,y+3,w-6,h-6,4);c.clip();for(let i=1;i<8;i++){const yy=y+(i/8)*h;c.beginPath();c.moveTo(x+5,yy);c.bezierCurveTo(x+w*.35,yy+((i%3)-1)*3,x+w*.67,yy-2,x+w-5,yy+1);c.strokeStyle=i%2?'#f8cf9c55':'#5f382d45';c.lineWidth=i%2?1.3:1;c.stroke();}c.restore();
  }
  function glow(c,r){const g=c.createRadialGradient(0,0,r*.1,0,0,r);g.addColorStop(0,'#fff5beaa');g.addColorStop(.47,'#ffdb8238');g.addColorStop(1,'#ffdc7600');disc(c,0,0,r,g);}
  function leaf(c,x,y,rx,ry,angle,color){c.save();c.translate(x,y);c.rotate(angle);oval(c,0,0,rx,ry,color,'#2b5e4077',.7);c.beginPath();c.moveTo(0,-ry*.7);c.lineTo(0,ry*.65);c.strokeStyle='#d2e8a56e';c.lineWidth=.8;c.stroke();c.restore();}
  function poly(c,points,fill,stroke,width=1){
    c.beginPath();c.moveTo(points[0][0],points[0][1]);
    for(const [x,y] of points.slice(1))c.lineTo(x,y);
    c.closePath();if(fill){c.fillStyle=fill;c.fill();}
    if(stroke){c.strokeStyle=stroke;c.lineWidth=width;c.stroke();}
  }
  function topGradient(c,x,y,w,h,p){
    return gradient(c,x,y,w,h,[[0,p.detail],[.35,p.base],[1,p.accent]]);
  }
  function contact(c,x,y,w,h,r=8){
    rr(c,x,y+3,w,h,r,'rgba(39,38,32,.14)');
  }
  function worldContact(c,o){
    const angle=(((o.rotation||0)%180)+180)%180;
    const sideways=angle>45&&angle<135;
    const w=sideways?o.h:o.w,h=sideways?o.w:o.h;
    c.save();c.translate(o.x+3,o.y+6);
    oval(c,2,3,w*.43,h*.43,'rgba(39,38,32,.055)');
    oval(c,0,0,w*.40,h*.40,'rgba(39,38,32,.09)');c.restore();
  }
  function cushion(c,x,y,w,h,r,p){
    contact(c,x,y,w,h,r);rr(c,x+2,y+6,w,h,r,p.dark);
    rr(c,x,y,w,h,r,topGradient(c,x,y,w,h,p),p.dark,1.5);
    rr(c,x+4,y+4,w-8,h-9,Math.max(3,r-2),null,'rgba(255,255,255,.55)',1.1);
    stitch(c,x+7,y+7,w-14,h-15,Math.max(3,r-3));
  }
  function woodenTop(c,x,y,w,h,p,depth=6){
    contact(c,x,y,w,h,5);rr(c,x+2,y+depth,w-3,h,5,p.dark);
    rr(c,x,y,w,h,5,topGradient(c,x,y,w,h,p),p.dark,1.7);
    c.save();c.beginPath();c.roundRect(x+3,y+3,w-6,h-6,3);c.clip();
    c.strokeStyle='rgba(90,52,30,.22)';c.lineWidth=1;
    for(let i=1;i<7;i++){const yy=y+i*h/7;c.beginPath();c.moveTo(x+3,yy);c.bezierCurveTo(x+w*.36,yy-2,x+w*.67,yy+2,x+w-3,yy);c.stroke();}
    c.restore();c.strokeStyle='rgba(255,246,220,.52)';c.lineWidth=1.3;c.beginPath();c.moveTo(x+5,y+3);c.lineTo(x+w-6,y+3);c.stroke();
  }
  function plantLeaves(c,cx,cy,scale,p,count=9){
    for(let i=0;i<count;i++){
      const a=i*2.399,rad=scale*(.24+(i%3)*.16);
      leaf(c,cx+Math.cos(a)*rad,cy+Math.sin(a)*rad,scale*.25,scale*.39,a-.7,
        [p.base,p.accent,p.detail,'#547d4c'][i%4]);
    }
    disc(c,cx,cy,scale*.13,p.detail);
  }
  function star(c,x,y,outer,inner,fill,stroke,width=1,points=5){
    const vertices=[];
    for(let i=0;i<points*2;i++){
      const angle=-Math.PI/2+i*Math.PI/points,r=i%2?inner:outer;
      vertices.push([x+Math.cos(angle)*r,y+Math.sin(angle)*r]);
    }
    poly(c,vertices,fill,stroke,width);
  }
  function friendlyMark(c,x,y,scale,dark){
    disc(c,x-scale*.24,y-scale*.06,Math.max(.8,scale*.075),dark);
    disc(c,x+scale*.24,y-scale*.06,Math.max(.8,scale*.075),dark);
    c.beginPath();c.arc(x,y+scale*.04,scale*.19,.18,Math.PI-.18);
    c.strokeStyle=dark;c.lineWidth=Math.max(.7,scale*.055);c.stroke();
  }
  function clippedTexture(c,x,y,w,h,r,kind='fabric'){
    c.save();c.beginPath();c.roundRect(x,y,w,h,r);c.clip();
    const step=Math.max(3,Math.min(w,h)/11);
    if(kind==='fabric'){
      c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=.65;
      for(let xx=x-w;xx<x+w*2;xx+=step){c.beginPath();c.moveTo(xx,y);c.lineTo(xx+h,y+h);c.stroke();}
      c.strokeStyle='rgba(54,45,40,.10)';c.lineWidth=.55;
      for(let yy=y;yy<y+h;yy+=step){c.beginPath();c.moveTo(x,yy);c.lineTo(x+w,yy+step*.22);c.stroke();}
    }else if(kind==='wood'){
      c.strokeStyle='rgba(83,48,28,.19)';c.lineWidth=.8;
      for(let i=1;i<9;i++){
        const yy=y+i*h/9;c.beginPath();c.moveTo(x-3,yy);
        c.bezierCurveTo(x+w*.28,yy+(i%3-1)*2.3,x+w*.66,yy-(i%2)*1.8,x+w+3,yy+1);c.stroke();
      }
      c.strokeStyle='rgba(255,236,203,.22)';c.lineWidth=.55;
      for(let i=1;i<5;i++){const xx=x+i*w/5;c.beginPath();c.moveTo(xx,y);c.lineTo(xx+w*.018,y+h);c.stroke();}
      if(w>42&&h>18){oval(c,x+w*.31,y+h*.38,Math.max(2,w*.035),Math.max(1,h*.045),null,'rgba(82,48,31,.24)',.7);oval(c,x+w*.74,y+h*.66,Math.max(1.5,w*.027),Math.max(.8,h*.035),null,'rgba(255,224,184,.24)',.6);}
    }else if(kind==='linen'){
      c.strokeStyle='rgba(106,92,75,.16)';c.lineWidth=.55;
      for(let xx=x;xx<x+w;xx+=step*.7){c.beginPath();c.moveTo(xx,y);c.lineTo(xx,y+h);c.stroke();}
      for(let yy=y;yy<y+h;yy+=step*.7){c.beginPath();c.moveTo(x,yy);c.lineTo(x+w,yy);c.stroke();}
    }
    c.restore();
  }
  function fabricPanel(c,x,y,w,h,r,p,options={}){
    const depth=options.depth??4;
    const g=c.createLinearGradient(x,y,x+w*.16,y+h);
    g.addColorStop(0,p.detail);g.addColorStop(.28,p.accent);g.addColorStop(.72,p.base);g.addColorStop(1,p.dark);
    rr(c,x+2,y+depth+3,w,h,r,'rgba(43,39,35,.17)');
    rr(c,x+1,y+depth,w,h,r,p.dark);
    rr(c,x,y,w,h,r,g,p.dark,Math.max(.7,Math.min(w,h)*.018));
    clippedTexture(c,x+2,y+2,w-4,h-4,Math.max(1,r-2),'fabric');
    c.strokeStyle='rgba(255,255,255,.56)';c.lineWidth=Math.max(.7,Math.min(w,h)*.014);
    c.beginPath();c.moveTo(x+r,y+2);c.quadraticCurveTo(x+w*.5,y-1,x+w-r,y+2);c.stroke();
    if(options.piping!==false){c.strokeStyle='rgba(255,247,232,.53)';c.lineWidth=Math.max(.65,Math.min(w,h)*.012);c.beginPath();c.roundRect(x+3,y+3,w-6,h-6,Math.max(2,r-3));c.stroke();}
    if(options.tufts){
      for(const [tx,ty] of options.tufts){disc(c,x+w*tx+1,y+h*ty+1,Math.max(1,Math.min(w,h)*.025),'rgba(58,48,43,.25)');disc(c,x+w*tx,y+h*ty,Math.max(.7,Math.min(w,h)*.018),p.dark);}
    }
  }
  function woodPanel(c,x,y,w,h,r,p,depth=5){
    rr(c,x+3,y+depth+3,w-3,h,r,'rgba(54,43,34,.15)');rr(c,x+2,y+depth,w-2,h,r,p.dark);
    const g=c.createLinearGradient(x,y,x+w*.24,y+h);g.addColorStop(0,p.detail);g.addColorStop(.24,p.accent);g.addColorStop(.62,p.base);g.addColorStop(1,p.dark);
    rr(c,x,y,w,h,r,g,p.dark,Math.max(.8,Math.min(w,h)*.02));
    clippedTexture(c,x+2,y+2,w-4,h-4,Math.max(1,r-2),'wood');
    c.strokeStyle='rgba(255,238,208,.52)';c.lineWidth=Math.max(.7,Math.min(w,h)*.014);c.beginPath();c.moveTo(x+r,y+2);c.lineTo(x+w-r,y+2);c.stroke();
  }
  function brass(c,x,y,w,h,r=2){
    const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#fff1bd');g.addColorStop(.22,'#d6b361');g.addColorStop(.58,'#8c6b35');g.addColorStop(.82,'#e8cb7a');g.addColorStop(1,'#6e522c');rr(c,x,y,w,h,r,g,'#67502f',Math.max(.45,Math.min(w,h)*.035));
  }
  const utilityOak = { base:'#a97149', accent:'#cb9462', detail:'#ebbb88', dark:'#694633' };
  const utilityWalnut = { base:'#955c43', accent:'#b37a5a', detail:'#dba17b', dark:'#5c382d' };

  function drawKitchenWorktop(c){
    // Worktop and inset hob occupy one editable footprint.
    woodPanel(c,-50,-60,100,114,4,utilityOak,5);
    const stone=gradient(c,-46,-57,92,110,[[0,'#fff7e9'],[.45,'#ebdbbd'],[1,'#c9b28e']]);
    rr(c,-46,-57,92,108,3,stone,'#aa9272',.8);
    const stoneVeins=[
      [-39,-39,-19,-41,4,-49,34,-47],
      [-41,-22,-14,-24,10,-36,37,-32],
      [-35,-8,-12,-10,20,-21,40,-20]
    ];
    c.strokeStyle='#a8906e55';c.lineWidth=.7;
    for(const [x,y,cx1,cy1,cx2,cy2,endX,endY] of stoneVeins){
      c.beginPath();c.moveTo(x,y);c.bezierCurveTo(cx1,cy1,cx2,cy2,endX,endY);c.stroke();
    }
    const glass=gradient(c,-36,1,72,47,[[0,'#495054'],[.32,'#303639'],[1,'#191e20']]);
    rr(c,-37,0,74,48,4,glass,'#171e20',1);
    rr(c,-35,2,70,44,3,null,'#d5dbd463',.7);
    for(const [x,y,r] of [[-20,13,8],[17,13,7],[-19,33,8],[18,33,9]]){
      const iron=gradient(c,x-r,y-r,r*2,r*2,[[0,'#626669'],[.5,'#373c3e'],[1,'#24282a']]);
      disc(c,x,y,r,iron,'#838788',.75);
      disc(c,x,y,r*.63,null,'#c4c7c063',.6);
    }
    for(const y of [12,20,28,36])disc(c,31,y,1.15,'#a9b0ab','#202829',.5);
    brass(c,-13,53,26,2.2,1);
  }

  function porcelainBowl(c,x,y,w,h){
    const ceramic=gradient(c,x,y,w,h,[[0,'#fffdf9'],[.5,'#f4eee6'],[1,'#d5c8b9']]);
    const basin=gradient(c,x,y,w,h,[[0,'#b8c0be'],[.5,'#d5dedb'],[1,'#f3f2e9']]);
    rr(c,x,y+2,w,h,Math.min(w,h)*.24,'#93877a60');
    rr(c,x,y,w,h,Math.min(w,h)*.24,ceramic,'#a99b8d',.8);
    rr(c,x+w*.14,y+h*.15,w*.68,h*.7,Math.min(w,h)*.18,basin,'#acaea6',.7);
    disc(c,x+w*.46,y+h*.55,Math.min(w,h)*.055,'#797c76','#d3d6ce',.5);
  }

  function chromeTap(c,x,y,length){
    const chrome=gradient(c,x-2,y,4,length,[[0,'#f8fcfa'],[.42,'#bfc7c4'],[.68,'#67716f'],[1,'#d7ddda']]);
    disc(c,x,y,3,'#adb5b0','#777e79',.65);
    rr(c,x-1.6,y-1,3.2,length,1.6,chrome,'#777e79',.45);
  }

  function drawBathFixtures(c){
    // Both pieces face away from the east wall, with a clear floor gap between them.
    for(const [y,hasTap] of [[-28,true],[24,false]]){
      c.save();c.translate(0,y);c.rotate(Math.PI/2);
      if(hasTap){
        porcelainBowl(c,-18,-24,36,51);
        chromeTap(c,0,-17,11);
      }else{
        const seat=gradient(c,-17,-10,34,50,[[0,'#fffdfa'],[.56,'#f3eee7'],[1,'#cfc5ba']]);
        oval(c,1,14,17.5,22,'#55463736');
        oval(c,0,11,17.5,22,seat,'#a79d92',.8);
        oval(c,-.3,11,13.4,17.7,null,'#ccc3b8',.8);
        rr(c,-21,-30,42,19,4,seat,'#aa9f94',.75);
        rr(c,-17,-27,34,1.4,.7,'#ffffffa0');
        disc(c,13,-22,1.85,'#adb6b0','#777f79',.5);
      }
      c.restore();
    }
  }

  function drawDoubleVanity(c){
    woodPanel(c,-97,-19,194,31,3,utilityOak,5);
    const stone=gradient(c,-97,-19,194,31,[[0,'#fffaf2'],[.5,'#ebe4d9'],[1,'#bdb4a6']]);
    rr(c,-97,-19,194,31,3,stone,'#a59d90',.9);
    for(const x of [-55,55]){
      c.save();c.translate(x,-2);c.rotate(Math.PI);
      porcelainBowl(c,-30,-12,60,25);
      chromeTap(c,0,-9,10);
      c.restore();
    }
    rr(c,-15,-15,30,23,2,utilityOak.accent,utilityOak.dark,.65);
    clippedTexture(c,-13,-13,26,19,1,'wood');
    for(const x of [-55,0,55])brass(c,x-6,13,12,2.3,1);
  }

  function drawReferenceCabinet(c){
    woodPanel(c,-33,-42,66,76,5,utilityWalnut,5);
    rr(c,-28,-37,56,65,3,null,'#55392f90',1);
    rr(c,-25,-34,50,59,2,null,'#f4c19d55',.75);
    brass(c,-12,33,24,3,1.4);
  }

  function drawReferenceBench(c){
    woodPanel(c,-23,-56,46,106,5,utilityWalnut,5);
    const leather={ base:'#a36b56', accent:'#c18a6d', detail:'#dbaa8a', dark:'#794c41' };
    fabricPanel(c,-18,-50,36,94,5,leather,{depth:2,piping:true});
    for(const x of [-16,11])taperedLeg(c,x,48,5,7,utilityWalnut.dark);
  }

  function drawWallUnit(c){
    rr(c,-66,-11,136,31,5,'#27222b44');
    rr(c,-66,-14,132,29,5,'#665e73','#514a60',.9);
    const housing=gradient(c,-66,-19,132,30,[[0,'#eee8f4'],[.46,'#cec2de'],[1,'#a798bb']]);
    rr(c,-66,-19,132,27,5,housing,'#7b7089',.8);
    rr(c,-58,-15,116,1.2,.6,'#fff8ffa0');
    rr(c,-55,2,110,9,2.5,'#554d62','#786e85',.8);
    for(const y of [4,6.2,8.4])rr(c,-51,y,102,.7,.35,'#b2a6be');
    rr(c,-62,-9,1,11,.5,'#a89ab6');
    rr(c,61,-9,1,11,.5,'#9587a3');
  }

  // Recipes are authored in the catalog's reference footprint, then scaled
  // to the placed object so resize and rotation preserve its construction.
  const referenceFixtures = {
    kitchenWorktop:[106,127,drawKitchenWorktop],
    bathFixtures:[73,117,drawBathFixtures],
    doubleVanity:[202,44,drawDoubleVanity],
    storageCabinet:[75,92,drawReferenceCabinet],
    bedroomBench:[52,122,drawReferenceBench],
    wallUnit:[139,43,drawWallUnit]
  };
  function furnitureFoot(c,x,y,w,h,r=8){
    rr(c,x+5,y+8,w,h,r,'rgba(31,35,32,.08)');rr(c,x+3,y+5,w,h,r,'rgba(31,35,32,.14)');
  }
  function taperedLeg(c,x,y,w,h,color='#66503f'){
    poly(c,[[x,y],[x+w,y],[x+w*.75,y+h],[x+w*.22,y+h]],color,'rgba(53,42,35,.6)',.6);c.strokeStyle='rgba(255,232,197,.35)';c.lineWidth=.55;c.beginPath();c.moveTo(x+w*.2,y+1);c.lineTo(x+w*.3,y+h-1);c.stroke();
  }
  function pillow(c,x,y,w,h,p,angle=0){
    c.save();c.translate(x+w/2,y+h/2);c.rotate(angle);fabricPanel(c,-w/2,-h/2,w,h,Math.min(w,h)*.3,{...p,base:p.detail,accent:p.accent},{depth:2,piping:true});
    c.strokeStyle='rgba(107,91,86,.28)';c.lineWidth=.7;c.beginPath();c.moveTo(-w*.31,0);c.quadraticCurveTo(0,h*.09,w*.31,0);c.stroke();c.restore();
  }
  function quiltPanel(c,x,y,w,h,p){
    fabricPanel(c,x,y,w,h,Math.min(10,Math.min(w,h)*.13),p,{depth:3,piping:true});
    c.save();c.beginPath();c.roundRect(x+3,y+3,w-6,h-6,Math.min(8,Math.min(w,h)*.11));c.clip();
    c.strokeStyle='rgba(255,250,237,.38)';c.lineWidth=.75;
    for(let xx=x+w*.2;xx<x+w;xx+=w*.2){c.beginPath();c.moveTo(xx,y+3);c.quadraticCurveTo(xx-2,y+h*.5,xx,y+h-3);c.stroke();}
    for(let yy=y+h*.25;yy<y+h;yy+=h*.25){c.beginPath();c.moveTo(x+3,yy);c.quadraticCurveTo(x+w*.5,yy+2,x+w-3,yy);c.stroke();}
    c.restore();
  }
  function chairTop(c,cx,cy,w,h,angle,p){
    c.save();c.translate(cx,cy);c.rotate(angle);furnitureFoot(c,-w/2,-h/2,w,h,Math.min(7,w*.2));
    for(const lx of [-w*.34,w*.24])taperedLeg(c,lx,-h*.02,w*.1,h*.45,p.dark);
    fabricPanel(c,-w*.39,-h*.13,w*.78,h*.58,Math.min(7,w*.2),{...p,base:p.accent},{depth:3,piping:true});
    fabricPanel(c,-w*.44,-h*.49,w*.88,h*.3,Math.min(6,w*.17),p,{depth:2,piping:true});c.restore();
  }
  function drawBed(c,o,t,p){
    const w=o.w,h=o.h,x=-w/2,y=-h/2,f=t.form;
    if(f==='daybed'){
      furnitureFoot(c,x+2,y+3,w-4,h-8,14);woodPanel(c,x+2,y+8,w-4,h-16,12,p,6);
      fabricPanel(c,x+7,y+12,w-14,h-24,12,{...p,base:p.detail},{depth:3,piping:true});
      fabricPanel(c,x+8,y+5,w-16,h*.27,10,p,{depth:3,piping:true,tufts:[[.17,.5],[.5,.5],[.83,.5]]});
      pillow(c,x+12,y+h*.28,w*.2,h*.45,p,-.12);pillow(c,x+w*.68,y+h*.28,w*.2,h*.45,p,.12);
      for(const px of [x+5,x+w-9])taperedLeg(c,px,y+h-12,5,11,p.dark);return true;
    }
    if(f==='cribBed'){
      furnitureFoot(c,x+3,y+3,w-6,h-9,9);woodPanel(c,x+4,y+4,w-8,h-8,8,p,5);
      rr(c,x+w*.16,y+h*.12,w*.68,h*.72,7,'#fffaf0',p.dark,1);quiltPanel(c,x+w*.19,y+h*.2,w*.62,h*.54,{...p,base:p.accent});
      for(const sideX of [x+7,x+w-12]){
        rr(c,sideX,y+7,5,h-14,2,p.dark);for(let yy=y+15;yy<y+h-12;yy+=Math.max(9,h*.09))rr(c,sideX+1,yy,3,5,1,p.accent);
      }
      for(const yy of [y+8,y+h-13]){rr(c,x+6,yy,w-12,5,2,p.dark);for(let xx=x+14;xx<x+w-10;xx+=Math.max(9,w*.12))rr(c,xx,yy+1,3,4,1,p.accent);}
      for(const [px,py] of [[x+8,y+9],[x+w-8,y+9],[x+8,y+h-9],[x+w-8,y+h-9]])disc(c,px,py,3,p.detail,p.dark,.7);return true;
    }
    if(f==='bunkBed'){
      furnitureFoot(c,x+3,y+3,w-6,h-8,8);woodPanel(c,x+4,y+5,w-8,h-10,7,p,6);
      rr(c,x+w*.12,y+h*.11,w*.66,h*.69,6,'#fffaf0',p.dark,1);quiltPanel(c,x+w*.16,y+h*.2,w*.58,h*.48,{...p,base:p.accent});
      rr(c,x+w*.78,y+h*.09,w*.1,h*.74,3,p.dark);for(let yy=y+h*.18;yy<y+h*.75;yy+=h*.11)rr(c,x+w*.79,yy,w*.08,3,1,p.detail);
      for(const xx of [x+w*.08,x+w*.88])rr(c,xx,y+3,w*.06,h-6,2,p.dark);
      rr(c,x+w*.1,y+h*.08,w*.7,5,2,p.accent);rr(c,x+w*.1,y+h*.76,w*.7,5,2,p.accent);
      c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1;c.beginPath();c.moveTo(x+w*.17,y+h*.16);c.lineTo(x+w*.69,y+h*.16);c.stroke();return true;
    }
    furnitureFoot(c,x+3,y+4,w-6,h-10,12);
    const wooden=['platformBed','storageBed','canopyBed'].includes(f);
    if(wooden)woodPanel(c,x+3,y+5,w-6,h-12,10,p,7);else fabricPanel(c,x+3,y+5,w-6,h-12,12,p,{depth:6,piping:true});
    const headH=Math.max(25,h*.17),mx=x+w*.075,my=y+headH*.68,mw=w*.85,mh=h-headH*.83-12;
    if(f==='upholsteredBed'||f==='moonBed'){
      fabricPanel(c,x+w*.055,y+3,w*.89,headH,Math.min(17,w*.09),p,{depth:5,piping:true,tufts:[[.18,.48],[.38,.38],[.62,.38],[.82,.48]]});
    }else{
      woodPanel(c,x+w*.055,y+3,w*.89,headH,Math.min(9,w*.05),p,5);
      c.strokeStyle='rgba(84,53,34,.35)';c.lineWidth=1;for(let xx=x+w*.2;xx<x+w*.88;xx+=w*.17){c.beginPath();c.moveTo(xx,y+7);c.lineTo(xx,y+headH-4);c.stroke();}
    }
    rr(c,mx,my,mw,mh,Math.min(12,w*.055),'#fffaf0',p.dark,1.1);
    rr(c,mx+4,my+4,mw-8,mh-8,Math.min(9,w*.045),gradient(c,mx,my,mw,mh,[[0,'#fffdf5'],[.5,'#eee7d8'],[1,'#d8ccba']]),'rgba(109,91,74,.38)',.8);
    const pillows=w<145?1:2,pw=pillows===1?mw*.46:mw*.36;
    for(let i=0;i<pillows;i++)pillow(c,mx+mw*(pillows===1 ? .27 : .1+i*.44),my+mh*.06,pw,mh*.19,{...p,base:p.detail},i?-.035:.035);
    quiltPanel(c,mx+mw*.035,my+mh*.29,mw*.93,mh*.62,{...p,base:p.base,accent:p.accent});
    c.strokeStyle='rgba(255,255,255,.43)';c.lineWidth=Math.max(.8,w*.006);for(const xx of [mx+mw*.28,mx+mw*.5,mx+mw*.72]){c.beginPath();c.moveTo(xx,my+mh*.34);c.quadraticCurveTo(xx-3,my+mh*.65,xx,my+mh*.86);c.stroke();}
    if(f==='moonBed'){
      c.save();c.globalAlpha=.72;disc(c,mx+mw*.67,my+mh*.57,Math.min(w,h)*.065,'#f4d98c');disc(c,mx+mw*.7,my+mh*.54,Math.min(w,h)*.06,p.base);star(c,mx+mw*.34,my+mh*.61,Math.min(w,h)*.035,Math.min(w,h)*.015,p.detail,p.dark,.45);c.restore();
    }
    if(f==='storageBed'){
      const dw=(w-24)/3;for(let i=0;i<3;i++){rr(c,x+9+i*dw,y+h-25,dw-3,14,3,p.accent,p.dark,.7);brass(c,x+9+i*dw+dw*.42,y+h-19,Math.max(4,dw*.16),2,1);}
    }
    if(f==='canopyBed'){
      for(const [px,py] of [[x+5,y+5],[x+w-10,y+5],[x+5,y+h-13],[x+w-10,y+h-13]]){brass(c,px,py,5,10,2);disc(c,px+2.5,py,3,'#f8dd9b','#735a35',.6);}
      c.strokeStyle='#9d7c46';c.lineWidth=Math.max(1.1,w*.008);c.beginPath();c.moveTo(x+8,y+8);c.lineTo(x+w-8,y+8);c.lineTo(x+w-8,y+h-8);c.moveTo(x+8,y+8);c.lineTo(x+8,y+h-8);c.stroke();
    }
    return true;
  }
  function drawSofa(c,o,t,p){
    let w=o.w,h=o.h,f=t.form;
    if(f==='cloudSofa'&&h>w){
      c.save();
      c.rotate(o.type==='sofa'?-Math.PI/2:Math.PI/2);
      const done=drawSofa(c,{...o,w:h,h:w},t,p);
      c.restore();
      return done;
    }
    const x=-w/2,y=-h/2;
    if(f==='chaiseSofa'){
      furnitureFoot(c,x+4,y+4,w-8,h-10,16);fabricPanel(c,x+4,y+6,w-8,h-14,16,p,{depth:6,piping:true});
      fabricPanel(c,x+11,y+h*.25,w-22,h*.61,13,{...p,base:p.detail},{depth:3,piping:true});
      fabricPanel(c,x+8,y+8,w-16,h*.25,12,p,{depth:3,piping:true,tufts:[[.25,.55],[.5,.45],[.75,.55]]});
      for(const px of [x+10,x+w-15])taperedLeg(c,px,y+h-14,5,11,p.dark);return true;
    }
    if(f==='tailoredSofa'||f==='tailoredLoveseat'){
      furnitureFoot(c,x+3,y+5,w-6,h-12,15);fabricPanel(c,x+3,y+5,w-6,h-13,15,p,{depth:6,piping:true});
      const arm=Math.max(12,w*.09);fabricPanel(c,x+5,y+h*.33,arm,h*.5,8,{...p,base:p.accent},{depth:3,piping:true});fabricPanel(c,x+w-arm-5,y+h*.33,arm,h*.5,8,{...p,base:p.accent},{depth:3,piping:true});
      const seats=f==='tailoredLoveseat'?2:3,innerW=w-arm*2-18,seatW=innerW/seats;
      for(let i=0;i<seats;i++){
        fabricPanel(c,x+arm+9+i*seatW,y+h*.47,seatW-3,h*.32,7,{...p,base:p.detail},{depth:3,piping:true});
        fabricPanel(c,x+arm+9+i*seatW,y+10,seatW-3,h*.37,7,p,{depth:2,piping:true,tufts:[[.5,.52]]});
      }
      for(const px of [x+12,x+w-17])taperedLeg(c,px,y+h-14,5,11,p.dark);return true;
    }
    // Sectional: separate carcass, back cushions, chaise and feet establish a
    // plausible miniature construction instead of a cloud-shaped sticker.
    const mainH=h*.68,chaiseW=w*.37,arm=Math.max(10,w*.075);
    furnitureFoot(c,x+3,y+4,w-7,mainH,16);furnitureFoot(c,x+3,y+mainH*.52,chaiseW,h-mainH*.25,15);
    fabricPanel(c,x+3,y+5,w-7,mainH-8,16,p,{depth:6,piping:true});fabricPanel(c,x+3,y+mainH*.5,chaiseW,h-mainH*.5-7,14,p,{depth:6,piping:true});
    fabricPanel(c,x+7,y+9,w-14,mainH*.34,11,p,{depth:2,piping:true,tufts:[[.18,.52],[.5,.44],[.82,.52]]});
    const seatY=y+mainH*.43,seatH=mainH*.39,seatW=(w-arm*2-14)/3;
    for(let i=0;i<3;i++)fabricPanel(c,x+arm+7+i*seatW,seatY,seatW-3,seatH,8,{...p,base:p.detail},{depth:3,piping:true});
    fabricPanel(c,x+8,y+mainH*.62,chaiseW-16,h-mainH*.7-10,10,{...p,base:p.detail},{depth:3,piping:true});
    fabricPanel(c,x+5,y+mainH*.37,arm,mainH*.45,8,{...p,base:p.accent},{depth:3,piping:true});fabricPanel(c,x+w-arm-5,y+mainH*.37,arm,mainH*.45,8,{...p,base:p.accent},{depth:3,piping:true});
    for(const [px,py] of [[x+10,y+mainH-10],[x+w-15,y+mainH-10],[x+10,y+h-14],[x+chaiseW-15,y+h-14]])taperedLeg(c,px,py,5,11,p.dark);
    pillow(c,x+w*.62,y+mainH*.42,w*.15,mainH*.28,{...p,base:p.accent},-.15);return true;
  }
  function drawDining(c,o,t,p){
    const w=o.w,h=o.h,f=t.form,round=f==='roundDining',six=f==='rectDining',legacy=o.type==='table';
    const cw=Math.max(19,Math.min(w,h)*(legacy ? .24 : six ? .16 : .19)),ch=cw*.92;
    const chairs=six?[
      [-w*.29,-h*.39,0],[0,-h*.39,0],[w*.29,-h*.39,0],[-w*.29,h*.39,Math.PI],[0,h*.39,Math.PI],[w*.29,h*.39,Math.PI]
    ]:[[-w*.28,-h*.38,0],[w*.28,-h*.38,0],[-w*.28,h*.38,Math.PI],[w*.28,h*.38,Math.PI]];
    if(round){chairs.splice(0,chairs.length,[0,-h*.43,0],[w*.43,0,Math.PI/2],[0,h*.43,Math.PI],[-w*.43,0,-Math.PI/2]);}
    if(legacy){chairs.splice(0,chairs.length,[0,-h*.39,0],[w*.42,0,Math.PI/2],[0,h*.39,Math.PI],[-w*.42,0,-Math.PI/2]);}
    const chairPalette=legacy?{...p,base:'#58637b',accent:'#737e95',dark:'#4e4051'}:p;
    for(const [cx,cy,a] of chairs)chairTop(c,cx,cy,cw,ch,a,chairPalette);
    if(round){
      oval(c,3,7,w*.3,h*.3,'rgba(47,39,31,.18)');disc(c,0,3,Math.min(w,h)*.15,p.dark);brass(c,-3,-3,6,h*.22,2);
      const g=c.createRadialGradient(-w*.12,-h*.12,2,0,0,Math.min(w,h)*.31);g.addColorStop(0,p.detail);g.addColorStop(.45,p.accent);g.addColorStop(1,p.dark);disc(c,0,0,Math.min(w,h)*.29,g,p.dark,1.6);clippedTexture(c,-w*.28,-h*.28,w*.56,h*.56,w*.28,'wood');
    }else{
      const tw=w*(legacy ? .75 : six ? .69 : .54),th=h*(legacy ? .56 : six ? .52 : .48);
      woodPanel(c,-tw/2,-th/2,tw,th,Math.min(13,th*.22),p,7);
      for(const lx of [-tw*.34,tw*.28])for(const ly of [-th*.3,th*.22])taperedLeg(c,lx,ly,tw*.07,th*.36,p.dark);
      c.strokeStyle='rgba(92,56,34,.28)';c.lineWidth=1;c.beginPath();c.moveTo(-tw*.18,-th*.45);c.lineTo(-tw*.18,th*.45);c.moveTo(tw*.18,-th*.45);c.lineTo(tw*.18,th*.45);c.stroke();
      if(legacy)rr(c,-tw*.41,-th*.12,tw*.82,th*.24,2,p.detail);
    }
    return true;
  }
  function drawSeparateDining(c,o,t,p){
    const {w,h}=o;
    if(t.form==='diningChair'){
      const palette=o.type==='diningChair'?{...p,base:'#58637b',accent:'#737e95',dark:'#4e4051'}:p;
      chairTop(c,0,0,w,h,0,palette);
      return true;
    }
    if(t.form==='roundDiningTable'){
      oval(c,3,7,w*.5,h*.5,'rgba(47,39,31,.18)');
      oval(c,0,4,w*.492,h*.49,p.dark);
      oval(c,0,1.4,w*.5,h*.5,p.base);
      oval(c,0,0,w*.5,h*.5,topGradient(c,-w/2,-h/2,w,h,p),p.dark,1.4);
      c.save();c.beginPath();c.ellipse(0,0,w*.48,h*.48,0,0,Math.PI*2);c.clip();
      clippedTexture(c,-w/2,-h/2,w,h,0,'wood');c.restore();
      return true;
    }
    const classic=t.form==='diningTable';
    const corner=Math.min(t.form==='petalDiningTable'?14:8,w*.16,h*.22);
    woodPanel(c,-w/2,-h/2,w,h,corner,p,6);
    const runnerW=w*(classic ? .69/.79 : .55/.79),runnerH=h*(classic ? .14/.57 : .15/.56);
    rr(c,-runnerW/2,-runnerH/2,runnerW,runnerH,Math.min(2,runnerH*.2),p.detail,p.accent,.7);
    return true;
  }
  function drawDesk(c,o,t,p){
    const w=o.w,h=o.h,x=-w/2,y=-h/2,f=t.form;
    if(f==='cornerDesk'){
      const d=Math.max(24,h*.28),rw=Math.max(29,w*.21);
      const outline=[[x,y],[x+w,y],[x+w,y+h],[x+w-rw,y+h],[x+w-rw,y+d],[x+rw,y+d],[x+rw,y+h],[x,y+h]];
      poly(c,outline.map(([px,py])=>[px+4,py+7]),'rgba(55,42,33,.18)');
      const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,p.detail);g.addColorStop(.3,p.accent);g.addColorStop(.7,p.base);g.addColorStop(1,p.dark);poly(c,outline,g,p.dark,1.6);
      c.save();c.beginPath();c.moveTo(...outline[0]);for(const pt of outline.slice(1))c.lineTo(...pt);c.closePath();c.clip();clippedTexture(c,x,y,w,h,2,'wood');c.restore();
      for(const bx of [x+6,x+w-rw+6]){woodPanel(c,bx,y+d+6,rw-12,h-d-14,4,p,4);for(let row=1;row<3;row++){c.beginPath();c.moveTo(bx+4,y+d+row*(h-d)/3);c.lineTo(bx+rw-16,y+d+row*(h-d)/3);c.strokeStyle='rgba(61,43,32,.5)';c.stroke();}}
      rr(c,-w*.15,y+d*.12,w*.3,d*.47,3,'#25343a','#15242a',1);rr(c,-w*.125,y+d*.17,w*.25,d*.34,2,gradient(c,-w*.12,y,w*.24,d,[[0,'#a7c2c0'],[1,'#496e76']]));
      rr(c,-w*.18,y+d*.7,w*.36,Math.max(5,d*.13),2,p.detail,p.dark,.7);return true;
    }
    if(f==='secretaryDesk'){
      furnitureFoot(c,x+3,y+4,w-6,h-10,7);woodPanel(c,x+3,y+5,w-6,h-12,6,p,6);
      woodPanel(c,x+w*.08,y+h*.08,w*.84,h*.38,5,p,4);
      for(let i=0;i<4;i++)rr(c,x+w*(.13+i*.2),y+h*.16,w*.14,h*.18,2,p.detail,p.dark,.6);
      rr(c,x+w*.12,y+h*.54,w*.76,h*.24,4,p.accent,p.dark,.8);brass(c,-w*.08,y+h*.64,w*.16,3,1);return true;
    }
    furnitureFoot(c,x+3,y+5,w-6,h-12,7);woodPanel(c,x+3,y+6,w-6,h*.55,6,p,6);
    for(const bx of [x+7,x+w*.72]){woodPanel(c,bx,y+h*.47,w*.21,h*.42,4,p,4);for(let row=0;row<2;row++){const yy=y+h*(.54+row*.16);c.beginPath();c.moveTo(bx+4,yy);c.lineTo(bx+w*.17,yy);c.strokeStyle='rgba(65,45,31,.5)';c.stroke();brass(c,bx+w*.075,yy+4,w*.06,2,1);}}
    rr(c,-w*.12,y+h*.13,w*.24,h*.2,3,'#293a40','#17252a',1);rr(c,-w*.1,y+h*.15,w*.2,h*.14,2,gradient(c,-w*.1,y,w*.2,h*.2,[[0,'#b5d0cd'],[1,'#4c737c']]));
    rr(c,-w*.16,y+h*.38,w*.32,Math.max(5,h*.08),2,p.detail,p.dark,.7);return true;
  }
  function drawCaseFurniture(c,o,t,p){
    const w=o.w,h=o.h,x=-w/2,y=-h/2,f=t.form;
    if(f==='deskChair'){
      furnitureFoot(c,x+4,y+5,w-8,h-10,Math.min(w,h)*.28);
      for(let i=0;i<5;i++){const a=-Math.PI/2+i*Math.PI*2/5;c.strokeStyle='#4b5557';c.lineWidth=Math.max(2,w*.055);c.beginPath();c.moveTo(0,4);c.lineTo(Math.cos(a)*w*.37,Math.sin(a)*h*.34+4);c.stroke();disc(c,Math.cos(a)*w*.39,Math.sin(a)*h*.36+4,Math.max(1.5,w*.035),'#30393c');}
      brass(c,-w*.04,-h*.02,w*.08,h*.2,2);fabricPanel(c,x+w*.18,y+h*.34,w*.64,h*.48,Math.min(9,w*.18),p,{depth:3,piping:true,tufts:[[.35,.5],[.65,.5]]});
      fabricPanel(c,x+w*.14,y+h*.03,w*.72,h*.33,Math.min(10,w*.2),{...p,base:p.accent},{depth:3,piping:true,tufts:[[.5,.5]]});return true;
    }
    if(f==='craftedStool'){
      for(let i=0;i<4;i++){const a=Math.PI/4+i*Math.PI/2;taperedLeg(c,Math.cos(a)*w*.27-2,Math.sin(a)*h*.27-2,4,h*.26,p.dark);}
      furnitureFoot(c,x+w*.08,y+h*.08,w*.84,h*.84,w*.42);fabricPanel(c,x+w*.08,y+h*.05,w*.84,h*.78,w*.36,p,{depth:4,piping:true,tufts:[[.5,.5]]});return true;
    }
    if(f==='acornChair'){
      furnitureFoot(c,x+3,y+5,w-6,h-12,18);fabricPanel(c,x+4,y+5,w-8,h-13,18,p,{depth:6,piping:true});
      fabricPanel(c,x+w*.17,y+h*.08,w*.66,h*.43,14,p,{depth:3,piping:true,tufts:[[.28,.5],[.5,.42],[.72,.5]]});
      fabricPanel(c,x+w*.18,y+h*.5,w*.64,h*.3,12,{...p,base:p.detail},{depth:3,piping:true});
      for(const ax of [x+5,x+w*.78])fabricPanel(c,ax,y+h*.39,w*.17,h*.42,8,{...p,base:p.accent},{depth:2,piping:true});
      for(const px of [x+12,x+w-17])taperedLeg(c,px,y+h-14,5,11,p.dark);return true;
    }
    if(f==='lilyCoffee'){
      oval(c,3,8,w*.48,h*.43,'rgba(50,42,34,.17)');brass(c,-3,-h*.02,6,h*.45,2);oval(c,0,h*.18,w*.22,h*.1,p.dark);
      const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,p.detail);g.addColorStop(.3,p.accent);g.addColorStop(.72,p.base);g.addColorStop(1,p.dark);oval(c,0,-h*.07,w*.47,h*.37,g,p.dark,1.6);c.save();c.beginPath();c.ellipse(0,-h*.07,w*.44,h*.34,0,0,Math.PI*2);c.clip();clippedTexture(c,x,y,w,h,12,'wood');c.restore();c.strokeStyle='rgba(255,244,221,.56)';c.lineWidth=1.1;c.beginPath();c.arc(0,-h*.1,w*.38,3.4,5.7);c.stroke();return true;
    }
    if(f==='bubbleSide'){
      oval(c,2,h*.34,w*.3,h*.1,'rgba(49,43,38,.18)');brass(c,-3,-h*.06,6,h*.4,2);oval(c,0,h*.28,w*.28,h*.09,p.dark);
      const g=c.createRadialGradient(-w*.15,-h*.18,2,0,-h*.08,w*.5);g.addColorStop(0,'#fffdf0');g.addColorStop(.36,p.detail);g.addColorStop(.72,p.base);g.addColorStop(1,p.dark);oval(c,0,-h*.13,w*.45,h*.31,g,p.dark,1.5);c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1;c.beginPath();c.arc(-w*.03,-h*.13,w*.31,3.7,5.4);c.stroke();
      c.save();c.beginPath();c.ellipse(0,-h*.13,w*.41,h*.27,0,0,Math.PI*2);c.clip();
      for(const [offset,bend] of [[-.19,-.06],[-.04,.08],[.13,-.04]]){c.beginPath();c.moveTo(-w*.42,-h*(.13-offset));c.bezierCurveTo(-w*.15,-h*(.2+bend),w*.08,-h*(.05-bend),w*.42,-h*(.14+offset));c.strokeStyle='rgba(92,96,91,.22)';c.lineWidth=.7;c.stroke();}
      c.restore();oval(c,0,-h*.13,w*.39,h*.25,null,'rgba(255,248,225,.38)',.8);disc(c,-w*.24,h*.16,Math.max(1,w*.025),'#d7bd77','#715737',.45);disc(c,w*.24,h*.16,Math.max(1,w*.025),'#d7bd77','#715737',.45);return true;
    }
    if(f==='starNightstand'||f==='honeyDresser'){
      furnitureFoot(c,x+3,y+5,w-6,h-12,7);woodPanel(c,x+3,y+5,w-6,h-12,6,p,6);
      const cols=f==='honeyDresser'?3:1,rows=2,gap=4,iw=(w-16-gap*(cols-1))/cols,ih=(h-20-gap)/rows;
      for(let row=0;row<rows;row++)for(let col=0;col<cols;col++){const dx=x+8+col*(iw+gap),dy=y+8+row*(ih+gap);rr(c,dx,dy,iw,ih,3,p.accent,p.dark,.65);c.strokeStyle='rgba(255,244,222,.42)';c.lineWidth=.6;c.beginPath();c.moveTo(dx+3,dy+2);c.lineTo(dx+iw-3,dy+2);c.stroke();brass(c,dx+iw*.42,dy+ih*.48,Math.max(4,iw*.16),2,1);}
      for(const px of [x+9,x+w-14])taperedLeg(c,px,y+h-13,5,10,p.dark);return true;
    }
    if(f==='storyBookcase'){
      furnitureFoot(c,x+3,y+4,w-6,h-9,7);woodPanel(c,x+3,y+4,w-6,h-9,6,p,6);rr(c,x+9,y+10,w-18,h-22,3,'#574437',p.dark,1);
      const colors=['#aabf9f','#d8b77c','#a67b6a','#9bb9bd','#d5a383','#7f927d'];
      for(let row=0;row<5;row++){const sy=y+12+row*(h-27)/5,sh=(h-27)/5;woodPanel(c,x+8,sy+sh-4,w-16,4,1,p,2);let xx=x+12;for(let col=0;col<4;col++){const bw=(w-25)/4-1,bh=sh-8-(col%2)*3;rr(c,xx,sy+sh-5-bh,bw,bh,1,colors[(row+col)%colors.length],'rgba(53,45,39,.55)',.5);xx+=bw+2;}}
      return true;
    }
    return false;
  }
  function drawCraftedFurniture(c,o,t,p){
    if(['moonBed','cribBed','toddlerBed','platformBed','upholsteredBed','storageBed','canopyBed','daybed','bunkBed'].includes(t.form))return drawBed(c,o,t,p);
    if(['cloudSofa','tailoredSofa','tailoredLoveseat','chaiseSofa'].includes(t.form))return drawSofa(c,o,t,p);
    if(['petalDining','roundDining','rectDining'].includes(t.form))return drawDining(c,o,t,p);
    if(['diningTable','petalDiningTable','roundDiningTable','rectDiningTable','diningChair'].includes(t.form))return drawSeparateDining(c,o,t,p);
    if(['sproutDesk','cornerDesk','secretaryDesk'].includes(t.form))return drawDesk(c,o,t,p);
    return drawCaseFurniture(c,o,t,p);
  }
  function drawCraftedLight(c,o,t,p){
    const w=o.w,h=o.h,x=-w/2,y=-h/2,f=t.form;
    if(f==='budLamp'){
      furnitureFoot(c,x+w*.17,y+h*.65,w*.66,h*.22,h*.1);oval(c,0,h*.34,w*.31,h*.1,p.dark);oval(c,0,h*.29,w*.29,h*.09,gradient(c,-w*.3,0,w*.6,h*.2,[[0,p.detail],[.4,p.accent],[1,p.dark]]),p.dark,1);
      brass(c,-w*.045,-h*.01,w*.09,h*.31,2);disc(c,0,-h*.02,w*.09,'#f6e7b4','#7f6846',.7);
      const shade=gradient(c,x,y,w,h,[[0,p.detail],[.32,p.accent],[.72,p.base],[1,p.dark]]);poly(c,[[-w*.34,-h*.35],[w*.34,-h*.35],[w*.43,h*.02],[-w*.43,h*.02]],shade,p.dark,1.2);
      c.save();c.beginPath();c.moveTo(-w*.34,-h*.35);c.lineTo(w*.34,-h*.35);c.lineTo(w*.43,h*.02);c.lineTo(-w*.43,h*.02);c.closePath();c.clip();for(let xx=-w*.3;xx<w*.35;xx+=w*.11){c.beginPath();c.moveTo(xx,-h*.32);c.lineTo(xx+w*.05,-h*.02);c.strokeStyle='rgba(92,76,67,.18)';c.lineWidth=.7;c.stroke();}c.restore();c.strokeStyle='rgba(255,255,255,.58)';c.lineWidth=.8;c.beginPath();c.moveTo(-w*.27,-h*.32);c.lineTo(w*.19,-h*.32);c.stroke();return true;
    }
    if(f==='cloudFloorLamp'){
      oval(c,0,h*.39,w*.34,h*.075,'rgba(45,42,36,.18)');oval(c,0,h*.34,w*.31,h*.07,p.dark);oval(c,0,h*.3,w*.29,h*.065,gradient(c,-w*.3,0,w*.6,h*.2,[[0,'#fff2c8'],[.45,'#c6a66a'],[1,'#745b38']]),p.dark,.9);
      brass(c,-w*.035,-h*.02,w*.07,h*.33,2);disc(c,0,-h*.01,w*.075,'#e2c782','#6f5939',.6);
      oval(c,0,-h*.25,w*.42,h*.23,gradient(c,x,y,w,h,[[0,p.detail],[.45,p.accent],[1,p.base]]),p.dark,1.1);clippedTexture(c,-w*.39,-h*.46,w*.78,h*.42,w*.25,'linen');
      c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1;c.beginPath();c.arc(-w*.04,-h*.27,w*.31,3.7,5.3);c.stroke();return true;
    }
    if(f==='bloomCeiling'){
      disc(c,2,4,w*.43,'rgba(45,42,37,.14)');disc(c,0,1,w*.4,gradient(c,x,y,w,h,[[0,'#fff0b5'],[.32,'#b58d4e'],[.72,'#6f5739'],[1,'#493d32']]),'#5f4e39',1.1);
      const glass=c.createRadialGradient(-w*.12,-h*.14,2,0,0,w*.34);glass.addColorStop(0,'#fffef6');glass.addColorStop(.38,p.detail);glass.addColorStop(.72,p.accent);glass.addColorStop(1,p.dark);disc(c,0,-1,w*.32,glass,p.dark,1);
      c.save();c.beginPath();c.arc(0,-1,w*.3,0,Math.PI*2);c.clip();c.strokeStyle='rgba(112,93,76,.26)';c.lineWidth=.7;for(let i=0;i<8;i++){const a=i*Math.PI/4;c.beginPath();c.moveTo(0,-1);c.lineTo(Math.cos(a)*w*.3,Math.sin(a)*w*.3-1);c.stroke();}c.restore();
      for(let i=0;i<3;i++){const a=-Math.PI/2+i*Math.PI*2/3;disc(c,Math.cos(a)*w*.34,Math.sin(a)*w*.34+1,w*.035,'#e5c77f','#6c5638',.55);}disc(c,-w*.08,-h*.1,w*.05,'rgba(255,255,255,.72)');return true;
    }
    if(f==='starPendant'){
      disc(c,2,4,w*.39,'rgba(43,40,36,.14)');disc(c,0,0,w*.38,'#7a664a','#594a39',1.1);
      const glass=gradient(c,x,y,w,h,[[0,'#fffdf1'],[.3,p.detail],[.62,p.accent],[1,p.dark]]),facets=[];for(let i=0;i<8;i++){const a=-Math.PI/8+i*Math.PI/4;facets.push([Math.cos(a)*w*.37,Math.sin(a)*h*.37]);}poly(c,facets,glass,p.dark,1.2);
      c.strokeStyle='rgba(255,255,255,.58)';c.lineWidth=.75;for(const [px,py] of facets){c.beginPath();c.moveTo(0,0);c.lineTo(px,py);c.stroke();}
      disc(c,0,0,w*.13,'#fff0b3','#89704d',.9);disc(c,-w*.04,-h*.04,w*.04,'rgba(255,255,255,.75)');return true;
    }
    if(f==='acornSconce'){
      rr(c,-w*.31,-h*.39,w*.62,h*.24,5,'rgba(45,39,33,.16)');rr(c,-w*.3,-h*.42,w*.6,h*.23,5,gradient(c,x,y,w,h,[[0,'#f4d898'],[.45,'#b98c47'],[1,'#705331']]),'#60482e',1);brass(c,-w*.04,-h*.22,w*.08,h*.2,2);disc(c,0,-h*.05,w*.1,'#e5c57d','#6d5635',.65);
      oval(c,0,h*.1,w*.38,h*.33,gradient(c,x,y,w,h,[[0,'#fffdf2'],[.38,p.detail],[.7,p.accent],[1,p.dark]]),p.dark,1.1);clippedTexture(c,-w*.34,-h*.15,w*.68,h*.49,w*.25,'linen');
      c.strokeStyle='rgba(255,255,255,.58)';c.lineWidth=.8;c.beginPath();c.arc(-w*.03,h*.07,w*.27,3.6,5.2);c.stroke();return true;
    }
    return false;
  }
  // Molded play-yard panels are drawn in plan perspective: the bright top rail,
  // open slats, dark lower edge and silver joints remain legible at dashboard size.
  function toyFencePanel(c,x,y,length,depth,color,angle=0){
    c.save();c.translate(x,y);c.rotate(angle);
    rr(c,-length/2+1,-depth/2+4,length,depth,2,'rgba(41,45,48,.22)');
    rr(c,-length/2,-depth/2,length,depth,2,color,'#7d7780',.55);
    rr(c,-length/2+1,-depth/2+1,length-2,2,1,'rgba(255,255,255,.68)');
    for(const offset of [-.29,-.08,.13,.34]){
      rr(c,length*offset-1.1,-depth*.14,Math.max(1.5,length*.09),depth*.43,1,
        'rgba(54,61,70,.54)','rgba(255,255,255,.48)',.35);
    }
    disc(c,0,-depth*.13,Math.min(2.2,length*.1),'rgba(255,255,255,.75)');
    disc(c,-Math.min(1.5,length*.06),-depth*.28,Math.min(1.1,length*.05),color);
    disc(c,Math.min(1.5,length*.06),-depth*.28,Math.min(1.1,length*.05),color);
    for(const edge of [-1,1]){
      rr(c,edge*length/2-1.2,-depth/2-1,2.4,depth+3,1,'#929298','#61646c',.4);
      disc(c,edge*length/2,-depth*.1,1.2,'#d4d1cf','#60656b',.45);
    }
    c.restore();
  }
  function drawHabitat(c, aquatic, p) {
    const frame = aquatic ? '#304b54' : '#453c42';
    const bedding = aquatic
      ? [[0,'#a0d2cb'],[.49,'#71a8a8'],[1,'#427d84']]
      : [[0,'#edcfa0'],[.55,'#d8ae7b'],[1,'#ac805e']];
    rr(c,-50,-44,100,93,6,p.dark);
    rr(c,-47,26,94,21,5,p.base,p.dark,1);
    for (const side of [-1,1]) {
      rr(c,side*22.5-21,34,42,11,1,p.accent,p.dark,.65);
      rr(c,side*6.7-3,37,6,1.8,.7,p.dark);
    }
    rr(c,-50,-49,100,87,5,frame);
    rr(c,-46,-45,92,79,3,gradient(c,-46,-45,92,79,bedding));
    for (let i=0;i<19;i++) {
      const x=(i*29)%83-41,y=(i*13)%67-36;
      oval(c,x,y,1.4+i%3*.75,.92+i%2*.62,
        aquatic ? ['#a9c5b3','#608d83','#719e91'][i%3] : ['#a58467','#e2bf8c','#b99572'][i%3]);
    }
    if(aquatic) {
      for(const [x,y] of [[-33,-21],[-24,-26],[30,-20],[37,8]]) {
        for(let i=0;i<4;i++) {
          const angle=(i-1.5)*.34;
          leaf(c,x+i*1.6,y-i*.8,2.6,7.3+i*.5,angle,
            ['#4c8268','#659777','#7ca36d','#5a8d73'][i]);
        }
      }
      for(const [x,y,angle,s,paint] of [
        [12,-14,.28,1,'#ecad72'],[-23,6,2.86,.81,'#f2ce7e'],[18,19,-.26,.71,'#c29bbd'],
      ]) {
        c.save();c.translate(x,y);c.rotate(angle);c.scale(s,s);
        poly(c,[[-4,0],[-13,-5],[-11,0],[-13,5]],paint,frame,.55);
        oval(c,0,0,8.4,3.7,paint,frame,.55);
        oval(c,1,-1.2,4.8,1.15,'#fff1d39e');
        disc(c,4.8,.1,1.15,frame);disc(c,5.2,-.23,.38,'#fff5db');
        c.restore();
      }
      for(const [x,y,r] of [[31,17,2],[35,20,1.3],[39,13,2.9],[35,9,1.3]])disc(c,x,y,r,null,'#dafff0aa',.9);
    } else {
      oval(c,-28,-16,15,12,'#a68064','#856854',.9);
      oval(c,-28,-18,12,8,'#c6a47e');
      oval(c,-28,-7,5.9,3.6,'#65514b');
      oval(c,30,-18,10.2,8,'#f3d7a4','#866855',.8);
      oval(c,30,-18,7.1,5.6,'#8bb1a0','#7c8e7d',.8);
      c.save();c.translate(7,-21);c.rotate(-.36);
      rr(c,-11,-4,22,8,3,'#a77758','#745744',1);
      rr(c,-8,-3,16,1.2,.6,'#d4a57b');c.restore();
      for(let i=0;i<4;i++)leaf(c,-34+i*2,20-i,2.4,6,(i-1.5)*.45,['#829468','#a3aa79'][i%2]);
      c.save();c.translate(4,12);c.rotate(-.37);
      c.beginPath();c.moveTo(-6,1);c.bezierCurveTo(-12,9,-17,9,-20,4);
      c.strokeStyle='#a6754e';c.lineWidth=4.2;c.stroke();
      c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(-12,8,-16,8,-20,4);
      c.strokeStyle='#dda465';c.lineWidth=2.6;c.stroke();
      for(const side of [-1,1])for(const x of [-4,5]) {
        c.beginPath();c.moveTo(x,side*1.5);c.lineTo(x-2,side*5);c.lineTo(x+1,side*7);
        c.strokeStyle='#b27e57';c.lineWidth=2.15;c.stroke();
        for(const toe of [-1,0,1])disc(c,x+1+toe*1.15,side*7, .68,'#e9bd82');
      }
      oval(c,0,0,7.4,3.85,'#d99c51','#976544',.65);
      oval(c,7.6,0,4.3,2.9,'#edb877','#976544',.64);
      for(const [x,y] of [[-3,-1],[0,1],[3,-1],[6,1.6],[6,-1.6]])disc(c,x,y,.85,'#815944');
      c.restore();
    }
    // Glass seams and an inset rear light read in top-down and thumbnails.
    rr(c,-46,-45,92,79,3,null,aquatic?'#d5f5e1a8':'#f1efcf9b',1.1);
    poly(c,[[-45,12],[-45,32],[-22,32],[-43,12]],'#fffbef33');
    rr(c,-37,-45,74,4,1,frame);
    rr(c,-31,-43,62,1.4,.7,aquatic?'#bcf0df':'#f5d79d');
    rr(c,-45,32,90,2.3,.9,aquatic?'#e1fff590':'#ffebc880');
  }
  function drawCatalog(c,o,t){
    if(drawBabyAtlas(c,o,t))return true;
    const p={base:'#d9b98b',accent:'#a67a57',detail:'#f3dfb5',dark:'#604935',...(t.palette||{})};
    const f=t.form||'',family=t.artFamily;
    if(!family)return false;
    if(family==='cuteFurniture'||family==='cuteLight'){
      c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);c.lineJoin='round';c.lineCap='round';
      const drawn=family==='cuteFurniture'?drawCraftedFurniture(c,o,t,p):drawCraftedLight(c,o,t,p);
      c.restore();return drawn;
    }
    const floatsAboveRoom=family==='ceilingFan'||(family==='paddedPanel'&&f==='photoPlayYard')||
      false;
    if(!floatsAboveRoom)worldContact(c,o);
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.scale(o.w/100,o.h/100);c.lineJoin='round';c.lineCap='round';
    switch(family){
      case 'habitat':drawHabitat(c,f==='aquarium',p);break;
      case 'softToy':{
        if(f==='photoBunnyPlush'){
          // drawCatalog already paints one soft world shadow. A second hard
          // rectangle escaped the plush silhouette as a black dash.
          for(const x of [-14,14]){oval(c,x,-29,10,21,p.dark);oval(c,x,-31,8,18,p.base,p.dark,1.2);oval(c,x,-33,4,12,'#d9abb1');}
          oval(c,0,20,27,25,p.dark);oval(c,0,17,25,23,p.base,p.dark,1.4);
          for(const x of [-20,20])oval(c,x,34,10,8,p.detail,p.dark,1);
          disc(c,0,-10,20,p.base,p.dark,1.4);oval(c,0,-4,10,8,p.detail);
          disc(c,-7,-13,2,p.dark);disc(c,7,-13,2,p.dark);disc(c,0,-5,2.5,'#b77a82');
          break;
        }
        if(f==='ball'||f==='texturedBall'){
          contact(c,-35,-35,70,70,35);
          const g=c.createRadialGradient(-15,-19,3,0,0,38);
          g.addColorStop(0,p.detail);g.addColorStop(.55,p.base);g.addColorStop(1,p.dark);
          disc(c,0,0,34,g,p.dark,1.5);
          if(f==='texturedBall')for(let i=0;i<16;i++){const a=i*2.399,r=7+(i%3)*8;disc(c,Math.cos(a)*r,Math.sin(a)*r,2.6,p.accent,p.dark,.4);}
          else {c.save();c.beginPath();c.arc(0,0,32,-1.1,1.4);c.lineWidth=8;c.strokeStyle=p.accent;c.stroke();c.restore();}
          disc(c,-13,-15,5,'rgba(255,255,255,.42)');break;
        }
        if(f==='book'){
          contact(c,-41,-34,82,68,8);rr(c,-41,-32,82,63,7,p.dark);
          rr(c,-39,-33,38,59,5,p.base,p.dark,1);rr(c,1,-33,38,59,5,p.detail,p.dark,1);
          rr(c,-4,-34,8,62,3,p.accent);disc(c,-20,-7,9,p.accent);disc(c,20,-7,9,p.base);
          c.strokeStyle=p.dark;c.lineWidth=1.3;for(const y of [12,18]){c.beginPath();c.moveTo(-29,y);c.lineTo(-12,y);c.moveTo(11,y);c.lineTo(29,y);c.stroke();}break;
        }
        if(f==='cups'){
          for(const [x,y,r,color] of [[-20,15,22,p.base],[19,12,20,p.accent],[0,-18,17,p.detail]]){
            contact(c,x-r,y-r,r*2,r*2,r);
            disc(c,x,y+3,r,p.dark);disc(c,x,y,r,color,p.dark,1.4);
            disc(c,x,y,r*.69,p.detail,p.dark,1);disc(c,x,y,r*.54,color);
            c.beginPath();c.arc(x-2,y-2,r*.82,3.45,5.4);c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=2;c.stroke();
          }
          break;
        }
        if(f==='rings'){
          contact(c,-37,-37,74,74,37);
          disc(c,0,4,36,p.dark);
          const colors=[p.accent,p.base,p.detail,'#8faec8'];
          for(let i=0;i<4;i++){
            const r=33-i*7;
            disc(c,0,-i*.7,r,colors[i],p.dark,1.5);
            c.beginPath();c.arc(0,-i*.7,r-2,3.65,5.45);c.strokeStyle='rgba(255,255,255,.60)';c.lineWidth=2;c.stroke();
          }
          disc(c,0,-5,7,p.dark);disc(c,-1,-7,5,p.detail,p.dark,1);break;
        }
        if(f==='blocks'){
          for(let i=0;i<4;i++){const x=-40+(i%2)*42,y=-37+Math.floor(i/2)*42;
            cushion(c,x,y,35,35,5,{...p,base:[p.base,p.accent,p.detail,'#a2b7a0'][i]});
            disc(c,x+17,y+17,7,'rgba(255,255,255,.27)');}
          break;
        }
        if(f==='plush'){
          contact(c,-43,-37,86,77,35);
          oval(c,-34,2,15,11,p.base,p.dark,1);oval(c,34,2,15,11,p.base,p.dark,1);
          oval(c,-18,31,12,15,p.base,p.dark,1);oval(c,18,31,12,15,p.base,p.dark,1);
          disc(c,-21,-27,12,p.dark);disc(c,21,-27,12,p.dark);
          oval(c,0,14,27,30,topGradient(c,-27,-16,54,60,p),p.dark,1.5);
          oval(c,0,15,16,19,p.detail);
          disc(c,0,-17,27,p.base,p.dark,1.5);disc(c,-21,-28,6,p.accent);disc(c,21,-28,6,p.accent);
          disc(c,-10,-20,2.5,p.dark);disc(c,10,-20,2.5,p.dark);oval(c,0,-8,11,8,p.detail);disc(c,0,-11,3,p.dark);break;
        }
        if(f==='teether'){
          contact(c,-31,-34,62,68,25);disc(c,0,-5,27,p.base,p.dark,4);disc(c,0,-5,15,'rgba(255,255,255,.04)',p.detail,3);
          rr(c,-13,16,26,23,9,p.accent,p.dark,1.5);rr(c,-10,19,20,11,5,p.detail);break;
        }
        cushion(c,-35,-35,70,70,14,p);break;
      }
      case 'activityToy':{
        if(f==='photoWoodArch'){
          contact(c,-47,-38,94,76,32);
          oval(c,0,0,45,35,'#cfc9b9','#a79579',1.3);
          oval(c,0,-3,42,32,'#f4f2e9','#d0c9ba',1.2);
          for(const [ax,ay,bx,by,bend] of [[-38,-25,38,25,19],[-38,25,38,-25,-19]]){
            c.beginPath();c.moveTo(ax+2,ay+4);c.quadraticCurveTo(bend,1,bx+2,by+4);
            c.strokeStyle='rgba(66,50,33,.28)';c.lineWidth=9;c.stroke();
            c.beginPath();c.moveTo(ax,ay);c.quadraticCurveTo(bend,-2,bx,by);
            c.strokeStyle='#cba575';c.lineWidth=7;c.stroke();
            c.beginPath();c.moveTo(ax,ay-1);c.quadraticCurveTo(bend,-4,bx,by-1);
            c.strokeStyle='#f8dbac';c.lineWidth=1.7;c.stroke();
          }
          for(const [x,y,col] of [[-18,-6,'#e1bb4f'],[4,8,'#a6b99d'],[21,-7,'#d6a0a1']]){
            c.strokeStyle='#8c795d';c.lineWidth=.9;c.beginPath();c.moveTo(x,y-8);c.lineTo(x,y-1);c.stroke();
            disc(c,x,y+3,5.5,col,'#876d53',.7);disc(c,x-2,y+1,1.4,'rgba(255,255,255,.7)');
          }
          for(const [x,y] of [[-38,-25],[38,25],[-38,25],[38,-25]])disc(c,x,y,4,'#b78d5f','#7a5c45',.8);
          break;
        }
        if(f==='photoActivityTable'){
          // Keep the feet tucked beneath the tabletop so they read as legs,
          // not isolated black tabs at dashboard scale.
          for(const x of [-27,20])for(const y of [-24,22])rr(c,x,y,7,15,2,'#7da8c3','#527286',.7);
          rr(c,-45,-36,90,72,15,'#6f8997','#4e6875',1.4);
          rr(c,-43,-39,86,68,13,'#f4eee1','#9a927f',1.5);
          rr(c,-35,-31,70,53,9,'#cce0c6','#8cae95',.9);
          for(const [x,y,r,col] of [[-21,-15,8,'#e8a83c'],[4,-17,7,'#df7679'],[22,-9,6,'#70a6c7'],[-12,8,7,'#70b678'],[17,11,8,'#e3bd59']]){
            disc(c,x,y+2,r,'rgba(58,70,64,.25)');disc(c,x,y,r,col,'#857c66',.7);
            disc(c,x-2,y-2,Math.max(1,r*.23),'rgba(255,255,255,.72)');
          }
          rr(c,-26,25,52,7,3,'#85b3c3');for(let x=-19;x<22;x+=9)rr(c,x,26,6,4,1,['#f5df9e','#d98d86','#f7f3da'][Math.floor((x+19)/9)%3]);
          break;
        }
        if(f==='playGym'){
          contact(c,-46,-38,92,76,34);oval(c,0,0,44,36,p.dark);oval(c,0,-3,42,33,p.detail,p.dark,1.5);
          for(const [ax,ay,bx,by,bulge,col] of [
            [-38,-24,38,24,18,p.base],[-38,24,38,-24,-18,p.accent]
          ]){
            c.beginPath();c.moveTo(ax+2,ay+3);c.quadraticCurveTo(bulge,0,bx+2,by+3);c.strokeStyle='rgba(65,54,47,.27)';c.lineWidth=10;c.stroke();
            c.beginPath();c.moveTo(ax,ay);c.quadraticCurveTo(bulge,0,bx,by);c.strokeStyle=col;c.lineWidth=8;c.stroke();
            c.beginPath();c.moveTo(ax,ay-2);c.quadraticCurveTo(bulge,-2,bx,by-2);c.strokeStyle='rgba(255,255,255,.50)';c.lineWidth=1.7;c.stroke();
          }
          for(const [x,y,color] of [[-16,-8,p.accent],[3,8,p.base],[20,-5,p.detail]]){disc(c,x,y+2,7,p.dark);disc(c,x,y,6,color,p.dark,.8);}
          for(const [x,y] of [[-38,-24],[38,24],[-38,24],[38,-24]])disc(c,x,y,5,p.dark);
          break;
        }
        if(f==='activityCube'||f==='activityBoard'){
          const board=f==='activityBoard';
          woodenTop(c,board?-44:-36,board?-29:-36,board?88:72,board?58:72,p,board?4:7);
          disc(c,-17,-9,11,p.accent,p.dark,1.5);disc(c,-17,-9,5,p.detail);
          disc(c,17,-11,10,p.base,p.dark,1.5);disc(c,17,-11,4,p.detail);
          rr(c,-25,10,50,12,5,p.dark);rr(c,-21,12,42,7,3,p.accent);
          for(const [x,color] of [[-11,p.detail],[0,p.base],[11,p.accent]])disc(c,x,16,3.5,color,p.dark,.6);
          break;
        }
        if(f==='mirror'){
          contact(c,-36,-37,72,75,18);rr(c,-36,-37,72,75,18,p.dark);rr(c,-31,-32,62,65,14,p.accent);
          rr(c,-27,-28,54,57,11,gradient(c,-25,-25,50,55,[[0,'#e8f6f4'],[.55,'#9fbdca'],[1,'#e2e7da']]));
          poly(c,[[-18,-22],[-2,-22],[-21,22],[-28,22]],'rgba(255,255,255,.42)');break;
        }
        if(f==='tunnel'){
          contact(c,-44,-28,88,56,24);
          rr(c,-44,-28,88,56,25,p.dark);
          rr(c,-42,-30,84,54,24,topGradient(c,-42,-30,84,54,p),p.dark,1.5);
          for(const x of [-25,0,25]){
            c.beginPath();c.moveTo(x,-27);c.bezierCurveTo(x-6,-11,x-6,11,x,23);
            c.strokeStyle='rgba(255,255,255,.59)';c.lineWidth=2;c.stroke();
          }
          oval(c,-39,-3,5,18,p.dark);oval(c,39,-3,5,18,p.dark);break;
        }
        if(f==='sensoryBasket'){
          contact(c,-37,-34,74,68,23);
          rr(c,-36,-33,72,64,22,p.accent,p.dark,1.5);
          rr(c,-28,-25,56,48,16,p.dark,p.detail,3);
          for(const [x,y,color] of [[-15,-8,p.base],[12,-11,p.accent],[0,9,p.detail]])disc(c,x,y,10,color,p.dark,1);
          c.strokeStyle='rgba(255,245,220,.58)';c.lineWidth=2;c.beginPath();c.roundRect(-32,-29,64,55,19);c.stroke();break;
        }
        if(f==='largeRattle'){
          contact(c,-37,-25,74,50,24);rr(c,-25,-8,50,16,8,p.accent,p.dark,1.4);
          disc(c,-28,0,19,p.base,p.dark,2);disc(c,28,0,19,p.detail,p.dark,2);
          disc(c,-34,-7,5,'rgba(255,255,255,.4)');disc(c,21,-7,5,'rgba(255,255,255,.4)');break;
        }
        woodenTop(c,-33,-33,66,66,p);disc(c,0,0,16,p.accent);break;
      }
      case 'playMat':{
        if(f==='photoLeafMat'){
          contact(c,-47,-40,94,80,7);rr(c,-47,-40,94,80,7,'#777c7a','#555b59',1.3);
          rr(c,-44,-37,88,74,5,gradient(c,-44,-37,88,74,[[0,'#c0c2bd'],[.5,'#9fa5a1'],[1,'#858e8a']]),'#d6d6cd',1.2);
          c.save();c.beginPath();c.roundRect(-43,-36,86,72,4);c.clip();
          for(const [x,y,dir] of [[-28,-25,1],[8,-27,-1],[-32,7,-1],[7,8,1]]){
            c.strokeStyle='rgba(240,240,229,.62)';c.lineWidth=1.4;c.beginPath();c.moveTo(x-9,y+11);c.quadraticCurveTo(x+2,y-5,x+23,y-13);c.stroke();
            for(let j=0;j<3;j++){const lx=x+j*9,ly=y+5-j*5;
              leaf(c,lx,ly,4.5,8,dir*(.8+j*.28),'rgba(232,235,224,.59)');
              leaf(c,lx+7,ly-5,4,7,-dir*(.5+j*.24),'rgba(218,224,215,.56)');}
          }
          c.restore();stitch(c,-43,-36,86,72,4);break;
        }
        if(f==='photoCheckerMat'){
          rr(c,-47,-40,94,80,5,'#8e8374','#61564d',1.3);
          c.save();c.beginPath();c.roundRect(-44,-37,88,73,3);c.clip();
          const colors=['#e7ddc8','#a99b8a','#5c554f','#c9bba5','#eee8d9'];
          for(let row=0;row<4;row++)for(let col=0;col<5;col++){
            const x=-44+col*17.6,y=-37+row*18.3;
            rr(c,x,y,17.6,18.3,.8,colors[(row*3+col*2)%colors.length],'rgba(70,62,55,.26)',.55);
            c.strokeStyle='rgba(255,255,255,.22)';c.lineWidth=.7;c.beginPath();c.moveTo(x+2,y+2);c.lineTo(x+15,y+2);c.stroke();
          }
          c.restore();rr(c,-44,-37,88,73,3,null,'#e8ddcb',1.4);break;
        }
        const round=f==='round';
        if(round){oval(c,2,5,44,38,'rgba(39,38,32,.14)');oval(c,0,0,44,38,p.dark,p.dark,1);}
        else contact(c,-46,-39,92,78,12);
        if(!round)rr(c,-46,-39,92,78,12,p.dark);
        c.save();c.beginPath();if(round)c.ellipse(0,0,42,35,0,0,Math.PI*2);else c.roundRect(-44,-36,88,72,11);c.clip();
        c.fillStyle=topGradient(c,-44,-36,88,72,p);c.fillRect(-46,-39,92,78);
        if(f==='puzzle'||f==='foam'){
          const colors=[p.base,p.accent,p.detail,'#94b6aa','#e1b4a2','#d9cc91'];
          for(let row=0;row<3;row++)for(let col=0;col<4;col++){rr(c,-44+col*22,-36+row*24,22,24,2,colors[(row*4+col)%colors.length],'rgba(67,59,47,.18)',.8);}
        }else{
          for(let i=0;i<12;i++){const x=-35+(i%4)*23,y=-27+Math.floor(i/4)*23;disc(c,x,y,6,i%3?p.accent:p.detail,'rgba(255,255,255,.45)',1);}
          if(f==='tummy'){c.beginPath();c.moveTo(-37,-4);c.bezierCurveTo(-9,-22,9,17,37,-5);c.strokeStyle='rgba(255,255,255,.54)';c.lineWidth=5;c.stroke();}
        }
        c.restore();c.strokeStyle='rgba(255,250,233,.72)';c.lineWidth=2;
        c.beginPath();if(round)c.ellipse(0,0,42,35,0,0,Math.PI*2);else c.roundRect(-44,-36,88,72,11);c.stroke();
        break;
      }
      case 'foamBlock':{
        const block=(x,y,w,h,col)=>cushion(c,x,y,w,h,8,{...p,base:col});
        if(f==='steps'){
          contact(c,-45,-35,90,70,8);
          for(const [x,w,color,depth] of [[-43,29,p.detail,5],[-13,29,p.accent,7],[17,27,p.base,9]]){
            rr(c,x+2,-30+depth,w-2,60,7,p.dark);
            rr(c,x,-35,w,60,7,topGradient(c,x,-35,w,60,{...p,base:color}),p.dark,1.4);
            rr(c,x+3,-31,w-6,51,5,null,'rgba(255,255,255,.55)',1);
            stitch(c,x+5,-28,w-10,46,4);
          }
          break;
        }
        if(f==='wedge'||f==='ramp'){
          contact(c,-43,-32,86,68,8);
          poly(c,[[-43,29],[37,-30],[43,-28],[43,33],[-43,33]],p.dark);
          poly(c,[[-43,27],[30,-32],[43,-28],[-31,30]],topGradient(c,-43,-32,86,62,p),p.dark,1.8);
          c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=2;c.beginPath();c.moveTo(-35,24);c.lineTo(30,-27);c.stroke();break;
        }
        if(f==='arch'||f==='tunnel'){
          // A U-shaped footprint reads as an arch from this high camera.
          cushion(c,-43,-33,21,67,9,p);
          cushion(c,22,-33,21,67,9,p);
          cushion(c,-39,-36,78,24,10,{...p,base:p.accent});
          c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.5;
          c.beginPath();c.moveTo(-17,-9);c.lineTo(17,-9);c.stroke();break;
        }
        block(-38,-38,76,76,p.base);break;
      }
      case 'paddedPanel':{
        if(f==='photoPlayYard'){
          const colors=['#f2a4ae','#f6f2e9','#b1d777','#e9d267','#69acd1','#b583bd'];
          for(let i=0;i<4;i++)toyFencePanel(c,-33+i*22,-43,22,10,colors[(i+1)%colors.length]);
          for(let i=0;i<3;i++)toyFencePanel(c,-44,-28+i*28,28,10,colors[i%colors.length],Math.PI/2);
          for(let i=0;i<3;i++)toyFencePanel(c,44,-28+i*28,28,10,colors[(i+3)%colors.length],Math.PI/2);
          for(let i=0;i<4;i++)toyFencePanel(c,-33+i*22,43,22,11,colors[(i+2)%colors.length]);
          for(const x of [-44,44])for(const y of [-43,43])disc(c,x,y,2.7,'#d3d0cb','#6d7175',.6);
          break;
        }
        if(f==='photoBearPanel'){
          toyFencePanel(c,0,0,92,25,p.base);
          rr(c,-42,15,84,3,1,'rgba(67,60,70,.22)');
          break;
        }
        if(f==='playpen'){
          contact(c,-46,-44,92,88,7);
          for(const [x,y,w,h] of [[-46,-44,92,11],[-46,33,92,11],[-46,-44,11,88],[35,-44,11,88]])rr(c,x,y,w,h,4,p.dark);
          for(let i=0;i<4;i++){rr(c,-34+i*23,-42,21,8,3,i%2?p.base:p.accent);rr(c,-34+i*23,35,21,8,3,i%2?p.accent:p.base);}
          break;
        }
        if(f==='gate'||f==='guard'){
          contact(c,-47,-19,94,38,5);
          rr(c,-46,-15,92,9,3,p.dark);rr(c,-46,8,92,8,3,p.dark);
          rr(c,-44,-17,88,8,3,p.detail,p.dark,.8);
          for(let i=0;i<7;i++){
            const x=-34+i*11;
            rr(c,x,-9,6,20,2,p.base,p.dark,.7);
            rr(c,x,-9,6,5,2,p.detail);
          }
          rr(c,-49,-22,9,44,3,p.dark);rr(c,40,-22,9,44,3,p.dark);
          rr(c,29,-12,8,9,2,p.accent,p.dark,.8);break;
        }
        contact(c,-47,-31,94,62,6);rr(c,-47,-27,94,61,6,p.dark);
        const n=f==='folding'?4:3;
        for(let i=0;i<n;i++){
          const width=90/n;
          cushion(c,-45+i*width,-32,width-2,58,6,
            {...p,base:[p.base,p.accent,p.detail,'#9db6a7'][i%4]});
          if(f==='quilted'){c.strokeStyle='rgba(255,255,255,.52)';c.lineWidth=1;c.beginPath();c.moveTo(-45+i*width+3,-28);c.lineTo(-45+(i+1)*width-5,23);c.stroke();}
        }
        break;
      }
      case 'fireplace':{
        if(f==='photoTiledMantel'){
          contact(c,-49,-40,98,80,3);
          rr(c,-48,-37,96,72,3,'#6a513f','#4f4139',1.5);
          for(let row=0;row<3;row++)for(let col=0;col<6;col++){
            const x=-46+col*15.4,y=-31+row*19;
            rr(c,x,y,14.7,18.2,.6,['#70543f','#634b3f','#7d654d','#544139'][(row+col)%4],
              'rgba(234,209,174,.42)',.7);
            c.strokeStyle='rgba(37,33,30,.19)';c.lineWidth=.6;c.beginPath();c.moveTo(x+4,y+3);c.lineTo(x+10,y+6);c.stroke();
          }
          rr(c,-30,-17,60,41,2,'#241f1d','#b18c5b',2.2);
          rr(c,-26,-13,52,33,1,'#16191a','#5b4938',1);
          for(const x of [-18,5,16])rr(c,x,9,21,4,1,'#70513b');
          rr(c,-49,-43,98,13,3,'#dad8cc','#8c8275',1.2);
          rr(c,-46,-44,92,8,2,'#f8f6ee','#b6afa3',1);
          rr(c,-49,31,98,7,2,'#e4e0d4','#a9a094',1);
          break;
        }
        contact(c,-48,-34,96,68,5);
        if(f==='screen'){
          rr(c,-46,-13,92,28,4,p.dark);rr(c,-42,-10,84,20,2,'#202527',p.accent,2);
          for(let x=-38;x<40;x+=8){c.strokeStyle='rgba(219,211,188,.55)';c.lineWidth=1.2;c.beginPath();c.moveTo(x,-9);c.lineTo(x,9);c.stroke();}
          for(let y=-5;y<10;y+=7){c.beginPath();c.moveTo(-40,y);c.lineTo(40,y);c.stroke();}
          rr(c,-47,-17,94,5,2,p.detail);rr(c,-47,14,94,5,2,p.dark);
          break;
        }
        // The mantel, firebox and hearth are horizontal surfaces in plan.
        rr(c,-48,-35,96,66,5,p.dark);
        rr(c,-44,-33,88,16,3,topGradient(c,-44,-33,88,16,p),p.dark,1.2);
        rr(c,-42,-14,84,28,3,p.detail,p.dark,1.3);
        rr(c,-30,-11,60,24,2,'#202527',p.dark,1.5);
        for(const xx of [-16,-2,12])rr(c,xx,-1,18,5,2,'#754c36');
        for(const [x,color] of [[-8,'#df7138'],[6,'#f3ae45'],[17,'#e9873a']]){
          oval(c,x,-3,5,8,color);disc(c,x-1,-6,2,'#ffd380');
        }
        rr(c,-46,18,92,15,2,p.base,p.dark,1.3);
        for(let x=-28;x<35;x+=27){c.beginPath();c.moveTo(x,18);c.lineTo(x,32);c.strokeStyle='rgba(106,90,71,.24)';c.lineWidth=1;c.stroke();}
        if(f==='mantel')rr(c,-49,-38,98,10,3,p.accent,p.dark,1.3);break;
      }
      case 'shelf':{
        if(f==='photoToyShelf'){
          contact(c,-43,-46,86,92,4);
          rr(c,-42,-46,84,91,3,'#6b4a32','#513825',1.5);
          rr(c,-40,-44,80,86,2,'#aa7952','#7a573b',1.2);
          for(let row=0;row<3;row++){
            const y=-40+row*28;rr(c,-36,y,72,23,2,'#694632','#513927',1);
            rr(c,-34,y+2,68,19,1,'#9b6d48');
            for(let j=0;j<3;j++){
              const x=-24+j*24,col=['#85acd0','#d99d50','#92b587','#d48f91'][(row+j)%4];
              if((row+j)%3===0)disc(c,x,y+11,7,col,'#644d3c',.8);
              else rr(c,x-6,y+5,12,12,2,col,'#674d3e',.7);
              disc(c,x-2,y+7,1.4,'rgba(255,255,255,.7)');
            }
          }
          for(const y of [-43,-15,13,41])rr(c,-41,y,82,3,1,'#c39768','#65452f',.6);
          break;
        }
        contact(c,-45,-36,90,72,4);woodenTop(c,-45,-34,90,68,p,7);
        if(f==='corner'){poly(c,[[-45,-34],[45,-34],[45,34],[-10,34]],p.accent,p.dark,1.5);}
        if(f==='ladder'||f==='book'||f==='anchored'){
          for(let i=0;i<3;i++){const y=-23+i*23;rr(c,-38,y,76,4,1,p.dark);
            for(let j=0;j<6;j++){const x=-34+j*11;rr(c,x,y-12,8,12,1,[p.base,p.accent,p.detail,'#9baa92'][j%4],p.dark,.5);}}
        }else {disc(c,-23,-3,9,p.detail);plantLeaves(c,16,0,18,{...p,base:'#618a56',accent:'#84a565',detail:'#b2c889'},6);}
        if(f==='anchored'){rr(c,-42,-37,7,8,2,p.dark);rr(c,35,-37,7,8,2,p.dark);}
        break;
      }
      case 'planterSet':{
        if(f==='rail'||f==='herbs'){
          woodenTop(c,-46,-17,92,38,{...p,base:p.accent,accent:p.dark},5);
          rr(c,-42,-13,84,26,5,p.dark);
          // Counter-scale foliage so a long, narrow railing still has round crowns.
          const aspect=Math.max(.7,Math.min(3,o.w/o.h));
          for(const x of [-29,0,29]){
            disc(c,x,0,11,p.accent,p.dark,1);
            c.save();c.translate(x,-3);c.scale(1,aspect);
            plantLeaves(c,0,0,f==='herbs'?12:15,
              {base:'#4d8454',accent:'#79a75a',detail:'#b4c878'},9);
            c.restore();
          }
          break;
        }
        if(f==='vertical'){
          woodenTop(c,-20,-45,40,90,p,6);for(let i=0;i<3;i++){const y=-27+i*27;disc(c,0,y,15,p.accent,p.dark,1);plantLeaves(c,0,y,11,{base:'#4d8454',accent:'#79a75a',detail:'#b4c878'},7);}break;
        }
        const positions=f==='hanging'?[[0,0,27]]:[[-28,10,19],[5,-13,24],[29,16,16]];
        for(const [x,y,r] of positions){contact(c,x-r,y-r,r*2,r*2,r);disc(c,x,y+4,r,p.dark);disc(c,x,y,r*.89,p.accent,p.dark,1.5);disc(c,x,y,r*.65,'#60452f');plantLeaves(c,x,y,r*.92,{base:'#4d8454',accent:'#79a75a',detail:'#b4c878'},8);}
        if(f==='hanging'){disc(c,0,0,4,p.dark);disc(c,-1,-1,2,p.detail);}
        break;
      }
      case 'ceilingFan':{
        c.save();
        const blades=f==='three'?3:f==='four'?4:5;
        for(let i=0;i<blades;i++){c.save();c.rotate(i*Math.PI*2/blades);
          if(f==='palm')leaf(c,0,-29,14,25,0,p.base);
          else {
            rr(c,-8,-47,16,38,7,p.dark);
            rr(c,-8,-49,16,38,7,topGradient(c,-8,-49,16,38,p),p.dark,1.2);
            c.beginPath();c.moveTo(-4,-42);c.lineTo(-4,-16);c.strokeStyle='rgba(255,255,255,.42)';c.lineWidth=1.2;c.stroke();
          }
          c.restore();}
        c.restore();disc(c,0,2,16,p.dark);disc(c,0,-1,13,p.accent,p.dark,1.2);
        if(f==='light'||f==='flush'){disc(c,0,-2,10,p.detail,'#fff4ce',1);disc(c,-4,-6,3,'rgba(255,255,255,.7)');}
        else {disc(c,0,-2,8,p.base,p.dark,1);disc(c,-3,-5,2,'rgba(255,255,255,.6)');}break;
      }
      case 'robotVacuum':{
        if(f==='docked'){contact(c,-33,-39,66,78,8);rr(c,-23,-39,46,16,6,p.dark);rr(c,-18,-36,36,8,3,p.accent);}
        contact(c,-32,-32,64,64,32);disc(c,0,4,32,p.dark);disc(c,0,0,31,topGradient(c,-31,-31,62,62,p),p.dark,2);
        disc(c,0,0,26,null,p.accent,2);disc(c,0,-7,9,p.dark,p.accent,1);disc(c,0,-7,6.5,p.detail,p.dark,1);
        // A tiny friendly face keeps the plan object readable without turning it
        // into a large generic status badge.
        disc(c,-8,9,2,p.detail);disc(c,8,9,2,p.detail);c.beginPath();c.arc(0,10,8,.3,Math.PI-.3);c.strokeStyle=p.detail;c.lineWidth=1.7;c.stroke();
        rr(c,-7,22,14,4,2,p.accent);disc(c,-11,-16,2.5,'rgba(255,255,255,.55)');
        if(f==='mop')rr(c,-18,30,36,7,3,'#77a9b8');break;
      }
      case 'storage':{
        contact(c,-43,-38,86,76,8);
        if(f==='basket'||f==='bin'){
          rr(c,-41,-35,82,69,12,p.accent,p.dark,2);
          rr(c,-34,-28,68,55,8,p.dark,p.detail,2);
          if(f==='basket'){
            for(const [x,y,color] of [[-17,-8,p.base],[12,-12,p.detail],[0,12,p.accent]])disc(c,x,y,12,color,p.dark,1);
          }else{
            rr(c,-28,-20,56,40,5,p.detail,p.dark,.8);
            rr(c,-17,-7,34,14,3,p.base);
          }
          c.strokeStyle='rgba(255,249,225,.58)';c.lineWidth=2;c.beginPath();c.roundRect(-38,-32,76,63,11);c.stroke();
          break;
        }
        woodenTop(c,-43,-38,86,76,p,6);
        for(let row=0;row<2;row++)for(let col=0;col<3;col++){const x=-37+col*25,y=-31+row*32;rr(c,x,y,22,28,3,p.dark);rr(c,x+2,y+2,18,24,2,(row+col)%2?p.accent:p.detail);rr(c,x+6,y+10,10,4,2,p.base);}
        break;
      }
      case 'playFurniture':{
        if(f==='photoBearChair'){
          // The shared soft contact shadow is enough; the former second hard
          // shadow protruded at the lower-right as a stray black pixel.
          for(const x of [-25,25]){disc(c,x,-30,14,'#956d50','#72513f',1);disc(c,x,-30,9,'#ccac84','#8a664c',1);}
          rr(c,-40,-31,80,72,19,'#8d694e','#644a39',1.7);
          oval(c,0,-7,31,29,'#b9946d','#785c46',1.7);
          oval(c,-33,17,13,23,'#a7805d','#70513e',1.4);oval(c,33,17,13,23,'#a7805d','#70513e',1.4);
          oval(c,0,22,29,19,'#d2b38a','#826348',1.4);stitch(c,-24,8,48,28,14);
          for(const x of [-12,12])disc(c,x,-16,2.1,'#4f4238');oval(c,0,-5,8,5,'#f4dfb8');disc(c,0,-6,2.3,'#4f4238');
          break;
        }
        if(f==='photoBolster'){
          contact(c,-45,-23,90,46,19);
          rr(c,-44,-21,88,41,19,'#686e72','#535a60',1.3);
          rr(c,-42,-23,84,38,18,gradient(c,-42,-23,84,38,[[0,'#b5b9ba'],[.52,'#8c9295'],[1,'#6d7579']]),'#626a6e',1.5);
          for(const x of [-33,33]){c.beginPath();c.moveTo(x,-17);c.quadraticCurveTo(x+(x<0?3:-3),-3,x,11);c.strokeStyle='#d1d1ce8f';c.lineWidth=1.2;c.stroke();}
          c.beginPath();c.moveTo(-25,-14);c.quadraticCurveTo(0,-20,25,-13);c.strokeStyle='rgba(255,255,255,.31)';c.lineWidth=1.4;c.stroke();
          break;
        }
        if(f==='softPouf'){contact(c,-35,-35,70,70,35);disc(c,0,5,35,p.dark);disc(c,0,0,34,topGradient(c,-34,-34,68,68,p),p.dark,1.5);disc(c,0,-1,28,null,'rgba(255,255,255,.55)',1.5);break;}
        if(f==='lowTable'){woodenTop(c,-44,-32,88,64,p,7);for(const x of [-34,34])rr(c,x,26,7,15,2,p.dark);break;}
        woodenTop(c,-42,-34,84,68,p,7);for(let i=0;i<3;i++){rr(c,-35+i*25,-20,21,43,3,p.dark);rr(c,-32+i*25,-17,15,36,2,p.detail);}break;
      }
      case 'cuteFurniture':{
        if(f==='cloudSofa'){
          contact(c,-47,-35,94,74,20);rr(c,-47,-29,94,68,22,p.dark);
          rr(c,-45,-34,90,66,21,topGradient(c,-45,-34,90,66,p),p.dark,1.5);
          for(const [x,r] of [[-30,19],[-9,23],[15,22],[34,17]])disc(c,x,-24,r,p.base,p.dark,1.1);
          rr(c,-37,-13,74,38,15,p.detail,p.dark,1.2);rr(c,-43,-13,16,42,10,p.accent,p.dark,1);rr(c,27,-13,16,42,10,p.accent,p.dark,1);
          c.strokeStyle='rgba(255,255,255,.62)';c.lineWidth=1.3;c.beginPath();c.moveTo(0,-9);c.lineTo(0,20);c.stroke();
          star(c,-17,5,8,3.8,'#fff7d8',p.dark,.7);leaf(c,18,4,7,11,.75,'#91b493');break;
        }
        if(f==='petalDining'){
          const chair=(x,y,a,color)=>{c.save();c.translate(x,y);c.rotate(a);contact(c,-12,-10,24,22,10);oval(c,0,0,13,11,color,p.dark,1);oval(c,-3,-3,5,3,'rgba(255,255,255,.5)');c.restore();};
          chair(-30,-34,0,p.base);chair(30,-34,0,p.accent);chair(-30,34,Math.PI,p.detail);chair(30,34,Math.PI,'#d8b7d6');
          contact(c,-38,-26,76,55,22);oval(c,0,2,39,28,p.dark);oval(c,0,-2,38,27,topGradient(c,-38,-29,76,54,p),p.dark,1.6);
          for(let i=0;i<6;i++){const a=i*Math.PI/3;oval(c,Math.cos(a)*16,Math.sin(a)*10,8,5,p.detail,'rgba(117,87,64,.3)',.5);}
          disc(c,0,-2,7,p.base,p.dark,.7);break;
        }
        if(f==='acornChair'){
          contact(c,-42,-38,84,79,25);rr(c,-41,-32,82,69,24,p.dark);
          for(const x of [-27,27])disc(c,x,-29,13,p.accent,p.dark,1);
          rr(c,-39,-36,78,67,23,topGradient(c,-39,-36,78,67,p),p.dark,1.5);
          rr(c,-29,-20,58,40,18,p.detail,p.dark,1.1);rr(c,-40,-5,17,34,10,p.base,p.dark,.9);rr(c,23,-5,17,34,10,p.base,p.dark,.9);
          c.strokeStyle=p.dark;c.lineWidth=1.4;for(let x=-25;x<=25;x+=10){c.beginPath();c.moveTo(x,-34);c.lineTo(x+5,-25);c.stroke();}
          friendlyMark(c,0,2,22,p.dark);break;
        }
        if(f==='lilyCoffee'){
          contact(c,-46,-30,92,63,28);oval(c,1,7,47,28,p.dark);oval(c,0,0,46,28,topGradient(c,-46,-28,92,56,p),p.dark,1.6);
          poly(c,[[0,0],[42,-16],[45,-5],[11,5]],p.detail);c.strokeStyle=p.dark;c.lineWidth=1;c.beginPath();c.moveTo(-37,5);c.quadraticCurveTo(-6,-7,29,10);c.stroke();
          for(const a of [-.8,.15,.9])leaf(c,Math.cos(a)*14,Math.sin(a)*9,7,12,a+.4,p.accent);break;
        }
        if(f==='bubbleSide'){
          contact(c,-37,-35,74,72,35);for(const [x,y,r,col] of [[-12,5,24,p.base],[16,8,21,p.accent],[4,-17,19,p.detail]]){disc(c,x+1,y+5,r,p.dark);disc(c,x,y,r,topGradient(c,x-r,y-r,r*2,r*2,{...p,base:col}),p.dark,1.1);disc(c,x-r*.28,y-r*.3,r*.16,'rgba(255,255,255,.62)');}break;
        }
        if(f==='moonBed'){
          contact(c,-45,-43,90,89,15);rr(c,-45,-40,90,84,16,p.dark);rr(c,-43,-43,86,82,15,p.detail,p.dark,1.5);
          rr(c,-37,-35,74,28,11,'#fffaf0',p.dark,.9);oval(c,-18,-21,16,11,p.base,p.dark,.7);oval(c,18,-21,16,11,p.accent,p.dark,.7);
          rr(c,-38,-5,76,39,12,topGradient(c,-38,-5,76,39,p),p.dark,1);stitch(c,-33,0,66,27,9);
          disc(c,7,10,13,'#fff4bd');disc(c,13,5,12,p.base);star(c,-17,13,6,2.8,p.detail,p.dark,.5);star(c,24,18,4,1.8,p.detail,p.dark,.5);break;
        }
        if(f==='sproutDesk'){
          woodenTop(c,-46,-31,92,63,p,7);rr(c,-39,19,16,21,4,p.dark);rr(c,23,19,16,21,4,p.dark);
          rr(c,-19,-20,38,23,5,'#304e55',p.dark,1);rr(c,-15,-16,30,15,3,gradient(c,-15,-16,30,15,[[0,'#b8e2dc'],[1,'#6e9aa2']]));
          rr(c,-20,9,40,9,4,p.detail,p.dark,.7);disc(c,32,-15,7,p.accent,p.dark,.7);leaf(c,28,-23,5,9,-.7,'#7fab76');leaf(c,37,-24,5,9,.7,'#96bd7f');break;
        }
        if(f==='starNightstand'){
          raisedCase(c,-38,-38,76,70,12,6,p.dark);rr(c,-38,-38,76,70,12,topGradient(c,-38,-38,76,70,p),p.dark,1.4);
          rr(c,-31,-29,62,46,8,p.detail,p.dark,.8);c.strokeStyle=p.dark;c.lineWidth=.8;c.beginPath();c.moveTo(-29,-5);c.lineTo(29,-5);c.stroke();
          star(c,0,7,7,3.2,p.accent,p.dark,.7);star(c,21,-20,5,2.3,'#fff5c9',p.dark,.5);break;
        }
        if(f==='honeyDresser'){
          raisedCase(c,-46,-34,92,66,12,7,p.dark);rr(c,-46,-34,92,65,12,topGradient(c,-46,-34,92,65,p),p.dark,1.5);
          for(let row=0;row<2;row++)for(let col=0;col<3;col++){const x=-30+col*30,y=-17+row*26;poly(c,[[x-11,y],[x-6,y-9],[x+6,y-9],[x+11,y],[x+6,y+9],[x-6,y+9]],row? p.accent:p.detail,p.dark,.7);disc(c,x,y,2,p.dark);}
          break;
        }
        if(f==='storyBookcase'){
          contact(c,-39,-45,78,92,14);rr(c,-39,-44,78,89,14,p.dark);rr(c,-37,-47,74,88,13,topGradient(c,-37,-47,74,88,p),p.dark,1.5);
          rr(c,-29,-35,58,67,8,'#6a5849',p.dark,.8);const colors=['#f2bb9e','#a9cdb7','#e9d184','#bdacd7','#91bed0'];
          for(let row=0;row<3;row++){rr(c,-29,-15+row*24,58,4,1,p.accent);for(let col=0;col<5;col++)rr(c,-24+col*10,-31+row*24,7,15-(col%2)*3,2,colors[(row+col)%colors.length],p.dark,.45);}
          star(c,0,-40,7,3,p.detail,p.dark,.6);break;
        }
        c.restore();return false;
      }
      case 'cuteLight':{
        const halo=Math.min(44,Math.max(28,Math.min(o.w,o.h)*.52));glow(c,halo);
        if(f==='budLamp'){
          oval(c,1,32,24,8,p.dark);oval(c,0,28,23,8,p.accent,p.dark,1);rr(c,-3,-1,6,29,3,p.dark);rr(c,-1,-2,3,29,2,p.detail);
          for(const [x,a] of [[-14,-.65],[0,0],[14,.65]]){c.save();c.translate(x,-18);c.rotate(a);oval(c,0,0,12,21,p.base,p.dark,1);oval(c,-3,-6,3,8,'rgba(255,255,255,.55)');c.restore();}
          disc(c,0,-13,9,p.detail,p.dark,.7);break;
        }
        if(f==='cloudFloorLamp'){
          oval(c,1,37,22,7,p.dark);oval(c,0,33,21,7,p.accent,p.dark,1);rr(c,-3,-3,6,37,3,p.dark);rr(c,-1,-4,3,37,2,p.detail);
          for(const [x,y,r] of [[-19,-17,17],[-4,-25,21],[16,-18,18],[4,-8,23]])disc(c,x,y,r,p.base,p.dark,1);
          friendlyMark(c,1,-14,25,p.dark);break;
        }
        if(f==='bloomCeiling'){
          for(let i=0;i<8;i++){const a=i*Math.PI/4;c.save();c.rotate(a);oval(c,0,-25,13,23,i%2?p.base:p.accent,p.dark,.8);c.restore();}
          disc(c,0,0,22,p.detail,p.dark,1.2);disc(c,-6,-7,5,'rgba(255,255,255,.72)');friendlyMark(c,0,3,18,p.dark);break;
        }
        if(f==='starPendant'){
          star(c,2,5,44,20,p.dark);star(c,0,0,43,19,topGradient(c,-40,-40,80,80,p),p.dark,1.4);star(c,-7,-8,12,5,'rgba(255,255,255,.48)');friendlyMark(c,0,5,22,p.dark);break;
        }
        if(f==='acornSconce'){
          oval(c,0,10,29,34,topGradient(c,-29,-24,58,68,p),p.dark,1.4);rr(c,-29,-24,58,22,10,p.accent,p.dark,1.1);
          for(let x=-21;x<22;x+=10){c.strokeStyle=p.dark;c.lineWidth=.8;c.beginPath();c.moveTo(x,-22);c.lineTo(x+7,-5);c.stroke();}
          rr(c,-5,-35,10,12,4,p.dark);leaf(c,12,-31,8,13,.8,'#7fac74');friendlyMark(c,0,11,22,p.dark);break;
        }
        c.restore();return false;
      }
      default:c.restore();return false;
    }
    c.restore();return true;
  }
  function draw(c,o){
    const expanded=window.RoomcraftInventory?.byType?.[o.type];
    if(expanded?.artFamily)return drawCatalog(c,o,expanded);
    if(Object.hasOwn(referenceFixtures,o.type)){
      const [width,height,paint]=referenceFixtures[o.type];
      c.save();
      c.translate(o.x,o.y);
      c.rotate((o.rotation||0)*Math.PI/180);
      c.scale(o.w/width,o.h/height);
      paint(c);
      c.restore();
      return true;
    }
    if(!supported.has(o.type))return false;
    // The original atlas remains useful for the authored plant. Furniture uses
    // deterministic vector recipes so its rounded cozy style survives resize,
    // recoloring and detailed PNG export without baked floor pixels.
    if(o.type==='floorPlant'&&drawAtlas(c,o))return true;
    const craftedForms={
      sofa:'cloudSofa',table:'petalDining',chair:'deskChair',diningTable:'diningTable',diningChair:'diningChair',bed:'moonBed',desk:'cornerDesk',
      armchair:'acornChair',coffeeTable:'lilyCoffee',sideTable:'bubbleSide',dresser:'honeyDresser',
      nightstand:'starNightstand',bookcase:'storyBookcase',stool:'craftedStool',lamp:'budLamp',
      tableLamp:'budLamp',floorLamp:'cloudFloorLamp',ceilingLight:'bloomCeiling',
      pendantLight:'starPendant',wallSconce:'acornSconce'
    };
    const craftedForm=craftedForms[o.type];
    if(craftedForm){
      const palette={
        base:['bed','chair','armchair','ceilingLight','pendantLight'].includes(o.type)?'#b8abc9':'#b88763',
        accent:['bed','chair','armchair'].includes(o.type)?'#d8e1cf':'#d7ad7d',
        detail:'#fff3dc',dark:['bed','chair','armchair'].includes(o.type)?'#6e637b':'#674832'
      };
      if(o.type==='sofa')Object.assign(palette,{base:'#ceb79a',accent:'#bca087',detail:'#e5d1b8',dark:'#7e6756'});
      c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);c.lineJoin='round';c.lineCap='round';
      const drawn=['lamp','tableLamp','floorLamp','ceilingLight','pendantLight','wallSconce'].includes(o.type)
        ?drawCraftedLight(c,o,{form:craftedForm},palette)
        :drawCraftedFurniture(c,o,{form:craftedForm},palette);
      c.restore();return drawn;
    }
    const w=o.w,h=o.h,x=-w/2,y=-h/2;
    if(o.type!=='ceilingLight'&&o.type!=='garageCeilingLight'&&o.type!=='pendantLight'&&o.type!=='wallSconce'&&o.type!=='thermostat'&&o.type!=='windowFan'&&o.type!=='window')worldContact(c,o);
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.shadowColor='transparent';
    switch(o.type){
      case 'sofa':{
        // Rounded cloud cushions preserve the original L footprint while
        // replacing the photo crop with clean, movable dollhouse furniture.
        const longW=Math.min(w*.47,78),seat='#e8cbd0',edge='#8d6f78',cream='#fff3df';
        raisedCase(c,x,y,longW,h,14,7,edge);raisedCase(c,x,y+h*.67,w,h*.33,14,7,edge);
        rr(c,x,y,longW,h,14,gradient(c,x,y,longW,h,[[0,'#fff0e3'],[.45,seat],[1,'#caaab3']]),edge,1.6);
        rr(c,x,y+h*.67,w,h*.33,14,gradient(c,x,y+h*.67,w,h*.33,[[0,'#f8e7d8'],[.5,seat],[1,'#caaab3']]),edge,1.6);
        for(const [cx,cy,r] of [[x+longW*.28,y+22,15],[x+longW*.66,y+24,18],[x+longW*.5,y+h*.48,19]])disc(c,cx,cy,r,cream,edge,.8);
        rr(c,x+8,y+h*.68,longW-15,h*.24,9,cream,edge,.8);rr(c,x+longW-2,y+h*.69,w-longW-8,h*.23,9,cream,edge,.8);
        star(c,x+longW*.46,y+h*.77,Math.min(10,h*.07),Math.min(4,h*.03),'#f3c968',edge,.5);
        leaf(c,x+longW*.7,y+h*.36,Math.min(8,w*.05),Math.min(12,h*.055),.7,'#9dbb94');break;
      }
      case 'chair':{
        const r=Math.min(w,h)*.43;disc(c,2,6,r,'rgba(56,48,54,.22)');disc(c,0,0,r,'#c9b7db','#6f647c',1.4);
        disc(c,0,-1,r*.76,gradient(c,-r,-r,r*2,r*2,[[0,'#fff1dc'],[.45,'#e6d2e8'],[1,'#b9a5c8']]),'#8b7896',1);
        for(const a of [-.75,.75])oval(c,Math.sin(a)*r*.56,-r*.58,r*.22,r*.32,'#e9ca8e','#8b7356',.7);
        friendlyMark(c,0,3,r*.9,'#66576d');break;
      }
      case 'bed':{
        raisedCase(c,x,y,w,h,15,8,'#776c86');rr(c,x,y,w,h,15,'#fbf5e9','#776c86',1.6);
        rr(c,x+8,y+8,w-16,h*.31,11,'#e7e2f3','#9f91ae',.9);
        oval(c,x+w*.3,y+h*.2,w*.19,h*.105,'#fffdf4','#a79cb3',.7);oval(c,x+w*.7,y+h*.2,w*.19,h*.105,'#fffdf4','#a79cb3',.7);
        rr(c,x+9,y+h*.34,w-18,h*.58,12,gradient(c,x+9,y+h*.34,w-18,h*.58,[[0,'#d9cbee'],[.45,'#b9d5cc'],[1,'#8fb7ad']]),'#7f918d',1.1);
        stitch(c,x+16,y+h*.42,w-32,h*.43,9);
        disc(c,x+w*.63,y+h*.65,Math.min(w,h)*.11,'#fff2b9');disc(c,x+w*.68,y+h*.61,Math.min(w,h)*.105,'#b9d5cc');
        star(c,x+w*.35,y+h*.65,Math.min(w,h)*.065,Math.min(w,h)*.03,'#fff7d8','#82768e',.6);break;
      }
      case 'table':{
        // A self-contained four-seat set. The previous source-image crop also
        // carried floor pixels and dropped the near-side chairs when moved.
        const chairW=Math.max(20,w*.23),chairH=Math.max(18,h*.24);
        const chair=(cx,cy,color,rot=0)=>{c.save();c.translate(cx,cy);c.rotate(rot);raisedCase(c,-chairW/2,-chairH/2,chairW,chairH,8,4,'#766679');rr(c,-chairW/2,-chairH/2,chairW,chairH,8,color,'#766679',1);rr(c,-chairW*.34,-chairH*.32,chairW*.68,chairH*.64,6,'#fff1dc','#9c8390',.8);c.restore();};
        chair(-w*.3,-h*.39,'#c8dfcf');chair(w*.3,-h*.39,'#f0c8c3');chair(-w*.3,h*.39,'#e8d18f',Math.PI);chair(w*.3,h*.39,'#cdbde4',Math.PI);
        raisedCase(c,x+w*.08,y+h*.17,w*.84,h*.66,14,7,'#7e6048');
        rr(c,x+w*.08,y+h*.17,w*.84,h*.66,14,gradient(c,x,y,w,h,[[0,'#f5d3a8'],[.48,'#dba878'],[1,'#a87554']]),'#79543f',1.6);c.shadowColor='transparent';
        rr(c,x+w*.14,y+h*.23,w*.72,h*.54,11,null,'rgba(255,244,218,.74)',1.4);
        rr(c,-w*.29,-h*.055,w*.58,h*.11,5,'#fff2d7','#cfaa7d',.8);
        star(c,0,0,Math.min(w,h)*.1,Math.min(w,h)*.045,'#fff4ba','#947254',.6);break;
      }
      case 'desk':{
        // The real office has a wraparound/U workstation: a long wall top and
        // two equal returns around the chair. Keep it one continuous surface
        // so it never reads as disconnected crop fragments or a generic L.
        const depth=Math.max(22,h*.34),returnW=Math.max(30,w*.18),drop=6;
        const outline=[[x,y],[x+w,y],[x+w,y+h],[x+w-returnW,y+h],
          [x+w-returnW,y+depth],[x+returnW,y+depth],[x+returnW,y+h],[x,y+h]];
        const shifted=outline.map(([px,py])=>[px+2,py+drop]);
        // A translucent offset footprint reads as a furniture shadow without
        // invoking the Android canvas blur path that produced random pixels.
        poly(c,shifted,'rgba(70,48,36,.30)');
        const top=gradient(c,x,y,w,h,[[0,'#cf9767'],[.34,'#a96f4a'],[1,'#76503a']]);
        poly(c,outline,top,'#61412f',1.8);
        c.save();c.beginPath();c.moveTo(outline[0][0],outline[0][1]);for(const [px,py] of outline.slice(1))c.lineTo(px,py);c.closePath();c.clip();
        for(let i=1;i<8;i++){
          const yy=y+(i/8)*h;c.beginPath();c.moveTo(x+4,yy);
          c.bezierCurveTo(x+w*.34,yy+(i%2?2:-2),x+w*.66,yy-1,x+w-4,yy+1);
          c.strokeStyle=i%2?'rgba(255,220,175,.25)':'rgba(75,40,29,.22)';c.lineWidth=1;c.stroke();
        }
        c.restore();
        // Continuous bevel follows both arms and clarifies the inside corner.
        poly(c,outline,null,'rgba(255,225,185,.46)',1.2);
        rr(c,x+6,y+depth+6,returnW-12,h-depth-13,4,'#6f4935','#4b3328',1);
        rr(c,x+w-returnW+6,y+depth+6,returnW-12,h-depth-13,4,'#6f4935','#4b3328',1);
        for(let row=1;row<3;row++){
          const yy=y+depth+6+(h-depth-13)*row/3;c.beginPath();c.moveTo(x+8,yy);c.lineTo(x+returnW-8,yy);c.strokeStyle='#3f2e27aa';c.lineWidth=.8;c.stroke();
          c.beginPath();c.moveTo(x+w-returnW+8,yy);c.lineTo(x+w-8,yy);c.stroke();
        }
        for(let row=0;row<3;row++){
          const yy=y+depth+10+row*(h-depth-13)/3;
          rr(c,x+returnW*.38,yy,returnW*.24,2,1,'#c3a173');
          rr(c,x+w-returnW*.62,yy,returnW*.24,2,1,'#c3a173');
        }
        // Monitor, keyboard, mouse and grommet are scaled to the long arm.
        rr(c,x+w*.37,y+depth*.12,w*.26,depth*.5,3,'#253138','#152228',1.1);
        rr(c,x+w*.395,y+depth*.17,w*.21,depth*.39,2,gradient(c,x+w*.395,y+depth*.17,w*.21,depth*.39,[[0,'#91aeb2'],[1,'#496a75']]));
        rr(c,x+w*.34,y+depth*.7,w*.32,Math.max(4,depth*.13),2,'#d8c6aa','#745744',.7);
        oval(c,x+w*.82,y+depth*.56,Math.max(4,w*.025),Math.max(5,depth*.12),'#d9bf92','#6c513e',.8);
        disc(c,x+w*.9,y+depth*.25,Math.max(3,Math.min(w,h)*.035),'#4b3c33','#d3b07e',.7);break;
      }
      case 'armchair':{
        raisedCase(c,x,y,w,h,18,8,'#75677f');
        for(const cx of [x+w*.22,x+w*.78])disc(c,cx,y+h*.1,Math.min(w,h)*.15,'#d9bee2','#75677f',1);
        rr(c,x,y,w,h,18,gradient(c,x,y,w,h,[[0,'#f6dde0'],[.52,'#d8c5e4'],[1,'#ac9bbe']]),'#75677f',2);c.shadowColor='transparent';
        rr(c,x+7,y+7,w-14,h-14,14,gradient(c,x+7,y+7,w-14,h-14,[[0,'#fff1e2'],[1,'#dccbe8']]),'#9f8fad',1.4);
        rr(c,x+14,y+16,w-28,h*.5,11,'#fff2dc','#b3a0b5',1);
        rr(c,x+14,y+h*.56,w-28,h*.27,10,'#c7dfcf','#8ba691',1);
        rr(c,x+2,y+h*.28,w*.16,h*.52,8,'#d5bcd9','#8d7894',1);
        rr(c,x+w*.82,y+h*.28,w*.16,h*.52,8,'#d5bcd9','#8d7894',1);
        c.strokeStyle='#b5a0bb';c.lineWidth=1.6;c.beginPath();c.moveTo(x+18,y+h*.53);c.lineTo(x+w-18,y+h*.53);c.stroke();
        star(c,0,y+h*.32,Math.min(w,h)*.12,Math.min(w,h)*.052,'#f3cf78','#8a718b',.6);
        stitch(c,x+16,y+18,w-32,h*.47,8);stitch(c,x+17,y+h*.58,w-34,h*.23,7);break;
      }
      case 'coffeeTable':{
        oval(c,2,8,w*.5,h*.5,'#6f7153');c.shadowColor='transparent';
        const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#e2edbe');g.addColorStop(.5,'#a9cc91');g.addColorStop(1,'#6f9f72');oval(c,0,0,w*.49,h*.47,g,'#55775a',2);
        poly(c,[[0,0],[w*.45,-h*.27],[w*.48,-h*.05],[w*.12,h*.08]],'#f7e7b0');oval(c,0,0,w*.43,h*.39,null,'#edf4c6',1.5);
        c.strokeStyle='#5f875f';c.lineWidth=1;c.beginPath();c.moveTo(-w*.37,h*.08);c.quadraticCurveTo(-w*.08,-h*.08,w*.32,h*.18);c.stroke();
        rr(c,-w*.2,-h*.24,w*.26,h*.37,4,'#fff3d9','#bda98b',1);star(c,w*.2,h*.08,Math.min(w,h)*.1,Math.min(w,h)*.045,'#f3ce7b','#698164',.5);break;
      }
      case 'sideTable':{
        disc(c,1,6,w*.49,'#657b75');c.shadowColor='transparent';disc(c,0,0,w*.47,'#b9ddd3','#627f78',2);
        for(const [cx,cy,r,col] of [[-w*.14,h*.03,w*.24,'#d6f0e6'],[w*.16,h*.05,w*.22,'#f3d4c8'],[0,-h*.19,w*.2,'#fff0b8']]){disc(c,cx,cy,r,col,'#71827e',.8);disc(c,cx-r*.28,cy-r*.3,r*.16,'rgba(255,255,255,.58)');}
        break;
      }
      case 'dresser':{
        raisedCase(c,x,y,w,h,5,7,'#67462f');
        wood(c,x,y,w,h);c.shadowColor='transparent';rr(c,x+5,y+5,w-10,h-13,3,null,'#e3b48a',1);
        rr(c,x+5,y+h-10,w-10,7,2,'#805337','#583d2d',.8);
        for(let i=0;i<3;i++){const xx=x+w*(.25+i*.25);disc(c,xx,y+h-6,1.7,'#e5bd73','#745b41',.5);}
        rr(c,x+w*.12,y+h*.15,w*.26,h*.2,3,'#d4ad79','#8a5e40',.8);
        disc(c,x+w*.74,y+h*.34,Math.min(w,h)*.11,'#778c62','#536546',1);
        break;
      }
      case 'nightstand':{
        raisedCase(c,x,y,w,h,5,6,'#765037');
        wood(c,x,y,w,h);c.shadowColor='transparent';rr(c,x+5,y+5,w-10,h-14,4,null,'#d4a172',1);
        rr(c,x+6,y+h-11,w-12,8,2,'#895a3e','#70492f',1);disc(c,0,y+h-7,2,'#e7be76');
        rr(c,x+w*.16,y+h*.14,w*.38,h*.19,2,'#e7dfc9','#9b8367',.8);
        disc(c,x+w*.7,y+h*.39,Math.min(w,h)*.11,'#d4bd92','#8a7557',.8);break;
      }
      case 'bookcase':{
        raisedCase(c,x,y,w,h,4,8,'#483525');
        wood(c,x,y,w,h);c.shadowColor='transparent';rr(c,x+6,y+5,w-12,h-10,2,'#5f402c','#9e6d47',1.5);
        const colors=['#9db49a','#e4c483','#a77968','#b9c9c8','#ddaa88','#6e8c7b'];for(let row=0;row<5;row++){const yy=y+8+row*(h-17)/5;rr(c,x+5,yy+(h-17)/5-3,w-10,3,1,'#c19166');for(let col=0;col<5;col++){const xx=x+9+col*(w-18)/5;rr(c,xx,yy+1,(w-18)/5-1,(h-17)/5-6,1,colors[(row*3+col)%colors.length],'#453d3566',.5);}}
        break;
      }
      case 'stool':{
        for(let a=0;a<4;a++){const ang=a*Math.PI/2+Math.PI/4;disc(c,Math.cos(ang)*w*.32,Math.sin(ang)*h*.32,Math.min(w,h)*.1,'#5b493e');}
        c.shadowColor='transparent';disc(c,1,5,w*.43,'#5e402f');disc(c,0,0,w*.43,'#915e40','#60432e',2);disc(c,0,-1,w*.34,'#ba865b','#dfab7d',1);c.strokeStyle='#e1b48599';c.beginPath();c.arc(0,0,w*.26,.4,2.8);c.stroke();break;
      }
      case 'ceilingLight':{
        c.shadowColor='transparent';glow(c,Math.min(w,h)*.72);
        for(let i=0;i<8;i++){const a=i*Math.PI/4;c.save();c.rotate(a);oval(c,0,-h*.25,w*.14,h*.23,i%2?'#f1c9d0':'#c8ded0','#7d7180',.7);c.restore();}
        disc(c,0,0,w*.25,'#fff0b7','#8e7b64',1.2);disc(c,-w*.07,-h*.08,w*.06,'rgba(255,255,255,.78)');break;
      }
      case 'pendantLight':{
        c.shadowColor='transparent';glow(c,Math.min(w,h)*.74);
        star(c,2,4,w*.43,w*.2,'#74687d');star(c,0,0,w*.42,w*.19,gradient(c,x,y,w,h,[[0,'#fff1b9'],[.45,'#e9ca89'],[1,'#c5aedb']]),'#75687d',1.3);
        star(c,-w*.08,-h*.1,w*.11,w*.05,'rgba(255,255,255,.52)');friendlyMark(c,0,h*.04,w*.26,'#675b70');break;
      }
      case 'floorLamp':{
        c.shadowColor='transparent';
        oval(c,1,h*.35,w*.32,h*.08,'rgba(46,46,52,.2)');oval(c,0,h*.3,w*.31,h*.08,'#b9cdbf','#65786f',1.1);
        rr(c,-w*.04,-h*.06,w*.08,h*.37,3,'#789687','#536d62',.8);
        glow(c,Math.min(w,h)*.62);
        for(const [cx,cy,r] of [[-w*.23,-h*.2,w*.22],[0,-h*.29,w*.27],[w*.24,-h*.2,w*.22],[w*.06,-h*.11,w*.28]])disc(c,cx,cy,r,'#f7f1dd','#7d7880',.9);
        friendlyMark(c,0,-h*.18,w*.3,'#746b78');break;
      }
      case 'lamp':
      case 'tableLamp':{
        // A compact flower-bud lamp: recognizable, friendly and fully
        // contained inside the transparent live-control target.
        c.shadowColor='transparent';
        const shadeY=-h*.19,light=c.createRadialGradient(0,shadeY,1,0,shadeY,Math.min(w,h)*.61);
        light.addColorStop(0,'#fff6c999');light.addColorStop(.48,'#ffd77635');light.addColorStop(1,'#ffd77600');
        disc(c,0,shadeY,Math.min(w,h)*.58,light);
        oval(c,2,h*.31,w*.3,h*.1,'rgba(42,35,28,.18)');oval(c,0,h*.27,w*.29,h*.1,'#b8d0c0','#5c756a',1.1);
        rr(c,-w*.04,-h*.01,w*.08,h*.29,Math.max(1,w*.03),'#78998a','#526f62',.7);
        for(const [cx,a,col] of [[-w*.2,-.58,'#e9bfc9'],[0,0,'#fff1b9'],[w*.2,.58,'#c9b8df']]){c.save();c.translate(cx,shadeY);c.rotate(a);oval(c,0,0,w*.22,h*.24,col,'#776b7d',.8);oval(c,-w*.05,-h*.05,w*.05,h*.08,'rgba(255,255,255,.56)');c.restore();}
        disc(c,0,shadeY+h*.04,w*.13,'#fff5c9','#7d706f',.7);break;
      }
      case 'wallSconce':{
        c.shadowColor='transparent';glow(c,Math.min(w,h)*.72);oval(c,0,h*.04,w*.37,h*.34,'#e7bd8a','#745c48',1.2);
        rr(c,-w*.38,-h*.34,w*.76,h*.22,7,'#a87855','#664c3d',1);for(let xx=-w*.28;xx<w*.3;xx+=w*.18){c.beginPath();c.moveTo(xx,-h*.31);c.lineTo(xx+w*.14,-h*.14);c.strokeStyle='#6a5143';c.lineWidth=.7;c.stroke();}
        friendlyMark(c,0,h*.07,w*.3,'#6b554b');break;
      }
      case 'thermostat':{
        // A raised wall thermostat: the display is neutral until HA state art is overlaid.
        raisedCase(c,x+1,y+1,w-2,h-5,7,4,'#38474d');
        rr(c,x,y,w,h-5,7,gradient(c,x,y,w,h,[[0,'#edf1e8'],[.62,'#c6d0ca'],[1,'#879a9b']]),'#4e6064',1.5);
        rr(c,x+5,y+5,w-10,h*.52,3,'#243a45','#7c9297',1);
        rr(c,x+7,y+7,w-14,h*.38,2,gradient(c,x+7,y+7,w-14,h*.38,[[0,'#a9cad0'],[1,'#527d8b']]));
        disc(c,0,y+h*.18,Math.min(w,h)*.1,'#e5e7d8','#6c7c7a',1);
        for(let i=0;i<4;i++)rr(c,x+9+i*(w-18)/4,y+h*.7,(w-22)/6,1.4,0,'#708487');
        break;
      }
      case 'presenceSwitch':{
        // A wall-mounted dimmer plate with a distinct rocker and three
        // occupancy pips. Live HA art animates these same attached pips.
        raisedCase(c,x+1,y+2,w-2,h-4,5,4,'#3f4b4e');
        rr(c,x,y,w,h-3,5,gradient(c,x,y,w,h,[[0,'#f7f4ea'],[.58,'#d9d8cf'],[1,'#9ba6a4']]),'#526064',1.2);
        rr(c,x+w*.22,y+h*.14,w*.56,h*.56,3,gradient(c,x+w*.22,y+h*.14,w*.56,h*.56,[[0,'#ffffff'],[.48,'#dfded5'],[1,'#a5aeaa']]),'#687578',.8);
        c.beginPath();c.moveTo(x+w*.28,y+h*.39);c.lineTo(x+w*.72,y+h*.39);c.strokeStyle='rgba(88,103,104,.55)';c.lineWidth=.8;c.stroke();
        for(let i=0;i<3;i++)disc(c,x+w*(.34+i*.16),y+h*.82,Math.max(1.3,w*.045),i===1?'#63c9aa':'#78938a','#536762',.45);
        break;
      }
      case 'humidifier':{
        // A translucent water tank, top mist outlet, illuminated control and
        // weighted base make this unmistakably a humidifier from overhead.
        const bx=x+w*.12,by=y+h*.1,bw=w*.76,bh=h*.82,r=Math.max(6,w*.16);
        raisedCase(c,bx+1,by+2,bw-2,bh-2,r,5,'#547477');
        const shell=c.createLinearGradient(bx,by,bx+bw,by+bh);
        shell.addColorStop(0,'#f4fffb');shell.addColorStop(.34,'#cfe5e1');shell.addColorStop(.7,'#8bb8b8');shell.addColorStop(1,'#476a70');
        rr(c,bx,by,bw,bh,r,shell,'#648184',1.2);
        // Clear upper reservoir with a visible water line.
        const tankY=by+h*.11,tankH=bh*.5;
        const water=c.createLinearGradient(0,tankY,0,tankY+tankH);
        water.addColorStop(0,'rgba(236,255,251,.9)');water.addColorStop(.38,'rgba(176,225,222,.82)');water.addColorStop(1,'rgba(92,166,169,.9)');
        rr(c,bx+3,tankY,bw-6,tankH,Math.max(4,r-3),water,'rgba(234,255,250,.8)',.8);
        c.save();c.beginPath();c.roundRect(bx+4,tankY+2,bw-8,tankH-4,Math.max(3,r-4));c.clip();
        c.strokeStyle='rgba(245,255,252,.72)';c.lineWidth=1.2;
        c.beginPath();c.moveTo(bx+5,tankY+tankH*.62);c.bezierCurveTo(bx+bw*.33,tankY+tankH*.55,bx+bw*.62,tankY+tankH*.69,bx+bw-5,tankY+tankH*.6);c.stroke();
        c.restore();
        // Raised outlet and small dark aperture on the lid.
        oval(c,0,by+h*.055,bw*.31,h*.07,'#eafff9','#668286',1);
        oval(c,0,by+h*.055,bw*.14,h*.03,'#6f9091','#39575b',.7);
        // Stable base, intake slots and a mint control light.
        const baseY=by+bh*.72;
        rr(c,bx+2,baseY,bw-4,bh*.27,Math.max(4,r*.65),'#314f57','#203b42',.9);
        for(let i=0;i<3;i++)rr(c,bx+bw*.2+i*bw*.2,baseY+bh*.16,bw*.11,1.2,1,'#8db3b1');
        disc(c,0,baseY+bh*.12,Math.max(1.8,w*.045),'#a4ffe3','#3a756a',.7);
        rr(c,bx+bw*.13,by+bh*.12,bw*.08,tankH*.58,2,'rgba(255,255,255,.42)');
        break;
      }
      case 'airPurifier':{
        const g=c.createLinearGradient(-24,-31,24,31);g.addColorStop(0,'#f4f7f3');g.addColorStop(.5,'#d6e0dc');g.addColorStop(1,'#8fa19d');
        raisedCase(c,-23,-30,46,58,9,6,'#6f817e');rr(c,-23,-30,46,58,9,g,'#71837f',1.3);
        rr(c,-17,-20,34,28,5,'#263c3e','#6f8581',1);
        for(let y=-15;y<5;y+=5)rr(c,-13,y,26,2,1,'#83a39b');
        oval(c,0,17,11,5,'#b9d7ce','#607a73',1);disc(c,0,17,2,'#59bca4');
        break;
      }
      case 'windowFan':{
        // A compact five-blade fan recessed into the existing blue window.
        rr(c,x,y,w,h,3,'#26343b','#0d1e27',1.2);
        rr(c,x+3,y+3,w-6,h-6,2,gradient(c,x+3,y+3,w-6,h-6,[[0,'#a0d6eb'],[.55,'#6ab1d0'],[1,'#3b799c']]),'#c8e8ee',.8);
        for(const side of [-1,1])rr(c,side<0?x+4:x+w-9,y+5,5,h-10,1,'#536976','#22343d',.6);
        const radius=Math.min(w,h)*.37;
        disc(c,0,0,radius,'#344851','#dce8e5',1.2);
        for(let i=0;i<5;i++){
          c.save();c.rotate(i*Math.PI*2/5);
          oval(c,0,-radius*.56,radius*.23,radius*.48,'#8ba8b1','#66838f',.55);
          c.restore();
        }
        disc(c,0,0,radius*.28,'#f5f0d8','#5c747b',.8);
        break;
      }
      case 'garagePriusBlue':{
        // Orthographic parked hatchback, nose toward +Y like the shared +Z
        // model. The car carries no road, garage floor, or baked light state.
        const line=Math.min(w,h)*.018;
        for(const side of [-1,1]){
          for(const axle of [-.29,.29]){
            rr(c,side*w*.42-w*.055,axle*h-h*.062,w*.11,h*.124,w*.025,'#303943','#192531',line);
            rr(c,side*w*.45-w*.012,axle*h-h*.042,w*.025,h*.084,w*.008,'#899eae');
          }
        }
        c.beginPath();c.moveTo(-w*.30,-h*.475);
        c.bezierCurveTo(-w*.41,-h*.46,-w*.43,-h*.30,-w*.43,-h*.08);
        c.lineTo(-w*.41,h*.31);c.quadraticCurveTo(-w*.38,h*.485,-w*.24,h*.49);
        c.lineTo(w*.24,h*.49);c.quadraticCurveTo(w*.38,h*.485,w*.41,h*.31);
        c.lineTo(w*.43,-h*.08);c.bezierCurveTo(w*.43,-h*.30,w*.41,-h*.46,w*.30,-h*.475);
        c.closePath();c.fillStyle=gradient(c,x,y,w,h,[[0,'#4172a4'],[.18,'#7ba6cf'],[.48,'#5085ba'],[.83,'#75a6d4'],[1,'#316699']]);
        c.fill();c.strokeStyle='#27547d';c.lineWidth=line*1.5;c.stroke();
        poly(c,[[-w*.32,-h*.38],[w*.32,-h*.38],[w*.29,-h*.16],[-w*.29,-h*.16]],'#283f53','#b5d0e4',line);
        poly(c,[[-w*.29,-h*.355],[w*.27,-h*.355],[w*.25,-h*.19],[-w*.26,-h*.19]],gradient(c,-w*.3,-h*.36,w*.6,h*.17,[[0,'#7b9faf'],[.5,'#476a84'],[1,'#304d66']]));
        rr(c,-w*.345,-h*.41,w*.69,h*.035,w*.018,'#80acd0','#345f85',line);
        for(const side of [-1,1]){
          const p=v=>side*w*v;
          poly(c,[[p(.33),-h*.32],[p(.395),-h*.28],[p(.38),h*.17],[p(.30),h*.10]],'#29465d','#8fb5cf',line);
          poly(c,[[p(.344),-h*.235],[p(.378),-h*.20],[p(.367),h*.045],[p(.322),h*.01]],'#668da6');
          rr(c,side*w*.35-w*.02,-h*.075,w*.04,h*.035,w*.008,'#cbd9de');
          rr(c,side*w*.35-w*.02,h*.12,w*.04,h*.03,w*.008,'#cbd9de');
          rr(c,side*w*.455-w*.045,h*.14,w*.09,h*.05,w*.028,'#6c9ac4','#2d587c',line);
        }
        rr(c,-w*.285,-h*.16,w*.57,h*.26,w*.09,gradient(c,-w*.28,-h*.16,w*.56,h*.26,[[0,'#91b7d6'],[.4,'#72a2ce'],[1,'#4d83b5']]),'#b8d1e2',line);
        poly(c,[[-w*.29,h*.105],[w*.29,h*.105],[w*.355,h*.285],[-w*.355,h*.285]],'#29495f','#abc7d8',line);
        poly(c,[[-w*.265,h*.13],[w*.26,h*.13],[w*.31,h*.255],[-w*.31,h*.255]],gradient(c,-w*.3,h*.13,w*.6,h*.13,[[0,'#88b5cb'],[.38,'#517993'],[1,'#365774']]));
        poly(c,[[-w*.25,h*.14],[-w*.19,h*.14],[w*.19,h*.25],[w*.10,h*.25]],'#d5ecf255');
        for(const side of [-1,1]){
          poly(c,[[side*w*.36,h*.31],[side*w*.34,h*.41],[side*w*.20,h*.45],[side*w*.24,h*.36]],'#f7f3de','#87a7b5',line);
          rr(c,side*w*.315-w*.035,-h*.446,w*.07,h*.077,w*.013,'#d75b61','#7b3f58',line);
          rr(c,side*w*.315-w*.025,-h*.43,w*.05,h*.018,w*.008,'#f7ccb0');
        }
        rr(c,-w*.22,h*.455,w*.44,h*.026,w*.015,'#263e50');
        rr(c,-w*.10,h*.425,w*.20,h*.025,w*.009,'#e8ebdf','#91a9b7',line);
        oval(c,0,h*.35,w*.037,h*.011,'#c9dde6','#517a96',line*.7);
        c.beginPath();c.moveTo(-w*.28,h*.32);c.quadraticCurveTo(0,h*.29,w*.28,h*.32);c.strokeStyle='#b6d5eb88';c.lineWidth=line;c.stroke();
        break;
      }
      case 'garageCeilingLight':{
        const r=Math.min(w,h)*.11,line=Math.min(w,h)*.045;
        rr(c,-w*.47,-h*.38,w*.94,h*.76,r,'#4d5b68','#263c4c',line);
        rr(c,-w*.44,-h*.34,w*.88,h*.66,r,gradient(c,x,y,w,h,[[0,'#e2e9df'],[.5,'#cad4cf'],[1,'#99acae']]),'#eef4e7',line*.6);
        for(const dy of [-.18,.18]){
          rr(c,-w*.36,dy*h-h*.10,w*.72,h*.2,r*.6,'#819797');
          rr(c,-w*.345,dy*h-h*.085,w*.69,h*.14,r*.5,gradient(c,x,y,w,h,[[0,'#ffffff'],[.5,'#eef1df'],[1,'#c8d2c6']]));
          rr(c,-w*.33,dy*h-h*.075,w*.65,h*.022,r*.4,'#ffffff');
        }
        for(const dx of [-.405,.405])disc(c,w*dx,0,Math.min(w,h)*.035,'#657a81');
        break;
      }
      case 'garageDoor':{
        if(o.garageRoof==='cutaway'){
          const line=Math.min(w,h)*.01;
          rr(c,-w*.50,-h*.39,w,h*.96,w*.015,'#d9d5cb','#a99e90',line);
          rr(c,-w*.375,-h*.30,w*.75,h*.60,w*.008,gradient(c,-w*.375,-h*.3,w*.75,h*.6,[[0,'#c1bbae'],[.48,'#dcd5c8'],[1,'#d0c8ba']]));
          for(const side of [-1,1]){
            rr(c,side*w*.42-w*.045,-h*.36,w*.09,h*.72,w*.01,'#bd9e7e','#887564',line);
            rr(c,side*w*.42-w*.031,-h*.355,w*.062,h*.70,w*.005,'#e8dcc6');
          }
          rr(c,-w*.44,-h*.36,w*.88,h*.055,w*.006,'#d2b38d','#8d7562',line);
          rr(c,-w*.43,-h*.356,w*.86,h*.026,w*.005,'#f1e4cd');
          rr(c,-w*.37,h*.345,w*.74,h*.033,w*.006,'#8caaa0','#496b64',line);
          rr(c,-w*.36,h*.35,w*.72,h*.009,w*.002,'#d9e7cf');
          for(const side of [-1,1])rr(c,side*w*.42-w*.05,h*.325,w*.1,h*.07,w*.008,'#f4e6cf','#998570',line);
          break;
        }
        // Detached miniature garage: driveway, building shell, hipped roof,
        // paneled door, porch lamp, and two shrubs read clearly from above.
        rr(c,x+w*.12,y+h*.69,w*.76,h*.29,5,'#c9c4b5','#817d73',1);
        for(let i=0;i<4;i++)rr(c,x+w*(.18+i*.17),y+h*.72,w*.11,h*.22,2,i%2?'#b6b2a5':'#d9d4c6');
        raisedCase(c,x+w*.08,y+h*.13,w*.84,h*.63,8,7,'#23353d');
        rr(c,x+w*.09,y+h*.16,w*.82,h*.57,7,'#e4d9c4','#6e6255',1.5);
        c.beginPath();c.moveTo(x+w*.05,y+h*.27);c.lineTo(0,y);c.lineTo(x+w*.95,y+h*.27);c.lineTo(x+w*.84,y+h*.43);c.lineTo(x+w*.16,y+h*.43);c.closePath();
        c.fillStyle=gradient(c,x,y,w,h*.45,[[0,'#9b6b55'],[.48,'#c18a69'],[1,'#6f4c42']]);c.fill();c.strokeStyle='#563d38';c.lineWidth=1.5;c.stroke();
        c.beginPath();c.moveTo(0,y+h*.03);c.lineTo(0,y+h*.39);c.strokeStyle='rgba(255,224,184,.42)';c.lineWidth=1.2;c.stroke();
        const dx=x+w*.2,dy=y+h*.43,dw=w*.6,dh=h*.28;
        rr(c,dx,dy,dw,dh,3,'#d9ded8','#52646a',1.4);
        for(let row=1;row<4;row++){c.beginPath();c.moveTo(dx+3,dy+row*dh/4);c.lineTo(dx+dw-3,dy+row*dh/4);c.strokeStyle='#8fa09f';c.lineWidth=.8;c.stroke();}
        for(let col=1;col<4;col++){c.beginPath();c.moveTo(dx+col*dw/4,dy+2);c.lineTo(dx+col*dw/4,dy+dh-2);c.strokeStyle='rgba(113,132,132,.55)';c.lineWidth=.6;c.stroke();}
        disc(c,x+w*.84,y+h*.5,3,'#ffd477','#6d5735',.7);
        for(const sx of [x+w*.11,x+w*.89]){disc(c,sx,y+h*.69,8,'#315f44','#24483a',1);disc(c,sx-2,y+h*.65,5,'#5e9156');}
        break;
      }
      case 'floorPlant':{
        disc(c,2,8,w*.37,'#6b5443','#4c4139',2);c.shadowColor='transparent';disc(c,0,0,w*.32,'#ad9c7f','#e0cdae',2);disc(c,0,0,w*.27,'#594a35');
        for(let i=0;i<13;i++){const ang=i*2.399,rad=w*(.12+.11*(i%3));leaf(c,Math.cos(ang)*rad,Math.sin(ang)*rad,w*(.13+.02*(i%2)),h*.21,ang,(['#4b8057','#80a85e','#5f9666','#a4ba65'])[i%4]);}disc(c,0,0,w*.09,'#c0cd7e');break;
      }
      case 'artwork':{
        rr(c,x,y,w,h,3,'#594535','#352b28',2);c.shadowColor='transparent';rr(c,x+5,y+5,w-10,h-10,2,'#dec8a4','#a78760',1);rr(c,x+9,y+9,w-18,h-18,1,'#c0d1bb');
        c.fillStyle='#7da1a2';c.beginPath();c.moveTo(x+10,y+h*.64);c.quadraticCurveTo(0,y+h*.2,x+w-10,y+h*.55);c.lineTo(x+w-10,y+h-10);c.lineTo(x+10,y+h-10);c.fill();
        for(let i=0;i<5;i++){const xx=x+w*(.2+i*.15);leaf(c,xx,y+h*.48,w*.055,h*.19,-.7+i*.28,i%2?'#56815f':'#8aa56d');}disc(c,x+w*.76,y+h*.28,h*.065,'#f7db9a');break;
      }
      case 'mirror':{
        rr(c,x,y,w,h,7,'#876d51','#5a4737',2);c.shadowColor='transparent';const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#dcebed');g.addColorStop(.45,'#9fbac4');g.addColorStop(1,'#eff8ee');rr(c,x+5,y+5,w-10,h-10,5,g,'#e3ceaa',2);
        c.fillStyle='#ffffff9c';c.beginPath();c.moveTo(x+w*.18,y+8);c.lineTo(x+w*.42,y+8);c.lineTo(x+w*.19,y+h-8);c.lineTo(x+w*.1,y+h-8);c.fill();rr(c,x+w*.63,y+8,w*.07,h*.58,2,'#ffffff55');break;
      }
      case 'window':{
        // Match the recessed top-down wall opening used by raster exports.
        // The shallow depth and narrow inner sill rotate with the wall.
        c.fillStyle='#101e29';c.fillRect(x,y,w,h);
        c.fillStyle='#344956';c.fillRect(x+2,y+2,w-4,h-4);
        c.fillStyle='#0b202f';c.fillRect(x+4,y+4,w-8,h-9);
        const g=c.createLinearGradient(0,y+5,0,y+h-6);
        g.addColorStop(0,'#39708d');g.addColorStop(.25,'#78b4d0');
        g.addColorStop(.62,'#8bc3d9');g.addColorStop(1,'#457d98');
        c.fillStyle=g;c.fillRect(x+5,y+5,w-10,h-11);
        const panes=Math.max(1,Math.round(w/65));
        for(let i=1;i<panes;i++){
          const px=x+5+i*(w-10)/panes;
          c.fillStyle='#34556a';c.fillRect(px-1,y+5,2,h-11);
          c.fillStyle='#9bc8d5';c.fillRect(px+1,y+5,1,h-11);
        }
        c.fillStyle='rgba(231,249,252,.3)';c.fillRect(x+6,y+7,w-12,1);
        c.fillStyle='#9eb6b8';c.fillRect(x+2,y+3,2,h-6);c.fillRect(x+w-4,y+3,2,h-6);
        c.fillStyle='#aebfc0';c.fillRect(x+4,y+h-4,w-8,1.5);
        c.fillStyle='rgba(28,35,36,.4)';c.fillRect(x+4,y+h-2,w-8,1);break;
      }
    }
    c.restore();return true;
  }
  function prepareExport(){
    const wait=(image,label)=>{
      if(image.complete)return image.naturalWidth>0?Promise.resolve():Promise.reject(new Error(`${label} failed to decode`));
      return new Promise((resolve,reject)=>{
        image.addEventListener('load',()=>image.naturalWidth>0?resolve():reject(new Error(`${label} decoded without pixels`)),{once:true});
        image.addEventListener('error',()=>reject(new Error(`${label} failed to load`)),{once:true});
      });
    };
    // Export is a release artifact, so it must never silently substitute the
    // vector fallback merely because an authored atlas was late or corrupt.
    return Promise.all([wait(atlas,'Furniture atlas'),wait(babyAtlas,'Overhead object atlas')]);
  }
  window.RoomcraftObjectArt={draw,prepareExport};
})();
