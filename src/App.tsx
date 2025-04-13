import { RouterProvider, createRouter } from '@tanstack/react-router';
import { createHashHistory } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'swiper/swiper-bundle.css';

const hashHistory = createHashHistory();

const router = createRouter({ history: hashHistory, routeTree });
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
