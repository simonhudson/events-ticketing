import styled from 'styled-components';
import { rem } from 'polished';

export const StyledSelect = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);
	background-position: right 0.75rem center;
	background-repeat: no-repeat;
	background-size: 16px 12px;
	border-radius: ${rem(2)};
	border: 1px solid #707070;
	color: #5d5d5d;
	display: block;
	padding: ${rem(10)};
	width: 100%;
`;
