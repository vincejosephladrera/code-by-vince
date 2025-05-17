import Logo from '@/components/custom-ui-components/Logo';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Loading() {
	const animationVariants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
			display: 'none',
			transition: {
				opacity: {
					duration: 1.5,
					delay: 3,
				},
				display: {
					delay: 3 + 1.5,
				},
			},
		},
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		// Re-enable scroll after animation
		const timeout = setTimeout(() => {
			document.body.style.overflow = '';
		}, 4500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<motion.div
			initial='visible'
			variants={animationVariants}
			animate={['hidden']}
			className='fixed h-screen w-screen top-0 left-0 z-50 bg-neutral-950 flex items-center justify-center'
		>
			<Logo />
		</motion.div>
	);
}

export default Loading;
