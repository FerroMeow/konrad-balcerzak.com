<script lang="ts">
	export let level: number;
	export let className: string = '';
	if (level > 6) {
		throw new Error('Heading level too large');
	}
	if (level < 1) {
		throw new Error('Heading level too small');
	}
</script>

<svelte:element this={`h${level}`} class="text-slate-700 font-semibold tracking-tight {className}">
	<slot />
</svelte:element>
