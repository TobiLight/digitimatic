<script lang="ts">
	import type { Options } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';

	let isInView: boolean;
	const options: Options = {
		rootMargin: '50px'
	};
</script>

<section
	id="work-with-us"
	class={`${
			isInView
				? 'animate__animated animate__fadeIn animate__slow'
				: 'animate__animated animate__fadeOut'
		} work-with-us absolute left-0 right-0 bottom-[-120px] xs:bottom-[-140px] bg-[lightgreen] border-4 border-green-500 p-10 lg:p-16 w-11/12 xs:w-3/4 sm:w-4/5 md:w-2/3 xl:w-1/2 mx-auto rounded-xl grid items-center`}
	use:inview={options}
	on:inview_change={(e) => {
		isInView = e.detail.inView;
	}}
>
		<div class="grid justify-center lg:grid-cols-2 items-center lg:justify-between gap-6 md:gap-10">
			<p
				class="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-center lg:text-left sm:max-w-[350px] md:max-w-[600px]"
			>
				Get A Personalized Quote To Unlock Your Growth Potential
			</p>
			<a
				href="/contact"
				class="w-fit place-self-center lg:place-self-center rounded-full text-lg bg-black hover:bg-transparent hover:text-black border-2 border-black text-white p-4 font-bold flex items-center justify-center gap-3 transition-all ease-linear"
			>
				Start Your Growth <span><RightArrow class="text-2xl mt-1" /></span>
			</a>
		</div>
</section>
