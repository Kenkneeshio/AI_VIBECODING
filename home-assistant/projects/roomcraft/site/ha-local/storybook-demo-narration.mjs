/** Speak the scripted demo through an available browser speech voice. */
export function createStorybookNarrator(host = globalThis) {
  const engine = host.speechSynthesis;
  const Utterance = host.SpeechSynthesisUtterance;
  const available = typeof Utterance === 'function' &&
    typeof engine?.speak === 'function' && typeof engine?.cancel === 'function';
  let active = false;
  let muted = false;
  let current;
  let cue;
  let spoken;

  function cancelCurrent() {
    if (!current) return;
    current = undefined;
    try { engine.cancel(); } catch { /* Captions continue independently. */ }
  }

  function playCue() {
    if (!available || !active || muted || !cue || cue.id === spoken) return;
    spoken = cue.id;
    cancelCurrent();
    try {
      const speech = new Utterance(cue.text);
      speech.lang = 'en-US';
      speech.rate = 1.2;
      const voices = engine.getVoices?.() ?? [];
      const localVoice = voices.find(voice => voice.localService && /^en(?:-|$)/i.test(voice.lang));
      if (localVoice) speech.voice = localVoice;
      const finish = () => { if (current === speech) current = undefined; };
      speech.onend = speech.onerror = finish;
      current = speech;
      engine.speak(speech);
    } catch {
      current = undefined;
    }
  }

  function stop() {
    active = false;
    cue = spoken = undefined;
    cancelCurrent();
  }

  return {
    available,
    start({muted: silent = false} = {}) {
      stop();
      muted = Boolean(silent);
      active = true;
    },
    speak(id, text) {
      if (!active || typeof text !== 'string' || !text || id === cue?.id) return;
      cue = {id, text};
      playCue();
    },
    setMuted(value) {
      const silent = Boolean(value);
      if (silent === muted) return;
      muted = silent;
      if (muted) {
        if (current) spoken = undefined;
        cancelCurrent();
      } else {
        playCue();
      }
    },
    stop,
  };
}
