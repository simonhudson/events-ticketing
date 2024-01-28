import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
	border: 1px solid transparent;
	margin: 0 0 ${rem(16)};
	padding: ${rem(16)};

	p:last-of-type {
		margin: 0;
	}

	&[data-alert-type='success'] {
		background: #d1e7dd;
		border-color: #a3cfbb;
	}

	&[data-alert-type='danger'] {
		background: #f1aeb5;
		border-color: #f1aeb5;
	}
`;
