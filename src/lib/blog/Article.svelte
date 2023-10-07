<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import type { BlogPost } from './postData';

	export let post: BlogPost;
</script>

<article class="blog-article">
	<Heading level={1} className="my-12">{post.title}</Heading>
	{#if post.thumbnail}
		<img src="/images/thumbnails/{post.thumbnail}" alt="{post.title} Thumbnail" />
	{/if}
	{@html post.content}
</article>
