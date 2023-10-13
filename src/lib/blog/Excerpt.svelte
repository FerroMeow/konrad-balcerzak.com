<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import type { BlogPost } from './postData';

	export let post: BlogPost;
	const postDate = new Date(post.date);
</script>

<article class="border-slate-700 py-6">
	<a href="/blog/{post.slug}">
		{#if post.thumbnail}
			<img
				src="/images/thumbnails/{post.thumbnail}"
				alt="Thumbnail"
				class="w-full max-h-64 object-cover object-center"
			/>
		{/if}
		<div class="pt-4">
			<p>
				<time datetime={postDate.toISOString()}>
					{Intl.DateTimeFormat('en-US').format(postDate)}
				</time>
			</p>
			<Heading level={3} className="text-2xl">{post.title}</Heading>
			<p>{post.excerpt}</p>
		</div>
	</a>
</article>
