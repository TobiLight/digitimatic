<script>
	import Facebook from '../icons/Facebook.svelte';
	import Twitter from '../icons/Twitter.svelte';
</script>

<footer
	class="relative bottom-0 flex flex-col-reverse gap-4 md:gap-10 justify-center items-center md:flex-row md:justify-between bg-black text-white p-3 border-t border-gray-600"
>
	<div class="logo-copyright flex flex-col items-center w-auto">
		<a href="/" class="logo w-32 flex-none relative">
			<img
				src="https://digitimatic.com/wp-content/uploads/2023/12/digitimatic.png"
				alt="Digitimatic"
				class="inset-0 w-full h-[50px] object-cover rounded-lg"
			/>
		</a>
		<p class="text-xs">Copyright &copy;{new Date().getFullYear()} Digitimatic</p>
	</div>

	<nav class="footer-links md:w-6/12">
		<ul class="flex gap-8 justify-between items-center w-full">
			<li><a href="#about-us">About Us</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#blog">Blog</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
	<div class="footer-social-links flex items-center md:justify-between gap-4">
		<div class="w-10 h-10 bg-blue-600 p-2 flex items-center justify-center rounded-full">
			<a href="#">
				<Facebook class="w-4 h-4 text-white" />
			</a>
		</div>
		<div class="w-10 h-10 bg-white p-2 flex items-center justify-center rounded-full">
			<a href="#">
				<Twitter class="w-4 h-4 text-black" />
			</a>
		</div>
	</div>
</footer>
