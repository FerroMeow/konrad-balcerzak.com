<script>
	import FooterLink from './FooterLink.svelte';
	import AppRoute from './navigation/AppRoute';
</script>

<div class="bg-stone-800 text-stone-300 min-h-[theme(space.32)] p-8 text-center">
	<footer class="container mx-auto">
		<nav>
			<ul class="flex gap-8 text-xl justify-center md:justify-start">
				<FooterLink href={AppRoute.Homepage}>Home</FooterLink>
				<FooterLink href={AppRoute.About}>About</FooterLink>
				<FooterLink href={AppRoute.Contact}>Contact</FooterLink>
			</ul>
		</nav>
		<div class="h-[2px] bg-slate-600 mt-6 mb-4" />
		<div
			class="flex flex-col md:flex-row md:gap-6 md:items-end text-center md:text-left text-slate-400"
		>
			<a href={AppRoute.Homepage.toString()} class="order-1 md:order-none">Konrad Balcerzak</a>
			<address class="order-1 md:order-none">
				E-mail:
				<a href="mailto:konrad.balcerzak.work@gmail.com">konrad.balcerzak.work@gmail.com</a>
			</address>
			<section class="md:ml-auto mb-6 md:mb-0">
				<h6 class="text-stone-400">Find me on</h6>
				<ul class="flex gap-4 justify-center">
					<li>
						<a href="https://github.com/konradBalcerzak/" target="_blank">
							<img src="" alt="GitHub" />
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/konrad-balcerzak/" target="_blank">
							<img src="" alt="Linkedin" />
						</a>
					</li>
				</ul>
			</section>
		</div>
	</footer>
</div>
<div class="bg-stone-950 p-2 text-center md:text-right text-stone-300">
	Copyright &copy; Konrad Balcerzak {new Date().getFullYear().toString()}
</div>
