<script lang="ts">
	import Article from '$lib/blog/Article.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Article post={data.post} />
