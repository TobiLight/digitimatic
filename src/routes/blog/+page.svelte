<script lang="ts">
	import { excerptPostContent } from '$lib/utils/excerptPost';
	import type { PageServerData } from './$types';
	import BlogPost from '$lib/components/Blog/BlogPost.svelte';
	import Loading from '$lib/components/icons/Loading.svelte';
	import { onMount } from 'svelte';

	let isLoading: boolean = false;

	export let data: PageServerData;
	let posts = [
		{
			id: 1,
			img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages5.fanpop.com%2Fimage%2Fphotos%2F28000000%2Frandomised-random-28065165-1024-819.jpg&f=1&nofb=1&ipt=cddfc714f0acc2a753cab9c4e240c1471b8d8237719c579ad8e9a0e3a428468d&ipo=images',
			title: 'Lorem ipsum est aliquam etiam luctus commodo lectus elementum',
			content:
				'Lorem ipsum est aliquam etiam luctus commodo lectus elementum, accumsan etiam curae nam felis enim a nullam, maecenas at lorem ac pharetra convallis eleifend. Urna sagittis lobortis commodo egestas nunc lacus velit vulputate tincidunt posuere orci, vel aenean quis class iaculis nec pulvinar nam potenti blandit, primis rhoncus tellus porttitor adipiscing risus neque semper nullam cubilia. Eu vel lobortis turpis aenean eros sociosqu felis tellus dictum convallis donec et proin nullam, etiam vel dictumst torquent a pulvinar velit ornare quam elit proin augue fringilla.\n\nAuctor ultrices senectus eleifend quisque tristique class tellus feugiat vel, sem ullamcorper nisi eu class lorem euismod iaculis ultrices potenti, vivamus vestibulum sagittis vel sagittis in massa eleifend. Suscipit tristique tempor eleifend duis semper aptent, libero curae magna nam netus elementum at, fermentum lectus mattis cras pretium. Urna vehicula elit porta rutrum eu ultrices dui ut, vel interdum cubilia quisque vulputate rutrum commodo primis semper, et habitasse odio adipiscing consectetur sagittis interdum.',
			categories: ['Uncategorized']
		},
		{
			id: 2,
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2F4tYPEPR.jpg&f=1&nofb=1&ipt=38d663a8e277ca49e19b5b583aecc2ca6c7104ac5dd1d868be157214ad576443&ipo=images',
			title:
				'Lorem ipsum est aliquam etiam luctus commodo lectus elementum, accumsan etiam curae nam felis enim a nullam, maecenas at lorem ac pharetra convallis eleifend. Urna sagittis lobortis commodo',
			content:
				'Lorem ipsum est aliquam etiam luctus commodo lectus elementum, accumsan etiam curae nam felis enim a nullam, maecenas at lorem ac pharetra convallis eleifend. Urna sagittis lobortis commodo egestas nunc lacus velit vulputate tincidunt posuere orci, vel aenean quis class iaculis nec pulvinar nam potenti blandit, primis rhoncus tellus porttitor adipiscing risus neque semper nullam cubilia. Eu vel lobortis turpis aenean eros sociosqu felis tellus dictum convallis donec et proin nullam, etiam vel dictumst torquent a pulvinar velit ornare quam elit proin augue fringilla.\n\nAuctor ultrices senectus eleifend quisque tristique class tellus feugiat vel, sem ullamcorper nisi eu class lorem euismod iaculis ultrices potenti, vivamus vestibulum sagittis vel sagittis in massa eleifend. Suscipit tristique tempor eleifend duis semper aptent, libero curae magna nam netus elementum at, fermentum lectus mattis cras pretium. Urna vehicula elit porta rutrum eu ultrices dui ut, vel interdum cubilia quisque vulputate rutrum commodo primis semper, et habitasse odio adipiscing consectetur sagittis interdum.',
			categories: ['SEO', 'Digital Marketing', 'Branding', 'Social Media trends']
		},
		{
			id: 3,
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FFunny-Random-Wallpaper.png&f=1&nofb=1&ipt=d301ae6c8154acca983c46a16d6c38c7f64ff73f31c9a0895c86a09a5ca9932d&ipo=images',
			title: 'Lorem ipsum est aliquam',
			content:
				'Lorem ipsum est aliquam etiam luctus commodo lectus elementum, accumsan etiam curae nam felis enim a nullam, maecenas at lorem ac pharetra convallis eleifend. Urna sagittis lobortis commodo egestas nunc lacus velit vulputate tincidunt posuere orci, vel aenean quis class iaculis nec pulvinar nam potenti blandit, primis rhoncus tellus porttitor adipiscing risus neque semper nullam cubilia. Eu vel lobortis turpis aenean eros sociosqu felis tellus dictum convallis donec et proin nullam, etiam vel dictumst torquent a pulvinar velit ornare quam elit proin augue fringilla.\n\nAuctor ultrices senectus eleifend quisque tristique class tellus feugiat vel, sem ullamcorper nisi eu class lorem euismod iaculis ultrices potenti, vivamus vestibulum sagittis vel sagittis in massa eleifend. Suscipit tristique tempor eleifend duis semper aptent, libero curae magna nam netus elementum at, fermentum lectus mattis cras pretium. Urna vehicula elit porta rutrum eu ultrices dui ut, vel interdum cubilia quisque vulputate rutrum commodo primis semper, et habitasse odio adipiscing consectetur sagittis interdum.',
			categories: ['Branding', 'PR']
		}
	];

	let currentPage: number;
	let pages: number;

	onMount(() => {
		currentPage = parseInt(data.currentPage as string);
		pages = parseInt(data.pages as string);
		isLoading = false;
	});
</script>

<section class="p-10">
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
		{#each data.posts as post}
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
			<form data-sveltekit-reload method="GET" action="?/" on:submit={(e) => (isLoading = true)}>
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
			<form data-sveltekit-reload method="GET" action="?/" on:submit={(e) => (isLoading = true)}>
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
