<script lang="ts">
	export let icon: undefined | string = undefined;
</script>

{#if icon}
	<i class="fa-brands fa-{icon}" />
{:else}
	<i class="fa-solid fa-code" />
{/if}
