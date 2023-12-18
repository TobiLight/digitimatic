<script lang="ts">
    import { onMount } from "svelte";
	import type { ObserverEventDetails, Options } from "svelte-inview";
	import { inview } from "svelte-inview";
	import { slide, fade } from "svelte/transition";

	let isInView: boolean;
	const options: Options = {
		rootMargin: "50px",
	};

	
</script>

<section
	use:inview={options}
	on:inview_change={(e) => {
		isInView = e.detail.inView;
	}}
	class="bg-black p-14 text-white"
>
	<div
	transition:fade={{
			delay: 500,
			duration: 600,
		}}
	 class={`${isInView ? 'animate__animated animate__fadeIn animate__slower' : 'animate__animated animate__fadeOut'}`}>
		<h1 class="text-center text-4xl font-bold">SIGNIFICANT ASSOCIATION</h1>

		<div id="clients" class="w-[80px] mt-2 rounded-full h-1 mx-auto bg-white"></div>

		<div class="grid mt-8 justify-center gap-6 items-center w-full">
			<p class="mb-6 text-center md:text-xl md:w-3/6 mx-auto">
				We take pride in our vast database, consisting of more than
				1,000 esteemed news organizations that have established
				familiarity with our brand and expertise. This invaluable
				resource empowers us to provide our customers with an unwavering
				commitment to exceptional service, ensuring an impressive 99.9%
				service reliability
			</p>
			<div class="md:hdden grid gap-y-4">
				<div
					class="grid grid-cols-3 justify-center gap-3 md:w-5/12 md:mx-auto items-center"
				>
					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-200 to-gray-500 rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/forbes-1.png"
							alt="Forbes"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure
						class="flex-none w-auto h-auto relative bg-white rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/dailymail.png"
							alt="Daily Mail"
							class="inset-0 w-fit h-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/yahoo.png"
							alt="Yahoo"
							class="inset-0 w-fit h-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>
				</div>

				<div
					class="grid grid-cols-3 justify-center gap-3 md:w-5/12 md:mx-auto items-center"
				>
					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/digital_journal-1.png"
							alt="Digital Journal"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/bloomberg-1.png"
							alt="Bloomberg"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-500 to-white rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/marketwatch.png"
							alt=""
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>
				</div>

				<div
					class="grid grid-cols-3 gap-3 md:w-5/12 md:mx-auto items-center"
				>
					<div class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/laweekly.jpg"
							alt="LA Weekly"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>

					<div
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-green-200 to-blue-300 rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/variety.png"
							alt="Variety"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>

					<div
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-200 to-gray-500 rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/benzinga-1.png"
							alt="Benzinga"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
				</div>
				<div
					class="grid grid-cols-3 gap-3 md:w-5/12 md:mx-auto items-center"
				>
					<div
						class="flex-none w-auto h-auto bg-gradient-to-r from-orange-200 to-red-300 relative rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/gq-1.png"
							alt="GQ"
							class="inset-0 w-auto h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
					<div class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/newyorkpost-1.png"
							alt="New York Post"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
					<div
						class="flex-none w-auto h-auto relative bg-white rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/nasdaq.jpg"
							alt="Nasdaq"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
				</div>

				<div
					class="grid grid-cols-2 gap-3 md:w-4/12 md:mx-auto items-center"
				>
					<div
						class="flex-none w-auto h-auto px-3 relative bg-white rounded-md"
					>
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/entrepreneur.png"
							alt="Entrepreneur"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
					<div class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://digitimatic.com/wp-content/uploads/2023/12/adweek-1.png"
							alt="ADWEEK"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<style>
	#clients {
		--animate-duration: 2.5s
	}
</style>