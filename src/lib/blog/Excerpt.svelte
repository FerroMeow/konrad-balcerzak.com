<script lang="ts">
	import Heading from '$lib/Heading.svelte';
	import type { BlogPost } from './postData';

	export let post: BlogPost;
	const postDate = new Date(post.date);
</script>

<article class="border border-slate-200 my-8 rounded-3xl shadow-md bg-stone-100">
	<a href="/blog/{post.slug}">
		{#if post.thumbnail}
			<img
				src="/images/thumbnails/{post.thumbnail}"
				alt="Thumbnail"
				class="rounded-t-3xl w-full max-h-64 object-cover object-center"
			/>
		{/if}
		<div class="py-4 px-12">
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
