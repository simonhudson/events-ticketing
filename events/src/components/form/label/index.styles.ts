import styled from 'styled-components';
import { rem } from 'polished';

export const Label = styled.label`
	display: block;
	font-weight: bold;
	padding: 0 0 ${rem(4)};
`;

export const Description = styled.span`
	display: block;
	font-size: ${rem(14)};
	font-weight: normal;
	padding: 0 0 ${rem(4)};
`;

export const ErrorText = styled.span`
	color: #ff0033;
	display: block;
	font-size: ${rem(14)};
	padding: 0 0 ${rem(4)};
`;

export const RequiredPrompt = styled.span`
	font-size: ${rem(12)};
	font-weight: normal;
`;
