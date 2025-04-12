import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const commonClassName =
	'py-2 sm:py-4 gap-0 text-center font-extrabold text-black border-2 border-black rounded-md h-full flex justify-center whitespace-nowrap';

export default function ToolsCard({ index = 1, name }: { index: number; name: string }) {
	if (index % 2 === 0) {
		return (
			<Card className={cn(commonClassName, 'bg-green-50')}>
				<CardContent>{name}</CardContent>
			</Card>
		);
	}

	return (
		<Card className={cn(commonClassName, 'bg-orange-50')}>
			<CardContent>{name}</CardContent>
		</Card>
	);
}
