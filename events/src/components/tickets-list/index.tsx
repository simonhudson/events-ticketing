import { TicketsList as StyledTicketsList, TicketsItem, TicketDetailsItem } from './index.styles';
import { TicketsListProps } from './ticketsList';
import { Button } from '../button';
import type { Ticket } from '../../../../types/ticket';

export const TicketsList = ({ tickets, showCta }: TicketsListProps) => {
	return (
		<>
			<StyledTicketsList>
				{!!tickets &&
					tickets.map((ticket: Ticket, index: number) => {
						return (
							<TicketsItem key={index}>
								<div>
									<TicketDetailsItem>{ticket.type}</TicketDetailsItem>
									{ticket.info && <TicketDetailsItem>{ticket.info}</TicketDetailsItem>}
									<TicketDetailsItem>Price: &pound;{ticket.price?.toFixed(2)}</TicketDetailsItem>
									<TicketDetailsItem>
										Booking fee: &pound;{ticket.booking_fee?.toFixed(2)}
									</TicketDetailsItem>
								</div>
								<div>
									{showCta &&
										(ticket.is_available ? (
											<Button
												label="Buy tickets"
												onClick={() => alert('User is redirected to ticketing merchant')}
											/>
										) : (
											<strong>Not available</strong>
										))}
								</div>
							</TicketsItem>
						);
					})}
			</StyledTicketsList>
		</>
	);
};
