<script lang="ts">
	import { slide } from 'svelte/transition';
	import LeftArrowN from '$lib/components/icons/LeftArrowN.svelte';
	import RightArrowN from '$lib/components/icons/RightArrowN.svelte';


	const testimonials = [
		{
			name: 'Darian Kovacs',
			testimonial:
				"Pius is a great communicator and works hard to deliver results. It's been great working with him and seeing him work professionally and respectfully. He delivers on what he promises and is honest and straightforward when something isn't working."
		},
		{
			name: 'Bamidele Onibalusi',
			testimonial: "Pius is very skillful and committed. He helps with researching and writing resources at Writers in Charge, and his efforts have directly contributed to tens of thousands of extra visitors within a short time. He knows what he is doing!"
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

<section id="testimonials" class="mt-10 border-t-2 pt-14 pb-72 md:pb-52 px-4 relative overflow-hidden">
	<div
		class="mt-10 md:mt-0 text-center sm:max-w-[600px] md:max-w-[800px] mx-auto flex flex-col gap-y-5"
	>
		<p
			class="text-5xl leading-[1.2] sm:leading-snug md:leading-[50px] font-semibold md:font-bold"
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
			aria-label="Previous"
			title="Previous"
				on:click={() => prevSlide(currentSlide - 1)}
				class="p-3 bg-black text-white rounded-full transition-all ease-linear hover:scale-[90%]"
			>
				<LeftArrowN class="text-2xl" />
			</button>
			<button
			aria-label="Next"
			title="Next"
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
