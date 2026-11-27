export function bindRenderStream(card) {
  const root = card.shadowRoot;
  const dialog = root.querySelector('.render-stream-dialog');
  const endpoint = dialog.querySelector('input');
  const status = dialog.querySelector('[role=status]');
  const keep = dialog.querySelector('[data-stream-keep]');
  const video = card.stage.querySelector('.render-stream-video');
  let active;

  function stop(message = '') {
    const session = active;
    active = undefined;
    if (session) {
      clearInterval(session.timer);
      session.abort.abort();
      session.peer.close();
      if (session.resource) fetch(session.resource, {method:'DELETE'}).catch(() => {});
    }
    video.srcObject = null;
    card.world.removeAttribute('data-render-stream');
    keep.disabled = true;
    status.textContent = message;
    card.anchorDirty = true;
    card.schedule();
  }

  async function start() {
    stop();
    let url;
    let peer;
    try {
      url = new URL(endpoint.value);
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error();
      peer = new RTCPeerConnection();
    } catch {
      status.textContent = 'Enter a valid HTTP or HTTPS WHEP stream endpoint.';
      return;
    }
    const abort = new AbortController();
    const deadline = performance.now() + 10_000;
    const session = {peer, abort, deadline, confirmed:false, lastTime:0, lastFrame:performance.now()};
    active = session;
    session.timer = setInterval(() => {
      const now = performance.now();
      if (video.currentTime > session.lastTime) {
        session.lastTime = video.currentTime;
        session.lastFrame = now;
        card.world.setAttribute('data-render-stream','');
      }
      if (!session.confirmed && now >= deadline) {
        stop('Preview expired. Local rendering restored.');
      } else if (session.confirmed && now-session.lastFrame > 4000) {
        stop('Stream paused or disconnected. Local rendering restored.');
      } else if (!session.confirmed) {
        keep.disabled = !session.lastTime;
        status.textContent = `Keep this stream within ${Math.ceil((deadline-now)/1000)} seconds.`;
      }
    }, 150);
    peer.ontrack = event => {
      if (active !== session) return;
      video.srcObject = new MediaStream([event.track]);
      video.play().catch(() => {});
    };
    try {
      peer.addTransceiver('video', {direction:'recvonly'});
      await peer.setLocalDescription(await peer.createOffer());
      await new Promise(resolve => {
        const done = () => {
          peer.removeEventListener('icegatheringstatechange', check);
          abort.signal.removeEventListener('abort',done);
          resolve();
        };
        const check = () => { if (peer.iceGatheringState === 'complete') done(); };
        peer.addEventListener('icegatheringstatechange',check);
        abort.signal.addEventListener('abort',done,{once:true});
        if (abort.signal.aborted) done();
        else check();
      });
      if (active !== session) return;
      const response = await fetch(url, {method:'POST', headers:{'Content-Type':'application/sdp'},
        body:peer.localDescription.sdp, signal:abort.signal});
      if (!response.ok) throw new Error();
      const location = response.headers.get('Location');
      if (location) {
        const resource = new URL(location, response.url || url);
        if (resource.origin === url.origin) session.resource = resource.href;
      }
      await peer.setRemoteDescription({type:'answer',sdp:await response.text()});
    } catch {
      if (active === session) stop('Stream could not connect. Local rendering restored.');
    }
  }

  root.querySelector('.open-render-stream').onclick = () => {
    card.setMainMenu(false,true);
    dialog.show();
  };
  dialog.querySelector('[data-stream-start]').onclick = start;
  dialog.querySelector('[data-stream-stop]').onclick = () => stop('Local rendering restored.');
  dialog.querySelector('[data-stream-close]').onclick = () => dialog.close();
  keep.onclick = () => {
    if (!active?.lastTime) return;
    if (performance.now() >= active.deadline) {
      stop('Preview expired. Local rendering restored.');
      return;
    }
    active.confirmed = true;
    keep.disabled = true;
    status.textContent = 'Stream active on this device.';
    dialog.close();
  };
  dialog.addEventListener('close', () => { if (active && !active.confirmed) stop(); });
  root.querySelector('.quick-free-view').addEventListener('click', () => {
    if (active) stop('Free view uses local rendering.');
  }, {capture:true});
  return {stop, get playing() {return card.world.hasAttribute('data-render-stream');}};
}
