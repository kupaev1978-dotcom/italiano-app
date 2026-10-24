(function () {
  const isSecureContext =
    location.protocol === 'https:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';

  if (!('serviceWorker' in navigator)) {
    console.log('PWA: Service Worker не поддерживается этим браузером.');
    return;
  }

  if (!isSecureContext) {
    console.log('PWA: офлайн-режим доступен только по HTTPS или на localhost.');
    return;
  }

  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function (registration) {
        console.log('PWA: Service Worker зарегистрирован. Scope:', registration.scope);
      })
      .catch(function (error) {
        console.error('PWA: не удалось зарегистрировать Service Worker.', error);
      });
  });
})();
