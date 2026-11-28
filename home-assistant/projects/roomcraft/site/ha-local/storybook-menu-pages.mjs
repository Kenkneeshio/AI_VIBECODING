export function nextMenuPage({current,size,total}, direction) {
  const stride = Math.max(35,size-60);
  return Math.max(0,Math.min(total-size,current+direction*stride));
}

/** Page navigation for Roomcraft dialogs whose native content exceeds the viewport. */
export function bindMenuPages(root) {
  const doc = root.ownerDocument;
  const host = doc.defaultView;
  const styled = doc.createElement('style');
  styled.textContent = `
    [data-roomcraft-paged="y"]{overflow-y:hidden!important;scroll-behavior:auto!important;padding-bottom:var(--page-padding)!important}
    [data-roomcraft-paged="x"]{overflow-x:hidden!important;scroll-behavior:auto!important}
    .roomcraft-page-nav{position:fixed;z-index:80;display:flex;gap:3px;align-items:center;justify-content:center;
      padding:3px;border-radius:10px;background:#f3f0e3;color:#243c37;border:1px solid #a5b7a7;box-shadow:0 2px 9px #1128264a;font:600 12px system-ui}
    .roomcraft-page-nav[hidden]{display:none}
    .roomcraft-page-nav button{font:inherit;min-height:34px!important;min-width:38px;padding:3px 7px!important;
      border:1px solid #9cb3a5;border-radius:7px;background:#fffef9;color:#243c37;cursor:pointer}
    .roomcraft-page-nav button:disabled{opacity:.42;cursor:default}
    .roomcraft-page-nav output{min-width:40px;text-align:center}
  `;
  root.append(styled);
  const active = new Map();
  let frame;
  function range(target,axis) {
    return axis === 'y' ? {current:target.scrollTop,size:target.clientHeight,total:target.scrollHeight} :
      {current:target.scrollLeft,size:target.clientWidth,total:target.scrollWidth};
  }
  function schedule() {
    if (frame === undefined) frame = host.requestAnimationFrame(update);
  }
  function remove(target) {
    const entry = active.get(target);
    entry?.nav.remove();
    target.removeEventListener('scroll',schedule);
    delete target.dataset.roomcraftPaged;
    target.style.removeProperty('--page-padding');
    active.delete(target);
  }
  function create(target, axis, dialog) {
    const nav = doc.createElement('nav');
    nav.className = 'roomcraft-page-nav';
    nav.setAttribute('aria-label',axis==='y' ? 'Menu content pages' : 'Side-by-side content pages');
    const output = doc.createElement('output');
    const buttons = [-1,1].map(direction => {
      const button = doc.createElement('button');
      button.type = 'button';
      button.textContent = direction < 0 ? '‹' : '›';
      button.setAttribute('aria-label',direction < 0 ? 'Previous page' : 'Next page');
      button.addEventListener('click',() => {
        const next = nextMenuPage(range(target,axis),direction);
        target.scrollTo(axis==='y' ? {top:next,behavior:'instant'} : {left:next,behavior:'instant'});
        schedule();
      });
      return button;
    });
    nav.append(buttons[0],output,buttons[1]);
    (dialog ?? root).append(nav);
    const padding = Number.parseFloat(host.getComputedStyle(target).paddingBottom) || 0;
    target.dataset.roomcraftPaged = axis;
    if (axis==='y') target.style.setProperty('--page-padding',padding+48+'px');
    target.addEventListener('scroll',schedule,{passive:true});
    const entry = {nav,buttons,output,axis,padding};
    active.set(target,entry);
    return entry;
  }
  function update() {
    frame = undefined;
    const seen = new Set();
    const panels = root.querySelectorAll('dialog[open], .main-menu:not([hidden])');
    for (const panel of panels) for (const target of [panel,...panel.querySelectorAll('*')]) {
      if (target.closest('.roomcraft-page-nav') || !target.clientHeight || !target.clientWidth) continue;
      const css = host.getComputedStyle(target);
      const old = active.get(target);
      const axis = old?.axis ?? (['auto','scroll'].includes(css.overflowY) && target.scrollHeight-target.clientHeight>4 ? 'y' :
        ['auto','scroll'].includes(css.overflowX) && target.scrollWidth-target.clientWidth>4 ? 'x' : null);
      if (!axis) continue;
      const {current,size,total} = range(target,axis);
      if (total-size <= 4+(old?.axis==='y' ? 48 : 0)) continue;
      seen.add(target);
      const {nav,buttons,output} = old ?? create(target,axis,panel.tagName==='DIALOG' ? panel : null);
      const bounds = target.getBoundingClientRect();
      const limit = panel.getBoundingClientRect();
      const bottom = Math.min(bounds.bottom,limit.bottom,host.innerHeight);
      const right = Math.min(bounds.right,limit.right,host.innerWidth);
      const visible = bottom-Math.max(bounds.top,limit.top) >= 45 &&
        right-Math.max(bounds.left,limit.left) >= 128;
      if (nav.hidden === visible) nav.hidden = !visible;
      if (!visible) continue;
      nav.style.left = Math.max(4,right-nav.offsetWidth-9)+'px';
      nav.style.top = Math.max(4,bottom-nav.offsetHeight-5)+'px';
      buttons[0].disabled = current <= 1;
      buttons[1].disabled = current >= total-size-2;
      const stride = Math.max(35,size-60);
      const pages = 1 + Math.ceil((total-size)/stride);
      const page = buttons[1].disabled ? pages : 1 + Math.floor(current/stride);
      const text = page + ' / ' + pages;
      if (output.textContent !== text) output.textContent = text;
    }
    for (const target of active.keys()) if (!seen.has(target)) remove(target);
  }
  const observer = new MutationObserver(schedule);
  return {
    connect() {
      observer.observe(root,{subtree:true,attributes:true,attributeFilter:['open','hidden'],childList:true});
      host.addEventListener('resize',schedule);
      schedule();
    },
    disconnect() {
      observer.disconnect();
      host.removeEventListener('resize',schedule);
      if (frame !== undefined) host.cancelAnimationFrame(frame);
      frame = undefined;
      for (const target of active.keys()) remove(target);
    },
  };
}
