var cacheName = "petstore-v1"
var cacheFiles = [
    'index.html',
    'lessons.js',
    'afterschool.webmanifest',
    'assets/book.png',
    'assets/clapperboard.png',
    'assets/coding.png',
    'assets/cooking.png',
    'assets/dance.jpg',
    'assets/idea.jpg',
    'assets/knitting.jpg',
    'assets/musical-note.jpg',
    'assets/pottery.jpg',
    'assets/science.jpg',
    'assets/singing.jpg',
    'assets/education1.jpg',
    'assets/education2.jpg',
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install')
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files')
            return cache.addAll(cacheFiles)
        })
    )
})

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetch resource' + e.request.url)
})