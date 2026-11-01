(() => {
  'use strict';

  // Keep the editable house at its original coordinates. The 16:9 view shows
  // the full source width and trims only outdoor space above and below it.
  const W = 1536, H = 1024, VIEW_W = 1536, VIEW_H = 864, CROP_X = 0, CROP_Y = 80;
  // v2 starts from the furnished image currently used by Home Assistant.
  // Keep v1 untouched so an older browser draft can be recovered explicitly.
  const STORAGE_KEY = 'roomcraft.second-floor.v2';
  const LEGACY_STORAGE_KEY = 'roomcraft.second-floor.v1';
  const BEFORE_RECOVERY_KEY = 'roomcraft.second-floor.before-recovery.v2';
  const REPLACED_DRAFT_KEY = 'roomcraft.second-floor.dashboard-replaced-draft.v2';
  const canvas = document.getElementById('planCanvas');
  const ctx = canvas.getContext('2d');
  const viewport = document.getElementById('viewport');
  const stage = document.getElementById('canvasStage');
  const reference = new Image();
  reference.src = 'assets/floorplan.png?v=corrected-windows-20261031';
  reference.addEventListener('load', () => draw());
  const emptyShell = new Image();
  emptyShell.src = 'assets/empty-shell.png';
  emptyShell.addEventListener('load', () => draw());
  const wallFreeShell = new Image();
  wallFreeShell.src = 'assets/wall-free-shell.png';
  wallFreeShell.addEventListener('load', () => draw());

  const surfaces = [
    { id: 'oak', name: 'Warm oak', note: 'Open living · long planks', color: '#dca46c', accent: '#b77d4d' },
    { id: 'walnut', name: 'Walnut parquet', note: 'Study · herringbone', color: '#a36b4b', accent: '#75472e' },
    { id: 'ash', name: 'Pale ash', note: 'Bedroom · wide planks', color: '#e7dac5', accent: '#c5ad8c' },
    { id: 'ivory', name: 'Ivory ceramic', note: 'Bath · small squares', color: '#ede5d6', accent: '#cdc3b1' },
    { id: 'blue', name: 'Blue-gray tile', note: 'Bath · fine squares', color: '#becdd0', accent: '#8da8ab' },
    { id: 'terrazzo', name: 'Soft terrazzo', note: 'Extra room · speckled', color: '#e6e1d6', accent: '#b7aea0' },
    { id: 'sage', name: 'Sage tile', note: 'Extra room · matte', color: '#b9c9b1', accent: '#88a389' }
  ];
  const surfaceById = Object.fromEntries(surfaces.map(s => [s.id, s]));
  const wallFinishes = [
    { id: 'graphite', name: 'Graphite', note: 'Original charcoal walls', color: '#26333b' },
    { id: 'plaster', name: 'Warm plaster', note: 'Soft cream wall caps', color: '#dfcfb5' },
    { id: 'sage', name: 'Sage', note: 'Muted green wall caps', color: '#94a78b' },
    { id: 'walnut', name: 'Walnut', note: 'Warm timber wall caps', color: '#8d654d' }
  ];
  const wallFinishById = Object.fromEntries(wallFinishes.map(f => [f.id, f]));
  const templates = [
    { type: 'sofa', label: 'L sofa', icon: '🛋', w: 165, h: 238, group: 'living' },
    { type: 'table', label: 'Dining table', icon: '▰', w: 165, h: 108, group: 'living' },
    { type: 'chair', label: 'Chair', icon: '◒', w: 48, h: 48, group: 'living' },
    { type: 'armchair', label: 'Armchair', icon: '▣', w: 86, h: 88, group: 'living' },
    { type: 'coffeeTable', label: 'Coffee table', icon: '⬭', w: 105, h: 66, group: 'living' },
    { type: 'sideTable', label: 'Side table', icon: '◉', w: 55, h: 55, group: 'living' },
    { type: 'tv', label: 'TV', icon: '▮', w: 28, h: 130, group: 'living' },
    { type: 'rug', label: 'Rug', icon: '▧', w: 150, h: 110, group: 'living' },
    { type: 'bed', label: 'Bed', icon: '▤', w: 210, h: 185, group: 'bedroom' },
    { type: 'desk', label: 'Desk', icon: '▣', w: 180, h: 78, group: 'bedroom' },
    { type: 'dresser', label: 'Dresser', icon: '▥', w: 122, h: 58, group: 'bedroom' },
    { type: 'nightstand', label: 'Nightstand', icon: '▣', w: 56, h: 54, group: 'bedroom' },
    { type: 'bookcase', label: 'Bookcase', icon: '▤', w: 58, h: 156, group: 'bedroom' },
    { type: 'counter', label: 'Counter', icon: '▥', w: 62, h: 190, group: 'utility' },
    { type: 'stool', label: 'Bar stool', icon: '◉', w: 42, h: 42, group: 'utility' },
    { type: 'tub', label: 'Bathtub', icon: '▢', w: 65, h: 128, group: 'utility' },
    { type: 'toilet', label: 'Toilet', icon: '◍', w: 46, h: 60, group: 'utility' },
    { type: 'lamp', label: 'Bedside lamp', icon: '☼', w: 40, h: 40, group: 'lighting' },
    { type: 'ceilingLight', label: 'Ceiling light', icon: '☀', w: 58, h: 58, group: 'lighting' },
    { type: 'pendantLight', label: 'Pendant light', icon: '✺', w: 70, h: 70, group: 'lighting' },
    { type: 'floorLamp', label: 'Floor lamp', icon: '◉', w: 54, h: 92, group: 'lighting' },
    { type: 'tableLamp', label: 'Table lamp', icon: '◌', w: 48, h: 52, group: 'lighting' },
    { type: 'wallSconce', label: 'Wall sconce', icon: '◖', w: 34, h: 48, group: 'lighting' },
    { type: 'thermostat', label: 'Wall thermostat / AC', icon: '◴', w: 48, h: 54, group: 'systems', mount: 'wall', visualKind: 'climate' },
    { type: 'windowFan', label: 'Window fan', icon: '✣', w: 46, h: 46, group: 'systems', mount: 'wall', visualKind: 'fan' },
    { type: 'garageDoor', label: 'Garage door control', icon: '▥', w: 116, h: 52, group: 'systems', visualKind: 'door' },
    { type: 'cameraThumbnail', label: 'Camera thumbnail', icon: '▣', w: 170, h: 110, group: 'security' },
    { type: 'controlZone', label: 'Invisible button area', icon: '▧', w: 120, h: 72, group: 'security' },
    { type: 'plant', label: 'Flowers', icon: '✿', w: 44, h: 44, group: 'decor' },
    { type: 'floorPlant', label: 'Floor plant', icon: '❀', w: 72, h: 72, group: 'decor' },
    { type: 'artwork', label: 'Wall art', icon: '▧', w: 94, h: 56, group: 'decor' },
    { type: 'mirror', label: 'Mirror', icon: '◇', w: 72, h: 52, group: 'decor' },
    { type: 'window', label: 'Window', icon: '▣', w: 100, h: 28, group: 'build' }
  ];
  templates.push(...(window.RoomcraftInventory?.templates || []));
  const paletteGroups = [
    ...(window.RoomcraftInventory?.groups || []),
    ['living', 'Living & dining'], ['bedroom', 'Bedroom & storage'],
    ['utility', 'Kitchen & bath'], ['lighting', 'Lights & lamps'],
    ['systems', 'Climate, doors & fans'], ['decor', 'Decor'], ['build', 'Build'], ['security', 'Cameras & controls']
  ];
  const templateByType = Object.fromEntries(templates.map(t => [t.type, t]));

  let nextId = 1000;
  const uid = prefix => `${prefix}-${Date.now().toString(36)}-${nextId++}`;
  const clone = value => JSON.parse(JSON.stringify(value));
  const point = (x, y) => ({ x, y });
  const room = (id, name, surface, points, label) => ({ id, name, surface, points: points.map(p => point(...p)), label: point(...label) });
  const wall = (id, x1, y1, x2, y2) => ({ id, x1, y1, x2, y2 });
  const item = (id, type, name, x, y, w, h, rotation = 0) => ({ id, type, name, x, y, w, h, rotation, entityId: '',
    ...(templateByType[type]?.visualKind?{visualKind:templateByType[type].visualKind}:{}),
    ...(type==='cameraThumbnail'?{previewMode:'event',imageEntityId:'',eventEntityIds:[]}:{}) });
  const validEntityId = value => /^[a-z_]+\.[a-z0-9_]+$/i.test(value||'');
  function clampLinkedItem(o){
    if(o.type==='cameraThumbnail'||!validEntityId(o.entityId))return;
    o.x=Math.max(0,Math.min(W,o.x));o.y=Math.max(0,Math.min(H,o.y));
    o.w=Math.max(12,Math.min(W,o.w));o.h=Math.max(12,Math.min(H,o.h));
  }
  const isFixtureControl = o => templateByType[o.type]?.group==='lighting'||templateByType[o.type]?.artFamily==='ceilingFan';
  const hotspotStyle = (left, top) => ({ left: `${left}%`, top: `${top}%`, background: 'rgba(24, 29, 35, 0.82)', 'border-radius': '50%', padding: '8px', '--paper-item-icon-color': '#f9f5e8', '--paper-item-icon-active-color': '#ffcc66' });
  const hotspot = (id, entity, title, left, top, tap, hold = null) => ({ id, type: 'state-icon', entity, title, tap_action: { action: tap }, ...(hold ? { hold_action: { action: hold } } : {}), style: hotspotStyle(left, top) });
  // Live entity IDs are imported from Home Assistant, never committed to source.
  const DEFAULT_HOTSPOTS = [];

  const STARTER = {
    version: 2,
    editableReferenceVersion: 1,
    rooms: [
      room('great', 'Living · dining · kitchen', 'oak', [[302,800],[302,651],[248,590],[158,590],[158,468],[342,468],[400,408],[400,193],[788,193],[788,485],[1134,485],[1134,550],[1485,550],[1485,800]], [361,537]),
      room('study', 'Study', 'walnut', [[799,193],[1066,193],[1066,485],[799,485]], [824,225]),
      room('bedroom', 'Bedroom', 'ash', [[1133,178],[1485,178],[1485,552],[1133,552]], [1170,219]),
      room('bath-one', 'Bath · 01', 'ivory', [[865,642],[1104,642],[1104,800],[865,800]], [880,678]),
      room('bath-two', 'Bath · 02', 'blue', [[1115,642],[1394,642],[1394,800],[1115,800]], [1200,677]),
      room('closet', 'Dressing nook', 'ash', [[1395,574],[1485,574],[1485,800],[1395,800]], [1404,608])
    ],
    walls: [
      wall('w1',400,193,788,193),wall('w2',400,193,400,408),wall('w3',400,408,342,468),wall('w4',342,468,158,468),wall('w5',158,468,158,590),wall('w6',158,590,248,590),wall('w7',248,590,302,651),wall('w8',302,651,302,800),wall('w9',302,800,1485,800),wall('w10',1485,800,1485,178),wall('w11',1485,178,1133,178),
      wall('w12',799,193,1066,193),wall('w13',799,193,799,485),wall('w14',799,485,967,485),wall('w15',1041,485,1133,485),wall('w16',1066,193,1066,322),wall('w17',1066,322,1133,322),wall('w18',1133,178,1133,289),wall('w19',1133,333,1133,485),
      wall('w20',1133,552,1284,552),wall('w21',1352,552,1485,552),wall('w22',865,642,945,642),wall('w23',1027,642,1104,642),wall('w24',865,642,865,800),wall('w25',1104,642,1104,800),wall('w26',1115,642,1264,642),wall('w27',1345,642,1394,642),wall('w28',1115,642,1115,800),wall('w29',1394,642,1394,800),wall('w30',1394,574,1394,642),wall('w31',1394,574,1485,574),wall('w32',615,550,615,800),wall('w33',848,550,848,642)
    ],
    items: [
      item('i1','sofa','L sofa',493,333,164,238),item('i2','tv','Living TV',755,351,27,163),item('i3','table','Dining table',458,664,172,108),
      item('i4','desk','Study desk',924,278,196,85),item('i5','chair','Desk chair',975,322,47,47),item('i6','bed','Queen bed',1331,373,213,194),
      item('i7','counter','Kitchen counter',667,675,56,234),item('i8','counter','Kitchen island',825,675,59,235),
      item('i9','tub','Bathtub',902,728,60,130),item('i10','tub','Bathtub',1148,728,60,130),item('i11','toilet','Toilet',1056,745,45,58),
      item('i12','toilet','Toilet',1148,611,45,58),item('i13','plant','Table flowers',460,654,32,32),
      item('i14','lamp','Bedroom bedside lamp',1443,476,48,60)
    ],
    hotspots: DEFAULT_HOTSPOTS
  };
  // These fixtures are drawn by the editor. They do not exist in the supplied
  // PNG, so they stay separate from STARTER's image-backed furniture.
  const DEFAULT_ROOM_FIXTURES = [
    item('fixture-living','ceilingLight','Living ceiling light',660,330,58,58),
    item('fixture-dining','pendantLight','Dining pendant light',445,540,70,70),
    item('fixture-kitchen','ceilingLight','Kitchen ceiling light',744,610,58,58),
    item('office-desk-lamp','lamp','Office desk lamp',851,260,48,52),
    item('fixture-bedroom','ceilingLight','Bedroom ceiling light',1185,510,58,58),
    item('fixture-bath-one','ceilingLight','Bath 01 ceiling light',970,686,58,58),
    item('fixture-bath-two','ceilingLight','Bath 02 ceiling light',1260,700,58,58),
    item('fixture-closet','ceilingLight','Dressing nook ceiling light',1438,640,48,48)
  ];
  const fixedRoomIds = new Set(STARTER.rooms.map(r => r.id));
  const fixedExteriorWallIds = new Set(['w1','w2','w3','w4','w5','w6','w7','w8','w9','w10','w11','w12']);
  const isFixedExteriorWall = w => !!w && fixedExteriorWallIds.has(w.id);

  let hasLocalDraft = false;
  function loadProject() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return restoreFixedGeometry(clone(STARTER));
      const parsed = JSON.parse(raw);
      if (validProject(parsed)) {hasLocalDraft=true;return restoreFixedGeometry(parsed);}
    } catch (_) { /* use starter */ }
    return restoreFixedGeometry(clone(STARTER));
  }
  function validProject(p) {
    return p && Array.isArray(p.rooms) && Array.isArray(p.walls) && Array.isArray(p.items)
      && p.rooms.every(r => typeof r.id === 'string' && !!surfaceById[r.surface] && Array.isArray(r.points) && r.points.length >= 3 && r.points.every(q => Number.isFinite(q.x) && Number.isFinite(q.y)))
      && p.walls.every(w => typeof w.id === 'string' && (!w.finish || !!wallFinishById[w.finish]) && [w.x1,w.y1,w.x2,w.y2].every(Number.isFinite))
      && p.items.every(i => typeof i.id === 'string' && templateByType[i.type] && [i.x,i.y,i.w,i.h,i.rotation].every(Number.isFinite)
        && (window.RoomcraftObjectControls?.validBinding(i) ?? true)
        && (i.type!=='cameraThumbnail'||(i.x>=0&&i.x<=W&&i.y>=0&&i.y<=H&&i.w>=40&&i.h>=40&&i.w<=W&&i.h<=H
          && (!i.previewMode||['event','live','live_auto','event_live','offline'].includes(i.previewMode))
          && (!i.eventEntityIds||(Array.isArray(i.eventEntityIds)&&i.eventEntityIds.length<=6
            && i.eventEntityIds.every(id=>typeof id==='string'&&/^binary_sensor\.[a-z0-9_]+$/i.test(id))
            && new Set(i.eventEntityIds).size===i.eventEntityIds.length))
          && (!i.entityId||/^camera\.[a-z0-9_]+$/i.test(i.entityId))
          && (!i.imageEntityId||/^image\.[a-z0-9_]+$/i.test(i.imageEntityId)))))
      && (!('hotspots' in p) || (Array.isArray(p.hotspots) && p.hotspots.every(h => {
        const percent=v=>typeof v==='string'&&/^\d{1,3}(?:\.\d+)?%$/.test(v)&&parseFloat(v)<=100;
        return h&&typeof h.id==='string'&&h.type==='state-icon'&&/^[a-z_]+\.[a-z0-9_]+$/i.test(h.entity)&&typeof h.title==='string'
          &&['toggle','more-info'].includes(h.tap_action?.action)
          &&(!h.hold_action||['toggle','more-info'].includes(h.hold_action.action))
          &&h.style&&percent(h.style.left)&&percent(h.style.top);
      })));
  }
  function restoreFixedGeometry(p){
    const rooms=new Set(p.rooms.map(r=>r.id)),walls=new Map(p.walls.map(w=>[w.id,w]));
    for(const r of STARTER.rooms)if(fixedRoomIds.has(r.id)&&!rooms.has(r.id))p.rooms.push(clone(r));
    for(const w of STARTER.walls)if(fixedExteriorWallIds.has(w.id)){if(walls.has(w.id)){const current=walls.get(w.id);current.x1=w.x1;current.y1=w.y1;current.x2=w.x2;current.y2=w.y2;}else p.walls.push(clone(w));}
    if(!Array.isArray(p.hotspots))p.hotspots=clone(DEFAULT_HOTSPOTS);
    // Older saved layouts predate the movable lamp. Migrate once, and remember
    // the migration so removing the lamp later remains an intentional edit.
    if((p.editableReferenceVersion||0)<1){
      const lamp=STARTER.items.find(i=>i.id==='i14');
      const nearbyLamp=p.items.some(i=>i.id==='i14'||(i.type==='lamp'&&Math.hypot(i.x-lamp.x,i.y-lamp.y)<45));
      if(!nearbyLamp)p.items.push(clone(lamp));
      p.editableReferenceVersion=1;
    }
    if(p.editableReferenceVersion<2){
      for(const fixture of DEFAULT_ROOM_FIXTURES){
        const present=p.items.some(i=>i.id===fixture.id||(i.type===fixture.type&&Math.hypot(i.x-fixture.x,i.y-fixture.y)<30));
        if(!present)p.items.push(clone(fixture));
      }
      p.editableReferenceVersion=2;
    }
    for(const o of p.items)clampLinkedItem(o);
    p.version=2;
    return p;
  }
  let project = loadProject();
  let selected = null;
  let tool = 'select';
  let viewMode = 'design';
  let pendingTemplate = null;
  let pendingSurface = null;
  let pendingWallFinish = null;
  let interaction = null;
  let spaceHeld = false;
  let history = [], future = [];
  let saveTimer = null, toastTimer = null;
  let currentView = { scale: 1, tx: 0, ty: 0 };
  let currentPointer = point(0,0);
  let focusCanvas = false;
  let dashboardRevision = null;
  let dashboardTransferBusy = false;
  let projectChangeSerial = 0;
  let entityOptions = [];

  function updateEntityOptions(data) {
    entityOptions = window.RoomcraftObjectControls.normalizeEntityOptions(data?.entityOptions);
    // A dashboard read can finish while someone is typing into the inspector.
    // Keep their in-progress value and show the new suggestions on next selection.
    if(selected?.kind==='item'&&!document.activeElement?.closest?.('#inspectorContent'))renderInspector();
  }

  function saveSoon() {
    const label = document.getElementById('saveState');
    label.innerHTML = '<span class="save-dot"></span> Saving…';
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(project)); label.innerHTML = '<span class="save-dot"></span> Saved locally'; }
      catch (_) { label.textContent = 'Browser storage is full'; }
    }, 250);
  }
  function snapshot() { history.push(clone(project)); if (history.length > 70) history.shift(); future = []; updateHistoryButtons(); }
  function undo() { if (!history.length) return; future.push(clone(project)); project = history.pop(); selected = null; afterChange('Undid last change'); }
  function redo() { if (!future.length) return; history.push(clone(project)); project = future.pop(); selected = null; afterChange('Redid change'); }
  function updateHistoryButtons() { document.getElementById('undoButton').disabled = !history.length; document.getElementById('redoButton').disabled = !future.length; }
  function afterChange(message) { projectChangeSerial++;saveSoon(); draw(); renderInspector(); renderRoomList(); renderHotspotList(); updateRestoreButton(); updateRecoveryButton(); updateHistoryButtons(); if (message) setStatus(message); }
  function setStatus(message) { document.getElementById('statusText').textContent = message; }
  function showToast(message) { const t = document.getElementById('viewportToast'); t.textContent = message; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2800); }

  function createPattern(surface, c) {
    const tile = document.createElement('canvas'); tile.width = 120; tile.height = 120;
    const p = tile.getContext('2d'); const s = surfaceById[surface] || surfaceById.oak;
    p.fillStyle = s.color; p.fillRect(0,0,120,120);
    if (surface === 'oak' || surface === 'ash') {
      const step = surface === 'oak' ? 24 : 30;
      p.strokeStyle = surface === 'oak' ? '#b98459' : '#c9bba7'; p.lineWidth = 1.5;
      for (let y=0;y<=120;y+=step) { p.beginPath();p.moveTo(0,y);p.lineTo(120,y);p.stroke(); }
      for (let row=0;row<5;row++) { const y=row*step; const off=(row%2)*60; for(let x=-off;x<140;x+=88){p.beginPath();p.moveTo(x,y);p.lineTo(x,y+step);p.stroke();} }
      p.strokeStyle = surface === 'oak' ? '#e9b783' : '#f5e9d7';p.lineWidth=1;
      for(let y=7;y<120;y+=step){p.beginPath();p.moveTo(6,y);p.lineTo(104,y);p.stroke();}
    } else if (surface === 'walnut') {
      p.strokeStyle='#75472e';p.lineWidth=2;
      for(let x=-120;x<240;x+=32){p.beginPath();p.moveTo(x,0);p.lineTo(x+120,120);p.stroke();p.beginPath();p.moveTo(x+120,0);p.lineTo(x,120);p.stroke();}
      p.strokeStyle='#ba805c';p.lineWidth=1;
      for(let x=-120;x<240;x+=32){p.beginPath();p.moveTo(x+9,0);p.lineTo(x+129,120);p.stroke();}
    } else if (surface === 'ivory' || surface === 'blue' || surface === 'sage') {
      const step = surface === 'ivory' ? 24 : 20;
      p.strokeStyle=surface==='ivory'?'#cfc6b5':surface==='blue'?'#9fb5b8':'#93ad95';p.lineWidth=1.5;
      for(let x=0;x<=120;x+=step){p.beginPath();p.moveTo(x,0);p.lineTo(x,120);p.stroke();}
      for(let y=0;y<=120;y+=step){p.beginPath();p.moveTo(0,y);p.lineTo(120,y);p.stroke();}
    } else {
      const colors=['#bca68c','#9fae9e','#d6bbb2','#cabf9f'];
      for(let i=0;i<60;i++){const x=(i*47)%120,y=(i*73)%120;p.fillStyle=colors[i%colors.length];p.beginPath();p.arc(x,y,1+(i%3),0,Math.PI*2);p.fill();}
    }
    return c.createPattern(tile,'repeat');
  }
  const patterns = Object.fromEntries(surfaces.map(s => [s.id,createPattern(s.id,ctx)]));
  function polygonPath(c, points) { c.beginPath();c.moveTo(points[0].x,points[0].y);for(let i=1;i<points.length;i++)c.lineTo(points[i].x,points[i].y);c.closePath(); }
  function round(c,x,y,w,h,r=8){c.beginPath();c.roundRect(x,y,w,h,r);}

  function drawBackdrop(c) {
    c.fillStyle='#cfdfbf';c.fillRect(0,0,W,H);
    c.fillStyle='#d6e4c5';for(let y=12;y<H;y+=39)for(let x=12;x<W;x+=39){const jitter=(x*13+y*7)%17;c.beginPath();c.arc(x+jitter,y+((x+y)%11),2,0,Math.PI*2);c.fill();}
    c.fillStyle='#e8d8c6';round(c,158,0,198,250,7);c.fill();
    c.fillStyle='#aeb2a5';round(c,17,210,315,708,9);c.fill();
    c.fillStyle='#e9e7dd';round(c,33,207,287,693,5);c.fill();
    c.fillStyle='#b7b5ad';round(c,57,218,76,597,3);c.fill();
    for(let y=228;y<810;y+=29){c.fillStyle='#f1f0e9';c.fillRect(65,y,66,23);c.strokeStyle='#a9aca5';c.lineWidth=2;c.beginPath();c.moveTo(65,y+24);c.lineTo(131,y+24);c.stroke();}
    c.fillStyle='#e5e3d8';c.fillRect(177,230,214,229);c.fillRect(177,593,121,207);
    c.strokeStyle='#475351';c.lineWidth=10;c.beginPath();c.moveTo(160,220);c.lineTo(160,789);c.moveTo(171,236);c.lineTo(391,236);c.stroke();
    c.fillStyle='#5a6660';c.fillRect(19,810,300,100);
    c.fillStyle='#d2c5b5';c.fillRect(303,800,1190,91);
    c.fillStyle='#65736a';c.fillRect(303,795,1190,17);
  }
  function drawRooms(c) {
    for(const r of project.rooms){polygonPath(c,r.points);c.fillStyle=patterns[r.surface]||patterns.oak;c.fill();c.strokeStyle='#796c5944';c.lineWidth=1;c.stroke();}
  }
  function drawRoomLabels(c) {
    c.save();c.font='800 11px ui-sans-serif, system-ui, sans-serif';c.textBaseline='middle';
    for(const r of project.rooms){const name=r.name.toUpperCase();const x=r.label?.x ?? r.points[0].x+20,y=r.label?.y ?? r.points[0].y+20;const w=c.measureText(name).width+23;c.fillStyle='#fffef2d9';round(c,x,y,w,24,6);c.fill();c.strokeStyle='#ffffffb9';c.lineWidth=1;c.stroke();c.fillStyle='#5c6a5c';c.fillText(name,x+11,y+12);}
    c.restore();
  }
  function drawWall(c,w) {
    const finish=wallFinishById[w.finish||'graphite']||wallFinishById.graphite;
    c.save();c.lineCap='square';c.strokeStyle=finish.color;c.lineWidth=20;c.beginPath();c.moveTo(w.x1,w.y1);c.lineTo(w.x2,w.y2);c.stroke();c.strokeStyle='rgba(255,255,255,.28)';c.lineWidth=3;c.beginPath();c.moveTo(w.x1,w.y1);c.lineTo(w.x2,w.y2);c.stroke();c.restore();
  }
  function drawObject(c,o) {
    if(o.type==='controlZone')return;
    if(window.RoomcraftObjectArt?.draw(c,o)) return;
    c.save();c.translate(o.x,o.y);c.rotate(o.rotation*Math.PI/180);
    const x=-o.w/2,y=-o.h/2,w=o.w,h=o.h;
    c.shadowColor='#27372c30';c.shadowBlur=8;c.shadowOffsetY=5;
    if(o.type==='rug'){
      c.fillStyle='#f0dcc2';round(c,x,y,w,h,11);c.fill();c.shadowColor='transparent';c.strokeStyle='#cfb696';c.lineWidth=3;c.stroke();c.strokeStyle='#d6bf9f';c.lineWidth=1;for(let i=-w;i<w*2;i+=18){c.beginPath();c.moveTo(x+i,y+9);c.lineTo(x+i+25,y+h-9);c.stroke();}
    }else if(o.type==='sofa'){
      c.fillStyle='#ceb697';round(c,x,y,Math.min(w*.43,74),h,10);c.fill();round(c,x,y+h*.66,w,h*.34,10);c.fill();
      c.shadowColor='transparent';c.fillStyle='#e8d2b4';round(c,x+9,y+9,Math.min(w*.37,62),h*.61,7);c.fill();round(c,x+10,y+h*.66,w-20,h*.25,7);c.fill();
      c.strokeStyle='#bb9d7b';c.lineWidth=2;c.beginPath();c.moveTo(x+9,y+h*.33);c.lineTo(x+w*.42,y+h*.33);c.moveTo(x+w*.57,y+h*.66);c.lineTo(x+w*.57,y+h*.91);c.stroke();
      c.fillStyle='#9baa83';round(c,x+12,y+18,31,29,5);c.fill();c.fillStyle='#e9bf77';round(c,x+29,y+35,27,25,5);c.fill();
    }else if(o.type==='table'){
      c.fillStyle='#5b4537';round(c,x-13,y-14,w+26,h+28,24);c.fill();c.fillStyle='#a66d4d';round(c,x,y,w,h,27);c.fill();c.shadowColor='transparent';c.strokeStyle='#c28b62';c.lineWidth=3;c.stroke();c.fillStyle='#eee2c6';round(c,x+15,y+h*.41,w-30,h*.18,4);c.fill();
    }else if(o.type==='chair'){
      c.fillStyle='#5b5963';round(c,x,y,w,h,13);c.fill();c.shadowColor='transparent';c.fillStyle='#85818a';round(c,x+7,y+7,w-14,h-14,9);c.fill();
    }else if(o.type==='tv'){
      c.fillStyle='#684a33';round(c,x-7,y-8,w+14,h+16,5);c.fill();c.shadowColor='transparent';c.fillStyle='#202a31';round(c,x,y,w,h,4);c.fill();c.fillStyle='#465966';c.fillRect(x+4,y+5,Math.max(2,w-8),h-10);
    }else if(o.type==='bed'){
      c.fillStyle='#7c5845';round(c,x-7,y-8,w+14,h+16,7);c.fill();c.fillStyle='#f6f4ee';round(c,x,y,w,h,10);c.fill();c.shadowColor='transparent';c.fillStyle='#e7e6e1';round(c,x+8,y+7,w-16,h*.35,7);c.fill();c.fillStyle='#fff';round(c,x+15,y+9,w*.34,h*.22,7);c.fill();round(c,x+w*.59,y+9,w*.34,h*.22,7);c.fill();c.strokeStyle='#ddd8ca';c.lineWidth=2;c.beginPath();c.moveTo(x+8,y+h*.36);c.lineTo(x+w-8,y+h*.36);c.stroke();
    }else if(o.type==='desk'){
      c.fillStyle='#825838';round(c,x,y,w,h,5);c.fill();c.shadowColor='transparent';c.fillStyle='#a7754b';round(c,x+5,y+5,w-10,h-10,4);c.fill();c.strokeStyle='#5d422e';c.lineWidth=2;c.beginPath();c.moveTo(x+w*.25,y+7);c.lineTo(x+w*.25,y+h-7);c.moveTo(x+w*.75,y+7);c.lineTo(x+w*.75,y+h-7);c.stroke();
    }else if(o.type==='counter'){
      c.fillStyle='#b88357';round(c,x,y,w,h,5);c.fill();c.fillStyle='#f1efea';round(c,x+5,y+5,w-10,h-10,4);c.fill();c.shadowColor='transparent';c.strokeStyle='#d1cfc8';c.lineWidth=2;c.stroke();
    }else if(o.type==='tub'){
      c.fillStyle='#f9f9f4';round(c,x,y,w,h,18);c.fill();c.shadowColor='transparent';c.fillStyle='#cbd9d7';round(c,x+10,y+12,w-20,h-24,15);c.fill();c.strokeStyle='#dae0dc';c.lineWidth=3;c.stroke();
    }else if(o.type==='toilet'){
      c.fillStyle='#f4f4f0';round(c,x,y,w,h,15);c.fill();c.shadowColor='transparent';c.fillStyle='#e3e9e7';round(c,x+8,y+9,w-16,h-21,11);c.fill();c.fillStyle='#fff';round(c,x+3,y+h-15,w-6,13,4);c.fill();
    }else if(o.type==='plant'){
      c.fillStyle='#9b7755';c.beginPath();c.arc(0,0,Math.min(w,h)*.42,0,Math.PI*2);c.fill();c.shadowColor='transparent';for(let a=0;a<8;a++){const angle=a*Math.PI/4;c.fillStyle=a%2?'#7ba470':'#4d8056';c.beginPath();c.ellipse(Math.cos(angle)*w*.2,Math.sin(angle)*h*.2,w*.13,h*.22,angle,0,Math.PI*2);c.fill();}
    }else if(o.type==='lamp'){
      c.fillStyle='#d2b987';c.beginPath();c.arc(0,0,Math.min(w,h)*.46,0,Math.PI*2);c.fill();c.shadowColor='transparent';c.fillStyle='#fff8d9';c.beginPath();c.arc(0,0,Math.min(w,h)*.34,0,Math.PI*2);c.fill();
    }else if(o.type==='cameraThumbnail'){
      c.fillStyle='#17262d';round(c,x,y,w,h,10);c.fill();c.shadowColor='transparent';
      const glass=c.createLinearGradient(x,y,x+w,y+h);glass.addColorStop(0,'#3c5c69');glass.addColorStop(1,'#15262c');c.fillStyle=glass;round(c,x+5,y+5,w-10,h-10,7);c.fill();
      c.strokeStyle='rgba(202,227,226,.54)';c.lineWidth=1.5;c.stroke();
      c.fillStyle='#e5f2e9';c.beginPath();c.arc(0,-5,Math.min(w,h)*.17,0,Math.PI*2);c.fill();
      c.fillStyle='#263f49';c.beginPath();c.arc(0,-5,Math.min(w,h)*.09,0,Math.PI*2);c.fill();
    }
    c.restore();
  }
  function drawSelection(c) {
    if(!selected) return;
    c.save();c.strokeStyle='#ed6b51';c.fillStyle='#fffdf4';c.lineWidth=3;c.setLineDash([8,6]);
    if(selected.kind==='item'){
      const o=project.items.find(o=>o.id===selected.id);if(!o){c.restore();return;}
      c.translate(o.x,o.y);c.rotate(o.rotation*Math.PI/180);c.strokeRect(-o.w/2-7,-o.h/2-7,o.w+14,o.h+14);c.setLineDash([]);for(const [dx,dy] of [[-1,-1],[1,-1],[1,1],[-1,1]]){c.beginPath();c.arc(dx*(o.w/2+7),dy*(o.h/2+7),Math.min(12,Math.max(6,7/currentView.scale)),0,Math.PI*2);c.fill();c.stroke();}
    }else if(selected.kind==='hotspot'){
      const h=project.hotspots.find(h=>h.id===selected.id);if(h){const p=hotspotPoint(h);c.setLineDash([]);c.lineWidth=3;c.beginPath();c.arc(p.x,p.y,29,0,Math.PI*2);c.stroke();}
    }else if(selected.kind==='wall'){
      const w=project.walls.find(w=>w.id===selected.id);if(w){c.setLineDash([]);c.lineWidth=4;c.beginPath();c.moveTo(w.x1,w.y1);c.lineTo(w.x2,w.y2);c.stroke();for(const q of [[w.x1,w.y1],[w.x2,w.y2]]){c.beginPath();c.arc(q[0],q[1],7,0,Math.PI*2);c.fill();c.stroke();}}
    }else if(selected.kind==='room'){
      const r=project.rooms.find(r=>r.id===selected.id);if(r){polygonPath(c,r.points);c.stroke();c.setLineDash([]);for(const q of r.points){c.beginPath();c.arc(q.x,q.y,6,0,Math.PI*2);c.fill();c.stroke();}}
    }
    c.restore();
  }
  function hotspotPoint(h){return point(W*parseFloat(h.style.left)/100,H*parseFloat(h.style.top)/100);}
  function drawHotspots(c){
    c.save();c.textAlign='center';c.textBaseline='middle';
    const linkedEntities=new Set(project.items.map(o=>o.entityId).filter(Boolean));
    for(const h of project.hotspots){if(linkedEntities.has(h.entity))continue;const p=hotspotPoint(h),isCover=h.entity.startsWith('cover.');
      c.fillStyle='rgba(24, 29, 35, 0.82)';c.beginPath();c.arc(p.x,p.y,24,0,Math.PI*2);c.fill();
      c.fillStyle=isCover?'#b895e5':'#ffcb73';c.font='bold 21px system-ui, sans-serif';c.fillText(isCover?'▥':'✦',p.x,p.y+1);
    }
    c.restore();
  }
  function drawControlZones(c){
    c.save();c.textAlign='center';c.textBaseline='middle';
    for(const o of project.items){if(o.type!=='controlZone')continue;
      c.save();c.translate(o.x,o.y);c.rotate(o.rotation*Math.PI/180);
      c.fillStyle='rgba(35, 122, 138, .14)';c.strokeStyle='#237a8a';c.lineWidth=2;c.setLineDash([8,5]);
      c.fillRect(-o.w/2,-o.h/2,o.w,o.h);c.strokeRect(-o.w/2,-o.h/2,o.w,o.h);c.setLineDash([]);
      c.fillStyle='#14505e';c.font='700 12px system-ui, sans-serif';
      c.fillText(o.controlLabel||o.name,0,0,Math.max(24,o.w-12));c.restore();
    }
    c.restore();
  }
  function draw(target=ctx,clean=false,forcedMode=null) {
    const c=target; const mode=forcedMode||viewMode;
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
    c.clearRect(0,0,VIEW_W,VIEW_H);
    c.save();
    c.translate(-CROP_X,-CROP_Y);
    if(mode==='reference'){
      const raster=window.RoomcraftRasterRenderer;
      if(!raster?.draw(c,STARTER,STARTER,{original:reference,shell:emptyShell,wallFree:wallFreeShell},o=>drawObject(c,o))){
        if(reference.complete&&reference.naturalWidth){c.drawImage(reference,0,0,W,H);}else{c.fillStyle='#e6ecda';c.fillRect(0,0,W,H);}
      }
      if(!clean){drawHotspots(c);drawSelection(c);}
    }else{
      const raster=window.RoomcraftRasterRenderer;
      const drawDynamicObject=o=>{
        // HA renders the bound fan as a stateful, rotating object. Keep the
        // editor's fan art, but omit its fixed blades from the exported PNG.
        if(clean&&validEntityId(o.entityId)&&templateByType[o.type]?.artFamily==='ceilingFan')return;
        drawObject(c,o);
      };
      if(!raster?.draw(c,project,STARTER,{original:reference,shell:emptyShell,wallFree:wallFreeShell},drawDynamicObject)){
        drawBackdrop(c);drawRooms(c);for(const o of project.items)drawDynamicObject(o);for(const w of project.walls)drawWall(c,w);
      }
      if(!clean){
        drawControlZones(c);drawHotspots(c);drawSelection(c);
        if(interaction?.kind==='wall-draw'){
          c.save();c.strokeStyle='#ed7255';c.lineWidth=9;c.setLineDash([12,7]);
          c.beginPath();c.moveTo(interaction.start.x,interaction.start.y);c.lineTo(interaction.end.x,interaction.end.y);c.stroke();c.restore();
        }
        if(pendingTemplate&&currentPointer){
          const t=templateByType[pendingTemplate],wallMounted=t.type==='window'||t.mount==='wall';
          const mount=wallMounted?nearestWallPlacement(currentPointer):null;
          if(!wallMounted||mount){
            const ghost=item('ghost',t.type,t.label,mount?.x??currentPointer.x,mount?.y??currentPointer.y,t.w,t.h,mount?.rotation??0);
            c.save();c.globalAlpha=.58;
            if(t.type==='controlZone'){
              c.strokeStyle='#237a8a';c.lineWidth=2;c.setLineDash([8,5]);
              c.strokeRect(ghost.x-ghost.w/2,ghost.y-ghost.h/2,ghost.w,ghost.h);c.setLineDash([]);
            }else if(raster?.ready(reference))raster.drawItem(c,ghost,STARTER,reference,emptyShell,()=>drawObject(c,ghost));
            else drawObject(c,ghost);
            c.restore();
          }
        }
      }
    }
    c.restore();
  }

  function setFocusCanvas(next) {
    if(focusCanvas===next)return;
    focusCanvas=next;
    if(next)document.getElementById('inspectorClose')?.click();
    document.querySelector('.app-shell').classList.toggle('focus-canvas',next);
    const button=document.getElementById('focusCanvasButton');
    button.setAttribute('aria-pressed',String(next));
    button.innerHTML=next?'⤡ <span>Exit focus</span>':'⤢ <span>Focus canvas</span>';
    button.title=next?'Show the editing panels again':'Expand the artwork for a closer look';
    setStatus(next?'Canvas expanded · click the zoom percentage for actual size':'Editing panels restored');
    requestAnimationFrame(fitView);
  }
  function fitView() {
    const rect=viewport.getBoundingClientRect();
    currentView.scale=Math.min((rect.width-28)/VIEW_W,(rect.height-28)/VIEW_H);
    currentView.scale=Math.max(.18,currentView.scale);
    currentView.tx=(rect.width-VIEW_W*currentView.scale)/2;
    currentView.ty=(rect.height-VIEW_H*currentView.scale)/2;
    applyView();
  }
  function applyView(){stage.style.transform=`translate(${currentView.tx}px,${currentView.ty}px) scale(${currentView.scale})`;document.getElementById('zoomValue').textContent=`${Math.round(currentView.scale*100)}%`;}
  function zoomAt(factor,x,y){const old=currentView.scale;const next=Math.max(.2,Math.min(3.5,old*factor));const wx=(x-currentView.tx)/old,wy=(y-currentView.ty)/old;currentView.scale=next;currentView.tx=x-wx*next;currentView.ty=y-wy*next;applyView();}
  function screenPoint(e){const r=viewport.getBoundingClientRect();return point(e.clientX-r.left,e.clientY-r.top);}
  function worldPoint(e){const p=screenPoint(e);return point((p.x-currentView.tx)/currentView.scale+CROP_X,(p.y-currentView.ty)/currentView.scale+CROP_Y);}
  const snap = n => Math.round(n/10)*10;
  function pointInPolygon(pt,points){let inside=false;for(let i=0,j=points.length-1;i<points.length;j=i++){const a=points[i],b=points[j];if(((a.y>pt.y)!==(b.y>pt.y))&&(pt.x<(b.x-a.x)*(pt.y-a.y)/(b.y-a.y)+a.x))inside=!inside;}return inside;}
  function hitRoom(p){for(let i=project.rooms.length-1;i>=0;i--){if(pointInPolygon(p,project.rooms[i].points))return project.rooms[i];}return null;}
  function itemLocalPoint(p,o){const r=-o.rotation*Math.PI/180,dx=p.x-o.x,dy=p.y-o.y;return point(dx*Math.cos(r)-dy*Math.sin(r),dx*Math.sin(r)+dy*Math.cos(r));}
  function hitItem(p,includeTouchTarget=true){
    // Prefer the visible footprint. Only use a larger touch target when no
    // object was directly hit, so a small lamp cannot steal its neighbor.
    for(const expanded of includeTouchTarget?[false,true]:[false])for(let i=project.items.length-1;i>=0;i--){
      const o=project.items[i],q=itemLocalPoint(p,o);
      const halfW=expanded?Math.max(o.w/2+5,22/currentView.scale):o.w/2+4;
      const halfH=expanded?Math.max(o.h/2+5,22/currentView.scale):o.h/2+4;
      if(Math.abs(q.x)<=halfW&&Math.abs(q.y)<=halfH)return o;
    }
    return null;
  }
  function hitSelectedItemHandle(p){if(selected?.kind!=='item')return null;const o=project.items.find(i=>i.id===selected.id);if(!o)return null;const q=itemLocalPoint(p,o),reach=Math.max(11,11/currentView.scale);for(const [sx,sy] of [[-1,-1],[1,-1],[1,1],[-1,1]])if(Math.hypot(q.x-sx*(o.w/2+7),q.y-sy*(o.h/2+7))<=reach)return {item:o,sx,sy};return null;}
  function hitHotspot(p){const linkedEntities=new Set(project.items.map(o=>o.entityId).filter(Boolean));for(let i=project.hotspots.length-1;i>=0;i--){const h=project.hotspots[i];if(linkedEntities.has(h.entity))continue;const q=hotspotPoint(h);if(Math.hypot(p.x-q.x,p.y-q.y)<=Math.max(25,12/currentView.scale))return h;}return null;}
  function segmentDistance(p,w){const vx=w.x2-w.x1,vy=w.y2-w.y1;const len=vx*vx+vy*vy;const t=len?Math.max(0,Math.min(1,((p.x-w.x1)*vx+(p.y-w.y1)*vy)/len)):0;return Math.hypot(p.x-(w.x1+t*vx),p.y-(w.y1+t*vy));}
  function hitWall(p){let found=null,dist=14/currentView.scale;for(const w of project.walls){const d=segmentDistance(p,w);if(d<dist){dist=d;found=w;}}return found;}
  function nearestWallPlacement(p){
    let nearest=null;
    for(const w of project.walls){
      const vx=w.x2-w.x1,vy=w.y2-w.y1,len=vx*vx+vy*vy;
      if(!len)continue;
      const t=Math.max(0,Math.min(1,((p.x-w.x1)*vx+(p.y-w.y1)*vy)/len));
      const x=w.x1+t*vx,y=w.y1+t*vy,d=Math.hypot(p.x-x,p.y-y);
      if(!nearest||d<nearest.distance){
        // The sill and reveal face the side of the wall the user clicked.
        // This matters for vertical walls: a left-wall window must project
        // into the room on its right, not out over the balcony on its left.
        let side=vx*(p.y-y)-vy*(p.x-x);
        if(Math.abs(side)<.01)side=vx*(H/2-y)-vy*(W/2-x);
        let rotation=Math.atan2(vy,vx)*180/Math.PI+(side<0?180:0);
        rotation=((rotation+540)%360)-180;
        nearest={x,y,rotation:Math.round(rotation),distance:d};
      }
    }
    return nearest&&nearest.distance<=75?nearest:null;
  }
  function hitRoomVertex(p){if(selected?.kind!=='room')return null;const r=project.rooms.find(r=>r.id===selected.id);if(!r)return null;return r.points.findIndex(q=>Math.hypot(q.x-p.x,q.y-p.y)<12/currentView.scale);}
  function hitWallEndpoint(p,w){if(Math.hypot(p.x-w.x1,p.y-w.y1)<14/currentView.scale)return 1;if(Math.hypot(p.x-w.x2,p.y-w.y2)<14/currentView.scale)return 2;return 0;}
  function select(kind,id){selected={kind,id};renderInspector();renderRoomList();renderHotspotList();draw();}
  function clearPlacement(){pendingTemplate=null;pendingSurface=null;pendingWallFinish=null;document.querySelectorAll('.palette-item,.surface-item,.wall-finish-item').forEach(el=>el.classList.remove('placing','active'));viewport.classList.remove('placing');renderSurfacePalette();renderWallPalette();}

  function onPointerDown(e){if(viewMode==='reference'){if(tool!=='pan'&&!spaceHeld&&e.button!==1){showToast('Switch to Design to edit the plan');return;}}
    e.preventDefault();canvas.setPointerCapture(e.pointerId);const p=worldPoint(e),s=screenPoint(e);currentPointer=p;
    if(tool==='pan'||spaceHeld||e.button===1){interaction={kind:'pan',start:s,tx:currentView.tx,ty:currentView.ty};viewport.classList.add('dragging');return;}
    if(pendingTemplate){const t=templateByType[pendingTemplate],wallMounted=t.type==='window'||t.mount==='wall';const mount=wallMounted?nearestWallPlacement(p):null;if(wallMounted&&!mount){showToast('Click near a wall to mount this object');return;}snapshot();const o=item(uid('i'),t.type,t.label,Math.round(mount?.x??p.x),Math.round(mount?.y??p.y),t.w,t.h,mount?.rotation??0);if(o.type==='cameraThumbnail'){o.x=Math.max(0,Math.min(W,o.x));o.y=Math.max(0,Math.min(H,o.y));}project.items.push(o);select('item',o.id);clearPlacement();afterChange(`Placed ${o.name}`);return;}
    if(pendingSurface){const r=hitRoom(p);if(r){snapshot();r.surface=pendingSurface;select('room',r.id);afterChange(`Applied ${surfaceById[pendingSurface].name} to ${r.name}`);showToast(`${r.name} floor updated`);}else showToast('Click inside a room to paint it');return;}
    if(pendingWallFinish){const w=hitWall(p);if(w){if((w.finish||'graphite')!==pendingWallFinish){snapshot();w.finish=pendingWallFinish;select('wall',w.id);afterChange(`Applied ${wallFinishById[pendingWallFinish].name} wall finish`);showToast('Wall finish updated');}else select('wall',w.id);}else showToast('Click a wall to paint it');return;}
    if(tool==='erase'){const h=hitHotspot(p),o=hitItem(p,false),near=hitItem(p),w=hitWall(p);if(o||(!h&&near)){const target=o||near;snapshot();project.items=project.items.filter(q=>q.id!==target.id);selected=null;afterChange(`Removed ${target.name}`);}else if(h){snapshot();project.hotspots=project.hotspots.filter(q=>q.id!==h.id);selected=null;afterChange(`Removed ${h.title} control`);}else if(isFixedExteriorWall(w)){showToast('The illustrated exterior shell stays fixed');}else if(w){snapshot();project.walls=project.walls.filter(q=>q.id!==w.id);selected=null;afterChange('Removed wall');}else showToast('Click an object, control, or interior wall to erase it');return;}
    if(tool==='wall'){interaction={kind:'wall-draw',start:point(snap(p.x),snap(p.y)),end:point(snap(p.x),snap(p.y))};draw();return;}
    if(tool==='room'){const vertex=hitRoomVertex(p);if(vertex>=0){interaction={kind:'room-vertex',id:selected.id,index:vertex,snapshot:false};return;}const r=hitRoom(p);if(r){select('room',r.id);setStatus(`Selected ${r.name} · drag a corner to reshape`);}else{selected=null;renderInspector();draw();}return;}
    const handle=hitSelectedItemHandle(p);if(handle){const o=handle.item,a=o.rotation*Math.PI/180,lx=-handle.sx*o.w/2,ly=-handle.sy*o.h/2;interaction={kind:'item-resize',id:o.id,start:p,w:o.w,h:o.h,rotation:o.rotation,anchor:point(o.x+lx*Math.cos(a)-ly*Math.sin(a),o.y+lx*Math.sin(a)+ly*Math.cos(a)),sx:handle.sx,sy:handle.sy,snapshot:false};setStatus(`Resize ${o.name} · hold Shift to keep its proportions`);return;}
    const o=hitItem(p,false);if(o){select('item',o.id);interaction={kind:'item-move',id:o.id,start:p,x:o.x,y:o.y,snapshot:false};setStatus(`Selected ${o.name}`);return;}
    const h=hitHotspot(p);if(h){const q=hotspotPoint(h);select('hotspot',h.id);interaction={kind:'hotspot-move',id:h.id,start:p,x:q.x,y:q.y,snapshot:false};setStatus(`Selected ${h.title} control`);return;}
    const near=hitItem(p);if(near){select('item',near.id);interaction={kind:'item-move',id:near.id,start:p,x:near.x,y:near.y,snapshot:false};setStatus(`Selected ${near.name}`);return;}
    const w=hitWall(p);if(w){select('wall',w.id);if(isFixedExteriorWall(w)){showToast('The illustrated exterior shell stays fixed');return;}interaction={kind:'wall-move',id:w.id,start:p,initial:clone(w),endpoint:hitWallEndpoint(p,w),snapshot:false};setStatus('Selected wall');return;}
    const r=hitRoom(p);if(r){select('room',r.id);setStatus(`Selected ${r.name}`);}else{selected=null;renderInspector();draw();}
  }
  function onPointerMove(e){const p=worldPoint(e),s=screenPoint(e);currentPointer=p;if(!interaction){if(pendingTemplate)draw();if(tool==='select'&&!pendingTemplate)canvas.style.cursor=hitSelectedItemHandle(p)?'nwse-resize':hitItem(p)?'grab':hitHotspot(p)?'pointer':'';return;}
    if(interaction.kind==='pan'){currentView.tx=interaction.tx+s.x-interaction.start.x;currentView.ty=interaction.ty+s.y-interaction.start.y;applyView();return;}
    if(interaction.kind==='wall-draw'){let x=snap(p.x),y=snap(p.y);if(e.shiftKey){if(Math.abs(x-interaction.start.x)>Math.abs(y-interaction.start.y))y=interaction.start.y;else x=interaction.start.x;}interaction.end=point(x,y);draw();return;}
    if(interaction.kind==='item-move'){const o=project.items.find(o=>o.id===interaction.id);if(!o)return;const dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;
      if(o.type==='window'||templateByType[o.type]?.mount==='wall'){
        const mount=nearestWallPlacement(point(interaction.x+dx,interaction.y+dy));
        if(!mount)return;
        const nx=Math.round(mount.x),ny=Math.round(mount.y);
        if(!interaction.snapshot&&(nx!==o.x||ny!==o.y||mount.rotation!==o.rotation)){snapshot();interaction.snapshot=true;}
        if(interaction.snapshot){o.x=nx;o.y=ny;o.rotation=mount.rotation;clampLinkedItem(o);draw();}
        return;
      }
      if(Math.hypot(dx,dy)>2&&!interaction.snapshot){snapshot();interaction.snapshot=true;}if(interaction.snapshot){o.x=Math.round(interaction.x+dx);o.y=Math.round(interaction.y+dy);if(o.type==='cameraThumbnail'){o.x=Math.max(0,Math.min(W,o.x));o.y=Math.max(0,Math.min(H,o.y));}clampLinkedItem(o);draw();}return;}
    if(interaction.kind==='item-resize'){
      const o=project.items.find(o=>o.id===interaction.id);if(!o)return;
      const a=interaction.rotation*Math.PI/180,dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;
      const localX=dx*Math.cos(a)+dy*Math.sin(a),localY=-dx*Math.sin(a)+dy*Math.cos(a);
      const min=o.type==='cameraThumbnail'?40:24;
      let nextW=Math.max(min,Math.round(interaction.w+interaction.sx*localX));
      let nextH=Math.max(min,Math.round(interaction.h+interaction.sy*localY));
      if(e.shiftKey){
        const scale=Math.max(nextW/interaction.w,nextH/interaction.h);
        nextW=Math.max(min,Math.round(interaction.w*scale));nextH=Math.max(min,Math.round(interaction.h*scale));
      }
      if(o.type==='cameraThumbnail'||validEntityId(o.entityId)){nextW=Math.min(W,nextW);nextH=Math.min(H,nextH);}
      const lx=interaction.sx*nextW/2,ly=interaction.sy*nextH/2;
      const nx=Math.round(interaction.anchor.x+lx*Math.cos(a)-ly*Math.sin(a));
      const ny=Math.round(interaction.anchor.y+lx*Math.sin(a)+ly*Math.cos(a));
      const bound=o.type==='cameraThumbnail'||validEntityId(o.entityId);
      const nextX=bound?Math.max(0,Math.min(W,nx)):nx,nextY=bound?Math.max(0,Math.min(H,ny)):ny;
      if(!interaction.snapshot&&(nextW!==o.w||nextH!==o.h||nextX!==o.x||nextY!==o.y)){snapshot();interaction.snapshot=true;}
      if(interaction.snapshot){o.w=nextW;o.h=nextH;o.x=nextX;o.y=nextY;draw();}
      return;
    }
    if(interaction.kind==='hotspot-move'){const h=project.hotspots.find(h=>h.id===interaction.id);if(!h)return;const dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;if(Math.hypot(dx,dy)>2&&!interaction.snapshot){snapshot();interaction.snapshot=true;}if(interaction.snapshot){h.style.left=`${Math.max(0,Math.min(100,(interaction.x+dx)/W*100)).toFixed(2)}%`;h.style.top=`${Math.max(0,Math.min(100,(interaction.y+dy)/H*100)).toFixed(2)}%`;draw();}return;}
    if(interaction.kind==='room-vertex'){const r=project.rooms.find(r=>r.id===interaction.id);if(!r)return;if(!interaction.snapshot){snapshot();interaction.snapshot=true;}r.points[interaction.index]=point(Math.round(p.x),Math.round(p.y));draw();return;}
    if(interaction.kind==='wall-move'){const w=project.walls.find(w=>w.id===interaction.id);if(!w)return;const dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;if(Math.hypot(dx,dy)>2&&!interaction.snapshot){snapshot();interaction.snapshot=true;}if(interaction.snapshot){const a=interaction.initial;if(interaction.endpoint===1){w.x1=Math.round(a.x1+dx);w.y1=Math.round(a.y1+dy);}else if(interaction.endpoint===2){w.x2=Math.round(a.x2+dx);w.y2=Math.round(a.y2+dy);}else{w.x1=Math.round(a.x1+dx);w.y1=Math.round(a.y1+dy);w.x2=Math.round(a.x2+dx);w.y2=Math.round(a.y2+dy);}draw();}return;}
  }
  function onPointerUp(e){if(!interaction)return;const kind=interaction.kind;if(kind==='wall-draw'){const {start,end}=interaction;if(Math.hypot(end.x-start.x,end.y-start.y)>12){snapshot();const w=wall(uid('w'),start.x,start.y,end.x,end.y);w.finish='graphite';project.walls.push(w);select('wall',w.id);afterChange('Drew wall');}}else if(interaction.snapshot){afterChange(kind==='room-vertex'?'Reshaped room':kind==='wall-move'?'Moved wall':kind==='hotspot-move'?'Moved Home Assistant control':kind==='item-resize'?'Resized object':'Moved object');}interaction=null;viewport.classList.remove('dragging');draw();}

  function htmlEscape(s){return String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function renderCategoryOptions(){
    const select=document.getElementById('objectCategory');
    select.innerHTML=`<option value="all">All categories · ${templates.length}</option>`+
      paletteGroups.map(([group,title])=>`<option value="${htmlEscape(group)}">${htmlEscape(title)} · ${templates.filter(t=>t.group===group).length}</option>`).join('');
    select.value='baby-toys';
  }
  let paletteObserver=null;
  function renderPalette(){
    const query=(document.getElementById('objectSearch')?.value||'').trim().toLowerCase();
    const category=document.getElementById('objectCategory')?.value||'baby-toys';
    const visible=templates.filter(t=>{
      const title=paletteGroups.find(([id])=>id===t.group)?.[1]||'';
      return query?`${t.label} ${title} ${t.tags||''} ${t.form||''}`.toLowerCase().includes(query):category==='all'||t.group===category;
    });
    const visibleTypes=new Set(visible.map(t=>t.type));
    const root=document.getElementById('objectsCatalog');
    const scroller=document.getElementById('objectsPanel');
    const strip=document.getElementById('inventoryStrip');
    const scrollTop=scroller.scrollTop,scrollLeft=strip.scrollLeft;
    if(paletteObserver){paletteObserver.disconnect();paletteObserver=null;}
    root.innerHTML=paletteGroups.map(([group,title])=>{
      const entries=templates.filter(t=>t.group===group&&visibleTypes.has(t.type));
      if(!entries.length)return '';
      return `<div class="catalog-group"><div class="palette-group-label">${htmlEscape(title)} <small>${entries.length}</small></div><div class="palette-grid">${entries.map(t=>`<button type="button" class="palette-item ${pendingTemplate===t.type?'placing':''}" data-template="${t.type}" title="Place ${htmlEscape(t.label)}"><span class="palette-icon"><canvas class="palette-preview" data-preview="${t.type}" width="200" height="108" aria-hidden="true"></canvas></span><span>${htmlEscape(t.label)}</span></button>`).join('')}</div></div>`;
    }).join('')||'<p class="help-copy">No objects match that search.</p>';
    document.getElementById('inventoryCount').textContent=`Showing ${visible.length} of ${templates.length} objects${query?' · searching all categories':''}`;
    scroller.scrollTop=scrollTop;strip.scrollLeft=scrollLeft;
    const canvases=[...root.querySelectorAll('.palette-preview')];
    if('IntersectionObserver' in window){
      paletteObserver=new IntersectionObserver(entries=>{
        for(const entry of entries)if(entry.isIntersecting){paintPalettePreview(entry.target);paletteObserver?.unobserve(entry.target);}
      },{root:scroller,rootMargin:'100px'});
      canvases.forEach(canvas=>paletteObserver.observe(canvas));
    }else canvases.forEach(paintPalettePreview);
  }
  function paintPalettePreview(canvas){
    const raster=window.RoomcraftRasterRenderer;
    const t=templateByType[canvas.dataset.preview];if(!t)return;
    const p=canvas.getContext('2d');p.setTransform(1,0,0,1,0,0);p.clearRect(0,0,canvas.width,canvas.height);p.imageSmoothingQuality='high';
    const scale=Math.min(88/t.w,44/t.h,1.8);p.scale(2,2);p.translate(50,27);p.scale(scale,scale);
    const preview=item('preview',t.type,t.label,0,0,t.w,t.h);
    if(t.type==='controlZone'){
      p.strokeStyle='#237a8a';p.lineWidth=2;p.setLineDash([8,5]);
      p.strokeRect(-t.w/2,-t.h/2,t.w,t.h);p.setLineDash([]);
      p.fillStyle='#14505e';p.font='700 14px system-ui, sans-serif';p.textAlign='center';p.textBaseline='middle';
      p.fillText('TAP AREA',0,0,Math.max(24,t.w-10));
    }else if(raster?.ready(reference))raster.drawItem(p,preview,STARTER,reference,emptyShell,()=>drawObject(p,preview));
    else drawObject(p,preview);
    canvas.dataset.painted='true';
  }
  function paintPalettePreviews(){document.querySelectorAll('.palette-preview[data-painted="true"]').forEach(paintPalettePreview);}
  function renderSurfacePalette(){document.getElementById('surfacePalette').innerHTML=surfaces.map(s=>`<button type="button" class="surface-item ${pendingSurface===s.id?'active':''}" data-surface="${s.id}"><span class="swatch" style="background-color:${s.color};background-image:linear-gradient(90deg,transparent 46%,${s.accent}55 49%,transparent 52%),linear-gradient(transparent 46%,${s.accent}55 49%,transparent 52%)"></span><span><strong>${htmlEscape(s.name)}</strong><small>${htmlEscape(s.note)}</small></span></button>`).join('');}
  function renderWallPalette(){document.getElementById('wallPalette').innerHTML=wallFinishes.map(f=>`<button type="button" class="wall-finish-item surface-item ${pendingWallFinish===f.id?'active':''}" data-wall-finish="${f.id}"><span class="swatch" style="background:${f.color}"></span><span><strong>${htmlEscape(f.name)}</strong><small>${htmlEscape(f.note)}</small></span></button>`).join('');}
  function renderRoomList(){document.getElementById('roomList').innerHTML=project.rooms.map(r=>{const s=surfaceById[r.surface]||surfaceById.oak;return `<button type="button" class="room-item ${selected?.kind==='room'&&selected.id===r.id?'active':''}" data-room="${htmlEscape(r.id)}"><span class="room-color" style="background:${s.color}"></span><span><strong>${htmlEscape(r.name)}</strong><small>${htmlEscape(s.name)}</small></span></button>`;}).join('');}
  function renderHotspotList(){
    const linked=project.items.filter(o=>o.type!=='cameraThumbnail'&&validEntityId(o.entityId));
    const linkedEntities=new Set(linked.map(o=>o.entityId));
    const independent=project.hotspots.filter(h=>!linkedEntities.has(h.entity));
    document.getElementById('hotspotSummary').textContent=`Home Assistant controls · ${independent.length+linked.length}`;
    document.getElementById('hotspotList').innerHTML=linked.map(o=>`<button type="button" class="ha-control-item ${selected?.kind==='item'&&selected.id===o.id?'active':''}" data-control-item="${htmlEscape(o.id)}"><strong>${htmlEscape(o.name)}</strong><small>${htmlEscape(o.entityId)} · object control</small></button>`).concat(independent.map(h=>`<button type="button" class="ha-control-item ${selected?.kind==='hotspot'&&selected.id===h.id?'active':''}" data-hotspot="${htmlEscape(h.id)}"><strong>${htmlEscape(h.title)}</strong><small>${htmlEscape(h.entity)}</small></button>`)).join('')||'<p class="help-copy">No controls in this layout.</p>';
  }
  function readPreviousDraft(){
    for(const key of [REPLACED_DRAFT_KEY,LEGACY_STORAGE_KEY]){
      try{const raw=localStorage.getItem(key);if(!raw)continue;const parsed=JSON.parse(raw);if(validProject(parsed))return parsed;}
      catch(_){/* try the other saved draft */}
    }
    return null;
  }
  function readPreRecoveryLayout(){try{const raw=localStorage.getItem(BEFORE_RECOVERY_KEY);if(!raw)return null;const parsed=JSON.parse(raw);return validProject(parsed)?parsed:null;}catch(_){return null;}}
  function updateRecoveryButton(){const b=document.getElementById('recoverDraftButton');if(b)b.hidden=!readPreviousDraft();const back=document.getElementById('returnPreRecoveryButton');if(back)back.hidden=!readPreRecoveryLayout();}
  function recoverPreviousDraft(){const previous=readPreviousDraft();if(!previous){showToast('No previous browser draft found');return;}if(!readPreRecoveryLayout()){try{localStorage.setItem(BEFORE_RECOVERY_KEY,JSON.stringify(project));}catch(_){showToast('Could not save current layout; export JSON first');return;}}snapshot();project=restoreFixedGeometry(clone(previous));selected=null;clearPlacement();afterChange('Recovered previous browser draft');showToast('Previous draft restored; pre-recovery layout saved');}
  function returnPreRecoveryLayout(){const before=readPreRecoveryLayout();if(!before){showToast('No pre-recovery layout found');return;}snapshot();project=restoreFixedGeometry(clone(before));selected=null;clearPlacement();localStorage.removeItem(BEFORE_RECOVERY_KEY);afterChange('Returned to pre-recovery layout');showToast('Pre-recovery layout restored');}
  function field(label,key,value,type='text'){return `<div class="field"><label for="prop-${key}">${label}</label><input id="prop-${key}" data-prop="${key}" type="${type}" value="${htmlEscape(value)}" ${type==='number'?'step="1"':''}></div>`;}
  function hotspotField(label,key,value,type='text'){return `<div class="field"><label for="hotspot-${key}">${label}</label><input id="hotspot-${key}" data-hotspot-prop="${key}" type="${type}" value="${htmlEscape(value)}" ${type==='number'?'step="0.01" min="0" max="100"':''}></div>`;}
  function variantField(t,type){
    if(!t.artFamily)return '';
    const stem=type.slice(0,type.lastIndexOf('-'));
    const variants=templates.filter(v=>v.type.startsWith(stem+'-')&&v.type.slice(0,v.type.lastIndexOf('-'))===stem);
    if(variants.length<2)return '';
    return `<div class="field"><label for="prop-catalog-variant">Color / finish</label><select id="prop-catalog-variant" data-variant>${variants.map(v=>`<option value="${htmlEscape(v.type)}" ${v.type===type?'selected':''}>${htmlEscape(v.label.split(' · ').at(-1))}</option>`).join('')}</select></div>`;
  }
  function renderInspector(){const root=document.getElementById('inspectorContent');if(!selected){root.innerHTML=`<div class="empty-inspector"><div class="empty-art">⌂</div><h3>A blank canvas for ideas.</h3><p>Select an object, control, room, or wall to see its settings. The starting furnished image is one click away in Reference view.</p><button class="secondary-button" id="openHelpButton" type="button" style="margin-top:19px">How to use the builder</button></div>`;return;}
    if(selected.kind==='item'){const o=project.items.find(o=>o.id===selected.id);if(!o){selected=null;renderInspector();return;}const t=templateByType[o.type];root.innerHTML=window.RoomcraftObjectControls.renderInspector(o,t,field,variantField,htmlEscape,entityOptions);return;}
    if(selected.kind==='hotspot'){const h=project.hotspots.find(h=>h.id===selected.id);if(!h){selected=null;renderInspector();return;}const x=parseFloat(h.style.left),y=parseFloat(h.style.top);root.innerHTML=`<div class="inspector-block"><p class="inspector-label">HOME ASSISTANT CONTROL</p><div class="selection-title"><span class="selection-icon">${h.entity.startsWith('cover.')?'▥':'✦'}</span><div><h3>${htmlEscape(h.title)}</h3><p>${htmlEscape(h.entity)}</p></div></div></div><div class="inspector-block"><p class="inspector-label">CONTROL & POSITION</p>${hotspotField('Title','title',h.title)}${hotspotField('Entity ID','entity',h.entity)}<div class="field-grid">${hotspotField('Left (%)','left',x,'number')}${hotspotField('Top (%)','top',y,'number')}</div><div class="field"><label for="hotspot-tap">Tap action</label><select id="hotspot-tap" data-hotspot-prop="tap"><option value="toggle" ${h.tap_action?.action==='toggle'?'selected':''}>Toggle</option><option value="more-info" ${h.tap_action?.action==='more-info'?'selected':''}>More info</option></select></div><div class="field"><label for="hotspot-hold">Hold action</label><select id="hotspot-hold" data-hotspot-prop="hold"><option value="none" ${!h.hold_action?'selected':''}>None</option><option value="more-info" ${h.hold_action?.action==='more-info'?'selected':''}>More info</option></select></div><p class="field-hint">Drag the marker on the plan or edit its percentage position here. It is included in Home Assistant YAML and editable JSON.</p></div><button type="button" class="danger-button" data-action="delete">Remove control</button>`;return;}
    if(selected.kind==='room'){const r=project.rooms.find(r=>r.id===selected.id);if(!r){selected=null;renderInspector();return;}root.innerHTML=`<div class="inspector-block"><p class="inspector-label">SELECTED ROOM</p><div class="selection-title"><span class="selection-icon">▦</span><div><h3>${htmlEscape(r.name)}</h3><p>${r.points.length} editable corners</p></div></div></div><div class="inspector-block"><p class="inspector-label">ROOM SETTINGS</p>${field('Room name','name',r.name)}<div class="field"><label for="prop-surface">Floor finish</label><select id="prop-surface" data-prop="surface">${surfaces.map(s=>`<option value="${s.id}" ${s.id===r.surface?'selected':''}>${htmlEscape(s.name)}</option>`).join('')}</select></div><p class="field-hint">Choose Room in the toolbar, then drag a corner handle to reshape this floor area.</p></div>${fixedRoomIds.has(r.id)?'<p class="field-hint">The original illustrated rooms stay in place. You can reshape and repaint them; added rooms can be removed.</p>':'<button type="button" class="danger-button" data-action="delete">Remove room</button>'}`;return;}
    const w=project.walls.find(w=>w.id===selected.id);if(!w){selected=null;renderInspector();return;}if(isFixedExteriorWall(w)){root.innerHTML=`<div class="inspector-block"><p class="inspector-label">ILLUSTRATED SHELL</p><h3>Exterior wall finish</h3><p class="field-hint">Change this wall’s finish here. Its outline remains fixed because the supplied artwork contains the exterior shell.</p><div class="field"><label for="prop-finish">Finish</label><select id="prop-finish" data-prop="finish">${wallFinishes.map(f=>`<option value="${f.id}" ${(w.finish||'graphite')===f.id?'selected':''}>${htmlEscape(f.name)}</option>`).join('')}</select></div></div>`;return;}root.innerHTML=`<div class="inspector-block"><p class="inspector-label">SELECTED WALL</p><div class="selection-title"><span class="selection-icon">╱</span><div><h3>Wall segment</h3><p>${Math.round(Math.hypot(w.x2-w.x1,w.y2-w.y1))} px long</p></div></div></div><div class="inspector-block"><p class="inspector-label">WALL FINISH</p><div class="field"><label for="prop-finish">Finish</label><select id="prop-finish" data-prop="finish">${wallFinishes.map(f=>`<option value="${f.id}" ${(w.finish||'graphite')===f.id?'selected':''}>${htmlEscape(f.name)}</option>`).join('')}</select></div></div><div class="inspector-block"><p class="inspector-label">END POINTS</p><div class="field-grid">${field('Start X','x1',w.x1,'number')}${field('Start Y','y1',w.y1,'number')}${field('End X','x2',w.x2,'number')}${field('End Y','y2',w.y2,'number')}</div><p class="field-hint">Drag a wall or its endpoint on the plan to move it. Draw new walls with the Wall tool.</p></div><button type="button" class="danger-button" data-action="delete">Remove wall</button>`;
  }
  function setTool(next){tool=next;clearPlacement();document.querySelectorAll('[data-tool]').forEach(b=>b.classList.toggle('active',b.dataset.tool===tool));viewport.dataset.tool=tool;setStatus(({select:'Select and drag objects, controls, walls, or rooms',pan:'Drag to pan the plan',room:'Click a room; drag its corner handles to reshape',wall:'Drag to draw a wall. Hold Shift for straight lines',erase:'Click an object, control, or wall to remove it'})[tool]);draw();}
  function setViewMode(mode){viewMode=mode;document.getElementById('designModeButton').classList.toggle('active',mode==='design');document.getElementById('referenceModeButton').classList.toggle('active',mode==='reference');if(mode==='reference'){clearPlacement();setStatus('Starting furnished reference · controls are marked');}else setStatus('Editable design layer · rooms, walls, objects, and controls can be changed');draw();}
  function setPanel(panel){document.querySelectorAll('.panel-tab').forEach(b=>{const active=b.dataset.panel===panel;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});for(const name of ['objects','floors','rooms','walls'])document.getElementById(`${name}Panel`).hidden=name!==panel;}

  function updateProperty(key,value){
    if(!selected)return;
    let target;
    if(selected.kind==='item')target=project.items.find(i=>i.id===selected.id);
    else if(selected.kind==='wall')target=project.walls.find(w=>w.id===selected.id);
    else target=project.rooms.find(r=>r.id===selected.id);
    if(!target)return;
    if(selected.kind==='wall'&&key==='finish'){
      if(!wallFinishById[value]||(target.finish||'graphite')===value)return;
      snapshot();target.finish=value;afterChange(`Applied ${wallFinishById[value].name} wall finish`);return;
    }
    if(selected.kind==='wall'&&isFixedExteriorWall(target))return;
    if(selected.kind==='item'&&window.RoomcraftObjectControls.isBindingKey(key)){
      if(target.type==='cameraThumbnail')return;
      const update=window.RoomcraftObjectControls.propertyUpdate(key,value);
      if(!update.valid){showToast(key==='controlIcon'?'Use an icon like mdi:lightbulb':'Choose a valid button setting');renderInspector();return;}
      if(target[key]===update.value||(!target[key]&&update.value===undefined))return;
      snapshot();
      if(update.value===undefined)delete target[key];else target[key]=update.value;
      afterChange('Updated dashboard button');return;
    }
    if(selected.kind==='item'&&target.type==='cameraThumbnail'&&key==='imageEntityId'&&!(key in target))target.imageEntityId='';
    if(selected.kind==='item'&&target.type==='cameraThumbnail'&&key==='eventEntityIds'){
      const ids=value.split(',').map(id=>id.trim()).filter(Boolean);
      if(ids.length>6||ids.some(id=>!/^binary_sensor\.[a-z0-9_]+$/i.test(id))||new Set(ids).size!==ids.length){
        showToast('Use up to six distinct binary sensor IDs');renderInspector();return;
      }
      if(JSON.stringify(target.eventEntityIds||[])===JSON.stringify(ids))return;
      snapshot();target.eventEntityIds=ids;afterChange('Updated camera event sensors');return;
    }
    if(!(key in target))return;
    if(key==='previewMode'&&!['event','live','live_auto','event_live','offline'].includes(value))return;
    if(key==='entityId'&&value&&!validEntityId(value)){showToast('Use an entity ID like light.living_room');renderInspector();return;}
    if(target.type==='cameraThumbnail'&&key==='entityId'&&value&&!/^camera\.[a-z0-9_]+$/i.test(value)){showToast('Use a camera entity ID');renderInspector();return;}
    if(target.type==='cameraThumbnail'&&key==='imageEntityId'&&value&&!/^image\.[a-z0-9_]+$/i.test(value)){showToast('Use an image entity ID');renderInspector();return;}
    let v=value;
    if(typeof target[key]==='number'){
      v=Number(value);if(!Number.isFinite(v))return;
      if(key==='w'||key==='h')v=Math.max(target.type==='cameraThumbnail'?40:12,v);
      const bound=selected.kind==='item'&&(target.type==='cameraThumbnail'||validEntityId(target.entityId));
      if(bound&&key==='w')v=Math.min(W,v);
      if(bound&&key==='h')v=Math.min(H,v);
      if(bound&&key==='x')v=Math.max(0,Math.min(W,v));
      if(bound&&key==='y')v=Math.max(0,Math.min(H,v));
    }
    if(target[key]===v)return;
    snapshot();target[key]=v;
    if(selected.kind==='item')clampLinkedItem(target);
    afterChange(`Updated ${key}`);
  }
  function updateVariant(type){
    if(selected?.kind!=='item'||!templateByType[type])return;
    const o=project.items.find(i=>i.id===selected.id);
    if(!o||o.type===type)return;
    const old=templateByType[o.type],next=templateByType[type];
    if(!old?.artFamily||old.type.slice(0,old.type.lastIndexOf('-'))!==type.slice(0,type.lastIndexOf('-')))return;
    snapshot();if(o.name===old.label)o.name=next.label;o.type=type;afterChange('Changed color / finish');
  }
  function updateHotspotProperty(key,value){if(selected?.kind!=='hotspot')return;const h=project.hotspots.find(h=>h.id===selected.id);if(!h)return;let next=value;if(key==='left'||key==='top'){const n=Number(value);if(!Number.isFinite(n))return;next=`${Math.max(0,Math.min(100,n)).toFixed(2)}%`;}else if(key==='entity'){if(!/^[a-z_]+\.[a-z0-9_]+$/i.test(value)){showToast('Use an entity ID like light.living_room');renderInspector();return;}}else if(key==='tap'&& !['toggle','more-info'].includes(value))return;else if(key==='hold'&& !['none','more-info'].includes(value))return;else if(key!=='title'&&key!=='entity')return;
    const current=key==='left'||key==='top'?h.style[key]:key==='tap'?h.tap_action?.action:key==='hold'?h.hold_action?.action||'none':h[key];if(next===current)return;snapshot();if(key==='left'||key==='top')h.style[key]=next;else if(key==='tap')h.tap_action={action:next};else if(key==='hold'){if(next==='none')delete h.hold_action;else h.hold_action={action:next};}else h[key]=next;afterChange(`Updated ${h.title} control`);
  }
  function deleteSelected(){if(!selected)return;if(selected.kind==='room'&&fixedRoomIds.has(selected.id)){showToast('Original illustrated rooms stay in the plan');return;}if(selected.kind==='wall'&&fixedExteriorWallIds.has(selected.id)){showToast('The illustrated exterior shell stays fixed');return;}snapshot();if(selected.kind==='item')project.items=project.items.filter(i=>i.id!==selected.id);else if(selected.kind==='hotspot')project.hotspots=project.hotspots.filter(h=>h.id!==selected.id);else if(selected.kind==='wall')project.walls=project.walls.filter(w=>w.id!==selected.id);else project.rooms=project.rooms.filter(r=>r.id!==selected.id);selected=null;afterChange('Removed selection');}
  function duplicateSelected(){if(selected?.kind!=='item')return;const o=project.items.find(i=>i.id===selected.id);if(!o)return;snapshot();const n=clone(o);n.id=uid('i');n.x+=26;n.y+=26;if(n.type==='cameraThumbnail'){n.x=Math.min(W,n.x);n.y=Math.min(H,n.y);}clampLinkedItem(n);n.name=`${o.name} copy`;project.items.push(n);select('item',n.id);afterChange('Duplicated object');}
  function rotateSelected(){if(selected?.kind!=='item')return;const o=project.items.find(i=>i.id===selected.id);if(!o)return;snapshot();o.rotation=(o.rotation+90)%360;afterChange('Rotated object');}
  function addRoom(){snapshot();const r=room(uid('r'),'New room','terrazzo',[[570,420],[790,420],[790,580],[570,580]],[580,440]);project.rooms.push(r);setTool('room');select('room',r.id);setPanel('rooms');afterChange('Added editable room');showToast('Drag the corner handles to reshape your room');}
  function missingReferenceItems(){const present=new Set(project.items.map(i=>i.id));return STARTER.items.filter(i=>!present.has(i.id));}
  function updateRestoreButton(){const button=document.getElementById('restoreFurnishingsButton');if(!button)return;const count=missingReferenceItems().length;button.disabled=count===0;button.textContent=count?`↺ Restore ${count} missing reference object${count===1?'':'s'}`:'✓ All reference furniture is present';button.title=count?'Add missing original furnishings while keeping your floors, rooms, and new objects':'All original furnishings are already in this design';}
  function restoreReferenceItems(){const missing=missingReferenceItems();if(!missing.length){showToast('All reference furniture is present');return;}snapshot();project.items.push(...missing.map(clone));selected=null;clearPlacement();afterChange(`Restored ${missing.length} reference object${missing.length===1?'':'s'}`);showToast('Original furnishings restored; other edits kept');}
  function download(name,type,content){const blob=content instanceof Blob?content:new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);}
  function exportJson(){download('roomcraft-editable-layout.json','application/json',JSON.stringify(project,null,2));showToast('Editable layout JSON downloaded');}
  async function renderDetailedPng(){
    await Promise.all([window.RoomcraftRasterRenderer?.prepareExport(project,STARTER,{original:reference,shell:emptyShell,wallFree:wallFreeShell}),window.RoomcraftObjectArt?.prepareExport?.()]);
    const out=document.createElement('canvas');out.width=VIEW_W;out.height=VIEW_H;draw(out.getContext('2d'),true,'design');return out;
  }
  async function exportPng(){try{showToast('Preparing detailed artwork…');const out=await renderDetailedPng();out.toBlob(blob=>{if(blob){download('roomcraft-second-floor.png','image/png',blob);showToast('Detailed PNG plan downloaded');}},'image/png');}catch(_){showToast('Could not load a detailed image asset for export');}}
  function dashboardControls(layout){
    const linked=layout.items.filter(o=>o.type!=='cameraThumbnail'&&validEntityId(o.entityId));
    const linkedEntities=new Set(linked.map(o=>o.entityId));
    const controls=layout.hotspots.filter(h=>!linkedEntities.has(h.entity)).map(clone),byEntity=new Set(controls.map(h=>h.entity));
    for(const o of linked){if(byEntity.has(o.entityId))continue;
      const domain=o.entityId.split('.')[0],tap=['light','switch','fan','input_boolean'].includes(domain)?'toggle':'more-info';
      const left=+(o.x/W*100).toFixed(2),top=+(o.y/H*100).toFixed(2);
      const h=hotspot(`linked-${o.id}`,o.entityId,o.name,left,top,tap,'more-info');
      if(isFixtureControl(o))h.style={...h.style,background:'transparent',padding:'12px','box-shadow':'none','--mdc-icon-size':'23px','--paper-item-icon-color':'#f6e8bd','--paper-item-icon-active-color':'#ffd46b',filter:'drop-shadow(0 1px 2px rgba(30,25,21,.8))'};
      controls.push(h);byEntity.add(o.entityId);
    }
    return controls;
  }
  function exportHaYaml(){
    const yaml=window.RoomcraftObjectControls.manualYaml(project);
    download('roomcraft-home-assistant.yaml','text/yaml',yaml);
    showToast('Home Assistant YAML with object buttons and menu downloaded');
  }
  function importProject(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(String(reader.result));if(!validProject(parsed))throw new Error('Invalid project format');snapshot();project=restoreFixedGeometry(parsed);selected=null;afterChange('Imported project');showToast('Project imported');fitView();}catch(err){showToast('Could not import this project JSON');}};reader.readAsText(file);}

  function setDashboardStatus(message,isError=false){const status=document.getElementById('dashboardTransferStatus');status.textContent=message;status.classList.toggle('error',isError);setStatus(message);}
  function setDashboardBusy(busy){dashboardTransferBusy=busy;document.body.classList.toggle('dashboard-transfer-busy',busy);for(const id of ['importDashboardButton','exportDashboardButton'])document.getElementById(id).disabled=busy;}
  function askConfirmation(title,message,acceptLabel){
    const dialog=document.getElementById('confirmationDialog');
    const accept=document.getElementById('confirmationAccept');
    const cancel=document.getElementById('confirmationCancel');
    document.getElementById('confirmationTitle').textContent=title;
    document.getElementById('confirmationMessage').textContent=message;
    accept.textContent=acceptLabel;
    return new Promise(resolve=>{
      const finish=approved=>{accept.removeEventListener('click',onAccept);cancel.removeEventListener('click',onCancel);dialog.removeEventListener('cancel',onEscape);dialog.close();resolve(approved);};
      const onAccept=()=>finish(true),onCancel=()=>finish(false),onEscape=e=>{e.preventDefault();finish(false);};
      accept.addEventListener('click',onAccept);
      cancel.addEventListener('click',onCancel);
      dialog.addEventListener('cancel',onEscape);
      dialog.showModal();
      cancel.focus();
    });
  }
  async function dashboardRequest(method,payload){
    if(window.RoomcraftDashboardBridge?.request){
      const data=await window.RoomcraftDashboardBridge.request(method,payload);
      if(!data||typeof data!=='object')throw new Error('Dashboard response is empty');
      return data;
    }
    const response=await fetch('/api/dashboard',{method,cache:'no-store',headers:payload?{'Content-Type':'application/json'}:undefined,body:payload?JSON.stringify(payload):undefined,signal:AbortSignal.timeout(method==='GET'?12000:60000)});
    let data;try{data=await response.json();}catch(_){throw new Error(`Dashboard returned an unreadable response (${response.status})`);}
    if(!response.ok){const detail=typeof data?.message==='string'?data.message:typeof data?.error==='string'?data.error:`Dashboard request failed (${response.status})`;const error=new Error(detail);error.status=response.status;throw error;}
    if(!data||typeof data!=='object')throw new Error('Dashboard response is empty');
    return data;
  }
  function projectFromDashboard(data){
    const hasEditable=!!data.project;
    let next=hasEditable?data.project:clone(STARTER);
    // The plan card is authoritative for live control placement. Another HA
    // editor may have changed those markers since the Roomcraft JSON was saved.
    if(Array.isArray(data.hotspots)){
      const previousIds=new Map((Array.isArray(next.hotspots)?next.hotspots:[]).map(h=>[h.entity,h.id]));
      const linkedEntities=new Set((next.items||[]).filter(o=>o.type!=='cameraThumbnail'&&validEntityId(o.entityId)).map(o=>o.entityId));
      next={...next,hotspots:data.hotspots.filter(h=>!linkedEntities.has(h.entity)).map(h=>({...h,id:previousIds.get(h.entity)||h.id}))};
    }
    if(!validProject(next))throw new Error('Dashboard layout or controls are not compatible with this editor');
    return {next,hasEditable};
  }
  async function loadDashboardDefault(){
    setDashboardBusy(true);
    const initialSerial=projectChangeSerial;
    setDashboardStatus('Loading the current Home Assistant layout…');
    try{
      const data=await dashboardRequest('GET');
      updateEntityOptions(data);
      if(!data.revision)throw new Error('Dashboard revision is missing');
      const {next,hasEditable}=projectFromDashboard(data);
      dashboardRevision=data.revision;
      // A slow dashboard read must never replace an in-progress local edit.
      if(projectChangeSerial!==initialSerial||interaction||pendingTemplate||document.activeElement?.closest?.('#inspectorContent')){
        setDashboardStatus('Browser edits kept. Import from dashboard when ready.');return;
      }
      const current=restoreFixedGeometry(clone(next));
      const different=hasLocalDraft&&JSON.stringify(project)!==JSON.stringify(current);
      if(different){
        try{
          localStorage.setItem(REPLACED_DRAFT_KEY,localStorage.getItem(STORAGE_KEY)||JSON.stringify(project));
        }catch(_){
          setDashboardStatus('Current dashboard found, but browser draft backup failed. Export your layout JSON before importing.',true);
          return;
        }
      }
      project=current;selected=null;afterChange('Loaded current Home Assistant layout');fitView();
      const detail=hasEditable?'Current editable dashboard layout loaded':'Current dashboard controls loaded with the starting editable plan';
      setDashboardStatus(different?detail+' · previous browser draft available to recover':detail);
    }catch(error){
      const kept=hasLocalDraft||projectChangeSerial!==initialSerial;
      setDashboardStatus('Dashboard unavailable; '+(kept?'browser layout kept':'starting plan loaded')+': '+(error.message||'Connection failed'),true);
    }
    finally{setDashboardBusy(false);}
  }
  async function importFromDashboard(){
    if(dashboardTransferBusy)return;
    setDashboardBusy(true);setDashboardStatus('Reading the Home Assistant dashboard…');
    try{
      const data=await dashboardRequest('GET');
      updateEntityOptions(data);
      if(!data.revision)throw new Error('Dashboard revision is missing');
      const {next,hasEditable}=projectFromDashboard(data);
      const detail=hasEditable?'its saved editable Roomcraft layout':'its current controls and the starting editable plan';
      if(!await askConfirmation('Import dashboard layout',`Import ${detail} from Home Assistant? This replaces the layout saved in this browser. You can undo the import during this session or export your current layout as JSON first.`,'Import layout')){
        setDashboardStatus('Dashboard import canceled');return;
      }
      snapshot();project=restoreFixedGeometry(clone(next));dashboardRevision=data.revision;selected=null;clearPlacement();setViewMode('design');afterChange('Imported from Home Assistant dashboard');fitView();
      const message=hasEditable?'Editable layout imported from dashboard':'Dashboard controls imported. Its image has no editable Roomcraft data, so the starting furnishings were used.';
      setDashboardStatus(message);showToast(message);
    }catch(error){const message=`Import failed: ${error.message||'Home Assistant is unavailable'}`;setDashboardStatus(message,true);showToast(message);}
    finally{setDashboardBusy(false);}
  }
  async function exportToDashboard(){
    if(dashboardTransferBusy)return;
    setDashboardBusy(true);setDashboardStatus('Checking the Home Assistant dashboard…');
    try{
      if(!dashboardRevision){const current=await dashboardRequest('GET');if(!current.revision)throw new Error('Dashboard revision is missing');dashboardRevision=current.revision;}
      const next=clone(project);next.hotspots=dashboardControls(next);
      if(!await askConfirmation('Export to Home Assistant','Replace the Second Floor plan image and interactive objects with this layout? The editable project is saved with the dashboard for future imports.','Export layout')){
        setDashboardStatus('Dashboard export canceled');return;
      }
      const before=JSON.stringify(project);
      setDashboardStatus('Rendering the detailed dashboard image…');
      const pngDataUrl=(await renderDetailedPng()).toDataURL('image/png');
      if(JSON.stringify(project)!==before)throw new Error('Layout changed while the image was rendering; try again');
      setDashboardStatus('Uploading image and saving dashboard…');
      const saved=await dashboardRequest('POST',{project:next,pngDataUrl,revision:dashboardRevision});
      if(!saved.imageUrl)throw new Error('Dashboard save did not return an image URL');
      dashboardRevision=saved.revision||null;
      setDashboardStatus('Layout, image, and controls exported to Home Assistant');showToast('Home Assistant dashboard updated');
    }catch(error){if(error.status===409)dashboardRevision=null;const message=error.status===409?'Dashboard changed since your last import. Import it before exporting again.':`Export failed: ${error.message||'Home Assistant is unavailable'}`;setDashboardStatus(message,true);showToast(message);}
    finally{setDashboardBusy(false);}
  }

  function bindEvents(){
    canvas.addEventListener('pointerdown',onPointerDown);canvas.addEventListener('pointermove',onPointerMove);canvas.addEventListener('pointerup',onPointerUp);canvas.addEventListener('pointercancel',onPointerUp);
    viewport.addEventListener('wheel',e=>{e.preventDefault();const s=screenPoint(e);zoomAt(e.deltaY<0?1.12:.89,s.x,s.y);},{passive:false});
    document.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>{setViewMode('design');setTool(b.dataset.tool);}));
    document.querySelectorAll('.panel-tab').forEach(b=>b.addEventListener('click',()=>setPanel(b.dataset.panel)));
    document.getElementById('objectsPanel').addEventListener('click',e=>{const b=e.target.closest('[data-template]');if(!b)return;setViewMode('design');setTool('select');pendingTemplate=b.dataset.template;viewport.classList.add('placing');renderPalette();const t=templateByType[pendingTemplate];showToast(t.mount==='wall'||t.type==='window'?'Click near a wall to mount it':t.form==='gate'?'Click across the stair opening; rotate in the Inspector as needed':`Click the plan to place ${t.label}`);});
    document.getElementById('objectSearch').addEventListener('input',()=>{document.getElementById('objectsPanel').scrollTop=0;document.getElementById('inventoryStrip').scrollLeft=0;renderPalette();});
    document.getElementById('objectCategory').addEventListener('change',()=>{document.getElementById('objectsPanel').scrollTop=0;document.getElementById('inventoryStrip').scrollLeft=0;renderPalette();});
    document.getElementById('restoreFurnishingsButton').addEventListener('click',restoreReferenceItems);
    document.getElementById('recoverDraftButton').addEventListener('click',recoverPreviousDraft);
    document.getElementById('returnPreRecoveryButton').addEventListener('click',returnPreRecoveryLayout);
    document.getElementById('hotspotList').addEventListener('click',e=>{const linked=e.target.closest('[data-control-item]');if(linked){setViewMode('design');setTool('select');select('item',linked.dataset.controlItem);setStatus('Drag this linked object or edit its entity in the Inspector');return;}const b=e.target.closest('[data-hotspot]');if(!b)return;setViewMode('design');setTool('select');select('hotspot',b.dataset.hotspot);setStatus('Drag this Home Assistant control or edit it in the Inspector');});
    document.getElementById('surfacePalette').addEventListener('click',e=>{const b=e.target.closest('[data-surface]');if(!b)return;setViewMode('design');setTool('room');pendingSurface=b.dataset.surface;renderSurfacePalette();showToast(`Click a room to paint ${surfaceById[pendingSurface].name}`);});
    document.getElementById('wallPalette').addEventListener('click',e=>{const b=e.target.closest('[data-wall-finish]');if(!b)return;setViewMode('design');setTool('select');pendingWallFinish=b.dataset.wallFinish;renderWallPalette();showToast(`Click a wall to paint ${wallFinishById[pendingWallFinish].name}`);});
    document.getElementById('roomList').addEventListener('click',e=>{const b=e.target.closest('[data-room]');if(!b)return;setViewMode('design');setTool('room');select('room',b.dataset.room);});
    document.getElementById('inspectorContent').addEventListener('change',e=>{const el=e.target.closest('[data-prop]');if(el)updateProperty(el.dataset.prop,el.value);const v=e.target.closest('[data-variant]');if(v)updateVariant(v.value);const h=e.target.closest('[data-hotspot-prop]');if(h)updateHotspotProperty(h.dataset.hotspotProp,h.value);});
    document.getElementById('inspectorContent').addEventListener('click',e=>{const a=e.target.closest('[data-action]');if(a){if(a.dataset.action==='delete')deleteSelected();if(a.dataset.action==='duplicate')duplicateSelected();if(a.dataset.action==='rotate')rotateSelected();}if(e.target.id==='openHelpButton')document.getElementById('helpDialog').showModal();});
    document.getElementById('newRoomButton').addEventListener('click',addRoom);
    document.getElementById('designModeButton').addEventListener('click',()=>setViewMode('design'));
    document.getElementById('referenceModeButton').addEventListener('click',()=>setViewMode('reference'));
    document.getElementById('focusCanvasButton').addEventListener('click',()=>setFocusCanvas(!focusCanvas));
    document.getElementById('showReferenceButton').addEventListener('click',()=>setViewMode('reference'));
    document.getElementById('zoomInButton').addEventListener('click',()=>{const r=viewport.getBoundingClientRect();zoomAt(1.2,r.width/2,r.height/2);});
    document.getElementById('zoomOutButton').addEventListener('click',()=>{const r=viewport.getBoundingClientRect();zoomAt(1/1.2,r.width/2,r.height/2);});
    document.getElementById('fitButton').addEventListener('click',fitView);
    document.getElementById('zoomValue').addEventListener('click',()=>{const r=viewport.getBoundingClientRect();zoomAt(1/currentView.scale,r.width/2,r.height/2);});
    document.getElementById('undoButton').addEventListener('click',undo);document.getElementById('redoButton').addEventListener('click',redo);
    document.getElementById('importDashboardButton').addEventListener('click',importFromDashboard);
    document.getElementById('exportDashboardButton').addEventListener('click',exportToDashboard);
    const menu=document.getElementById('exportMenu'),menuButton=document.getElementById('exportButton');
    const showMenu=open=>{menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));};
    menuButton.addEventListener('click',()=>showMenu(menu.hidden));
    menu.addEventListener('click',e=>{const b=e.target.closest('[data-export]');if(!b)return;showMenu(false);if(b.dataset.export==='png')exportPng();if(b.dataset.export==='json')exportJson();if(b.dataset.export==='yaml')exportHaYaml();});
    document.addEventListener('pointerdown',e=>{if(!e.target.closest('.menu-wrap'))showMenu(false);});
    document.getElementById('importButton').addEventListener('click',()=>document.getElementById('importFile').click());document.getElementById('importFile').addEventListener('change',e=>{importProject(e.target.files[0]);e.target.value='';});
    document.getElementById('resetButton').addEventListener('click',async()=>{if(!await askConfirmation('Reset layout','Load the starting furnished plan? Your current layout can be exported as JSON first, and this change is undoable in this session.','Reset layout'))return;snapshot();project=restoreFixedGeometry(clone(STARTER));selected=null;afterChange('Loaded starting furnished plan');fitView();});
    window.addEventListener('keydown',e=>{if(dashboardTransferBusy)return;const tag=document.activeElement?.tagName;if(['INPUT','TEXTAREA','SELECT'].includes(tag))return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo();return;}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();redo();return;}if(e.key===' '){e.preventDefault();spaceHeld=true;return;}if(e.key==='Escape'){const canceled=interaction;interaction=null;viewport.classList.remove('dragging');if(canceled?.snapshot&&history.length){project=history.pop();future=[];afterChange('Canceled drag');}clearPlacement();selected=null;renderInspector();updateHistoryButtons();draw();return;}if((e.key==='Delete'||e.key==='Backspace')&&selected){e.preventDefault();deleteSelected();return;}const shortcuts={v:'select',h:'pan',r:'room',w:'wall',e:'erase'};const shortcut=shortcuts[e.key.toLowerCase()];if(shortcut){setViewMode('design');setTool(shortcut);}});
    window.addEventListener('keyup',e=>{if(e.key===' ')spaceHeld=false;});
    window.addEventListener('resize',fitView);
  }

  window.addEventListener('roomcraft-asset-loaded',()=>{draw();paintPalettePreviews();});
  reference.addEventListener('load',paintPalettePreviews);
  emptyShell.addEventListener('load',paintPalettePreviews);
  renderCategoryOptions();bindEvents();renderPalette();renderSurfacePalette();renderWallPalette();renderRoomList();renderHotspotList();renderInspector();updateRestoreButton();updateRecoveryButton();updateHistoryButtons();setTool('select');fitView();draw();loadDashboardDefault();
})();
