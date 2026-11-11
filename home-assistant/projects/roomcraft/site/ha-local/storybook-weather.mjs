const CONDITIONS = new Map([
  ['sunny', ['Sunny', 'clear']],
  ['clear-night', ['Clear night', 'clear']],
  ['partlycloudy', ['Partly cloudy', 'partial']],
  ['cloudy', ['Cloudy', 'clouds']],
  ['rainy', ['Rain', 'rain']],
  ['pouring', ['Heavy rain', 'rain']],
  ['lightning', ['Thunderstorms', 'thunder']],
  ['lightning-rainy', ['Thunderstorms', 'storm']],
  ['snowy', ['Snow', 'snow']],
  ['snowy-rainy', ['Sleet', 'sleet']],
  ['hail', ['Hail', 'sleet']],
  ['fog', ['Fog', 'fog']],
  ['windy', ['Windy', 'wind']],
  ['windy-variant', ['Windy and cloudy', 'wind-clouds']],
  ['exceptional', ['Unusual weather', 'unknown']],
]);

const MOON_PHASES = new Set([
  'new_moon', 'waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full_moon',
  'waning_gibbous', 'last_quarter', 'waning_crescent',
]);

export function storybookWeather(environment = {}, offline = false) {
  const {condition, daylightKnown, night, moonPhase, temperature, unit} = environment;
  if (offline) return {label: 'Weather offline', sky: 'unknown', effect: 'unknown', moon: '', reading: ''};
  const [label, effect] = CONDITIONS.get(condition) || ['Weather unavailable', 'unknown'];
  const isNight = daylightKnown ? night : condition === 'clear-night';
  const isDay = daylightKnown ? !night : condition === 'sunny';
  return {
    label,
    sky: isNight ? 'night' : isDay ? 'day' : 'unknown',
    effect,
    moon: isNight && MOON_PHASES.has(moonPhase) ? moonPhase : '',
    reading: CONDITIONS.has(condition) && Number.isFinite(temperature) ? `${Math.round(temperature)}${unit || '°'}` : '',
  };
}

export const storybookWeatherMarkup = `
  <button type="button" class="weather" disabled aria-label="Weather unavailable">
    <span class="weather-sky" aria-hidden="true">
      <span class="sky-stars"></span><span class="sky-sun"></span><span class="sky-moon"></span>
      <span class="sky-cloud cloud-back"></span><span class="sky-cloud cloud-front"></span>
      <span class="sky-precipitation"><i></i><i></i><i></i></span>
      <span class="sky-bolt"></span><span class="sky-wind"></span><span class="sky-fog"></span>
    </span>
    <span class="weather-info"><span class="weather-temperature"></span><span class="weather-condition">Weather unavailable</span></span>
  </button>`;

export function updateStorybookWeather(header, button, state, interactive) {
  header.dataset.sky = state.sky;
  button.dataset.effect = state.effect;
  button.dataset.moon = state.moon;
  button.querySelector('.weather-temperature').textContent = state.reading;
  button.querySelector('.weather-condition').textContent = state.label;
  const description = state.reading ? `${state.label}, ${state.reading}` : state.label;
  button.setAttribute('aria-label', interactive ? `Weather details. ${description}` : description);
  button.disabled = !interactive;
}

export const storybookWeatherStyles = `
  .bar .weather{display:flex;gap:7px;min-height:44px;max-width:180px;padding:3px 9px 3px 4px;
    text-align:left;background:var(--bar-surface);border:1px solid var(--bar-line);border-radius:16px}
  .bar .weather:hover:not(:disabled){text-decoration:none;background:var(--bar-hover)}
  .bar .weather:disabled{cursor:default}
  .weather-info{display:flex;flex-direction:column;min-width:0;line-height:1.17}
  .weather-temperature{font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}
  .weather-temperature:empty{display:none}
  .weather-condition{font-size:11px;color:var(--bar-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .weather-sky{position:relative;flex:none;width:47px;height:34px;border-radius:12px;overflow:hidden;
    background:linear-gradient(160deg,#75a7cc,#c2dfed 78%);box-shadow:inset 0 0 0 1px #516f8635;
    --cloud:#fff7e5;--cloud-shadow:#c7d9e2}
  .bar[data-sky=night] .weather-sky{background:linear-gradient(155deg,#17263c,#34476a 84%);
    box-shadow:inset 0 0 0 1px #bfccec38;--cloud:#c7d0e4;--cloud-shadow:#899cba}
  .bar:not([data-sky]) .weather-sky,.bar[data-sky=unknown] .weather-sky{background:linear-gradient(155deg,#9babb2,#bdcbd1)}
  .weather-sky>span{display:none;position:absolute}
  .weather[data-effect=unknown] .weather-sky{opacity:.55}
  .weather[data-effect=unknown] .weather-sky>span{display:none}
  .bar[data-sky=day] .sky-sun{display:block;left:14px;top:8px;width:17px;height:17px;border-radius:50%;
    background:radial-gradient(circle at 36% 31%,#fff1ae,#ffc566 72%);box-shadow:0 0 8px #ffd889b5;
    animation:roomcraft-sun-glow 5s ease-in-out infinite alternate}
  .sky-sun::before{content:"";position:absolute;inset:-5px;border-radius:50%;
    background:repeating-conic-gradient(transparent 0 20deg,#ffdf99 23deg 26deg,transparent 29deg 45deg);
    mask:radial-gradient(circle,transparent 53%,#000 57%,#000 69%,transparent 73%);
    animation:roomcraft-sun-rays 38s linear infinite}
  .bar[data-sky=night] .sky-stars{display:block;inset:0;background:
    radial-gradient(circle at 16% 27%,#fff3cd 0 1px,transparent 1.4px),
    radial-gradient(circle at 72% 22%,#d9e9fb 0 .8px,transparent 1.3px),
    radial-gradient(circle at 84% 66%,#fff3cd 0 1px,transparent 1.4px),
    radial-gradient(circle at 24% 78%,#d9e9fb 0 .7px,transparent 1.2px);
    animation:roomcraft-twinkle 4s ease-in-out infinite alternate}
  .bar[data-sky=night] .weather:not([data-moon=""]) .sky-moon{display:block;left:14px;top:8px;
    width:17px;height:17px;overflow:hidden;border-radius:50%;box-shadow:0 0 7px #ffe8b47d;
    background:radial-gradient(circle at 35% 35%,#dbc49c 0 1px,transparent 2.2px),
      radial-gradient(circle at 68% 64%,#d9c6a5 0 1.1px,transparent 2.2px),
      radial-gradient(circle at 69% 31%,#fff8df,#f0d1a2 78%);
    animation:roomcraft-moon-float 6s ease-in-out infinite alternate}
  .sky-moon::after{content:"";position:absolute;inset:0;background:#253655}
  [data-moon=full_moon] .sky-moon::after{display:none}
  [data-moon=new_moon] .sky-moon{box-shadow:none;opacity:.25}
  [data-moon=waxing_crescent] .sky-moon::after,[data-moon=waning_crescent] .sky-moon::after,
  [data-moon=waxing_gibbous] .sky-moon::after,[data-moon=waning_gibbous] .sky-moon::after{
    inset:-1px;border-radius:50%}
  [data-moon=waxing_crescent] .sky-moon::after{transform:translateX(-30%)}
  [data-moon=waning_crescent] .sky-moon::after{transform:translateX(30%)}
  [data-moon=waxing_gibbous] .sky-moon::after{transform:translateX(-73%)}
  [data-moon=waning_gibbous] .sky-moon::after{transform:translateX(73%)}
  [data-moon=first_quarter] .sky-moon::after{right:50%}
  [data-moon=last_quarter] .sky-moon::after{left:50%}
  .weather:not([data-effect=clear]):not([data-effect=wind]) .sky-sun,
  .bar[data-sky=night] .weather:not([data-effect=clear]):not([data-effect=wind]) .sky-moon{left:9px;top:5px}
  .weather[data-effect]:not([data-effect=clear]):not([data-effect=wind]):not([data-effect=partial]) .sky-sun,
  .bar[data-sky=night] .weather[data-effect]:not([data-effect=clear]):not([data-effect=wind]):not([data-effect=partial]) .sky-moon{display:none}
  .weather[data-effect]:not([data-effect=clear]):not([data-effect=unknown]):not([data-effect=wind]) .sky-cloud{display:block}
  .sky-cloud{height:8px;width:24px;top:15px;left:12px;border-radius:10px;background:var(--cloud);
    box-shadow:0 2px 3px var(--cloud-shadow);animation:roomcraft-cloud-drift 7s ease-in-out infinite alternate}
  .sky-cloud::before,.sky-cloud::after{content:"";position:absolute;background:inherit;border-radius:50%}
  .sky-cloud::before{width:10px;height:10px;left:3px;top:-4px}
  .sky-cloud::after{width:12px;height:12px;left:10px;top:-7px}
  .sky-cloud.cloud-back{top:12px;left:6px;opacity:.57;scale:.8;animation-direction:alternate-reverse}
  .weather[data-effect=partial] .cloud-back{display:none!important}
  .weather[data-effect=partial] .cloud-front{top:20px;left:19px}
  .weather[data-effect=rain] .sky-precipitation,.weather[data-effect=storm] .sky-precipitation,
  .weather[data-effect=snow] .sky-precipitation,.weather[data-effect=sleet] .sky-precipitation{display:block}
  .sky-precipitation{left:15px;top:24px;width:21px;height:10px}
  .sky-precipitation i{position:absolute;left:1px;width:2px;height:5px;border-radius:3px;background:#e1f4ff;
    animation:roomcraft-sky-fall 1.3s linear infinite;animation-delay:-.1s}
  .sky-precipitation i:nth-child(2){left:8px;animation-delay:-.56s}
  .sky-precipitation i:nth-child(3){left:15px;animation-delay:-.92s}
  .weather[data-effect=snow] .sky-precipitation i,.weather[data-effect=sleet] .sky-precipitation i{
    width:3px;height:3px;background:#fff9f0;animation-duration:2.2s}
  .weather[data-effect=sleet] .sky-precipitation i:nth-child(2){width:2px;height:5px}
  .weather[data-effect=storm] .sky-bolt,.weather[data-effect=thunder] .sky-bolt{
    display:block;left:32px;top:18px;width:8px;height:12px;background:#ffda8d;
    clip-path:polygon(55% 0,100% 0,65% 43%,100% 43%,11% 100%,42% 53%,7% 53%);
    animation:roomcraft-thunder 8s linear infinite}
  .weather[data-effect=wind] .sky-wind,.weather[data-effect=wind-clouds] .sky-wind{display:block;left:9px;top:25px;
    width:22px;height:2px;background:#f8efdd;border-radius:2px;box-shadow:6px -4px 0 #f8efdd99;
    animation:roomcraft-cloud-drift 2.8s ease-in-out infinite alternate}
  .weather[data-effect=fog] .sky-fog{display:block;left:7px;top:23px;width:30px;height:2px;background:#f6f3e8;
    border-radius:3px;box-shadow:6px 5px 0 #f6f3e8a8,-2px -4px 0 #f6f3e8b3;
    animation:roomcraft-cloud-drift 6s ease-in-out infinite alternate}
  @keyframes roomcraft-sun-glow{to{box-shadow:0 0 12px 2px #ffdc9ccb}}
  @keyframes roomcraft-sun-rays{to{transform:rotate(360deg)}}
  @keyframes roomcraft-twinkle{to{opacity:.52}}
  @keyframes roomcraft-moon-float{to{transform:translate(1px,-2px)}}
  @keyframes roomcraft-cloud-drift{from{transform:translateX(-2px)}to{transform:translateX(3px)}}
  @keyframes roomcraft-sky-fall{from{transform:translate(1px,-2px) rotate(18deg);opacity:0}
    24%,55%{opacity:1}to{transform:translate(-2px,8px) rotate(18deg);opacity:0}}
  @keyframes roomcraft-thunder{0%,94%,100%{opacity:.42}95%{opacity:1}}
  @media(prefers-reduced-motion:reduce){.weather-sky *, .weather-sky *::before{animation:none!important}
    .sky-precipitation i:nth-child(2){top:3px}}
  @media(max-width:540px){.bar .weather{padding-right:6px;gap:5px;max-width:116px}
    .weather-sky{width:42px}.weather-condition{font-size:10px}}
  @media(max-width:400px){.bar .weather{padding-inline:3px;min-width:0}.weather-info{display:none}}
`;
