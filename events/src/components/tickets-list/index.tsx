import { TicketsList as StyledTicketsList, TicketsItem, TicketType, TicketDetailsItem } from './index.styles';
import { TicketsListProps } from './ticketsList';
import type { Ticket } from '../../../../types/ticket';

export const TicketsList = ({ tickets }: TicketsListProps) => {
	return (
		<>
			<StyledTicketsList>
				{!!tickets &&
					tickets.map((ticket: Ticket, index: number) => {
						return (
							<TicketsItem key={index}>
								<TicketType>{ticket.type}</TicketType>
								<p>
									{ticket.info && <TicketDetailsItem>Info: {ticket.info}</TicketDetailsItem>}
									<TicketDetailsItem>Price: &pound;{ticket.price?.toFixed(2)}</TicketDetailsItem>
									<TicketDetailsItem>
										Booking fee: &pound;{ticket.booking_fee?.toFixed(2)}
									</TicketDetailsItem>
								</p>
							</TicketsItem>
						);
					})}
			</StyledTicketsList>
		</>
	);
};
