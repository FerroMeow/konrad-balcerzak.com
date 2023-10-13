<script lang="ts">
	import Heading from './Heading.svelte';
	export let title: string = '';
	export let className: string = '';
	export let background: string = 'bg-stone-100';
</script>

<div class="{background} px-8 py-16">
	<section class="container mx-auto text-xl {className}">
		<Heading level={3} className="text-5xl mb-8">{title}</Heading>
		<slot />
	</section>
</div>
