importScripts('/astro/dynamic/dynamic.config.js');
importScripts('/astro/dynamic/dynamic.worker.js');

importScripts('/astro/uv/uv.bundle.js');
importScripts('/astro/uv/uv.config.js');
importScripts(self.__uv$config.sw || '/astro/uv/uv.sw.js');

const uv = new UVServiceWorker();
self.dynamic = new Dynamic(self.__dynamic$config);

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(location.origin + self.__dynamic$config.prefix)) event.respondWith((async () => {
        if (await self.dynamic.route(event)) return await self.dynamic.fetch(event);

        await fetch(event.request);
    })());
    else if (event.request.url.startsWith(location.origin + __uv$config.prefix)) event.respondWith((async () => await uv.fetch(event))());
    else event.respondWith((async () => await fetch(event.request))());
});