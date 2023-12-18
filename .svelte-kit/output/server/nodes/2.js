

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.06df5113.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/index.a5df3011.js","_app/immutable/chunks/index.7436a3bb.js","_app/immutable/chunks/index.b1b0aaf9.js"];
export const stylesheets = ["_app/immutable/assets/2.24a9e77b.css","_app/immutable/assets/index.2d4c25b0.css"];
export const fonts = [];
