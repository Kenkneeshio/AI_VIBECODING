/* Shared catalog and object-mapping browser for Studio and Roomcraft Home. */
((root) => {
  'use strict';
  const base = [
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
    { type: 'bedroomBench', label: 'Bedroom bench', icon: '▰', w: 52, h: 122, group: 'bedroom' },
    { type: 'storageCabinet', label: 'Storage cabinet', icon: '▥', w: 75, h: 92, group: 'bedroom' },
    { type: 'counter', label: 'Counter', icon: '▥', w: 62, h: 190, group: 'utility' },
    { type: 'stool', label: 'Bar stool', icon: '◉', w: 42, h: 42, group: 'utility' },
    { type: 'kitchenWorktop', label: 'Kitchen appliance worktop', icon: '▦', w: 106, h: 127, group: 'utility' },
    { type: 'bathFixtures', label: 'Bathroom fixture group', icon: '◫', w: 73, h: 117, group: 'utility' },
    { type: 'doubleVanity', label: 'Double-sink vanity', icon: '▥', w: 202, h: 44, group: 'utility' },
    { type: 'wallUnit', label: 'Wall-mounted unit', icon: '▰', w: 139, h: 43, group: 'systems', mount: 'wall' },
    { type: 'tub', label: 'Bathtub', icon: '▢', w: 65, h: 128, group: 'utility' },
    { type: 'toilet', label: 'Toilet', icon: '◍', w: 46, h: 60, group: 'utility' },
    { type: 'lamp', label: 'Bedside lamp', icon: '☼', w: 40, h: 40, group: 'lighting' },
    { type: 'ceilingLight', label: 'Ceiling light', icon: '☀', w: 58, h: 58, group: 'lighting' },
    { type: 'pendantLight', label: 'Pendant light', icon: '✺', w: 70, h: 70, group: 'lighting' },
    { type: 'floorLamp', label: 'Floor lamp', icon: '◉', w: 54, h: 92, group: 'lighting' },
    { type: 'tableLamp', label: 'Table lamp', icon: '◌', w: 48, h: 52, group: 'lighting' },
    { type: 'wallSconce', label: 'Wall sconce', icon: '◖', w: 34, h: 48, group: 'lighting', mount: 'wall' },
    { type: 'thermostat', label: 'Wall thermostat / AC', icon: '◴', w: 48, h: 54, group: 'systems', mount: 'wall', visualKind: 'climate' },
    { type: 'presenceSwitch', label: 'Presence dimmer switch', icon: '⠿', w: 30, h: 42, group: 'systems', mount: 'wall', visualKind: 'device' },
    { type: 'humidifier', label: 'Floor humidifier', icon: '♨', w: 46, h: 58, group: 'systems', visualKind: 'device' },
    { type: 'airPurifier', label: 'Air purifier', icon: '≋', w: 48, h: 62, group: 'systems', visualKind: 'device' },
    { type: 'windowFan', label: 'Window fan', icon: '✣', w: 46, h: 46, group: 'systems', visualKind: 'fan' },
    { type: 'garageDoor', label: 'Garage door control', icon: '▥', w: 116, h: 52, group: 'systems', visualKind: 'door' },
    { type: 'cameraThumbnail', label: 'Camera thumbnail', icon: '▣', w: 170, h: 110, group: 'security' },
    { type: 'controlZone', label: 'Invisible button area', icon: '▧', w: 120, h: 72, group: 'security' },
    { type: 'uiWeatherOrb', label: 'Sun / moon', icon: '☀', w: 64, h: 64, group: 'interface' },
    { type: 'uiMenu', label: 'Device menu', icon: '☰', w: 48, h: 48, group: 'interface' },
    { type: 'uiTime', label: 'Clock', icon: '◷', w: 84, h: 42, group: 'interface' },
    { type: 'uiEdit', label: 'Edit layout button', icon: '✎', w: 48, h: 48, group: 'interface' },
    { type: 'uiStatusAir', label: 'Indoor air status', icon: '◌', w: 48, h: 48, group: 'interface' },
    { type: 'uiStatusElectrical', label: 'Electrical status', icon: 'ϟ', w: 48, h: 48, group: 'interface' },
    { type: 'plant', label: 'Flowers', icon: '✿', w: 44, h: 44, group: 'decor' },
    { type: 'floorPlant', label: 'Floor plant', icon: '❀', w: 72, h: 72, group: 'decor' },
    { type: 'artwork', label: 'Wall art', icon: '▧', w: 94, h: 56, group: 'decor' },
    { type: 'mirror', label: 'Mirror', icon: '◇', w: 72, h: 52, group: 'decor' },
    { type: 'window', label: 'Window', icon: '▣', w: 100, h: 28, group: 'build' },
    { type: 'stairs', label: 'Exterior stairs', icon: '▤', w: 88, h: 430, group: 'build' }
  ];
  const groups = [
    ['living', 'Living & dining'], ['bedroom', 'Bedroom & storage'],
    ['utility', 'Kitchen & bath'], ['lighting', 'Lights & lamps'],
    ['systems', 'Climate, doors & fans'], ['decor', 'Decor'], ['build', 'Build'], ['security', 'Cameras & controls'],
    ['interface', 'Dashboard interface']
  ];

  const handoffKey = 'roomcraft.studio-models.v1';
  const lockedTypes = new Set(['window', 'stairs', 'cameraThumbnail', 'garageDoor', 'presenceSwitch']);
  const isInterface = type => typeof type === 'string' && type.startsWith('ui');
  const key = value => String(value ?? '').toLowerCase();
  const domain = id => key(id).split('.')[0];
  const isEntityId = id => typeof id === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(id);
  const shape = model => model.type === 'window' ? 'wall' : model.mount || 'floor';

  function catalog() {
    return {
      templates: [...base, ...(root.RoomcraftInventory?.templates || [])],
      paletteGroups: [...(root.RoomcraftInventory?.groups || []), ...groups],
    };
  }

  function canReplace(item, previous, model) {
    if (!item || !previous || !model || item.type === model.type) return false;
    if (lockedTypes.has(item.type) || isInterface(item.type) || lockedTypes.has(model.type) || isInterface(model.type)) return false;
    if (shape(previous) !== shape(model)) return false;
    if (item.entityId && !canMap(item.entityId, model)) return false;
    return true;
  }

  function canMap(id, model) {
    if (!isEntityId(id) || typeof model?.type !== 'string' || isInterface(model.type) || model.type === 'stairs' || model.type === 'window') return false;
    if (model.type === 'cameraThumbnail') return domain(id) === 'camera';
    if (model.type === 'garageDoor') return domain(id) === 'cover';
    return domain(id) !== 'camera';
  }

  function suggestions(entity, templates) {
    const type = domain(entity.entity_id);
    const name = key(entity.name + ' ' + entity.entity_id);
    const groupsForType = {
      light: ['lighting'], fan: ['fans'], vacuum: ['cleaning'], climate: ['systems'],
    };
    const suggested = model => {
      if (model.type === 'controlZone') return true;
      if (type === 'camera') return model.type === 'cameraThumbnail';
      if (type === 'cover') return /garage/.test(name) && model.type === 'garageDoor';
      if (type === 'climate') return model.type === 'thermostat';
      if (type === 'binary_sensor' && /presence|occupancy/.test(name)) return model.type === 'presenceSwitch';
      if (groupsForType[type]?.includes(model.group)) return true;
      if (/humidifier/.test(name) && model.type === 'humidifier') return true;
      if (/purifier/.test(name) && model.type === 'airPurifier') return true;
      if (type === 'switch') {
        if (/fan/.test(name)) return model.group === 'fans' || model.type === 'windowFan';
        if (/light|lamp/.test(name)) return model.group === 'lighting';
      }
      return false;
    };
    const available = templates.filter(model => canMap(entity.entity_id, model));
    return {recommended: available.filter(suggested), available};
  }

  function supportsHeight(item) {
    return item && !['window', 'stairs', 'controlZone', 'cameraThumbnail', 'mirror', 'artwork'].includes(item.type) &&
      !isInterface(item.type);
  }

  function resizeFootprint(item, axis, value, lock) {
    if (!['w','h'].includes(axis) || !Number.isFinite(value)) return null;
    const minimum = item.type === 'cameraThumbnail' ? 40 : 12;
    const limits = item.type === 'cameraThumbnail' || isEntityId(item.entityId)
      ? {w:1536, h:1024} : {w:Infinity, h:Infinity};
    if (!lock) return {[axis]:Math.min(limits[axis], Math.max(minimum, value))};
    const maxScale = Math.min(limits.w / item.w, limits.h / item.h);
    const minScale = Math.min(maxScale, Math.max(minimum / item.w, minimum / item.h));
    const scale = Math.min(maxScale, Math.max(minScale, value / item[axis]));
    return {w:Math.round(item.w * scale * 10) / 10, h:Math.round(item.h * scale * 10) / 10};
  }

  const SUPPORT_TYPES = new Set(['table', 'desk', 'dresser', 'nightstand', 'storageCabinet', 'coffeeTable', 'sideTable']);
  const TABLETOP_TYPES = new Set(['lamp', 'tableLamp', 'humidifier', 'plant']);
  const FLOOR_SOLIDS = new Set(['sofa', 'bed', 'armchair', 'bookcase', 'bedroomBench', 'counter', 'kitchenWorktop',
    'bathFixtures', 'doubleVanity', 'tub', 'toilet', 'floorPlant']);
  const SURFACE_VARIANT = /^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/;
  const SOLID_VARIANT = /^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/;
  const FOOT_SAMPLES = [[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];

  function placementRole(item) {
    const type = item?.type ?? '';
    if (SUPPORT_TYPES.has(type) || SURFACE_VARIANT.test(type)) return 'surface';
    if (TABLETOP_TYPES.has(type) || item?.lightForm === 'bud_lamp' || type.startsWith('lighting-bud-table-lamp-')) return 'tabletop';
    return 'floor';
  }

  function tabletopRadius(item) {
    const ratio = item.type === 'humidifier' ? .37 : item.type === 'plant' ? .23 : .20;
    return Math.min(item.w, item.h) * ratio;
  }

  function footprintShape(item, surfaceOnly = false) {
    const {type, w, h} = item;
    if (type === 'desk' || type.startsWith('bedroom-corner-desk-')) {
      return [[0, -.33 * h, w, .34 * h], [-.41 * w, .17 * h, .18 * w, .66 * h],
        [.41 * w, .17 * h, .18 * w, .66 * h]];
    }
    if (!surfaceOnly && (type === 'sofa' || type.startsWith('living-cloud-sofa-'))) {
      if (h > w) return [[-.25 * w, 0, .5 * w, h],
        [.22 * w, (type === 'sofa' ? .3 : -.3) * h, .52 * w, .38 * h]];
      return [[0, -.215 * h, w, .57 * h], [-.32 * w, .25 * h, .34 * w, .46 * h]];
    }
    if (surfaceOnly) {
      if (type.startsWith('living-round-dining-')) return [[0, 0, .58 * w, .58 * h]];
      if (type === 'table' || /-dining-set-/.test(type)) return [[0, 0, .79 * w, .56 * h]];
      if (type.includes('-desk-')) return [[0, 0, w, .85 * h]];
    }
    if (!surfaceOnly && placementRole(item) === 'tabletop') {
      const diameter = 2 * tabletopRadius(item);
      return [[0, 0, diameter, diameter]];
    }
    return [[0, 0, w * .95, h * .95]];
  }

  function orientedBoxes(item, surfaceOnly) {
    if (![item?.x, item?.y, item?.w, item?.h].every(Number.isFinite) || item.w <= 0 || item.h <= 0) return [];
    const angle = (Number.isFinite(item.rotation) ? item.rotation : 0) * Math.PI / 180;
    const u = [Math.cos(angle), Math.sin(angle)];
    const v = [-u[1], u[0]];
    return footprintShape(item, surfaceOnly).map(([x, y, width, height]) => ({
      x: item.x + x * u[0] + y * v[0], y: item.y + x * u[1] + y * v[1],
      u, v, width: width / 2, height: height / 2,
    }));
  }

  const project = (x, y, axis) => x * axis[0] + y * axis[1];
  function onSurface(item, support) {
    const circular = support.type.startsWith('living-round-dining-');
    const boxes = orientedBoxes(support, true);
    const radius = tabletopRadius(item) * .9;
    return FOOT_SAMPLES.every(([u, v]) => boxes.some(box => {
      const dx = item.x + u * radius - box.x;
      const dy = item.y + v * radius - box.y;
      const x = Math.abs(project(dx, dy, box.u)) / box.width;
      const y = Math.abs(project(dx, dy, box.v)) / box.height;
      return circular ? Math.hypot(x, y) <= 1 : x <= 1 && y <= 1;
    }));
  }

  function solidBoxes(item) {
    if (placementRole(item) !== 'floor' || FLOOR_SOLIDS.has(item.type) || SOLID_VARIANT.test(item.type)) {
      return orientedBoxes(item, false);
    }
    return [];
  }

  function overlapDepth(first, second) {
    const span = (box, axis) => box.width * Math.abs(project(...box.u, axis))
      + box.height * Math.abs(project(...box.v, axis));
    return Math.min(...[first.u, first.v, second.u, second.v].map(axis =>
      span(first, axis) + span(second, axis) - Math.abs(project(first.x - second.x, first.y - second.y, axis))));
  }

  function penetration(item, neighbor, boxes, neighborBoxes) {
    let deepest = 0;
    for (const box of boxes) for (const other of neighborBoxes) deepest = Math.max(deepest, overlapDepth(box, other));
    if (deepest <= 2) return deepest;
    const itemRole = placementRole(item);
    const neighborRole = placementRole(neighbor);
    if (itemRole === 'tabletop' && neighborRole === 'surface' && onSurface(item, neighbor)
        || itemRole === 'surface' && neighborRole === 'tabletop' && onSurface(neighbor, item)) return 0;
    return deepest;
  }

  /** Guard authored edits, while allowing an existing overlap to get smaller. */
  function blockingPlacement(item, others, previous) {
    const boxes = solidBoxes(item);
    if (!boxes.length) return;
    const before = previous ? solidBoxes(previous) : [];
    let conflict;
    let maxDepth = 2;
    for (const neighbor of others) {
      if (neighbor.id === item.id) continue;
      const neighborBoxes = solidBoxes(neighbor);
      const depth = penetration(item, neighbor, boxes, neighborBoxes);
      if (depth <= maxDepth) continue;
      if (before.length && depth <= penetration(previous, neighbor, before, neighborBoxes) + .02) continue;
      conflict = neighbor;
      maxDepth = depth;
    }
    return conflict;
  }

  function orderMountedObjects(items) {
    const surfaces = items.filter(item => placementRole(item) === 'surface');
    const mounted = new Set();
    const children = new Map();
    for (const item of items) {
      if (placementRole(item) !== 'tabletop') continue;
      const support = surfaces.find(candidate => onSurface(item, candidate));
      if (!support) continue;
      mounted.add(item.id);
      if (!children.has(support.id)) children.set(support.id, []);
      children.get(support.id).push(item);
    }
    return mounted.size ? items.flatMap(item => mounted.has(item.id) ? [] : [item, ...(children.get(item.id) ?? [])]) : items;
  }

  function mount(container, read, apply) {
    const document = container.ownerDocument;
    const make = (tag, text, attributes = {}) => {
      const element = document.createElement(tag);
      if (text) element.textContent = text;
      for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
      return element;
    };
    const dialog = make('dialog', '', {class: 'model-library', 'aria-label': 'Objects and models'});
    const head = make('header');
    const title = make('h2', 'Objects & models');
    const close = make('button', 'Close', {type:'button'});
    head.append(title, close);
    const filters = make('div', '', {class:'model-library-filters'});
    const view = make('select', '', {'aria-label':'Object library section'});
    for (const [value, label] of [['placed', 'On the plan'], ['catalog', 'Add objects'], ['devices', 'Home Assistant devices']]) {
      view.append(make('option', label, {value}));
    }
    const search = make('input', '', {type:'search', placeholder:'Search…', 'aria-label':'Search objects, devices, or models'});
    filters.append(view, search);
    const context = make('div', '', {class:'model-library-context'});
    const status = make('p', '', {role:'status', class:'model-library-status'});
    const list = make('div', '', {class:'model-library-list'});
    dialog.append(head, filters, context, status, list);

    const style = make('style');
    style.textContent = `
      .model-library{box-sizing:border-box;width:min(680px,calc(100% - 24px));max-height:min(82dvh,800px);padding:18px;
        border:1px solid #cdd6c9;border-radius:16px;background:#fbfaf5;color:#243b32;
        font:500 14px/1.35 system-ui,sans-serif;box-shadow:0 18px 70px #13241d55;overflow:auto}
      .model-library::backdrop{background:#182b29a3}
      .model-library header,.model-library-filters,.model-library-context,.model-library-row,.model-library-actions{
        display:flex;align-items:center;gap:9px}
      .model-library header,.model-library-row{justify-content:space-between}
      .model-library h2{font-size:20px;margin:0}
      .model-library button,.model-library select,.model-library input{box-sizing:border-box;min-height:42px;padding:7px 11px;
        border:1px solid #cad6cc;border-radius:8px;background:#fff;color:inherit;font:inherit}
      .model-library button{cursor:pointer;background:#eaf1e9}
      .model-library button:hover{background:#dcebdc}
      .model-library :focus-visible{outline:2px solid #37736a;outline-offset:2px}
      .model-library-filters{margin-top:12px}
      .model-library input{min-width:0;flex:1}
      .model-library-context{flex-wrap:wrap;margin-top:8px}
      .model-library-context:empty{display:none}
      .model-library-status{font-size:12px;margin:9px 0;color:#526357}
      .model-library-list{display:grid;gap:6px}
      .model-library-row{min-width:0;padding:8px;border:1px solid #e6eadf;border-radius:9px;background:#fff}
      .model-library-row strong,.model-library-row small{display:block;overflow-wrap:anywhere}
      .model-library-row small{color:#59695e;margin-top:2px}
      .model-library-actions{justify-content:flex-end;flex-wrap:wrap}
      @media(max-width:520px){.model-library-row,.model-library-filters{align-items:stretch;flex-direction:column}
        .model-library-actions{justify-content:flex-start}}
    `;
    container.append(style, dialog);
    let target;
    let all = false;
    const action = (label, run) => {
      const button = make('button', label, {type:'button'});
      button.addEventListener('click', run);
      return button;
    };
    function choose(mapping) {
      target = mapping;
      all = false;
      view.value = 'catalog';
      search.value = '';
      paint();
      search.focus();
    }
    function paint() {
      const {templates, paletteGroups} = catalog();
      const byType = new Map(templates.map(model => [model.type, model]));
      const groupNames = new Map(paletteGroups);
      const {items, entities} = read();
      const query = key(search.value).trim();
      const match = (...terms) => query.split(/\s+/).every(word => key(terms.join(' ')).includes(word));
      const rows = [];
      context.replaceChildren();
      if (target) {
        context.append(make('strong', target.item?.name || target.entity?.name || target.entity?.entity_id));
        if (target.entity) context.append(action(all ? 'Suggested models' : 'All compatible models', () => { all = !all; paint(); }));
        context.append(action('Cancel mapping', () => {
          view.value = target.entity ? 'devices' : 'placed';
          target = undefined;
          search.value = '';
          paint();
        }));
      }
      if (view.value === 'placed') {
        for (const item of items) {
          const model = byType.get(item.type);
          if (!match(item.name, model?.label, item.type, item.entityId)) continue;
          const dimensions = [item.w, item.h, item.modelHeight].filter(Number.isFinite).join(' × ');
          const detail = [model?.label || item.type, dimensions && dimensions + ' plan px', item.entityId].filter(Boolean).join(' · ');
          const buttons = [action('Edit', () => apply({kind:'edit', itemId:item.id}))];
          if (templates.some(candidate => canReplace(item, model, candidate))) {
            buttons.push(action('Change model', () => choose({item})));
          }
          rows.push([item.name || model?.label || item.type, detail, buttons]);
        }
      } else if (view.value === 'devices') {
        const mapped = new Map();
        for (const item of items) if (item.entityId && !mapped.has(item.entityId)) mapped.set(item.entityId, item);
        for (const entity of entities) {
          if (!isEntityId(entity.entity_id) || !match(entity.name, entity.entity_id, entity.area)) continue;
          const item = mapped.get(entity.entity_id);
          const detail = [entity.entity_id, entity.area, item ? 'On plan · ' + item.name : 'Available to map'].filter(Boolean).join(' · ');
          rows.push([entity.name || entity.entity_id, detail, [item
            ? action('Edit mapped object', () => apply({kind:'edit', itemId:item.id}))
            : action('Choose model', () => choose({entity}))]]);
        }
      } else {
        let models = templates;
        if (target?.item) models = templates.filter(model => canReplace(target.item, byType.get(target.item.type), model));
        if (target?.entity) {
          const choices = suggestions(target.entity, templates);
          models = all ? choices.available : choices.recommended;
        }
        for (const model of models) {
          const group = groupNames.get(model.group) || model.group;
          if (!match(model.label, model.type, model.tags, group)) continue;
          const command = target?.item ? {kind:'replace', itemId:target.item.id, modelId:model.type}
            : {kind:'place', modelId:model.type, ...(target?.entity ? {entityId:target.entity.entity_id} : {})};
          rows.push([model.label, group + ' · ' + model.w + ' × ' + model.h + ' plan px',
            [action(target ? 'Use model' : 'Place', () => apply(command))]]);
        }
      }
      list.replaceChildren();
      for (const [label, detail, buttons] of rows.slice(0, 48)) {
        const row = make('div', '', {class:'model-library-row'});
        const copy = make('div');
        copy.append(make('strong', label), make('small', detail));
        const actions = make('div', '', {class:'model-library-actions'});
        actions.append(...buttons);
        row.append(copy, actions);
        list.append(row);
      }
      status.textContent = rows.length > 48 ? 'Showing 48 of ' + rows.length + '. Search to narrow the list.'
        : rows.length ? rows.length + (rows.length === 1 ? ' result' : ' results')
        : view.value === 'devices' && !entities.length ? 'Connect to Home Assistant to list devices.' : 'No matches.';
    }
    view.addEventListener('change', () => { target = undefined; search.value = ''; paint(); });
    search.addEventListener('input', paint);
    close.addEventListener('click', () => dialog.close());
    return {
      open(section = 'placed') {
        target = undefined;
        all = false;
        view.value = section;
        search.value = '';
        paint();
        if (!dialog.open) dialog.showModal();
      },
      get isOpen() { return dialog.open; },
      close() { if (dialog.open) dialog.close(); },
    };
  }

  root.RoomcraftModels = Object.freeze({catalog, canMap, canReplace, suggestions, supportsHeight, resizeFootprint,
    placementRole, blockingPlacement, orderMountedObjects, mount, handoffKey});
})(typeof window === 'undefined' ? globalThis : window);
