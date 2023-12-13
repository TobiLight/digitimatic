<script lang="ts">
	import TopHeader from '$lib/components/shared/TopHeader.svelte';
	import MenuIcon from '$lib/components/icons/Menu.svelte';
	import CloseIcon from '$lib/components/icons/Close.svelte';
	import '../app.css';
	import { isMenuOpen } from '../stores/store';
	import Footer from '$lib/components/shared/Footer.svelte';


	function toggleMenu() {
		isMenuOpen.set(!$isMenuOpen);
	}
</script>

<header class="sticky top-0 z-[1]">
	<TopHeader />
	<nav class="bg-white border-t px-3 py-5 flex items-center justify-between shadow-lg">
		<a on:click={() => isMenuOpen.set(false)} href="/" class="logo">DIGITIMATIC</a>
		<button
			type="button"
			class="flex md:hidden items-center justify-center p-1 rounded-md border border-gray-600 hover:border-green-600 hover:bg-green-300 cursor-pointer"
			on:click={toggleMenu}
		>
			{#if $isMenuOpen}
				<CloseIcon class="text-gray-500 text-2xl" />
			{:else}
				<MenuIcon class="text-gray-500 text-2xl" />
			{/if}
		</button>
		<ul class="nav-links hidden md:flex items-center gap-10 relative">
			<li><a href="#who-we-are">About Us</a></li>
			<li><a href="#clients">Clients</a></li>
			<li><a href="#testimonials">Testimonials</a></li>
			<li><a href="#work-with-us">Contact</a></li>
		</ul>
	</nav>
		<nav
			id="mobileMenu"
			class={`${$isMenuOpen ? 'left-0' : 'left-[-100%]'} bg-white fixed z-[2] border-t py-8 px-4 w-3/5 shadow-lg overflow-hidden h-full md:hidden transition-all duration-[.7s] ease-out`}
		>
			<ul class="nav-links flex flex-col gap-14 h-full">
				<li><a href="#about-us">About Us</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#blog">Blog</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
</header>

<slot />

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
