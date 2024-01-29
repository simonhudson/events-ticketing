import styled from 'styled-components';
import { rem } from 'polished';

export const Wrapper = styled.div`
	background-color: #fff;
	background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
	background-position: right 0.75rem center;
	background-repeat: no-repeat;
	background-size: 16px 12px;
	border-radius: ${rem(2)};
	border: 1px solid #707070;
	color: #5d5d5d;
	display: block;
	position: relative;
	width: 100%;

	&:after {
		border-right: 3px solid #5d5d5d;
		border-bottom: 3px solid #5d5d5d;
		content: '';
		height: ${rem(8)};
		position: absolute;
		right: ${rem(8)};
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
		transition: transform 0.3s linear;
		width: ${rem(8)};
	}

	&[data-is-open='true'] {
		&:after {
			transform: translateY(-50%) rotate(-135deg);
		}
	}
`;

export const StyledSelect = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background: 0;
	border: 0;
	padding: ${rem(10)};
	width: 100%;
`;
