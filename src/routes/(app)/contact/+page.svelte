<script lang="ts">
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Facebook from '$lib/components/icons/FacebookAlt.svelte';
	import Twitter from '$lib/components/icons/TwitterAlt.svelte';
	import Instagram from '$lib/components/icons/InstagramAlt.svelte';
	import Envelope from '$lib/components/icons/Envelope.svelte';
	import Loading from '$lib/components/icons/Loading.svelte';
	import { deserialize, applyAction } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2';
	import { PUB_RECAPTCHA_SITE_KEY } from '$env/static/public';

	let loading: boolean = false;
	let formEl: HTMLFormElement;
	export let actionData: {
		message: string;
		success: boolean;
		email?: string;
		name?: string;
		businessName?: string;
		budget?: string;
		description?: string;
	} | null;
	const userTracker = {
		promise: null as Promise<CustomEvent> | null,
		resolve: null as ((value: CustomEvent) => void) | null,
		reject: null as ((reason?: any) => void) | null,
		getPromise() {
			if (!this.promise) {
				this.promise = new Promise<CustomEvent>((res, rej) => {
					this.resolve = res;
					this.reject = rej;
				});
			}
			return this.promise;
		},
		reset() {
			this.promise = null;
			this.resolve = null;
			this.reject = null;
		}
	};

	async function handleSubmit(event: { currentTarget: EventTarget & HTMLFormElement }) {
		console.log('launching recaptcha');
		recaptcha.execute();

		console.log('pending for google response');
		const ev = await Promise.resolve(observer);

		const recaptchaToken = ev.detail?.token ? ev.detail.token : false;

		if (!recaptchaToken) {
			console.log('recaptcha is NOT OK');
			return false;
		}

		console.log('token retrieved', recaptchaToken);
		actionData = null;
		loading = true;
		const data = new FormData(event.currentTarget);

		const req = await fetch('/api/contact', {
			method: 'POST',
			body: data
		});

		const res = (await req.json()) as {
			message: string;
			success: boolean;
			email?: string;
			name?: string;
			businessName?: string;
			budget?: string;
			description?: string;
		};

		actionData = {
			...res
		};

		loading = false;

		if (res.success) return formEl.reset();

		return;
	}

	const onCaptchaReady = (event) => {
		console.log('recaptcha init has completed.');
		/*
     │You can enable your form button here.
     */
	};

	const onCaptchaSuccess = (event) => {
		observer.userTracker.resolve(event);
		console.log('token received: ' + event.detail.token);
		/*
     │If using checkbox method, you can attach your
     │form logic here, or dispatch your custom event.
     */
	};

	const onCaptchaError = (event) => {
		console.log(PUB_RECAPTCHA_SITE_KEY, 'recaptcha init has failed.', event);
		/*
     │Usually due to incorrect siteKey.
     |Make sure you have the correct siteKey..
     */
	};

	const onCaptchaExpire = (event) => {
		console.log('recaptcha api has expired');
		/*
     │Normally, you wouldn't need to do anything.
     │Recaptcha should reinit itself automatically.
     */
	};

	const onCaptchaOpen = (event) => {
		console.log('google decided to challange the user');
		/*
     │This fires when the puzzle frame pops.
     */
	};

	const onCaptchaClose = (event) => {
		console.log('google decided to challange the user');
		/*
     │This fires when the puzzle frame closes.
     │Usually happens when the user clicks outside
     |the modal frame.
     */
	};
</script>

<svelte:head>
	<meta
		name="description"
		content="Ready to elevate your brand presence? Contact us today for innovative PR, Branding, and Advertising solutions tailored to your needs."
	/>
	<title>Contact Us - Digital Agency | PR, Branding, Advertising Solutions</title>
</svelte:head>

<section class="mt-28 md:mt-0 px-4 pt-8 pb-72 md:pb-54 overflow-hidden">
	<div
		class="flex flex-col lg:flex-row gap-6 lg:gap-10 md:gap-3 md:items-center md:justify-between"
	>
		<div class="flex flex-col max-w-[900px] w-full">
			<div
				class="mb-2 font-semibold text-lg mx-auto lg:mx-0 md:text-2xl md:flex items-center gap-x-3"
			>
				<div class="hidden lg:block w-20 h-[2px] bg-black"></div>
				<p>CONTACT US</p>
			</div>
			<div class="flex flex-col gap-4 text-center lg:text-left md:mt-6 md:gap-6">
				<h1
					class="font-bold tracking-wide text-3xl leading-[37px] sm:mx-auto sm:text-[3.5rem] sm:leading-[65px] md:text-[2.8rem] lg:text-[3.5rem] md:leading-[60px] md:mx-0"
				>
					Get in touch with us today!
				</h1>
				<p class="tracking-wider text-lg sm:mx-auto w-full md:mx-0 font-semibold">
					Reach out and elevate your brand presence! Contact us now for innovative PR, Branding, and
					Advertising solutions tailored to your needs. Let's embark on a journey to amplify your
					digital impact. Your success story starts with a simple message – connect with us today!
				</p>
			</div>
			<div class="flex flex-row justify-center lg:justify-normal gap-4 mt-6 md:mt-10">
				<a
					href="https://www.facebook.com/digitimatic"
					class="p-3 rounded-full bg-black text-white text-center hover:bg-[lightgreen] hover:translate-y-[-5px] transition-all ease-linear"
				>
					<Facebook />
				</a>
				<a
					href="https://x.com/digitimatic"
					class="p-3 rounded-full bg-black text-white text-center hover:bg-[lightgreen] hover:translate-y-[-5px] transition-all ease-linear"
				>
					<Twitter />
				</a>
				<a
					href="https://www.instagram.com/digitimatic?igshid=YzAwZjE1ZTI0Zg=="
					class="p-3 rounded-full bg-black text-white text-center hover:bg-[lightgreen] hover:translate-y-[-5px] transition-all ease-linear"
				>
					<Instagram />
				</a>
			</div>
		</div>
		<div class="w-full mx-auto lg:ml-[-55px] lg:mr-[-103px] sm:w-3/5 lg:w-full hero-image">
			<img
				src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/ygyn45lldftobxlb1ffx"
				alt="Hero rocket"
				class="w-full h-full object-cover flex-1"
			/>
		</div>
	</div>

	<div
		class="flex flex-col-reverse md:w-4/5 mx-auto lg:flex-row lg:w-full mt-16 gap-12 lg:items-center"
	>
		<div class="form w-full flex">
			<form
				on:submit|preventDefault={handleSubmit}
				bind:this={formEl}
				action="/api/contact"
				method="POST"
				class="bg-sky-200 px-8 py-14 rounded-3xl grid gap-6 w-full flex-1"
			>
				<div class=" grid gap-6 w-full">
					<div class="flex flex-col md:flex-row gap-6">
						<label for="fullname" class="flex flex-col gap-3 w-full">
							<span class="font-semibold text-xl">Enter name</span>
							<input
								type="text"
								placeholder="What's your name?"
								name="fullname"
								required
								class={`${
									actionData && !actionData.success && actionData.name?.length
										? 'border-red-500'
										: 'border-black'
								} w-full rounded-full border-2 focus:outline-violet-500 py-5 px-8 hover:border-violet-500 transition-all ease-linear`}
							/>
							{#if actionData && !actionData.success && actionData.name?.length}
								<span class="font-bold text-red-500 -mt-2">{actionData.name}</span>
							{/if}
						</label>
						<label for="email" class="flex flex-col gap-3 w-full">
							<span class="font-semibold text-xl">Enter email address</span>
							<input
								type="email"
								placeholder="What's your email?"
								name="email"
								required
								class={`${
									actionData && !actionData.success && actionData.email?.length
										? 'border-red-500'
										: 'border-black'
								} w-full rounded-full border-2 focus:outline-violet-500 py-5 px-8 hover:border-violet-500 transition-all ease-linear`}
							/>
							{#if actionData && !actionData.success && actionData.email}
								<span class="font-bold text-red-500 -mt-2">{actionData.email}</span>
							{/if}
						</label>
					</div>

					<div class="flex flex-col md:flex-row gap-6">
						<label for="business-name" class="flex flex-col gap-3 w-full">
							<span class="font-semibold text-xl">Business</span>
							<input
								type="text"
								placeholder="What's your business name?"
								name="business-name"
								required
								class={`${
									actionData && !actionData.success && actionData.businessName?.length
										? 'border-red-500'
										: 'border-black'
								} w-full rounded-full border-2 focus:outline-violet-500 py-5 px-8 hover:border-violet-500 transition-all ease-linear`}
							/>
							{#if actionData && !actionData.success && actionData.businessName}
								<span class="font-bold text-red-500 -mt-2">{actionData.businessName}</span>
							{/if}
						</label>
						<label for="budget" class="flex flex-col gap-3 w-full">
							<span class="font-semibold text-xl">Budget</span>
							<input
								type="text"
								placeholder="$1,999 - $3,999 USD"
								name="budget"
								required
								class={`${
									actionData && !actionData.success && actionData.budget?.length
										? 'border-red-500'
										: 'border-black'
								} w-full rounded-full border-2 focus:outline-violet-500 py-5 px-8 hover:border-violet-500 transition-all ease-linear`}
							/>
							{#if actionData && !actionData.success && actionData.budget}
								<span class="font-bold text-red-500 -mt-2">{actionData.budget}</span>
							{/if}
						</label>
					</div>

					<!-- Honeypot fields -->
					<div style="display: none !important;" aria-hidden="true">
						<input type="text" name="website" autocomplete="off" tabindex="-1" />
					</div>
					<div style="position: absolute; left: -9999px;" aria-hidden="true">
						<input type="tel" name="phone" autocomplete="off" tabindex="-1" />
					</div>
					<div style="height: 0; overflow: hidden;" aria-hidden="true">
						<input type="email" name="contact-method" autocomplete="off" tabindex="-1" />
					</div>

					<!-- Timing fields -->
					<input type="hidden" name="time-started" value={Date.now()} />

					<label for="description" class="flex flex-col gap-3">
						<span class="font-semibold text-xl">Describe your project</span>
						<textarea
							name="description"
							id="description"
							placeholder="What can we help you with?"
							cols="30"
							rows="5"
							required
							class={`${
								actionData && !actionData.success && actionData.description?.length
									? 'border-red-500'
									: 'border-black'
							} w-full rounded-xl border-2 focus:outline-violet-500 py-5 px-8 hover:border-violet-500 transition-all ease-linear`}
						></textarea>
						{#if actionData && !actionData.success && actionData.description}
							<span class="font-bold text-red-500 -mt-2">{actionData.description}</span>
						{/if}
					</label>

					<Recaptcha
						sitekey={`${PUB_RECAPTCHA_SITE_KEY}`}
						size="invisible"
						badge="inline"
						theme="light"
						id="recaptcha"
						lang="en"
						on:success={onCaptchaSuccess}
						on:error={onCaptchaError}
						on:expired={onCaptchaExpire}
						on:close={onCaptchaClose}
						on:ready={onCaptchaReady}
					/>

					<button
						type="submit"
						disabled={loading}
						class={`${
							loading && 'opacity-60'
						} w-full md:w-fit md:px-10 md:py-5 rounded-full bg-black text-white flex items-center justify-center p-6 font-bold ${
							!loading && 'hover:bg-indigo-500'
						} hover:translate-y-[-3px] ease-linear transition-all`}
					>
						{#if loading}
							Please wait...
							<span class="mt-1">
								<Loading class="text-2xl ml-4" />
							</span>
						{:else}
							Send message
							<span class="right-arrow mt-1">
								<RightArrow class="text-2xl" />
							</span>
						{/if}
					</button>
				</div>
				{#if actionData && !actionData.success}
					<p class="text-red-600 font-bold">{actionData.message}</p>
				{:else if actionData && actionData.success}
					<p class="text-green-600 font-bold">{actionData.message}</p>
				{/if}
			</form>
		</div>

		<div class="flex flex-col gap-10 lg:w-3/4">
			<div class="flex flex-col gap-4 text-center lg:text-left lg:gap-2">
				<div class="font-semibold text-lg mx-auto lg:mx-0 md:text-xl md:flex items-center gap-x-3">
					<div class="hidden lg:block w-20 h-[3px] bg-black"></div>
					<p>GET A QUOTE</p>
				</div>
				<div class="w-5/6 sm:w-3/5 mx-auto lg:w-full">
					<p class="text-3xl font-semibold md:text-4xl">Send a message to get your free quote</p>
				</div>
				<p class="px-4 text-lg lg:px-0">
					Elevate your strategy! Message us for a complimentary quote on cutting-edge PR, Branding,
					and Advertising solutions.
				</p>
			</div>
			<div
				class="flex flex-col sm:flex-row lg:flex-col items-center gap-4 lg:items-stretch lg:w-3/5 lg:gap-6"
			>
				<div
					class="email bg-amber-200 flex flex-col md:flex-row items-center md:items-start gap-3 px-4 py-8 md:p-6 rounded-xl text-center md:text-left w-full hover:translate-y-[-5px] transition-all ease-linear lg:w-auto"
				>
					<span class="md:mt-[3px]">
						<Envelope class="text-3xl" />
					</span>
					<div>
						<p class="text-lg">Email us</p>
						<p class="font-bold email-address md:mt-[-6px] break-all">info@digitimatic.com</p>
					</div>
				</div>
				<!-- <div
					class="phone bg-violet-200 flex flex-col md:flex-row items-center md:items-start gap-3 px-4 py-8 md:p-6 rounded-xl text-center md:text-left w-full hover:translate-y-[-5px] transition-all ease-linear lg:w-auto"
				>
					<span class="md:mt-[3px]">
						<Phone class="text-3xl" />
					</span>
					<div>
						<p class="text-lg">Call us</p>
						<p class="font-bold phone-no md:mt-[-6px]">2349000000001</p>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</section>

<style>
	.hero-image {
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		/* width: 100%; */
		/* max-width: 739px; */
	}
	.right-arrow {
		font-size: 1.5rem; /* Adjust the size as needed */
		margin-left: 10px; /* Adjust the spacing as needed */
		transition: transform 0.3s;
	}

	button:hover .right-arrow {
		transform: translateX(5px); /* Adjust the value as needed */
	}

	.email:hover div .email-address,
	.phone:hover div .phone-no {
		color: rgb(115, 113, 255);
	}
</style>
