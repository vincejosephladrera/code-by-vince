import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Topbar from '@/components/Topbar';
import Footer from '@/components/footer';
import Preloader from '@/features/landing-page/Preloader';

export const Route = createRootRoute({
	component: RouteComponent,
});

// function LoadingScreen() {
// 	return (
// 		<div className='h-screen w-screen text-white pt-[96px] flex items-center justify-center'>
// 			<span className='loader'></span>
// 		</div>
// 	);
// }

function RouteComponent() {
	const location = useLocation();

	const isHome = location.pathname === '/';

	return (
		<>
			<Topbar />

			{isHome && <Preloader />}
			<main className='pt-[96px]'>
				<Outlet />
			</main>
			{/* {isPending ? <LoadingScreen /> : <Outlet />} */}
			<Footer />
			<TanStackRouterDevtools position='bottom-left' />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
}
