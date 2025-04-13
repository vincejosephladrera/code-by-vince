import { Button, buttonVariants } from '@/components/ui/button';

export default function HomeHero() {
	return (
		<>
			<section className='pt-[176px] lg:h-screen w-screen border border-body pb-10 sm:pb-20'>
				<div className='container--default flex flex-col gap-3 items-center text-center'>
					<p className='home__subheading'>Welcome! Let’s Build Something Amazing</p>
					<h1 className='text-secondary text-[min(8vw,56px)]  mb-8'>
						Hi I’m <span className='text-primary'>Vince Ladrera</span>
						<br />
						Developer & Problem Solver
					</h1>
					<div className='flex gap-4 flex-col sm:flex-row w-full sm:w-auto'>
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
							Get to Know Me
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
