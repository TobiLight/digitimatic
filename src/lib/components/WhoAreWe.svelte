<script lang="ts">
	import Handshake from '$lib/components/icons/Handshake.svelte';
	import Bulb from '$lib/components/icons/Bulb.svelte';
	import Gear from '$lib/components/icons/Gear.svelte';
	import Growth from '$lib/components/icons/Growth.svelte';
	import Globe from './icons/Globe.svelte';
	import Megaphone from './icons/Megaphone.svelte';
	import Quill from './icons/Quill.svelte';
	import PersonStar from './icons/PersonStar.svelte';
	import Triangle from './icons/Triangle.svelte';
</script>

<section id="who-we-are" class="mt-10 border-t-2 pt-24 pb-20 px-4 relative overflow-hidden">
	<h2 class="text-center text-xl md:text-2xl font-semibold">ABOUT US</h2>
	<div class="text-center sm:max-w-[600px] md:max-w-[900px] mx-auto flex flex-col gap-y-5">
		<h2
			class="mt-10 text-3xl sm:text-5xl !leading-[1.30] sm:!leading-[1.32] lg:leading-[86px] md:text-6xl font-semibold md:font-bold break-words"
		>
			Why Choose&nbsp;<span class="team-behind bg-black text-white">Digitimatic?</span>
		</h2>
		<p class="text-base leading-tight md:text-xl">
			At Digitimatic, we're a team of passionate digital marketing experts with a proven track
			record of success. We combine creativity, data-driven strategies, and cutting-edge tools to
			deliver exceptional results for our clients.
		</p>

		<div class="max-w-6xl grid">
			<div class="grid sm:grid-cols-2 lg:grid-cols-4 lg:justify-center w-full gap-4">
				<div class="p-4 w-full text-neutral-500 drop-shadow-xl bg-neutral-50">
					<div class="flex items-center justify-cente">
						<p class="text-base font-semibold text-neutral-700 leading-tight text-left">
							Proven Track Record
						</p>
					</div>
					<p class="mt-2 text-sm text-left lg:ext-center">
						We’ve helped countless brands land features in top-tier publications such as <b
							>Forbes</b
						>, <b>Business Insider</b>, <b>BBC</b>, <b>New York Times</b>, boosting their visibility
						and authority.
					</p>
				</div>
				<div class="p-4 w-full text-neutral-500 drop-shadow-xl bg-neutral-50">
					<div class="flex items-center justify-cente">
						<p class="text-base font-semibold text-neutral-700 leading-tight text-left">
							Tailored PR Strategy
						</p>
					</div>
					<p class="mt-2 text-sm text-left lg:ext-center">
						Every brand is unique, so we craft custom PR campaigns that align with your goals and
						target audience.
					</p>
				</div>
				<div class="p-4 w-full text-neutral-500 drop-shadow-xl bg-neutral-50">
					<div class="flex items-center justify-cente">
						<p class="text-base font-semibold text-neutral-700 leading-tight text-left">
							Exclusive Media Connections
						</p>
					</div>
					<p class="mt-2 text-sm text-left lg:ext-center">
						Our established relationships with leading journalists and editors ensure your story
						gets in front of the right eyes.
					</p>
				</div>
				<div class="p-4 w-full text-neutral-500 drop-shadow-xl bg-neutral-50">
					<div class="flex items-center justify-cente">
						<p class="text-base font-semibold text-neutral-700 leading-tight text-left">
							Results-Driven Approach
						</p>
					</div>
					<p class="mt-2 text-sm text-left lg:ext-center">
						From media placements to brand storytelling, we focus on measurable outcomes that grow
						your business.
					</p>
				</div>
			</div>
		</div>
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
		class="absolute lg:top-[37rem] max-w-[13%]"
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
		class="absolute lg:top-[37rem] right-0 max-w-[13%]"
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
					<Megaphone class="text-5xl text-purple-800" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-xl leading-tight font-bold">Press Features & Media Placement</h2>
					<p class="text-base leading-tight">
						Get featured in leading national and international media outlets. We help you understand
						buyer behavior to position your brand for success.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-sky-100 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<Quill class="text-5xl text-sky-800" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-xl leading-tight font-bold">Brand Storytelling</h2>
					<p class="text-base leading-tight">
						We craft compelling stories that resonate with your audience and the target publication.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-sky-100 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<PersonStar class="text-5xl text-sky-600" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-xl leading-tight font-bold">Thought Leadership Development</h2>
					<p class="text-base leading-tight">
						Position yourself as an expert in your field with customized PR strategies.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-purple-100 rounded-xl p-10 hover:scale-[105%] transition-all ease-linear">
			<div class="grid lg:flex items-start gap-4 lg:gap-8">
				<div class="icon">
					<Triangle class="text-5xl text-purple-600" />
				</div>
				<div class="flex flex-col gap-3">
					<h2 class="text-xl leading-tight font-bold">Crisis Management</h2>
					<p class="text-base leading-tight">
						Protect your reputation with proactive and responsive communication strategies.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
