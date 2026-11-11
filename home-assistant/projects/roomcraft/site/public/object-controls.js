(() => {
  'use strict';

  const actions = new Set(['auto', 'toggle', 'activate', 'more-info', 'none']);
  const visualKinds = new Set(['auto', 'light', 'fan', 'climate', 'window', 'door', 'vacuum', 'device', 'none']);
  const lightForms = new Set(['table_lamp', 'bud_lamp', 'cloud_floor_lamp', 'bloom_ceiling', 'star_pendant', 'acorn_sconce']);
  const iconPattern = /^mdi:[a-z0-9-]+$/i;
  const bindingKeys = new Set(['tapAction', 'holdAction', 'tapEntityId', 'holdEntityId', 'presenceEntityId',
    'controlLabel', 'controlIcon', 'visualKind', 'vacuumMapEntityId', 'vacuumPositionTransform',
    'presenceTrackEntityId', 'presenceTrackTransform', 'presenceTrackZone', 'presenceTrackProfile']);
  const radarEntityPattern = /^sensor\.[a-z0-9_]+$/;
  const radarProfiles = new Map([['inovelli-vzm32-sn', 'Inovelli Blue Presence Dimmer']]);
  const entityPattern = /^[a-z_]+\.[a-z0-9_]+$/i;
  const sceneWidth = 1536;
  const sceneHeight = 864;
  const sceneLeft = 0;
  const sceneTop = 80;
  const interfaceButtonTypes = new Set(['uiEdit', 'uiStatusAir', 'uiStatusElectrical']);
  const interfaceButtonVars = {
    '--roomcraft-control-bg': 'rgba(16, 40, 43, 0.88)',
    '--roomcraft-control-border': 'rgba(216, 255, 240, 0.65)',
    '--roomcraft-control-color': '#d8fff0',
    '--roomcraft-control-shadow': '0 3px 10px rgba(7, 21, 24, 0.61)'
  };

  function normalizeEntityOptions(raw) {
    if (!Array.isArray(raw)) return [];
    const seen = new Set();
    return raw.map(option => {
      if (!option || typeof option !== 'object' || typeof option.entity_id !== 'string') return null;
      const entity_id = option.entity_id.trim();
      if (!entityPattern.test(entity_id) || seen.has(entity_id)) return null;
      seen.add(entity_id);
      return {
        entity_id,
        domain: entity_id.split('.')[0],
        name: typeof option.name === 'string' ? option.name.trim().slice(0, 80) : '',
        area: typeof option.area === 'string' ? option.area.trim().slice(0, 60) : ''
      };
    }).filter(Boolean).sort((a,b) => (a.name || a.entity_id).localeCompare(b.name || b.entity_id)).slice(0, 1500);
  }

  function validPresenceTransform(transform) {
    return Array.isArray(transform) && transform.length === 6
      && [...transform].every(value => Number.isFinite(value) && Math.abs(value) <= 10000)
      && Math.abs(transform[0] * transform[4] - transform[1] * transform[3]) > 1e-5;
  }

  function validPresenceZone(bounds) {
    return Array.isArray(bounds) && bounds.length === 4
      && [...bounds].every(value => Number.isFinite(value) && Math.abs(value) <= 600)
      && bounds[0] < bounds[1] && bounds[2] < bounds[3];
  }

  function presenceCalibration(item, pixelsPerMetre, headingOffset, flipLeftRight) {
    if (item?.type !== 'presenceSwitch' || ![item.x, item.y, item.rotation].every(Number.isFinite)
      || !Number.isFinite(pixelsPerMetre) || pixelsPerMetre < 1 || pixelsPerMetre > 1000
      || !Number.isFinite(headingOffset)) return undefined;
    // Wall placement uses its local positive Y axis for the room-facing side.
    const radians = ((item.rotation + headingOffset) % 360) * Math.PI / 180;
    const scale = pixelsPerMetre / 100;
    const sideways = flipLeftRight ? -scale : scale;
    return [sideways * Math.cos(radians), -scale * Math.sin(radians), item.x,
      sideways * Math.sin(radians), scale * Math.cos(radians), item.y]
      .map(value => Number(value.toFixed(6)));
  }

  function validBinding(item) {
    return (!('tapAction' in item) || actions.has(item.tapAction))
      && (!('holdAction' in item) || actions.has(item.holdAction))
      && (!('tapEntityId' in item) || typeof item.tapEntityId === 'string'
        && (!item.tapEntityId || entityPattern.test(item.tapEntityId)))
      && (!('holdEntityId' in item) || typeof item.holdEntityId === 'string'
        && (!item.holdEntityId || entityPattern.test(item.holdEntityId)))
      && (!('presenceEntityId' in item) || typeof item.presenceEntityId === 'string'
        && (!item.presenceEntityId || /^binary_sensor\.[a-z0-9_]+$/i.test(item.presenceEntityId)))
      && (!('presenceTrackEntityId' in item) || item.type === 'presenceSwitch'
        && typeof item.presenceTrackEntityId === 'string'
        && radarEntityPattern.test(item.presenceTrackEntityId))
      && (!('presenceTrackTransform' in item) || item.type === 'presenceSwitch'
        && validPresenceTransform(item.presenceTrackTransform))
      && (!('presenceTrackZone' in item) || item.type === 'presenceSwitch'
        && validPresenceZone(item.presenceTrackZone))
      && (!('presenceTrackProfile' in item) || item.type === 'presenceSwitch'
        && radarProfiles.has(item.presenceTrackProfile))
      && (!('controlLabel' in item) || (typeof item.controlLabel === 'string' && item.controlLabel.length <= 80))
      && (!('controlIcon' in item) || (typeof item.controlIcon === 'string' && (!item.controlIcon || iconPattern.test(item.controlIcon))))
      && (!('visualKind' in item) || visualKinds.has(item.visualKind))
      && (!('lightForm' in item) || lightForms.has(item.lightForm))
      && (!('vacuumMapEntityId' in item) || typeof item.vacuumMapEntityId === 'string'
        && (!item.vacuumMapEntityId || /^camera\.[a-z0-9_]+$/i.test(item.vacuumMapEntityId)))
      && (!('vacuumPositionTransform' in item) || Array.isArray(item.vacuumPositionTransform)
        && item.vacuumPositionTransform.length === 6
        && item.vacuumPositionTransform.every(value => Number.isFinite(value) && Math.abs(value) <= 10000));
  }

  function propertyUpdate(key, rawValue) {
    if (!bindingKeys.has(key) || typeof rawValue !== 'string') return { valid: false };
    const value = rawValue.trim();
    if (key === 'tapAction' || key === 'holdAction') {
      return actions.has(value) ? { valid: true, value: value === 'auto' ? undefined : value } : { valid: false };
    }
    if (key === 'visualKind') {
      return visualKinds.has(value) ? { valid: true, value: value === 'auto' ? undefined : value } : { valid: false };
    }
    if (key === 'tapEntityId' || key === 'holdEntityId') {
      return !value || entityPattern.test(value) ? { valid: true, value: value || undefined } : { valid: false };
    }
    if (key === 'presenceEntityId') {
      return !value || /^binary_sensor\.[a-z0-9_]+$/i.test(value)
        ? { valid: true, value: value || undefined } : { valid: false };
    }
    if (key === 'presenceTrackEntityId') {
      return !value || radarEntityPattern.test(value)
        ? { valid: true, value: value || undefined } : { valid: false };
    }
    if (key === 'presenceTrackProfile') {
      return !value || radarProfiles.has(value)
        ? { valid: true, value: value || undefined } : { valid: false };
    }
    if (key === 'presenceTrackTransform' || key === 'presenceTrackZone') {
      if (!value) return { valid: true, value: undefined };
      const parts = value.split(',').map(part => part.trim());
      const numbers = parts.map(Number);
      const valid = key === 'presenceTrackZone' ? validPresenceZone(numbers) : validPresenceTransform(numbers);
      return parts.every(Boolean) && valid
        ? { valid: true, value: numbers } : { valid: false };
    }
    if (key === 'vacuumMapEntityId') {
      return !value || /^camera\.[a-z0-9_]+$/i.test(value)
        ? { valid: true, value: value || undefined } : { valid: false };
    }
    if (key === 'vacuumPositionTransform') {
      if (!value) return { valid: true, value: undefined };
      const numbers = value.split(',').map(part => Number(part.trim()));
      return numbers.length === 6 && numbers.every(number => Number.isFinite(number) && Math.abs(number) <= 10000)
        ? { valid: true, value: numbers } : { valid: false };
    }
    if (key === 'controlLabel') return value.length <= 80 ? { valid: true, value: value || undefined } : { valid: false };
    return !value || iconPattern.test(value) ? { valid: true, value: value || undefined } : { valid: false };
  }

  function effectiveTapAction(item) {
    if (item.tapAction && item.tapAction !== 'auto') return item.tapAction;
    const domain = (item.tapEntityId || item.entityId || '').split('.')[0];
    if (['scene', 'script', 'button'].includes(domain)) return 'activate';
    return ['light', 'switch', 'fan', 'input_boolean'].includes(domain) ? 'toggle' : 'more-info';
  }

  function effectiveHoldAction(item) {
    return item.holdAction && item.holdAction !== 'auto' ? item.holdAction : 'more-info';
  }

  function visualKind(item) {
    if (item.visualKind && item.visualKind !== 'auto') return item.visualKind;
    const type = String(item.type || '').toLowerCase();
    const entity = String(item.entityId || '').toLowerCase();
    const label = String(item.controlLabel || item.name || '').toLowerCase();
    const domain = entity.split('.')[0];
    if (domain === 'vacuum' || type.includes('robotvacuum') || /\b(robot )?vacuum\b/.test(label)) return 'vacuum';
    if (domain === 'fan' || (type.includes('fan') && !label.includes('fan light')) ||
        (domain === 'switch' && /\bfan\b/.test(label) && !/\blight\b/.test(label))) return 'fan';
    if (domain === 'climate' || /\b(air conditioner|thermostat|a\/c)\b/.test(label)) return 'climate';
    if (domain === 'lock' || /\b(door|garage)\b/.test(label)) return 'door';
    if (domain === 'cover' || type === 'window' || /\b(window|blind|blinds|shade|shades)\b/.test(label)) return 'window';
    if (domain === 'light' || /light|lamp|sconce/.test(type) || /\b(light|lamp)\b/.test(label)) return 'light';
    return 'device';
  }
  function lightForm(item) {
    return lightForms.has(item.lightForm) ? item.lightForm : 'table_lamp';
  }

  function manualDashboardElements(project) {
    const items = Array.isArray(project?.items) ? project.items : [];
    const hotspots = Array.isArray(project?.hotspots) ? project.hotspots : [];
    const linked = items.filter(item => item.type !== 'cameraThumbnail'
      && typeof item.entityId === 'string' && /^[a-z_]+\.[a-z0-9_]+$/i.test(item.entityId));
    const linkedEntities = new Set(linked.map(item => item.entityId));
    const percent = (value, span) => (Math.round(value / span * 10000) / 100) + '%';
    const independent = hotspots.filter(hotspot => !linkedEntities.has(hotspot.entity))
      .map(hotspot => {
        const element = { ...hotspot, style: { ...hotspot.style } };
        delete element.id;
        const left = Number.parseFloat(element.style.left);
        if (Number.isFinite(left)) element.style.left = percent(1536 * left / 100 - sceneLeft, sceneWidth);
        const width = Number.parseFloat(element.style.width);
        if (Number.isFinite(width)) element.style.width = percent(1536 * width / 100, sceneWidth);
        const top = Number.parseFloat(element.style.top);
        if (Number.isFinite(top)) element.style.top = percent(1024 * top / 100 - sceneTop, sceneHeight);
        const height = Number.parseFloat(element.style.height);
        if (Number.isFinite(height)) element.style.height = percent(1024 * height / 100, sceneHeight);
        return element;
      });
    const dimensions = (item, zIndex) => ({
      left: percent(item.x - sceneLeft, sceneWidth), top: percent(item.y - sceneTop, sceneHeight),
      width: percent(item.w, sceneWidth), height: percent(item.h, sceneHeight),
      transform: 'translate(-50%, -50%) rotate(' + (item.rotation || 0) + 'deg)',
      'z-index': zIndex
    });
    const objects = linked.map(item => ({
      type: 'custom:roomcraft-object-control',
      roomcraft_item_id: item.id,
      entity: item.entityId,
      title: item.controlLabel || item.name || item.entityId,
      control_icon: item.controlIcon || '',
      control_zone: item.type === 'controlZone',
      roomcraft_visual_kind: visualKind(item),
      ...(visualKind(item) === 'light' ? { roomcraft_light_form: lightForm(item) } : {}),
      ...(visualKind(item) === 'device' && item.type === 'humidifier' ? { roomcraft_device_form: 'humidifier' } : {}),
      ...(visualKind(item) === 'device' && item.type === 'airPurifier' ? { roomcraft_device_form: 'air_purifier' } : {}),
      ...(visualKind(item) === 'device' && item.type === 'presenceSwitch' ? { roomcraft_device_form: 'presence_switch' } : {}),
      ...(visualKind(item) === 'window' ? { roomcraft_window_axis: item.w < item.h ? 'vertical' : 'horizontal' } : {}),
      roomcraft_tap_action: item.tapAction || 'auto',
      roomcraft_hold_action: item.holdAction || 'auto',
      ...(item.tapEntityId ? { roomcraft_tap_entity: item.tapEntityId } : {}),
      ...(item.holdEntityId ? { roomcraft_hold_entity: item.holdEntityId } : {}),
      ...(item.presenceEntityId ? { roomcraft_presence_entity: item.presenceEntityId } : {}),
      ...(item.vacuumMapEntityId ? { roomcraft_vacuum_map_entity: item.vacuumMapEntityId } : {}),
      ...(item.vacuumPositionTransform ? { roomcraft_vacuum_position_transform: item.vacuumPositionTransform } : {}),
      style: dimensions(item, 4)
    }));
    const cameras = items.filter(item => item.type === 'cameraThumbnail').map(item => ({
      type: 'custom:roomcraft-camera-thumbnail',
      roomcraft_item_id: item.id,
      title: item.name || 'Camera',
      camera_entity: item.entityId || '',
      image_entity: item.imageEntityId || '',
      preview_mode: item.previewMode || 'event',
      ...(item.previewMode === 'event_live' ? { event_entities: item.eventEntityIds || [] } : {}),
      style: dimensions(item, 3)
    }));
    const findUi = type => items.find(item => item.type === type);
    const interfaceStyle = (position, type) => {
      const style = { ...dimensions(position, 12), ...(interfaceButtonTypes.has(type) ? interfaceButtonVars : {}) };
      if (type === 'uiEdit') Object.assign(style, {
        background: 'var(--roomcraft-control-bg)', border: '1px solid var(--roomcraft-control-border)',
        'border-radius': '50%', padding: '0', color: 'var(--roomcraft-control-color)',
        'box-shadow': 'var(--roomcraft-control-shadow)', 'box-sizing': 'border-box',
        display: 'grid', 'place-items': 'center', '--mdc-icon-size': '24px'
      });
      return style;
    };
    const uiElements = [
      ['uiTime', { type: 'state-label', entity: 'sensor.time' }],
      ['uiEdit', { type: 'icon', icon: 'mdi:pencil-ruler', title: 'Edit layout in Roomcraft', tap_action: { action: 'navigate', navigation_path: '/roomcraft-home/studio' } }],
      ['uiStatusAir', { type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'air', title: 'Indoor air', entities: [] }],
      ['uiStatusElectrical', { type: 'custom:roomcraft-status-popup', roomcraft_status_kind: 'electrical', title: 'Electrical', entities: [] }]
    ].flatMap(([type, element]) => { const position=findUi(type); return position?[{...element,
      ...(type.startsWith('uiStatus') ? { roomcraft_popup_direction: position.y > sceneTop + sceneHeight / 2 ? 'up' : 'down' } : {}),
      style:interfaceStyle(position,type)}]:[]; });
    const menuPosition=findUi('uiMenu');
    const menu = {
      type: 'custom:roomcraft-entity-menu',
      roomcraft_menu: true,
      title: 'Devices and sensors',
      sections: [],
      bound_objects: linked.map(item => ({
        entity_id: item.entityId, label: item.controlLabel || item.name || item.entityId,
        icon: item.controlIcon || ''
      })),
      style: menuPosition ? dimensions(menuPosition,12) : { left: '5.2%', top: '5.3%', 'z-index': 12 }
    };
    return [...independent, ...objects, ...cameras, menu, ...uiElements];
  }

  function manualYaml(project) {
    const elements = manualDashboardElements(project);
    const lines = [
      '# Roomcraft manual fallback for the Second Floor dashboard.',
      '# First register /local/roomcraft/roomcraft-card.js as a JavaScript module in Home Assistant Dashboard resources.',
      '# Export the PNG separately and copy it to /config/www/second-floor/roomcraft-second-floor.png.',
      '# Import from dashboard / Export to dashboard transfers the editable layout and these controls directly.',
      'title: Second Floor',
      'views:',
      '  - title: Floor Plan',
      '    path: plan',
      '    icon: mdi:floor-plan',
      '    type: panel',
      '    cards:',
      '      - type: picture-elements',
      '        roomcraft_scene: full-width-v1',
      '        image: /local/second-floor/roomcraft-second-floor.png',
      '        elements:'
    ];
    for (const element of elements) {
      lines.push('          - type: ' + JSON.stringify(element.type));
      for (const [key, value] of Object.entries(element)) {
        if (key === 'type') continue;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          lines.push('            ' + key + ':');
          for (const [childKey, childValue] of Object.entries(value)) {
            lines.push('              ' + JSON.stringify(childKey) + ': ' + JSON.stringify(childValue));
          }
        } else {
          lines.push('            ' + key + ': ' + JSON.stringify(value));
        }
      }
    }
    return lines.join('\n') + '\n';
  }

  function selectField(key, label, current, options) {
    return '<div class="field"><label for="prop-' + key + '">' + label + '</label><select id="prop-' + key + '" data-prop="' + key + '">'
      + options.map(([value, name]) => '<option value="' + value + '"' + (current === value ? ' selected' : '') + '>' + name + '</option>').join('')
      + '</select></div>';
  }

  function actionField(key, label, current, autoLabel) {
    return selectField(key, label, current || 'auto', [
      ['auto', autoLabel], ['toggle', 'Toggle device'], ['activate', 'Run scene, script, or button'],
      ['more-info', 'Open device details'], ['none', 'Do nothing']
    ]);
  }

  function entityField(label, key, value, options, domain, escape) {
    const listId = 'roomcraft-' + key + '-options';
    const choices = options.filter(option => !domain || option.domain === domain);
    const values = choices.map(option => {
      const description = [option.name, option.area, option.domain].filter(Boolean).join(' · ');
      return '<option value="' + escape(option.entity_id) + '" label="' + escape(description) + '"></option>';
    }).join('');
    return '<div class="field"><label for="prop-' + key + '">' + escape(label) + '</label>'
      + '<input id="prop-' + key + '" data-prop="' + key + '" type="text" value="' + escape(value)
      + '" list="' + listId + '" placeholder="Search or enter an entity ID" autocomplete="off">'
      + '<datalist id="' + listId + '">' + values + '</datalist></div>';
  }

  function trackingInspector(item, escape, entityOptions) {
    const transform = item.presenceTrackTransform;
    const calibrated = validPresenceTransform(transform);
    const scale = calibrated ? Math.round(Math.hypot(transform[1], transform[4]) * 1000) / 10 : 100;
    const heading = calibrated ? Math.atan2(-transform[1], transform[4]) * 180 / Math.PI - item.rotation : 0;
    const offset = Math.round(((heading % 360 + 540) % 360 - 180) * 10) / 10;
    const flipped = calibrated && transform[0] * transform[4] - transform[1] * transform[3] < 0;
    return '<div class="inspector-block"><p class="inspector-label">PERSON TRACKING</p>'
      + entityField('Radar targets entity', 'presenceTrackEntityId', item.presenceTrackEntityId || '',
        entityOptions, 'sensor', escape)
      + '<p class="field-hint">Characters follow recent positions from this radar sensor. Preview live positions in Home Assistant Studio and publish the layout to use the calibration on the dashboard.</p>'
      + '<div class="field-grid">'
      + '<div class="field"><label for="presence-track-scale">Plan pixels per metre</label>'
      + '<input id="presence-track-scale" type="number" min="1" max="1000" step="any" value="' + scale + '"></div>'
      + '<div class="field"><label for="presence-track-heading">Rotation offset (°)</label>'
      + '<input id="presence-track-heading" type="number" step="any" value="' + offset + '"></div></div>'
      + '<label class="wall-snap-option"><input id="presence-track-flip" type="checkbox"'
      + (flipped ? ' checked' : '') + '> Flip radar left and right</label>'
      + '<button type="button" class="secondary-button full-width" data-action="calibrate-presence">Use switch position</button>'
      + '<p class="field-hint">Start with the switch position and its room-facing direction. Adjust the scale and rotation while someone stands at a known point on the plan.</p>'
      + '<div class="field"><label for="prop-presenceTrackTransform">Position transform (advanced)</label>'
      + '<input id="prop-presenceTrackTransform" data-prop="presenceTrackTransform" type="text" value="'
      + escape((transform || []).join(', ')) + '" placeholder="a, b, c, d, e, f" autocomplete="off"></div>'
      + selectField('presenceTrackProfile', 'Radar model for coverage', item.presenceTrackProfile || '',
        [['', 'Unknown or other radar'], ...radarProfiles])
      + '<div class="field"><label for="prop-presenceTrackZone">Configured zone bounds (cm)</label>'
      + '<input id="prop-presenceTrackZone" data-prop="presenceTrackZone" type="text" value="'
      + escape((item.presenceTrackZone || []).join(', ')) + '" placeholder="x min, x max, y min, y max"'
      + ' aria-describedby="presence-zone-hint" autocomplete="off"></div>'
      + '<p class="field-hint" id="presence-zone-hint">Enter the switch’s configured bounds to preview its detection zone. The nominal radar outline estimates coverage, which can vary with the installation.</p></div>';
  }

  function poseUpdate(key, value) {
    if (!['x', 'y', 'rotation'].includes(key) ||
        (typeof value !== 'string' && typeof value !== 'number') || String(value).trim() === '') return null;
    const number = Number(value);
    if (!Number.isFinite(number)) return null;
    return {value: key === 'rotation' ? (number % 360 + 360) % 360 : number};
  }

  function renderInspector(item, template, field, variantField, escape, entityOptions = [], dimensions = {}) {
    const camera = item.type === 'cameraThumbnail';
    const zone = item.type === 'controlZone';
    const appearance = '<div class="inspector-block"><p class="inspector-label">APPEARANCE & POSITION</p>'
      + field('Name', 'name', item.name) + variantField(template, item.type)
      + '<div class="field-grid">' + field('Center X', 'x', item.x, 'number') + field('Center Y', 'y', item.y, 'number') + '</div>'
      + field('Rotation (degrees)', 'rotation', item.rotation, 'number')
      + '<p class="field-hint">' + (zone
        ? 'This outline appears only while editing. Drag it over the artwork, then resize its corners to set the tappable area.'
        : 'Drag this object to move it; drag a corner handle to resize. Hold Shift or enable Keep width/depth ratio to keep proportions.') + '</p>'
      + '<div class="inspector-actions"><button type="button" class="secondary-button" data-action="rotate">↻ Rotate 90°</button>'
      + '<button type="button" class="secondary-button" data-action="duplicate">▣ Duplicate</button></div></div>';
    const sizing = '<div class="inspector-block"><p class="inspector-label">DIMENSIONS · PLAN PX</p>'
      + '<div class="field-grid">' + field('Width', 'w', item.w, 'number') + field('Depth', 'h', item.h, 'number') + '</div>'
      + (dimensions.height ? field('Height in 3D (blank = model)', 'modelHeight', item.modelHeight ?? '', 'number') : '')
      + '<div class="inspector-actions"><label><input type="checkbox" data-lock-dimensions'
      + (dimensions.locked ? ' checked' : '') + '> Keep width/depth ratio</label>'
      + (template.w ? '<button type="button" class="secondary-button" data-action="reset-dimensions">Reset dimensions</button>' : '')
      + '</div></div>';
    let link;
    if (camera) {
      link = '<div class="inspector-block"><p class="inspector-label">CAMERA PREVIEW</p>'
        + entityField('Camera entity ID', 'entityId', item.entityId || '', entityOptions, 'camera', escape)
        + '<div class="field"><label for="prop-previewMode">Preview mode</label><select id="prop-previewMode" data-prop="previewMode">'
        + '<option value="event"' + ((item.previewMode || 'event') === 'event' ? ' selected' : '') + '>Latest event image</option>'
        + '<option value="live"' + (item.previewMode === 'live' ? ' selected' : '') + '>Live on tap</option>'
        + '<option value="live_auto"' + (item.previewMode === 'live_auto' ? ' selected' : '') + '>Always show live feed</option>'
        + '<option value="event_live"' + (item.previewMode === 'event_live' ? ' selected' : '') + '>Live during an event</option>'
        + '<option value="offline"' + (item.previewMode === 'offline' ? ' selected' : '') + '>Preview off</option></select></div>'
        + entityField('Event image entity', 'imageEntityId', item.imageEntityId || '', entityOptions, 'image', escape)
        + '<div class="field"><label for="prop-eventEntityIds">Event sensors (comma separated)</label>'
        + '<input id="prop-eventEntityIds" data-prop="eventEntityIds" type="text" value="' + escape((item.eventEntityIds || []).join(', '))
        + '" placeholder="binary_sensor.ring, binary_sensor.person" autocomplete="off"></div>'
        + '<p class="field-hint">Event mode shows the latest image until a listed sensor turns on, then tries live video for a short event window. Always-live mode is for cameras that can stream continuously.</p></div>';
    } else {
      link = '<div class="inspector-block"><p class="inspector-label">DASHBOARD BUTTON</p>'
        + entityField('Device entity ID', 'entityId', item.entityId || '', entityOptions, null, escape)
        + '<p class="field-hint">' + (item.entityId
          ? 'This object is a dashboard button linked to ' + escape(item.entityId) + '.'
          : 'Add an entity ID to turn this object into a dashboard button. Leave it blank for decoration.') + '</p>'
        + field('Button label (optional)', 'controlLabel', item.controlLabel || '')
        + (zone ? '' : '<div class="field"><label for="prop-controlIcon">Button icon (optional)</label>'
          + '<input id="prop-controlIcon" data-prop="controlIcon" list="roomcraftButtonIcons" value="' + escape(item.controlIcon || '')
          + '" placeholder="Automatic or mdi:lightbulb">'
          + '<datalist id="roomcraftButtonIcons"><option value="mdi:lightbulb"><option value="mdi:ceiling-fan">'
          + '<option value="mdi:window-closed"><option value="mdi:garage"><option value="mdi:television">'
          + '<option value="mdi:robot-vacuum"><option value="mdi:power"></datalist></div>')
        + actionField('tapAction', 'Tap action', item.tapAction, 'Automatic for device')
        + '<div class="field"><label for="prop-visualKind">Live graphic</label><select id="prop-visualKind" data-prop="visualKind">'
        + [['auto','Automatic'],['light','Light or lamp'],['fan','Ceiling fan'],['climate','Air conditioning'],['window','Window or blinds'],['door','Door or garage'],['vacuum','Robot vacuum'],['device','General device'],['none','No state graphic']]
          .map(([value,label]) => '<option value="' + value + '"' + ((item.visualKind || 'auto') === value ? ' selected' : '') + '>' + label + '</option>').join('')
        + '</select></div>'
        + entityField('Tap target (optional)', 'tapEntityId', item.tapEntityId || '', entityOptions, null, escape)
        + actionField('holdAction', 'Hold action', item.holdAction, 'Default · open device details')
        + entityField('Hold target (optional)', 'holdEntityId', item.holdEntityId || '', entityOptions, null, escape)
        + (item.type === 'presenceSwitch'
          ? entityField('Presence sensor', 'presenceEntityId', item.presenceEntityId || '', entityOptions, 'binary_sensor', escape)
            + '<p class="field-hint">The three dots attached to the switch animate only while this occupancy sensor reports on.</p>'
          : '')
        + (visualKind(item) === 'vacuum'
          ? entityField('Vacuum map camera', 'vacuumMapEntityId', item.vacuumMapEntityId || '', entityOptions, 'camera', escape)
            + '<div class="field"><label for="prop-vacuumPositionTransform">Position transform (advanced)</label>'
            + '<input id="prop-vacuumPositionTransform" data-prop="vacuumPositionTransform" type="text" value="'
            + escape((item.vacuumPositionTransform || []).join(', ')) + '" placeholder="a, b, c, d, e, f" autocomplete="off"></div>'
            + '<p class="field-hint">The optional six-number transform maps live vacuum coordinates to plan pixels: x′ = ax + by + c, y′ = dx + ey + f. When calibrated, the robot moves smoothly to its real map position; stale active positions are not presented as live. Tap opens start, pause, dock, locate, room-cleaning, and map controls.</p>'
          : '')
        + '<p class="field-hint">Search available devices by name or enter an entity ID. Automatic tap toggles lights, switches, and fans; runs scenes, scripts, and buttons; and opens details for other devices. The object name is the button label unless you set one above.'
        + ' Optional tap and hold targets let this object show one entity’s state while running a different scene, script, or button.'
        + ' The live graphic follows the main entity. Choose Fan to spin when that switch is on.'
        + (zone ? ' General control areas stay invisible; Window and Door modes show a state tint.' : '') + '</p></div>';
    }
    return '<div class="inspector-block"><p class="inspector-label">SELECTED OBJECT</p>'
      + '<div class="selection-title"><span class="selection-icon">' + template.icon + '</span><div><h3>' + escape(item.name)
      + '</h3><p>' + escape(template.label) + '</p></div></div></div>'
      + appearance + sizing + (item.type === 'presenceSwitch' ? trackingInspector(item, escape, entityOptions) : '')
      + link + '<button type="button" class="danger-button" data-action="delete">Remove object</button>';
  }

  window.RoomcraftObjectControls = {
    isBindingKey: key => bindingKeys.has(key),
    validBinding, propertyUpdate, presenceCalibration, effectiveTapAction, effectiveHoldAction,
    normalizeEntityOptions, manualDashboardElements, manualYaml, poseUpdate, renderInspector, visualKind
  };
})();
