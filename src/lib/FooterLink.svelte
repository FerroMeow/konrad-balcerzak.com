<script lang="ts">
	import AppRoute from './navigation/AppRoute';

	export let href: AppRoute | URL = AppRoute.Homepage;
</script>

<li>
	<a href={href.toString()}><slot /></a>
</li>
