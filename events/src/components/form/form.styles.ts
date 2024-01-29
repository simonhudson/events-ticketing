import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '../../theme/spacing';
import { palette } from '../../theme/palette';
import { StyledButton } from '../button/index.styles';

export const Form = styled.form`
	text-align: left;
`;

export const FieldRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${rem(20)};
	padding: 0 0 ${rem(30)};
`;

export const FieldItem = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	background: ${palette.primary.brand};
	border: 0;
	border-radius: ${spacingRem.xsm};
	color: ${palette.primary.white};
	font-weight: bold;
	padding: ${spacingRem.sm};
`;

export const Fieldset = styled.fieldset`
	background: #f5f5f5;
	margin: 0 0 ${spacingRem.md};
	padding: ${rem(30)};
`;

export const Legend = styled.legend`
	font-size: ${rem(20)};
	font-weight: bold;
	padding: ${rem(10)};
	background: #fff;
	box-shadow: 0 0 ${rem(10)} #ddd;
`;

export const SubmitInput = styled(StyledButton)``;

export const InvalidField = `
	&[aria-invalid='true'] {
		border: 2px solid ${palette.status.error};
	}
`;
