import { buttonVariants } from './ui/button';
import { Link } from '@tanstack/react-router';

export default function Footer() {
	return (
		<div className='bg-neutral-950 py-20 text-white '>
			<div className='container mx-auto px-4'>
				<div className='grid gap-y-10 md:grid-cols-2 md:max-lg:gap-x-20 lg:grid-cols-12'>
					<div className='lg:col-span-4'>
						<h2 className='font-bold text-4xl mb-6'>Ready to Bring Your Ideas to Life?</h2>
						<p className='mb-10'>
							Let’s turn your vision into an engaging digital experience that delivers results.
						</p>
						<Link
							to={'/'}
							className={buttonVariants({
								variant: 'default',
								size: 'lg',
								className: 'w-full lg:w-fit',
							})}
						>
							Let’s Build Together
						</Link>
					</div>
					<div className='grid xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:col-span-8 lg:flex lg:justify-around'>
						<div className='mb-10'>
							<p className='font-bold mb-6'>Explore</p>
							<div className='grid grid-cols-2 gap-6 xs:grid-cols-1'>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Projects</span>
								<span className='text-gray-500 opacity-50 pointer-events-none'>About</span>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Blogs</span>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Resources</span>
							</div>
						</div>
						<div className='mb-10'>
							<p className='font-bold mb-6'>Socials</p>
							<div className='grid grid-cols-2 gap-6 xs:grid-cols-1 lg:flex lg:flex-col'>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Facebook</span>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Twitter</span>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Instagram</span>
								<span className='text-gray-500 opacity-50 pointer-events-none'>Linkedin</span>
							</div>
						</div>
						<div>
							<div className='grid gap-6 sm:col-span-2 lg:col-span-2'>
								<p className='font-bold'>Get in Touch</p>
								<a href='tel:+639457012999'>09457012999</a>
								<a href='ladreravincejoseph@gmail.com'>ladreravincejoseph@gmail.com</a>
							</div>
						</div>
					</div>
				</div>
				<hr className='my-10 lg:my-20' />
				<span className='mr-auto'>© 2024 Code by Vince. All Rights Reserved</span>
			</div>
		</div>
	);
}
