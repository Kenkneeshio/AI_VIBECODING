/** Explicit wall-clock anchor keeps decorative stories advancing across reloads.
 * Preview/demo have an isolated elapsed clock; paused tabs cannot accumulate work.
 */
export function createWorldClock() {
  let epoch, anchor = 0, previewStart, held, paused = false;
  return (seconds, {epochSeconds, preview = false, transientTelemetry = false, reduceMotion = false} = {}) => {
    const time = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
    if (!transientTelemetry && Number.isFinite(epochSeconds) && epochSeconds !== epoch) { epoch = epochSeconds; anchor = time; }
    if (preview && previewStart === undefined) previewStart = time;
    else if (!preview) previewStart = undefined;
    const value = preview ? Math.max(0, time - previewStart) : transientTelemetry ? time
      : Number.isFinite(epoch) ? epoch + Math.max(0, time - anchor) : time;
    if (!reduceMotion || !paused) held = value;
    paused = reduceMotion;
    return held;
  };
}
