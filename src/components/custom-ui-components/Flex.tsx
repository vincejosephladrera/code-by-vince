import { cn } from '@/lib/utils';
import React from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	direction?: 'row' | 'col';
	justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
	align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	gap?: string;
	wrap?: boolean;
	children: React.ReactNode;
	className?: string;
}

const directionMap = {
	row: 'flex-row',
	col: 'flex-col',
};

const justifyMap = {
	start: 'justify-start',
	center: 'justify-center',
	end: 'justify-end',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly',
};

const alignMap = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline',
};

const Flex: React.FC<FlexProps> = ({
	direction = 'row',
	justify = 'start',
	align = 'center',
	gap = '',
	wrap = false,
	children,
	className = '',
	...rest
}) => {
	const classes = [
		'flex',
		directionMap[direction],
		justifyMap[justify],
		alignMap[align],
		wrap ? 'flex-wrap' : '',
		gap ? `gap-${gap}` : '',
	];

	return (
		<div className={cn('flex', ...classes, className)} {...rest}>
			{children}
		</div>
	);
};

export default Flex;
