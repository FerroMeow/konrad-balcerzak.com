<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import ProjectCarousel from '$lib/projects/ProjectCarousel.svelte';
	import type { PageData } from './$types';
	import desktopBg from '$lib/assets/images/bg/pexels-picjumbocom-196659.jpg?url';
	import mobileBg from '$lib/assets/images/bg/pexels-robin-schreiner-2438212.jpg?url';
	export let data: PageData;
</script>

<header class="relative text-center h-screen-nav flex flex-col justify-center z-10">
	<div
		class="absolute inset-0 bg-image bg-cover bg-center -z-10"
		style:--bg-mobile={'url("' + mobileBg + '")'}
		style:--bg-desktop={'url("' + desktopBg + '")'}
	/>
	<Heading level={1} className="text-4xl md:text-7xl">Konrad Balcerzak</Heading>
	<p class="text-lg md:text-4xl mt-4 md:mt-8 text-stone-700">A professional web developer</p>
	<a href="/about" class="btn mx-auto mt-8 text-lg p-4">Find out more</a>
</header>
<div class="min-h-[22rem] px-8 py-16 bg-stone-100">
	<section class="container mx-auto">
		<Heading level={2} className="text-4xl">Who am I?</Heading>
		<div class="flex flex-col gap-8 md:gap-32 mt-16 text-2xl md:flex-row text-stone-600">
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
<div class="bg-stone-200 min-h-[22rem] px-8 py-16">
	<section class="container mx-auto">
		<Heading level={2} className="text-4xl">My projects</Heading>
		<ProjectCarousel projects={data.projects} />
	</section>
</div>
