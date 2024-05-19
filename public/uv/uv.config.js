self.__uv$config = {
  prefix: '/astro/~/uv/',
  bare: '/bare/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/astro/uv/uv.handler.js',
  client: '/astro/uv/uv.client.js',
  bundle: '/astro/uv/uv.bundle.js',
  config: '/astro/uv/uv.config.js',
  sw: '/astro/uv/uv.sw.js',
};