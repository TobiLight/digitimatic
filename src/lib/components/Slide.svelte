<script lang="ts">
	import { blur } from "svelte/transition";
	export let duration: number;
	export let slides: Array<{
		name: string;
		testimonial: string;
	}>;
	let currentSlide = 0;
	const nextSlide = () => {
		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		timer();
	};
	const prevSlide = () => {
		currentSlide--;
		if (currentSlide <= 0) {
			currentSlide = slides.length - 1;
		}
		timer();
	};
	const goToSlide = (i: number) => {
		currentSlide = i;
		timer();
	};
	let interval: number;
	const timer = () => {
		clearInterval(interval);
		interval = setInterval(nextSlide, duration);
	};
	timer();
</script>

<div class={`${currentSlide === 1 ? 'h-[370px] mb-8' : 'h-[300px] mb-4'} slider relative md:h-fit`}>
	<div class="slide">
		{#each slides as slider, i}
			{#if currentSlide === i}
				<div
					class={`slid absolute p-3 rounded-md`}
					transition:blur={{ amount: 10 }}
				>
					<blockquote class="p-3 text-sm bg-[#222] h-auto">{slider.testimonial}</blockquote>
					<p class={`w-auto font-bold text-right mt-4`}>- {slider.name}</p>
				</div>
			{/if}
		{/each}
		<!-- <div
			class="flex items-center gap-5 justify-center mt-8 absolute transform translate-y-[-50%] bottom-0"
		> -->
			<button class="prev bg-[#2e2e2e] border rounded-full" on:click={prevSlide}>{'<'}</button>
			<button
				class="next bg-[#2e2e2e] border rounded-full px-3 py-1 z-[2] cursor-pointer"
				on:click={nextSlide}>{'>'}</button
			>
		<!-- </div> -->
	</div>

	<div class="nav">
		{#each slides as slider, i}
			<button
				class="bubble"
				on:click={() => {
					goToSlide(i);
				}}
				class:current={i === currentSlide}
				class:onedown={i === currentSlide - 1}
				class:twodown={i === currentSlide - 2}
				class:oneup={i === currentSlide + 1}
				class:twoup={i === currentSlide + 2}
			/>
		{/each}
	</div>
</div>

<style>
	.slider {
		position: relative;
		width: 100%;
		/* background-color: #222; */
	}
	.slide {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		/* align-items: center; */
		color: #fff;
		/* font-size: 7rem; */
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			"Open Sans",
			"Helvetica Neue",
			sans-serif;
		font-weight: 200;
	}
	.next,
	.prev {
		position: absolute;
		z-index: 0;
		top: 50%;
		transform: translateY(-50%);
		/* background: transparent; */
		border: 1px solid #fff;
		color: #fff;
		padding: 4px 10px;
		/* border-radius: 4px; */
		cursor: pointer;
	}
	.next {
		right: -30px;
	}
	.prev {
		left: -30px;
	}
	.nav {
		/* position: absolute; */
		bottom: 20px;
		left: 0;
		right: 0;
		height: 100px;
		z-index: 3;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.bubble {
		padding: 0;
		border: 0;
		height: 20px;
		width: 10px;
		border-radius: 100px;
		transition: all 0.3s ease-out;
		opacity: 0.2;
		cursor: pointer;
	}
	.current {
		height: 80px;
		opacity: 0.8;
	}
	.onedown,
	.oneup {
		height: 60px;
	}
	.twodown,
	.twoup {
		height: 40px;
	}
</style>
