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
		client: {"start":"_app/immutable/entry/start.d3336dd3.js","app":"_app/immutable/entry/app.1d3b562e.js","imports":["_app/immutable/entry/start.d3336dd3.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/singletons.b247f99c.js","_app/immutable/chunks/index.b1b0aaf9.js","_app/immutable/entry/app.1d3b562e.js","_app/immutable/chunks/scheduler.8417489e.js","_app/immutable/chunks/index.74ff6371.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
