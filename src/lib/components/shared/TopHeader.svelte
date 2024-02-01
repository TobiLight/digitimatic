<script>
	import Facebook from "$lib/components/icons/Facebook.svelte";
	import Twitter from "$lib/components/icons/Twitter.svelte";
	import Instagram from "$lib/components/icons/Instagram.svelte";
</script>

<div
	class="top-header hidden md:flex justify-between bg-black text-white p-3 text-sm"
>
	<div class="mail">
		<p class="text-gray-400">info@digitimatic.com</p>
	</div>
	<div class="social-links flex items-center gap-4">
		<p class="text-gray-400">Follow us:</p>
		<div class="flex gap-2 items-center">
			<a
				href="https://www.facebook.com/digitimatic"
				class="transition-all hover:-translate-y-1"
			>
				<Facebook class="text-blue-600 w-5 h-5" />
			</a>
			<a
				href="https://www.instagram.com/digitimatic?igshid=YzAwZjE1ZTI0Zg=="
				class="transition-all hover:-translate-y-1"
			>
				<Instagram class="w-5 h-5" />
			</a>
			<a
				href="https://x.com/digitimatic"
				class="transition-all hover:-translate-y-1"
			>
				<Twitter class="text-white w-5 h-5" />
			</a>
		</div>
	</div>
</div>
