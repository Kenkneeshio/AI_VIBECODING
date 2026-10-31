/* Illustrated top-down art for objects that do not have a cutout in the PNG. */
(() => {
  'use strict';
  const supported=new Set(['armchair','coffeeTable','sideTable','dresser','nightstand','bookcase','stool','ceilingLight','pendantLight','floorLamp','tableLamp','wallSconce','floorPlant','artwork','mirror','window']);
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
  function drawCatalog(c,o,t){
    if(drawBabyAtlas(c,o,t))return true;
    const p={base:'#d9b98b',accent:'#a67a57',detail:'#f3dfb5',dark:'#604935',...(t.palette||{})};
    const f=t.form||'',family=t.artFamily;
    if(!family)return false;
    if(family!=='ceilingFan')worldContact(c,o);
    c.save();c.translate(o.x,o.y);c.rotate((o.rotation||0)*Math.PI/180);
    c.scale(o.w/100,o.h/100);c.lineJoin='round';c.lineCap='round';
    switch(family){
      case 'softToy':{
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
    if(o.type!=='ceilingLight'&&o.type!=='pendantLight'&&o.type!=='wallSconce')worldContact(c,o);
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
        rr(c,x,y,w,h,3,'#222a31','#121a22',2);c.shadowColor='transparent';const g=c.createLinearGradient(x,y,x,y+h);g.addColorStop(0,'#e9f6fc');g.addColorStop(.38,'#8ec7df');g.addColorStop(1,'#5d9ec0');rr(c,x+5,y+5,w-10,h-10,1,g,'#e9ecdf',1);rr(c,x+w*.46,y+3,w*.08,h-6,1,'#e7e6d8');c.strokeStyle='#ffffffd9';c.lineWidth=2;c.beginPath();c.moveTo(x+12,y+8);c.lineTo(x+25,y+8);c.moveTo(x+34,y+8);c.lineTo(x+43,y+8);c.stroke();break;
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
