const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const RECENT_WINDOW = 6 * HOUR;
const KWH_PER_UNIT = new Map([['Wh', .001], ['kWh', 1], ['MWh', 1000]]);

function timestamp(value) {
  if (Number.isFinite(value)) return new Date(value).valueOf();
  return typeof value === 'string' && /(?:Z|[+-]\d{2}:\d{2})$/i.test(value)
    ? Date.parse(value) : NaN;
}

function calendarFormatter(timeZone) {
  if (typeof timeZone !== 'string' || !timeZone) return null;
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone, calendar: 'iso8601', numberingSystem: 'latn', hourCycle: 'h23',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
  } catch {
    return null;
  }
}

function localClock(formatter, instant) {
  const parts = Object.fromEntries(formatter.formatToParts(instant)
    .map(({type, value}) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}`;
}

function localDayStart(formatter, date) {
  const midnight = `${date}T00:00:00`;
  const utc = Date.parse(`${midnight}Z`);
  let first = Infinity;
  // Sample both sides of the day to find each UTC offset around a clock change.
  for (const near of [utc - DAY, utc, utc + DAY]) {
    const offset = Date.parse(`${localClock(formatter, near)}Z`) - near;
    const candidate = utc - offset;
    if (localClock(formatter, candidate) === midnight) first = Math.min(first, candidate);
  }
  if (Number.isFinite(first)) return first;

  // Some zones jump over midnight. Use the first instant on the date, if it exists.
  let before = utc - DAY;
  let after = utc + DAY;
  while (after - before > 1) {
    const middle = Math.floor((before + after) / 2);
    if (localClock(formatter, middle).slice(0, 10) < date) before = middle;
    else after = middle;
  }
  return localClock(formatter, after).slice(0, 10) === date ? after : null;
}

/** Label the meter's native reset in the Home Assistant calendar. */
export function energyResetDate(lastReset, timeZone) {
  const instant = timestamp(lastReset);
  const formatter = calendarFormatter(timeZone);
  return formatter && Number.isFinite(instant) && Number.isFinite(new Date(instant).valueOf())
    ? localClock(formatter, instant).slice(0, 10) : null;
}

/** Use Home Assistant's timezone for both the start and the display dates. */
export function energyPeriodRange(period, {timeZone, now = Date.now()} = {}) {
  const end = new Date(timestamp(now));
  const formatter = calendarFormatter(timeZone);
  if (period !== 'month' || !formatter || !Number.isFinite(end.valueOf())) return null;
  const endDate = localClock(formatter, end).slice(0, 10);
  const startDate = `${endDate.slice(0, 7)}-01`;
  const start = localDayStart(formatter, startDate);
  if (start === null || start > end) return null;
  return {start: new Date(start).toISOString(), end: end.toISOString(), startDate, endDate};
}

/** Query only the boundary bucket and recent cumulative samples, in one batch per window. */
export function energyStatisticsRequests(range, statisticIds) {
  const start = timestamp(range?.start);
  const end = timestamp(range?.end);
  if (!Array.isArray(statisticIds)) return [];
  const ids = [...new Set(statisticIds.filter(id => typeof id === 'string' && id))];
  if (!Number.isFinite(start) || !Number.isFinite(end) || start >= end || !ids.length) return [];
  const baselineBucket = start % HOUR === 0 ? HOUR : 5 * MINUTE;
  const request = (from, to, period) => ({
    type: 'recorder/statistics_during_period',
    statistic_ids: ids,
    start_time: new Date(from).toISOString(),
    end_time: new Date(to).toISOString(),
    period,
    types: ['sum'],
    units: {energy: 'kWh'},
  });
  return [
    request(start - baselineBucket, start, baselineBucket === HOUR ? 'hour' : '5minute'),
    request(Math.max(start, end - RECENT_WINDOW), end, '5minute'),
  ];
}

/** Subtract verified Recorder sums across resets and refuse an unverified boundary. */
export function energyStatisticTotal(rows, {start, end, unit = 'kWh'} = {}) {
  const boundary = timestamp(start);
  const stop = timestamp(end);
  if (!Array.isArray(rows) || !KWH_PER_UNIT.has(unit) || !Number.isFinite(boundary) ||
      !Number.isFinite(stop) || boundary >= stop) return null;
  let baseline;
  let latest;
  let through = boundary;
  for (const row of rows) {
    const from = timestamp(row?.start);
    const to = timestamp(row?.end);
    const scale = KWH_PER_UNIT.get(row?.unit_of_measurement ?? row?.unit ?? unit);
    if (!Number.isFinite(from) || !Number.isFinite(to) || from >= to ||
        to < boundary || to > stop || !Number.isFinite(row?.sum) || !scale) continue;
    const sum = row.sum * scale;
    if (!Number.isFinite(sum)) continue;
    if (to === boundary) baseline = sum;
    else if (to > through) {
      latest = sum;
      through = to;
    }
  }
  if (baseline === undefined || latest === undefined) return null;
  const value = latest - baseline;
  return Number.isFinite(value)
    ? {value, unit: 'kWh', complete: through === stop, through: new Date(through).toISOString()} : null;
}
