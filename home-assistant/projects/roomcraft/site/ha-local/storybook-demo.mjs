import {normalizeCameraView} from './storybook-camera.mjs';

const moveMs = 900;
const shots = [
  {beat: 'overview', duration: 2300, title: 'Roomcraft in motion', azimuth: 0, tilt: 21, zoom: .96,
    caption: 'A simulated preview of your live home.', narration: 'Your live home in miniature.'},
  {beat: 'presence', duration: 3500, title: 'Presence characters', azimuth: 5, tilt: 31, zoom: 2.85,
    caption: 'Radar targets appear as animated characters.'},
  {beat: 'lamps', duration: 3000, title: 'Lights on and off', azimuth: 349, tilt: 34, zoom: 3.15,
    caption: 'Tap a lamp. Its glow follows the switch.'},
  {beat: 'fan', duration: 3000, title: 'Fan and light', azimuth: 8, tilt: 17, zoom: 3.25,
    caption: 'The fan and its light respond independently.'},
  {beat: 'vacuum', duration: 3000, title: 'Robot on the move', azimuth: 0, tilt: 25, zoom: 2.8,
    caption: 'Available position readings move the miniature vacuum.'},
  {beat: 'garage', duration: 3000, title: 'Garage door', azimuth: 343, tilt: 41, zoom: 3.35,
    caption: 'The shutter follows the reported garage door state.'},
  {beat: 'habitat', duration: 3000, title: 'Life indoors', azimuth: 5, tilt: 32, zoom: 3.5,
    caption: 'Indoor controls animate with their connected devices.'},
  {beat: 'beach', duration: 3000, title: 'Beach and boats', azimuth: 3, tilt: 25, zoom: 2.85, target: 'beach',
    fallback: 'coast', caption: 'Beach games and boats animate the coast.'},
  {beat: 'weather', duration: 16000, title: 'Sky and reflections', azimuth: 0, tilt: 28, zoom: 2.05, target: 'coast'},
  {beat: 'traffic', duration: 3200, title: 'Street and sidewalk', azimuth: 4, tilt: 33, zoom: 3.1, target: 'road',
    caption: 'Fresh commute readings shape traffic when available.'},
  {beat: 'finale', duration: 2000, title: 'Back to your live home', caption: 'Back to your live home.'},
];

const weatherCues = [
  {at: 0, id: 'weather-sky', text: 'Live weather shapes the sky and its reflection.'},
  {at: 4000, id: 'weather-effects', text: 'Watch the coast change through clouds, wind, rain and snow.'},
  {at: 11200, id: 'weather-moon', text: 'At night, each moon phase appears in the sky and water.'},
];

export const DEMO_DURATION_MS = shots.reduce((total, shot) => total + shot.duration, 0);

function narrationFor(shot, time) {
  if (shot.beat === 'weather') {
    const {id, text} = weatherCues.findLast(cue => cue.at <= time) ?? weatherCues[0];
    return {cueId: id, caption: text, narration: text};
  }
  return {cueId: shot.beat, caption: shot.caption, narration: shot.narration ?? shot.caption};
}

export function createStorybookDemo(initialView, resolveFocus = () => null) {
  const initial = normalizeCameraView(initialView);
  const initialShot = {view: initial, zoom: initial.zoom, focus: null};
  const configured = shots.map(shot => ({
    ...shot,
    view: shot.zoom ? normalizeCameraView({...shot, preset: initial.preset}) : initial,
    zoom: shot.zoom ?? initial.zoom,
    focus: shot.zoom ? resolveFocus(shot.target ?? shot.beat) ?? (shot.fallback ? resolveFocus(shot.fallback) : null) : null,
  }));
  // Give optional shots' time to the features present in the published layout.
  const featured = configured.filter(shot => shot.focus);
  const available = configured.filter(shot => shot.focus || ['overview', 'finale'].includes(shot.beat));
  const extendable = featured.filter(shot => shot.beat !== 'weather');
  const holds = extendable.length ? extendable : featured;
  const extra = featured.length
    ? (DEMO_DURATION_MS - available.reduce((total, shot) => total + shot.duration, 0)) / holds.length : 0;
  let end = 0;
  const chapters = (featured.length ? available : configured.filter(shot => !shot.focus)).map(shot => {
    const start = end;
    end += shot.duration + (holds.includes(shot) ? extra : 0);
    return {...shot, start, end};
  });

  return function sample(elapsedMs, {reducedMotion = false} = {}) {
    const time = Math.min(DEMO_DURATION_MS, Math.max(0, elapsedMs || 0));
    const index = chapters.findIndex(shot => time < shot.end);
    const to = chapters[index < 0 ? chapters.length - 1 : index];
    const from = chapters[index - 1] ?? initialShot;
    const amount = Math.min(1, (time - to.start) / moveMs);
    const ease = amount * amount * (3 - 2 * amount);
    const pose = reducedMotion ? initialShot : interpolateShot(from, to, ease);
    const beatTimeMs = time - to.start;
    return {...pose, ...narrationFor(to, beatTimeMs), title: to.title, beat: to.beat, beatTimeMs, elapsedMs: time,
      progress: time / DEMO_DURATION_MS, done: time === DEMO_DURATION_MS};
  };
}

function interpolateShot(from, to, amount) {
  const lerp = (a, b) => a + (b - a) * amount;
  const turn = ((to.view.azimuth - from.view.azimuth + 540) % 360) - 180;
  const left = from.focus ?? to.focus;
  const right = to.focus ?? from.focus;
  const weight = lerp(Number(Boolean(from.focus)), Number(Boolean(to.focus)));
  return {
    view: normalizeCameraView({
      preset: from.view.preset,
      azimuth: from.view.azimuth + turn * amount,
      tilt: lerp(from.view.tilt, to.view.tilt),
      zoom: lerp(from.view.zoom, to.view.zoom),
    }),
    zoom: lerp(from.zoom, to.zoom),
    focus: weight && left && right ? {x: lerp(left.x, right.x), y: lerp(left.y, right.y),
      z: lerp(left.z, right.z), weight} : null,
  };
}
