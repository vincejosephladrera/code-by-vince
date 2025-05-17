import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headerVariants = cva('leading-[1.8]', {
	variants: {
		size: {
			default: 'text-5xl',
		},
		variantColor: {
			black: 'text-neutral-950',
		},
		variantWeight: {
			default: 'font-bold',
		},
	},
	defaultVariants: {
		size: 'default',
		variantColor: 'black',
		variantWeight: 'default',
	},
});

interface HeaderProp
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headerVariants> {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function Header({
	as,
	className,
	children,
	size,
	variantColor,
	variantWeight,
	...props
}: HeaderProp) {
	const Component = as;

	return (
		<Component
			className={cn(headerVariants({ size, variantColor, variantWeight }), className)}
			{...props}
		>
			{children}
		</Component>
	);
}

export default Header;
