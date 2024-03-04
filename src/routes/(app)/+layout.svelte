<script lang="ts">
	import MenuIcon from '$lib/components/icons/Menu.svelte';
	import WorkWithUs from '$lib/components/WorkWithUs.svelte';
	import CloseIcon from '$lib/components/icons/Close.svelte';
	import '../../app.css';
	import { isMenuOpen } from '../../stores/store';
	import Footer from '$lib/components/shared/Footer.svelte';
	import 'animate.css';

	function toggleMenu() {
		isMenuOpen.set(!$isMenuOpen);
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Grow Your Brand & Attract Customers with Award-Winning PR, Branding & Advertising. Digitimatic - Your Digital Marketing Partner. Contact Us for a Free Consultation"
	/>
	<title>Digitimatic: PR, Branding & Advertising Solutions </title>
</svelte:head>

<header class="fixed bg-white w-full top-0 z-[999] 2xl:bg-gray-200">
	<nav
		class="border-t p-3 flex items-center justify-between shadow-lg h-auto 2xl:w-3/4 2xl:mx-auto 2xl:bg-white"
	>
		<a
			on:click={() => isMenuOpen.set(false)}
			href="/"
			class="logo w-32 h-12 flex-none relative bg-black p-2 rounded-md"
		>
			<img
				src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/jyhuiubuywqacrjeptfw"
				alt="Digitimatic"
				class="inset-0 w-full h-full object-cover"
				loading="lazy"
			/>
		</a>
		<button
			type="button"
			class="flex lg:hidden items-center justify-center p-1 rounded-md border border-black cursor-pointer"
			on:click={toggleMenu}
		>
			{#if $isMenuOpen}
				<CloseIcon class="text-2xl" />
			{:else}
				<MenuIcon class="text-2xl" />
			{/if}
		</button>
		<ul class="nav-links hidden lg:flex items-center gap-10 relative">
			<li><a href="/#who-we-are">About Us</a></li>
			<li><a href="/#partners">Partners</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a target="_blank" href="/media-placement">Services</a></li>
			<li><a href="/#testimonials">Testimonials</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
	<nav
		id="mobileMenu"
		class={`${
			$isMenuOpen ? 'h-[250px] py-8' : 'h-0 py-0'
		} bg-white font-semibold fixed z-[3] border-t-2 w-full px-4 shadow-lg overflow-hidden lg:hidden transition-all duration-[.7s] ease-out`}
	>
		<ul class="nav-links flex flex-col items-center gap-14 h-full">
			<li>
				<a
					target="_blank"
					on:click={() => isMenuOpen.set(false)}
					href="https://branding.digitimatic.com">Branding</a
				>
			</li>
			<li>
				<a
					target="_blank"
					on:click={() => isMenuOpen.set(false)}
					href="/media-placement">Media Placement</a
				>
			</li>
			<li>
				<a on:click={() => isMenuOpen.set(false)} href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>

<main id="main-page" class="min-h-screen mt-[70px]">
	<div class="2xl:bg-white 2xl:w-3/4 2xl:mx-auto 2xl:shadow-xl min-h-[inherit] relative">
		<slot />
		<WorkWithUs />
	</div>
</main>
<Footer />

<style>
	.nav-links a {
		padding: 0.5rem 1rem;
		position: relative;
		background: linear-gradient(
			to right,
			transparent 0%,
			transparent 50%,
			lightgreen 50%,
			lightgreen 100%
		);
		background-size: 200% 100%;
		transition: background-position 0.3s;
		border-radius: 1.3rem;
	}

	.nav-links a:hover {
		background-position: -100% 0;
	}
</style>
