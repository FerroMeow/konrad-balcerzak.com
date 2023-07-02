<script lang="ts">
	import AppRoute from './types/AppRoute';

	export let href: AppRoute | URL = AppRoute.Homepage;
</script>

<li>
	<a href={href.toString()}><slot /></a>
</li>
