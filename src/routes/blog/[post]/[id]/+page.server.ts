import { WORDPRESS_URL } from "$env/static/private";
import type { PageServerLoad } from "../../$types";
import { error } from '@sveltejs/kit'

export const prerender = false


type Post = {
	id: number
	date: Date
	title: { rendered: string }
	content: { rendered: string }
	slug: string
	_embedded: { 'wp:featuredmedia': Array<{ source_url: string }>, 'wp:term': Array<Array<{ id: number, name: string }>> }
	data?: { status: number }
}

type Category = Array<{
	id: number
	name: string
}>

export const load: PageServerLoad = async ({ params }) => {
	const postUrl = `${WORDPRESS_URL}/wp-json/wp/v2/posts/${params.id}?_embed`
	try {
		const postResp = await fetch(postUrl, { method: "GET" })
		const post: Post = await postResp.json();
		if (post.data?.status)
			throw error(404, "Post not found.")
		const categories: Category = post._embedded['wp:term'][0]
		const categoryIDs = categories.map(category => category.id).join("").split("").join(",")
		const relatedPostsResp = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${categoryIDs}&_embed`)
		const relatedPosts_: Post[] = await relatedPostsResp.json()
		const relatedPosts = relatedPosts_.filter(relatedPost => relatedPost.id !== post.id).slice(0, 2)

		return { post, categories, relatedPosts };
	} catch (e: any) {
		console.error('Error fetching post:', e);
		return error(404, `${e.body.message}`)
	}
}
