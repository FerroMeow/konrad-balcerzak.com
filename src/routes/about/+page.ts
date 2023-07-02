import { SkillLevel } from "$lib/skills/SkillData"
import type { PageLoad } from "./$types"
export const load = (() => {
    return {
        skills: [
            {
                name: 'WordPress',
                level: SkillLevel.Advanced,
                abilities: [
                    'Plugin develompment',
                    'Theme development',
                    'Working with multisites'
                ]
            },
            {
                name: 'PHP',
                level: SkillLevel.Advanced,
                abilities: [
                    'Object-oriented programming',
                    'Up-to date knowledge of language quirks and extensions (imagick)',
                ]
            },
            {
                name: 'Software Engineering',
                level: SkillLevel.Intermediate,
                abilities: [
                    'Writing maintainable code',
                    'Working in a team',
                ],
            },
            {
                name: 'Javascript Frameworks',
                level: SkillLevel.Intermediate,
                abilities: [
                    'GatsbyJS',
                    'SvelteKit',
                ]
            },
            {
                name: 'TypeScript',
                level: SkillLevel.Intermediate,
            },
            {
                name: 'Rust',
                level: SkillLevel.Beginner,
            },
            {
                name: 'Python',
                level: SkillLevel.Beginner,
            }
        ]
    }
}) satisfies PageLoad