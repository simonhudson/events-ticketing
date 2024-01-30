import styled from 'styled-components';
import { rem } from 'polished';
import { spacingRem } from '../../../theme/spacing';
import { palette } from '../../../theme/palette';
import { InvalidField } from '../form.styles';

export const StyledTextArea = styled.textarea`
	border: 1px solid ${palette.primary.grey};
	border-radius: ${spacingRem.xsm};
	box-sizing: border-box;
	height: ${rem(100)};
	margin: 0 0 ${spacingRem.xsm};
	max-width: 100%;
	padding: ${spacingRem.sm};

	${InvalidField}
`;
