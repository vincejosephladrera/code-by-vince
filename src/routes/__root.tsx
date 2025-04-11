import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const Route = createRootRoute({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<TanStackRouterDevtools position='bottom-left' />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}
