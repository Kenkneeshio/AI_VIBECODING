/* Shared catalog and object-mapping browser for Studio and Roomcraft Home. */
((root) => {
  'use strict';
  const base = [
    { type: 'sofa', label: 'L sofa', icon: '🛋', w: 165, h: 238, group: 'living' },
    { type: 'table', label: 'Legacy dining set', icon: '▰', w: 165, h: 108, group: 'living', legacy: true },
    { type: 'diningTable', label: 'Dining table', icon: '▰', w: 136, h: 62, group: 'living' },
    { type: 'diningChair', label: 'Dining chair', icon: '◒', w: 34, h: 26, group: 'living' },
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
    { type: 'garagePriusBlue', label: 'Blue Prius hatchback', icon: '▰', w: 34, h: 70, group: 'systems', tags: 'parked car garage Toyota hybrid blue Prius' },
    { type: 'garageCeilingLight', label: 'Garage overhead light', icon: '☀', w: 32, h: 18, group: 'lighting', visualKind: 'light', lightForm: 'bloom_ceiling' },
    { type: 'sceneryRanchHouse', label: 'Single-story landscape house', icon: '⌂', w: 130, h: 176, group: 'scenery', tags: 'decorative exterior landscape ranch house single story' },
    { type: 'sceneryOfficeCampus', label: 'Office campus', icon: '▥', w: 220, h: 180, group: 'scenery', tags: 'decorative exterior landscape office campus building workplace' },
    { type: 'scenerySchoolCampus', label: 'Elementary school & playgrounds', icon: '⚑', w: 300, h: 240, group: 'scenery', tags: 'decorative exterior landscape elementary school campus playground playfield education' },
    { type: 'scenerySideRoad', label: 'Connecting side road', icon: '╬', w: 64, h: 380, group: 'scenery', tags: 'decorative exterior landscape street road intersection driveway' },
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
    { type: 'artwork', label: 'Wall art', icon: '▧', w: 94, h: 56, group: 'decor', mount: 'wall' },
    { type: 'mirror', label: 'Mirror', icon: '◇', w: 72, h: 52, group: 'decor', mount: 'wall' },
    { type: 'window', label: 'Window', icon: '▣', w: 100, h: 28, group: 'build' },
    { type: 'stairs', label: 'Exterior stairs', icon: '▤', w: 88, h: 430, group: 'build' }
  ];
  const groups = [
    ['living', 'Living & dining'], ['bedroom', 'Bedroom & storage'],
    ['utility', 'Kitchen & bath'], ['lighting', 'Lights & lamps'],
    ['systems', 'Climate, doors & fans'], ['decor', 'Decor'], ['build', 'Build'], ['security', 'Cameras & controls'],
    ['scenery', 'Exterior scenery'], ['interface', 'Dashboard interface']
  ];

  const handoffKey = 'roomcraft.studio-models.v1';
  const lockedTypes = new Set(['window', 'stairs', 'cameraThumbnail', 'garageDoor', 'presenceSwitch', 'sceneryRanchHouse', 'scenerySideRoad', 'sceneryOfficeCampus', 'scenerySchoolCampus']);
  const isExterior = type => ['sceneryRanchHouse', 'scenerySideRoad', 'sceneryOfficeCampus', 'scenerySchoolCampus'].includes(type);
  const isInterface = type => typeof type === 'string' && type.startsWith('ui');
  const key = value => String(value ?? '').toLowerCase();
  const domain = id => key(id).split('.')[0];
  const isEntityId = id => typeof id === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(id);
  const shape = model => model.type === 'window' ? 'wall' : model.mount || 'floor';
  const isDiningTable = item => item?.type === 'diningTable' ||
    /^living-(?:petal|round|rectangular)-dining-table-/.test(item?.type);
  const isDiningChair = item => item?.type === 'diningChair' || /^living-dining-chair-/.test(item?.type);
  const isIndependentSeat = item => isDiningChair(item) || ['chair', 'armchair', 'stool'].includes(item?.type) ||
    /-(?:desk-chair|acorn-armchair|floor-chair)-/.test(item?.type);
  const roundedPlanNumber = value => Number(value.toFixed(6));
  const normalizedAngle = angle => (angle % 360 + 360) % 360;

  function diningRecipe(item) {
    const classic = item.type === 'table';
    const variant = /^living-(petal|round|rectangular)-dining-set-/.exec(item.type);
    if (!classic && !variant) return;
    const style = variant?.[1];
    const tableType = classic ? 'diningTable' : item.type.replace('-dining-set-', '-dining-table-');
    const chairType = finish => classic ? 'diningChair' : `living-dining-chair-${finish}`;
    const {w, h} = item;
    if (classic || style === 'round') {
      const [along, across, width, depth, sideDepth] = classic
        ? [.39, .415, .20, .23, .27] : [.37, .38, .20, .20, .20];
      return {
        tableType, w: (classic ? .79 : .58) * w, h: (classic ? .57 : .58) * h,
        tableHeight: classic ? 46.4 : 41,
        chairs: [
          [0, -h * along, w * width, h * depth, 0, chairType('sage')],
          [w * across, 0, h * sideDepth, w * (classic ? .17 : width), 90, chairType('butter')],
          [0, h * along, w * width, h * depth, 180, chairType('blush')],
          [-w * across, 0, h * sideDepth, w * (classic ? .17 : width), 270, chairType('lavender')],
        ],
      };
    }
    const six = style === 'rectangular';
    const seats = six ? [-.32, 0, .32] : [-.28, .28];
    const finishes = [['sage', 'blush', 'lavender'], ['lavender', 'butter', 'sage']];
    return {
      tableType, w: .79 * w, h: .56 * h, tableHeight: 42.3,
      chairs: [-1, 1].flatMap((side, row) => seats.map((fraction, column) =>
        [w * fraction, h * .37 * side, w * (six ? .15 : .19), h * .23, row * 180, chairType(finishes[row][column])])),
    };
  }

  /** Convert legacy composites into authored items without changing the table's identity. */
  function splitDiningFurniture(project) {
    if (!Array.isArray(project?.items)) return project;
    const usedIds = new Set(project.items.map(item => item.id));
    const existingSeats = project.items.filter(isIndependentSeat);
    let changed = false;
    const items = project.items.flatMap(item => {
      const recipe = diningRecipe(item);
      if (!recipe || ![item.x, item.y, item.w, item.h, item.rotation].every(Number.isFinite) || item.w <= 0 || item.h <= 0) {
        return [item];
      }
      changed = true;
      const rotation = item.rotation * Math.PI / 180;
      const cosine = Math.cos(rotation);
      const sine = Math.sin(rotation);
      const modelHeight = Number.isFinite(item.modelHeight) ? item.modelHeight : undefined;
      const table = {...item, type: recipe.tableType, w: roundedPlanNumber(recipe.w), h: roundedPlanNumber(recipe.h),
        ...(modelHeight === undefined ? {} : {modelHeight: Math.max(6, roundedPlanNumber(modelHeight * recipe.tableHeight / 59))})};
      const chairs = recipe.chairs.flatMap(([dx, dy, w, h, angle, type], index) => {
        const x = roundedPlanNumber(item.x + dx * cosine - dy * sine);
        const y = roundedPlanNumber(item.y + dx * sine + dy * cosine);
        const tolerance = Math.max(8, Math.min(w, h) * .52);
        if (existingSeats.some(seat => Math.hypot(seat.x - x, seat.y - y) <= tolerance)) return [];
        const base = `${item.id}-chair-${index + 1}`;
        let id = base;
        let suffix = 2;
        while (usedIds.has(id)) id = `${base}-${suffix++}`;
        usedIds.add(id);
        const chair = {id, type, name: `Dining chair ${index + 1}`, x, y,
          w: roundedPlanNumber(w), h: roundedPlanNumber(h), rotation: normalizedAngle(item.rotation + angle), entityId: '',
          ...(modelHeight === undefined ? {} : {modelHeight}),
          ...(Number.isFinite(item.zIndex) ? {zIndex: item.zIndex} : {})};
        existingSeats.push(chair);
        return [chair];
      });
      return [...chairs, table];
    });
    return changed ? {...project, items} : project;
  }

  function catalog() {
    return {
      templates: [...base, ...(root.RoomcraftInventory?.templates || [])],
      paletteGroups: [...(root.RoomcraftInventory?.groups || []), ...groups],
    };
  }

  function canReplace(item, previous, model) {
    if (!item || !previous || !model || item.type === model.type) return false;
    if (model.legacy) return false;
    if (lockedTypes.has(item.type) || isInterface(item.type) || lockedTypes.has(model.type) || isInterface(model.type)) return false;
    if (shape(previous) !== shape(model)) return false;
    if (item.entityId && !canMap(item.entityId, model)) return false;
    return true;
  }

  function canMap(id, model) {
    if (!isEntityId(id) || typeof model?.type !== 'string' || model.legacy || isInterface(model.type) || model.type === 'stairs' || isExterior(model.type)) return false;
    if (model.type === 'cameraThumbnail') return domain(id) === 'camera';
    if (model.type === 'garageDoor' || model.type === 'window') {
      return ['cover', 'binary_sensor', 'switch'].includes(domain(id));
    }
    return domain(id) !== 'camera';
  }

  function canBind(item, id, model) {
    if (!item || item.entityId || !canMap(id, model)) return false;
    const minimum = item.type === 'cameraThumbnail' ? 40 : 12;
    const {x, y, w, h} = item;
    return x >= 0 && x <= 1536 && y >= 0 && y <= 1024 &&
      w >= minimum && w <= 1536 && h >= minimum && h <= 1024;
  }

  function suggestions(entity, templates) {
    const type = domain(entity.entity_id);
    const name = key(entity.name + ' ' + entity.entity_id);
    const words = name.replaceAll('_', ' ');
    const groupsForType = {
      light: ['lighting'], fan: ['fans'], vacuum: ['cleaning'], climate: ['systems'],
    };
    const suggested = model => {
      if (model.type === 'controlZone') return true;
      if (type === 'camera') return model.type === 'cameraThumbnail';
      if (type === 'cover') return model.type === (/garage/.test(name) ? 'garageDoor' : 'window');
      if (type === 'climate') return model.type === 'thermostat';
      if (type === 'media_player' && /\btv\b|television/.test(words)) return model.type === 'tv';
      if (type === 'binary_sensor') {
        if (/presence|occupancy/.test(name)) return model.type === 'presenceSwitch';
        if (/garage/.test(name)) return model.type === 'garageDoor';
        if (/window|blind|shade/.test(name)) return model.type === 'window';
      }
      if (groupsForType[type]?.includes(model.group)) return true;
      if (/humidifier/.test(name) && model.type === 'humidifier') return true;
      if (/purifier/.test(name) && model.type === 'airPurifier') return true;
      if (type === 'switch') {
        if (/light|lamp/.test(name)) return model.group === 'lighting';
        if (/fan/.test(name)) return model.group === 'fans' || model.type === 'windowFan';
      }
      return false;
    };
    const available = templates.filter(model => canMap(entity.entity_id, model));
    return {recommended: available.filter(suggested), available};
  }

  function entityUsage(items) {
    const usage = new Map();
    for (const item of items) {
      const roles = [
        [item.entityId, 'primary'], [item.tapEntityId, 'Tap target'], [item.holdEntityId, 'Hold target'],
        [item.presenceEntityId, 'Presence sensor'], [item.presenceTrackEntityId, 'Radar targets'],
        [item.vacuumMapEntityId, 'Map camera'], [item.imageEntityId, 'Event image'],
        ...(Array.isArray(item.eventEntityIds) ? item.eventEntityIds.map(id => [id, 'Camera event']) : []),
      ];
      for (const [id, role] of roles) {
        if (!isEntityId(id)) continue;
        if (!usage.has(id)) usage.set(id, []);
        usage.get(id).push({item, role});
      }
    }
    return usage;
  }

  function supportsHeight(item) {
    return item && !['window', 'stairs', 'controlZone', 'cameraThumbnail', 'mirror', 'artwork', 'scenerySideRoad'].includes(item.type) &&
      !isInterface(item.type);
  }

  function resizeFootprint(item, axis, value, lock) {
    if (!['w','h'].includes(axis) || !Number.isFinite(value)) return null;
    const road = item.type === 'scenerySideRoad';
    const minimum = item.type === 'cameraThumbnail' ? 40 : 12;
    const minima = road ? {w:48, h:120} : {w:minimum, h:minimum};
    const limits = road ? {w:140, h:1000} : item.type === 'cameraThumbnail' || isEntityId(item.entityId)
      ? {w:1536, h:1024} : {w:Infinity, h:Infinity};
    if (!lock) return {[axis]:Math.min(limits[axis], Math.max(minima[axis], value))};
    if (![item.w, item.h].every(Number.isFinite) || item.w <= 0 || item.h <= 0) return null;
    const maxScale = Math.min(limits.w / item.w, limits.h / item.h);
    const minScale = Math.max(minima.w / item.w, minima.h / item.h);
    if (minScale > maxScale) return null;
    const scale = Math.min(maxScale, Math.max(minScale, value / item[axis]));
    return {w:Math.round(item.w * scale * 10) / 10, h:Math.round(item.h * scale * 10) / 10};
  }

  function resizeCornerFootprint(item, w, h, lock) {
    if (![w, h, item?.w, item?.h].every(Number.isFinite) || item.w <= 0 || item.h <= 0) return null;
    if (!lock) return {...resizeFootprint(item, 'w', w, false), ...resizeFootprint(item, 'h', h, false)};
    // Project the dragged corner onto the diagonal defined by the original footprint.
    const scale = (w * item.w + h * item.h) / (item.w ** 2 + item.h ** 2);
    return resizeFootprint(item, 'w', scale * item.w, true);
  }

  const SUPPORT_TYPES = new Set(['table', 'desk', 'dresser', 'nightstand', 'storageCabinet', 'coffeeTable', 'sideTable', 'counter', 'kitchenWorktop']);
  const TABLETOP_TYPES = new Set(['lamp', 'tableLamp', 'humidifier', 'plant']);
  const FLOOR_SOLIDS = new Set(['sofa', 'bed', 'armchair', 'bookcase', 'bedroomBench', 'counter', 'kitchenWorktop',
    'bathFixtures', 'doubleVanity', 'tub', 'toilet', 'floorPlant']);
  const SURFACE_VARIANT = /^(?:living-(?:petal-dining|round-dining|rectangular-dining|lily-coffee-table|bubble-side-table)|bedroom-(?:sprout-desk|corner-desk|secretary-desk|star-nightstand|honey-dresser)|play-furniture-low-play-table)-/;
  const SOLID_VARIANT = /^(?:bedroom-|living-(?:cloud-sofa|tailored-sofa|tailored-loveseat|upholstered-chaise|acorn-armchair)-|play-furniture-bear-floor-chair-)/;
  const FOOT_SAMPLES = [[0,0],[1,0],[-1,0],[0,1],[0,-1],[.707,.707],[.707,-.707],[-.707,.707],[-.707,-.707]];

  function specialtyBarrierSections(form, w, d) {
    if (form === 'playpen' || form === 'photoPlayYard') {
      const wall = Math.min(w, d) * .055;
      return [
        [0, -(d - wall) / 2, w - wall, wall, 0],
        [0, (d - wall) / 2, w - wall, wall, 0],
        [-(w - wall) / 2, 0, d - wall, wall, Math.PI / 2],
        [(w - wall) / 2, 0, d - wall, wall, Math.PI / 2],
      ];
    }
    const folding = form === 'folding';
    const count = folding ? 4 : 3;
    const height = Math.min(folding ? 39 : 29, w * .28);
    const span = w / count;
    const thickness = Math.min(d * (folding ? .50 : .73), height * .60);
    const fold = folding ? Math.min(.18, thickness / span * .85) : 0;
    return Array.from({length:count}, (_, index) =>
      [-w / 2 + span * (index + .5), 0, span, thickness, index % 2 ? -fold : fold]);
  }

  function specialtyFootprint(item) {
    const {w, h:d} = item;
    const template = root.RoomcraftInventory?.byType?.[item.type];
    if (template?.artFamily === 'foamBlock') {
      const seam = Math.min(1.4, Math.min(w, d) * .021);
      if (['arch', 'tunnel', 'wedge', 'ramp'].includes(template.form)) {
        const depth = d * (template.form === 'tunnel' ? .83 : .73);
        return [[0, 0, w * .91 + 2 * seam, depth + 2.08 * seam]];
      }
      return [[0, 0, w * (template.form === 'steps' ? .99 : .96), d * .96]];
    }
    if (template?.form === 'softPouf') return [[0, 0, w * .97, d * .97]];
    if (template?.form === 'photoBolster') return [[0, 0, w * .96, d * .94]];
    if (template?.artFamily !== 'paddedPanel') return null;
    const form = template.form;
    if (form === 'photoBearPanel') return [[0, 0, w, d * .49]];
    if (form === 'gate' || form === 'guard') {
      const thickness = Math.min(d * .55, Math.min(37, w * .32) * .28);
      return [[0, 0, w * .99, thickness],
        [-w * .46, 0, w * .08, d * .73], [w * .46, 0, w * .08, d * .73]];
    }
    const enclosure = form === 'playpen' || form === 'photoPlayYard';
    return specialtyBarrierSections(form, w, d).map(([x, z, width, depth, angle]) =>
      [x, z, width * (enclosure ? 1 : .955), depth * (enclosure ? .5 : 1.28), angle]);
  }

  function placementRole(item) {
    const type = item?.type ?? '';
    if (isDiningTable(item) || SUPPORT_TYPES.has(type) || SURFACE_VARIANT.test(type)) return 'surface';
    if (TABLETOP_TYPES.has(type) || item?.lightForm === 'bud_lamp' || type.startsWith('lighting-bud-table-lamp-')) return 'tabletop';
    return 'floor';
  }

  function tabletopRadius(item) {
    const ratio = item.type === 'humidifier' ? .37 : item.type === 'plant' ? .23 : .20;
    return Math.min(item.w, item.h) * ratio;
  }

  function kitchenTopOpening(item) {
    if (item.type === 'kitchenWorktop') return {widthRatio: .84, depthRatio: .72, offsetRatio: 0};
    if (item.type === 'counter' && item.id === 'i7') return {widthRatio: .58, depthRatio: .28, offsetRatio: -.04};
    return null;
  }

  function kitchenTopSections(item) {
    const {w, h} = item;
    const opening = kitchenTopOpening(item);
    if (!opening) return [[0, 0, w * .95, h * .95]];
    const edgeX = w * .475;
    const edgeY = h * .475;
    const halfWidth = w * opening.widthRatio / 2;
    const offset = h * opening.offsetRatio;
    // Leave room for the sink rim or cooktop bevel before considering the foot supported.
    const rim = item.type === 'counter' ? Math.min(2.6, halfWidth * .2) / 2 : .8;
    const halfOpeningX = halfWidth + rim;
    const halfOpeningY = h * opening.depthRatio / 2 + rim;
    const near = Math.max(-edgeY, offset - halfOpeningY);
    const far = Math.min(edgeY, offset + halfOpeningY);
    return [
      [-(edgeX + halfOpeningX) / 2, 0, edgeX - halfOpeningX, edgeY * 2],
      [(edgeX + halfOpeningX) / 2, 0, edgeX - halfOpeningX, edgeY * 2],
      [0, (near - edgeY) / 2, halfOpeningX * 2, near + edgeY],
      [0, (far + edgeY) / 2, halfOpeningX * 2, edgeY - far],
    ].filter(([, , width, depth]) => width > 0 && depth > 0);
  }

  function footprintShape(item, surfaceOnly = false) {
    const {type, w, h} = item;
    if (isDiningTable(item)) return [[0, 0, w, h]];
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
      if (type === 'counter' || type === 'kitchenWorktop') return kitchenTopSections(item);
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

  function orientedBoxes(item, surfaceOnly, shapes) {
    if (![item?.x, item?.y, item?.w, item?.h].every(Number.isFinite) || item.w <= 0 || item.h <= 0) return [];
    const angle = (Number.isFinite(item.rotation) ? item.rotation : 0) * Math.PI / 180;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    return (shapes ?? footprintShape(item, surfaceOnly)).map(([x, y, width, height, localAngle = 0]) => {
      const u = [Math.cos(angle + localAngle), Math.sin(angle + localAngle)];
      return {
        x: item.x + x * cosine - y * sine, y: item.y + x * sine + y * cosine,
        u, v: [-u[1], u[0]], width: width / 2, height: height / 2,
      };
    });
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
    const specialty = specialtyFootprint(item);
    if (specialty) return orientedBoxes(item, false, specialty);
    if (isDiningChair(item) || placementRole(item) !== 'floor' || FLOOR_SOLIDS.has(item.type) || SOLID_VARIANT.test(item.type)) {
      return orientedBoxes(item, false);
    }
    return [];
  }

  function walkingObstacleBoxes(item) {
    if (placementRole(item) === 'tabletop' || item.type === 'rug' || item.type.startsWith('baby-mats-')) return [];
    if (['chair','stool','tv'].includes(item.type) || /(?:desk-chair|toy-storage|fireplace|floor-chair)/.test(item.type)
        || item.type.startsWith('pets-')) return orientedBoxes(item, false);
    return solidBoxes(item);
  }

  function overlapDepth(first, second) {
    const span = (box, axis) => box.width * Math.abs(project(...box.u, axis))
      + box.height * Math.abs(project(...box.v, axis));
    return Math.min(...[first.u, first.v, second.u, second.v].map(axis =>
      span(first, axis) + span(second, axis) - Math.abs(project(first.x - second.x, first.y - second.y, axis))));
  }

  function diningChairTucks(chair, table) {
    const [seat] = orientedBoxes(chair, false);
    const [top] = orientedBoxes(table, true);
    if (!seat || !top || overlapDepth(seat, top) <= 0) return false;
    const delta = [seat.x - top.x, seat.y - top.y];
    const x = project(...delta, top.u) / top.width;
    const y = project(...delta, top.v) / top.height;
    const round = table.type.startsWith('living-round-dining-');
    let facing;
    if (round) {
      if (Math.hypot(x, y) < 1) return false;
      facing = -project(...delta, seat.v) / Math.hypot(...delta);
    } else {
      const outsideX = Math.abs(x) >= 1;
      const outsideY = Math.abs(y) >= 1;
      if (outsideX === outsideY) return false;
      facing = -Math.sign(outsideX ? x : y) * project(...seat.v, outsideX ? top.u : top.v);
    }
    if (facing < .80) return false;
    const classic = table.type === 'diningTable';
    const tabletopHeight = classic ? 46.4 : round ? 41 : 42.3;
    const underside = (table.modelHeight ?? tabletopHeight) * (classic ? 32 : 33) / tabletopHeight;
    const seatHeight = (chair.modelHeight ?? 59) * 30 / 59;
    return seatHeight < underside;
  }

  function penetration(item, neighbor, boxes, neighborBoxes) {
    let deepest = 0;
    for (const box of boxes) for (const other of neighborBoxes) deepest = Math.max(deepest, overlapDepth(box, other));
    if (deepest <= 2) return deepest;
    const itemRole = placementRole(item);
    const neighborRole = placementRole(neighbor);
    if (itemRole === 'tabletop' && neighborRole === 'surface' && onSurface(item, neighbor)
        || itemRole === 'surface' && neighborRole === 'tabletop' && onSurface(neighbor, item)) return 0;
    if (isDiningChair(item) && isDiningTable(neighbor) && diningChairTucks(item, neighbor)
        || isDiningTable(item) && isDiningChair(neighbor) && diningChairTucks(neighbor, item)) return 0;
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

  // The compatibility raster is overhead: fully enclosed garage contents are
  // occluded by an opaque full roof. This never removes authored objects.
  function underGarageRoof(item, items) {
    if (!['garagePriusBlue','garageCeilingLight'].includes(item.type)) return false;
    const angle=(item.rotation||0)*Math.PI/180;
    const corners=[[-1,-1],[-1,1],[1,-1],[1,1]].map(([u,v])=>({
      x:item.x+u*item.w/2*Math.cos(angle)-v*item.h/2*Math.sin(angle),
      y:item.y+u*item.w/2*Math.sin(angle)+v*item.h/2*Math.cos(angle)
    }));
    return items.some(garage=>{
      if(garage.type!=='garageDoor'||garage.garageRoof==='cutaway')return false;
      const turn=(garage.rotation||0)*Math.PI/180;
      return corners.every(point=>{
        const dx=point.x-garage.x,dy=point.y-garage.y;
        return Math.abs(dx*Math.cos(turn)+dy*Math.sin(turn))<=garage.w*.52&&
          Math.abs(-dx*Math.sin(turn)+dy*Math.cos(turn))<=garage.h*.43;
      });
    });
  }

  function drawWithGarageRoofOcclusion(context, item, items, draw) {
    if (!['garagePriusBlue','garageCeilingLight'].includes(item.type)) return draw();
    if (underGarageRoof(item,items)) return;
    const roofs=items.filter(garage=>garage.type==='garageDoor'&&garage.garageRoof!=='cutaway');
    if(!roofs.length)return draw();
    context.save();
    try {
      // Clip each roof separately so overlapping footprints never cancel out.
      // Partial doorway protrusions stay visible without painting through roofs.
      for(const garage of roofs) {
        const turn=(garage.rotation||0)*Math.PI/180;
        context.beginPath();context.rect(-1e6,-1e6,2e6,2e6);
        [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([u,v],index)=>{
          const x=garage.x+u*garage.w*.52*Math.cos(turn)-v*garage.h*.43*Math.sin(turn);
          const y=garage.y+u*garage.w*.52*Math.sin(turn)+v*garage.h*.43*Math.cos(turn);
          if(index)context.lineTo(x,y);else context.moveTo(x,y);
        });
        context.closePath();context.clip('evenodd');
      }
      return draw();
    } finally {context.restore();}
  }

  function orderMountedObjects(items) {
    // Cutaway floors are drawn before independently editable parked vehicles.
    // Keep this stable even after the author reorders the object collection.
    if (items.some(item => item.type === 'garagePriusBlue') && items.some(item => item.type === 'garageDoor')) {
      items = [...items.filter(item => item.type === 'garageDoor'), ...items.filter(item => item.type !== 'garageDoor')];
    }
    const surfaces = items.filter(item => placementRole(item) === 'surface');
    const tables = surfaces.filter(isDiningTable);
    const mounted = new Set();
    const children = new Map();
    const tucked = new Map();
    for (const item of items) {
      const chair = isDiningChair(item);
      if (!chair && placementRole(item) !== 'tabletop') continue;
      const support = chair ? tables.find(candidate => diningChairTucks(item, candidate))
        : surfaces.find(candidate => onSurface(item, candidate));
      if (!support) continue;
      mounted.add(item.id);
      const order = chair ? tucked : children;
      if (!order.has(support.id)) order.set(support.id, []);
      order.get(support.id).push(item);
    }
    return mounted.size ? items.flatMap(item => mounted.has(item.id) ? [] :
      [...(tucked.get(item.id) ?? []), item, ...(children.get(item.id) ?? [])]) : items;
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
      view.value = mapping.existing ? 'placed' : 'catalog';
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
        if (target.entity) {
          context.append(action(target.existing ? 'Choose a new model' : 'Bind existing object', () => {
            choose({entity:target.entity, existing:!target.existing});
          }));
          if (!target.existing) context.append(action(all ? 'Suggested models' : 'All compatible models', () => {
            all = !all;
            paint();
          }));
        }
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
          let buttons;
          if (target?.existing) {
            if (!canBind(item, target.entity.entity_id, model)) continue;
            buttons = [action('Bind to this object', () => apply({kind:'bind', itemId:item.id, entityId:target.entity.entity_id}))];
          } else {
            buttons = [action('Edit', () => apply({kind:'edit', itemId:item.id}))];
            if (templates.some(candidate => canReplace(item, model, candidate))) {
              buttons.push(action('Change model', () => choose({item})));
            }
          }
          rows.push([item.name || model?.label || item.type, detail, buttons]);
        }
      } else if (view.value === 'devices') {
        const usage = entityUsage(items);
        for (const entity of entities) {
          if (!isEntityId(entity.entity_id) || !match(entity.name, entity.entity_id, entity.area)) continue;
          const links = usage.get(entity.entity_id) || [];
          const primary = links.find(link => link.role === 'primary');
          const linkedObjects = links.map(({item, role}) => role === 'primary' ? item.name : role + ' for ' + item.name);
          const detail = [entity.entity_id, entity.area, ...linkedObjects].filter(Boolean).join(' · ');
          const buttons = links.length ? [action(primary ? 'Edit mapped object' : 'Edit linked object',
            () => apply({kind:'edit', itemId:(primary || links[0]).item.id}))] : [];
          if (templates.some(model => canMap(entity.entity_id, model))) {
            buttons.push(action(primary ? 'Map again' : 'Map to object', () => choose({entity,
              existing:items.some(item => canBind(item, entity.entity_id, byType.get(item.type)))})));
          }
          rows.push([entity.name || entity.entity_id, detail, buttons]);
        }
      } else {
        let models = templates.filter(template => !template.legacy);
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
        : view.value === 'devices' && !entities.length ? 'Connect to Home Assistant to list devices.'
        : target?.existing && !query ? 'No compatible unbound objects. Choose a new model instead.' : 'No matches.';
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

  root.RoomcraftModels = Object.freeze({catalog, isExterior, canMap, canBind, canReplace, suggestions, supportsHeight, resizeFootprint, resizeCornerFootprint,
    splitDiningFurniture, placementRole, kitchenTopOpening, specialtyBarrierSections, walkingObstacleBoxes, blockingPlacement,
    orderMountedObjects, underGarageRoof, drawWithGarageRoofOcclusion, mount, handoffKey});
})(typeof window === 'undefined' ? globalThis : window);
