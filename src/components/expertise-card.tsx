import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

export default function ExpertiseCard({
	icon,
	title,
	description,
}: {
	icon?: React.JSX.Element;
	title: string;
	description: string;
}) {
	return (
		<Card className='text-left gap-4'>
			<CardHeader>
				<div className='mb-6'>{icon}</div>
				<CardTitle className='font-extrabold text-2xl text-primary'>{title}</CardTitle>
			</CardHeader>
			<CardContent className='text-left'>
				<p>{description}</p>
			</CardContent>
		</Card>
	);
}
