import { useLocation } from 'react-router-dom';
import { StyledNav, NavList, NavItem, NavLink } from './index.styles';
import { Wrap } from '../../theme/layout';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/events', label: 'Events' },
];

export const MainNavigation = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<StyledNav>
			<Wrap>
				<NavList>
					{navItems.map((item) => (
						<NavItem key={item.href}>
							<NavLink className={pathname === item.href ? 'current-page' : undefined} to={item.href}>
								{item.label}
							</NavLink>
						</NavItem>
					))}
				</NavList>
			</Wrap>
		</StyledNav>
	);
};
