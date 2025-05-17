import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva('py-4', {
	variants: {
		variant: {
			default: 'md:py-20',
			compact: 'md:py-8',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface SectionProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof sectionVariants> {}

function Section({ children, className, variant, ...props }: SectionProps) {
	return (
		<section className={cn(sectionVariants({ variant }), className)} {...props}>
			{children}
		</section>
	);
}

export default Section;
