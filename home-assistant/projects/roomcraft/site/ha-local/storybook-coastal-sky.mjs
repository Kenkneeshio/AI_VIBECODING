import {storybookWeather} from './storybook-weather.mjs';

export const COASTAL_SKY_MARKUP = `
  <div class="coastal-sky" data-sky="unknown" data-effect="unknown" data-cloud="none" data-moon="" aria-hidden="true">
    <span class="coastal-stars"></span>
    <span class="coastal-orb coastal-sun"></span>
    <span class="coastal-orb coastal-moon"></span>
    <span class="coastal-cloud coastal-cloud-high"></span>
    <span class="coastal-cloud coastal-cloud-left"></span>
    <span class="coastal-cloud coastal-cloud-right"></span>
    <span class="coastal-cloud coastal-cloud-bank"></span>
    <span class="coastal-lightning"></span>
  </div>`;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const elevationKnown = value => Number.isFinite(value) && Math.abs(value) <= 90;
const headingKnown = value => Number.isFinite(value) && value >= 0 && value <= 360;
const zenith = 75;
const dayHeight = elevation => 76 - 58 * clamp(elevation / zenith, 0, 1);
const headingX = heading => 12 + 76 * clamp((heading - 90) / 180, 0, 1);
const PHASES = new Map([
  ['waxing_crescent', [1, .48]], ['first_quarter', [1, 0]], ['waxing_gibbous', [1, -.48]],
  ['waning_crescent', [-1, .48]], ['last_quarter', [-1, 0]], ['waning_gibbous', [-1, -.48]],
]);

function moonOutline(side, terminator) {
  const outline = [];
  for (const [extent, start, step] of [[1, 0, 1], [terminator, 16, -1]]) {
    for (let index = 0; index <= 16; index++) {
      const angle = (start + index * step) * Math.PI / 16;
      const x = 50 + side * 50 * Math.sin(angle) * extent;
      const y = 50 - 50 * Math.cos(angle);
      outline.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
  }
  return `polygon(${outline.join(',')})`;
}

const MOON_OUTLINES = new Map([...PHASES].map(([phase, values]) => [phase, moonOutline(...values)]));

/** Pure presentation sample. Supplied celestial bearings always win over illustrative arcs. */
export function coastalSkyFrame(environment = {}, offline = false) {
  const weather = storybookWeather(environment, offline);
  const {sky, effect, cloud, moon, sunElevation, sunRising, sunAzimuth, moonElevation, moonAzimuth,
    windSpeed, windBearing, cloudCoverage} = weather;
  const {skyTimeSeconds, skyProgress, reduceMotion = false} = offline ? {} : environment;
  const hasElevation = elevationKnown(sunElevation);
  const twilight = hasElevation && (sky === 'day' ? sunElevation < 13 : sky === 'night' && sunElevation > -8);
  const clock = Number.isFinite(skyTimeSeconds) && !reduceMotion ? Math.max(0, skyTimeSeconds) : undefined;
  const progress = Number.isFinite(skyProgress) && !reduceMotion ? clamp(skyProgress, 0, 1) : undefined;
  const arcHeight = progress === undefined ? undefined : Math.sin(progress * Math.PI) * zenith;
  const moonProgress = progress ?? (clock === undefined ? undefined : .5 - .5 * Math.cos(clock * Math.PI / 480));
  const sunAltitude = hasElevation ? sunElevation : arcHeight ?? 40;
  const altitudeRatio = clamp(sunAltitude / zenith, 0, 1);
  const sunSide = sunRising === true ? 19 : sunRising === false ? 81 : 54;
  const sunX = headingKnown(sunAzimuth) ? headingX(sunAzimuth) : progress === undefined
    ? sunSide + (50 - sunSide) * altitudeRatio : 17 + 66 * progress;
  const moonX = headingKnown(moonAzimuth) ? headingX(moonAzimuth) : moonProgress === undefined
    ? 55 : 18 + 64 * moonProgress;
  const moonAltitude = moonProgress === undefined ? 38 : Math.sin(moonProgress * Math.PI) * zenith;
  const moonY = dayHeight(elevationKnown(moonElevation) ? moonElevation : moonAltitude);
  const moonMotion = !offline && !reduceMotion && !headingKnown(moonAzimuth) && progress === undefined &&
    clock === undefined ? 'ambient' : 'fixed';
  const angle = windBearing === undefined ? undefined : windBearing * Math.PI / 180;
  const windX = angle === undefined ? 9 : -Math.sin(angle) * 12;
  const windY = angle === undefined ? -2 : Math.cos(angle) * 4;
  const cloudSpeed = windSpeed === undefined
    ? (effect === 'wind' || effect === 'wind-clouds' ? 2.5 : 1)
    : windSpeed === 0 ? 0 : clamp(windSpeed * .25, .32, 4.8);
  const cloudOpacity = cloudCoverage === undefined ? 1 : clamp(cloudCoverage / 52, 0, 1);
  return {sky, effect, cloud, moon, light: twilight ? 'twilight' : 'regular', clock, reduceMotion,
    moonMotion, sunX, sunY: dayHeight(sunAltitude), moonX, moonY,
    moonOutline: MOON_OUTLINES.get(moon) || 'circle(50%)', windX, windY, cloudSpeed, cloudOpacity};
}

export function updateCoastalSky(element, environment, offline = false) {
  const frame = coastalSkyFrame(environment, offline);
  const {sky, effect, cloud, moon, light, moonMotion, clock, reduceMotion, cloudSpeed, cloudOpacity} = frame;
  const flags = {sky, effect, cloud, moon, light, moonMotion, skyClock: clock === undefined ? 'live' : 'sample',
    windCalm: String(cloudSpeed === 0), skyReduced: String(reduceMotion)};
  for (const [key, value] of Object.entries(flags)) {
    if (element.dataset[key] !== value) element.dataset[key] = value;
  }
  const styles = {
    '--coastal-sun-x': `${frame.sunX.toFixed(2)}%`,
    '--coastal-sun-y': `${frame.sunY.toFixed(2)}%`,
    '--coastal-moon-x': `${frame.moonX.toFixed(2)}%`,
    '--coastal-moon-y': `${frame.moonY.toFixed(2)}%`,
    '--coastal-moon-outline': frame.moonOutline,
    '--coastal-wind-x': `${frame.windX.toFixed(3)}vw`,
    '--coastal-wind-y': `${frame.windY.toFixed(3)}px`,
    '--coastal-wind-speed': String(cloudSpeed || 1),
    '--coastal-cloud-cover': String(cloudOpacity),
    '--coastal-clock': `${(clock ?? 0).toFixed(3)}s`,
  };
  for (const [key, value] of Object.entries(styles)) {
    if (element.style.getPropertyValue(key) !== value) element.style.setProperty(key, value);
  }
}

const DRIFT_FRAMES = `{
  0% {translate:calc(-1 * var(--coastal-wind-x,9vw)) calc(-1 * var(--coastal-wind-y,-2px));opacity:0}
  21%,79% {opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1))}
  100% {translate:var(--coastal-wind-x,9vw) var(--coastal-wind-y,-2px);opacity:0}
}`;

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
    transition:left 1.3s ease,top 1.3s ease;
  }
  .coastal-sky[data-sky=day] .coastal-sun {
    display:block; left:var(--coastal-sun-x,52%);
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-sun-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    background:radial-gradient(circle at 38% 31%,#fff8d4,#fadd96 88%);
    box-shadow:0 0 9px 3px #fff0bb91,0 0 23px 7px #ffdd9266;
  }
  .coastal-sky[data-sky=night]:not([data-moon=""]):not([data-moon=new_moon]) .coastal-moon {
    display:block; left:var(--coastal-moon-x,55%); scale:.9;
    top:clamp(calc(var(--coastal-orb-size) / 2 + 3px),var(--coastal-moon-y,43%),calc(100% - var(--coastal-orb-size) / 2 - 3px));
    clip-path:var(--coastal-moon-outline,circle(50%));
    background:
      radial-gradient(circle at 30% 37%,#cab69776 0 8%,transparent 12%),
      radial-gradient(circle at 65% 65%,#cab69770 0 10%,transparent 15%),
      radial-gradient(circle at 44% 34%,#fff9e6,#ebd6ad 88%);
  }
  .coastal-sky[data-moon-motion=ambient] .coastal-moon {animation:coastal-moon-drift 480s ease-in-out infinite alternate}
  @keyframes coastal-moon-drift {
    from{transform:translate(-9vw,3px)} 50%{transform:translate(0,-2px)} to{transform:translate(9vw,3px)}
  }
  .coastal-sky:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=fog],[data-effect=snow]) .coastal-orb {opacity:.48}
  .coastal-sky:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],[data-effect=sleet]) .coastal-orb {opacity:.17}
  .coastal-cloud {
    position:absolute; top:var(--cloud-y); left:var(--cloud-x); width:var(--cloud-width); height:var(--cloud-height);
    opacity:calc(var(--cloud-alpha) * var(--coastal-cloud-cover,1));
    background:linear-gradient(180deg,var(--coastal-cloud-top),var(--coastal-cloud-bottom) 95%);
    mask-image:
      radial-gradient(ellipse 45% 30% at 49% 66%,#000 43%,transparent 100%),
      radial-gradient(ellipse 32% 38% at 35% 53%,#000 38%,transparent 100%),
      radial-gradient(ellipse 23% 41% at 52% 42%,#000 37%,transparent 100%),
      radial-gradient(ellipse 27% 38% at 67% 52%,#000 32%,transparent 100%);
    animation:coastal-drift calc(var(--cloud-time,72s) / var(--coastal-wind-speed,1))
      calc(var(--cloud-delay,0s) - var(--coastal-clock,0s)) linear infinite;
  }
  .coastal-cloud-high {--cloud-x:24%;--cloud-y:2%;--cloud-width:36%;--cloud-height:42%;
    --cloud-alpha:.42;--cloud-time:85s;--cloud-delay:-20s;scale:1 .7}
  .coastal-cloud-left {--cloud-x:-4%;--cloud-y:24%;--cloud-width:47%;--cloud-height:64%;
    --cloud-alpha:.86;--cloud-delay:-11s}
  .coastal-cloud-right {--cloud-x:64%;--cloud-y:19%;--cloud-width:41%;--cloud-height:63%;
    --cloud-alpha:.86;--cloud-time:64s;--cloud-delay:-34s}
  .coastal-cloud-bank {--cloud-x:31%;--cloud-y:28%;--cloud-width:49%;--cloud-height:64%;
    --cloud-alpha:0;--cloud-time:80s;--cloud-delay:-10s}
  .coastal-sky[data-cloud=none] .coastal-cloud {display:none}
  .coastal-sky[data-cloud=cirrus] .coastal-cloud {
    mask-image:
      radial-gradient(ellipse 48% 12% at 49% 30%,#000 25%,transparent 100%),
      radial-gradient(ellipse 35% 11% at 60% 47%,#000 38%,transparent 100%),
      radial-gradient(ellipse 30% 8% at 39% 55%,#000 30%,transparent 100%);
    --cloud-alpha:.61;
  }
  .coastal-sky[data-cloud=cirrus] .coastal-cloud-bank {display:none}
  .coastal-sky[data-sky=night][data-cloud=cirrus] .coastal-cloud {--cloud-alpha:.24}
  .coastal-sky[data-cloud=altocumulus] .coastal-cloud {
    mask-image:
      radial-gradient(ellipse 14% 27% at 26% 53%,#000 48%,transparent 100%),
      radial-gradient(ellipse 13% 30% at 46% 38%,#000 48%,transparent 100%),
      radial-gradient(ellipse 16% 31% at 64% 51%,#000 48%,transparent 100%),
      radial-gradient(ellipse 11% 21% at 83% 60%,#000 48%,transparent 100%);
  }
  .coastal-sky:is([data-cloud=stratus],[data-cloud=nimbostratus]) .coastal-cloud {
    mask-image:
      radial-gradient(ellipse 50% 27% at 48% 57%,#000 53%,transparent 100%),
      radial-gradient(ellipse 44% 15% at 53% 38%,#000 40%,transparent 100%),
      radial-gradient(ellipse 40% 17% at 37% 74%,#000 48%,transparent 100%);
  }
  .coastal-sky[data-cloud=nimbostratus] .coastal-cloud {--cloud-height:77%;--cloud-alpha:.88}
  .coastal-sky[data-cloud=cumulonimbus] .coastal-cloud {
    --cloud-height:86%; --cloud-y:8%; --cloud-alpha:.96;
    mask-image:
      radial-gradient(ellipse 48% 24% at 50% 75%,#000 65%,transparent 100%),
      radial-gradient(ellipse 37% 34% at 59% 48%,#000 54%,transparent 100%),
      radial-gradient(ellipse 22% 44% at 45% 44%,#000 54%,transparent 100%),
      radial-gradient(ellipse 27% 26% at 32% 57%,#000 48%,transparent 100%);
  }
  .coastal-sky[data-cloud=fog] .coastal-cloud {
    --cloud-y:38%; --cloud-height:68%; --cloud-alpha:.46;
    background:linear-gradient(180deg,transparent,#e4eeeb 88%);
    mask-image:radial-gradient(ellipse 51% 64% at 49% 91%,#000 36%,transparent 100%);
  }
  .coastal-sky[data-cloud=fog]::after {
    content:"";position:absolute;inset:22% 0 0;pointer-events:none;
    background:
      radial-gradient(ellipse 43% 39% at 24% 72%,#dce7e87d,transparent 100%),
      radial-gradient(ellipse 55% 37% at 79% 84%,#eff0e589,transparent 100%),
      linear-gradient(180deg,transparent,#dce7e898);
  }
  .coastal-sky:is([data-cloud=altocumulus],[data-cloud=stratus],[data-cloud=nimbostratus],
    [data-cloud=cumulonimbus],[data-cloud=fog]) .coastal-cloud-bank {--cloud-alpha:.9}
  .coastal-lightning {
    display:none;position:absolute;z-index:1;left:65%;top:19%;height:63%;width:clamp(13px,1.4vw,25px);
    background:linear-gradient(#fff0c5,#c7d8ef);
    clip-path:polygon(56% 0,91% 0,59% 37%,91% 37%,18% 100%,39% 52%,13% 52%);
  }
  .coastal-sky:is([data-effect=thunder],[data-effect=storm]) .coastal-lightning {
    display:block;animation:coastal-distant-lightning 22s ease-in-out infinite;
  }
  .coastal-sky[data-sky-clock=sample] .coastal-cloud {
    animation-name:coastal-sampled-drift;animation-play-state:paused;
  }
  .coastal-sky[data-sky-clock=sample] .coastal-orb {transition:none}
  .coastal-sky[data-sky-clock=sample] .coastal-lightning {animation:none;opacity:.85}
  .coastal-sky[data-wind-calm=true] .coastal-cloud {animation:none}
  @keyframes coastal-drift ${DRIFT_FRAMES}
  @keyframes coastal-sampled-drift ${DRIFT_FRAMES}
  @keyframes coastal-distant-lightning {0%,74%,87%,100%{opacity:0}80%{opacity:.69}}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning),
  .coastal-sky[data-sky-reduced=true] :is(.coastal-cloud,.coastal-orb,.coastal-lightning) {animation:none;transition:none}
  .world[data-reduced-motion]:not([data-reduced-motion=false]) .coastal-lightning,
  .coastal-sky[data-sky-reduced=true] .coastal-lightning {opacity:.66}
  @media (prefers-reduced-motion:reduce) {
    .coastal-sky :is(.coastal-cloud,.coastal-orb,.coastal-lightning) {animation:none;transition:none}
    .coastal-lightning {opacity:.66}
  }
  @media (max-height:600px) and (orientation:landscape) {
    .coastal-sky {height:clamp(38px,8.5dvh,48px);--coastal-orb-size:25px}
  }
`;
