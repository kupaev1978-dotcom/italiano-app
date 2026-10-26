const CACHE_NAME = 'italiano-v8';

const CORE_ASSETS = [
  './index.html',
  './manifest.json',
  './favicon.svg',

  './css/style.css',

  './js/app.js',
  './js/pwa.js',

  './data/course.js',

  './data/lessons/a0-u1-l0.js',
  './data/lessons/a0-u1-l0b.js',
  './data/lessons/a0-u1-l0c.js',
  './data/lessons/a0-u1-l1.js',
  './data/lessons/a0-u1-l2.js',
  './data/lessons/a0-u1-l3.js',
  './data/lessons/a0-u1-l4.js',

  './data/lessons/a0-u2-l0.js',
  './data/lessons/a0-u2-l1.js',
  './data/lessons/a0-u2-l2.js',
  './data/lessons/a0-u2-l3.js',
  './data/lessons/a0-u2-l4.js',
  './data/lessons/a0-u2-l5.js',
  './data/lessons/a0-u2-l6.js',
  './data/lessons/a0-u2-l7.js'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    (async function () {
      const cache = await caches.open(CACHE_NAME);

      await Promise.allSettled(
        CORE_ASSETS.map(function (url) {
          return cache.add(url);
        })
      );

      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(function (key) {
            return key !== CACHE_NAME;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', function (event) {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      (async function () {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match('./index.html');

        const networkPromise = fetch(request)
          .then(function (response) {
            if (response && response.ok) {
              cache.put('./index.html', response.clone());
            }
            return response;
          })
          .catch(function () {
            return null;
          });

        if (cached) {
          return cached;
        }

        const response = await networkPromise;

        if (response) {
          return response;
        }

        return new Response('Нет соединения. Открой приложение один раз онлайн, чтобы сохранить его в память.', {
          status: 503,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8'
          }
        });
      })()
    );

    return;
  }

  event.respondWith(
    (async function () {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);

      const networkPromise = fetch(request)
        .then(function (response) {
          if (response && response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(function () {
          return null;
        });

      if (cached) {
        return cached;
      }

      const response = await networkPromise;

      if (response) {
        return response;
      }

      throw new Error('Файл не найден в кэше и нет интернета.');
    })()
  );
});
