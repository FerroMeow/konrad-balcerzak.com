<script lang="ts">
	export let errors: string[] | undefined;
</script>

{#if errors?.length}
	<p class="text-red-400">Errors: {errors.join(', ')}</p>
{/if}
