// キャッシュ名とキャッシュするファイルの指定
var CACHE_NAME = 'simple-pwa-caches-v1.0';
var urlsToCache = [
  './index.html',
  './css/style.css',
  './js/main.js',
  './data/data.json'
];

// インストール処理
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// リソースフェッチ時のロード処理
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // キャッシュに対象のリソースが存在する場合は、キャッシュからリソースを読み込みます。
      if (response) {
        return response;
      }

      // オフラインの場合は、オフライン時の表示内容を表示します。
      if (!navigator.onLine) {
        return new Response('<div>オフラインです。</div>');
      }

      // キャッシュに対象のリソースが存在しない場合、ネットワークからリソースを取得します。
      return fetch(event.request);
    })
  );
});