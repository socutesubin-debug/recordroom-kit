/* 레코드룸 KIT: 화면은 항상 최신을 먼저 받고(오프라인이면 저장본), 큰 파일(AI 모델·실행 엔진·글꼴)은 한 번 받아 두고 재사용한다 */
const CACHE = "rrkit-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const u = new URL(req.url);
  const heavy = /\.(onnx|wasm|woff2?)$/.test(u.pathname) || (u.hostname === "cdn.jsdelivr.net" && u.pathname.includes("onnxruntime-web"));
  if (heavy) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) c.put(req, res.clone());
      return res;
    }));
    return;
  }
  if (u.origin === location.origin) {
    e.respondWith(fetch(req, { cache: "no-cache" }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req)));
  }
});
