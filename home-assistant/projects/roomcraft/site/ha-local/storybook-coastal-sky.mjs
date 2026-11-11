import {storybookWeather} from './storybook-weather.mjs';

export const COASTAL_SKY_MARKUP = `
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-moon="" aria-hidden="true">
    <span class="coastal-stars"></span>
    <span class="coastal-orb coastal-sun"></span>
    <span class="coastal-orb coastal-moon"></span>
    <span class="coastal-cloud coastal-cloud-high"></span>
    <span class="coastal-cloud coastal-cloud-left"></span>
    <span class="coastal-cloud coastal-cloud-right"></span>
    <span class="coastal-cloud coastal-cloud-bank"></span>
  </div>`;

export function updateCoastalSky(element, environment, offline = false) {
  const {sky, effect, moon, sunElevation, sunRising} = storybookWeather(environment, offline);
  const hasElevation = Number.isFinite(sunElevation);
  const twilight = hasElevation && (sky === 'day' ? sunElevation < 13 : sky === 'night' && sunElevation > -8);
  for (const [key, value] of Object.entries({sky, effect, moon, light: twilight ? 'twilight' : 'regular'})) {
    if (element.dataset[key] !== value) element.dataset[key] = value;
  }
  const altitude = hasElevation ? Math.min(1, Math.max(0, sunElevation / 75)) : .53;
  const lowSunX = sunRising === true ? 43 : sunRising === false ? 59 : 54;
  element.style.setProperty('--coastal-sun-x', `${(lowSunX + (52 - lowSunX) * altitude).toFixed(1)}%`);
  element.style.setProperty('--coastal-sun-y', `${(62 - 29 * altitude).toFixed(1)}%`);
}

export const COASTAL_SKY_STYLE = `
  .coastal-sky {
    position:relative; isolation:isolate; overflow:hidden; pointer-events:none;
    box-sizing:border-box; height:clamp(54px,7dvh,72px); width:100%;
    border-bottom:3px solid var(--coastal-seam);
    background:linear-gradient(180deg,var(--coastal-top),var(--coastal-mid) 62%,var(--coastal-low));
    --coastal-top:#7c99ab; --coastal-mid:#abc0c8; --coastal-low:#d2dad7;
    --coastal-seam:#426b80; --coastal-cloud-top:#f9f6ea; --coastal-cloud-bottom:#c5d1d6;
    --coastal-orb-size:clamp(27px,4.1dvh,42px);
  }
  .coastal-sky[data-sky=day] {
    --coastal-top:#5b9bc2; --coastal-mid:#a0c8dc; --coastal-low:#d1e1e6;
  }
  .coastal-sky[data-sky=night] {
    --coastal-top:#142843; --coastal-mid:#293e5b; --coastal-low:#526980;
    --coastal-seam:#839aab; --coastal-cloud-top:#a2b2cb; --coastal-cloud-bottom:#4a5f7e;
  }
  .coastal-sky[data-light=twilight][data-sky=day] {
    --coastal-top:#7399b8; --coastal-mid:#b7beca; --coastal-low:#edc9aa;
    --coastal-seam:#82645e; --coastal-cloud-top:#fff0da; --coastal-cloud-bottom:#d4b9b6;
  }
  .coastal-sky[data-light=twilight][data-sky=night] {
    --coastal-top:#263c5b; --coastal-mid:#677a94; --coastal-low:#cd9d94;
    --coastal-seam:#756b79;
  }
  .coastal-sky[data-sky=day]:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) {
    --coastal-top:#779caf; --coastal-mid:#a3bac4; --coastal-low:#c9d5d3;
    --coastal-seam:#526e7b; --coastal-cloud-top:#eef1ee; --coastal-cloud-bottom:#adbfca;
  }
  .coastal-sky[data-sky=day]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-top:#506b85; --coastal-mid:#8299ab; --coastal-low:#a2b4bb;
    --coastal-seam:#3d596d; --coastal-cloud-top:#c8d3dc; --coastal-cloud-bottom:#8a9eb0;
  }
  .coastal-sky[data-sky=night]:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) {
    --coastal-top:#233550; --coastal-mid:#3b4c65; --coastal-low:#617184;
    --coastal-seam:#9aabb5; --coastal-cloud-top:#97a9bb; --coastal-cloud-bottom:#546880;
  }
  .coastal-stars {
    display:none; position:absolute; inset:0; opacity:.68;
    background:
      radial-gradient(circle at 7% 31%,#dce8ef 0 .6px,transparent 1.4px),
      radial-gradient(circle at 14% 17%,#fff0cc 0 1px,transparent 1.6px),
      radial-gradient(circle at 24% 38%,#dce8ef 0 .6px,transparent 1.3px),
      radial-gradient(circle at 34% 15%,#fff0cc 0 .7px,transparent 1.4px),
      radial-gradient(circle at 44% 51%,#dce8ef 0 .6px,transparent 1.3px),
      radial-gradient(circle at 49% 19%,#fff0cc 0 1px,transparent 1.6px),
      radial-gradient(circle at 74% 24%,#dce8ef 0 .6px,transparent 1.4px),
      radial-gradient(circle at 87% 36%,#fff0cc 0 .7px,transparent 1.4px),
      radial-gradient(circle at 94% 16%,#dce8ef 0 .75px,transparent 1.4px);
  }
  .coastal-sky[data-sky=night]:not([data-light=twilight]) .coastal-stars {display:block}
  .coastal-orb {
    display:none; position:absolute; border-radius:50%;
    width:var(--coastal-orb-size); aspect-ratio:1; translate:-50% -50%;
  }
  .coastal-sky[data-sky=day] .coastal-sun {
    display:block; left:var(--coastal-sun-x,52%);
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-sun-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    background:radial-gradient(circle at 38% 31%,#fff8d4,#fadd96 88%);
    box-shadow:0 0 9px 3px #fff0bb91,0 0 23px 7px #ffdd9266;
  }
  .coastal-sky[data-sky=night]:not([data-moon=""]):not([data-moon=new_moon]) .coastal-moon {
    display:block; left:57%; top:43%; scale:.90;
    background:
      radial-gradient(circle at 30% 37%,#cab69776 0 8%,transparent 12%),
      radial-gradient(circle at 65% 65%,#cab69770 0 10%,transparent 15%),
      radial-gradient(circle at 44% 34%,#fff9e6,#ebd6ad 88%);
  }
  .coastal-sky[data-moon=first_quarter] .coastal-moon {clip-path:inset(0 0 0 50%)}
  .coastal-sky[data-moon=last_quarter] .coastal-moon {clip-path:inset(0 50% 0 0)}
  .coastal-sky:is([data-moon=waxing_crescent],[data-moon=waning_crescent],
    [data-moon=waxing_gibbous],[data-moon=waning_gibbous]) .coastal-moon {
    mask-image:radial-gradient(ellipse var(--coastal-shadow-width) 51% at var(--coastal-shadow-x) 50%,
      transparent 96%,#000 100%);
  }
  .coastal-sky[data-moon=waxing_crescent] {--coastal-shadow-width:44%;--coastal-shadow-x:29%}
  .coastal-sky[data-moon=waning_crescent] {--coastal-shadow-width:44%;--coastal-shadow-x:71%}
  .coastal-sky[data-moon=waxing_gibbous] {--coastal-shadow-width:39%;--coastal-shadow-x:-12%}
  .coastal-sky[data-moon=waning_gibbous] {--coastal-shadow-width:39%;--coastal-shadow-x:112%}
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) .coastal-orb {opacity:.48}
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) .coastal-orb {opacity:.17}
  .coastal-cloud {
    position:absolute; top:var(--cloud-y); left:var(--cloud-x); width:var(--cloud-width); height:var(--cloud-height);
    opacity:var(--cloud-alpha);
    background:linear-gradient(180deg,var(--coastal-cloud-top),var(--coastal-cloud-bottom) 95%);
    mask-image:
      radial-gradient(ellipse 45% 30% at 49% 66%,#000 43%,transparent 100%),
      radial-gradient(ellipse 32% 38% at 35% 53%,#000 38%,transparent 100%),
      radial-gradient(ellipse 23% 41% at 52% 42%,#000 37%,transparent 100%),
      radial-gradient(ellipse 27% 38% at 67% 52%,#000 32%,transparent 100%);
    animation:coastal-drift var(--cloud-time,72s) var(--cloud-delay,0s) ease-in-out infinite alternate;
  }
  .coastal-cloud-high {--cloud-x:24%;--cloud-y:2%;--cloud-width:36%;--cloud-height:42%;
    --cloud-alpha:.42;--cloud-time:85s;--cloud-delay:-20s;scale:1 .7}
  .coastal-cloud-left {--cloud-x:-4%;--cloud-y:24%;--cloud-width:47%;--cloud-height:64%;
    --cloud-alpha:.86;--cloud-delay:-11s}
  .coastal-cloud-right {--cloud-x:64%;--cloud-y:19%;--cloud-width:41%;--cloud-height:63%;
    --cloud-alpha:.86;--cloud-time:64s;--cloud-delay:-34s;animation-direction:alternate-reverse}
  .coastal-cloud-bank {--cloud-x:31%;--cloud-y:28%;--cloud-width:49%;--cloud-height:64%;
    --cloud-alpha:0;--cloud-time:80s;--cloud-delay:-10s}
  .coastal-sky[data-sky=night][data-effect=clear] .coastal-cloud {--cloud-alpha:.28}
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=rain],[data-effect=thunder],
    [data-effect=storm],[data-effect=sleet],[data-effect=snow],[data-effect=fog]) .coastal-cloud-bank {--cloud-alpha:.92}
  .coastal-sky:is([data-effect=wind],[data-effect=wind-clouds]) .coastal-cloud {animation-duration:24s}
  @keyframes coastal-drift {from{translate:-2.2vw 0}to{translate:2.2vw -2px}}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-cloud {animation:none}
  @media (prefers-reduced-motion:reduce) {.coastal-cloud{animation:none}}
  @media (max-height:600px) and (orientation:landscape) {
    .coastal-sky {height:clamp(38px,8.5dvh,48px);--coastal-orb-size:25px}
  }
`;
