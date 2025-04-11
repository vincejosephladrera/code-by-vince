import { Link, LinkProps as RouterLinkProps } from '@tanstack/react-router';
import { useState, ReactNode } from 'react';

type LinkProps = RouterLinkProps & React.HTMLAttributes<HTMLAnchorElement>;

type UseCustomLinkReturn = {
	isHovered: boolean;
	CustomLink: (props: LinkProps) => ReactNode;
};

export default function useCustomLink(): UseCustomLinkReturn {
	const [isHovered, setIsHovered] = useState(false);

	function CustomLink(props: LinkProps & { disabled?: boolean }) {
		const { disabled } = props;

		if (disabled) {
			return <p className='text-muted pointer-events-none'></p>;
		}

		return (
			<Link
				{...props}
				onMouseEnter={(e) => {
					props.onMouseEnter?.(e);
					setIsHovered(true);
				}}
				onMouseLeave={(e) => {
					props.onMouseLeave?.(e);
					setIsHovered(false);
				}}
			>
				{props.children}
			</Link>
		);
	}

	return {
		isHovered,
		CustomLink,
	};
}
