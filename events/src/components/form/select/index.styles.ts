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

/*
--bs-form-select-bg-img: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e);
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-body-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--bs-body-bg);
    background-image: var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    */
