export enum SkillLevel {
	Beginner = 1,
	Intermediate,
	Advanced
}

export interface SkillData {
	name: string;
	level: SkillLevel;
	icon?: string;
	abilities?: string[];
}

export const skillLevelName = (level: SkillLevel): string => {
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
};
