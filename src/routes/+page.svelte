<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import ProjectCarousel from '$lib/projects/ProjectCarousel.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<header class="text-center h-screen-nav flex flex-col justify-center">
	<h1 class="text-4xl md:text-7xl font-semibold text-slate-600">Konrad Balcerzak</h1>
	<p class="text-lg md:text-4xl mt-4 md:mt-8 text-stone-700">A professional web developer</p>
	<a href="/about" class="btn mx-auto mt-8 text-lg p-4">Find out more</a>
</header>
<div class="min-h-[22rem] px-8 py-16 bg-stone-400">
	<section class="container mx-auto">
		<Heading level={2}>Who am I?</Heading>
		<div class="flex flex-col gap-8 md:gap-32 mt-16 text-2xl md:flex-row text-stone-800">
			<p class="flex-1">
				I am a full stack web developer from Poland. I began coding when I was 15, and, shortly
				after, I started working as a programmer. Over time, I learned many languages and
				technologies.
			</p>
			<p class="flex-1">
				Currently, I am studying Information Technology for an engineering degree. During my
				studies, I gained crucial knowledge regarding programming and computers, which comes in
				handy when coding.
			</p>
		</div>
	</section>
</div>
<div class="bg-stone-300 min-h-[22rem] px-8 py-16">
	<section class="container mx-auto">
		<Heading level={2}>My projects</Heading>
		<ProjectCarousel projects={data.projects} />
	</section>
</div>
