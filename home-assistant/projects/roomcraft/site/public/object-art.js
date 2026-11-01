/* Illustrated top-down art for objects that do not have a cutout in the PNG. */
(() => {
  'use strict';
  const supported=new Set(['armchair','coffeeTable','sideTable','dresser','nightstand','bookcase','stool','ceilingLight','pendantLight','floorLamp','tableLamp','wallSconce','thermostat','windowFan','garageDoor','floorPlant','artwork','mirror','window']);
  // These cells face the same near-top-down camera as the supplied plan.
  // Front-facing atlas pieces use the perspective-aware canvas art below.
  const atlas=new Image();
  const atlasRegions={
    armchair:[46,45,244,250],coffeeTable:[360,82,291,204],floorPlant:[1017,341,231,255]
  };
  atlas.addEventListener('load',()=>window.dispatchEvent(new Event('roomcraft-asset-loaded')));
  atlas.src='assets/illustrated-furniture-atlas.png';
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
  babyAtlas.src='assets/baby-and-home-overhead-atlas.png';
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
    c.save();c.shadowColor='#1f2b2545';c.shadowBlur=9;c.shadowOffsetX=2;c.shadowOffsetY=7;
    rr(c,x+2,y+depth,w-2,h,r,color);c.restore();
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
    c.shadowColor='rgba(31,30,26,.25)';c.shadowBlur=9;c.shadowOffsetX=2;c.shadowOffsetY=3;
    oval(c,0,0,w*.43,h*.43,'rgba(39,38,32,.13)');c.restore();
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
  function drawCatalog(c,o,t){
    if(drawBabyAtlas(c,o,t))return true;
    const p={base:'#d9b98b',accent:'#a67a57',detail:'#f3dfb5',dark:'#604935',...(t.palette||{})};
    const f=t.form||'',family=t.artFamily;
    if(!family)return false;
    if(family!=='ceilingFan'&&!(family==='paddedPanel'&&f==='photoPlayYard'))worldContact(c,o);
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.scale(o.w/100,o.h/100);c.lineJoin='round';c.lineCap='round';
    switch(family){
      case 'softToy':{
        if(f==='photoBunnyPlush'){
          contact(c,-30,-43,60,86,25);
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
          contact(c,-46,-36,92,75,8);
          for(const x of [-34,31])for(const y of [-28,26])rr(c,x,y,7,17,2,'#5087b5','#35536f',.8);
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
          rr(c,-44,-39,88,74,5,gradient(c,-44,-39,88,74,[[0,'#c0c2bd'],[.5,'#9fa5a1'],[1,'#858e8a']]),'#d6d6cd',1.2);
          c.save();c.beginPath();c.roundRect(-43,-38,86,72,4);c.clip();
          for(const [x,y,dir] of [[-28,-25,1],[8,-27,-1],[-32,7,-1],[7,8,1]]){
            c.strokeStyle='rgba(240,240,229,.62)';c.lineWidth=1.4;c.beginPath();c.moveTo(x-9,y+11);c.quadraticCurveTo(x+2,y-5,x+23,y-13);c.stroke();
            for(let j=0;j<3;j++){const lx=x+j*9,ly=y+5-j*5;
              leaf(c,lx,ly,4.5,8,dir*(.8+j*.28),'rgba(232,235,224,.59)');
              leaf(c,lx+7,ly-5,4,7,-dir*(.5+j*.24),'rgba(218,224,215,.56)');}
          }
          c.restore();stitch(c,-43,-38,86,72,4);break;
        }
        if(f==='photoCheckerMat'){
          contact(c,-47,-40,94,80,4);rr(c,-47,-40,94,80,5,'#8e8374','#61564d',1.3);
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
        contact(c,-46,-39,92,78,round?40:12);
        if(round)oval(c,0,0,44,38,p.dark,p.dark,1);
        else rr(c,-46,-39,92,78,12,p.dark);
        c.save();c.beginPath();if(round)c.ellipse(0,-3,42,35,0,0,Math.PI*2);else c.roundRect(-44,-39,88,72,11);c.clip();
        c.fillStyle=topGradient(c,-44,-39,88,72,p);c.fillRect(-46,-40,92,80);
        if(f==='puzzle'||f==='foam'){
          const colors=[p.base,p.accent,p.detail,'#94b6aa','#e1b4a2','#d9cc91'];
          for(let row=0;row<3;row++)for(let col=0;col<4;col++){rr(c,-44+col*22,-39+row*24,22,24,2,colors[(row*4+col)%colors.length],'rgba(67,59,47,.18)',.8);}
        }else{
          for(let i=0;i<12;i++){const x=-35+(i%4)*23,y=-27+Math.floor(i/4)*23;disc(c,x,y,6,i%3?p.accent:p.detail,'rgba(255,255,255,.45)',1);}
          if(f==='tummy'){c.beginPath();c.moveTo(-37,-4);c.bezierCurveTo(-9,-22,9,17,37,-5);c.strokeStyle='rgba(255,255,255,.54)';c.lineWidth=5;c.stroke();}
        }
        c.restore();c.strokeStyle='rgba(255,250,233,.72)';c.lineWidth=2;
        c.beginPath();if(round)c.ellipse(0,-3,42,35,0,0,Math.PI*2);else c.roundRect(-44,-39,88,72,11);c.stroke();
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
        c.save();c.shadowColor='rgba(45,39,32,.16)';c.shadowBlur=5;c.shadowOffsetX=2;c.shadowOffsetY=3;
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
        if(f==='docked'){contact(c,-40,-47,80,95,8);rr(c,-26,-46,52,19,6,p.dark);rr(c,-21,-43,42,10,3,p.accent);}
        contact(c,-37,-37,74,74,37);disc(c,0,5,37,p.dark);disc(c,0,0,36,topGradient(c,-36,-36,72,72,p),p.dark,2);
        disc(c,0,0,30,null,p.accent,2);disc(c,0,-8,11,p.dark,p.accent,1);disc(c,0,-8,8,p.detail,p.dark,1);
        rr(c,-8,20,16,5,2,p.accent);disc(c,-13,-18,3,'rgba(255,255,255,.5)');
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
          contact(c,-42,-41,84,83,19);
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
      default:c.restore();return false;
    }
    c.restore();return true;
  }
  function draw(c,o){
    const expanded=window.RoomcraftInventory?.byType?.[o.type];
    if(expanded?.artFamily)return drawCatalog(c,o,expanded);
    if(!supported.has(o.type))return false;
    if(drawAtlas(c,o))return true;
    const w=o.w,h=o.h,x=-w/2,y=-h/2;
    if(o.type!=='ceilingLight'&&o.type!=='pendantLight'&&o.type!=='wallSconce'&&o.type!=='thermostat'&&o.type!=='windowFan'&&o.type!=='window')worldContact(c,o);
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.shadowColor='transparent';
    switch(o.type){
      case 'armchair':{
        raisedCase(c,x,y,w,h,16,8,'#8a735b');
        rr(c,x,y,w,h,16,gradient(c,x,y,w,h,[[0,'#ecdbc4'],[.52,'#c6a786'],[1,'#9e8067']]),'#816d59',2);c.shadowColor='transparent';
        rr(c,x+7,y+7,w-14,h-14,13,gradient(c,x+7,y+7,w-14,h-14,[[0,'#f5e5cc'],[1,'#d3b696']]),'#a78c6a',1.4);
        rr(c,x+14,y+16,w-28,h*.5,10,gradient(c,x+14,y+16,w-28,h*.5,[[0,'#f8e9d3'],[.65,'#ead5b7'],[1,'#ccb093']]),'#c5a787',1);
        rr(c,x+14,y+h*.56,w-28,h*.27,9,gradient(c,x+14,y+h*.56,w-28,h*.27,[[0,'#f4e2c7'],[1,'#d0b492']]),'#c3aa89',1);
        rr(c,x+2,y+h*.28,w*.16,h*.52,7,'#c9ad8a','#9e8368',1);
        rr(c,x+w*.82,y+h*.28,w*.16,h*.52,7,'#c9ad8a','#9e8368',1);
        c.strokeStyle='#b9a182';c.lineWidth=1.6;c.beginPath();c.moveTo(x+18,y+h*.53);c.lineTo(x+w-18,y+h*.53);c.stroke();
        rr(c,x+w*.29,y+h*.24,w*.28,h*.18,5,'#a8b495','#82957b',1);
        stitch(c,x+16,y+18,w-32,h*.47,8);stitch(c,x+17,y+h*.58,w-34,h*.23,7);break;
      }
      case 'coffeeTable':{
        oval(c,2,8,w*.5,h*.5,'#5e402f');c.shadowColor='transparent';
        const g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#c98f5b');g.addColorStop(.5,'#ac7146');g.addColorStop(1,'#8f5838');oval(c,0,0,w*.49,h*.47,g,'#6c422c',2);
        oval(c,0,0,w*.43,h*.39,null,'#e1ad76',1.7);c.strokeStyle='#70452d88';for(let i=-2;i<=2;i++){c.beginPath();c.moveTo(x+15,y+h*(.3+i*.1));c.quadraticCurveTo(0,y+h*(.27+i*.1),x+w-15,y+h*(.33+i*.1));c.stroke();}
        rr(c,-w*.2,-h*.24,w*.26,h*.37,3,'#e9e4ce','#bdad94',1);rr(c,-w*.17,-h*.2,w*.2,h*.06,1,'#8eaa91');disc(c,w*.18,h*.1,Math.min(w,h)*.09,'#d5e0c7','#f4f0d9',1);break;
      }
      case 'sideTable':{
        disc(c,1,6,w*.49,'#704a32');c.shadowColor='transparent';disc(c,0,0,w*.47,'#bd8758','#6b452f',2);disc(c,0,0,w*.38,null,'#e0ad7a',1.3);
        c.strokeStyle='#80543a99';for(let j=-2;j<3;j++){c.beginPath();c.moveTo(-w*.33,j*4);c.quadraticCurveTo(0,j*4-4,w*.33,j*4+1);c.stroke();}
        disc(c,w*.13,-h*.1,w*.11,'#eae3cd','#c9b89a',1);break;
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
        c.shadowColor='transparent';glow(c,Math.min(w,h)*.7);disc(c,0,0,w*.4,'#8d7763','#5c5349',2);disc(c,0,0,w*.34,'#f8e7bb','#c8aa72',2);disc(c,0,0,w*.24,'#fff9da','#fffdfa',1);disc(c,-w*.09,-h*.1,w*.07,'#fffef4');break;
      }
      case 'pendantLight':{
        c.shadowColor='transparent';glow(c,Math.min(w,h)*.72);disc(c,0,0,w*.45,'#695744','#483d35',2);disc(c,0,0,w*.39,'#caab79','#f3d596',2);disc(c,0,0,w*.29,'#ffe9ae','#fff3ca',2);disc(c,0,0,w*.12,'#fff9da');for(let a=0;a<8;a++){const ang=a*Math.PI/4;disc(c,Math.cos(ang)*w*.35,Math.sin(ang)*h*.35,1.5,'#f8dfaa');}break;
      }
      case 'floorLamp':{
        c.shadowColor='transparent';
        disc(c,0,h*.26,Math.min(w,h)*.18,'#7c6f60','#b49d78',1.5);
        rr(c,-w*.035,-h*.04,w*.07,h*.31,2,'#ae916f');
        glow(c,Math.min(w,h)*.62);
        const g=c.createRadialGradient(-w*.1,-h*.14,1,0,-h*.17,w*.44);
        g.addColorStop(0,'#fff9df');g.addColorStop(.57,'#edd9ad');g.addColorStop(1,'#a68966');
        disc(c,0,-h*.17,w*.43,'#80684e','#594b3e',1.5);
        disc(c,0,-h*.19,w*.39,g,'#c6aa7d',1.5);
        disc(c,-w*.11,-h*.3,w*.08,'#fffdf0aa');break;
      }
      case 'tableLamp':{
        c.shadowColor='transparent';glow(c,Math.min(w,h)*.58);
        disc(c,0,3,Math.min(w,h)*.43,'#80684e','#5c4c40',1.5);
        disc(c,0,0,Math.min(w,h)*.38,'#f8e7bf','#a88a65',2);
        disc(c,0,0,Math.min(w,h)*.24,'#fff4d4','#d4b88a',1);
        disc(c,-w*.1,-h*.11,Math.min(w,h)*.07,'#fff9e7cc');break;
      }
      case 'wallSconce':{
        rr(c,-w*.45,-h*.43,w*.9,h*.86,6,'#897965','#5c554b',2);c.shadowColor='transparent';glow(c,Math.min(w,h)*.7);oval(c,0,0,w*.34,h*.36,'#f0d49d','#b89462',2);oval(c,-w*.09,-h*.1,w*.08,h*.09,'#fff8df');break;
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
      case 'garageDoor':{
        // A compact exterior control tile, rather than a fictitious interior door.
        raisedCase(c,x,y,w,h-5,5,6,'#24343d');
        rr(c,x,y,w,h-5,5,gradient(c,x,y,w,h,[[0,'#435965'],[.5,'#283b45'],[1,'#172832']]),'#0c1d26',1.6);
        rr(c,x+5,y+5,w-10,h-16,2,'#182a34','#72909b',.8);
        for(let i=0;i<5;i++){
          const yy=y+7+i*(h-20)/5;
          rr(c,x+8,yy,w-16,(h-24)/5,1,i%2?'#5a7480':'#6e8890','#18303b',.5);
          rr(c,x+9,yy+1,w-18,1,0,'#d3e3dc88');
        }
        rr(c,x+4,y+4,3,h-15,1,'#b9ccd0');rr(c,x+w-7,y+4,3,h-15,1,'#b9ccd0');
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
    const wait=image=>image.complete?Promise.resolve():new Promise(resolve=>{
      image.addEventListener('load',resolve,{once:true});
      image.addEventListener('error',resolve,{once:true});
    });
    return Promise.all([wait(atlas),wait(babyAtlas)]);
  }
  window.RoomcraftObjectArt={draw,prepareExport};
})();
