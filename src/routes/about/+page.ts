import { SkillLevel } from '$lib/skills/SkillData';
import type { PageLoad } from './$types';
export const load = (() => {
	return {
		skills: [
			{
				name: 'PHP',
				icon: 'php',
				level: SkillLevel.Advanced,
				abilities: [
					'Object-oriented programming',
					'Modern PHP 8 features',
					'Design patterns',
					'Laravel framework'
				]
			},
			{
				name: 'WordPress',
				icon: 'wordpress',
				level: SkillLevel.Advanced,
				abilities: ['Plugin development', 'Theme development', 'Working with multisites']
			},
			{
				name: 'Software Engineering',
				level: SkillLevel.Intermediate,
				abilities: ['Testing', 'Writing maintainable code', 'System design', 'Working in a team']
			},
			{
				name: 'TypeScript',
				icon: 'js',
				level: SkillLevel.Intermediate,
				abilities: [
					'Using types to guarantee safety',
					'Common design patterns',
					'Working with Node / NPM tooling',
					'Frameworks (SvelteKit, GatsbyJS)'
				]
			},
			{
				name: 'Rust',
				icon: 'rust',
				level: SkillLevel.Beginner
			},
			{
				name: 'Python',
				icon: 'python',
				level: SkillLevel.Beginner
			},
			{
				name: 'C#',
				icon: 'microsoft',
				level: SkillLevel.Beginner
			}
		]
	};
}) satisfies PageLoad;
