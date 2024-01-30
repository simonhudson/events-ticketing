import styled from 'styled-components';
import { rem } from 'polished';
import { baseInputStyles } from '../input/index.styles';

export const StyledTextArea = styled.textarea`
	${baseInputStyles}
	height: ${rem(100)};
	max-width: 100%;
`;
