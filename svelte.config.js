import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import htmlMinifierAdaptor from "sveltekit-html-minifier";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({ postcss: true })],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ precompress: true }),
		prerender: {
			handleMissingId: 'ignore', // or a custom function to handle the error
			// handleHttpError: 'ignore'
		},
		inlineStyleThreshold: Infinity
	}
};

export default config;
