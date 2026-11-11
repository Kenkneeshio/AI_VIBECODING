import '../public/inventory.js';
import '../public/model-library.js';

export function bindLiveModelLibrary(card) {
  const button = card.shadowRoot.querySelector('[data-open-models]');
  let library;
  button?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    library ??= window.RoomcraftModels.mount(card.shadowRoot, () => ({
      items: card.model?.layout.items || [],
      entities: Object.entries(card.session?.states || {}).map(([entity_id, state]) => ({
        entity_id,
        name: state.attributes?.friendly_name || entity_id,
        area: card.session?.areas?.[card.session?.entities?.[entity_id]?.area_id]?.name || '',
      })).sort((a, b) => a.name.localeCompare(b.name) || a.entity_id.localeCompare(b.entity_id)),
    }), command => {
      try {
        window.sessionStorage.setItem(window.RoomcraftModels.handoffKey, JSON.stringify(command));
      } catch { /* Studio can still open its model library without a selection. */ }
      library.close();
      window.history.pushState(null, '', button.getAttribute('href'));
      window.dispatchEvent(new CustomEvent('location-changed', {detail:{replace:false}}));
    });
    card.setMainMenu(false, true);
    library.open();
  });
}
