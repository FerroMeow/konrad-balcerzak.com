<script lang="ts">
	import Heading from './Heading.svelte';
	import { skillLevelName, type SkillData, skillIcon } from './skills/SkillData';

	export let skill: SkillData;
</script>

<li class="text-stone-700">
	<Heading level={4} className="text-lg">{@html skillIcon(skill.name)} {skill.name}</Heading>
	<p class="text-gray-400 text-sm">Level: {skillLevelName(skill.level)}</p>
	{#if typeof skill.abilities !== 'undefined'}
		<p class="mt-2">Abilities:</p>
		<ul>
			{#each skill.abilities as ability}
				<li class="text-sm">
					<i class="fa-solid fa-check text-slate-400" />
					{ability}
				</li>
			{/each}
		</ul>
	{/if}
</li>
