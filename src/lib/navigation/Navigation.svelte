<script lang="ts">
	import { page } from '$app/stores';
	import { appRoutes } from './AppRoute';
	import Hamburger from './Hamburger.svelte';
	import NavLink from './NavLink.svelte';
	import { onMount } from 'svelte';

	$: routePath = $page.url.pathname;
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

<header
	class="h-[theme(space.header)] top-0 md:sticky w-full p-6 xl:p-16 shadow-xl bg-slate-600/80 backdrop-blur-md text-stone-200 z-10"
	class:max-md:sticky={expanded}
	class:max-md:static={!expanded}
>
	<div class="xl:container h-full mx-auto flex md:items-center relative">
		<Hamburger
			className="absolute left-0 md:hidden"
			on:click={() => {
				expanded = !expanded;
			}}
		/>
		<h1 class="tracking-wide text-4xl w-fit h-fit xl:mx-auto font-mono">
			<a href="/">&#123; Konrad Balcerzak &#125;</a>
		</h1>
		<ul
			class="gap-8 self-center right-0 hidden text-3xl font-mono md:flex md:ml-auto 2xl:ml-0 2xl:absolute"
		>
			{#each appRoutes as appRoute}
				<li
					class={routePath === appRoute[0].toString()
						? 'border-b border-b-stone-300 text-stone-300'
						: ''}
				>
					<a href={appRoute[0].toString()}>
						{appRoute[1]}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</header>
<nav
	class="bg-slate-900/80 backdrop-blur-md text-stone-300 fixed left-0 bottom-0 top-[theme(space.header)] w-full transition-all md:hidden"
	class:translate-x-[-100%]={!expanded}
	class:translate-x-0={expanded}
>
	<ul class="divide-y divide-slate-500 divide-solid">
		{#each appRoutes as appRoute}
			<NavLink href={appRoute[0]} on:click={onNavClick}>{appRoute[1]}</NavLink>
		{/each}
	</ul>
</nav>
