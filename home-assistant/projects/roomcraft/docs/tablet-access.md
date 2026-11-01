# Calendar tablet and remote access runbook

This is the recovery path for the **Apolosign Calendar** wall tablet that displays the Home Assistant Second Floor plan. The older Fire tablet is a different device. This repository is public, so the commands use placeholders; obtain the actual network addresses, private management adapter, and SSH key from the owner through a private channel.

## How the access chain works

```text
Phone ChatGPT Remote
  → signed-in, awake Windows Codex desktop
  → private Home Assistant API/SSH access
  → Home Assistant Terminal & SSH add-on (`core_ssh`) running adb
  → paired Apolosign Calendar over wireless debugging
  → Home Assistant Companion app → Second Floor plan
```

These are separate connections. Phone Remote operates the desktop Codex session; it does not pair with Android or provide Home Assistant credentials. The SSH endpoint used here is the official `core_ssh` add-on container, not the HAOS host root environment. The owner's local private `HomeAssistantManagement/ha_manage.py` adapter contains the current HA host and SSH key reference; its DPAPI-protected API token and the key stay outside GitHub. The HA-hosted Roomcraft editor uses the signed-in HA user's browser session. The tablet's Home Assistant Companion app displays the saved dashboard; ADB is an administration and recovery path, not the dashboard data source.

## Verified on 2026-10-31

- The Home Assistant host completed Android's pairing-code flow and connected to the calendar tablet over wireless debugging. `adb devices -l` reported `device` with model **Apolosign Calendar**. The Windows workstation could not reach the pairing port directly in this session, so the Home Assistant host was the paired ADB workstation.
- Home Assistant Companion package `io.homeassistant.companion.android` was installed. A Home Assistant navigation intent opened its WebView on the **Second Floor → Floor Plan** dashboard.
- Home Assistant Companion's **Home app (launcher)** component was already enabled, but Android still selected the vendor calendar launcher. The default Home activity was changed to Home Assistant. Android's HOME resolution then returned `io.homeassistant.companion.android/.launch.LauncherAlias`. Pressing Home opened the Companion WebView in the Home task. After force-stopping Companion, another Home key press cold-launched its WebView at `/second-floor/plan`; a private capture showed the plan elements. This verifies launcher recovery from a stopped app, **not** behavior after a tablet reboot.
- A private 1920 × 1080 ADB screen capture showed the whole illustrated plan inside the tablet display, including the play area and the authenticated porch-camera thumbnail. The capture, live camera frame, Android identifiers, and current network endpoints are not published here.
- After the plan view's height reservation was removed and its surrounding background changed to a matching gradient, a second private 1920 × 1080 capture showed the 3:2 art at approximately 1612 × 1074 pixels (x154–1765, y5–1078). The remaining side gutters were filled with the view gradient rather than black. Weather, time, menu, edit link, and live porch thumbnail remained visible. The plan's 15 picture elements matched the pre-change backup, and the other views were unchanged. This confirms visual fit in landscape on this tablet; touch and other orientations remain untested.
- A later wall-to-wall release cropped the same editable project to a 1472 × 828 image. Dashboard readback confirmed its `wall-to-wall-v1` marker, 10 object controls, moved exterior camera frame, and top menu/weather/time/editor positions. A private 1920 × 1080 tablet capture showed that version nearly edge to edge without side gutters and with the live porch thumbnail visible.
- The first full-width release used all original x0–1536 columns and y80–944 as a 1536 × 864 image. Dashboard readback confirmed `full-width-v1`, 10 object controls, the exterior camera frame, and top chrome. A private 1920 × 1080 tablet capture showed the entire left staircase and right exterior wall, no side gutters, and a visible live porch thumbnail.
- The current live-object release keeps that 1536 × 864 shape. HA readback found 41 items, 14 object controls, and two camera frames. A private 1920 × 1080 HA Companion check showed high-contrast mixed state graphics, a single five-blade fan graphic, a dated front-door event still, and garage **LIVE** after an explicit stream start and decoded frame. A safe thermostat tap opened details and showed the brief feedback outline. Home Assistant reopened after an app force-stop via the default Home app. These captures and camera media remain private. Broad physical touch alignment, other orientations, camera playback over time, and behavior after a full reboot remain untested.
- The HA add-on's three ADB identity files were copied into root-only persistent add-on data at `/data/roomcraft-adb-identity`; file comparisons verified the backup. The backup directory has mode `0700` and its files have mode `0600`. The identity contents are private and must never be committed. This is a recovery copy, not an installed automatic restore hook.
- The Terminal & SSH (`core_ssh`) add-on's supported `apks` option now contains `android-tools`. The Supervisor API readback showed the add-on still started and every other option unchanged. This should reinstall the ADB executable during an add-on rebuild, but an add-on restart/rebuild has not yet been tested; the ADB identity may still require private restoration.
- The Windows desktop's **AC sleep timeout** was changed from five hours to **Never** and read back as disabled. Battery sleep remains ten minutes. This improves availability for phone Remote while the desktop is plugged in; it does not make the desktop or app immune to power loss, sign-out, or network outages. The owner can restore the prior five-hour AC timeout in Windows power settings if desired.
- A user-level shortcut for the installed ChatGPT Codex app was added to the Windows Startup folder and its app target was verified. It is intended to launch Codex after that user signs in; neither Windows startup nor Remote reconnection has been tested after a reboot. The shortcut does not bypass Windows sign-in.
- This was a display and connection check. Physical touch targets, scene actions, camera playback over time, and automatic reconnection after reboot were **not** tested.
- The latest recorded Android boot reason was `reboot,userrequested` in both `sys.boot.reason` and `ro.boot.bootreason`; the retained previous-kernel log ended in an orderly `userrequested` restart. This does not identify the initiator or explain the reported recurring restarts. A vendor Bluetooth HAL crash was recorded shortly beforehand, but no causal link was established. At inspection, the tablet was AC powered, its scheduled sleep mode was disabled with no matching pending alarm, and thermal status was normal. These are point-in-time observations, not proof that power, temperature, firmware, or another service can never cause a future restart.

## What survives and what needs recovery

| Layer | Expected persistence | Check after a restart |
| --- | --- | --- |
| Roomcraft source and handoff | GitHub history persists; a merge does not itself redeploy HA or the owner-private Site. | Follow the [deployment guide](deployment.md) if a runtime is missing or behind. |
| Home Assistant dashboard and installed editor | Dashboard configuration and `/config/www/roomcraft/` are installed on HA storage; the layout is stored with the dashboard. | Open `/second-floor/plan` and `/second-floor/studio` in a signed-in browser. |
| Private HA API/SSH access | Depends on the owner's local token, key, HA add-on, and network; none is stored in this repository. | Use the private management adapter and a harmless read-only HA/SSH check. |
| Android tools and pairing trust | The `core_ssh` add-on now requests `android-tools` through its persistent `apks` option. Android says the device stays paired until the host is forgotten or debugging authorizations are revoked. Pairing trust is distinct from an active TCP connection. A root-only ADB identity backup is in persistent HA add-on data, but no automatic restoration is installed. | First check `adb version`, then `adb devices -l` and `adb connect` to the tablet's current **Wireless debugging** connection port. If trust is missing, check the private backup before pairing again. Add-on rebuild behavior has not been tested. |
| Wireless debugging and ADB connection | An active connection can disappear after a restart or network change. Android may show a different connection port; this installation's automatic mDNS reconnection has not been verified. | On the tablet, check **Developer options → Wireless debugging**, its trusted network and current **IP address & Port**. Reconnect from the HA host. |
| Tablet foreground app | Home Assistant Companion is now the default Home app. The Home key returned its dashboard, including a cold launch after an app force-stop; the setting should survive restart under Android's supported launcher behavior, but this tablet has not yet passed a reboot test. | Check HOME resolution, press Home, and verify the intended dashboard. If HA is not the default, restore it using the procedure below. |
| Phone Codex Remote | The phone and desktop are separately paired through ChatGPT. [OpenAI's Remote guide](https://developers.openai.com/training/walkthroughs/working-on-your-phone) requires the computer to remain awake, online, and signed in to the same account and workspace. AC sleep is currently disabled on the Windows desktop; battery sleep is still ten minutes. A user-level Startup shortcut is intended to reopen the installed Codex app after Windows sign-in, but reboot behavior is untested. | Reopen the desktop app and check **Settings → Connections → Control this Mac or PC** if the phone cannot reach it. Check power and Windows sign-in before changing ADB. |

Do not promise unattended operation based on a one-time pairing. The current HA host has Android platform tools 35, and automatic discovery/reconnection was not demonstrated. A fixed connection port is not part of the setup; read the current port from the tablet. Android's [wireless ADB guide](https://developer.android.com/tools/adb#connect-to-a-device-over-wi-fi) describes pairing, trusted networks, and reconnect troubleshooting.

### Can Codex run on Home Assistant Green instead?

Home Assistant Green is a 4 GB ARM appliance with a diagnostic-only HDMI port, and the current SSH endpoint is the `core_ssh` add-on container. OpenAI publishes [ARM64 Linux Codex CLI builds](https://github.com/openai/codex/releases), so a terminal-only experiment in a separately managed container is technically possible. This installation has **not** installed Codex on Green, registered it as a ChatGPT phone Remote host, or provided it with a graphical Chrome session. The [desktop browser and Chrome controls](https://developers.openai.com/training/walkthroughs/using-your-computer-and-browser) used in this project belong to the signed-in Windows desktop app. Installing CLI in `core_ssh` would not reproduce those controls or make a durable host by itself. For full phone Remote plus browser control without relying on this Windows PC, evaluate a separate always-on computer and verify its Remote pairing, browser access, persistence, and resource headroom before moving the workflow.

## Recover the tablet connection

1. Keep the Home Assistant host and tablet on the same trusted home network. On the tablet, open **Settings → Developer options → Wireless debugging** and enable it if needed. Read **IP address & Port** on the main Wireless debugging screen. This is the **connection port**, not the pairing-code port.
2. On the HA host, inspect the current connection and reconnect with the address shown on the tablet:

   ```sh
   adb devices -l
   adb connect <TABLET_IP>:<CURRENT_DEBUG_PORT>
   adb devices -l
   adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell getprop ro.product.model
   ```

   Require state `device` and model `Apolosign Calendar` before sending a screen action. If the host is forgotten or authorization was revoked, select **Pair device with pairing code** on the tablet. Run `adb pair <TABLET_IP>:<PAIRING_PORT>` on the HA host and enter the temporary code at its prompt. Then use `adb connect` with the **separate main-screen port**. Never put the code in a script, shell history, GitHub, or a URL.
3. If Home Assistant is not visible, press the tablet's Home button first. Home Assistant is the configured default Home app. If it opens to the wrong dashboard, set **Second Floor** as the default on this device in Home Assistant **Settings → Dashboards**. If Home does not bring up the Companion app, check or restore the default launcher as described below. To open the plan directly for recovery, use:

   ```sh
   adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell am start -a android.intent.action.VIEW -d homeassistant://navigate/second-floor/plan -p io.homeassistant.companion.android
   ```

4. Verify on the tablet that the installed plan fits in landscape without clipping and that the intended HA account is signed in. The `full-width-v1` image should show the entire original left and right sides, with menu, weather, time, editor shortcut, and camera frame fully visible. The preceding `wall-to-wall-v1` image cuts narrow side strips; the older 3:2 release has color-matched side gutters. Check camera and interactive controls separately. Do not use a scene or device toggle merely to test ADB.

From an authorized Windows workstation, SSH to the HA host first, then run those `adb` commands there. For example, `ssh -i <PRIVATE_SSH_KEY> root@<HA_HOST> 'adb devices -l'`. The pairing in the verified session belongs to the HA host; the Windows workstation's own `adb devices` output does not prove that host's connection.

### Default Home app and safe rollback

The supported daily configuration uses the installed Home Assistant Companion app itself as Android's Home app. [Home Assistant's launcher guide](https://companion.home-assistant.io/docs/integrations/android-home-app-launcher/) says this opens Home Assistant automatically on boot and explains the in-app route: **Settings → Companion app → Device home screen → Use as Home app (launcher) → Change home app**. On this tablet the Home app component was already enabled; changing Android's default Home selection completed the setup. No separate kiosk app or persistent ADB session is required for normal dashboard startup.

From the paired HA host, the Android package manager provides a recovery check and a reversible default-Home change:

```sh
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell cmd package resolve-activity --brief -a android.intent.action.MAIN -c android.intent.category.HOME
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell cmd package set-home-activity io.homeassistant.companion.android
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell input keyevent KEYCODE_HOME
```

The resolve output should name `io.homeassistant.companion.android/.launch.LauncherAlias`. Confirm the screen shows the authenticated plan after the Home key. If the Companion app is unavailable or the owner wants the calendar launcher back, open Android **Settings → Apps → Default apps → Home app** and select the vendor launcher, or use the paired ADB recovery command below:

```sh
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell cmd package set-home-activity com.elclcd.launcher
```

Changing the default Home app is distinct from choosing which Home Assistant dashboard opens. Set **Second Floor** as default **on this device** in Home Assistant's dashboard settings while signed in as the tablet user. Recheck after an HA account change. A Home app that launches into an authentication or connection error still needs HA login and network recovery.

### Investigating another unexpected restart

The Home app setting restores the panel after Android starts; it does not stop the tablet from restarting. If an unplanned restart occurs, record the approximate local time and what the screen displayed before and after. Before another reboot or log rotation, reconnect ADB and collect the current and historical reason privately:

```sh
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell cat /proc/uptime
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell getprop sys.boot.reason
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell getprop ro.boot.bootreason
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell getprop persist.sys.boot.reason.history
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell dumpsys battery
adb -s <TABLET_IP>:<CURRENT_DEBUG_PORT> shell dumpsys thermalservice
```

Inspect `adb shell dumpsys dropbox` for nearby `SYSTEM_LAST_KMSG` or `SYSTEM_TOMBSTONE` entries, then read only the relevant entries privately. Dropbox logs can contain device and personal data: redact them before any issue report and never commit raw output. Compare the time and boot reason with any HA app crash and the tablet's scheduled sleep settings. The last observed boot was orderly and marked `userrequested`; no recurring-restart cause has been demonstrated. Do not disable system services or change firmware based on that record alone.

### If the HA add-on loses its ADB identity

Use this only if `core_ssh` was rebuilt and its active `/root/.android/` identity is missing. Run in the HA host's `core_ssh` shell as root. First check `adb version`; if it is missing, inspect the add-on's `apks` installation before restoring identity. The persistent backup is private; never copy its files to GitHub, a Site, or a shared workstation. Stop the ADB server before restoring so it reads the restored identity on start:

```sh
adb kill-server
install -d -m 700 /root/.android
install -m 600 /data/roomcraft-adb-identity/adbkey /root/.android/adbkey
install -m 600 /data/roomcraft-adb-identity/adbkey.pub /root/.android/adbkey.pub
install -m 600 /data/roomcraft-adb-identity/adb_known_hosts.pb /root/.android/adb_known_hosts.pb
adb start-server
adb connect <TABLET_IP>:<CURRENT_DEBUG_PORT>
adb devices -l
```

Read the current connection port from the tablet's main Wireless debugging screen. Restoring these files should avoid a new pairing-code flow while the tablet still trusts this host, but the procedure has not been tested after an add-on rebuild. If the tablet's pairing was deliberately redone, refresh all three files in the private `/data` backup after the new connection succeeds; an old backup can hold obsolete trust state. If the tablet itself revoked trust, use the pairing-code procedure instead.

## Making the display more self-recovering

The tablet now uses Home Assistant Companion as its default Home app, so Android should return to the dashboard after an ordinary restart. The Home key was verified, but **automatic launch after a reboot remains untested on this device**. During the next supervised restart, capture the screen before interaction, verify Home Assistant opens to Second Floor, check the login and controls, and read Android's boot reason and crash logs before clearing any state. Avoid a remote-only reboot while the physical tablet is unattended: wireless debugging can disconnect or change ports, and an unexpected setup or lock screen may require local recovery. If the reboot check fails, use the default-Home and ADB recovery steps above and record the observed screen and reason; do not assume the launcher setting fixes the underlying restart cause.

For remote ADB recovery, test mDNS discovery with a supported platform-tools build or provide a private local reconnect helper that reads the tablet's current port. Keep credentials, ADB pairing material, private dashboard exports, camera media, and device network details outside this public repository. Do not expose wireless debugging through router forwarding or a public endpoint.

If the owner reverses these availability settings later, restore the Windows AC sleep timeout through Windows power settings, remove the Codex shortcut from that user's Startup folder, and remove only `android-tools` from the `core_ssh` add-on's `apks` option while preserving its other options. Removing the package can make `adb` unavailable after an add-on rebuild; keep the private identity backup protected until a replacement management path is verified.
