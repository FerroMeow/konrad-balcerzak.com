<script lang="ts">
	import type CardData from '$lib/projects/CardData';

	export let data: CardData;
	let background = data.imageFilename;
</script>

<div
	style:background-image={background}
	class="bg-cover flex-shrink-0 w-[min(100%,theme(space.72))] h-[20rem] backdrop-blur-sm backdrop-brightness-50 bg-stone-100 p-8 rounded-3xl shadow-lg flex flex-col justify-end snap-center"
	on:wheel|preventDefault
>
	<h3 class="text-slate-600 font-semibold text-xl">
		<a href={data.href.toString()}>
			{data.name}
		</a>
	</h3>
	<p class="text-stone-600">
		{data.description}
	</p>
</div>
