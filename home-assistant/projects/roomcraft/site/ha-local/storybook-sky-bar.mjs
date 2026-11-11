// Decorative horizon for Home. The Weather button provides the accessible reading.
export const storybookSkyBarMarkup = `
  <div class="storybook-sky-bar" data-sky="unknown" data-effect="unknown" data-moon="" data-light="regular" aria-hidden="true">
    <span class="sky-bar-stars"></span>
    <span class="sky-bar-celestial sky-bar-sun"></span>
    <span class="sky-bar-celestial sky-bar-moon"></span>
    <span class="sky-bar-cloud sky-bar-cloud-high"></span>
    <span class="sky-bar-cloud sky-bar-cloud-west"></span>
    <span class="sky-bar-cloud sky-bar-cloud-east"></span>
    <span class="sky-bar-cloud sky-bar-cloud-bank"></span>
    <span class="sky-bar-ridge sky-bar-ridge-far"></span>
    <span class="sky-bar-ridge sky-bar-ridge-near"></span>
    <span class="sky-bar-haze"></span>
  </div>`;

export function updateStorybookSkyBar(element, weather) {
  const {sky, effect, moon, sunElevation, sunRising} = weather;
  const hasElevation = Number.isFinite(sunElevation);
  const low = sky === 'day' && hasElevation && sunElevation < 13;
  const twilight = sky === 'night' && hasElevation && sunElevation > -8;
  const light = low ? 'low' : twilight ? 'twilight' : 'regular';
  for (const [key, value] of Object.entries({sky, effect, moon, light})) {
    if (element.dataset[key] !== value) element.dataset[key] = value;
  }

  const altitude = Math.min(1, Math.max(0, (sunElevation ?? 0) / 80));
  const horizonSide = sunRising === true ? 28 : sunRising === false ? 73 : 51;
  const position = hasElevation ? horizonSide + (51 - horizonSide) * altitude : 54;
  const height = hasElevation ? 73 - 46 * altitude : 39;
  for (const [name, value] of [['--sky-sun-x', position], ['--sky-sun-y', height]]) {
    const percentage = `${value.toFixed(2)}%`;
    if (element.style.getPropertyValue(name) !== percentage) element.style.setProperty(name, percentage);
  }
}

export const storybookSkyBarStyles = `
  .storybook-sky-bar {
    position:relative; isolation:isolate; overflow:hidden; pointer-events:none;
    height:var(--storybook-sky-height, clamp(58px,8dvh,90px)); width:100%; flex:none;
    background:linear-gradient(180deg,var(--sky-upper),var(--sky-middle) 57%,var(--sky-lower));
    --sky-upper:#8a9fa7; --sky-middle:#a3b5b9; --sky-lower:#c6cdbf;
    --cloud-top:#edf0e8; --cloud-bottom:#b7c4c3;
    --ridge-far:#98a8a6; --ridge-near:#778c82; --haze:#8f9d87;
    --celestial-size:clamp(16px,3.4dvh,38px);
  }
  .storybook-sky-bar[data-sky=day] {
    --sky-upper:#5e91b2; --sky-middle:#9bbdcd; --sky-lower:#e0ded0;
    --cloud-top:#fffbec; --cloud-bottom:#ced9d9;
    --ridge-far:#93aaa9; --ridge-near:#6d8b83; --haze:#869d81;
  }
  .storybook-sky-bar[data-sky=night] {
    --sky-upper:#13253e; --sky-middle:#263c57; --sky-lower:#5b6e80;
    --cloud-top:#a5b4cb; --cloud-bottom:#4e6480;
    --ridge-far:#3c5368; --ridge-near:#2a4354; --haze:#263f49;
  }
  .storybook-sky-bar[data-light=low] {
    --sky-upper:#719fb9; --sky-middle:#b8c3c6; --sky-lower:#f0d2a8;
    --ridge-far:#99aaa4; --ridge-near:#788f81;
  }
  .storybook-sky-bar[data-light=twilight] {
    --sky-upper:#344a68; --sky-middle:#59687f; --sky-lower:#d0a593;
    --ridge-far:#657480; --ridge-near:#3f555e; --haze:#344b50;
  }
  .storybook-sky-bar:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=rain],
    [data-effect=thunder],[data-effect=storm],[data-effect=sleet],[data-effect=snow])[data-sky=day] {
    --sky-upper:#7e9baa; --sky-middle:#a8bbc3; --sky-lower:#d1d6cb;
    --cloud-top:#e7ece9; --cloud-bottom:#a1b3bc;
  }
  .storybook-sky-bar:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],
    [data-effect=sleet])[data-sky=day] {
    --sky-upper:#617d90; --sky-middle:#839da7; --sky-lower:#bdc7bd;
    --cloud-top:#c6d1d5; --cloud-bottom:#758c9a;
  }
  .storybook-sky-bar:is([data-effect=rain],[data-effect=thunder],[data-effect=storm],
    [data-effect=sleet])[data-sky=night] {
    --sky-upper:#202e45; --sky-middle:#35475e; --sky-lower:#657683;
    --cloud-top:#899caf; --cloud-bottom:#526580;
  }
  .sky-bar-stars {
    display:none; position:absolute; inset:0;
    background:
      radial-gradient(circle at 5% 34%,#dce8ef 0 .6px,transparent 1.3px),
      radial-gradient(circle at 11% 12%,#fff0cc 0 1px,transparent 1.65px),
      radial-gradient(circle at 21% 44%,#dce8ef 0 .7px,transparent 1.4px),
      radial-gradient(circle at 29% 25%,#fff0cc 0 .6px,transparent 1.2px),
      radial-gradient(circle at 34% 9%,#dce8ef 0 .7px,transparent 1.4px),
      radial-gradient(circle at 42% 46%,#dce8ef 0 .6px,transparent 1.3px),
      radial-gradient(circle at 49% 19%,#fff0cc 0 1px,transparent 1.6px),
      radial-gradient(circle at 72% 47%,#dce8ef 0 .5px,transparent 1.2px),
      radial-gradient(circle at 77% 15%,#dce8ef 0 .8px,transparent 1.4px),
      radial-gradient(circle at 87% 37%,#fff0cc 0 .8px,transparent 1.4px),
      radial-gradient(circle at 93% 19%,#dce8ef 0 .6px,transparent 1.25px);
    opacity:.7; animation:roomcraft-sky-bar-twinkle 12s ease-in-out infinite alternate;
  }
  .storybook-sky-bar[data-sky=night] .sky-bar-stars{display:block}
  .storybook-sky-bar[data-light=twilight] .sky-bar-stars{visibility:hidden}
  .sky-bar-celestial {
    display:none; position:absolute; width:var(--celestial-size); aspect-ratio:1;
    translate:-50% -50%; border-radius:50%;
  }
  .storybook-sky-bar[data-sky=day] .sky-bar-sun {
    display:block; left:var(--sky-sun-x,54%); top:var(--sky-sun-y,39%);
    background:radial-gradient(circle at 40% 35%,#fffbe1,#ffe19e 88%);
    box-shadow:0 0 8px 3px #fff1bd7a,0 0 24px 7px #ffdc8859;
    animation:roomcraft-sky-bar-glow 12s ease-in-out infinite alternate;
  }
  .storybook-sky-bar[data-light=low] .sky-bar-sun {
    background:radial-gradient(circle at 42% 35%,#fff4d8,#ffd491);
  }
  .storybook-sky-bar[data-sky=night]:not([data-moon=""]):not([data-moon=new_moon]) .sky-bar-moon {
    display:block; left:62%; top:32%; scale:.87;
    background:
      radial-gradient(circle at 25% 37%,#cbb99880 0 8%,transparent 12%),
      radial-gradient(circle at 66% 67%,#cbb99880 0 12%,transparent 16%),
      radial-gradient(circle at 70% 30%,#fffce8,#e9d3ad 87%);
    animation:roomcraft-sky-bar-float 16s ease-in-out infinite alternate;
  }
  .storybook-sky-bar[data-moon=first_quarter] .sky-bar-moon{clip-path:inset(0 0 0 50%)}
  .storybook-sky-bar[data-moon=last_quarter] .sky-bar-moon{clip-path:inset(0 50% 0 0)}
  :is([data-moon=waxing_crescent],[data-moon=waning_crescent],
    [data-moon=waxing_gibbous],[data-moon=waning_gibbous]) .sky-bar-moon {
    mask-image:radial-gradient(ellipse var(--moon-shadow-width) 51% at var(--moon-shadow-x) 50%,
      transparent 96%,#000 100%);
  }
  [data-moon=waxing_crescent] .sky-bar-moon{--moon-shadow-width:43%;--moon-shadow-x:28%}
  [data-moon=waning_crescent] .sky-bar-moon{--moon-shadow-width:43%;--moon-shadow-x:72%}
  [data-moon=waxing_gibbous] .sky-bar-moon{--moon-shadow-width:36%;--moon-shadow-x:-12%}
  [data-moon=waning_gibbous] .sky-bar-moon{--moon-shadow-width:36%;--moon-shadow-x:112%}
  .sky-bar-cloud {
    position:absolute; width:var(--cloud-width); height:var(--cloud-height);
    background:linear-gradient(180deg,var(--cloud-top),var(--cloud-bottom) 92%);
    animation:roomcraft-sky-bar-drift var(--drift-time,78s) ease-in-out infinite alternate;
    animation-delay:var(--drift-delay,0s);
  }
  .sky-bar-cloud-high {
    left:23%; top:5%; opacity:.37;
    --cloud-width:clamp(100px,33vw,590px); --cloud-height:29%; --drift-delay:-13s;
    mask-image:
      radial-gradient(ellipse 47% 18% at 50% 48%,#000 25%,transparent 97%),
      radial-gradient(ellipse 29% 25% at 70% 39%,#000 24%,transparent 96%),
      radial-gradient(ellipse 32% 18% at 26% 66%,#000 18%,transparent 93%);
  }
  .sky-bar-cloud-west {
    left:0; top:18%; opacity:.76;
    --cloud-width:clamp(114px,33vw,500px); --cloud-height:46%; --drift-time:67s; --drift-delay:-24s;
    mask-image:
      radial-gradient(ellipse 44% 22% at 49% 66%,#000 61%,transparent 100%),
      radial-gradient(ellipse 18% 32% at 30% 45%,#000 62%,transparent 100%),
      radial-gradient(ellipse 23% 33% at 50% 44%,#000 68%,transparent 100%),
      radial-gradient(ellipse 24% 22% at 73% 53%,#000 49%,transparent 100%);
  }
  .sky-bar-cloud-east {
    right:1%; top:10%; opacity:.7;
    --cloud-width:clamp(135px,40vw,760px); --cloud-height:48%; --drift-time:89s; --drift-delay:-58s;
    mask-image:
      radial-gradient(ellipse 45% 21% at 49% 65%,#000 49%,transparent 100%),
      radial-gradient(ellipse 23% 23% at 33% 54%,#000 58%,transparent 100%),
      radial-gradient(ellipse 18% 29% at 66% 43%,#000 64%,transparent 100%),
      radial-gradient(ellipse 16% 29% at 79% 48%,#000 63%,transparent 100%),
      radial-gradient(ellipse 12% 20% at 90% 63%,#000 54%,transparent 100%);
  }
  .sky-bar-cloud-bank {
    display:none; left:-8%; top:-18%; opacity:.91;
    --cloud-width:118%; --cloud-height:84%; --drift-time:103s; --drift-delay:-29s;
    mask-image:
      radial-gradient(ellipse 46% 53% at 22% 26%,#000 50%,transparent 100%),
      radial-gradient(ellipse 42% 55% at 50% 25%,#000 68%,transparent 100%),
      radial-gradient(ellipse 43% 55% at 79% 29%,#000 58%,transparent 100%),
      radial-gradient(ellipse 25% 42% at 93% 35%,#000 45%,transparent 100%);
  }
  .storybook-sky-bar:is([data-effect=clear],[data-effect=wind],[data-effect=unknown]) .sky-bar-cloud-west{opacity:.27}
  .storybook-sky-bar:is([data-effect=clear],[data-effect=wind],[data-effect=unknown]) .sky-bar-cloud-east{opacity:.32}
  .storybook-sky-bar[data-sky=night] .sky-bar-cloud-high{opacity:.23}
  .storybook-sky-bar[data-effect=unknown] .sky-bar-cloud{animation:none}
  .storybook-sky-bar:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=rain],
    [data-effect=storm],[data-effect=thunder],[data-effect=snow],[data-effect=sleet]) .sky-bar-cloud-bank{display:block}
  .storybook-sky-bar:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=rain],
    [data-effect=storm],[data-effect=thunder],[data-effect=snow],[data-effect=sleet]) .sky-bar-celestial{opacity:.16}
  .storybook-sky-bar:is([data-effect=clouds],[data-effect=wind-clouds],[data-effect=rain],
    [data-effect=storm],[data-effect=thunder],[data-effect=snow],[data-effect=sleet]) .sky-bar-stars{visibility:hidden}
  .storybook-sky-bar:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]) .sky-bar-celestial{visibility:hidden}
  .storybook-sky-bar:is([data-effect=wind],[data-effect=wind-clouds]) .sky-bar-cloud{animation-duration:32s}
  .sky-bar-ridge {
    position:absolute; bottom:0; inset-inline:-1%; transform-origin:bottom;
  }
  .sky-bar-ridge-far {
    height:41%; background:linear-gradient(180deg,var(--ridge-far),var(--sky-lower));
    clip-path:polygon(0 67%,3% 55%,6% 37%,8% 31%,10% 12%,11.8% 21%,15% 54%,17.5% 61%,
      19.8% 75%,23.4% 59%,25.2% 46%,27.6% 49%,30% 73%,32.2% 85%,35% 71%,38% 67%,
      42% 80%,45.4% 62%,48% 41%,49.5% 43%,52% 64%,54% 57%,57% 32%,58.6% 25%,
      60.4% 33%,63% 52%,66.1% 68%,68.4% 82%,70.2% 74%,74% 53%,75.5% 36%,77% 29%,
      79% 9%,80.2% 6%,81.2% 13%,84.8% 50%,86.2% 52%,88.5% 69%,91% 63%,94% 50%,
      96.3% 39%,98% 44%,100% 54%,100% 100%,0 100%);
  }
  .sky-bar-ridge-near {
    height:27%; background:linear-gradient(180deg,var(--ridge-near),var(--haze) 94%);
    clip-path:polygon(0 30%,2.2% 38%,4.6% 54%,7.1% 47%,9% 33%,11.2% 26%,13% 40%,15.5% 59%,
      19% 69%,23% 86%,27% 80%,30% 70%,33% 71%,36% 57%,40% 63%,44% 80%,47% 88%,
      50% 79%,53% 61%,56% 48%,58% 44%,61% 49%,64% 65%,67% 83%,70% 88%,73% 70%,
      76% 68%,79% 50%,82% 40%,84% 25%,86% 30%,89% 47%,91% 45%,94% 26%,97% 17%,
      100% 27%,100% 100%,0 100%);
  }
  .sky-bar-haze {
    position:absolute; inset:55% 0 0; opacity:.44;
    background:linear-gradient(180deg,transparent 12%,var(--sky-lower) 77%,var(--haze));
  }
  .storybook-sky-bar[data-effect=fog] .sky-bar-haze{inset:25% 0 0; opacity:.8}
  .storybook-sky-bar[data-effect=fog] .sky-bar-celestial{opacity:.32}
  @keyframes roomcraft-sky-bar-drift{from{transform:translateX(-2vw)}to{transform:translateX(2vw)}}
  @keyframes roomcraft-sky-bar-glow{to{box-shadow:0 0 9px 3px #fff1bd83,0 0 25px 8px #ffdc885d}}
  @keyframes roomcraft-sky-bar-float{to{transform:translateY(-2px)}}
  @keyframes roomcraft-sky-bar-twinkle{to{opacity:.47}}
  .world[data-reduced-motion] .storybook-sky-bar *{animation:none!important}
  @media(prefers-reduced-motion:reduce) {
    .storybook-sky-bar *{animation:none!important}
  }
`;
