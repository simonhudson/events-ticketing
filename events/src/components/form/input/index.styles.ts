import styled from 'styled-components';
import { rem } from 'polished';
import { InvalidField } from '../form.styles';

export const baseInputStyles = `
	border: 1px solid #aaa;
	border-radius: ${rem(4)};
	margin: 0 0 ${rem(4)};
	padding: ${rem(12)};

	${InvalidField}
`;

export const InputField = styled.input`
	${baseInputStyles}
`;
