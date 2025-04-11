import { buttonVariants } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function HomeHero() {
	return (
		<>
			<div className='pt-[176px] container mx-auto text-center relative lg:h-screen w-screen px-4 mb-16'>
				<div className='flex flex-col gap-3 items-center'>
					<p className='text-primary font-medium text-lg'>Welcome! Let’s Build Something Amazing</p>
					<h1 className='text-secondary text-[min(8vw,56px)]  mb-8'>
						Hi I’m <span className='text-primary'>Vince Ladrera</span>
						<br />
						Developer & Problem Solver
					</h1>
					<div className='flex gap-4 flex-col sm:flex-row w-full sm:w-auto'>
						<Link
							to={'/'}
							className={buttonVariants({
								variant: 'default',
								size: 'lg',
							})}
						>
							Let’s Build Together
						</Link>
						<Link
							to={'/'}
							className={buttonVariants({
								variant: 'neutral',
								size: 'lg',
							})}
						>
							Get to Know Me
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
