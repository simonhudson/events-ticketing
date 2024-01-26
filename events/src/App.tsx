import { Link, Outlet } from 'react-router-dom';

export default function App() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link> <Link to="/events">Events</Link>
			</nav>

			<Outlet />
		</>
	);
}
