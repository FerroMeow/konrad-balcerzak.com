export enum SkillLevel {
    Beginner = 1,
    Intermediate,
    Advanced,
}

export interface SkillData {
    name: string;
    level: SkillLevel;
    abilities?: string[]
}

export function skillLevelName(level: SkillLevel): string {
    switch (level) {
        case SkillLevel.Advanced:
            return 'Advanced';
        case SkillLevel.Intermediate:
            return 'Intermediate';
        case SkillLevel.Beginner:
            return 'Beginner / Learning';
        default:
            return 'Non-applicable';
    }
}

export function skillIcon(skillName: string): string {
    skillName = skillName.toLocaleLowerCase();
    switch (skillName) {
        case 'wordpress':
            return '<i class="fa-brands fa-wordpress"></i>';
        case 'php':
            return '<i class="fa-brands fa-php"></i>';
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return '<i class="fa-brands fa-square-js"></i>';
        case 'rust':
            return '<i class="fa-brands fa-rust"></i>';
        case 'python':
            return '<i class="fa-brands fa-python"></i>';
        default:
            break;
    }
    if (skillName.includes('framework')) {
        return '<i class="fa-brands fa-react"></i>';
    }
    return '<i class="fa-solid fa-code"></i>';
}