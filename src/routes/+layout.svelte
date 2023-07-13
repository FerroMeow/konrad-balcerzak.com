<script>
	import '../app.postcss';
	import '../app.postcss';
	import Navigation from '$lib/navigation/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<a
	href="#content"
	class="absolute -top-96 focus-visible:top-0 left-0 z-10 p-8 m-4 bg-stone-400 text-slate-200 outline-violet-600 outline-offset-2 focus:outline"
	tabindex="0"
>
	Skip to main content
</a>
<Navigation />
<main id="content" class="md:min-h-screen-nav bg-stone-200 flow-root">
	<slot />
</main>
<Footer />
