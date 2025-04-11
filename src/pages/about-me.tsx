import ToolsCard from '@/components/tools-card';
import { buttonVariants } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import img from '@/assets/images/about-me-img.webp';

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
	return (
		<div className='container mx-auto pt-20 px-4 grid grid-cols lg:grid-cols-2 gap-12'>
			<div className='flex flex-col gap-3'>
				<p className='text-primary font-medium'>Get To Know Me</p>
				<h2 className='text-secondary text-[min(8vw,48px)] mb-1'>
					Crafting Solutions in Code for&nbsp;
					<span className='text-primary'>2+ Years</span>
				</h2>
				<p>
					I’m a <strong>Front-End Web Developer</strong> with a growing focus on back-end
					development, dedicated to building and managing responsive websites and web applications
					that enhance user experience and drive product success.
				</p>
				<p className='mb-5'>
					Available for both freelance projects and full-time opportunities where value can be added
					and skills expanded. If there’s a project or position that aligns with this expertise,
					please feel free to reach out!
				</p>
				<div className='flex'>
					<Link
						to={'/'}
						className={buttonVariants({
							variant: 'default',
							size: 'lg',
							className: 'flex-auto grow-0 shrink-0 w-fit',
						})}
					>
						Let’s Build Together
					</Link>
				</div>
			</div>
			<div>
				<h3 className='mb-6'>Tools and Skill sets</h3>
				<div className='grid grid-cols sm:grid-cols-2 xl:grid-cols-3 gap-4'>
					{toolsData.slice(0, 12).map((name, index) => (
						<ToolsCard index={index} name={name} />
					))}
				</div>
				<img src={img} width={616} height={289} className='w-full h-auto' />
			</div>
		</div>
	);
}
