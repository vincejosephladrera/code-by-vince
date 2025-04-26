import { useState, useEffect } from 'react';

function useMobile(breakpoint: number) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		function checkIfMobile() {
			if (window.innerWidth < breakpoint) {
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
	}, [isMobile, breakpoint]);

	return { isMobile };
}

export default useMobile;
