import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '../../../theme/spacing';
import { palette } from '../../../theme/palette';
import { font } from '../../../theme/font';

export const Label = styled.label`
	display: block;
	font-family: ${font.sansSerif};
	font-weight: bold;
	padding: 0 0 ${spacingRem.xsm};
`;

export const Description = styled.span`
	display: block;
	font-family: ${font.sansSerif};
	font-size: ${rem(14)};
	font-weight: normal;
	padding: 0 0 ${spacingRem.xsm};
`;

export const ErrorText = styled.span`
	color: ${palette.status.error};
	display: block;
	font-family: ${font.sansSerif};
	font-size: ${rem(14)};
	padding: 0 0 ${spacingRem.xsm};
`;

export const RequiredPrompt = styled.span`
	font-size: ${rem(12)};
	font-weight: normal;
`;
