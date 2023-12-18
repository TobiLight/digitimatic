

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1366a91d.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/index.a5df3011.js","_app/immutable/chunks/singletons.765a1998.js","_app/immutable/chunks/index.b1b0aaf9.js"];
export const stylesheets = [];
export const fonts = [];
