import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.9b198a5c.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/index.a5df3011.js","_app/immutable/chunks/index.7436a3bb.js","_app/immutable/chunks/index.b1b0aaf9.js"];
export const stylesheets = ["_app/immutable/assets/0.4d2242bf.css","_app/immutable/assets/index.2d4c25b0.css"];
export const fonts = [];
