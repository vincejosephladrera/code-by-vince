import HomeHero from '../features/landing-page/home-hero';
import CoreCompetencies from '../features/landing-page/core-competencies';

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
