import styled from 'styled-components';
import { media } from './media';
import { palette } from './palette';

export const Wrap = styled.div`
	margin: 0 auto;
	width: 90%;

	&:first-of-type {
		height: 100%;
	}

	${media.tabletLandscape(`
		width: 60%;
	`)};
`;

export const VisuallyHidden = styled.span`
	border: 0;
	clip: rect(0 0 0 0);
	color: ${palette.primary.white};
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
`;
