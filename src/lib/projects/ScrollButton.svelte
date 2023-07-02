<script lang="ts">
	import { ScrollDirection } from '$lib/types/Direction';

	export let direction: ScrollDirection;
</script>

<button
	on:click
	class="rounded-full w-12 h-12 bg-slate-700/50 backdrop-blur-sm text-stone-100 flex justify-center items-center absolute top-1/2 -translate-y-1/2 z-10"
	class:left-0={direction === ScrollDirection.Left}
	class:right-0={direction === ScrollDirection.Right}
>
	<div>
		{#if direction === ScrollDirection.Left}
			&lt;
		{:else if direction === ScrollDirection.Right}
			&gt;
		{/if}
	</div>
</button>
