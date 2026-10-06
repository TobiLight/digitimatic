import { minify } from 'html-minifier-terser';
import { dev, building } from '$app/env';

const minification_options = {
	collapseWhitespace: true,
	collapseInlineTagWhitespace: true,
	removeComments: true,
	minifyCSS: true,
	minifyJS: true
};

export async function handle({ event, resolve }) {
	if (dev || !building) {
		return resolve(event);
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => minify(html, minification_options)
	});
}
