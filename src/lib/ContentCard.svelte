<script lang="ts">
	import Heading from './Heading.svelte';
	export let title: string = '';
	export let className: string = '';
</script>

<section
	class="max-w-3xl p-8 border border-slate-200 my-8 mx-auto rounded-3xl shadow-md bg-stone-100 {className}"
>
	<Heading level={3} className="text-2xl mb-6">{title}</Heading>
	<slot />
</section>
