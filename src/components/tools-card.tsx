import { Card, CardContent } from '@/components/ui/card';

export default function ToolsCard({ index = 1, name }: { index: number; name: string }) {
	if (index % 2 === 0) {
		return (
			<Card className='tools-card bg-green-50'>
				<CardContent className='px-4 text-sm sm:text-xs lg:text-sm '>{name}</CardContent>
			</Card>
		);
	}

	return (
		<Card className='tools-card bg-orange-50'>
			<CardContent className='px-4 text-sm sm:text-xs lg:text-sm '>{name}</CardContent>
		</Card>
	);
}
