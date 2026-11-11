/* Yeni Yol Saha Tespit — çevrimdışı önbellek */
const CACHE = 'saha-tespit-v1.3';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './sablon.js', './sablon_sy.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(ASSETS.map(u => c.add(new Request(u, { mode: u.startsWith('http') ? 'cors' : 'same-origin' })).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('saha-tespit')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Harita karoları: ağdan; başarılı olanlar ayrı önbelleğe (gezilen yerler çevrimdışı da görünsün)
  if (u.hostname.endsWith('tile.openstreetmap.org')) {
    e.respondWith(caches.open('saha-tespit-karo').then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; } catch (er) { return hit || Response.error(); }
    }));
    return;
  }
  // Sayfa ve uygulama dosyaları: önce ağ (yeni sürüm hemen gelsin), internet yoksa önbellek
  if (e.request.mode === 'navigate' || u.origin === location.origin) {
    e.respondWith(caches.open(CACHE).then(async c => {
      try { const r = await fetch(e.request, { cache: 'no-cache' }); if (r && r.ok) c.put(e.request, r.clone()); return r; }
      catch (er) { return (await c.match(e.request, { ignoreSearch: true })) || (await c.match('./index.html')) || Response.error(); }
    }));
    return;
  }
  // Dış kütüphaneler: önbellekten hemen, arkada güncelle
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(e.request, r.clone()); return r; }).catch(() => null);
    return hit || (await net) || Response.error();
  }));
});
