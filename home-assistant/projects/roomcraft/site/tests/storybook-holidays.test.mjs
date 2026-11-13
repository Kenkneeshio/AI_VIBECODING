import test from 'node:test';
import assert from 'node:assert/strict';
import {HOLIDAY_IDS} from '../ha-local/storybook-holiday-settings.mjs';
import {HOLIDAY_CATALOG,holidayDateForYear,holidayLocalDate,resolveHolidays} from '../ha-local/storybook-holidays.mjs';

const activeIds=(date,settings)=>resolveHolidays(date,settings).active.map(item=>item.id);

test('the catalog and editor share 31 independent, documented holiday IDs',()=>{
  assert.deepEqual(HOLIDAY_CATALOG.map(item=>item.id),HOLIDAY_IDS);
  assert.equal(HOLIDAY_CATALOG.length,31);
  assert.equal(new Set(HOLIDAY_IDS).size,31);
  for(const entry of HOLIDAY_CATALOG){
    assert.ok(entry.name&&entry.group&&entry.theme&&entry.regionNote&&entry.sourceIds.length);
    assert.ok(entry.colors.every(color=>/^#[0-9a-f]{6}$/i.test(color)));
    assert.ok(Object.isFrozen(entry)&&Object.isFrozen(entry.rule)&&Object.isFrozen(entry.colors));
  }
});

test('verified lunar dates use regular months and retain Korean and Japanese calendar distinctions',()=>{
  const expected=[
    ['lunar-new-year',2026,'2026-02-17'],['lunar-new-year',2028,'2028-01-26'],
    ['lantern-festival',2027,'2027-02-20'],['dragon-boat',2028,'2028-05-28'],
    ['mid-autumn',2028,'2028-10-03'],['chuseok',2027,'2027-09-15'],['chuseok',2030,'2030-09-12'],
    ['setsubun',2029,'2029-02-02'],['setsubun',2030,'2030-02-03'],
    ['hanukkah',2027,'2027-12-24'],['hanukkah',2030,'2030-12-20'],
  ];
  for(const [id,year,date] of expected)assert.equal(holidayDateForYear(id,year),date);
  assert.equal(activeIds('2028-06-27').includes('dragon-boat'),false,'leap fifth month does not repeat Dragon Boat');
  assert.ok(activeIds('2026-09-25').includes('mid-autumn'));
  assert.ok(activeIds('2026-09-25').includes('chuseok'));
});

test('region-specific dates are explicit rather than silently extrapolated',()=>{
  for(const [id,year,date] of [
    ['diwali',2027,'2027-10-29'],['diwali',2028,'2028-10-17'],['diwali',2029,'2029-11-05'],
    ['holi',2029,'2029-03-01'],['holi',2030,'2030-03-20'],
    ['vesak',2027,'2027-05-20'],['eid-al-fitr',2026,'2026-03-21'],
    ['eid-al-adha',2027,'2027-05-17'],['loy-krathong',2026,'2026-11-24'],
  ])assert.equal(holidayDateForYear(id,year),date);
  assert.equal(holidayDateForYear('diwali',2027,'2027-10-28'),'2027-10-28','Singapore override stays independent');
  for(const id of ['vesak','eid-al-fitr','eid-al-adha','loy-krathong'])assert.equal(holidayDateForYear(id,2028),null);
  assert.equal(holidayDateForYear('lunar-new-year',2031),null);
  const result=resolveHolidays('2031-02-01');
  assert.ok(!result.active.some(item=>item.id==='lunar-new-year'));
  assert.match(result.unavailable.find(item=>item.id==='lunar-new-year').reason,/No verified 2031 date/);
});

test('Gregorian Easter and weekday holidays use reproducible published rules',()=>{
  for(const [year,date] of [[2000,'2000-04-23'],[2010,'2010-04-04'],[2024,'2024-03-31'],
    [2026,'2026-04-05'],[2027,'2027-03-28'],[2028,'2028-04-16'],[2029,'2029-04-01'],[2030,'2030-04-21']])
    assert.equal(holidayDateForYear('easter',year),date);
  assert.equal(holidayDateForYear('thanksgiving',2026),'2026-11-26');
  assert.equal(holidayDateForYear('thanksgiving',2027),'2027-11-25');
  assert.equal(holidayDateForYear('mothers-day',2026),'2026-05-10');
  assert.equal(holidayDateForYear('fathers-day',2026),'2026-06-21');
  assert.equal(holidayDateForYear('independence-day',2026),'2026-07-04','no substitute weekday shifting');
  assert.equal(holidayDateForYear('easter',2200),null);
  assert.equal(holidayDateForYear('easter',NaN),null);
  assert.equal(holidayDateForYear('not-a-holiday',2026),null);
});

test('the default art window is exactly seven local dates with inclusive boundaries',()=>{
  for(const date of ['2026-12-22','2026-12-23','2026-12-24','2026-12-25','2026-12-26','2026-12-27','2026-12-28'])
    assert.ok(activeIds(date).includes('christmas'),date);
  for(const date of ['2026-12-21','2026-12-29'])assert.ok(!activeIds(date).includes('christmas'),date);
  const row=resolveHolidays('2026-12-25').primary;
  assert.equal(row.id,'christmas');assert.equal(row.windowStart,'2026-12-22');assert.equal(row.windowEnd,'2026-12-28');
  assert.ok(activeIds('2026-12-29').includes('new-year'),'next year anchor activates before January 1');
  assert.ok(activeIds('2027-01-04').includes('new-year'));
  assert.ok(!activeIds('2027-01-05').includes('new-year'));
});

test('custom windows are bounded calendar-day windows, including even sizes',()=>{
  assert.ok(activeIds('2026-12-25',{windowDays:1}).includes('christmas'));
  assert.ok(!activeIds('2026-12-24',{windowDays:1}).includes('christmas'));
  const row=resolveHolidays('2026-12-25',{windowDays:4}).primary;
  assert.equal(row.windowStart,'2026-12-24');assert.equal(row.windowEnd,'2026-12-27');
  assert.equal(resolveHolidays('2026-12-25',{windowDays:4000}).windowDays,7);
});

test('manual on overrides the date, off removes only that holiday, and overlap priority is stable',()=>{
  const common='2026-09-25';
  assert.equal(resolveHolidays(common).primary.id,'mid-autumn');
  assert.equal(resolveHolidays(common,{modes:{'mid-autumn':'off'}}).primary.id,'chuseok');
  const forced=resolveHolidays(common,{modes:{christmas:'on','mid-autumn':'off'}});
  assert.equal(forced.primary.id,'christmas');assert.ok(forced.active.some(item=>item.id==='chuseok'));
  assert.equal(resolveHolidays('2026-03-03').primary.id,'lantern-festival');
  assert.equal(resolveHolidays('2026-03-04').primary.id,'holi');
  const future=resolveHolidays('2100-07-01',{modes:{'loy-krathong':'on'}});
  assert.equal(future.primary.id,'loy-krathong');assert.equal(future.primary.date,null);
  assert.ok(future.unavailable.some(item=>item.id==='loy-krathong'));
  assert.deepEqual(activeIds(common,{enabled:false,modes:{christmas:'on'}}),[]);
});

test('date overrides distinguish annual dates, exact years and leap days',()=>{
  const annual={dateOverrides:{'loy-krathong':'11-12'}};
  assert.ok(activeIds('2040-11-12',annual).includes('loy-krathong'));
  assert.equal(resolveHolidays('2040-11-12',annual).primary.dateSource,'override');
  const exact={dateOverrides:{'loy-krathong':'2040-11-12'}};
  assert.ok(activeIds('2040-11-12',exact).includes('loy-krathong'));
  assert.ok(!activeIds('2041-11-12',exact).includes('loy-krathong'));
  assert.equal(holidayDateForYear('holi',2028,'02-29'),'2028-02-29');
  assert.equal(holidayDateForYear('holi',2027,'02-29'),null);
  assert.equal(holidayDateForYear('holi',2026,'2026-02-30'),null);
});

test('clock and timezone are explicit, including local midnight and DST',()=>{
  const instant=Date.parse('2026-12-25T07:59:59Z');
  assert.equal(holidayLocalDate(instant,'America/Los_Angeles'),'2026-12-24');
  assert.equal(holidayLocalDate(instant+1000,'America/Los_Angeles'),'2026-12-25');
  assert.equal(holidayLocalDate(instant,'Asia/Tokyo'),'2026-12-25');
  for(const instant of ['2026-03-08T09:59:59Z','2026-03-08T10:00:00Z'])
    assert.equal(holidayLocalDate(Date.parse(instant),'America/Los_Angeles'),'2026-03-08');
  for(const [time,zone] of [[NaN,'UTC'],[Infinity,'UTC'],[instant,'No/Such_Zone'],[instant,undefined],[undefined,'UTC']])
    assert.equal(holidayLocalDate(time,zone),null);
});

test('invalid local dates fail closed and evaluation does not mutate inputs or consult the current clock',()=>{
  for(const date of [undefined,null,'','2026-2-17','2026-02-30','2027-02-29','2026-02-17T00:00:00Z','1899-12-31']){
    const result=resolveHolidays(date,{modes:{christmas:'on'}});
    assert.equal(result.validDate,false);assert.deepEqual(result.active,[]);assert.equal(result.primary,null);
  }
  const input=Object.freeze({modes:Object.freeze({christmas:'on'}),placement:Object.freeze({x:400,y:900,scale:1.2,rotation:25})});
  const now=Date.now,random=Math.random;
  try{
    Date.now=()=>{throw Error('implicit clock');};Math.random=()=>{throw Error('random schedule');};
    assert.deepEqual(resolveHolidays('2026-04-01',input),resolveHolidays('2026-04-01',input));
    assert.deepEqual(resolveHolidays('2026-04-01',input).settings.placement,input.placement);
  }finally{Date.now=now;Math.random=random;}
});

test('upcoming entries remain chronologically ordered and respect independent off modes',()=>{
  const result=resolveHolidays('2026-11-12',{modes:{'loy-krathong':'off'}});
  assert.equal(result.upcoming[0].id,'thanksgiving');
  assert.equal(result.upcoming[0].date,'2026-11-26');assert.equal(result.upcoming[0].daysUntil,14);
  assert.ok(!result.upcoming.some(item=>item.id==='loy-krathong'));
  for(let i=1;i<result.upcoming.length;i++)assert.ok(result.upcoming[i].daysUntil>=result.upcoming[i-1].daysUntil);
});
