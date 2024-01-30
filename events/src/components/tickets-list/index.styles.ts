import styled from 'styled-components';
import { rem } from 'polished';

export const TicketsList = styled.ul``;

export const TicketsItem = styled.li`
	align-items: center;
	border-bottom: 1px solid #ccc;
	display: flex;
	justify-content: space-between;
	list-style: none;
	padding: ${rem(20)} 0 0;

	&:first-of-type {
		padding-top: 0;
	}
`;

export const TicketDetailsItem = styled.span`
	display: block;
	margin-bottom: ${rem(8)};

	&:first-of-type {
		font-weight: bold;
	}
`;
