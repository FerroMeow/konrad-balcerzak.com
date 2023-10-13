<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import type { BlogPost } from './postData';

	export let post: BlogPost;
</script>

<Heading level={1} className="mb-6 py-6 border-b-2 border-slate-700 text-4xl">{post.title}</Heading>
<article class="blog-article">
	{#if post.thumbnail}
		<img src="/images/thumbnails/{post.thumbnail}" alt="{post.title} Thumbnail" />
	{/if}
	{@html post.content}
</article>
