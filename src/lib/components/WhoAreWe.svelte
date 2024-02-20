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
			class="mt-10 text-5xl leading-[1.2] sm:leading-snug md:leading-[82px] md:text-7xl font-semibold md:font-bold"
		>
			A great company has a great <span class="team-behind whitespace-nowrap">team behind</span>
		</h2>
		<p class="text-lg md:text-xl">
			Behind Every Great Company Lies a Great Team. A synergized team, driven by passion and
			expertise, is the secret sauce for a company's triumph. Discover the magic of collaboration
			and shared goals
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
						In today's market, buyers are not only astute but also highly self aware. Our mission is
						to assist you in effortlessly captivating customers by positioning you as the
						unmistakable choice, utilizing the power of subconscious selling.
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
					<h2 class="text-2xl font-bold">Efficiency and Accountability</h2>
					<p class="text-lg">
						We will assume responsibility for securing the media coverage outlined in our plan. Our
						objective is to surpass the promised deliverables while ensuring a seamless and hassle
						free experience through our 'hands-off' approach.
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
					<h2 class="text-2xl font-bold">The shortcut to instant digital influence</h2>
					<p class="text-lg">
						Crafting unforgettable brand identities for emerging businesses, inspiring trailblazers
						for aspiring entrepreneurs, and empowering social media personalities for everyday users
						of online platforms. Digitimatic is a premier publicity company that specializes in
						delivering effective messaging solutions for businesses and individuals seeking to reach
						a wider audience.
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
						Embark on a journey of exponential growth with Digitimatic. Our strategic prowess
						extends beyond publicity, propelling businesses towards unparalleled success. Whether
						you're a startup seeking traction or an established entity aiming for expansion, we
						navigate the digital landscape to catalyze your growth.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
