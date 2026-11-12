import { CatmullRomCurve3, CylinderGeometry, DoubleSide, TubeGeometry, Vector3 } from 'three';

const linen = '#f7efdc';
const oak = '#cfa373';
const soil = '#625145';
const glass = '#b9dbe1';
const leaves = ['#5a815f', '#779d69', '#a4b379'];
const toys = ['#dc9f9d', '#a9baa2', '#e3c076', '#9db7cf', '#bba6cd'];

function arch(p, w, d, y, shade, acrossX) {
  const half = acrossX ? w * .40 : d * .39;
  const at = (i, h) => acrossX ? new Vector3(i * half, h, 0) : new Vector3(0, h, i * half);
  const path = new CatmullRomCurve3([at(-1, 3), at(-.66, y * .75), at(0, y), at(.66, y * .75), at(1, 3)]);
  p.part(new TubeGeometry(path, 16, Math.max(.15, Math.min(w, d) * .021), 6, false), shade, 0, 0, 0);
}

function softToy(p, w, d, {type, form, palette: c}) {
  const size = Math.min(w, d);
  const r = size * .29;
  if (form === 'ball' || form === 'texturedBall') {
    p.oval(0, r, 0, r, r, r, c.base);
    if (form === 'ball') {
      p.ring(0, r, 0, r * .99, r * .99, r * .044, c.accent);
      const seam = p.ring(0, r, 0, r * .99, r * .99, r * .037, c.detail);
      seam.rotation.z = Math.PI / 2;
    } else {
      for (let i = 0; i < 22; i++) {
        const up = (i + .5) / 22;
        const spread = Math.sqrt(1 - up ** 2) * r * .97;
        const a = i * 2.39996;
        p.oval(Math.sin(a) * spread, r * (1 + up), Math.cos(a) * spread, r * .105, r * .105, r * .105, c.accent);
      }
    }
    return r * 2.2;
  }
  if (form === 'book') {
    const board = type.includes('board-book');
    for (const side of [-1, 1]) {
      const x = side * w * .224;
      p.box(x, 1, 0, w * .42, 3.1, d * .77, c.dark, board ? .8 : 1.5);
      p.box(x, 3.8, 0, w * .385, 2.1, d * .73, linen, .8);
      p.oval(x, 6.05, -d * .10, w * .10, .45, d * .14, side < 0 ? c.base : c.accent);
      for (const row of [0, 1]) p.box(x, 6, d * (.10 + .075 * row), w * (.23 - row * .04), .45, .65, c.dark, .18);
      if (!board) {
        for (const corner of [-1, 1]) p.oval(x + side * w * .19, 2.8, corner * d * .30,
          w * .055, 1.6, d * .06, c.accent);
      }
    }
    p.box(0, 1.9, 0, w * .035, 4, d * .78, c.base, .8);
    return 7;
  }
  if (form === 'cups' || form === 'rings') {
    const cups = form === 'cups';
    const unit = size * (cups ? .088 : .066);
    p.disc(0, 0, 0, r * 1.14, unit * .55, r * 1.14, c.dark, .9);
    for (let i = 0; i < 5; i++) {
      const width = r * (1 - i * .15);
      const y = unit * (i + .55);
      const tint = [c.base, c.accent, c.detail, toys[2], toys[3]][i];
      if (cups) {
        p.disc(0, y - .6, 0, width * .91, unit, width * .91, tint, .91);
        p.ring(0, y + unit * .9, 0, width * .88, width * .88, unit * .12, i % 2 ? linen : tint);
      } else p.ring(0, y + unit * .36, 0, width, width, unit * .39, tint);
    }
    p.oval(0, unit * 5.46, 0, r * .18, unit * .55, r * .18, cups ? c.accent : c.dark);
    return unit * 6.1;
  }
  if (form === 'blocks') {
    for (let i = 0; i < 3; i++) {
      const x = (i - 1) * w * .25;
      const z = (i % 2 - .5) * d * .29;
      const angle = (i - 1) * .17;
      p.box(x, 0, z, w * .23, size * .24, d * .31, [c.base, c.accent, toys[2]][i], size * .038, angle);
      p.box(x, size * .239, z, w * .14, .7, d * .19, linen, .35, angle);
    }
    return size * .26;
  }
  p.ring(0, r * .32, 0, r, r * .88, r * .27, c.base);
  for (let i = 0; i < 9; i++) {
    const angle = i * Math.PI * 2 / 9;
    p.oval(Math.cos(angle) * r, r * .66, Math.sin(angle) * r * .88, r * .12, r * .095, r * .12, c.accent);
  }
  return r * .8;
}

function activityToy(p, w, d, {form, palette: c}) {
  const s = Math.min(w, d);
  const y = s * .32;
  if (form === 'tunnel') {
    const radius = Math.min(w * .37, d * .42);
    const hood = new CylinderGeometry(radius, radius, d * .83, 18, 1, true, -Math.PI / 2, Math.PI);
    hood.rotateX(-Math.PI / 2);
    const cloth = p.part(hood, c.base, 0, 2.2, 0);
    cloth.material.side = DoubleSide;
    for (let i = 0; i < 5; i++) {
      const points = Array.from({length: 9}, (_, index) => {
        const angle = Math.PI * index / 8;
        return new Vector3(Math.cos(angle) * radius, 2.2 + Math.sin(angle) * radius, (i - 2) * d * .20);
      });
      p.part(new TubeGeometry(new CatmullRomCurve3(points), 15, Math.max(.15, s * .017), 6, false),
        c.accent, 0, 0, 0);
    }
    p.box(0, 0, 0, radius * 2, 2.3, d * .85, c.dark, 1.1);
    return radius + s * .017 + 2.2;
  }
  if (form === 'playGym' || form === 'photoWoodArch') {
    if (form === 'playGym') {
      p.box(0, .5, 0, w * .95, 2.5, d * .88, c.accent, 4);
      arch(p, w, d, y, c.base, false);
    }
    arch(p, w, d, y, form === 'photoWoodArch' ? oak : c.base, true);
    for (const side of [-1, 1]) p.box(w * .38 * side, 0, 0, w * .11, 4, d * .40, c.dark, 1.6);
    for (let i = -1; i <= 1; i++) {
      const x = i * w * .16;
      const top = y * (i ? .94 : .99);
      const bottom = y * (.59 + i * .045);
      p.box(x, bottom, 0, 1, top - bottom, 1, linen);
      p.oval(x, bottom, 0, s * .053, s * .057, s * .049, toys[i + 2]);
    }
    return y + 2;
  }
  if (form === 'mirror') {
    p.box(0, 0, 0, w * .86, 4, d * .71, c.dark, 2.4);
    const frame = p.box(0, 3, -d * .06, w * .75, y * .70, d * .20, c.base, 3);
    const panel = p.box(0, 5.1, d * .035, w * .64, y * .53, 2.2, glass, .8);
    frame.rotation.x = panel.rotation.x = -.21;
    return y * .75 + 3;
  }
  if (form === 'largeRattle') {
    p.ring(-w * .19, 3, 0, s * .25, s * .24, s * .055, c.accent);
    p.box(w * .06, 2, 0, w * .26, 2.9, d * .16, c.dark, 1.2);
    p.oval(w * .26, s * .14, 0, s * .25, s * .14, s * .24, c.base);
    return s * .29;
  }
  if (form === 'sensoryBasket') {
    p.disc(0, 0, 0, w * .39, y * .55, d * .38, c.base, .74);
    p.disc(0, y * .52, 0, w * .35, 1.2, d * .34, c.dark);
    for (let i = 1; i <= 3; i++) p.ring(0, y * i * .17, 0, w * (.29 + i * .034), d * (.28 + i * .035), .8, c.accent);
    for (let i = 0; i < 4; i++) p.oval(w * (i % 2 ? .16 : -.15), y * .67, d * (i < 2 ? -.14 : .14), s * .12, s * .12, s * .12, toys[i]);
    return y + 3;
  }
  const table = form === 'photoActivityTable';
  const board = form === 'activityBoard';
  const top = table ? y : board ? y * .20 : y * .72;
  if (table) {
    for (const x of [-.32, .32]) for (const z of [-.29, .29]) p.box(w * x, 0, d * z, w * .105, top, d * .125, toys[z < 0 ? 3 : 1], 2.6);
  } else p.box(0, 0, 0, w * .83, top + 1, d * .83, c.base, 2.8);
  p.box(0, top, 0, w * .94, Math.max(2.5, s * .057), d * .91, c.accent, 2.6);
  for (let i = 0; i < 6; i++) {
    const x = w * (.25 * (i % 3) - .25);
    const z = d * (i < 3 ? -.20 : .20);
    const start = top + s * .056;
    if (i % 3 === 1) p.box(x, start, z, w * .105, s * .05, d * .15, toys[i % toys.length], 1.4, .24);
    else p.disc(x, start, z, s * .081, s * (.044 + i * .007), s * .072, toys[i % toys.length], .87);
  }
  return top + s * .14;
}

function playMat(p, w, d, {form, palette: c}) {
  if (form === 'round') {
    p.disc(0, .35, 0, w * .48, 2.1, d * .48, c.base);
    for (const radius of [.32, .43]) p.ring(0, 2.53, 0, w * radius, d * radius, .37, c.accent);
    return 3;
  }
  const padded = ['tummy', 'photoLeafMat'].includes(form);
  if (padded) {
    p.box(0, .5, 0, w * .97, 2.3, d * .95, c.dark, 1);
    p.box(0, 1.5, 0, w * .95, 1.75, d * .93, c.base, .7);
    for (const row of [-.29, 0, .29]) for (const col of [-.34, -.12, .12, .34]) {
      const detail = p.oval(w * col, 3.3, d * row, w * .041, .22, d * .095, c.accent);
      detail.rotation.y = col < 0 ? -.49 : .49;
    }
    return 3.6;
  }
  const checker = form === 'photoCheckerMat';
  const tint = checker ? ['#e3d3bc', '#776056', '#c0a083', '#776056'] : [c.base, c.accent, c.detail, c.base];
  const seam = Math.min(w, d) * .008;
  const cols = form === 'foam' ? 4 : 5;
  p.box(0, .25, 0, w * .99, 1, d * .99, c.dark, .5);
  for (let row = 0; row < 4; row++) for (let col = 0; col < cols; col++) {
    const x = w * ((col + .5) / cols - .5);
    const z = d * ((row + .5) / 4 - .5);
    const tone = tint[(row + (checker ? col : col * 3)) % 4];
    p.box(x, .9, z, w / cols - seam, 2.2, d / 4 - seam, tone, .6);
    if (form === 'puzzle' && row < 3) p.disc(x, 2.6, z + d / 8, w * .026, .49, d * .026, tone);
  }
  return 3.4;
}

function planters(p, w, d, {form, palette: c}) {
  const s = Math.min(w, d);
  const tall = form === 'tall';
  const boxRail = form === 'rail';
  const vertical = form === 'vertical';
  const hanging = form === 'hanging';
  if (boxRail) {
    p.box(0, 1, 0, w * .92, s * .22, d * .53, c.base, 2);
    p.box(0, s * .22, 0, w * .85, 2, d * .45, soil, .8);
  }
  if (vertical) {
    for (const side of [-1, 1]) p.box(w * .37 * side, 0, -d * .29, w * .065, s * .79, d * .07, c.dark, 1.2);
    for (let shelf = 0; shelf < 3; shelf++) p.box(0, s * (.16 + .26 * shelf), -d * .11, w * .84, 2.8, d * .41, c.accent, 1.2);
  }
  const offsets = tall || hanging ? [-.25, .25] : [-.30, 0, .30];
  let top = 0;
  offsets.forEach((offset, index) => {
    const x = w * offset;
    const z = vertical ? -d * .10 : d * (form === 'cluster' ? (index === 1 ? .21 : -.11) : 0);
    const pot = Math.min(w * .142, d * .265, s * (tall ? .22 : .18));
    const y = vertical ? s * (.19 + .26 * index) : hanging ? s * .41 : 0;
    const potH = boxRail ? s * .25 : pot * (tall ? 1.70 : .87);
    if (!boxRail) {
      p.disc(x, y, z, pot, potH, pot, c.base, .68);
      p.ring(x, y + potH, z, pot * .95, pot * .95, .8, c.accent);
      p.disc(x, y + potH - .72, z, pot * .86, 1, pot * .86, soil);
    }
    for (let leaf = 0; leaf < 7; leaf++) {
      const angle = leaf * 2.39996 + index;
      const spread = pot * (.41 + leaf % 3 * .24);
      const dy = pot * ((tall ? 1.9 : 1.04) + leaf % 3 * .26);
      const side = Math.cos(angle) * spread;
      const front = Math.sin(angle) * spread;
      const twig = p.oval(x + side * .47, y + potH + dy * .46, z + front * .47, .7, dy * .48, .7, leaves[0]);
      twig.rotation.z = -Math.atan2(side, dy);
      twig.rotation.x = Math.atan2(front, dy);
      const blade = p.oval(x + side, y + potH + dy, z + front, pot * .39, pot * .13, pot * .60, leaves[leaf % leaves.length]);
      blade.rotation.y = angle;
      if (boxRail && leaf % 3 === 0) p.oval(x + side, y + potH + dy + 1.1, z + front, pot * .18, pot * .13, pot * .19, toys[(leaf + index) % toys.length]);
      top = Math.max(top, y + potH + dy + pot * .2);
    }
    if (hanging) {
      for (const side of [-1, 1]) {
        const cord = p.box(x + side * pot * .48, y + potH + s * .24, z, .72, s * .53, .72, linen);
        cord.rotation.z = side * .36;
      }
      top = Math.max(top, y + potH + s * .53);
    }
  });
  return top;
}

const families = {softToy, activityToy, playMat, planterSet: planters};

export function makeCatalogPlay(p, w, d, template) {
  const draw = families[template.artFamily];
  return draw?.(p, w, d, template);
}
