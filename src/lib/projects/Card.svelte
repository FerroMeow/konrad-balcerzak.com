<script lang="ts">
	import type CardData from '$lib/projects/CardData';

	export let data: CardData;
	let background = data.imageFilename ? `/images/projects/${data.imageFilename}` : '';
	let textColor = data.colorMode === 'dark' ? 'text-stone-200' : 'text-black';
	let headingColor = data.colorMode === 'dark' ? 'text-slate-200' : 'text-black';
</script>

<div
	class="relative flex-shrink-0 w-[min(100%,theme(space.72))] h-[20rem] snap-center rounded-3xl"
	on:wheel|preventDefault
>
	<div class="absolute inset-0 bg-cover rounded-3xl" style:background-image="url({background})" />
	<div
		class="relative h-full z-10 p-8 rounded-3xl shadow-lg flex flex-col justify-end backdrop-blur-sm backdrop-saturate-50 backdrop-contrast-50 backdrop-brightness-125"
	>
		<h3 class="{headingColor} font-semibold text-xl">
			<a href={data.href.toString()}>
				{data.name}
			</a>
		</h3>
		<p class={textColor}>
			{data.description}
		</p>
	</div>
</div>
