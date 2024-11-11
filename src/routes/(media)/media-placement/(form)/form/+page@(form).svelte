<script lang="ts">
	import Loading from '$lib/components/icons/Loading.svelte';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;

	let isMessageSent: boolean;

	const { form, submitting, errors, enhance } = superForm(data.form, {
		dataType: 'json',
		customValidity: true,
		onResult(event) {
			if (event.result.status === 200 && event.result.type === 'success') {
				isMessageSent = true;
			}
		}
	});
</script>

<form use:enhance method="POST" class="bg-sky-200 px-8 py-14 rounded-3xl grid gap-6 w-full flex-1">
	<div class=" grid gap-8 w-full">
		<div class="flex flex-col md:flex-row gap-6">
			<label for="fullName" class="flex flex-col gap-1 w-full">
				<span class="font-semibold text-xl">Enter name</span>
				<input
					type="text"
					placeholder="What's your name?"
					bind:value={$form.fullName}
					on:input={(e) => {
						if (e.currentTarget.value.length) {
							$errors = {
								...$errors,
								fullName: undefined
							};
						} else {
							$errors = {
								...$errors,
								fullName: ['Full name cannot be blank']
							};
						}
					}}
					disabled={$submitting}
					name="fullName"
					class="{$errors && $errors.fullName
						? 'ring-red-500 placeholder:text-red-500'
						: 'focus:ring-violet-400 ring-neutral-600'} ring-2 w-full rounded-xl outline-none py-5 px-4 transition-all ease-linear"
				/>
				{#if $errors && $errors.fullName?.length}
					<span class="text-sm font-semibold text-red-500">{$errors.fullName}</span>
				{/if}
			</label>
			<label for="email" class="flex flex-col gap-1 w-full">
				<span class="font-semibold text-xl">Enter email address</span>
				<input
					type="email"
					bind:value={$form.email}
					on:input={(e) => {
						if (e.currentTarget.value.length) {
							$errors = {
								...$errors,
								email: undefined
							};
						} else {
							$errors = {
								...$errors,
								email: ['Email cannot be blank']
							};
						}
					}}
					placeholder="What's your email?"
					name="email"
					class="{$errors && $errors.email
						? 'ring-red-500 placeholder:text-red-500'
						: 'focus:ring-violet-400 ring-neutral-600'} ring-2 w-full rounded-xl outline-none py-5 px-4 transition-all ease-linear"
				/>
				{#if $errors && $errors.email?.length}
					<span class="text-sm font-semibold text-red-500">{$errors.email}</span>
				{/if}
			</label>
		</div>

		<div class="flex flex-col md:flex-row gap-6">
			<label for="placementNeed" class="flex flex-col gap-1 w-full">
				<span class="font-semibold text-xl">Placement Need</span>
				<input
					type="text"
					bind:value={$form.placementNeed}
					on:input={(e) => {
						if (e.currentTarget.value.length) {
							$errors = {
								...$errors,
								placementNeed: undefined
							};
						} else {
							$errors = {
								...$errors,
								placementNeed: ['Placement need cannot be blank']
							};
						}
					}}
					placeholder="What's your business name?"
					name="placementNeed"
					class="{$errors && $errors.placementNeed
						? 'ring-red-500 placeholder:text-red-500'
						: 'focus:ring-violet-400 ring-neutral-600'} ring-2 w-full rounded-xl outline-none py-5 px-4 transition-all ease-linear"
				/>
				{#if $errors && $errors.placementNeed?.length}
					<span class="text-sm font-semibold text-red-500">{$errors.placementNeed}</span>
				{/if}
			</label>
			<label for="budget" class="flex flex-col gap-1 w-full">
				<span class="font-semibold text-xl">Budget</span>
				<input
					type="text"
					placeholder="$1,999 - $3,999 USD"
					name="budget"
					class="{$errors && $errors.budget
						? 'ring-red-500 placeholder:text-red-500'
						: 'focus:ring-violet-400 ring-neutral-600'} ring-2 w-full rounded-xl outline-none py-5 px-4 transition-all ease-linear"
				/>
				{#if $errors && $errors.budget?.length}
					<span class="text-sm font-semibold text-red-500">{$errors.budget}</span>
				{/if}
			</label>
		</div>

		<label for="description" class="flex flex-col gap-1">
			<span class="font-semibold text-xl">Describe your project</span>
			<textarea
				bind:value={$form.description}
				name="description"
				id="description"
				placeholder="What can we help you with?"
				cols="30"
				rows="5"
				class="{$errors && $errors.description
					? 'ring-red-500 placeholder:text-red-500'
					: 'focus:ring-violet-400 ring-neutral-600'} ring-2 w-full rounded-xl outline-none py-5 px-4 transition-all ease-linear"
			></textarea>
			{#if $errors && $errors.description?.length}
				<span class="text-sm font-semibold text-red-500">{$errors.description}</span>
			{/if}
		</label>

		<button
			type="submit"
			disabled={$submitting}
			class={`${
				$submitting && 'opacity-60'
			} w-full md:w-fit md:px-10 md:py-5 rounded-full bg-black text-white flex items-center justify-center p-6 font-bold ${
				!$submitting && 'hover:bg-indigo-500'
			} hover:translate-y-[-3px] ease-linear transition-all group`}
		>
			{#if $submitting}
				Please wait...
				<span class="mt-1">
					<Loading class="text-2xl ml-4" />
				</span>
			{:else}
				Send message
				<span class="right-arrow mt-1 group-hover:translate-x-1 transition-all ease-linear">
					<RightArrow class="text-2xl" />
				</span>
			{/if}
		</button>
	</div>
	{#if isMessageSent === true}
		<p class="text-green-600 font-bold">Message sent</p>
	{:else if isMessageSent === false}
		<p class="text-red-600 font-bold">Message failed to send.</p>
	{/if}
</form>
