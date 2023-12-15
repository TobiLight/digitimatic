<script lang="ts">
	import Bulb from '$lib/components/icons/Bulb.svelte';
	import Handshake from '$lib/components/icons/Handshake.svelte';
	import ClockwiseCircle from '$lib/components/icons/ClockwiseCircle.svelte';
	import Gear from '$lib/components/icons/Gear.svelte';
</script>

<section id="who-are-we" class="who-are-we px-8 py-16 bg-black text-white">
	<h1 class="text-4xl font-extrabold mt-8 mb-4 text-center md:text-right">ABOUT US</h1>
	<div class="w-[120px] mb-16 h-1 bg-white mx-auto md:mx-0 md:float-right"></div>
	<div class="mt-16 text-left">
		<div class="ml-auto grid gap-4">
			<Handshake class="w-14 h-14 text-green-500" />
			<h1
				class="text-4xl text-green-500 sm:text-7xl md:text-[90px] font-bold md:leading-[90px] tracking-wider"
			>
				The shortcut to instant digital influence.
			</h1>
		</div>

		<p class="mt-6 text-base sm:text-xl md:text-2xl md:w-3/5">
			Crafting unforgettable brand identities for emerging businesses, inspiring trailblazers for
			aspiring entrepreneurs, and empowering social media personalities for everyday users of online
			platforms. Digitimatic is a premier publicity company that specializes in delivering effective
			messaging solutions for businesses and individuals seeking to reach a wider audience.
		</p>
	</div>
	<div class="mt-16 text-right border-t border-gray-500 pt-14">
		<div class="ml-auto grid gap-4">
			<Bulb class="w-14 h-14 ml-auto text-red-500" />
			<h1
				class="text-red-500 text-4xl sm:text-7xl md:text-[5.6rem] font-bold md:leading-[90px] tracking-wider"
			>
				Understanding Consumer Buying Behavior
			</h1>
		</div>

		<p class="mt-6 text-base sm:text-xl md:text-2xl md:w-3/5 ml-auto">
			In today's market, buyers are not only astute but also highly self aware. Our mission is to
			assist you in effortlessly captivating customers by positioning you as the unmistakable
			choice, utilizing the power of subconscious selling
		</p>
	</div>
	<div class="mt-16 text-left border-t border-gray-500 pt-14">
		<div class="ml-auto grid gap-4">
			<Gear class="w-14 h-14 text-yellow-500" />
			<h1
				class="text-4xl text-yellow-500 sm:text-7xl md:text-[90px] font-bold md:leading-[90px] tracking-wider"
			>
				Efficiency and Accountability.
			</h1>
		</div>

		<p class="mt-6 text-base sm:text-xl md:text-2xl md:w-3/5">
			We will assume responsibility for securing the media coverage outlined in our plan. Our
			objective is to surpass the promised deliverables while ensuring a seamless and hasslefree
			experience through our 'hands-off' approach.
		</p>
	</div>
</section>
