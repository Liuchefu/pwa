// リソースフェッチ時のロード処理
self.addEventListener('fetch', function(event) {
  console.log("サービスワーカー");
});

//workboxCDN
importScripts(
  "./workbox.js"
  // "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

//ファイルのキャッシュ(オフライン起動のため)
workbox.precaching.precacheAndRoute([
{
  url: "./index.html",
  revision:"123",
},
{
  url: "./assert/js/script.js",
  revision:"123",
},
{
  url: "./workbox.js",
  revision:"123",
},
]);