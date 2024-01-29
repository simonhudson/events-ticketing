import { Outlet } from 'react-router-dom';
import { theme } from '../src/theme';
import { Wrap } from './theme/layout';
import { GlobalStyles } from '../src/theme/global.styles';
import { ThemeProvider } from 'styled-components';
import { MainNavigation } from './components/main-navigation';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<MainNavigation />
			<Wrap>
				<main>
					<Outlet />
				</main>
			</Wrap>
		</ThemeProvider>
	);
}
