<script lang="ts">
	import Trophy from '$lib/components/icons/Trophy.svelte';
	import type { Options } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import { quintOut } from 'svelte/easing';
	import Slide from '$lib/components/Slide.svelte';
	import { slide } from 'svelte/transition';
	import LeftArrowN from '$lib/components/icons/LeftArrowN.svelte';
	import RightArrowN from '$lib/components/icons/RightArrowN.svelte';

	let heading: boolean;
	let testimonial: boolean;
	const options: Options = {
		rootMargin: '50px'
	};

	const testimonials = [
		{
			name: 'Sergey Grybniak',
			testimonial:
				'Sergey Grybniak is a data-driven entrepreneur who had a vision of what he wanted for his brand and himself. Having built 3 successful businesses across 3 different industries, he knew he needed the right PR to get more eyeballs on his enterprise. He came to us, we went to work immediately starting with getting him author accounts on major publications mixed with a few features. With our services, Sergey has been able to command over $1M worth of business for his agency and successfully sold out his ICO.'
		},
		{
			name: 'Guy Sheetrit',
			testimonial:
				'We worked with Guy to help him establish a strong online presence by securing multiple features for him on various news outlets and optimizing his bio for lead generation. These features and author accounts helped him gain credibility and visibility among potential clients also positioning him as a reputable and knowledgeable entrepreneur and marketing expert. Guy Sheetrit Using our services, Guy was able to establish himself as a leading authority in industries he’s active in, attracting more clients and opportunities for his businesses. He has been recognized as one of the top SEO experts to follow by Inc Magazine, He has also been featured among promising entrepreneurs to watch for in the Daily Mail'
		},
		{
			name: 'Open Head NFT',
			testimonial:
				'Open Head NFT came into the crypto space with a unique offering of on-chain raffles which means full transparency in the selection process. Loot boxes to win over $100 ETH and passive staking. The founder knew he had a unicorn and came to us to ensure Open Head is a success, with placements in major US publications. Within 48hrs of our campaign, open-head nft discord gained over 10k active users and went on to sell out with over 60 ETH in volume.'
		},
		{
			name: 'Altura NFT',
			testimonial:
				'Altura, a leading platform for Web3 game developers was in need of eyes balls to see their unique offer and came to us. With a mutual understanding, we went to work and got them a few features on International Business Times, BeinCrypto, and Yahoo to mention a few. Altura currently powers the following next generation of gaming such as Animera, Haunted Space, etc. Currently, Altura has transacted $3.9M in total marketplace volume and boasts of over 44k unique marketplace users.'
		}
	];

	let currentSlide = 0;
	let nextTestimonial = (currentSlide + 1) % testimonials.length;
	let direction = '';
	const prevSlide = (i: number) => {
		direction = 'right';
		currentSlide = i;
		if (currentSlide < 0) currentSlide = testimonials.length - 1;
		nextTestimonial = (currentSlide + 1) % testimonials.length;
	};
	const nextSlide = (i: number) => {
		direction = 'left';
		currentSlide = i;
		if (currentSlide >= testimonials.length) {
			currentSlide = 0;
		}
		nextTestimonial = (currentSlide + 1) % testimonials.length;
	};
</script>

<section id="testimonials" class="mt-10 border-t-2 pt-24 pb-72 md:pb-52 px-4 relative overflow-hidden">
	<h1 class="text-center text-xl md:text-2xl font-semibold">TESTIMONIALS</h1>
	<div
		class="mt-10 md:mt-0 text-center sm:max-w-[600px] md:max-w-[800px] mx-auto flex flex-col gap-y-5"
	>
		<p
			class="text-5xl leading-[1.2] sm:leading-snug md:leading-[82px] md:text-7xl font-semibold md:font-bold"
		>
			Don't take our word for it, take theirs!
		</p>
	</div>

	<div class="testimonial-container grid gap-6 relative">
		<div class="">
			{#each testimonials as t, i}
				{#if currentSlide === i}
					<div
						on:transitionend={() => i === currentSlide && (direction = '')}
						in:slide={{ duration: 400 }}
						out:slide={{ duration: 800 }}
						class={`w-full md:w-3/4 lg:w-3/5 md:mx-auto grid gap-4 bg-gray-100 p-8 rounded-xl mt-8 ease-linear transition-all animate__animated animate__fadeIn shadow-xl border-l-8 border-gray-500`}
					>
						<div class={``}>
							<p>{t.testimonial}</p>
						</div>
						<div class="justify-self-end font-bold text-lg">
							- {t.name}
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<div class="w-full flex gap-8 justify-center items-center testimonial-nav">
			<button
				on:click={() => prevSlide(currentSlide - 1)}
				class="p-3 bg-black text-white rounded-full transition-all ease-linear hover:scale-[90%]"
			>
				<LeftArrowN class="text-2xl" />
			</button>
			<button
				on:click={() => nextSlide(currentSlide + 1)}
				class="p-3 bg-black text-white rounded-full transition-all ease-linear hover:scale-[90%]"
			>
				<RightArrowN class="text-2xl" />
			</button>
		</div>
	</div>
</section>

<style>
</style>
