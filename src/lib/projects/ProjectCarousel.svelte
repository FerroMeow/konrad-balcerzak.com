<script lang="ts">
	import Card from '$lib/projects/Card.svelte';
	import type Project from '$lib/projects/CardData';
	import CarouselPadding from './CarouselPadding.svelte';
	import ScrollButton from './ScrollButton.svelte';
	import { ScrollDirection } from '$lib/types/Direction';
	import type { Action } from 'svelte/action';

	export let projects: Project[];

	let scrollableNode: HTMLElement | undefined;

	const scrollableAction: Action = (node) => {
		scrollableNode = node;
	};

	const onScrollBtn = (direction: ScrollDirection): void => {
		if (!scrollableNode) {
			return;
		}
		let changeAmount: number;
		switch (direction) {
			case ScrollDirection.Left:
				changeAmount = -1;
				break;
			case ScrollDirection.Right:
				changeAmount = 1;
				break;
			default:
				changeAmount = 0;
				break;
		}
		scrollableNode.scrollBy({
			behavior: 'smooth',
			left: changeAmount
		});
	};

	const onCardWheel = (e: WheelEvent): void => {
		e.deltaY > 0 ? onScrollBtn(ScrollDirection.Right) : onScrollBtn(ScrollDirection.Left);
	};
</script>

<div class="relative">
	<ScrollButton
		direction={ScrollDirection.Left}
		on:click={() => onScrollBtn(ScrollDirection.Left)}
	/>
	<div
		class="py-8 flex gap-8 overflow-x-auto touch-pan-x my-8 snap-x snap-mandatory"
		use:scrollableAction
	>
		<CarouselPadding />
		{#each projects as project}
			<Card data={project} on:wheel={onCardWheel} />
		{/each}
		<CarouselPadding />
	</div>
	<ScrollButton
		direction={ScrollDirection.Right}
		on:click={() => onScrollBtn(ScrollDirection.Right)}
	/>
</div>
