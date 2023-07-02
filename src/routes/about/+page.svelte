<script>
	import Heading from '$lib/Heading.svelte';
</script>

<Heading level={2} className="max-w-3xl px-8 my-12 mx-auto text-4xl md:text-4xl">About</Heading>

<div class="px-4">
	<div class="mx-auto border border-slate-200 rounded-3xl shadow-lg md:max-w-3xl">
		<div
			class="h-40 p-16 pb-0 rounded-t-3xl bg-gradient-to-l from-pink-500 via-purple-500 to-emerald-500"
		/>
		<div class="p-6 pt-12 rounded-b-3xl relative bg-stone-100 md:flex md:justify-between">
			<img
				class="absolute -top-32 max-md:left-1/2 -translate-x-1/2 w-40 aspect-square bg-inherit rounded-full border-8 border-stone-200 md:translate-x-0 object-cover"
				src="/images/personal/face.jpg"
				alt=""
			/>
			<div class="">
				<Heading level={3} className="text-xl">Konrad Balcerzak</Heading>
				<address class="mt-4">
					<p>
						E-mail: <a href="mailto:konrad.balcerzak.work@gmail.com"
							>konrad.balcerzak.work@gmail.com</a
						>
					</p>
					<p>Address: Mysłowice, 41-400, Poland</p>
				</address>
			</div>
			<ul class="mt-4 md:mt-0 md:flex md:flex-col md:gap-2">
				<li>
					<i class="fa-solid fa-graduation-cap" /> University:
					<a href="https://us.edu.pl/en/" target="_blank">University of Silesia</a>
				</li>
				<li>
					<i class="fa-brands fa-github" /> GitHub:
					<a href="https://github.com/konradBalcerzak/" target="_blank">konradBalcerzak</a>
				</li>
				<li>
					<i class="fa-brands fa-linkedin" />
					<a href="https://www.linkedin.com/in/konrad-balcerzak/" target="_blank">Linkedin</a>
				</li>
			</ul>
		</div>
	</div>
</div>
