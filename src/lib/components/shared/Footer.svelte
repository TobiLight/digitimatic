<script>
	import Facebook from '../icons/Facebook.svelte';
	import Instagram from '../icons/Instagram.svelte';
	import Twitter from '../icons/Twitter.svelte';
</script>

<footer class="2xl:bg-gray-200">
	<div
		class="w-full flex flex-col-reverse gap-4 md:gap-10 justify-items-end items-center md:items-end md:flex-row md:justify-between bg-black text-white p-3 border-t border-gray-600 2xl:w-3/4 2xl:mx-auto h-[inherit]"
	>
		<div class="logo-copyright flex flex-col items-center w-auto">
			<a href="/" class="logo w-32 h-12 flex-none relative">
				<img
					src="https://res.cloudinary.com/dmqndbqqy/image/upload/f_auto,q_auto/v1/digitimatic-media/jyhuiubuywqacrjeptfw"
					alt="Digitimatic logo"
					class="inset-0 w-full h-full object-cover rounded-lg"
				/>
			</a>
			<p class="text-xs">Copyright &copy;{new Date().getFullYear()} Digitimatic</p>
		</div>

		<nav class="footer-links md:w-6/12 text-sm">
			<ul class="flex flex-wrap gap-x-8 gap-y-3 justify-center items-center w-full">
				<li><a href="#who-we-are">About Us</a></li>
				<li><a href="#partners">Partners</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="https://digitimatic.com/media-placement">Services</a></li>
				<li><a href="#testimonials">Testimonials</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<div class="footer-social-links flex items-center md:justify-between gap-4">
			<a
				title="Facebook"
				href="https://www.facebook.com/digitimatic"
				class="w-10 h-10 bg-blue-600 p-2 flex items-center justify-center rounded-full hover:-translate-y-2 transition-all ease-linear delay-200"
			>
				<Facebook class="w-4 h-4 text-white" />
			</a>
			<a
				title="Instagram"
				href="https://www.instagram.com/digitimatic?igshid=YzAwZjE1ZTI0Zg=="
				class="w-10 h-10 bg-white p-2 flex items-center justify-center rounded-full hover:-translate-y-2 transition-all ease-linear delay-200"
			>
				<Instagram class="w-4 h-4 text-black" />
			</a>

			<a
				href="https://x.com/digitimatic"
				title="Twitter/X"
				class="w-10 h-10 bg-white p-2 flex items-center justify-center rounded-full hover:-translate-y-2 transition-all ease-linear delay-200"
			>
				<Twitter class="w-4 h-4 text-black" />
			</a>
		</div>
	</div>
</footer>
