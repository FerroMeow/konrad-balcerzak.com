<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import Excerpt from '$lib/blog/Excerpt.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Heading level={1} className="py-6 text-4xl">Blog</Heading>
{#each data.blogPosts as post}
	<Excerpt {post} />
	<Excerpt {post} />
{/each}
