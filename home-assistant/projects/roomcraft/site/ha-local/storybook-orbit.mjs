import {normalizeCameraView} from './storybook-camera.mjs';

const ORBIT_DEGREES_PER_PIXEL = 0.35;
const KEY_STEP = 7.5;
const MIN_PINCH_DISTANCE = 8;

/** Attach camera gestures to the rendered canvas so controls above it receive their own input. */
export function bindFreeViewGestures(element, {getView, onChange, canStart = () => true}) {
  const pointers = new Map();
  const activeView = () => {
    const view = getView();
    return view?.preset === 'free' ? view : null;
  };
  const pinchDistance = () => {
    const [first, second] = pointers.values();
    return Math.hypot(first.x - second.x, first.y - second.y);
  };

  function change(view, patch) {
    const next = normalizeCameraView({...view, ...patch});
    if (next.azimuth !== view.azimuth || next.tilt !== view.tilt || next.zoom !== view.zoom) onChange(next);
  }

  function release(pointerId) {
    if (element.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
  }

  function cancel() {
    for (const id of [...pointers.keys()]) {
      pointers.delete(id);
      release(id);
    }
  }

  function onPointerDown(event) {
    if (!activeView() || event.defaultPrevented || event.button !== 0 || !canStart(event)) return;
    const touch = event.pointerType === 'touch';
    if (pointers.size >= 2 || (pointers.size && (!touch || !pointers.values().next().value.touch))) return;
    try {
      element.setPointerCapture(event.pointerId);
    } catch {
      return;
    }
    if (!pointers.size) element.focus({preventScroll: true});
    pointers.set(event.pointerId, {x: event.clientX, y: event.clientY, touch});
    event.preventDefault();
  }

  function onPointerMove(event) {
    const previous = pointers.get(event.pointerId);
    if (!previous) return;
    const view = activeView();
    if (!view) {
      cancel();
      return;
    }
    const pinching = pointers.size === 2;
    const previousDistance = pinching ? pinchDistance() : 0;
    const next = {x: event.clientX, y: event.clientY, touch: previous.touch};
    pointers.set(event.pointerId, next);
    event.preventDefault();
    if (pinching) {
      const distance = pinchDistance();
      if (Math.min(previousDistance, distance) >= MIN_PINCH_DISTANCE) {
        change(view, {zoom: view.zoom * distance / previousDistance});
      }
      return;
    }
    change(view, {
      azimuth: view.azimuth - (next.x - previous.x) * ORBIT_DEGREES_PER_PIXEL,
      tilt: view.tilt + (next.y - previous.y) * ORBIT_DEGREES_PER_PIXEL,
    });
  }

  function onPointerEnd(event) {
    if (pointers.delete(event.pointerId)) release(event.pointerId);
  }

  function onWheel(event) {
    const view = activeView();
    if (!view || !Number.isFinite(event.deltaY) || !event.deltaY) return;
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientHeight : 1;
    const pixels = Math.max(-350, Math.min(350, event.deltaY * unit));
    event.preventDefault();
    event.stopPropagation();
    change(view, {zoom: view.zoom * Math.exp(-pixels * .002)});
  }

  function onKeyDown(event) {
    const view = activeView();
    if (!view || event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) return;
    let patch;
    switch (event.key) {
      case 'ArrowLeft': patch = {azimuth: view.azimuth - KEY_STEP}; break;
      case 'ArrowRight': patch = {azimuth: view.azimuth + KEY_STEP}; break;
      case 'ArrowUp': patch = {tilt: view.tilt - KEY_STEP}; break;
      case 'ArrowDown': patch = {tilt: view.tilt + KEY_STEP}; break;
      case '+': case '=': patch = {zoom: view.zoom * 1.1}; break;
      case '-': patch = {zoom: view.zoom / 1.1}; break;
      default: return;
    }
    event.preventDefault();
    event.stopPropagation();
    change(view, patch);
  }

  const listeners = [
    ['pointerdown', onPointerDown],
    ['pointermove', onPointerMove],
    ['pointerup', onPointerEnd],
    ['pointercancel', onPointerEnd],
    ['lostpointercapture', onPointerEnd],
    ['wheel', onWheel, {passive: false}],
    ['keydown', onKeyDown],
  ];
  for (const [type, listener, options] of listeners) element.addEventListener(type, listener, options);
  return {
    cancel,
    dispose() {
      cancel();
      for (const [type, listener, options] of listeners) element.removeEventListener(type, listener, options);
    },
  };
}
