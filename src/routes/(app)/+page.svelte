<script lang="ts">
	import { onMount } from 'svelte';
	import { isMenuOpen } from '../../stores/store';
	import WhoAreWe from '$lib/components/WhoAreWe.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import HeroRocket from '$lib/components/icons/hero-rocket.webp';
	import { slide } from 'svelte/transition';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';

	function smoothScroll(e: MouseEvent) {
		e.preventDefault();
		const targetId: string | null = (e.currentTarget as HTMLAnchorElement).getAttribute('href');

		const formattedTargetId: string | null = targetId?.startsWith('/#')
			? targetId.substring(1)
			: targetId;

		if (
			formattedTargetId &&
			(formattedTargetId.startsWith('/') || formattedTargetId.includes('https://'))
		) {
			// If it's a URL path, navigate to that URL
			window.location.href = formattedTargetId;
			return;
		}
		const targetElement: HTMLElement | null = document.querySelector(formattedTargetId || '');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function makeLinksSmooth() {
		const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav a');

		navLinks.forEach((link: HTMLAnchorElement) => {
			link.addEventListener('click', smoothScroll);
		});
	}

	onMount(() => {
		makeLinksSmooth();
		window.addEventListener('load', function () {
			console.log('Page fully loaded');
		});
		document.addEventListener('DOMContentLoaded', makeLinksSmooth);

		const pageSection = document.getElementById('main-page');

		if (!pageSection) {
			console.error('Could not find the page section element.');
			return;
		}
		const handleClick = () => {
			// Check if the menu is open and close it
			if ($isMenuOpen) isMenuOpen.set(false);
		};

		// Attach the click event listener to the section
		pageSection.addEventListener('click', handleClick);

		// Cleanup event listener on component destruction
		return () => {
			// cleanup;
			pageSection.removeEventListener('click', handleClick);
		};
	});

	let partners = [
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/c_crop,g_auto,h_0.30,w_0.80/digitimatic-media/flyyim4abdhkkqvvshvz.jpg',
			alt: 'Forbes'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/lguw8mnnq3lyvwdewocf',
			alt: 'Daily Mail'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/n5jgklxm23c3w7gczygc',
			alt: 'Yahoo'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/k85tgotc2uf2rsxz4cwk',
			alt: 'Digital Journal'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/fj6xhvipxtv6reofj1sv',
			alt: 'Bloomberg'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/zmout2pdtv3knac0857f',
			alt: 'MarketWatch'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/vqss4pdjdoumerbvjxcd',
			alt: 'LA Weekly'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/q1s3buxnfgqhlqgk60ot',
			alt: 'Variety'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/xghznttzqhqxtiwowrwh',
			alt: 'Nasdaq'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/c_crop,g_auto,h_300,w_300/digitimatic-media/mcansj0gc2dwostvjybg.jpg',
			alt: 'Benzinga'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/qkosnt3dtzmdq5yn9wmo',
			alt: 'Entrepreneur'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/zljstqe0ibc5ivcex7cd',
			alt: 'AdWeek'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/c_crop,g_auto,h_300,w_300/digitimatic-media/mrag5qogl7lhpg66b4yx.png',
			alt: 'GQ'
		},
		{
			src: 'https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/qz2ngis9tzthqxdksmnr',
			alt: 'New York Post'
		}
	];
</script>

<section class="mt-28 md:mt-0 px-4 py-8 overflow-hidden">
	<div class="flex flex-col lg:flex-row gap-6 lg:gap-14 md:items-center md:justify-between">
		<div class="flex flex-col max-w-[900px] w-full pt-10 lg:pt-5">
			<div class="font-semibold mx-auto md:mx-0 md:text-2xl md:flex items-center gap-x-3">
				<div class="hidden md:block w-20 h-[2px] bg-black"></div>
				<p>DIGITAL AGENCY</p>
			</div>
			<div class="flex flex-col gap-4 text-center lg:text-left lg:mt-6 lg:gap-6">
				<h1
					class="font-bold tracking-wide text-3xl leading-[37px] sm:mx-auto sm:text-[3.5rem] sm:leading-[65px] md:text-[2.8rem] lg:text-[3.5rem] lg:leading-[70px]"
				>
					Elevate Your Brand with Powerful Media Coverage
					<!-- <span class=" bg-black text-white break-words">
						<a href="/contact" class="underline">PR</a>,&nbsp;
						<a href="https://branding.digitimatic.com" class="underline">Branding</a>&nbsp;and
						Advertising solutions</span
					> -->
				</h1>
				<p class="tracking-wider text-xl sm:mx-auto w-full md:mx-0">
					At Digitimatic, we specialize in helping entrepreneurs, startups, and established brands
					secure impactful press features that drive real results. Whether you’re looking to build
					credibility, attract investors, or grow your audience, our PR and media placement services
					are designed to position you as a thought leader in your industry.
				</p>
			</div>
			<div
				class="flex flex-col sm:flex-row sm:justify-center lg:justify-normal gap-4 mt-6 md:mt-10"
			>
				<a
					title="Get Consultation"
					href="/contact"
					class="w-full sm:w-auto sm:px-8 rounded-full text-lg bg-black hover:bg-transparent hover:text-black border-2 border-black text-white py-4 font-bold flex items-center justify-center gap-3 transition-all ease-linear"
				>
					Get Consultation <span><RightArrow class="text-2xl mt-1" /></span>
				</a>
				<a
					title="Explore Our Services"
					href="https://digitimatic.com/media-placement"
					class="w-full sm:w-auto sm:px-8 rounded-full text-lg bg-transparent hover:bg-[lightgreen] border-2 border-black text-black py-4 font-bold flex items-center justify-center gap-3 transition-all ease-linear"
				>
					Explore Our services
				</a>
			</div>
		</div>
		<div
			class="w-full mx-auto md:ml-[-55px] md:mr-[-103px] sm:w-3/5 md:w-full hero-image aspect-square"
		>
			<img
				src={HeroRocket}
				alt="Digitmatic Hero"
				class="w-full h-full object-cover flex-1 aspect-square"
			/>
		</div>
	</div>
</section>

<WhoAreWe />

<section id="partners" class="border-t-2 pt-16 pb-20 px-4 relative overflow-hidden">
	<h2 class="text-center text-xl md:text-2xl font-semibold">Proven Results</h2>
	<div
		class="mt-10 md:mt-0 text-center sm:max-w-[600px] md:max-w-[800px] mx-auto flex flex-col gap-y-5"
	>
		<h2
			class="text-5xl leading-[1.2] sm:leading-snug md:leading-[82px] md:text-6xl font-semibold md:font-bold"
		>
			How We Helped Businesses Like Yours Grow
		</h2>
		<p class="text-lg md:text-xl">
			Our clients are our biggest advocates! We leverage our extensive network of media contacts to
			secure impactful placements that drive results for your brand.
		</p>
	</div>

	<div
		class="mt-6 flex flex-wrap justify-center gap-5 items-center mx-auto w-4/5 md:w-3/5 relative"
	>
		{#each partners as partner}
			<figure in:slide out:slide class="w-[100px] flex-none h-auto relative">
				<img
					src={partner.src}
					alt={partner.alt}
					class="inset-0 w-fit h-auto object-cover rounded-lg"
					loading="lazy"
				/>
			</figure>
		{/each}
	</div>
	<Testimonials />
</section>

<section class="py-10 bg-green-400">
	<div class="w-full max-w-full mx-auto px-4 text-center space-y-4">
		<p class="text-3xl lg:text-5xl font-bold">Ready to Make Headlines?</p>
		<div class="block">
			<p class="max-w-xl text-[1rem] lg:text-xl leading-tight mx-auto mb-4">
				Don’t wait for the perfect opportunity—create it. Contact us today to discover how we can
				help you win press coverage that accelerates your business growth.
			</p>

			<a
				href="/"
				class="w-fit px-3 py-1 font-semibold border border-transparent bg-black text-white rounded-full flex items-center justify-center mx-auto hover:-translate-y-1 transition-all ease-in duration-200 hover:bg-transparent hover:border-black hover:text-black"
				>Let's Get Started</a
			>
		</div>
	</div>
</section>

<style>
	.marketing-img {
		position: absolute;
		z-index: 1;
		margin-left: -24px;
		margin-right: -24px;
		padding-left: 15px;
		padding-right: 24px;
		width: 265px;
	}
	.marketing {
		z-index: -1;
		background-image: url('https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/zrwa7k0swsk7c6vviniq');
		background-position: 50% 100%;
		background-repeat: no-repeat;
		background-size: contain;
		margin-left: -24px;
		margin-right: -24px;
		padding-left: 24px;
		padding-right: 24px;
	}

	.hero-image {
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		width: 100%;
		max-width: 739px;
	}

	.themselves {
		z-index: -1;
		background-image: url('https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/ytl8zuzekuyau7b2txf2');
		background-position: 50% 100%;
		background-repeat: no-repeat;
		background-size: contain;
		margin-left: -24px;
		margin-right: -24px;
		padding-left: 24px;
		padding-right: 24px;
	}
</style>
