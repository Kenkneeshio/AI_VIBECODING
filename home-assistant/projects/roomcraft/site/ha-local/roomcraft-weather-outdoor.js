/**
 * Outdoor weather for the 1536 x 864 Roomcraft scene (source image y80..944).
 * This element sits over the picture plan; the SVG clip keeps every effect
 * outside the house. Recheck the clip if the shell dimensions change.
 *
 * Picture-elements configuration:
 *   type: custom:roomcraft-weather-outdoor
 *   weather_entity: weather.example
 *   sun_entity: sun.sun
 *   moon_entity: sensor.example_moon_phase
 */
(() => {
  'use strict';

  const SCENE_WIDTH = 1536;
  const SCENE_HEIGHT = 864;
  const HORIZON_MS = 12 * 60 * 60 * 1000;
  const REFRESH_MS = 15 * 60 * 1000;
  const RETRY_MS = 5 * 60 * 1000;
  const PREVIEW_MS = 12000;
  const MOON_FRACTIONS = {
    new_moon: 0,
    waxing_crescent: 0.25,
    first_quarter: 0.5,
    waxing_gibbous: 0.75,
    full_moon: 1,
    waning_gibbous: 0.75,
    last_quarter: 0.5,
    waning_crescent: 0.25,
  };
  const CONDITIONS = {
    sunny: 'sun',
    'clear-night': 'clear',
    partlycloudy: 'partly-cloudy',
    cloudy: 'cloud',
    rainy: 'rain',
    pouring: 'rain',
    'lightning-rainy': 'storm',
    lightning: 'storm',
    snowy: 'snow',
    'snowy-rainy': 'snow',
    hail: 'snow',
    fog: 'fog',
    windy: 'wind',
    'windy-variant': 'wind',
  };
  const SYMBOLS = {
    sun: '☀', clear: '☾', 'partly-cloudy': '⛅', cloud: '☁',
    rain: '☂', storm: '⚡', snow: '❄', fog: '≋', wind: '≋',
  };

  function weatherKind(condition) {
    return CONDITIONS[String(condition || '').toLowerCase()] || 'cloud';
  }

  function normalizeHourlyForecast(entries, now = Date.now()) {
    if (!Array.isArray(entries)) return [];
    const seen = new Set();
    return entries
      .map(entry => {
        const at = Date.parse(entry?.datetime || '');
        return Number.isFinite(at) ? {
          at,
          condition: String(entry.condition || 'cloudy'),
          temperature: entry.temperature != null && Number.isFinite(Number(entry.temperature))
            ? Number(entry.temperature) : null,
          precipitation: entry.precipitation != null && Number.isFinite(Number(entry.precipitation))
            ? Number(entry.precipitation) : null,
        } : null;
      })
      .filter(entry => entry && entry.at > now && entry.at <= now + HORIZON_MS)
      .sort((a, b) => a.at - b.at)
      .filter(entry => {
        if (seen.has(entry.at)) return false;
        seen.add(entry.at);
        return true;
      });
  }

  function forecastFromResponse(response, entityId) {
    const entries = response?.response?.[entityId]?.forecast
      || response?.[entityId]?.forecast
      || response?.result?.response?.[entityId]?.forecast;
    return Array.isArray(entries) ? entries : [];
  }

  function daylightAt(timestamp, sunState, now = Date.now()) {
    if (!sunState || !['above_horizon', 'below_horizon'].includes(sunState.state)) return null;
    let daylight = sunState.state === 'above_horizon';
    const attributes = sunState.attributes || {};
    const events = [
      { at: Date.parse(attributes.next_rising || ''), daylight: true },
      { at: Date.parse(attributes.next_setting || ''), daylight: false },
    ].filter(event => Number.isFinite(event.at) && event.at > now && event.at <= timestamp)
      .sort((a, b) => a.at - b.at);
    for (const event of events) daylight = event.daylight;
    return daylight;
  }

  function moonPhasePath(phase, x = 350, y = 35, radius = 17) {
    const fraction = MOON_FRACTIONS[phase];
    if (fraction === undefined || fraction === 0) return '';
    if (fraction === 1) {
      return 'M ' + x + ' ' + (y - radius) + ' A ' + radius + ' ' + radius +
        ' 0 1 1 ' + x + ' ' + (y + radius) + ' A ' + radius + ' ' + radius +
        ' 0 1 1 ' + x + ' ' + (y - radius) + ' Z';
    }
    const waxing = phase.startsWith('waxing') || phase === 'first_quarter';
    const sweep = waxing ? 1 : 0;
    const controlX = x + (waxing ? 1 : -1) * 2 * radius * (1 - 2 * fraction);
    return 'M ' + x + ' ' + (y - radius) + ' A ' + radius + ' ' + radius +
      ' 0 0 ' + sweep + ' ' + x + ' ' + (y + radius) +
      ' Q ' + controlX + ' ' + y + ' ' + x + ' ' + (y - radius) + ' Z';
  }

  function validEntityId(value, domain) {
    return typeof value === 'string' && new RegExp('^' + domain + '\\.[a-z0-9_]+$').test(value);
  }

  function particleMarkup(kind, count) {
    const snow = kind === 'snow';
    return Array.from({ length: count }, (_, index) => {
      const x = (index * 173 + 67) % SCENE_WIDTH;
      const y = (index * 109 + 31) % SCENE_HEIGHT;
      const delay = -(index % 9) * 0.31;
      return snow
        ? '<circle class="flake" cx="' + x + '" cy="' + y + '" r="' + (2 + index % 3) +
          '" style="animation-delay:' + delay + 's"/>'
        : '<path class="drop" d="M' + x + ' ' + y + ' l-7 17" style="animation-delay:' + delay + 's"/>';
    }).join('');
  }

  const STYLE = [
    ':host{display:block;position:relative;width:100%;height:100%;pointer-events:none;overflow:hidden;}',
    '*,*::before,*::after{box-sizing:border-box}',
    '.world{position:absolute;inset:0;overflow:hidden}',
    'svg{position:absolute;inset:0;width:100%;height:100%;overflow:hidden}',
    '.night-wash{fill:#101c49;opacity:var(--night-opacity,0);transition:opacity 1.5s ease}',
    '.dusk-wash{fill:#d96945;opacity:var(--dusk-opacity,0);transition:opacity 1.5s ease}',
    '.sun-disc{fill:#fff6be;filter:drop-shadow(0 0 17px #ffe09d);opacity:0;transition:opacity 1s}',
    '.sun-ray{stroke:#fff4b3;stroke-width:3;stroke-linecap:round;opacity:0;transition:opacity 1s}',
    '.moon-dark{fill:#304675;opacity:0;filter:drop-shadow(0 0 9px #e9eff5)}',
    '.moon-lit{fill:#e5eaf1;opacity:0;filter:drop-shadow(0 0 11px #f2f5f9)}',
    '.star{fill:#f5f2d8;opacity:0;animation:twinkle 4s ease-in-out infinite alternate}',
    '.cloud{fill:#f4f3e9;opacity:0;filter:drop-shadow(2px 4px 3px #23384955);animation:drift 25s ease-in-out infinite alternate}',
    '.cloud.back{fill:#c8d3d3;opacity:0;animation-duration:37s}',
    '.rain,.snow,.fog,.wind{opacity:0;transition:opacity .7s}',
    '.drop{stroke:#cee8f2;stroke-width:2.8;stroke-linecap:round;animation:rainfall .7s linear infinite}',
    '.flake{fill:#fafcff;filter:drop-shadow(0 1px 2px #a6d6e3);animation:snowfall 4s linear infinite}',
    '.fog rect{fill:#e5eceb;opacity:.45;filter:blur(10px);animation:drift 12s ease-in-out infinite alternate}',
    '.wind path{fill:none;stroke:#edf1e4;stroke-width:5;stroke-linecap:round;opacity:.72;animation:drift 2.8s ease-in-out infinite alternate}',
    '.world[data-day="true"][data-weather="sun"] .sun-disc,',
    '.world[data-day="true"][data-weather="sun"] .sun-ray,',
    '.world[data-day="true"][data-weather="clear"] .sun-disc,',
    '.world[data-day="true"][data-weather="clear"] .sun-ray{opacity:.9}',
    '.world[data-day="true"][data-weather="partly-cloudy"] .sun-disc,',
    '.world[data-day="true"][data-weather="partly-cloudy"] .sun-ray{opacity:.38}',
    '.world[data-day="false"][data-moon="true"][data-weather="clear"] .moon-dark,',
    '.world[data-day="false"][data-moon="true"][data-weather="clear"] .moon-lit{opacity:.95}',
    '.world[data-day="false"][data-moon="true"][data-weather="partly-cloudy"] .moon-dark,',
    '.world[data-day="false"][data-moon="true"][data-weather="partly-cloudy"] .moon-lit{opacity:.4}',
    '.world[data-day="false"][data-weather="clear"] .star,',
    '.world[data-day="false"][data-weather="partly-cloudy"] .star{opacity:.8}',
    '.world[data-weather="cloud"] .cloud,.world[data-weather="partly-cloudy"] .cloud,',
    '.world[data-weather="rain"] .cloud,.world[data-weather="storm"] .cloud,',
    '.world[data-weather="snow"] .cloud{opacity:.72}',
    '.world[data-weather="rain"] .rain,.world[data-weather="storm"] .rain{opacity:.8}',
    '.world[data-weather="snow"] .snow{opacity:.85}',
    '.world[data-weather="fog"] .fog{opacity:.85}',
    '.world[data-weather="wind"] .wind{opacity:.9}',
    '.world[data-weather="storm"] .night-wash{animation:lightning 8s linear infinite}',
    '.forecast{position:absolute;left:4%;right:4%;bottom:.2%;height:4.7%;min-height:34px;',
    'border-radius:12px;background:linear-gradient(90deg,#14272eaf,#24333a8c);',
    'box-shadow:0 -2px 8px #20303826;pointer-events:none;font:10px/1.05 sans-serif;color:#f6f3e9}',
    '.forecast::before{content:"";position:absolute;left:4.5%;right:2%;top:49%;height:1px;background:#f0eee56b}',
    '.tick{position:absolute;top:0;transform:translateX(-50%);width:37px;height:100%;border:0;',
    'background:none;color:inherit;font:inherit;padding:0;display:flex;align-items:center;justify-content:center;',
    'flex-direction:column;gap:1px;pointer-events:auto;cursor:pointer;border-radius:9px;',
    'text-shadow:0 1px 3px #06181c;touch-action:manipulation}',
    '.tick:hover,.tick:focus-visible,.tick[aria-pressed="true"]{background:#f0e8c933;outline:1px solid #fff8d388}',
    '.tick.now{left:2%;width:43px;background:#fff2b72b;outline:1px solid #fff2b788}',
    '.tick .icon{font-size:16px;line-height:16px}',
    '.tick .label{font-size:8px;white-space:nowrap;letter-spacing:.03em}',
    '.preview-note{position:absolute;right:3%;top:3%;font:9px sans-serif;color:#f7f4de;',
    'background:#14252b99;border-radius:7px;padding:2px 5px;pointer-events:none;opacity:0;transition:opacity .2s}',
    '.world[data-preview="true"] .preview-note{opacity:1}',
    '.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;',
    'clip:rect(0,0,0,0);white-space:nowrap;border:0}',
    '@keyframes rainfall{to{transform:translate(-22px,45px)}}',
    '@keyframes snowfall{to{transform:translate(-13px,38px)}}',
    '@keyframes drift{to{transform:translateX(25px)}}',
    '@keyframes twinkle{to{opacity:.25}}',
    '@keyframes lightning{0%,94%,97%,100%{filter:none}95%,96%{filter:brightness(1.7)}}',
    ':host([data-paused="true"]) *, :host([data-paused="true"]) *::before{animation-play-state:paused!important}',
    '@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}',
  ].join('');

  function sceneryMarkup() {
    const stars = Array.from({ length: 21 }, (_, index) => {
      const x = (index * 193 + 71) % SCENE_WIDTH;
      const y = 7 + (index * 37) % 58;
      return '<circle class="star" cx="' + x + '" cy="' + y +
        '" r="' + (1 + index % 2) + '" style="animation-delay:-' + (index % 6) + 's"/>';
    }).join('');
    const rays = Array.from({ length: 8 }, (_, index) => {
      const angle = index * Math.PI / 4;
      const x1 = 1010 + Math.round(Math.cos(angle) * 24);
      const y1 = 35 + Math.round(Math.sin(angle) * 24);
      const x2 = 1010 + Math.round(Math.cos(angle) * 31);
      const y2 = 35 + Math.round(Math.sin(angle) * 31);
      return '<path class="sun-ray" d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '"/>';
    }).join('');
    return '<svg viewBox="0 0 1536 864" preserveAspectRatio="none" aria-hidden="true">' +
      '<defs><clipPath id="roomcraft-outside">' +
      '<rect x="0" y="0" width="1536" height="75"/>' +
      '<rect x="0" y="75" width="145" height="740"/>' +
      '<rect x="145" y="75" width="235" height="305"/>' +
      '<rect x="0" y="815" width="1536" height="49"/>' +
      '</clipPath>' +
      '<linearGradient id="roomcraft-wash-feather" x1="0" y1="0" x2="0" y2="75" gradientUnits="userSpaceOnUse">' +
      '<stop offset="0%" stop-color="#fff"/>' +
      '<stop offset="76%" stop-color="#fff"/>' +
      '<stop offset="100%" stop-color="#000"/>' +
      '</linearGradient>' +
      '<mask id="roomcraft-wash-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1536" height="864">' +
      '<rect x="0" y="0" width="1536" height="75" fill="url(#roomcraft-wash-feather)"/>' +
      '<rect x="0" y="0" width="145" height="815" fill="#fff"/>' +
      '<rect x="145" y="0" width="235" height="380" fill="#fff"/>' +
      '<rect x="0" y="815" width="1536" height="49" fill="#fff"/>' +
      '</mask></defs>' +
      '<g clip-path="url(#roomcraft-outside)">' +
      '<rect class="dusk-wash" width="1536" height="864" mask="url(#roomcraft-wash-mask)"/>' +
      '<rect class="night-wash" width="1536" height="864" mask="url(#roomcraft-wash-mask)"/>' +
      stars + rays + '<circle class="sun-disc" cx="1010" cy="35" r="19"/>' +
      '<circle class="moon-dark" cx="350" cy="35" r="17"/>' +
      '<path class="moon-lit" d=""/>' +
      '<g class="cloud"><ellipse cx="700" cy="45" rx="64" ry="17"/>' +
      '<circle cx="676" cy="35" r="19"/><circle cx="710" cy="31" r="23"/></g>' +
      '<g class="cloud back"><ellipse cx="1165" cy="49" rx="59" ry="15"/>' +
      '<circle cx="1140" cy="39" r="18"/><circle cx="1176" cy="35" r="21"/></g>' +
      '<g class="rain">' + particleMarkup('rain', 62) + '</g>' +
      '<g class="snow">' + particleMarkup('snow', 47) + '</g>' +
      '<g class="fog"><rect x="0" y="36" width="1536" height="40"/>' +
      '<rect x="0" y="111" width="1536" height="35"/>' +
      '<rect x="0" y="615" width="390" height="50"/></g>' +
      '<g class="wind"><path d="M106 105 Q159 78 217 100"/>' +
      '<path d="M1110 124 Q1187 89 1261 117"/>' +
      '<path d="M80 620 Q184 583 293 611"/></g>' +
      '</g></svg>';
  }

  class RoomcraftWeatherOutdoor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = null;
      this._hass = null;
      this._forecast = [];
      this._forecastFetchedAt = 0;
      this._fetchPending = false;
      this._previewAt = null;
      this._previewTimer = null;
      this._clockTimer = null;
      this._visibilityChanged = () => this._setPaused();
      this.shadowRoot.innerHTML = '<style>' + STYLE + '</style>' +
        '<div class="world" data-weather="cloud" data-day="true" data-preview="false">' +
        sceneryMarkup() + '<div class="forecast" role="group" aria-label="Current weather and next 12 hours"></div>' +
        '<span class="preview-note" aria-hidden="true"></span>' +
        '<span class="sr-only" aria-live="polite"></span></div>';
      this._world = this.shadowRoot.querySelector('.world');
      this._strip = this.shadowRoot.querySelector('.forecast');
      this._moonLit = this.shadowRoot.querySelector('.moon-lit');
      this._previewNote = this.shadowRoot.querySelector('.preview-note');
      this._announcement = this.shadowRoot.querySelector('.sr-only');
      this._strip.addEventListener('click', event => this._handleForecastClick(event));
    }

    setConfig(config) {
      if (!config || !validEntityId(config.weather_entity, 'weather')) {
        throw new Error('Roomcraft weather needs a weather_entity.');
      }
      if (config.sun_entity && !validEntityId(config.sun_entity, 'sun')) {
        throw new Error('Invalid sun_entity.');
      }
      if (config.moon_entity && !validEntityId(config.moon_entity, 'sensor')) {
        throw new Error('Invalid moon_entity.');
      }
      const changed = this._config?.weather_entity !== config.weather_entity;
      this._config = {
        weather_entity: config.weather_entity,
        sun_entity: config.sun_entity || 'sun.sun',
        moon_entity: config.moon_entity || null,
      };
      if (changed) {
        this._forecast = [];
        this._forecastFetchedAt = 0;
      }
      this._render();
      this._fetchForecast();
    }

    set hass(value) {
      this._hass = value;
      this._render();
      this._fetchForecast();
    }

    getCardSize() { return 1; }

    connectedCallback() {
      this._setPaused();
      document.addEventListener('visibilitychange', this._visibilityChanged);
      if (!this._clockTimer) this._clockTimer = setInterval(() => {
        this._render();
        this._fetchForecast();
      }, 60000);
      this._fetchForecast();
    }

    disconnectedCallback() {
      document.removeEventListener('visibilitychange', this._visibilityChanged);
      if (this._clockTimer) clearInterval(this._clockTimer);
      if (this._previewTimer) clearTimeout(this._previewTimer);
      this._clockTimer = null;
      this._previewTimer = null;
    }

    _setPaused() {
      this.dataset.paused = document.visibilityState === 'hidden' ? 'true' : 'false';
      if (this.dataset.paused === 'false') {
        this._render();
        this._fetchForecast();
      }
    }

    async _fetchForecast() {
      if (!this._config || !this._hass?.callWS || this._fetchPending ||
          Date.now() - this._forecastFetchedAt < REFRESH_MS ||
          this.dataset.paused === 'true') return;
      const entityId = this._config.weather_entity;
      const hass = this._hass;
      this._fetchPending = true;
      this._forecastFetchedAt = Date.now();
      try {
        const response = await hass.callWS({
          type: 'call_service',
          domain: 'weather',
          service: 'get_forecasts',
          service_data: { entity_id: entityId, type: 'hourly' },
          return_response: true,
        });
        if (this._config?.weather_entity === entityId) {
          this._forecast = normalizeHourlyForecast(forecastFromResponse(response, entityId));
          this._render();
        }
      } catch (_error) {
        // Keep observed weather visible. Some integrations do not offer hourly forecasts.
        this._forecastFetchedAt = Date.now() - REFRESH_MS + RETRY_MS;
      } finally {
        this._fetchPending = false;
        if (this._config?.weather_entity !== entityId) this._fetchForecast();
      }
    }

    _handleForecastClick(event) {
      const button = event.target.closest('button[data-at]');
      if (!button) return;
      const at = Number(button.dataset.at);
      this._previewAt = Number.isFinite(at) && at > 0 ? at : null;
      if (this._previewTimer) clearTimeout(this._previewTimer);
      if (this._previewAt) {
        this._previewTimer = setTimeout(() => {
          this._previewAt = null;
          this._render();
        }, PREVIEW_MS);
      }
      this._render();
    }

    _render() {
      if (!this._config || !this._hass) return;
      const now = Date.now();
      const weather = this._hass.states?.[this._config.weather_entity];
      const sun = this._hass.states?.[this._config.sun_entity];
      const moon = this._config.moon_entity
        ? this._hass.states?.[this._config.moon_entity] : null;
      const selected = this._forecast.find(entry => entry.at === this._previewAt);
      if (this._previewAt && !selected) this._previewAt = null;
      const observed = weather?.state && !['unknown', 'unavailable'].includes(weather.state)
        ? weather.state : 'cloudy';
      const condition = selected?.condition || observed;
      const daylight = daylightAt(selected?.at || now, sun, now);
      const isDay = daylight === null ? weatherKind(condition) !== 'clear' : daylight;
      const elevation = Number(sun?.attributes?.elevation);
      const twilight = !selected && Number.isFinite(elevation) && elevation > -7 && elevation < 10;
      this._world.dataset.weather = weatherKind(condition);
      this._world.dataset.day = isDay ? 'true' : 'false';
      this._world.dataset.moon = Object.hasOwn(MOON_FRACTIONS, moon?.state) &&
        moon.state !== 'new_moon' ? 'true' : 'false';
      this._world.dataset.preview = selected ? 'true' : 'false';
      this._world.style.setProperty('--night-opacity', isDay ? (twilight ? '0.17' : '0') : '0.55');
      this._world.style.setProperty('--dusk-opacity', twilight ? '0.18' : '0');
      this._moonLit.setAttribute('d', moonPhasePath(moon?.state));
      this._previewNote.textContent = selected ? '↗ ' + this._formatTime(selected.at) : '';
      this._renderStrip(now, weather, selected);
    }

    _formatTime(timestamp) {
      const timezone = this._hass?.config?.time_zone;
      try {
        return new Intl.DateTimeFormat(undefined, {
          hour: 'numeric', timeZone: timezone || undefined,
        }).format(timestamp);
      } catch (_error) {
        return new Intl.DateTimeFormat(undefined, { hour: 'numeric' }).format(timestamp);
      }
    }

    _renderStrip(now, weather, selected) {
      const entries = this._forecast.filter(entry => entry.at > now && entry.at <= now + HORIZON_MS);
      const forecastKey = entries.map(entry => [
        entry.at, entry.condition, entry.temperature,
      ].join(':')).join('|') + '|' + weather?.state + '|' + weather?.attributes?.temperature +
        '|' + selected?.at + '|' + Math.floor(now / 60000);
      if (this._strip.dataset.key === forecastKey) return;
      this._strip.dataset.key = forecastKey;
      this._strip.replaceChildren();
      this._appendTick(0, weather?.state || 'cloudy', weather?.attributes?.temperature, 'Now', true, false);
      const displayed = entries.filter((entry, index) => {
        if (entries.length <= 13) return true;
        return index === entries.length - 1 || index % 2 === 0;
      });
      for (const entry of displayed) {
        const position = 5 + 91 * ((entry.at - now) / HORIZON_MS);
        this._appendTick(entry.at, entry.condition, entry.temperature,
          this._formatTime(entry.at), false, selected?.at === entry.at, position);
      }
      this._announcement.textContent = selected
        ? this._formatTime(selected.at) + ' forecast: ' + selected.condition
        : 'Current weather: ' + (weather?.state || 'unavailable');
    }

    _appendTick(at, condition, temperature, label, current, selected, position) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = current ? 'tick now' : 'tick';
      button.dataset.at = String(at);
      button.style.left = current ? '2%' : position + '%';
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
      const unit = this._hass?.states?.[this._config.weather_entity]?.attributes?.temperature_unit || '';
      const tempText = temperature != null && Number.isFinite(Number(temperature))
        ? Math.round(Number(temperature)) + unit : '';
      button.setAttribute('aria-label', label + ', ' + condition + (tempText ? ', ' + tempText : ''));
      const icon = document.createElement('span');
      icon.className = 'icon';
      icon.textContent = SYMBOLS[weatherKind(condition)];
      const caption = document.createElement('span');
      caption.className = 'label';
      caption.textContent = current ? 'NOW' : label;
      button.append(icon, caption);
      this._strip.append(button);
    }
  }

  if (!customElements.get('roomcraft-weather-outdoor')) {
    customElements.define('roomcraft-weather-outdoor', RoomcraftWeatherOutdoor);
  }
  // Small, side-effect-free helpers are exposed for focused tests and diagnostics.
  globalThis.RoomcraftWeatherOutdoor = Object.freeze({
    weatherKind, normalizeHourlyForecast, forecastFromResponse,
    daylightAt, moonPhasePath, SCENE_WIDTH, SCENE_HEIGHT,
  });
})();
