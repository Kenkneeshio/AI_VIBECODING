import json
import os
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.error import URLError
from urllib.request import HTTPRedirectHandler, Request, build_opener


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


class CameraLab(BaseHTTPRequestHandler):
    def reply(self, status, payload, mime):
        self.send_response(status)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        if self.client_address[0] != "172.30.32.2":
            self.reply(403, b"Use Home Assistant ingress", "text/plain")
            return
        if self.path in ("/", "/camera.js"):
            name, mime = ("index.html", "text/html") if self.path == "/" else ("camera.js", "text/javascript")
            self.reply(200, Path(name).read_bytes(), mime)
            return
        if self.path == "/cameras":
            self.reply(200, json.dumps(self.server.cameras).encode(), "application/json")
            return
        prefix = "/frame/"
        if self.path.startswith(prefix) and self.path[len(prefix):] in self.server.cameras:
            self.frame(self.path[len(prefix):])
            return
        self.reply(404, b"Not found", "text/plain")

    def frame(self, entity):
        request = Request(
            "http://supervisor/core/api/camera_proxy/" + entity,
            headers={"Authorization": "Bearer " + os.environ["SUPERVISOR_TOKEN"]},
        )
        try:
            with build_opener(NoRedirect()).open(request, timeout=4) as response:
                mime = response.headers.get_content_type()
                limit = 4 * 1024 * 1024
                payload = response.read(limit + 1)
                if mime not in ("image/jpeg", "image/png", "image/webp") or len(payload) > limit:
                    raise ValueError("Invalid camera image")
        except (URLError, TimeoutError, ValueError):
            self.reply(502, b"Camera image unavailable", "text/plain")
            return
        self.reply(200, payload, mime)


if __name__ == "__main__":
    import re

    options = json.loads(Path("/data/options.json").read_text())
    server = HTTPServer(("", 8099), CameraLab)
    server.cameras = sorted({
        entity for entity in options["cameras"]
        if re.fullmatch(r"camera\.[a-z0-9_]+", entity)
    })
    server.serve_forever()
