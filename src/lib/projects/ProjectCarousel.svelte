<script lang="ts">
	import Card from '$lib/Card.svelte';
	import type Project from '$lib/types/CardData';
	import CarouselPadding from './CarouselPadding.svelte';
	import { onMount } from 'svelte';
	import ScrollButton from './ScrollButton.svelte';
	import { Direction } from '$lib/types/Direction';
	import type { Action } from 'svelte/action';

	export let projects: Project[];

	let scrollableNode: HTMLElement | undefined;

	const scrollableAction: Action = (node) => {
		scrollableNode = node;
	};

	const onScrollBtn = (direction: Direction): void => {
		if (!scrollableNode) {
			return;
		}
		let changeAmount: number;
		switch (direction) {
			case Direction.Left:
				changeAmount = -1;
				break;
			case Direction.Right:
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
</script>

<div class="relative">
	<ScrollButton direction={Direction.Left} on:click={(e) => onScrollBtn(Direction.Left)} />
	<div
		class="py-8 flex gap-8 overflow-x-auto touch-pan-x my-8 snap-x snap-mandatory"
		use:scrollableAction
	>
		<CarouselPadding />
		{#each projects as project}
			<Card data={project} />
		{/each}
		<CarouselPadding />
	</div>
	<ScrollButton direction={Direction.Right} on:click={(e) => onScrollBtn(Direction.Right)} />
</div>
