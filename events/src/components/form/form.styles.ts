import styled from 'styled-components';
import { spacingRem } from '../../theme/spacing';
import { palette } from '../../theme/palette';
import { StyledButton } from '../button/index.styles';

export const Form = styled.form`
	text-align: left;
`;

export const FieldRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${spacingRem.md};
	padding: 0 0 ${spacingRem.md};
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
	margin: 0 0 ${spacingRem.md};
`;

export const Legend = styled.legend`
	font-weight: bold;
`;

export const SubmitInput = styled(StyledButton)``;

export const InvalidField = `
	&[aria-invalid='true'] {
		border: 2px solid ${palette.status.error};
	}
`;
