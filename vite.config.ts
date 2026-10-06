import adapter from '@sveltejs/adapter-vercel';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			prerender: {
				handleMissingId: 'ignore'
			},
			inlineStyleThreshold: Infinity
		}),
		tailwindcss()
	]
});