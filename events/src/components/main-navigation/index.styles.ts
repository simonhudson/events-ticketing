import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
	border-bottom: 1px solid #ddd;
`;

export const NavList = styled.ul`
	display: flex;
	gap: ${rem(20)};
	margin: 0;
	padding: 0;
`;

export const NavItem = styled.li`
	list-style: none;
`;

export const NavLink = styled(Link)`
	display: block;
	font-weight: bold;
	padding: ${rem(30)} ${rem(20)};
	position: relative;
	text-decoration: none;
	text-transform: uppercase;

	&.current-page {
		border-bottom: 1px solid orange;

		&:after {
			border-bottom: ${rem(10)} solid orange;
			border-left: ${rem(10)} solid transparent;
			bottom: 0;
			content: '';
			height: 0;
			left: 50%;
			position: absolute;
			transform: translateX(-50%) translateY(50%) rotate(-135deg);
			width: 0;
		}
	}
`;
