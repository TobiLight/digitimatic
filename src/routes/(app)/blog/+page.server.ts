export const prerender = false;
export const ssr = true;

import type { PageServerLoad } from './$types';
import { WORDPRESS_PER_PAGE, WORDPRESS_URL } from '$app/env/private';
import type { APIResponse, Posts } from '#lib/types.ts';
import { error, isHttpError } from '@sveltejs/kit';

function httpError(status: unknown, message: string) {
	const code = typeof status === 'number' && status >= 400 && status <= 599 ? status : 500;
	return error(code, message);
}

export const load: PageServerLoad = async ({ fetch, url }) => {
	const currentPage = url.searchParams.get('page') ?? 1;
	const perPage = parseInt(WORDPRESS_PER_PAGE) || 6; // Use env variable or default
	const postUrl = `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}`;

	try {
		const response = await fetch(postUrl, { method: 'GET' });
		const pages: string | null = response.headers.get('X-WP-TotalPages');
		const posts: APIResponse<Posts[] | { message?: string; data?: { status: number } }> =
			await response.json();

		if (Array.isArray(posts)) return { posts, pages, currentPage };

		if (posts.data) return httpError(posts.data.status, posts.message ?? 'Failed to load posts');
	} catch (e: unknown) {
		console.error('Error fetching posts:', e);
		if (isHttpError(e)) throw e;

		const cause = e instanceof Error ? (e.cause as { code?: string } | undefined) : undefined;
		if (cause?.code === 'ENOTFOUND') return error(500, 'Internal Server Error');

		const body = (e as { status?: number; body?: { message?: string } } | null) ?? {};
		return httpError(body.status, body.body?.message ?? 'Failed to load posts');
	}
};
