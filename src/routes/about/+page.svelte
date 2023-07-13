<script lang="ts">
	import CardContent from '$lib/ContentCard.svelte';
	import Heading from '$lib/Heading.svelte';
	import SkillGrid from '$lib/skills/SkillGrid.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Heading level={2} className="max-w-3xl px-8 my-12 mx-auto text-4xl md:text-4xl">About</Heading>

<div class="px-4">
	<header class="mx-auto border border-slate-200 rounded-3xl shadow-lg max-w-3xl">
		<div
			class="h-40 p-16 pb-0 rounded-t-3xl bg-gradient-to-l from-pink-500 via-purple-500 to-emerald-500"
		/>
		<div class="p-8 pt-12 rounded-b-3xl relative bg-stone-100 md:flex md:justify-between">
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
					<a href="https://us.edu.pl/en/" target="_blank">
						<i class="fa-solid fa-graduation-cap" /> University: University of Silesia
					</a>
				</li>
				<li>
					<a href="https://github.com/konradBalcerzak/" target="_blank">
						<i class="fa-brands fa-github" /> GitHub: konradBalcerzak
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/konrad-balcerzak/" target="_blank">
						<i class="fa-brands fa-linkedin" /> Linkedin
					</a>
				</li>
			</ul>
		</div>
	</header>
	<CardContent title="My journey in code" className="space-y-8">
		<p>
			I started programming when I was 15 years old, when I was still in High School. I learned
			basics of web development - HTML, CSS, JavaScript, PHP, and SQL. Soon after graduating, I was
			hired as a full-stack developer at <a href="https://recodeit.net">ReCodeIT</a>
		</p>
		<p>
			During this time, I worked on smaller-scale projects, and gained experience working as an
			actual programmer. Most of the projects were either themes, child-themes, or plugins for
			WordPress, although some projects were written in basic PHP.
		</p>
		<p>
			Later on, I started studying Information Technology at the University of Silesia, which I am
			still studying at. I also worked on larger projects, like Learning System at <a
				href="https://onereach.ai/learning/">OneReach.ai</a
			>, or a more involved role at <a href="https://vapefully.com">VapeFully</a>. I've also delved
			deeper into JavaScript development, with frameworks like Gatsby or SvelteKit, and learned
			TypeScript.
		</p>
	</CardContent>
	<CardContent title="My skills">
		<SkillGrid skills={data.skills} />
	</CardContent>
</div>
