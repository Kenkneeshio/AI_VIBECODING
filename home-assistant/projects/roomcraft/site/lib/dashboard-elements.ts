// Roomcraft owns state-icon controls and marked camera thumbnails on the plan.
// Home Assistant owns all other elements, including the editor entry, clock,
// weather, and future overlays.
// Keep this boundary independent of the Site transport so it can be tested.
type JsonObject = Record<string, unknown>;
const CAMERA_ELEMENT_TYPE = "custom:roomcraft-camera-thumbnail";
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;

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

export function validCameraThumbnail(item: unknown): item is JsonObject {
  if (!isObject(item) || item.type !== "cameraThumbnail") return false;
  const entity = item.entityId ?? "";
  const image = item.imageEntityId ?? "";
  return typeof item.id === "string" && item.id.length > 0 && item.id.length <= 128 &&
    typeof entity === "string" && (entity === "" || /^camera\.[a-z0-9_]+$/.test(entity)) &&
    typeof image === "string" && (image === "" || /^image\.[a-z0-9_]+$/.test(image)) &&
    (item.previewMode === undefined || ["event", "live", "offline"].includes(String(item.previewMode))) &&
    [item.x, item.y, item.w, item.h, item.rotation ?? 0].every((value) => typeof value === "number" && Number.isFinite(value)) &&
    Number(item.x) >= 0 && Number(item.x) <= PLAN_WIDTH &&
    Number(item.y) >= 0 && Number(item.y) <= PLAN_HEIGHT &&
    Number(item.w) >= 40 && Number(item.w) <= PLAN_WIDTH &&
    Number(item.h) >= 40 && Number(item.h) <= PLAN_HEIGHT;
}

function percent(value: number, span: number): string {
  return `${Math.round(value / span * 10000) / 100}%`;
}

export function cameraThumbnailElements(items: unknown): JsonObject[] {
  if (!Array.isArray(items)) return [];
  return items.filter((item) => isObject(item) && item.type === "cameraThumbnail")
    .map((item) => {
      if (!validCameraThumbnail(item)) throw new Error("The layout has an invalid camera thumbnail.");
      return {
        type: CAMERA_ELEMENT_TYPE,
        roomcraft_item_id: item.id,
        title: typeof item.name === "string" ? item.name.slice(0, 120) : "Camera",
        camera_entity: item.entityId || "",
        image_entity: item.imageEntityId || "",
        preview_mode: item.previewMode || "event",
        style: {
          left: percent(item.x as number, PLAN_WIDTH),
          top: percent(item.y as number, PLAN_HEIGHT),
          width: percent(item.w as number, PLAN_WIDTH),
          height: percent(item.h as number, PLAN_HEIGHT),
          transform: `translate(-50%, -50%) rotate(${item.rotation ?? 0}deg)`,
          "z-index": 3,
        },
      };
    });
}

function isManagedCameraElement(element: JsonObject): boolean {
  return element.type === CAMERA_ELEMENT_TYPE && typeof element.roomcraft_item_id === "string";
}

export function mergeDashboardElements(hotspots: JsonObject[], existing: unknown, items: unknown = []): JsonObject[] {
  const managed = hotspots.map((hotspot) => {
    const element = { ...hotspot };
    delete element.id;
    return element;
  });
  const retained = Array.isArray(existing)
    ? existing.filter((element) => isObject(element) && element.type !== "state-icon" && !isManagedCameraElement(element))
      .map((element) => structuredClone(element))
    : [];
  return [...managed, ...cameraThumbnailElements(items), ...retained];
}

export function withUpdatedPlanCard(config: JsonObject, image: string, hotspots: JsonObject[], items: unknown = []): { config: JsonObject; card: JsonObject } {
  const next = structuredClone(config);
  const views = Array.isArray(next.views) ? next.views : [];
  const view = views.find((candidate) => isObject(candidate) && candidate.path === "plan");
  const cards = isObject(view) && Array.isArray(view.cards) ? view.cards : [];
  const card = cards.find((candidate) => isObject(candidate) && candidate.type === "picture-elements");
  if (!isObject(card)) throw new Error("Floor-plan card was not found");
  card.image = image;
  card.elements = mergeDashboardElements(hotspots, card.elements, items);
  return { config: next, card };
}
