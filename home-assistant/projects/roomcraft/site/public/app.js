(() => {
  'use strict';

  const Engine = window.RoomcraftEngine;
  if (!Engine) throw new Error('RoomcraftEngine must load before app.js');
  const SceneSettings = window.RoomcraftSceneSettings;
  const Terrain = window.RoomcraftTerrain;
  const EditSafety = window.RoomcraftEditSafety;
  if (!EditSafety) throw new Error('RoomcraftEditSafety must load before app.js');
  const clone = Engine.clone;
  const projectFingerprint = value => Engine.canonicalStringify(value);
  let idAllocator = null;
  const allocatedIds = new Set();
  function registerProjectIds(scene) {
    for (const collection of ['rooms','walls','items','hotspots']) {
      for (const record of scene?.[collection] || []) if (record?.id) allocatedIds.add(record.id);
    }
  }
  function initializeIdAllocator(scene) {
    allocatedIds.clear();
    registerProjectIds(scene);
    idAllocator = Engine.createIdAllocator({
      seed: { schemaVersion: scene?.version || 2, projectHash: Engine.fingerprint(scene) },
      namespace: 'roomcraft'
    });
  }
  function uid(prefix) {
    if (!idAllocator) throw new Error('Roomcraft deterministic ID allocator is not initialized');
    let id;
    do { id = idAllocator.next(prefix); } while (allocatedIds.has(id));
    allocatedIds.add(id);
    return id;
  }

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

  const surfaces = [
    { id: 'oak', name: 'Warm oak', note: 'Open living · long planks', color: '#dca46c', accent: '#b77d4d' },
    { id: 'walnut', name: 'Walnut parquet', note: 'Study · herringbone', color: '#a36b4b', accent: '#75472e' },
    { id: 'ash', name: 'Pale ash', note: 'Bedroom · wide planks', color: '#e7dac5', accent: '#c5ad8c' },
    { id: 'ivory', name: 'Ivory ceramic', note: 'Bath · small squares', color: '#ede5d6', accent: '#cdc3b1' },
    { id: 'blue', name: 'Blue-gray tile', note: 'Bath · fine squares', color: '#becdd0', accent: '#8da8ab' },
    { id: 'terrazzo', name: 'Soft terrazzo', note: 'Extra room · speckled', color: '#e6e1d6', accent: '#b7aea0' },
    { id: 'sage', name: 'Sage tile', note: 'Extra room · matte', color: '#b9c9b1', accent: '#88a389' },
    { id: 'patio', name: 'Patio stone', note: 'Landings and decks', color: '#d4c5ae', accent: '#ad9e86' }
  ];
  const surfaceById = Object.fromEntries(surfaces.map(s => [s.id, s]));
  const wallFinishes = [
    { id: 'graphite', name: 'Graphite', note: 'Original charcoal walls', color: '#26333b' },
    { id: 'plaster', name: 'Warm plaster', note: 'Soft cream wall caps', color: '#dfcfb5' },
    { id: 'sage', name: 'Sage', note: 'Muted green wall caps', color: '#94a78b' },
    { id: 'walnut', name: 'Walnut', note: 'Warm timber wall caps', color: '#8d654d' }
  ];
  const wallFinishById = Object.fromEntries(wallFinishes.map(f => [f.id, f]));
  const Models = window.RoomcraftModels;
  const {templates, paletteGroups} = Models.catalog();
  const paletteTemplates = templates.filter(template => !template.legacy);
  const templateByType = Object.fromEntries(templates.map(t => [t.type, t]));

  const point = (x, y) => ({ x, y });
  const room = (id, name, surface, points, label) => ({ id, name, surface, points: points.map(p => point(...p)), label: point(...label) });
  const wall = (id, x1, y1, x2, y2) => ({ id, x1, y1, x2, y2 });
  const item = (id, type, name, x, y, w, h, rotation = 0) => ({ id, type, name, x, y, w, h, rotation, entityId: '',
    ...(templateByType[type]?.visualKind?{visualKind:templateByType[type].visualKind}:{}),
    ...(templateByType[type]?.lightForm?{lightForm:templateByType[type].lightForm}:{}),
    ...(type==='cameraThumbnail'?{previewMode:'event',imageEntityId:'',eventEntityIds:[]}:{}) });
  const validEntityId = value => /^[a-z_]+\.[a-z0-9_]+$/i.test(value||'');
  function clampLinkedItem(o){
    if(o.type==='cameraThumbnail'||!validEntityId(o.entityId))return;
    o.x=Math.max(0,Math.min(W,o.x));o.y=Math.max(0,Math.min(H,o.y));
    o.w=Math.max(12,Math.min(W,o.w));o.h=Math.max(12,Math.min(H,o.h));
  }
  const placementBlock = (candidate, previous) => Models.blockingPlacement(candidate, project.items, previous);
  const placementMessage = blocker => `Leave room for ${blocker.name || templateByType[blocker.type]?.label || 'the other object'}.`;
  function checkPlacement(candidate, previous) {
    const blocker = placementBlock(candidate, previous);
    if (blocker) showToast(placementMessage(blocker));
    return !blocker;
  }
  const isFixtureControl = o => templateByType[o.type]?.group==='lighting'||templateByType[o.type]?.artFamily==='ceilingFan';
  const matchesKnownGeometry = (o, variants, tolerance=2) => !!o && variants.some(v =>
    ['x','y','w','h'].every(key=>Math.abs(o[key]-v[key])<=tolerance) &&
    Math.abs((((o.rotation||0)%360)+360)%360-(v.rotation||0))<=tolerance);
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
      item('i4','desk','Study desk',930,312,245,156),item('i5','chair','Desk chair',978,310,47,47),item('i6','bed','Queen bed',1331,373,213,194),
      item('i7','counter','Kitchen counter',667,675,56,234),item('i8','counter','Kitchen island',825,675,59,235),
      item('i9','tub','Bathtub',902,728,60,130),item('i10','tub','Bathtub',1148,728,60,130),item('i11','toilet','Toilet',1056,745,45,58),
      item('i12','toilet','Toilet',1148,611,45,58),item('i13','plant','Table flowers',460,654,32,32),
      item('i14','lamp','Bedroom bedside lamp',1443,476,48,60)
    ],
    hotspots: DEFAULT_HOTSPOTS
  };
  Object.assign(STARTER, Models.splitDiningFurniture(window.RoomcraftReferenceGeometry.repair(STARTER)));
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
  const DEFAULT_INTERFACE_ITEMS = [
    item('ui-weather-orb','uiWeatherOrb','Sun / moon',1010,115,64,64),
    item('ui-device-menu','uiMenu','Device menu',80,126,48,48),
    item('ui-clock','uiTime','Clock',1275,126,84,42),
    item('ui-edit-layout','uiEdit','Edit layout button',1350,864,48,48),
    item('ui-status-air','uiStatusAir','Indoor air status',1410,864,48,48),
    item('ui-status-electrical','uiStatusElectrical','Electrical status',1470,864,48,48)
  ];
  // Furniture that was formerly baked into source-image fragments. Keeping it
  // as real items makes the reference layout accurate and independently
  // editable without carrying floor pixels or clipped crop edges.
  const REFERENCE_FURNITURE_V4 = [
    item('office-credenza','dresser','Office credenza',869,445,124,45),
    item('master-nightstand','nightstand','Master humidifier table',1443,479,80,58),
    item('master-low-dresser','dresser','Master lower dresser',1443,529,80,44)
  ];
  // Reference art that used to be painted unconditionally by the raster
  // renderer. Every visible, removable thing now has one scene record.
  const REFERENCE_SCENE_ITEMS_V5 = [
    Object.assign(item('rug-living','rug','Living room rug',541,351,207,142,90),{rugStyle:'classic'}),
    Object.assign(item('rug-bedroom','rug','Bedroom floral rug',1331,408,254,240),{rugStyle:'bedroom-floral'}),
    Object.assign(item('rug-office','rug','Office round rug',940,389,82,78),{rugStyle:'office-round'}),
    item('kitchen-worktop','kitchenWorktop','Kitchen appliance worktop',748,735.5,106,127),
    item('master-storage-cabinet','storageCabinet','Master storage cabinet',1432.5,243,75,92),
    item('master-bedroom-bench','bedroomBench','Master bedroom bench',1169,413,52,122),
    item('bath-one-fixtures','bathFixtures','Bath 01 fixture group',1056.5,739.5,73,117),
    item('bath-two-vanity','doubleVanity','Bath 02 double-sink vanity',1296,777,202,44),
    item('window-living-north','window','Living north window',461,203,82,34),
    item('window-great-north','window','Great room north window',728,203,78,34),
    item('window-office-north-one','window','Office north window 01',866.5,203,71,34),
    item('window-office-north-two','window','Office north window 02',962.5,203,73,34),
    item('window-bedroom-north-one','window','Bedroom north window 01',1227,179,84,34),
    item('window-bedroom-north-two','window','Bedroom north window 02',1340,179,82,34),
    item('window-living-west','window','Living west window',400,316.5,107,28,90),
    item('window-dining-west','window','Dining west window',303.5,709,138,29,90)
  ];
  // Last non-architectural feature discovered in the supplied "empty" PNG.
  // The renderer repairs the wall beneath it, so this item is its only owner.
  const REFERENCE_SCENE_ITEMS_V6 = [
    item('living-wall-unit','wallUnit','Living wall-mounted unit',598.5,190.5,139,43)
  ];
  const interfaceTypes = new Set(DEFAULT_INTERFACE_ITEMS.map(o=>o.type));
  const REFERENCE_MIGRATIONS = [
    {id:'reference-v1-movable-bedside-lamp',from:0,to:1,apply(state){
      const lamp=STARTER.items.find(i=>i.id==='i14');
      const nearbyLamp=state.items.some(i=>i.id==='i14'||(i.type==='lamp'&&Math.hypot(i.x-lamp.x,i.y-lamp.y)<45));
      if(!nearbyLamp)state.items.push(clone(lamp));
      return state;
    }},
    {id:'reference-v2-room-fixtures',from:1,to:2,apply(state){
      for(const fixture of DEFAULT_ROOM_FIXTURES){
        const present=state.items.some(i=>i.id===fixture.id||(i.type===fixture.type&&Math.hypot(i.x-fixture.x,i.y-fixture.y)<30));
        if(!present)state.items.push(clone(fixture));
      }
      return state;
    }},
    {id:'reference-v3-movable-interface',from:2,to:3,apply(state){
      for(const control of DEFAULT_INTERFACE_ITEMS)if(!state.items.some(i=>i.id===control.id||i.type===control.type))state.items.push(clone(control));
      return state;
    }},
    {id:'reference-v4-office-and-bedroom-art',from:3,to:4,apply(state){
      const desk=state.items.find(i=>i.id==='i4');
      // Correct only the two shipped shallow-desk variants. Owner geometry is
      // data, not a migration target, and therefore remains untouched.
      if(matchesKnownGeometry(desk,[
        {x:923,y:273,w:196,h:85,rotation:0},
        {x:924,y:278,w:196,h:85,rotation:0}
      ]))Object.assign(desk,{x:930,y:312,w:245,h:156,rotation:0});
      const chair=state.items.find(i=>i.id==='i5');
      if(matchesKnownGeometry(chair,[
        {x:978,y:310,w:47,h:47,rotation:0},
        {x:975,y:322,w:47,h:47,rotation:0}
      ]))Object.assign(chair,{x:978,y:310,w:47,h:47,rotation:0});
      for(const furniture of REFERENCE_FURNITURE_V4){
        const present=state.items.some(i=>i.id===furniture.id||
          (i.type===furniture.type&&Math.hypot(i.x-furniture.x,i.y-furniture.y)<36));
        // Retain the legacy array position for byte-compatible v2 projects;
        // the render engine now owns the actual visual layer.
        if(!present)state.items.unshift(clone(furniture));
      }
      return state;
    }},
    {id:'reference-v5-all-visuals-are-items',from:4,to:5,apply(state){
      for(const referenceItem of REFERENCE_SCENE_ITEMS_V5){
        if(!state.items.some(current=>current.id===referenceItem.id))state.items.push(clone(referenceItem));
      }
      return state;
    }},
    {id:'reference-v6-last-shell-object',from:5,to:6,apply(state){
      for(const referenceItem of REFERENCE_SCENE_ITEMS_V6){
        if(!state.items.some(current=>current.id===referenceItem.id))state.items.push(clone(referenceItem));
      }
      const fan=state.items.find(current=>current.type==='fans-fan-light-white'&&/dining ceiling fan/i.test(current.name||''));
      if(fan)fan.type='fans-five-blade-fan-white';
      const fanLight=state.items.find(current=>current.type==='controlZone'&&/dining fan light/i.test(current.name||'')&&Math.hypot(current.x-445,current.y-682)<32);
      if(fanLight)Object.assign(fanLight,{type:'ceilingLight',visualKind:'light',lightForm:'bloom_ceiling',w:46,h:46});
      const garage=state.items.find(current=>current.type==='garageDoor'&&/garage door/i.test(current.name||''));
      if(matchesKnownGeometry(garage,[{x:306,y:106,w:116,h:52,rotation:0}],3))Object.assign(garage,{x:306,y:112,w:132,h:92});
      return state;
    }},
    {id:'reference-v7-source-geometry',from:6,to:7,apply:window.RoomcraftReferenceGeometry.repair},
    {id:'reference-v8-editable-structure',from:7,to:8,apply:window.RoomcraftReferenceGeometry.unlockStructure},
    {id:'reference-v9-ledge-railings',from:8,to:9,apply:window.RoomcraftReferenceGeometry.closeReferenceRailings},
    {id:'reference-v10-independent-dining-furniture',from:9,to:10,apply:Models.splitDiningFurniture}
  ];

  let hasLocalDraft = false;
  function loadProject() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return normalizeProject(clone(STARTER));
      const parsed = JSON.parse(raw);
      if (validProject(parsed)) {hasLocalDraft=true;return normalizeProject(parsed);}
    } catch (_) { /* use starter */ }
    return normalizeProject(clone(STARTER));
  }
  function validProject(p) {
    return p && Array.isArray(p.rooms) && Array.isArray(p.walls) && Array.isArray(p.items)
      && SceneSettings.valid(p.sceneSettings)
      && Terrain.valid(p.terrain)
      && p.rooms.every(r => typeof r.id === 'string' && !!surfaceById[r.surface] &&
        (r.outdoor === undefined || typeof r.outdoor === 'boolean') &&
        Array.isArray(r.points) && r.points.length >= 3 && r.points.every(q => Number.isFinite(q.x) && Number.isFinite(q.y)))
      && p.walls.every(w => typeof w.id === 'string' && (w.kind === undefined || w.kind === 'fence') &&
        (!w.finish || !!wallFinishById[w.finish]) && [w.x1,w.y1,w.x2,w.y2].every(Number.isFinite))
      && p.items.every(i => typeof i.id === 'string' && templateByType[i.type] && [i.x,i.y,i.w,i.h,i.rotation].every(Number.isFinite)
        && (!Object.prototype.hasOwnProperty.call(i,'zIndex')||Number.isFinite(i.zIndex))
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
  function normalizeProject(p){
    let next=Engine.normalizeScene(p);
    next=clone(Engine.migrations.run(next,REFERENCE_MIGRATIONS,10,{versionKey:'editableReferenceVersion'}).project);
    if(!Array.isArray(next.hotspots))next.hotspots=clone(DEFAULT_HOTSPOTS);
    for(const o of next.items)clampLinkedItem(o);
    const terrain = Terrain.normalize(next.terrain);
    if (terrain) next.terrain = terrain;
    else delete next.terrain;
    next.version=2;
    const checked = EditSafety.repair(next);
    if (!checked.ok) throw new Error(checked.issues[0]?.message || 'The layout has invalid structure.');
    return Engine.normalizeScene(checked.project);
  }
  let project = loadProject();
  initializeIdAllocator(project);
  const sceneReducer = (state,command) => {
    if(command.type!=='scene.replace')throw new Error(`Unsupported Roomcraft command: ${command.type}`);
    return command.payload.project;
  };
  const createEditorJournal = initialState => Engine.commands.createJournal({
    initialState,
    seed:{schemaVersion:initialState.version,initialHash:Engine.fingerprint(initialState)},
    namespace:'edit',reducer:sceneReducer,validate:validProject
  });
  let editorJournal = createEditorJournal(project);
  let journalCommandCount = 0, journalCheckpointCount = 0;
  let selected = null;
  let tool = 'select';
  let snapWallEnds = true;
  let pendingTemplate = null;
  let pendingEntityId = '';
  let modelLibrary;
  let lockObjectDimensions = false;
  let pendingSurface = null;
  let pendingWallFinish = null;
  let pendingSegment = null;
  let interaction = null;
  let spaceHeld = false;
  let history = [], future = [];
  let editCheckpoint = null;
  let lastValidProject = clone(project);
  let safetyState = {kind:'ready', message:'Edit protection is on.', repairs:[], issues:[]};
  let saveTimer = null, toastTimer = null;
  let pendingDraft = null;
  let currentView = { scale: 1, tx: 0, ty: 0 };
  let overheadView = null;
  const displayView = () => overheadView ?? currentView;
  const viewScale = () => displayView().scale;
  let currentPointer = point(0,0);
  let focusCanvas = false;
  let dashboardRevision = null;
  let dashboardNeedsImport = false;
  let dashboardTransferBusy = false;
  const DASHBOARD_HOME = '/roomcraft-home/home';
  const DASHBOARD_PATHS = new Set([DASHBOARD_HOME, '/second-floor/plan']);
  let dashboardSource = location.pathname.startsWith('/local/roomcraft/')
    ? new URL(DASHBOARD_HOME, location.origin).href : null;
  let dashboardPublishedProject = null;
  let dashboardDefaultProject = null;
  let dashboardPreview = null;
  let personPreview = [];
  let projectChangeSerial = 0;
  let sceneOrderCache = null;
  let entityOptions = [];

  function sceneLayers(){
    if(!sceneOrderCache||sceneOrderCache.serial!==projectChangeSerial||sceneOrderCache.items!==project.items||sceneOrderCache.length!==project.items.length){
      sceneOrderCache={serial:projectChangeSerial,items:project.items,length:project.items.length,
        layers:Engine.render.orderSceneItems(project.items,window.RoomcraftInventory?.byType)};
    }
    return sceneOrderCache.layers;
  }

  function updateEntityOptions(data) {
    entityOptions = window.RoomcraftObjectControls.normalizeEntityOptions(data?.entityOptions);
    // A dashboard read can finish while someone is typing into the inspector.
    // Keep their in-progress value and show the new suggestions on next selection.
    if(selected?.kind==='item'&&!document.activeElement?.closest?.('#inspectorContent'))renderInspector();
  }

  function saveSoon() {
    const label = document.getElementById('saveState');
    label.innerHTML = '<span class="save-dot"></span> Saving…';
    pendingDraft = projectFingerprint(project);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flushPendingDraft, 250);
  }
  function flushPendingDraft() {
    if(pendingDraft!==null)saveDraftNow(pendingDraft);
  }
  function saveDraftNow(draft = projectFingerprint(project)) {
    clearTimeout(saveTimer);
    saveTimer=null;pendingDraft=null;
    try {
      localStorage.setItem(STORAGE_KEY, draft);
      document.getElementById('saveState').innerHTML = '<span class="save-dot"></span> Saved locally';
      return true;
    } catch (_) {
      document.getElementById('saveState').textContent = 'Browser storage is full';
      return false;
    }
  }
  function checkpointEdit() { editCheckpoint={project:clone(project),history:history.slice(),future:future.slice(),selected:selected?{...selected}:null}; }
  function snapshot() { checkpointEdit(); history.push(clone(project)); if (history.length > 70) history.shift(); future = []; updateHistoryButtons(); }
  function undo() { if(interaction){cancelGesture();return;} if (!history.length) return; checkpointEdit(); future.push(clone(project)); project = history.pop(); selected = null; afterChange('Undid last change',{resetIdentity:true}); }
  function redo() { if(interaction){cancelGesture();return;} if (!future.length) return; checkpointEdit(); history.push(clone(project)); project = future.pop(); selected = null; afterChange('Redid change',{resetIdentity:true}); }
  function updateHistoryButtons() { document.getElementById('undoButton').disabled = !history.length; document.getElementById('redoButton').disabled = !future.length; }
  function rejectEdit(issues) {
    project=clone(editCheckpoint?.project ?? lastValidProject);
    if(editCheckpoint){history=editCheckpoint.history;future=editCheckpoint.future;selected=editCheckpoint.selected;}
    editCheckpoint=null;
    initializeIdAllocator(project);
    sceneOrderCache=null;
    const message='Edit kept safe. '+(issues[0]?.message || 'This change could not be applied.')+' Previous layout restored.';
    safetyState={kind:'blocked',message,repairs:[],issues};
    draw();renderInspector();renderRoomList();renderStructureList();updateHistoryButtons();
    setStatus(message);showToast(message);
    window.dispatchEvent?.(new CustomEvent('roomcraft-editor-change'));
    return false;
  }
  function afterChange(message,options={}) {
    let checked;
    try {
      const previous=editCheckpoint?.project ?? lastValidProject;
      const terrainRepair=options.repairTerrain===true || (!options.authoritative&&!options.resetIdentity &&
        JSON.stringify(project.terrain)!==JSON.stringify(previous.terrain));
      checked=EditSafety.repair(project,{previous,terrainRepair});
      if(!checked.ok)return rejectEdit(checked.issues);
      const next=Engine.normalizeScene(checked.project);
      if(!validProject(next))return rejectEdit([{code:'invalid-project',message:'The changed layout contains unsupported values.'}]);
      project=next;
    } catch {
      return rejectEdit([{code:'invalid-project',message:'The changed layout could not be validated.'}]);
    }
    if(options.authoritative||options.resetIdentity)initializeIdAllocator(project);
    else registerProjectIds(project);
    if(options.authoritative){
      // A full import/reset starts a reproducible identity and evidence branch
      // from that project, independent of the browser draft that preceded it.
      editorJournal=createEditorJournal(project);journalCommandCount=0;journalCheckpointCount=0;
    }else{
      if(journalCommandCount>=70){editorJournal=createEditorJournal(project);journalCommandCount=0;journalCheckpointCount++;}
      else{editorJournal.dispatch('scene.replace',{project,reason:message||'editor change'});journalCommandCount++;}
    }
    lastValidProject=clone(project);editCheckpoint=null;
    const safetyMessage=checked.repaired?'Auto-repaired the edit. Undo is available.':'Edit protection is on.';
    safetyState={kind:checked.repaired?'repaired':'ready',message:safetyMessage,repairs:checked.repairs,issues:[]};
    if(checked.repaired){message=(message?message+'. ':'')+safetyMessage;showToast(safetyMessage);}
    projectChangeSerial++;sceneOrderCache=null;saveSoon();draw();renderInspector();renderRoomList();renderStructureList();renderHotspotList();updateClearObjectsButton();updateRecoveryButton();updateHistoryButtons();if(message)setStatus(message);
    window.dispatchEvent?.(new CustomEvent('roomcraft-editor-change'));
    return true;
  }
  function repairLayout() {
    if(dashboardTransferBusy||interaction){showToast('Finish the current edit before checking the layout.');return false;}
    const checked=EditSafety.repair(project,{previous:lastValidProject,terrainRepair:true});
    if(!checked.ok){setStatus(checked.issues[0]?.message||'The layout needs attention.');return false;}
    if(!checked.repaired){safetyState={kind:'ready',message:'Terrain and structure checks passed.',repairs:[],issues:[]};setStatus(safetyState.message);showToast(safetyState.message);return false;}
    snapshot();project=checked.project;
    const applied=afterChange('Repaired terrain and structure');
    if(applied){safetyState={kind:'repaired',message:'Terrain and structure repaired. Undo is available.',repairs:checked.repairs,issues:[]};setStatus(safetyState.message);showToast(safetyState.message);}
    return applied;
  }
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
    c.save();c.lineCap='square';c.strokeStyle=finish.color;c.lineWidth=w.kind==='fence'?6:16;c.beginPath();c.moveTo(w.x1,w.y1);c.lineTo(w.x2,w.y2);c.stroke();c.restore();
  }
  function drawObject(c,o) {
    if(o.type==='controlZone')return;
    if(window.RoomcraftObjectArt?.draw(c,o)) return;
    c.save();c.translate(o.x,o.y);c.rotate(o.rotation*Math.PI/180);
    const x=-o.w/2,y=-o.h/2,w=o.w,h=o.h;
    if(interfaceTypes.has(o.type)){
      const glyph={uiWeatherOrb:'☀',uiMenu:'☰',uiTime:'12:34',uiEdit:'✎',uiStatusAir:'◌',uiStatusElectrical:'ϟ'}[o.type]||'•';
      // Layered offset fills replace canvas shadowBlur. Android WebView could
      // corrupt the blurred camera/menu tiles into a black-magenta fragment.
      c.fillStyle='rgba(7,23,29,.16)';round(c,x+3,y+5,w,h,Math.min(14,h/2));c.fill();
      c.fillStyle='rgba(7,23,29,.24)';round(c,x+2,y+3,w,h,Math.min(14,h/2));c.fill();
      c.fillStyle=o.type==='uiWeatherOrb'?'#fff0a5':'#183336e8';
      round(c,x,y,w,h,Math.min(14,h/2));c.fill();c.strokeStyle=o.type==='uiWeatherOrb'?'#ffd36b':'#d8e3d5';c.lineWidth=2;c.stroke();
      c.fillStyle=o.type==='uiWeatherOrb'?'#9b671d':'#f5f7ee';c.font=`700 ${Math.max(12,Math.min(h*.5,w*.42))}px system-ui`;c.textAlign='center';c.textBaseline='middle';c.fillText(glyph,0,0);
    }else if(o.type==='rug'){
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
      c.fillStyle='rgba(7,23,29,.18)';round(c,x+3,y+5,w,h,10);c.fill();
      c.fillStyle='rgba(7,23,29,.26)';round(c,x+2,y+3,w,h,10);c.fill();
      c.fillStyle='#17262d';round(c,x,y,w,h,10);c.fill();
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
      c.translate(o.x,o.y);c.rotate(o.rotation*Math.PI/180);c.strokeRect(-o.w/2-7,-o.h/2-7,o.w+14,o.h+14);c.setLineDash([]);for(const [dx,dy] of [[-1,-1],[1,-1],[1,1],[-1,1]]){c.beginPath();c.arc(dx*(o.w/2+7),dy*(o.h/2+7),Math.min(12,Math.max(6,7/viewScale())),0,Math.PI*2);c.fill();c.stroke();}
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
  function drawStructureGuides(c) {
    const guide = interaction?.kind === 'wall-draw' ? interaction : pendingSegment;
    if (guide) {
      const end = guide.end || guide.start;
      c.save();
      c.strokeStyle = '#ed7255';
      c.lineWidth = guide.segmentKind === 'fence' ? 5 : 9;
      c.setLineDash([12, 7]);
      c.beginPath();
      c.moveTo(guide.start.x, guide.start.y);
      c.lineTo(end.x, end.y);
      c.stroke();
      c.setLineDash([]);
      c.fillStyle = '#ed7255';
      c.beginPath();
      c.arc(guide.start.x, guide.start.y, 6, 0, Math.PI * 2);
      c.fill();
      c.restore();
    }
    const join = interaction?.joinPoint ?? pendingSegment?.joinPoint;
    if (!join) return;
    c.save();
    c.fillStyle = '#37745d';
    c.strokeStyle = '#fffdf4';
    c.lineWidth = 2;
    c.beginPath();
    c.arc(join.x, join.y, 8, 0, Math.PI * 2);
    c.fill();
    c.stroke();
    c.restore();
  }
  function drawPersonPreview(c) {
    for (const person of personPreview) {
      c.save();
      c.translate(person.x, person.y);
      c.fillStyle = '#3e595460';
      c.beginPath();
      c.ellipse(0, 1, 11, 5, 0, 0, Math.PI * 2);
      c.fill();
      c.fillStyle = '#779e8b';
      c.strokeStyle = '#fffae8';
      c.lineWidth = 1.7;
      c.beginPath();
      c.ellipse(0, -4, 8, 6, 0, 0, Math.PI * 2);
      c.fill();
      c.stroke();
      c.fillStyle = '#f5ca9e';
      c.beginPath();
      c.arc(0, -12, 6.8, 0, Math.PI * 2);
      c.fill();
      c.stroke();
      c.fillStyle = '#664b47';
      c.beginPath();
      c.arc(0, -12, 6, Math.PI, 2 * Math.PI);
      c.fill();
      c.restore();
    }
  }

  function draw(target=ctx,clean=false) {
    const c=target;
    const overheadGuides=!clean&&overheadView;
    c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
    c.clearRect(0,0,overheadGuides?W:VIEW_W,overheadGuides?H:VIEW_H);
    c.save();
    if(!overheadGuides)c.translate(-CROP_X,-CROP_Y);
    if(clean || !overheadView){
      const raster=window.RoomcraftRasterRenderer;
      const drawDynamicObject=o=>{
        // HA renders bound fans and robots as live stateful objects. Keep their
        // art in the editor, but omit a fixed fan/robot from the exported PNG
        // so motion and map tracking never create a second frozen copy.
        if(clean&&interfaceTypes.has(o.type))return;
        if(clean&&validEntityId(o.entityId)&&(isFixtureControl(o)||
          ['ceilingFan','robotVacuum'].includes(templateByType[o.type]?.artFamily)||
          ['humidifier','airPurifier'].includes(o.type)))return;
        Models.drawWithGarageRoofOcclusion(c,o,project.items,()=>drawObject(c,o));
      };
      if(raster)raster.draw(c,project,drawDynamicObject);
      else{
        const layers=sceneLayers();
        c.fillStyle='#cfdfbf';c.fillRect(0,0,W,H);drawRooms(c);
        for(const o of layers.floorItems)drawDynamicObject(o);
        for(const o of Models.orderMountedObjects(layers.regularItems))drawDynamicObject(o);
        for(const o of layers.ceilingItems)drawDynamicObject(o);
        for(const w of project.walls)drawWall(c,w);
        for(const o of layers.windowItems)drawDynamicObject(o);
      }
    }
    if(!clean){
      const raster=window.RoomcraftRasterRenderer;
      drawPersonPreview(c);
      drawControlZones(c);drawHotspots(c);drawSelection(c);
      drawStructureGuides(c);
      if(pendingTemplate&&currentPointer){
        const t=templateByType[pendingTemplate],wallMounted=t.type==='window'||t.mount==='wall';
        const mount=wallMounted?nearestWallPlacement(currentPointer):null;
        if(!wallMounted||mount){
          const ghost=item('ghost',t.type,t.label,mount?.x??currentPointer.x,mount?.y??currentPointer.y,t.w,t.h,mount?.rotation??0);
          c.save();c.globalAlpha=.58;
          if(overheadView||t.type==='controlZone'){
            c.strokeStyle='#237a8a';c.lineWidth=2;c.setLineDash([8,5]);
            c.strokeRect(ghost.x-ghost.w/2,ghost.y-ghost.h/2,ghost.w,ghost.h);c.setLineDash([]);
          }else if(raster)raster.drawItem(c,ghost,()=>drawObject(c,ghost));
          else drawObject(c,ghost);
          if(placementBlock(ghost)){
            c.translate(ghost.x,ghost.y);c.rotate(ghost.rotation*Math.PI/180);
            c.strokeStyle='#b83548';c.lineWidth=4;
            c.strokeRect(-ghost.w/2,-ghost.h/2,ghost.w,ghost.h);
          }
          c.restore();
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
    button.textContent=next?'Exit focus':'Focus canvas';
    button.title=next?'Show the editing panels again':'Expand the artwork for a closer look';
    setStatus(next?'Canvas expanded · click the zoom percentage to reset the view':'Editing panels restored');
    requestAnimationFrame(fitView);
  }
  function fitView() {
    if(overheadView){overheadView.fit();return;}
    const rect=viewport.getBoundingClientRect();
    currentView.scale=Math.min((rect.width-28)/VIEW_W,(rect.height-28)/VIEW_H);
    currentView.scale=Math.max(.18,currentView.scale);
    currentView.tx=(rect.width-VIEW_W*currentView.scale)/2;
    currentView.ty=(rect.height-VIEW_H*currentView.scale)/2;
    applyView();
  }
  function applyView(){
    const {tx,ty,scale,zoom=scale}=displayView();
    stage.style.transform='translate('+tx+'px,'+ty+'px) scale('+scale+')';
    document.getElementById('zoomValue').textContent=Math.round(zoom*100)+'%';
  }
  function setOverheadView(projection){
    const guidesChanged=Boolean(overheadView)!==Boolean(projection);
    overheadView=projection ? {...projection,
      tx:-projection.left*projection.scale,
      ty:-projection.top*projection.scale,
    } : null;
    if(guidesChanged){
      canvas.width=overheadView?W:VIEW_W;
      canvas.height=overheadView?H:VIEW_H;
      canvas.tabIndex=overheadView?-1:0;
      canvas.setAttribute('aria-hidden',String(Boolean(overheadView)));
    }
    if(overheadView)applyView();else fitView();
    draw();
  }
  function zoomAt(factor,x,y){
    if(overheadView){overheadView.zoomAt(factor,x,y);return;}
    const old=currentView.scale,next=Math.max(.2,Math.min(3.5,old*factor));
    const wx=(x-currentView.tx)/old,wy=(y-currentView.ty)/old;
    currentView={scale:next,tx:x-wx*next,ty:y-wy*next};
    applyView();
  }
  function screenPoint(e){const r=viewport.getBoundingClientRect();return point(e.clientX-r.left,e.clientY-r.top);}
  function worldPoint(e){
    const p=screenPoint(e),{tx,ty,scale}=displayView();
    return point((p.x-tx)/scale+(overheadView?0:CROP_X),(p.y-ty)/scale+(overheadView?0:CROP_Y));
  }
  const snap = n => Math.round(n/10)*10;
  const drawSegmentTool = () => tool === 'wall' || tool === 'fence';
  const segmentLabel = segment => segment?.kind === 'fence' ? 'fence' : 'wall';
  function wallPoint(pointer, {origin, straight=false, excludeId, grid=false}={}) {
    const candidate = point(Math.max(0,Math.min(W,pointer.x)),Math.max(0,Math.min(H,pointer.y)));
    let axis;
    if(straight&&origin){
      axis=Math.abs(candidate.x-origin.x)>Math.abs(candidate.y-origin.y)?'y':'x';
      candidate[axis]=origin[axis];
    }
    const match=snapWallEnds?window.RoomcraftWallJoins?.snapPoint(candidate,project.walls,{axis,excludeId}):null;
    const round=grid?snap:Math.round;
    const fallback=point(Math.min(W,round(candidate.x)),Math.min(H,round(candidate.y)));
    if(axis)fallback[axis]=candidate[axis];
    return {position:match??fallback,match};
  }
  function joinNearbyWalls(){
    if(interaction)return;
    const joiner=window.RoomcraftWallJoins;
    const results=['wall','fence'].map(kind=>joiner.joinNearby(project.walls.filter(segment=>segmentLabel(segment)===kind)));
    const joined=results.reduce((total,result)=>total+result.joined,0);
    if(!joined){showToast('No nearby wall or fence ends to join');return;}
    const joinedWalls=new Map(results.flatMap(result=>result.walls).map(wall=>[wall.id,wall]));
    snapshot();
    project.walls=project.walls.map(wall=>joinedWalls.get(wall.id)??wall);
    setTool('structure');
    const message=`Joined ${joined} segment end${joined===1?'':'s'}`;
    afterChange(message);
    showToast(message);
  }
  function pointInPolygon(pt,points){let inside=false;for(let i=0,j=points.length-1;i<points.length;j=i++){const a=points[i],b=points[j];if(((a.y>pt.y)!==(b.y>pt.y))&&(pt.x<(b.x-a.x)*(pt.y-a.y)/(b.y-a.y)+a.x))inside=!inside;}return inside;}
  function hitRoom(p){for(let i=project.rooms.length-1;i>=0;i--){if(pointInPolygon(p,project.rooms[i].points))return project.rooms[i];}return null;}
  function itemLocalPoint(p,o){const r=-o.rotation*Math.PI/180,dx=p.x-o.x,dy=p.y-o.y;return point(dx*Math.cos(r)-dy*Math.sin(r),dx*Math.sin(r)+dy*Math.cos(r));}
  function hitItem(p,includeTouchTarget=true){
    // Prefer the visible footprint. Only use a larger touch target when no
    // object was directly hit, so a small lamp cannot steal its neighbor.
    const layers=sceneLayers();
    const hitOrder=[...layers.floorItems,...Models.orderMountedObjects(layers.regularItems),...layers.ceilingItems,...layers.windowItems];
    for(const expanded of includeTouchTarget?[false,true]:[false])for(let i=hitOrder.length-1;i>=0;i--){
      const o=hitOrder[i],q=itemLocalPoint(p,o);
      const halfW=expanded?Math.max(o.w/2+5,22/viewScale()):o.w/2+4;
      const halfH=expanded?Math.max(o.h/2+5,22/viewScale()):o.h/2+4;
      if(Math.abs(q.x)<=halfW&&Math.abs(q.y)<=halfH)return o;
    }
    return null;
  }
  function hitSelectedItemHandle(p){if(selected?.kind!=='item')return null;const o=project.items.find(i=>i.id===selected.id);if(!o)return null;const q=itemLocalPoint(p,o),reach=Math.max(11,11/viewScale());for(const [sx,sy] of [[-1,-1],[1,-1],[1,1],[-1,1]])if(Math.hypot(q.x-sx*(o.w/2+7),q.y-sy*(o.h/2+7))<=reach)return {item:o,sx,sy};return null;}
  function hitHotspot(p){const linkedEntities=new Set(project.items.map(o=>o.entityId).filter(Boolean));for(let i=project.hotspots.length-1;i>=0;i--){const h=project.hotspots[i];if(linkedEntities.has(h.entity))continue;const q=hotspotPoint(h);if(Math.hypot(p.x-q.x,p.y-q.y)<=Math.max(25,12/viewScale()))return h;}return null;}
  function segmentDistance(p,w){const vx=w.x2-w.x1,vy=w.y2-w.y1;const len=vx*vx+vy*vy;const t=len?Math.max(0,Math.min(1,((p.x-w.x1)*vx+(p.y-w.y1)*vy)/len)):0;return Math.hypot(p.x-(w.x1+t*vx),p.y-(w.y1+t*vy));}
  function hitWall(p){let found=null,dist=14/viewScale();for(const w of project.walls){const d=segmentDistance(p,w);if(d<dist){dist=d;found=w;}}return found;}
  function nearestWallPlacement(p){
    let nearest=null;
    for(const w of project.walls){
      if(w.kind==='fence')continue;
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
  function hitRoomVertex(p){if(selected?.kind!=='room')return -1;const r=project.rooms.find(r=>r.id===selected.id);if(!r)return -1;return r.points.findIndex(q=>Math.hypot(q.x-p.x,q.y-p.y)<12/viewScale());}
  function hitWallEndpoint(p,w){if(Math.hypot(p.x-w.x1,p.y-w.y1)<14/viewScale())return 1;if(Math.hypot(p.x-w.x2,p.y-w.y2)<14/viewScale())return 2;return 0;}
  function select(kind,id){selected={kind,id};renderInspector();renderRoomList();renderStructureList();renderHotspotList();draw();window.dispatchEvent?.(new CustomEvent('roomcraft-editor-change'));}
  function clearPlacement(){pendingTemplate=null;pendingEntityId="";pendingSurface=null;pendingWallFinish=null;pendingSegment=null;document.querySelectorAll('.palette-item,.surface-item,.wall-finish-item').forEach(el=>el.classList.remove('placing','active'));viewport.classList.remove('placing');renderSurfacePalette();renderWallPalette();}


  function placeTemplateAt(p) {
    if (!pendingTemplate || !Number.isFinite(p.x) || !Number.isFinite(p.y)) return false;
    const template = templateByType[pendingTemplate];
    const wallMounted = template.type === 'window' || template.mount === 'wall';
    const mount = wallMounted ? nearestWallPlacement(p) : null;
    if (wallMounted && !mount) {
      showToast('Click near a wall to mount this object');
      return false;
    }
    const placed = item('', template.type, template.label,
      Math.round(mount?.x ?? p.x), Math.round(mount?.y ?? p.y),
      template.w, template.h, mount?.rotation ?? 0);
    if (placed.type === 'cameraThumbnail') {
      placed.x = Math.max(0, Math.min(W, placed.x));
      placed.y = Math.max(0, Math.min(H, placed.y));
    }
    if (pendingEntityId) {
      placed.entityId = pendingEntityId;
      if (placed.type === 'presenceSwitch' && pendingEntityId.startsWith('binary_sensor.')) placed.presenceEntityId = pendingEntityId;
      clampLinkedItem(placed);
    }
    if (!checkPlacement(placed)) return false;
    snapshot();
    placed.id = uid('i');
    project.items.push(placed);
    selected = {kind: 'item', id: placed.id};
    clearPlacement();
    afterChange(`Placed ${placed.name}`);
    return true;
  }

  function updateSegmentGuide(guide, p, straight) {
    const {position, match} = wallPoint(p, {origin: guide.start, straight, grid: true});
    guide.end = position;
    guide.joinPoint = match;
  }
  function startSegment(p, screen, event) {
    const {position, match} = wallPoint(p, {grid: true});
    interaction = {
      kind: 'wall-draw',
      segmentKind: tool,
      start: pendingSegment?.start ?? position,
      end: position,
      startScreen: screen,
      joinPoint: match,
      pointerId: event.pointerId,
      fromTap: Boolean(pendingSegment),
    };
    draw();
  }
  function finishSegment(event) {
    const draft = interaction;
    updateSegmentGuide(draft, worldPoint(event), event.shiftKey);
    const screen = screenPoint(event);
    const dragged = Math.hypot(screen.x - draft.startScreen.x, screen.y - draft.startScreen.y) >= 5;
    if ((draft.fromTap || dragged) && Math.hypot(draft.end.x - draft.start.x, draft.end.y - draft.start.y) > 12) {
      pendingSegment = null;
      snapshot();
      const segment = wall(uid('w'), draft.start.x, draft.start.y, draft.end.x, draft.end.y);
      segment.finish = 'graphite';
      if (draft.segmentKind === 'fence') segment.kind = 'fence';
      project.walls.push(segment);
      select('wall', segment.id);
      afterChange(`Drew ${segmentLabel(segment)}`);
      return;
    }
    pendingSegment = {start: draft.start, segmentKind: draft.segmentKind, joinPoint: draft.joinPoint};
    setStatus(`Tap the end point to finish the ${draft.segmentKind}`);
  }
  function startStructureMove(p, pointerId) {
    const current = selected?.kind === 'wall' ? project.walls.find(segment => segment.id === selected.id) : null;
    const segment = current && hitWallEndpoint(p, current) ? current : hitWall(p);
    if (!segment) return false;
    select('wall', segment.id);
    interaction = {kind:'wall-move', id:segment.id, start:p, initial:clone(segment),
      endpoint:hitWallEndpoint(p, segment), pointerId, snapshot:false};
    setStatus(`Selected ${segmentLabel(segment)} · drag the segment or a handle`);
    return true;
  }
  function movedItem(current, x, y, snapToPixel = true) {
    const wallMounted = current.type === 'window' || templateByType[current.type]?.mount === 'wall';
    const mount = wallMounted ? nearestWallPlacement({x, y}) : null;
    if (wallMounted && !mount) return;
    const nextX = mount?.x ?? x;
    const nextY = mount?.y ?? y;
    const next = {...current, x: snapToPixel ? Math.round(nextX) : nextX, y: snapToPixel ? Math.round(nextY) : nextY,
      rotation: mount?.rotation ?? current.rotation};
    if (next.type === 'cameraThumbnail') {
      next.x = Math.max(0, Math.min(W, next.x));
      next.y = Math.max(0, Math.min(H, next.y));
    }
    clampLinkedItem(next);
    return next;
  }
  function draftItem(item, candidate) {
    const blocker = placementBlock(candidate, interaction.initial);
    if (blocker) {
      if (interaction.blocker !== blocker) setStatus(placementMessage(blocker));
      interaction.blocker = blocker;
      return;
    }
    if (interaction.blocker) setStatus(`Selected ${item.name}`);
    interaction.blocker = undefined;
    if (['x','y','w','h','rotation'].every(key => item[key] === candidate[key])) return;
    if (!interaction.snapshot) {snapshot();interaction.snapshot=true;}
    Object.assign(item, candidate);
    if(overheadView)window.dispatchEvent(new CustomEvent('roomcraft-editor-preview',{
      detail:{[item.id]:{position:point(item.x,item.y)}},
    }));
    draw();
  }
  function onPointerDown(e, {itemId, placementPoint, captureTarget=e.currentTarget||canvas}={}){
    if(e.button>1||interaction?.pointerId!==undefined||(tool==='terrain'&&!spaceHeld&&e.button!==1))return;
    e.preventDefault();captureTarget.focus({preventScroll:true});captureTarget.setPointerCapture(e.pointerId);
    const p=worldPoint(e),s=screenPoint(e);currentPointer=p;
    if(tool==='pan'||spaceHeld||e.button===1){
      interaction={kind:'pan',start:s,center:overheadView?.center(),tx:currentView.tx,ty:currentView.ty,pointerId:e.pointerId};
      viewport.classList.add('dragging');return;
    }
    if(pendingTemplate){placeTemplateAt(placementPoint||p);return;}
    if(pendingSurface){const r=hitRoom(p);if(r){select('room',r.id);updateProperty('surface',pendingSurface);}else showToast('Tap inside a floor area to apply the finish');return;}
    if(pendingWallFinish){const w=hitWall(p);if(w){if((w.finish||'graphite')!==pendingWallFinish){snapshot();w.finish=pendingWallFinish;select('wall',w.id);afterChange(`Applied ${wallFinishById[pendingWallFinish].name} ${segmentLabel(w)} finish`);}else select('wall',w.id);}else showToast('Tap a wall or fence to apply the finish');return;}
    if(tool==='erase'){const h=hitHotspot(p),o=project.items.find(item=>item.id===itemId)||hitItem(p,false),near=hitItem(p),w=hitWall(p);if(o||(!h&&near)){const target=o||near;snapshot();project.items=project.items.filter(q=>q.id!==target.id);selected=null;afterChange(`Removed ${target.name}`);}else if(h){snapshot();project.hotspots=project.hotspots.filter(q=>q.id!==h.id);selected=null;afterChange(`Removed ${h.title} control`);}else if(w){snapshot();project.walls=project.walls.filter(q=>q.id!==w.id);selected=null;afterChange(`Removed ${segmentLabel(w)}`);}else showToast('Tap an object, control, wall, or fence to erase it');return;}
    if(drawSegmentTool()){startSegment(p,s,e);return;}
    if(tool==='structure'){
      if(!startStructureMove(p,e.pointerId)){selected=null;renderInspector();renderStructureList();draw();}
      return;
    }
    if(tool==='room'){const vertex=hitRoomVertex(p);if(vertex>=0){interaction={kind:'room-vertex',id:selected.id,index:vertex,snapshot:false};return;}const r=hitRoom(p);if(r){select('room',r.id);setStatus(`Selected ${r.name} · drag a corner to reshape`);}else{selected=null;renderInspector();draw();}return;}
    const handle=hitSelectedItemHandle(p);if(handle){const o=handle.item,a=o.rotation*Math.PI/180,lx=-handle.sx*o.w/2,ly=-handle.sy*o.h/2;interaction={kind:'item-resize',id:o.id,start:p,w:o.w,h:o.h,rotation:o.rotation,initial:{...o},anchor:point(o.x+lx*Math.cos(a)-ly*Math.sin(a),o.y+lx*Math.sin(a)+ly*Math.cos(a)),sx:handle.sx,sy:handle.sy,snapshot:false};setStatus(`Resize ${o.name} · hold Shift to keep its proportions`);return;}
    const o=project.items.find(item=>item.id===itemId)||hitItem(p,false);if(o){select('item',o.id);interaction={kind:'item-move',id:o.id,start:p,x:o.x,y:o.y,initial:{...o},snapshot:false};setStatus(`Selected ${o.name}`);return;}
    const h=hitHotspot(p);if(h){const q=hotspotPoint(h);select('hotspot',h.id);interaction={kind:'hotspot-move',id:h.id,start:p,x:q.x,y:q.y,snapshot:false};setStatus(`Selected ${h.title} control`);return;}
    const near=hitItem(p);if(near){select('item',near.id);interaction={kind:'item-move',id:near.id,start:p,x:near.x,y:near.y,initial:{...near},snapshot:false};setStatus(`Selected ${near.name}`);return;}
    if(startStructureMove(p,e.pointerId))return;
    const r=hitRoom(p);if(r){select('room',r.id);setStatus(`Selected ${r.name}`);}else{selected=null;renderInspector();draw();}
  }
  function onPointerMove(e){const p=worldPoint(e),s=screenPoint(e);currentPointer=p;
    if(!interaction){
      if(pendingSegment)updateSegmentGuide(pendingSegment,p,e.shiftKey);
      if(pendingTemplate||pendingSegment)draw();
      if(tool==='select'&&!pendingTemplate)(e.currentTarget||canvas).style.cursor=hitSelectedItemHandle(p)?'nwse-resize':hitItem(p)?'grab':hitHotspot(p)?'pointer':'';
      return;
    }
    if(interaction.pointerId!==undefined&&e.pointerId!==interaction.pointerId)return;
    if(interaction.kind==='pan'){
      const dx=s.x-interaction.start.x,dy=s.y-interaction.start.y;
      if(overheadView)overheadView.pan(interaction.center,dx,dy);
      else{currentView.tx=interaction.tx+dx;currentView.ty=interaction.ty+dy;applyView();}
      return;
    }
    if(interaction.kind==='wall-draw'){
      updateSegmentGuide(interaction,p,e.shiftKey);draw();return;
    }
    if(interaction.kind==='item-move'){
      const o=project.items.find(item=>item.id===interaction.id);
      if(!o)return;
      const dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;
      if(Math.hypot(dx,dy)<=2&&!interaction.snapshot)return;
      const candidate=movedItem(o,interaction.x+dx,interaction.y+dy);
      if(candidate)draftItem(o,candidate);
      return;
    }
    if(interaction.kind==='item-resize'){
      const o=project.items.find(o=>o.id===interaction.id);if(!o)return;
      const a=interaction.rotation*Math.PI/180,dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;
      const localX=dx*Math.cos(a)+dy*Math.sin(a),localY=-dx*Math.sin(a)+dy*Math.cos(a);
      const dimensions=Models.resizeCornerFootprint(interaction.initial,
        Math.round(interaction.w+interaction.sx*localX), Math.round(interaction.h+interaction.sy*localY),
        e.shiftKey||lockObjectDimensions);
      if(!dimensions)return;
      const {w:nextW,h:nextH}=dimensions;
      const wallMounted=o.type==='window'||templateByType[o.type]?.mount==='wall';
      const lx=interaction.sx*nextW/2,ly=interaction.sy*(wallMounted?interaction.h:nextH)/2;
      const nx=Math.round(interaction.anchor.x+lx*Math.cos(a)-ly*Math.sin(a));
      const ny=Math.round(interaction.anchor.y+lx*Math.sin(a)+ly*Math.cos(a));
      const bound=o.type==='cameraThumbnail'||validEntityId(o.entityId);
      const nextX=bound?Math.max(0,Math.min(W,nx)):nx,nextY=bound?Math.max(0,Math.min(H,ny)):ny;
      draftItem(o,{...o,w:nextW,h:nextH,x:nextX,y:nextY});
      return;
    }
    if(interaction.kind==='hotspot-move'){const h=project.hotspots.find(h=>h.id===interaction.id);if(!h)return;const dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;if(Math.hypot(dx,dy)>2&&!interaction.snapshot){snapshot();interaction.snapshot=true;}if(interaction.snapshot){h.style.left=`${Math.max(0,Math.min(100,(interaction.x+dx)/W*100)).toFixed(2)}%`;h.style.top=`${Math.max(0,Math.min(100,(interaction.y+dy)/H*100)).toFixed(2)}%`;draw();}return;}
    if(interaction.kind==='room-vertex'){const r=project.rooms.find(r=>r.id===interaction.id);if(!r)return;if(!interaction.snapshot){snapshot();interaction.snapshot=true;}r.points[interaction.index]=point(Math.round(p.x),Math.round(p.y));draw();return;}
    if(interaction.kind==='wall-move'){
      const w=project.walls.find(w=>w.id===interaction.id);
      if(!w)return;
      const dx=p.x-interaction.start.x,dy=p.y-interaction.start.y;
      if(Math.hypot(dx,dy)*viewScale()>=4&&!interaction.snapshot){snapshot();interaction.snapshot=true;}
      if(!interaction.snapshot)return;
      const {initial,endpoint}=interaction;
      if(endpoint){
        const x='x'+endpoint,y='y'+endpoint;
        const {position,match}=wallPoint(point(initial[x]+dx,initial[y]+dy),{excludeId:w.id});
        const other=3-endpoint;
        if(Math.hypot(position.x-w['x'+other],position.y-w['y'+other])>2){
          w[x]=position.x;w[y]=position.y;interaction.joinPoint=match;
        }
      }else{
        w.x1=Math.round(initial.x1+dx);w.y1=Math.round(initial.y1+dy);
        w.x2=Math.round(initial.x2+dx);w.y2=Math.round(initial.y2+dy);
      }
      draw();return;
    }
  }
  function onPointerUp(e){
    if(!interaction||(interaction.pointerId!==undefined&&e.pointerId!==interaction.pointerId))return;
    const {kind,id,snapshot:changed,blocker}=interaction;
    if(kind==='wall-draw')finishSegment(e);
    else if(changed){
      const message=kind==='wall-move'
        ? `Moved ${segmentLabel(project.walls.find(segment=>segment.id===id))}`
        : ({'room-vertex':'Reshaped room','hotspot-move':'Moved Home Assistant control','item-resize':'Resized object'})[kind]||'Moved object';
      afterChange(message);
    }
    if(blocker)showToast(placementMessage(blocker));
    interaction=null;
    viewport.classList.remove('dragging');
    draw();
  }
  function onPointerCancel(e) {
    if(!interaction||(interaction.pointerId!==undefined&&e.pointerId!==interaction.pointerId))return;
    cancelGesture();
  }
  function cancelGesture() {
    if(interaction?.snapshot&&editCheckpoint){
      project=clone(editCheckpoint.project);history=editCheckpoint.history;future=editCheckpoint.future;selected=editCheckpoint.selected;
      editCheckpoint=null;initializeIdAllocator(project);sceneOrderCache=null;
    }
    interaction=null;viewport.classList.remove('dragging');
    renderInspector();renderRoomList();renderStructureList();updateHistoryButtons();draw();
    setStatus('Canceled edit. Previous layout restored.');
    window.dispatchEvent?.(new CustomEvent('roomcraft-editor-change'));
  }

  function htmlEscape(s){return String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
  function renderCategoryOptions(){
    const select=document.getElementById('objectCategory');
    select.innerHTML=`<option value="all">All categories · ${paletteTemplates.length}</option>`+
      paletteGroups.map(([group,title])=>`<option value="${htmlEscape(group)}">${htmlEscape(title)} · ${paletteTemplates.filter(t=>t.group===group).length}</option>`).join('');
    select.value='baby-toys';
  }
  let paletteObserver=null;
  function renderPalette(){
    const query=(document.getElementById('objectSearch')?.value||'').trim().toLowerCase();
    const category=document.getElementById('objectCategory')?.value||'baby-toys';
    const visible=paletteTemplates.filter(t=>{
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
      const entries=paletteTemplates.filter(t=>t.group===group&&visibleTypes.has(t.type));
      if(!entries.length)return '';
      return `<div class="catalog-group"><div class="palette-group-label">${htmlEscape(title)} <small>${entries.length}</small></div><div class="palette-grid">${entries.map(t=>`<button type="button" class="palette-item ${pendingTemplate===t.type?'placing':''}" data-template="${t.type}" title="Place ${htmlEscape(t.label)}"><span class="palette-icon"><canvas class="palette-preview" data-preview="${t.type}" width="200" height="108" aria-hidden="true"></canvas></span><span>${htmlEscape(t.label)}</span></button>`).join('')}</div></div>`;
    }).join('')||'<p class="help-copy">No objects match that search.</p>';
    document.getElementById('inventoryCount').textContent=`Showing ${visible.length} of ${paletteTemplates.length} objects${query?' · searching all categories':''}`;
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
    }else if(raster)raster.drawItem(p,preview,()=>drawObject(p,preview));
    else drawObject(p,preview);
    canvas.dataset.painted='true';
  }
  function paintPalettePreviews(){document.querySelectorAll('.palette-preview[data-painted="true"]').forEach(paintPalettePreview);}
  function renderSurfacePalette(){document.getElementById('surfacePalette').innerHTML=surfaces.map(s=>`<button type="button" class="surface-item ${pendingSurface===s.id?'active':''}" data-surface="${s.id}"><span class="swatch" style="background-color:${s.color};background-image:linear-gradient(90deg,transparent 46%,${s.accent}55 49%,transparent 52%),linear-gradient(transparent 46%,${s.accent}55 49%,transparent 52%)"></span><span><strong>${htmlEscape(s.name)}</strong><small>${htmlEscape(s.note)}</small></span></button>`).join('');}
  function renderWallPalette(){document.getElementById('wallPalette').innerHTML=wallFinishes.map(f=>`<button type="button" class="wall-finish-item surface-item ${pendingWallFinish===f.id?'active':''}" data-wall-finish="${f.id}"><span class="swatch" style="background:${f.color}"></span><span><strong>${htmlEscape(f.name)}</strong><small>${htmlEscape(f.note)}</small></span></button>`).join('');}
  function renderRoomList(){document.getElementById('roomList').innerHTML=project.rooms.map(r=>{const s=surfaceById[r.surface]||surfaceById.oak;return `<button type="button" class="room-item ${selected?.kind==='room'&&selected.id===r.id?'active':''}" data-room="${htmlEscape(r.id)}"><span class="room-color" style="background:${s.color}"></span><span><strong>${htmlEscape(r.name)}</strong><small>${htmlEscape(s.name)}</small></span></button>`;}).join('');}
  function renderStructureList() {
    const list = document.getElementById('structureList');
    const options = project.walls.map((segment, index) => {
      const type = segment.kind === 'fence' ? 'Fence' : 'Wall';
      const start = `${Math.round(segment.x1)}, ${Math.round(segment.y1)}`;
      return `<option value="${htmlEscape(segment.id)}">${type} ${index + 1} · ${start}</option>`;
    });
    list.innerHTML = '<option value="">Select a wall or fence</option>' + options.join('');
    list.value = selected?.kind === 'wall' ? selected.id : '';
  }
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
  function recoverPreviousDraft(){const previous=readPreviousDraft();if(!previous){showToast('No previous browser draft found');return;}if(!readPreRecoveryLayout()){try{localStorage.setItem(BEFORE_RECOVERY_KEY,projectFingerprint(project));}catch(_){showToast('Could not save current layout; export JSON first');return;}}snapshot();project=normalizeProject(clone(previous));selected=null;clearPlacement();afterChange('Recovered previous browser draft',{authoritative:true});showToast('Previous draft restored; pre-recovery layout saved');}
  function returnPreRecoveryLayout(){const before=readPreRecoveryLayout();if(!before){showToast('No pre-recovery layout found');return;}snapshot();project=normalizeProject(clone(before));selected=null;clearPlacement();localStorage.removeItem(BEFORE_RECOVERY_KEY);afterChange('Returned to pre-recovery layout',{authoritative:true});showToast('Pre-recovery layout restored');}
  function field(label,key,value,type='text',inputAttributes=''){
    const attributes = inputAttributes || ( key === 'steps' ? 'step="1" min="2" max="40" placeholder="14"' :
      key === 'modelHeight' ? 'step="any" min="6" max="300"' : 'step="any"');
    return `<div class="field"><label for="prop-${key}">${label}</label><input id="prop-${key}" data-prop="${key}" type="${type}" value="${htmlEscape(value)}" ${type==='number'?attributes:''}></div>`;
  }
  function hotspotField(label,key,value,type='text'){return `<div class="field"><label for="hotspot-${key}">${label}</label><input id="hotspot-${key}" data-hotspot-prop="${key}" type="${type}" value="${htmlEscape(value)}" ${type==='number'?'step="0.01" min="0" max="100"':''}></div>`;}
  function variantField(t,type){
    if(!t.artFamily)return '';
    const variants=window.RoomcraftCatalogVariants;
    if(t.seriesId&&variants){
      const fields=[['style','Style','designLabel'],['size','Size','sizeLabel'],['finish','Color / finish','finishLabel']];
      let resizes = false;
      const options = fields.map(([kind,label,labelKey])=>{
        const choices=variants.choices(templates,t,kind);
        if(choices.length<2)return '';
        if(kind!=='finish')resizes = true;
        return `<div class="field"><label for="prop-catalog-${kind}">${label}</label><select id="prop-catalog-${kind}" data-variant data-variant-kind="${kind}">${choices.map(v=>{
          const fallbackSize=kind==='style'&&v.sizeId!==t.sizeId&&v.sizeLabel?` · ${v.sizeLabel}`:'';
          return `<option value="${htmlEscape(v.type)}" ${v.type===type?'selected':''}>${htmlEscape((v[labelKey]||v.label)+fallbackSize)}</option>`;
        }).join('')}</select></div>`;
      }).join('');
      return options+(resizes?'<p class="field-hint">Style and size use the selected model’s width and depth.</p>':'');
    }
    const stem=type.slice(0,type.lastIndexOf('-'));
    const legacy=variants?.legacyFinishChoices(templates,t)||templates.filter(v=>v.type.startsWith(stem+'-')&&v.type.slice(0,v.type.lastIndexOf('-'))===stem);
    if(legacy.length<2)return '';
    return `<div class="field"><label for="prop-catalog-variant">Color / finish</label><select id="prop-catalog-variant" data-variant data-variant-kind="finish">${legacy.map(v=>`<option value="${htmlEscape(v.type)}" ${v.type===type?'selected':''}>${htmlEscape(v.label.split(' · ').at(-1))}</option>`).join('')}</select></div>`;
  }
  function renderRoomInspector(room) {
    const outdoor = room.outdoor ?? (room.surface === 'patio');
    const finishes = surfaces.map(surface => `<option value="${surface.id}" ${room.surface===surface.id?'selected':''}>${htmlEscape(surface.name)}</option>`).join('');
    return `<div class="inspector-block"><p class="inspector-label">SELECTED ROOM</p>
      <div class="selection-title"><span class="selection-icon">▦</span><div><h3>${outdoor?'Outdoor floor':'Room floor'}</h3><p>${room.points.length} editable corners</p></div></div></div>
      <div class="inspector-block">${field('Room name','name',room.name)}
      <div class="field"><label for="prop-surface">Floor finish</label><select id="prop-surface" data-prop="surface">${finishes}</select></div>
      <div class="field"><label for="prop-outdoor">Floor type</label><select id="prop-outdoor" data-prop="outdoor"><option value="false" ${outdoor?'':'selected'}>Indoor floor</option><option value="true" ${outdoor?'selected':''}>Outdoor landing</option></select></div>
      <p class="field-hint">Choose Room in the toolbar, then drag a corner handle to reshape this floor area.</p></div>
      <button type="button" class="danger-button" data-action="delete">Remove floor area</button>`;
  }
  function renderStructureInspector(segment) {
    const fence = segment.kind === 'fence';
    const title = fence ? 'Fence' : 'Wall';
    const finishes = wallFinishes.map(finish => `<option value="${finish.id}" ${(segment.finish||'graphite')===finish.id?'selected':''}>${htmlEscape(finish.name)}</option>`).join('');
    const length = Math.round(Math.hypot(segment.x2-segment.x1,segment.y2-segment.y1));
    return `<div class="inspector-block"><p class="inspector-label">STRUCTURE</p>
      <div class="selection-title"><span class="selection-icon">${fence?'▥':'╱'}</span><div><h3>${title} segment</h3><p>${length} px long</p></div></div></div>
      <div class="inspector-block">
      <div class="field"><label for="prop-kind">Segment type</label><select id="prop-kind" data-prop="kind"><option value="wall" ${fence?'':'selected'}>Wall</option><option value="fence" ${fence?'selected':''}>Fence</option></select></div>
      <div class="field"><label for="prop-finish">Finish</label><select id="prop-finish" data-prop="finish">${finishes}</select></div></div>
      <div class="inspector-block"><p class="inspector-label">END POINTS</p>
      <div class="field-grid">${field('Start X','x1',segment.x1,'number')}${field('Start Y','y1',segment.y1,'number')}${field('End X','x2',segment.x2,'number')}${field('End Y','y2',segment.y2,'number')}</div>
      <p class="field-hint">Drag the segment to move it, or drag an end handle to reshape it.</p></div>
      <button type="button" class="danger-button" data-action="delete">Remove ${title.toLowerCase()}</button>`;
  }
  function renderInspector(){const root=document.getElementById('inspectorContent');if(!selected){root.innerHTML=`<div class="empty-inspector"><div class="empty-art">⌂</div><h3>A blank canvas for ideas.</h3><p>Select an object, room, wall, or fence to see its settings.</p><button class="secondary-button" id="openHelpButton" type="button" style="margin-top:19px">How to use the builder</button></div>`;return;}
    if(selected.kind==='item'){const o=project.items.find(o=>o.id===selected.id);if(!o){selected=null;renderInspector();return;}const t=templateByType[o.type] || {label:o.type,icon:'◇'};
      root.innerHTML=window.RoomcraftObjectControls.renderInspector(o,t,field,variantField,htmlEscape,entityOptions,{
        height:Models.supportsHeight(o), locked:lockObjectDimensions
      });return;}
    if(selected.kind==='hotspot'){const h=project.hotspots.find(h=>h.id===selected.id);if(!h){selected=null;renderInspector();return;}const x=parseFloat(h.style.left),y=parseFloat(h.style.top);root.innerHTML=`<div class="inspector-block"><p class="inspector-label">HOME ASSISTANT CONTROL</p><div class="selection-title"><span class="selection-icon">${h.entity.startsWith('cover.')?'▥':'✦'}</span><div><h3>${htmlEscape(h.title)}</h3><p>${htmlEscape(h.entity)}</p></div></div></div><div class="inspector-block"><p class="inspector-label">CONTROL & POSITION</p>${hotspotField('Title','title',h.title)}${hotspotField('Entity ID','entity',h.entity)}<div class="field-grid">${hotspotField('Left (%)','left',x,'number')}${hotspotField('Top (%)','top',y,'number')}</div><div class="field"><label for="hotspot-tap">Tap action</label><select id="hotspot-tap" data-hotspot-prop="tap"><option value="toggle" ${h.tap_action?.action==='toggle'?'selected':''}>Toggle</option><option value="more-info" ${h.tap_action?.action==='more-info'?'selected':''}>More info</option></select></div><div class="field"><label for="hotspot-hold">Hold action</label><select id="hotspot-hold" data-hotspot-prop="hold"><option value="none" ${!h.hold_action?'selected':''}>None</option><option value="more-info" ${h.hold_action?.action==='more-info'?'selected':''}>More info</option></select></div><p class="field-hint">Drag the marker on the plan or edit its percentage position here. It is included in Home Assistant YAML and editable JSON.</p></div><button type="button" class="danger-button" data-action="delete">Remove control</button>`;return;}
    const collection=selected.kind==='room'?project.rooms:project.walls;
    const record=collection.find(entry=>entry.id===selected.id);
    if(!record){selected=null;renderInspector();return;}
    root.innerHTML=selected.kind==='room'?renderRoomInspector(record):renderStructureInspector(record);
  }
  function setTool(next){
    tool=next;
    clearPlacement();
    document.querySelectorAll('[data-tool]').forEach(button=>{
      const active=button.dataset.tool===tool;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    viewport.dataset.tool=tool;
    const help = document.getElementById('miniHelp');
    if (help) help.textContent = tool === 'terrain'
      ? 'Drag to brush the ground or tap to place scenery. Hold Space to pan.'
      : 'Drag an object to move it. Use Pan to explore the layout.';
    canvas.style.cursor='';
    document.getElementById('sceneCanvas').style.cursor='';
    if(drawSegmentTool()||tool==='structure')setPanel('walls');
    if(tool==='terrain'){
      setPanel('terrain');
      if(selected){selected=null;renderInspector();renderStructureList();}
    }
    const instructions={
      select:'Select and drag objects, controls, walls, or rooms',
      pan:'Drag to pan the plan',
      room:'Tap a floor, then drag a corner to reshape it',
      wall:'Drag to draw a wall or tap its two ends',
      fence:'Drag to draw a fence or tap its two ends',
      structure:'Tap a wall or fence to select it. Drag either end to reshape it.',
      terrain:'Drag over outdoor ground to sculpt or paint terrain',
      erase:'Tap an object, control, wall, or fence to remove it'
    };
    draw();setStatus(instructions[tool]);
  }
  function setPanel(panel){document.querySelectorAll('.panel-tab').forEach(b=>{const active=b.dataset.panel===panel;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});for(const name of ['objects','floors','rooms','walls','terrain'])document.getElementById(`${name}Panel`).hidden=name!==panel;}

  function updateStructureProperty(segment,key,value) {
    if(key==='kind'){
      if(!['wall','fence'].includes(value)||segmentLabel(segment)===value)return;
      snapshot();
      if(value==='fence')segment.kind='fence';else delete segment.kind;
      afterChange(`Changed segment to ${value}`);
      return;
    }
    if(key==='finish'){
      if(!wallFinishById[value]||(segment.finish||'graphite')===value)return;
      snapshot();
      segment.finish=value;
      afterChange(`Applied ${wallFinishById[value].name} ${segmentLabel(segment)} finish`);
      return;
    }
    if(!['x1','y1','x2','y2'].includes(key))return;
    const coordinate=Number(value);
    if(String(value).trim()===''||!Number.isFinite(coordinate)){renderInspector();return;}
    const next={...segment,[key]:Math.max(0,Math.min(key.startsWith('x')?W:H,coordinate))};
    if(Math.hypot(next.x2-next.x1,next.y2-next.y1)<=2){
      showToast('Move the ends farther apart');
      renderInspector();
      return;
    }
    if(next[key]===segment[key])return;
    snapshot();
    segment[key]=next[key];
    afterChange(`Updated ${segmentLabel(segment)} end point`);
  }

  function updateObjectDimensions(item, key, value) {
    const numeric = String(value).trim() === '' ? NaN : Number(value);
    if (key === 'modelHeight') {
      if (!Models.supportsHeight(item)) return;
      const height = String(value).trim() === '' ? undefined : numeric;
      if (height !== undefined && !(height >= 6 && height <= 300)) {
        showToast('Use a model height from 6 to 300 plan pixels, or leave it blank.');
        renderInspector();
        return;
      }
      if (item.modelHeight === height) return;
      if (!checkPlacement({...item, modelHeight: height}, item)) {renderInspector();return;}
      snapshot();
      if (height === undefined) delete item.modelHeight;
      else item.modelHeight = height;
    } else {
      const dimensions = Models.resizeFootprint(item, key, numeric, lockObjectDimensions);
      if (!dimensions) {renderInspector();return;}
      if (Object.keys(dimensions).every(axis => dimensions[axis] === item[axis])) return;
      if (!checkPlacement({...item, ...dimensions}, item)) {renderInspector();return;}
      snapshot();
      Object.assign(item, dimensions);
    }
    afterChange('Updated object dimensions');
  }

  function updateStairTreads(item, value) {
    if (item.type !== 'stairs') return;
    const steps = value.trim() ? Number(value) : undefined;
    if (steps !== undefined && (!Number.isInteger(steps) || steps < 2 || steps > 40)) {
      showToast('Enter a whole number from 2 to 40, or leave it blank for 14 treads.');
      renderInspector();
      return;
    }
    if (item.steps === steps) return;
    snapshot();
    if (steps === undefined) delete item.steps;
    else item.steps = steps;
    afterChange('Updated stair treads');
  }

  function resetObjectDimensions() {
    if (selected?.kind !== 'item') return;
    const current = project.items.find(entry => entry.id === selected.id);
    const template = current && templateByType[current.type];
    if (!template || current.w === template.w && current.h === template.h && current.modelHeight === undefined) return;
    if (!checkPlacement({...current, w:template.w, h:template.h, modelHeight:undefined}, current)) return;
    snapshot();
    current.w = template.w;
    current.h = template.h;
    delete current.modelHeight;
    afterChange('Restored model dimensions');
  }

  function updateObjectPose(item, key, value) {
    if (item.type === 'scenerySideRoad' && key === 'rotation') {
      showToast('Side roads automatically meet the main street at a right angle.');
      renderInspector();
      return;
    }
    const parsed = window.RoomcraftObjectControls.poseUpdate(key, value);
    if (!parsed) {
      showToast('Enter a finite center coordinate or rotation.');
      renderInspector();
      return;
    }
    const candidate = key === 'rotation' ? {...item, rotation: parsed.value}
      : movedItem(item, key === 'x' ? parsed.value : item.x, key === 'y' ? parsed.value : item.y, false);
    if (!candidate) {
      showToast('Place this object near a wall to keep it attached.');
      renderInspector();
      return;
    }
    if (!checkPlacement(candidate, item)) {renderInspector();return;}
    if (['x','y','rotation'].every(axis => item[axis] === candidate[axis])) {renderInspector();return;}
    snapshot();
    Object.assign(item, candidate);
    afterChange(key === 'rotation' ? 'Rotated object' : 'Updated object center');
  }

  function updateProperty(key,value){
    if(!selected)return;
    let target;
    if(selected.kind==='item')target=project.items.find(i=>i.id===selected.id);
    else if(selected.kind==='wall')target=project.walls.find(w=>w.id===selected.id);
    else target=project.rooms.find(r=>r.id===selected.id);
    if(!target)return;
    if(selected.kind==='item' && ['w','h','modelHeight'].includes(key)){
      updateObjectDimensions(target,key,value);
      return;
    }
    if(selected.kind==='item' && key==='steps'){
      updateStairTreads(target,value);
      return;
    }
    if(selected.kind==='item' && ['x','y','rotation'].includes(key)){
      updateObjectPose(target,key,value);
      return;
    }
    if(selected.kind==='wall'){updateStructureProperty(target,key,value);return;}
    if(selected.kind==='room'&&key==='outdoor'){
      if(!['true','false'].includes(value))return;
      const outdoor=value==='true';
      if((target.outdoor??(target.surface==='patio'))===outdoor)return;
      snapshot();target.outdoor=outdoor;afterChange('Updated floor type');return;
    }
    if(selected.kind==='room'&&key==='surface'){
      if(!surfaceById[value]||target.surface===value)return;
      snapshot();
      target.outdoor??=target.surface==='patio';
      target.surface=value;
      afterChange(`Applied ${surfaceById[value].name} to ${target.name}`);
      return;
    }
    if(selected.kind==='item'&&(window.RoomcraftObjectControls.isBindingKey(key)||window.RoomcraftObjectControls.isAppearanceKey(key)||window.RoomcraftObjectControls.isLandmarkKey(key))){
      const landmark = window.RoomcraftObjectControls.isLandmarkKey(key);
      if(landmark&&!window.RoomcraftObjectControls.canSetLandmarkProperty(target,key))return;
      if(window.RoomcraftObjectControls.isAppearanceKey(key)&&target.type!=='garageDoor')return;
      const tracking = key === 'presenceTrackEntityId' || key === 'presenceTrackTransform' || key === 'presenceTrackZone'
        || key === 'presenceTrackProfile';
      if (target.type === 'cameraThumbnail' || (tracking && target.type !== 'presenceSwitch')) return;
      const update = window.RoomcraftObjectControls.propertyUpdate(key, value);
      if (!update.valid) {
        const errors = {
          presenceTrackEntityId: 'Enter a sensor entity ID like sensor.radar_targets.',
          presenceTrackTransform: 'Enter six finite values with a valid position scale.',
          presenceTrackZone: 'Enter x min, x max, y min, y max in centimetres, between −600 and 600. Each minimum must be below its maximum.',
          presenceTrackProfile: 'Choose a radar model from the list.',
          controlIcon: 'Use an icon like mdi:lightbulb',
          garageDrivewayWidth: 'Enter a driveway width from 32 to 200, or leave it blank for automatic sizing.',
          landmarkPace: 'Enter an animation pace from 0.25 to 2, or leave it blank for the default pace.',
        };
        showToast(errors[key] || (landmark ? 'Choose On or Off for landmark activity.' : 'Choose a valid button setting'));
        renderInspector();
        return;
      }
      if (JSON.stringify(target[key]) === JSON.stringify(update.value)) return;
      snapshot();
      if (update.value === undefined) delete target[key];
      else target[key] = update.value;
      if (key === 'vacuumMapEntityId') {
        delete target.vacuumMapId;
        delete target.vacuumPositionTransform;
      }
      afterChange(landmark ? 'Updated landmark activity' : tracking ? 'Updated person tracking' : window.RoomcraftObjectControls.isAppearanceKey(key) ? 'Updated garage' : 'Updated dashboard button');
      return;
    }
    if(selected.kind==='item'&&target.type==='cameraThumbnail'&&key==='eventEntityIds'){
      const ids=value.split(',').map(id=>id.trim().toLowerCase()).filter(Boolean);
      if(ids.length>6||ids.some(id=>!/^binary_sensor\.[a-z0-9_]+$/i.test(id))||new Set(ids).size!==ids.length){
        showToast('Use up to six distinct binary sensor IDs');renderInspector();return;
      }
      if(JSON.stringify(target.eventEntityIds||[])===JSON.stringify(ids))return;
      snapshot();target.eventEntityIds=ids;afterChange('Updated camera event sensors');return;
    }
    const optionalEntity = selected.kind==='item' && (key==='entityId' ||
      (target.type==='cameraThumbnail' && key==='imageEntityId'));
    if(!(key in target)&&!optionalEntity)return;
    if(key==='previewMode'&&!['event','live','live_auto','event_live','offline'].includes(value))return;
    if(key==='entityId'||key==='imageEntityId')value=value.trim().toLowerCase();
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
    if((optionalEntity ? target[key] ?? '' : target[key])===v)return;
    snapshot();target[key]=v;
    if(selected.kind==='item')clampLinkedItem(target);
    afterChange(key==='entityId' ? (v ? `Linked to ${v}` : 'Removed entity link') : `Updated ${key}`);
  }
  function calibratePresence(useSwitchPosition) {
    const item = selected?.kind === 'item' && project.items.find(entry => entry.id === selected.id);
    const number = id => {
      const value = document.getElementById(id).value?.trim();
      return value ? Number(value) : NaN;
    };
    const transform = window.RoomcraftObjectControls.presenceAlignment(item, {
      lateralScale: number('presence-track-lateral-scale'),
      forwardScale: number('presence-track-scale'),
      headingOffset: number('presence-track-heading'),
      skew: number('presence-track-skew'),
      flipLeftRight: document.getElementById('presence-track-flip').checked,
    }, useSwitchPosition);
    if (!transform) {
      showToast('Use positive scales, a rotation, and skew strictly between −90° and 90°.');
      return;
    }
    updateProperty('presenceTrackTransform', transform.join(', '));
  }

  function beginModelPlacement(type, entityId = '') {
    const template = Object.hasOwn(templateByType,type) && templateByType[type];
    if (!template || template.legacy || entityId && !Models.canMap(entityId, template)) return false;
    setTool('select');
    pendingTemplate = type;
    pendingEntityId = entityId;
    viewport.classList.add('placing');
    renderPalette();
    showToast(template.mount==='wall'||type==='window'?'Click near a wall to mount it':
      template.form==='gate'?'Click across the stair opening; rotate in the Inspector as needed':
      'Click the plan to place '+template.label);
    return true;
  }

  function applyModelCommand(command) {
    if (!command || typeof command !== 'object') return false;
    if (command.kind === 'place') {
      return beginModelPlacement(command.modelId, command.entityId);
    }
    const current = project.items.find(entry => entry.id === command.itemId);
    if (command.kind === 'bind') {
      if (!Models.canBind(current, command.entityId, templateByType[current?.type])) return false;
      setTool('select');
      select('item', current.id);
      updateProperty('entityId', command.entityId);
      return true;
    }
    if (!current || !['edit','replace'].includes(command.kind)) return false;
    setTool('select');
    if (command.kind === 'edit') {
      select('item', current.id);
      return true;
    }
    const previous = templateByType[current.type];
    const next = Object.hasOwn(templateByType,command.modelId) && templateByType[command.modelId];
    if (!Models.canReplace(current, previous, next)) return false;
    const replacement = window.RoomcraftCatalogVariants.applyModel(current, previous, next);
    if (!Models.supportsHeight(replacement)) delete replacement.modelHeight;
    if (!checkPlacement(replacement, current)) return false;
    snapshot();
    selected = {kind:'item', id:current.id};
    project.items[project.items.indexOf(current)] = replacement;
    afterChange('Changed model to '+next.label);
    return true;
  }

  function openModelLibrary() {
    modelLibrary ??= Models.mount(document.body, () => ({items:project.items, entities:entityOptions}), command => {
      if (applyModelCommand(command)) modelLibrary.close();
      else showToast('This object or model is no longer available.');
    });
    modelLibrary.open();
  }

  function openModelHandoff() {
    if (new URLSearchParams(window.location.search).get('panel') !== 'models') return;
    let command;
    try {
      const request = window.sessionStorage.getItem(Models.handoffKey);
      window.sessionStorage.removeItem(Models.handoffKey);
      command = request && JSON.parse(request);
    } catch { /* The library is still available without browser storage. */ }
    if (!dashboardRevision || !applyModelCommand(command)) openModelLibrary();
  }

  function showItemInspector(item) {
    setFocusCanvas(false);
    window.RoomcraftEditorViewport.useSelectTool();
    select('item', item.id);
    const toggle = document.getElementById('inspectorToggle');
    if (window.matchMedia('(max-width:900px)').matches && toggle.getAttribute('aria-expanded') !== 'true') toggle.click();
  }

  function openTrackingSwitch(id) {
    const item = project.items.find(entry => entry.type === 'presenceSwitch' && entry.id === id);
    if (!item) return;
    showItemInspector(item);
    const heading = document.getElementById('trackingRangeSettings');
    heading?.scrollIntoView({block:'start', inline:'nearest'});
    heading?.focus({preventScroll:true});
  }

  function openTrackingRange() {
    const switches = project.items.filter(item => item.type === 'presenceSwitch');
    if (!switches.length) {
      showToast('Place a Presence switch to set up tracking range correction.');
      return;
    }
    if (switches.length === 1) {
      openTrackingSwitch(switches[0].id);
      return;
    }
    const dialog = document.getElementById('trackingRangeDialog');
    if (dialog.open) return;
    const choice = document.getElementById('trackingRangeSwitch');
    choice.replaceChildren(...switches.map(item => new Option(item.name || 'Presence switch', item.id)));
    if (selected?.kind === 'item' && switches.some(item => item.id === selected.id)) choice.value = selected.id;
    dialog.showModal();
    choice.focus();
  }

  function vacuumItems() {
    return project.items.filter(item => window.RoomcraftObjectControls.visualKind(item) === 'vacuum');
  }

  function openVacuumSurvey(id) {
    const item = vacuumItems().find(vacuum => vacuum.id === id);
    if (!item) return;
    showItemInspector(item);
    document.querySelector('#inspectorContent [data-vacuum-alignment]')?.click();
  }

  function openVacuumAlignment() {
    const vacuums = vacuumItems();
    if (!vacuums.length) {
      showToast('Place a robot vacuum to align its LiDAR map.');
      return;
    }
    if (vacuums.length === 1) {
      openVacuumSurvey(vacuums[0].id);
      return;
    }
    const dialog = document.getElementById('vacuumPickerDialog');
    if (dialog.open) return;
    const choice = document.getElementById('vacuumPickerChoice');
    choice.replaceChildren(...vacuums.map(item => new Option(item.name || 'Robot vacuum', item.id)));
    const current = selected?.kind === 'item' && vacuums.find(item => item.id === selected.id);
    const preferred = current || vacuums.find(item => item.vacuumMapEntityId);
    if (preferred) choice.value = preferred.id;
    dialog.showModal();
    choice.focus();
  }

  function studioShortcut() {
    if (window.location.hash) return window.location.hash;
    if (!window.RoomcraftDashboardBridge) return '';
    const owner = window.parent === window ? window.opener : window.parent;
    try { return owner?.location.hash ?? ''; }
    catch { return ''; }
  }

  function updateVariant(type,kind='finish'){
    if(selected?.kind!=='item'||!templateByType[type])return;
    const index=project.items.findIndex(i=>i.id===selected.id),o=project.items[index];
    if(!o||o.type===type)return;
    const old=templateByType[o.type],next=templateByType[type];
    const replacement=window.RoomcraftCatalogVariants.apply(o,old,next,kind);
    if(!replacement||!checkPlacement(replacement,o)){renderInspector();return;}
    snapshot();project.items[index]=replacement;
    afterChange(kind==='finish'?'Changed color / finish':`Changed ${kind}`);
  }
  function updateHotspotProperty(key,value){if(selected?.kind!=='hotspot')return;const h=project.hotspots.find(h=>h.id===selected.id);if(!h)return;let next=value;if(key==='left'||key==='top'){const n=Number(value);if(!Number.isFinite(n))return;next=`${Math.max(0,Math.min(100,n)).toFixed(2)}%`;}else if(key==='entity'){if(!/^[a-z_]+\.[a-z0-9_]+$/i.test(value)){showToast('Use an entity ID like light.living_room');renderInspector();return;}}else if(key==='tap'&& !['toggle','more-info'].includes(value))return;else if(key==='hold'&& !['none','more-info'].includes(value))return;else if(key!=='title'&&key!=='entity')return;
    const current=key==='left'||key==='top'?h.style[key]:key==='tap'?h.tap_action?.action:key==='hold'?h.hold_action?.action||'none':h[key];if(next===current)return;snapshot();if(key==='left'||key==='top')h.style[key]=next;else if(key==='tap')h.tap_action={action:next};else if(key==='hold'){if(next==='none')delete h.hold_action;else h.hold_action={action:next};}else h[key]=next;afterChange(`Updated ${h.title} control`);
  }
  function deleteSelected(){if(!selected)return;snapshot();if(selected.kind==='item')project.items=project.items.filter(i=>i.id!==selected.id);else if(selected.kind==='hotspot')project.hotspots=project.hotspots.filter(h=>h.id!==selected.id);else if(selected.kind==='wall')project.walls=project.walls.filter(w=>w.id!==selected.id);else project.rooms=project.rooms.filter(r=>r.id!==selected.id);selected=null;afterChange('Removed selection');}
  function duplicateSelected(){
    if(selected?.kind!=='item')return;
    const current=project.items.find(item=>item.id===selected.id);
    if(!current)return;
    const spacing=Math.max(current.w,current.h)+10;
    const copy=clone(current);
    copy.id='';
    const offsets=[[26,26],[spacing,0],[-spacing,0],[0,spacing],[0,-spacing]];
    const placed=offsets.some(([x,y],index)=>{
      copy.x=current.x+x;copy.y=current.y+y;
      if(copy.type==='cameraThumbnail'){copy.x=Math.min(W,copy.x);copy.y=Math.min(H,copy.y);}
      clampLinkedItem(copy);
      if(index>0&&!Models.isExterior(copy.type)&&(copy.x<0||copy.x>W||copy.y<0||copy.y>H))return false;
      return !placementBlock(copy);
    });
    if(!placed){showToast('Make room next to this object before duplicating it.');return;}
    snapshot();
    window.RoomcraftObjectControls.clearDeviceLinks(copy);
    copy.id=uid('i');copy.name=`${current.name} copy`;
    project.items.push(copy);select('item',copy.id);afterChange('Duplicated object');
  }
  function rotateSelected(){
    if(selected?.kind!=='item')return;
    const current=project.items.find(item=>item.id===selected.id);
    if(!current)return;
    updateObjectPose(current,'rotation',current.rotation+90);
  }
  function addRoom(){snapshot();const r=room(uid('r'),'New room','terrazzo',[[570,420],[790,420],[790,580],[570,580]],[580,440]);project.rooms.push(r);setTool('room');select('room',r.id);setPanel('rooms');afterChange('Added editable room');showToast('Drag the corner handles to reshape your room');}
  function updateClearObjectsButton(){
    const clear=document.getElementById('clearObjectsButton');
    if(!clear)return;
    clear.disabled=project.items.length===0;
    clear.textContent=project.items.length?'Remove all objects ('+project.items.length+')':'No objects to remove';
  }
  async function clearAllObjects(){
    if(!project.items.length){showToast('There are no objects to remove');return;}
    if(!await askConfirmation('Remove all objects',`Remove all ${project.items.length} objects? Floors, rooms, and walls stay in place.`,'Remove objects'))return;
    snapshot();project.items=[];selected=null;clearPlacement();afterChange('Removed all objects');showToast('All objects removed');
  }
  function download(name,type,content){const blob=content instanceof Blob?content:new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);}
  function exportJson(){download('roomcraft-editable-layout.json','application/json',JSON.stringify(Engine.canonicalize(project),null,2));showToast('Editable layout JSON downloaded');}
  async function renderDetailedPng(){
    await window.RoomcraftObjectArt?.prepareExport?.();
    const out=document.createElement('canvas');out.width=VIEW_W;out.height=VIEW_H;draw(out.getContext('2d'),true);return out;
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
  function importProject(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(String(reader.result));if(!validProject(parsed))throw new Error('Invalid project format');const normalized=normalizeProject(parsed);snapshot();project=normalized;selected=null;clearPlacement();if(afterChange('Imported project',{authoritative:true})){showToast('Project imported');fitView();}}catch(err){showToast('Could not import this project JSON');}};reader.readAsText(file);}

  function setDashboardStatus(message,isError=false){const status=document.getElementById('dashboardTransferStatus');status.textContent=message;status.classList.toggle('error',isError);setStatus(message);}
  function setDashboardBusy(busy){
    dashboardTransferBusy=busy;
    document.body.classList.toggle('dashboard-transfer-busy',busy);
    for(const id of ['importDashboardButton','exportDashboardButton','backDashboardButton'])document.getElementById(id).disabled=busy;
  }
  function rememberDashboardSource(source){
    if(typeof source!=='string')return;
    try{
      const url=new URL(source);
      if(!['http:','https:'].includes(url.protocol)||url.username||url.password||!DASHBOARD_PATHS.has(url.pathname))return;
      if(location.pathname.startsWith('/local/roomcraft/')&&url.origin!==location.origin)return;
      dashboardSource=url.href;
    }catch(_){}
  }
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
  async function backToDashboard(){
    if(dashboardTransferBusy){showToast('Wait for the dashboard transfer to finish');return;}
    if(!dashboardSource){
      try{rememberDashboardSource((await dashboardRequest('GET')).source);}
      catch(_){showToast('Dashboard link unavailable. Check the Home Assistant connection.');return;}
    }
    if(!dashboardSource){showToast('Dashboard link unavailable. Check the Home Assistant connection.');return;}
    const unpublished=dashboardPublishedProject!==projectFingerprint(project);
    if(unpublished&&!await askConfirmation('Return to live dashboard','Your latest edits are in this browser’s draft. The live dashboard will show the last saved layout.','Return to live dashboard'))return;
    if(!saveDraftNow()&&unpublished){showToast('Browser draft could not be saved. Export layout JSON before leaving.');return;}
    if(window.RoomcraftDashboardBridge?.navigate?.())return;
    try{window.top.location.assign(dashboardSource);}
    catch(_){window.location.assign(dashboardSource);}
  }
  function projectFromDashboard(data){
    const hasEditable=!!data.project;
    let next=hasEditable?data.project:clone(STARTER);
    // The published projection is authoritative for live control placement. Another HA
    // editor may have changed those markers since the Roomcraft JSON was saved.
    if(Array.isArray(data.hotspots)){
      const previousIds=new Map((Array.isArray(next.hotspots)?next.hotspots:[]).map(h=>[h.entity,h.id]));
      const linkedEntities=new Set((next.items||[]).filter(o=>o.type!=='cameraThumbnail'&&validEntityId(o.entityId)).map(o=>o.entityId));
      next={...next,hotspots:data.hotspots.filter(h=>!linkedEntities.has(h.entity)).map(h=>({...h,id:previousIds.get(h.entity)||h.id}))};
    }
    if(!validProject(next))throw new Error('Dashboard layout or controls are not compatible with this editor');
    return {next,hasEditable,preview:data.storybookPreview??null};
  }
  function preserveDisplacedDraft(next){
    const current=projectFingerprint(project);
    if((!hasLocalDraft&&projectChangeSerial===0)||current===dashboardPublishedProject||current===projectFingerprint(next))return false;
    const original=projectChangeSerial===0?localStorage.getItem(STORAGE_KEY):null;
    localStorage.setItem(REPLACED_DRAFT_KEY,original||current);
    return true;
  }
  async function loadDashboardDefault(){
    setDashboardBusy(true);
    const initialSerial=projectChangeSerial;
    setDashboardStatus('Loading the current Home Assistant layout…');
    try{
      const data=await dashboardRequest('GET');
      rememberDashboardSource(data.source);
      updateEntityOptions(data);
      if(!data.revision)throw new Error('Dashboard revision is missing');
      const {next,hasEditable,preview}=projectFromDashboard(data);
      // A slow dashboard read must never replace an in-progress local edit.
      if(projectChangeSerial!==initialSerial||interaction||pendingTemplate||pendingSegment||document.activeElement?.closest?.('#inspectorContent')){
        dashboardNeedsImport=true;
        setDashboardStatus('Browser edits kept. Import from dashboard when ready.');return;
      }
      const current=normalizeProject(clone(next));
      let backedUp;
      try{backedUp=preserveDisplacedDraft(current);}
      catch(_){
        dashboardNeedsImport=true;
        setDashboardStatus('Current dashboard found, but browser draft backup failed. Your layout is still open.',true);
        return;
      }
      project=current;dashboardDefaultProject=clone(current);dashboardPreview=preview;selected=null;afterChange('Loaded current Home Assistant layout',{authoritative:true});dashboardPublishedProject=projectFingerprint(project);fitView();
      dashboardRevision=data.revision;dashboardNeedsImport=false;
      const detail=hasEditable?'Current editable dashboard layout loaded':'Current dashboard controls loaded with the starting editable plan';
      setDashboardStatus(backedUp?detail+' · previous browser draft available to recover':detail);
    }catch(error){
      dashboardNeedsImport=true;
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
      rememberDashboardSource(data.source);
      updateEntityOptions(data);
      if(!data.revision)throw new Error('Dashboard revision is missing');
      const {next,hasEditable,preview}=projectFromDashboard(data);
      const current=normalizeProject(clone(next));
      const detail=hasEditable?'its saved editable Roomcraft layout':'its current controls and the starting editable plan';
      if(!await askConfirmation('Import dashboard layout',`Import ${detail} from Home Assistant? A different unpublished layout is kept as a recoverable browser draft.`,'Import layout')){
        setDashboardStatus('Dashboard import canceled');return;
      }
      try{preserveDisplacedDraft(current);}
      catch(_){throw new Error('Could not save a browser backup. Your layout is still open.');}
      snapshot();project=current;dashboardDefaultProject=clone(project);dashboardPreview=preview;selected=null;clearPlacement();afterChange('Imported from Home Assistant dashboard',{authoritative:true});dashboardPublishedProject=projectFingerprint(project);fitView();
      dashboardRevision=data.revision;
      dashboardNeedsImport=false;
      const message=hasEditable?'Editable layout imported from dashboard':'Dashboard controls imported. Its image has no editable Roomcraft data, so the starting furnishings were used.';
      setDashboardStatus(message);showToast(message);
    }catch(error){const message=`Import failed: ${error.message||'Home Assistant is unavailable'}`;setDashboardStatus(message,true);showToast(message);}
    finally{setDashboardBusy(false);}
  }
  async function saveToDashboard(){
    if(dashboardTransferBusy)return;
    if(interaction){showToast('Finish the current edit before saving.');return;}
    const issues=EditSafety.audit(project);
    if(issues.length){const message='Save blocked. '+issues[0].message+' Use Undo or Check & repair layout.';setDashboardStatus(message,true);showToast(message);return;}
    const importMessage='Import the current dashboard before saving this browser draft.';
    if(dashboardNeedsImport||!dashboardRevision){
      setDashboardStatus(importMessage,true);showToast(importMessage);return;
    }
    setDashboardBusy(true);
    const saveButton=document.getElementById('exportDashboardButton');
    saveButton.textContent='Saving…';
    try{
      const captured=clone(project);
      const before=projectFingerprint(captured);
      const next={...captured,hotspots:dashboardControls(captured)};
      setDashboardStatus('Rendering the detailed dashboard image…');
      const pngDataUrl=(await renderDetailedPng()).toDataURL('image/png');
      if(projectFingerprint(project)!==before)throw new Error('Layout changed while the image was rendering; try again');
      setDashboardStatus('Uploading image and saving dashboard…');
      const saved=await dashboardRequest('POST',{project:next,pngDataUrl,revision:dashboardRevision});
      if(!saved.imageUrl||!saved.revision)throw new Error('Dashboard save did not return a verified revision and image URL');
      rememberDashboardSource(saved.source);
      dashboardRevision=saved.revision;
      dashboardDefaultProject=captured;
      dashboardPublishedProject=before;
      const message=projectFingerprint(project)===before
        ? 'Layout saved to the live dashboard'
        : 'Layout saved. Newer browser edits are still unpublished.';
      setDashboardStatus(message);showToast(message);
    }catch(error){
      if(error.status===409)dashboardNeedsImport=true;
      const message=error.status===409?`Dashboard changed since your last import. ${importMessage}`:`Save failed: ${error.message||'Home Assistant is unavailable'}`;
      setDashboardStatus(message,true);showToast(message);
    }
    finally{saveButton.textContent='Save';setDashboardBusy(false);}
  }

  function bindEvents(){
    canvas.addEventListener('pointerdown',onPointerDown);canvas.addEventListener('pointermove',onPointerMove);canvas.addEventListener('pointerup',onPointerUp);canvas.addEventListener('pointercancel',onPointerCancel);
    viewport.addEventListener('wheel',e=>{e.preventDefault();const s=screenPoint(e);zoomAt(e.deltaY<0?1.12:.89,s.x,s.y);},{passive:false});
    document.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>{setTool(b.dataset.tool);}));
    document.querySelectorAll('.panel-tab').forEach(button=>button.addEventListener('click',()=>{
      const panel=button.dataset.panel;
      if(panel==='walls')setTool('structure');
      else if(panel==='terrain')setTool('terrain');
      else {
        setPanel(panel);
        if(tool==='terrain')setTool('select');
      }
    }));
    for (const button of document.querySelectorAll('[data-open-models]')) {
      button.addEventListener('click', () => {
        document.getElementById('exportButton').focus();
        openModelLibrary();
      });
    }
    document.getElementById('objectsPanel').addEventListener('click',e=>{
      const button=e.target.closest('[data-template]');
      if(!button)return;
      beginModelPlacement(button.dataset.template);
    });
    document.getElementById('objectSearch').addEventListener('input',()=>{document.getElementById('objectsPanel').scrollTop=0;document.getElementById('inventoryStrip').scrollLeft=0;renderPalette();});
    document.getElementById('objectCategory').addEventListener('change',()=>{document.getElementById('objectsPanel').scrollTop=0;document.getElementById('inventoryStrip').scrollLeft=0;renderPalette();});
    document.getElementById('clearObjectsButton').addEventListener('click',clearAllObjects);
    document.getElementById('recoverDraftButton').addEventListener('click',recoverPreviousDraft);
    document.getElementById('returnPreRecoveryButton').addEventListener('click',returnPreRecoveryLayout);
    document.getElementById('hotspotList').addEventListener('click',e=>{const linked=e.target.closest('[data-control-item]');if(linked){setTool('select');select('item',linked.dataset.controlItem);setStatus('Drag this linked object or edit its entity in the Inspector');return;}const b=e.target.closest('[data-hotspot]');if(!b)return;setTool('select');select('hotspot',b.dataset.hotspot);setStatus('Drag this Home Assistant control or edit it in the Inspector');});
    document.getElementById('surfacePalette').addEventListener('click',e=>{const b=e.target.closest('[data-surface]');if(!b)return;setTool('room');pendingSurface=b.dataset.surface;renderSurfacePalette();showToast(`Click a room to paint ${surfaceById[pendingSurface].name}`);});
    document.getElementById('wallPalette').addEventListener('click',e=>{const b=e.target.closest('[data-wall-finish]');if(!b)return;setTool('structure');pendingWallFinish=b.dataset.wallFinish;renderWallPalette();showToast(`Tap a wall or fence to apply ${wallFinishById[pendingWallFinish].name}`);});
    document.getElementById('structureList').addEventListener('change',e=>{
      const id=e.target.value;
      if(!project.walls.some(segment=>segment.id===id))return;
      setTool('structure');select('wall',id);
    });
    document.getElementById('snapWallEnds').addEventListener('change',e=>{snapWallEnds=e.target.checked;});
    document.getElementById('joinWallsButton').addEventListener('click',joinNearbyWalls);
    document.getElementById('roomList').addEventListener('click',e=>{const b=e.target.closest('[data-room]');if(!b)return;setTool('room');select('room',b.dataset.room);});
    document.getElementById('inspectorContent').addEventListener('change',e=>{
      if (e.target.matches?.('[data-lock-dimensions]')) { lockObjectDimensions = e.target.checked; return; }
      const activeField = e.target === document.activeElement ? e.target.id : '';
      if (e.target.matches?.('[data-add-camera-event]')) {
        const camera = selected?.kind === 'item' && project.items.find(item => item.id === selected.id);
        if (camera?.type === 'cameraThumbnail' && e.target.value) {
          updateProperty('eventEntityIds', [...(camera.eventEntityIds || []), e.target.value].join(', '));
          if (activeField) (document.getElementById(activeField) || document.getElementById('prop-eventEntityIds'))?.focus();
        }
        return;
      }
      const field = e.target.closest('[data-prop]');
      const variant = e.target.closest('[data-variant]');
      const hotspot = e.target.closest('[data-hotspot-prop]');
      if (field?.validity?.badInput) {
        showToast('Enter a valid number.');
        renderInspector();
      } else if (field) updateProperty(field.dataset.prop, field.value);
      else if (variant) updateVariant(variant.value, variant.dataset.variantKind || 'finish');
      else if (hotspot) updateHotspotProperty(hotspot.dataset.hotspotProp, hotspot.value);
      if (activeField) document.getElementById(activeField)?.focus();
    });
    document.getElementById('inspectorContent').addEventListener('click',e=>{const a=e.target.closest('[data-action]');if(a){if(a.dataset.action==='delete')deleteSelected();if(a.dataset.action==='duplicate')duplicateSelected();if(a.dataset.action==='rotate')rotateSelected();if(a.dataset.action==='reset-dimensions')resetObjectDimensions();if(a.dataset.action==='calibrate-presence')calibratePresence(true);if(a.dataset.action==='align-presence')calibratePresence(false);}if(e.target.id==='openHelpButton')document.getElementById('helpDialog').showModal();});
    document.getElementById('newRoomButton').addEventListener('click',addRoom);
    document.getElementById('focusCanvasButton').addEventListener('click',()=>setFocusCanvas(!focusCanvas));
    document.getElementById('zoomInButton').addEventListener('click',()=>{const r=viewport.getBoundingClientRect();zoomAt(1.2,r.width/2,r.height/2);});
    document.getElementById('zoomOutButton').addEventListener('click',()=>{const r=viewport.getBoundingClientRect();zoomAt(1/1.2,r.width/2,r.height/2);});
    document.getElementById('fitButton').addEventListener('click',fitView);
    document.getElementById('zoomValue').addEventListener('click',fitView);
    document.getElementById('undoButton').addEventListener('click',undo);document.getElementById('redoButton').addEventListener('click',redo);
    document.getElementById('repairLayoutButton').addEventListener('click',repairLayout);
    document.getElementById('importDashboardButton').addEventListener('click',importFromDashboard);
    document.getElementById('exportDashboardButton').addEventListener('click',saveToDashboard);
    document.getElementById('backDashboardButton').addEventListener('click',backToDashboard);
    const menu=document.getElementById('exportMenu'),menuButton=document.getElementById('exportButton');
    const trackingRangeDialog = document.getElementById('trackingRangeDialog');
    const vacuumPickerDialog = document.getElementById('vacuumPickerDialog');
    document.getElementById('openTrackingSwitch').addEventListener('click', () => {
      trackingRangeDialog.close();
      openTrackingSwitch(document.getElementById('trackingRangeSwitch').value);
    });
    document.getElementById('openVacuumSurvey').addEventListener('click', () => {
      vacuumPickerDialog.close();
      openVacuumSurvey(document.getElementById('vacuumPickerChoice').value);
    });
    const showMenu=open=>{menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));};
    menuButton.addEventListener('click',()=>showMenu(menu.hidden));
    menu.addEventListener('click',e=>{
      const button=e.target.closest('button');
      if(!button||button.hasAttribute('data-keep-menu-open'))return;
      showMenu(false);
      if(!button.hasAttribute('data-open-models'))menuButton.focus();
      if(button.id==='trackingRangeButton')openTrackingRange();
      if(button.id==='vacuumAlignmentButton')openVacuumAlignment();
      if(button.dataset.export==='png')exportPng();
      if(button.dataset.export==='json')exportJson();
      if(button.dataset.export==='yaml')exportHaYaml();
    });
    document.addEventListener('pointerdown',e=>{if(!e.target.closest('.menu-wrap'))showMenu(false);});
    document.getElementById('importButton').addEventListener('click',()=>document.getElementById('importFile').click());document.getElementById('importFile').addEventListener('change',e=>{importProject(e.target.files[0]);e.target.value='';});
    document.getElementById('resetButton').addEventListener('click',async()=>{if(!await askConfirmation('Reset layout','Load the current Home Assistant layout? Your current browser draft can be exported as JSON first, and this change is undoable in this session.','Load current layout'))return;snapshot();project=normalizeProject(clone(dashboardDefaultProject||STARTER));selected=null;clearPlacement();afterChange(dashboardDefaultProject?'Loaded current Home Assistant layout':'Loaded starter layout',{authoritative:true});fitView();});
    window.addEventListener('keydown',e=>{
      if(modelLibrary?.isOpen || trackingRangeDialog.open || vacuumPickerDialog.open)return;
      if(!menu.hidden){
        if(e.key==='Escape'){e.preventDefault();showMenu(false);menuButton.focus();}
        return;
      }
      if(dashboardTransferBusy)return;const tag=document.activeElement?.tagName;if(['INPUT','TEXTAREA','SELECT'].includes(tag))return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo();return;}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();redo();return;}if(e.key===' '){if(tag==='BUTTON')return;e.preventDefault();spaceHeld=true;return;}if(e.key==='Escape'){cancelGesture();clearPlacement();selected=null;renderInspector();renderStructureList();updateHistoryButtons();draw();return;}if((e.key==='Delete'||e.key==='Backspace')&&selected){e.preventDefault();deleteSelected();return;}const shortcuts={v:'select',h:'pan',r:'room',w:'wall',f:'fence',t:'terrain',e:'erase'};const shortcut=shortcuts[e.key.toLowerCase()];if(shortcut){setTool(shortcut);}});
    window.addEventListener('keyup',e=>{if(e.key===' ')spaceHeld=false;});
    window.addEventListener('resize',fitView);
    window.addEventListener('pagehide',flushPendingDraft);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)flushPendingDraft();});
  }

  window.addEventListener('roomcraft-asset-loaded',()=>{draw();paintPalettePreviews();});
  window.RoomcraftEditorViewport = Object.freeze({
    getProject: () => clone(project),
    getSafetyState: () => clone(safetyState),
    repairLayout,
    getPreview: () => dashboardPreview,
    setTerrain(next, message = 'Updated terrain') {
      if (dashboardTransferBusy || interaction || !Terrain.valid(next)) return false;
      const normalized = Terrain.normalize(next);
      if (projectFingerprint(normalized ?? null) === projectFingerprint(project.terrain ?? null)) return false;
      snapshot();
      if (normalized) project.terrain = normalized;
      else delete project.terrain;
      return afterChange(message);
    },
    canBeginTerrain: event => tool === 'terrain' && event?.button === 0 && !spaceHeld && !interaction && !dashboardTransferBusy,
    useTerrainTool() {
      if (tool !== 'terrain') setTool('terrain');
    },
    setRadarCalibration(id, entity, transform) {
      const item = project.items.find(entry => entry.id === id && entry.type === 'presenceSwitch');
      const change = window.RoomcraftObjectControls.propertyUpdate('presenceTrackTransform', transform.join(', '));
      if (!item || item.presenceTrackEntityId !== entity || !change.valid) return false;
      snapshot();
      item.presenceTrackTransform = change.value;
      afterChange('Radar calibration applied to the draft. Select Save when ready.');
      return true;
    },
    setVacuumAlignment(id, vacuumEntity, mapEntity, mapId, transform) {
      const item = project.items.find(entry => entry.id === id);
      const controls = window.RoomcraftObjectControls;
      if (!item || controls.visualKind(item) !== 'vacuum' || item.entityId !== vacuumEntity ||
          (item.vacuumMapEntityId ?? '') !== mapEntity || !Array.isArray(transform) ||
          (mapId !== undefined && (!Number.isSafeInteger(mapId) || mapId <= 0))) return null;
      const change = controls.propertyUpdate('vacuumPositionTransform', transform.join(', '));
      if (!change.valid || !change.value) return null;
      if (item.vacuumPositionTransform?.every((value, index) => value === change.value[index]) &&
          (mapId === undefined || item.vacuumMapId === mapId)) return {changed: false};
      snapshot();
      const previous = history.at(-1);
      item.vacuumPositionTransform = change.value;
      if (mapId !== undefined) item.vacuumMapId = mapId;
      afterChange('LiDAR alignment applied to the draft. Select Save when ready.');
      const revision = projectChangeSerial;
      return {changed: true, undo() {
        if (revision !== projectChangeSerial || history.at(-1) !== previous) return false;
        undo();
        select('item', id);
        return true;
      }};
    },
    setSceneSetting(key, value) {
      const next = SceneSettings.withFeature(project.sceneSettings, key, value);
      if (next === project.sceneSettings) return false;
      snapshot();
      if (next) project.sceneSettings = next;
      else delete project.sceneSettings;
      afterChange('Updated scene settings');
      return true;
    },
    setHolidaySettings(value) {
      if (!window.RoomcraftHolidaySettings.valid(value)) return false;
      const next = window.RoomcraftHolidaySettings.withSettings(project.sceneSettings, value);
      if (next === project.sceneSettings) return false;
      snapshot();
      if (next) project.sceneSettings = next;
      else delete project.sceneSettings;
      afterChange('Holiday settings updated in the draft. Select Save to publish.');
      return true;
    },
    setPersonPreview(people) {
      if (!people.length && !personPreview.length) return;
      personPreview = people;
      draw();
    },
    getSelection: () => selected ? {...selected} : null,
    getTool: () => pendingWallFinish ? 'wall' : tool,
    setOverheadView,
    pointerDown: onPointerDown,
    pointerMove: onPointerMove,
    pointerUp: onPointerUp,
    pointerCancel: onPointerCancel,
    hasPlacement: () => Boolean(pendingTemplate),
    getPlacementType: () => pendingTemplate,
    applyModelCommand,
    showStatus: setStatus,
    useSelectTool() {
      if (tool !== 'select' || pendingWallFinish) setTool('select');
    },
    selectItem(id) {
      if (id && project.items.some(entry => entry.id === id)) select('item', id);
      else {
        selected = null;
        renderInspector();
        draw();
        window.dispatchEvent?.(new CustomEvent('roomcraft-editor-change'));
      }
    },
    moveItemWarning(id, x, y) {
      if (!Number.isFinite(x) || !Number.isFinite(y)) return;
      const current = project.items.find(entry => entry.id === id);
      const next = current && movedItem(current, x, y);
      const blocker = next && placementBlock(next, current);
      return blocker ? placementMessage(blocker) : undefined;
    },
    moveItem(id, x, y) {
      if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
      const current = project.items.find(entry => entry.id === id);
      if (!current) return false;
      const next = movedItem(current, x, y);
      if (!next || !checkPlacement(next, current)) return false;
      if (next.x === current.x && next.y === current.y && next.rotation === current.rotation) return false;
      snapshot();
      Object.assign(current, next);
      selected = {kind: 'item', id};
      afterChange(`Moved ${current.name}`);
      return true;
    },
    placeAt: (x, y) => placeTemplateAt({x, y})
  });
  window.RoomcraftEditorEngine=Object.freeze({
    version:Engine.ENGINE_VERSION,
    inspect(){
      const layers=Engine.render.partitionSceneItems(project.items,window.RoomcraftInventory?.byType);
      const roundTrip=Engine.io.verifyRoundTrip(project);
      const commandLog=editorJournal.exportLog();
      return Object.freeze({
        engineVersion:Engine.ENGINE_VERSION,
        schemaVersion:project.version,
        referenceVersion:project.editableReferenceVersion,
        projectHash:Engine.fingerprint(project),
        renderPlanHash:layers.plan.hash,
        commandLogHash:commandLog.hash,
        commandCount:commandLog.commands.length,
        checkpointCount:journalCheckpointCount,
        roundTripStable:roundTrip.stable
      });
    },
    exportCommandLog:()=>editorJournal.exportLog(),
    renderPlan:()=>Engine.render.partitionSceneItems(project.items,window.RoomcraftInventory?.byType).plan
  });
  renderCategoryOptions();bindEvents();renderPalette();renderSurfacePalette();renderWallPalette();renderStructureList();renderRoomList();renderHotspotList();renderInspector();updateClearObjectsButton();updateRecoveryButton();updateHistoryButtons();setTool('select');fitView();draw();
  const studioReady = new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, {once:true}));
  Promise.all([loadDashboardDefault(), studioReady]).then(() => {
    const shortcut = studioShortcut();
    if (shortcut === '#tracking-range-correction') openTrackingRange();
    else if (shortcut === '#lidar-alignment') openVacuumAlignment();
    else if (window.location.search) openModelHandoff();
  });
})();
