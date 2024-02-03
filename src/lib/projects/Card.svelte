<script lang="ts">
	import type CardData from '$lib/projects/CardData';

	export let data: CardData;
	let imageBackground = data.imageFilename ? `/images/projects/${data.imageFilename}` : '';
	let cardColor =
		data.colorMode === 'dark'
			? {
					background: 'bg-black',
					textBackground: 'bg-stone-700/70',
					heading: 'text-slate-200',
					text: 'text-stone-200'
			  }
			: {
					background: 'bg-white',
					textBackground: 'bg-stone-200/70',
					heading: 'text-black',
					text: 'text-black'
			  };
</script>

<div
	class="flex-shrink-0 w-[min(100%,theme(space.72))] h-[20rem] snap-center rounded-3xl"
	on:wheel|preventDefault
>
	<div
		class="h-full rounded-3xl shadow-lg flex flex-col justify-end {cardColor.background} bg-contain bg-no-repeat bg-center"
		style:background-image="url({imageBackground})"
	>
		<div class="{cardColor.textBackground} px-8 py-4">
			<h3 class="{cardColor.heading} font-semibold text-xl">
				<a href={data.href.toString()}>
					{data.name}
				</a>
			</h3>
			<p class={cardColor.text}>
				{data.description}
			</p>
		</div>
	</div>
</div>
