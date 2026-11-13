# Holiday calendar: contract and date sources

The household can enable seasonal miniature art automatically and control each observance independently. The first catalog contains 31 curated holidays, with particular attention to East, South and Southeast Asia. It is a selection, not a claim to represent every country, religion or regional calendar.

Observable acceptance criteria: the same explicit local date and settings produce the same active list; each Off setting removes only that holiday; a new civil day updates the schedule in the Home Assistant time zone; unknown future dates never become guessed automatic celebrations; date overrides survive normal editor save/import/export. Holiday art does not call a physical-device service.

## Module and settings contract

`site/ha-local/storybook-holidays.mjs` exports:

| Export | Responsibility |
| --- | --- |
| `HOLIDAY_CATALOG` | Frozen metadata: stable ID, name, group, art theme, colors, quiet/event setting, regional note, source IDs, date rule and coverage. |
| `holidayLocalDate(epochMs, timeZone)` | Convert an explicit epoch to `YYYY-MM-DD` using an explicit zone. Invalid inputs return `null`; there is no implicit clock or browser-zone fallback. |
| `holidayDateForYear(id, year, dateOverride?)` | Resolve one anchor date or return `null`. Supported Gregorian input years are 1900–2199. Reviewed tables have narrower coverage. |
| `resolveHolidays(localDate, settings)` | Return `entries`, every `active` holiday, deterministic `primary`, `upcoming`, `unavailable`, and normalized `settings`. Invalid local dates return no active art, including for forced On. |

The shared settings normalizer and validator live in `public/engine/holiday-settings.js`, exposed to ES modules by `ha-local/storybook-holiday-settings.mjs`. `sceneSettings.holidays` owns the master switch, per-ID Auto/On/Off modes, window length, intensity, event animation, decorative lighting, optional placement, and date overrides. These settings describe artwork and do not represent the real state of a home light or other control.

The default **seven-day art window** includes three days before the anchor, the anchor itself, and three days after. Window sizes 1–31 are supported; an even window has its extra day after the anchor. This is a decorative duration, separate from a festival’s actual duration. In particular, Hanukkah lasts eight nights and its preset anchor is the civil date of the first evening; the calendar does not calculate sunset or candle-lighting times. Obon uses a clearly labeled August 15 midpoint preset.

Auto uses the date window. On forces that holiday active on any valid supplied date, even when its automatic date is unavailable. Off excludes that holiday independently. The master Off suppresses all active art. Quiet metadata for Obon and Vesak prevents celebratory particle events in those art recipes.

The resolver preserves all overlapping holidays. Its `primary` sorts forced On before Auto, then nearest anchor date, then stable catalog order. The scene runtime rotates through this ordered active list every 20 seconds using explicitly supplied elapsed time. Reduced motion holds the primary theme. Preview shows only the selected holiday temporarily. These presentation choices do not change dates or another holiday’s toggle.

An override is either an annual `MM-DD` or a single `YYYY-MM-DD`. Annual February 29 runs only in leap years. A one-year override never repeats in a different year. Invalid calendar dates, unknown IDs and malformed settings are rejected at authoring boundaries. Runtime normalization is defensive and makes fresh settings objects; it never mutates the project.

## Reviewed movable-date coverage

Dates below are anchor dates, not substitute public holidays or the whole festival period. Reviewed on 2026-11-12. Future official announcements and local religious determinations may revise dates; a verified update or household date override is the extension route.

| Holiday / selected calendar | 2026 | 2027 | 2028 | 2029 | 2030 |
| --- | --- | --- | --- | --- | --- |
| Lunar New Year, HKO | Feb 17 | Feb 6 | Jan 26 | Feb 13 | Feb 3 |
| Lantern Festival, HKO | Mar 3 | Feb 20 | Feb 9 | Feb 27 | Feb 17 |
| Dragon Boat, HKO regular fifth month | Jun 19 | Jun 9 | **May 28** | Jun 16 | Jun 5 |
| Mid-Autumn, HKO | Sep 25 | Sep 15 | Oct 3 | Sep 22 | Sep 12 |
| Chuseok, Korean calendar | Sep 25 | Sep 15 | Oct 3 | Sep 22 | Sep 12 |
| Setsubun, Japan | Feb 3 | Feb 3 | Feb 3 | **Feb 2** | Feb 3 |
| Holi, New Delhi | Mar 4 | Mar 22 | Mar 11 | Mar 1 | Mar 20 |
| Diwali / Lakshmi Puja, New Delhi | Nov 8 | **Oct 29** | Oct 17 | Nov 5 | Oct 26 |
| Hanukkah, first evening | Dec 4 | Dec 24 | Dec 12 | Dec 1 | Dec 20 |
| Vesak, Singapore | May 31 | May 20 | Unavailable | Unavailable | Unavailable |
| Eid al-Fitr / Hari Raya Puasa, Singapore | Mar 21 | Mar 10 | Unavailable | Unavailable | Unavailable |
| Eid al-Adha / Hari Raya Haji, Singapore | May 27 | May 17 | Unavailable | Unavailable | Unavailable |
| Loi Krathong, Thailand | Nov 24 | Unavailable | Unavailable | Unavailable | Unavailable |

The HKO text conversion table repeats the fifth lunar month in 2028 without a distinct text label. Dragon Boat uses the **first**, regular fifth month. It must not be scheduled again on June 27. This has an explicit regression test.

The shared Lunar New Year title includes Tết and Seollal for discoverability, while its date source is explicit. It does not imply that Chinese, Vietnamese and Korean cultural practices are interchangeable. Chuseok is a separate selectable preset verified against the Korean calendar. A date override handles a regional discrepancy.

Diwali uses the New Delhi calculation consistently across the table. Singapore’s published Deepavali date is October 28 in 2027, while the selected New Delhi Lakshmi Puja date is October 29. Both facts are shown in the regional note; the household can override the date. Eids use Singapore’s published dates and remain subject to local moon-sighting decisions. Vesak is not a universal Buddha’s Birthday date.

Unavailable means no reviewed date is shipped for that year. The resolver exposes a reason and coverage to the menus and leaves automatic art off. It does not fall back to last year’s month/day, infer a different religion’s calendar, or require a network request. Manual On and a valid date override remain available.

## Annual and calculated presets

| Rule | Catalog entries |
| --- | --- |
| Fixed Gregorian dates | New Year / Japanese New Year Jan 1; Valentine’s Day Feb 14; Hinamatsuri Mar 3; St Patrick’s Day Mar 17; international Nowruz observance Mar 21; Songkran Apr 13; Earth Day Apr 22; Japanese Children’s Day May 5; US Independence Day Jul 4; Tanabata Jul 7; Obon Aug 15; Halloween Oct 31; Christmas Dec 25. |
| Gregorian Western computus | Easter Sunday, using the integer algorithm documented by the US Naval Observatory. Orthodox Easter is not inferred. |
| US weekday rules | Mother’s Day: second Sunday in May. Father’s Day: third Sunday in June. Thanksgiving: fourth Thursday in November. |

The annual rules run for 1900–2199 as product presets; this does not assert that the modern observance existed in every historical year. Tanabata can be observed in August, Obon in July or on a lunar date, and Nowruz at the local equinox. Their metadata and overrides expose these distinctions. US public-holiday substitutes do not shift July 4, Christmas or New Year art to a different weekday.

## Source register

Primary sources were read directly. Original calendar publishers are identified separately from government announcements. The application ships factual date values and original art; it does not copy source photography or prose.

- `hko`: [Hong Kong Observatory conversion table index](https://www.hko.gov.hk/en/gts/time/conversion.htm), with annual machine-readable tables [2026](https://www.hko.gov.hk/en/gts/time/calendar/text/files/T2026e.txt), [2027](https://www.hko.gov.hk/en/gts/time/calendar/text/files/T2027e.txt), [2028](https://www.hko.gov.hk/en/gts/time/calendar/text/files/T2028e.txt), [2029](https://www.hko.gov.hk/en/gts/time/calendar/text/files/T2029e.txt), [2030](https://www.hko.gov.hk/en/gts/time/calendar/text/files/T2030e.txt). The [Hong Kong Tourism Board’s Dragon Boat description](https://www.discoverhongkong.com/eng/culture/what-to-see-and-do-during-the-dragon-boat-festival.html) and [Mid-Autumn description](https://www.discoverhongkong.com/eng/events/mid-autumn-festival.html) identify the corresponding lunar days. HKO warns of possible one-day uncertainty for some much later astronomical boundaries; no dates beyond the reviewed table are inferred here.
- `kasi`: Korea Astronomy and Space Science Institute Gregorian/lunar conversion rows: [2027 September](https://astro.kasi.re.kr/life/pageView/5?search_check=G&search_month=09&search_year=2027), [2028 October](https://astro.kasi.re.kr/life/pageView/5?search_check=G&search_month=10&search_year=2028), [2029 September](https://astro.kasi.re.kr/life/pageView/5?search_check=G&search_month=09&search_year=2029), [2030 September](https://astro.kasi.re.kr/life/pageView/5?search_check=G&search_month=09&search_year=2030). Select lunar August 15, not the adjacent leave days.
- `kto`: [Korea Tourism Organization’s 2026 Chuseok guide](https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=219&vcontsId=1593350) and [public holidays](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140038), including Seollal.
- `naoj`: [National Astronomical Observatory of Japan’s 2027 solar terms](https://eco.mtk.nao.ac.jp/koyomi/yoko/2027/rekiyou272.html) and [long-term calculation service](https://eco.mtk.nao.ac.jp/cgi-bin/koyomi/cande/phenomena_sy.cgi). Reviewed each year 2026–2030 using `year=YYYY&lst=9&phenom=51&body=0&coord=1&cal=0&jg=1&dtm=0&figure=0`. `jg=1` selects Gregorian dates; `lst=9` selects Japan Standard Time. Do not accidentally request Julian dates with `jg=0`.
- `drik-holi`, `drik-diwali`: Original almanac publisher Drik Panchang’s [Holi dates](https://www.drikpanchang.com/hindu-festivals/holi/holi.html?year=2027), [Diwali dates](https://www.drikpanchang.com/hindu-festivals/diwali/diwali.html), and New Delhi Hindu calendars for [2028](https://www.drikpanchang.com/calendars/hindu/hinducalendar.html?year=2028), [2029](https://www.drikpanchang.com/calendars/hindu/hinducalendar.html?year=2029), [2030](https://www.drikpanchang.com/calendars/hindu/hinducalendar.html?year=2030). These are the publisher’s location-specific calculations, not a claim that future government holiday schedules have been gazetted.
- `mom`: [Singapore Ministry of Manpower’s 2026–2027 public-holiday dates](https://www.mom.gov.sg/employment-practices/public-holidays) and [2026 announcement](https://www.mom.gov.sg/newsroom/press-releases/2025/0616-public-holidays-for-2026). Use the festival itself, not an observed Monday. Religious dates can be subject to confirmation.
- `tat-krathong`: [Thailand government / Tourism Authority of Thailand, Loi Krathong 2026](https://thailand.go.th/public/event-detail/loi-krathong-2026-lights-up-thailands-rivers-and-historic-cities), identifying November 24 as the full-moon date.
- `tat-songkran`: [Tourism Authority of Thailand’s April 13, 2026 Songkran program](https://thai.tourismthailand.org/Articles/maha-songkran-world-water-festival-2026); [UNESCO’s Songkran description](https://ich.unesco.org/en/RL/songkran-in-thailand-traditional-thai-new-year-festival-01719) documents the wider tradition.
- `chabad`: [Chabad’s Hanukkah dates for 2026–2030](https://www.chabad.org/holidays/chanukah/article_cdo/aid/671899/jewish/When-is-Chanukah-in-2009-2010-2011-2012-2013-2014-and-2015.htm), including the first evening and eight-night duration.
- `jnto-holidays`, `jnto-march`, `jnto-tanabata`, `jnto-obon`: Japan National Tourism Organization’s [holiday dates](https://www.japan.travel/en/plan/business-hours-and-holidays/), [March guide](https://www.japan.travel/en/guide/march/), [Tanabata regional dates](https://www.japan.travel/en/spot/423/), and [festival guide](https://www.japan.travel/en/sg/story/japanfestival-guidebook/).
- `un-nowruz`, `un-earth`: United Nations [International Nowruz Day](https://www.un.org/en/observances/international-nowruz-day) and [international observance calendar](https://www.un.org/observances/list-days-weeks).
- `usno-easter`: [US Naval Observatory’s Gregorian Easter algorithm](https://aa.usno.navy.mil/faq/easter), attributed there to J.-M. Oudin, with integer truncation specified. This module implements the mathematical rule directly; it adds no runtime service dependency.
- `opm`, `us-mothers`, `us-fathers`: US Office of Personnel Management [holiday rules](https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/holidays-work-schedules-and-pay/?lv=true), [36 USC 117](https://uscode.house.gov/us/usc/t36/s117/) and [36 USC 109](https://uscode.house.gov/us/usc/t36/s109/).
- `fixed-cultural`: Authored Gregorian cultural presets for Valentine’s Day, St Patrick’s Day and Halloween; their selection does not depend on a live calendar provider.

## Repeatable updates and evidence

1. Add or change a holiday ID in the shared settings catalog, resolver metadata and the art recipe together. Keep existing IDs stable.
2. Verify a new movable date against the named regional source. Record the region and whether it is an official announcement or a publisher’s calculation. Never fill missing years by repeating a previous date.
3. Update only the reviewed date table and coverage. Add an independently stated expected-date regression, including leap-month and year-boundary cases where relevant.
4. Run `node --test tests/storybook-holidays.test.mjs` from `site/`, plus the settings, renderer and browser tests affected by the change. Then run the complete release gate in [release-standard.md](release-standard.md).
5. Record source revision, exact artifacts, live readback and rollback in the release record. Unit-test success alone does not prove browser or tablet deployment.

The focused calendar tests cover ID parity, reviewed dates, the 2028 leap fifth month, 2029 Setsubun, weekday/computus rules, exact window boundaries, New Year rollover, independent modes, unknown future dates, regional overrides, leap days, DST/local midnight, invalid inputs, immutable inputs and deterministic ordering. Browser/HA/tablet results belong to the release owner’s evidence.
