(() => {
  'use strict';
  const toggle = document.getElementById('inspectorToggle');
  const close = document.getElementById('inspectorClose');
  const scrim = document.getElementById('inspectorScrim');
  const panel = document.getElementById('propertiesInspector');
  const content = document.getElementById('inspectorContent');
  if (!toggle || !close || !scrim || !panel || !content) return;

  const narrow = window.matchMedia('(max-width:900px)');
  let open = false;
  let hadSelection = !!content.querySelector('.selection-title');
  function setOpen(next) {
    open = next && narrow.matches;
    panel.classList.toggle('is-open', open);
    scrim.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close inspector' : 'Open inspector');
    toggle.title = open ? 'Close inspector' : 'Open inspector';
  }

  toggle.addEventListener('click', () => setOpen(!open));
  close.addEventListener('click', () => { setOpen(false); toggle.focus(); });
  scrim.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.focus(); }
  });
  narrow.addEventListener('change', () => setOpen(false));
  new MutationObserver(() => {
    const selected = !!content.querySelector('.selection-title');
    if (selected && !hadSelection && narrow.matches) setOpen(true);
    hadSelection = selected;
  }).observe(content, { childList: true, subtree: true });
})();
