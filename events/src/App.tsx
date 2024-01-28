import { Link, Outlet } from 'react-router-dom';
import { theme } from '../src/theme';
import { Wrap } from './theme/layout';
import { GlobalStyles } from '../src/theme/global.styles';
import { ThemeProvider } from 'styled-components';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Wrap>
				<nav>
					<Link to="/">Home</Link> <Link to="/events">Events</Link>
				</nav>
				<main>
					<Outlet />
				</main>
			</Wrap>
		</ThemeProvider>
	);
}
