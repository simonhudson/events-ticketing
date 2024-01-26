export type TicketCategory = {
	category_id: string;
	price: number;
	booking_fee?: number;
	is_available: boolean;
};

export type Ticket = {
	id: string;
	event_id: string;
	categories: TicketCategory[];
};
