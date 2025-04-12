import ExpertiseCard from '@/components/expertise-card';
import {
	CodeIcon,
	StackIcon,
	LightBulbIcon,
	BookIcon,
	CloudIcon,
	TargetIcon,
} from '@/assets/icons/icons';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';

const expertiseData = [
	{
		icon: CodeIcon,
		title: 'Front-End Mastery',
		description: 'Creating responsive, user-centered interfaces with React and Next.js.',
	},
	{
		icon: StackIcon,
		title: 'Full-Stack Potential',
		description: 'Building back-end skills for a well-rounded development approach.',
	},
	{
		icon: LightBulbIcon,
		title: 'Creative Problem Solver',
		description: 'Tackling challenges with solutions that bring your vision to life.',
	},
	{
		icon: BookIcon,
		title: 'Committed to Growth',
		description: 'Up-to-date with the latest technologies for fresh, effective results.',
	},
	{
		icon: CloudIcon,
		title: 'Collaborative Partner',
		description: 'Clear, consistent communication to keep you informed.',
	},
	{
		icon: TargetIcon,
		title: 'Quality-Oriented',
		description: 'Dedicated to delivering polished, high-quality outcomes.',
	},
];

export default function Expertise() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function checkIfMobile() {
			if (window.innerWidth < 640) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}

		checkIfMobile();

		window.addEventListener('resize', checkIfMobile);

		return () => {
			window.removeEventListener('resize', checkIfMobile);
		};
	}, [isMobile]);

	return (
		<div className='bg-primary'>
			<div className='container mx-auto py-20 px-4 text-center text-white'>
				<p className='font-medium text-lg mb-3'>Expertise</p>
				<h2 className=' font-bold text-[min(8vw,48px)] mb-12'>Why Choose Me as Your Developer</h2>
				{isMobile ? (
					<Swiper spaceBetween={24} slidesPerView={1.4}>
						{expertiseData.map(({ title, description, icon }) => {
							return (
								<SwiperSlide>
									<ExpertiseCard icon={icon()} title={title} description={description} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				) : (
					<div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{expertiseData.map(({ title, description, icon }) => {
							return <ExpertiseCard icon={icon()} title={title} description={description} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
}
