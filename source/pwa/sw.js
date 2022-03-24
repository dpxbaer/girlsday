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
          // './icon_512x512.png',
          './manifest.json',
          './modules/pwa.js',
          './main.js',
          './styles.css',
          './unicorn.png'
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
