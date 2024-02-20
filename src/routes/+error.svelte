<script>
	import { page } from '$app/stores';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
</script>

<section class="error mt-36 p-8 overflow-hidden">
	<div class="flex flex-col md:flex-row gap-6 md:gap-3 md:items-center md:justify-between">
		<div class="flex flex-col max-w-[900px] w-full">
			<div class="flex flex-col gap-4 text-center md:text-left md:mt-6">
				<h3 class="font-bold text-[8rem] md:text-[15rem] md:leading-[11rem]">{$page.status}</h3>
				<p class="tracking-wider text-3xl md:text-7xl sm:mx-auto w-full md:mx-0">
					Page not found.
				</p>
			</div>
			<div
				class="flex flex-col sm:flex-row sm:justify-center md:justify-normal gap-4 mt-6 md:mt-10"
			>
				<a
					href="/"
					class="w-full sm:w-auto sm:px-8 rounded-full text-lg bg-black hover:bg-transparent hover:text-black border-2 border-black text-white py-4 font-bold flex items-center justify-center gap-3 transition-all ease-linear"
				>
					Go home <span><RightArrow class="text-2xl mt-1" /></span>
				</a>
				<a
					href="/contact"
					class="w-full sm:w-auto sm:px-8 rounded-full text-lg bg-transparent hover:bg-[lightgreen] border-2 border-black text-black py-4 font-bold flex items-center justify-center gap-3 transition-all ease-linear"
				>
					Get in touch
				</a>
			</div>
		</div>
		<div class="w-full mx-auto md:ml-[-55px] md:mr-[-103px] sm:w-3/5 md:w-full hero-image">
			<img
				src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/t0uqkezbozpo6hizbisp"
				alt="Hero rocket"
				class="w-full h-full object-cover flex-1"
			/>
		</div>
	</div>
</section>
