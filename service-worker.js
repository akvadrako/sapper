!function(){"use strict";const s=["client/index.b708c54c.js","client/index.d0e59487.js","client/index.827050fd.js","client/client.7215de57.js","client/index.651eddda.js"].concat(["service-worker-index.html","CNAME","favicon.png","fonts/fira-mono/fira-mono-latin-400.woff2","fonts/overpass/overpass-latin-100.woff2","fonts/overpass/overpass-latin-300.woff2","fonts/overpass/overpass-latin-400.woff2","fonts/overpass/overpass-latin-600.woff2","fonts/overpass/overpass-latin-700.woff2","fonts/roboto/roboto-latin-400.woff2","fonts/roboto/roboto-latin-400italic.woff2","fonts/roboto/roboto-latin-500.woff2","fonts/roboto/roboto-latin-500italic.woff2","icons/arrow-right.svg","icons/check.svg","icons/chevron.svg","icons/collapse.svg","icons/download.svg","icons/dropdown.svg","icons/edit.svg","icons/expand.svg","icons/flip.svg","icons/fork.svg","icons/link.svg","icons/loading.svg","icons/save.svg","images/sapper-android-chrome-192.png","images/sapper-android-chrome-512.png","images/sapper-apple-touch-icon.png","images/sapper-mstile-150.png","manifest.json","prism.css","sapper-logo-horizontal.svg","sapper-logo-outline.svg","sapper-logo-vertical.svg","sapper-logo.svg","sapper-logotype.svg"]),o=new Set(s);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1589879989623").then(o=>o.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const o of s)"cache1589879989623"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const e=new URL(s.request.url);e.protocol.startsWith("http")&&(e.hostname===self.location.hostname&&e.port!==self.location.port||(e.host===self.location.host&&o.has(e.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1589879989623").then(async o=>{try{const e=await fetch(s.request);return o.put(s.request,e.clone()),e}catch(e){const t=await o.match(s.request);if(t)return t;throw e}}))))})}();
