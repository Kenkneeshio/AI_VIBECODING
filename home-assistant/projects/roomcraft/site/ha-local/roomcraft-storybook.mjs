import {createPersonPresence, personSource, readDetectionZones, trackingSnapshots, trackingStatus} from './storybook-tracking.mjs';
import {bindLiveModelLibrary} from './storybook-library.mjs';
import {createStorybookScene} from './storybook-scene.mjs';
import {createStorybookWorldLifePanel} from './storybook-world-life-panel.mjs';
import {saveWorldLifeSettings} from './storybook-world-life-save.mjs';
import {HOLIDAY_CATALOG} from './storybook-holidays.mjs';
import {createStorybookHolidayPanel} from './storybook-holiday-panel.mjs';
import {saveHolidaySettings} from './storybook-holiday-save.mjs';
import {createStorybookDemo, DEMO_DURATION_MS, STORYBOOK_DEMO_VOICE_CUES} from './storybook-demo.mjs';
import {createStorybookDemoScenario} from './storybook-demo-frame.mjs';
import {createStorybookNarrator} from './storybook-demo-narration.mjs';
import {bindSnapshotDialog, SNAPSHOT_DIALOG_MARKUP} from './storybook-snapshots.mjs';
import {enterFreeView, normalizeCameraView, populateCameraOptions, readSavedFreeView, resolveDefaultCameraView, storybookCameraTileSize} from './storybook-camera.mjs';
import {bindFreeViewGestures} from './storybook-orbit.mjs';
import {placeStorybookDetails, placeStorybookTargets, readStorybookConfig, storybookFrame, storybookPreview} from './storybook-state.mjs';
import {storybookWeather, storybookWeatherMarkup, storybookWeatherStyles, updateStorybookWeather} from './storybook-weather.mjs';
import {createStorybookWeatherPanel, STORYBOOK_WEATHER_PANEL_MARKUP, STORYBOOK_WEATHER_PANEL_STYLE} from './storybook-weather-panel.mjs';
import {COASTAL_SKY_STYLE, COASTAL_SKY_MARKUP, updateCoastalSky} from './storybook-coastal-sky.mjs';
import {sceneDockAlignment, sceneFeatureEnabled, sceneWind} from './storybook-scene-settings.mjs';
import {bindStorybookDisplaySettings, DISPLAY_SETTINGS_MARKUP, DISPLAY_SETTINGS_STYLE,
  storybookDisplaySceneSettings} from './storybook-display-settings.mjs';
import {readStorybookUtilities, utilityReading} from './storybook-utilities.mjs';
import {bindStorybookPower, POWER_PANEL_MARKUP, POWER_PANEL_STYLE} from './storybook-power-panel.mjs';
import {bindStorybookLightPanel, STORYBOOK_LIGHT_PANEL, STORYBOOK_LIGHT_PANEL_STYLES} from './storybook-light-panel.mjs';
import {bindVacuumMapOverlay, VACUUM_MAP_TOGGLE} from './storybook-vacuum-map.mjs';
import {bindLidarRuler, LIDAR_RULER_BUTTON, LIDAR_RULER_MARKUP, LIDAR_RULER_STYLE} from './storybook-lidar-ruler.mjs';
import {bindStorybookCommutes, COMMUTE_DIALOG_MARKUP, COMMUTE_DIALOG_STYLE} from './storybook-commutes.mjs';
import {createStorybookLocation, STORYBOOK_LOCATION_MARKUP, STORYBOOK_LOCATION_STYLE} from './storybook-location.mjs';
import {bindStorybookHeatMap, HEAT_MAP_LEGEND, HEAT_MAP_STYLE, HEAT_MAP_TOGGLE} from './storybook-heatmap-panel.mjs';
import './storybook-controls-view.mjs';

const TAG = 'roomcraft-storybook-card';
const CONTROL_TAG = 'roomcraft-object-control';
const CAMERA_TAG = 'roomcraft-camera-thumbnail';
const EDITOR_TAG = 'roomcraft-editor-card';
const FRAME_DEADLINE_TOLERANCE = .5;
const CAMERA_SETTLE_MS = 180;
const FPS_WINDOW_MS = 1000;
const DETAIL_VISIBILITY_EVENT = 'roomcraft-detail-visibility';
const DETECTION_ZONE_KEY = 'roomcraft.show-detection-zone.v1';
const CAMERA_TILES_KEY = 'roomcraft.show-camera-tiles.v1';
const REDUCE_MOTION_KEY = 'roomcraft.reduce-motion.v1';
const DEMO_MUTED_KEY = 'roomcraft.demo-muted.v2';
const DEMO_NARRATION_URL = new URL('./demo-narration-v1.mp3?timeline=landmarks-60-v2', import.meta.url).href;
const AMBIENT_TRAFFIC = Object.freeze({severity: 'ambient'});

function readPreference(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value === 'true';
  } catch { return fallback; }
}

function savePreference(key, value) {
  try { window.localStorage.setItem(key, String(value)); }
  catch { /* The current page can still use the preference. */ }
}

class RoomcraftStorybookCard extends HTMLElement {
  constructor() {
    super();
    this.personPresence = createPersonPresence();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block;color:#3a3046;font:500 14px/1.4 system-ui,sans-serif}
        .world{display:grid;grid-template-rows:auto minmax(0,1fr) auto;min-height:218px;
          height:calc(100dvh - 72px);background:#e7eadb;border-radius:16px;overflow:hidden}
        .bar{position:relative;z-index:5;display:flex;justify-content:flex-end;align-items:center;
          gap:7px;padding:5px clamp(7px,1.4vw,23px) max(5px,env(safe-area-inset-bottom));
          color:var(--bar-text);border-top:1px solid var(--bar-line);
          background:linear-gradient(107deg,#fcf3e4,#efe2ca);box-shadow:0 -2px 9px #312b3920;
          --bar-text:#3b3933;--bar-muted:#615e55;--bar-surface:#fff9ed;--bar-hover:#fff3d9;--bar-line:#af9d7b70}
        .bar[data-sky=night]{color-scheme:dark;background:linear-gradient(104deg,#243349,#1f2b3d 72%,#30455a);
          --bar-text:#f8ecd9;--bar-muted:#d6dddf;--bar-surface:#30445c;--bar-hover:#3b526a;--bar-line:#9fb0c05c}
        .bar nav{display:flex;align-items:center;gap:7px;min-width:0}
        .bar .dock-button{gap:7px;min-width:70px;white-space:nowrap;border:1px solid var(--bar-line);
          background:var(--bar-surface);border-radius:13px}
        .bar .dock-button:hover:not(:disabled),.bar .dock-button[aria-expanded=true]{background:var(--bar-hover);text-decoration:none}
        .power-glyph{width:14px;height:17px;background:currentColor;
          clip-path:polygon(55% 0,100% 0,67% 40%,100% 40%,34% 100%,49% 55%,14% 55%)}
        .view-controls{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;padding:2px 4px}
        .view-controls select{min-height:44px;min-width:0;border:1px solid #cfbfa2;border-radius:9px;
          background:#fffdf6;color:inherit;padding:0 6px 0 9px;font:inherit}
        .default-status{position:absolute;right:12px;bottom:calc(100% + 6px);z-index:1;max-width:calc(100% - 24px);
          padding:6px 10px;border-radius:8px;background:var(--bar-surface);color:var(--bar-text);
          border:1px solid var(--bar-line);font-size:12px}
        .default-status:empty{display:none}
        .main-menu-wrap{position:relative}
        .menu-glyph{width:14px;height:2px;border-radius:2px;background:currentColor;box-shadow:0 5px 0 currentColor,0 -5px 0 currentColor}
        .main-menu{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:min(88vw,1400px);
          max-height:88dvh;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:start;gap:10px;
          box-sizing:border-box;overflow:auto;overscroll-behavior:contain;padding:clamp(10px,2vw,24px);border:1px solid #b9a58a;border-radius:18px;
          color-scheme:light;background:#eee4d3;color:#312f29;box-shadow:0 14px 44px #0c182977}
        .main-menu[hidden]{display:none}
        .main-menu-header{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 2px 3px}
        .main-menu-header h2{margin:0;font-size:clamp(19px,3vw,27px);line-height:1.15}
        .bar .main-menu .close-main-menu{width:auto;background:#fffaf1;border:1px solid #d8c7ae;padding-inline:14px}
        .planner-glyph{width:15px;height:14px;box-sizing:border-box;border:1.5px solid currentColor;border-radius:3px;
          background:linear-gradient(to bottom,transparent 3px,currentColor 3px 4px,transparent 4px)}
        .controls-glyph{width:5px;height:5px;margin:0 6px 5px 0;border-radius:1px;background:currentColor;
          box-shadow:6px 0 currentColor,0 6px currentColor,6px 6px currentColor}
        .planner-short-label{display:none}
        @media(max-width:920px){.main-menu{width:calc(100vw - 24px);grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:610px){
          .main-menu{grid-template-columns:minmax(0,1fr)}
          .bar nav{flex-wrap:wrap;justify-content:inherit}
          .bar .dock-button{min-width:0;padding-inline:8px}
          .planner-long-label{display:none}
          .planner-short-label{display:inline}
        }
        @media(max-width:365px){.bar .weather-temperature{display:none}}
        .world[data-dock=left] .bar{justify-content:flex-start}
        .world[data-dock=center] .bar{justify-content:center}
        .bar .main-menu :is(button,a){width:100%;justify-content:flex-start;text-align:left;border-radius:7px}
        .main-menu button:disabled{opacity:.35;cursor:default}
        .main-menu button:hover:not(:disabled),.main-menu a:hover{background:#f2e9d9;text-decoration:none}
        .menu-group{min-width:0;display:grid;gap:1px;padding:5px;border:1px solid #d8c7ae;border-radius:11px;background:#fffaf1}
        .menu-heading{margin:4px 8px 2px;color:#665641;font-size:12px;font-weight:750}
        .bar .main-menu .menu-primary{background:#e0ece1;color:#1d4f42;font-weight:700}
        .bar .main-menu .menu-primary:hover{background:#cfe2d2}
        .camera-steps{display:grid;grid-template-columns:1fr 1fr;gap:2px}
        .utility-menu-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px}
        .bar .main-menu .camera-steps button{justify-content:center}
        .bar .main-menu .map-toggle{justify-content:space-between}
        .menu-toggle{display:flex;align-items:center;justify-content:space-around;gap:3px;min-width:36px;
          height:23px;padding:0 4px;border-radius:20px;background:#e9e0d0;color:#514b40;font-size:10px;font-weight:700}
        .menu-toggle::before{content:"";display:block;width:9px;height:9px;border-radius:50%;background:#8e8270}
        .menu-toggle::after{content:"Off"}
        [aria-pressed=true] .menu-toggle{flex-direction:row-reverse;background:#d8e6d2;color:#2b5034}
        [aria-pressed=true] .menu-toggle::before{background:#397247}
        [aria-pressed=true] .menu-toggle::after{content:"On"}
        .tracking-dialog,.utility-dialog,.snapshot-dialog,.link-dialog{box-sizing:border-box;width:min(420px,calc(100% - 24px));max-height:75dvh;overflow:auto;
          border:1px solid #c9b8a0;border-radius:14px;background:#fffaf0;color:#3c3247;padding:16px}
        .utility-dialog{width:min(520px,calc(100% - 24px))}
        :is(.tracking-dialog,.utility-dialog,.snapshot-dialog,.link-dialog)::backdrop{background:#182a2a9c}
        :is(.tracking-dialog,.utility-dialog,.snapshot-dialog,.link-dialog) header{display:flex;align-items:center;justify-content:space-between;gap:12px}
        :is(.tracking-dialog,.utility-dialog,.snapshot-dialog,.link-dialog) h2{font-size:17px;margin:0}
        :is(.tracking-dialog,.utility-dialog,.snapshot-dialog,.link-dialog) button{font:inherit;min-height:44px;padding:6px 12px;border:1px solid #c9b8a0;
          border-radius:7px;background:#fffaf0;color:inherit}
        .link-dialog p{color:#665849}
        .link-dialog a{border:1px solid #bbab90;border-radius:9px;background:#f2e6d3}
        .planner-links{display:grid;gap:6px;margin-top:12px}
        .commute-route{display:grid;gap:4px;margin-top:10px}
        .commute-dialog [hidden]{display:none}
        .commute-route select{min-height:44px;border:1px solid #c9b8a0;border-radius:7px;padding:4px 8px;
          background:#fffdf6;color:inherit;font:inherit}
        .snapshot-dialog form{display:grid;gap:7px}
        .snapshot-dialog form[hidden],.snapshot-status:empty{display:none}
        .snapshot-dialog select{min-height:44px;max-width:100%;padding:0 9px;border:1px solid #c9b8a0;border-radius:7px;
          background:#fffdf6;color:inherit;font:inherit}
        .snapshot-dialog .snapshot-restore{justify-self:end;background:#4b3c55;color:#fffaf0}
        .utility-rows{display:grid;gap:6px;margin-top:10px}
        .utility-rows .utility-row{display:block;width:100%;padding:9px 10px;text-align:left;border-color:#ebdecb;
          background:#fffcf6;overflow-wrap:anywhere}
        .utility-row:not(:disabled){cursor:pointer}
        .utility-row:not(:disabled):hover{background:#f2e9d9}
        .utility-line{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
        .utility-reading{text-align:right;font-variant-numeric:tabular-nums}
        .utility-row[data-level=healthy] .utility-reading{color:#236b49}
        .utility-row[data-level=warning] .utility-reading{color:#805518}
        .utility-row[data-level=critical] .utility-reading{color:#9b3031}
        .utility-row[data-level=unavailable] .utility-reading{color:#6d6259}
        .utility-note,.utility-issues small{display:block;margin-top:2px;color:#655747}
        .utility-note[hidden]{display:none}
        .utility-issues small::before{content:'• '}
        .tracking-list p{margin:10px 0 0;padding:8px;border:1px solid #eee2cf;border-radius:7px}
        .tracking-list small{display:block;margin-top:3px}
        .tracking-legend{display:flex;gap:4px 12px;flex-wrap:wrap;list-style:none;margin:10px 0 0;padding:0;
          color:#5a5449;font-size:11px}
        .tracking-legend li{display:flex;align-items:center;gap:4px}
        .tracking-legend i{display:block;width:8px;height:8px;border-radius:50%;background:var(--dot,#87939d)}
        .tracking-legend .unavailable i{box-sizing:border-box;border:1px solid #87939d;background:transparent}
        .tracking-calibration{display:inline-flex;align-items:center;min-height:44px;margin-top:8px;color:#286858}
        .zone-legend{position:absolute;right:12px;bottom:12px;z-index:3;display:grid;gap:4px;
          max-width:calc(100% - 24px);box-sizing:border-box;margin:0;padding:7px 9px;list-style:none;
          border:1px solid #c8e7e959;border-radius:9px;background:#13262eea;color:#f5f8ec;
          font-size:12px;line-height:1.35;pointer-events:none}
        .zone-legend li{display:flex;align-items:center;gap:7px}
        .zone-legend[hidden],.zone-legend li[hidden]{display:none}
        .zone-legend i{position:relative;flex:none;width:16px;height:9px;box-sizing:border-box;border-radius:2px}
        .zone-legend [data-zone-kind=configured] i{border:1px dashed #b0fff3}
        .zone-legend [data-zone-kind=nominal] i{border:1px solid #ffcf87;background:#ffb85545}
        .zone-legend [data-zone-kind=origin] i::before{content:'';position:absolute;left:0;top:1px;width:7px;
          height:7px;box-sizing:border-box;border:1px solid #ffcf87;border-radius:50%;background:#13262e}
        .zone-legend [data-zone-kind=origin] i::after{content:'';position:absolute;left:6px;right:0;top:1px;
          height:7px;background:#ffcf87;clip-path:polygon(0 43%,65% 43%,65% 7%,100% 50%,65% 93%,65% 57%,0 57%)}
        .view-status{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
        a,.bar button{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;
          min-height:44px;padding:0 9px;font:inherit;color:inherit;text-decoration:none}
        .bar button{border:0;background:transparent;border-radius:8px;cursor:pointer}
        a:hover,.bar button:hover{text-decoration:underline}
        :focus-visible{outline:2px solid #74516f;outline-offset:2px}
        .stage{position:relative;min-height:0;isolation:isolate}
        .menu-shade{position:absolute;inset:0;z-index:4;background:#11223550}
        .scene-fps{position:absolute;z-index:5;top:10px;right:12px;pointer-events:none;
          padding:4px 8px;border:1px solid #d8e0e95c;border-radius:8px;background:#192938e6;color:#fff8e6;
          font-size:12px;font-variant-numeric:tabular-nums}
        .scene-fps[hidden]{display:none}
        canvas{display:block;width:100%;height:100%}
        canvas[data-free-view]{cursor:grab;touch-action:none}
        canvas[data-free-view]:active{cursor:grabbing}
        .free-view-hint{position:absolute;top:9px;left:50%;transform:translateX(-50%);box-sizing:border-box;
          width:max-content;max-width:calc(100% - 18px);padding:5px 10px;border-radius:8px;
          background:#443649;color:#fffaf0;text-align:center;font-size:12px;pointer-events:none}
        .overlay{position:absolute;inset:0;pointer-events:none}
        .world[data-demo-beat] :is(.overlay,.tethers,.zone-legend){visibility:hidden}
        .demo{position:absolute;left:clamp(8px,1.5vw,24px);bottom:clamp(8px,1.5vw,24px);z-index:4;
          display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:7px 12px;
          box-sizing:border-box;width:min(470px,calc(100% - 16px));padding:7px 9px 7px 12px;border:1px solid #ae9c83;
          border-radius:14px;background:#fff8ebf5;color:#37313b;box-shadow:0 4px 14px #21192638}
        .demo[hidden]{display:none}
        .demo-title,.demo-kicker{display:block}
        .demo-title{font-size:14px}
        .demo-kicker{font-size:10px;letter-spacing:.09em;text-transform:uppercase;color:#6d4b69}
        .demo-caption,.demo-weather-detail{display:block;font-size:12px}
        .demo-weather-detail{color:#6d4b69;font-weight:650}
        .demo-weather-detail[hidden]{display:none}
        .demo-actions{display:flex;gap:5px;align-items:center}
        .demo-actions button{font:inherit;min-height:44px;padding:0 9px;border:1px solid #b3a38e;border-radius:9px;
          background:#fffdf7;color:inherit;cursor:pointer}
        .demo-actions button:hover{background:#f0e5d4}
        @media(max-width:420px){.demo-actions{flex-direction:column;align-items:stretch}}
        .demo-progress{grid-column:1/-1;overflow:hidden;height:3px;border-radius:3px;background:#e1d7c6}
        .demo-progress span{display:block;height:100%;background:#775270;transform-origin:left;transform:scaleX(0)}
        .device,.camera{position:absolute;transform:translate(-50%,-50%);pointer-events:auto}
        .camera{z-index:1}
        .camera::part(frame){border-color:#f8ecd4;background:#483a50}
        .device{z-index:2}
        .device:focus-within{z-index:3}
        .status{position:absolute;inset:0;display:grid;place-items:center;padding:20px;
          background:#e7eadb;text-align:center}
        .status[hidden],.recovery[hidden],.bar :is(button,a)[hidden],.device[hidden],.camera[hidden]{display:none}
        .status-inner{max-width:27em}
        .recovery{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:12px}
        .recovery button,.recovery a{box-sizing:border-box;border-radius:9px;background:#53455e;color:#fff4e9;
          min-height:44px;padding:0 12px;border:0;font:inherit;cursor:pointer}
        .tethers{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
        @media(max-width:540px){.bar nav{gap:5px}.bar a,.bar button{padding-inline:7px}}
        ${storybookWeatherStyles}
        ${STORYBOOK_WEATHER_PANEL_STYLE}
        ${LIDAR_RULER_STYLE}
        ${COASTAL_SKY_STYLE}
        ${DISPLAY_SETTINGS_STYLE}
        ${POWER_PANEL_STYLE}
        ${STORYBOOK_LIGHT_PANEL_STYLES}
        ${COMMUTE_DIALOG_STYLE}
        ${STORYBOOK_LOCATION_STYLE}
        ${HEAT_MAP_STYLE}
      </style>
      <section class="world" aria-label="Roomcraft Storybook">
        ${COASTAL_SKY_MARKUP}
        <div class="stage">
          <canvas role="img" aria-label="Three-dimensional cutaway of the second floor"></canvas>
          <output class="scene-fps" aria-label="Scene frame rate" aria-live="off" hidden>— FPS</output>
          <span id="free-view-hint" class="free-view-hint" hidden>Drag or use arrow keys to orbit. Pinch, scroll, or use +/− to zoom.</span>
          <svg class="tethers" aria-hidden="true"></svg>
          <div class="overlay"></div>
          <ul class="zone-legend" id="detection-zone-legend" aria-label="Radar coverage legend" hidden>
            <li data-zone-kind="configured"><i aria-hidden="true"></i>Configured detection zone</li>
            <li data-zone-kind="nominal"><i aria-hidden="true"></i><span>Rated coverage (estimate)</span></li>
            <li data-zone-kind="origin"><i aria-hidden="true"></i>Sensor position and aim</li>
          </ul>
          ${HEAT_MAP_LEGEND}
          <div class="status"><div class="status-inner">
            <div role="status">Opening Roomcraft…</div>
            <div class="recovery" hidden>
              <button type="button" class="retry">Try again</button>
              <a href="/roomcraft-home/studio" data-studio-link>Layout Studio</a>
            </div>
          </div></div>
          <div class="demo" aria-label="Dashboard demo" hidden>
            <div role="status" aria-atomic="true">
              <span class="demo-kicker">Demo</span><strong class="demo-title"></strong>
              <span class="demo-caption"></span>
            </div>
            <div class="demo-actions">
              <button type="button" class="demo-mute" aria-label="Unmute narration" aria-pressed="true">Unmute</button>
              <button type="button" class="demo-stop" aria-label="Stop demo">Stop</button>
            </div>
            <span class="demo-weather-detail" hidden></span>
            <div class="demo-progress" aria-hidden="true"><span></span></div>
          </div>
          <div class="menu-shade" aria-hidden="true" hidden></div>
        </div>
        <footer class="bar">
          <nav aria-label="Roomcraft controls">
            <button type="button" class="dock-button" data-utility="electrical" aria-haspopup="dialog" hidden>
              <span class="power-glyph" aria-hidden="true"></span> Power
            </button>
            ${storybookWeatherMarkup}
            <button type="button" class="dock-button" data-link-dialog="planner" aria-haspopup="dialog" aria-label="Calendar and to-dos">
              <span class="planner-glyph" aria-hidden="true"></span>
              <span class="planner-long-label">Calendar &amp; to-dos</span><span class="planner-short-label">Calendar</span>
            </button>
            <a class="dock-button" data-controls-link href="/roomcraft-home/controls">
              <span class="controls-glyph" aria-hidden="true"></span> Controls
            </a>
            <span class="default-status" role="status" aria-live="polite"></span>
            <div class="main-menu-wrap">
              <button type="button" class="dock-button main-menu-button" aria-label="Main menu" aria-expanded="false" aria-controls="storybook-main-menu"><span class="menu-glyph" aria-hidden="true"></span> Menu</button>
              <div class="main-menu" id="storybook-main-menu" role="region" aria-label="Dashboard menu" hidden>
                <header class="main-menu-header"><h2>Menu</h2><button type="button" class="close-main-menu">Close</button></header>
                <section class="menu-group" aria-label="Display">
                  <p class="menu-heading" aria-hidden="true">Display</p>
                  <button type="button" class="menu-primary open-display-settings" aria-haspopup="dialog">Display settings</button>
                  <button type="button" class="map-toggle toggle-fps" aria-pressed="false">FPS display <span class="menu-toggle" aria-hidden="true"></span></button>
                  <button type="button" class="map-toggle toggle-camera-tiles" aria-pressed="true" hidden>Camera tiles <span class="menu-toggle" aria-hidden="true"></span></button>
                  <button type="button" class="map-toggle toggle-reduced-motion" aria-pressed="false">Reduce motion <span class="menu-toggle" aria-hidden="true"></span></button>
                </section>
                <section class="menu-group" aria-label="On the map">
                  <p class="menu-heading" aria-hidden="true">On the map</p>
                  <a class="menu-primary" href="/roomcraft-home/studio#lidar-alignment" data-lidar-alignment-link>Align robot to LiDAR map</a>
                  ${LIDAR_RULER_BUTTON}
                  ${VACUUM_MAP_TOGGLE}
                  <button type="button" class="map-toggle toggle-object-details" aria-pressed="false">Object details <span class="menu-toggle" aria-hidden="true"></span></button>
                  <button type="button" class="open-tracking" hidden>Presence tracking</button>
                  <button type="button" class="map-toggle toggle-detection-zone" aria-controls="detection-zone-legend" aria-pressed="false" hidden>Detection zone <span class="menu-toggle" aria-hidden="true"></span></button>
                  ${HEAT_MAP_TOGGLE}
                </section>
                <section class="menu-group" aria-label="View controls">
                  <p class="menu-heading" aria-hidden="true">View controls</p>
                  <div class="view-controls">
                    <label for="storybook-view">Camera view</label>
                    <select id="storybook-view"></select>
                  </div>
                  <span class="view-status" role="status" aria-live="polite"></span>
                  <div class="camera-steps">
                    <button type="button" data-camera="left">Rotate left</button>
                    <button type="button" data-camera="right">Rotate right</button>
                    <button type="button" data-camera="out">Zoom out</button>
                    <button type="button" data-camera="in">Zoom in</button>
                  </div>
                  <button type="button" data-camera="reset">Reset to Top down</button>
                  <button type="button" data-camera="save-default" hidden>Save as default</button>
                  <button type="button" data-camera="clear-default" hidden>Use Top down as default</button>
                </section>
                <section class="menu-group" aria-label="Manage">
                  <p class="menu-heading" aria-hidden="true">Manage</p>
                  <a href="/roomcraft-home/studio" data-studio-link>Layout Studio</a>
                  <a href="/roomcraft-home/studio#scene-settings" data-scene-settings-link>Scene settings</a>
                  <button type="button" class="open-snapshots" aria-haspopup="dialog" hidden>Layout snapshots</button>
                  <div class="utility-menu-grid">
                    <button type="button" data-open-models aria-haspopup="dialog">Object models</button>
                    <button type="button" data-open-devices aria-haspopup="dialog" hidden>Devices and sensors</button>
                    <button type="button" data-utility="air" aria-haspopup="dialog" hidden>Indoor air</button>
                    <button type="button" data-utility="health" aria-haspopup="dialog" hidden>System health</button>
                  </div>
                </section>
                <section class="menu-group" aria-label="Household">
                  <p class="menu-heading" aria-hidden="true">Household</p>
                  <button type="button" data-link-dialog="location" aria-haspopup="dialog">Location sharing</button>
                  <button type="button" data-link-dialog="commute" aria-haspopup="dialog">Commute traffic</button>
                  <button type="button" class="world-life-settings" aria-haspopup="dialog">Living world &amp; wildlife</button>
                  <button type="button" class="holiday-settings" aria-haspopup="dialog">Holidays &amp; celebrations</button>
                  <button type="button" class="demo-start" disabled>1-minute demo</button>
                </section>
              </div>
            </div>
          </nav>
        </footer>
      </section>
      <dialog class="tracking-dialog" aria-label="Presence tracking">
        <header><h2>Presence tracking</h2><button type="button" class="close-tracking">Close</button></header>
        <div class="tracking-list"></div>
        <ul class="tracking-legend" aria-label="Radar indicator">
          <li><i style="--dot:#428dcc" aria-hidden="true"></i>Targets on map</li>
          <li><i style="--dot:#b87c2d" aria-hidden="true"></i>Presence only</li>
          <li><i aria-hidden="true"></i>Clear</li>
          <li class="unavailable"><i aria-hidden="true"></i>Unavailable</li>
        </ul>
        <a class="tracking-calibration" href="/roomcraft-home/studio#tracking-range-correction">Tracking range correction</a>
      </dialog>
      <dialog class="utility-dialog" aria-labelledby="utility-title">
        <header><h2 id="utility-title"></h2><button type="button" class="close-utility">Close</button></header>
        <div class="utility-rows"></div>
      </dialog>
      ${STORYBOOK_LOCATION_MARKUP}
      <dialog class="link-dialog planner-dialog" aria-labelledby="planner-title">
        <header><h2 id="planner-title">Calendar &amp; to-dos</h2><button type="button" data-close-link>Close</button></header>
        <nav class="planner-links" aria-label="Household planning">
          <a href="/calendar">Calendar</a>
          <a href="/todo">To-do lists</a>
        </nav>
      </dialog>
      ${COMMUTE_DIALOG_MARKUP}
      ${STORYBOOK_WEATHER_PANEL_MARKUP}
      ${LIDAR_RULER_MARKUP}
      ${SNAPSHOT_DIALOG_MARKUP}
      ${DISPLAY_SETTINGS_MARKUP}
      ${STORYBOOK_LIGHT_PANEL}
      ${POWER_PANEL_MARKUP}`;
    bindLiveModelLibrary(this);
    this.snapshots = bindSnapshotDialog(this);
    this.power = bindStorybookPower(this);
    this.commutes = bindStorybookCommutes(this);
    this.locationPanel = createStorybookLocation(this.shadowRoot.querySelector('.location-dialog'));
    this.world = this.shadowRoot.querySelector('.world');
    this.coastalSky = this.shadowRoot.querySelector('.coastal-sky');
    this.stage = this.shadowRoot.querySelector('.stage');
    this.canvas = this.shadowRoot.querySelector('canvas');
    this.overlay = this.shadowRoot.querySelector('.overlay');
    this.lightPanel = bindStorybookLightPanel(this);
    this.vacuumMapOverlay = bindVacuumMapOverlay(this);
    this.lidarRuler = bindLidarRuler(this);
    this.overlay.addEventListener('hass-more-info', event => {
      if (this.lightPanel.open(event.detail?.entityId)) event.stopPropagation();
    });
    this.tethers = this.shadowRoot.querySelector('.tethers');
    this.dock = this.shadowRoot.querySelector('.bar');
    this.weather = this.shadowRoot.querySelector('.weather');
    this.weatherDialog = this.shadowRoot.querySelector('.storybook-weather-dialog');
    this.powerDialog = this.shadowRoot.querySelector('.power-dialog');
    this.weatherPanel = createStorybookWeatherPanel(this.weatherDialog, {
      onProviderChange: () => this.refresh(),
    });
    for (const dialog of [this.weatherDialog, this.powerDialog, this.lidarRuler.dialog]) {
      dialog.addEventListener('close', () => this.schedule());
    }
    this.status = this.shadowRoot.querySelector('.status');
    this.recovery = this.status.querySelector('.recovery');
    this.viewSelect = this.shadowRoot.querySelector('#storybook-view');
    this.viewStatus = this.shadowRoot.querySelector('.view-status');
    this.defaultStatus = this.shadowRoot.querySelector('.default-status');
    this.saveDefaultButton = this.shadowRoot.querySelector('[data-camera=save-default]');
    this.clearDefaultButton = this.shadowRoot.querySelector('[data-camera=clear-default]');
    this.freeViewHint = this.shadowRoot.querySelector('#free-view-hint');
    this.cameraView = resolveDefaultCameraView(null);
    this.holidayPanel = createStorybookHolidayPanel(this.shadowRoot, {
      catalog:HOLIDAY_CATALOG,
      getSettings:()=>this.model?.layout.sceneSettings?.holidays,
      getDate:()=>this.frame?.environment.holidayDate,
      getAutoPlacement:()=>this.scene?.getHolidayDefaultPlacement?.(),
      onPreview:value=>this.previewHoliday(value),
      onClose:()=>this.schedule(),
      onSave:async value=>{
        const session = this.session, dashboard = this.dashboard;
        const result = await saveHolidaySettings(session, dashboard, this.holidayExpected, value, {
          stillAuthorized:()=>this.isConnected && this.dashboard===dashboard && this.session?.user?.is_admin === true
            && this.session?.user?.id===session?.user?.id && this.session?.connection===session?.connection,
          savedAt:new Date().toISOString(),
        });
        if (result.status === 'saved') {
          this.holidayExpected = result.value;
          this.reset();
          await this.load();
        }
        return result;
      },
    });
    this.shadowRoot.querySelector('.holiday-settings').addEventListener('click',()=>{
      this.setMainMenu(false, true);
      this.worldLifePanel?.close();
      this.holidayExpected = this.model?.layout.sceneSettings?.holidays;
      this.holidayPanel.open();
    });
    this.worldLifePanel = createStorybookWorldLifePanel(this.shadowRoot, {
      getSettings:()=>this.model?.layout.sceneSettings?.worldLife,
      onPreview:value=>this.previewWorldLife(value), onClose:()=>this.schedule(),
      onSave:async value=>{
        const session=this.session, dashboard=this.dashboard;
        const result=await saveWorldLifeSettings(session,dashboard,this.worldLifeExpected,value,{
          stillAuthorized:()=>this.isConnected && this.dashboard===dashboard && this.session?.user?.is_admin===true
            && this.session?.user?.id===session?.user?.id && this.session?.connection===session?.connection,
          savedAt:new Date().toISOString(),
        });
        if(result.status==='saved') {this.worldLifeExpected=result.value;this.reset();await this.load();}
        return result;
      },
    });
    this.shadowRoot.querySelector('.world-life-settings').addEventListener('click',()=>{
      this.setMainMenu(false,true);this.holidayPanel.close();
      this.worldLifeExpected=this.model?.layout.sceneSettings?.worldLife;this.worldLifePanel.open();
    });
    this.menuButton = this.shadowRoot.querySelector('.main-menu-button');
    this.mainMenu = this.shadowRoot.querySelector('.main-menu');
    this.menuShade = this.shadowRoot.querySelector('.menu-shade');
    this.displaySettings = bindStorybookDisplaySettings(this, settings => this.applyDisplaySettings(settings));
    this.fpsDisplay = this.shadowRoot.querySelector('.scene-fps');
    this.fpsButton = this.shadowRoot.querySelector('.toggle-fps');
    this.fpsButton.addEventListener('click', () =>
      this.displaySettings.setShowFps(!this.displaySettings.value.showFps));
    this.demoButton = this.shadowRoot.querySelector('.demo-start');
    this.demo = this.shadowRoot.querySelector('.demo');
    this.demoTitle = this.demo.querySelector('.demo-title');
    this.demoCaption = this.demo.querySelector('.demo-caption');
    this.demoWeatherDetail = this.demo.querySelector('.demo-weather-detail');
    this.demoProgress = this.demo.querySelector('.demo-progress span');
    this.demoStopButton = this.demo.querySelector('.demo-stop');
    this.demoMuteButton = this.demo.querySelector('.demo-mute');
    this.demoNarrator = createStorybookNarrator(window, {trackUrl: DEMO_NARRATION_URL, cues: STORYBOOK_DEMO_VOICE_CUES});
    this.demoMuted = readPreference(DEMO_MUTED_KEY, true);
    this.demoMuteButton.hidden = !this.demoNarrator.available;
    this.syncDemoMute();
    this.demoMuteButton.addEventListener('click', () => {
      this.demoMuted = !this.demoMuted;
      savePreference(DEMO_MUTED_KEY, this.demoMuted);
      this.syncDemoMute();
      this.demoNarrator.setMuted(this.demoMuted);
    });
    this.demoButton.addEventListener('click', () => this.startDemo());
    this.demoStopButton.addEventListener('click', () => this.stopDemo());
    this.onDemoEscape = event => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      this.stopDemo();
    };
    this.detectionZoneButton = this.shadowRoot.querySelector('.toggle-detection-zone');
    this.detectionZoneLegend = this.shadowRoot.querySelector('.zone-legend');
    this.detectionZoneVisible = readPreference(DETECTION_ZONE_KEY, false);
    this.detectionZoneButton.addEventListener('click', () => {
      if (!this.detectionZones?.length) return;
      this.detectionZoneVisible = !this.detectionZoneVisible;
      savePreference(DETECTION_ZONE_KEY, this.detectionZoneVisible);
      this.syncDetectionZones();
    });
    this.heatMap = bindStorybookHeatMap(this.shadowRoot, {
      getSession: () => this.session,
      setHistory: history => {
        const drawn = this.scene?.setHeatMap?.(history);
        this.anchorDirty = true;
        this.schedule();
        return drawn;
      },
      dismissMenu: () => this.setMainMenu(false, true),
      isPaused: () => Boolean(this.demoRun),
    });
    this.utilityDialog = this.shadowRoot.querySelector('.utility-dialog');
    this.utilityButtons = [...this.shadowRoot.querySelectorAll('[data-utility]')];
    this.devicesButton = this.shadowRoot.querySelector('[data-open-devices]');
    this.devicesButton.addEventListener('click', () => {
      this.setMainMenu(false, true);
      this.devicesDrawer?.open?.({returnFocus: this.menuButton});
    });
    for (const button of this.utilityButtons) {
      button.addEventListener('click', () => this.openUtility(button.dataset.utility));
    }
    this.shadowRoot.querySelector('.close-utility').addEventListener('click', () => this.utilityDialog.close());
    this.utilityDialog.addEventListener('close', () => { this.utilityRows = null; });
    this.recovery.querySelector('.retry').addEventListener('click', () => {
      this.reset();
      this.load();
    });
    this.trackingButton = this.shadowRoot.querySelector('.open-tracking');
    this.trackingDialog = this.shadowRoot.querySelector('.tracking-dialog');
    this.trackingList = this.shadowRoot.querySelector('.tracking-list');
    this.trackingButton.addEventListener('click', () => {
      this.setMainMenu(false, true);
      this.paintTracking();
      this.trackingDialog.showModal();
    });
    this.shadowRoot.querySelector('.close-tracking').addEventListener('click', () => this.trackingDialog.close());
    this.linkDialogs = [];
    for (const trigger of this.shadowRoot.querySelectorAll('[data-link-dialog]')) {
      const dialog = this.shadowRoot.querySelector(`.${trigger.dataset.linkDialog}-dialog`);
      this.linkDialogs.push(dialog);
      trigger.addEventListener('click', () => {
        this.setMainMenu(false, true);
        dialog.showModal();
        if (trigger.dataset.linkDialog === 'location') this.locationPanel.update(this.session);
      });
      dialog.querySelector('[data-close-link]').addEventListener('click', () => dialog.close());
    }
    this.menuButton.addEventListener('click', () => this.setMainMenu(this.mainMenu.hidden));
    this.mainMenu.querySelector('.close-main-menu').addEventListener('click', () => this.setMainMenu(false, true));
    this.onMenuPointerDown = event => {
      const path = event.composedPath();
      if (!path.includes(this.menuButton) && !path.includes(this.mainMenu)) {
        this.setMainMenu(false, path.includes(this.menuShade));
      }
    };
    this.shadowRoot.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || this.mainMenu.hidden) return;
      event.preventDefault();
      event.stopPropagation();
      this.setMainMenu(false, true);
    });
    this.mainMenu.addEventListener('click', event => {
      if (event.target.closest('a')) this.setMainMenu(false);
    });
    populateCameraOptions(this.viewSelect);
    this.viewSelect.addEventListener('change', () => {
      const preset = this.viewSelect.value;
      this.changeView(preset === 'free' ? enterFreeView(this.cameraView) : preset);
      this.setMainMenu(false, true);
    });
    for (const button of this.shadowRoot.querySelectorAll('[data-camera]')) {
      button.addEventListener('click', () => {
        const current = this.cameraView;
        switch (button.dataset.camera) {
          case 'left': this.changeView({...current, azimuth: current.azimuth - 15}); break;
          case 'right': this.changeView({...current, azimuth: current.azimuth + 15}); break;
          case 'out': this.changeView({...current, zoom: current.zoom - .15}); break;
          case 'in': this.changeView({...current, zoom: current.zoom + .15}); break;
          case 'reset':
            this.changeView('top');
            this.setMainMenu(false, true);
            break;
          case 'save-default':
            if (current.preset === 'free') this.saveStartupView(current);
            this.setMainMenu(false, true);
            break;
          case 'clear-default':
            this.saveStartupView(null);
            this.setMainMenu(false, true);
            break;
        }
      });
    }
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.onViewportResize = () => this.resize();
    this.motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    this.reduceMotion = readPreference(REDUCE_MOTION_KEY, false);
    this.reduceMotionButton = this.shadowRoot.querySelector('.toggle-reduced-motion');
    this.reduceMotionButton.addEventListener('click', () => {
      this.reduceMotion = !this.reduceMotion;
      savePreference(REDUCE_MOTION_KEY, this.reduceMotion);
      this.syncMotionPreference();
    });
    this.onMotionChange = () => this.syncMotionPreference();
    this.syncMotionPreference();
    this.cameraTilesVisible = readPreference(CAMERA_TILES_KEY, true);
    this.cameraTilesButton = this.shadowRoot.querySelector('.toggle-camera-tiles');
    this.cameraTilesButton.setAttribute('aria-pressed', String(this.cameraTilesVisible));
    this.cameraTilesButton.addEventListener('click', () => {
      this.cameraTilesVisible = !this.cameraTilesVisible;
      savePreference(CAMERA_TILES_KEY, this.cameraTilesVisible);
      this.cameraTilesButton.setAttribute('aria-pressed', String(this.cameraTilesVisible));
      for (const {element, camera} of this.controls ?? []) {
        if (!camera) continue;
        if (this.cameraTilesVisible) this.overlay.append(element);
        else {
          element.remove();
          element.hass = undefined;
          element.hidden = true;
        }
      }
      this.refresh();
    });
    this.onVisibility = () => {
      this.heatMap.sync();
      if (document.hidden) {
        this.stopDemo(false);
        this.freeViewGestures?.cancel();
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = undefined;
        this.nextRenderAt = undefined;
        this.lastSceneRenderAt = undefined;
        this.resetFpsSample();
      } else this.refresh();
    };
    this.weather.addEventListener('click', () => {
      this.setMainMenu(false);
      this.weatherPanel.open();
    });
    this.canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      if (!this.isConnected) return;
      this.displaySettings.cancelGraphicsPreview?.();
      this.graphicsInterrupted = true;
      this.fail('The 3D view lost its graphics connection.');
    });
    this.canvas.addEventListener('webglcontextrestored', () => {
      if (!this.graphicsInterrupted) return;
      this.graphicsInterrupted = false;
      if (!this.isConnected) return;
      this.reset();
      this.load();
    });
  }

  setConfig(config) {
    const dashboard = config.dashboard || 'second-floor';
    if (!/^[a-z0-9-]+$/.test(dashboard)) throw new Error('Invalid Roomcraft dashboard.');
    if (this.dashboard && this.dashboard !== dashboard) {
      this.personPresence.clear();
      this.startupViewRead = false;
      this.startupViewRequest = undefined;
      this.savedStartupView = null;
      this.cameraChanged = false;
      this.defaultStatus.textContent = '';
      this.reset();
      this.changeView('default', {remember: false});
    }
    this.dashboard = dashboard;
    this.snapshots.sync();
    for (const link of this.shadowRoot.querySelectorAll('[data-studio-link]')) link.href = this.studioPath;
    this.shadowRoot.querySelector('[data-scene-settings-link]').href = this.studioPath + '#scene-settings';
    this.shadowRoot.querySelector('[data-lidar-alignment-link]').href = this.studioPath + '#lidar-alignment';
    this.shadowRoot.querySelector('[data-controls-link]').hidden = dashboard !== 'roomcraft-home';
    this.shadowRoot.querySelector('.tracking-calibration').href = this.studioPath + '#tracking-range-correction';
    this.load();
  }

  get studioPath() { return `/${this.dashboard || 'roomcraft-home'}/studio`; }
  get weatherEntityId() { return this.weatherPanel.effectiveEntityId ?? this.model?.weather.weather_entity; }
  get largePanelOpen() { return this.weatherDialog.open || this.powerDialog.open || this.lidarRuler.open || this.holidayPanel?.isOpen || this.worldLifePanel?.isOpen; }

  previewWorldLife(value) {
    if(value) this.holidayPanel.close();
    if(value&&!this.worldLifePreview) this.worldLifeReturnView=this.scene?.getView();
    this.worldLifePreview=value;
    if(value) {
      this.stopDemo();
      if(!this.scene?.frameWorldLifePreview?.(value.settings) && this.worldLifeReturnView)
        this.scene?.setView(this.worldLifeReturnView);
    } else if(this.worldLifeReturnView) {
      this.scene?.setView(this.worldLifeReturnView);this.worldLifeReturnView=undefined;
    }
    this.anchorDirty=true;this.schedule();
  }

  previewHoliday(value) {
    if(value)this.worldLifePanel?.close();
    if (value && !this.holidayPreview) this.holidayReturnView = this.scene?.getView();
    this.holidayPreview = value;
    if (value) {
      this.stopDemo();
      const focus = this.scene?.getHolidayFocus(value.settings) ?? this.scene?.getDemoFocus('holiday');
      if (focus) this.scene.setView({preset:'top',azimuth:180,tilt:40,zoom:2}, {focus,demoZoom:8});
    } else if (this.holidayReturnView) {
      this.scene?.setView(this.holidayReturnView);
      this.holidayReturnView = undefined;
    }
    this.anchorDirty = true;
    this.schedule();
  }

  set hass(value) {
    const previous = this.session;
    const previousWeatherEntity = this.weatherEntityId;
    this.session = value;
    this.weatherPanel.update(value, this.model?.weather.weather_entity, {reduceMotion:this.motionReduced});
    this.heatMap.sync();
    this.snapshots.sync();
    this.commutes.sync();
    if (this.devicesDrawer) this.devicesDrawer.hass = value?.connected === false ? undefined : value;
    this.refreshUtility(previous);
    this.lightPanel.refresh();
    this.vacuumMapOverlay.sync();
    this.lidarRuler.sync();
    this.power.refresh(previous);
    this.locationPanel.update(value);
    this.updateDefaultViewButtons();
    this.watchPublishedLayout();
    if (previous?.connected === false && value?.connected === true) {
      this.startupViewRead = false;
      this.startupViewRequest = undefined;
      this.reset();
    }
    if (!this.model) {
      this.load();
      return;
    }
    const weatherEntity = this.weatherEntityId;
    if (weatherEntity !== previousWeatherEntity || value?.states?.[weatherEntity] !== previous?.states?.[weatherEntity] ||
        value?.connected !== previous?.connected || value?.config?.time_zone !== previous?.config?.time_zone ||
        [...this.model.watch].some(id => value?.states?.[id] !== previous?.states?.[id])) this.refresh();
  }

  setMainMenu(open, returnFocus = false) {
    this.mainMenu.hidden = !open;
    this.menuShade.hidden = !open;
    this.menuButton.setAttribute('aria-expanded', String(open));
    if (returnFocus) this.menuButton.focus();
  }

  startDemo() {
    if (!this.scene || !this.frame || this.demoRun || this.demoButton.disabled) return;
    const view = this.cameraView;
    const scenario = createStorybookDemoScenario(this.model.layout);
    const timeline = createStorybookDemo(view, target => this.scene.getDemoFocus(
      ['beach', 'coast', 'road', 'landmark-school', 'landmark-family', 'landmark-office'].includes(target) ? target : scenario.targets[target]));
    this.demoRun = {startedAt: performance.now(), view, timeline, scenario,
      timer: setTimeout(() => this.stopDemo(), DEMO_DURATION_MS)};
    this.heatMap.sync();
    this.setMainMenu(false);
    this.freeViewGestures?.cancel();
    this.syncFreeViewMode();
    this.overlay.inert = this.dock.inert = true;
    this.scene.setDetectionZones([]);
    this.demo.hidden = false;
    this.demoNarrator.start({muted: this.demoMuted});
    window.addEventListener('keydown', this.onDemoEscape, true);
    this.updateDemo(this.demoRun.startedAt);
    this.demoStopButton.focus();
    this.schedule();
  }

  syncDemoMute() {
    this.demoMuteButton.setAttribute('aria-pressed', String(this.demoMuted));
    this.demoMuteButton.setAttribute('aria-label', this.demoMuted ? 'Unmute narration' : 'Mute narration');
    this.demoMuteButton.textContent = this.demoMuted ? 'Unmute' : 'Mute';
  }

  updateDemo(at) {
    const run = this.demoRun;
    if (!run) return;
    const sample = run.timeline(at - run.startedAt, {reducedMotion: this.motionReduced});
    if (sample.done) {
      this.stopDemo();
      return;
    }
    const {title, beat, view, focus, zoom, progress, caption, narration, cueId} = sample;
    const previous = run.sample;
    const previousEnvironment = run.frame?.environment;
    run.sample = sample;
    run.frame = run.scenario.sampleFrame(sample);
    if (beat !== previous?.beat) {
      this.demoTitle.textContent = title;
      this.world.dataset.demoBeat = beat;
    }
    if (cueId !== previous?.cueId) {
      this.demoCaption.textContent = caption;
      this.demoNarrator.speak(cueId, narration);
    }
    const environment = run.frame.environment;
    const {condition, moonPhase, weatherCaption} = environment;
    if (weatherCaption !== previousEnvironment?.weatherCaption || !previous) {
      this.demoWeatherDetail.hidden = !weatherCaption;
      this.demoWeatherDetail.textContent = weatherCaption ?? '';
    }
    if (beat !== previous?.beat || condition !== previousEnvironment?.condition || moonPhase !== previousEnvironment?.moonPhase) {
      this.paintWeather(environment, false, true);
      run.lastSkyAt = at;
    } else if (beat === 'weather' && at - run.lastSkyAt >= 70) {
      this.paintSky(environment, false);
      run.lastSkyAt = at;
    }
    this.demoProgress.style.transform = `scaleX(${progress})`;
    const point = previous?.focus;
    if (!previous || previous.view.azimuth !== view.azimuth || previous.view.tilt !== view.tilt ||
        previous.zoom !== zoom || point?.weight !== focus?.weight || point?.x !== focus?.x ||
        point?.y !== focus?.y || point?.z !== focus?.z) {
      this.scene.setView(view, {focus, demoZoom: zoom});
    }
  }

  stopDemo(returnFocus = true) {
    const run = this.demoRun;
    if (!run) return;
    const hadFocus = this.demo.contains(this.shadowRoot.activeElement);
    clearTimeout(run.timer);
    this.demoNarrator.stop();
    window.removeEventListener('keydown', this.onDemoEscape, true);
    this.demoRun = undefined;
    this.heatMap.sync();
    this.overlay.inert = this.dock.inert = false;
    this.demo.hidden = true;
    delete this.world.dataset.demoBeat;
    this.pendingCameraView = run.view;
    this.syncDetectionZones();
    if (this.frame) this.paintWeather(this.frame.environment, this.session?.connected === false);
    this.syncFreeViewMode();
    this.anchorDirty = true;
    if (returnFocus && hadFocus) this.menuButton.focus();
    this.schedule();
  }

  get motionReduced() { return this.reduceMotion || this.motionPreference.matches; }

  syncMotionPreference() {
    this.world.toggleAttribute('data-reduced-motion', this.motionReduced);
    this.power.reducedMotion(this.motionReduced);
    this.weatherPanel.update(this.session, this.model?.weather.weather_entity, {reduceMotion:this.motionReduced});
    this.reduceMotionButton.setAttribute('aria-pressed', String(this.motionReduced));
    this.reduceMotionButton.disabled = this.motionPreference.matches;
    this.reduceMotionButton.title = this.motionPreference.matches ? 'Your device requests reduced motion' : '';
    if (this.frame && !this.demoRun) this.paintSky(this.frame.environment, this.session?.connected === false);
    this.schedule();
  }

  getCardSize() { return 8; }

  static trackSnapshots(states, ids) {
    return trackingSnapshots(states, ids);
  }

  static preview(config, states, now, timeZone) {
    return storybookPreview(config, states, now, timeZone);
  }

  watchPublishedLayout() {
    const connection = this.isConnected ? this.session?.connection : undefined;
    if (connection === this.configConnection) return;
    this.configSubscription?.then(unsubscribe => unsubscribe()).catch(() => {});
    this.configConnection = connection;
    this.configSubscription = connection?.subscribeEvents?.(event => {
      if (!this.isConnected || this.configConnection !== connection || event?.data?.url_path !== this.dashboard) return;
      this.reset();
      this.load();
    }, 'lovelace_updated');
    this.configSubscription?.catch(() => {});
  }

  syncObjectDetails() {
    const toggle = this.shadowRoot.querySelector('.toggle-object-details');
    if (!toggle) return;
    const visible = Boolean(customElements.get(CONTROL_TAG)?.detailVisibility);
    toggle.setAttribute('aria-pressed', String(visible));
    this.anchorDirty = true;
    this.schedule();
  }

  connectedCallback() {
    this.displaySettings.connect();
    this.watchPublishedLayout();
    this.onObjectDetailsChange ??= () => this.syncObjectDetails();
    this.onObjectDetailsToggle ??= () => {
      const control = customElements.get(CONTROL_TAG);
      if (control) control.detailVisibility = !control.detailVisibility;
    };
    this.shadowRoot.querySelector('.toggle-object-details')?.addEventListener('click', this.onObjectDetailsToggle);
    window.addEventListener(DETAIL_VISIBILITY_EVENT, this.onObjectDetailsChange);
    this.syncObjectDetails();
    this.freeViewGestures = bindFreeViewGestures(this.canvas, {
      getView: () => this.scene && !this.demoRun ? this.cameraView : null,
      onChange: view => this.changeView(view, {announce: false}),
    });
    this.resizeObserver.observe(this.stage);
    window.addEventListener('pointerdown', this.onMenuPointerDown);
    window.addEventListener('resize', this.onViewportResize);
    window.visualViewport?.addEventListener('resize', this.onViewportResize);
    document.addEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.addEventListener('change', this.onMotionChange);
    this.resize();
    this.load();
  }

  disconnectedCallback() {
    this.holidayPanel.close();
    this.worldLifePanel.close();
    this.displaySettings.disconnect();
    this.snapshots.disconnect();
    this.setMainMenu(false);
    this.watchPublishedLayout();
    this.freeViewGestures?.dispose();
    this.freeViewGestures = undefined;
    this.resizeObserver.disconnect();
    this.shadowRoot.querySelector('.toggle-object-details')?.removeEventListener('click', this.onObjectDetailsToggle);
    window.removeEventListener(DETAIL_VISIBILITY_EVENT, this.onObjectDetailsChange);
    window.removeEventListener('pointerdown', this.onMenuPointerDown);
    window.removeEventListener('resize', this.onViewportResize);
    window.visualViewport?.removeEventListener('resize', this.onViewportResize);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.motionPreference.removeEventListener('change', this.onMotionChange);
    this.startupViewRead = false;
    this.startupViewRequest = undefined;
    this.cameraChanged = false;
    this.reset();
  }

  async load() {
    if (!this.isConnected || !this.dashboard || !this.session || this.model || this.loading || this.failed) return;
    this.status.hidden = false;
    this.recovery.hidden = true;
    if (this.session.connected === false) {
      this.status.querySelector('[role=status]').textContent = 'Waiting for Home Assistant…';
      return;
    }
    this.status.querySelector('[role=status]').textContent = 'Opening Roomcraft…';
    const request = {};
    this.loading = request;
    let waitTimer;
    try {
      const [config] = await Promise.all([
        this.session.callWS({type: 'lovelace/config', url_path: this.dashboard}),
        Promise.race([
          Promise.all([customElements.whenDefined(CONTROL_TAG), customElements.whenDefined(CAMERA_TAG)]),
          new Promise((_, reject) => {
            waitTimer = setTimeout(() => reject(new Error('Roomcraft controls unavailable.')), 7000);
          }),
        ]),
      ]);
      if (!this.isConnected || this.loading !== request) return;
      this.loadStartupView();
      this.model = readStorybookConfig(config);
      this.weatherPanel.update(this.session, this.model.weather.weather_entity, {reduceMotion:this.motionReduced});
      for (const id of this.commutes.configure(config?.roomcraft_commutes)) this.model.watch.add(id);
      this.locationPanel.configure(config?.roomcraft_location);
      this.locationPanel.update(this.session);
      this.prepareUtilities(config);
      this.scene = createStorybookScene(this.canvas, this.model.layout,
        {insaneGraphics: this.displaySettings.value.insaneGraphics, assetBase: '/local/roomcraft/'});
      const vacuum = this.model.layout.items.find(item => item.entityId?.startsWith('vacuum.') && item.vacuumMapEntityId);
      this.vacuumMapOverlay.configure(vacuum);
      this.lidarRuler.configure(vacuum);
      this.scene.setView(this.cameraView);
      this.applyDisplaySettings(this.displaySettings.value);
      this.detectionZones = readDetectionZones(this.model.layout.items);
      this.syncDetectionZones();
      this.heatMap.configure(this.model.layout.items);
      this.syncFreeViewMode();
      this.controls = this.model.controls.map(config => {
        const camera = config.type === `custom:${CAMERA_TAG}`;
        const element = document.createElement(camera ? CAMERA_TAG : CONTROL_TAG);
        element.className = camera ? 'camera' : 'device';
        element.hidden = true;
        element.setAttribute('data-renderer', 'storybook');
        element.setConfig(config);
        if (!camera || this.cameraTilesVisible) this.overlay.append(element);
        return {config, element, camera};
      });
      this.cameraTilesButton.hidden = !this.controls.some(control => control.camera);
      this.status.hidden = true;
      this.syncObjectDetails();
      this.updateDefaultViewButtons();
      this.resize();
      this.refresh();
      if (window.location.hash === '#google-location-setup') this.locationPanel.openGoogleSetup();
    } catch {
      if (this.loading === request) this.fail('Roomcraft could not open on this screen.');
    } finally {
      clearTimeout(waitTimer);
      if (this.loading === request) this.loading = undefined;
    }
  }

  syncDetectionZones() {
    const zones = this.detectionZones || [];
    const visible = zones.length > 0 && this.detectionZoneVisible;
    this.detectionZoneButton.hidden = zones.length === 0;
    this.detectionZoneButton.setAttribute('aria-pressed', String(visible));
    this.detectionZoneLegend.hidden = !visible;
    this.detectionZoneLegend.querySelector('[data-zone-kind=configured]').hidden =
      !zones.some(zone => zone.kind === 'configured' || !zone.kind);
    const nominal = zones.filter(zone => zone.kind === 'nominal');
    const nominalRow = this.detectionZoneLegend.querySelector('[data-zone-kind=nominal]');
    nominalRow.hidden = nominal.length === 0;
    const range = nominal[0]?.rangeMeters;
    const showRange = Number.isFinite(range) && range > 0 && nominal.every(zone => zone.rangeMeters === range);
    nominalRow.querySelector('span').textContent = showRange
      ? `Rated coverage (estimate, up to ${range} m)`
      : 'Rated coverage (estimate)';
    this.detectionZoneLegend.querySelector('[data-zone-kind=origin]').hidden =
      !zones.some(zone => [zone.origin?.x, zone.origin?.y, zone.forward?.x, zone.forward?.y].every(Number.isFinite));
    this.scene?.setDetectionZones(visible ? zones : []);
    this.anchorDirty = true;
    this.schedule();
  }

  prepareUtilities(config) {
    const {panels, devices} = readStorybookUtilities(config);
    this.utilityPanels = panels;
    this.power.setEnergyConfig(config?.roomcraft_energy);
    for (const button of this.utilityButtons) button.hidden = !panels[button.dataset.utility];
    if (!devices || !customElements.get('roomcraft-entity-menu')?.prototype.open) return;
    this.devicesDrawer = document.createElement('roomcraft-entity-menu');
    this.devicesDrawer.hidden = true;
    this.devicesDrawer.setConfig({...devices, show_navigation: false});
    this.devicesDrawer.hass = this.session;
    this.shadowRoot.append(this.devicesDrawer);
    this.devicesButton.hidden = false;
  }

  openUtility(kind) {
    const panel = this.utilityPanels?.[kind];
    if (!panel || this.utilityDialog.open) return;
    this.setMainMenu(false, !this.mainMenu.hidden);
    if (kind === 'electrical') {
      this.power.open(panel.entities);
      return;
    }
    this.utilityDialog.querySelector('h2').textContent = panel.title;
    this.utilityRows = panel.entities.map(entry => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'utility-row';
      const line = document.createElement('span');
      line.className = 'utility-line';
      const name = document.createElement('strong');
      const reading = document.createElement('span');
      reading.className = 'utility-reading';
      const message = document.createElement('small');
      message.className = 'utility-note';
      const issues = document.createElement('span');
      issues.className = 'utility-issues';
      line.append(name, reading);
      button.append(line, message, issues);
      button.addEventListener('click', () => {
        this.utilityDialog.close();
        this.dispatchEvent(new CustomEvent('hass-more-info',
          {bubbles: true, composed: true, detail: {entityId: entry.entity}}));
      });
      return {entry, button, name, reading, message, issues, health: kind === 'health'};
    });
    this.utilityDialog.querySelector('.utility-rows').replaceChildren(...this.utilityRows.map(row => row.button));
    this.refreshUtility();
    this.utilityDialog.showModal();
  }

  refreshUtility(previous) {
    if (!this.utilityRows) return;
    const snapshot = this.session?.connected === false ? {} : this.session?.states;
    for (const row of this.utilityRows) {
      const id = row.entry.entity;
      if (previous && previous.connected === this.session?.connected && previous.states?.[id] === snapshot?.[id]) continue;
      const status = utilityReading(row.entry, snapshot, row.health);
      row.button.disabled = !snapshot?.[id];
      row.button.dataset.level = status.level;
      row.name.textContent = status.name;
      row.reading.textContent = status.reading;
      row.message.textContent = status.message;
      row.message.hidden = !status.message;
      row.issues.replaceChildren(...status.issues.map(issue => {
        const entry = document.createElement('small');
        entry.textContent = issue;
        return entry;
      }));
    }
  }

  syncFreeViewMode() {
    const active = Boolean(this.scene) && !this.demoRun && this.cameraView.preset === 'free';
    this.canvas.toggleAttribute('data-free-view', active);
    this.freeViewHint.hidden = !active;
    if (active) {
      this.canvas.tabIndex = 0;
      this.canvas.setAttribute('aria-describedby', this.freeViewHint.id);
    } else {
      this.canvas.removeAttribute('tabindex');
      this.canvas.removeAttribute('aria-describedby');
    }
  }

  updateDefaultViewButtons() {
    const available = Boolean(this.scene) && Boolean(this.session?.connected);
    this.demoButton.disabled = !this.scene || Boolean(this.startupViewRequest);
    this.saveDefaultButton.hidden = !this.scene || this.cameraView.preset !== 'free';
    this.clearDefaultButton.hidden = !this.scene || !this.savedStartupView;
    this.saveDefaultButton.disabled = this.clearDefaultButton.disabled =
      !available || Boolean(this.startupViewRequest);
  }

  async loadStartupView() {
    const store = customElements.get(EDITOR_TAG);
    if (!store?.readStartupView || this.startupViewRead || !this.session?.connected) return;
    this.startupViewRead = true;
    const request = {};
    this.startupViewRequest = request;
    try {
      const saved = await store.readStartupView(this.session, this.dashboard);
      if (this.startupViewRequest !== request) return;
      this.savedStartupView = readSavedFreeView(saved);
      if (!this.cameraChanged) this.changeView('default', {remember: false});
    } catch {
      if (this.startupViewRequest === request) this.defaultStatus.textContent = 'Saved view unavailable';
    } finally {
      if (this.startupViewRequest === request) {
        this.startupViewRequest = undefined;
        this.updateDefaultViewButtons();
      }
    }
  }

  async saveStartupView(view) {
    const store = customElements.get(EDITOR_TAG);
    if (!store?.writeStartupView || !this.scene || !this.session?.connected || this.startupViewRequest) return;
    const request = {};
    this.startupViewRequest = request;
    this.defaultStatus.textContent = 'Saving view…';
    this.updateDefaultViewButtons();
    try {
      const saved = await store.writeStartupView(this.session, this.dashboard, view);
      if (this.startupViewRequest !== request) return;
      this.savedStartupView = readSavedFreeView(saved);
      if (!view) this.changeView('default');
      this.defaultStatus.textContent = view ? 'Default view saved' : 'Top down is the default';
    } catch {
      if (this.startupViewRequest === request) this.defaultStatus.textContent = 'Could not save default view';
    } finally {
      if (this.startupViewRequest === request) {
        this.startupViewRequest = undefined;
        this.updateDefaultViewButtons();
      }
    }
  }

  changeView(view, {announce = true, remember = true} = {}) {
    if (remember) {
      this.cameraChanged = view !== 'default';
      this.defaultStatus.textContent = '';
    }
    this.cameraView = view === 'default'
      ? resolveDefaultCameraView(this.savedStartupView)
      : normalizeCameraView(view);
    this.pendingCameraView = this.cameraView;
    this.cameraMotionUntil = performance.now() + CAMERA_SETTLE_MS;
    if (announce) {
      this.freeViewGestures?.cancel();
      this.viewSelect.value = this.cameraView.preset;
      this.syncFreeViewMode();
      const label = this.viewSelect.selectedOptions[0]?.textContent || 'Top down';
      this.viewStatus.textContent = `${label} view, rotated ${Math.round(this.cameraView.azimuth)} degrees, zoom ${Math.round(this.cameraView.zoom * 100)} percent.`;
      this.resize();
    }
    this.shadowRoot.querySelector('[data-camera=out]').disabled = this.cameraView.zoom <= .6;
    this.shadowRoot.querySelector('[data-camera=in]').disabled = this.cameraView.zoom >= 2.5;
    this.updateDefaultViewButtons();
    this.anchorDirty = true;
    this.schedule();
  }

  resize() {
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const top = Math.max(0, this.world.getBoundingClientRect().top);
    const available = Math.max(218, Math.floor(viewportHeight - top));
    const fit = `${available}px`;
    if (this.world.style.height !== fit) this.world.style.height = fit;
    if (!this.scene) return;
    const {width, height} = this.stage.getBoundingClientRect();
    if (!width || !height || width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.scene.resize(width, height);
    this.cameraMotionUntil = performance.now() + CAMERA_SETTLE_MS;
    this.anchorDirty = true;
    this.schedule();
  }

  paintTracking() {
    const sources = this.model?.layout.items.filter(personSource) || [];
    this.trackingList.replaceChildren();
    for (const item of sources) {
      const {count, zones} = trackingStatus(item, this.session?.connected ? this.session.states : {}, Date.now());
      const row = document.createElement('p');
      const label = document.createElement('strong');
      label.textContent = item.name;
      const status = document.createElement('small');
      const source = personSource(item);
      const mapped = this.frame?.mappedTargetCounts.get(source) ?? 0;
      const fallback = this.frame?.occupancyFallbacks.get(source);
      status.textContent = fallback === 'last-known' ? 'Occupied · showing the last known position' :
        fallback === 'area' ? 'Occupied · showing the approximate area' :
        count === null ? 'Awaiting a recent radar report' :
        `${count} ${count === 1 ? 'radar target' : 'radar targets'}${mapped < count ? ` · ${mapped} on map` : ''}`;
      row.append(label, status);
      if (zones.some(value => value !== null)) {
        const details = document.createElement('small');
        details.textContent = zones.map((value, index) => value === null ? '' :
          'Zone ' + (index + 1) + ' ' + (value ? 'occupied' : 'clear')).filter(Boolean).join(' · ');
        row.append(details);
      }
      this.trackingList.append(row);
    }
  }

  applyDisplaySettings(settings) {
    const hideFps = !settings.showFps;
    if (this.fpsDisplay.hidden !== hideFps) this.resetFpsSample();
    this.fpsDisplay.hidden = hideFps;
    this.fpsButton.setAttribute('aria-pressed', String(settings.showFps));
    this.world.dataset.dock = sceneDockAlignment(storybookDisplaySceneSettings(this.model?.layout.sceneSettings, settings));
    this.scene?.setDisplaySettings?.(settings);
    this.scene?.setGraphicsSettings(settings);
    if (this.frame && !this.demoRun) this.paintSky(this.frame.environment, this.session?.connected === false);
    this.anchorDirty = true;
    this.schedule();
  }

  resetFpsSample(label = '— FPS') {
    clearTimeout(this.fpsIdleTimer);
    this.fpsIdleTimer = undefined;
    this.fpsSampleAt = undefined;
    this.fpsFrameCount = 0;
    this.fpsDisplay.textContent = label;
  }

  recordSceneFrame(at, continuing) {
    if (this.fpsDisplay.hidden) return;
    if (this.fpsSampleAt === undefined) this.fpsSampleAt = at;
    else {
      const elapsed = at - this.fpsSampleAt;
      this.fpsFrameCount++;
      if (elapsed >= FPS_WINDOW_MS) {
        this.fpsDisplay.textContent = `${Math.round(this.fpsFrameCount * 1000 / elapsed)} FPS`;
        this.fpsSampleAt = at;
        this.fpsFrameCount = 0;
      }
    }
    if (this.fpsIdleTimer !== undefined) {
      clearTimeout(this.fpsIdleTimer);
      this.fpsIdleTimer = undefined;
    }
    if (!continuing) this.fpsIdleTimer = setTimeout(() => this.resetFpsSample('0 FPS'), FPS_WINDOW_MS);
  }

  paintSky(environment, offline) {
    const settings = this.demoRun ? undefined :
      storybookDisplaySceneSettings(this.model?.layout.sceneSettings, this.displaySettings.value);
    this.coastalSky.hidden = !sceneFeatureEnabled(settings, 'sky');
    if (!this.coastalSky.hidden) {
      updateCoastalSky(this.coastalSky, {...sceneWind(environment, settings), reduceMotion: this.motionReduced}, offline);
    }
  }

  paintWeather(environment, offline, demo = false) {
    this.paintSky(environment, offline);
    updateStorybookWeather(this.dock, this.weather, storybookWeather(environment, offline),
      !demo);
  }

  refresh() {
    if (!this.model) return;
    const offline = !this.session || this.session.connected === false;
    const states = offline ? {} : this.session.states ?? {};
    const now = Date.now();
    this.frame = storybookFrame(this.model, states, now, this.session?.config?.time_zone, this.weatherEntityId);
    const commute = this.commutes.update(offline ? undefined : states, now);
    this.frame.environment.traffic = {...(commute.profile ?? AMBIENT_TRAFFIC),
      vehicleStyle: this.commutes.vehicleStyle()};
    this.frame.moving = true;
    this.frame.people = this.personPresence.read(this.model.layout.items, states, now, {
      contains: this.scene.canPlacePerson, nearest: this.scene.nearestPersonPoint,
    });
    const mappedTargetCounts = new Map();
    const occupancyFallbacks = new Map();
    for (const track of this.frame.people) {
      const source = track.id.slice(0, track.id.lastIndexOf(':'));
      if (track.quality) occupancyFallbacks.set(source, track.quality);
      else mappedTargetCounts.set(source, (mappedTargetCounts.get(source) ?? 0) + 1);
    }
    this.frame.mappedTargetCounts = mappedTargetCounts;
    this.frame.occupancyFallbacks = occupancyFallbacks;
    this.trackingButton.hidden = !this.model.layout.items.some(personSource);
    if (this.trackingDialog.open) this.paintTracking();
    clearTimeout(this.frameExpiryTimer);
    const expires = Math.min(this.frame.nextRefreshAt ?? Infinity, commute.expiresAt ?? Infinity,
      ...this.frame.people.map(track => track.expiresAt ?? Infinity));
    if (Number.isFinite(expires)) {
      this.frameExpiryTimer = setTimeout(() => this.refresh(), Math.max(1, expires - now));
    }
    if (!this.demoRun) this.paintWeather(this.frame.environment, offline);
    for (const {config, element, camera} of this.controls) {
      if (camera && !this.cameraTilesVisible) continue;
      const item = this.model.items.get(config.roomcraft_item_id);
      const source = personSource(item);
      if (!camera && source) {
        const presence = states[config.roomcraft_presence_entity]?.state;
        const {count} = trackingStatus(item, states, now);
        element.radarStatus = mappedTargetCounts.has(source) ? 'tracking' :
          occupancyFallbacks.has(source) || presence === 'on' || count > 0 ? 'occupied' :
          count === 0 || presence === 'off' ? 'clear' : 'unavailable';
      }
      element.hass = offline ? undefined : this.session;
      if (offline) element.inert = true;
      else element.inert = false;
    }
    this.anchorDirty = true;
    this.schedule();
  }

  schedule() {
    if (this.animationFrame !== undefined || !this.scene || !this.frame || document.hidden || this.largePanelOpen) return;
    this.animationFrame = requestAnimationFrame(at => {
      this.animationFrame = undefined;
      if (this.largePanelOpen) {
        if (!this.fpsDisplay.hidden) this.resetFpsSample('0 FPS');
        return;
      }
      const {frameRate, cameraFrameRate} = this.displaySettings.value;
      const movingCamera = this.demoRun || at < this.cameraMotionUntil;
      const interval = 1000 / Math.min(frameRate, (movingCamera ? cameraFrameRate : null) ?? frameRate);
      if (interval !== this.renderInterval) {
        this.renderInterval = interval;
        this.nextRenderAt = this.lastSceneRenderAt === undefined ? undefined : this.lastSceneRenderAt + interval;
      }
      const deadline = this.nextRenderAt ?? at;
      if (at + FRAME_DEADLINE_TOLERANCE < deadline) {
        this.schedule();
        return;
      }
      // Keep the cadence across vsync boundaries and skip deadlines missed by a slow draw.
      const elapsed = at + FRAME_DEADLINE_TOLERANCE - deadline;
      this.nextRenderAt = deadline + (1 + Math.floor(elapsed / interval)) * interval;
      const reduceMotion = this.motionReduced;
      const motion = (this.frame.moving || this.scene.hasAmbientMotion || this.frame.people.length) && !reduceMotion;
      try {
        if (!this.demoRun && this.pendingCameraView) {
          this.scene.setView(this.pendingCameraView);
          this.pendingCameraView = undefined;
        }
        this.updateDemo(at);
        const demo = this.demoRun;
        const frame = demo?.frame ?? this.frame;
        const time = (demo?.sample.elapsedMs ?? at) / 1000;
        const options = {reduceMotion, transientTelemetry: Boolean(demo)};
        this.scene.setPeople(frame.people, time, options);
        this.scene.render(time, frame.states, {...frame.environment,
          holidayDate:frame.environment.holidayDate ?? this.frame.environment.holidayDate,
          holidayPreview:this.holidayPreview, worldLifePreview:this.worldLifePreview,
          worldTimeSeconds:frame.environment.worldTimeSeconds ?? this.frame.environment.worldTimeSeconds, reduceMotion}, options);
        this.lastSceneRenderAt = at;
        if (this.anchorDirty || (!demo && this.scene.trackedControlChanged)) {
          if (!demo) this.positionControls();
          this.anchorDirty = false;
        }
      } catch {
        this.fail('The storybook renderer stopped.');
        return;
      }
      const continuing = motion || this.demoRun || this.scene?.hasPendingReacquisition;
      this.recordSceneFrame(at, continuing);
      if (continuing) this.schedule();
    });
  }

  positionControls() {
    const {width, height} = this;
    if (!width || !height) return;
    const keepClear = this.scene.exteriorClearance();
    const targets = [];
    const passive = [];
    for (const control of this.controls) {
      const {config, element, camera} = control;
      if (camera && !this.cameraTilesVisible) continue;
      const anchor = this.scene.anchor(config.roomcraft_item_id);
      if (!anchor || !width || !height) {
        element.hidden = true;
        continue;
      }
      const item = this.model.items.get(config.roomcraft_item_id);
      const {w, h} = camera ? storybookCameraTileSize(item, width) : {w: 44, h: 44};
      const priority = config.roomcraft_visual_kind === 'light' || config.roomcraft_device_form === 'presence_switch'
        ? 0 : camera ? 2 : 1;
      const target = {...control, x: anchor.x * width, y: anchor.y * height, w, h, priority,
        id: item.id, keepClear: camera ? keepClear : undefined};
      if (!camera && config.roomcraft_tap_action === 'none' && config.roomcraft_hold_action === 'none') {
        passive.push(target);
      } else targets.push(target);
    }
    const byId = new Map([...targets, ...passive].map(target => [target.id, target]));
    const placements = [...placeStorybookTargets(targets, width, height), ...passive];
    const positioned = new Set(placements.map(target => target.element));
    const leaders = [];
    for (const target of placements) {
      const {element, x, y, w, h, id} = target;
      Object.assign(element.style, {left: `${x}px`, top: `${y}px`, width: `${w}px`, height: `${h}px`});
      element.hidden = false;
      const origin = byId.get(id);
      const moved = Math.hypot(origin.x - x, origin.y - y) > 20;
      element.toggleAttribute('data-offset', moved);
      if (moved) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        for (const [key, value] of Object.entries({x1: origin.x, y1: origin.y, x2: x, y2: y})) {
          line.setAttribute(key, value);
        }
        line.setAttribute('stroke', '#544061');
        line.setAttribute('stroke-width', '1.5');
        line.setAttribute('stroke-opacity', '.65');
        line.setAttribute('stroke-dasharray', '3 3');
        leaders.push(line);
      }
    }
    for (const {element} of this.controls) if (!positioned.has(element)) element.hidden = true;
    this.positionDetails(placements);
    this.tethers.replaceChildren(...leaders);
  }

  positionDetails(placements) {
    if (!customElements.get(CONTROL_TAG)?.detailVisibility) return;
    const measured = placements.map(target => ({...target, detail: target.element.detailSize}));
    const labels = new Map(placeStorybookDetails(measured, this.width, this.height).map(label => [label.id, label]));
    for (const {element, id, x, y, w, h} of placements) {
      const label = labels.get(id);
      element.toggleAttribute('data-detail-fit', Boolean(label));
      if (!label) continue;
      element.style.setProperty('--detail-left', `${label.left - x + w / 2}px`);
      element.style.setProperty('--detail-top', `${label.top - y + h / 2}px`);
    }
  }

  reset() {
    this.heatMap.configure();
    this.weatherPanel.close();
    this.vacuumMapOverlay.configure(null);
    this.lidarRuler.configure(null);
    this.lightPanel.close();
    this.stopDemo(false);
    this.freeViewGestures?.cancel();
    cancelAnimationFrame(this.animationFrame);
    clearTimeout(this.frameExpiryTimer);
    this.animationFrame = undefined;
    this.nextRenderAt = undefined;
    this.lastSceneRenderAt = undefined;
    this.cameraMotionUntil = undefined;
    this.pendingCameraView = undefined;
    this.resetFpsSample();
    this.loading = undefined;
    this.model = undefined;
    this.frame = undefined;
    this.detectionZones = undefined;
    this.detectionZoneButton.hidden = true;
    this.detectionZoneButton.setAttribute('aria-pressed', 'false');
    this.detectionZoneLegend.hidden = true;
    if (this.utilityDialog.open) this.utilityDialog.close();
    if (this.trackingDialog.open) this.trackingDialog.close();
    for (const dialog of this.linkDialogs) if (dialog.open) dialog.close();
    this.locationPanel.configure(null);
    this.power.close();
    this.utilityRows = null;
    this.utilityPanels = null;
    this.power.setEnergyConfig(null);
    this.devicesDrawer?.remove();
    this.devicesDrawer = null;
    this.devicesButton.hidden = true;
    this.cameraTilesButton.hidden = true;
    this.trackingButton.hidden = true;
    for (const button of this.utilityButtons) button.hidden = true;
    this.overlay.replaceChildren();
    for (const {element} of this.controls ?? []) element.hass = undefined;
    this.controls = [];
    this.tethers.replaceChildren();
    this.scene?.dispose();
    this.scene = undefined;
    this.syncFreeViewMode();
    this.updateDefaultViewButtons();
    this.width = this.height = undefined;
    this.failed = false;
  }

  fail(reason) {
    this.reset();
    this.failed = true;
    this.status.querySelector('[role=status]').textContent = reason;
    this.recovery.hidden = false;
    this.status.hidden = false;
  }
}

if (!customElements.get(TAG)) customElements.define(TAG, RoomcraftStorybookCard);
