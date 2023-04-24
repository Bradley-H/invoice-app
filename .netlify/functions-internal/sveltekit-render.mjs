import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["data.json","favicon.png","noInvoice.svg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.35fe3c54.js","imports":["_app/immutable/entry/start.35fe3c54.js","_app/immutable/chunks/index.ef02fc82.js","_app/immutable/chunks/singletons.edf20f37.js","_app/immutable/chunks/index.4eaca053.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7e72e5eb.js","imports":["_app/immutable/entry/app.7e72e5eb.js","_app/immutable/chunks/index.ef02fc82.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[invoice]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"invoice","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
