function bundledMedia(host, trackUrl, cues) {
  const segments = new Map();
  for (const entry of Array.isArray(cues) ? cues : []) {
    const {id, text, startMs, durationMs} = entry ?? {};
    if (typeof id !== 'string' || !id || !Number.isFinite(startMs) || startMs < 0 ||
        !Number.isFinite(durationMs) || durationMs <= 0 || !Number.isFinite(startMs + durationMs)) continue;
    segments.set(id, {text, start: startMs / 1000, end: (startMs + durationMs) / 1000});
  }
  if (typeof host.Audio !== 'function' || typeof trackUrl !== 'string' || !trackUrl || !segments.size) return {};
  try {
    const audio = new host.Audio(trackUrl);
    if (typeof audio.play !== 'function' || typeof audio.pause !== 'function' ||
        typeof audio.addEventListener !== 'function' || typeof audio.removeEventListener !== 'function') return {};
    audio.preload = 'auto';
    return {audio, segments};
  } catch {
    return {};
  }
}

const HAVE_METADATA = 1;
const BOUNDARY_TOLERANCE = .004;

/** Prefer the reusable bundled track, with browser speech as an optional fallback. */
export function createStorybookNarrator(host = globalThis, {trackUrl, cues} = {}) {
  const engine = host.speechSynthesis;
  const Utterance = host.SpeechSynthesisUtterance;
  const voiceAvailable = typeof Utterance === 'function' &&
    typeof engine?.speak === 'function' && typeof engine?.cancel === 'function';
  const {audio, segments} = bundledMedia(host, trackUrl, cues);
  const schedule = host.setTimeout?.bind(host) ?? setTimeout;
  const cancelTimer = host.clearTimeout?.bind(host) ?? clearTimeout;
  let active = false;
  let muted = false;
  let currentSpeech;
  let currentMedia;
  let cue;
  let spoken;
  let mediaFailed = false;

  function pauseAudio() {
    try { audio.pause(); } catch { /* Captions continue independently. */ }
  }

  function stopMedia() {
    const media = currentMedia;
    if (!media) return;
    currentMedia = undefined;
    cancelTimer(media.timer);
    for (const [type, listener] of media.listeners) audio.removeEventListener(type, listener);
    pauseAudio();
  }

  function stopSpeech() {
    if (!currentSpeech) return;
    currentSpeech = undefined;
    try { engine.cancel(); } catch { /* Captions continue independently. */ }
  }

  function playSpeech() {
    if (!voiceAvailable || !cue.text) return;
    try {
      const speech = new Utterance(cue.text);
      speech.lang = 'en-US';
      speech.rate = 1.2;
      const voices = engine.getVoices?.() ?? [];
      const localVoice = voices.find(voice => voice.localService && /^en(?:-|$)/i.test(voice.lang));
      if (localVoice) speech.voice = localVoice;
      const finish = () => { if (currentSpeech === speech) currentSpeech = undefined; };
      speech.onend = speech.onerror = finish;
      currentSpeech = speech;
      engine.speak(speech);
    } catch {
      currentSpeech = undefined;
    }
  }

  function playMedia(segment) {
    const start = cue.offset ?? segment.start;
    const media = {segment, start, waitingForMetadata: audio.readyState < HAVE_METADATA, listeners: []};
    currentMedia = media;
    const isCurrent = () => currentMedia === media && active && !muted;
    const fail = () => {
      if (!isCurrent()) return;
      mediaFailed = true;
      stopMedia();
      playSpeech();
    };
    const checkBoundary = () => {
      if (!isCurrent()) return;
      cancelTimer(media.timer);
      if (media.waitingForMetadata || audio.seeking || !Number.isFinite(audio.currentTime)) return;
      const remaining = segment.end - audio.currentTime;
      if (remaining <= BOUNDARY_TOLERANCE) stopMedia();
      else if (!audio.paused) {
        const rate = Number.isFinite(audio.playbackRate) && audio.playbackRate > 0 ? audio.playbackRate : 1;
        media.timer = schedule(checkBoundary, Math.max(10, remaining * 1000 / rate));
      }
    };
    const seek = () => {
      if (!isCurrent()) return;
      media.waitingForMetadata = audio.readyState < HAVE_METADATA;
      if (Number.isFinite(audio.duration) && audio.duration > 0 && start >= audio.duration) {
        fail();
        return;
      }
      try { audio.currentTime = start; } catch {
        // Browsers may defer seeking until loadedmetadata. Start play in
        // the click handler anyway so Android can grant media activation.
        if (!media.waitingForMetadata) fail();
      }
    };
    const listen = (type, listener) => {
      audio.addEventListener(type, listener);
      media.listeners.push([type, listener]);
    };
    listen('loadedmetadata', () => {
      if (!isCurrent()) return;
      if (media.waitingForMetadata) seek();
      checkBoundary();
    });
    for (const event of ['playing', 'timeupdate', 'seeked', 'ratechange']) listen(event, checkBoundary);
    listen('error', fail);
    listen('ended', () => { if (isCurrent()) stopMedia(); });

    if (audio.error) return fail();
    seek();
    if (!isCurrent()) return;
    try {
      const pending = audio.play();
      checkBoundary();
      pending?.then?.(() => {
        if (isCurrent()) checkBoundary();
        else if (!currentMedia) pauseAudio();
      }, fail);
    } catch {
      fail();
    }
  }

  function playCue() {
    if (!active || muted || !cue || cue.id === spoken) return;
    spoken = cue.id;
    stopMedia();
    stopSpeech();
    const segment = segments?.get(cue.id);
    if (segment && !mediaFailed) playMedia(segment);
    else playSpeech();
  }

  function stop() {
    active = false;
    cue = spoken = undefined;
    stopMedia();
    stopSpeech();
  }

  return {
    available: Boolean(audio) || voiceAvailable,
    start({muted: silent = false} = {}) {
      stop();
      mediaFailed = false;
      muted = Boolean(silent);
      active = true;
    },
    speak(id, text) {
      if (!active || id === cue?.id) return;
      const fallback = segments?.get(id)?.text;
      const line = typeof text === 'string' && text ? text : typeof fallback === 'string' ? fallback : '';
      if (!line && !segments?.has(id)) return;
      cue = {id, text: line};
      playCue();
    },
    setMuted(value) {
      const silent = Boolean(value);
      if (silent === muted) return;
      muted = silent;
      if (muted) {
        if (currentMedia) {
          const {start, segment, waitingForMetadata} = currentMedia;
          const position = waitingForMetadata || audio.seeking || !Number.isFinite(audio.currentTime)
            ? start : Math.max(start, audio.currentTime);
          if (position < segment.end - BOUNDARY_TOLERANCE) {
            cue.offset = position;
            spoken = undefined;
          }
        } else if (currentSpeech) spoken = undefined;
        stopMedia();
        stopSpeech();
      } else {
        playCue();
      }
    },
    stop,
  };
}
