<script lang="ts">
	import AppRoute from './AppRoute';
	import Hamburger from './Hamburger.svelte';
	import NavLink from './NavLink.svelte';
	import { onMount } from 'svelte';

	let expanded = false;
	let toggleBodyClass: (expanded: boolean) => void;

	const onNavClick = (e: MouseEvent): void => {
		expanded = false;
	};

	onMount(() => {
		toggleBodyClass = (expanded) => {
			if (expanded) {
				document.body.classList.add('max-md:overflow-hidden');
			} else {
				document.body.classList.remove('max-md:overflow-hidden');
			}
		};
	});
	$: if (toggleBodyClass) toggleBodyClass(expanded);
</script>

<div
	class="h-16 top-0 md:sticky w-full p-4 shadow-xl bg-slate-600/80 backdrop-blur-md after:clear-left text-stone-200"
	class:max-md:sticky={expanded}
	class:max-md:static={!expanded}
>
	<div class="xl:container mx-auto flex items-center">
		<Hamburger
			className="float-left w-0"
			on:click={() => {
				expanded = !expanded;
			}}
			{expanded}
		/>
		<h1 class="tracking-wide text-xl w-fit h-fit mx-auto">
			<a href="/">Konrad Balcerzak</a>
		</h1>
	</div>
</div>
<nav
	class="bg-slate-900/80 backdrop-blur-md text-stone-300 fixed left-0 bottom-0 top-16 w-full transition-all md:max-w-sm z-10"
	class:translate-x-[-100%]={!expanded}
	class:translate-x-0={expanded}
>
	<ul class="divide-y divide-slate-500 divide-solid p-4">
		<NavLink href={AppRoute.Homepage} on:click={onNavClick}>Home</NavLink>
		<NavLink href={AppRoute.About} on:click={onNavClick}>About</NavLink>
		<NavLink href={AppRoute.Contact} on:click={onNavClick}>Contact</NavLink>
	</ul>
</nav>
