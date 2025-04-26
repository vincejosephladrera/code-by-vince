import ToolsCard from '@/components/tools-card';
import { buttonVariants } from '@/components/ui/button';
import img from '@/assets/images/about-me-img.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import useMobile from '@/hooks/useMobile';

const toolsData = [
	'ReactJS',
	'NextJS',
	'Node.js',
	'Express.js',
	'TanStack libraries',
	'Redux',
	'Typescript',
	'Javascript',
	'PostgreSQL',
	'Vite',
	'AWS (S3, CloudFront)',
	'Git',
];

export default function AboutMe() {
	const { isMobile } = useMobile(768);
	return (
		<>
			<section className='pt-10 sm:pt-20' id='about-me'>
				<div className='container--default md:grid md:grid-cols-2 gap-12'>
					<div className='flex flex-col gap-3 mb-6 lg:mb-0'>
						<p className='home__subheading'>Meet the Developer</p>
						<h2 className='home__heading mb-1'>
							Crafting Solutions in Code for&nbsp;
							<span className='text-primary'>3+ Years</span>
						</h2>
						<p>
							I'm a <strong>Full-Stack Web Developer</strong> with a strong front-end foundation and
							a growing focus on back-end technologies. I build responsive, user-centered web
							applications that drive real results.
						</p>
						<p className='mb-5'>
							Open to freelance and full-time opportunities where I can create impact and continue
							to grow. Let’s connect if you have a project in mind!
						</p>
						<div className='flex'>
							<a
								href='mailto:ladreravincejoseph@gmail.com'
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
							<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
								{toolsData.slice(0, 12).map((name, index) => (
									<ToolsCard index={index} name={name} key={name} />
								))}
							</div>
						)}
						<img
							alt='decorative-cartoon-illustration'
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
