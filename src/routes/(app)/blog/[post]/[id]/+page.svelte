<script lang="ts">
	import BlogPost from '$lib/components/Blog/BlogPost.svelte';
	import { excerptPostContent } from '$lib/utils/excerptPost';
	import type { PageServerData } from './$types';
	import { marked } from 'marked';

	export let data: PageServerData;
	const { post, categories, relatedPosts } = data;
	const formatter = new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});

</script>

<svelte:head>
	{#if post}
		<link rel="canonical" href={`/blog/${post.slug}`} />
	{/if}
	<title>{post?.title.rendered}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post?.title.rendered} />
</svelte:head>

<section class="mb-[200px]">
	<div class="post-container px-6">
		<div
			class="post-categories-container flex flex-col-reverse justify-center items-center gap-3 md:gap-6 mt-32 md:mt-40"
		>
			<div
				class="post-categories flex items-center justify-center gap-3 flex-wrap w-3/4 md:w-fit md:max-w-[33.33%]"
			>
				{#if categories && categories.length > 0}
					{#each categories as category}
						<p class="bg-black text-white rounded-full px-3 py-1">&num;{category.name}</p>
					{/each}
				{/if}
			</div>
			<div class="post-date font-semibold">
				<p>{formatter.format(new Date(post.date))}</p>
			</div>
		</div>
		<div class="post-wrapper mx-auto mt-14 grid gap-10">
			<div class="post-title grid justify-center items-center">
				<h1 class="font-bold text-3xl text-center">
					{post?.title.rendered}
				</h1>
			</div>
			<div class="post-content md:w-3/5 mx-auto md:text-lg">
				{#if post && post.content.rendered.length > 0}
					{@html marked(post.content.rendered)}
				{/if}
			</div>
		</div>
		<div class="related-posts-container md:w-3/5 mx-auto mt-36">
			{#if relatedPosts.length > 0}
				<div class="grid gap-8">
					<h3 class="text-3xl font-bold">Related Posts</h3>
					<div class="related-posts-wrapper">
						<div class="related-posts flex gap-4 items-center">
							{#each relatedPosts as relatedPost}
								<BlogPost
									id={`${relatedPost.id}`}
									title={excerptPostContent(relatedPost.title.rendered, 70)}
									slug={relatedPost.slug}
									imgSrc={relatedPost._embedded['wp:featuredmedia'] &&
										relatedPost._embedded['wp:featuredmedia'][0].source_url}
								/>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
