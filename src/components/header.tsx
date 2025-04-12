import { HeaderLogoIcon } from '@/assets/icons/icons';
import useCustomLink from '@/hooks/useCustomLink';

export default function Header() {
	const { isHovered, CustomLink } = useCustomLink();

	return (
		<header className=' border-b-neutral-200 bg-white border-b h-[96px] w-screen border-solid flex items-center fixed top-0 left-0 z-50'>
			<div className='flex container mx-auto px-4 '>
				<CustomLink className='mr-auto' to={'/'}>
					<HeaderLogoIcon variant={isHovered ? 'secondary' : 'primary'} />
				</CustomLink>
			</div>
		</header>
	);
}
