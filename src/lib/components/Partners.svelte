<script lang="ts">
	import type { Options } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import Partner from '$lib/components/icons/Partner.svelte'

	let isInView: boolean;
	const options: Options = {
		rootMargin: '50px'
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
			duration: 600
		}}
		class={`${
			isInView
				? 'animate__animated animate__fadeIn animate__slower'
				: 'animate__animated animate__fadeOut'
		}`}
	>
		<div class="grid gap-2">
			<div class="flex justify-center items-center w-36 h-36 mx-auto rounded-full border-2 border-green-500">
				<Partner class="text-green-500 w-28 h-28" />
			</div>
			<h1 class="text-center text-4xl font-bold text-green-500">SIGNIFICANT ASSOCIATION</h1>
		</div>

		<div id="partners" class="w-[80px] mt-2 rounded-full h-1 mx-auto bg-green-500"></div>

		<div class="grid mt-8 justify-center gap-6 items-center w-full">
			<p class="mb-6 text-center md:text-xl md:w-3/6 mx-auto">
				We take pride in our vast database, consisting of more than 1,000 esteemed news
				organizations that have established familiarity with our brand and expertise. This
				invaluable resource empowers us to provide our customers with an unwavering commitment to
				exceptional service, ensuring an impressive 99.9% service reliability
			</p>
			<div class="md:hdden grid gap-y-4">
				<div class="grid grid-cols-3 justify-center gap-3 md:w-5/12 md:mx-auto items-center">
					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-200 to-gray-500 rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/c_crop,g_auto,h_0.30,w_0.80/digitimatic-media/flyyim4abdhkkqvvshvz.jpg"
							alt="Forbes"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure class="flex-none w-auto h-auto relative bg-white rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/lguw8mnnq3lyvwdewocf"
							alt="Daily Mail"
							class="inset-0 w-fit h-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/n5jgklxm23c3w7gczygc"
							alt="Yahoo"
							class="inset-0 w-fit h-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>
				</div>

				<div class="grid grid-cols-3 justify-center gap-3 md:w-5/12 md:mx-auto items-center">
					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/k85tgotc2uf2rsxz4cwk"
							alt="Digital Journal"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/fj6xhvipxtv6reofj1sv"
							alt="Bloomberg"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>

					<figure
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-500 to-white rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/zmout2pdtv3knac0857f"
							alt=""
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</figure>
				</div>

				<div class="grid grid-cols-3 gap-3 md:w-5/12 md:mx-auto items-center">
					<div class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/vqss4pdjdoumerbvjxcd"
							alt="LA Weekly"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>

					<div
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-green-200 to-blue-300 rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/q1s3buxnfgqhlqgk60ot"
							alt="Variety"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>

					<div
						class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-200 to-gray-500 rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/xghznttzqhqxtiwowrwh"
							alt="Nasdaq"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
				</div>
				<div class="grid grid-cols-3 gap-3 md:w-5/12 md:mx-auto items-center">
					<div
						class="flex-none w-auto h-auto bg-gradient-to-r from-orange-200 to-red-300 relative rounded-md"
					>
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/c_crop,g_auto,h_300,w_300/digitimatic-media/mrag5qogl7lhpg66b4yx.png"
							alt="GQ"
							class="inset-0 w-auto h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
					<div class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/qz2ngis9tzthqxdksmnr"
							alt="New York Post"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
					<div class="flex-none w-auto h-auto relative bg-white rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/c_crop,g_auto,h_300,w_300/digitimatic-media/mcansj0gc2dwostvjybg.jpg"
							alt="Benzinga"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-3 md:w-4/12 md:mx-auto items-center">
					<div class="flex-none w-auto h-auto px-3 relative bg-white rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/qkosnt3dtzmdq5yn9wmo"
							alt="Entrepreneur"
							class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg"
							loading="lazy"
						/>
					</div>
					<div class="flex-none w-auto h-auto relative rounded-md">
						<img
							src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/zljstqe0ibc5ivcex7cd"
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
	#partners {
		--animate-duration: 2.5s;
	}
</style>
