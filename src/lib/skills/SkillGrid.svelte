<script lang="ts">
	import Skill from '$lib/Skill.svelte';
	import type { SkillData } from './SkillData';

	export let skills: SkillData[] = [];
</script>

<ul class="grid grid-cols-[repeat(auto-fit,minmax(theme(space.72),1fr))] gap-12">
	{#each skills as skill}
		<Skill {skill} />
	{/each}
</ul>
