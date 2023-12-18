<script lang="ts">
	import type { Options } from "svelte-inview";
	import { inview } from "svelte-inview";
	import { slide, fade, fly } from "svelte/transition";

	let isInView: boolean;
	const options: Options = {
		rootMargin: "50px",
	};
</script>

<section
	id="work-with-us"
	class="work-with-us bg-black border-t-2 border-gray-500 p-8 relative"
	use:inview={options}
	on:inview_change={(e) => {
		isInView = e.detail.inView;
	}}
>
	<div class="bg-blak z-[0] relative opacity-80">
		<h1 class="text-white font-bold text-center text-2xl">WORK WITH US</h1>
		<div class="w-[80px] mt-2 rounded-full h-1 mx-auto bg-white"></div>
		<form
			transition:fade={{
				delay: 500,
				duration: 600,
			}}
			action="#"
			method="post"
			class={`${
				isInView
					? "animate__animated animate__fadeIn animate__slow"
					: "animate__animated animate__fadeOut"
			} relative z-[0] mt-10 flex flex-col justify-center w-full md:w-3/5 lg:w-3/6 mx-auto`}
		>
			<div class="form-title md:mt-8">
				<h1 class="text-4xl text-white font-extrabold text-center">
					Get in touch with us.
				</h1>
			</div>
			<div class="flex flex-row items-center gap-5 md:gap-4 mt-10">
				<label for="fullname" class="w-full">
					<input
						type="text"
						placeholder="Full name"
						class="bg-white p-4 rounded-md text-black w-full"
					/>
				</label>
				<label for="phone" class="w-full">
					<input
						type="text"
						placeholder="Phone Number"
						class="bg-white p-4 rounded-md text-black w-full"
					/>
				</label>
			</div>
			<div class="flex flex-row items-center gap-5 md:gap-4 mt-4">
				<label for="email" class="w-full">
					<input
						type="email"
						placeholder="Email Address"
						class="bg-white p-4 rounded-md text-black w-full"
					/>
				</label>
				<label for="company" class="w-full">
					<input
						type="text"
						placeholder="Company"
						class="bg-white p-4 rounded-md text-black w-full"
					/>
				</label>
			</div>
			<div class="mt-4">
				<textarea
					name="message"
					id=""
					cols="30"
					rows="5"
					class="w-full rounded-md p-4 bg-white"
					placeholder="How can we help you?"
				></textarea>
			</div>
			<div class="flex justify-center mt-3">
				<button
					class="w-auto rounded-md px-10 bg-blue-500 text-white p-4 text-lg font-bold"
					>Send now</button
				>
			</div>
		</form>
	</div>
</section>

<style>
	form {
		--animate-duration: 2.5s
	}
</style>