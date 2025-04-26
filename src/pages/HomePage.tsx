import HomeHero from '../features/landing-page/home-hero';
import CoreCompetencies from '../features/landing-page/core-competencies';
// import RecentProjects from './recent-projects';
import AboutMe from '../features/landing-page/about-me';

export default function HomePage() {
	return (
		<>
			<HomeHero />
			{/* <RecentProjects /> */}
			<AboutMe />
			<CoreCompetencies />
		</>
	);
}
