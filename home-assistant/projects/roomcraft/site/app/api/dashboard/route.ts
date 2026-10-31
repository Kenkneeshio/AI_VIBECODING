import { env } from "cloudflare:workers";
import { editableDashboardHotspots, validCameraThumbnail, validObjectControl, withUpdatedPlanCard } from "../../../lib/dashboard-elements";

const DASHBOARD_PATH = "second-floor";
const VIEW_PATH = "plan";
const MAX_PNG_BYTES = 10 * 1024 * 1024;
const MAX_JSON_BYTES = 16 * 1024 * 1024;
const REQUEST_TIMEOUT_MS = 20_000;

type JsonObject = Record<string, unknown>;
type LayoutProject = JsonObject & {
  version: number;
  rooms: unknown[];
  walls: unknown[];
  items: unknown[];
  hotspots: unknown[];
};

type DashboardCard = JsonObject & {
  type: "picture-elements";
  image?: string;
  elements?: JsonObject[];
};

class BridgeError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

function json(data: unknown, status = 200): Response {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
  });
}

function isObject(value: unknown): value is JsonObject {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function settings(): { haOrigin: string; token: string; ownerEmail: string } {
  const haUrl = env.HA_URL?.trim();
  const token = env.HA_TOKEN?.trim();
  const ownerEmail = env.OWNER_EMAIL?.trim().toLowerCase();
  if (!haUrl || !token || !ownerEmail) {
    throw new BridgeError(503, "not_configured", "Dashboard connection is not configured.");
  }
  let url: URL;
  try {
    url = new URL(haUrl);
  } catch {
    throw new BridgeError(503, "not_configured", "Dashboard connection is not configured.");
  }
  if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) {
    throw new BridgeError(503, "not_configured", "Dashboard connection is not configured.");
  }
  return { haOrigin: url.origin, token, ownerEmail };
}

function authorize(request: Request, ownerEmail: string): void {
  const userId = request.headers.get("oai-authenticated-user-id");
  const email = request.headers.get("oai-authenticated-user-email")?.trim().toLowerCase();
  if (!userId || !email || email !== ownerEmail) {
    throw new BridgeError(403, "forbidden", "This dashboard connection is available only to the site owner.");
  }
}

function authorizeWrite(request: Request, ownerEmail: string): void {
  authorize(request, ownerEmail);
  // A browser POST must be made by this Site. The owner-only identity check
  // above also protects the route from requests that bypass browser CORS.
  const origin = request.headers.get("Origin");
  if (origin !== new URL(request.url).origin) {
    throw new BridgeError(403, "origin_mismatch", "Open the editor and try again.");
  }
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
    throw new BridgeError(415, "unsupported_media_type", "Expected a JSON dashboard transfer.");
  }
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  if (isObject(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

async function revisionOf(value: unknown): Promise<string> {
  const bytes = new TextEncoder().encode(stableStringify(value));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function findCard(config: JsonObject): DashboardCard {
  const views = config.views;
  if (!Array.isArray(views)) {
    throw new BridgeError(409, "dashboard_changed", "The Home Assistant dashboard structure has changed.");
  }
  const view = views.find((candidate) => isObject(candidate) && candidate.path === VIEW_PATH);
  const cards = isObject(view) ? view.cards : null;
  const card = Array.isArray(cards)
    ? cards.find((candidate) => isObject(candidate) && candidate.type === "picture-elements")
    : null;
  if (!isObject(card) || card.type !== "picture-elements") {
    throw new BridgeError(409, "dashboard_changed", "The Home Assistant floor-plan card was not found.");
  }
  return card as DashboardCard;
}

function absoluteImageUrl(haOrigin: string, image: unknown): string | null {
  if (typeof image !== "string" || !image) return null;
  try {
    const url = new URL(image, haOrigin);
    return url.origin === haOrigin ? url.href : null;
  } catch {
    return null;
  }
}

function validateProject(value: unknown): LayoutProject {
  if (!isObject(value) || value.version !== 2 ||
      !Array.isArray(value.rooms) || !Array.isArray(value.walls) ||
      !Array.isArray(value.items) || !Array.isArray(value.hotspots)) {
    throw new BridgeError(400, "invalid_project", "The layout is not a supported Roomcraft project.");
  }
  if (value.hotspots.length > 100 || value.items.length > 2000 || value.walls.length > 2000) {
    throw new BridgeError(400, "invalid_project", "The layout exceeds supported limits.");
  }
  for (const hotspot of value.hotspots) {
    if (!isObject(hotspot) || typeof hotspot.entity !== "string" ||
        hotspot.type !== "state-icon" || !isObject(hotspot.style)) {
      throw new BridgeError(400, "invalid_project", "The layout has an invalid Home Assistant control.");
    }
  }
  for (const item of value.items) {
    if (isObject(item) && item.type === "cameraThumbnail" && !validCameraThumbnail(item)) {
      throw new BridgeError(400, "invalid_project", "The layout has an invalid camera thumbnail.");
    }
    if (isObject(item) && item.type !== "cameraThumbnail" && item.entityId && !validObjectControl(item)) {
      throw new BridgeError(400, "invalid_project", "The layout has an invalid object control.");
    }
  }
  return value as LayoutProject;
}

function decodePng(dataUrl: unknown): Uint8Array {
  if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/png;base64,")) {
    throw new BridgeError(400, "invalid_png", "A PNG rendering is required.");
  }
  const base64 = dataUrl.slice("data:image/png;base64,".length);
  if (base64.length > Math.ceil(MAX_PNG_BYTES / 3) * 4 + 4 || !/^[A-Za-z0-9+/]*={0,2}$/.test(base64)) {
    throw new BridgeError(413, "invalid_png", "The PNG is too large or malformed.");
  }
  let binary: string;
  try {
    binary = atob(base64);
  } catch {
    throw new BridgeError(400, "invalid_png", "The PNG is malformed.");
  }
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  const signature = [137, 80, 78, 71, 13, 10, 26, 10];
  if (bytes.length < 24 || bytes.length > MAX_PNG_BYTES ||
      signature.some((part, index) => bytes[index] !== part)) {
    throw new BridgeError(400, "invalid_png", "The PNG is malformed or too large.");
  }
  return bytes;
}

class HomeAssistantSocket {
  private socket: WebSocket;
  private sequence = 0;
  private pending = new Map<number, {
    resolve: (value: unknown) => void;
    reject: (error: Error) => void;
    timeout: ReturnType<typeof setTimeout>;
  }>();
  private ready: Promise<void>;

  constructor(haOrigin: string, token: string) {
    this.socket = new WebSocket(`${haOrigin.replace(/^https:/, "wss:")}/api/websocket`);
    this.ready = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new BridgeError(502, "ha_timeout", "Home Assistant did not respond.")), REQUEST_TIMEOUT_MS);
      const fail = () => {
        clearTimeout(timeout);
        reject(new BridgeError(502, "ha_unavailable", "Home Assistant is unavailable."));
      };
      this.socket.addEventListener("error", fail, { once: true });
      this.socket.addEventListener("close", fail, { once: true });
      this.socket.addEventListener("message", (event) => {
        let message: JsonObject;
        try {
          message = JSON.parse(String(event.data));
        } catch {
          return;
        }
        if (message.type === "auth_required") {
          this.socket.send(JSON.stringify({ type: "auth", access_token: token }));
        } else if (message.type === "auth_ok") {
          clearTimeout(timeout);
          resolve();
        } else if (message.type === "auth_invalid") {
          clearTimeout(timeout);
          reject(new BridgeError(502, "ha_auth_failed", "Home Assistant rejected the dashboard connection."));
        } else if (typeof message.id === "number") {
          const task = this.pending.get(message.id);
          if (!task) return;
          clearTimeout(task.timeout);
          this.pending.delete(message.id);
          if (message.success === true) task.resolve(message.result);
          else task.reject(new BridgeError(502, "ha_command_failed", "Home Assistant rejected the dashboard operation."));
        }
      });
    });
  }

  async call(type: string, payload: JsonObject = {}): Promise<unknown> {
    await this.ready;
    const id = ++this.sequence;
    return new Promise<unknown>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new BridgeError(502, "ha_timeout", "Home Assistant did not respond."));
      }, REQUEST_TIMEOUT_MS);
      this.pending.set(id, { resolve, reject, timeout });
      this.socket.send(JSON.stringify({ id, type, ...payload }));
    });
  }

  close(): void {
    for (const task of this.pending.values()) {
      clearTimeout(task.timeout);
      task.reject(new BridgeError(502, "ha_unavailable", "Home Assistant connection closed."));
    }
    this.pending.clear();
    this.socket.close();
  }
}

async function getConfig(socket: HomeAssistantSocket): Promise<JsonObject> {
  const config = await socket.call("lovelace/config", { url_path: DASHBOARD_PATH });
  if (!isObject(config)) {
    throw new BridgeError(502, "ha_invalid_response", "Home Assistant returned an invalid dashboard.");
  }
  return config;
}

async function uploadImage(haOrigin: string, token: string, png: Uint8Array): Promise<string> {
  const form = new FormData();
  const uploadBytes = new Uint8Array(png.length);
  uploadBytes.set(png);
  form.append("file", new Blob([uploadBytes.buffer], { type: "image/png" }), "roomcraft-second-floor.png");
  let response: Response;
  try {
    response = await fetch(`${haOrigin}/api/image/upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new BridgeError(502, "ha_upload_failed", "The dashboard image could not be uploaded.");
  }
  if (!response.ok) {
    throw new BridgeError(502, "ha_upload_failed", "The dashboard image could not be uploaded.");
  }
  let result: unknown;
  try {
    result = await response.json();
  } catch {
    throw new BridgeError(502, "ha_upload_failed", "Home Assistant returned an invalid image response.");
  }
  if (!isObject(result) || typeof result.id !== "string" || !/^[a-f0-9]{32}$/.test(result.id)) {
    throw new BridgeError(502, "ha_upload_failed", "Home Assistant returned an invalid image response.");
  }
  return `/api/image/serve/${result.id}/original`;
}

function reportError(error: unknown): Response {
  if (error instanceof BridgeError) return json({ error: error.code, message: error.message }, error.status);
  console.error("Roomcraft dashboard bridge error", error instanceof Error ? error.name : "unknown");
  return json({ error: "internal_error", message: "Dashboard transfer failed. Please try again." }, 500);
}

export async function GET(request: Request): Promise<Response> {
  let socket: HomeAssistantSocket | undefined;
  try {
    const config = settings();
    authorize(request, config.ownerEmail);
    socket = new HomeAssistantSocket(config.haOrigin, config.token);
    const dashboard = await getConfig(socket);
    const card = findCard(dashboard);
    const states = await socket.call("get_states");
    const entityOptions = Array.isArray(states) ? states.filter((item) => isObject(item) &&
      typeof item.entity_id === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(item.entity_id))
      .map((item) => ({
        entity_id: item.entity_id,
        name: isObject(item.attributes) && typeof item.attributes.friendly_name === "string"
          ? item.attributes.friendly_name.slice(0, 120) : item.entity_id,
        domain: String(item.entity_id).split(".")[0],
        area: "",
      })) : [];
    return json({
      project: isObject(dashboard.roomcraft_layout) ? dashboard.roomcraft_layout : null,
      imageUrl: absoluteImageUrl(config.haOrigin, card.image),
      hotspots: editableDashboardHotspots(card.elements),
      entityOptions,
      source: `${config.haOrigin}/${DASHBOARD_PATH}/${VIEW_PATH}`,
      revision: await revisionOf(dashboard),
    });
  } catch (error) {
    return reportError(error);
  } finally {
    socket?.close();
  }
}

export async function POST(request: Request): Promise<Response> {
  let socket: HomeAssistantSocket | undefined;
  try {
    const config = settings();
    authorizeWrite(request, config.ownerEmail);
    const length = Number(request.headers.get("Content-Length") || 0);
    if (length > MAX_JSON_BYTES) {
      throw new BridgeError(413, "too_large", "The layout transfer is too large.");
    }
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      throw new BridgeError(400, "invalid_json", "The layout transfer is malformed.");
    }
    if (!isObject(body) || typeof body.revision !== "string" || !/^[a-f0-9]{64}$/.test(body.revision)) {
      throw new BridgeError(400, "invalid_revision", "Refresh the dashboard version before exporting.");
    }
    const project = validateProject(body.project);
    const png = decodePng(body.pngDataUrl);
    socket = new HomeAssistantSocket(config.haOrigin, config.token);
    const original = await getConfig(socket);
    findCard(original);
    if (await revisionOf(original) !== body.revision) {
      throw new BridgeError(409, "dashboard_changed", "The Home Assistant dashboard changed. Import it again before exporting.");
    }
    const image = await uploadImage(config.haOrigin, config.token, png);
    // Fetch once more after upload to avoid overwriting an edit made during it.
    const latest = await getConfig(socket);
    if (await revisionOf(latest) !== body.revision) {
      throw new BridgeError(409, "dashboard_changed", "The Home Assistant dashboard changed. Import it again before exporting.");
    }
    const { config: next, card } = withUpdatedPlanCard(latest, image, project.hotspots as JsonObject[], project.items);
    next.roomcraft_layout = project;
    await socket.call("lovelace/config/save", { url_path: DASHBOARD_PATH, config: next });
    const verified = await getConfig(socket);
    if (stableStringify(verified) !== stableStringify(next)) {
      throw new BridgeError(502, "verification_failed", "Dashboard save could not be verified. Reload before trying again.");
    }
    return json({
      project,
      imageUrl: absoluteImageUrl(config.haOrigin, image),
      hotspots: editableDashboardHotspots(card.elements),
      source: `${config.haOrigin}/${DASHBOARD_PATH}/${VIEW_PATH}`,
      revision: await revisionOf(verified),
    });
  } catch (error) {
    return reportError(error);
  } finally {
    socket?.close();
  }
}
