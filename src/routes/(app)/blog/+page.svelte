<script lang="ts">
	import { excerptPostContent } from '#lib/utils/excerptPost.ts';
	import type { PageServerData } from './$types';
	import BlogPost from '#lib/components/Blog/BlogPost.svelte';
	import { onMount } from 'svelte';

	export let data: PageServerData;

	let currentPage: number;
	let pages: number;

	onMount(() => {
		currentPage = parseInt(data.currentPage as string);
		pages = parseInt(data.pages as string);
	});
</script>

<section class="p-10 pb-64 md:pb-54">
	<div class="flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
		<h1 class="text-6xl font-bold">Blog</h1>
		<!-- <form action="">
			<label for="categories" class="grid">
				<span class="font-semibold">Filter</span>
				<select name="categories" id="" class="border-2 rounded p-3">
					<option value="SEO">SEO</option>
					<option value="Digital Marketing">Digital Marketing</option>
					<option value="Branding">Branding</option>
					<option value="Social Media trends">Social Media trends</option>
					<option value="PR">pr</option>
					<option value="Uncategorized">Uncategorized</option>
				</select>
			</label>
		</form> -->
	</div>
	<div
		class="blog-container grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8 mt-12 justify-stretch"
	>
		{#if data.posts}
			{#each data.posts as post (post.id)}
				<BlogPost
					id={`${post.id}`}
					title={excerptPostContent(post.title.rendered, 70)}
					slug={post.slug}
					excerpt={excerptPostContent(post.excerpt.rendered, 200)}
					imgSrc={post._embedded['wp:featuredmedia'] &&
						post._embedded['wp:featuredmedia'][0].source_url}
				/>
			{/each}
		{/if}
	</div>
	<div class="fetch-more-posts flex items-center gap-6 justify-center mt-20">
		{#if currentPage > 1}
			<form data-sveltekit-reload method="GET" action="?/">
				<input type="hidden" value={`${currentPage - 1}`} name="page" />
				<label for="fetch-more">
					<button
						class="px-3 py-1 text-white bg-black rounded-full hover:bg-transparent hover:text-black border border-black transition-all ease-linear"
						>Prev</button
					>
				</label>
			</form>
		{/if}
		{#if currentPage < pages}
			<form data-sveltekit-reload method="GET" action="?/">
				<input type="hidden" value={`${currentPage + 1}`} name="page" />
				<label for="fetch-more">
					<button
						class="px-3 py-1 text-white bg-black rounded-full hover:bg-transparent hover:text-black border border-black transition-all ease-linear"
						>Next</button
					>
				</label>
			</form>
		{/if}
	</div>
</section>
