<script>
	import Facebook from '$lib/components/icons/Facebook.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import Youtube from '$lib/components/icons/Youtube.svelte';
</script>

<div class="top-header flex justify-between bg-gray-900 text-white p-3 text-sm">
	<div class="mail">
		<p class="text-gray-400">info@digitimatic.com</p>
	</div>
	<div class="social-links flex items-center gap-4">
		<p class="text-gray-400">Follow us:</p>
		<div class="flex gap-2 items-center">
			<Facebook class="text-blue-600" />
			<Youtube class="text-red-500" />
			<Twitter class="text-white" />
		</div>
	</div>
</div>
