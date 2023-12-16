<script lang="ts">
	import Bulb from "$lib/components/icons/Bulb.svelte";
	import Handshake from "$lib/components/icons/Handshake.svelte";
	import ClockwiseCircle from "$lib/components/icons/ClockwiseCircle.svelte";
	import Gear from "$lib/components/icons/Gear.svelte";
	import type { ObserverEventDetails, Options } from "svelte-inview";
	import { inview } from "svelte-inview";
	import { slide, fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	let isInView: boolean;
	const options: Options = {
		rootMargin: "50px",
	};

	const aboutSection = {
		about1: false,
		about2: false,
		about3: false,
	};
</script>

<section id="who-are-we" class="who-are-we px-8 py-16 bg-black text-white">
	<div
		use:inview={options}
		on:inview_change={(e) => {
			isInView = e.detail.inView;
		}}
	>
		{#if isInView}
			<h1
				transition:slide={{
					delay: 500,
					duration: 600,
				}}
				class="text-4xl font-extrabold mt-8 mb-4 text-center md:text-right"
			>
				About Us
			</h1>
			<div
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class="w-[120px] mb-16 h-1 bg-white mx-auto md:mx-0 md:float-right"
			></div>
		{/if}
	</div>

	<div
		use:inview={options}
		on:inview_change={(e) => {
			aboutSection.about1 = e.detail.inView;
		}}
		class="mt-16 text-left"
	>
		{#if aboutSection.about1}
			<div
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class={"ml-auto grid gap-4"}
			>
				<Handshake class="w-14 h-14 md:w-28 md:h-28 text-green-500" />
				<h1
					class="text-4xl text-green-500 sm:text-7xl md:text-[90px] font-bold md:leading-[90px] tracking-wider"
				>
					The shortcut to instant digital influence.
				</h1>
			</div>

			<p
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class="mt-6 text-base sm:text-xl md:text-2xl md:w-3/5"
			>
				Crafting unforgettable brand identities for emerging businesses,
				inspiring trailblazers for aspiring entrepreneurs, and
				empowering social media personalities for everyday users of
				online platforms. Digitimatic is a premier publicity company
				that specializes in delivering effective messaging solutions for
				businesses and individuals seeking to reach a wider audience.
			</p>
		{/if}
	</div>
	<hr class="my-14 bg-gray-500" />
	<div
		use:inview={options}
		on:inview_change={(e) => {
			aboutSection.about2 = e.detail.inView;
		}}
		class="mt-16 text-right"
	>
		{#if aboutSection.about2}
			<div
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class="ml-auto grid gap-4"
			>
				<Bulb class="w-14 h-14 md:w-28 md:h-28 ml-auto text-red-500" />
				<h1
					class="text-red-500 text-4xl sm:text-7xl md:text-[5.6rem] font-bold md:leading-[90px] tracking-wider"
				>
					Understanding Consumer Buying Behavior
				</h1>
			</div>

			<p
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class="mt-6 text-base sm:text-xl md:text-2xl md:w-3/5 ml-auto"
			>
				In today's market, buyers are not only astute but also highly
				self aware. Our mission is to assist you in effortlessly
				captivating customers by positioning you as the unmistakable
				choice, utilizing the power of subconscious selling
			</p>
		{/if}
	</div>

	<hr class="my-14 bg-gray-500" />

	<div
		use:inview={options}
		on:inview_change={(e) => {
			aboutSection.about3 = e.detail.inView;
		}}
		class={"mt-16 text-left"}
	>
		{#if aboutSection.about3}
			<div
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class="ml-auto grid gap-4"
			>
				<Gear class="w-14 h-14 md:w-28 md:h-28 text-yellow-500" />
				<h1
					class="text-4xl text-yellow-500 sm:text-7xl md:text-[90px] font-bold md:leading-[90px] tracking-wider"
				>
					Efficiency and Accountability.
				</h1>
			</div>

			<p
				transition:fade={{
					delay: 500,
					duration: 600,
				}}
				class="mt-6 text-base sm:text-xl md:text-2xl md:w-3/5"
			>
				We will assume responsibility for securing the media coverage
				outlined in our plan. Our objective is to surpass the promised
				deliverables while ensuring a seamless and hassle free
				experience through our 'hands-off' approach.
			</p>
		{/if}
	</div>
</section>
