import {normalizeCameraView} from './storybook-camera.mjs';

const moveMs = 900;
const shots = [
  {beat: 'overview', duration: 1500, title: 'Roomcraft in motion', azimuth: 0, tilt: 21, zoom: .96},
  {beat: 'presence', duration: 3700, title: 'Presence characters', azimuth: 5, tilt: 31, zoom: 2.85},
  {beat: 'lamps', duration: 3100, title: 'Lights on and off', azimuth: 349, tilt: 34, zoom: 3.15},
  {beat: 'fan', duration: 3000, title: 'Fan and light', azimuth: 8, tilt: 17, zoom: 3.25},
  {beat: 'vacuum', duration: 3100, title: 'Robot on the move', azimuth: 0, tilt: 25, zoom: 2.8},
  {beat: 'garage', duration: 2900, title: 'Garage door', azimuth: 343, tilt: 41, zoom: 3.35},
  {beat: 'habitat', duration: 3000, title: 'Life indoors', azimuth: 5, tilt: 32, zoom: 3.5},
  {beat: 'weather', duration: 3900, title: 'Boats and reflections', azimuth: 0, tilt: 28, zoom: 2.05, target: 'coast'},
  {beat: 'traffic', duration: 3900, title: 'Street and sidewalk', azimuth: 4, tilt: 33, zoom: 3.1, target: 'road'},
  {beat: 'finale', duration: 1900, title: 'Back to your live home'},
];

export const DEMO_DURATION_MS = shots.reduce((total, shot) => total + shot.duration, 0);

export function createStorybookDemo(initialView, resolveFocus = () => null) {
  const initial = normalizeCameraView(initialView);
  const initialShot = {view: initial, zoom: initial.zoom, focus: null};
  const configured = shots.map(shot => ({
    ...shot,
    view: shot.zoom ? normalizeCameraView({...shot, preset: initial.preset}) : initial,
    zoom: shot.zoom ?? initial.zoom,
    focus: shot.zoom ? resolveFocus(shot.target ?? shot.beat) : null,
  }));
  // Give optional shots' time to the features present in the published layout.
  const featured = configured.filter(shot => shot.focus);
  const available = configured.filter(shot => shot.focus || ['overview', 'finale'].includes(shot.beat));
  const extra = featured.length
    ? (DEMO_DURATION_MS - available.reduce((total, shot) => total + shot.duration, 0)) / featured.length : 0;
  let end = 0;
  const chapters = (featured.length ? available : configured.filter(shot => !shot.focus)).map(shot => {
    const start = end;
    end += shot.duration + (shot.focus ? extra : 0);
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
    return {...pose, title: to.title, beat: to.beat, beatTimeMs: time - to.start, elapsedMs: time,
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
