<script>
	import { page } from '$app/stores';
	import Heading from '$lib/Heading.svelte';
	let status = $page.status;
</script>

<div
	class="container min-h-screen-nav p-8 mx-auto text-center flex items-center justify-center text-stone-600"
>
	<div>
		<Heading level={1} className="text-2xl sm:text-4xl lg:text-5xl"
			>Oops! An error has occurred.</Heading
		>
		<p class="text-lg my-4">Error {status}: {$page.error?.message}</p>
		<p class="text-lg my-4">Try again later, or try accessing a different page.</p>
		<figure class="my-4">
			<img src="https://http.cat/{status}" alt="Error from https://http.cat" />
			<figcaption>
				Error {status} from <a href="https://http.cat" target="_blank">https://http.cat</a>
			</figcaption>
		</figure>
	</div>
</div>
