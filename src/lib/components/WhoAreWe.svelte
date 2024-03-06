<script lang="ts">
	import Handshake from '$lib/components/icons/Handshake.svelte';
	import Bulb from '$lib/components/icons/Bulb.svelte';
	import Gear from '$lib/components/icons/Gear.svelte';
	import Growth from '$lib/components/icons/Growth.svelte';
</script>

<section id="who-we-are" class="mt-10 border-t-2 pt-24 pb-20 px-4 relative overflow-hidden">
	<h2 class="text-center text-xl md:text-2xl font-semibold">ABOUT US</h2>
	<div class="text-center sm:max-w-[600px] md:max-w-[800px] mx-auto flex flex-col gap-y-5">
		<h2
			class="mt-10 text-5xl !leading-[1.30] sm:!leading-[1.32] lg:leading-[86px] md:text-6xl font-semibold md:font-bold"
		>
			The Digital Experts Behind <span class="team-behind bg-black text-white"> Your Brand's Success</span>
		</h2>
		<p class="text-lg md:text-xl">
			At Digitimatic, we're a team of passionate digital marketing experts with a proven track record of success. We combine creativity, data-driven strategies, and cutting-edge tools to deliver exceptional results for our clients.
		</p>
	</div>
	<div
		class="absolute top-10 max-w-[13%]"
		style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(119.113deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1; will-change: transform;"
	>
		<div class="image-wrapper">
			<img
				src="https://assets-global.website-files.com/6316200a92cc0efb7ac10dbc/63169d6d553f413a311cda80_shape-3-card-cta-v3-rocket-template.svg"
				loading="eager"
				alt=""
				class="object-cover w-full h-full"
			/>
		</div>
	</div>
	<div
		class="absolute top-16 right-0 max-w-[13%]"
		style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(199.62deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1; will-change: transform;"
	>
		<div class="image-wrapper">
			<img
				src="https://assets-global.website-files.com/6316200a92cc0efb7ac10dbc/63169d6dd3e0521025f94707_shape-1-card-cta-v3-rocket-template.svg"
				loading="eager"
				alt=""
				class="object-cover w-full h-full"
			/>
		</div>
	</div>
	<div
		class="absolute sm:top-[28rem] md:top-[30rem] max-w-[13%]"
		style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(199.62deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1; will-change: transform;"
	>
		<div class="image-wrapper">
			<img
				src="https://assets-global.website-files.com/6316200a92cc0efb7ac10dbc/63169d6dd3e0521025f94707_shape-1-card-cta-v3-rocket-template.svg"
				loading="eager"
				alt=""
				class="object-cover w-full h-full"
			/>
		</div>
	</div>
	<div
		class="absolute sm:top-[26rem] md:top-[28rem] right-0 max-w-[13%]"
		style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(119.113deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1; will-change: transform;"
	>
		<div class="image-wrapper">
			<img
				src="https://assets-global.website-files.com/6316200a92cc0efb7ac10dbc/63169d6d553f413a311cda80_shape-3-card-cta-v3-rocket-template.svg"
				loading="eager"
				alt=""
				class="object-cover w-full h-full"
			/>
		</div>
	</div>
	<div class="grid lg:grid-cols-2 items-stretch gap-10 justify-between relative mt-[6rem] xs:mt-40">
		<div class="bg-purple-200 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<Bulb class="text-7xl text-purple-800" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-2xl font-bold">Understanding Consumer Buying Behavior</h2>
					<p class="text-lg">
						We help you understand buyer behavior to position your brand for success.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-sky-100 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<Gear class="text-7xl text-sky-800" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-2xl font-bold">Guaranteed Media Coverage</h2>
					<p class="text-lg">
						We take ownership of securing placements and exceeding expectations.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-sky-100 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<Handshake class="text-7xl text-sky-600" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-2xl font-bold">We Elevate Your Online Presence</h2>
					<p class="text-lg">
						We create impactful brands for businesses and empower individuals to thrive on social media.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-purple-100 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<Growth class="text-7xl text-purple-600" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-2xl font-bold">Paving paths to prosperity</h2>
					<p class="text-lg">
						 We craft personalized digital marketing strategies to fuel growth, regardless of your stage. <span class="font-semibold"> For startups, we help you launch with a bang </span> by developing targeted strategies to get your new venture off the ground and build a strong brand foundation. <span class="font-semibold"> For established businesses, we help you scale new heights </span> by leveraging data-driven insights to optimize your marketing efforts and propel your company's growth.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
