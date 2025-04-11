import HomeHero from './home-hero';
import Expertise from './expertise';
import RecentProjects from './recent-projects';
import AboutMe from './about-me';

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<RecentProjects />
			<AboutMe />
			<Expertise />
		</>
	);
}
