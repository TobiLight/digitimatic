export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["digitimatic.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.815f07d8.js","app":"_app/immutable/entry/app.79b365c8.js","imports":["_app/immutable/entry/start.815f07d8.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/singletons.765a1998.js","_app/immutable/chunks/index.b1b0aaf9.js","_app/immutable/entry/app.79b365c8.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/index.a5df3011.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
