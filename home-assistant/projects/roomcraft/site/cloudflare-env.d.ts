declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    HA_URL?: string;
    HA_TOKEN?: string;
    OWNER_EMAIL?: string;
  }
}
