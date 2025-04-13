import ExpertiseCard from '@/components/expertise-card';
import {
	CodeIcon,
	StackIcon,
	LightBulbIcon,
	BookIcon,
	CloudIcon,
	TargetIcon,
} from '@/assets/icons/icons';

import imgLeft from '@/assets/images/core-competencies-left.svg';
import imgRight from '@/assets/images/core-competencies-right.svg';

import { Card, CardContent } from '@/components/ui/card';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { buttonVariants } from '@/components/ui/button';

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

export default function CoreCompetencies() {
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
		<section className='bg-primary py-10 sm:py-20'>
			<div className='container--default text-center text-white'>
				<p className='home__subheading--white mb-3'>Core Competencies</p>
				<h2 className='home__heading--white mb-12'>Why Choose Me as Your Developer</h2>
				{isMobile ? (
					<Swiper spaceBetween={24} slidesPerView={1.4} className='mb-12'>
						{expertiseData.map(({ title, description, icon }) => {
							return (
								<SwiperSlide>
									<ExpertiseCard icon={icon()} title={title} description={description} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				) : (
					<div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
						{expertiseData.map(({ title, description, icon }) => {
							return <ExpertiseCard icon={icon()} title={title} description={description} />;
						})}
					</div>
				)}
				<Card className='bg-orange-50 py-6 overflow-hidden relative'>
					<img
						alt='decorative-cartoon-illustration'
						src={imgLeft}
						className='core-competency-section__left-thumb'
					/>
					<CardContent className='sm:max-lg:text-left sm:pr-[42%] md:pr-[33%] lg:pr-[24px]'>
						<h3 className='mb-3 font-extrabold leading-snug text-2xl'>
							Ready to Bring Your Ideas to Life ?
						</h3>
						<p className='mb-4 leading-relaxed text-text-body'>
							Let’s turn your vision into an engaging digital experience that delivers results.
						</p>
						<a
							className={buttonVariants({
								variant: 'default',
								size: 'lg',
							})}
							href='mailto:ladreravincejoseph@gmail.com'
						>
							Let's Build Together
						</a>
					</CardContent>
					<img
						alt='decorative-cartoon-illustration'
						src={imgRight}
						className='core-competency-section__right-thumb'
					/>
				</Card>
			</div>
		</section>
	);
}
