import styled from 'styled-components';
import { rem } from 'polished';
import { BASE_SIZE, spacingRem } from '../../theme/spacing';
import { font } from '../../theme/font';

export const StyledButton = styled.button`
	align-items: center;
	background: #0d6efd;
	border-radius: ${spacingRem.xsm};
	border: 3px solid transparent;
	color: #fff;
	display: flex;
	font-family: ${font.sansSerif};
	font-size: ${rem(BASE_SIZE)};
	padding: ${spacingRem.sm};
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
