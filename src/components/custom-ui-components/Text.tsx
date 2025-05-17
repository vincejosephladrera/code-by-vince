import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
	variants: {
		size: {
			default: 'text-base',
			md: 'text-lg',
		},
		variantColor: {
			default: 'text-neutral-950',
			primary: 'text-primary',
			secondary: 'text-secondary',
		},
	},
	defaultVariants: {
		size: 'default',
		variantColor: 'default',
	},
});

interface TextProps
	extends React.HTMLAttributes<HTMLParagraphElement>,
		VariantProps<typeof textVariants> {}

function Text({ children, className, size, variantColor, ...props }: TextProps) {
	return (
		<p className={cn(textVariants({ size, variantColor }), className, '')} {...props}>
			{children}
		</p>
	);
}

export default Text;
