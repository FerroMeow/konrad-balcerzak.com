<script lang="ts">
	import Skill from '$lib/Skill.svelte';
	import type { SkillData } from './SkillData';

	export let skills: SkillData[] = [];
</script>

<ul class="grid grid-cols-[repeat(auto-fit,minmax(theme(space.80),1fr))] gap-8">
	{#each skills as skill}
		<Skill {skill} />
	{/each}
</ul>
