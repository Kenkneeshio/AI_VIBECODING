const CONDITIONS = new Map([
  ['sunny', ['Sunny', 'clear', 'cirrus']],
  ['clear-night', ['Clear night', 'clear', 'cirrus']],
  ['partlycloudy', ['Partly cloudy', 'partial', 'cumulus']],
  ['cloudy', ['Cloudy', 'clouds', 'stratus']],
  ['rainy', ['Rain', 'rain', 'nimbostratus']],
  ['pouring', ['Heavy rain', 'rain', 'nimbostratus']],
  ['lightning', ['Thunderstorms', 'thunder', 'cumulonimbus']],
  ['lightning-rainy', ['Thunderstorms', 'storm', 'cumulonimbus']],
  ['snowy', ['Snow', 'snow', 'stratus']],
  ['snowy-rainy', ['Sleet', 'sleet', 'nimbostratus']],
  ['hail', ['Hail', 'sleet', 'cumulonimbus']],
  ['fog', ['Fog', 'fog', 'fog']],
  ['windy', ['Windy', 'wind', 'cirrus']],
  ['windy-variant', ['Windy and cloudy', 'wind-clouds', 'altocumulus']],
  ['exceptional', ['Unusual weather', 'unknown', 'none']],
]);

const MOON_PHASES = new Set([
  'new_moon', 'waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full_moon',
  'waning_gibbous', 'last_quarter', 'waning_crescent',
]);

export const storybookWeatherChoices = Object.freeze([...CONDITIONS].map(([id, [label]]) => Object.freeze({
  id, label: id === 'lightning-rainy' ? 'Thunderstorms with rain' : label,
})));
export const storybookMoonChoices = Object.freeze([...MOON_PHASES]);

const DIRECTIONS = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
  'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

export function storybookWeather(environment = {}, offline = false) {
  const {condition, daylightKnown, night, moonPhase, temperature, unit, sunElevation, sunRising,
    sunAzimuth, moonAzimuth, moonElevation, windSpeed, windBearing, cloudCoverage} = environment;
  if (offline) return {label: 'Weather offline', sky: 'unknown', effect: 'unknown', cloud: 'none',
    moon: '', reading: '', windReading: ''};
  const [label, effect, cloud] = CONDITIONS.get(condition) || ['Weather unavailable', 'unknown', 'none'];
  const isNight = daylightKnown ? night : condition === 'clear-night';
  const isDay = daylightKnown ? !night : condition === 'sunny';
  const speed = Number.isFinite(windSpeed) && windSpeed >= 0 ? windSpeed : undefined;
  const bearing = Number.isFinite(windBearing) ? (windBearing % 360 + 360) % 360 : undefined;
  const direction = bearing === undefined ? '' : DIRECTIONS[Math.round(bearing / 22.5) % DIRECTIONS.length];
  const windReading = speed === undefined ? '' : speed === 0 ? 'Calm wind' :
    `Wind ${direction ? `from ${direction} at ` : ''}${Math.round(speed * 10) / 10} m/s`;
  return {
    label,
    sky: isNight ? 'night' : isDay ? 'day' : 'unknown',
    effect, cloud,
    moon: isNight && MOON_PHASES.has(moonPhase) ? moonPhase : '',
    reading: CONDITIONS.has(condition) && Number.isFinite(temperature) ? `${Math.round(temperature)}${unit || '°'}` : '',
    windSpeed: speed,
    windBearing: bearing,
    windReading,
    cloudCoverage: Number.isFinite(cloudCoverage) && cloudCoverage >= 0 && cloudCoverage <= 100
      ? cloudCoverage : undefined,
    sunElevation, sunRising, sunAzimuth, moonAzimuth, moonElevation,
  };
}

export const storybookWeatherMarkup = `
  <button type="button" class="dock-button weather" disabled aria-label="Weather unavailable">
    <span class="weather-glyph" aria-hidden="true"></span>
    <span>Weather</span><span class="weather-temperature"></span>
  </button>`;

export function updateStorybookWeather(dock, button, state, interactive) {
  dock.dataset.sky = state.sky;
  button.dataset.effect = state.effect;
  button.querySelector('.weather-temperature').textContent = state.reading;
  const description = [state.label, state.reading, state.windReading].filter(Boolean).join(', ');
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
  .weather[data-effect=clear] .weather-glyph::before{left:4px;top:3px}
  .weather[data-effect=clear] .weather-glyph::after{display:none}
  .weather:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]) .weather-glyph::before{
    top:10px;left:3px;width:1.5px;height:5px;background:#79a5c0;border-radius:3px;
    transform:skew(-20deg);box-shadow:5px 0 #79a5c0,10px 0 #79a5c0}
  .weather:is([data-effect=rain],[data-effect=storm],[data-effect=thunder],[data-effect=sleet]) .weather-glyph::after{
    bottom:6px;background:#74899c;box-shadow:-3px -4px 0 -1px #74899c}
  .weather:is([data-effect=clouds],[data-effect=fog],[data-effect=snow]) .weather-glyph::before{opacity:.35}
  .weather[data-effect=unknown] .weather-glyph{opacity:.48}
  @media(max-width:330px){.weather-glyph{display:none}}
`;
