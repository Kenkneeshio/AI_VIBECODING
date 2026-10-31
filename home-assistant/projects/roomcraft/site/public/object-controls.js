(() => {
  'use strict';

  const actions = new Set(['auto', 'toggle', 'activate', 'more-info', 'none']);
  const iconPattern = /^mdi:[a-z0-9-]+$/i;
  const bindingKeys = new Set(['tapAction', 'holdAction', 'tapEntityId', 'holdEntityId',
    'controlLabel', 'controlIcon']);
  const entityPattern = /^[a-z_]+\.[a-z0-9_]+$/i;
  const sceneWidth = 1536;
  const sceneHeight = 864;
  const sceneLeft = 0;
  const sceneTop = 80;

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

  function validBinding(item) {
    return (!('tapAction' in item) || actions.has(item.tapAction))
      && (!('holdAction' in item) || actions.has(item.holdAction))
      && (!('tapEntityId' in item) || typeof item.tapEntityId === 'string'
        && (!item.tapEntityId || entityPattern.test(item.tapEntityId)))
      && (!('holdEntityId' in item) || typeof item.holdEntityId === 'string'
        && (!item.holdEntityId || entityPattern.test(item.holdEntityId)))
      && (!('controlLabel' in item) || (typeof item.controlLabel === 'string' && item.controlLabel.length <= 80))
      && (!('controlIcon' in item) || (typeof item.controlIcon === 'string' && (!item.controlIcon || iconPattern.test(item.controlIcon))));
  }

  function propertyUpdate(key, rawValue) {
    if (!bindingKeys.has(key) || typeof rawValue !== 'string') return { valid: false };
    const value = rawValue.trim();
    if (key === 'tapAction' || key === 'holdAction') {
      return actions.has(value) ? { valid: true, value: value === 'auto' ? undefined : value } : { valid: false };
    }
    if (key === 'tapEntityId' || key === 'holdEntityId') {
      return !value || entityPattern.test(value) ? { valid: true, value: value || undefined } : { valid: false };
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
      roomcraft_tap_action: item.tapAction || 'auto',
      roomcraft_hold_action: item.holdAction || 'auto',
      ...(item.tapEntityId ? { roomcraft_tap_entity: item.tapEntityId } : {}),
      ...(item.holdEntityId ? { roomcraft_hold_entity: item.holdEntityId } : {}),
      style: dimensions(item, 4)
    }));
    const cameras = items.filter(item => item.type === 'cameraThumbnail').map(item => ({
      type: 'custom:roomcraft-camera-thumbnail',
      roomcraft_item_id: item.id,
      title: item.name || 'Camera',
      camera_entity: item.entityId || '',
      image_entity: item.imageEntityId || '',
      preview_mode: item.previewMode || 'event',
      style: dimensions(item, 3)
    }));
    const menu = {
      type: 'custom:roomcraft-entity-menu',
      roomcraft_menu: true,
      title: 'Devices and sensors',
      sections: [],
      bound_objects: linked.map(item => ({
        entity_id: item.entityId, label: item.controlLabel || item.name || item.entityId,
        icon: item.controlIcon || ''
      })),
      style: { left: '5.2%', top: '5.3%', 'z-index': 12 }
    };
    return [...independent, ...objects, ...cameras, menu];
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

  function actionField(key, label, current, autoLabel) {
    const options = [
      ['auto', autoLabel], ['toggle', 'Toggle device'], ['activate', 'Run scene, script, or button'],
      ['more-info', 'Open device details'], ['none', 'Do nothing']
    ];
    return '<div class="field"><label for="prop-' + key + '">' + label + '</label><select id="prop-' + key + '" data-prop="' + key + '">'
      + options.map(([value, name]) => '<option value="' + value + '"' + ((current || 'auto') === value ? ' selected' : '') + '>' + name + '</option>').join('')
      + '</select></div>';
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

  function renderInspector(item, template, field, variantField, escape, entityOptions = []) {
    const camera = item.type === 'cameraThumbnail';
    const zone = item.type === 'controlZone';
    const appearance = '<div class="inspector-block"><p class="inspector-label">APPEARANCE & POSITION</p>'
      + field('Name', 'name', item.name) + variantField(template, item.type)
      + '<div class="field-grid">' + field('X position', 'x', item.x, 'number') + field('Y position', 'y', item.y, 'number')
      + field('Width', 'w', item.w, 'number') + field('Depth', 'h', item.h, 'number') + '</div>'
      + field('Rotation (degrees)', 'rotation', item.rotation, 'number')
      + '<p class="field-hint">' + (zone
        ? 'This outline appears only while editing. Drag it over the artwork, then resize its corners to set the tappable area.'
        : 'Drag this object to move it; drag a corner handle to resize. Hold Shift while resizing to keep proportions.') + '</p>'
      + '<div class="inspector-actions"><button type="button" class="secondary-button" data-action="rotate">↻ Rotate 90°</button>'
      + '<button type="button" class="secondary-button" data-action="duplicate">▣ Duplicate</button></div></div>';
    let link;
    if (camera) {
      link = '<div class="inspector-block"><p class="inspector-label">CAMERA PREVIEW</p>'
        + entityField('Camera entity ID', 'entityId', item.entityId || '', entityOptions, 'camera', escape)
        + '<div class="field"><label for="prop-previewMode">Preview mode</label><select id="prop-previewMode" data-prop="previewMode">'
        + '<option value="event"' + ((item.previewMode || 'event') === 'event' ? ' selected' : '') + '>Latest event image</option>'
        + '<option value="live"' + (item.previewMode === 'live' ? ' selected' : '') + '>Live stream</option></select></div>'
        + entityField('Event image entity', 'imageEntityId', item.imageEntityId || '', entityOptions, 'image', escape)
        + '<p class="field-hint">The latest event image is a snapshot. Choose Live stream only when the camera feed is working.</p></div>';
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
        + entityField('Tap target (optional)', 'tapEntityId', item.tapEntityId || '', entityOptions, null, escape)
        + actionField('holdAction', 'Hold action', item.holdAction, 'Default · open device details')
        + entityField('Hold target (optional)', 'holdEntityId', item.holdEntityId || '', entityOptions, null, escape)
        + '<p class="field-hint">Search available devices by name or enter an entity ID. Automatic tap toggles lights, switches, and fans; runs scenes, scripts, and buttons; and opens details for other devices. The object name is the button label unless you set one above.'
        + ' Optional tap and hold targets let this object show one entity’s state while running a different scene, script, or button.'
        + (zone ? ' This area stays invisible on the dashboard.' : '') + '</p></div>';
    }
    return '<div class="inspector-block"><p class="inspector-label">SELECTED OBJECT</p>'
      + '<div class="selection-title"><span class="selection-icon">' + template.icon + '</span><div><h3>' + escape(item.name)
      + '</h3><p>' + escape(template.label) + '</p></div></div></div>'
      + appearance + link + '<button type="button" class="danger-button" data-action="delete">Remove object</button>';
  }

  window.RoomcraftObjectControls = {
    isBindingKey: key => bindingKeys.has(key),
    validBinding, propertyUpdate, effectiveTapAction, effectiveHoldAction,
    normalizeEntityOptions, manualDashboardElements, manualYaml, renderInspector
  };
})();
