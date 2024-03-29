import styled from 'styled-components';
import { rem } from 'polished';
import { media } from '../../theme/media';
import { StyledButton } from '../button/index.styles';

export const Form = styled.form`
	padding: ${rem(30)} 0;
	text-align: left;
`;

export const FieldRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: ${rem(20)};
	padding: 0 0 ${rem(30)};

	&:last-of-type {
		padding-bottom: 0;
	}
`;

export const FieldItem = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	${media.tabletLandscape(`
		flex-grow: 0.33;
	`)}
`;

export const Fieldset = styled.fieldset`
	background: #f5f5f5;
	border: 0;
	margin: 0 0 ${rem(32)};
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
		border: 2px solid #ff0033;
	}
`;
