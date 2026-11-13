import {normalizeHolidaySettings, validHolidayDate} from './storybook-holiday-settings.mjs';

const DAY_MS = 86400000;
const FIRST_YEAR = 1900;
const LAST_YEAR = 2199;
const fixed = date => ({kind:'fixed', date});
const nth = (month, weekday, week) => ({kind:'weekday', month, weekday, week});
const table = dates => ({kind:'table', dates});
const years = values => Object.fromEntries(values.map((date,index) => [2026 + index,date]));

// Reviewed source dates, not runtime lunar-calendar guesses. See holiday-calendar-sources.md.
const lunarNewYear = years(['02-17','02-06','01-26','02-13','02-03']);
const lantern = years(['03-03','02-20','02-09','02-27','02-17']);
// 2028 has a repeated fifth lunar month: use the regular month, NOT leap-month June 27.
const dragonBoat = years(['06-19','06-09','05-28','06-16','06-05']);
const midAutumn = years(['09-25','09-15','10-03','09-22','09-12']);
const chuseok = years(['09-25','09-15','10-03','09-22','09-12']);
const setsubun = years(['02-03','02-03','02-03','02-02','02-03']);
const holi = years(['03-04','03-22','03-11','03-01','03-20']);
const diwali = years(['11-08','10-29','10-17','11-05','10-26']);
const hanukkah = years(['12-04','12-24','12-12','12-01','12-20']);

const palette = {
  fireworks:['#f5cf72','#8eb9d3','#f3e9d8'], pine:['#51836b','#edb89e','#d7c27d'],
  lanterns:['#c94b44','#f0bc5a','#fff0ce'], blossoms:['#e9a6ba','#a4c0a0','#fff2db'],
  kites:['#6aa6ba','#df8c81','#e9c875'], flowers:['#df91b8','#dab45b','#82bca4'],
  water:['#77c6d8','#d7eee8','#efbd81'], boats:['#65a89b','#e3b66a','#b86d58'],
  harvest:['#d7a552','#a4ae6b','#e9d8ae'], lights:['#d8aa58','#a48bbb','#fff0bb'],
  stars:['#71b0b0','#dbbb69','#e8efe1'], hearts:['#da829b','#f0bac2','#f8dfce'],
  clover:['#6da471','#e2c56d','#dfe9bf'], pumpkins:['#d99243','#8670a0','#d5bb7e'],
  gifts:['#629477','#cc7973','#eee2be'], beans:['#9b965e','#bc7b68','#efdab4'],
};

function entry(id,name,group,theme,rule,regionNote,sourceIds,{quiet=false}={}) {
  const supported = rule.kind === 'table' ? Object.keys(rule.dates).map(Number) : [FIRST_YEAR,LAST_YEAR];
  const from = Math.min(...supported), to = Math.max(...supported);
  return {id,name,group,theme,colors:[...palette[theme]],event:quiet ? 'quiet' : 'celebration',quiet,rule,
    regionNote,sourceIds,coverage:{from,to,label:rule.kind === 'table' ? `Verified dates ${from}${from===to?'':`–${to}`}` :
      rule.kind === 'fixed' ? 'Annual Gregorian date' : 'Calculated Gregorian date'}};
}

/** Curated observances, each independently selectable; not a universal religious calendar. */
const catalog = [
  entry('new-year','New Year’s Day','Global','fireworks',fixed('01-01'),
    'Gregorian New Year; the decorative window can cross the year boundary.',['opm']),
  entry('japanese-new-year','Japanese New Year · Shōgatsu','East Asia','pine',fixed('01-01'),
    'January 1 anchor for Japanese New Year customs; separate from the global New Year option.',['jnto-holidays']),
  entry('lunar-new-year','Lunar New Year · Tết · Seollal','East Asia','lanterns',table(lunarNewYear),
    'Shared first-day preset from the Hong Kong lunar calendar. Vietnamese and Korean traditions remain distinct; override for a regional difference.',['hko','kto']),
  entry('lantern-festival','Lantern Festival','East Asia','lanterns',table(lantern),
    'Fifteenth day of the first Chinese lunar month; this is not Thailand’s Loi Krathong.',['hko']),
  entry('setsubun','Setsubun','East Asia','beans',table(setsubun),
    'Day before Risshun in Japan Standard Time; not always February 3.',['naoj']),
  entry('hinamatsuri','Hinamatsuri','East Asia','blossoms',fixed('03-03'),
    'March 3 Japanese festival preset; some communities use a later local date.',['jnto-march']),
  entry('holi','Holi','South & Southeast Asia','flowers',table(holi),
    'New Delhi Rangawali Holi date, after Holika Dahan. Regional observance can differ.',['drik-holi']),
  entry('nowruz','Nowruz · International observance','West Asia & global','stars',fixed('03-21'),
    'UN March 21 observance. The actual equinox/New Year moment varies by location and tradition.',['un-nowruz']),
  entry('easter','Easter · Western calendar','Global','flowers',{kind:'easter'},
    'Gregorian Western Easter Sunday; does not calculate Orthodox Easter.',['usno-easter']),
  entry('songkran','Songkran','South & Southeast Asia','water',fixed('04-13'),
    'April 13 anchor for the Thai New Year festival; local celebrations span different days.',['tat-songkran']),
  entry('childrens-day','Children’s Day · Kodomo no Hi','East Asia','kites',fixed('05-05'),
    'Japanese May 5 preset, with carp streamers; not every country’s Children’s Day.',['jnto-holidays']),
  entry('vesak','Vesak','South & Southeast Asia','lights',table({2026:'05-31',2027:'05-20'}),
    'Singapore published Vesak dates. Buddha’s Birthday and Vesak dates vary across Buddhist traditions.',['mom'],{quiet:true}),
  entry('dragon-boat','Dragon Boat Festival','East Asia','boats',table(dragonBoat),
    'Fifth day of the regular fifth Chinese lunar month; a leap fifth month is excluded.',['hko']),
  entry('tanabata','Tanabata','East Asia','blossoms',fixed('07-07'),
    'July 7 preset. Sendai and some other communities celebrate in August; use a date override.',['jnto-tanabata']),
  entry('obon','Obon','East Asia','lights',fixed('08-15'),
    'August 15 midpoint preset for the common mid-August observance; July and lunar dates also occur.',['jnto-obon'],{quiet:true}),
  entry('mid-autumn','Mid-Autumn Festival','East Asia','harvest',table(midAutumn),
    'Fifteenth day of the eighth Chinese lunar month. Distinct from the independently selectable Chuseok preset.',['hko']),
  entry('chuseok','Chuseok','East Asia','harvest',table(chuseok),
    'Main Korean lunar August 15 date verified with KASI; the public-holiday period includes adjacent days.',['kasi','kto']),
  entry('loy-krathong','Loi Krathong','South & Southeast Asia','boats',table({2026:'11-24'}),
    'Thailand’s published 2026 full-moon festival date; local events vary. Later years require a verified update or override.',['tat-krathong']),
  entry('diwali','Diwali · Deepavali','South & Southeast Asia','lights',table(diwali),
    'New Delhi Lakshmi Puja date. Tamil Deepavali and other regional calendars can differ; for example Singapore uses 2027-10-28.',['drik-diwali','mom']),
  entry('eid-al-fitr','Eid al-Fitr','West Asia & global','stars',table({2026:'03-21',2027:'03-10'}),
    'Singapore published Hari Raya Puasa date; moon-sighting decisions and local observance may differ.',['mom']),
  entry('eid-al-adha','Eid al-Adha','West Asia & global','stars',table({2026:'05-27',2027:'05-17'}),
    'Singapore published Hari Raya Haji date; moon-sighting decisions and local observance may differ.',['mom']),
  entry('hanukkah','Hanukkah','West Asia & global','lights',table(hanukkah),
    'Anchor is the civil date of the first evening. The real festival lasts eight nights; the chosen art window is separate.',['chabad']),
  entry('valentines-day','Valentine’s Day','Global','hearts',fixed('02-14'),
    'February 14 cultural preset.',['fixed-cultural']),
  entry('st-patricks-day','St Patrick’s Day','Global','clover',fixed('03-17'),
    'March 17 cultural preset.',['fixed-cultural']),
  entry('earth-day','Earth Day','Global','flowers',fixed('04-22'),
    'April 22 International Mother Earth Day.',['un-earth']),
  entry('mothers-day','Mother’s Day · US','United States','flowers',nth(5,0,2),
    'Second Sunday in May in the United States; other countries use different dates.',['us-mothers']),
  entry('fathers-day','Father’s Day · US','United States','flowers',nth(6,0,3),
    'Third Sunday in June in the United States; other countries use different dates.',['us-fathers']),
  entry('independence-day','Independence Day · US','United States','fireworks',fixed('07-04'),
    'July 4 itself, without shifting the art to a substitute weekday holiday.',['opm']),
  entry('halloween','Halloween','Global','pumpkins',fixed('10-31'),
    'October 31 cultural preset.',['fixed-cultural']),
  entry('thanksgiving','Thanksgiving · US','United States','harvest',nth(11,4,4),
    'Fourth Thursday in November in the United States; not Canadian Thanksgiving.',['opm']),
  entry('christmas','Christmas · December 25','Global','gifts',fixed('12-25'),
    'December 25 Gregorian preset; churches using other calendars may observe a different civil date.',['opm']),
];

function freeze(value) {
  if(value && typeof value === 'object') {Object.values(value).forEach(freeze);Object.freeze(value);}
  return value;
}
export const HOLIDAY_CATALOG = freeze(catalog);
const byId = new Map(HOLIDAY_CATALOG.map(item=>[item.id,item]));
const order = new Map(HOLIDAY_CATALOG.map((item,index)=>[item.id,index]));

function parseDate(value) {
  if(typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value) || !validHolidayDate(value))return null;
  const [year,month,day]=value.split('-').map(Number);
  return {year,month,day,dayNumber:Date.UTC(year,month-1,day)/DAY_MS};
}
const dateString = (year,month,day) => `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
const dayString = dayNumber => new Date(dayNumber*DAY_MS).toISOString().slice(0,10);

/** Explicit epoch + zone only; never consults the host clock or an implicit browser zone. */
export function holidayLocalDate(epochMs,timeZone) {
  if(!Number.isFinite(epochMs) || typeof timeZone !== 'string' || !timeZone.trim())return null;
  try {
    const parts=new Intl.DateTimeFormat('en-US-u-ca-gregory-nu-latn',{
      timeZone,year:'numeric',month:'2-digit',day:'2-digit',
    }).formatToParts(new Date(epochMs));
    const get=type=>parts.find(part=>part.type===type)?.value;
    const result=`${get('year')}-${get('month')}-${get('day')}`;
    return parseDate(result) ? result : null;
  }catch{return null;}
}

// US Naval Observatory / Oudin Gregorian computus; integer arithmetic is explicit.
function easter(year) {
  const div=(a,b)=>Math.trunc(a/b),century=div(year,100),golden=year-19*div(year,19);
  const correction=div(century-17,25);
  let moon=century-div(century,4)-div(century-correction,3)+19*golden+15;
  moon-=30*div(moon,30);
  moon-=div(moon,28)*(1-div(moon,28)*div(29,moon+1)*div(21-golden,11));
  let weekday=year+div(year,4)+moon+2-century+div(century,4);
  weekday-=7*div(weekday,7);
  const interval=moon-weekday,month=3+div(interval+40,44),day=interval+28-31*div(month,4);
  return dateString(year,month,day);
}

/** Returns a date or null, including outside reviewed coverage. Overrides never become guessed dates. */
export function holidayDateForYear(id,year,dateOverride) {
  if(!Number.isInteger(year) || year<FIRST_YEAR || year>LAST_YEAR || !byId.has(id))return null;
  if(dateOverride !== undefined) {
    if(!validHolidayDate(dateOverride))return null;
    const date=dateOverride.length===5 ? `${year}-${dateOverride}` : dateOverride;
    return parseDate(date)?.year===year ? date : null;
  }
  const {rule}=byId.get(id);
  if(rule.kind==='easter')return easter(year);
  if(rule.kind==='weekday') {
    const first=new Date(Date.UTC(year,rule.month-1,1)).getUTCDay();
    return dateString(year,rule.month,1+(rule.weekday-first+7)%7+7*(rule.week-1));
  }
  const monthDay=rule.kind==='fixed' ? rule.date : rule.dates[year];
  const date=monthDay ? `${year}-${monthDay}` : null;
  return parseDate(date) ? date : null;
}

/** Pure daily schedule. Seven days means three before, the anchor day, and three after. */
export function resolveHolidays(localDate,inputSettings) {
  const settings=normalizeHolidaySettings(inputSettings),today=parseDate(localDate);
  const result={localDate:today ? localDate : null,validDate:Boolean(today),settings,windowDays:settings.windowDays,
    entries:[],active:[],primary:null,upcoming:[],unavailable:[]};
  if(!today)return {...result,error:'A valid local Gregorian date is required.'};
  const before=Math.floor((settings.windowDays-1)/2),after=settings.windowDays-1-before;
  for(const holiday of HOLIDAY_CATALOG) {
    const mode=settings.modes[holiday.id],override=settings.dateOverrides[holiday.id];
    const candidates=[today.year-1,today.year,today.year+1].map(year=>holidayDateForYear(holiday.id,year,override))
      .filter(Boolean).map(date=>({date,offsetDays:today.dayNumber-parseDate(date).dayNumber}));
    candidates.sort((a,b)=>Math.abs(a.offsetDays)-Math.abs(b.offsetDays)||a.date.localeCompare(b.date));
    const current=holidayDateForYear(holiday.id,today.year,override);
    const nearest=candidates[0];
    const scheduled=candidates.find(date=>date.offsetDays>=-before&&date.offsetDays<=after);
    const selected=scheduled??nearest;
    const status=mode==='off' ? 'off' : mode==='on' ? 'active' : scheduled ? 'active' : current ? 'inactive' : 'unavailable';
    const row={...holiday,mode,status,date:selected?.date??null,dateSource:override ? 'override' : 'calendar',
      offsetDays:selected?.offsetDays??null,windowStart:selected ? dayString(parseDate(selected.date).dayNumber-before) : null,
      windowEnd:selected ? dayString(parseDate(selected.date).dayNumber+after) : null};
    if(!current) {
      row.reason=override ? 'No override date in this year.' : `No verified ${today.year} date. Choose a date override or turn this holiday on manually.`;
      if(mode!=='off')result.unavailable.push(row);
    }
    result.entries.push(row);
    if(settings.enabled && status==='active')result.active.push(row);
    const next=candidates.filter(candidate=>candidate.offsetDays<0).sort((a,b)=>b.offsetDays-a.offsetDays)[0];
    if(mode!=='off'&&next)result.upcoming.push({...holiday,mode,date:next.date,daysUntil:-next.offsetDays});
  }
  result.active.sort((a,b)=>(a.mode==='on'?0:1)-(b.mode==='on'?0:1)||
    Math.abs(a.offsetDays??Infinity)-Math.abs(b.offsetDays??Infinity)||order.get(a.id)-order.get(b.id));
  result.upcoming.sort((a,b)=>a.daysUntil-b.daysUntil||order.get(a.id)-order.get(b.id));
  result.primary=result.active[0]??null;
  return result;
}
