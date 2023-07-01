<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = '#';
	$: isActive = $page.url.pathname === href;
	$: activeGroupHover = isActive ? '' : 'group-hover:';
</script>

<li class="{isActive ? 'text-slate-500 text-lg' : ''} group transition-all">
	<a
		{href}
		class="p-4 block before:inline-block before:content-['>_'] {isActive
			? ''
			: 'before:w-0 before:invisible before:opacity-0'} {activeGroupHover}before:w-[2ch] {activeGroupHover}before:visible {activeGroupHover}before:opacity-100 before:transition-all"
	>
		<slot />
	</a>
</li>
