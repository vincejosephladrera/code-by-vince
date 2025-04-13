import { useState, useEffect } from 'react';
import ToolsCard from '@/components/tools-card';
import { buttonVariants } from '@/components/ui/button';
import img from '@/assets/images/about-me-img.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

const toolsData = [
	'Vite',
	'NextJS',
	'ReactJS',
	'Tanstack Router',
	'Tanstack Query',
	'Redux',
	'Redux Toolkit',
	'Typescript',
	'Javascript',
	'NodeJS',
	'ExpressJS',
	'Ruby on Rails',
];

export default function AboutMe() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function checkIfMobile() {
			if (window.innerWidth < 768) {
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
		<>
			<section className='pt-10 sm:pt-20' id='about-me'>
				<div className='container--default md:grid md:grid-cols-2 gap-12'>
					<div className='flex flex-col gap-3 mb-6 lg:mb-0'>
						<p className='home__subheading'>Get To Know Me</p>
						<h2 className='home__heading mb-1'>
							Crafting Solutions in Code for&nbsp;
							<span className='text-primary'>2+ Years</span>
						</h2>
						<p>
							I’m a <strong>Front-End Web Developer</strong> with a growing focus on back-end
							development, dedicated to building and managing responsive websites and web
							applications that enhance user experience and drive product success.
						</p>
						<p className='mb-5'>
							Available for both freelance projects and full-time opportunities where value can be
							added and skills expanded. If there’s a project or position that aligns with this
							expertise, please feel free to reach out!
						</p>
						<div className='flex'>
							<a
								href=''
								className={buttonVariants({
									variant: 'default',
									size: 'lg',
									className: 'flex-auto grow-0 shrink-0 w-fit',
								})}
							>
								Let’s Build Together
							</a>
						</div>
					</div>
					<div className='relative z-0'>
						<h3 className='mb-6'>The Stack Behind the Magic</h3>
						{isMobile ? (
							<>
								<Swiper spaceBetween={16} slidesPerView={1.5} className='mb-6'>
									{toolsData.slice(0, 6).map((name, index) => (
										<SwiperSlide key={name}>
											<ToolsCard index={index} name={name} />
										</SwiperSlide>
									))}
								</Swiper>
								<Swiper spaceBetween={16} slidesPerView={1.5}>
									{toolsData.slice(6, 12).map((name, index) => (
										<SwiperSlide key={name}>
											<ToolsCard index={index} name={name} />
										</SwiperSlide>
									))}
								</Swiper>
							</>
						) : (
							<div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4'>
								{toolsData.slice(0, 12).map((name, index) => (
									<ToolsCard index={index} name={name} key={name} />
								))}
							</div>
						)}
						<img
							src={img}
							width={616}
							height={289}
							className='w-full h-auto md:max-lg:absolute bottom-0 left-0'
						/>
					</div>
				</div>
			</section>
		</>
	);
}
