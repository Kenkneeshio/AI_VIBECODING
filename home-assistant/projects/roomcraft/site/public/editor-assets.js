// Use the same content stamp for images loaded by scripts and HTML assets.
(() => {
  'use strict';
  const version = document.currentScript?.src.match(/[?&]v=([a-f0-9]{16})(?:&|$)/)?.[1];
  window.RoomcraftAssetUrl = path => version ? `${path}?v=${version}` : path;
})();
