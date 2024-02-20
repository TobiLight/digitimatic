<script lang="ts">
	export let id: string;
	export let imgSrc: string;
	export let title: string;
	export let slug: string;
	export let excerpt: null | string = null;
</script>

<div class="border shadow-lg rounded-md grid">
	<div {id} class="blog-image relative flex overflow-hidden max-h-[300px] md:max-h-[270px]">
		<img
			src={imgSrc ??
				'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/bfuivveceanpnkszqq9t'}
			alt={title}
			class="rounded-t-md w-full object-cover h-full transition-all ease-linear hover:scale-110"
		/>
	</div>

	<div class="blog-content p-4">
		<div class="blog-title mb-2">
			<h3 class="font-bold text-xl text-blue-400 hover:text-blue-600 transition-all ease-linear">
				<a data-sveltekit-reload href={`/blog/${slug}/${id}`}>{title}</a>
			</h3>
		</div>
		{#if excerpt && excerpt.length > 0}
			{@html excerpt}
		{/if}
	</div>
</div>
