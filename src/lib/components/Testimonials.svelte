<script lang="ts">
	import Graph from "$lib/components/icons/Graph.svelte";
	import type { ObserverEventDetails, Options } from "svelte-inview";
	import { inview } from "svelte-inview";
	import { slide, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import Slide from "$lib/components/Slide.svelte";

	let heading: boolean;
	let testimonial: boolean;
	const options: Options = {
		rootMargin: "50px",
	};

	const clients = [
		{
			name: "Sergey Grybniak",
			testimonial:
				"Sergey Grybniak is a data-driven entrepreneur who had a vision of what he wanted for his brand and himself. Having built 3 successful businesses across 3 different industries, he knew he needed the right PR to get more eyeballs on his enterprise. He came to us, we went to work immediately starting with getting him author accounts on major publications mixed with a few features. With our services, Sergey has been able to command over $1M worth of business for his agency and successfully sold out his ICO.",
		},
		{
			name: "Guy Sheetrit",
			testimonial:
				"We worked with Guy to help him establish a strong online presence by securing multiple features for him on various news outlets and optimizing his bio for lead generation. These features and author accounts helped him gain credibility and visibility among potential clients also positioning him as a reputable and knowledgeable entrepreneur and marketing expert. Guy Sheetrit Using our services, Guy was able to establish himself as a leading authority in industries he’s active in, attracting more clients and opportunities for his businesses. He has been recognized as one of the top SEO experts to follow by Inc Magazine, He has also been featured among promising entrepreneurs to watch for in the Daily Mail",
		},
		{
			name: "Open Head NFT",
			testimonial:
				"Open Head NFT came into the crypto space with a unique offering of on-chain raffles which means full transparency in the selection process. Loot boxes to win over $100 ETH and passive staking. The founder knew he had a unicorn and came to us to ensure Open Head is a success, with placements in major US publications. Within 48hrs of our campaign, open-head nft discord gained over 10k active users and went on to sell out with over 60 ETH in volume.",
		},
	];
</script>

<section
	use:inview={options}
	on:inview_change={(e) => {
		heading = e.detail.inView;
		testimonial = e.detail.inView;
	}}
	id="testimonials"
	class="success-stories bg-black p-8 py-20 text-white relative"
>
	<div
		transition:fade={{
			delay: 500,
			duration: 600,
			easing: quintOut,
		}}
		class={`${
			heading ? "animate__animated animate__fadeInLeft animate__slow" : "animate__animated animate__fadeOutLeft"
		} heading flex flex-col sm:flex sm:flex-row text-center sm:text-left items-center gap-4 md:w-3/4 lg:w-3/4 pb-6 relative z-[0]`}
	>
		<div
			class="flex items-center lg:items-end gap-3 rounded-full border border-white p-4"
		>
			<Graph class="text-white w-32 h-32" />
		</div>
		<div class="grid gap-2">
			<h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold">
				Success Stories
			</h1>
			<p class="text-xl sm:text-2xl">
				Recognizing the strength of your business is important, but when
				others acknowledge and hold it in high regard, it becomes a game
				changer.
			</p>
		</div>
	</div>
	<!-- <hr class="h-1 w-3/4 bg-white rounded-full z-[0] relative" /> -->

	<div class="mt-8 mb-8 md:mb-16 md:mt-32 grid gap-8 px-2 md:w-3/6 mx-auto relative max-h-[620px]">
		<Slide
		duration={5000}
		slides={clients}
	/>
		

		<!-- <div class="grid gap-2 text-right">
			<h1 class="text-xl font-bold">Altura NFT</h1>
			<p>
				Altura, a leading platform for Web3 game developers was in need of eyes balls to see their
				unique offer and came to us. With a mutual understanding, we went to work and got them a few
				features on International Business Times, BeinCrypto, and Yahoo to mention a few. <br />
				Altura currently powers the following next generation of gaming such as Animera, Haunted Space,
				etc. Currently, Altura has transacted $3.9M in total marketplace volume and boasts of over 44k
				unique marketplace users.
			</p>
		</div> -->
	</div>
</section>

<style>
</style>
