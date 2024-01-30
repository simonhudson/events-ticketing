import type { Ticket } from '../../types/ticket';

export type TicketsListProps = {
	tickets: Ticket[];
	showCta?: boolean;
};
