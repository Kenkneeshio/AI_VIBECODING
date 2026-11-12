# Wall-tablet performance audit

The wall-tablet user can see the current scene frame rate, set a main cap, and use a lower cap during camera movement. The badge counts draws about once a second. It reads zero when the scene is idle. Browser preferences keep the display options local to each screen.

The dashboard uses the latest requested camera view for each draw. With **Limit off-screen scenery**, the road and sidewalk layers check individual actor bounds before submitting their instances. Wide bounds preserve visible headlight spill and actor shadows. The option applies to traffic, walkers, and cyclists. The ocean, weather, lighting, radar, and device controls use their normal rendering paths. A synthetic top-down comparison submitted 74,402 instead of 123,860 triangles for the two affected layers. At 2.5× zoom on the house, the layers submitted no instances when the road and sidewalk were outside the camera view.

The centered Home popout groups display controls, map tools, camera framing, management, and household actions. Its map section links directly to Studio's vacuum alignment survey. The larger Power dialog emphasizes the live reading, its history, and the period totals. Its animation responds to signed watts. The Weather panel reads forecasts from a selected Home Assistant provider and can open Windy's regional map on request. Weather and Power pause the 3D scene while open. Calendar and To-dos has its own dock button.

## Device measurements

The wall tablet runs Android 16 at 1920 × 1080 and has an eight-core RK3576, Mali-G52 graphics and about 3.8 GiB RAM. Process percentages are relative to one CPU core. Short foreground samples at 20 FPS, 67% render resolution, and shadows off showed 121–149% for Home Assistant Companion and 82–144% for its WebView renderer. In Android Settings with the dashboard in the background, the same processes used 3–6% and 2–4%. The foreground thread samples showed sustained work in Chromium's renderer and GPU submission threads and Android's render thread.

The Home Assistant Green had a one-minute load of 0.26 across four cores, about 1.2 GiB available RAM, and below 2% Core CPU during the sampled interval. Tablet-to-Home Assistant LAN round trips averaged 3.35 ms in four checks. The tablet had around 0.7–1 GiB RAM available and had used swap. I/O wait was generally low. Android reported thermal status 0, though temperatures rose during use. These are short observations. GPU utilization counters and reliable per-layer compositor frame timing were unavailable.

| Tablet profile at the 60 FPS cap | Scene FPS | Companion CPU | WebView renderer CPU |
| --- | ---: | ---: | ---: |
| Camera tiles on, 67% resolution, shadows off | 36–38 | 119–128% | 90–107% |
| Camera tiles off, same graphics | 34–41 | 93–106% | 85–181% |
| Camera tiles off, Reduce motion on, same graphics | 0 after settling | 0–2% | 0–3% |

Continuous 3D drawing accounted for most of the measured load. Disabling the camera tiles reduced Companion and video decoder CPU, while the FPS samples still overlapped. At the higher cap, paging increased during parts of the test and the thermal HAL reported GPU readings of about 76–80°C. The GPU sensor reported severity 3 despite aggregate Android thermal status 0. Treat memory pressure and heat as secondary constraints. The FPS counter measures scene draws. Camera decoding, CSS animations, touch latency, and the GPU's completion time are separate. The 60 FPS cap and FPS display stayed enabled on the tablet, with camera tiles and normal motion restored after the comparisons.

The prior Home and Studio release is source `6873579e4b63e2f2e1754d8dda44423f2050a09d`. Reinstall its assets or restore the protected pre-install backup to roll back. The previous hosted editor is private Studio version 89. See the [deployment recovery guide](deployment.md).
