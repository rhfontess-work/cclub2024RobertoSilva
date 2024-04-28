/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
// src/index.js

var src_default = {
	async fetch(request, env, ctx) {
		console.log("Logging: " + request.url, " Method:" + request.method)

		if (request.method == "POST") {
			return new Response("{\"METHOD\" : \"" + request.method + "\" , \"RESULT\" : \"ALLOWED\" }", {
				headers: {
					'content-type': 'application/json',
				},
			});
		}
		else {
			return new Response("{\"METHOD\" : \"" + request.method + "\" , \"RESULT\" : \"NOT ALLOWED\" }", {
				status: 405,
				headers: {
					'content-type': 'application/json',
					Allow: 'POST',
				},
			});
		}
	}
};

export {

	src_default as default
};