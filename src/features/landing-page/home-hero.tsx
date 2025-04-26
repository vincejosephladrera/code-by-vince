import { Button, buttonVariants } from '@/components/ui/button';
import img from '@/assets/images/hero-img.svg';
import SvgComponent from '@/components/hero-interactive-img';

export default function HomeHero() {
	return (
		<>
			<section className='pt-[136px] pb-[40px] md:pb-0 md:max-h-screen border border-body overflow-hidden'>
				<div className='container--default flex flex-col gap-3 items-center text-center relative'>
					<p className='home__subheading'>Welcome! Let’s Build Something Amazing</p>
					<h1 className='text-secondary text-[min(8vw,56px)]  mb-8'>
						Hi I’m <span className='text-primary'>Vince Ladrera</span>
						<br />
						Developer & Problem Solver
					</h1>
					<div className='flex gap-4 flex-col sm:flex-row w-full sm:w-auto md:mb-16'>
						<a
							className={buttonVariants({
								variant: 'default',
								size: 'lg',
							})}
							href='mailto:ladreravincejoseph@gmail.com'
						>
							Let's Build Together
						</a>
						<Button
							size='lg'
							variant='neutral'
							className='cursor-pointer'
							onClick={() => {
								const section = document.getElementById('about-me');
								if (section) {
									const yOffset = -96;
									const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
									section.scrollIntoView({ behavior: 'smooth' });

									window.scrollTo({ top: y, behavior: 'smooth' });
								}
							}}
						>
							Meet the Developer
						</Button>
					</div>
					<div className='flex justify-center relative'>
						<img
							src={img}
							height={998}
							width={297}
							alt='decorative-img'
							className='hidden lg:block w-[80%] h-auto '
						/>
						<SvgComponent className='hidden lg:block absolute top-[5%] left-[15%] scale-[0.5] xl:left-[18%] xl:scale-[0.8]' />
					</div>
				</div>
			</section>
		</>
	);
}
