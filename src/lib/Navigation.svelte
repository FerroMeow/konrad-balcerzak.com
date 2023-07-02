<script lang="ts">
	import AppRoute from './types/AppRoute';
	import Hamburger from './Hamburger.svelte';
	import NavLink from './NavLink.svelte';
	let expanded = false;
</script>

<div
	class="h-16 fixed w-full p-4 shadow-md bg-slate-500/75 backdrop-blur-lg after:clear-left text-stone-300"
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
	class="bg-slate-800/75 backdrop-blur-sm text-stone-100 fixed left-0 bottom-0 top-16 w-full transition-all md:max-w-sm"
	class:translate-x-[-100%]={!expanded}
	class:translate-x-0={expanded}
>
	<ul class="divide-y divide-stone-300 divide-solid p-4">
		<NavLink href={AppRoute.Homepage}>Home</NavLink>
		<NavLink href={AppRoute.About}>About</NavLink>
		<NavLink href={AppRoute.Contact}>Contact</NavLink>
	</ul>
</nav>
