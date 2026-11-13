import {keepPreviousDashboardDesign, stableDashboardJson} from './dashboard-snapshots.mjs';
import {normalizeHolidaySettings, validHolidaySettings, withHolidaySettings} from './storybook-holiday-settings.mjs';

/** Update one authored settings branch, preserving the latest unrelated layout and dashboard data. */
export async function saveHolidaySettings(session, dashboard, expected, requested, {stillAuthorized, savedAt} = {}) {
  const authorized = () => dashboard === 'roomcraft-home' && session?.user?.is_admin === true && stillAuthorized?.() === true;
  if (!authorized()) return {status: 'closed'};
  if (!validHolidaySettings(requested)) return {status: 'invalid'};
  const read = () => session.callWS({type: 'lovelace/config', url_path: dashboard});
  const current = await read();
  if (!authorized()) return {status: 'closed'};
  const layout = current.roomcraft_layout;
  if (layout?.version !== 2) return {status: 'invalid'};
  const previous = layout.sceneSettings?.holidays;
  if (stableDashboardJson(previous) !== stableDashboardJson(expected)) return {status: 'changed', value: previous};
  const value = requested === undefined ? undefined : normalizeHolidaySettings(requested);
  const sceneSettings = withHolidaySettings(layout.sceneSettings, value);
  if (sceneSettings === layout.sceneSettings) return {status: 'saved', value, layout, config: current};
  if (typeof savedAt !== 'string' || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d{3})?Z$/.test(savedAt)
      || !Number.isFinite(Date.parse(savedAt))) return {status: 'invalid'};
  const nextLayout = {...layout};
  if (sceneSettings) nextLayout.sceneSettings = sceneSettings;
  else delete nextLayout.sceneSettings;
  const next = keepPreviousDashboardDesign(current, {...current, roomcraft_layout: nextLayout}, savedAt);
  if (!authorized()) return {status: 'closed'};
  await session.callWS({type: 'lovelace/config/save', url_path: dashboard, config: next});
  const saved = await read();
  if (stableDashboardJson(saved.roomcraft_layout?.sceneSettings?.holidays) !== stableDashboardJson(value)) return {status: 'unverified'};
  return {status: 'saved', value, layout: saved.roomcraft_layout, config: saved};
}
