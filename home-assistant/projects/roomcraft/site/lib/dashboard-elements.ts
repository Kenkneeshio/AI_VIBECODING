// Roomcraft owns state-icon controls on the plan card. Home Assistant owns all
// other elements, including the editor entry, clock, weather, and future overlays.
// Keep this boundary independent of the Site transport so it can be tested.
type JsonObject = Record<string, unknown>;

function isObject(value: unknown): value is JsonObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function editableDashboardHotspots(elements: unknown): JsonObject[] {
  if (!Array.isArray(elements)) return [];
  return elements.filter((element) => isObject(element) && element.type === "state-icon")
    .map((element, index) => ({
      ...element,
      id: typeof element.id === "string" ? element.id : `ha-dashboard-${index + 1}`,
    }));
}

export function mergeDashboardElements(hotspots: JsonObject[], existing: unknown): JsonObject[] {
  const managed = hotspots.map((hotspot) => {
    const element = { ...hotspot };
    delete element.id;
    return element;
  });
  const retained = Array.isArray(existing)
    ? existing.filter((element) => isObject(element) && element.type !== "state-icon")
      .map((element) => structuredClone(element))
    : [];
  return [...managed, ...retained];
}

export function withUpdatedPlanCard(config: JsonObject, image: string, hotspots: JsonObject[]): { config: JsonObject; card: JsonObject } {
  const next = structuredClone(config);
  const views = Array.isArray(next.views) ? next.views : [];
  const view = views.find((candidate) => isObject(candidate) && candidate.path === "plan");
  const cards = isObject(view) && Array.isArray(view.cards) ? view.cards : [];
  const card = cards.find((candidate) => isObject(candidate) && candidate.type === "picture-elements");
  if (!isObject(card)) throw new Error("Floor-plan card was not found");
  card.image = image;
  card.elements = mergeDashboardElements(hotspots, card.elements);
  return { config: next, card };
}
