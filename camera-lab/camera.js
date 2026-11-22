const get = id => document.getElementById(id);
const camera = get("camera");
const status = get("status");
const toggle = get("toggle");
const canvas = get("preview");
const ctx = canvas.getContext("2d");
const {width, height} = canvas;
const input = new OffscreenCanvas(width, height).getContext("2d", {willReadFrequently: true});
const output = ctx.createImageData(width, height);
const sliders = [
  ["left", "Crop left", 0, 45], ["right", "Crop right", 0, 45],
  ["top", "Crop top", 0, 45], ["bottom", "Crop bottom", 0, 45],
  ["x", "Horizontal skew", -40, 40], ["y", "Vertical skew", -40, 40],
  ["lens", "Lens correction", -50, 50], ["motion", "Motion highlight threshold (0 = off)", 0, 100],
];
const settings = {};
let generation = 0;
let running = false;
let prior = null;
let request;
let timer;

function key() {
  return "camera-lab:v1:" + camera.value;
}
function load() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key())) || {}; } catch {}
  for (const [id, , min, max] of sliders) {
    settings[id].value = Math.max(min, Math.min(max, Number(saved[id]) || 0));
    settings[id].dispatchEvent(new Event("input"));
  }
  prior = null;
}
for (const [id, title, min, max] of sliders) {
  const label = document.createElement("label");
  const name = document.createElement("span");
  const range = document.createElement("input");
  Object.assign(range, {type: "range", min, max, value: 0});
  settings[id] = range;
  range.oninput = () => {
    name.textContent = title + " · " + range.value;
    prior = null;
  };
  range.onchange = () => {
    try {
      localStorage.setItem(key(), JSON.stringify(Object.fromEntries(
        Object.entries(settings).map(([name, field]) => [name, field.value])
      )));
    } catch { status.textContent = "Could not save adjustments on this device."; }
  };
  range.oninput();
  label.append(name, range);
  get("controls").append(label);
}

function draw(bitmap) {
  input.fillStyle = "#101822";
  input.fillRect(0, 0, width, height);
  const scale = Math.min(width / bitmap.width, height / bitmap.height);
  const w = bitmap.width * scale;
  const h = bitmap.height * scale;
  input.drawImage(bitmap, (width - w) / 2, (height - h) / 2, w, h);
  const pixels = input.getImageData(0, 0, width, height).data;
  const v = Object.fromEntries(Object.entries(settings).map(([key, field]) => [key, Number(field.value)]));
  const data = output.data;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const x = (col + .5) / width * 2 - 1;
      const y = (row + .5) / height * 2 - 1;
      const radial = 1 + v.lens / 100 * (x * x + y * y);
      const u = (1 + x * radial + y * v.x / 100) / 2;
      const t = (1 + y * radial + x * v.y / 100) / 2;
      const sx = Math.floor((width - w) / 2 + w * (v.left / 100 + u * (1 - (v.left + v.right) / 100)));
      const sy = Math.floor((height - h) / 2 + h * (v.top / 100 + t * (1 - (v.top + v.bottom) / 100)));
      const dst = 4 * (row * width + col);
      const src = 4 * (sy * width + sx);
      const valid = u >= 0 && u < 1 && t >= 0 && t < 1 && sx >= 0 && sx < width && sy >= 0 && sy < height;
      const moved = valid && prior && v.motion > 0 && (
        Math.abs(pixels[src] - prior[src]) + Math.abs(pixels[src + 1] - prior[src + 1]) +
        Math.abs(pixels[src + 2] - prior[src + 2])
      ) > 3 * v.motion;
      data[dst] = moved ? 255 : valid ? pixels[src] : 16;
      data[dst + 1] = moved ? 194 : valid ? pixels[src + 1] : 24;
      data[dst + 2] = moved ? 48 : valid ? pixels[src + 2] : 34;
      data[dst + 3] = 255;
    }
  }
  prior = pixels;
  ctx.putImageData(output, 0, 0);
}

async function tick(id) {
  if (id !== generation || !running || document.hidden) return;
  request = new AbortController();
  try {
    const response = await fetch("./frame/" + encodeURIComponent(camera.value), {signal: request.signal});
    if (!response.ok) throw new Error();
    const bitmap = await createImageBitmap(await response.blob());
    try {
      if (id === generation) {
        draw(bitmap);
        status.textContent = "Live snapshot preview · up to 2 frames/sec";
      }
    } finally { bitmap.close(); }
  } catch {
    if (id === generation) {
      prior = null;
      status.textContent = "Camera image unavailable. Retrying…";
    }
  }
  if (id === generation) timer = setTimeout(() => tick(id), 500);
}

function restart() {
  generation++;
  clearTimeout(timer);
  request?.abort();
  ctx.clearRect(0, 0, width, height);
  prior = null;
  if (running && !document.hidden) tick(generation);
}
camera.onchange = () => { load(); restart(); };
get("reset").onclick = () => {
  try { localStorage.removeItem(key()); } catch {}
  load();
};
toggle.onclick = () => {
  running = !running;
  toggle.textContent = running ? "Stop preview" : "Start preview";
  status.textContent = running ? "Connecting…" : "Preview stopped.";
  restart();
};
document.addEventListener("visibilitychange", restart);
try {
  const response = await fetch("./cameras");
  if (!response.ok) throw new Error();
  for (const entity of await response.json()) camera.add(new Option(entity, entity));
  toggle.disabled = !camera.length;
  status.textContent = camera.length ? "Select a camera and start the preview." : "Add camera entities in the app configuration.";
  load();
} catch {
  status.textContent = "Could not load camera configuration.";
}
