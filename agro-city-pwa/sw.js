// Agro City - funciona offline e se atualiza sozinho.
// Ao trocar fontes ou ícones, aumente o número da versão abaixo.
const CACHE = 'agro-city-v1';
const FILES = [
  './', './index.html', './manifest.json',
  './fonts/fredoka-latin-400-normal.woff2', './fonts/fredoka-latin-600-normal.woff2', './fonts/fredoka-latin-700-normal.woff2',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Página do jogo: tenta a versão nova da internet (até 4s); sem internet usa a salva.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const res = await Promise.race([
          fetch(req, { cache: 'no-store' }),
          new Promise((_, rej) => setTimeout(rej, 4000))
        ]);
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('./index.html', copy));
        return res;
      } catch {
        return (await caches.match('./index.html')) || (await caches.match('./'));
      }
    })());
    return;
  }

  // Demais arquivos: usa o salvo e atualiza em segundo plano.
  e.respondWith((async () => {
    const cached = await caches.match(req);
    const net = fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => cached);
    return cached || net;
  })());
});
