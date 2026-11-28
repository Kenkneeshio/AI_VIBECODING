const NS = 'http://www.w3.org/2000/svg';
const tones = ['#7351a7','#087e83','#ba6520','#368ab4','#b44763','#4f8050','#765744','#7b8d96'];
const number = new Intl.NumberFormat(undefined,{maximumFractionDigits:1});

function picture(doc, name, attrs = {}) {
  const node = doc.createElementNS(NS,name);
  for (const [key,value] of Object.entries(attrs)) node.setAttribute(key,String(value));
  return node;
}

export function measuredBreakdown(frame, period) {
  const valueOf = reading => period === 'live' ? reading?.watts : reading?.value;
  const total = valueOf(frame.center.metrics[period]);
  const meters = frame.groups.filter(row => row.kind === 'circuit');
  const branches = meters.flatMap(row => {
    const value = valueOf(row.metrics[period]);
    return Number.isFinite(value) && value > 0 ? [{id:row.id,label:row.label,value}] : [];
  }).sort((a,b) => b.value-a.value || a.id.localeCompare(b.id));
  const measured = branches.reduce((sum,row) => sum + row.value,0);
  const outlets = frame.groups.filter(row => row.kind === 'outlet').flatMap(row => {
    const value = valueOf(row.metrics[period]);
    return Number.isFinite(value) && value > 0 ? [{id:row.id,label:row.label,value}] : [];
  }).sort((a,b) => b.value-a.value || a.id.localeCompare(b.id));
  const reconciled = Number.isFinite(total) && total > 0 && measured <= total;
  const leading = branches.slice(0,7);
  const others = branches.slice(7).reduce((sum,row) => sum+row.value,0);
  if (others > 0) leading.push({label:'Other circuits',value:others});
  if (reconciled && total-measured > 0.05) leading.push({label:'Unattributed',value:total-measured,muted:true});
  return {total,measured,branches:leading,reconciled,outlets};
}

export const FLOW_MARKUP = `
<section class="energy-visuals" aria-label="Power and energy breakdown">
  <div class="energy-ribbons"><h4>Power flow</h4><div class="flow-diagram"></div><p class="flow-note"></p><div class="flow-plugs"></div></div>
  <div class="energy-share"><h4>Energy share</h4><div class="share-wheel"></div><div class="share-legend"></div></div>
</section>`;

export const FLOW_STYLE = `
.energy-visuals{display:grid;grid-template-columns:minmax(0,1.8fr) minmax(0,1fr);gap:12px;margin-bottom:14px}
.energy-visuals>div{min-width:0;padding:14px;border-radius:16px;background:#203536;color:#f5f8ee;border:1px solid #506e65}
.energy-visuals h4{margin:0 0 8px;font-size:17px}
.energy-visuals svg{width:100%;display:block}
.energy-visuals p{font-size:.84rem;color:#d8e7d9;margin:6px 0 0}
.flow-diagram{display:grid;grid-template-columns:80px minmax(50px,1fr) minmax(96px,1fr);align-items:center}
.flow-diagram[data-balanced=false]{grid-template-columns:minmax(68px,.5fr) minmax(0,1fr)}
.flow-total{font-size:1.05rem;font-weight:750;overflow-wrap:anywhere}
.flow-circuits{display:grid;gap:3px}
.energy-visuals button,.flow-circuits div,.share-legend div{font:inherit;font-size:.83rem;min-width:0;min-height:32px;
  border:1px solid #ffffff24;border-radius:8px;background:#ffffff0b;color:inherit;text-align:left;padding:5px 6px;
  display:flex;gap:5px;align-items:center;justify-content:space-between;overflow-wrap:anywhere}
.energy-visuals button{cursor:pointer}
.energy-visuals button:hover,.energy-visuals button:focus-visible{background:#ffffff26}
.energy-visuals button strong,.flow-circuits strong,.share-legend strong{white-space:nowrap}
.share-wheel{width:min(165px,75%);margin:3px auto 8px;aspect-ratio:1}
.share-wheel svg{overflow:visible}
.share-legend{display:grid;gap:3px}
.flow-plugs{display:flex;gap:4px;flex-wrap:wrap;margin-top:6px}
.flow-plugs>span{flex-basis:100%;font-size:.82rem;color:#d8e7d9}
@media(max-width:730px){.energy-visuals{grid-template-columns:1fr}.flow-diagram{grid-template-columns:62px minmax(32px,1fr) minmax(110px,1.6fr)}}
`;

export function bindEnergyFlow(root, select) {
  const doc = root.ownerDocument;
  const flow = root.querySelector('.flow-diagram'), note = root.querySelector('.flow-note');
  const wheel = root.querySelector('.share-wheel'), legend = root.querySelector('.share-legend');
  const plugs = root.querySelector('.flow-plugs');
  const ribbonTitle = root.querySelector('.energy-ribbons h4');
  const shareTitle = root.querySelector('.energy-share h4');
  let previous;
  function label(row, unit, color) {
    const node = doc.createElement(row.id ? 'button' : 'div');
    if (row.id) {
      node.type = 'button';
      node.onclick = () => select(row.id);
    }
    node.style.borderInlineStart = '4px solid ' + color;
    const name = doc.createElement('span'), value = doc.createElement('strong');
    name.textContent = row.label;
    value.textContent = number.format(row.value) + ' ' + unit;
    node.append(name,value);
    return node;
  }
  return (frame, period) => {
    const actual = measuredBreakdown(frame,period);
    const share = measuredBreakdown(frame,period === 'live' ? 'today' : period);
    const signature = JSON.stringify([period,actual,share]);
    if (signature === previous) return;
    previous = signature;
    const unit = period === 'live' ? 'W' : 'kWh';
    ribbonTitle.textContent = period === 'live' ? 'Live power flow' : 'Energy flow';
    shareTitle.textContent = period === 'live' ? "Today's energy share" : 'Energy share';
    const source = doc.createElement('div');
    source.className = 'flow-total';
    source.textContent = Number.isFinite(actual.total) ? number.format(actual.total) + ' ' + unit : 'Meter unavailable';
    const height = Math.max(55,actual.branches.length*34);
    const svg = picture(doc,'svg',{viewBox:'0 0 260 '+height,preserveAspectRatio:'none','aria-hidden':'true'});
    svg.style.height = height + 'px';
    const circuits = doc.createElement('div');
    circuits.className = 'flow-circuits';
    const sum = actual.branches.reduce((value,row) => value+row.value,0);
    let from = height/2-25;
    actual.branches.forEach((row,index) => {
      const shade = row.muted ? '#7b8d96' : tones[index % tones.length];
      const width = sum ? row.value/sum*50 : 0;
      const y = (index+.5)*height/actual.branches.length;
      const to = Math.min(30,width);
      const d = `M0,${from} C120,${from} 145,${y-to/2} 260,${y-to/2}
        L260,${y+to/2} C145,${y+to/2} 120,${from+width} 0,${from+width} Z`;
      if (actual.reconciled) svg.append(picture(doc,'path',{d,fill:shade,opacity:.83}));
      from += width;
      circuits.append(label(row,unit,shade));
    });
    flow.dataset.balanced = String(actual.reconciled);
    flow.replaceChildren(source,...(actual.reconciled ? [svg] : []),circuits);
    note.textContent = actual.reconciled ? 'Whole-home meter → reported circuits' :
      'Circuit readings are shown individually because they do not reconcile to the whole-home meter.';
    const heading = doc.createElement('span');
    heading.textContent = 'Smart plugs · shown separately';
    plugs.replaceChildren(...(actual.outlets.length ? [heading,...actual.outlets.map(row => label(row,unit,'#81bcaa'))] : []));
    const donut = picture(doc,'svg',{viewBox:'0 0 150 150',role:'img','aria-label':'Recorded energy share by circuit'});
    donut.append(picture(doc,'circle',{cx:75,cy:75,r:56,fill:'none',stroke:'#45615a','stroke-width':16}));
    const shareSum = share.branches.reduce((value,row) => value+row.value,0);
    let offset = 0;
    legend.replaceChildren();
    share.branches.forEach((row,index) => {
      const shade = row.muted ? '#7b8d96' : tones[index % tones.length];
      const percent = row.value/shareSum*100;
      donut.append(picture(doc,'circle',{cx:75,cy:75,r:56,pathLength:100,fill:'none',stroke:shade,
        'stroke-width':16,'stroke-dasharray':percent+' '+(100-percent),'stroke-dashoffset':-offset,
        transform:'rotate(-90 75 75)'}));
      offset += percent;
      const entry = label(row,'kWh',shade);
      entry.querySelector('strong').textContent += ' · ' + number.format(percent) + '%';
      legend.append(entry);
    });
    const center = picture(doc,'text',{x:75,y:78,fill:'#fff','text-anchor':'middle','font-size':15,'font-weight':700});
    center.textContent = shareSum ? number.format(shareSum) + ' kWh' : 'No data';
    donut.append(center);
    wheel.replaceChildren(donut);
    const basis = share.reconciled ? 'Whole-home energy' : 'Reported circuit energy';
    donut.setAttribute('aria-label',basis);
    const caption = doc.createElement('p');
    caption.textContent = basis;
    if (shareSum) legend.prepend(caption);
  };
}
