import assert from 'node:assert/strict';
import test from 'node:test';
import {createStorybookNarrator} from '../ha-local/storybook-demo-narration.mjs';

function browserVoice() {
  const events = [];
  const local = {localService:true, lang:'en-US'};
  const host = {
    SpeechSynthesisUtterance: class { constructor(text) { this.text = text; } },
    speechSynthesis: {
      speak(speech) { events.push(speech); },
      cancel() { events.push('cancel'); },
      getVoices() { return [{localService:false, lang:'en-US'}, local]; },
    },
  };
  return {host, events, local};
}

test('a supported narrator speaks only in a started demo and replaces stale speech', () => {
  const {host, events, local} = browserVoice();
  const narrator = createStorybookNarrator(host);
  assert.equal(narrator.available, true);
  narrator.speak('intro', 'Roomcraft');
  assert.equal(events.length, 0);
  narrator.start();
  narrator.speak('intro', 'Roomcraft');
  narrator.speak('intro', 'Roomcraft');
  assert.equal(events.length, 1);
  assert.equal(events[0].voice, local);
  assert.equal(events[0].text, 'Roomcraft');
  narrator.speak('weather', 'Live weather');
  assert.equal(events[1], 'cancel');
  assert.equal(events[2].text, 'Live weather');
  events[0].onend();
  narrator.stop();
  assert.equal(events[3], 'cancel');
  narrator.speak('later', 'Should remain silent');
  assert.equal(events.length, 4);
});

test('muting interrupts narration and unmuting speaks the current cue once', () => {
  const {host, events} = browserVoice();
  const narrator = createStorybookNarrator(host);
  narrator.start({muted:true});
  narrator.speak('intro', 'Roomcraft');
  narrator.speak('weather', 'Live weather');
  assert.equal(events.length, 0);
  narrator.setMuted(false);
  assert.equal(events[0].text, 'Live weather');
  narrator.setMuted(true);
  assert.equal(events[1], 'cancel');
  narrator.setMuted(false);
  assert.equal(events[2].text, 'Live weather');
  events[2].onend();
  narrator.setMuted(true);
  narrator.setMuted(false);
  assert.equal(events.length, 3);
  narrator.stop();
  assert.equal(events.length, 3);
});

test('unsupported or rejected speech stays safe for caption-only playback', () => {
  const unsupported = createStorybookNarrator({});
  assert.equal(unsupported.available, false);
  unsupported.start();
  unsupported.speak('intro', 'Roomcraft');
  unsupported.stop();
  const {host} = browserVoice();
  host.speechSynthesis.speak = () => { throw new Error('Speech unavailable'); };
  const denied = createStorybookNarrator(host);
  denied.start();
  assert.doesNotThrow(() => denied.speak('intro', 'Roomcraft'));
  assert.doesNotThrow(() => denied.stop());
});

const track = {
  trackUrl: './demo-narration-v1.mp3',
  cues: [
    {id: 'intro', text: 'Roomcraft', startMs: 0, durationMs: 1100},
    {id: 'lamps', text: 'Lamps', startMs: 1400, durationMs: 950},
    {id: 'weather', text: 'Weather', startMs: 2700, durationMs: 1800},
  ],
};

function browserAudio(base = {}, ready = true) {
  const actions = [];
  const timers = new Map();
  const instances = [];
  let nextTimer = 0;
  class Media {
    constructor(src) {
      this.src = src;
      this.readyState = ready ? 1 : 0;
      this.position = 0;
      this.duration = ready ? 5 : NaN;
      this.paused = true;
      this.playbackRate = 1;
      this.seeking = false;
      this.listeners = new Map();
      instances.push(this);
    }
    set currentTime(value) {
      if (!this.readyState && value !== 0) throw new Error('No metadata');
      this.position = value;
      actions.push(['seek', value]);
    }
    get currentTime() { return this.position; }
    play() {
      this.paused = false;
      actions.push(['play', this.position]);
      return this.pending ?? Promise.resolve();
    }
    pause() {
      this.paused = true;
      actions.push('pause');
    }
    addEventListener(event, listener) { this.listeners.set(event, listener); }
    removeEventListener(event, listener) {
      if (this.listeners.get(event) === listener) this.listeners.delete(event);
    }
    emit(event) { this.listeners.get(event)?.(); }
  }
  const host = {
    ...base,
    Audio: Media,
    setTimeout(callback, delay) {
      const id = ++nextTimer;
      timers.set(id, {callback, delay});
      return id;
    },
    clearTimeout(id) { timers.delete(id); },
  };
  return {host, actions, timers, instances};
}

test('bundled narration starts synchronously and seeks skipped cues on one audio element', async () => {
  const {host, actions, timers, instances} = browserAudio();
  const narrator = createStorybookNarrator(host, track);
  assert.equal(narrator.available, true);
  const [audio] = instances;
  assert.equal(audio.preload, 'auto');
  assert.equal(audio.src, track.trackUrl);
  narrator.speak('intro', 'Roomcraft');
  assert.deepEqual(actions, []);
  narrator.start();
  narrator.speak('intro', 'Roomcraft');
  assert.deepEqual(actions, [['seek', 0], ['play', 0]]);
  narrator.speak('intro', 'Roomcraft');
  assert.equal(actions.length, 2);
  narrator.speak('weather', 'Weather');
  assert.deepEqual(actions.slice(2), ['pause', ['seek', 2.7], ['play', 2.7]]);
  assert.equal(instances.length, 1);
  await Promise.resolve();
  assert.equal(timers.size, 1);
  assert.ok(Math.abs([...timers.values()][0].delay - 1800) < .0001);
  // Native timeupdate can be sparse. The segment still stops during a long
  // chapter hold because its own boundary timer monitors actual playback.
  audio.position = 4.5;
  [...timers.values()][0].callback();
  assert.equal(audio.paused, true);
  assert.equal(timers.size, 0);
  assert.equal(audio.listeners.size, 0);
  narrator.speak('weather', 'Weather');
  assert.equal(actions.at(-1), 'pause');
  narrator.stop();
});

test('muting pauses media and unmuting resumes the current segment without restarting it', async () => {
  const {host, actions, timers, instances} = browserAudio();
  const narrator = createStorybookNarrator(host, track);
  const [audio] = instances;
  narrator.start({muted: true});
  narrator.speak('intro', 'Roomcraft');
  assert.deepEqual(actions, []);
  narrator.setMuted(false);
  audio.position = .48;
  audio.emit('timeupdate');
  narrator.setMuted(true);
  assert.equal(audio.paused, true);
  assert.equal(timers.size, 0);
  narrator.setMuted(false);
  assert.deepEqual(actions.slice(-2), [['seek', .48], ['play', .48]]);
  audio.position = 1.1;
  audio.emit('timeupdate');
  narrator.setMuted(true);
  narrator.setMuted(false);
  assert.equal(actions.at(-1), 'pause');
  narrator.setMuted(true);
  narrator.speak('lamps', 'Lamps');
  narrator.speak('weather', 'Weather');
  narrator.setMuted(false);
  assert.deepEqual(actions.slice(-2), [['seek', 2.7], ['play', 2.7]]);
  narrator.stop();
  await Promise.resolve();
  assert.equal(audio.paused, true);
  assert.equal(audio.listeners.size, 0);
  assert.equal(timers.size, 0);
});

test('metadata and pending play events cannot affect a replacement cue or a stopped demo', async () => {
  const {host, actions, timers, instances} = browserAudio({}, false);
  const narrator = createStorybookNarrator(host, track);
  const [audio] = instances;
  let rejectIntro;
  audio.pending = new Promise((_, reject) => { rejectIntro = reject; });
  narrator.start();
  narrator.speak('intro', 'Roomcraft');
  const staleMetadata = audio.listeners.get('loadedmetadata');
  audio.pending = undefined;
  narrator.speak('weather', 'Weather');
  assert.deepEqual(actions.at(-1), ['play', 0]);
  rejectIntro(new Error('Superseded intro'));
  await Promise.resolve();
  audio.readyState = 1;
  audio.duration = 5;
  staleMetadata();
  assert.equal(audio.position, 0);
  audio.emit('loadedmetadata');
  assert.equal(audio.position, 2.7);
  assert.equal(timers.size, 1);
  const staleUpdate = audio.listeners.get('timeupdate');
  narrator.stop();
  staleMetadata();
  staleUpdate();
  assert.equal(audio.paused, true);
  assert.equal(audio.listeners.size, 0);
  assert.equal(timers.size, 0);
});

test('failed bundled audio falls back to browser speech and retries media in a new demo', async () => {
  const {host: voice, events} = browserVoice();
  const {host, actions, timers, instances} = browserAudio(voice);
  const narrator = createStorybookNarrator(host, track);
  const [audio] = instances;
  audio.pending = Promise.reject(new Error('Media unavailable'));
  narrator.start();
  narrator.speak('intro', 'Roomcraft');
  await Promise.resolve();
  assert.equal(audio.paused, true);
  assert.equal(audio.listeners.size, 0);
  assert.equal(timers.size, 0);
  assert.equal(events[0].text, 'Roomcraft');
  narrator.speak('weather', 'Weather');
  assert.equal(events[1], 'cancel');
  assert.equal(events[2].text, 'Weather');
  assert.equal(actions.filter(action => action[0] === 'play').length, 1);
  audio.pending = undefined;
  narrator.start();
  narrator.speak('weather', 'Weather');
  assert.deepEqual(actions.slice(-2), [['seek', 2.7], ['play', 2.7]]);
  narrator.stop();
  await Promise.resolve();
  assert.equal(audio.paused, true);
});
