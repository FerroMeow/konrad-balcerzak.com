<script lang="ts">
	import type CardData from '$lib/types/CardData';

	export let data: CardData;
	let background = data.imageFilename;
</script>

<div
	style:background-image={background}
	class="bg-cover flex-shrink-0 w-72 h-[20rem] backdrop-blur-sm backdrop-brightness-50 bg-stone-200 p-8 rounded-3xl flex flex-col justify-end snap-center"
	on:wheel|preventDefault
>
	<h3 class="text-slate-700 font-semibold text-xl">
		<a href={data.href.toString()}>
			{data.name}
		</a>
	</h3>
	<p class="text-stone-700">
		{data.description}
	</p>
</div>
