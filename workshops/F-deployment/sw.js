const RELEASE_ID = '0.1.0'
const CACHE_NAME = `pwa-vokabeln-v${RELEASE_ID}`

self.addEventListener('install', event => {
  skipWaiting()
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        cache.addAll([
          './',
          './index.html',
          './favicon.svg',
          './manifest.json',
          './app.js',
          './pwa.js',
          './main.js',
          './vokabeln.js',
          './lokale-vokabeln.js',
          './style.css',
          './unicorn.png',
          'https://unpkg.com/vue@3.2.28/dist/vue.global.prod.js'
        ])
      )
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then(cache => cache.match(event.request))
      .then(async response => {
        const { request } = event
        return response ?? fetch(request)
      })
  )
})
