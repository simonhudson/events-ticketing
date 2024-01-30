import styled from 'styled-components';
import { rem } from 'polished';

export const StyledButton = styled.button`
	align-items: center;
	background: #0d6efd;
	border-radius: ${rem(4)};
	border: 3px solid transparent;
	color: #fff;
	display: flex;
	font-size: ${rem(16)};
	padding: ${rem(10)};
	text-decoration: none;

	&:hover {
		background: #0a53be;
	}

	&:focus-visible {
		outline: 6px solid orange;
		text-decoration: underline;
	}

	&[data-variant='secondary'] {
		background: transparent;
		border-color: #0d6efd;
		color: #0d6efd;
	}
`;
