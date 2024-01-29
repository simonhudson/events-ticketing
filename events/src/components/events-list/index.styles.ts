import styled from 'styled-components';
import { rem } from 'polished';

export const EventsList = styled.ul``;

export const EventsItem = styled.li`
	border-bottom: 1px solid #ccc;
	list-style: none;
	padding: ${rem(16)} 0;
`;

export const EventName = styled.span`
	display: block;
	font-size: ${rem(16)};
	font-weight: bold;
	margin-bottom: ${rem(8)};
`;
