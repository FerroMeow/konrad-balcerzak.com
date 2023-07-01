<script lang="ts">
	import AppRoutes from './types/AppRoutes';
	import Hamburger from './Hamburger.svelte';
	import NavLink from './NavLink.svelte';
	let expanded = false;
</script>

<div class="h-16 fixed w-full p-4 shadow-md bg-stone-300/50 backdrop-blur-lg after:clear-left">
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
	class="bg-stone-800/50 backdrop-blur-sm text-stone-800 fixed left-0 bottom-0 top-16 w-full transition-all md:max-w-sm"
	class:translate-x-[-100%]={!expanded}
	class:translate-x-0={expanded}
>
	<ul class="divide-y divide-stone-300 divide-solid p-4">
		<NavLink href={AppRoutes.Homepage}>Home</NavLink>
		<NavLink href={AppRoutes.About}>About</NavLink>
		<NavLink href={AppRoutes.Contact}>Contact</NavLink>
	</ul>
</nav>
