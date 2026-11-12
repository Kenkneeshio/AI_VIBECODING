((root) => {
  'use strict';

  const activationServices = new Map([
    ['scene', 'turn_on'], ['script', 'turn_on'], ['button', 'press'], ['input_button', 'press'],
  ]);
  const automaticToggle = new Set(['light', 'switch', 'fan', 'input_boolean', 'cover']);
  const toggleDomains = new Set([...automaticToggle, 'automation', 'climate', 'humidifier',
    'media_player', 'remote', 'script', 'siren', 'valve']);
  const domainFor = entityId => String(entityId || '').split('.')[0].toLowerCase();

  function supports(action, entityId, services) {
    const domain = domainFor(entityId);
    if (action === 'activate') return activationServices.has(domain);
    if (action === 'toggle') {
      return services ? Object.hasOwn(services[domain] || {}, 'toggle') : toggleDomains.has(domain);
    }
    return true;
  }

  function resolve(action, gesture, targetId, stateId, services) {
    if (!action || action === 'auto') {
      const domain = domainFor(targetId);
      if (gesture === 'hold') return 'more-info';
      if (domain === 'vacuum' && targetId === stateId) return 'vacuum-panel';
      if (activationServices.has(domain)) return 'activate';
      action = automaticToggle.has(domain) ? 'toggle' : 'more-info';
    }
    return supports(action, targetId, services) ? action : 'more-info';
  }

  root.RoomcraftControlActions = Object.freeze({
    supports, resolve, activationService: domain => activationServices.get(domain),
  });
})(typeof window === 'undefined' ? globalThis : window);
