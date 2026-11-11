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
