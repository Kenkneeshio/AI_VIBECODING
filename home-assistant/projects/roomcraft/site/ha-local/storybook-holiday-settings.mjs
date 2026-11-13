import '../public/engine/holiday-settings.js';

const settings = (typeof window === 'undefined' ? globalThis : window).RoomcraftHolidaySettings;
export const HOLIDAY_IDS = settings.ids;
export const validHolidaySettings = settings.valid;
export const validHolidayDate = settings.validDate;
export const normalizeHolidaySettings = settings.normalize;
export const withHolidaySettings = settings.withSettings;
