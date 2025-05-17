import { cn } from '@/lib/utils';

function Container({ children, className }: React.HtmlHTMLAttributes<HTMLDivElement>) {
	return <div className={cn('container mx-auto', className)}>{children}</div>;
}

export default Container;
