/* The editable plan is projected from scene records. The furnished source
   illustration is displayed separately in Studio's Reference mode. */
(() => {
  'use strict';
  const Engine = window.RoomcraftEngine;
  if (!Engine) throw new Error('RoomcraftEngine must load before raster-renderer.js');
  const W = 1536;
  const H = 1024;
  const TILE = 248;
  const floorLooks = {
    oak: ['#d8ad86', '#aa775d', 'board'],
    walnut: ['#a57b6e', '#755952', 'board'],
    ash: ['#e5caaa', '#b79681', 'board'],
    ivory: ['#eee0cc', '#b9a494', 'tile'],
    blue: ['#b7c9ca', '#81999e', 'tile'],
    sage: ['#b2bd9b', '#7f9a82', 'tile'],
    terrazzo: ['#e0cbba', '#a8878b', 'stone'],
    patio: ['#e5cfb2', '#a98d7e', 'tile'],
  };
  const caps = {graphite: '#514855', plaster: '#c3a393', sage: '#8fa18c', walnut: '#a47d6f'};
  const floorTiles = new Map();
  let grassTile;
  let textileTile;
  let lastProjection;

  function makeCanvas(w, h) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    return canvas;
  }

  function seededRandom(seed) {
    return () => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 4294967296;
    };
  }

  function floorPattern(c, finish) {
    const surface = Object.hasOwn(floorLooks, finish) ? finish : 'oak';
    const [base, accent, style] = floorLooks[surface];
    if (!floorTiles.has(surface)) {
      const tile = makeCanvas(TILE, TILE);
      const paint = tile.getContext('2d');
      const random = seededRandom(141 + Object.keys(floorLooks).indexOf(surface) * 977);
      paint.fillStyle = base;
      paint.fillRect(0, 0, TILE, TILE);
      paint.fillStyle = paint.strokeStyle = accent;
      const step = TILE / 8;
      if (style === 'board') {
        for (let row = 0; row < 8; row++) {
          const y = row * step;
          paint.globalAlpha = .04 + random() * .14;
          paint.fillRect(0, y, TILE, step);
          paint.globalAlpha = .48;
          paint.fillRect(0, y, TILE, 1.2);
          paint.fillRect(29 + (row * 46) % 177, y, 1, step);
          paint.globalAlpha = .15;
          for (let i = 0; i < 15; i++) {
            const x = random() * TILE;
            const z = y + 3 + random() * (step - 5);
            const length = 12 + random() * 44;
            paint.beginPath();
            paint.moveTo(x, z);
            paint.quadraticCurveTo(x + length / 2, z + random() * 2 - 1, x + length, z);
            paint.stroke();
          }
        }
      } else if (style === 'tile') {
        for (let y = 0; y < TILE; y += step) for (let x = 0; x < TILE; x += step) {
          paint.globalAlpha = random() * .14;
          paint.fillRect(x, y, step, step);
          paint.globalAlpha = .35;
          paint.strokeRect(x + .5, y + .5, step - 1, step - 1);
        }
      } else {
        for (let i = 0; i < 160; i++) {
          paint.globalAlpha = .12 + random() * .24;
          paint.fillRect(random() * TILE, random() * TILE, 1 + random() * 4, 1 + random() * 3);
        }
      }
      floorTiles.set(surface, tile);
    }
    return c.createPattern(floorTiles.get(surface), 'repeat') || base;
  }

  function yard(c) {
    if (!grassTile) {
      grassTile = makeCanvas(384, 384);
      const paint = grassTile.getContext('2d');
      const random = seededRandom(71293);
      paint.fillStyle = '#b5c5a1';
      paint.fillRect(0, 0, 384, 384);
      for (let i = 0; i < 25; i++) {
        const x = random() * 384;
        const y = random() * 384;
        const radius = 28 + random() * 68;
        for (const dx of [-384, 0, 384]) for (const dy of [-384, 0, 384]) {
          if (x + dx + radius < 0 || x + dx - radius > 384 || y + dy + radius < 0 || y + dy - radius > 384) continue;
          const glow = paint.createRadialGradient(x + dx, y + dy, 0, x + dx, y + dy, radius);
          glow.addColorStop(0, i % 3 ? '#e0e4b757' : '#577d5c38');
          glow.addColorStop(1, '#b5c5a100');
          paint.fillStyle = glow;
          paint.fillRect(x + dx - radius, y + dy - radius, radius * 2, radius * 2);
        }
      }
      for (let i = 0; i < 1150; i++) {
        paint.fillStyle = i % 2 ? '#ecedc744' : '#627a5e28';
        paint.fillRect(random() * 384, random() * 384, 1 + random() * 2.4, 1 + random() * 1.8);
      }
    }
    c.fillStyle = c.createPattern(grassTile, 'repeat') || '#b5c5a1';
    c.fillRect(0, 0, W, H);
  }

  function fillAreas(c, areas, fill) {
    if (!areas.length) return;
    c.beginPath();
    for (const rings of areas) for (const ring of rings) {
      if (!ring.length) continue;
      c.moveTo(...ring[0]);
      for (const point of ring.slice(1)) c.lineTo(...point);
      c.closePath();
    }
    c.fillStyle = fill;
    c.fill('evenodd');
  }

  function visibleWalls(project) {
    return project.walls.filter(wall => {
      const length = Math.hypot(wall.x2 - wall.x1, wall.y2 - wall.y1);
      return Number.isFinite(length) && length >= 1 &&
        (project.editableReferenceVersion >= 8 || !window.RoomcraftReferenceGeometry?.isOpenThreshold(wall));
    });
  }

  function projectStructure(project, walls) {
    const compile = window.RoomcraftPlanStructure;
    if (!compile) return null;
    // Ordinary furniture moves never invalidate floor, wall or aperture geometry.
    const items = project.items.filter(item => item.type === 'window' || item.type === 'stairs');
    const key = JSON.stringify([project.rooms, walls, items]);
    if (lastProjection?.compile === compile && lastProjection.key === key) return lastProjection.plan;
    let plan = null;
    try {
      // Use explicit records even for an imported draft before it is migrated.
      plan = compile({...project, version: 2, editableReferenceVersion: 8, walls, items});
    } catch {
      // A draft with invalid polygon geometry still has editable 2D records.
    }
    lastProjection = {compile, key, plan};
    return plan;
  }

  function drawFloors(c, rooms, structure) {
    const regions = structure?.regions ?? rooms.filter(room => room.points?.length >= 3).map(room => ({
      surface: room.surface,
      polygons: [[room.points.map(point => [point.x, point.y])]],
    }));
    c.save();
    c.translate(4, 9);
    if (structure) fillAreas(c, structure.footprint, '#39433327');
    else for (const region of regions) fillAreas(c, region.polygons, '#39433327');
    c.translate(-3, -6);
    if (structure) fillAreas(c, structure.footprint, '#897266');
    else for (const region of regions) fillAreas(c, region.polygons, '#897266');
    c.restore();
    for (const region of regions) fillAreas(c, region.polygons, floorPattern(c, region.surface));
  }

  function wallPolygon(wall) {
    const dx = wall.x2 - wall.x1;
    const dy = wall.y2 - wall.y1;
    const length = Math.hypot(dx, dy);
    const x = -dy / length * 8.5;
    const y = dx / length * 8.5;
    return [[[wall.x1 + x, wall.y1 + y], [wall.x2 + x, wall.y2 + y],
      [wall.x2 - x, wall.y2 - y], [wall.x1 - x, wall.y1 - y]]];
  }

  function drawWalls(c, walls, structure) {
    const surfaces = structure
      ? structure.flatMap(part => part.faces.top.length ? [{polygons: part.faces.top, color: part.surface}] : [])
      : walls.filter(wall => wall.kind !== 'fence').map(wall => ({
        polygons: [wallPolygon(wall)], color: caps[wall.finish] || caps.graphite,
      }));
    // The offset stroke is the shadow equivalent for the compiled wall faces.
    // Separate flat layers avoid Android's GPU canvas blur artifacts.
    c.save();
    c.translate(5, 10);
    for (const surface of surfaces) fillAreas(c, surface.polygons, '#382a302e');
    c.translate(-3, -6);
    for (const surface of surfaces) fillAreas(c, surface.polygons, '#8c756f');
    c.restore();
    for (const surface of surfaces) fillAreas(c, surface.polygons, surface.color);
  }

  function drawFences(c, fences) {
    for (const fence of fences) {
      const dx = fence.x2 - fence.x1;
      const dy = fence.y2 - fence.y1;
      const spans = fence.posts ?? Math.min(120, Math.max(1, Math.ceil(Math.hypot(dx, dy) / 28)));
      const color = fence.color || caps[fence.finish] || '#896e79';
      const line = (x, y, width, fill) => {
        c.beginPath();
        c.moveTo(fence.x1 + x, fence.y1 + y);
        c.lineTo(fence.x2 + x, fence.y2 + y);
        c.lineWidth = width;
        c.strokeStyle = fill;
        c.stroke();
      };
      c.save();
      c.lineCap = 'square';
      line(2, 4, 8, '#41313d2c');
      line(0, 0, 7, color);
      line(0, -.5, 1.1, '#fff5e74d');
      for (let i = 0; i <= spans; i++) {
        const x = fence.x1 + i / spans * dx;
        const y = fence.y1 + i / spans * dy;
        c.fillStyle = fence.postColor || color;
        c.fillRect(x - 4, y - 4, 8, 8);
        c.fillStyle = '#ffffff38';
        c.fillRect(x - 3, y - 3, 5, 1.5);
      }
      c.restore();
    }
  }

  function roundedFill(c, x, y, w, h, radius, color) {
    c.beginPath();
    c.roundRect(x, y, w, h, radius);
    c.fillStyle = color;
    c.fill();
  }

  function ovalFill(c, x, y, rx, ry, color) {
    c.beginPath();
    c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    c.fillStyle = color;
    c.fill();
  }

  function material(c, x, y, w, h, stops) {
    const gradient = c.createLinearGradient(x, y, x + w, y + h);
    stops.forEach(([at, color]) => gradient.addColorStop(at, color));
    return gradient;
  }

  function drawStairs(c, item, stair) {
    const {w, h} = item;
    const steps = Number.isInteger(item.steps) && item.steps >= 2 && item.steps <= 40 ? item.steps : 14;
    const run = h / steps;
    const left = -w / 2;
    const lowEnd = -h / 2;
    const apronDepth = stair?.apronDepth ?? Math.min(46, Math.max(12, w * .47));
    c.save();
    c.translate(item.x, item.y);
    c.rotate((item.rotation || 0) * Math.PI / 180);
    // The approach is on grade at the low end. The +Y end meets the upstairs landing.
    c.fillStyle = '#a99c88';
    c.fillRect(left, lowEnd - apronDepth, w, apronDepth);
    c.fillStyle = '#c2b39b';
    c.fillRect(left + 2, lowEnd - apronDepth + 2, Math.max(0, w - 4), apronDepth - 3);
    c.fillStyle = '#a99c88';
    c.fillRect(-.6, lowEnd - apronDepth + 2, 1.2, apronDepth - 3);
    c.fillStyle = '#54463745';
    c.fillRect(left + 4, lowEnd, w, h);
    for (let step = 0; step < steps; step++) {
      const y = lowEnd + step * run;
      const shade = 61 + step * 6 / (steps - 1);
      const nose = Math.min(4.2, run * .15);
      c.fillStyle = material(c, left, y, w, run, [
        [0, step % 2 ? '#dec2a7' : '#d6b99f'],
        [.22, '#e9cdb0'],
        [1, `hsl(25 32% ${shade}%)`],
      ]);
      c.fillRect(left, y, w, run);
      c.fillStyle = '#806456';
      c.fillRect(left, y, w, nose);
      c.fillStyle = '#f7dfc4';
      c.fillRect(left, y + nose, w, Math.min(2.2, run * .085));
    }
    c.restore();
  }

  function drawSink(c, w, h) {
    const width = w * .66;
    const depth = h * .28;
    const left = -width / 2;
    const top = -depth / 2 - h * .06;
    roundedFill(c, left, top, width, depth, width * .11,
      material(c, left, top, width, depth, [[0, '#f2efec'], [.38, '#c3c9ca'], [1, '#849096']]));
    const inset = width * .09;
    for (let i = 0; i < 2; i++) {
      const y = top + i * depth / 2 + inset;
      const wellHeight = depth / 2 - inset * 1.45;
      roundedFill(c, left + inset, y, width - inset * 2, wellHeight, width * .11,
        material(c, left, y, width, wellHeight, [[0, '#839698'], [.63, '#c2cfd0'], [1, '#9aa9aa']]));
      ovalFill(c, 0, y + wellHeight * .55, width * .055, width * .055, '#586b71');
    }
    roundedFill(c, left - width * .13, top + depth * .47, width * .21, width * .15, width * .06, '#607c83');
    ovalFill(c, left, top + depth * .53, width * .06, width * .06, '#e6efeb');
  }

  function drawPlanFixture(c, item) {
    const {w, h, type} = item;
    c.save();
    c.translate(item.x, item.y);
    c.rotate((item.rotation || 0) * Math.PI / 180);
    if (type === 'tub') {
      roundedFill(c, -w / 2 + 2, -h / 2 + 5, w, h, w * .24, '#463b3a34');
      roundedFill(c, -w / 2, -h / 2, w, h, w * .24,
        material(c, -w / 2, -h / 2, w, h, [[0, '#fffaf1'], [.65, '#e5ddd4'], [1, '#d5c9c0']]));
      roundedFill(c, -w * .36, -h * .415, w * .72, h * .83, w * .21,
        material(c, -w / 2, 0, w, 0, [[0, '#8ba8a9'], [.37, '#c9dcda'], [1, '#a6bfbe']]));
      ovalFill(c, 0, h * .31, w * .038, w * .038, '#617b82');
      roundedFill(c, -w * .05, -h * .48, w * .1, h * .115, w * .04, '#9d7a54');
    } else if (type === 'toilet') {
      ovalFill(c, 1.5, h * .13 + 3, w * .44, h * .4, '#463b3a2c');
      ovalFill(c, 0, h * .12, w * .43, h * .36, '#e7e1d8');
      ovalFill(c, 0, h * .14, w * .35, h * .26, '#fffaf1');
      ovalFill(c, 0, h * .15, w * .25, h * .177, '#bfcbc9');
      ovalFill(c, 0, h * .17, w * .17, h * .115, '#d5e0dc');
      roundedFill(c, -w * .46, -h * .5, w * .92, h * .29, w * .095, '#f8f0e6');
      ovalFill(c, w * .27, -h * .365, w * .05, w * .05, '#9b9f9e');
    } else if (type === 'counter') {
      roundedFill(c, -w / 2 + 2, -h / 2 + 5, w, h, w * .08, '#63493942');
      roundedFill(c, -w / 2, -h / 2, w, h, w * .08,
        material(c, -w / 2, 0, w, 0, [[0, '#d0bbab'], [.26, '#f5ede3'], [.85, '#eee6dc'], [1, '#d2c2b2']]));
      if (item.id === 'i7') drawSink(c, w, h);
    } else {
      roundedFill(c, -w / 2 + 3, -h / 2 + 4, w, h, w * .17, '#40392f49');
      roundedFill(c, -w / 2, -h / 2, w, h, w * .16,
        material(c, -w / 2, 0, w, 0, [[0, '#8d614f'], [.44, '#b68b68'], [1, '#9f7156']]));
      roundedFill(c, -w * .23, -h * .42, w * .46, h * .82, w * .09, '#232731');
      roundedFill(c, -w * .16, -h * .40, w * .24, h * .76, w * .055, '#546879');
    }
    c.restore();
  }

  function drawGlazedWindow(c,x,y,width,height,rotation=0){
    const w=Math.max(32,width),h=Math.max(16,height);
    c.save();c.translate(x,y);c.rotate(rotation*Math.PI/180);
    if(w!==width||h!==height)c.scale(width/w,height/h);
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
  function drawItem(c, item, fallback) {
    switch (item.type) {
      case 'controlZone': return;
      case 'window':
        drawGlazedWindow(c, item.x, item.y, item.w, item.h, item.rotation || 0);
        return;
      case 'rug': drawRug(c, item); return;
      case 'stairs': drawStairs(c, item); return;
      case 'counter':
      case 'tub':
      case 'toilet':
      case 'tv':
        drawPlanFixture(c, item);
        return;
      default:
        fallback(item);
    }
  }

  function draw(c, project, fallback) {
    const walls = visibleWalls(project);
    const plan = projectStructure(project, walls);
    const mounts = new Map((plan?.placements || []).filter(placement => placement.window && placement.item.type === 'window')
      .map(({item, x, z, window: glazing}) => [item.id, {...glazing, x, y: z}]));
    const layers = Engine.render.orderSceneItems(project.items, window.RoomcraftInventory?.byType);
    yard(c);
    drawFloors(c, project.rooms, plan?.floorStructure);
    const stairs = new Map((plan?.stairs || []).map(stair => [stair.item.id, stair]));
    for (const item of project.items) if (item.type === 'stairs') drawStairs(c, item, stairs.get(item.id));
    for (const item of layers.floorItems) drawItem(c, item, fallback);
    for (const item of window.RoomcraftModels?.orderMountedObjects(layers.regularItems) ?? layers.regularItems) {
      if (item.type !== 'stairs') drawItem(c, item, fallback);
    }
    drawWalls(c, walls, plan?.wallStructure);
    drawFences(c, plan?.fences ?? walls.filter(wall => wall.kind === 'fence'));
    for (const item of layers.windowItems) drawItem(c, mounts.get(item.id) || item, fallback);
    for (const item of layers.ceilingItems) drawItem(c, item, fallback);
    return true;
  }

  window.RoomcraftRasterRenderer = {draw, drawItem};
})();
