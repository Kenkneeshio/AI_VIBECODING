import { env } from "cloudflare:workers";
import { keepPreviousDashboardDesign, stableDashboardJson as stableStringify } from "../../../ha-local/dashboard-snapshots.mjs";
import { storybookLightControlLabels, storybookPreview } from "../../../ha-local/storybook-state.mjs";
import { dashboardProjectProblem, isDashboardLayout, normalizeDashboardTerrain } from "../../../ha-local/dashboard-project.mjs";
import { SCENE_HEIGHT, SCENE_WIDTH, editableDashboardHotspots, roomcraftPlanCard, validCameraThumbnail, validObjectControl, withUpdatedPlanCard } from "../../../lib/dashboard-elements";

const ROOMCRAFT_DASHBOARD = "roomcraft-home";
const LEGACY_DASHBOARD = "second-floor";
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

class HomeAssistantCommandError extends BridgeError {
  constructor(readonly commandCode: string | undefined) {
    super(502, "ha_command_failed", "Home Assistant rejected the dashboard operation.");
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

async function readDashboardRequest(request: Request): Promise<unknown> {
  const tooLarge = () => new BridgeError(413, "too_large", "The layout transfer is too large.");
  if (Number(request.headers.get("Content-Length")) > MAX_JSON_BYTES) throw tooLarge();
  const reader = request.body?.getReader();
  if (!reader) throw new BridgeError(400, "invalid_json", "The layout transfer is malformed.");
  const decoder = new TextDecoder("utf-8", {fatal: true});
  const chunks: string[] = [];
  let size = 0;
  try {
    for (;;) {
      const {value, done} = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_JSON_BYTES) throw tooLarge();
      chunks.push(decoder.decode(value, {stream: true}));
    }
    chunks.push(decoder.decode());
    return JSON.parse(chunks.join(""));
  } catch (error) {
    void reader.cancel().catch(() => {});
    if (error instanceof BridgeError) throw error;
    throw new BridgeError(400, "invalid_json", "The layout transfer is malformed.");
  } finally {
    reader.releaseLock();
  }
}

async function revisionOf(value: unknown): Promise<string> {
  const bytes = new TextEncoder().encode(stableStringify(value));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function findCard(config: JsonObject): DashboardCard {
  const card = roomcraftPlanCard(config);
  if (!card) throw new BridgeError(409, "dashboard_changed", "The Roomcraft dashboard projection was not found.");
  return card as DashboardCard;
}

function absoluteImageUrl(haOrigin: string, image: unknown): string | null {
  if (typeof image !== "string" || !image) return null;
  try {
    const url = new URL(image, haOrigin);
    return url.origin === haOrigin && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

function validateProject(value: unknown): LayoutProject {
  const problem = dashboardProjectProblem(value, {validCameraThumbnail, validObjectControl});
  if (problem) throw new BridgeError(400, "invalid_project", problem);
  return normalizeDashboardTerrain(value) as LayoutProject;
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
  const header = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (header.getUint32(16) !== SCENE_WIDTH || header.getUint32(20) !== SCENE_HEIGHT) {
    throw new BridgeError(400, "invalid_png", `The plan PNG must be ${SCENE_WIDTH} × ${SCENE_HEIGHT} pixels.`);
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
  private closedError?: BridgeError;

  constructor(haOrigin: string, token: string) {
    this.socket = new WebSocket(`${haOrigin.replace(/^https:/, "wss:")}/api/websocket`);
    this.ready = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new BridgeError(502, "ha_timeout", "Home Assistant did not respond.")), REQUEST_TIMEOUT_MS);
      const fail = () => {
        clearTimeout(timeout);
        const error = new BridgeError(502, "ha_unavailable", "Home Assistant is unavailable.");
        this.rejectPending(error);
        reject(error);
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
          else {
            const error = message.error;
            const code = isObject(error) && typeof error.code === "string" ? error.code : undefined;
            task.reject(new HomeAssistantCommandError(code));
          }
        }
      });
    });
  }

  async call(type: string, payload: JsonObject = {}): Promise<unknown> {
    await this.ready;
    if (this.closedError) throw this.closedError;
    const id = ++this.sequence;
    return new Promise<unknown>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new BridgeError(502, "ha_timeout", "Home Assistant did not respond."));
      }, REQUEST_TIMEOUT_MS);
      this.pending.set(id, { resolve, reject, timeout });
      try {
        this.socket.send(JSON.stringify({ id, type, ...payload }));
      } catch {
        this.rejectPending(new BridgeError(502, "ha_unavailable", "Home Assistant is unavailable."));
      }
    });
  }

  private rejectPending(error: BridgeError): void {
    this.closedError ??= error;
    for (const task of this.pending.values()) {
      clearTimeout(task.timeout);
      task.reject(this.closedError);
    }
    this.pending.clear();
  }

  close(): void {
    this.rejectPending(new BridgeError(502, "ha_unavailable", "Home Assistant connection closed."));
    this.socket.close();
  }
}

async function readConfig(socket: HomeAssistantSocket, dashboardPath: string): Promise<JsonObject> {
  const config = await socket.call("lovelace/config", { url_path: dashboardPath });
  if (!isObject(config)) {
    throw new BridgeError(502, "ha_invalid_response", "Home Assistant returned an invalid dashboard.");
  }
  return config;
}

type DashboardSnapshot = {
  dashboardPath: typeof ROOMCRAFT_DASHBOARD | typeof LEGACY_DASHBOARD;
  config: JsonObject;
};

async function getConfig(socket: HomeAssistantSocket): Promise<DashboardSnapshot> {
  let current: JsonObject | undefined;
  try {
    current = await readConfig(socket, ROOMCRAFT_DASHBOARD);
  } catch (error) {
    if (!(error instanceof HomeAssistantCommandError) || error.commandCode !== "config_not_found") throw error;
  }
  // The original Roomcraft Home shell stored its project in the separate Second Floor dashboard.
  if (current && (Object.hasOwn(current, "roomcraft_layout") || Object.hasOwn(current, "roomcraft_plan"))) {
    if (!Object.hasOwn(current, "roomcraft_plan") || !isDashboardLayout(current.roomcraft_layout)) {
      throw new BridgeError(409, "dashboard_changed", "The Roomcraft Home layout or projection is missing.");
    }
    findCard(current);
    return { dashboardPath: ROOMCRAFT_DASHBOARD, config: current };
  }
  const config = await readConfig(socket, LEGACY_DASHBOARD);
  findCard(config);
  return { dashboardPath: LEGACY_DASHBOARD, config };
}

function dashboardSource(haOrigin: string, dashboardPath: DashboardSnapshot["dashboardPath"]): string {
  return `${haOrigin}/${dashboardPath}/${dashboardPath === ROOMCRAFT_DASHBOARD ? "home" : "plan"}`;
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
    const { dashboardPath, config: dashboard } = await getConfig(socket);
    const card = findCard(dashboard);
    const [states, homeConfig] = await Promise.all([
      socket.call("get_states"), socket.call("get_config").catch(() => null),
    ]);
    const timeZone = isObject(homeConfig) && typeof homeConfig.time_zone === "string" ? homeConfig.time_zone : undefined;
    const records = Array.isArray(states) ? states.filter((item) => isObject(item) &&
      typeof item.entity_id === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(item.entity_id))
      : [];
    const entityOptions = records.map((item) => ({
        entity_id: item.entity_id,
        name: isObject(item.attributes) && typeof item.attributes.friendly_name === "string"
          ? item.attributes.friendly_name.slice(0, 120) : item.entity_id,
        domain: String(item.entity_id).split(".")[0],
        area: "",
        lightControls: storybookLightControlLabels(item.entity_id, item.attributes),
      }));
    return json({
      project: isObject(dashboard.roomcraft_layout) ? dashboard.roomcraft_layout : null,
      imageUrl: absoluteImageUrl(config.haOrigin, card.image),
      hotspots: editableDashboardHotspots(card.elements, card.roomcraft_scene),
      entityOptions,
      storybookPreview: storybookPreview(dashboard,
        Object.fromEntries(records.map(item => [item.entity_id, item])), Date.now(), timeZone),
      source: dashboardSource(config.haOrigin, dashboardPath),
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
    const body = await readDashboardRequest(request);
    if (!isObject(body) || typeof body.revision !== "string" || !/^[a-f0-9]{64}$/.test(body.revision)) {
      throw new BridgeError(400, "invalid_revision", "Refresh the dashboard version before exporting.");
    }
    const project = validateProject(body.project);
    const png = decodePng(body.pngDataUrl);
    socket = new HomeAssistantSocket(config.haOrigin, config.token);
    const original = await getConfig(socket);
    if (await revisionOf(original.config) !== body.revision) {
      throw new BridgeError(409, "dashboard_changed", "The Home Assistant dashboard changed. Import it again before exporting.");
    }
    const image = await uploadImage(config.haOrigin, config.token, png);
    // Fetch once more after upload to avoid overwriting an edit made during it.
    const latest = await getConfig(socket);
    if (latest.dashboardPath !== original.dashboardPath || await revisionOf(latest.config) !== body.revision) {
      throw new BridgeError(409, "dashboard_changed", "The Home Assistant dashboard changed. Import it again before exporting.");
    }
    const { config: next, card } = withUpdatedPlanCard(latest.config, image, project.hotspots as JsonObject[], project.items);
    next.roomcraft_layout = project;
    const publication = keepPreviousDashboardDesign(latest.config, next, new Date().toISOString());
    await socket.call("lovelace/config/save", { url_path: latest.dashboardPath, config: publication });
    const verified = await getConfig(socket);
    if (verified.dashboardPath !== latest.dashboardPath || stableStringify(verified.config) !== stableStringify(publication)) {
      throw new BridgeError(502, "verification_failed", "Dashboard save could not be verified. Reload before trying again.");
    }
    return json({
      project,
      imageUrl: absoluteImageUrl(config.haOrigin, image),
      hotspots: editableDashboardHotspots(card.elements, card.roomcraft_scene),
      source: dashboardSource(config.haOrigin, verified.dashboardPath),
      revision: await revisionOf(verified.config),
    });
  } catch (error) {
    return reportError(error);
  } finally {
    socket?.close();
  }
}
