import {normalizeCameraView} from './storybook-camera.mjs';

export const DEMO_DURATION_MS = 30_000;
const CHAPTER_MS = DEMO_DURATION_MS / 4;
const CAMERA_MOVE_MS = 3_250;

const CHAPTERS = [
  {
    title: 'Your home, live',
    description: 'Look around the illustrated floor plan.',
    pose: {azimuth: 0, tilt: 14, zoom: 0.98},
  },
  {
    title: 'Controls built into the scene',
    description: 'Connected lamps and fans show their live state right where they belong.',
    pose: {azimuth: -9, tilt: 30, zoom: 1},
  },
  {
    title: 'Weather and activity',
    description: 'Watch the sky and water change with the weather, and see activity from connected sensors.',
    pose: {azimuth: 8, tilt: 36, zoom: 0.94},
  },
  {
    title: 'The whole home',
    description: 'Open the menu to switch views or turn on object details.',
    pose: null,
  },
];

function glide(from, to, amount) {
  if (amount === 0) return from;
  if (amount === 1) return to;
  const turn = ((to.azimuth - from.azimuth + 540) % 360) - 180;
  const eased = amount * amount * (3 - 2 * amount);
  return normalizeCameraView({
    preset: from.preset,
    azimuth: from.azimuth + turn * eased,
    tilt: from.tilt + (to.tilt - from.tilt) * eased,
    zoom: from.zoom + (to.zoom - from.zoom) * eased,
  });
}

/** Sample the same guided tour at any elapsed time, independent of frame rate. */
export function sampleStorybookDemo(elapsedMs, initialView, {reducedMotion = false} = {}) {
  const time = Math.min(DEMO_DURATION_MS, Math.max(0, elapsedMs || 0));
  const chapterIndex = Math.min(CHAPTERS.length - 1, Math.floor(time / CHAPTER_MS));
  const {title, description, pose} = CHAPTERS[chapterIndex];
  const initial = normalizeCameraView(initialView);
  const amount = Math.min(1, (time - chapterIndex * CHAPTER_MS) / CAMERA_MOVE_MS);
  // Keep the original preset label for every presentation-only pose.
  const toView = chapterPose => chapterPose ? normalizeCameraView({...chapterPose, preset: initial.preset}) : initial;
  const view = reducedMotion ? initial : glide(toView(CHAPTERS[chapterIndex - 1]?.pose), toView(pose), amount);
  return {title, description, view, progress: time / DEMO_DURATION_MS, done: time === DEMO_DURATION_MS};
}
