import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const Route = createRootRoute({
	component: RouteComponent,
});

function LoadingScreen() {
	return (
		<div className='h-screen w-screen text-white pt-[96px] flex items-center justify-center'>
			<span className='loader'></span>
		</div>
	);
}

function RouteComponent() {
	const { status } = useRouterState();

	const isPending = status === 'pending';

	return (
		<>
			<Header />
			{isPending ? <LoadingScreen /> : <Outlet />}
			<Footer />
			<TanStackRouterDevtools position='bottom-left' />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}
