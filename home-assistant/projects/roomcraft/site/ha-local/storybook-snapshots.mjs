import {readDashboardSnapshots, restoreDashboardDesign, stableDashboardJson} from './dashboard-snapshots.mjs';

export const SNAPSHOT_DIALOG_MARKUP = `
  <dialog class="snapshot-dialog" aria-labelledby="snapshot-title">
    <header><h2 id="snapshot-title">Layout snapshots</h2><button type="button" class="snapshot-close">Close</button></header>
    <p>Restore an earlier layout and keep the current one in the history.</p>
    <form class="snapshot-form">
      <label for="snapshot-choice">Previous layout</label>
      <select id="snapshot-choice" required></select>
      <button type="submit" class="snapshot-restore" disabled>Restore layout</button>
    </form>
    <p class="snapshot-status" role="status"></p>
  </dialog>`;

export function bindSnapshotDialog(card) {
  const root = card.shadowRoot;
  const button = root.querySelector('.open-snapshots');
  const dialog = root.querySelector('.snapshot-dialog');
  const close = root.querySelector('.snapshot-close');
  const form = root.querySelector('.snapshot-form');
  const select = form.querySelector('select');
  const restore = form.querySelector('button');
  const status = root.querySelector('.snapshot-status');
  const timeFormat = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'medium'});
  let run;
  let busy = false;

  const canAccess = () => card.dashboard === 'roomcraft-home' &&
    card.session?.connected === true && card.session?.user?.is_admin === true;
  const active = request => card.isConnected && canAccess() && dialog.open && request === run &&
    card.session.connection === request.session.connection;
  const read = request => request.session.callWS({type: 'lovelace/config', url_path: request.dashboard});

  function show(config, message) {
    run.config = config;
    run.snapshots = readDashboardSnapshots(config);
    select.replaceChildren(...run.snapshots.map(({savedAt}, index) =>
      new Option(timeFormat.format(new Date(savedAt)), String(index))));
    form.hidden = run.snapshots.length === 0;
    restore.disabled = form.hidden || busy;
    status.textContent = message || (form.hidden ? 'No previous layouts yet. Publishing a changed layout saves the prior one.' : '');
  }

  button.addEventListener('click', async () => {
    if (!canAccess() || dialog.open || busy) return;
    card.setMainMenu(false, true);
    const request = {session: card.session, dashboard: card.dashboard};
    run = request;
    form.hidden = true;
    status.textContent = 'Loading snapshots…';
    dialog.showModal();
    try {
      const config = await read(request);
      if (active(request)) show(config);
    } catch {
      if (active(request)) status.textContent = 'Could not load snapshots. Close and try again.';
    }
  });

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('cancel', event => { if (busy) event.preventDefault(); });
  dialog.addEventListener('close', () => { if (!dialog.open) run = undefined; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const request = run;
    if (busy || !request?.snapshots || !active(request)) return;
    const index = Number(select.value);
    const snapshot = request.snapshots[index];
    if (!snapshot) return;
    const next = restoreDashboardDesign(request.config, index, new Date().toISOString());
    if (!next) return;

    busy = close.disabled = restore.disabled = select.disabled = true;
    status.textContent = 'Checking snapshot…';
    let saveStarted = false;
    try {
      const image = await request.session.fetchWithAuth(snapshot.plan.image, {signal: AbortSignal.timeout(10_000)});
      image.body?.cancel().catch(() => {});
      if (!active(request)) return;
      if (!image.ok || !image.headers.get('Content-Type')?.startsWith('image/')) {
        status.textContent = 'This snapshot’s image is unavailable. Choose another snapshot.';
        return;
      }
      const latest = await read(request);
      if (!active(request)) return;
      if (stableDashboardJson(latest) !== stableDashboardJson(request.config)) {
        show(latest, 'The dashboard changed. Review the refreshed snapshots before restoring.');
        return;
      }
      status.textContent = 'Restoring layout…';
      saveStarted = true;
      await request.session.callWS({type: 'lovelace/config/save', url_path: request.dashboard, config: next});
      const saved = await read(request);
      if (!active(request)) return;
      if (stableDashboardJson(saved) !== stableDashboardJson(next)) throw new Error('Snapshot readback did not match.');
      dialog.close();
      card.defaultStatus.textContent = 'Layout restored';
      card.reset();
      card.load();
    } catch {
      if (!active(request)) return;
      status.textContent = saveStarted ? 'Could not verify the restore. Close and reopen to check the current layout.' :
        'Could not check this snapshot. Try again.';
      if (saveStarted) form.hidden = true;
    } finally {
      busy = close.disabled = select.disabled = false;
      restore.disabled = form.hidden;
    }
  });

  return {
    sync() {
      button.hidden = !canAccess();
      if (button.hidden && dialog.open) dialog.close();
    },
    disconnect() { if (dialog.open) dialog.close(); },
  };
}
