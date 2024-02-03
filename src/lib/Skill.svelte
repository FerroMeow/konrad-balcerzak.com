<script lang="ts">
	import BrandIcon from './BrandIcon.svelte';
	import Heading from './Heading.svelte';
	import { skillLevelName, type SkillData } from './skills/SkillData';

	export let skill: SkillData;
</script>

<li class="text-stone-700">
	<Heading level={4} className="text-2xl">
		<BrandIcon icon={skill.icon} />
		{skill.name}
	</Heading>
	<p class="text-gray-400 text-sm">Level: {skillLevelName(skill.level)}</p>
	{#if typeof skill.abilities !== 'undefined'}
		<ul>
			{#each skill.abilities as ability}
				<li>
					<i class="fa-solid fa-check text-slate-400" />
					{ability}
				</li>
			{/each}
		</ul>
	{/if}
</li>
