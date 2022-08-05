/* eslint-disable no-undef */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

const CACHE = "pwabuilder-page";

const offlineFallbackPage = "offline.html";
const urlsToCache = ["index.html", offlineFallbackPage];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// SW 설치
self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlsToCache);
    }),
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// Listen for requests
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // 만약 preload 된 response가 있으면 받는다
          const preloadResp = await event.preloadResponse;
          if (preloadResp) return preloadResp;

          // 만약 없으면 network를 이용한다
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          // 인터넷 연결이 불안정할 경우, offline 페이지를 보여준다
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(offlineFallbackPage);
          return cachedResp;
        }
      })(),
    );
  }
});

// SW 활성화
// 업데이트 할 때마다 caching 을 확인하고 promise 를 동작함
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE);

  event.waitUntil(
    caches.keys().then((cachesNames) =>
      Promise.all(
        cachesNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) return caches.delete(cacheName);
        }),
      ),
    ),
  );
});
