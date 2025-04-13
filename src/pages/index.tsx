import HomeHero from './home-hero';
import CoreCompetencies from './core-competencies';
import RecentProjects from './recent-projects';
import AboutMe from './about-me';

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<RecentProjects />
			<AboutMe />
			<CoreCompetencies />
		</>
	);
}
