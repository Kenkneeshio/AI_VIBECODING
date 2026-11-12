import { ExtrudeGeometry, Shape } from 'three';
import '../public/model-library.js';

const PLAY_YARD_COLORS = ['#e9a1ad', '#f4eee0', '#b7cf84', '#e8d081', '#80b7ce', '#b993c7'];
const FOAM_COLORS = ['#e9ad9c', '#e2cb87', '#9db9a3'];
const FIRE_TILE = ['#725746', '#8d6b55', '#65534b', '#91755f'];
const FOAM_FORMS = new Set(['wedge', 'ramp', 'arch', 'tunnel']);

function face(p, shape, depth, material, x, y, z, bevel = 0) {
  const geometry = new ExtrudeGeometry(shape, {
    depth, curveSegments: 10, steps: 1, bevelEnabled: bevel > 0,
    bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2,
  });
  geometry.translate(0, 0, -depth / 2);
  return p.part(geometry, material, x, y, z);
}

function panelPainter(p, x, z, angle) {
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  const at = (offset, depth) => [x + offset * cosine + depth * sine, z - offset * sine + depth * cosine];
  return {
    box(offset, y, depth, w, h, d, tint, radius = 0) {
      const [px, pz] = at(offset, depth);
      p.box(px, y, pz, w, h, d, tint, radius, angle);
    },
    bead(offset, y, depth, radius, tint) {
      const [px, pz] = at(offset, depth);
      p.oval(px, y, pz, radius, radius, radius, tint);
    },
  };
}

function moldedPanel(p, x, z, angle, span, height, thickness, tint, trim) {
  const panel = panelPainter(p, x, z, angle);
  const wall = thickness * .43;
  const rail = height * .10;
  const shoulder = span * .40;
  panel.box(0, height - rail, 0, span * .98, rail, wall, tint, rail * .43);
  panel.box(0, 0, 0, span * .99, rail, wall, tint, rail * .34);
  for (const edge of [-1, 1]) {
    panel.box(edge * shoulder, rail * .65, 0, span * .17, height * .83, wall, tint, 3);
    panel.box(edge * span * .475, height * .30, 0, span * .055, height * .17, wall * 1.14, trim, 1.4);
    panel.box(edge * span * .23, height * .17, 0, span * .10, height * .55, wall * .84, tint, 2.1);
    panel.bead(edge * span * .088, height * .61, wall * .33, Math.min(height, span) * .05, tint);
    panel.bead(edge * span * .043, height * .53, wall * .49, Math.min(height, span) * .018, trim);
  }
  panel.box(0, height * .27, 0, span * .20, height * .46, wall * .96, tint, 3.4);
  panel.box(0, height * .43, wall * .52, span * .088, height * .066, wall * .15, trim, 1.3);
}

function safetyEnclosure(p, w, d, palette, colorful) {
  const height = Math.min(38, Math.min(w, d) * .30);
  const { specialtyBarrierSections } = (typeof window === 'undefined' ? globalThis : window).RoomcraftModels;
  for (const [index, [x, z, span, wall, angle]] of specialtyBarrierSections('playpen', w, d).entries()) {
    const count = index >= 2 ? 3 : 4;
    const panel = span / count;
    for (let i = 0; i < count; i++) {
      const along = -panel * (count - 1) / 2 + i * panel;
      const tint = colorful ? PLAY_YARD_COLORS[(i + index * 2) % PLAY_YARD_COLORS.length]
        : i % 2 ? palette.accent : palette.base;
      moldedPanel(p, x + along * Math.cos(angle), z + along * Math.sin(angle),
        -angle, panel, height, wall, tint, '#c1b9b0');
    }
  }
  return height;
}

function safetyPanel(p, w, d, { form, palette }) {
  if (form === 'photoPlayYard' || form === 'playpen') {
    return safetyEnclosure(p, w, d, palette, form === 'photoPlayYard');
  }
  if (form === 'photoBearPanel') {
    const height = Math.min(37, w * .42);
    moldedPanel(p, 0, 0, 0, w, height, d, palette.base, palette.dark);
    return height;
  }
  if (form === 'gate' || form === 'guard') {
    const height = Math.min(37, w * .32);
    const thickness = Math.min(d * .55, height * .28);
    for (const side of [-1, 1]) {
      p.box(side * w * .46, 0, 0, w * .07, height, thickness, palette.dark, 1.5);
      p.box(side * w * .46, height * .08, 0, w * .08, height * .08, d * .73, palette.base, 1.4);
    }
    for (const y of [height * .11, height * .88]) {
      p.box(0, y, 0, w * .88, height * .085, thickness * .74, palette.accent, 1.2);
    }
    const count = form === 'guard' ? 13 : 8;
    for (let i = 0; i < count; i++) {
      const x = w * (.79 * i / (count - 1) - .395);
      p.box(x, height * .16, 0, w * .027, height * .77, thickness * .47, palette.base, .8);
    }
    p.box(w * .39, height * .74, thickness * .30, w * .09, height * .11, thickness * .53, palette.detail, 1.7);
    return height;
  }
  const folding = form === 'folding';
  const height = Math.min(folding ? 39 : 29, w * .28);
  const colors = [palette.base, palette.accent, palette.detail];
  const { specialtyBarrierSections } = (typeof window === 'undefined' ? globalThis : window).RoomcraftModels;
  const sections = specialtyBarrierSections(form, w, d);
  for (const [i, [x, z, span, thickness, angle]] of sections.entries()) {
    const panel = panelPainter(p, x, z, -angle);
    panel.box(0, 0, 0, span * .955, height, thickness, palette.dark, 3.7);
    panel.box(0, height * .07, thickness * .14, span * .87, height * .86, thickness * .87, colors[i % 3], 3.4);
    if (form === 'quilted') {
      for (const x of [-.26, 0, .26]) {
        panel.box(x * span, height * .16, thickness * .59, span * .22, height * .67,
          thickness * .09, palette.base, 2.6);
      }
    }
    if (folding && i < sections.length - 1) {
      panel.box(span * .48, height * .38, 0, span * .09, height * .24, thickness * .92, palette.dark, 1.2);
    }
  }
  return height;
}

function foamProfile(w, h, arched, low) {
  const shape = new Shape();
  if (!arched) {
    shape.moveTo(-w / 2, 0);
    shape.lineTo(w / 2, 0);
    shape.lineTo(w / 2, h);
    shape.lineTo(-w / 2, h * (low ? .18 : .08));
  } else {
    shape.moveTo(-w / 2, 0);
    shape.lineTo(-w / 2, h * .34);
    shape.bezierCurveTo(-w / 2, h * 1.18, w / 2, h * 1.18, w / 2, h * .34);
    shape.lineTo(w / 2, 0);
    shape.lineTo(w * .29, 0);
    shape.lineTo(w * .29, h * .32);
    shape.bezierCurveTo(w * .29, h * .83, -w * .29, h * .83, -w * .29, h * .32);
    shape.lineTo(-w * .29, 0);
  }
  shape.closePath();
  return shape;
}

function foam(p, w, d, { type, form, palette }) {
  const compact = Math.min(w, d);
  const colors = type.endsWith('-rainbow') ? FOAM_COLORS : [palette.accent, palette.base, palette.dark];
  if (form === 'steps') {
    const height = Math.min(44, compact * .48);
    const stride = w / 3;
    for (let i = 0; i < 3; i++) {
      const x = stride * (i - 1);
      const step = height * (i + 1) / 3;
      p.box(x, 0, 0, stride * .98, step, d * .94, colors[i], 3.7);
      p.box(x, step * .86, 0, stride * .96, step * .055, d * .945, palette.detail, 1.1);
    }
    return height;
  }
  if (FOAM_FORMS.has(form)) {
    const arched = form === 'arch' || form === 'tunnel';
    const low = form === 'ramp';
    const height = Math.min(arched ? 53 : low ? 28 : 44, compact * (arched ? .65 : low ? .32 : .49));
    const profile = foamProfile(w * .91, height, arched, low);
    const seam = Math.min(1.4, compact * .021);
    const middle = form === 'tunnel' ? d * .83 : d * .73;
    face(p, profile, middle, colors[1], 0, seam, 0, seam);
    for (const side of [-1, 1]) {
      face(p, profile, seam, colors[side < 0 ? 0 : 2], 0, seam, side * middle * .50, seam * .54);
    }
    return height + seam * 2;
  }
  const height = Math.min(46, compact * .62);
  p.box(0, 0, 0, w * .95, height, d * .95, palette.base, 5);
  p.box(0, height * .08, 0, w * .959, height * .07, d * .959, palette.dark, 1.8);
  p.box(0, height * .87, 0, w * .955, height * .055, d * .955, palette.accent, 1.5);
  return height;
}

function fireplaceScreen(p, w, d, palette) {
  const height = Math.min(38, w * .35);
  const depth = Math.min(d * .31, w * .065);
  p.box(0, 2, 0, w * .95, height * .92, depth * .35, '#33343a', 2);
  for (const x of [-.47, .47]) {
    p.box(w * x, 0, 0, w * .035, height, depth, palette.dark, 1.8);
    p.box(w * x, 0, 0, w * .068, height * .08, d * .74, palette.dark, 1.3);
  }
  for (let i = -5; i <= 5; i++) {
    p.box(w * i * .077, 2, depth * .25, w * .008, height * .85, depth * .15, palette.accent, .42);
  }
  for (const y of [.06, .28, .51, .74, .96]) {
    p.box(0, height * y, depth * .3, w * .93, height * (y === .96 ? .06 : .027),
      depth * .21, palette.base, .55);
  }
  return height;
}

function fireplace(p, w, d, { form, palette }) {
  if (form === 'screen') return fireplaceScreen(p, w, d, palette);
  const tiled = form === 'photoTiledMantel';
  const mantel = form !== 'hearth';
  const height = Math.min(mantel ? 54 : 39, w * .37);
  const recess = d * .16;
  const surround = tiled ? '#e6ded0' : palette.base;
  const tray = mantel ? palette.accent : palette.dark;
  const fireboxW = w * .59;
  const fireboxH = height * .57;
  p.box(0, 0, d * .05, w * .96, height * .09, d * .83, surround, 2.6);
  p.box(0, height * .08, -d * .28, w * .87, height * .81, d * .27, palette.dark, 2.2);
  p.box(0, height * .09, -d * .12, fireboxW, fireboxH, d * .12, '#29272b', 1.7);
  for (const side of [-1, 1]) {
    p.box(side * w * .383, height * .08, -recess, w * .135, height * .78, d * .35, surround, 2.7);
    p.box(side * w * .30, height * .11, -recess * .03, w * .014, fireboxH, d * .04, '#bc925f', .75);
  }
  p.box(0, height * .65, -recess, w * .78, height * .20, d * .35, surround, 2.6);
  if (tiled || !mantel) {
    const tileWidth = w * .095;
    for (let i = -4; i <= 4; i++) {
      p.box(i * tileWidth, height * .68, -d * .014, tileWidth * .94, height * .146, d * .077,
        tiled ? FIRE_TILE[(i + 4) % FIRE_TILE.length] : palette.accent, 1);
    }
  }
  p.box(0, height * .84, -d * .14, w * .90, height * .09, d * .43, tray, 2.1);
  p.box(0, height * .93, -d * .12, w * .99, height * .075, d * .51, tiled ? '#f3ece3' : palette.detail, 1.8);
  for (let i = -1; i <= 1; i++) {
    p.box(i * w * .11, height * (.13 + Math.abs(i) * .02), d * .03, w * .25, height * .065,
      d * .10, i ? '#785141' : '#ad7e5b', 1.7, i * .36);
  }
  return height;
}

function upholsteredSeat(p, w, d, { form, palette }) {
  const size = Math.min(w, d);
  if (form === 'photoBolster') {
    const height = Math.min(25, size * .62);
    p.box(0, 0, 0, w * .96, height, d * .91, palette.base, height * .37);
    for (const side of [-1, 1]) {
      p.box(side * w * .39, height * .12, 0, w * .017, height * .78, d * .94, palette.accent, 2.3);
    }
    return height;
  }
  const height = Math.min(31, size * .41);
  p.disc(0, 0, 0, w * .43, height * .17, d * .43, palette.dark, .94);
  p.oval(0, height * .48, 0, w * .48, height * .47, d * .48, palette.base);
  p.ring(0, height * .40, 0, w * .477, d * .477, Math.min(1.1, size * .025), palette.accent);
  p.oval(0, height * .82, 0, w * .26, height * .10, d * .26, palette.accent);
  return height;
}

function wallDecor(p, w, d, type, mountY) {
  const isMirror = type === 'mirror';
  const height = Math.min(isMirror ? 45 : 39, Math.max(6, d * .66));
  const bottom = Number.isFinite(mountY) ? Math.max(0, mountY - height / 2) : 0;
  const thickness = Math.min(5.5, d * .27);
  const faceZ = thickness * .56;
  p.box(0, bottom, 0, w * .95, height, thickness, isMirror ? '#8b6b54' : '#694e3e', 2.7);
  p.box(0, bottom + height * .065, faceZ, w * .89, height * .87, thickness * .26,
    isMirror ? '#d8b88e' : '#ead8b8', 1.4);
  const interior = w * .81;
  const innerHeight = height * .73;
  const innerY = bottom + height * .14;
  p.box(0, innerY, faceZ * 1.31, interior, innerHeight, thickness * .16,
    isMirror ? '#a7c4ce' : '#c4d3b6', 1.15);
  const accent = new Shape();
  if (isMirror) {
    accent.moveTo(-interior * .45, 0);
    accent.lineTo(-interior * .19, 0);
    accent.lineTo(interior * .14, innerHeight);
    accent.lineTo(-interior * .02, innerHeight);
  } else {
    accent.moveTo(-interior / 2, 0);
    accent.lineTo(-interior / 2, innerHeight * .19);
    accent.quadraticCurveTo(-interior * .28, innerHeight * .86, -interior * .07, innerHeight * .40);
    accent.quadraticCurveTo(interior * .24, innerHeight * .18, interior / 2, innerHeight * .48);
    accent.lineTo(interior / 2, 0);
  }
  accent.closePath();
  face(p, accent, thickness * .035, isMirror ? '#e5eff0' : '#759899', 0, innerY, faceZ * 1.49);
  if (!isMirror) {
    p.oval(interior * .28, innerY + innerHeight * .76, faceZ * 1.51, innerHeight * .10, innerHeight * .10,
      thickness * .045, '#f0cb8c');
  }
  return bottom + height;
}

export function drawStorybookSpecialty(p, w, d, template, { mountY } = {}) {
  switch (template?.artFamily) {
    case 'paddedPanel': return safetyPanel(p, w, d, template);
    case 'foamBlock': return foam(p, w, d, template);
    case 'fireplace': return fireplace(p, w, d, template);
    case 'playFurniture':
      if (template.form === 'softPouf' || template.form === 'photoBolster') return upholsteredSeat(p, w, d, template);
      break;
    default:
      if (template?.type === 'artwork' || template?.type === 'mirror') {
        return wallDecor(p, w, d, template.type, mountY);
      }
  }
  return undefined;
}
