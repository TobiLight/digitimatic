<script lang="ts">
	import { onMount } from "svelte";
	import { isMenuOpen } from "../stores/store";
	import WorkWithUs from "$lib/components/WorkWithUs.svelte";
	import WhoAreWe from "$lib/components/WhoAreWe.svelte";
	import Clients from "$lib/components/Clients.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
	import { inview } from "svelte-inview";

	onMount(() => {
		// type();
		// window.addEventListener("scroll", reveal);
		// reveal();

		const pageSection = document.getElementById("main-page");

		if (!pageSection) {
			console.error("Could not find the page section element.");
			return;
		}
		const handleClick = () => {
			// Check if the menu is open and close it
			if ($isMenuOpen) isMenuOpen.set(false);
		};

		// Attach the click event listener to the section
		pageSection.addEventListener("click", handleClick);

		// Cleanup event listener on component destruction
		return () => {
			// cleanup;
			pageSection.removeEventListener("click", handleClick);
		};
	});
</script>

<svelte:head>
	<title>Digitimatic</title>
</svelte:head>

<main id="main-page" class="min-h-screen mt-[112px] md:mt-[157px]">
	<section
		class="max-h-[700px] w-full bg-black bg-fixed bg-[url('https://digitimatic.com/wp-content/uploads/2023/12/bg-scaled.jpg')]"
	>
		<div
			class="p-4 h-[400px] md:h-[700px] flex flex-col justify-center opacity-70 bg-back"
		>
			<h1
				class=" text-white text-5xl sm:text-6xl leading-[initial] sm:leading-normal md:text-[90px] font-bold md:leading-[initial] sm:ml-8"
			>
				High Quality Media Coverage
			</h1>
			<div class="text-white w-3/4 my-8 text-lg md:text-2xl sm:ml-8">
				<p>
					We have honed the publication process to the very last
					detail. Putting an emphasis on efficiency and simplicity
					without compromising quality.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-5">
			<div class="bg-green-500 p-1"></div>
			<div class="bg-yellow-500 p-1"></div>
			<div class="bg-orange-500 p-1"></div>
			<div class="bg-red-500 p-1"></div>
			<div class="bg-gray-500 p-1"></div>
		</div>
	</section>
	<WhoAreWe />
	<hr class="border-t-2 border-gray-600" />
	<Clients />
	<hr class="border-t-2 border-gray-600" />
	<Testimonials />
	<hr class="border-t-2 border-gray-600" />
	<WorkWithUs />
</main>
