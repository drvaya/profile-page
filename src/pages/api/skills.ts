import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const technologies = [
		'Cloud Technologies',
		'Cloud-native Security',
		'Serverless',
		'Containerization and Orchestration',
		'Cloud Automation',
		'Observability',
	];
	const frameworks = ['Kubernetes', 'CNAPP', 'PrismaCloud'];
	const databases = ['MySQL', 'PostgreSQL', 'Firebase'];
	const cms = ['WordPress', 'Statamic'];
	const various = ['SEO', 'Scrum', 'Agile', 'Jira', 'Confluence'];
	const design = ['Canva', 'Gravit', 'Figma'];
	const softSkills = [
		'Leadership',
		'Problem solving',
		'Creative thinking',
		'Flexible and adaptive',
		'Team player',
	];
	const languages = [
		{
			language: 'Javanese',
			level: 'bilingual',
			icon: '🚩',
		},
		{
			language: 'Indonesian',
			level: 'bilingual',
			icon: '🇮🇩',
		},
		{
			language: 'Arabic',
			level: 'intermediate',
			icon: '🇸🇦',
		},
		{
			language: 'English',
			level: 'basic',
			icon: '🇬🇧',
		},
	];

	res.status(200).json({
		technologies,
		frameworks,
		databases,
		cms,
		various,
		design,
		softSkills,
		languages,
	});
};
