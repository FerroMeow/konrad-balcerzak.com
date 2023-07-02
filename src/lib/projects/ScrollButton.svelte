<script lang="ts">
	import { Direction } from '$lib/types/Direction';

	export let direction: Direction;
</script>

<button
	on:click
	class="rounded-full w-12 h-12 bg-slate-700/50 backdrop-blur-lg text-stone-100 flex justify-center items-center absolute top-1/2 -translate-y-1/2 z-10"
	class:left-0={direction === Direction.Left}
	class:right-0={direction === Direction.Right}
>
	<div>
		{#if direction === Direction.Left}
			&lt;
		{:else if direction === Direction.Right}
			&gt;
		{/if}
	</div>
</button>
