<script>
	import Facebook from '$lib/components/icons/Facebook.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';
	import Instagram from '$lib/components/icons/Instagram.svelte';
</script>

<div class="top-header hidden md:flex justify-between bg-black text-white p-3 text-sm">
	<div class="mail">
		<p class="text-gray-400">info@digitimatic.com</p>
	</div>
	<div class="social-links flex items-center gap-4">
		<p class="text-gray-400">Follow us:</p>
		<div class="flex gap-2 items-center">
			<Facebook class="text-blue-600" />
			<Instagram />
			<Twitter class="text-white" />
		</div>
	</div>
</div>
