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
  const {condition, daylightKnown, night, moonPhase, temperature, unit, sunElevation, sunRising} = environment;
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
    sunElevation,
    sunRising,
  };
}

export const storybookWeatherMarkup = `
  <button type="button" class="dock-button weather" disabled aria-label="Weather unavailable">
    <span class="weather-glyph" aria-hidden="true"></span>
    <span>Weather</span><span class="weather-temperature"></span>
  </button>`;

export function updateStorybookWeather(dock, button, state, interactive) {
  dock.dataset.sky = state.sky;
  button.querySelector('.weather-temperature').textContent = state.reading;
  const description = state.reading ? `${state.label}, ${state.reading}` : state.label;
  button.setAttribute('aria-label', interactive ? `Weather details. ${description}` : description);
  button.title = description;
  button.disabled = !interactive;
}

export const storybookWeatherStyles = `
  .weather:disabled{cursor:default}
  .weather-temperature{font-size:12px;color:var(--bar-muted);font-variant-numeric:tabular-nums}
  .weather-temperature:empty{display:none}
  .weather-glyph{position:relative;display:block;flex:none;width:19px;height:17px}
  .weather-glyph::before{content:"";position:absolute;top:0;left:2px;width:11px;height:11px;
    border-radius:50%;background:#e2a644}
  .bar[data-sky=night] .weather-glyph::before{background:#f8daa0;box-shadow:3px -2px 0 0 var(--bar-surface) inset}
  .weather-glyph::after{content:"";position:absolute;bottom:1px;right:0;width:14px;height:7px;
    border-radius:7px;background:currentColor;box-shadow:-3px -4px 0 -1px currentColor}
  @media(max-width:330px){.weather-glyph{display:none}}
`;
