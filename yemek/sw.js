// İnternet yokken de açılabilsin diye dosyaları önbellekte tutar.
// Dosyalar değişince SURUM'ü artır ki telefonlar yeni hâli alsın.
const SURUM = "minik-sofra-v2";
const DOSYALAR = [
  "./",
  "index.html",
  "forum.html",
  "tarifler.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(DOSYALAR)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((anahtarlar) =>
      Promise.all(anahtarlar.filter((k) => k !== SURUM).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Önce internetten dene, olmazsa önbellekten ver.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((yanit) => {
        const kopya = yanit.clone();
        caches.open(SURUM).then((c) => c.put(e.request, kopya));
        return yanit;
      })
      .catch(() => caches.match(e.request))
  );
});
