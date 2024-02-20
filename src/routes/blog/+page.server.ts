export const prerender = false
export const ssr = true

import type { PageServerLoad } from './$types';
import { WORDPRESS_PER_PAGE, WORDPRESS_URL } from '$env/static/private';
import type { Posts } from '$lib/types';
import { error, type NumericRange } from '@sveltejs/kit';


export const load: PageServerLoad = async ({ fetch, url }) => {
	const currentPage = url.searchParams.get('page') ?? 1
	const perPage = parseInt(WORDPRESS_PER_PAGE) || 6; // Use env variable or default
	const postUrl = `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${currentPage}`;

	try {
		const response = await fetch(postUrl, { method: "GET" });
		const pages: string | null = response.headers.get('X-WP-TotalPages')
		const posts: Posts[] & { message?: string, data?: { status: number } } = await response.json();

		if (posts.length > 0)
			return { posts, pages, currentPage };


		if (posts?.data)
			throw error(posts.data.status as NumericRange<400, 599>, posts?.message)

	} catch (e: any) {
		console.error('Error fetching posts:', e);
		return error(e.status, `${e.body.message}`)
	}
};