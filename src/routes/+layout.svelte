<script lang="ts">
	import TopHeader from "$lib/components/shared/TopHeader.svelte";
	import MenuIcon from "$lib/components/icons/Menu.svelte";
	import CloseIcon from "$lib/components/icons/Close.svelte";
	import "../app.css";
	import { isMenuOpen } from "../stores/store";
	import Footer from "$lib/components/shared/Footer.svelte";
	import "animate.css";
	import { inview } from "svelte-inview";

	function toggleMenu() {
		isMenuOpen.set(!$isMenuOpen);
	}

	let isInView: boolean;
  const options = {};
</script>

<header class="fixed w-full top-0 z-[1]">
	<TopHeader />
	<nav
		class="bg-black text-white border-t px-3 py-5 flex items-center justify-between shadow-lg h-[113px]"
	>
		<a
			on:click={() => isMenuOpen.set(false)}
			href="/"
			class="logo w-32 flex-none relative"
		>
			<img
				src="https://digitimatic.com/wp-content/uploads/2023/12/digitimatic.png"
				alt="Digitimatic"
				class="inset-0 w-full h-full object-cover rounded-lg"
				loading="lazy"
			/>
		</a>
		<button
			type="button"
			class="flex md:hidden items-center justify-center p-1 rounded-md border border-gray-600 hover:border-gray-600 hover:bg-gray-300 cursor-pointer"
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
		class={`${
			$isMenuOpen ? "left-0" : "left-[-100%]"
		} bg-black text-white fixed z-[3] border-t border-gray-500 py-8 px-4 w-3/5 shadow-lg overflow-hidden h-full md:hidden transition-all duration-[.7s] ease-out`}
	>
		<ul class="nav-links flex flex-col gap-14 h-full">
			<li><a href="#who-we-are">About Us</a></li>
			<li><a href="#clients">Clients</a></li>
			<li><a href="#testimonials">Testimonials</a></li>
			<li><a href="#work-with-us">Contact</a></li>
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
