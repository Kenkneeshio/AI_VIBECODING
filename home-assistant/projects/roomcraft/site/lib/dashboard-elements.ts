// Roomcraft owns linked object hit areas, its entity menu, state-icon controls,
// and marked camera thumbnails on the plan.
// Home Assistant owns all other elements, including the editor entry, clock,
// weather, and future overlays.
// Keep this boundary independent of the Site transport so it can be tested.
type JsonObject = Record<string, unknown>;
const CAMERA_ELEMENT_TYPE = "custom:roomcraft-camera-thumbnail";
const OBJECT_ELEMENT_TYPE = "custom:roomcraft-object-control";
const MENU_ELEMENT_TYPE = "custom:roomcraft-entity-menu";
const PLAN_WIDTH = 1536;
const PLAN_HEIGHT = 1024;
export const SCENE_WIDTH = 1536;
export const SCENE_HEIGHT = 864;
const SCENE_LEFT = 0;
const SCENE_TOP = 80;
export const ROOMCRAFT_SCENE = "full-width-v1";
const PREVIOUS_SCENE = "wall-to-wall-v1";
const PREVIOUS_SCENE_BOUNDS = { width: 1472, height: 828, left: 20, top: 96 };
const HEADER_TOP = "5.3%";
const ACTIONS = ["auto", "toggle", "activate", "more-info", "none"];

function isObject(value: unknown): value is JsonObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function stylePercent(value: unknown): number | null {
  if (typeof value !== "string" || !/^-?\d{1,3}(?:\.\d+)?%$/.test(value)) return null;
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : null;
}

function sceneHotspot(hotspot: JsonObject): JsonObject {
  const element = structuredClone(hotspot);
  if (isObject(element.style)) {
    const left = stylePercent(element.style.left);
    if (left !== null) element.style.left = percent(PLAN_WIDTH * left / 100 - SCENE_LEFT, SCENE_WIDTH);
    const width = stylePercent(element.style.width);
    if (width !== null) element.style.width = percent(PLAN_WIDTH * width / 100, SCENE_WIDTH);
    const top = stylePercent(element.style.top);
    if (top !== null) element.style.top = percent(PLAN_HEIGHT * top / 100 - SCENE_TOP, SCENE_HEIGHT);
    const height = stylePercent(element.style.height);
    if (height !== null) element.style.height = percent(PLAN_HEIGHT * height / 100, SCENE_HEIGHT);
  }
  return element;
}

function projectHotspot(element: JsonObject, scene: string): JsonObject {
  const hotspot = structuredClone(element);
  const bounds = scene === PREVIOUS_SCENE ? PREVIOUS_SCENE_BOUNDS :
    { width: SCENE_WIDTH, height: SCENE_HEIGHT, left: SCENE_LEFT, top: SCENE_TOP };
  if (isObject(hotspot.style)) {
    const left = stylePercent(hotspot.style.left);
    if (left !== null) hotspot.style.left = percent(bounds.width * left / 100 + bounds.left, PLAN_WIDTH);
    const width = stylePercent(hotspot.style.width);
    if (width !== null) hotspot.style.width = percent(bounds.width * width / 100, PLAN_WIDTH);
    const top = stylePercent(hotspot.style.top);
    if (top !== null) hotspot.style.top = percent((bounds.height * top / 100) + bounds.top, PLAN_HEIGHT);
    const height = stylePercent(hotspot.style.height);
    if (height !== null) hotspot.style.height = percent(bounds.height * height / 100, PLAN_HEIGHT);
  }
  return hotspot;
}

export function editableDashboardHotspots(elements: unknown, scene: unknown = null): JsonObject[] {
  if (!Array.isArray(elements)) return [];
  return elements.filter((element) => isObject(element) && element.type === "state-icon")
    .map((element, index) => ({
      ...((scene === ROOMCRAFT_SCENE || scene === PREVIOUS_SCENE)
        ? projectHotspot(element, scene) : structuredClone(element)),
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

export function validObjectControl(item: unknown): item is JsonObject {
  if (!isObject(item) || item.type === "cameraThumbnail") return false;
  return typeof item.id === "string" && item.id.length > 0 && item.id.length <= 128 &&
    typeof item.entityId === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(item.entityId) &&
    (item.controlLabel === undefined || typeof item.controlLabel === "string" && item.controlLabel.length <= 80) &&
    (item.controlIcon === undefined || item.controlIcon === "" || typeof item.controlIcon === "string" && /^mdi:[a-z0-9-]+$/.test(item.controlIcon)) &&
    (item.tapAction === undefined || ACTIONS.includes(String(item.tapAction))) &&
    (item.holdAction === undefined || ACTIONS.includes(String(item.holdAction))) &&
    (item.tapEntityId === undefined || typeof item.tapEntityId === "string" &&
      (item.tapEntityId === "" || /^[a-z_]+\.[a-z0-9_]+$/.test(item.tapEntityId))) &&
    (item.holdEntityId === undefined || typeof item.holdEntityId === "string" &&
      (item.holdEntityId === "" || /^[a-z_]+\.[a-z0-9_]+$/.test(item.holdEntityId))) &&
    [item.x, item.y, item.w, item.h, item.rotation ?? 0].every((value) => typeof value === "number" && Number.isFinite(value)) &&
    Number(item.x) >= 0 && Number(item.x) <= PLAN_WIDTH &&
    Number(item.y) >= 0 && Number(item.y) <= PLAN_HEIGHT &&
    Number(item.w) >= 12 && Number(item.w) <= PLAN_WIDTH &&
    Number(item.h) >= 12 && Number(item.h) <= PLAN_HEIGHT;
}

export function objectControlElements(items: unknown): JsonObject[] {
  if (!Array.isArray(items)) return [];
  return items.filter((item) => isObject(item) && item.type !== "cameraThumbnail" && item.entityId)
    .map((item) => {
      if (!validObjectControl(item)) throw new Error("The layout has an invalid object control.");
      return {
        type: OBJECT_ELEMENT_TYPE,
        roomcraft_item_id: item.id,
        entity: item.entityId,
        title: item.controlLabel || item.name || item.entityId,
        control_icon: item.controlIcon || "",
        control_zone: item.type === "controlZone",
        roomcraft_tap_action: item.tapAction || "auto",
        roomcraft_hold_action: item.holdAction || "auto",
        ...(item.tapEntityId ? { roomcraft_tap_entity: item.tapEntityId } : {}),
        ...(item.holdEntityId ? { roomcraft_hold_entity: item.holdEntityId } : {}),
        style: {
          left: percent((item.x as number) - SCENE_LEFT, SCENE_WIDTH), top: percent((item.y as number) - SCENE_TOP, SCENE_HEIGHT),
          width: percent(item.w as number, SCENE_WIDTH), height: percent(item.h as number, SCENE_HEIGHT),
          transform: `translate(-50%, -50%) rotate(${item.rotation ?? 0}deg)`,
          "z-index": 4,
        },
      };
    });
}

export function entityMenuElement(items: unknown = [], existing: unknown = []): JsonObject {
  const previous = Array.isArray(existing) ? existing.find((element) => isObject(element) &&
    element.type === MENU_ELEMENT_TYPE && element.roomcraft_menu === true) : null;
  const sections = isObject(previous) && Array.isArray(previous.sections)
    ? previous.sections.slice(0, 12).filter((section) => isObject(section) &&
      typeof section.title === "string" && section.title.length <= 60 && Array.isArray(section.entities))
      .map((section) => ({ title: section.title,
        entities: section.entities.filter((entity: unknown) => typeof entity === "string" &&
          /^[a-z_]+\.[a-z0-9_]+$/.test(entity)).slice(0, 200) })) : [];
  const boundObjects = Array.isArray(items) ? items.filter((item) => isObject(item) &&
    typeof item.entityId === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(item.entityId))
    .map((item) => ({ entity_id: item.entityId,
      label: item.controlLabel || item.name || item.entityId,
      icon: item.controlIcon || "" })) : [];
  return {
    type: MENU_ELEMENT_TYPE,
    roomcraft_menu: true,
    title: "Devices and sensors",
    sections,
    bound_objects: boundObjects,
    style: { left: "5.2%", top: HEADER_TOP, "z-index": 12 },
  };
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
          left: percent((item.x as number) - SCENE_LEFT, SCENE_WIDTH),
          top: percent((item.y as number) - SCENE_TOP, SCENE_HEIGHT),
          width: percent(item.w as number, SCENE_WIDTH),
          height: percent(item.h as number, SCENE_HEIGHT),
          transform: `translate(-50%, -50%) rotate(${item.rotation ?? 0}deg)`,
          "z-index": 3,
        },
      };
    });
}

function isManagedElement(element: JsonObject): boolean {
  return ((element.type === CAMERA_ELEMENT_TYPE || element.type === OBJECT_ELEMENT_TYPE) &&
    typeof element.roomcraft_item_id === "string") ||
    (element.type === MENU_ELEMENT_TYPE && element.roomcraft_menu === true);
}

function migrateHeaderChrome(element: JsonObject, previousScene: unknown): JsonObject {
  const result = structuredClone(element);
  const previousTop = previousScene === PREVIOUS_SCENE ? "3.6%" : "9%";
  if (!isObject(result.style) || result.style.top !== previousTop) return result;
  const stateLabel = result.type === "state-label" && typeof result.entity === "string" &&
    (result.entity === "sensor.time" || result.entity.startsWith("weather."));
  const action = isObject(result.tap_action) ? result.tap_action : {};
  const editorLink = result.type === "icon" && result.icon === "mdi:pencil-ruler" &&
    action.navigation_path === "/second-floor/studio";
  if (stateLabel || editorLink) result.style.top = HEADER_TOP;
  return result;
}

export function mergeDashboardElements(hotspots: JsonObject[], existing: unknown, items: unknown = [], previousScene: unknown = ROOMCRAFT_SCENE): JsonObject[] {
  const objects = objectControlElements(items);
  const linkedEntities = new Set(objects.map((element) => element.entity));
  const managed = hotspots.filter((hotspot) => !linkedEntities.has(hotspot.entity)).map((hotspot) => {
    const element = sceneHotspot(hotspot);
    delete element.id;
    return element;
  });
  const retained = Array.isArray(existing)
    ? existing.filter((element) => isObject(element) && element.type !== "state-icon" && !isManagedElement(element))
      .map((element) => previousScene !== ROOMCRAFT_SCENE ? migrateHeaderChrome(element, previousScene) : structuredClone(element))
    : [];
  return [...managed, ...objects, ...cameraThumbnailElements(items), entityMenuElement(items, existing), ...retained];
}

export function withUpdatedPlanCard(config: JsonObject, image: string, hotspots: JsonObject[], items: unknown = []): { config: JsonObject; card: JsonObject } {
  const next = structuredClone(config);
  const views = Array.isArray(next.views) ? next.views : [];
  const view = views.find((candidate) => isObject(candidate) && candidate.path === "plan");
  const cards = isObject(view) && Array.isArray(view.cards) ? view.cards : [];
  const card = cards.find((candidate) => isObject(candidate) && candidate.type === "picture-elements");
  if (!isObject(card)) throw new Error("Floor-plan card was not found");
  const previousScene = card.roomcraft_scene ?? null;
  card.image = image;
  card.roomcraft_scene = ROOMCRAFT_SCENE;
  card.elements = mergeDashboardElements(hotspots, card.elements, items, previousScene);
  return { config: next, card };
}
