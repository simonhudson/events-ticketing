import styled from 'styled-components';
import { rem } from 'polished';

export const TicketsList = styled.ul``;

export const TicketsItem = styled.li`
	border-bottom: 1px solid #ccc;
	list-style: none;
	padding: ${rem(20)} 0 0;

	&:first-of-type {
		padding-top: 0;
	}
`;

export const TicketType = styled.span`
	font-weight: bold;
`;

export const TicketDetailsItem = styled.span`
	display: block;
`;
