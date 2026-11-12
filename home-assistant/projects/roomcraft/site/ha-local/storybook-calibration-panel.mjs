import {fitRadarCalibration} from './storybook-radar-calibration.mjs';

const SAMPLE_TARGET = 3;
const SAMPLE_ATTEMPTS = 11;
const MAX_POINTS = 12;
const RADAR = /^sensor\.[a-z0-9_]+$/;

const median = values => values.slice().sort((a, b) => a - b)[Math.floor(values.length / 2)];

/** Estimate a stable point from three distinct reports, never a cached target. */
export async function captureRadarPoint(read, sleep, now = Date.now, active = () => true) {
  const started = now();
  const positions = [];
  const observed = new Set();
  let targetId;
  for (let attempt = 0; attempt < SAMPLE_ATTEMPTS && active(); attempt++) {
    if (attempt) await sleep(700);
    if (!active()) return {error: 'Capture canceled.'};
    const state = await read();
    const {observed_at: time, tracks} = state?.attributes ?? {};
    if (!Number.isFinite(time) || time < started - 500 || time > now() + 1000 || observed.has(time)) continue;
    observed.add(time);
    if (tracks?.length > 1) return {error: 'More than one radar target was detected. Clear the room and try again.'};
    if (state.state !== '1' || tracks?.length !== 1) continue;
    const {id, x, y} = tracks[0];
    if (![x, y].every(value => Number.isFinite(value) && Math.abs(value) <= 800)) continue;
    if (targetId !== undefined && id !== targetId) return {error: 'The radar switched targets. Stay still and try again.'};
    targetId = id;
    positions.push({x, y});
    if (positions.length < SAMPLE_TARGET) continue;
    const point = {x: median(positions.map(p => p.x)), y: median(positions.map(p => p.y))};
    if (positions.some(p => Math.hypot(p.x - point.x, p.y - point.y) > 40)) {
      return {error: 'These readings moved too far apart. Hold still on the marked spot and try again.'};
    }
    return {point};
  }
  return {error: 'Too few fresh position reports. Check the radar reporting state and try a spot closer to the switch.'};
}

function drawSurvey(canvas, project, sensor, picked, samples, solution) {
  const ctx = canvas.getContext('2d');
  if (!ctx || !project) return;
  ctx.fillStyle = '#e8eddf';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (const room of project.rooms) {
    ctx.beginPath();
    room.points.forEach(({x, y}, index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.closePath();
    ctx.fillStyle = room.outdoor || room.surface === 'patio' ? '#d8dfca' : '#f6e7cc';
    ctx.strokeStyle = '#c9b496';
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.stroke();
  }
  for (const item of project.items) {
    if (!/sofa|sectional|diningTable|desk|counter|worktop|bed/i.test(item.type)) continue;
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation * Math.PI / 180);
    ctx.fillStyle = '#c8b095';
    ctx.fillRect(-item.w / 2, -item.h / 2, item.w, item.h);
    ctx.restore();
  }
  ctx.lineWidth = 9;
  ctx.strokeStyle = '#4f6159';
  for (const wall of project.walls) {
    ctx.beginPath();
    ctx.moveTo(wall.x1, wall.y1);
    ctx.lineTo(wall.x2, wall.y2);
    ctx.stroke();
  }
  ctx.textAlign = 'center';
  ctx.font = 'bold 25px sans-serif';
  ctx.fillStyle = '#40473a';
  for (const room of project.rooms) {
    if (room.label) ctx.fillText(room.name, room.label.x, room.label.y, 250);
  }
  const marker = (point, color, label) => {
    if (!point) return;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 19, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillText(label, point.x, point.y + 8);
  };
  marker(sensor, '#714985', 'R');
  samples.forEach(({plan, radar}, index) => {
    if (solution?.transform) {
      const [a, b, c, d, e, f] = solution.transform;
      const x = a * radar.x + b * radar.y + c;
      const y = d * radar.x + e * radar.y + f;
      ctx.strokeStyle = '#ae5339';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(plan.x, plan.y);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      ctx.stroke();
    }
    marker(plan, '#376555', String(index + 1));
  });
  marker(picked, '#855f2f', '+');
}

export function mountRadarCalibration(document, host, {api, bridge}) {
  const dialog = document.getElementById('radarCalibrationDialog');
  if (!dialog) return null;
  const canvas = document.getElementById('radarCalibrationPlan');
  const field = name => dialog.querySelector(`[data-survey="${name}"]`);
  const xInput = field('x');
  const yInput = field('y');
  const distance = field('distance');
  const status = field('status');
  const quality = field('quality');
  const points = field('points');
  const capture = field('capture');
  const undo = field('undo');
  const apply = field('apply');
  const sleep = ms => new Promise(resolve => host.setTimeout(resolve, ms));
  let project, sensor, picked, solution;
  let samples = [];
  let generation = 0;
  let busy = false;

  function update() {
    solution = samples.length >= 3 ? fitRadarCalibration(samples) : undefined;
    capture.disabled = busy || !picked || !bridge?.request || !RADAR.test(sensor?.presenceTrackEntityId ?? '') || samples.length >= MAX_POINTS;
    undo.disabled = busy || !samples.length;
    apply.disabled = busy || !solution?.transform;
    const rows = samples.map(({plan}, index) => {
      const row = document.createElement('li');
      row.textContent = `Point ${index + 1} · ${plan.x}, ${plan.y}`;
      return row;
    });
    points.replaceChildren(...rows);
    let result = solution?.error ?? '';
    if (solution?.transform) {
      const {pixelsPerMetre, rmsCm, maxErrorCm, validationCm, origin} = solution;
      result = `${pixelsPerMetre.toFixed(1)} plan px/m · ${Math.round(rmsCm)} cm fit error · ${Math.round(maxErrorCm)} cm worst point.`;
      if (Number.isFinite(validationCm)) result += ` Independent check ${Math.round(validationCm)} cm.`;
      else result += ' Add a fourth point to check the result.';
      const offset = Math.hypot(origin.x - sensor.x, origin.y - sensor.y) * 100 / pixelsPerMetre;
      if (offset > 40) result += ` Fitted sensor origin is ${Math.round(offset)} cm from its map marker.`;
      if (distance.valueAsNumber > 0) {
        const [first, second] = samples;
        const tapeScale = Math.hypot(first.plan.x - second.plan.x, first.plan.y - second.plan.y) / distance.valueAsNumber;
        result += ` Tape measure gives ${tapeScale.toFixed(1)} plan px/m between points 1 and 2.`;
      }
    }
    quality.textContent = result;
    drawSurvey(canvas, project, sensor, picked, samples, solution);
  }

  function fromInputs() {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    picked = Number.isFinite(x) && Number.isFinite(y) && x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height
      ? {x: Math.round(x), y: Math.round(y)} : undefined;
    update();
  }

  function open(event) {
    if (!event.target.closest?.('[data-radar-calibration]')) return;
    const selected = api.getSelection();
    project = api.getProject();
    sensor = selected?.kind === 'item' ? project.items.find(item => item.id === selected.id && item.type === 'presenceSwitch') : null;
    if (!sensor) return;
    generation++;
    samples = [];
    picked = undefined;
    busy = false;
    xInput.value = yInput.value = distance.value = '';
    status.textContent = !bridge?.request ? 'Open Studio from Home Assistant to capture live radar points.' :
      RADAR.test(sensor.presenceTrackEntityId ?? '') ? 'Choose a location to begin.' : 'Link a radar targets entity first.';
    dialog.showModal();
    update();
  }

  document.addEventListener('click', open);
  canvas.addEventListener('click', event => {
    if (busy) return;
    const rect = canvas.getBoundingClientRect();
    xInput.value = Math.round((event.clientX - rect.left) * canvas.width / rect.width);
    yInput.value = Math.round((event.clientY - rect.top) * canvas.height / rect.height);
    fromInputs();
  });
  xInput.addEventListener('input', fromInputs);
  yInput.addEventListener('input', fromInputs);
  distance.addEventListener('input', update);
  capture.addEventListener('click', async () => {
    if (capture.disabled) return;
    busy = true;
    const started = generation;
    const entity = sensor.presenceTrackEntityId;
    const plan = picked;
    status.textContent = 'Waiting for three fresh reports. Hold still on the chosen point.';
    update();
    let result;
    try {
      result = await captureRadarPoint(async () => (await bridge.request('TRACK_GET', [entity]))?.[entity], sleep,
        Date.now, () => started === generation && dialog.open);
    } catch {
      result = {error: 'Home Assistant could not read the radar. Check the connection and retry.'};
    }
    if (started !== generation || !dialog.open) return;
    busy = false;
    if (result.point) {
      samples.push({plan, radar: result.point});
      xInput.value = yInput.value = '';
      picked = undefined;
    }
    status.textContent = result.error ?? `Captured point ${samples.length}. Choose another location.`;
    update();
  });
  undo.addEventListener('click', () => { samples.pop(); update(); });
  apply.addEventListener('click', () => {
    if (!solution?.transform) return;
    if (api.setRadarCalibration(sensor.id, sensor.presenceTrackEntityId, solution.transform)) dialog.close();
    else status.textContent = 'The radar source changed. Reopen calibration for the current sensor.';
  });
  dialog.addEventListener('close', () => { generation++; });
  return {dispose() { generation++; document.removeEventListener('click', open); if (dialog.open) dialog.close(); }};
}
