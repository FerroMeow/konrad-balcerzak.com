<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';

	let displayToast = writable(true);
	onMount(() => {
		const timeoutId = window.setTimeout(() => ($displayToast = false), 3000);
		return () => {
			window.clearTimeout(timeoutId);
		};
	});
</script>

<div class="relative">
	{#if $displayToast}
		<div class="absolute top-0 left-0 right-0" transition:slide={{ axis: 'y' }}>
			<slot />
		</div>
	{/if}
</div>
