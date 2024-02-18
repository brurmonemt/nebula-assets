/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://brurmonemt.github.io/nebula-UV-Scripts/uv.handler.js',
    client: 'https://brurmonemt.github.io/nebula-UV-Scripts/uv.client.js',
    bundle: 'https://brurmonemt.github.io/nebula-UV-Scripts/uv.bundle.js',
    config: 'https://brurmonemt.github.io/nebula-UV-Scripts/uv.config.js',
    sw: 'https://brurmonemt.github.io/nebula-UV-Scripts/uv.sw.js',
};
