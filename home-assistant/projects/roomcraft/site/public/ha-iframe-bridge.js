// The HA-hosted editor runs in a same-origin iframe or in a tab opened by
// the Roomcraft Lovelace card. That card owns the authenticated `hass`
// connection. No HA credential is copied here or stored in the layout draft.
(() => {
  'use strict';
  if (!location.pathname.startsWith('/local/roomcraft/')) return;
  const host = parent !== window ? parent : window.opener;
  if (!host) return;

  const pending = new Map();
  let sequence = 0;

  window.addEventListener('message', event => {
    if (event.origin !== location.origin || event.source !== host) return;
    const message = event.data;
    if (!message || message.channel !== 'roomcraft-ha' || message.kind !== 'response') return;
    const task = pending.get(message.id);
    if (!task) return;
    pending.delete(message.id);
    clearTimeout(task.timeout);
    if (message.ok) task.resolve(message.data);
    else {
      const error = new Error(message.error || 'Home Assistant transfer failed');
      if (Number.isInteger(message.status)) error.status = message.status;
      task.reject(error);
    }
  });

  window.RoomcraftDashboardBridge = {
    request(method, payload) {
      if (method !== 'GET' && method !== 'POST') {
        return Promise.reject(new Error('Unsupported dashboard operation'));
      }
      const id = ++sequence;
      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          pending.delete(id);
          reject(new Error('Home Assistant did not answer the editor'));
        }, method === 'GET' ? 15000 : 70000);
        pending.set(id, { resolve, reject, timeout });
        if (host.closed) {
          clearTimeout(timeout);
          pending.delete(id);
          reject(new Error('The Home Assistant Studio tab is closed'));
          return;
        }
        host.postMessage({ channel: 'roomcraft-ha', kind: 'request', id, method, payload }, location.origin);
      });
    },
  };
})();
