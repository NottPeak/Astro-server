self.__dynamic$config = {
    prefix: '/astro/~/dynamic/',
    encoding: 'xor',
    mode: 'production',
    logLevel: 0,
    bare: {
        version: 2,
        path: '/bare/',
    },
    tab: {
        title: null,
        icon: null,
        ua: null,
    },
    assets: {
        prefix: '/astro/dynamic/',
        files: {
            handler: 'dynamic.handler.js',
            client: 'dynamic.client.js',
            worker: 'dynamic.worker.js',
            config: 'dynamic.config.js',
            inject: null,
        }
    },
    block: []
};